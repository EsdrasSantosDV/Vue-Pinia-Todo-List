<script setup>
import {useTodoListStore} from "@/stores/TodoListStore";
import {storeToRefs} from "pinia";

const store = useTodoListStore();

// PRECISAMOS PEGAR A REFERENCIA DO ESTADO, E QUE ELE SE COMPORTE DE FORMA REATIVA, AS MUDANÇAS
//NA STORE, POR ISSO USAMOS O STORE TO REFERES
const { todoList } = storeToRefs(store);

//PRA PEGAR AS ACTIONS, NÃO PRECISAMOS DO STORE TO REFS
const { toggleCompleted,deleteItem } = store;
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <div>
        <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
        <span @click="deleteItem(todo.id)" class="x">&#10060;</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}
.item {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
.completed {
  text-decoration: line-through;
}
</style>
