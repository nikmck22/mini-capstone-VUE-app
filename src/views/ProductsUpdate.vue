<template>
  <div class="ProductsUpdate">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h3>Edit this Product</h3>
        <p class="text-danger" v-for="error in errors">{{ error }}</p>
        <div class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="this.product.name">
        </div>
              <div class="form-group">
          <label>Description:</label>
          <input type="text" class="form-control" v-model="this.product.description">
        </div>
        <div class="form-group">
          <label>Price:</label>
          <input type="text" class="form-control" v-model="this.product.price">
        </div>
        <div class="form-group">
          <label>Image URL:</label>
          <input type="text" class="form-control" v-model="this.product.image_url">
        </div>
          <input type="submit" class="btn btn-primary" value="Submit">
      </form>
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
      product: {},
      errors: [],
    };
  },
  created: function() {
    console.log("edit this product");
    axios.get(`/api/products/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {

    showInfo: function(product) {
      console.log('showing info');
      console.log(product);
      this.currentProduct = product;
    },
    
    submit: function() {
      var params = {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        image_url: this.product.image_url,
      };

      axios.patch(`/api/products/${this.product.id}`, params).then(response => {
        this.$router.push("/products");
      })
        .catch(error => {
          this.errors = error.response.data.errors;
        })
    },
    
  },
};
</script>
