<template>
  <div class="resume-education">
    <div class="resume-education__time">
      {{ time }}
    </div>
    <div class="resume-education__degree">
      <h4 class="resume-education__university">
        {{ (education.universityName !== '' && education.city !== '') ?
          `${education.universityName + ', ' + education.city}` : '' }}
      </h4>
      <div>
        {{ education.degree !== '' ?
          `${'Degree' + ': ' + education.degree}` : '' }}
      </div>
      <div>
        {{ education.subject !== '' ?
          `${'Subject' + ': ' + education.subject}` : '' }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import formatDate from './utils/formatDate';

export default {
  props: {
    education: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const from = computed(() => formatDate(props.education.from));
    const to = computed(() => formatDate(props.education.to));
    const time = computed(() => `${from.value} - ${to.value}`);

    return {
      from,
      to,
      time,
    };
  },
};
</script>

<style scoped>
.resume-education{
  display: flex;
  gap: 20px;
  font-size: 20px;
  margin-bottom: 20px;
}
.resume-education__time{
  font-weight: 600;
  width: 100px;
}
.resume-education__degree{
  width: 500px;
}
.resume-education__university{
  font-weight: 600;
}
</style>
