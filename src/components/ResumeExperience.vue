<template>
  <div class="resume-experience">
    <p class="resume-experience__time">
      {{ time }}
    </p>
    <div class="resume-experience__position">
      <h4>
        {{ experience.position !== '' ? experience.position : '' }}
      </h4>
      <p>
        {{ (experience.company !== '' && experience.city !== '') ?
          `${experience.company + ', ' + experience.city}` : '' }}
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import formatDate from './utils/formatDate';

export default {
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const from = computed(() => formatDate(props.experience.from));
    const to = computed(() => formatDate(props.experience.to));
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
.resume-experience{
  display: flex;
  gap: 20px;
  font-size: 20px;
  margin-bottom: 20px;
}
.resume-experience__time{
  font-weight: 600;
  width: 100px;
}
.resume-experience__position{
  font-weight: 600;
}
</style>
