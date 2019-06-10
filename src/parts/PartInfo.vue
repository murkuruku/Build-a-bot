<template>
  <div>
    <h1>{{part.title}}</h1>
    <div>
      {{part.description}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'PartInfo',
  created() {
    this.$store.dispatch('robots/getParts');
  },
  props: {
    partType: { type: String },
    id: {
      type: [String, Number],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    parts() {
      return this.$store.state.robots.parts;
    },
    part() {
      const { partType, id } = this;
      return this.parts[partType].find(part => part.id === id);
    },
  },
};
</script>

<style scoped>

</style>
