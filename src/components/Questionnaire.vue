<template>
  <div class="Questionnaire">
    <h2 class="Questionnaire__title">Personal Information</h2>
    <div>
      <InputText
        :inputValue="inputsValues.firstName"
        inputsPlaceholder="First name"
        @input="handleInput($event, 'firstName')"
      />
      <InputText
        :inputValue="inputsValues.lastName"
        inputsPlaceholder="Last name"
        @input="handleInput($event, 'lastName')"
      />
      <InputText
        :inputValue="inputsValues.title"
        inputsPlaceholder="Title"
        @input="handleInput($event, 'title')"
      />
      <InputText
        :inputValue="inputsValues.photo"
        inputsPlaceholder="Your photo"
        @input="linkGenerate($event, 'photo')"
      />
      <InputText
        :inputValue="inputsValues.address"
        inputsPlaceholder="Address"
        @input="handleInput($event, 'address')"
      />
      <InputText
        :inputValue="inputsValues.phoneNumber"
        inputsPlaceholder="Phone number"
        @input="handleInput($event, 'phoneNumber')"
      />
      <InputText
        :inputValue="inputsValues.email"
        inputsPlaceholder="Email"
        @input="handleInput($event, 'email')"
      />
      <InputText
        :inputValue="inputsValues.desription"
        inputsPlaceholder="Description"
        @input="handleInput($event, 'desription')"
      />
    </div>
    <div class="Questionnaire__title-wrapper">
      <h2 class="Questionnaire__title">Experience</h2>
      <ExperienceForm 
        v-for="(experience, i) in experiencesValues"
        :key="experience.id"
        :experiencesValues="experience"
        @deleteExperience="deleteExperience(i)"
        @handleInput="(value, key) => changeExperienceForm(i, value, key)"
      />
      <CvButton
        name="Add"
        @handleClick="addExperience"
      />
    </div>
    <div class="Questionnaire__title-wrapper">
      <h2 class="Questionnaire__title">Education</h2>
      <EducationForm 
        v-for="(education, i) in educationsValues"
        :key="education.id"
        :educationsValues="education"
        @deleteEducation="deleteEducation(i)"
        @handleInput="(value, key) => changeEducationForm(i, value, key)"
      />
      <CvButton
        name="Add"
        @handleClick="addEducation"
      />
    </div>
    <div class="Questionnaire__buttons">
      <CvButton
        name="Reset"
        color="red"
        @handleClick="clickOnReset"
      />
      <CvButton
        name="Generate PDF"
        color="green"
      />
    </div>
  </div>
</template>

<script>
import InputText from './InputText.vue';
import CvButton from './CvButton.vue';
import ExperienceForm from './ExperienceForm.vue';
import EducationForm from './EducationForm.vue';

export default {
  props: {
    inputsValues: {
      type: Object,
      required: true,
    },
    experiencesValues: {
      type: Array,
      required: true,
    },
    educationsValues: {
      type: Array,
      required: true,
    },
  },
  components: {
    InputText,
    CvButton,
    ExperienceForm,
    EducationForm,
  },
  emits: [ 'handleInput', 'deleteExperience', 'deleteEducation', 'addExperience', 'addEducation', 'changeExperienceForm', 'changeEducationForm', 'clickOnReset', 'linkGenerate' ],
  setup(props, context) {
    const handleInput = (value, key) => {
      context.emit('handleInput', value, key);
    };
    const linkGenerate = (value, key) => {
      context.emit('linkGenerate', value, key);
    };
    const changeExperienceForm = (index, value, key) => {
      context.emit('changeExperienceForm',index, value, key);
    };
    const changeEducationForm = (index, value, key) => {
      context.emit('changeEducationForm',index, value, key);
    };
    const addExperience = () => {
      context.emit('addExperience');
    };
    const addEducation = () => {
      context.emit('addEducation');
    };
    const deleteExperience = (index) => {
      context.emit('deleteExperience', index);
    };
    const deleteEducation = (index) => {
      context.emit('deleteEducation', index);
    };
    const clickOnReset = () => {
      context.emit('clickOnReset');
    };

    return {
      handleInput,
      addExperience,
      addEducation,
      deleteExperience,
      deleteEducation,
      changeExperienceForm,
      changeEducationForm,
      clickOnReset,
      linkGenerate,
    }
  }
};
</script>

<style scoped>
.Questionnaire{
  background-color: #f3f4f6;
  margin: 30px auto;
  max-width: 1150px;
  border-radius: 10px;
  box-shadow: 0px 8px 28px -15px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 8px 28px -15px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 8px 28px -15px rgba(0,0,0,0.75);
  padding: 30px;
}
.Questionnaire__title{
  color: black;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}
.Questionnaire__title-wrapper{
  margin-top: 20px;
  margin-bottom: 60px;
}
.Questionnaire__buttons{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>