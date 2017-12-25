from app import EventSchedule as ES 
from app import db

monday = ES('Monday', 'Dec 25 2017', 'Gaming', '', 'no', '')
tuesday = ES('Sunday', 'Dec 26 2017', 'Gaming', '', 'no', '')
wednesday = ES('Wednesday', 'Dec 27 2017', 'Gaming', '', 'no', '')
thursday = ES('Thursday', 'Dec 28 2017', 'Gaming', '', 'no', '')
friday = ES('Friday', 'Dec 29 2017', 'Karaoke', '', 'no', '')
saturday = ES('Saturday', 'Dec 30 2017', 'Special', '', 'no', '')
db.session.add(monday)
db.session.add(tuesday)
db.session.add(wednesday)
db.session.add(thursday)
db.session.add(friday)
db.session.add(saturday)
db.session.commit()