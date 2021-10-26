<template>
  <div>axios</div>
</template>

<script>
export default {
  name: axios,
  data: {
    users: [],
  },
  mounted: function () {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => (this.users = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss" scoped></style>
