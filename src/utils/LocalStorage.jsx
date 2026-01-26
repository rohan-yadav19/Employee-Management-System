const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
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
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
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
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
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
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
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
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
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
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
