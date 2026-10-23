---
title: "Meet the Lab"
type: landing

sections:
  # 1. INVISIBLE CSS INJECTION BLOCK
  - block: markdown
    content:
      text: |
        <style>
          /* Center the profile cards */
          #team-showcase .grid {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 3rem !important;
          }
          
          /* Remove the lines and center the category titles */
          #team-showcase .border-b,
          #team-showcase h2,
          #team-showcase h3 {
            border-bottom: none !important;
            text-align: center !important;
            width: 100% !important;
          }
        </style>
    design:
      # Removes padding so this block takes up no physical space
      spacing:
        padding: ["0", "0", "0", "0"]

  # 2. YOUR TEAM BLOCK
  - block: team-showcase
    content:
      title: "Our Team"
      text: "Meet the researchers, engineers, and students driving our projects forward."
      user_groups:
        - "Principal Investigators"
        - "Students"
      show_empty_groups: true
    design:
      id: team-showcase
      max_columns: 3
      show_role: true
      show_social: true
      show_interests: true
      sort_by: "last_name" 
---