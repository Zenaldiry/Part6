# Full Stack Open - Part 6: Advanced State Management

This repository contains my solutions for Part 6 of the [Full Stack Open](https://fullstackopen.com/) course, covering a progression of state management techniques in React.

---

## Projects & Key Concepts

This part is divided into three main projects, each building upon the last and introducing new state management paradigms.

### 1. `unicafe-redux` (Exercises 6.1 - 6.2)

A simple feedback application to practice the absolute fundamentals of Redux.

- **Concepts Covered:** Basic Redux store, reducers, and actions.

### 2. `redux-anecdotes` (Exercises 6.3 - 6.19)

A more complex application for viewing, voting, and creating anecdotes. This project evolves from basic Redux to a modern, production-ready setup.

- **Concepts Covered:**
  - Redux Toolkit (`createSlice`, `configureStore`).
  - Asynchronous actions with **Redux Thunk** for API communication.
  - Connecting to a backend (`json-server`).
  - Advanced state management for filtering and notifications.

### 3. `query-anecdotes` (Exercises 6.20 - 6.24)

The final version of the anecdotes application, refactored to use a modern stack for managing server and client state separately.

- **Concepts Covered:**
  - **React Query (TanStack Query)** for managing all server state (fetching, creating, updating).
  - **React Context API** with the `useReducer` hook for managing client-only state (notifications).
  - Handling loading, error, and success states from API calls gracefully.

---

### How to Run Everything

To run any of the projects, navigate into its directory and follow these steps:

1.  **Navigate to the project folder:**

    ```bash
    cd <folder-name>  # e.g., cd redux-anecdotes
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the backend server (if applicable):**
    _For `redux-anecdotes` and `query-anecdotes`_

    ```bash
    npm run server
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
