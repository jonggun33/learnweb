<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link>|
    <router-link to="/eventhandling">Event Handling</router-link>|
    <router-link to="/axiosbasic">Axios Basic</router-link>|
    <router-link to="/intercomponent">Intercomponent</router-link>|
    <router-link to="/vuextodoadd">Vuex ToDo Add</router-link>|
    <router-link to="/vuextodolist">Vuex ToDo List</router-link>
  </div>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
