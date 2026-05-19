---
layout: distill
title: Microbial Food Safety of Green Vegetables
description: Detection, identification, quantification, and predictive modeling for pathogens in green vegetables
giscus_comments: false
date: 2021-05-22
featured: true
mermaid:
  enabled: true
  zoomable: true
code_diff: true
map: true
chart:
  chartjs: true
  echarts: true
  vega_lite: true
tikzjax: true
typograms: true
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true

authors:
  - name: Dr. Nodali Ndraha
    url: "https://www.scopus.com/authid/detail.uri?authorId=57193574684"
    affiliations:
      name: Research Center for Food Technology and Processing National, Research and Innovation Agency

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Overview
  - name: Research Team
  - name: Outputs

---

## Overview
The microbial safety of vegetables has become a major concern due to the increasing number of foodborne illness outbreaks linked to pathogen-contaminated produce. This necessitates enhanced food safety management throughout the entire supply chain—from field production to distribution and retail—to mitigate contamination risks and safeguard consumer health. Furthermore, climate change complicates these efforts; shifts in temperature, altered precipitation patterns, and the increased frequency of extreme weather events can accelerate the spread and proliferation of pathogenic microorganisms. This proposal aims to develop predictive models and conduct a risk assessment of pathogen infections associated with the consumption of locally produced leafy green vegetables (spinach, water spinach, cabbage, and mustard greens) in Indonesia. Using Central Java as a case study, the research will evaluate the impacts of both local weather variability and global climate change. The study will begin by employing molecular techniques, specifically Polymerase Chain Reaction (PCR), to detect the presence of microbial pathogens in vegetable samples. Detection will focus on the primary pathogens frequently implicated in foodborne illnesses: *Salmonella enterica*, *Listeria monocytogenes*, and *Staphylococcus aureus*. Subsequently, predictive models will be developed using climate data and microbial contamination surveys to estimate the potential for vegetable contamination under various climatic conditions, focusing specifically on temperature, humidity, and precipitation variables. Additionally, the modeling framework will evaluate the transfer rates of pathogens from contact surfaces to the vegetables. Finally, we will assess the overall impact of climate change on infection risks by evaluating the health consequences of consuming vegetables contaminated with the aforementioned pathogens. Ultimately, this research is expected to provide a deeper understanding of how climate change affects the microbial safety of vegetables and serve as a foundation for developing effective mitigation strategies to address future food safety challenges.

## Research Team

<div class="table-responsive">
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Affiliation</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {% for person in site.data.teams.project_leafy_green %}
      <tr>
        <td>{{ forloop.index }}.</td>
        <td>{{ person.name }}</td>
        <td>{{ person.affiliation }}</td>
        <td>{{ person.role }}</td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>

## Outputs