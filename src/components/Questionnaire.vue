<template>
  <div class="questionnaire">
    <h2 class="questionnaire__title">
      Personal Information
    </h2>
    <ValidateForm
      class="questionnaire__inputs-wrapper"
      @submit="onSubmit"
    >
      <InputText
        :inputValue="inputsValues.firstName"
        placeholder="First Name"
        :rule="validateValue"
        name="firstValue"
        @input="handleInput($event, 'firstName')"
      />
      <InputText
        :inputValue="inputsValues.lastName"
        placeholder="Last Name"
        :rule="validateValue"
        name="lastName"
        @input="handleInput($event, 'lastName')"
      />
      <InputText
        :inputValue="inputsValues.title"
        placeholder="Title"
        :rule="validateValue"
        name="title"
        @input="handleInput($event, 'title')"
      />
      <InputText
        :inputValue="inputsValues.photo"
        placeholder="Photo"
        :rule="validateUrl"
        name="photo"
        @input="handleInput($event, 'photo')"
      />
      <InputText
        :inputValue="inputsValues.address"
        placeholder="Address"
        :rule="validateValue"
        name="address"
        @input="handleInput($event, 'address')"
      />
      <InputText
        :inputValue="inputsValues.phoneNumber"
        placeholder="Phone"
        :rule="validatePhoneNumber"
        name="phoneNumber"
        @input="handleInput($event, 'phoneNumber')"
      />
      <InputText
        :inputValue="inputsValues.email"
        placeholder="Email"
        :rule="validateEmail"
        name="email"
        @input="handleInput($event, 'email')"
      />
      <InputText
        :inputValue="inputsValues.description"
        placeholder="Description"
        :rule="validateDescription"
        name="description"
        @input="handleInput($event, 'description')"
      />
      <!-- <div class="fields-wrapper">
        <Field
          :inputValue="inputsValues.firstName"
          class="input"
          placeholder="First name"
          type="firstName"
          name="firstName"
          :rules="validateValue"
          @input="handleInput($event.target.value, 'firstName')"
        />
        <ErrorMessage
          class="error"
          name="firstName"
        />
      </div>
      <div class="fields-wrapper">
        <Field
          :inputValue="inputsValues.lastName"
          class="input"
          placeholder="Last name"
          type="lastName"
          name="lastName"
          :rules="validateValue"
          @input="handleInput($event.target.value, 'lastName')"
        />
        <ErrorMessage
          class="error"
          name="lastName"
        />
      </div>
      <div class="fields-wrapper">
        <Field
          :inputValue="inputsValues.title"
          class="input"
          placeholder="Title"
          type="title"
          name="title"
          :rules="validateValue"
          @input="handleInput($event.target.value, 'title')"
        />
        <ErrorMessage
          class="error"
          name="title"
        />
      </div>
      <div class="fields-wrapper">
        <Field
          name="url_field"
          type="text"
          :inputValue="inputsValues.photo"
          class="input"
          placeholder="Your Photo"
          :rules="validateUrl"
          @input="handleInput($event.target.value, 'photo')"
        />
        <ErrorMessage
          class="error"
          name="url_field"
        />
      </div>
      <div class="fields-wrapper">
        <Field
          :inputValue="inputsValues.address"
          class="input"
          placeholder="Address"
          type="address"
          name="address"
          :rules="validateValue"
          @input="handleInput($event.target.value, 'address')"
        />
        <ErrorMessage
          class="error"
          name="address"
        />
      </div>
      <div class="fields-wrapper">
        <Field
          :inputValue="inputsValues.phoneNumber"
          class="input"
          placeholder="Phone number"
          type="phoneNumber"
          name="phoneNumber"
          :rules="validatePhoneNumber"
          @input="handleInput($event.target.value, 'phoneNumber')"
        />
        <ErrorMessage
          class="error"
          name="phoneNumber"
        />
      </div>
      <div class="fields-wrapper">
        <Field
          :inputValue="inputsValues.email"
          class="input"
          placeholder="Email"
          type="email"
          name="email"
          :rules="validateEmail"
          @input="handleInput($event.target.value, 'email')"
        />
        <ErrorMessage
          name="email"
          class="error"
        />
      </div>
      <div class="last-child">
        <Field
          :inputValue="inputsValues.description"
          class="input last-child"
          placeholder="Description"
          type="description"
          name="description"
          :rules="validateDescription"
          @input="handleInput($event.target.value, 'description')"
        />
        <ErrorMessage
          class="error"
          name="description"
        />
      </div> -->
    </ValidateForm>
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
        @handleClick="generatePdf"
      />
    </div>
  </div>
</template>

<script>
import { Form as ValidateForm } from 'vee-validate';
import CvButton from './CvButton.vue';
import ExperienceForm from './ExperienceForm.vue';
import EducationForm from './EducationForm.vue';
import InputText from './InputText.vue';
import {
  validateEmail,
  validateUrl,
  validateValue,
  validateDescription,
  validatePhoneNumber,
} from './utils/rules';

export default {
  components: {
    InputText,
    CvButton,
    ExperienceForm,
    EducationForm,
    ValidateForm,
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
    'handleInput',
    'deleteExperience',
    'deleteEducation',
    'addExperience',
    'addEducation',
    'changeExperienceForm',
    'changeEducationForm',
    'clickOnReset',
    'linkGenerate',
  ],
  setup(props, context) {
    function onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
    }
    const handleInput = (value, key) => {
      console.log(value, key);
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
    const generatePdf = () => {
      window.print();
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
      generatePdf,
      onSubmit,
      validateEmail,
      validateUrl,
      validateValue,
      validateDescription,
      validatePhoneNumber,
    };
  },
};
</script>

<style scoped>
.questionnaire{
  background-color: #f3f4f6;
  margin: 0px auto 50px auto;
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
  margin-bottom: 60px;
}
.questionnaire__buttons{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.questionnaire__inputs-wrapper{
  margin-bottom: 60px;
}
.last-child{
  margin-bottom: 0px;
}
.input{
  padding: 12px;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 19px;
}
</style>
