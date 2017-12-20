from flask import Flask, render_template, request, jsonify, redirect, url_for
from flask_login import LoginManager, login_required, login_user, current_user, logout_user
from flask_sqlalchemy import SQLAlchemy
import requests
from os import environ, urandom


app = Flask(__name__)
app.secret_key = urandom(24)
db_uri = "postgres://jewobnjxfznftb:062f6ed9eecd5b54c782c9c82252d6c4790d77e9f564096dbb88bd3865507d5e@ec2-54-235-123-153.compute-1.amazonaws.com:5432/d6j29morvgre4h"
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Create our database model
class User(db.Model):
	__tablename__ = "users"
	id = db.Column(db.Integer, primary_key=True)
	username = db.Column(db.String(120), unique=True)
	password = db.Column(db.String(120))
	isGuest = db.Column(db.Boolean())
	notifications = db.Column(db.String(120))
	isAdmin = db.Column(db.Boolean())

	def __init__(self, username, password, isGuest, isAdmin, notifications):
		self.username = username
		self.password = password
		self.isGuest = isGuest
		self.isAdmin = isAdmin
		self.notifications = notifications

	def __repr__(self):
		if self.isAdmin:
			return '<Admin {}>'.format(self.username)
		else:
			return '<User {}>'.format(self.username)

	def is_active(self):
		return True

	def get_id(self):
		return self.username

	def is_authenticated(self):
		return self.authenticated

	def is_anonymous(self):
		return False

class EventSchedule(db.Model):
	__tablename__ = "events"
	id = db.Column(db.Integer, primary_key=True)
	day = db.Column(db.String(120), unique=True)
	full_date = db.Column(db.String(120), unique=True)
	event = db.Column(db.String(120))
	orgs = db.Column(db.String(220))

	def __init__(self, day, full_date, event, orgs):
		self.day = day
		self.full_date = full_date
		self.event = event
		self.orgs = orgs

	def __repr__(self):
		return "<{} event>".format(self.day)

login_manager = LoginManager()
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_id):
	return User.query.filter_by(username=user_id).first()

@login_manager.unauthorized_handler
def unauthorized():
	return "You are not logged in!"

def send_simple_message(signupUserAdmin):
	r = requests.post(
		'https://api.mailgun.net/v3/vizionary-dev.xyz/messages',
		auth=('api', 'key-8e60a5b2a29f6d59869db87cb87caee1'),
		data={"from": "Zenmark Mail <postmaster@vizionary-dev.xyz>",
			"to": "wackydawg411@gmail.com",
			"subject": "New admin registration",
			"text": "Hi Drew. \nThis is a notification to inform you that a new user named '{}' has signed up as an admin. If this looks right, you don't need to do anything. Otherwise you will need to log in to Zenmark and correct this. That is your action item. Verify this login. Thanks! \n\n The Zenmark Team. :-)".format(signupUserAdmin)}
		)
	return r.status_code

@app.route('/', methods=["GET", "POST"])
def index():
	if request.method == 'POST':
		new_user = request.form['signupName'].lower()
		new_pw = request.form['signupPass']
		newGuest = False
		newAdmin = False
		# Check if any of the boxes were ticked
		try:
			checkifGuest = request.form['guestCheck']
			if checkifGuest == "true":
				newGuest = True
		except:
			pass
		try:
			checkifAdmin = request.form['adminCheck']
			if checkifAdmin == "true":
				print(send_simple_message(request.form['signupName']))
				newAdmin = True
		except:
			pass
		registerUser = User(new_user, new_pw, newGuest, newAdmin, "blank")
		db.session.add(registerUser)
		db.session.commit()
		return jsonify({'text': 'Creation success'})
	users = User.query.all()
	userdata = []
	for user in users:
		userdata.append([user.username, user.password])
	return render_template('app.html', userdata = userdata)

@app.route('/load', methods=["POST"])
def loading():
	if request.method == "POST":
		logged_in_user = request.form["username"]
		user = User.query.filter_by(username=logged_in_user.lower()).first()
		if user:
			user.authenticated = True
			db.session.add(user)
			db.session.commit()
			login_user(user, remember=True)
			return render_template('loading.html')
		else:
			return "No user found named {}".format(logged_in_user)

@app.route('/welcome')
@login_required
def welcome():
	all_events = EventSchedule.query.all()
	all_event_data = []
	for event in all_events:
		all_event_data.append([event.day, event.event, event.orgs])
	unique_notifs = list(set(current_user.notifications.split(',')))
	return render_template('welcome.html', eventdata= all_event_data, notifs=unique_notifs)


@app.route('/checkyesterday', methods=["POST"])
def checkyesterday():
	if request.method == "POST":
		yday_date = request.json['yesterday']
		yday_event = EventSchedule.query.filter(EventSchedule.full_date == yday_date).first()
		if yday_event.orgs == "blank":
			current_user.notifications += ",needydayevent"
			db.session.commit()
		unique_notifs = list(set(current_user.notifications.split(",")))
		return jsonify({"notifs": unique_notifs})

@app.route('/awardgift', methods=["POST"])
def awardgift():
	if request.method == "POST":
		if "reward" not in current_user.notifications:
			current_user.notifications += ",reward"
			db.session.commit()
		unique_notifs = list(set(current_user.notifications.split(",")))
		return jsonify({"notifs": unique_notifs})


@app.route('/myprofile')
@login_required
def profile():
	unique_notifs = list(set(current_user.notifications.split(',')))
	return render_template('profile.html', notifs=unique_notifs)

@app.route('/gift')
@login_required
def gift():
	return render_template('gift.html')

@app.route('/logout')
@login_required
def logout():
	logout_user()
	return redirect(url_for('index'))

@app.route('/removegift', methods=["POST"])
def removegift():
	if request.method == "POST":
		unique_notifs = list(set(current_user.notifications.split(',')))
		no_reward = [u for u in unique_notifs if u != "reward"]
		current_user.notifications = ",".join(no_reward)
		db.session.commit()
		return jsonify({'notifs': no_reward})


@app.route('/resetnotifs')
def resetnotifs():
	allUsers = User.query.all()
	for user in allUsers:
		user.notifications = ""
	db.session.commit()
	return jsonify({"operation": "success"})


if __name__ == "__main__":
	# convention to run on Heroku
	port = int(environ.get("PORT", 5000))
	# run the app available anywhere on the network, on debug mode
	app.run(host="0.0.0.0", port=port, debug=True)