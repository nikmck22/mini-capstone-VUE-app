<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <button v-on:click="addProduct">Add product</button>
    <div v-for="product in products">
      <p> {{ product.id }} - {{ product.name }} </p>
      <p><img v-bind:src="product.image_url"></p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      products: []
    };
  },
  created: function() {
    console.log("here are your products");
    axios.get("/api/products").then(response => {
      this.products = response.data;
    });
  },
  methods: {
    addProduct: function() {
      console.log("I have added the product")

    var params = { 
        name: "house plant",
        price: 30,
        description: "for decoration and to purify the air",
        image_url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/houseplants-asplenium-nidus-peperomia-and-fittonia-royalty-free-image-946085220-1557179507.jpg?crop=1.00xw:0.334xh;0,0.630xh&resize=1200:*"
    }

    axios.post("/api/products", params).then(response => { 
      console.log(response.data);
      this.products.push(response.data)
    })
    }
  },
}
</script>
