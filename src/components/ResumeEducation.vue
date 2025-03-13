<template>
   <div
    class="education"
      v-for="(education, i) in educations"
      :key="education.id"
    >
      <p class="education__time">{{ (educations[i].from !== '' && educations[i].to !== '') ? `${educations[i].from + ' - ' + educations[i].to}` : '-' }}</p>
      <div class="education__degree">
        <h4 class="education__university">{{ (educations[i].universityName !== '' && educations[i].city !== '') ? `${educations[i].universityName + ', ' + educations[i].city}` : '' }}</h4>
        <p>{{ educations[i].degree !== '' ? `${'Degree' + ': ' +  educations[i].degree}` : '' }}</p>
        <p>{{ educations[i].subject !== '' ? `${'Subject' + ': ' +  educations[i].subject}` : '' }}</p>
      </div>
    </div>
</template>

<script>
import ResumeGraph from './ResumeGraph.vue';

export default {
  components: {
    ResumeGraph
  },
  props: {
    educations: {
      type: Array,
    }
  }
}
</script>

<style scoped>
.education{
  display: flex;
  gap: 20px;
  font-size: 20px;
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