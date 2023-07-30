<script setup>
import {ref} from 'vue'
import {useTodoListStore} from "@/stores/TodoListStore";

const todo=ref('')

const store=useTodoListStore()


function submitForm(todo)
{
  if(todo.length ===0)
  {
    return
  }
  store.addItem(todo)
  todo.value=''
}

</script>

<template>

  <div>
    <form @submit.prevent="submitForm(todo)">
      <input v-model="todo" type="text"/>
      <button>
        Add
      </button>
    </form>
  </div>

</template>

<style scoped>

</style>
