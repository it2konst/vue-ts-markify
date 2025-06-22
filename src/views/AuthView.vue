<script setup lang="ts">
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push({ name: 'main' });
}
</script>
<template>
  <div class="auth">
    <div class="auth__form">
      <h1 class="auth__header">Bookmark's</h1>
      <ButtonPrimary @click="redirectToMain">Вход</ButtonPrimary>
    </div>
  </div>
</template>

<style scoped>
.auth {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.auth__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 52px;
}

.auth__header {
  font-size: 52px;
  font-weight: 700;
}
</style>
