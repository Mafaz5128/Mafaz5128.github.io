---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-content">
    <h1>Turning Data Into <span class="highlight">Actionable Insights</span></h1>
    <h2>{{ site.title }}</h2>
    <p>Specializing in data storytelling, predictive analytics, and machine learning applications</p>
    <div class="cta-buttons">
      <a href="#projects" class="btn btn-primary">View My Work</a>
      <a href="#contact" class="btn btn-secondary">Get In Touch</a>
    </div>
  </div>
  <div class="hero-image">
    <div class="data-visualization">
      <canvas id="heroChart" width="400" height="400"></canvas>
    </div>
  </div>
</section>

<section id="skills" class="skills-section">
  <h2>Technical Skills</h2>
  <div class="skills-grid">
    {% for skill in site.skills %}
    <div class="skill-category">
      <h3>{{ skill.category }}</h3>
      <ul>
        {% for item in skill.items %}
        <li>{{ item }}</li>
        {% endfor %}
      </ul>
      {% if skill.certifications %}
      <div class="certifications">
        <h4>Certifications:</h4>
        <ul>
          {% for cert in skill.certifications %}
          <li>{{ cert }}</li>
          {% endfor %}
        </ul>
      </div>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</section>

<section id="projects" class="projects-section">
  <h2>Featured Projects</h2>
  <div class="projects-grid">
    {% for project in site.data.projects limit:3 %}
    <div class="project-card">
      <img src="{{ project.image }}" alt="{{ project.title }}" class="project-image">
      <div class="project-content">
        <h3>{{ project.title }}</h3>
        <div class="project-meta">
          <span class="tools">{{ project.tools }}</span>
          <span class="duration">{{ project.duration }}</span>
        </div>
        <div class="project-impact">
          <h4>Impact:</h4>
          <ul>
            {% for impact in project.impact %}
            <li>{{ impact }}</li>
            {% endfor %}
          </ul>
        </div>
        <div class="project-links">
          <a href="{{ project.url }}" class="btn btn-primary">Case Study</a>
          {% if project.github %}
          <a href="{{ project.github }}" class="btn btn-outline">View Code</a>
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
  <a href="/projects" class="btn btn-primary">View All Projects</a>
</section>
