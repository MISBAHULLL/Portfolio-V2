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
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
    category: "Web Development",
  },
  {
    id: 4,
    title: "Modern E-Commerce Platform",
    des: "A full-stack e-commerce solution with cart, checkout, and payment integration.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.shop.com",
    category: "Web Development",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    des: "Feature-rich chat app with real-time messaging, file sharing, and video calls.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/fm.svg"],
    link: "/ui.chat.com",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Portfolio Website Builder",
    des: "Drag-and-drop portfolio builder with customizable templates and themes.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.portfolio.com",
    category: "Web Development",
  },
  {
    id: 7,
    title: "Task Management Dashboard",
    des: "Collaborative project management tool with kanban boards and team analytics.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/c.svg"],
    link: "/ui.tasks.com",
    category: "Web Development",
  },
  {
    id: 8,
    title: "Social Media Platform",
    des: "Full-featured social networking site with posts, stories, and real-time notifications.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/fm.svg"],
    link: "/ui.social.com",
    category: "Web Development",
  },

  // Data & ML - 8 projects
  {
    id: 9,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
    category: "Data & ML",
  },
  {
    id: 10,
    title: "Predictive Analytics Dashboard",
    des: "Machine learning powered dashboard for sales forecasting and trend analysis.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.analytics.com",
    category: "Data & ML",
  },
  {
    id: 11,
    title: "Sentiment Analysis Tool",
    des: "NLP-based tool for analyzing customer feedback and social media sentiment.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/fm.svg"],
    link: "/ui.sentiment.com",
    category: "Data & ML",
  },
  {
    id: 12,
    title: "Image Recognition System",
    des: "Deep learning model for real-time object detection and image classification.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.vision.com",
    category: "Data & ML",
  },
  {
    id: 13,
    title: "Recommendation Engine",
    des: "Collaborative filtering system for personalized product recommendations.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/fm.svg"],
    link: "/ui.recommend.com",
    category: "Data & ML",
  },
  {
    id: 14,
    title: "Fraud Detection Platform",
    des: "ML-powered system for detecting fraudulent transactions in real-time.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg", "/fm.svg"],
    link: "/ui.fraud.com",
    category: "Data & ML",
  },
  {
    id: 15,
    title: "Chatbot AI Assistant",
    des: "Intelligent conversational AI for customer support automation.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.chatbot.com",
    category: "Data & ML",
  },
  {
    id: 16,
    title: "Data Visualization Platform",
    des: "Interactive dashboards for complex data exploration and storytelling.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/stream.svg"],
    link: "/ui.dataviz.com",
    category: "Data & ML",
  },

  // Blockchain - 8 projects
  {
    id: 17,
    title: "NFT Marketplace",
    des: "Decentralized marketplace for minting, buying, and selling digital collectibles.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.nft.com",
    category: "Blockchain",
  },
  {
    id: 18,
    title: "DeFi Lending Protocol",
    des: "Decentralized finance platform for lending and borrowing crypto assets.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/fm.svg"],
    link: "/ui.defi.com",
    category: "Blockchain",
  },
  {
    id: 19,
    title: "Crypto Wallet Application",
    des: "Secure multi-chain wallet with swap functionality and portfolio tracking.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg", "/fm.svg"],
    link: "/ui.wallet.com",
    category: "Blockchain",
  },
  {
    id: 20,
    title: "DAO Governance Platform",
    des: "Decentralized autonomous organization tools for community governance.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.dao.com",
    category: "Blockchain",
  },
  {
    id: 21,
    title: "Token Launchpad",
    des: "Platform for launching and participating in new token sales and IDOs.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/fm.svg"],
    link: "/ui.launch.com",
    category: "Blockchain",
  },
  {
    id: 22,
    title: "Blockchain Explorer",
    des: "Real-time blockchain data explorer with transaction tracking and analytics.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg", "/fm.svg"],
    link: "/ui.explorer.com",
    category: "Blockchain",
  },
  {
    id: 23,
    title: "Smart Contract Auditor",
    des: "Automated security analysis tool for smart contract vulnerabilities.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.audit.com",
    category: "Blockchain",
  },
  {
    id: 24,
    title: "Cross-chain Bridge",
    des: "Seamless asset transfer between different blockchain networks.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/stream.svg"],
    link: "/ui.bridge.com",
    category: "Blockchain",
  },
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
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
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
