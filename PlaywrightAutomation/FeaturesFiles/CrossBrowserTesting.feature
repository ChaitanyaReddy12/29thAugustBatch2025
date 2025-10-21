Feature: CrossBrowserTesting

    Title: CrossBrowserTesting

    @regression
    Scenario: Launch application in Chrome browser
        Given i launch the browser
        Then i launch the test automation practice url
        And i close the browser

    @regression
    Scenario: Launch application in Firefox browser
        Given i launch the Firefox browser
        Then i launch the test automation practice url
        And i close the browser

    @regression
    Scenario: Launch application in Safari browser
        Given i launch the Safari browser
        Then i launch the test automation practice url
        And i close the browser

    @regression
    Scenario: Launch application in Headless browser
        Given i launch the headless browser
        Then i launch the test automation practice url
        And i close the browser

    @regression
    Scenario: Verify Waits
        Given i launch the browser
        Then i launch the test automation practice url
        And i verify all kind of waits
        And i close the browser

    @regression
    Scenario: Verify Windows handling
        Given i launch the browser and verify Windows handling

        