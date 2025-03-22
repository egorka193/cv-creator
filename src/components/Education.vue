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
    const from = computed(() => {
      if (!props.education.from) {
        return '';
      }
      const year = props.education.from.getFullYear();
      const month = props.education.from.getMonth();
      const day = props.education.from.getDate();

      return `${year}-${month}-${day}`;
    });
    const to = computed(() => {
      if (!props.education.from) {
        return '';
      }
      const year = props.education.to.getFullYear();
      const month = props.education.to.getMonth();
      const day = props.education.to.getDate();

      return `${year}-${month}-${day}`;
    });
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
