<template>
  <div class="education_form">
    <InputText
      :inputValue="educationsValues.universityName"
      placeholder="University Name"
      @input="handleInput('universityName', $event)"
    />
    <InputText
      :inputValue="educationsValues.city"
      placeholder="City"
      @input="handleInput('city', $event)"
    />
    <InputText
      :inputValue="educationsValues.degree"
      placeholder="Degree"
      @input="handleInput('degree', $event)"
    />
    <InputText
      :inputValue="educationsValues.subject"
      placeholder="Subject"
      @input="handleInput('subject', $event)"
    />
    <InputText
      :inputValue="educationsValues.from"
      placeholder="from"
      @input="handleInput('from', $event)"
    />
    <InputText
      :inputValue="educationsValues.to"
      placeholder="to"
      @input="handleInput('to', $event)"
    />
    <CvButton
      name="Delete"
      @handleClick="deleteEducation"
    />
  </div>
</template>

<script>
import CvButton from './CvButton.vue';
import InputText from './InputText.vue';

export default {
  components: {
    CvButton,
    InputText,
  },
  props: {
    educationsValues: {
      type: Object,
      required: true,
    },
  },
  emits: ['deleteEducation', 'handleInput'],
  setup(props, context) {
    const deleteEducation = () => {
      context.emit('deleteEducation');
    };
    const handleInput = (key, value) => {
      context.emit('handleInput', key, value);
    };

    return {
      deleteEducation,
      handleInput,
    };
  },
};
</script>

<style scoped>
.education_form{
  margin-bottom: 20px;
}
</style>
