<template>
  <div
    class="resume-experience-list"
  >
    <ResumeExperience
      v-for="(experience) in experiences"
      :key="experience.id"
      :experience="experience"
    />
  </div>
</template>

<script>
import ResumeExperience from './ResumeExperience.vue';

export default {
  components: {
    ResumeExperience,
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
</style>
