---
title: "Meet the Lab"
type: landing

sections:
  - block: markdown
    content:
      text: |
        <style>
          /* 1. Force the Tailwind grid to center its items */
          .grid {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 2.5rem !important;
          }
          
          /* 2. Format the cards and center everything inside them */
          .grid > div {
            min-width: 250px !important;
            max-width: 320px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          
          /* 3. Remove all bottom borders globally on this page */
          .border-b, 
          .border-slate-200, 
          .border-slate-800,
          .dark\:border-slate-700 {
            border-bottom: 0px !important;
          }

          /* 4. Center all section headers, paragraphs, and subtitle text */
          h1, h2, h3, p, .section-heading, .section-subheading {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            width: 100% !important;
          }

          /* 5. Center the social icons container */
          .grid > div .flex,
          .grid > div ul {
            justify-content: center !important;
            width: 100% !important;
          }
          
          /* 6. Force flex-containers in the header to center their children */
          .mb-8, .mb-12, header {
            align-items: center !important;
          }
        </style>
    design:
      spacing:
        padding: ["0", "0", "0", "0"]

  - block: team-showcase
    content:
      title: "Our Team"
      text: "Meet the researchers, engineers, and students driving our projects forward."
      user_groups:
        - "Principal Investigator"
        - "Students"
      show_empty_groups: true
    design:
      max_columns: 3
      show_role: true
      show_social: true
      show_interests: true
      sort_by: "last_name" 
---