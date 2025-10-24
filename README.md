# React Contact List Assignment

This is a simple contact list application built with React, created as part of the Tria frontend assignment.

**[View Live Demo](https://chandulakkimsetti.github.io/react-contact-list/)**

---

## Features

* **View Contacts:** Displays an initial list of contacts.
* **Search Contacts:** Dynamically filters the contact list in real-time as the user types a name in the search bar.
* **Responsive Design:** The layout adapts to different screen sizes.

---

## Setup & Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/chandulakkimsetti/react-contact-list.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd contact-list
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## Design Choices & Assumptions

* **Data:** The contact data is hardcoded in `src/data.js` as allowed by the prompt, mimicking a static API response.
* **State Management:** All core state (contacts list, search term) is managed in the top-level `App.jsx` component and passed down as props (lifting state up).
* **Styling:** I used simple, clean CSS with Flexbox for layout. No external component libraries (like Material-UI or Chakra) were used, to keep the project lightweight.
* **Search:** The search functionality is case-insensitive and matches any part of the contact's name.

## Libraries Used

* **React:** The core requirement for the project.
* **Vite:** Chosen as the build tool over Create React App for its faster development server and simpler configuration.
* **gh-pages:** A small dev-dependency used to simplify the deployment process to GitHub Pages.
