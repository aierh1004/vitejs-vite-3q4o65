<template>
  <span class="badge" :class="type"> {{ text }} </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #cccc00;
  color: white;
}

.backend {
  background-color: #00cc66;
  color: white;
}

.career {
  background-color: #6600cc;
  color: white;
}
</style>
