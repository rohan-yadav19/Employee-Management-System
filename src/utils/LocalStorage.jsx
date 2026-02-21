const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Build Login Page",
        description: "Create UI and validation for login page",
        date: "2026-01-20",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskNumber: 2,
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in navbar",
        date: "2026-01-18",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskNumber: 3,
        title: "Write Unit Tests",
        description: "Add unit tests for auth module",
        date: "2026-01-22",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Design Dashboard",
        description: "Create dashboard layout in Figma",
        date: "2026-01-21",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskNumber: 2,
        title: "Convert Design to HTML",
        description: "Implement dashboard using HTML & CSS",
        date: "2026-01-23",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskNumber: 3,
        title: "Optimize Images",
        description: "Compress and optimize dashboard images",
        date: "2026-01-24",
        category: "Performance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    firstName: "Suresh",
    email: "employee3@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Create API",
        description: "Build REST API for tasks",
        date: "2026-01-19",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskNumber: 2,
        title: "Connect Database",
        description: "Integrate MongoDB with Node.js",
        date: "2026-01-20",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskNumber: 3,
        title: "Handle API Errors",
        description: "Add proper error handling",
        date: "2026-01-22",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Setup Git Repo",
        description: "Initialize repository and branches",
        date: "2026-01-17",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskNumber: 2,
        title: "CI/CD Pipeline",
        description: "Configure GitHub Actions",
        date: "2026-01-21",
        category: "DevOps",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskNumber: 3,
        title: "Deployment",
        description: "Deploy app to server",
        date: "2026-01-25",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    firstName: "Priya",
    email: "employee5@example.com",
    password: "123",
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        taskNumber: 1,
        title: "Write Documentation",
        description: "Prepare project documentation",
        date: "2026-01-18",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskNumber: 2,
        title: "Code Review",
        description: "Review pull requests",
        date: "2026-01-21",
        category: "Review",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskNumber: 3,
        title: "Refactor Code",
        description: "Improve code readability",
        date: "2026-01-23",
        category: "Refactoring",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];
export const setLocalStorage = () => {
  const existingEmployees = localStorage.getItem("employees");
  const existingAdmin = localStorage.getItem("admin");

  if (!existingEmployees) {
    localStorage.setItem("employees", JSON.stringify(employees));
  }

  if (!existingAdmin) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
