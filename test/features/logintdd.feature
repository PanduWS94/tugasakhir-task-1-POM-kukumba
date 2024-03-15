Feature: kasirAja Login Tests


  Scenario Outline: Login with invalid credentials
    Given I open the kasirAja website
    When I login with <email> and <password>
    Then I should see an error message

    Examples:
      | email                            | password    |
      | subroto.panduwibisono@gmail.co   | 123321saja  |
      | subroto.panduwibisono@gmail.com  | i123123     |


  Scenario: Login successfully with valid credentials
    Given I open the kasirAja website
    When I login with valid credentials
    Then I should be on the inventory page
