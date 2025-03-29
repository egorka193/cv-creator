<template>
  <CvHeader />
  <Questionnaire
    :inputsValues="data"
    :experiencesValues="experiences"
    :educationsValues="educations"
    @handleInput="changeGraph"
    @deleteExperience="deleteExperience"
    @deleteEducation="deleteEducation"
    @addExperience="addExperience"
    @addEducation="addEducation"
    @ChangeExperienceForm="changeExperience"
    @changeEducationForm="changeEducation"
    @clickOnReset="resetAll"
    @linkGenerate="searchPhoto"
  />
  <Resume
    :data="data"
    :experiences="experiences"
    :educations="educations"
  />
  <CvFooter />
</template>

<script>
import { ref } from 'vue';
import CvHeader from './components/CvHeader.vue';
import Questionnaire from './components/Questionnaire.vue';
import Resume from './components/Resume.vue';
import CvFooter from './components/CvFooter.vue';

export default {
  components: {
    CvHeader,
    Questionnaire,
    Resume,
    CvFooter,
  },

  setup() {
    const initialData = {
      firstName: '',
      lastName: '',
      title: '',
      photo: '',
      address: '',
      phoneNumber: '',
      email: '',
      description: '',
    };
    const data = ref({ ...initialData });
    const experiences = ref([]);
    let experienceId = 1;
    let educationId = 1;
    const educations = ref([]);

    const changeGraph = (value, key) => {
      console.log(value, key);
      data.value[key] = value;
    };
    const searchPhoto = () => {
      // do it later
    };
    const changeExperience = (index, key, value) => {
      experiences.value[index][key] = value;
    };
    const changeEducation = (index, key, value) => {
      educations.value[index][key] = value;
    };
    const deleteExperience = (index) => {
      experiences.value = experiences.value.filter((item, i) => i !== index);
    };
    const deleteEducation = (index) => {
      educations.value = educations.value.filter((item, i) => i !== index);
    };
    const resetAll = () => {
      experiences.value = [];
      educations.value = [];
      data.value = { ...initialData };
    };
    const addExperience = () => {
      const obj = {
        id: experienceId,
        position: '',
        company: '',
        city: '',
        from: null,
        to: null,
      };
      experienceId += 1;
      experiences.value.push(obj);
    };
    const addEducation = () => {
      const obj = {
        id: educationId,
        universityName: '',
        city: '',
        degree: '',
        subject: '',
        from: null,
        to: null,
      };
      educationId += 1;
      educations.value.push(obj);
    };

    return {
      data,
      experiences,
      educations,
      changeGraph,
      deleteExperience,
      deleteEducation,
      addExperience,
      addEducation,
      changeExperience,
      changeEducation,
      resetAll,
      searchPhoto,
    };
  },
};
</script>

<style scoped>

</style>
