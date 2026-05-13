---
layout: page
title: Projects
permalink: /projects/
description: Research projects managed by Dr. Nodali Ndraha
nav: true
nav_order: 5
display_categories: [work, fun]
horizontal: false
---

| Period    | Title                                                                                                                                                                                                                          | Funding Source                                           | Role    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------- |
| 2026      | STAPHYLO-GUARD: Inovasi Rapid Test Kit Berbasis MIRA-CRISPR-Cas12a untuk Mendukung Keamanan Pangan Program Makan Bergizi Gratis                                                                                                | Rumah Program Organisasi Pertanian dan Pangan Tahun 2026 | Lead PI |
| 2025-2027 | Pengembangan model prediktif dan kajian risiko kuantitatif patogen pada sayuran hijau yang diproduksi oleh petani lokal di Indonesia di bawah skenario perubahan iklim: Studi kasus di Jawa Tengah                             | Riset dan Inovasi Indonesia Maju Kompetisi Gelombang 7   | Lead PI |
| 2025      | Pengembangan deteksi patogen dan resistensi antiobiotik isolat bakteri dari linkungan produksi keju artisan                                                                                                                    | Rumah Program Organisasi Pertanian dan Pangan Tahun 2025 | Lead PI |
| 2025      | Karakterisasi multi-omics vegetable rennet-like dan keju artisan halloumi spirulina                                                                                                                                            | Rumah Program Organisasi Pertanian dan Pangan Tahun 2025 | Member  |
| 2025-2027 | Formulation, optimal design, and evaluation of the greenness profile of amine-functionalized magnetic activated carbons as an effervescence tablet for the quechers extraction method of tetracyclines drugs from milk samples | Riset dan Inovasi Indonesia Maju Kompetisi Gelombang 7   | Member  |
| 2025      | Pengembangan metode deteksi simultan untuk mendukung kajian risiko AMR dan residu antibiotik pada perikanan budidaya dengan pendekatan one-health concept                                                                      | Rumah Program Organisasi Riset Kesehatan Tahun 2025      | Member  |
| 2024-2025 | Pengembangan deteksi mycotoxin pada pakan dan berbagai produk susu komersil sapi perah: Konsep one health dalam keamanan pakan-pangan                                                                                          | Riset dan Inovasi Indonesia Maju Skema Kompetisi 3       | Member  |
{:.table .table-striped .table-bordered .table-hover}

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>