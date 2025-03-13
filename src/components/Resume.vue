<template>
  <div class="resume">
    <div class="resume__header">
      <h1 class="resume__title"> {{ (data.firstName !== '' && data.lastName !== '') ? `${data.firstName + ' ' + data.lastName}` : 'Name' }} </h1>
      <p class="resume__text">{{ data.title !== '' ? data.title : 'Title' }}</p>
    </div>
    <div class="resume__body">
      <div class="resume__body__craphs">
        <ResumeGraph
          name="Description"
        >{{ data.desription !== '' ? data.desription : '-' }}</ResumeGraph>
        <ResumeGraph name="Experience">
          <ResumeExperience :experiences="experiences" />
        </ResumeGraph>
        <ResumeGraph name="Educations">
          <ResumeEducation :educations="educations" />
        </ResumeGraph>
      </div>
      <div class="resume__body__rootlet">
        <ResumeRootlet
          :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ResumeGraph from './ResumeGraph.vue';
import ResumeRootlet from './ResumeRootlet.vue';
import ResumeExperience from './ResumeExperience.vue';
import ResumeEducation from './ResumeEducation.vue';


export default {
  props:{
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
  components: {
    ResumeGraph,
    ResumeRootlet,
    ResumeEducation,
    ResumeExperience,
  },
  setup(props) {
    return {
    };
  }
}
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
.resume__title{
  font-weight: 700;
  font-size: 48px;
}
.resume__text{
  font-weight: 500;
  font-size: 32px;
}
.resume__body__rootlet{
  background-color: rgba(209, 213, 220, 1);
}
.resume__body__craphs{
  padding: 28px 40px;
}
</style>