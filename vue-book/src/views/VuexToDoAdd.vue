<template>
<div>
    <h1>To-Do with Vuex</h1>
    <form @submit.prevent='addTodo'>
    <input type='text' placeholder='Enter a new task' v-model='task' />
    </form>
</div>
</template>
<script>
export default ({
    data() {
        return {
            task : '',
            id:0
        }
    },
    methods: {
        addTodo(){
            const {id, task} = this;
            this.$store.commit('addTodo', {id, task});
            this.id++;
            this.task = '';
        }
    }
})
</script>
