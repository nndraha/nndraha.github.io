// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Advancing food safety through innovative science, from farm to table, to protect public health and ensure a safer future.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research projects managed by Dr. Nodali Ndraha",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Comprehensive list of our publications are available on Google Schoolar or Scopus",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "A collection of my speaking engagements, keynotes, and seminars.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "Course materials, schedules, and resources for classes taught.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-research-team",
          title: "Research Team",
          description: "Meet our team. Our lab is always open to collaborating with driven undergraduate and postgraduate students, postdoctoral researchers, and visiting scholars.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-paper-revision-on-a-paper-related-to-microbial-safety-of-green-vegetables",
        
          title: "Paper revision on a paper related to microbial safety of green vegetables",
        
        description: "A literature review on microbial safety of green vegetables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/paper-revision-on-green-vegetables/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-am-currently-authoring-a-new-comprehensive-book-titled-patogen-bakteri-bawaan-pangan-di-indonesia-ekologi-asesmen-risiko-kuantitatif-dan-strategi-mitigasi-this-four-part-volume-is-designed-to-address-the-unique-ecological-conditions-of-foodborne-pathogens-within-the-indonesian-food-supply-chain-it-will-provide-a-foundational-framework-for-applying-quantitative-microbial-risk-assessment-qmra-to-local-contexts-with-a-specific-focus-on-mitigating-risks-in-street-food-and-traditional-market-environments",
          title: 'I am currently authoring a new comprehensive book titled Patogen Bakteri Bawaan Pangan...',
          description: "",
          section: "News",},{id: "news-i-am-pleased-to-announce-a-call-for-papers-for-the-upcoming-issue-of-trophos-science-of-food-officially-published-by-pt-nusaxis-pustaka-mandiri-to-support-open-access-research-and-foster-international-collaboration-in-food-technology-and-microbiology-we-are-currently-offering-a-100-free-article-processing-charge-apc-for-all-accepted-manuscripts-submitted-before-december-31-2026-researchers-specializing-in-predictive-microbiology-risk-assessment-and-food-safety-mitigation-are-highly-encouraged-to-submit-their-work",
          title: 'I am pleased to announce a call for papers for the upcoming issue...',
          description: "",
          section: "News",},{id: "projects-microbial-food-safety-of-green-vegetables",
          title: 'Microbial Food Safety of Green Vegetables',
          description: "Detection, identification, quantification, and predictive modeling for pathogens in green vegetables",
          section: "Projects",handler: () => {
              window.location.href = "/projects/green-vegetable/";
            },},{id: "projects-staphylo-guard",
          title: 'Staphylo-Guard',
          description: "Development of rapit test kit for Staphylococcus aureus in food product",
          section: "Projects",handler: () => {
              window.location.href = "/projects/staphylo-guard/";
            },},{id: "talks-predictive-microbiology-in-the-cold-chain",
          title: 'Predictive Microbiology in the Cold Chain',
          description: "A keynote presentation on time-temperature abuse mitigation.",
          section: "Talks",handler: () => {
              window.location.href = "/talks/2026-brin-symposium/";
            },},{id: "teachings-degree-by-research-dbr-brin",
          title: 'Degree by Research (DbR) BRIN',
          description: "The Degree by Research (DbR) program, organized by the National Research and Innovation Agency (BRIN), is a research-based postgraduate (Master&#39;s and Doctoral) education pathway. Through this scheme, I invite highly dedicated postgraduate students to collaborate and conduct research under my supervision at the Research Center for Food Technology and Processing (PRTPP) BRIN.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/001-dbr/";
            },},{id: "teachings-research-internship-program-at-prtpp-brin",
          title: 'Research Internship Program at PRTPP BRIN',
          description: "A practical research internship at BRIN for undergraduate students and recent graduates. Gain direct laboratory experience in food microbiology, pathogen detection, and data analysis under professional mentorship.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/002-mbkm/";
            },},{id: "teachings-speaking-engagements-amp-expert-consultations",
          title: 'Speaking Engagements &amp;amp; Expert Consultations',
          description: "I am available to deliver expert speeches and presentations on management, research, and innovation in microbial food safety for public and private organizations, and welcome invitations via direct contact or a formal letter to BRIN.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/003-speaker/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
