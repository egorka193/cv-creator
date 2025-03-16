<template>
  <div
    v-for="(education, i) in educations"
    :key="education.id"
    class="education"
  >
    <div class="education__time">
      {{ (educations[i].from !== '' && educations[i].to !== '') ?
        `${educations[i].from + ' - ' + educations[i].to}` : '-' }}
    </div>
    <div class="education__degree">
      <h4 class="education__university">
        {{ (educations[i].universityName !== '' && educations[i].city !== '') ?
          `${educations[i].universityName + ', ' + educations[i].city}` : '' }}
      </h4>
      <div>
        {{ educations[i].degree !== '' ?
          `${'Degree' + ': ' + educations[i].degree}` : '' }}
      </div>
      <div>
        {{ educations[i].subject !== '' ?
          `${'Subject' + ': ' + educations[i].subject}` : '' }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
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
