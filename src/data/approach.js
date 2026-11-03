export const developmentProcess = [
  {
    step: "01",
    phase: "Understand",
    summary: "Requirements and business workflows.",
    description: "Analyse client operational requirements, domain constraints, user roles, and business objectives before writing any code. Map out user stories and data lifecycles."
  },
  {
    step: "02",
    phase: "Plan",
    summary: "Application architecture and data structure.",
    description: "Design system boundaries, define RESTful endpoint contracts, structure Mongoose database schemas, and map component hierarchies for clear separation of concerns."
  },
  {
    step: "03",
    phase: "Develop",
    summary: "Frontend and backend implementation.",
    description: "Build accessible React user interfaces with clean state management, and implement Node/Express controllers, business services, and database operations."
  },
  {
    step: "04",
    phase: "Integrate",
    summary: "APIs, authentication and database.",
    description: "Connect frontend client state with backend endpoints, configure JWT authentication and authorization guards, and integrate third-party utilities and file uploads."
  },
  {
    step: "05",
    phase: "Validate",
    summary: "Testing, debugging and issue resolution.",
    description: "Verify endpoints with Postman, audit UI responsiveness across mobile, tablet, and desktop breakpoints, resolve edge cases, and eliminate runtime exceptions."
  },
  {
    step: "06",
    phase: "Deploy",
    summary: "Deployment and ongoing maintenance.",
    description: "Configure environment variables, deploy to cloud platforms (Vercel, Render, MongoDB Atlas), monitor server performance, and maintain application stability."
  }
];
