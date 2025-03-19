<template>
  <div class="resume-rootlet__wrapper">
    <img
      class="resume-rootlet__img"
      :src="data.photo"
    >
    <h3 class="resume-rootlet__title">
      Personal Details
    </h3>
    <hr>
    <h4>
      Address:
      <span>
        {{ data.address !== '' ? data.address : '' }}
      </span>
    </h4>
    <h4>
      Phone number:
      <span>
        {{ data.phoneNumber !== '' ? data.phoneNumber : '' }}
      </span>
    </h4>
    <h4>
      Email:
      <span>
        {{ data.email !== '' ? data.email : '' }}
      </span>
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
.resume-rootlet__img{
  width: 100%;
  height: 100%;
  margin-bottom: 16px;
  border-radius: 10px;
}
.resume-rootlet__title{
  font-weight: 600;
  font-size: 28px;
  color: #1e3a8a;
}
.resume-rootlet__wrapper{
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
