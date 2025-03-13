<template>
  <button
    class="cv-button"
    :class="{ [`cv-button--${color}`]: color }"
    @click="handleClick"
  >
    {{ name }}
  </button>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
  },
  emits: [ 'handleClick' ],
  setup (props, context) {
    const handleClick = () => {
      context.emit('handleClick');
    };

    return {
      handleClick,
    };
  }
}
</script>

<style scoped>
.cv-button{
  background-color: #1f2937;
  color: white;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 25px;
  cursor: pointer;
  transition: all 0.5s;
  margin-bottom: 20px;
}
.cv-button:hover{
  opacity: .8;
}
.cv-button--red{
  background-color: #b91c1b
}
.cv-button--green{
  background-color: #065f46
}
</style>
