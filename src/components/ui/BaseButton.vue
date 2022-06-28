<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot> </slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #0066cc;
  border: 1px solid #0066cc;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #0066cc;
  border-color: #0066cc;
}

.flat {
  background-color: transparent;
  color: #7293ec;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #0066cc;
  color: #0066cc;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #f7fbb8;
}
</style>
