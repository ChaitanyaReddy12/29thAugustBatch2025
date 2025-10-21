Feature: TestDataFromFeatureFile

    Title: TestDataFromFeatureFile

    Background: Background name
        Given i launch the browser
        Then i launch the test automation practice url

    @regression
    Scenario: Read the data TestAutomationPractice
        And i am reading the test data "<Name>","<Email>","<Phone>","<Address>","<Wikipedia>"
        And i close the browser

        Examples:
            | Name     | Email              | Phone      | Address   | Wikipedia  |
            | Saturday | saturday@gmail.com | 8908908900 | Hyderabad | Playwright |
            | Venkat   | Venkat@gmail.com   | 7890789090 | Bangalore | Testing    |
            | Jinu     | Jinu@gmail.com     | 1234567890 | Chennai   | Selenium   |

    @regression
    Scenario Outline: Read the data TestAutomationPractice
        And i am reading the test data "<Name>","<Email>","<Phone>","<Address>","<Wikipedia>"
        And i close the browser

        Examples:
            | Name     | Email              | Phone      | Address   | Wikipedia  |
            | Saturday | saturday@gmail.com | 8908908900 | Hyderabad | Playwright |
            | Venkat   | Venkat@gmail.com   | 7890789090 | Bangalore | Testing    |
            | Jinu     | Jinu@gmail.com     | 1234567890 | Chennai   | Selenium   |

    
    #  add tset data for orange hrm use background and parallel and execute
