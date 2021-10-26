<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ul v-for="product in products" :key="product.id">
      <li>{{ product.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios.get("https://fukabeakihiro.com/demoEC/json.php").then((res) => {
      this.products = res.data;
      console.log(res);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
