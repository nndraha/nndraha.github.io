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
          
          /* 2. Stop cards from stretching too wide on desktop */
          .grid > div {
            min-width: 250px !important;
            max-width: 320px !important;
          }
          
          /* 3. Remove all bottom borders globally on this page */
          .border-b, 
          .border-slate-200, 
          .border-slate-800,
          .dark\:border-slate-700 {
            border-bottom: 0px !important;
          }

          /* 4. Center all section headers */
          h1, h2, h3, .section-heading {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            width: 100% !important;
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
        - "Principal Investigators"
        - "Students"
      show_empty_groups: true
    design:
      max_columns: 3
      show_role: true
      show_social: true
      show_interests: true
      sort_by: "last_name" 
---