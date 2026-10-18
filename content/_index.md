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
  - block: features
    id: research-pillars
    content:
      title: "Research Program"
      subtitle: "Integrating Molecular Diagnostics & Computational Microbiology"
      text: "My work combines wet-lab molecular assays with quantitative modeling to safeguard food supply chains against emerging microbial hazards."
      items:
        - name: "Molecular Diagnostics"
          description: "Developing rapid PMA-qPCR and isothermal (MIRA) assays to selectively quantify viable pathogens in complex food matrices."
          icon: dna
          icon_pack: fas
        - name: "Fermentation Ecology"
          description: "Mapping microbial succession in traditional fermented foods to bio-control pathogen proliferation and toxigenesis."
          icon: vial-virus
          icon_pack: fas
        - name: "Biofilm Interventions"
          description: "Evaluating non-thermal processing technologies to eradicate persistent pathogenic biofilms on food-contact surfaces."
          icon: shield-virus
          icon_pack: fas
        - name: "QMRA & Evidence Synthesis"
          description: "Building quantitative microbial risk assessment models, predictive growth kinetics, and reproducible R meta-analysis pipelines."
          icon: chart-line
          icon_pack: fas
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
