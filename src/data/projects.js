export const projectCategories = [
  "All Projects",
  "CRM Systems",
  "Full-Stack Applications",
  "E-commerce"
];

export const projectsData = [
  {
    id: "last-key",
    slug: "last-key",
    number: "01",
    title: "LastKey – Digital Will & Asset Nominee Management",
    shortTitle: "LastKey",
    category: "Full-Stack Applications",
    tagline: "Digital Will & Asset Nominee Management",
    badge: "Flagship Project",
    isFlagship: true,
    layoutType: "featured-full",
    subtitle: "A secure digital legacy vault and nominee asset management platform with verified bereavement document protocols.",
    summary: "LastKey enables individuals to catalog sensitive digital assets, assign designated beneficiaries, and transfer vital information securely upon verified legal death certificate review.",
    
    businessProblem: "Individuals accumulate critical digital assets, credentials, and financial documentation, but lack secure, automated methods to ensure beneficiaries receive access upon death without risking premature exposure or legal gridlock during life.",
    
    solutionProvided: "Developed a dual-portal platform featuring an encrypted personal asset vault for users and a claim submission portal for nominees. Implemented an administrative verification pipeline requiring certified death documentation before cryptographic release of asset access.",
    
    roleAndContribution: "Full-Stack Developer. Designed the complete database architecture, built secure REST APIs in Node.js/Express, implemented Multer file upload handling for certificates and documents, created the responsive React interface, and engineered the verification approval state machine.",
    
    frontendImplementation: "Built with React.js and React Router v7, featuring smooth page transitions with Framer Motion, accessible modal dialogues, real-time toast feedback via React Hot Toast, and secure protected routes for authenticated users, nominees, and administrators.",
    
    backendImplementation: "Node.js and Express.js REST API with JWT authentication, Bcrypt password hashing, Multer file upload middleware with file-type whitelisting, and strict authorization middleware separating user actions from admin verification controls.",
    
    databaseDesign: "MongoDB Atlas with Mongoose schemas: 'User' (user credentials and security preferences), 'Nominee' (beneficiary records and relationship mapping), 'Document' (asset metadata and release triggers), and 'Verification' (death certificate audit logs and verification states).",
    
    importantFeatures: [
      "Encrypted personal digital asset and document vault.",
      "Granular nominee designation with specific asset-level authorizations.",
      "Dedicated nominee access and claims portal with legal certificate submission.",
      "Admin verification review workflow with document inspection capabilities.",
      "Guaranteed access protection preventing premature disclosure.",
      "Audited claim logs with timestamped approval trails."
    ],
    
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "Framer Motion",
      "JWT Auth",
      "Multer",
      "Axios",
      "Tailwind CSS"
    ],
    
    challengesAndProblemSolving: "Balancing strict access privacy with seamless beneficiary retrieval after bereavement. Solved by implementing an isolated verification lifecycle where nominee claims remain locked until administrative verification of uploaded death certificates is confirmed in the database.",
    
    image: "/images/projects/lastkey.webp",
    backupImage: "/images/projects/lastkey-hero.jpg",
    githubUrl: "https://github.com/AHAMMEDNAJADKK/Last-Key",
    liveUrl: "https://github.com/AHAMMEDNAJADKK/Last-Key",
    completionStatus: "Completed Full-Stack Implementation",
    ownership: "Personal Flagship Project"
  },
  {
    id: "drive-line-crm",
    slug: "drive-line-crm",
    number: "02",
    title: "Drive Line CRM – Automobile Spare-Parts Management",
    shortTitle: "Drive Line CRM",
    category: "CRM Systems",
    tagline: "Multi-Branch Automotive Operations ERP",
    badge: "Enterprise CRM",
    isFlagship: false,
    layoutType: "editorial-card-wide",
    subtitle: "A multi-branch operations CRM tailored for automotive spare-parts distributors, inventory leads, and supplier logistics.",
    summary: "Drive Line CRM streamlines end-to-end automotive parts procurement, branch operations, lead follow-ups, and customer vehicle history across multiple retail and wholesale branches.",
    
    businessProblem: "Automobile spare-parts businesses manage thousands of part numbers across distinct vehicle makes, models, and years. Coordinating sales leads, supplier procurement, and follow-ups across decentralized branches led to lost inquiries and misordered inventory.",
    
    solutionProvided: "Engineered a centralized multi-branch CRM system linking incoming leads to customer vehicle specializations, tracking supplier procurement pipelines, scheduling follow-ups, and providing super admins with cross-branch performance oversight.",
    
    roleAndContribution: "Full-Stack Developer at Kod Brand. Developed core backend REST APIs in Node.js/Express, designed relational MongoDB schemas (Customer, Lead, Supplier, Branch, VehicleSpecialization), built frontend React modules for customer and lead tracking, and implemented role-based branch data scoping.",
    
    frontendImplementation: "React 19 with Vite and Tailwind CSS. Features dynamic data tables with multi-filter search (by branch, vehicle make, lead status), follow-up action modals, customer profile timelines, and super admin user permission toggles.",
    
    backendImplementation: "Express.js REST API with JWT authentication, custom role-based access control (RBAC) middleware ensuring branch managers only access their designated branch data, and automated activity logging for lead status changes.",
    
    databaseDesign: "MongoDB Atlas models: 'Customer' (contact and vehicle history), 'Lead' (inquiry details, priority, stage), 'LeadActivity' (follow-up notes and timestamps), 'Supplier' (parts specializations), 'Branch' (branch metadata), and 'AuditLog'.",
    
    importantFeatures: [
      "Multi-branch data isolation and centralized Super Admin overview.",
      "Lead pipeline tracking from initial inquiry through quotation to closed sale.",
      "Vehicle specialization mapping linking customer queries to specific makes/models.",
      "Supplier procurement database with parts category indexing.",
      "Lead follow-up scheduling with notification reminders.",
      "Comprehensive system audit logs tracking employee updates."
    ],
    
    technologies: [
      "React 19",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "Tailwind CSS",
      "Lucide React",
      "RBAC Middleware"
    ],
    
    challengesAndProblemSolving: "Handling multi-branch data segregation without duplicating schema logic. Solved by implementing branch-aware Mongoose query middleware that automatically scopes data queries based on the authenticated user's branch identifier.",
    
    image: null,
    githubUrl: "https://github.com/AHAMMEDNAJADKK",
    liveUrl: null,
    completionStatus: "Production-Ready Client Application",
    ownership: "Kod Brand Team Project (Core Developer)"
  },
  {
    id: "razain-benz-crm",
    slug: "razain-benz-crm",
    number: "03",
    title: "Razain-Benz CRM – Driving School & Auto Consultant ERP",
    shortTitle: "Razain-Benz CRM",
    category: "CRM Systems",
    tagline: "Candidate Ledger & Daily Cash Register",
    badge: "Financial ERP",
    isFlagship: false,
    layoutType: "editorial-card-wide",
    subtitle: "Enterprise management system for driving schools featuring candidate enrollment, batch scheduling, and automated receipts.",
    summary: "A production MERN stack enterprise application designed for auto consultants and driving schools to manage student candidates, batch scheduling, multi-method payment receipts, and daily cash drawer reconciliation.",
    
    businessProblem: "Driving schools manage rolling batches of students across licensing categories, making manual tracking of fee installments, cash collections, and RTO test schedules prone to discrepancies, missed payments, and lack of printed customer receipts.",
    
    solutionProvided: "Built an integrated operational command center with atomic sequential receipt generation, candidate financial ledgers, scheduled batch management, and end-of-day cash drawer balancing sheets.",
    
    roleAndContribution: "Full-Stack Developer at Kod Brand. Developed the atomic sequence generator for student and receipt IDs, engineered the payment receipt ledger with print/PDF export, built the MD Executive Dashboard with live KPI counters, and implemented student ledger lookups.",
    
    frontendImplementation: "React + Vite with Tailwind CSS. Includes Managing Director dashboard with real-time financial stats, official printable receipt generator branded with Benz logo, student lookup portal, and responsive daily collection sheets.",
    
    backendImplementation: "Node.js and Express REST services with Mongoose schemas, atomic MongoDB '$inc' counters for zero-gap sequential IDs ('STU-XXXX', 'REC-XXXX', 'EXP-XXXX'), and specialized financial calculation aggregation pipelines.",
    
    databaseDesign: "Schemas include: 'Student' (candidate record, enrolled course, total fees, balance), 'Payment' (multi-method: Cash, UPI, Bank Transfer, Card), 'Expense' (operational fuel, maintenance, salaries), 'Batch' & 'Class' (timetables, vehicle allocations), and 'Counter'.",
    
    importantFeatures: [
      "Managing Director (MD) Executive Dashboard with real-time collection KPIs.",
      "Atomic sequence generators guaranteeing zero-gap sequential receipt numbers.",
      "Multi-method payment ledger with instant PDF download and official print layout.",
      "Dedicated Student Ledger (/student-ledger) tracking installment balance sheets.",
      "Daily Collection & Cash Register (/daily-collection) for EOD cash balancing.",
      "Comprehensive vehicle maintenance and operational expense tracker."
    ],
    
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "Tailwind CSS",
      "Printable PDF",
      "RESTful API"
    ],
    
    challengesAndProblemSolving: "Eliminating race conditions in simultaneous payment receipt generation. Solved by implementing atomic counter increments via MongoDB's findOneAndUpdate with '$inc' operators to ensure sequential integrity.",
    
    image: null,
    githubUrl: "https://github.com/AHAMMEDNAJADKK",
    liveUrl: null,
    completionStatus: "Production Client Software",
    ownership: "Kod Brand Client Project (Core Developer)"
  },
  {
    id: "it-consultant-crm",
    slug: "it-consultant-crm",
    number: "04",
    title: "Nexora IT Suite – IT Services & Software ERP",
    shortTitle: "Nexora IT Suite",
    category: "CRM Systems",
    tagline: "12-Module Enterprise Services ERP",
    badge: "12-Module ERP",
    isFlagship: false,
    layoutType: "editorial-card-accent",
    subtitle: "A comprehensive 12-module enterprise ERP tailored for IT consulting agencies, software firms, and dev shops.",
    summary: "Nexora IT Suite bridges client acquisition, project scoping, agile sprints, developer shift reporting, SLA contracts, and Git commit auditing into a single unified platform.",
    
    businessProblem: "Software consultancies suffer when client communications, agile development tasks, developer timesheets, SLA maintenance agreements, and invoicing operate in disconnected silos.",
    
    solutionProvided: "Engineered an interconnected 12-module ERP linking sales leads to client accounts, client accounts to projects, projects to agile Kanban sprints, sprints to developer shift reports, and support tickets to SLA breach timers.",
    
    roleAndContribution: "Full-Stack Developer at Kod Brand. Developed REST API endpoints across modules, implemented JWT role-based access control, built React Kanban sprint board components, integrated developer standup shift forms, and assisted in configuring automated SLA calculation rules.",
    
    frontendImplementation: "React 19, Vite, Tailwind CSS v4, Lucide React, Framer Motion, and '@hello-pangea/dnd' for smooth interactive drag-and-drop Kanban sprint management.",
    
    backendImplementation: "Node.js and Express.js with ES Modules, Redis caching for fast session and metric retrieval, HMAC-SHA256 GitHub/GitLab webhook signature verification, and Groq SDK AI risk assessment.",
    
    databaseDesign: "12 interconnected MongoDB Atlas collections: 'Client', 'Lead', 'Project', 'Milestone', 'Sprint', 'Task', 'DeveloperReport', 'Invoice', 'GitAudit', 'SupportTicket', 'SLAContract', and 'User'.",
    
    importantFeatures: [
      "12 comprehensive ERP modules covering full software delivery lifecycle.",
      "Drag-and-drop Agile sprint board with velocity tracking and status sync.",
      "Git commit and pull-request auditing via secure webhook integrations.",
      "Developer daily standup shift reports with task and blocker logs.",
      "Automated SLA response and resolution deadline tracking with breach alerts.",
      "Dual-layer support ticket system isolating internal developer notes from clients."
    ],
    
    technologies: [
      "React 19",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Redis",
      "Tailwind CSS v4",
      "Kanban DnD",
      "Groq SDK"
    ],
    
    challengesAndProblemSolving: "Managing complex data relationships across 12 modules without performance degradation. Solved through strategic MongoDB schema indexing and optimized lean queries with selective Mongoose projection.",
    
    image: null,
    githubUrl: "https://github.com/AHAMMEDNAJADKK",
    liveUrl: null,
    completionStatus: "Complete Enterprise Architecture",
    ownership: "Kod Brand Enterprise ERP (Core Developer)"
  },
  {
    id: "kod-brand-crm",
    slug: "kod-brand-crm",
    number: "05",
    title: "Kod Brand CRM – Enterprise Operations & Multi-Dept System",
    shortTitle: "Kod Brand CRM",
    category: "CRM Systems",
    tagline: "Internal Multi-Department Tracking",
    badge: "Operations CRM",
    isFlagship: false,
    layoutType: "editorial-card-compact",
    subtitle: "Internal operations tracking and CRM system for multi-department organizations with granular role-based permissions.",
    summary: "Built to coordinate multi-department workflows—including Engineering, Telecalling, Design, Video Production, and HR—featuring real-time pipeline management and automated reporting. (Public disclosure limited to non-confidential architecture).",
    
    businessProblem: "Multi-department agencies face communication overhead, lost telecaller leads, delayed project handoffs, and untracked daily employee outputs when using disparate spreadsheets.",
    
    solutionProvided: "Developed a centralized operations platform with role-based access control, dynamic sidebar navigation per department role, telecaller lead categorization, and automated end-of-shift reporting.",
    
    roleAndContribution: "Junior Software Developer at Kod Brand. Developed full-stack modules, built responsive React components, implemented REST APIs for shift logs and lead statuses, debugged state persistence, and maintained MongoDB database collections.",
    
    frontendImplementation: "React 19 and Vite 8 with Tailwind CSS v4, Framer Motion animations, Lucide React icons, and Excel/PDF export libraries ('xlsx', 'jspdf').",
    
    backendImplementation: "Node.js and Express.js REST API with JWT authentication, custom RBAC authorization middleware, Nodemailer email notifications, and Cloudinary media upload integration.",
    
    databaseDesign: "Mongoose schemas for multi-role users (Super Admin, MD, HR, Developer, Telecaller, etc.), categorized lead directories, daily shift logs, and task tracking records.",
    
    importantFeatures: [
      "Department-specific dashboards (Admin, HR, Developers, Videographers, Telecallers).",
      "Telecaller lead pipeline with temperature ratings (Hot, Warm, Cold, Follow-Up).",
      "Bulk lead import/export via Excel (.xlsx) and printable PDF reports.",
      "Employee task monitoring and attendance tracking.",
      "Automated end-of-day shift reports per department.",
      "Dynamic permission management controlling module visibility per user."
    ],
    
    technologies: [
      "React 19",
      "Vite 8",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Tailwind CSS v4",
      "Cloudinary",
      "RBAC"
    ],
    
    challengesAndProblemSolving: "Enforcing strict data isolation between departments while allowing executive managers holistic oversight. Solved by decoupling route authorization rules into reusable middleware layers on the API.",
    
    image: null,
    githubUrl: "https://github.com/AHAMMEDNAJADKK",
    liveUrl: null,
    completionStatus: "Internal Production System",
    ownership: "Kod Brand Internal Software (Software Developer)"
  },
  {
    id: "wear-caviro",
    slug: "wear-caviro",
    number: "06",
    title: "Wear Caviro – E-Commerce Footwear & Sneaker Store",
    shortTitle: "Wear Caviro",
    category: "E-commerce",
    tagline: "Lifestyle Sneaker E-Commerce Platform",
    badge: "Live Web App",
    isFlagship: false,
    layoutType: "editorial-card-compact",
    subtitle: "A modern, full-stack lifestyle sneaker and footwear e-commerce application with dynamic cart, checkout, and admin panel.",
    summary: "Wear Caviro is a full-stack e-commerce web application featuring modern product showcases, responsive cart management, customer authentication, and an administrative inventory management dashboard.",
    
    businessProblem: "Footwear retail requires high-fidelity product imagery, instant size/color filtering, intuitive cart persistence, and simple inventory management for store administrators.",
    
    solutionProvided: "Developed a complete full-stack web application with responsive UI, dynamic shopping cart via React Context, secure order placement, and an administrative dashboard to manage products and orders.",
    
    roleAndContribution: "Full-Stack Developer. Built both client and server applications from scratch: designed MongoDB schemas, built Express REST endpoints, created the React frontend with Tailwind CSS, implemented user authentication, and deployed to Vercel.",
    
    frontendImplementation: "React + Vite with Tailwind CSS. Includes dynamic product catalog with filter controls, persistent cart state via Context API, user profile order history, and administrative product management views.",
    
    backendImplementation: "Node.js and Express.js RESTful API with Multer for product image processing, JWT authentication for customers and admins, and secure MongoDB transaction handling.",
    
    databaseDesign: "Mongoose models: 'Productmodel' (title, price, description, sizes, stock, images), 'Order' (user reference, items, delivery details, status), 'User' (auth credentials, role), and 'Contact'.",
    
    importantFeatures: [
      "Interactive sneaker catalog with size and category filtering.",
      "Dynamic shopping cart with real-time price updates and quantity controls.",
      "Customer account portal with personal order history.",
      "Admin dashboard for adding, editing, and deleting inventory items.",
      "Secure user authentication (Registration, Login, Password Reset).",
      "Live production deployment with responsive mobile layouts."
    ],
    
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "Tailwind CSS",
      "Context API",
      "Multer",
      "Vercel"
    ],
    
    challengesAndProblemSolving: "Managing cart state persistence across page navigations without desynchronizing inventory availability. Solved by combining React Context with local storage caching and server-side stock validation on checkout.",
    
    image: null,
    githubUrl: "https://github.com/AHAMMEDNAJADKK/E-commerce",
    liveUrl: "https://e-commerce-d2p9.vercel.app/",
    completionStatus: "Completed & Deployed",
    ownership: "Personal Full-Stack Project"
  }
];
