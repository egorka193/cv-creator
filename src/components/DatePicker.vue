<template>
  <div class="date-picker">
    <VueDatePicker
      :modelValue="value"
      :placeholder="placeholder"
      :enable-time-picker="false"
      @update:modelValue="update"
    />
  </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  components: {
    VueDatePicker,
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
.date-picker :deep(.dp__pointer) {
  padding: 12px;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 19px;
}
.date-picker :deep(.dp__input_icon) {
  display: none;
}
.date-picker :deep(.dp__icon) {
  display: none;
}
.date-picker {
  margin-bottom: 20px;
}
.date-picker :deep(::placeholder){
  color: rgb(68, 68, 68);
}

</style>
