# 📘 Project Report

## **Denji – A Modern Pomodoro & Productivity Web Application**

---

## 1. Introduction

**Denji** is a modern productivity web application built using **React and TypeScript**, centered around an advanced **Pomodoro timer system**.
The application is designed with a strong emphasis on **correctness, scalability, and maintainability**, following industry-grade frontend architecture patterns.

Unlike traditional Pomodoro applications, Denji integrates a **state-machine-driven logic**, comprehensive testing, multi-page navigation, and a configurable user experience, making it both robust and extensible.

---

## 2. Objectives of the Project

The main objectives of this project are:

* To implement a **reliable Pomodoro timer** with correct session cycles
* To allow users to **customize timer behavior**
* To track and store **session statistics**
* To design a **clean multi-page React architecture**
* To ensure application correctness through **testing and CI**
* To establish a scalable foundation for future enhancements

---

## 3. Features Implemented

### 3.1 Pomodoro Timer System

* Focus, short break, and long break sessions
* Configurable durations for each session type
* Automatic session transitions
* Skip session functionality
* Pause and reset controls
* Accurate countdown logic without time drift

---

### 3.2 State Machine–Based Logic

* Centralized state management using `useReducer`
* Explicit actions such as:

  * `START`, `PAUSE`, `RESET`
  * `SKIP`, `COMPLETE`
  * Settings and UI toggles
* Deterministic transitions with no invalid states
* Clear separation between state transitions and side effects

---

### 3.3 Statistics & Session Tracking

* Each completed session is recorded in local storage
* Session data includes:

  * Session type (focus / break)
  * Duration
  * Start time (IST)
  * Completion time (IST)
* A dedicated statistics page displays aggregated session data

---

### 3.4 User Settings & Preferences

* Customizable focus, short break, and long break durations
* Configurable number of focus sessions before a long break
* Auto-start next session toggle
* Sound enable/disable option
* Adjustable sound volume
* Dark mode toggle

---

### 3.5 Audio, Notifications & Accessibility

* Web Audio API–based sound playback
* Audio unlocked through user interaction (browser-compliant)
* Completion sounds with volume control
* System notifications on session completion
* Keyboard shortcuts for common actions
* Automatic pause when the browser tab loses focus

---

### 3.6 Multi-Page Navigation

* Client-side routing using React Router
* Separate pages for:

  * Timer
  * Statistics
  * Settings
* Shared layout with persistent navigation
* Clean separation between application state and UI rendering

---

## 4. Project Architecture

The project follows a **modular and scalable folder structure**, ensuring separation of concerns and ease of maintenance.

### 4.1 Folder Structure (As Implemented)

```
src/
├── app/
│   ├── App.tsx
│   └── Layout.tsx
│
├── pages/
│   ├── TimerPage.tsx
│   ├── StatsPage.tsx
│   └── SettingsPage.tsx
│
├── components/
│   ├── Timer.tsx
│   ├── Controls.tsx
│   ├── Stats.tsx
│   └── Settings.tsx
│
├── context/
│   └── PomodoroContext.tsx
│
├── reducer/
│   ├── pomodoroReducer.ts
│   ├── pomodoroReducer.test.ts
│   ├── pomodoroReducer.snapshot.test.ts
│   └── __snapshots__/
│
├── hooks/
│   └── usePomodoroEngine.ts
│
├── utils/
│   ├── time.ts
│   ├── sound.ts
│   └── storage.ts
│
├── styles/
│   ├── index.css
│   └── App.css
│
├── types.ts
├── main.tsx
```

---

### 4.2 Architectural Responsibilities

* **app/**
  Handles application-level concerns such as routing, layout, global state initialization, and side effects.

* **pages/**
  Contains route-level components corresponding to different screens of the application.

* **components/**
  Houses reusable and presentation-focused UI components.

* **context/**
  Provides global access to the Pomodoro state and actions using React Context.

* **reducer/**
  Implements the Pomodoro state machine along with comprehensive unit and snapshot tests.

* **hooks/**
  Contains custom hooks responsible for timer execution and scheduling logic.

* **utils/**
  Pure utility functions for time handling, audio playback, and persistent storage.

* **styles/**
  Global styling and design tokens for consistent theming and layout.

---

## 5. State Management Strategy

The application uses **React’s `useReducer` hook** to model the Pomodoro logic as a **finite state machine**.
All state transitions are explicit and predictable, ensuring:

* No race conditions
* No invalid states
* Easy debugging and extension

Global state is exposed to the UI through **React Context**, avoiding prop drilling while maintaining clarity.

---

## 6. Testing & Quality Assurance

### 6.1 Unit Testing

* Reducer logic is tested for:

  * State transitions
  * Timer behavior
  * Skip and reset actions
  * UI preference toggles

### 6.2 Snapshot Testing

* Snapshot tests ensure reducer behavior does not change unintentionally
* Provides regression safety during refactoring

### 6.3 Property-Based Testing

* Randomized inputs validate core invariants
* Ensures robustness against edge cases
* Example invariant: timer value never becomes negative

---

## 7. Continuous Integration (CI)

* GitHub Actions is used for continuous integration
* Tests are automatically executed on:

  * Every push
  * Every pull request
* Prevents broken logic from being merged into the main branch

---

## 8. UI & Styling Approach

* CSS-based design system using variables (design tokens)
* Consistent spacing, typography, and theming
* Dark mode support via CSS variables
* Layout structured for responsiveness and future animations

---

## 9. Technology Stack

### Frontend

* **React**
* **TypeScript**
* **React Router DOM**

### State Management

* **useReducer**
* **React Context**

### Styling

* **Vanilla CSS** with design tokens

### Testing

* **Vitest**
* **fast-check** (property-based testing)

### Tooling & DevOps

* **Vite**
* **Git & GitHub**
* **GitHub Actions**

---

## 10. Learning Outcomes

Through this project, the following concepts were applied practically:

* Finite state machines in frontend applications
* Advanced React architecture patterns
* Test-driven and property-based testing
* Browser APIs (Audio & Notifications)
* CI/CD fundamentals
* Scalable UI design foundations

---

## 11. Future Enhancements

Potential future improvements include:

* Migration to XState for formal state machine modeling
* Progressive Web App (PWA) support
* Advanced analytics dashboards
* Cloud synchronization
* Animated visual timer components

---

## 12. Conclusion

Denji is a **well-architected, tested, and extensible productivity application**.
The project demonstrates a strong understanding of modern frontend development, software correctness, and scalable design practices.

It serves as a solid foundation for future expansion while already meeting production-quality standards.

---

