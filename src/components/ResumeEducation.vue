<template>
  <div
    class="education"
  >
    <Education
      v-for="(education) in educations"
      :key="education.id"
      :education="education"
    />
  </div>
</template>

<script>
import Education from './Education.vue';

export default {
  components: {
    Education,
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
.education{
  display: flex;
  gap: 20px;
  font-size: 20px;
  margin-bottom: 20px;
}
.education__time{
  font-weight: 600;
  width: 200px;
}
.education__degree{
  width: 500px;
}
.education__university{
  font-weight: 600;
}
</style>
