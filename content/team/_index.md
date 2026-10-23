---
title: "Meet the Lab"
type: landing

sections:
  - block: markdown
    content:
      text: |
        <style>
          /* 1. Force the grid to stretch all cards to equal height */
          .grid {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            align-items: stretch !important;
            gap: 2.5rem !important;
          }
          
          /* 2. Lock every card to the exact same width and layout */
          .grid > div {
            width: 280px !important;
            max-width: 280px !important;
            flex: 0 0 280px !important;
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

          /* 4. Center headers and the main subtitle container */
          h1, h2, h3, .section-heading, .section-subheading, .text-muted, .prose {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 100% !important;
            width: 100% !important;
            display: block !important;
          }

          /* 5. Center the social icons container and push it to the bottom */
          .grid > div .flex,
          .grid > div ul {
            justify-content: center !important;
            width: 100% !important;
            margin-top: auto !important;
          }
          
          /* 6. Force flex-containers in the header to center their children */
          .mb-8, .mb-12, header {
            align-items: center !important;
            justify-content: center !important;
          }

          /* 7. Hide the specific bio snippet inside the grid cards */
          .grid .line-clamp-2 {
            display: none !important;
          }

          /* 8. Force all images to be the exact same size and crop uniformly */
          .grid > div img {
            width: 100% !important;
            aspect-ratio: 4 / 5 !important;
            object-fit: cover !important;
            object-position: center top !important;
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
        - "Alumni"
      show_empty_groups: true
    design:
      max_columns: 3
      show_role: true
      show_social: true
      show_interests: false
      sort_by: "weight" 
---