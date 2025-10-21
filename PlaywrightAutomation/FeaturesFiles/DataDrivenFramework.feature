Feature: DataDrivenFramework

    Title: DataDrivenFramework

    @regression
    Scenario: Read the data TestAutomationPractice
        Given i launch the browser
        Then i launch the test automation practice url
        And i am reading the data from TestData file
        And i close the browser

    @regression
    Scenario: Read the data TestAutomationPractice1
        Given i launch the browser
        Then i launch the test automation practice url
        And i am reading the data from TestData file1
        And i close the browser

    @regression
    Scenario: Read the data TestAutomationPractice2
        Given i launch the browser
        Then i launch the test automation practice url
        And i am reading the data from TestData file2
        And i close the browser

    @regression
    Scenario: Read the data from excel file
        Given i launch the browser
        Then i launch the test automation practice url
        And i am reading the data from TestData Excel file
        # And i close the browser