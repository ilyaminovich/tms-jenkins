@all
Feature: The Internet Kinopoisk Website

  Background:
    Given I open the home website

@1
Scenario Outline: Unsuccessful login to your personal account
  When I click on the loginButton on the Homepage
  And I login with <loginOption> and enter <loginEmailOrPhoneValue>
  Then I should see a flash message saying <message>

  Examples:
      | loginOption | loginEmailOrPhoneValue | message                                                      |
      | email       | testWDIO456            | Нет такого аккаунта. Проверьте логин или войдите по телефону |
      | phone       | 234567890              | Недопустимый формат номера                                   |

@smoke @2
Scenario Outline: Successful movie search
  When I search for "<movieTitle>"
  Then I should see search results for "<movieTitle>"

  Examples:
    | movieTitle    |
    | Крестный отец |
    | Аватар        |

@smoke @3
  Scenario: Displaying elements on the Homepage
      Then I have to see the elements on the Homepage

@smoke @4
Scenario: As a User, I want to move to Loginpage
    When I click on the loginButton on the Homepage
    Then I should validate that login form displaying correctly


@smoke @5
Scenario: As a user, I can't watch a movie without entering my personal account
    When I click on the WatchMovie on the Homepage
    Then I should be redirected to the Loginpage
