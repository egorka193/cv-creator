<template>
  <div class="input__wrapper">
    <input
      class="input"
      type="text"
      :placeholder="inputsPlaceholder"
      :value="inputValue"
      @input="$emit('input', $event.target.value)"
      @keydown.enter="input"
    >
  </div>
</template>

<script>

export default {
  props: {
    inputValue: {
      type: String,
      required: true,
    },
    inputsPlaceholder: {
      type: String,
      required: true,
    },
  },
  emits: ['input'],
  setup(props, context) {

    const input = () => {
      context.emit('input', inputValue.value);
    };
    
    return {
      input,
    };
  }
}
</script>

<style scoped>
.input{
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  width: 100%;
  font-size: 19px;
}
</style>