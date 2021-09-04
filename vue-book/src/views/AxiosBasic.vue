<template>
  <div>
    <h1>Axios Basic</h1>
    <br>
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="i" v-for="(product, i) in productList">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

export default ({
    data () {
        return {
            productList: []
        }
    },
    created() {
        this.getList();
    },
    methods:{
        async getList(){
            this.productList = await this.$api('https://8e7b7c97-2e0e-4738-bf41-e5595e7ad396.mock.pstmn.io/list');
        }
    }
})
</script>
