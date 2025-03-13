<template>
  <div class="resume_graph__wrapper">
    <h3 class="resume_graph__title">
      {{ name }}
    </h3>
    <hr>
    <slot>dvd</slot>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.resume_graph__wrapper{
  margin-bottom: 30px;
}
.resume_graph__text{
  margin-top: 20px;
}
.resume_graph__title{
  font-size: 24px;
  font-weight: 600;
  color: #1e3a8a;
}
hr{
  margin-bottom: 20px;
  width: 800px;
  border: 1px solid rgba(0, 0, 0, 0.095);
}
</style>
