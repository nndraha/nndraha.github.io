---
title: "About Me"
summary: ""
date: "2022-10-24"
type: "landing"
sections:
  - block: "resume-biography-3"
    content:
      username: "admin"
      text: ""
      button:
        text: "Download CV"
        url: "uploads/resume.pdf"
      headings:
        about: "About Me"
        education: ""
        interests: ""
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: "md"
      avatar:
        size: "medium"
        shape: "circle"
    ce: "section-763e1e22"
    As: "section-60d97213"
  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: true
  - block: resume-skills
    content:
      title: Skills & Hobbies
      username: admin
  - block: resume-languages
    content:
      title: Languages
      username: admin
  - block: "markdown"
    id: "research-pillars"
    content:
      title: "📚 Research Program"
      subtitle: "Bridging Molecular Microbiology & Quantitative Modeling"
      text: |-
        My research combines wet-lab molecular diagnostics with computational modeling to safeguard food systems across four core pillars:

        - **🧬 Molecular Detection** Designing rapid PMA-qPCR and isothermal (MIRA) assays to selectively quantify viable pathogens in complex food matrices.
        - **🦠 Fermentation Safety** Decoding microbial ecology in traditional fermented products to inhibit pathogen growth and toxin formation.
        - **🛡️ Biofilm Control** Assessing non-thermal physical and chemical interventions against persistent pathogenic biofilms on food-contact surfaces.
        - **📊 Quantitative Risk & Meta-Analysis** Building QMRA models, predictive growth kinetics, and reproducible R workflows for evidence synthesis.
    design:
      columns: '1'
  - block: "collection"
    content:
      title: "Recent Publications"
      text: ""
      filters:
        folders:
          - "publications"
        exclude_featured: false
        count: 5
    design:
      view: "citation"
    ce: "section-41f3dcbb"
    As: "section-11194df1"
    id: "paper"
  - block: "collection"
    content:
      title: "Recent & Upcoming Talks"
      filters:
        folders:
          - "events"
    design:
      view: "card"
    ce: "section-talks"
    id: "talks"
    As: "section-0456c69a"
  - block: "collection"
    content:
      title: "Recent News"
      subtitle: ""
      text: ""
      page_type: "blog"
      count: 10
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      offset: 0
      order: "desc"
    design:
      view: "card"
      spacing:
        padding:
          - 0
          - 0
          - 0
          - 0
    ce: "section-news"
    id: "news"
    As: "section-60227cb3"
---
