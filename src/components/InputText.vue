<template>
  <div class="input-text">
    <!-- <ValidateForm
      @submit="onSubmit"
    >
      <Field
        type="email"
        name="email"
        :rules="validateEmail"
      />
      <ErrorMessage name="email" />
    </ValidateForm> -->
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :value="inputValue"
      @input="$emit('input', $event.target.value)"
    >
    <slot />
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
  setup() {
    const onSubmit = (values) => {
      console.log(JSON.stringify(values, null, 2));
    };
    const validateEmail = (value) => {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    };

    return {
      onSubmit,
      validateEmail,
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
.input-text{
  margin-bottom: 20px;
}
</style>
