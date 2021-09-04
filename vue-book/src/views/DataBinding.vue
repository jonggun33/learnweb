<template>
  <div>
    <h1>Hello {{ title }}</h1>
    <div>{{ htmlString }}</div>
    <div v-html="htmlString"></div>
    <div><input type="text" v-model="valueModel" /> {{ valueModel }}</div>
    <div><input type="number" v-model.number="num" /> {{ num }}</div>
    <div>
      <textarea v-model="htmlString"> </textarea>
    </div>
    <!--<div>
      <select v-mddel="city">
        <option value="02">seoul</option>
        <option value="051">busan</option>
      </select>
    </div> -->
    <div>
        <input type="checkbox" v-model="checked">{{checked}}
    </div>
    <div>
        <label><input type="checkbox" value = 'seoul' v-model='cities'>seoul</label>
        <label><input type="checkbox" value = 'busan' v-model='cities'>busan</label>
        <label><input type="checkbox" value = 'sungnam' v-model='cities'>sungnam</label>
        <br>
        <span>cities: {{cities}}</span>
    </div>
    <div>
        <img v-bind:src="imgSrc" />
    </div>
    <div>
        <button type='button' :disabled="!checked"> {{checked}}</button>
    </div>
    <div class = 'container' :class="{ 'active': checked, 'text-red': hasError}">
        Class Binding
    </div>
    <div>
        <table>
            <thead>
            <tr>
                <th>name</th>
                <th>price</th>
            </tr>
            </thead>
            <tbody>
                <tr :key ="i" v-for="(product, i)  in productList">
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                </tr>
            </tbody>
        </table>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "World",
      htmlString: "<p style='color:red;'> This is a red string</p>",
      valueModel: "valueModel",
      num: 44,
      city: "02",
      checked: true,
      cities: [],
      imgSrc: 'https://kr.vuejs.org/images/logo.png',
      hasError: true,
      productList : [
          {'name': 'macbook pro 15', price: 1000000},
          {'name': 'iphone 8', price: 500000}
      ]
    };
  },
};
</script>
<style scoped>
    container {
        width: 100%;
        height: 200px;
    }
    .active {
        background-color: yellow;
        font-weight: bold;
    }
    .text-red {
        color: red;
    }
</style>
