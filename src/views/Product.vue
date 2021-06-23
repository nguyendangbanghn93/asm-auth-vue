<template>
  <div>
    <h1>Product List</h1>
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      <tr v-if="products" v-for="product in products">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>


import {mapActions, mapState} from "vuex";

export default {
  name: "Product",
  computed: {
    ...mapState('product', [
      'products'
    ])
  },
  methods: {
    ...mapActions({
      loadProducts: 'product/loadProducts'
    })
  },
  mounted() {
    this.loadProducts()
  }
}
</script>

<style scoped>

</style>