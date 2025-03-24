<template>
  <div
    class="experience"
  >
    <Experience
      v-for="(experience) in experiences"
      :key="experience.id"
      :experience="experience"
    />
  </div>
</template>

<script>
import Experience from './Experience.vue';

export default {
  components: {
    Experience,
  },
  props: {
    experiences: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.experience{
  display: flex;
  gap: 20px;
  font-size: 20px;
  margin-bottom: 20px;
}
.experience__time{
  font-weight: 600;
  width: 200px;
}
.experience__position{
  width: 500px;
}
.experience__position h4{
  font-weight: 600;
}
</style>
