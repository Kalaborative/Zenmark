from flask import Flask, render_template, request, jsonify
from flask_login import LoginManager, login_required, login_user, current_user
from flask_sqlalchemy import SQLAlchemy
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

	def __init__(self, username, password):
		self.username = username
		self.password = password

	def __repr__(self):
		return '<User {}>'.format(self.username)

	def is_active(self):
		return True

	def get_id(self):
		return self.username

	def is_authenticated(self):
		return self.authenticated

	def is_anonymouse(self):
		return False


login_manager = LoginManager()
login_manager.init_app(app)



@login_manager.user_loader
def load_user(user_id):
	return User.query.filter_by(username=user_id).first()

@login_manager.unauthorized_handler
def unauthorized():
	return "You are not logged in!"


@app.route('/', methods=["GET", "POST"])
def index():
	if request.method == 'POST':
		new_user = request.form['signupName'].lower()
		new_pw = request.form['signupPass']
		registerUser = User(new_user, new_pw)
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

@app.route('/welcome')
@login_required
def welcome():
	return render_template('welcome.html')

@app.route('/trophy')
# @login_required
def trophy():
	return render_template('trophy.html')

if __name__ == "__main__":
	# convention to run on Heroku
	port = int(environ.get("PORT", 5000))
	# run the app available anywhere on the network, on debug mode
	app.run(host="0.0.0.0", port=port, debug=True)