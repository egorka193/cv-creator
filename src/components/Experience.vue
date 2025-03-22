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
    const from = computed(() => {
      if (!props.experience.from) {
        return '';
      }
      const year = props.experience.from.getFullYear();
      const month = props.experience.from.getMonth();
      const day = props.experience.from.getDate();

      return `${year}-${month}-${day}`;
    });
    const to = computed(() => {
      if (!props.experience.from) {
        return '';
      }
      const year = props.experience.to.getFullYear();
      const month = props.experience.to.getMonth();
      const day = props.experience.to.getDate();

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
