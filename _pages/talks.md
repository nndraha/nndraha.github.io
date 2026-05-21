---
layout: page
title: Talks
permalink: /talks/
description: A collection of my speaking engagements, keynotes, and seminars.
nav: true
nav_order: 5
---

<div class="projects">
  <div class="row row-cols-1 row-cols-md-2">
    
    {% assign sorted_talks = site.talks | sort: 'date' | reverse %}
    
    {% for talk in sorted_talks %}
      <div class="col mb-4">
        <a href="{{ talk.url | relative_url }}">
          <div class="card h-100 hoverable">
            {% if talk.img %}
              {%
                include figure.liquid
                loading="lazy"
                path=talk.img
                sizes="250px"
                alt="talk thumbnail"
                class="card-img-top"
              %}
            {% endif %}
            <div class="card-body">
              <h3 class="card-title">{{ talk.title }}</h3>
              <p class="card-text">{{ talk.description }}</p>
              
              <div class="row ml-1 mr-1 p-0 text-muted" style="font-size: 0.85rem;">
                {% if talk.date %}
                  <span class="mr-3"><i class="fa-regular fa-calendar"></i> {{ talk.date | date: "%B %d, %Y" }}</span>
                {% endif %}
                {% if talk.location %}
                  <span><i class="fa-solid fa-location-dot"></i> {{ talk.location }}</span>
                {% endif %}
              </div>
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
    
  </div>
</div>