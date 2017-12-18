from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep

driver = webdriver.Chrome()

print("Starting up!")
def test_setup():
	driver.get('http://localhost:5000')
	driver.implicitly_wait(30)
	jumbotron = driver.find_element_by_class_name('jumbotron')
	assert jumbotron

def test_login_no_entry():
	driver.find_element_by_xpath('//*[@data-target="#myModal"]').click()
	WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'submitBtn')))
	driver.find_element_by_id('submitBtn').click()
	error = driver.find_element_by_class_name('errorresponse').text
	assert "Please complete both fields." == error

def test_login_only_username():
	driver.find_element_by_id('username').send_keys('random Guy')
	driver.find_element_by_id('submitBtn').click()
	error = driver.find_element_by_class_name('errorresponse').text
	assert "Please complete both fields." == error

def test_login_only_password():
	driver.find_element_by_id('username').clear()
	driver.find_element_by_id('password').send_keys('dfjdkfjalk')
	driver.find_element_by_id('submitBtn').click()
	error = driver.find_element_by_class_name('errorresponse').text
	assert "Please complete both fields." == error

def test_failed_login_attempt():
	driver.find_element_by_id('username').send_keys('Bob Smith')
	driver.find_element_by_id('password').send_keys('ec87uytfgh')
	driver.find_element_by_id('submitBtn').click()
	error = driver.find_element_by_class_name('errorresponse').text
	assert "Incorrect login data" == error

def test_correct_login():
	driver.find_element_by_id('username').send_keys('Guest')
	driver.find_element_by_id('password').send_keys('guest123')
	driver.find_element_by_id('submitBtn').click()
	WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, 'h1.loadtext')))
	h1_text = driver.find_element_by_tag_name('h1').text
	assert "Loading" in h1_text

def test_teardown():
	assert True