export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build interactive dashboards and web experiences that make complex data easy to understand. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Available for remote collaboration and internships.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Informatics student specializing in data analytics and modern frontend, turning raw data into insights and building smooth, intuitive interfaces.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Developing analytics dashboards & interactive web apps",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute -right-5 bottom-0 mt-4 md:w-[500px] lg:w-[550px] w-72",
    titleClassName: "justify-start",
    img: "/inside-scoop-dashboard.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  // Web Development - 8 projects
  {
    id: 1,
    title: "Batik Indonesia – Modern E-Commerce Website",
    des: "A modern e-commerce website showcasing Indonesian Batik products with a clean and responsive interface.",
    img: "/p1_Batik.svg",
    iconLists: ["/html5.svg", "/css3.svg", "/javascript.svg", "/bootstrap.svg"],
    link: "/batik.indonesia",
    category: "Web Development",
    githubLink: "git@github.com:MISBAHULLL/Ecommerce-batik.git",  // Contoh - ganti dengan repo asli
    liveLink: "https://misbahulll.github.io/Ecommerce-batik/",              // Contoh - ganti dengan link live
  },
  {
    id: 2,
    title: "Interactive Area Games – Modern Frontend Experience",
    des: "An interactive game-themed frontend website featuring smooth animations and responsive UI.",
    img: "/p2_Stream.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/html5.svg", "/css3.svg", "/javascript.svg", "/nodejs.svg", "/vite.svg"],
    link: "/Stream",
    category: "Web Development",
    githubLink: "https://github.com/MISBAHULLL/Frontend-Area-games.git",
    liveLink: "https://misbahulll.github.io/Frontend-Area-games/",
  },
  {
    id: 3,
    title: "AI Speak – Interactive AI Voice & Chat Interface",
    des: "An AI-driven website with API Puter.js and responsive design.",
    img: "/p3_Ai.svg",
    iconLists: ["/html5.svg", "/re.svg", "/tail.svg", "/nodejs.svg", "/vite.svg", "/api.svg"],
    link: "/AI_Speak",
    category: "Web Development",
    githubLink: "git@github.com:MISBAHULLL/Ai-Speak.git",
    liveLink: "https://misbahulll.github.io/Ai-Speak/",
  },
  {
    id: 4,
    title: "Personal Portfolio – Modern Animated Developer Showcase",
    des: "A modern developer portfolio with interactive animations and a fully responsive design.",
    img: "/p4_Portfolio1.svg",
    iconLists: ["/html5.svg", "/css3.svg", "/javascript.svg"],
    link: "/Portfolio",
    category: "Web Development",
    githubLink: "https://github.com/MISBAHULLL/Portfolio.git",  // Contoh - ganti dengan repo asli
    liveLink: "https://misbahulll.github.io/Portfolio/",              // Contoh - ganti dengan link live
  },
  {
    id: 5,
    title: "CBR Smartphone Recommendation System",
    des: "A CBR-based system that recommends smartphones based on user-input specifications.",
    img: "/p5_CBR.svg",
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.svg", "/vite.svg", "/api.svg", "/python.svg"],
    link: "/CBR_Rekomendasi_Pembelian_HP",
    category: "Web Development",
    githubLink: "https://github.com/MISBAHULLL/CBR-Rekomendasi-Pembelian-HP-.git",  // Contoh - ganti dengan repo asli
    liveLink: "https://cbr-rekomendasi-pembelian-hp.vercel.app/",              // Contoh - ganti dengan link live
  },
  // {
  //   id: 6,
  //   title: "Portfolio Website Builder",
  //   des: "Drag-and-drop portfolio builder with customizable templates and themes.",
  //   img: "/p3.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.portfolio.com",
  //   category: "Web Development",
  // },
  // {
  //   id: 7,
  //   title: "Task Management Dashboard",
  //   des: "Collaborative project management tool with kanban boards and team analytics.",
  //   img: "/p4.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/c.svg"],
  //   link: "/ui.tasks.com",
  //   category: "Web Development",
  // },
  // {
  //   id: 8,
  //   title: "Social Media Platform",
  //   des: "Full-featured social networking site with posts, stories, and real-time notifications.",
  //   img: "/p1.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/fm.svg"],
  //   link: "/ui.social.com",
  //   category: "Web Development",
  // },

  // Data & ML - 8 projects
  {
    id: 6,
    title: "Sales Analysis Dashboard",
    des: "A complete sales data analysis project featuring insights, visualizations, and performance metrics.",
    img: "/p9_Analisis.svg",
    iconLists: ["/tableau.svg", "/colab.svg", "/python.svg", "/jupyter.svg", "/kaggle.svg", "/excel.svg"],
    link: "/ui.aiimg.com",
    category: "Data & ML",
    githubLink: "https://github.com/MISBAHULLL/Sales-Analysis",  // Contoh - ganti dengan repo asli
    liveLink: "https://public.tableau.com/app/profile/misbahul.munir1675/viz/Sales-Analysis_17546619194890/Dashboard1",              // Contoh - ganti dengan link live
  },
  {
    id: 7,
    title: "Corn Leaf Disease Detection (Streamlit App)",
    des: "A Streamlit app that classifies corn leaf diseases using machine learning and image analysis.",
    img: "/p10_Diseases.svg",
    iconLists: ["/python.svg", "/streamlit.svg", "/api.svg", "/colab.svg", "/jupyter.svg", "/kaggle.svg"],
    link: "/ui.analytics.com",
    category: "Data & ML",
    githubLink: "https://github.com/MISBAHULLL/Simple-corn-leaf-disease-using-Streamlit-Python.git",  // Contoh - ganti dengan repo asli
    liveLink: "https://public.tableau.com/app/profile/misbahul.munir1675/viz/Sales-Analysis_17546619194890/Dashboard1",              // Contoh - ganti dengan link live
  },
  {
    id: 8,
    title: "RAG-Based Information Retrieval System CLI",
    des: "A Retrieval-Augmented Generation system using embeddings and vector search for precise document responses.",
    img: "/p11_rag_news.svg",
    iconLists: ["/python.svg", "/api.svg", "/kaggle.svg", "/jupyter.svg", "/colab.svg", "/huggingface.svg"],
    link: "/RAG_Model_CLI",
    category: "Data & ML",
    githubLink: "https://github.com/MISBAHULLL/Information-Retrieval-RAG.git",  // Contoh - ganti dengan repo asli
    liveLink: "",              // Contoh - ganti dengan link live
  },
  {
    id: 9,
    title: "Telegram Automation Bot",
    des: "A functional Telegram bot for automated messaging, alerts, and custom command handling.",
    img: "/p12_Bottele.svg",
    iconLists: ["/python.svg", "/api.svg", "/vscode.svg", "/telegram.svg"],
    link: "/Bot_Telegram",
    category: "Data & ML",
    githubLink: "https://github.com/MISBAHULLL/Bot-Tele.git",  // Contoh - ganti dengan repo asli
    liveLink: "",              // Contoh - ganti dengan link live
  },
  {
    id: 10,
    title: "Indodax Crypto Mining Dashboard",
    des: "A simple dashboard that fetches Indodax API data, displays price analytics, and monitors market movements.",
    img: "/p13_miningindo.svg",
    iconLists: ["/php.svg", "/api.svg", "/vscode.svg", "/mysql.svg", "/sql-database.svg", "/laragon.svg"],
    link: "/Dashboard_Indodax",
    category: "Data & ML",
    githubLink: "https://github.com/MISBAHULLL/Dashboard-sederhana-Mining-API-Indodax.git",  // Contoh - ganti dengan repo asli
    liveLink: "",              // Contoh - ganti dengan link live
  },
  {
    id: 11,
    title: "Bitcoin Price Forecasting Model",
    des: "A time-series forecasting project using statistical models and sentiment analysis to predict Bitcoin prices.",
    img: "/p14_btcForcasting.svg",
    iconLists: ["/python.svg", "/plotly.svg", "/vscode.svg", "/api.svg"],
    link: "/BTC_Forecasting",
    category: "Data & ML",
    githubLink: "https://github.com/MISBAHULLL/Bitcoin-Forecasting.git",  // Contoh - ganti dengan repo asli
    liveLink: "",              // Contoh - ganti dengan link live
  },
  // {
  //   id: 12,
  //   title: "Chatbot AI Assistant",
  //   des: "Intelligent conversational AI for customer support automation.",
  //   img: "/p2.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.chatbot.com",
  //   category: "Data & ML",

  // },
  // {
  //   id: 16,
  //   title: "Data Visualization Platform",
  //   des: "Interactive dashboards for complex data exploration and storytelling.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/stream.svg"],
  //   link: "/ui.dataviz.com",
  //   category: "Data & ML",
  // },

  // Blockchain - 8 projects
  {
    id: 12,
    title: "NFT Marketplace",
    des: "Decentralized marketplace for minting, buying, and selling digital collectibles.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.nft.com",
    category: "Blockchain",
  },
  {
    id: 13,
    title: "DeFi Lending Protocol",
    des: "Decentralized finance platform for lending and borrowing crypto assets.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/fm.svg"],
    link: "/ui.defi.com",
    category: "Blockchain",
  },
  // {
  //   id: 19,
  //   title: "Crypto Wallet Application",
  //   des: "Secure multi-chain wallet with swap functionality and portfolio tracking.",
  //   img: "/p2.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/fm.svg"],
  //   link: "/ui.wallet.com",
  //   category: "Blockchain",
  // },
  // {
  //   id: 20,
  //   title: "DAO Governance Platform",
  //   des: "Decentralized autonomous organization tools for community governance.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.dao.com",
  //   category: "Blockchain",
  // },
  // {
  //   id: 21,
  //   title: "Token Launchpad",
  //   des: "Platform for launching and participating in new token sales and IDOs.",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/fm.svg"],
  //   link: "/ui.launch.com",
  //   category: "Blockchain",
  // },
  // {
  //   id: 22,
  //   title: "Blockchain Explorer",
  //   des: "Real-time blockchain data explorer with transaction tracking and analytics.",
  //   img: "/p1.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg", "/fm.svg"],
  //   link: "/ui.explorer.com",
  //   category: "Blockchain",
  // },
  // {
  //   id: 23,
  //   title: "Smart Contract Auditor",
  //   des: "Automated security analysis tool for smart contract vulnerabilities.",
  //   img: "/p2.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.audit.com",
  //   category: "Blockchain",
  // },
  // {
  //   id: 24,
  //   title: "Cross-chain Bridge",
  //   des: "Seamless asset transfer between different blockchain networks.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/stream.svg"],
  //   link: "/ui.bridge.com",
  //   category: "Blockchain",
  // },
];


