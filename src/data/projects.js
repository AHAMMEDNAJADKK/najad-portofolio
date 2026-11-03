export const selectedProjects = [
  {
    id: "last-key",
    number: "01",
    name: "LASTKEY",
    subtitle: "Digital Will & Asset Nominee Management",
    category: "Security & Asset Management",
    isPrimary: true,
    layoutStyle: "full-width-feature",
    
    conciseDescription: "A secure digital legacy vault enabling individuals to catalog sensitive digital assets, assign beneficiaries, and transfer vital records upon verified bereavement documentation.",
    actualContribution: "Full-Stack Developer. Designed the complete MongoDB database schemas, built secure Express REST APIs with JWT and Multer file upload verification, implemented the nominee claim portal, and engineered the admin death-certificate verification workflow.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "Multer", "JWT Auth", "Tailwind CSS"],
    
    githubUrl: "https://github.com/AHAMMEDNAJADKK/Last-Key",
    liveUrl: "https://github.com/AHAMMEDNAJADKK/Last-Key",
    image: "/images/projects/lastkey.webp",
    backupImage: "/images/projects/lastkey-hero.jpg",
    hasActualScreenshot: true,
    
    // Case Study Detail Structure
    caseStudy: {
      introduction: "LastKey is a specialized digital will and asset nominee management application engineered to safeguard digital records, credentials, and financial documentation during life while providing a secure, verified transition mechanism for designated beneficiaries upon bereavement.",
      businessContext: "As individuals accumulate digital assets, accounts, and private documents, standard wills often fail to provide operational access to digital accounts. Without an automated, verified protocol, beneficiaries are frequently locked out of critical assets, or credentials risk premature exposure.",
      problem: "Traditional methods either expose sensitive digital credentials while the owner is alive, or lose them permanently after death because nominees lack access keys, and platforms require complex legal verification procedures.",
      solution: "Engineered a dual-portal platform featuring an encrypted personal vault for the owner and a dedicated claims portal for designated nominees. Incorporated an administrative verification workflow that requires certified death documentation before cryptographic release of asset access.",
      contribution: "Sole Full-Stack Developer on this project. Designed the database schemas (User, Nominee, Document, Verification), built authentication guards, implemented Multer file upload pipelines with MIME-type filtering, created React interfaces with Framer Motion, and engineered the verification state machine.",
      technicalImplementation: {
        frontend: "React.js with React Router v7, custom form validation, reactive state handling for asset registration, and protected routes for authenticated users and nominees.",
        backend: "Node.js and Express.js REST API with JWT authorization middleware, bcrypt password hashing, and Multer file storage for legal certificate uploads.",
        database: "MongoDB Atlas with Mongoose ODM modeling User accounts, Nominee designations, encrypted Document metadata, and Verification audit logs."
      },
      features: [
        "Encrypted personal asset and document cataloging vault.",
        "Granular nominee designation with specific asset-level authorizations.",
        "Dedicated nominee claim portal with legal death certificate submission.",
        "Admin verification dashboard with document inspection capabilities.",
        "Automatic access lockout preventing premature document disclosure.",
        "Audited claim logs with timestamped approval trails."
      ],
      challengesAndSolving: "Balancing zero-knowledge security during the owner's lifetime with guaranteed access for nominees after death. Solved by implementing an isolated verification lifecycle: nominee accounts have zero view permissions until an administrator verifies the submitted death certificate in the database.",
      relatedProjects: ["IT CONSULTANT", "DRIVE LINE"]
    }
  },
  {
    id: "drive-line",
    number: "02",
    name: "DRIVE LINE",
    subtitle: "Automobile Spare Parts CRM",
    category: "Automotive Operations CRM",
    isPrimary: false,
    layoutStyle: "image-left",
    
    conciseDescription: "A multi-branch operations and customer relationship management platform engineered for automobile spare-parts distributors to coordinate inventory leads, vehicle specializations, and supplier logistics.",
    actualContribution: "Full-Stack Developer at Kod Brand. Developed backend REST API endpoints, designed Mongoose schemas (Customer, Lead, Supplier, Branch, VehicleSpecialization), built frontend React modules for customer and lead tracking, and implemented branch data scoping.",
    technologies: ["React 19", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "Tailwind CSS", "RBAC"],
    
    githubUrl: "https://github.com/AHAMMEDNAJADKK",
    liveUrl: null,
    image: null,
    hasActualScreenshot: false,
    
    caseStudy: {
      introduction: "Drive Line CRM is an enterprise software system built for automobile spare-parts retail and distribution networks to manage multi-branch operations, vehicle part specifications, sales inquiries, and supplier procurement.",
      businessContext: "Automotive parts businesses handle thousands of distinct vehicle makes, models, and part serials. Sales inquiries across retail branches were previously managed on disconnected spreadsheets, resulting in lost customer follow-ups and misplaced inventory orders.",
      problem: "Lack of centralized lead tracking and failure to associate customer inquiries with exact vehicle specifications (make, model, year, engine variant) resulted in frequent order inaccuracies and delayed customer responses.",
      solution: "Engineered a centralized multi-branch CRM linking incoming customer inquiries directly to vehicle specializations, supplier catalogs, and follow-up schedules, with Super Admin oversight across branches.",
      contribution: "Full-stack development at Kod Brand. Implemented REST API controllers in Express, created Mongoose models with relational references, developed React frontend tables with branch-level filtering, and built follow-up notification logic.",
      technicalImplementation: {
        frontend: "React 19 and Vite with Tailwind CSS, dynamic data tables with multi-filter search (by branch, vehicle make, lead status), and modal dialogues for follow-up actions.",
        backend: "Express.js REST API with JWT authentication, custom role-based access control (RBAC) middleware ensuring branch managers only access their designated branch data.",
        database: "MongoDB Atlas models: Customer (contact and vehicle history), Lead (inquiry details, priority, stage), LeadActivity, Supplier, Branch, and AuditLog."
      },
      features: [
        "Multi-branch data isolation with centralized Super Admin overview.",
        "Automotive lead pipeline tracking from initial inquiry through quotation to closed sale.",
        "Vehicle specialization mapping linking customer queries to specific makes/models.",
        "Supplier procurement database with parts category indexing.",
        "Scheduled follow-up reminders and activity audit trails."
      ],
      challengesAndSolving: "Managing complex vehicle specification filters without sluggish database responses. Solved by creating compound indexes on the Lead and VehicleSpecialization collections in MongoDB.",
      relatedProjects: ["RAZAIN-BENZ", "KOD BRAND"]
    }
  },
  {
    id: "razain-benz",
    number: "03",
    name: "RAZAIN-BENZ",
    subtitle: "Driving School Management CRM",
    category: "Education & Financial ERP",
    isPrimary: false,
    layoutStyle: "image-right",
    
    conciseDescription: "A full-stack enterprise management system for driving schools and auto consultancies to manage student enrollment, batch scheduling, multi-method payment receipts, and daily cash drawer reconciliation.",
    actualContribution: "Full-Stack Developer at Kod Brand. Implemented backend controllers and atomic counter generators (STU-XXXX, REC-XXXX), designed payment receipt ledger with printable PDF generation, and created the Managing Director executive dashboard.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "Tailwind CSS", "Printable PDF"],
    
    githubUrl: "https://github.com/AHAMMEDNAJADKK",
    liveUrl: null,
    image: null,
    logoAsset: "/images/projects/benz-logo.png",
    hasActualScreenshot: false,
    
    caseStudy: {
      introduction: "Razain-Benz CRM is a production full-stack MERN enterprise application designed specifically for driving schools and auto consultancies to manage student candidate lifecycles, licensing categories, fee installments, and daily financial accounting.",
      businessContext: "Driving schools handle hundreds of student candidates across varying license classes (two-wheeler, four-wheeler, heavy transport). Tracking installments across Cash, UPI, and Bank Transfers without official computer-generated receipts created cash drawer discrepancies.",
      problem: "Uncoordinated batch scheduling, untracked fee balances, and the lack of official printed receipts led to disputes over payments and end-of-day cash drawer mismatches.",
      solution: "Built a centralized operational command center featuring atomic sequential receipt numbering, candidate ledgers, scheduled batch timetables, and an end-of-day daily collection reconciliation module.",
      contribution: "Full-Stack Developer at Kod Brand. Programmed atomic sequence generators guaranteeing zero-gap sequential receipt numbers, built the MD Executive Dashboard with live KPI counters, and implemented the printable receipt engine branded with the organization's official logo.",
      technicalImplementation: {
        frontend: "React + Vite with Tailwind CSS. Includes MD Executive Dashboard, official printable receipt generator branded with Benz logo, student financial statement portal, and daily collection sheets.",
        backend: "Node.js and Express REST services with Mongoose schemas, atomic MongoDB '$inc' counters for zero-gap sequential IDs, and financial aggregation pipelines.",
        database: "MongoDB Atlas models: Student (enrollment, course, total fee, balance), Payment (multi-method transaction records), Expense (operational expenditures), Batch, and Counter."
      },
      features: [
        "Managing Director (MD) Executive Dashboard with real-time financial metrics.",
        "Atomic sequence generators guaranteeing zero-gap sequential receipt numbers (REC-XXXX).",
        "Multi-method payment receipt ledger (Cash, UPI, Bank Transfer, Card) with printable PDF layout.",
        "Dedicated Student Ledger (/student-ledger) tracking installment balance sheets.",
        "Daily Collection & Cash Register (/daily-collection) for EOD drawer reconciliation."
      ],
      challengesAndSolving: "Eliminating duplicate receipt IDs during simultaneous payment submissions. Solved by implementing atomic counter increments using MongoDB's findOneAndUpdate with '$inc' operators prior to document persistence.",
      relatedProjects: ["DRIVE LINE", "IT CONSULTANT"]
    }
  },
  {
    id: "it-consultant",
    number: "04",
    name: "IT CONSULTANT",
    subtitle: "Business CRM Platform",
    category: "Enterprise Software ERP",
    isPrimary: false,
    layoutStyle: "image-left-wide",
    
    conciseDescription: "A comprehensive 12-module enterprise IT Services ERP and Project Management CRM unifying client sales pipelines, agile Kanban sprints, Git webhook auditing, and SLA maintenance agreements.",
    actualContribution: "Full-Stack Developer at Kod Brand. Developed REST API endpoints across modules, implemented JWT role-based access control, built React Kanban sprint board components, and integrated developer standup shift forms.",
    technologies: ["React 19", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "Redis", "Tailwind CSS", "Kanban DnD"],
    
    githubUrl: "https://github.com/AHAMMEDNAJADKK",
    liveUrl: null,
    image: null,
    hasActualScreenshot: false,
    
    caseStudy: {
      introduction: "Nexora IT Suite is a full-stack enterprise IT Services CRM and Project Management ERP tailored specifically for software development firms, digital agencies, and IT consulting organizations.",
      businessContext: "Technology service providers often manage customer inquiries in one tool, developer tasks in another, and client SLA contracts in spreadsheets. This fragmentation leads to breached SLA deadlines and unbilled deliverables.",
      problem: "Inability to trace a client project from the initial sales proposal through agile developer sprints to automated Git code commits and client support desk tickets.",
      solution: "Engineered an interconnected 12-module ERP linking sales leads to client accounts, client accounts to project milestones, milestones to agile Kanban sprint boards, and support desk tickets to SLA compliance timers.",
      contribution: "Full-Stack Developer at Kod Brand. Developed core API routes, implemented granular RBAC, built interactive drag-and-drop sprint boards with '@hello-pangea/dnd', and configured automated SLA response calculation logic.",
      technicalImplementation: {
        frontend: "React 19, Vite, Tailwind CSS, Lucide React, and '@hello-pangea/dnd' for smooth interactive drag-and-drop Kanban sprint management.",
        backend: "Node.js and Express.js with ES Modules, Redis caching for fast metric retrieval, and HMAC-SHA256 Git webhook handlers for commit linking.",
        database: "12 interconnected MongoDB Atlas collections: Client, Lead, Project, Milestone, Sprint, Task, DeveloperReport, Invoice, GitAudit, SupportTicket, SLAContract, and User."
      },
      features: [
        "12 enterprise modules spanning the entire software delivery lifecycle.",
        "Interactive drag-and-drop Agile sprint board with velocity tracking and status sync.",
        "Git commit and pull-request auditing via secure webhook integrations.",
        "Developer daily standup shift reports with task blocker tracking.",
        "Automated SLA response and resolution deadline calculation with breach alerts."
      ],
      challengesAndSolving: "Managing complex relational lookups across 12 collections in MongoDB without latency. Solved by implementing selective Mongoose projections and Redis caching for high-frequency dashboard queries.",
      relatedProjects: ["LASTKEY", "KOD BRAND"]
    }
  },
  {
    id: "kod-brand",
    number: "05",
    name: "KOD BRAND",
    subtitle: "Internal Business CRM",
    category: "Internal Operations Platform",
    isPrimary: false,
    layoutStyle: "compact-horizontal",
    
    conciseDescription: "A multi-department operations and task-tracking CRM built for internal agency operations, featuring role-tailored dashboards, telecaller lead classifications, and automated shift reporting.",
    actualContribution: "Junior Software Developer at Kod Brand. Developed full-stack modules, built responsive React components, implemented REST APIs for shift logs and lead statuses, debugged state persistence, and maintained MongoDB collections.",
    technologies: ["React 19", "Vite 8", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "Cloudinary", "RBAC"],
    
    githubUrl: "https://github.com/AHAMMEDNAJADKK",
    liveUrl: null,
    image: null,
    hasActualScreenshot: false,
    
    caseStudy: {
      introduction: "Kod Brand CRM is an internal operations tracking and customer relationship management system designed for multi-department organizations to coordinate workflows between Engineering, Design, Video Production, Telecalling, and HR.",
      businessContext: "Fast-growing agencies face communication silos and untracked daily employee outputs when managing disparate departmental tasks without a unified database.",
      problem: "Telecaller leads, designer project requests, and developer daily shift logs were scattered across disconnected channels without structured oversight.",
      solution: "Engineered a centralized internal operations system with granular role-based access control, dynamic sidebar navigation per role, telecaller lead categorization, and automated end-of-shift reporting.",
      contribution: "Junior Software Developer at Kod Brand. Built React components with Tailwind CSS, implemented REST endpoints for shift logs and lead statuses, debugged state synchronization, and managed database collections.",
      technicalImplementation: {
        frontend: "React 19 and Vite 8 with Tailwind CSS, Lucide icons, and document processing libraries ('xlsx', 'jspdf').",
        backend: "Node.js and Express.js REST API with JWT authentication, custom RBAC authorization middleware, and Cloudinary media upload integration.",
        database: "Mongoose schemas for multi-role users, categorized lead directories, daily shift logs, and task tracking records."
      },
      features: [
        "Granular Role-Based Access Control (Admin, MD, HR, Developer, Telecaller, Designer).",
        "Telecaller lead pipeline with temperature ratings (Hot, Warm, Cold, Follow-Up).",
        "Bulk lead import/export via Excel (.xlsx) and printable PDF reports.",
        "Employee task monitoring and attendance tracking.",
        "Automated end-of-day shift reports per department."
      ],
      challengesAndSolving: "Enforcing strict data isolation between departments while allowing executive managers holistic oversight. Solved by decoupling route authorization rules into reusable middleware layers on the Express backend.",
      relatedProjects: ["DRIVE LINE", "RAZAIN-BENZ"]
    }
  },
  {
    id: "wear-caviro",
    number: "06",
    name: "WEAR CAVIRO",
    subtitle: "E-commerce Application",
    category: "Footwear & Retail Platform",
    isPrimary: false,
    layoutStyle: "image-right-wide",
    
    conciseDescription: "A full-stack lifestyle sneaker and footwear e-commerce application featuring product catalog filtering, dynamic shopping cart via Context API, customer authentication, and an administrative stock control portal.",
    actualContribution: "Full-Stack Developer. Built both client and server applications from scratch: designed MongoDB schemas, built Express REST endpoints, created the React frontend with Tailwind CSS, implemented user authentication, and deployed to Vercel.",
    technologies: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "Tailwind CSS", "Context API", "Vercel"],
    
    githubUrl: "https://github.com/AHAMMEDNAJADKK/E-commerce",
    liveUrl: "https://e-commerce-d2p9.vercel.app/",
    image: null,
    hasActualScreenshot: false,
    
    caseStudy: {
      introduction: "Wear Caviro is a full-stack e-commerce web application featuring modern product showcases, responsive shopping cart management, customer authentication, and an administrative inventory control dashboard.",
      businessContext: "Footwear retail requires clean visual product presentation, quick size and category filtering, responsive cart manipulation, and straightforward inventory management for store administrators.",
      problem: "Providing a snappy, responsive browsing and cart experience without page reloads while maintaining accurate server-side stock and order tracking.",
      solution: "Developed a complete full-stack web application with responsive UI, dynamic shopping cart via React Context, secure order placement, and an administrative dashboard to manage products and orders.",
      contribution: "Full-Stack Developer. Designed the complete MERN application architecture from scratch, created the MongoDB product and order schemas, built the React shopping cart with Context API, and deployed the frontend to Vercel.",
      technicalImplementation: {
        frontend: "React + Vite with Tailwind CSS. Includes dynamic product catalog with filter controls, persistent cart state via Context API, and admin product management views.",
        backend: "Node.js and Express.js RESTful API with Multer for product image processing, JWT authentication for customers and admins, and secure MongoDB transaction handling.",
        database: "Mongoose models: Productmodel (title, price, description, sizes, stock, images), Order (items, delivery details, status), User, and Contact."
      },
      features: [
        "Interactive sneaker catalog with size and category filtering.",
        "Dynamic shopping cart with real-time price updates and quantity controls.",
        "Customer account portal with personal order history.",
        "Admin dashboard for adding, editing, and deleting inventory items.",
        "Live production deployment on Vercel with responsive mobile layouts."
      ],
      challengesAndSolving: "Managing cart state persistence across page navigations without desynchronizing inventory availability. Solved by combining React Context with local storage caching and server-side stock validation on checkout.",
      relatedProjects: ["LASTKEY", "IT CONSULTANT"]
    }
  }
];
