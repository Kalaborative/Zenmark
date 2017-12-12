from flask import Flask, render_template
from os import environ


app = Flask(__name__)

@app.route('/')
def index():
	return render_template('app.html')


if __name__ == "__main__":
	# convention to run on Heroku
	port = int(environ.get("PORT", 5000))
	# run the app available anywhere on the network, on debug mode
	app.run(host="0.0.0.0", port=port, debug=True)