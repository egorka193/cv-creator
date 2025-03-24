<template>
  <div
    class="resume-education-list"
  >
    <ResumeEducation
      v-for="(education) in educations"
      :key="education.id"
      :education="education"
    />
  </div>
</template>

<script>
import ResumeEducation from './ResumeEducation.vue';

export default {
  components: {
    ResumeEducation,
  },
  props: {
    educations: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>
