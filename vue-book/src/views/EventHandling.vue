<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click='incrementCount'>+1</button> <label>{{count}}</label>
    <br>
    <input type=input v-model='firstName' />
    <input type=input v-model='lastName' />
    <br>
    <label>{{fullName}}</label>
    <br>
    <label >{{name}}</label>

  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Everything about Event Handling",
      count : 0,
      firstName: 'Jon',
      lastName: 'Doe',
      name: ''
    };
  },
  methods: {
      incrementCount(){
          this.count = this.count +1;
      }
  },
  computed:{
      fullName(){
          return this.firstName + ' ' + this.lastName;
      }
  },
  watch:{
      firstName(){
        this.name =this.firstName + ' ' + this.lastName; 
      },
      lastName(){
          this.name = this.firstName + ' ' + this.lastName;
      }
  }
};
</script>
;