---
layout: default
title: Projects
---

<div class="projects-page">
  <header class="page-header">
    <h1>Data Analytics Projects</h1>
    <p>Selected case studies demonstrating analytical approaches and business impacts</p>
  </header>

  <div class="project-filters">
    <button class="filter-btn active" data-filter="all">All Projects</button>
    <button class="filter-btn" data-filter="analysis">Data Analysis</button>
    <button class="filter-btn" data-filter="viz">Visualization</button>
    <button class="filter-btn" data-filter="ml">Machine Learning</button>
  </div>

  <div class="projects-container">
    {% for project in site.data.projects %}
    <div class="project-item" data-category="{{ project.category }}">
      <div class="project-image-container">
        <img src="{{ project.image }}" alt="{{ project.title }}" class="project-image">
        <div class="project-tools">
          {% for tool in project.tools_list %}
          <span class="tool-tag">{{ tool }}</span>
          {% endfor %}
        </div>
      </div>
      
      <div class="project-details">
        <h2>{{ project.title }}</h2>
        
        <div class="project-meta">
          <span class="project-category">{{ project.category }}</span>
          <span class="project-date">{{ project.date }}</span>
        </div>
        
        <div class="project-description">
          {{ project.description }}
        </div>
        
        <div class="project-highlights">
          <h3>Key Achievements:</h3>
          <ul>
            {% for highlight in project.highlights %}
            <li>{{ highlight }}</li>
            {% endfor %}
          </ul>
        </div>
        
        <div class="project-links">
          <a href="{{ project.url }}" class="btn btn-primary">View Case Study</a>
          {% if project.github %}
          <a href="{{ project.github }}" class="btn btn-outline">GitHub</a>
          {% endif %}
          {% if project.kaggle %}
          <a href="{{ project.kaggle }}" class="btn btn-outline">Kaggle</a>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
