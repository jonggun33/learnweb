<template>
<div>
    <h1>To-Do with Vuex List</h1>
    <ul>
        <li
            v-for= 'todo in todos'
            :key = 'todo.id'
        >
        {{ todo.task }}
        </li>
    </ul>
</div>
</template>
<script>
export default ({
    computed:{
        todos(){
            return this.$store.getters.getTodos;
        }
    }
})
</script>
