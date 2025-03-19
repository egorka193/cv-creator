<template>
  <div class="input-text">
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :value="inputValue"
      @input="$emit('input', $event.target.value)"
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
    placeholder: {
      type: String,
      required: true,
    },
  },
  emits: ['input'],
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
.input-text{
  margin-bottom: 20px;
}
</style>
