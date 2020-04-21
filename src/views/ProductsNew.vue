<template>
  <div class="ProductsNew">
    <!-- <div v-bind:key="product.id" v-for="product in products"> -->
        <div class="form-group">
          <p>Name: <input type="text" v-model="name"></p>
        </div>

        <div class="form-group">
          <p>Description: <input type="text" v-model="description"></p>
        </div>

        <div class="form-group">
          <p>Price: <input type="text" v-model="price"></p>
        </div>

        <div class="form-group">
          <p>Image_URL: <input type="text" v-model="image_url"></p>
        </div>
    <!-- </div> -->
    
    
    <!-- <p>Name: <input type="text" v-model="newProductName"></p>
    <p>Price: <input type="text" v-model="newProductPrice"></p>
    <p>Description: <input type="text" v-model="newProductDescription"></p>
    <p>Image URL: <input type="text" v-model="newProductImageUrl"></p> -->
    <!-- <button v-on:click="addProduct">Add product</button>
    <div v-bind:key="product.id" v-for="product in products">
      <p> Id: {{ product.id }} - {{ product.name }} </p>
      <button v-on:click="showInfo(product)">Show more info</button>
      <div v-if="currentProduct === product">
      <p> {{ product.price }} </p>
      <p> {{ product.description }} </p>
      <p><img v-bind:src="product.image_url"></p> -->

      <!-- <p>Name: <input type="text" v-model="product.name"></p>
      <p>Price: <input type="text" v-model="product.price"></p>
      <p>Description: <input type="text" v-model="product.description"></p>
      <p>Image URL: <input type="text" v-model="product.image_url"></p> -->

      <!-- <button v-on:click="updateProduct(product)">Update this product</button>

      <div>
        <button v-on:click="deleteProduct(product)">Delete this product</button>
      </div> -->
      <!-- </div>
    </div> -->
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      description: "",
      price: "",
      image_url: ""
    };
  },

  methods: {
    submit: function() {
      var params = {
        name: this.name,
        description: this.description,
        price: this.price,
        image_url: this.image_url
      };
      axios.post("/api/products", params).then(response => {
        this.$router.push("/products");
      })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  
  },
};
</script>
