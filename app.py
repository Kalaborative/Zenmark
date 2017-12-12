from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from os import environ


app = Flask(__name__)
db_uri = "postgres://jewobnjxfznftb:062f6ed9eecd5b54c782c9c82252d6c4790d77e9f564096dbb88bd3865507d5e@ec2-54-235-123-153.compute-1.amazonaws.com:5432/d6j29morvgre4h"
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
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

@app.route('/')
def index():
	return render_template('app.html')


if __name__ == "__main__":
	# convention to run on Heroku
	port = int(environ.get("PORT", 5000))
	# run the app available anywhere on the network, on debug mode
	app.run(host="0.0.0.0", port=port, debug=True)