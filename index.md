---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-content">
    <h1>Turning Data Into <span class="highlight">Actionable Insights</span></h1>
    <h2>Jane Smith | Data Analyst & AI Enthusiast</h2>
    <p>Specializing in data storytelling, predictive analytics, and machine learning applications</p>
    <div class="cta-buttons">
      <a href="#projects" class="btn btn-primary">See My Work</a>
      <a href="#contact" class="btn btn-secondary">Get In Touch</a>
    </div>
  </div>
  <div class="hero-image">
    <div class="data-visualization">
      <!-- This would be replaced with an actual visualization -->
      <canvas id="heroChart" width="400" height="400"></canvas>
    </div>
  </div>
</section>

<section id="expertise" class="expertise-section">
  <h2>Areas of Expertise</h2>
  <div class="expertise-grid">
    <div class="expertise-card">
      <i class="fas fa-chart-line"></i>
      <h3>Data Analysis</h3>
      <p>Extracting meaningful insights from complex datasets using statistical methods and visualization techniques.</p>
    </div>
    <div class="expertise-card">
      <i class="fas fa-brain"></i>
      <h3>Machine Learning</h3>
      <p>Building predictive models and implementing AI solutions to solve business problems.</p>
    </div>
    <div class="expertise-card">
      <i class="fas fa-database"></i>
      <h3>Data Engineering</h3>
      <p>Designing efficient data pipelines and architectures for analytics applications.</p>
    </div>
  </div>
</section>

<section id="tools" class="tools-section">
  <h2>Technical Toolbox</h2>
  <div class="tools-container">
    {% for tool in site.tools %}
    <div class="tool-item">
      <div class="tool-info">
        <span class="tool-name">{{ tool.name }}</span>
        <span class="tool-percent">{{ tool.level }}%</span>
      </div>
      <div class="tool-bar">
        <div class="tool-level" style="width: {{ tool.level }}%"></div>
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<section id="projects" class="projects-section">
  <h2>Featured Projects</h2>
  <div class="projects-grid">
    {% for project in site.data.projects limit:3 %}
    <div class="project-card">
      <div class="project-visual">
        <img src="{{ project.image }}" alt="{{ project.title }} visualization">
      </div>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="project-tech">
        {% for tech in project.technologies %}
        <span class="tech-tag">{{ tech }}</span>
        {% endfor %}
      </div>
      <a href="{{ project.url }}" class="btn btn-outline">View Case Study</a>
    </div>
    {% endfor %}
  </div>
  <a href="/projects" class="btn btn-primary">View All Projects</a>
</section>

<section id="blog" class="blog-section">
  <h2>Latest Articles</h2>
  <div class="blog-posts">
    {% for post in site.posts limit:2 %}
    <article class="blog-post">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</p>
      <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      <a href="{{ post.url }}" class="read-more">Read More →</a>
    </article>
    {% endfor %}
  </div>
  <a href="/blog" class="btn btn-secondary">View All Articles</a>
</section>
