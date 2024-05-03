Feature: User API test

Scenario: Get a response from localhost:8889/greet
    Given url 'http://localhost:8889/greet'
    When method get
    Then status 200