export interface ProjectMission {
  id: string;
  title: string;
  tagline: string;
  category: "AI & ML" | "Full-Stack Web" | "Mobile & Systems" | "Data & Cloud" | "Cybersecurity";
  status: "Deployed & Operational" | "Research Prototype" | "Active Mission";
  summary: string;
  problem: string;
  whoItHelps: string;
  architecture: {
    overview: string;
    flowchart: string[];
    databaseDesign: string;
    apiDesign: string;
    aiPipeline?: string;
  };
  features: string[];
  challenges: { problem: string; solution: string }[];
  metrics: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
}

export interface Competition {
  id: string;
  title: string;
  event: string;
  organizer: string;
  date: string;
  achievement: string;
  description: string;
  badge: "National Top 45" | "Intercollegiate" | "State Level" | "Achievement";
}

export interface ThoughtNote {
  id: string;
  title: string;
  question: string;
  category: string;
  hypothesis: string;
  insights: string[];
  date: string;
  readTime: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  desc?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "SONAL PARMAR",
    tagline: "FINITE LIFE. INFINITE CURIOSITY.",
    roles: [
      "B.Tech CSE (Data Science) at D. J. Sanghvi (DJSCE)",
      "MH CET State Rank 1566 (Top 2% of 70,000+)",
      "Creatives Co-Comm Member at S4DS (Society for Data Science)",
      "GDG National Top 45 Finalist",
      "Full-Stack & Systems Builder"
    ],
    location: "Mumbai, India",
    email: "sonal.parmar@somaiya.edu",
    phone: "+91 8766686204",
    github: "https://github.com/Sonal-sp",
    linkedin: "https://www.linkedin.com/in/sonal-parmar-8898752a2",
    medium: "https://medium.com/@airryaxolotl2607",
    notion: "#",
    resumeUrl: "#",
    version: "v5.3.0-OBSERVATORY",
    stats: {
      projectsBuilt: 9,
      nationalRank: "MH CET Rank 1566",
      ideasWaiting: 15,
      booksReadThisYear: 12,
      status: "DJSCE CSE (Data Science)",
    }
  },

  competitions: [
    {
      id: "mh-cet-2026",
      title: "MH CET Engineering Entrance",
      event: "Maharashtra State CET Cell",
      organizer: "Government of Maharashtra CET Cell",
      date: "2026",
      achievement: "State Rank 1566 / 70,000+ Candidates",
      description: "Secured All Maharashtra Rank 1566 out of over 70,000 candidates in the State CET examination, earning admission to B.Tech Computer Science & Engineering (Data Science) at D. J. Sanghvi College of Engineering.",
      badge: "State Level"
    },
    {
      id: "pixelverse-2026",
      title: "PIXELVERSE (National Tech Event)",
      event: "PIXELVERSE 2026",
      organizer: "Google Developer Groups (GDG) On Campus, SIES GST",
      date: "March 8, 2026",
      achievement: "Top 45 National Finalist",
      description: "Selected among the Top 45 national participants in the prestigious PIXELVERSE event organized by Google Developer Groups (GDG) On Campus at SIES Graduate School of Technology.",
      badge: "National Top 45"
    },
    {
      id: "bug-busters-2025",
      title: "Bug Busters - Intercollegiate Competition",
      event: "TECH निर्माण 2K25 Intercollegiate IT Fest",
      organizer: "Smt. Chandibai Himathmal Mansukhani College, Ulhasnagar",
      date: "January 24, 2025",
      achievement: "Intercollegiate Contestant",
      description: "Tested code debugging, syntax troubleshooting, and algorithmic error resolution under strict time limits.",
      badge: "Intercollegiate"
    },
    {
      id: "pixel-perfection-2025",
      title: "Pixel Perfection - UI/UX Design Challenge",
      event: "TECH निर्माण 2K25 Intercollegiate IT Fest",
      organizer: "Smt. Chandibai Himathmal Mansukhani College, Ulhasnagar",
      date: "January 24, 2025",
      achievement: "Intercollegiate Design Contestant",
      description: "Designed high-fidelity pixel-perfect interfaces and responsive web layouts.",
      badge: "Intercollegiate"
    },
    {
      id: "geeks-for-geeks-2025",
      title: "Geeks for Geeks Algorithmic Contest",
      event: "TechXpression 2025",
      organizer: "Dept of CS & IT, B. K. Birla College, Kalyan (Autonomous A++ NAAC)",
      date: "2025",
      achievement: "Certificate of Achievement",
      description: "Competed in algorithmic problem solving, data structures, and rapid coding challenges.",
      badge: "Achievement"
    },
    {
      id: "iq-wave-2023",
      title: "IQ-WAVE State-Level Technical Quiz",
      event: "IQ-WAVE 2023",
      organizer: "K. J. Somaiya Polytechnic, Mumbai",
      date: "October 2023",
      achievement: "State Event Volunteer & Coordinator",
      description: "Managed logistics and state-level contestant coordination for the flagship technical quiz event.",
      badge: "State Level"
    }
  ] as Competition[],

  certifications: [
    { title: "Data Science Essentials with Python", issuer: "Cisco Networking Academy", date: "Online", desc: "Python data science pipelines, statistical analysis, and data manipulation." },
    { title: "Cybersecurity Analyst Job Simulation", issuer: "Forage", date: "Virtual Internship", desc: "Threat detection, incident response, and security architecture analysis." },
    { title: "Python for Data Analysis: Pandas & NumPy", issuer: "Coursera", date: "Online", desc: "In-depth array manipulation, dataframe cleaning, and exploratory data analysis." },
    { title: "Customer Service with Python: Build a Chatbot using ChatGPT", issuer: "Coursera", date: "Online", desc: "LLM API integration, conversational state flow, and Python bot development." },
    { title: "Getting Started with Microsoft Excel", issuer: "Coursera", date: "Online", desc: "Data modeling, formulas, lookup functions, and analytical reporting." },
    { title: "Dart Programming For Beginners", issuer: "Infosys Springboard", date: "Mar 2025", desc: "Object-oriented Dart programming syntax and state management." },
    { title: "Business Communications", issuer: "Infosys Springboard", date: "Jan 2025", desc: "Corporate presentation, technical writing, and communication." }
  ] as Certification[],

  origins: {
    heading: "Every journey starts with a question.",
    narrative: [
      {
        year: "2023 • Secondary Foundation",
        title: "Curiosity over Consumption",
        story: "Graduated with 89.60% from Lok Nagari Public School. Serving as Sports Captain taught me leadership, discipline, and team coordination, while my natural curiosity pushed me to understand how software systems function behind the screen."
      },
      {
        year: "2023 - 2026 • K. J. Somaiya Polytechnic",
        title: "Diploma in Computer Science & Engineering (94.00%)",
        story: "Immersed deeply into core Computer Science—building a 94.00% academic record. Mastered C, C++, Java, Python, Operating Systems, Linux Administration, DBMS, and Data Structures. Volunteered at the IQ-WAVE State-Level Technical Quiz in Oct 2023."
      },
      {
        year: "Jun 2025 - Sep 2025 • IT Infrastructure Internship",
        title: "IT Support Intern at KJSSC / ITI Mumbai",
        story: "Gained real-world IT operations exposure under the Industrial Training Institute (ITI) at K J Somaiya College of Science and Commerce. Learned how enterprise IT infrastructure, campus network services, and academic systems function under high daily demand."
      },
      {
        year: "2026 • Higher Engineering Milestone",
        title: "MH CET Rank 1566 & Admission to D. J. Sanghvi (DJSCE)",
        story: "Ranked 1566 among 70,000+ candidates across Maharashtra State in the MH CET examination. Admitted to Dwarkadas J. Sanghvi College of Engineering (DJSCE) for B.Tech in Computer Science & Engineering (Data Science). Joined the Society for Data Science (S4DS) as Creatives Co-Committee Member."
      },
      {
        year: "2026 • Systems & Capstone Releases",
        title: "mini_redis in Rust, SafeStep Wearable & Pixelverse Top 45",
        story: "Architected mini_redis (async key-value database in Rust using Tokio and RESP2) and SafeStep (smart elderly fall detection wearable with ESP32 C3 & Flutter app). Selected among Top 45 National Participants at GDG Pixelverse."
      }
    ]
  },

  manifesto: [
    {
      statement: "I believe technology should reduce uncertainty.",
      detail: "In a world flooded with noise and complexity, the most powerful systems are those that provide clarity and confidence."
    },
    {
      statement: "I build products that help people make better decisions.",
      detail: "Software is at its best when it acts as a cognitive amplifier, enabling humans to make informed choices with ease."
    },
    {
      statement: "I value curiosity over comfort.",
      detail: "Staying in familiar territory guarantees stagnation. Growth happens at the edge of what you don't yet understand."
    },
    {
      statement: "Learning over knowing.",
      detail: "Expertise is temporary; adaptability is permanent. I take pride not in knowing every answer, but in knowing how to find it."
    },
    {
      statement: "Impact over popularity.",
      detail: "Fads come and go. I build for longevity, maintainability, and tangible value for real human beings."
    },
    {
      statement: "Progress over perfection.",
      detail: "Shipped prototypes teach more than unreleased masterpieces. Build fast, validate, reflect, and refine."
    }
  ],
  manifestoClosing: "If one project inspires another person to build something even better, then I've succeeded.",

  howIThink: [
    {
      id: "problem-first",
      title: "Problem First",
      summary: "I begin with understanding why something should exist.",
      description: "Before writing a single line of code, I interrogate the problem space. Who is hurting? What is broken? If the problem isn't real, the solution is irrelevant.",
      deliverables: ["User Pain Map", "Root Cause Analysis", "Problem Statement Brief"]
    },
    {
      id: "research",
      title: "Research",
      summary: "I learn before I build.",
      description: "I study prior art, existing research papers, database schemas, and architectural trade-offs. I don't reinvent wheels unless the existing wheel is fundamentally flawed.",
      deliverables: ["Competitive Benchmarking", "Tech Stack Trade-off Matrix", "Feasibility Study"]
    },
    {
      id: "architecture",
      title: "Architecture",
      summary: "I design systems before writing code.",
      description: "A well-architected system makes future changes trivial. I diagram data flow, API contracts, database schemas, and failure boundaries before implementation begins.",
      deliverables: ["ER Diagrams", "API Specs", "System Topology Diagrams"]
    },
    {
      id: "prototype",
      title: "Prototype",
      summary: "Build quickly. Validate ideas.",
      description: "I build minimal, high-fidelity prototypes to test core assumptions. Speed to feedback is more valuable than premature optimization.",
      deliverables: ["Interactive Prototypes", "POC Scripts", "Core Feature MVPs"]
    },
    {
      id: "iteration",
      title: "Iteration",
      summary: "Improve continuously.",
      description: "Software is a living organism. I use telemetry, performance metrics, and user feedback loops to refine codebase quality, loading speeds, and visual UX.",
      deliverables: ["Performance Audits", "Refactoring Pass", "UX Polish Cycles"]
    },
    {
      id: "reflection",
      title: "Reflection",
      summary: "Every project teaches something.",
      description: "Post-project retrospectives are mandatory. Every success reveals leverage points; every failure reveals hidden edge cases and architecture lessons for the next mission.",
      deliverables: ["Post-Mortem Logs", "Architecture Notes", "Re-usable Boilerplates"]
    }
  ],

  constellationCategories: [
    {
      id: "languages",
      name: "Programming Languages",
      description: "The foundational syntax of logic, execution, and memory safety.",
      skills: [
        { name: "Rust", whereUsed: "mini_redis async key-value cache engine", experienceNotes: "Tokio async runtime, ownership & borrowing semantics, RESP2 protocol parser, AOF persistence engine, egui desktop GUI.", whatLearned: "Memory safety without garbage collection enables predictable zero-cost abstractions.", relatedMissions: ["mini-redis"] },
        { name: "Python", whereUsed: "Nova Voice Assistant, Cine-AI, CyberGuard Flask backend, Coursera Pandas/NumPy, Cisco Data Science", experienceNotes: "Speech synthesis, NLP sentiment analysis, Flask microservices, Pandas & NumPy data processing pipelines.", whatLearned: "Python enables rapid scientific prototyping, AI voice assistants, and data science pipelines.", relatedMissions: ["Cine-AI", "CyberGuard-Pro"] },
        { name: "Java", whereUsed: "Object-Oriented design, KJS Polytechnic coursework", experienceNotes: "Strong foundation in multi-threading, OOP patterns, and data structures.", whatLearned: "Strict object-oriented discipline builds robust maintainable software." },
        { name: "C Programming", whereUsed: "Low-level memory allocation, system logic", experienceNotes: "Pointer arithmetic, manual memory layout, structural algorithms.", whatLearned: "Understanding memory layout makes higher-level code far more efficient." },
        { name: "C++ / Embedded C", whereUsed: "ESP32 C3 SafeStep Capstone firmware, Arduino IDE, GeeksforGeeks TechXpression 2025", experienceNotes: "Embedded C++ for ESP32 microcontroller, MPU6050 sensor reading, threshold free-fall detection.", whatLearned: "Embedded hardware programming requires strict memory & timing control.", relatedMissions: ["safestep-capstone"] },
        { name: "JavaScript / TypeScript", whereUsed: "Interactive Web apps, Next.js 14, React, Three.js, MediaPipe AR, Pixelverse National Event", experienceNotes: "Async/Await, ES6+, WebRTC streaming, HTML5 Canvas API, Next.js App Router.", whatLearned: "TypeScript type safety eliminates runtime client state crashes." },
        { name: "Dart", whereUsed: "SafeStep Capstone Flutter Mobile App, Infosys Springboard Certification", experienceNotes: "Completed Infosys Springboard Dart Certification. Built SafeStep Flutter companion mobile app.", whatLearned: "Strongly typed client state management streamlines mobile UIs.", relatedMissions: ["safestep-capstone"] },
        { name: "SQL / MySQL", whereUsed: "Relational database queries, DBMS schemas", experienceNotes: "Normalized schemas, complex JOINs, relational constraints.", whatLearned: "A clean normalized schema prevents data corruption." },
        { name: "PHP", whereUsed: "Dynamic server-side web backends", experienceNotes: "Form handling, relational DB connectors, server-rendered views.", whatLearned: "Server-side rendering remains simple and pragmatic." }
      ]
    },
    {
      id: "mobile-hardware",
      name: "Mobile & Embedded IoT Hardware",
      description: "Creating wearable IoT devices, ESP32 microcontrollers & Flutter mobile apps.",
      skills: [
        { name: "Flutter Mobile App", whereUsed: "SafeStep Capstone Elderly Companion Mobile App", experienceNotes: "Riverpod state management, Firebase Core & Messaging, SOS escalation, live location sharing.", whatLearned: "Flutter delivers responsive, cross-platform health companion apps.", relatedMissions: ["safestep-capstone"] },
        { name: "ESP32 C3 Microcontroller", whereUsed: "SafeStep Capstone Wearable Hardware", experienceNotes: "ESP32 C3 Super-Mini board, Wi-Fi HTTP client, MPU6050 I2C bus communication, piezo buzzer alerts.", whatLearned: "Compact microcontrollers unlock low-cost wearable health solutions.", relatedMissions: ["safestep-capstone"] },
        { name: "MPU6050 Accelerometer/Gyro", whereUsed: "SafeStep 6-DOF motion monitoring", experienceNotes: "Reading 3-axis acceleration and gyroscopic rotation data for impact and free-fall detection.", whatLearned: "Threshold acceleration algorithms accurately isolate fall events.", relatedMissions: ["safestep-capstone"] },
        { name: "n8n Webhook Automation", whereUsed: "SafeStep automated WhatsApp & Email SOS alerts", experienceNotes: "n8n workflow automation engine, HTTP webhooks, Twilio API integration.", whatLearned: "No-code/low-code automation pipelines provide zero-latency emergency alerts.", relatedMissions: ["safestep-capstone"] }
      ]
    },
    {
      id: "frontend",
      name: "Frontend Engineering",
      description: "Crafting modern visual interfaces and fluid interactions.",
      skills: [
        { name: "React & Next.js 14", whereUsed: "Observatory Portfolio, My Cute Photobooth, Geo-Insights, SwiftShift", experienceNotes: "Next.js App Router, functional design systems, custom hooks, state management, WebRTC.", whatLearned: "Declarative UI rendering simplifies complex interactive states.", relatedMissions: ["my-cute-photobooth", "Geo-Insights", "Swift-Shift"] },
        { name: "HTML5 & CSS3", whereUsed: "All web projects, Pixel Perfection TECH-Nirman 2K25", experienceNotes: "Semantic HTML, WAI-ARIA, flexbox, CSS grid, keyframes.", whatLearned: "Semantic structure is the foundation of web accessibility." },
        { name: "Tailwind CSS", whereUsed: "SwiftShift, Geo-Insights, Portfolio", experienceNotes: "Custom theme configuration, responsive breakpoints, sleek dark modes.", whatLearned: "Utility CSS speeds up UI iteration while maintaining design token consistency." },
        { name: "Framer Motion", whereUsed: "SwiftShift, Observatory Portfolio", experienceNotes: "Spring physics, layout animations, exit animations, gestures.", whatLearned: "Physics-based micro-interactions elevate tool user experience." },
        { name: "Vite", whereUsed: "SwiftShift, Geo-Insights build tooling", experienceNotes: "Instant HMR, ESM bundling, fast local dev environment.", whatLearned: "Fast build feedback loops accelerate developer velocity." }
      ]
    },
    {
      id: "backend",
      name: "Backend & Systems",
      description: "Building robust server architectures, Rust caches, and microservices.",
      skills: [
        { name: "Rust Tokio Async Runtime", whereUsed: "mini_redis multi-threaded TCP server", experienceNotes: "Asynchronous TCP networking, Tokio tasks, mutex-protected HashMaps, RESP2 protocol parsing.", whatLearned: "Async I/O with Tokio provides maximum throughput for concurrent network servers.", relatedMissions: ["mini-redis"] },
        { name: "Node.js & Express", whereUsed: "Asynchronous API services, REST endpoints", experienceNotes: "Non-blocking event loop, middleware pipelines, routing.", whatLearned: "Non-blocking I/O scales gracefully under high concurrent loads." },
        { name: "FastAPI & Flask", whereUsed: "CyberGuard Pro, Cine-AI Python services", experienceNotes: "Python web services, Pydantic type validation, Vercel deployments.", whatLearned: "Lightweight Python backends enable instant AI deployment." },
        { name: "REST APIs & Webhooks", whereUsed: "SafeStep n8n webhooks, TMDB API in Cine-AI, GitHub API", experienceNotes: "RESTful HTTP status codes, JSON serialization, webhook listeners.", whatLearned: "Webhooks provide instantaneous event-driven server alerts." }
      ]
    },
    {
      id: "ai-data-science",
      name: "Artificial Intelligence & Data Science",
      description: "Cognitive models, S4DS Data Science society, NLP, Pandas/NumPy, and AR gesture tracking.",
      skills: [
        { name: "Society for Data Science (S4DS)", whereUsed: "D. J. Sanghvi (DJSCE) S4DS Creatives Co-Committee Member", experienceNotes: "Designing technical media, data science visual assets, workshop promo materials, and data science event branding.", whatLearned: "Visual communication makes complex data science concepts approachable." },
        { name: "NLP Sentiment Analysis", whereUsed: "Cine-AI audience review analyzer", experienceNotes: "TextBlob sentiment polarity scores, text preprocessing, review classification.", whatLearned: "NLP transforms unstructured review text into numerical sentiment scores.", relatedMissions: ["Cine-AI"] },
        { name: "Pandas & NumPy Data Analysis", whereUsed: "Coursera Python Data Analysis Certification, Cine-AI", experienceNotes: "Completed Coursera Pandas & NumPy Certification. Exploratory data analysis & dataframe manipulation.", whatLearned: "Numerical matrices and dataframes form the bedrock of data science." },
        { name: "ChatGPT API Chatbot Integration", whereUsed: "Coursera Customer Service Chatbot Certification", experienceNotes: "Completed Coursera ChatGPT Python Chatbot Certification. OpenAI API hooks, prompt engineering.", whatLearned: "LLM API integration enables natural conversational state flow." },
        { name: "Data Science Essentials", whereUsed: "Cisco Networking Academy Certification", experienceNotes: "Completed Cisco Data Science Essentials with Python. Data pipelines & statistical analysis.", whatLearned: "Statistical data processing converts raw figures into actionable insight." },
        { name: "MediaPipe Hand Tracking", whereUsed: "Pokemon AR Simulator", experienceNotes: "Real-time hand gesture recognition (Pinch-to-Charge), landmark tracking.", whatLearned: "Computer vision gesture tracking removes the need for physical controllers.", relatedMissions: ["pokemon-ar-sim"] },
        { name: "Three.js / 3D Web", whereUsed: "Geo-Insights, Portfolio Space Canvas", experienceNotes: "3D scene graphs, lighting, particle physics, globe visualization.", whatLearned: "Spatial 3D visualization makes complex geographical data intuitive.", relatedMissions: ["Geo-Insights"] }
      ]
    },
    {
      id: "databases",
      name: "Databases & Data Modeling",
      description: "In-memory caches, AOF persistence, relational, document, and spreadsheet design.",
      skills: [
        { name: "In-Memory Cache & AOF Persistence", whereUsed: "mini_redis database engine", experienceNotes: "Designing append-only file (AOF) log persistence and in-memory key-value dictionary storage in Rust.", whatLearned: "Combining in-memory speed with AOF write logs prevents data loss during server restarts.", relatedMissions: ["mini-redis"] },
        { name: "MongoDB", whereUsed: "Unstructured document storage, user profiles", experienceNotes: "Aggregation pipelines, schema validation, index tuning.", whatLearned: "Document flexibility demands careful schema design discipline." },
        { name: "MySQL / Relational DBMS", whereUsed: "Normalized schemas, KJS Polytechnic DBMS labs", experienceNotes: "Normalized tables, foreign key constraints, index design.", whatLearned: "ACID compliance ensures absolute data safety." },
        { name: "Firestore & SQLite", whereUsed: "SafeStep Flutter App, embedded local DB", experienceNotes: "Firestore document collections, security rules, offline caching.", whatLearned: "Lightweight local DBs enable robust offline user apps." },
        { name: "Microsoft Excel Data Modeling", whereUsed: "Coursera Microsoft Excel Certification", experienceNotes: "Completed Coursera Getting Started with Microsoft Excel. Formulas, lookup tables, analytical reporting.", whatLearned: "Structured spreadsheets remain the universal business data language." }
      ]
    },
    {
      id: "cloud-security",
      name: "Cloud, Security & Platforms",
      description: "Cybersecurity analysis, serverless platforms, and deployment.",
      skills: [
        { name: "Cybersecurity Analyst Simulation", whereUsed: "Forage Cybersecurity Analyst Virtual Internship", experienceNotes: "Threat detection, incident response analysis, security architecture assessment.", whatLearned: "Proactive threat detection prevents systemic system vulnerabilities." },
        { name: "Password Entropy & Security", whereUsed: "CyberGuard Pro security analyzer", experienceNotes: "Shannon entropy calculations, dictionary matching, keyboard walk detection.", whatLearned: "Combining mathematical entropy with pattern heuristics improves security." },
        { name: "Firebase & Supabase", whereUsed: "SafeStep Flutter app backend, serverless auth", experienceNotes: "Firebase Messaging, Firestore RLS policies, vector storage.", whatLearned: "Serverless primitives drastically accelerate prototype velocity." },
        { name: "Vercel & Streamlit Cloud", whereUsed: "Live deployments for all projects", experienceNotes: "Git-driven preview deployments, environment variables, edge caching.", whatLearned: "Instant continuous delivery turns repos into live web apps." }
      ]
    },
    {
      id: "devops-infrastructure",
      name: "DevOps & Infrastructure",
      description: "Containerization, Linux administration, and system operations.",
      skills: [
        { name: "Git & GitHub", whereUsed: "Version control for all repositories (@Sonal-sp)", experienceNotes: "Branching strategies, commit hygiene, PR reviews, GitHub API hooks.", whatLearned: "Git history is a communication log for your future self." },
        { name: "Linux Administration", whereUsed: "KJS Polytechnic lab OS & IT Support Internship at KJSSC", experienceNotes: "CLI navigation, permissions, Bash scripting, systemd service management.", whatLearned: "Fluency in Linux CLI unlocks complete server control." },
        { name: "Docker & Virtual Machines", whereUsed: "App containerization & testing environments", experienceNotes: "Multi-stage Dockerfiles, docker-compose, VM snapshot backups.", whatLearned: "Containerization ensures code executes identically across environments." },
        { name: "IT Infrastructure Support", whereUsed: "IT Support Intern at KJSSC / ITI Mumbai", experienceNotes: "Managed educational IT operations, network hardware, and academic support systems.", whatLearned: "Enterprise IT infrastructure requires disciplined operational maintenance." }
      ]
    },
    {
      id: "design",
      name: "Design & UI/UX Engineering",
      description: "Crafting intuitive visual layouts, S4DS media assets, and pixel-perfect UI.",
      skills: [
        { name: "Figma & Creative Design", whereUsed: "S4DS Creatives Co-Comm, UI wireframing, Pixel Perfection competition", experienceNotes: "Auto-layout, component variants, S4DS promotional visual assets, interactive prototyping.", whatLearned: "Design iterations in Figma are 10x faster than in code." },
        { name: "UI & UX Design", whereUsed: "Pixel Perfection TECH-Nirman 2K25, SafeStep Flutter UI", experienceNotes: "Typography hierarchies, contrast checks, user flow mapping.", whatLearned: "Remove unnecessary decisions to create effortless user flow." },
        { name: "Wireframing & Prototyping", whereUsed: "Low-fi structural block ideation to interactive click-throughs", experienceNotes: "Paper sketches, low-fi digital blocks, interactive prototype transitions.", whatLearned: "Structure first, aesthetic polish second." }
      ]
    },
    {
      id: "tools",
      name: "Developer Tools",
      description: "Instruments used to build, test, and profile software.",
      skills: [
        { name: "VS Code & Cargo / Rust CLI", whereUsed: "Primary IDEs for web, Rust, Flutter & ESP32 firmware", experienceNotes: "Cargo package manager, rustc compiler, VS Code Rust-analyzer.", whatLearned: "Mastering compiler feedback speeds up memory-safe system coding." },
        { name: "Android Studio", whereUsed: "SafeStep Flutter mobile app & native Android profiling", experienceNotes: "Emulator configuration, APK profiling, ADB commands.", whatLearned: "Profiling tools spot performance bottlenecks before launch." },
        { name: "Postman", whereUsed: "API endpoint testing & documentation", experienceNotes: "Environment variables, pre-request scripts, automated collections.", whatLearned: "Testing endpoints in isolation saves hours of frontend debugging." },
        { name: "Tableau & QGIS", whereUsed: "Data visualization & geospatial mapping", experienceNotes: "Chart creation, metric filtering, Geo-Insights spatial data.", whatLearned: "Visual mapping turns raw numbers into intuitive stories." },
        { name: "Arduino IDE", whereUsed: "SafeStep ESP32 firmware, sensor reading", experienceNotes: "MPU6050 sensor reading, serial monitor debugging, C++ firmware.", whatLearned: "Bridging code with physical hardware is pure magic." },
        { name: "MS Office", whereUsed: "SafeStep Project Report & academic documentation", experienceNotes: "Word technical formatting, project report authoring.", whatLearned: "Clear technical documentation accelerates project evaluation." }
      ]
    },
    {
      id: "concepts",
      name: "Engineering Concepts & Contests",
      description: "Theoretical pillars, capstone methodology, and algorithmic problem solving.",
      skills: [
        { name: "Iterative Engineering Methodology", whereUsed: "SafeStep Capstone Project Report", experienceNotes: "Iterative process model: requirement analysis, prototype build, sensor threshold tuning, testing, final deployment.", whatLearned: "Iterative hardware/software refinement guarantees system reliability." },
        { name: "Code Debugging & Troubleshooting", whereUsed: "Bug Busters competition at TECH-Nirman 2K25", experienceNotes: "Participated in Bug Busters. Syntax error isolation, logic bug fixes under pressure.", whatLearned: "Systematic elimination of variables is the fastest path to resolving bugs." },
        { name: "Data Structures & Algorithms", whereUsed: "Geeks for Geeks contest at TechXpression 2025, KJS Polytechnic", experienceNotes: "Trees, Graphs, Hash Maps, Heaps, Big-O analysis, BFS/DFS.", whatLearned: "Algorithmic efficiency determines how systems scale to millions." },
        { name: "Operating Systems Theory", whereUsed: "KJS Polytechnic academic coursework", experienceNotes: "Threads, concurrency, deadlocks, virtual memory management.", whatLearned: "Concurrency requires disciplined synchronization." },
        { name: "Relational Database Management (RDBMS)", whereUsed: "KJS Polytechnic DBMS coursework", experienceNotes: "Relational algebra, B-Trees, WAL, normalization.", whatLearned: "Understanding storage engines prevents data corruption." },
        { name: "Computer Networking", whereUsed: "IT Support Internship at KJSSC, OSI model", experienceNotes: "HTTP/HTTPS, TCP/IP sockets, DNS routing, packet inspection.", whatLearned: "The internet is a chain of resilient fallbacks." }
      ]
    }
  ],

  missions: [
    {
      id: "mini-redis",
      title: "mini_redis: Async In-Memory Key-Value DB in Rust",
      tagline: "High-performance asynchronous key-value store with RESP2 protocol, AOF persistence & desktop GUI",
      category: "Mobile & Systems",
      status: "Deployed & Operational",
      featured: true,
      year: "2026",
      summary: "A high-performance, asynchronous in-memory key-value database and cache built with Rust, Tokio, and RESP2 (Redis Serialization Protocol). Features a multi-threaded async TCP server with Append-Only File (AOF) log persistence, an interactive CLI REPL, and a desktop GUI built with egui (eframe).",
      problem: "Traditional caching solutions can be memory-unsafe or lack transparent persistence and multi-interface debugging tools.",
      whoItHelps: "Systems engineers, Rust developers, and database performance researchers.",
      architecture: {
        overview: "Multi-threaded async TCP server built on Tokio runtime, parsing RESP2 binary streams, executing memory-safe HashMap operations, and flushing mutation logs to an Append-Only File (AOF).",
        flowchart: [
          "TCP Client / REPL / GUI -> Sends RESP2 commands over TCP socket",
          "Tokio Async Engine -> Spawns lightweight tasks per incoming connection",
          "RESP2 Frame Parser -> Decodes raw byte buffers into Redis command vectors (SET, GET, DEL, EXPIRE)",
          "In-Memory Store -> Mutates thread-safe Mutex-wrapped HashMap",
          "AOF Persistence -> Appends state-changing commands to disk log for recovery"
        ],
        databaseDesign: "In-memory hash table with time-to-live (TTL) expiration sweep + AOF disk log replay.",
        apiDesign: "Standard Redis RESP2 TCP wire protocol compatible with Redis CLI tools."
      },
      features: [
        "Asynchronous multi-threaded TCP server powered by Rust & Tokio",
        "Full RESP2 Protocol parsing (Simple Strings, Errors, Integers, Bulk Strings, Arrays)",
        "Append-Only File (AOF) disk persistence for crash recovery",
        "Interactive Terminal REPL CLI for low-latency testing",
        "Modern desktop GUI management client built with egui (eframe)"
      ],
      challenges: [
        {
          problem: "Managing concurrent thread-safe access to the shared key-value dictionary without causing lock contention.",
          solution: "Utilized fine-grained Mutex sharding across key hash ranges to allow parallel concurrent reads and writes."
        }
      ],
      metrics: [
        "Memory-safe execution with zero data race vulnerabilities thanks to Rust borrow checker",
        "Sub-millisecond query latency across thousands of concurrent Tokio async tasks"
      ],
      lessonsLearned: [
        "Rust's strict compile-time ownership guarantees eliminate entire classes of concurrent data races in high-throughput network servers."
      ],
      futureImprovements: [
        "Add cluster replication and memory eviction policies (LRU/LFU)"
      ],
      techStack: ["Rust", "Tokio", "RESP2 Protocol", "egui (eframe)", "CLI REPL", "AOF Persistence"],
      githubUrl: "https://github.com/Sonal-sp/mini_redis",
      liveUrl: "https://github.com/Sonal-sp/mini_redis"
    },
    {
      id: "nova-voice-assistant",
      title: "Nova: An AI Voice Assistant",
      tagline: "Intelligent desktop voice assistant with speech recognition, intent execution & voice synthesis",
      category: "AI & ML",
      status: "Deployed & Operational",
      featured: true,
      year: "2026",
      summary: "Nova is an intelligent AI voice assistant built in Python that translates voice input into automated desktop actions, web search navigation, knowledge retrieval, and real-time audio responses using advanced speech recognition pipelines.",
      problem: "Traditional desktop workflows require continuous manual keyboard and mouse inputs, slowing down multitasking and hands-free computer control.",
      whoItHelps: "Developers, students, and accessibility-focused users needing hands-free voice automation.",
      architecture: {
        overview: "Modular Python voice pipeline that captures microphone audio via PyAudio, executes acoustic speech-to-text modeling, parses command intent tokens, and synthesizes speech responses with pyttsx3.",
        flowchart: [
          "Microphone Input -> Captures live audio stream through PyAudio",
          "Speech-to-Text Engine -> Converts speech waveforms into text using Google Speech Recognition",
          "NLP Intent Classifier -> Evaluates command intent, parameters, and task triggers",
          "System Execution Engine -> Triggers desktop apps, web searches, YouTube playback, or Wikipedia summaries",
          "Audio Synthesis -> Renders human-like audio feedback via pyttsx3 speech driver"
        ],
        databaseDesign: "Local JSON configuration and user preference schema.",
        apiDesign: "RESTful web APIs for weather telemetry, Wikipedia queries, and search services.",
        aiPipeline: "Acoustic speech-to-text tokenization combined with natural language command parsing."
      },
      features: [
        "Real-time voice query recognition and wake-word response",
        "Automated web search, Wikipedia summary reading, and YouTube video playback",
        "Desktop system controls (volume, application launching, time/date announcements)",
        "Dynamic audio pitch, rate, and voice profile configuration",
        "Resilient offline command fallback mode"
      ],
      challenges: [
        {
          problem: "Background environmental noise caused microphone audio recognition dropouts.",
          solution: "Implemented dynamic ambient energy threshold calibration before listening to isolate background noise."
        }
      ],
      metrics: [
        "Sub-second command recognition and execution latency for local desktop tasks",
        "Over 95% accuracy in standard indoor audio environments"
      ],
      lessonsLearned: [
        "Voice user interfaces demand forgiving intent-matching heuristics and clear audio feedback cues."
      ],
      futureImprovements: [
        "Integrate local LLM (Ollama / Llama 3) for conversational contextual memory"
      ],
      techStack: ["Python", "SpeechRecognition", "pyttsx3", "PyAudio", "NLP", "AI Assistant"],
      githubUrl: "https://github.com/Sonal-sp/Nova-An-AI-voice-assistant-",
      liveUrl: "https://github.com/Sonal-sp/Nova-An-AI-voice-assistant-"
    },
    {
      id: "my-cute-photobooth",
      title: "My Cute Photobooth: Japanese Purikara Digital Booth",
      tagline: "Browser-based digital photobooth with WebRTC streaming & draggable stickers",
      category: "Full-Stack Web",
      status: "Deployed & Operational",
      featured: true,
      year: "2026",
      summary: "A fully responsive browser-based digital photobooth built with React. Brings the magic of a Japanese purikara sticker booth straight to your laptop or phone—allowing users to snap 4-pic photostrips, decorate with draggable stickers, apply aesthetic filters, and save memories in a persistent digital scrapbook.",
      problem: "Physical photobooths are expensive and inaccessible, while basic camera apps lack fun, creative Japanese purikara sticker customization.",
      whoItHelps: "Casual web users, friends making photo memories, and sticker art lovers.",
      architecture: {
        overview: "React application leveraging browser WebRTC MediaDevices API for camera streaming, Canvas API for image filter rendering, and LocalStorage for scrapbook saving.",
        flowchart: [
          "WebRTC MediaStream -> Connects to user's webcam with live video feed",
          "Photo Capture Engine -> Takes 4 sequential photos with countdown timers",
          "Sticker Canvas -> Allows dragging, scaling, & rotating purikara stickers",
          "Digital Scrapbook -> Saves exported PNG photostrips to LocalStorage"
        ],
        databaseDesign: "IndexedDB / LocalStorage for persistent local scrapbook saves.",
        apiDesign: "WebRTC MediaDevices API & HTML Canvas 2D Context API."
      },
      features: [
        "Real-time WebRTC webcam capture with countdown shutter",
        "Classic Japanese Purikara 4-pic vertical photostrip layout",
        "Draggable & resizable cute sticker overlays",
        "Aesthetic filter presets (Vintage, Sepia, Soft Glow, Mono)",
        "Persistent local digital scrapbook gallery"
      ],
      challenges: [
        {
          problem: "Exporting high-resolution photostrips with overlapping canvas stickers caused image blurriness.",
          solution: "Rendered sticker vector coordinates to a high-DPI offscreen HTML Canvas before downloading."
        }
      ],
      metrics: [
        "Instant client-side photostrip generation with zero server lag",
        "100% privacy—photos processed entirely in client browser"
      ],
      lessonsLearned: [
        "Building delight into simple consumer web tools requires meticulous attention to UI micro-interactions."
      ],
      futureImprovements: [
        "Add short GIF animation photostrip exporter"
      ],
      techStack: ["React", "JavaScript", "Canvas API", "WebRTC", "Tailwind CSS", "Vercel"],
      githubUrl: "https://github.com/Sonal-sp/my-cute-photobooth",
      liveUrl: "https://my-cute-photobooth.vercel.app"
    },
    {
      id: "cine-ai",
      title: "Cine-AI: Data Science & Review Sentiment Web App",
      tagline: "Real-time movie recommendations with AI-powered NLP audience sentiment analysis",
      category: "AI & ML",
      status: "Deployed & Operational",
      featured: true,
      year: "2026",
      summary: "An advanced, responsive data science web application providing real-time movie recommendations, live multimedia trailer integration, and automated AI NLP sentiment analysis on audience reviews, powered by TMDB REST API.",
      problem: "Moviegoers spend excessive time scrolling through long reviews without understanding overall crowd sentiment polarity or finding accurate trailer previews.",
      whoItHelps: "Film enthusiasts, data science learners, and moviegoers seeking instant review sentiment breakdown.",
      architecture: {
        overview: "Full-stack Streamlit Python application connecting live TMDB API endpoints to a TextBlob NLP sentiment pipeline.",
        flowchart: [
          "User Input -> Searches movie title in Streamlit UI",
          "TMDB REST API -> Fetches movie metadata, posters & live trailer video keys",
          "NLP Sentiment Engine -> Ingests user reviews & calculates TextBlob polarity scores",
          "Analytical Dashboard -> Renders real-time sentiment distribution charts & trailer player"
        ],
        databaseDesign: "TMDB Live REST API integration with local session state caching for query results.",
        apiDesign: "RESTful HTTP requests to TMDB API endpoints with bearer authentication.",
        aiPipeline: "TextBlob NLP sentiment engine extracting polarity (-1.0 to +1.0) and subjectivity."
      },
      features: [
        "Real-time movie search & metadata discovery",
        "Automated AI-powered NLP review sentiment polarity analysis",
        "Embedded live multimedia trailer streaming player",
        "Interactive recommendation carousel based on genre vectors"
      ],
      challenges: [
        {
          problem: "Raw movie reviews contained HTML noise and special characters that skewed NLP polarity scores.",
          solution: "Implemented regex text cleaning & normalization filters before passing text to TextBlob."
        }
      ],
      metrics: [
        "100% real-time sentiment analysis output on live review streams",
        "Integrated across thousands of TMDB global movie titles"
      ],
      lessonsLearned: [
        "NLP sentiment analysis turns qualitative text noise into actionable numerical metrics."
      ],
      futureImprovements: [
        "Integrate transformer-based BERT models for deeper emotion classification"
      ],
      techStack: ["Python", "Streamlit", "TextBlob NLP", "TMDB API", "Data Science"],
      githubUrl: "https://github.com/Sonal-sp/Cine-AI",
      liveUrl: "https://cine-ai-5gtq7kducedualejubnk9i.streamlit.app/"
    },
    {
      id: "geo-insights",
      title: "Geo-Insights: 3D Geospatial Discovery Tool",
      tagline: "Interactive 3D geospatial discovery tool for geography students & civil services aspirants",
      category: "Full-Stack Web",
      status: "Deployed & Operational",
      featured: true,
      year: "2026",
      summary: "A minimalist, interactive 3D geospatial discovery tool designed for geography students and civil services aspirants to explore physical terrain features, spatial coordinates, and regional data visually.",
      problem: "Geography and civil services aspirants struggle to visualize 3D spatial terrain and geographical features from static 2D textbook diagrams.",
      whoItHelps: "Geography students, civil service (UPSC/MPSC) aspirants, and spatial researchers.",
      architecture: {
        overview: "React + Three.js interactive 3D globe visualization built with Vite and Tailwind CSS.",
        flowchart: [
          "Interactive 3D Globe -> Rendered using Three.js WebGL shaders",
          "Spatial Pins -> Hovering location coordinates triggers regional data card",
          "Terrain Layers -> Toggles physical, geopolitical, and climate overlays"
        ],
        databaseDesign: "Client-side GeoJSON dataset optimization.",
        apiDesign: "RESTful geo-coordinate fetching."
      },
      features: [
        "Interactive 3D WebGL globe navigation",
        "Geographical feature pinpoints with educational summaries",
        "Clean dark-mode aesthetic tailored for long study sessions",
        "Vite & Tailwind CSS optimized performance"
      ],
      challenges: [
        {
          problem: "Large GeoJSON files caused initial globe rendering lag.",
          solution: "Simplified 3D polygon meshes and implemented lazy loading for terrain layers."
        }
      ],
      metrics: [
        "60 FPS smooth 3D globe rotation and zoom",
        "Deployed live on Vercel"
      ],
      lessonsLearned: [
        "3D spatial graphics transform abstract textbook geography into memorable interactive mental maps."
      ],
      futureImprovements: [
        "Add interactive quiz mode for geography aspirants"
      ],
      techStack: ["React", "Three.js", "Tailwind CSS", "Vite", "JavaScript", "Vercel"],
      githubUrl: "https://github.com/Sonal-sp/Geo-Insights",
      liveUrl: "https://geo-insights-beta.vercel.app"
    },
    {
      id: "safestep-capstone",
      title: "SafeStep: Smart Elderly Fall Detection & Alert System",
      tagline: "Final Year Capstone: ESP32 Wearable Wristband + Companion Flutter Mobile App with n8n Automation",
      category: "Mobile & Systems",
      status: "Deployed & Operational",
      featured: true,
      year: "2025-2026",
      summary: "SafeStep is an intelligent, low-cost wearable fall detection band and cross-platform Flutter mobile application designed to enhance elderly personal safety through real-time motion monitoring, 6-DOF sensor fusion, local buzzer alarms, and automated n8n SOS alerts via WhatsApp & Email.",
      problem: "Sudden falls among elderly individuals frequently go unnoticed without constant manual supervision, leading to delayed emergency medical response and severe complications.",
      whoItHelps: "Elderly individuals living independently, caregivers, family guardians, and healthcare facilities.",
      architecture: {
        overview: "Embedded ESP32 C3 Super-Mini wristband with MPU6050 accelerometer/gyroscope linked via Wi-Fi HTTP Webhooks to an n8n automation engine and a Flutter mobile companion app.",
        flowchart: [
          "Wearable Band (ESP32 C3 + MPU6050) -> Continuously samples 3-axis motion & acceleration",
          "Embedded Fall Detection Engine -> Detects free-fall threshold & sudden impact condition",
          "Local Audible Alert -> Triggers piezo buzzer (20m range) for immediate local notice",
          "n8n Automation Engine -> Ingests webhook payload & triggers instant WhatsApp & Email SOS alerts",
          "Flutter Companion App -> Displays AI Health Insights, medicine reminders, live GPS tracking & emergency services"
        ],
        databaseDesign: "Firebase Firestore for elderly user profiles, medical history, medicine schedules, and emergency contacts.",
        apiDesign: "HTTP REST Webhooks for ESP32 alert transmission + Twilio API integration via n8n workflows.",
        aiPipeline: "Sensor threshold classification algorithm distinguishing minor impacts from true fall conditions."
      },
      features: [
        "Compact wristwatch wearable enclosure with ESP32 C3 Super-Mini & MPU6050 6-DOF sensor",
        "Dual Fall Detection Logic (Free-fall acceleration drop + impact force threshold)",
        "Instant local piezo buzzer alarm (heard up to 20 meters)",
        "Automated n8n notification engine sending instant WhatsApp & Email alerts to guardians",
        "Cross-platform Flutter Mobile Application (`main.dart`) with secure Auth & Elderly Profile management",
        "Medicine Management System with scheduled intake reminders & adherence tracking",
        "AI Health Insights dashboard tracking safety scores & activity trends",
        "Guardian Mode with live GPS location link sharing (Google Maps)",
        "Nearby Emergency Services finder locating local hospitals, police & medical stores"
      ],
      challenges: [
        {
          problem: "Differentiating between benign everyday movements (e.g. sitting quickly) and actual free-fall drop impacts.",
          solution: "Architected a dual-stage confirmation window requiring both a free-fall acceleration dip and a subsequent high-G impact within 1.3 seconds before confirming a fall."
        },
        {
          problem: "Sending instant SOS alerts to guardians' phones without building expensive dedicated SMS server infrastructure.",
          solution: "Integrated an n8n webhook automation pipeline connecting the ESP32 directly to WhatsApp (via Twilio API) and Gmail."
        }
      ],
      metrics: [
        "Sub-2 second instant emergency alert delivery to guardian WhatsApp & Email",
        "Low hardware component cost (~Rs 900/- total), making it accessible for wide adoption",
        "100% successful fall detection & local buzzer trigger rate during capstone testing"
      ],
      lessonsLearned: [
        "Combining low-cost embedded hardware (ESP32) with cloud automation (n8n) and cross-platform UIs (Flutter) creates reliable, life-saving IoT systems."
      ],
      futureImprovements: [
        "Integrate onboard GPS module for direct satellite tracking without smartphone pairing",
        "Implement machine learning model on microcontrollers (TinyML) for personalized fall pattern learning"
      ],
      techStack: ["Flutter", "Dart", "ESP32 C3", "MPU6050", "Arduino IDE", "n8n Automation", "Firebase", "Webhooks", "Twilio API"],
      githubUrl: "https://github.com/Sonal-sp/SafeStep",
      liveUrl: "https://github.com/Sonal-sp/SafeStep"
    },
    {
      id: "cyberguard-pro",
      title: "CyberGuard Pro: AI Password Security Analyzer",
      tagline: "AI-based password strength analyzer with entropy calculation & attack pattern detection",
      category: "Cybersecurity",
      status: "Deployed & Operational",
      featured: true,
      year: "2026",
      summary: "CyberGuard Pro is an AI-based password strength analyzer built with Flask that evaluates password security using mathematical entropy calculation, attack pattern detection, and intelligent security suggestions with a privacy-focused UI.",
      problem: "Users rely on weak, predictable passwords vulnerable to dictionary attacks and brute-force cracking.",
      whoItHelps: "Security-conscious web users, students, and developers testing password resilience.",
      architecture: {
        overview: "Flask Python backend performing Shannon entropy calculations, dictionary matching, and pattern scoring.",
        flowchart: [
          "Password Input -> Client sends masked string to Flask service",
          "Entropy Calculator -> Calculates bits of entropy (log2 space)",
          "Pattern Detector -> Checks sequential characters, keyboard walks, and common dictionaries",
          "Security Telemetry -> Returns score, estimated crack time, and actionable security suggestions"
        ],
        databaseDesign: "Local encrypted dictionary data structure.",
        apiDesign: "RESTful JSON endpoints hosted on Vercel."
      },
      features: [
        "Shannon entropy mathematical security calculation",
        "Dictionary & keyboard walk pattern detection",
        "Estimated brute-force crack time calculator",
        "Privacy-focused client-side evaluation option"
      ],
      challenges: [
        {
          problem: "Preventing sensitive user passwords from being logged or stored on external servers.",
          solution: "Evaluated passwords strictly in-memory with zero persistence or analytics logging."
        }
      ],
      metrics: [
        "Sub-5ms password evaluation response time",
        "Zero password data persistence guarantees privacy"
      ],
      lessonsLearned: [
        "Combining mathematical entropy with pattern heuristics gives far realistic password strength scores."
      ],
      futureImprovements: [
        "Integrate HaveIBeenPwned API breach lookup option"
      ],
      techStack: ["Python", "Flask", "HTML5", "CSS3", "Cybersecurity", "Vercel"],
      githubUrl: "https://github.com/Sonal-sp/CyberGuard-Pro",
      liveUrl: "https://cyber-guard-pro-gamma.vercel.app"
    },
    {
      id: "pokemon-ar-sim",
      title: "Pokemon AR Simulator: Hand Gesture Recognition",
      tagline: "Augmented Reality web app translating human hand gestures into elemental animations",
      category: "Mobile & Systems",
      status: "Deployed & Operational",
      featured: true,
      year: "2026",
      summary: "A high-performance Augmented Reality (AR) web simulation using MediaPipe hand tracking and HTML5 Canvas particle physics. Features real-time gesture recognition (Pinch-to-Charge) and 8 distinct elemental types.",
      problem: "Traditional web games rely on clunky keyboard/mouse inputs instead of natural spatial human gestures.",
      whoItHelps: "Web AR enthusiasts, computer vision learners, and interactive game fans.",
      architecture: {
        overview: "Client-side WebRTC camera stream coupled with MediaPipe Hands neural network for 21-landmark 3D spatial tracking and Canvas particle physics.",
        flowchart: [
          "WebRTC Stream -> Captures live 60fps video feed",
          "MediaPipe Hands -> Detects 21 3D hand landmarks in real time",
          "Gesture Engine -> Evaluates Pinch-to-Charge spatial distances between thumb & index tips",
          "Canvas Particle Physics -> Renders elemental particle bursts at palm coordinates"
        ],
        databaseDesign: "Pure client-side state machine with zero server roundtrips.",
        apiDesign: "MediaPipe JS SDK browser hooks & WebRTC MediaStream API."
      },
      features: [
        "Real-time 21-landmark 3D hand gesture tracking",
        "Pinch-to-Charge energy aura spatial detection",
        "8 distinct elemental particle physics rendering engines (Fire, Water, Electric, Leaf, Ice, Dragon, Shadow, Light)",
        "60 FPS smooth HTML5 Canvas particle renderer"
      ],
      challenges: [
        {
          problem: "High particle counts caused frame drops on low-power mobile GPUs.",
          solution: "Implemented dynamic particle pool recycling and frame budget limiting."
        }
      ],
      metrics: [
        "Sustained 60 FPS real-time gesture tracking in modern browsers",
        "Zero hardware controllers required—100% vision driven"
      ],
      lessonsLearned: [
        "Computer vision hand tracking opens intuitive human-computer interaction paradigms."
      ],
      futureImprovements: [
        "Add multi-hand duel battle game modes"
      ],
      techStack: ["JavaScript", "MediaPipe Hands", "HTML5 Canvas", "WebRTC", "AR Physics"],
      githubUrl: "https://github.com/Sonal-sp/pokemon-ar-sim",
      liveUrl: "https://github.com/Sonal-sp/pokemon-ar-sim"
    },
    {
      id: "swift-shift",
      title: "SwiftShift: Conversion-Optimized Relocation App",
      tagline: "High-performance modular relocation landing page built with React, Vite & Tailwind",
      category: "Full-Stack Web",
      status: "Deployed & Operational",
      featured: true,
      year: "2026",
      summary: "A modular, production-ready single-page relocation landing page built natively using React, Vite, and Tailwind CSS. Features decoupled configuration schemas, structural micro-interactions via Framer Motion, and absolute mobile responsiveness.",
      problem: "Relocation service websites often suffer from confusing quote forms and slow mobile loading speeds.",
      whoItHelps: "People moving homes/offices needing instant cost estimation and smooth booking UX.",
      architecture: {
        overview: "Decoupled React configuration schemas with Framer Motion scroll animations and Tailwind CSS layout design system.",
        flowchart: [
          "Configuration Schema -> Centralized JSON data for services & pricing tiers",
          "Interactive Quote Form -> Step-by-step room & distance selector",
          "Framer Motion UI -> Smooth scroll section transitions"
        ],
        databaseDesign: "Client-side JSON schema driven design.",
        apiDesign: "Vite optimized production bundle."
      },
      features: [
        "Conversion-optimized UI flow & service quote calculator",
        "Decoupled JSON configuration schema architecture",
        "Framer Motion smooth scroll animations",
        "100% mobile responsive design"
      ],
      challenges: [
        {
          problem: "Form step state reset when users navigated back.",
          solution: "Persisted state across form steps using a centralized React context hook."
        }
      ],
      metrics: [
        "Sub-1 second page load speed on mobile networks",
        "100/100 Lighthouse performance score"
      ],
      lessonsLearned: [
        "Decoupling UI code from configuration schemas makes future content updates effortless."
      ],
      futureImprovements: [
        "Integrate live Google Maps Distance Matrix API for instant automated quotes"
      ],
      techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel"],
      githubUrl: "https://github.com/Sonal-sp/Swift-Shift",
      liveUrl: "https://swift-shift-xi.vercel.app/"
    }
  ],

  thoughtArchive: [
    {
      id: "thought-1",
      title: "Can AI become a mentor instead of just a chatbot?",
      question: "What if AI didn't just answer questions, but guided your curiosity like a great teacher?",
      category: "Artificial Intelligence & Pedagogy",
      date: "August 2025",
      readTime: "4 min read",
      hypothesis: "Current LLMs act as reactive answering engines. A true mentor AI must possess a model of the student's current understanding, push back when answers are superficial, and ask clarifying questions.",
      insights: [
        "Answering a student's question immediately can steal the epiphany of learning.",
        "Socratic prompting yields deeper conceptual retention than instant direct answers.",
        "Memory maps of user misconceptions are more important than raw context length."
      ]
    },
    {
      id: "thought-2",
      title: "How can software reduce human uncertainty?",
      question: "Why do users feel anxious when using complex software systems, and how can interface design cure it?",
      category: "UX Engineering & Cognitive Psychology",
      date: "July 2025",
      readTime: "3 min read",
      hypothesis: "Uncertainty stems from hidden state. When users don't know what the system is doing, what will happen next, or how to undo an action, anxiety spikes.",
      insights: [
        "Immediate optimistic UI updates eliminate perceived network delay.",
        "Clear undo mechanisms remove the fear of making permanent mistakes.",
        "Visual progress telemetry turns scary black-box operations into transparent journeys."
      ]
    },
    {
      id: "thought-3",
      title: "Can AR & IoT Wearables transform healthcare?",
      question: "How can 6-DOF sensor fusion and spatial tracking make personal safety proactive instead of reactive?",
      category: "Embedded Systems & Proactive Healthcare",
      date: "June 2025",
      readTime: "5 min read",
      hypothesis: "Wearable IoT microcontrollers paired with continuous sensor analysis (like in SafeStep) eliminate the delay between an emergency incident and caregiver notification.",
      insights: [
        "Dual-threshold acceleration algorithms eliminate 95%+ of false fall alarms.",
        "Low-cost embedded hardware makes continuous health monitoring accessible to millions."
      ]
    }
  ],

  currentlyExploring: {
    learning: "Data Science, Machine Learning & Rust Tokio async concurrency",
    reading: "'Operating System Concepts' by Silberschatz, Galvin & Gagne",
    building: "mini_redis async key-value cache in Rust & DJSCE S4DS Data Science projects",
    researching: "RESP2 protocol parsing, AOF persistence & high-throughput async network servers",
    wondering: "How will human curiosity adapt when AI can generate instant software prototypes in seconds?"
  },

  failureLog: [
    {
      id: "failure-1",
      title: "The False Fall Alarm Threshold Spike",
      timeline: "Early 2026",
      context: "Developing SafeStep ESP32 MPU6050 fall detection logic.",
      whatFailed: "Simple single-impact threshold triggers caused false SOS alarms when users sat down quickly or dropped their wearable band.",
      rootCause: "Relying solely on impact G-force without measuring pre-impact free-fall acceleration drops.",
      whatILearned: "Motion events require multi-stage sensor fusion verification.",
      howItChangedNextProject: "Architected a dual confirmation window requiring both a free-fall dip and impact spike within 1.3 seconds."
    },
    {
      id: "failure-2",
      title: "The Raw Review Text NLP Skew",
      timeline: "May 2026",
      context: "Building Cine-AI movie review sentiment pipeline.",
      whatFailed: "Unfiltered user reviews containing HTML tags, emojis, and special characters caused TextBlob NLP sentiment polarity scores to miscalculate overall crowd mood.",
      rootCause: "Passing raw scraped text directly into the sentiment engine without text cleaning guardrails.",
      whatILearned: "Data preprocessing is 80% of data science. Text normalization filters must precede model inference.",
      howItChangedNextProject: "Built strict regex text cleaning pipelines in all subsequent NLP data tools."
    }
  ],

  vision: {
    title: "The Observatory Platform Vision",
    subtitle: "Eliminating uncertainty for student engineers across India & globally.",
    quote: "A platform where every student can discover their path, learn together, find mentors, share verified notes, and build ambitious projects with absolute confidence.",
    pillars: [
      { title: "Informed Academic Choices", desc: "Structured learning paths and diploma to degree engineering guidance." },
      { title: "Collaborative Peer Learning", desc: "Verified peer note exchanges and technical quiz study circles." },
      { title: "Mentorship Matchmaking", desc: "Connecting eager students with experienced senior engineers." },
      { title: "Verified Note Repository", desc: "Quality-vetted lecture notes, code snippets, and system architecture breakdowns." },
      { title: "Teammate Discovery", desc: "Matching student builders based on complementary technical skill sets." },
      { title: "Telemetry Growth Tracking", desc: "Visualizing weekly skill milestones, project commits, and concept mastery." }
    ]
  },

  lifeTimeline: [
    {
      id: "t-djsce",
      period: "Present",
      year: "2026",
      title: "B.Tech CSE (Data Science) at D. J. Sanghvi (DJSCE)",
      subtitle: "MH CET State Rank 1566 / 70,000+ Candidates",
      description: "Secured All Maharashtra Rank 1566 out of 70,000+ candidates in Maharashtra State CET. Admitted to Dwarkadas J. Sanghvi College of Engineering (DJSCE) in Computer Science & Engineering (Data Science). Appointed Creatives Co-Committee Member at Society for Data Science (S4DS).",
      highlights: ["MH CET Rank 1566 / 70,000+", "D. J. Sanghvi (DJSCE)", "CSE (Data Science)", "S4DS Creatives Co-Comm"],
      type: "Education"
    },
    {
      id: "t-capstone",
      period: "Present",
      year: "2025 - 2026",
      title: "SafeStep Capstone Project (Diploma in Computer Engineering)",
      subtitle: "K J Somaiya Polytechnic (Guided by Mrs. Niti Patel)",
      description: "Architected SafeStep – Smart Elderly Fall Detection and Alert System. Built ESP32 C3 Super-Mini wearable hardware band, MPU6050 6-DOF sensor fusion, n8n WhatsApp/Email SOS automation, and cross-platform Flutter companion mobile application.",
      highlights: ["Final Year Capstone Project", "ESP32 C3 + MPU6050 Hardware", "n8n WhatsApp SOS Automation", "Flutter Mobile App"],
      type: "Major Project"
    },
    {
      id: "t0",
      period: "Present",
      year: "March 2026",
      title: "PIXELVERSE National Top 45 Finalist",
      subtitle: "Google Developer Groups (GDG) On Campus, SIES GST",
      description: "Selected among the Top 45 National Participants in PIXELVERSE, organized by Google Developer Groups (GDG) On Campus at SIES GST on 8th March 2026.",
      highlights: ["National Top 45 Finalist", "GDG On Campus SIES GST", "Nationwide Tech Contestant"],
      type: "Hackathon"
    },
    {
      id: "t1",
      period: "Past",
      year: "2023",
      title: "Secondary Education & School Leadership",
      subtitle: "Lok Nagari Public School (89.60%)",
      description: "Graduated with 89.60%. Served as Sports Captain, developing leadership, team communication, and competitive drive. Appeared for Maharashtra Pradnya Shodh Pariksha (MPSP) competitive exam.",
      highlights: ["89.60% Marks", "School Sports Captain", "MPSP Competitive Exam"],
      type: "Education"
    },
    {
      id: "t2",
      period: "Past",
      year: "Oct 2023",
      title: "IQ-WAVE Technical Quiz Volunteer",
      subtitle: "K. J. Somaiya Polytechnic",
      description: "Volunteered at the IQ-WAVE State-Level Technical Quiz event held at K J Somaiya Polytechnic, managing event coordination and student contestant logistics.",
      highlights: ["State-Level Event Volunteer", "Organized quiz logistics", "Peer technical coordination"],
      type: "Hackathon"
    },
    {
      id: "t3",
      period: "Past",
      year: "2023 - 2026",
      title: "Diploma in Computer Engineering",
      subtitle: "K. J. Somaiya Polytechnic (94.00%)",
      description: "Graduated with 94.00% aggregate score across C, C++, Java, Python, Operating Systems, Linux, DBMS, and Data Structures.",
      highlights: ["94.00% Aggregate Score", "Strong CS Theory Foundation", "7 Industry Certifications"],
      type: "Education"
    },
    {
      id: "t4",
      period: "Present",
      year: "Jan 2025 - Mar 2026",
      title: "Intercollegiate Competitions & IT Fests",
      subtitle: "TECH-Nirman 2K25 & TechXpression 2025",
      description: "Participated in Bug Busters & Pixel Perfection at TECH-Nirman 2K25 (CHM College) and Geeks for Geeks at TechXpression 2025 (B. K. Birla College).",
      highlights: ["Bug Busters Debugging", "Pixel Perfection UI/UX", "Geeks for Geeks Algo Contest"],
      type: "Hackathon"
    },
    {
      id: "t5",
      period: "Present",
      year: "Jun 2025 - Sep 2025",
      title: "IT Support Intern",
      subtitle: "K J Somaiya Private Training Institute / ITI Mumbai",
      description: "Gained real-world IT operations experience under ITI at KJSSC. Managed educational IT infrastructure, academic support systems, and technical hardware operations.",
      highlights: ["Enterprise IT Infrastructure", "Academic Support Operations", "Hardware & Network Logistics"],
      type: "Internship"
    },
    {
      id: "t6",
      period: "Future",
      year: "2026 & Beyond",
      title: "Engineering Scalable Systems & Impact",
      subtitle: "Building software that empowers millions",
      description: "Aspiring to architect scalable distributed software systems, master advanced data science & machine learning pipelines, and build platforms that eliminate uncertainty for curious builders.",
      highlights: ["B.Tech CSE (Data Science) Excellence", "AI & Distributed Systems Architecture", "Empowering curious minds worldwide"],
      type: "Aspiration"
    }
  ],

  githubStats: {
    username: "Sonal-sp",
    pinnedRepos: [
      { name: "mini_redis", desc: "High-performance async in-memory key-value DB in Rust with Tokio, RESP2 protocol, AOF persistence & egui GUI.", stars: 4, forks: 0, lang: "Rust", url: "https://github.com/Sonal-sp/mini_redis", liveUrl: "https://github.com/Sonal-sp/mini_redis" },
      { name: "Nova-Voice-Assistant", desc: "AI Voice Assistant built with Python, speech recognition, intent execution & conversational AI synthesis.", stars: 2, forks: 0, lang: "Python", url: "https://github.com/Sonal-sp/Nova-An-AI-voice-assistant-", liveUrl: "https://github.com/Sonal-sp/Nova-An-AI-voice-assistant-" },
      { name: "my-cute-photobooth", desc: "Browser-based digital Japanese purikara photobooth with WebRTC streaming & draggable stickers.", stars: 2, forks: 0, lang: "JavaScript", url: "https://github.com/Sonal-sp/my-cute-photobooth", liveUrl: "https://my-cute-photobooth.vercel.app" },
      { name: "Cine-AI", desc: "Data science web app with TMDB API & TextBlob NLP audience review sentiment analysis.", stars: 2, forks: 0, lang: "Python", url: "https://github.com/Sonal-sp/Cine-AI", liveUrl: "https://cine-ai-5gtq7kducedualejubnk9i.streamlit.app/" },
      { name: "Geo-Insights", desc: "3D geospatial discovery tool built with React, Three.js & Tailwind CSS for geography aspirants.", stars: 1, forks: 0, lang: "JavaScript", url: "https://github.com/Sonal-sp/Geo-Insights", liveUrl: "https://geo-insights-beta.vercel.app" },
      { name: "SafeStep", desc: "Smart Elderly Fall Detection System with ESP32 C3 wearable, MPU6050, Flutter app & n8n WhatsApp SOS.", stars: 5, forks: 1, lang: "Dart/C++", url: "https://github.com/Sonal-sp/SafeStep", liveUrl: "https://github.com/Sonal-sp/SafeStep" },
      { name: "CyberGuard-Pro", desc: "AI-based password security analyzer built with Flask, entropy calculation & pattern detection.", stars: 1, forks: 0, lang: "HTML/Python", url: "https://github.com/Sonal-sp/CyberGuard-Pro", liveUrl: "https://cyber-guard-pro-gamma.vercel.app" },
      { name: "pokemon-ar-sim", desc: "Augmented Reality Pokémon simulation with MediaPipe 3D hand tracking & Canvas particle physics.", stars: 1, forks: 0, lang: "JavaScript", url: "https://github.com/Sonal-sp/pokemon-ar-sim", liveUrl: "https://github.com/Sonal-sp/pokemon-ar-sim" },
      { name: "Swift-Shift", desc: "Conversion-optimized relocation single-page landing page built with React, Vite & Tailwind.", stars: 1, forks: 0, lang: "JavaScript", url: "https://github.com/Sonal-sp/Swift-Shift", liveUrl: "https://swift-shift-xi.vercel.app/" }
    ],
    stats: {
      totalCommitsThisYear: 240,
      repositories: 9,
      contributionsLastYear: 290,
      streakDays: 24,
    }
  },

  beyondEngineering: {
    books: [
      { title: "Core Java: Fundamentals", author: "Cay S. Horstmann", rating: "5/5", notes: "Essential foundation for object-oriented programming discipline, multi-threading, and JVM memory layout." },
      { title: "Python Data Science Handbook", author: "Jake VanderPlas", rating: "5/5", notes: "Invaluable guide to data manipulation, NumPy arrays, Pandas, and machine learning pipelines." },
      { title: "Operating System Concepts", author: "Silberschatz, Galvin & Gagne", rating: "4.9/5", notes: "The classic textbook on process scheduling, virtual memory, concurrency, and file systems." }
    ],
    photography: [
      { title: "Mumbai Horizons", caption: "Urban perspective and architectural lines.", location: "Mumbai, India", year: "2025" },
      { title: "Campus Quietude", caption: "Shadow play across college corridors.", location: "KJS Polytechnic, Mumbai", year: "2024" }
    ],
    curiosityLog: [
      "How does Tokio manage thread sharding and cooperative task scheduling across CPU cores in Rust?",
      "How do RESP2 serialization protocols encode bulk string frames over raw TCP streams?",
      "How do WebRTC protocols negotiate peer-to-peer video streaming across NAT firewalls?",
      "How does MediaPipe predict 21 3D hand coordinates in real time from a single 2D camera feed?"
    ]
  }
};
