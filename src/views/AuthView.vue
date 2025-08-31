<script setup lang="ts">
import ButtonPrimary from '@/components/ButtonPrimary.vue';
import InputString from '@/components/InputString.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref<string>('');

function redirectToMain() {
  router.push({
    name: 'main',
  });
}
</script>
<template>
  <div class="auth">
    <div class="auth__form">
      <h1 class="auth__header">Bookmark's</h1>
      <InputString v-model="email"/>
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
