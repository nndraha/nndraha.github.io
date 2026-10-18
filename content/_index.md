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
  - block: markdown
    id: research
    content:
      title: "🔬 Research Pillars"
      subtitle: "Bridging Wet-Lab Diagnostics & Quantitative Risk Modeling"
      text: |-
        My research program integrates molecular biology with computational frameworks to solve critical food safety challenges from farm to table.

        | Research Pillar | Core Focus & Methodology |
        | :--- | :--- |
        | **🧬 Molecular Detection** | Engineering rapid **PMA-qPCR** and isothermal (**MIRA**) assays for viable pathogen detection in complex food matrices. |
        | **🦠 Fermentation Safety** | Decoding microbial ecology in traditional fermented products to inhibit pathogen colonization and toxin synthesis. |
        | **🛡️ Biofilm Control** | Optimizing non-thermal interventions against persistent foodborne biofilms on industrial contact surfaces. |
        | **📊 Quantitative Risk & R** | Constructing **QMRA** frameworks, predictive microbiology models, and reproducible **R workflows** for evidence synthesis. |
    design:
      spacing:
        padding: ["20px", "0", "20px", "0"]
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
