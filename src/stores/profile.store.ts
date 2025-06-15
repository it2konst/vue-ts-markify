import { API_ROUTS } from '@/api';
import type { Profile } from '@/interfaces/profile.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    const data = await fetch(API_ROUTS.profile);
    const res = (await data.json()) as Profile[];
    profile.value = res[0];
  }

  return { profile, fetchProfile };
});
