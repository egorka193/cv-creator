<template>
  <div class="date-picker">
    <Datepicker
      :modelValue="value"
      class="date-picker-input"
      :clearable="false"
      :placeholder="placeholder"
      @update:modelValue="update"
    />
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker';

export default {
  components: {
    Datepicker,
  },
  props: {
    value: {
      type: Date,
      default: null,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  emits: ['update'],

  setup(props, context) {
    const update = (value) => {
      context.emit('update', value);
    };
    return {
      update,
    };
  },
};
</script>

<style scoped>
.date-picker :deep(.date-picker-input) {
  padding: 12px;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 19px;
}
.date-picker {
  margin-bottom: 20px;
}
</style>
