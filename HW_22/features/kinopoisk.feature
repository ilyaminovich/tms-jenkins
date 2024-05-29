@all
Feature: The Internet Kinopoisk Website

  Background:
    Given I open the Kinopoisk website

  @smoke @ui
  Scenario Outline: Open Kinopoisk main page
    Then I should see the Kinopoisk logo

  @ui
  Scenario Outline: Unsuccessful login to your personal account
    When I click on the button on the page
    And I login with <loginOption> and <loginEmailOrPhoneValue>
    Then I should see a flash message saying <message>

    Examples:
      | loginOption | loginEmailOrPhoneValue | message                                                      |
      | email       | testWDIO456            | Нет такого аккаунта. Проверьте логин или войдите по телефону |
      | phone       | 234567890              | Недопустимый формат номера                                   |

  @smoke @ui
  Scenario Outline: Successful movie search
    When I search for "<movieTitle>"
    Then I should see search results for "<movieTitle>"

    Examples:
      | movieTitle    |
      | Крестный отец |

  @ui
  Scenario Outline: Displaying the Watch Movie button
    Then I should see a Watch Movie button

  @ui
  Scenario Outline: Displaying a link to the “Movie Tickets” section
    Then I should see the link to the section