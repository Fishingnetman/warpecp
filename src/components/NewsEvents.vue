<template>
  <section class="news-events">
    <h2>ข่าวสารและกิจกรรม</h2>
    <div class="news-grid">
      <div v-for="(news, index) in newsItems" :key="index" class="news-card">
        <div class="news-image">
          <img :src="news.image" :alt="news.title" />
        </div>
        <div class="news-content">
          <h3>{{ news.title }}</h3>
          <p>{{ news.description }}</p>
          <span class="news-date">{{ news.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewsEvents",
  data() {
    return {
      newsItems: [
        {
          title: "เปิดรับสมัครนักศึกษาใหม่",
          description:
            "คณะวิศวกรรมศาสตร์ เปิดรับสมัครนักศึกษาใหม่ ประจำปีการศึกษา 2568",
          date: "1 มิถุนายน 2568",
          image: "/images/news/admission.jpg",
        },
        {
          title: "สัมมนาวิชาการ",
          description:
            "สัมมนาวิชาการเรื่อง เทคโนโลยีใหม่ในวงการวิศวกรรมคอมพิวเตอร์",
          date: "15 มิถุนายน 2568",
          image: "/images/news/seminar.jpg",
        },
        {
          title: "ทุนการศึกษา",
          description: "เปิดรับสมัครขอรับทุนการศึกษา ประจำภาคการศึกษา 1/2568",
          date: "20 มิถุนายน 2568",
          image: "/images/news/scholarship.jpg",
        },
      ],
    };
  },
});
</script>

<style scoped>
.news-events {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  height: calc(100% - 4rem);
  overflow-y: auto;
}

.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 100%;
  max-height: 400px;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-content {
  padding: 1.5rem;
  height: calc(100% - 200px);
  overflow: hidden;
}

.news-content h3 {
  color: #2c3e50;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
}

.news-content p {
  color: #666;
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.news-date {
  color: #42b983;
  font-size: 0.8rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
