import type { PortfolioData } from '../types';

export const initialData: PortfolioData = {
  profile: {
    name: "Thiruvel Andagurunathan Pandian",
    title: "Data Scientist | AI Engineer | Data Strategist  ",
    location: "Bristol, United Kingdom",
    email: "apthiruvel@gmail.com",
    phone: "+44 07741016954",
    summary: "As a proactive data scientist and software engineer, I have spent approximately two years developing production-ready, scalable applications using modern engineering practices. I combine mathematical rigor and pragmatic, product-focused engineering to turn complex problems into measurable, data-driven solutions. I am actively exploring finance, markets, and cryptocurrency, applying AI and statistical methods to extract signals and risk decisions.",
    imageUrl: "D:/Thiruvel/Thiruvel_Portfolio.jpg",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/thiruvel-a-p" },
      { name: "GitHub", url: "https://github.com/Thiruvel-AP" }
    ]
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Avasoft",
      period: "Jul 2023 - January 2024",
      location: "Chennai, India",
      description: [
        "Developed reusable templates using SwiftUI and UIKit, streamlining the development process and reducing repetitive coding efforts across multiple projects.",
        "Designed flexible, customizable UI components, enabling consistent design patterns while allowing for easy modifications to suit different app requirements.",
        "Improved development efficiency and scalability, significantly speeding up project timelines by integrating reusable elements, ultimately enhancing overall productivity.",
        "Developed a mobile application in Flutter for expense management, enabling users to track, categorize, and manage their financial transactions seamlessly.",
        "Implemented offline data storage using ISAR, ensuring that users could access and manage their expense records without an internet connection, with data synchronization when back online.",
        "Integrated third-party APIs such as Twelve Data to provide real-time stock market information, allowing users to stay updated with live financial data within the app.",
        "Linked user bank accounts with Plaid, enabling secure bank integration for direct transaction imports, enhancing financial tracking accuracy.",
        "Successfully integrated the backend RESTful APIs, ensuring secure data transfer with SSL pinning, protecting the application from man-in-the-middle attacks and ensuring a secure connection.",
        "Implemented AWS Cognito for user authentication, providing secure login options, along with Single Sign-On (SSO) capabilities for a streamlined and unified user experience.",
        "Optimized app performance and security, ensuring smooth interactions and robust data protection for users across various financial services integrated into the application.",
      ]
    },
    {
      role: "Ios App development intern",
      company: "Avasoft",
      period: "Mar 2023 - Jun 2023",
      location: "Chennai, India",
      description: [
        "Developed a console-based e-commerce application using Swift, enabling efficient product listing, order processing, and inventory management.",
        "Designed core functionalities such as product search, cart management, and order tracking, ensuring smooth and intuitive user interactions.",
        "Optimized performance and scalability, laying a foundation for future enhancements, including integration with external payment systems and database management.",
        "Worked on a ticket booking UI using SwiftUI, creating a seamless and user-friendly interface for browsing and purchasing tickets.",
        "Integrated Core Data to manage user information, ticket details, and booking history, ensuring efficient data handling and persistence across sessions.",
        "Enhanced functionality and user experience, optimizing UI elements for performance, responsiveness, and accessibility across various devices.",
        "Implemented web scraping with vanilla JavaScript to extract data from multiple websites, providing critical insights for the application.",
        "Streamlined data collection to reduce manual effort, enhancing efficiency and enabling the identification of market trends.",
        "Contributed to a significant increase in revenue, leveraging the data to optimize pricing, refine offerings, and explore new growth opportunities."
      ]
    },
    {
      role: "Internship Trainee",
      company: "Avasoft",
      period: "Jan 2023 - Feb 2023",
      location: "Chennai, India",
      description: [
        "Developed dynamic user detail forms and grids using HTML and CSS, ensuring a responsive layout and intuitive user experience for data input and visualization.",
        "Added interactivity and functionality using JavaScript, enabling real-time form validation, dynamic grid updates, and seamless user interactions within the application.",
        "Developed a fully interactive tic-tac-toe game using JavaScript, implementing game logic to handle player turns, game state, and win/draw conditions.",
        "Designed the user interface with HTML and CSS, ensuring a clean and responsive layout that adapts across different screen sizes and devices.",
        "Added real-time interactivity by enabling smooth gameplay, immediate win/draw detection, and the option to reset the game, enhancing the overall user experience."
      ]
    }
  ],
  education: [
    {
      degree: "MSc in Data Science",
      institution: "University of Bristol",
      period: "Sep 2025 - Sep 2026",
      details: "Currently Pursuing the MSc in Data Science at the University of Bristol"
    },
    {
      degree: "B.E in Electrical & Electronics Engineering",
      institution: "St.Joseph's College of Engineering",
      period: "Sept 2019 - April 2023",
      details: "91 % | First class with Distinction"
    },
    {
      degree: "Higher Secondary",
      institution: "Jawahar Matric Higher Secondary School",
      period: "Jun 2018 - Mar 2019",
      details: "81% | Graduated in the top 3% in the school"
    },
    {
      degree: "Sophomore",
      institution: "Jawahar Matric Higher Secondary School",
      period: "Jun 2016 - April 2017",
      details: "95.4% | Graduated in the top 1.5% in the school"
    }
  ],
  skills: [
    "Python", "SQL", "Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn", "Scikit-learn", "Tensor-flow", "PyTorch", "AWS", "fast-API", "Docker", "Tensor-flow(GPU)", "Jupyter Notebook", "Google Collab", "Google AI Studio", "Kaggle", "Hugging Face API", "JavaScript", "React JS", "Node JS", "Flutter", "Dart", "Swift", "Swift UI", "Mongo DB"
  ],
  projects: [
    {
      name: "Bitcoin Forecasting",
      description: "This project implements a deep learning pipeline using LSTM (Long Short-Term Memory) neural networks to forecast the OHLV (Open, Close, High, Low & Volume) prices of Bitcoin. It processes historical OHLV data, transforms it into time-series sequences, trains a neural network, and exports the model in a format compatible with TensorFlow Serving.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Tensor-flow(GPU)", "WSL", "Docker", "fast-API", "YFinance SDK"],
      features: ["Predicts the future OCHLV values of bitcoin with the accuracy over 80%.", "Used the LSTM neural network to forecast the future OCHLV values of bitcoin."],
      imageUrl: "https://imgs.search.brave.com/QNWHkLfpbtKD3YvzL2Mn6cfRkPaCCXNWJR2huAG15bo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xODQ2ODAz/LzM4MjAvaS80NTAv/ZGVwb3NpdHBob3Rv/c18zODIwODg5My1z/dG9jay1waG90by1i/aXRjb2luLmpwZw",
      link: "https://github.com/Thiruvel-AP/BitcoinForecasting"
    },
    {
      name: "Pokémon Classification ",
      description: "This project is a multi-output Random Forest classification system with three major models and a router to select the optimal model based on input. if the input is Name, Type1, Type2, then the model will predict the Evolution. if the input is Name, Evolution then the model will predict the primary type (Type 1). if the input is Name, Type1, evolution, then the model will predict the secondary type (Type 2). ",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Kaggle", "Jupyter Notebook"],
      features: ["A multi-output prediction model predicts multiple target variables from the input.", "Used the Random Forest classifier to predict the values."],
      imageUrl: "https://imgs.search.brave.com/e3iCqPFxBfc_QmRoexolK_DvLip4fBSCpRg7Zb2Tzc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/cHJlc2VudGluZy1w/b2slQzMlQTltb24t/ZGF0YS1zY2llbmNl/LXByb2plY3QtdjAt/OGF6dmVsaHZyeGll/MS5qcGc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9NTgyY2JlM2Q5/MTE3YmNkMzExNGM4/NTI2YjVkZTJhYTBk/MmRmMGE1YQ",
      link: "https://github.com/Thiruvel-AP/Pokemon_Classification"
    },
    {
      name: "GridDQN",
      description: "This project is to train an agent in a custom grid world with Deep Q-Network (DQN) from scratch. The agent learns optimal paths via reward-driven exploration and converges to a stable policy for shortest-path navigation.",
      technologies: ["Python", "Tensor-flow", "NumPy"],
      features: ["Using a Q-value trained a off-policy agent to play grid world."],
      imageUrl: "https://imgs.search.brave.com/YKAchA7epo1Al70WqQU5Y-zwVg3wk91CtEt17YJ4aEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaGFy/ZWQuZmFzdGx5LnN0/ZWFtc3RhdGljLmNv/bS9zdG9yZV9pdGVt/X2Fzc2V0cy9zdGVh/bS9hcHBzLzM5Njg5/MC9oZWFkZXIuanBn/P3Q9MTQ1OTk3MjM3/NA",
      link: "https://github.com/Thiruvel-AP/GridDQN"
    },
    {
      name: "Stack Overflow Data Analysis",
      description: "This project is a end-to-end analytics on the 2023 Stack Overflow developer survey to identify and visualize key trends. Produced a comprehensive report illustrating the global distribution and skill patterns of Python developers.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      features: ["Exploratory Data Analysis with 2023 Stack overflow data", "Visualized the data using various plots and charts"],
      imageUrl: "https://imgs.search.brave.com/UKuEYnXivx8qg_EBnhdBT5BApIC5vGvzdVbA-7VuX1w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGFj/a292ZXJmbG93LmNv/L2ltZy9jb21wYW55/L3ByZXNzL3N0YWNr/LW92ZXJmbG93LWZv/ci10ZWFtc190aHVt/Yi5wbmc",
      link: "https://github.com/Thiruvel-AP/DS_Project1"
    }
  ]
};