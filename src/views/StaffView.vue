<template>
  <div class="staff">
    <header class="staff-header">
      <h1>รายชื่อบุคลากร</h1>
      <p class="subtitle">คณาจารย์และเจ้าหน้าที่ภาควิชาวิศวกรรมคอมพิวเตอร์</p>
    </header>
    <div class="staff-list">
      <div v-for="person in staff" :key="person.id" class="staff-card">
        <div class="staff-info">
          <h2>{{ person.name }}</h2>
          <p class="position">{{ person.position }}</p>
          <p class="contact">
            อีเมล: {{ person.email }}<br />โทร: {{ person.phone }}
          </p>
        </div>
        <div class="staff-times">
          <div class="available">
            <h3>เวลาว่าง</h3>
            <ul>
              <li v-for="(slot, idx) in person.availableTimes" :key="idx">
                {{ slot }}
              </li>
            </ul>
          </div>
          <div class="teaching">
            <h3>เวลาสอน</h3>
            <ul>
              <li v-for="(slot, idx) in person.teachingTimes" :key="idx">
                {{ slot }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Staff {
  id: number;
  name: string;
  position: string;
  email: string;
  phone: string;
  availableTimes: string[];
  teachingTimes: string[];
}

export default defineComponent({
  name: "StaffView",
  data() {
    return {
      staff: [
        {
          id: 1,
          name: "รศ.ดร. สมชาย ใจดี",
          position: "หัวหน้าภาควิชาวิศวกรรมคอมพิวเตอร์",
          email: "somchai.j@rmuti.ac.th",
          phone: "043-283701",
          availableTimes: ["จันทร์ 10:00-12:00", "พุธ 13:00-15:00"],
          teachingTimes: [
            "อังคาร 09:00-12:00 (โครงสร้างข้อมูล)",
            "พฤหัส 13:00-16:00 (ระบบปฏิบัติการ)",
          ],
        },
        {
          id: 2,
          name: "ผศ.ดร. สายฝน สายใจ",
          position: "อาจารย์ประจำภาควิชา",
          email: "saifon.s@rmuti.ac.th",
          phone: "043-283702",
          availableTimes: ["อังคาร 10:00-12:00", "ศุกร์ 09:00-11:00"],
          teachingTimes: [
            "จันทร์ 13:00-16:00 (เขียนโปรแกรมคอมพิวเตอร์)",
            "พุธ 09:00-12:00 (ฐานข้อมูล)",
          ],
        },
        {
          id: 3,
          name: "อ. วิทยา วิศวกร",
          position: "อาจารย์",
          email: "witaya.w@rmuti.ac.th",
          phone: "043-283703",
          availableTimes: ["พฤหัส 10:00-12:00"],
          teachingTimes: ["ศุกร์ 13:00-16:00 (ไมโครคอนโทรลเลอร์)"],
        },
      ] as Staff[],
    };
  },
});
</script>

<style scoped>
.staff {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.staff-header {
  text-align: center;
  margin-bottom: 3rem;
  background-color: #2c3e50;
  color: white;
  padding: 3rem 1rem;
  border-radius: 8px;
}

.staff-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.staff-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.staff-card {
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.staff-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.staff-info h2 {
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
}

.position {
  color: #495057;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.contact {
  color: #666;
  font-size: 0.95rem;
}

.staff-times {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.staff-times h3 {
  color: #2c3e50;
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.staff-times ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #666;
  font-size: 0.95rem;
}
</style>
