<template>
  <div class="resume">
    <div class="resume__header">
      <h1 class="resume__header-title">
        {{ fullName }}
      </h1>
      <p class="resume__header-text">
        {{ data.title !== '' ? data.title : 'Title' }}
      </p>
    </div>
    <div class="resume__body">
      <div class="resume__body__graphs">
        <ResumeGraph name="Description">
          {{ data.description !== '' ? data.description : '-' }}
        </ResumeGraph>
        <ResumeGraph name="Experience">
          <div v-if="experiences.length === 0">
            -
          </div>
          <ResumeExperience :experiences="experiences" />
        </ResumeGraph>
        <ResumeGraph name="Educations">
          <div v-if="educations.length === 0">
            -
          </div>
          <ResumeEducation :educations="educations" />
        </ResumeGraph>
      </div>
      <div class="resume__body__rootlet">
        <ResumeRootlet :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import ResumeGraph from './ResumeGraph.vue';
import ResumeRootlet from './ResumeRootlet.vue';
import ResumeExperience from './ResumeExperience.vue';
import ResumeEducation from './ResumeEducation.vue';

export default {
  components: {
    ResumeGraph,
    ResumeRootlet,
    ResumeEducation,
    ResumeExperience,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    experiences: {
      type: Array,
      required: true,
    },
    educations: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const fullName = computed(() => {
      const isNotEmpty = props.data.firstName !== '' && props.data.lastName !== '';
      return isNotEmpty ? `${props.data.firstName} ${props.data.lastName}` : 'Name';
    });

    return {
      fullName,
    };
  },
};
</script>

<style scoped>
.resume{
  margin: 30px auto;
  max-width: 1150px;
}
.resume__header{
  color: white;
  background-color: #1e3a8a;
  padding: 28px 40px;
}
.resume__body{
  color: black;
  background-color: white;
  display: flex;
  box-shadow: 0px 8px 27px -15px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 8px 27px -15px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 8px 27px -15px rgba(0,0,0,0.75);
  height: 1400px;
}
.resume__header-title{
  font-weight: 700;
  font-size: 48px;
}
.resume__header-text{
  font-weight: 500;
  font-size: 32px;
}
.resume__body__rootlet{
  background-color: rgba(209, 213, 220, 1);
  width: 270px;
}
.resume__body__graphs{
  padding: 28px 40px;
}
</style>
