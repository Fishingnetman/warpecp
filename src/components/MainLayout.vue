<template>
  <div id="main">
    <nav class="navbar">
      <div class="nav-brand">
        <router-link to="/">คณะวิศวกรรมศาสตร์</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/">หน้าแรก</router-link>
        <router-link to="/subjects">รายวิชาที่เปิดสอน</router-link>
        <router-link to="/staff">รายชื่อบุคลากร</router-link>
        <router-link to="/about">เกี่ยวกับเรา</router-link>
      </div>
    </nav>

    <router-view />

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>ติดต่อเรา</h3>
          <p>สถานที่ตั้ง : มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น</p>
          <p>150 ถนนศรีจันทร์ ตำบลในเมือง อำเภอเมือง จังหวัดขอนแก่น 40000</p>
          <p>โทรศัพท์ : 043-283700(ระบบอัตโนมัติ)</p>
          <p>อีเมล์ : pr_kkc@rmuti.ac.th</p>
          <p>
            ที่อยู่หนังสือราชการทางอิเล็กทรอนิกส์ : saraban_khonkaen@rmuti.ac.th
          </p>
        </div>

        <div class="footer-section">
          <h3>ลิงก์ด่วน</h3>
          <ul>
            <li><a href="#">ปฏิทินการศึกษา</a></li>
            <li><a href="#">ระบบทะเบียน</a></li>
            <li><a href="#">ระบบอีเลิร์นนิ่ง</a></li>
            <li><a href="#">ห้องสมุด</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>ติดตามเรา</h3>
          <div class="social-links">
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">YouTube</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>
          © 2024 คณะวิศวกรรมศาสตร์. มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน
          วิทยาเขตขอนแก่น. สงวนลิขสิทธิ์.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>

<style>
#main {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
}

.navbar {
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 16px 16px;
}

.nav-brand {
  font-size: 1.7rem;
  font-weight: bold;
  color: #2c3e50;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links .router-link-exact-active {
  font-weight: bold;
  background-color: #ffe066;
  color: #2c3e50;
  border-radius: 8px;
}

.nav-links a,
.nav-links .router-link-active,
.nav-links .router-link-exact-active {
  color: #2c3e50 !important;
  text-decoration: none !important;
  font-weight: 500;
  font-family: inherit;
  font-size: 1.1rem;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: none;
  display: inline-block;
}

.nav-links a:hover,
.nav-links .router-link-active:hover,
.nav-links .router-link-exact-active:hover {
  background-color: #ffe066;
  color: #2c3e50;
  box-shadow: 0 2px 8px rgba(255, 224, 102, 0.2);
}

.router-link-active {
  font-weight: bold;
}

.footer {
  margin-top: auto;
  background-color: #2c3e50;
  color: white;
  padding: 3rem 2rem 1.5rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-link,
.social-link {
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.footer-link:hover,
.social-link:hover {
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  margin: 0;
  opacity: 0.8;
}
</style>
