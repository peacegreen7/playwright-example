Feature: Verify article content display in Page object models

    Scenario: Show Page Object Model article when access page Guides > Page object models
        Given User navigates to Playwright Dev page
        When User opens menu item Guides on the left side menu
        Then User selects item Page object models
        Then User sees page article with content "Page Object Model is a common pattern"