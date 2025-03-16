<template>
  <header>
    <section id="header">
      <div class="header container">
        <nav>
          <div class="nav-bar">
            <div class="logo">
              <router-link to="/"
                ><img src="@/assets/logo.svg" alt="Logo"
              /></router-link>
            </div>
            <div class="nav-list">
              <div class="hamburger" @click="toggleMenu">
                <div class="bar"></div>
              </div>
              <ul :class="['nav-item', { active: isMenuOpen }]">
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/location">Location</router-link></li>
                <li><router-link to="/career">Careers</router-link></li>
                <li><a class="btn" href="#">Get Scootin</a></li>
              </ul>
            </div>
            <div class="nav-btn">
              <a class="btn" href="#">Get Scootin</a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.nav-item {
  display: flex;
  gap: 1rem;
}

.nav-item.active {
  display: block;
}

.hamburger {
  cursor: pointer;
}
</style>
