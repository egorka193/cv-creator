<template>
  <div class="education__time">
    {{ time }}
  </div>
  <div class="education__degree">
    <h4 class="education__university">
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
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    education: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const date = (value) => {
      if (!value) {
        return '';
      }
      const year = value.getFullYear();
      const month = value.getMonth();
      const day = value.getDate();

      return `${year}-${month}-${day}`;
    };

    const from = computed(() => date(props.education.from));
    const to = computed(() => date(props.education.to));
    const time = computed(() => `${from.value} - ${to.value}`);

    return {
      from,
      to,
      time,
      date,
    };
  },
};
</script>

<style scoped>
.education__time{
  font-weight: 600;
  width: 100px;
}
.education__degree{
  width: 500px;
}
.education__university{
  font-weight: 600;
}
</style>
