Feature: Create a user
    As a Developer in Test
    I want to test if I could create a new user on staging

    Scenario: create new user with John Doe credentials
        Given I sign in with credential "johndoe@planpod.com.au"/"demo@123"
        Then I create a new user with first name is "Automation", last name is "Test"
