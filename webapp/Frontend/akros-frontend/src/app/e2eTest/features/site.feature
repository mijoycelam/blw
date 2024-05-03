Feature: Navigation Test

  Scenario: Click on the button and navigate to greet page
    Given I am on the home page
    When I click on the button with ID "agrostest"
    Then I should be navigated to "http://localhost:8889/greet"
