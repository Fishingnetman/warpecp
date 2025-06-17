<template>
  <div class="home">
    <div class="section">
      <ImageSlider :slides="slides" />
    </div>
    <div class="section">
      <NewsEvents />
    </div>
    <div class="section">
      <AcademicCalendar />
    </div>
    <div class="section">
      <RelatedLinks />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageSlider from "@/components/ImageSlider.vue";
import NewsEvents from "@/components/NewsEvents.vue";
import RelatedLinks from "@/components/RelatedLinks.vue";
import AcademicCalendar from "@/components/AcademicCalendar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ImageSlider,
    RelatedLinks,
    NewsEvents,
    AcademicCalendar,
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          image: "/images/slide1.jpg",
          title: "คณะวิศวกรรมศาสตร์",
          description: "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น",
        },
        {
          id: 2,
          image: "/images/slide2.jpg",
          title: "วิศวกรรมคอมพิวเตอร์",
          description: "พัฒนาทักษะด้านการออกแบบและพัฒนาระบบคอมพิวเตอร์",
        },
        {
          id: 3,
          image: "/images/slide3.jpg",
          title: "โอกาสในการทำงาน",
          description: "เตรียมความพร้อมสู่อาชีพในอนาคต",
        },
      ],
    };
  },
});
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.section {
  margin-bottom: 4rem;
  position: relative;
  isolation: isolate;
}

.section:last-child {
  margin-bottom: 0;
}
</style>
