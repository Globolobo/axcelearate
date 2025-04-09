# Contact Search Panel Application

A React application featuring a contact search panel with filtering capabilities, built with TypeScript, Vite, and Radix UI.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Storybook](#running-storybook)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Component Documentation](#component-documentation)
- [Troubleshooting](#troubleshooting)

## Features

- Contact search panel with real-time filtering
- Two variants: with and without email display
- Expandable/collapsible sections for attended and absent contacts
- Responsive design with Radix UI components
- Comprehensive test coverage with Vitest
- Storybook documentation for all components

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Globolobo/axcelearate
   cd axcelearate
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

## Running the Application

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the Vite development server, typically at [http://localhost:5173](http://localhost:5173).

The application displays two variants of the contact search panel:

- **With Email Variant**: Shows contact names and email addresses
- **Without Email Variant**: Shows only contact names

## Running Storybook

Storybook provides an isolated environment to develop and test UI components in isolation.

To start Storybook:

```bash
npm run storybook
# or
yarn storybook
```

This will start the Storybook server, typically at [http://localhost:6006](http://localhost:6006).

### Available Stories

- **ContactField**: Displays individual contact information
- **SearchField**: Search input with magnifying glass icon
- **Section**: Expandable section for grouping contacts
- **SectionHeader**: Header component for sections with toggle functionality
- **InputField**: Base input component with customizable variants

## Running Tests

To run all unit tests:

```bash
npm test
# or
yarn test
```

To run tests in watch mode (recommended during development):

```bash
npm run test:watch
# or
yarn test:watch
```

## Project Structure

```
src/
├── assets/           # Static assets
├── components/       # Reusable UI components
│   ├── assets/       # Component-specific assets
│   └── ...
├── data/             # Data files and utilities
├── stories/          # Storybook stories
├── views/            # Page-level components
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## Component Documentation

### ContactField

Displays a contact with an avatar, name, and optional email.

**Props:**

- `name` (string, required): Contact's name
- `email` (string, optional): Contact's email address
- `showEmail` (boolean, default: false): Whether to display the email
- `enabled` (boolean, default: false): Whether the contact is enabled
- `imageSrc` (string, optional): Path to contact's avatar image
- `imageClassName` (string, optional): Additional CSS class for the image

### SearchField

A search input with a magnifying glass icon.

**Props:**

- `placeholder` (string, default: "Search"): Placeholder text
- `value` (string, required): Current input value
- `onValueChange` (function, required): Callback when value changes

### Section

An expandable section for grouping contacts.

**Props:**

- `title` (string, required): Section title
- `contacts` (array, required): Array of contact objects
- `defaultExpanded` (boolean, default: false): Whether the section is expanded by default

## Troubleshooting

### Storybook Not Loading

If Storybook fails to load:

1. Clear the Storybook cache:
   ```bash
   npm run storybook:clean
   # or
   yarn storybook:clean
   ```
2. Restart the Storybook server

### Build Issues

If you encounter build issues:

1. Clear the Vite cache:
   ```bash
   rm -rf node_modules/.vite
   ```
2. Reinstall dependencies:
   ```bash
   rm -rf node_modules
   npm install
   # or
   yarn
   ```
