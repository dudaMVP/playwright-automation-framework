# Playwright ClaimWright

This is an example UI automation framework built with Playwright and TypeScript.  
It demonstrates how to use Playwright’s advanced features such as custom fixtures, parallel execution, isolated browser contexts, and built-in reporting.

## Tech Stack

- Playwright
- TypeScript
- GitHub Actions (CI)
- Page Object Model (POM)
- Playwright HTML Reporter (Allure optional)

## Getting Started

### 1. Install Dependencies

```bash
npm install
npx playwright test

``` Framework Structure
/playwright-claimwright
├── tests/              # Test specs grouped by suite (e.g. smoke, regression)
├── pages/              # Page Object classes for different screens
├── fixtures/           # Custom Playwright fixtures
├── utils/              # Reusable helpers and test data
├── reports/            # Test output reports
├── playwright.config.ts
└── package.json