export const testimonials = [
  {
    quote:
      "Delivered multiple end-to-end dashboards using SQL, Python, and Tableau—transforming raw datasets into clear, actionable insights.",
    name: "Misbahul Munir",
    title: "Data Analytics & Dashboard Development",
  },
  {
    quote:
      "Built machine learning applications, including a corn leaf disease detector and Bitcoin forecasting model using ARIMAX and technical indicators.",
    name: "Misbahul Munir",
    title: "Machine Learning & Predictive Modeling",
  },
  {
    quote:
      "Created AI-driven tools such as a Telegram crypto bot with automated chart fetching and developed RAG systems using FAISS/BM25 for intelligent retrieval.",
    name: "Misbahul Munir",
    title: "AI Automation & Retrieval Systems",
  },
  {
    quote:
      "Developed modern, responsive, and interactive web applications using Next.js, React, Tailwind CSS, GSAP, and Three.js, including a 3D portfolio website.",
    name: "Misbahul Munir",
    title: "Frontend Web Development",
  },
  {
    quote:
      "Contributed to the Bhatarasena robotics research team and supported mechanical operations in the Kontes Kapal Indonesia (KKI) competition.",
    name: "Misbahul Munir",
    title: "Robotics & Engineering Collaboration",
  },
];

export const companies = [
  {
    id: 1,
    name: "HTML5",
    img: "/html5.svg",
  },
  {
    id: 2,
    name: "CSS3",
    img: "/css3.svg",
  },
  {
    id: 3,
    name: "Bootstrap",
    img: "/bootstrap.svg",
  },
  {
    id: 4,
    name: "Figma",
    img: "/figma.svg",
  },
  {
    id: 5,
    name: "Tailwind",
    img: "/tail.svg",
  },
  {
    id: 6,
    name: "TypeScript",
    img: "/ts.svg",
  },
  {
    id: 7,
    name: "JavaScript",
    img: "/javascript.svg",
  },
  {
    id: 8,
    name: "React",
    img: "/re.svg",
  },
  {
    id: 9,
    name: "Next.js",
    img: "/next.svg",
  },
  {
    id: 10,
    name: "Laravel",
    img: "/laravel.svg",
  },
  {
    id: 11,
    name: "PHP",
    img: "/php.svg",
  },
  {
    id: 12,
    name: "Git",
    img: "/git.svg",
  },
  {
    id: 13,
    name: "Colab",
    img: "/colab.svg",
  },
  {
    id: 14,
    name: "Excel",
    img: "/excel.svg",
  },
  {
    id: 15,
    name: "Tableau",
    img: "/tableau.svg",
  },
  {
    id: 16,
    name: "Python",
    img: "/python.svg",
  },
  {
    id: 17,
    name: "SQL",
    img: "/sql-database.svg",
  },
  {
    id: 18,
    name: "Jupyter",
    img: "/jupyter.svg",
  },
  {
    id: 19,
    name: "Kaggle",
    img: "/kaggle.svg",
  },
  {
    id: 20,
    name: "Laragon",
    img: "/laragon.svg",
  },
  {
    id: 21,
    name: "MySQL",
    img: "/mysql.svg",
  },
  {
    id: 22,
    name: "PostgreSQL",
    img: "/postgresql.svg",
  },
  {
    id: 23,
    name: "Node.js",
    img: "/nodejs.svg",
  },
  {
    id: 24,
    name: "Power BI",
    img: "/power bi.svg",
  },
  {
    id: 25,
    name: "Plotly",
    img: "/plotly.svg",
  },
  {
    id: 26,
    name: "Streamlit",
    img: "/streamlit.svg",
  },
  {
    id: 27,
    name: "Vite",
    img: "/vite.svg",
  },
  {
    id: 28,
    name: "VS Code",
    img: "/vscode.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Data Analytics & Dashboard Development",
    desc: "Built end-to-end analytical workflows: data cleaning, preprocessing, EDA, and visualization using Python, SQL, and Tableau.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Machine Learning & Predictive Modeling",
    desc: "Developed machine learning solutions including disease detection models (Streamlit + ML) and Bitcoin forecasting (ARIMAX + technical indicators).",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI, Automation & Retrieval Systems",
    desc: "mplemented AI-driven automations, including crypto reporting Telegram bot with real-time API integration. Built RAG pipelines using FAISS/BM25, embeddings, and modular Python architecture for intelligent document retrieval.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Web Development",
    desc: "Built modern, interactive web interfaces using Next.js, React, Tailwind CSS and laravel. Created responsive layouts, dynamic UI animations, and integrated APIs into real-world frontend projects.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MISBAHULLL",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/misbahul-munir-da",
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "", // Isi link Instagram di sini
  },
  {
    id: 4,
    img: "/wha.svg",
    link: "", // Isi link WhatsApp di sini, format: https://wa.me/628xxxxxxxxxx
  },
];
