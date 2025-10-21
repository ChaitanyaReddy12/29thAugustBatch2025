Feature: Webtable And WebCaledar Handling

    @regression
    Scenario: Verify webtable handling statically
        Given i launch the browser
        Then i launch the test automation practice url
        And i verify the web table in static mode
        And i close the browser

    # @regression
    Scenario: Verify webtable handling statically2
        Given i launch the browser
        Then i launch the test automation practice url
        And i verify the web table in static mode2
        And i close the browser

    @regression
    Scenario: Verify webtable handling dynamically
        Given i launch the browser
        Then i launch the test automation practice url
        And i verify the web table in dynamic mode
        And i close the browser

    @regression
    Scenario: Verify webcalendar handling Statically
        Given i launch the browser
        Then i launch the test automation practice url
        And i verify the web calendar in static mode
        And i close the browser

    @regression
    Scenario: Verify webcalendar handling Statically2
        Given i launch the browser
        Then i launch the test automation practice url
        And i verify the web calendar in static mode2
    # And i close the browser

    @regression
    Scenario: Verify webcalendar handling dynamically
        Given i launch the browser
        Then i launch the test automation practice url
        And i verify the web calendar in dynamic mode
        And i close the browser

    @regression
    Scenario: Verify hard assertions
        Given i launch the browser
        Then i launch the meesho applictaion
        And i verify the hard assertions
        And i close the browser

    @regression
    Scenario: Verify soft assertions
        Given i launch the browser
        Then i launch the meesho applictaion
        And i verify the soft assertions
        And i close the browser

    @regression
    Scenario: Verify and method
        Given i launch the browser
        Then i launch the test automation practice url
        And i verify the and method
        And i close the browser

    @regression
    Scenario: Verify screenshots on folder level
        Given i launch the browser
        And i verify the screenshots on folder level
        And i close the browser

    @regression
    Scenario: Verify Filters
        Given i launch the browser
        And i verify filter
        And i close the browser

    @regression
    Scenario: Verify simple alert
        Given i launch the browser
        Then i launch the herokuapp application
        And i verify simple alert
        And i close the browser

    @regression
    Scenario: Verify confirmation alert
        Given i launch the browser
        Then i launch the herokuapp application
        And i verify confirmation alert in accept
        And i close the browser

    @regression
    Scenario: Verify confirmation alert
        Given i launch the browser
        Then i launch the herokuapp application
        And i verify confirmation alert in dismiss
        And i close the browser

    @regression
    Scenario: Verify simple alert
        Given i launch the browser
        Then i launch the herokuapp application
        And i verify prompt alert
        And i close the browser

    @regression
    Scenario: Verify simple alert
        Given i launch the browser
        Then i launch the Frames application
        And i verify frames and nested frames
    # And i close the browser

    @regression
    Scenario: Verify upload files
        Given i launch the browser
        Then i launch the test automation practice url
        And i verify file uploading
        And i close the browser

    @regression
    Scenario: Verify prompt alert2
        Given i launch the browser
        Then i launch the herokuapp application
        And i verify prompt alert and enter text to the textbox
        And i close the browser