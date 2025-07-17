---
layout: default
title: Projects
---

<section class="projects-header">
  <h1>Data Projects</h1>
  <p>Selected case studies demonstrating my analytical approach and technical skills</p>
</section>

<div class="projects-filter">
  <button class="filter-btn active" data-filter="all">All Projects</button>
  <button class="filter-btn" data-filter="analysis">Data Analysis</button>
  <button class="filter-btn" data-filter="viz">Visualization</button>
  <button class="filter-btn" data-filter="ml">Machine Learning</button>
</div>

<div class="projects-container">
  {% for project in site.data.projects %}
  <div class="project-item" data-category="{{ project.category }}">
    <div class="project-image">
      <img src="{{ project.image }}" alt="{{ project.title }}">
    </div>
    <div class="project-details">
      <h3>{{ project.title }}</h3>
      <div class="project-meta">
        <span class="project-category">{{ project.category }}</span>
        <span class="project-date">{{ project.date }}</span>
      </div>
      <p>{{ project.description }}</p>
      <div class="project-links">
        <a href="{{ project.url }}" class="btn btn-primary">Case Study</a>
        {% if project.github %}
        <a href="{{ project.github }}" class="btn btn-outline">View Code</a>
        {% endif %}
        {% if project.kaggle %}
        <a href="{{ project.kaggle }}" class="btn btn-outline">Kaggle Notebook</a>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>
