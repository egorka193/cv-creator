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
    <DatePicker
      :value="experiencesValues.from"
      placeholder="From"
      @update="handleInput('from', $event)"
    />
    <DatePicker
      :value="experiencesValues.to"
      placeholder="To"
      @update="handleInput('to', $event)"
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
import DatePicker from './DatePicker.vue';

export default {
  components: {
    CvButton,
    InputText,
    DatePicker,
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
.experience-form{
  margin-bottom: 20px;
}
</style>
