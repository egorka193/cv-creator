<template>
  <Header />
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
    @clickOnReset="ResetAll"
    @linkGenerate="searchPhoto"
  />
  <Resume
    :data="data"
    :experiences="experiences"
    :educations="educations"
  />
  <Footer />
</template>

<script>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Questionnaire from './components/Questionnaire.vue';
import Resume from './components/Resume.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    Questionnaire,
    Resume,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
  },

  setup() {
    const data = ref({
      firstName: '',
      lastName: '',
      title: '',
      photo: '',
      address: '',
      phoneNumber: '',
      email: '',
      desription: '',
    });
    const experiences = ref([]);
    let experienceId = 1;
    let educationId = 1;
    const educations = ref([]);

    const changeGraph = (value, key) => {
      data.value[key] = value;
    };
    const searchPhoto = (value, key) => {
      data.value[key] = value;
    };
    const changeExperience = (index, value, key) => {
      experiences.value[index][key] = value;
    };
    const changeEducation = (index, value, key) => {
      educations.value[index][key] = value;
    };
    const deleteExperience = (index) => {
      experiences.value = experiences.value.filter((item, i) => i !== index);
    };
    const deleteEducation = (index) => {
      educations.value = educations.value.filter((item, i) => i !== index);
    };
    const ResetAll = () => {
      experiences.value = [];
      educations.value = [];
      data.value = {
        firstName: '',
        lastName: '',
        title: '',
        photo: '',
        address: '',
        phoneNumber: '',
        email: '',
        desription: '',
      };
    };
    const addExperience = () => {
      const obj = {
        id: experienceId,
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      };
      // eslint-disable-next-line no-plusplus
      experienceId++;
      experiences.value.push(obj);
    };
    const addEducation = () => {
      const obj = {
        id: educationId,
        universityName: '',
        city: '',
        degree: '',
        subject: '',
        from: '',
        to: '',
      };
      // eslint-disable-next-line no-plusplus
      educationId++;
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
      ResetAll,
      searchPhoto,
    };
  },
};
</script>

<style scoped>

</style>
