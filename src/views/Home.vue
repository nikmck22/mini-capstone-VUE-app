<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Name: <input type="text" v-model="newProductName"></p>
    <p>Price: <input type="text" v-model="newProductPrice"></p>
    <p>Description: <input type="text" v-model="newProductDescription"></p>
    <p>Image URL: <input type="text" v-model="newProductImageUrl"></p>
    <button v-on:click="addProduct">Add product</button>
    <div v-bind:key="product.id" v-for="product in products">
      <p> Id: {{ product.id }} - {{ product.name }} </p>
      <button v-on:click="showInfo(product)">Show more info</button>
      <div v-if="currentProduct === product">
      <p> {{ product.price }} </p>
      <p> {{ product.description }} </p>
      <p><img v-bind:src="product.image_url"></p>

      <p>Name: <input type="text" v-model="product.name"></p>
      <p>Price: <input type="text" v-model="product.price"></p>
      <p>Description: <input type="text" v-model="product.description"></p>
      <p>Image URL: <input type="text" v-model="product.image_url"></p>

      <button v-on:click="updateProduct(product)">Update this product</button>

      <div>
        <button v-on:click="deleteProduct(product)">Delete this product</button>
      </div>
      </div>
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
      products: [],
      newProductName: "",
      newProductPrice: "",
      newProductDescription: "",
      newProductImageUrl: "",
      currentProduct: {}
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
      console.log(this.newProductName);

      var params = { 
        name: this.newProductName,
        price: this.newProductPrice,
        description: this.newProductDescription,
        image_url: this.newProductImageUrl
      };

      axios.post("/api/products", params).then(response => { 
        console.log(response.data);
        this.products.push(response.data);
        this.newProductName = "";
        this.newProductPrice = "";
        this.newProductDescription = "";
        this.newProductImageUrl = "";
      });
    },
    showInfo: function(product) {
      console.log('showing info');
      console.log(product);
      this.currentProduct = product;
    },
    updateProduct: function(product) {
      console.log('updated product');
      console.log(product);

      var params = {
        name: product.name,
        price: product.price,
        description: product.description,
        image_url: product.image_url
      };

      axios.patch(`/api/products/${product.id}`, params).then(response => {
        console.log(response.data);
        product = response.data;
      });
    },
    deleteProduct: function(product) {
      console.log(product);
      console.log('beep bop...delete product');

      axios.delete(`/api/products/${product.id}`).then(response => {
        console.log(response.data);
        
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
      });
    }
  },
};
</script>
