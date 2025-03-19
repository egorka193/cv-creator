<template>
  <div class="experience-form">
    <InputText
      :inputValue="experiencesValues.position"
      placeholder="Position"
      @input="handleInput('position', $event)"
    />
    <InputText
      :inputValue="experiencesValues.company"
      placeholder="Company"
      @input="handleInput('company', $event)"
    />
    <InputText
      :inputValue="experiencesValues.city"
      placeholder="City"
      @input="handleInput('city', $event)"
    />
    <InputText
      :inputValue="experiencesValues.from"
      placeholder="From"
      @input="handleInput('from', $event)"
    />
    <InputText
      :inputValue="experiencesValues.to"
      placeholder="To"
      @input="handleInput('to', $event)"
    />
    <CvButton
      name="Delete"
      @handleClick="deleteExperience"
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
    experiencesValues: {
      type: Object,
      required: true,
    },
  },
  emits: ['deleteExperience', 'handleInput'],
  setup(props, context) {
    const deleteExperience = () => {
      context.emit('deleteExperience');
    };
    const handleInput = (key, value) => {
      context.emit('handleInput', key, value);
    };

    return {
      deleteExperience,
      handleInput,
    };
  },
};
</script>

<style scoped>
</style>
