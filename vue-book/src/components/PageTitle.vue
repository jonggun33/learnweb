<template>
  <div>
    <h1>{{ title }}</h1>
    <button type="button" @click="childsays" ref="btn">click</button>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title Not Set",
    },
  },
  methods: {
    childsays() {
      alert("(host called me)"+ this.title);
    },
  },
};
</script>
