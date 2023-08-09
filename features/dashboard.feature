Feature: The Oto Finance Backoffice Bulk-Upload

  Scenario: As a user, I can create new data finance

    Given user am on the dashboard setorku bulk-upload page
    When user click Add Manual button
    And user input "OTOTEST" on namefield
    And user click tambah button
    And user see popup message "Berhasil tambah data" 
    And user click ok button
    Then user see new data "OTOTEST" has been created


  Scenario: As a user, I can filter data finance

    Given user am on the dashboard setorku bulk-upload page
    When user input dateNow on startdate
    And user input dateNow on enddate
    And user select "Waiting" status
    And user click search button
    Then user see data dateNow with "Waiting" status on list data

  Scenario: As a user, I can add data on detail finance data

    Given user am on the dashboard setorku bulk-upload page
    When user click the detail button on data finance
    And user click add data button
    And user input on merchant transaction id
    And user input "uc4" on usercode
    And user input "OTTOTEST" on username
    And user input "153" on customer id
    And user input "1000000" on total amount
    And user input "4" on periode
    And user click tambah button
    And user see popup message "Berhasil tambah detail data upload" 
    And user click ok button
    Then user see on merchant transaction id data list
