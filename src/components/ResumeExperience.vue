<template>
  <div
    v-for="(experience, i) in experiences"
    :key="experience.id"
    class="experience"
  >
    <p class="experience__time">
      {{ (experiences[i].from !== '' && experiences[i].to !== '') ?
        `${experiences[i].from + ' - ' + experiences[i].to}` : '-' }}
    </p>
    <div class="experience__position">
      <h4>
        {{ experiences[i].position !== '' ? experiences[i].position : '' }}
      </h4>
      <p>
        {{ (experiences[i].company !== '' && experiences[i].city !== '') ?
          `${experiences[i].company + ', ' + experiences[i].city}` : '' }}
      </p>
    </div>
  </div>
</template>

<script>
import ResumeGraph from './ResumeGraph.vue';

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ResumeGraph,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    experiences: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.experience{
  display: flex;
  gap: 20px;
  font-size: 20px;
}
.experience__time{
  font-weight: 600;
  width: 200px;
}
.experience__position{
  width: 500px;
}
.experience__position h4{
  font-weight: 600;
}
</style>
