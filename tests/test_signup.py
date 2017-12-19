from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from test_login import driver
from selenium.webdriver.support import expected_conditions as EC
from time import sleep
from os import urandom
from base64 import b64encode

signup_xpath = '//*[@data-target="#mySignup"]'
login_xpath = '//*[@data-target="#myModal"]'

print("Preparing new tests...")
def test_setup():
	sleep(15)
	driver.get('http://localhost:5000')
	driver.implicitly_wait(30)
	jumbotron = driver.find_element_by_class_name('jumbotron')
	assert jumbotron

def randomUser_and_pw():
	user = b64encode(urandom(10)).decode('utf-8')
	pw = b64encode(urandom(20)).decode('utf-8')
	return user, pw

(newUser, newPw) = randomUser_and_pw()

def test_signup_no_info():
	driver.find_element_by_xpath(signup_xpath).click()
	WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'signupSubmitBtn')))
	driver.find_element_by_id('signupSubmitBtn').click()
	signuperror = driver.find_element_by_class_name('signuperrorresponse').text
	assert signuperror == "Please fill out all fields"

def test_just_username():
	driver.find_element_by_id('signupName').send_keys('John Doe')
	driver.find_element_by_id('signupSubmitBtn').click()
	signuperror = driver.find_element_by_class_name('signuperrorresponse').text
	assert signuperror == "Please fill out all fields"

def test_mismatching_passwords():
	driver.find_element_by_id('signupPass').send_keys('Ok')
	driver.find_element_by_id('confirmPass').send_keys('Ok!')
	driver.find_element_by_id('signupSubmitBtn').click()
	signuperror = driver.find_element_by_class_name('signuperrorresponse').text
	assert signuperror == "Passwords do not match"

def test_user_already_exists():
	username = driver.find_element_by_id('signupName')
	username.clear()
	username.send_keys('Guest')
	driver.find_element_by_id('signupSubmitBtn').click()
	signuperror = driver.find_element_by_class_name('signuperrorresponse').text
	assert "already registered" in signuperror

def test_successful_signup():
	username = driver.find_element_by_id('signupName')
	username.clear()
	signupPass = driver.find_element_by_id('signupPass')
	signupPass.clear()
	confirmPass = driver.find_element_by_id('confirmPass')
	confirmPass.clear()

	username.send_keys(newUser)
	signupPass.send_keys(newPw)
	confirmPass.send_keys(newPw)

	driver.find_element_by_id('signupSubmitBtn').click()
	WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'loginSuccess')))
	successText = driver.find_element_by_id('loginSuccess').text
	assert "successfully made your account" in successText

def test_bad_login_for_new_signup():
	driver.find_element_by_xpath('(//button[contains(text(), "Close")])[2]').click()
	sleep(2)
	driver.find_element_by_xpath(login_xpath).click()
	WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'submitBtn')))
	driver.find_element_by_id('username').send_keys(newUser)
	driver.find_element_by_id('password').send_keys('bhvjvhgfhgxd')
	driver.find_element_by_id('submitBtn').click()
	errorresponse = driver.find_element_by_class_name('errorresponse').text
	assert errorresponse == "Incorrect login data"	

print("Restarting to fresh login...")
def test_signup_recheck_if_user_exists():
	sleep(3)
	driver.get('http://localhost:5000')
	driver.find_element_by_xpath(signup_xpath).click()
	driver.find_element_by_id('signupName').send_keys(newUser)
	driver.find_element_by_id('signupPass').send_keys('guest123')
	driver.find_element_by_id('confirmPass').send_keys('guest123')
	driver.find_element_by_id('signupSubmitBtn').click()
	signuperror = driver.find_element_by_class_name('signuperrorresponse').text
	assert "already registered" in signuperror


def test_teardown():
	driver.quit()
	assert True