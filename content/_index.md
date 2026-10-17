---
title: "About Me"
summary: ""
date: "2022-10-24"
type: "landing"
sections:
  - block: "resume-biography-3"
    content:
      username: "nodali"
      text: ""
      button:
        text: "Download CV"
        url: "uploads/resume.pdf"
      headings:
        about: ""
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
  - block: "markdown"
    content:
      title: "📚 My Research"
      subtitle: Bridging Molecular Microbiology & Quantitative Modeling
      text: |-
        My research program combines wet-lab molecular diagnostics with computational modeling to safeguard food systems:

        - **Molecular Detection:** Designing rapid PMA-qPCR and isothermal (MIRA) assays to detect viable pathogens in complex foods.
        - **Fermentation Safety:** Decoding microbial ecology in traditional fermented products to inhibit pathogen growth and toxin formation.
        - **Biofilm Control:** Assessing non-thermal interventions against persistent pathogenic biofilms on food-contact surfaces.
        - **Quantitative Risk & Meta-Analysis:** Building QMRA models and reproducible R workflows for predictive microbiology and evidence synthesis.
    design:
      columns: '1'
    ce: "section-f5237d65"
    As: "section-a45dea86"
  - block: "collection"
    content:
      title: "Featured Publications"
      filters:
        folders:
          - "publications"
        featured_only: true
    design:
      view: "article-grid"
      columns: 2
    ce: "section-papers"
    id: "papers"
    As: "section-873783e2"
  - block: "collection"
    content:
      title: "Recent Publications"
      text: ""
      filters:
        folders:
          - "publications"
        exclude_featured: true
        count: 5
    design:
      view: "citation"
    ce: "section-41f3dcbb"
    As: "section-11194df1"
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
