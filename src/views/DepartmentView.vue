<template>
  <div class="department">
    <header class="department-header">
      <h1>Department of Engineering</h1>
      <p class="subtitle">Excellence in Engineering Education and Research</p>
    </header>

    <div class="content-grid">
      <div class="welcome-section">
        <h2>Welcome to Engineering</h2>
        <p>
          The Department of Engineering is committed to excellence in education,
          research, and innovation. Our programs prepare students for successful
          careers in various engineering disciplines.
        </p>
      </div>

      <div class="highlights-grid">
        <div class="highlight-card">
          <h3>Programs Offered</h3>
          <ul>
            <li>Civil Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Electrical Engineering</li>
            <li>Computer Engineering</li>
          </ul>
        </div>

        <div class="highlight-card">
          <h3>Research Areas</h3>
          <ul>
            <li>Sustainable Engineering</li>
            <li>Smart Manufacturing</li>
            <li>Robotics and Automation</li>
            <li>Digital Systems</li>
          </ul>
        </div>

        <div class="highlight-card">
          <h3>Student Resources</h3>
          <ul>
            <li>Modern Laboratories</li>
            <li>Research Facilities</li>
            <li>Industry Partnerships</li>
            <li>Career Support</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DepartmentView",
});
</script>

<style scoped>
.department {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.department-header {
  text-align: center;
  margin-bottom: 3rem;
  background-color: #2c3e50;
  color: white;
  padding: 3rem 1rem;
  border-radius: 8px;
}

.department-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.content-grid {
  display: grid;
  gap: 2rem;
}

.welcome-section {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.welcome-section h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.highlight-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.highlight-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.highlight-card ul {
  list-style: none;
  padding: 0;
}

.highlight-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.highlight-card li:last-child {
  border-bottom: none;
}
</style>
