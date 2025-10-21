Feature: Login Module

Title: Login Module

@smoke @regression @sanity
Scenario Outline: verify orange hrm in the applictaion
Given i launch the browser
Then i launch the url
And i close the browser

@smoke @execute @regression @venkat
Scenario: verify orange hrm in the applictaion
Given i launch the browser
Then i launch the url
And i close the browser

@execute @regression
Scenario: verify orange hrm in the applictaion
Given i launch the browser
Then i launch the url
And i close the browser

@testautomation @regression
Scenario: verify test automation practice applictaion
Given i launch the browser
Then i launch the test automation practice url
And i close the browser

