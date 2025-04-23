<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="feature" v-editable="blok">
    <strong>{{ blok.name }}</strong>
  </div>
</template>
