<template>
  <div class="education-form">
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
    <DatePicker
      :value="educationsValues.from"
      placeholder="From"
      @update="handleInput('from', $event)"
    />
    <DatePicker
      :value="educationsValues.to"
      placeholder="To"
      @update="handleInput('to', $event)"
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
import DatePicker from './DatePicker.vue';

export default {
  components: {
    CvButton,
    InputText,
    DatePicker,
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
      console.log(key, value);
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
.education-form{
  margin-bottom: 20px;
}
</style>
