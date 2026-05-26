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
        },{id: "nav-people",
          title: "People",
          description: "Meet our team. Our lab is always open to collaborating with driven undergraduate and postgraduate students, postdoctoral researchers, and visiting scholars.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-recent-advances-in-rapid-multiplex-detection-of-nucleic-acid-markers-using-rpa-and-crispr-cas",
        
          title: "Recent advances in rapid multiplex detection of nucleic acid markers using RPA and...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/recent-advances-in-rapid-multiplex-detection-of-nucleic-acid/";
          
        },
      },{id: "post-establishment-of-methods-for-the-detection-of-lt-em-gt-salmonella-lt-em-gt-species-by-conventional-and-quantitative-real-time-pcr",
        
          title: "Establishment of methods for the detection of &lt;em&gt;Salmonella&lt;/em&gt; species by conventional and quantitative...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/establishment-of-methods-for-the-detection-of-salmonella-spe/";
          
        },
      },{id: "post-menyikapi-keterbatasan-ukuran-sampel-dalam-penelitian-mikrobiologi-pangan",
        
          title: "Menyikapi Keterbatasan Ukuran Sampel dalam Penelitian Mikrobiologi Pangan",
        
        description: "Strategi dan justifikasi akademis ketika penelitian mikrobiologi di lapangan tidak dapat memenuhi target ukuran sampel ideal.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/menyikapi-keterbatasan-kuran-Sampel/";
          
        },
      },{id: "post-menentukan-ukuran-sampel-penelitian-mikrobiologi-pangan-berdasarkan-data-epidemiologi",
        
          title: "Menentukan Ukuran Sampel Penelitian Mikrobiologi Pangan Berdasarkan Data Epidemiologi",
        
        description: "Panduan praktis menghitung ukuran sampel menggunakan data prevalensi terdahulu untuk mendeteksi Salmonella enterica dan Staphylococcus aureus pada jajanan jalanan di Gunungkidul.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/menentukan-ukuran-sampel-mikrobiologi-gunungkidul/";
          
        },
      },{id: "post-machine-vision-integrated-portable-colorimetric-biosensing-platform-with-triple-layered-pt-zif-8-3-pda-nanozymes-for-multiplexed-ultrasensitive-detection-of-pathogenic-bacteria",
        
          title: "Machine vision-integrated portable colorimetric biosensing platform with triple-layered (Pt@ZIF-8)(3)@PDA nanozymes for multiplexed ultrasensitive...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/machine-vision-integrated-portable-colorimetric-biosensing-p/";
          
        },
      },{id: "post-lt-em-gt-salmonella-lt-em-gt-in-surface-water-methodology-complexity-and-challenges",
        
          title: "&lt;em&gt;Salmonella&lt;/em&gt; in surface water: methodology, complexity, and challenges",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/salmonella-in-surface-water-methodology-complexity-and-chall/";
          
        },
      },{id: "post-genomic-and-epidemiological-analysis-of-lt-em-gt-vibrio-parahaemolyticus-lt-em-gt-o10-k4-a-newly-emerging-serotype-in-china",
        
          title: "Genomic and epidemiological analysis of &lt;em&gt;Vibrio parahaemolyticus&lt;/em&gt; O10:K4, a newly emerging serotype in...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/genomic-and-epidemiological-analysis-of-vibrio-parahaemolyti/";
          
        },
      },{id: "post-a-crispr-cas12a-mxene-nanozyme-platform-for-universal-detection-of-trace-dna",
        
          title: "A CRISPR/Cas12a-MXene Nanozyme Platform for Universal Detection of Trace DNA",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/a-crisprcas12a-mxene-nanozyme-platform-for-universal-detecti/";
          
        },
      },{id: "post-use-of-quantitative-indicator-microorganism-data-to-determine-if-turkey-re-hang-and-post-chill-sampling-are-predictive-of-lt-em-gt-salmonella-enterica-lt-em-gt-contamination-in-ground-turkey",
        
          title: "Use of quantitative indicator microorganism data to determine if turkey re-hang and post-chill...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/use-of-quantitative-indicator-microorganism-data-to-determin/";
          
        },
      },{id: "post-trends-and-advances-in-development-of-photodynamic-photothermal-and-intelligent-food-packaging-a-review",
        
          title: "Trends and Advances in Development of Photodynamic, Photothermal, and Intelligent Food Packaging: A...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/trends-and-advances-in-development-of-photodynamic-photother/";
          
        },
      },{id: "post-a-hierarchical-bayesian-approach-to-estimate-the-most-probable-number-mpn-concentration-of-lt-em-gt-salmonella-lt-em-gt-in-raw-chicken-from-qualitative-data",
        
          title: "A hierarchical Bayesian approach to estimate the most probable number (MPN) concentration of...",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/a-hierarchical-bayesian-approach-to-estimate-the-most-probab/";
          
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
            },},{id: "news-book-in-development-patogen-bakteri-bawaan-pangan-di-indonesia",
          title: 'Book in Development - Patogen Bakteri Bawaan Pangan di Indonesia',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-05-21-monograph-announcement/";
            },},{id: "news-call-for-papers-trophos-science-of-food",
          title: 'Call for Papers - Trophos Science of Food',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/cfp-trophos-2026/";
            },},{id: "projects-microbial-food-safety-of-green-vegetables",
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
