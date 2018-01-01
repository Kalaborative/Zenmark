from app import EventSchedule as ES 
from app import db

sunday = ES('Sunday', 'Dec 31 2017', 'Movie', '', 'no', '')
monday = ES('Monday', 'Jan 01 2018', 'Gaming', '', 'no', '')
tuesday = ES('Tuesday', 'Jan 02 2018', 'Gaming', '', 'no', '')
wednesday = ES('Wednesday', 'Jan 03 2018', 'Gaming', '', 'no', '')
thursday = ES('Thursday', 'Jan 04 2018', 'Gaming', '', 'no', '')
friday = ES('Friday', 'Jan 05 2018', 'Karaoke', '', 'no', '')
saturday = ES('Saturday', 'Jan 06 2018', 'Special', '', 'no', '')
db.session.add(sunday)
db.session.add(monday)
db.session.add(tuesday)
db.session.add(wednesday)
db.session.add(thursday)
db.session.add(friday)
db.session.add(saturday)
db.session.commit()