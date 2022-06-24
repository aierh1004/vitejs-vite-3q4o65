<template>
  <section>
    <h1>Filter</h1>
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register a Coach</router-link>
    </div>
    <ul>
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
  },
};
</script>
