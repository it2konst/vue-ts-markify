<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { Category } from '@/interfaces/category.interface';
import { useCategoryStore } from '@/stores/categories.store';
import { useBookmarkStore } from '@/stores/bookmark.store';

const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();
const category = ref<Category>();

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
  }),
  (data) => {
    category.value = categoryStore.getCategoryByAlias(data.alias);
    if (category.value) {
      bookmarkStore.fetchBookmarks(category.value?.id);
    }
  },
);

onMounted(() => {
  category.value = categoryStore.getCategoryByAlias(route.params.alias);
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value?.id);
  }
});
</script>
<template>
  Category:
  {{ category?.name }}
  {{ bookmarkStore.bookmarks.length }}
</template>
