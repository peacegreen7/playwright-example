Feature: Simple feature calculate total bill when buy food in the grocery store

    Scenario: Total bill
        Given I buy 2 apples
        And Each apple cost 2 USD
        And I have a coupon 0.1 'cent'
        Then Total bill should be equal 3.8 USD