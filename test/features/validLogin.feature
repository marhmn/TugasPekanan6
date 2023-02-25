Feature: Login KasirAja

Scenario Outline: As a user, I can login to the website

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see my account dashboard

    Examples:
      | username                 | password             |
      | m.a.rahman0505@gmail.com | rohman2023           |