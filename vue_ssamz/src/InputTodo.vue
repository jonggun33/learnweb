<template>
    <div class="row mb-3">
        <div class="col">
            <input id="msg" type="text" class="form-control" placeholder="할 일을 입력하세요." v-model.trim="msg"
                @keyup.enter="addTodoHandler" />
            <span class="btn btn-primary input-group-addon" @click="addTodoHandler">ADD</span>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const msg = ref('');
const emit = defineEmits(['add-todo']);
const addTodoHandler = () => {
    if (msg.value.trim() === '') {
        alert('할 일을 입력하세요.');
        return;
    }
    emit('add-todo', msg.value);
    msg.value = '';
};
</script>