Feature: BackGroundKeyword

    Title: BackGroundKeyword

    Background: Background name
        Given i launch the browser
        Then i launch the test automation practice url

    @regression
    Scenario: Read the data TestAutomationPractice
        And i am reading the data from TestData file
        And i close the browser

    @regression

    Scenario: Read the data TestAutomationPractice1
        And i am reading the data from TestData file1
        And i close the browser

    @regression
    Scenario: Read the data TestAutomationPractice2
        And i am reading the data from TestData file2
        And i close the browser