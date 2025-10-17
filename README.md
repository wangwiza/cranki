# Cranki - A Modern Task Management Application

Cranki is a full-stack task management application designed to help you organize your daily tasks and projects with a clean and intuitive interface. Built with a powerful combination of React and Spring Boot, it provides a seamless experience for creating, managing, and tracking your to-dos.

-----

## ✨ Features

  * **Task Management**: Create, edit, and delete tasks with ease.
  * **Prioritization**: Assign priorities (High, Medium, Low) to your tasks to focus on what matters most.
  * **Status Tracking**: Keep track of your progress with "Not Done", "In Progress", and "Done" statuses.
  * **Drag-and-Drop**: Reorder your tasks with an intuitive drag-and-drop interface.
  * **Custom Properties**: Add custom properties to your tasks, such as categories, assignees, or due dates, with support for single-select, multi-select, and literal values.
  * **Filtering**: Easily filter your tasks by any property to find exactly what you're looking for.
  * **Detailed Task View**: Click on any task to view and edit its details, including name, description, and properties.
  * **Responsive Design**: A clean and modern UI that looks great on any device.

-----

## 🛠️ Tech Stack

### **Frontend**

  * **React**: A popular JavaScript library for building user interfaces.
  * **Vite**: A blazing-fast frontend build tool.
  * **TypeScript**: A statically typed superset of JavaScript.
  * **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
  * **shadcn/ui**: A collection of beautifully designed, accessible UI components.
  * **dnd-kit**: A modern, lightweight, and extensible drag-and-drop toolkit for React.

### **Backend**

  * **Spring Boot**: A powerful framework for building robust Java-based applications.
  * **Java 21**: The latest long-term support release of Java.
  * **Gradle**: A versatile build automation tool.
  * **Spring Data JPA**: For simplified data access and database interaction.
  * **MySQL**: A reliable and widely-used relational database.
  * **RESTful API**: A well-structured API for seamless communication between the frontend and backend.

-----

## 🚀 Getting Started

To get Cranki up and running on your local machine, follow these simple steps.

### **Prerequisites**

  * **Node.js**: Latest LTS version recommended.
  * **Java Development Kit (JDK)**: Version 21 or higher.
  * **Gradle**: For building and running the backend.
  * **Docker**: For running the MySQL database.

### **Backend Setup**

1.  **Start the database:**
    Open a terminal and run the following command to start a MySQL container:
    ```bash
    docker run --name ecse-428-project-db -e MYSQL_ROOT_PASSWORD=lala -e MYSQL_DATABASE=dev -p 3306:3306 -d mysql:latest
    ```
2.  **Navigate to the backend directory:**
    ```bash
    cd backend/cranki
    ```
3.  **Run the Spring Boot application:**
    ```bash
    ./gradlew bootRun
    ```
    The backend server will start on `http://localhost:8080`.

### **Frontend Setup**

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The frontend will be available at `http://localhost:5173`.

-----

## 🧪 Running Tests

To run the backend tests, navigate to the `backend/cranki` directory and run:

```bash
./gradlew test
```

-----

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for more details.
