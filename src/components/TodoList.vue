<script setup>
import {useTodoListStore} from "@/stores/TodoListStore";
import {storeToRefs} from "pinia";

const store = useTodoListStore();

// PRECISAMOS PEGAR A REFERENCIA DO ESTADO, E QUE ELE SE COMPORTE DE FORMA REATIVA, AS MUDANÇAS
//NA STORE, POR ISSO USAMOS O STORE TO REFERES
const { todoList } = storeToRefs(store);

//PRA PEGAR AS ACTIONS, NÃO PRECISAMOS DO STORE TO REFS
const { toggleCompleted } = store;
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
