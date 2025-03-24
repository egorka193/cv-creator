<template>
  <p class="experience__time">
    {{ time }}
  </p>
  <div class="experience__position">
    <h4>
      {{ experience.position !== '' ? experience.position : '' }}
    </h4>
    <p>
      {{ (experience.company !== '' && experience.city !== '') ?
        `${experience.company + ', ' + experience.city}` : '' }}
    </p>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    experience: {
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
    const from = computed(() => date(props.experience.from));
    const to = computed(() => date(props.experience.to));
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
.experience__time{
  font-weight: 600;
  width: 100px;
}
.experience__degree{
  width: 500px;
}
.experience__university{
  font-weight: 600;
}
</style>
