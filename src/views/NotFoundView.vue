<script setup lang="ts">
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push('/');
}
</script>
<template>
  <div class="not-found">
    <div class="not-found__form">
      <h1 class="not-found__header">404</h1>
      <ButtonPrimary @click="redirectToMain">На главную</ButtonPrimary>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.not-found__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 52px;
}

.not-found__header {
  font-size: 128px;
  font-weight: 700;
}
</style>
