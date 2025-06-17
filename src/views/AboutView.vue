<template>
  <div class="about">
    <header class="about-header">
      <h1>เกี่ยวกับคณะวิศวกรรมศาสตร์</h1>
      <p class="subtitle">ความเป็นเลิศด้านวิศวกรรมศาสตร์ ตั้งแต่ปี 2506</p>
    </header>

    <div class="about-content">
      <section class="vision-mission">
        <div class="mission">
          <h2>พันธกิจ</h2>
          <p>
            สร้างและพัฒนานักวิศวกรรุ่นใหม่ผ่านการเรียนการสอนที่ทันสมัย
            การวิจัยที่ก้าวหน้า และความร่วมมือกับภาคอุตสาหกรรม
          </p>
        </div>
        <div class="vision">
          <h2>วิสัยทัศน์</h2>
          <p>
            เป็นศูนย์กลางความเป็นเลิศด้านวิศวกรรมศาสตร์ชั้นนำ
            ส่งเสริมนวัตกรรมและโซลูชันที่ยั่งยืนสำหรับความท้าทายระดับโลก
          </p>
        </div>
      </section>

      <section class="achievements">
        <h2>ผลงานที่สำคัญ</h2>
        <div class="achievements-grid">
          <div class="achievement-card">
            <div class="achievement-icon">🎓</div>
            <h3>อัตราการได้งานทำ 95%</h3>
            <p>บัณฑิตของเราเป็นที่ต้องการของบริษัทชั้นนำในอุตสาหกรรม</p>
          </div>
          <div class="achievement-card">
            <div class="achievement-icon">🔬</div>
            <h3>ความเป็นเลิศด้านการวิจัย</h3>
            <p>
              เผยแพร่ผลงานวิจัยมากกว่า 200 เรื่องในวารสารวิชาการระดับนานาชาติ
            </p>
          </div>
          <div class="achievement-card">
            <div class="achievement-icon">🤝</div>
            <h3>พันธมิตรภาคอุตสาหกรรม</h3>
            <p>ความร่วมมือที่แข็งแกร่งกับบริษัทเทคโนโลยีชั้นนำกว่า 50 แห่ง</p>
          </div>
        </div>
      </section>

      <section class="facilities">
        <h2>สิ่งอำนวยความสะดวก</h2>
        <div class="facilities-grid">
          <div class="facility-card">
            <img
              src="@/assets/logo.png"
              alt="ห้องปฏิบัติการวิจัยขั้นสูง"
              class="facility-image"
            />
            <h3>ห้องปฏิบัติการวิจัยขั้นสูง</h3>
            <p>อุปกรณ์ล้ำสมัยสำหรับการวิจัยที่ก้าวหน้า</p>
          </div>
          <div class="facility-card">
            <img
              src="@/assets/logo.png"
              alt="ห้องปฏิบัติการคอมพิวเตอร์"
              class="facility-image"
            />
            <h3>ห้องปฏิบัติการคอมพิวเตอร์</h3>
            <p>
              สิ่งอำนวยความสะดวกด้านคอมพิวเตอร์ที่ทันสมัยพร้อมซอฟต์แวร์ล่าสุด
            </p>
          </div>
          <div class="facility-card">
            <img
              src="@/assets/logo.png"
              alt="โรงงานวิศวกรรม"
              class="facility-image"
            />
            <h3>โรงงานวิศวกรรม</h3>
            <p>สภาพแวดล้อมการเรียนรู้เชิงปฏิบัติสำหรับทักษะการทำงานจริง</p>
          </div>
        </div>
      </section>

      <section class="contact-info">
        <h2>ติดต่อเรา</h2>
        <div class="contact-grid">
          <div class="contact-item">
            <h3>สถานที่ตั้ง</h3>
            <p>
              มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น<br />
              150 ถนนศรีจันทร์ ตำบลในเมือง อำเภอเมือง จังหวัดขอนแก่น 40000
            </p>
          </div>
          <div class="contact-item">
            <h3>ข้อมูลการติดต่อ</h3>
            <p>
              โทรศัพท์ : 043-283700(ระบบอัตโนมัติ)<br />
              อีเมล์ : pr_kkc@rmuti.ac.th<br />
              ที่อยู่หนังสือราชการทางอิเล็กทรอนิกส์ :
              saraban_khonkaen@rmuti.ac.th
            </p>
          </div>
          <div class="contact-item">
            <h3>เวลาทำการ</h3>
            <p>วันจันทร์ - วันศุกร์<br />08:00 - 16:30 น.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",
});
</script>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
  background-color: #2c3e50;
  color: white;
  padding: 3rem 1rem;
  border-radius: 8px;
}

.about-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.about-content section {
  margin-bottom: 4rem;
}

.vision-mission {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.mission,
.vision {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.mission h2,
.vision h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.achievement-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.achievement-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.achievement-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.facility-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.facility-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.facility-card h3,
.facility-card p {
  padding: 1rem;
  margin: 0;
}

.facility-card h3 {
  color: #2c3e50;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.contact-item {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-item h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}
</style>
