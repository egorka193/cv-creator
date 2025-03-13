<template>
  <InputText
    :inputValue="educationsValues.universityName"
    inputsPlaceholder="University Name"
    @input="handleInput($event, 'universityName')"
  />
  <InputText
    :inputValue="educationsValues.city"
    inputsPlaceholder="City"
    @input="handleInput($event, 'city')"
  />
  <InputText
    :inputValue="educationsValues.degree"
    inputsPlaceholder="Degree"
    @input="handleInput($event, 'degree')"
  />
  <InputText
    :inputValue="educationsValues.subject"
    inputsPlaceholder="Subject"
    @input="handleInput($event, 'subject')"
  />
  <InputText
    :inputValue="educationsValues.from"
    inputsPlaceholder="from"
    @input="handleInput($event, 'from')"
  />
  <InputText
    :inputValue="educationsValues.to"
    inputsPlaceholder="to"
    @input="handleInput($event, 'to')"
  />
  <CvButton
    name="Delete"
    @handleClick="deleteEducation"
  />
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
    const handleInput = (value, key) => {
      context.emit('handleInput', value, key);
    };

    return {
      deleteEducation,
      handleInput,
    };
  },
};
</script>

<style scoped>

</style>
