# In this program, we're going to be handling the award system 
# based on what is in the description. 

def award_plane(description):
	words = description.split()
	reward = None
	numbers = [w for w in words if w.isdigit()]

	if len(numbers) == 0:
		pass
	else:
		for n in numbers:
			if int(n) > 10:
				reward = "plane"

	return reward

def award_sword(description):
	words = description.split()
	reward = None
	gameFound = False
	for word in words:
		if word.lower() in ['games', 'playing', 'plays', 'played']:
			gameFound = True

	numbers = [w for w in words if w.isdigit()]

	goodNumber = False
	if len(numbers) == 0:
		pass
	else:
		for n in numbers:
			if int(n) > 10:
				goodNumber = True

	if goodNumber and gameFound:
		reward = "sword"
	return reward

def award_hourglass(description):
	words = description.split()
	reward = None
	for word in words:
		if word.lower() in 'hours':
			reward = "hourglass"

	return reward

def award_umbrella(description):
	words = description.split()
	reward = None
	for word in words:
		if word.lower() in 'trolls':
			reward = "umbrella"

	return reward

def award_dove(description):
	words = description.split()
	reward = None
	foundPeople = False
	for word in words:
		if word.lower() == "people":
			foundPeople = True
	fivePeople = False
	for word in words:
		if word in ['5', 'five']:
			fivePeople = True
	if foundPeople and fivePeople:
		reward = "dove"
	return reward

def award_engine(description):
	allAwards = []
	if award_sword(description):
		award = award_sword(description)
		allAwards.append(award)

	if award_plane(description):
		award = award_plane(description)
		allAwards.append(award)

	if award_hourglass(description):
		award = award_hourglass(description)
		allAwards.append(award)

	if award_umbrella(description):
		award = award_umbrella(description)
		allAwards.append(award)

	if award_dove(description):
		award = award_dove(description)
		allAwards.append(award)
	if not allAwards:
		return None
	else:
		return allAwards
