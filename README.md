# Signal Form

A modern Angular application showcasing signal-based form management, reusable UI components, and a responsive authentication experience.

## Overview

`signal-form` is an Angular 22 project designed to explore the latest reactive patterns in frontend development. The app demonstrates how to build a clean, validated login form using Angular's signal APIs, custom form controls, and route-based application structure.

The project focuses on practical UI patterns and developer experience: reusable inputs, validation states, custom directives, and a mobile-responsive layout inspired by e-commerce authentication screens.

## Tech Stack

- Angular 22
- TypeScript
- Angular Signals
- Angular Router
- Angular SSR
- Tailwind CSS

## Key Features

- Signal-driven form state with `@angular/forms/signals`
- Reusable `app-input` component with:
  - email and password variants
  - validation and error display
  - disabled state handling
  - label and placeholder customization
- Custom `statusControl` directive for styling and accessibility behavior
- Responsive login layout with hero imagery and desktop/mobile adaptation
- Route-based navigation for authentication flow
- Fallback `not-found` screen
- Server-side rendering support for Angular

## Form Behavior

The login form includes validation for:

- required email address
- valid email format
- required password

The submit action is only enabled when the form is valid, and the form model is managed through Angular signals using the `form(...)` and `submit(...)` APIs.

## Project Structure

```text
signal-form/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── button/
│   │   │   ├── checkbox/
│   │   │   └── input/
│   │   ├── core/
│   │   │   ├── directives/
│   │   │   ├── functions/
│   │   │   └── models/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   └── not-found/
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── app.ts
│   │   └── app.html
│   ├── environments/
│   ├── main.ts
│   ├── main.server.ts
│   ├── server.ts
│   └── styles.css
├── public/
├── angular.json
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm start
```

The app will be available in the browser at:

```text
http://localhost:4200/
```

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm test
```

## Architecture Notes

This project is intentionally lightweight and focused on demonstrating clean Angular patterns rather than a full production authentication system. It is particularly useful as a reference for:

- signal-based reactive form design
- custom control composition in Angular
- responsive frontend layout patterns
- architectural organization for Angular feature modules

## Resources

- Angular: https://angular.dev/
- Angular CLI: https://angular.dev/tools/cli
- Angular Signals: https://angular.dev/guide/signals
