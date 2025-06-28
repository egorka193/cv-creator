<template>
  <div class="input-text">
    <input
      :value="value"
      :class="['input', errorMessage ? 'input-invalid' : '']"
      :placeholder="placeholder"
      type="text"
      @input="onInput"
    >
    <span
      class="error"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>

<script>
import { useField } from 'vee-validate';

export default {
  props: {
    rule: {
      type: Function,
      required: true,
    },
    inputValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
      default: '',
    },
  },
  emits: ['input'],
  setup(props, context) {
    const {
      value,
      errorMessage,
      handleChange,
    } = useField(props.name, props.rule, {
      initialValue: props.inputValue,
    });

    const onInput = (val) => {
      handleChange(val);
      context.emit('input', val.target.value);
    };

    return {
      value,
      errorMessage,
      onInput,
    };
  },
};
</script>

<style scoped>
.input{
  padding: 12px;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 19px;
}
.input-invalid{
  border: 1px solid red;
}
.input-text{
  margin-bottom: 20px;
}
.error{
  color: red;
  font-size: 12px;
}
</style>
