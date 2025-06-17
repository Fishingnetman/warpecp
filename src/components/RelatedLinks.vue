<template>
  <section class="related-links">
    <h2>ลิงค์ที่เกี่ยวข้อง</h2>
    <div class="links-grid">
      <a
        v-for="link in currentPageLinks"
        :key="link.url"
        :href="link.url"
        class="link-card"
        target="_blank"
      >
        <h3>{{ link.title }}</h3>
        <p>{{ link.description }}</p>
      </a>
    </div>
    <div class="pagination">
      <button
        @click="prevPage"
        :disabled="currentPage === 0"
        class="pagination-btn"
      >
        &lt; ก่อนหน้า
      </button>
      <span class="page-info"
        >หน้า {{ currentPage + 1 }} จาก {{ totalPages }}</span
      >
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages - 1"
        class="pagination-btn"
      >
        ถัดไป &gt;
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Link {
  url: string;
  title: string;
  description: string;
}

export default defineComponent({
  name: "RelatedLinks",
  data() {
    return {
      currentPage: 0,
      linksPerPage: 4,
      links: [
        {
          url: "https://ess-register.rmuti.ac.th/AppKK/announce",
          title: "ระบบสารสนเทศเพื่อการศึกษา",
          description: "เข้าสู่ระบบสารสนเทศเพื่อการศึกษา",
        },
        {
          url: "https://www.kkc.rmuti.ac.th/",
          title: "เว็บไซต์มหาวิทยาลัย",
          description:
            "เว็บไซต์หลักของมหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น",
        },
        {
          url: "https://www.kkc.rmuti.ac.th/2017/?page_id=13758",
          title: "สายตรงรองอธิการบดี",
          description: "รายละเอียดข้อมูลติดต่อสายตรงรองอธิการบดี",
        },
        {
          url: "https://www.rmuti.ac.th/network/services/",
          title: "ระบบจัดการข้อมูลและบริการอินเทอร์เน็ต",
          description: "รายละเอียดข้อมูลระบบจัดการข้อมูลและบริการอินเทอร์เน็ต",
        },
        {
          url: "https://oneservice.rmuti.ac.th/",
          title: "ระบบแจ้งซ่อม One Service",
          description: "เว็บไซต์แจ้งซ่อมอุปกรณ์ด้านเทคโนโลยีสารสนเทศ",
        },
      ] as Link[],
    };
  },
  computed: {
    totalPages(): number {
      return Math.ceil(this.links.length / this.linksPerPage);
    },
    currentPageLinks(): Link[] {
      const start = this.currentPage * this.linksPerPage;
      return this.links.slice(start, start + this.linksPerPage);
    },
  },
  methods: {
    nextPage(): void {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
      }
    },
    prevPage(): void {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
  },
});
</script>

<style scoped>
.related-links {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto 2rem;
  min-height: 200px;
  align-content: start;
}

.link-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  text-decoration: none;
  color: inherit;
  display: block;
  height: auto;
  overflow: hidden;
}

.link-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #f8f9fa;
}

.link-card h3 {
  color: #2c3e50;
  margin-bottom: 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.link-card p {
  color: #666;
  margin: 0;
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  height: 40px;
  position: relative;
}

.pagination-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-btn:hover:not(:disabled) {
  background: #f8f9fa;
  border-color: #999;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  color: #666;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .links-grid {
    grid-template-columns: 1fr;
  }

  .pagination {
    flex-direction: column;
    gap: 0.5rem;
    height: auto;
  }
}
</style>
