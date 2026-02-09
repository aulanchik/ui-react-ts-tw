# React + TypeScript + Tailwind CSS UI Component Library

This repository contains a collection of reusable UI components built with React, TypeScript, and styled with Tailwind CSS. The project is set up with a modern development environment using Vite, with component showcases and documentation provided by Storybook, and a robust testing suite powered by Vitest and Playwright.

## Tech Stack

*   **Framework:** [React](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Component Workshop:** [Storybook](https://storybook.js.org/)
*   **Testing:** [Vitest](https://vitest.dev/), [Playwright](https://playwright.dev/), [React Testing Library](https://testing-library.com/)
*   **Utilities:** `clsx` & `tailwind-merge` for class name management.

## Getting Started

To get the project up and running on your local machine, follow these steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aulanchik/ui-react-ts-tw.git
    cd ui-react-ts-tw
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run Storybook:**
    This will start the development server and open Storybook in your browser, where you can view and interact with the components.
    ```bash
    npm run storybook
    ```

4.  **Run tests:**
    To execute the unit and integration tests, run:
    ```bash
    npm run test
    ```

## Available Scripts

*   `npm run storybook`: Starts the Storybook development server on `http://localhost:6006`.
*   `npm run build-storybook`: Creates a static build of the Storybook instance in the `storybook-static` directory.
*   `npm test`: Runs the full test suite using Vitest, including browser-based tests with Playwright.

## Component Usage

Here is an example of how to use the `Button` component.

```tsx
import { Button } from './src/components/v1';

function MyComponent() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button variant="primary" size="lg" onClick={() => alert('Primary Clicked!')}>
        Primary Button
      </Button>

      <Button variant="secondary">
        Secondary Button
      </Button>

      <Button variant="outline">
        Outline Button
      </Button>

      <Button variant="ghost" disabled>
        Disabled Ghost Button
      </Button>
    </div>
  );
}
```

### Button Component

The `Button` is a flexible component with several variants and size options.

**Props (`ButtonProps`):**

| Prop      | Type                                     | Default     | Description                                               |
| --------- | ---------------------------------------- | ----------- | --------------------------------------------------------- |
| `variant` | `'primary'` \| `'secondary'` \| `'outline'` \| `'ghost'` | `'primary'` | The visual style of the button.                           |
| `size`    | `'sm'` \| `'md'` \| `'lg'`               | `'md'`      | The size of the button.                                   |
| `...props`| `ButtonHTMLAttributes<HTMLButtonElement>` |             | Any other native `button` attributes like `onClick`, `disabled`. |

## Project Structure

```
.
├── .storybook/         # Storybook configuration files
├── src/
│   ├── components/     # Reusable React components
│   │   └── v1/
│   │       └── Button/ # Button component, stories, and tests
│   └── lib/            # Utility functions
│       └── v1/
│           └── utils.ts # `cn` utility for Tailwind class merging
├── package.json        # Project dependencies and scripts
└── vite.config.ts      # Vite and Vitest configuration
