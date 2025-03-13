<template>
  <InputText
    :inputValue="experiencesValues.position"
    inputsPlaceholder="Position"
    @input="handleInput($event, 'position')"
  />
  <InputText
    :inputValue="experiencesValues.company"
    inputsPlaceholder="Company"
    @input="handleInput($event, 'company')"
  />
  <InputText
    :inputValue="experiencesValues.city"
    inputsPlaceholder="City"
    @input="handleInput($event, 'city')"
  />
  <InputText
    :inputValue="experiencesValues.from"
    inputsPlaceholder="From"
    @input="handleInput($event, 'from')"
  />
  <InputText
    :inputValue="experiencesValues.to"
    inputsPlaceholder="To"
    @input="handleInput($event, 'to')"
  />
  <CvButton
    name="Delete"
    @handleClick="deleteExperience"
  />
</template>

<script>
import CvButton from './CvButton.vue';
import InputText from './InputText.vue';

export default {
  props: {
    experiencesValues: {
      type: Object,
      required: true,
    }
  },
  components: {
    CvButton,
    InputText,
  },
  emits: [ 'deleteExperience', 'handleInput' ],
  setup(props, context) {
    const deleteExperience = () => {
      context.emit('deleteExperience');
    };
    const handleInput = (value, key) => {
      context.emit('handleInput', value, key);
    };

    return {
      deleteExperience,
      handleInput,
    };
  }
}
</script>

<style scoped>

</style>