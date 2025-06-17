<template>
  <div class="slider-container">
    <div v-if="slides && slides.length > 0" class="slider">
      <transition-group name="slide">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          v-show="currentSlide === index"
          class="slide"
        >
          <img :src="slide.image" :alt="slide.title" class="slide-image" />
          <div class="slide-content">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </transition-group>
    </div>
    <div v-else class="slider-placeholder">
      <p>ไม่พบรูปภาพสำหรับแสดง</p>
    </div>
    <div v-if="slides && slides.length > 0" class="slider-controls">
      <button @click="prevSlide" class="slider-btn">&lt;</button>
      <div class="slider-dots">
        <span
          v-for="(slide, index) in slides"
          :key="slide.id"
          :class="{ active: currentSlide === index }"
          @click="currentSlide = index"
          class="dot"
        ></span>
      </div>
      <button @click="nextSlide" class="slider-btn">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  props: {
    slides: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((slide) => {
          return (
            slide &&
            typeof slide.id === "number" &&
            typeof slide.image === "string" &&
            typeof slide.title === "string" &&
            typeof slide.description === "string"
          );
        });
      },
    },
  },
  data() {
    return {
      currentSlide: 0,
      interval: null,
    };
  },
  methods: {
    nextSlide() {
      if (this.slides && this.slides.length > 0) {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }
    },
    prevSlide() {
      if (this.slides && this.slides.length > 0) {
        this.currentSlide =
          (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      }
    },
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 5000);
    },
    stopAutoSlide() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<style scoped>
.slider-container {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
  height: 500px;
  background: #f5f5f5;
}

.slider {
  position: relative;
  height: 100%;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-image {
  width: 100vw;
  height: 500px;
  object-fit: cover;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  text-align: center;
}

.slide-content h2 {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
}

.slide-content p {
  margin: 0;
  font-size: 1.2rem;
}

.slider-controls {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 10;
}

.slider-btn {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: background-color 0.3s;
}

.slider-btn:hover {
  background: rgba(255, 255, 255, 0.5);
}

.slider-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background: white;
}

.slider-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.2rem;
}

/* Slide Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
