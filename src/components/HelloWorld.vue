<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button>BUTTON</el-button>



   




  </div>
</template>

<script>
import firebase from "../firebaseInit";
const db = firebase.firestore();

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      name: "",
      data: new Date().toISOString().slice(0, 10),
      employeeData: [],
      search: "",
    };
  },
  methods: {
    readEmployees() {
      this.employeeData = [];
      db.collection("employees")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.employeeData.push({
              id: doc.id,
              name: doc.data().name,
              data: doc.data().date,
            });
            console.log(doc.id, "=>", doc.data());
          });
        })
        .catch((error) => {
          console.log("error getting documents: ", error);
        });
    },
    mounted() {
      this.readEmployees();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
