Feature: Add Customer KasirAja

Scenario Outline: As a user, I can add a Customer

    Given I am on the login page
    When I login with <username> and <password>
    When I should see my account dashboard
    When I click button pelanggan
    When I see a path of pelanggan
    When I click button tambah
    When I type nama <nama>
    When I type nohp <nohp>
    When I type alamat <alamat>
    When I type keterangan <keterangan>
    When I click button simpan
    Then I should see a success message<message>

    Examples:
      | username                 | password             | message          | nama | nohp       | alamat | keterangan     |
      | m.a.rahman0505@gmail.com | rohman2023           | item ditambahkan | John | 08123456789| Test   | ini keterangan |