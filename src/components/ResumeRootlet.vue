<template>
  <div class="resume_rootlet__wrapper">
    <img
      class="resume_rootlet__img"
      :src="data.photo"
    >
    <h3 class="resume_rootlet__title">
      Personal Details
    </h3>
    <hr>
    <h4>
      Address:
      <p>
        {{ data.address !== '' ? data.address : '' }}
      </p>
    </h4>
    <h4>
      Phone number:
      <p>
        {{ data.phoneNumber !== '' ? data.phoneNumber : '' }}
      </p>
    </h4>
    <h4>
      Email:
      <p>
        {{ data.email !== '' ? data.email : '' }}
      </p>
    </h4>
  </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.resume_rootlet__img{
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
  border-radius: 10px;
}
.resume_rootlet__title{
  font-weight: 600;
  font-size: 28px;
  color: #1e3a8a;
}
.resume_rootlet__wrapper{
  padding: 14px 20px;
}
hr{
  border: 1px solid rgba(0, 0, 0, 0.095);
  margin-bottom: 20px;
}
h4{
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 14px;
}
</style>
