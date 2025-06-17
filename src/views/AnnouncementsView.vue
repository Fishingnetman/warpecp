<template>
  <div class="announcements">
    <header class="header">
      <h1>Company Announcements</h1>
      <p class="subtitle">Stay updated with our latest news and information</p>
    </header>

    <div class="announcements-container">
      <!-- Sample announcements - these would typically come from an API -->
      <div
        v-for="announcement in announcements"
        :key="announcement.id"
        class="announcement-card"
      >
        <div class="announcement-date">{{ announcement.date }}</div>
        <h2 class="announcement-title">{{ announcement.title }}</h2>
        <p class="announcement-content">{{ announcement.content }}</p>
        <div class="announcement-footer">
          <span class="announcement-category">{{ announcement.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnnouncementsView",
  data() {
    return {
      announcements: [
        {
          id: 1,
          title: "Welcome to Our New Website",
          content:
            "We are excited to announce the launch of our new company website. Stay tuned for regular updates and announcements.",
          date: "2024-03-20",
          category: "General",
        },
        {
          id: 2,
          title: "Important Updates Coming Soon",
          content:
            "We have some exciting updates planned for the coming weeks. Make sure to check back regularly for new announcements.",
          date: "2024-03-19",
          category: "Updates",
        },
      ],
    };
  },
});
</script>

<style scoped>
.announcements {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
}

.announcements-container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.announcement-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.announcement-card:hover {
  transform: translateY(-5px);
}

.announcement-date {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.announcement-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.announcement-content {
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.announcement-footer {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.announcement-category {
  background: #e9ecef;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  color: #495057;
}
</style>
