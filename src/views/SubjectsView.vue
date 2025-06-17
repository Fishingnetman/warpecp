<template>
  <div class="subjects">
    <header class="subjects-header">
      <h1>ข้อมูลรายวิชา</h1>
      <p class="subtitle">รายวิชาและผลลัพธ์การเรียนรู้ของวิศวกรรมคอมพิวเตอร์</p>
    </header>

    <div class="subjects-container">
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="ค้นหารายวิชา..."
          class="search-input"
        />
        <select v-model="selectedYear" class="filter-select">
          <option value="">ทุกชั้นปี</option>
          <option value="1">ชั้นปีที่ 1</option>
          <option value="2">ชั้นปีที่ 2</option>
          <option value="3">ชั้นปีที่ 3</option>
          <option value="4">ชั้นปีที่ 4</option>
        </select>
      </div>

      <div class="subjects-grid">
        <div
          v-for="subject in filteredSubjects"
          :key="subject.code"
          class="subject-card"
        >
          <div class="subject-header">
            <h2>{{ subject.name }}</h2>
            <span class="subject-code">{{ subject.code }}</span>
          </div>

          <div class="subject-info">
            <p class="subject-description">{{ subject.description }}</p>

            <div class="subject-details">
              <div class="detail-item">
                <span class="detail-label">หน่วยกิต:</span>
                <span>{{ subject.credits }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">ชั้นปี:</span>
                <span>ชั้นปีที่ {{ subject.year }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">วิชาบังคับก่อน:</span>
                <span>{{ subject.prerequisites.join(", ") || "ไม่มี" }}</span>
              </div>
            </div>

            <div class="learning-outcomes">
              <h3>ผลลัพธ์การเรียนรู้:</h3>
              <ul>
                <li v-for="(outcome, index) in subject.outcomes" :key="index">
                  {{ outcome }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Subject {
  code: string;
  name: string;
  description: string;
  credits: number;
  year: number;
  prerequisites: string[];
  outcomes: string[];
}

export default defineComponent({
  name: "SubjectsView",
  data() {
    return {
      searchQuery: "",
      selectedYear: "",
      subjects: [
        {
          code: "31-407-100-102",
          name: "พื้นฐานวิศวกรรมคอมพิวเตอร์",
          description:
            "แนวคิดพื้นฐานของวิศวกรรมคอมพิวเตอร์ ฮาร์ดแวร์ และซอฟต์แวร์",
          credits: 3,
          year: 1,
          prerequisites: [],
          outcomes: [
            "เข้าใจแนวคิดพื้นฐานของวิศวกรรมคอมพิวเตอร์",
            "ระบุส่วนประกอบของฮาร์ดแวร์คอมพิวเตอร์",
            "อธิบายกระบวนการพัฒนาซอฟต์แวร์",
          ],
        },
        {
          code: "31-407-100-101",
          name: "การเขียนโปรแกรมคอมพิวเตอร์",
          description: "พื้นฐานการเขียนโปรแกรมด้วยภาษาระดับสูง",
          credits: 3,
          year: 1,
          prerequisites: [],
          outcomes: [
            "เขียนและแก้ไขโปรแกรมคอมพิวเตอร์",
            "ประยุกต์แนวคิดการเขียนโปรแกรมเพื่อแก้ปัญหา",
            "ใช้เครื่องมือและสภาพแวดล้อมการเขียนโปรแกรม",
          ],
        },
        {
          code: "31-407-102-201",
          name: "การเขียนโปรแกรมเชิงวัตถุ",
          description: "แนวคิดการเขียนโปรแกรมขั้นสูงโดยใช้แนวทางเชิงวัตถุ",
          credits: 3,
          year: 2,
          prerequisites: ["31-407-100-101"],
          outcomes: [
            "ออกแบบและเขียนโปรแกรมเชิงวัตถุ",
            "ประยุกต์การสืบทอดและพอลิมอร์ฟิซึม",
            "ใช้รูปแบบการออกแบบในการพัฒนาซอฟต์แวร์",
          ],
        },
        {
          code: "31-407-102-202",
          name: "โครงสร้างข้อมูลและอัลกอริทึม",
          description: "การศึกษาโครงสร้างข้อมูลและอัลกอริทึมพื้นฐาน",
          credits: 3,
          year: 2,
          prerequisites: ["31-407-102-201"],
          outcomes: [
            "เขียนโครงสร้างข้อมูลพื้นฐาน",
            "วิเคราะห์ความซับซ้อนของอัลกอริทึม",
            "ประยุกต์อัลกอริทึมเพื่อแก้ปัญหา",
          ],
        },
        {
          code: "31-407-102-301",
          name: "ระบบฐานข้อมูล",
          description: "การออกแบบ การพัฒนา และการจัดการฐานข้อมูล",
          credits: 3,
          year: 2,
          prerequisites: ["31-407-102-201"],
          outcomes: [
            "ออกแบบและพัฒนาฐานข้อมูล",
            "เขียนและปรับแต่งคำสั่ง SQL",
            "ประยุกต์แนวคิดการจัดการฐานข้อมูล",
          ],
        },
        {
          code: "31-407-103-201",
          name: "คณิตศาสตร์ไม่ต่อเนื่องสำหรับวิศวกรรม",
          description: "พื้นฐานคณิตศาสตร์สำหรับวิศวกรรมคอมพิวเตอร์",
          credits: 3,
          year: 2,
          prerequisites: [],
          outcomes: [
            "ประยุกต์แนวคิดคณิตศาสตร์ไม่ต่อเนื่อง",
            "แก้ปัญหาทางคณิตศาสตร์",
            "ใช้เครื่องมือคณิตศาสตร์ในงานวิศวกรรม",
          ],
        },
        {
          code: "31-407-103-202",
          name: "การสื่อสารข้อมูล",
          description: "หลักการและวิธีการของระบบการสื่อสารข้อมูล",
          credits: 3,
          year: 2,
          prerequisites: [],
          outcomes: [
            "เข้าใจโปรโตคอลการสื่อสารข้อมูล",
            "ออกแบบระบบการสื่อสาร",
            "วิเคราะห์ประสิทธิภาพของเครือข่าย",
          ],
        },
        {
          code: "31-407-103-301",
          name: "เครือข่ายคอมพิวเตอร์",
          description: "แนวคิดและโปรโตคอลของเครือข่ายคอมพิวเตอร์",
          credits: 3,
          year: 2,
          prerequisites: ["31-407-103-202"],
          outcomes: [
            "กำหนดค่าอุปกรณ์เครือข่าย",
            "เขียนโปรโตคอลเครือข่าย",
            "แก้ไขปัญหาของเครือข่าย",
          ],
        },
        {
          code: "31-407-103-302",
          name: "ระบบปฏิบัติการ",
          description: "แนวคิดและการพัฒนาระบบปฏิบัติการ",
          credits: 3,
          year: 2,
          prerequisites: ["31-407-102-201"],
          outcomes: [
            "เข้าใจแนวคิดระบบปฏิบัติการ",
            "เขียนส่วนประกอบของระบบปฏิบัติการ",
            "จัดการทรัพยากรของระบบ",
          ],
        },
        {
          code: "31-407-104-201",
          name: "วงจรดิจิทัลและลอจิก",
          description: "การออกแบบวงจรดิจิทัลและการเขียนลอจิก",
          credits: 3,
          year: 1,
          prerequisites: [],
          outcomes: [
            "ออกแบบวงจรดิจิทัล",
            "เขียนฟังก์ชันลอจิก",
            "ใช้เครื่องมือออกแบบดิจิทัล",
          ],
        },
        {
          code: "31-407-104-202",
          name: "การออกแบบระบบดิจิทัล",
          description: "การออกแบบและพัฒนาระบบดิจิทัลขั้นสูง",
          credits: 3,
          year: 1,
          prerequisites: ["31-407-104-201"],
          outcomes: [
            "ออกแบบระบบดิจิทัลที่ซับซ้อน",
            "เขียนวงจรดิจิทัล",
            "ทดสอบและตรวจสอบการออกแบบดิจิทัล",
          ],
        },
        {
          code: "31-407-104-301",
          name: "สถาปัตยกรรมและองค์ประกอบคอมพิวเตอร์",
          description: "สถาปัตยกรรมฮาร์ดแวร์และองค์ประกอบของคอมพิวเตอร์",
          credits: 3,
          year: 2,
          prerequisites: ["31-407-104-202"],
          outcomes: [
            "เข้าใจสถาปัตยกรรมคอมพิวเตอร์",
            "ออกแบบส่วนประกอบของโปรเซสเซอร์",
            "วิเคราะห์ประสิทธิภาพของระบบ",
          ],
        },
        {
          code: "31-407-104-302",
          name: "ไมโครคอนโทรลเลอร์",
          description: "การเขียนโปรแกรมและการประยุกต์ใช้ไมโครคอนโทรลเลอร์",
          credits: 3,
          year: 2,
          prerequisites: ["31-407-104-201"],
          outcomes: [
            "เขียนโปรแกรมไมโครคอนโทรลเลอร์",
            "เชื่อมต่อกับฮาร์ดแวร์",
            "พัฒนาระบบฝังตัว",
          ],
        },
        {
          code: "31-407-105-404",
          name: "การออกแบบระบบอินเทอร์เน็ตของสรรพสิ่ง",
          description: "การออกแบบและการพัฒนาระบบ IoT",
          credits: 3,
          year: 2,
          prerequisites: ["31-407-104-302"],
          outcomes: [
            "ออกแบบระบบ IoT",
            "พัฒนาระบบ IoT",
            "เชื่อมต่อเซ็นเซอร์และแอคชูเอเตอร์",
          ],
        },
        {
          code: "31-407-106-401",
          name: "การเขียนโปรแกรมเว็บ",
          description: "การพัฒนาและเขียนโปรแกรมแอปพลิเคชันเว็บ",
          credits: 3,
          year: 2,
          prerequisites: ["31-407-102-201"],
          outcomes: [
            "พัฒนาแอปพลิเคชันเว็บ",
            "ใช้เทคโนโลยีเว็บ",
            "เขียนการออกแบบที่ตอบสนอง",
          ],
        },
        {
          code: "31-407-106-404",
          name: "การทำเหมืองข้อมูล",
          description: "เทคนิคและการประยุกต์ใช้การทำเหมืองข้อมูล",
          credits: 3,
          year: 4,
          prerequisites: ["31-407-102-301"],
          outcomes: [
            "ประยุกต์เทคนิคการทำเหมืองข้อมูล",
            "วิเคราะห์ชุดข้อมูลขนาดใหญ่",
            "เขียนอัลกอริทึมการเรียนรู้ของเครื่อง",
          ],
        },
        {
          code: "31-407-106-405",
          name: "การพัฒนาแอปพลิเคชันมือถือ",
          description: "การพัฒนาแอปพลิเคชันมือถือ",
          credits: 3,
          year: 4,
          prerequisites: ["31-407-106-401"],
          outcomes: [
            "พัฒนาแอปพลิเคชันมือถือ",
            "ใช้เฟรมเวิร์คการพัฒนามือถือ",
            "เขียน UI/UX สำหรับมือถือ",
          ],
        },
        {
          code: "31-407-101-402",
          name: "โครงงานวิศวกรรมคอมพิวเตอร์",
          description: "โครงงานปีสุดท้ายในวิศวกรรมคอมพิวเตอร์",
          credits: 3,
          year: 4,
          prerequisites: ["31-407-101-401"],
          outcomes: [
            "ทำโครงงานหลักให้เสร็จสมบูรณ์",
            "ประยุกต์หลักการวิศวกรรม",
            "นำเสนอผลงานโครงงาน",
          ],
        },
      ] as Subject[],
    };
  },
  computed: {
    filteredSubjects(): Subject[] {
      return this.subjects.filter((subject: Subject) => {
        const matchesSearch =
          subject.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          subject.code.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesYear =
          !this.selectedYear || subject.year === parseInt(this.selectedYear);
        return matchesSearch && matchesYear;
      });
    },
  },
});
</script>

<style scoped>
.subjects {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.subjects-header {
  text-align: center;
  margin-bottom: 3rem;
  background-color: #2c3e50;
  color: white;
  padding: 3rem 1rem;
  border-radius: 8px;
}

.subjects-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.search-bar {
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
}

.search-input,
.filter-select {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.search-input {
  flex: 1;
}

.filter-select {
  width: 150px;
}

.subjects-grid {
  display: grid;
  gap: 2rem;
}

.subject-card {
  background: #f8f9fa;
  border-radius: 4px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.subject-card:hover {
  transform: translateX(10px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.subject-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.subject-header h2 {
  color: #2c3e50;
  margin: 0;
  font-size: 1.3rem;
}

.subject-code {
  background: #e9ecef;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #495057;
}

.subject-description {
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.subject-details {
  background: #fff;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.detail-item {
  display: flex;
  margin-bottom: 0.5rem;
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-label {
  font-weight: bold;
  width: 120px;
  color: #495057;
}

.learning-outcomes {
  margin-top: 1.5rem;
}

.learning-outcomes h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.learning-outcomes ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.learning-outcomes li {
  color: #666;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .subjects {
    padding: 1rem;
  }

  .search-bar {
    flex-direction: column;
  }

  .filter-select {
    width: 100%;
  }
}
</style>
