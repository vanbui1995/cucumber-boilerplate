Feature: Sign in test
    As a Developer in Test
    I want to test if I could sign in our app successfully on staging

    Scenario: sign in with John Doe credentials
        Given I open the url "base_url"
        Then I should be redirected to url "https://planpod.b2clogin.com/"
        When I add "johndoe@planpod.com.au" to "#logonIdentifier" field
        And I add "demo@123" to "#password" field
        And I click on the button "button#next"
        Then I should be redirected to url "base_url"
