Playwright UI & API Testing Project

This project demonstrates automated UI and API testing using Playwright with TypeScript. It is structured for scalability and integrated with GitHub Actions for continuous integration.

📦 Technologies Used

Playwright — Browser automation and API testing

TypeScript — Programming language

ESLint & Prettier — Code linting and formatting

Allure — Test reporting (optional)

GitHub Actions — CI/CD pipeline

📁 Project Structure

├── .github/workflows         # GitHub Actions CI/CD pipelines
├── tests/
│   ├── ui/                   # UI tests
│   └── api/                  # API tests
├── playwright.config.ts      # Playwright configuration
├── package.json              # Project scripts and dependencies
└── ...

🚀 Getting Started

1. Clone the Repository

git clone https://github.com/your-username/your-repo.git
cd your-repo

2. Install Dependencies

npm install

3. Install Playwright Browsers

npx playwright install

4. Run Tests

Run all tests: npm test

Run only UI tests: npm run test:ui

Run only API tests: npm run test:api

5. Optional: Generate Allure Reports

npm run allure:report