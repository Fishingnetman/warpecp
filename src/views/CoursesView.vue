<template>
  <div class="courses">
    <header class="courses-header">
      <h1>หลักสูตรวิศวกรรมศาสตร์</h1>
      <p class="subtitle">หลักสูตรที่เปิดสอนในคณะวิศวกรรมศาสตร์</p>
    </header>

    <div class="courses-container">
      <div class="programs-list">
        <div v-for="program in programs" :key="program.id" class="program-card">
          <h2>{{ program.name }}</h2>
          <p class="program-description">{{ program.description }}</p>

          <div class="courses-list">
            <div
              v-for="course in program.courses"
              :key="course.code"
              class="course-item"
            >
              <div class="course-header">
                <h3>{{ course.name }}</h3>
                <span class="course-code">{{ course.code }}</span>
              </div>
              <p class="course-description">{{ course.description }}</p>
              <div class="course-details">
                <span class="credits">หน่วยกิต: {{ course.credits }}</span>
                <span class="semester">ภาคการศึกษา: {{ course.semester }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Course {
  code: string;
  name: string;
  description: string;
  credits: number;
  semester: string;
}

interface Program {
  id: number;
  name: string;
  description: string;
  courses: Course[];
}

export default defineComponent({
  name: "CoursesView",
  data() {
    return {
      programs: [
        {
          id: 1,
          name: "วิศวกรรมคอมพิวเตอร์",
          description: "หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์",
          courses: [
            {
              code: "31-407-100-102",
              name: "พื้นฐานวิศวกรรมคอมพิวเตอร์",
              description: "แนวคิดและหลักการพื้นฐานของวิศวกรรมคอมพิวเตอร์",
              credits: 3,
              semester: "ปีที่ 1 ภาคการศึกษาที่ 1",
            },
            {
              code: "31-407-100-101",
              name: "การเขียนโปรแกรมคอมพิวเตอร์",
              description: "แนวคิดและวิธีการเขียนโปรแกรมคอมพิวเตอร์เบื้องต้น",
              credits: 3,
              semester: "ปีที่ 1 ภาคการศึกษาที่ 2",
            },
            {
              code: "31-407-102-201",
              name: "การเขียนโปรแกรมเชิงวัตถุ",
              description: "แนวคิดการเขียนโปรแกรมเชิงวัตถุขั้นสูง",
              credits: 3,
              semester: "ปีที่ 2 ภาคการศึกษาที่ 1",
            },
            {
              code: "31-407-102-202",
              name: "โครงสร้างข้อมูลและอัลกอริทึม",
              description: "การศึกษาโครงสร้างข้อมูลและอัลกอริทึมพื้นฐาน",
              credits: 3,
              semester: "ปีที่ 2 ภาคการศึกษาที่ 2",
            },
            {
              code: "31-407-103-202",
              name: "การสื่อสารข้อมูล",
              description: "หลักการและวิธีการของระบบการสื่อสารข้อมูล",
              credits: 3,
              semester: "ปีที่ 2 ภาคการศึกษาที่ 1",
            },
            {
              code: "31-407-101-401",
              name: "สัมมนาโครงงานวิศวกรรมคอมพิวเตอร์",
              description: "สัมมนาเกี่ยวกับการพัฒนโครงงานวิศวกรรมคอมพิวเตอร์",
              credits: 1,
              semester: "ปีที่ 2 ภาคการศึกษาที่ 2",
            },
          ],
        },
      ] as Program[],
    };
  },
});
</script>

<style scoped>
.courses {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.courses-header {
  text-align: center;
  margin-bottom: 3rem;
  background-color: #2c3e50;
  color: white;
  padding: 3rem 1rem;
  border-radius: 8px;
}

.courses-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.programs-list {
  display: grid;
  gap: 3rem;
}

.program-card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.program-card h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.program-description {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.courses-list {
  display: grid;
  gap: 1.5rem;
}

.course-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 4px;
  transition: transform 0.2s;
}

.course-item:hover {
  transform: translateX(10px);
}

.course-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.course-header h3 {
  color: #2c3e50;
  margin: 0;
  font-size: 1.3rem;
}

.course-code {
  background: #e9ecef;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #495057;
}

.course-description {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.course-details {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #666;
}

.credits,
.semester {
  background: #e9ecef;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .courses {
    padding: 1rem;
  }

  .course-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .course-details {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
