
Feature: playwright Background and Hooks

    Background: Launch Application
        # Given  i launch the chrome browser
        Given i launch the OrangeHRM application in chrome browser

    @methods
    Scenario: verify login with valid data
        Given Enter the username in OrangeHRM
        And Enter the password in OrangeHRM

    @methods
    Scenario Outline: verify login with different credentials
        And Enter the username in OrangeHRM "<username>"
        And Enter the password in OrangeHRM "<password>"
        And I click on the login button in OrangeHRM

        Examples:
            | username | password |
            | Admin    | admin123 |
            | Admin    | admin123 |

    @methods
    Scenario Outline: verify login with invalid credentials
        And Enter the username in OrangeHRM "<username>"
        And Enter the password in OrangeHRM "<password>"
        And I click on the login button in OrangeHRM
        And I click on the logout button in OrangeHRM

        Examples:
            | username | password |
            | Admin    | admin123 |
            | morning  | 123456   |