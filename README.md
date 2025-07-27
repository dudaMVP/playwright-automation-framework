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
```

### 2. Run Tests

```bash
npx playwright test
```

### 3. View HTML Report

```bash
npx playwright show-report
```

## Framework Structure

```
/playwright-claimwright
├── tests/              # Test specs grouped by suite (e.g. smoke, regression)
├── pages/              # Page Object classes for different screens
├── fixtures/           # Custom Playwright fixtures
├── utils/              # Reusable helpers and test data
├── reports/            # Test output reports
├── playwright.config.ts
└── package.json
```

## Sample Script

Run smoke tests in headed mode:

```bash
npx playwright test --grep @Smoke --headed
```

## Notes

- This project is intended as a demonstration of how to build a modular, scalable Playwright framework.
- It highlights usage of fixtures, environment configs, tagging, and parallel test execution.
- Environment variables used for test credentials and config are stored securely and not included in this repo.
