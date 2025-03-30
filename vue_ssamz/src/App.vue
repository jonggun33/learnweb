<template>
  <div class="container">
    <div class="card card-body bg-light">
      <div class="title">:: To do List</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo"> </InputTodo>
        <TodoList
          :todoList="state.todoList"
          @delete-todo="removeTodo"
          @toggle-completed="toggleTodo"
        ></TodoList>
      </div>
    </div>
  </div>
</template>

<script setup >
import 'bootstrap/dist/css/bootstrap.min.css';
import {reactive, onMounted} from 'vue';
import InputTodo from './InputTodo.vue';
import TodoList from './TodoList.vue';

const ts = new Date().getTime();
const state = reactive({todoList: []});
onMounted(() => {
  state.todoList.push({id: ts, todo: 'Vue.js 공부하기', completed: false});
  state.todoList.push({id: ts + 1, todo: 'Vue.js 복습하기', completed: false});
  state.todoList.push({id: ts + 2, todo: 'Vue.js 복습하기', completed: false});
  state.todoList.push({id: ts + 3, todo: 'Vue.js 복습하기', completed: false});
  state.todoList.push({id: ts + 4, todo: 'Vue.js 복습하기', completed: false});
})
const addTodo = (todo) => {
  const ts = new Date().getTime();
  state.todoList.push({ id: ts, todo, completed: false });
};
const removeTodo = (id) => {
  const index = state.todoList.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    state.todoList.splice(index, 1);
  }
};
const toggleTodo = (id) => {
  const index = state.todoList.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    state.todoList[index].completed = !state.todoList[index].completed;
  }
};
</script>

