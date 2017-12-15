from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep

driver = webdriver.Chrome()

def test_setup():
	driver.get('http://localhost:5000')
	driver.implicitly_wait(30)
	jumbotron = driver.find_element_by_class_name('jumbotron')
	assert jumbotron

def test_login_only_username():
	driver.find_element_by_xpath('//*[@data-target="#myModal"]').click()
	WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, 'submitBtn')))
	driver.find_element_by_id('username').send_keys('random Guy')
	driver.find_element_by_id('submitBtn').click()
	error = driver.find_element_by_class_name('errorresponse').text
	assert "Please complete that fields" == error

def test_teardown():
	driver.quit()
	assert True