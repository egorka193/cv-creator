<template>
  <div class="questionnaire">
    <h2 class="questionnaire__title">
      Personal Information
    </h2>
    <div>
      <InputText
        :inputValue="inputsValues.firstName"
        placeholder="First name"
        @input="handleInput($event, 'firstName')"
      />
      <InputText
        :inputValue="inputsValues.lastName"
        placeholder="Last name"
        @input="handleInput($event, 'lastName')"
      />
      <InputText
        :inputValue="inputsValues.title"
        placeholder="Title"
        @input="handleInput($event, 'title')"
      />
      <InputText
        :inputValue="inputsValues.photo"
        placeholder="Your photo"
        @input="linkGenerate($event, 'photo')"
      />
      <InputText
        :inputValue="inputsValues.address"
        placeholder="Address"
        @input="handleInput($event, 'address')"
      />
      <InputText
        :inputValue="inputsValues.phoneNumber"
        placeholder="Phone number"
        @input="handleInput($event, 'phoneNumber')"
      />
      <InputText
        :inputValue="inputsValues.email"
        placeholder="Email"
        @input="handleInput($event, 'email')"
      />
      <InputText
        :inputValue="inputsValues.description"
        placeholder="Description"
        @input="handleInput($event, 'description')"
      />
    </div>
    <div class="questionnaire__title-wrapper">
      <h2 class="questionnaire__title">
        Experience
      </h2>
      <ExperienceForm
        v-for="(experience, i) in experiencesValues"
        :key="experience.id"
        :experiencesValues="experience"
        @deleteExperience="deleteExperience(i)"
        @handleInput="(key, value) => changeExperienceForm(i, key, value)"
      />
      <CvButton
        name="Add"
        @handleClick="addExperience"
      />
    </div>
    <div class="questionnaire__title-wrapper">
      <h2 class="questionnaire__title">
        Education
      </h2>
      <EducationForm
        v-for="(education, i) in educationsValues"
        :key="education.id"
        :educationsValues="education"
        @deleteEducation="deleteEducation(i)"
        @handleInput="(key, value) => changeEducationForm(i, key, value)"
      />
      <CvButton
        name="Add"
        @handleClick="addEducation"
      />
    </div>
    <div class="questionnaire__buttons">
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
  components: {
    InputText,
    CvButton,
    ExperienceForm,
    EducationForm,
  },
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
  emits: [
    'handleInput', 'deleteExperience', 'deleteEducation', 'addExperience', 'addEducation',
    'changeExperienceForm', 'changeEducationForm', 'clickOnReset', 'linkGenerate',
  ],
  setup(props, context) {
    const handleInput = (value, key) => {
      context.emit('handleInput', value, key);
    };
    const linkGenerate = (value, key) => {
      context.emit('linkGenerate', value, key);
    };
    const changeExperienceForm = (index, key, value) => {
      context.emit('changeExperienceForm', index, key, value);
    };
    const changeEducationForm = (index, key, value) => {
      context.emit('changeEducationForm', index, key, value);
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
    };
  },
};
</script>

<style scoped>
.questionnaire{
  background-color: #f3f4f6;
  margin: auto;
  max-width: 1150px;
  border-radius: 10px;
  box-shadow: 0px 8px 28px -15px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 8px 28px -15px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 8px 28px -15px rgba(0,0,0,0.75);
  padding: 30px;
}
.questionnaire__title{
  color: black;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}
.questionnaire__title-wrapper{
  margin-top: 60px;
}
.questionnaire__buttons{
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
