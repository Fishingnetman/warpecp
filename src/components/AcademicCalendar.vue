<template>
  <section class="academic-calendar">
    <h2>รายละเอียดปฏิทินการศึกษา</h2>
    <div class="calendar-container">
      <div class="timeline">
        <div
          v-for="(event, index) in academicEvents"
          :key="index"
          class="timeline-item"
        >
          <div class="timeline-date">
            <span class="date">{{ event.date }}</span>
          </div>
          <div class="timeline-content">
            <h3>{{ event.title }}</h3>
            <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AcademicCalendar",
  data() {
    return {
      academicEvents: [
        {
          date: "2 - 9 มิถุนายน 2568",
          title: "ขึ้นทะเบียนนักศึกษาใหม่",
          description: "ช่วงเวลาสำหรับการขึ้นทะเบียนนักศึกษาใหม่",
        },
        {
          date: "2 - 27 มิถุนายน 2568",
          title: "ช่วงเลือกสาขาสำหรับนักศึกษารับรวม",
          description: "ช่วงเวลาสำหรับการเลือกสาขาวิชา",
        },
        {
          date: "11 - 27 มิถุนายน 2568",
          title: "ลงทะเบียนรายวิชา (กระเช้า)",
          description: "ช่วงเวลาสำหรับการลงทะเบียนรายวิชาแบบกระเช้า",
        },
        {
          date: "13 - 27 มิถุนายน 2568",
          title: "ลงทะเบียนรายวิชา",
          description: "ช่วงเวลาสำหรับการลงทะเบียนรายวิชาปกติ",
        },
        {
          date: "13 - 27 มิถุนายน 2568",
          title: "ลงทะเบียนเพิ่มรายวิชา",
          description: "ช่วงเวลาสำหรับการลงทะเบียนเพิ่มรายวิชา",
        },
        {
          date: "16 - 27 มิถุนายน 2568",
          title: "โอนย้ายสาขา",
          description: "ช่วงเวลาสำหรับการยื่นคำร้องโอนย้ายสาขา",
        },
        {
          date: "16 มิถุนายน - 22 สิงหาคม 2568",
          title: "ลงทะเบียนลดรายวิชา",
          description: "ช่วงเวลาสำหรับการลงทะเบียนลดรายวิชา",
        },
        {
          date: "16 มิถุนายน 2568",
          title: "วันเปิดภาคการศึกษา",
          description: "วันเริ่มต้นภาคการศึกษา",
        },
        {
          date: "16 มิถุนายน - 14 สิงหาคม 2568",
          title: "ขอสำเร็จการศึกษา",
          description: "ช่วงเวลาสำหรับการยื่นคำร้องขอสำเร็จการศึกษา",
        },
        {
          date: "16 มิถุนายน - 16 ตุลาคม 2568",
          title: "ช่วงบันทึกกิจกรรม",
          description: "ช่วงเวลาสำหรับการบันทึกกิจกรรมนักศึกษา",
        },
        {
          date: "5 กรกฎาคม 2568",
          title: "วันสุดท้ายของการรับชำระเงิน",
          description: "วันสุดท้ายสำหรับการชำระเงินค่าเล่าเรียน",
        },
        {
          date: "17 - 24 สิงหาคม 2568",
          title: "สอบกลางภาค",
          description: "ช่วงเวลาสำหรับการสอบกลางภาค",
        },
        {
          date: "23 สิงหาคม - 5 กันยายน 2568",
          title: "ลงทะเบียนถอนรายวิชาโดยได้ W",
          description: "ช่วงเวลาสำหรับการถอนรายวิชาโดยได้เกรด W",
        },
        {
          date: "6 กันยายน - 16 ตุลาคม 2568",
          title: "ลงทะเบียนถอนรายวิชาโดยได้ F",
          description: "ช่วงเวลาสำหรับการถอนรายวิชาโดยได้เกรด F",
        },
        {
          date: "5 - 11 ตุลาคม 2568",
          title: "สอบปลายภาค",
          description: "ช่วงเวลาสำหรับการสอบปลายภาค",
        },
        {
          date: "16 ตุลาคม 2568",
          title: "วันสิ้นภาคการศึกษา",
          description: "วันสิ้นสุดภาคการศึกษา (วันสำเร็จการศึกษา)",
        },
      ],
    };
  },
});
</script>

<style scoped>
.academic-calendar {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.calendar-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: calc(100% - 4rem);
  overflow-y: auto;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #42b983;
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.timeline-date {
  width: 200px;
  text-align: right;
  padding-right: 2rem;
}

.timeline-content {
  width: 400px;
  padding-left: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.timeline-date .date {
  font-weight: bold;
  color: #2c3e50;
  background: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: inline-block;
}

.timeline-content h3 {
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.timeline-content p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 0;
  }

  .timeline-item {
    flex-direction: column;
    margin-left: 1rem;
  }

  .timeline-date {
    width: 100%;
    text-align: left;
    padding-right: 0;
    margin-bottom: 0.5rem;
  }

  .timeline-content {
    width: 100%;
    padding-left: 0;
  }
}
</style>
