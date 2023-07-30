import {defineStore} from "pinia";

//SE COLOCA USE  ANTES VIU, E UMA CONVENÇÃO DE NOMECLATURA DO VUE, PRAS LOJAS PINIA
export const useTodoListStore=defineStore('todoList',{
    //STATE
    state:() => ({
        todoList:[],
        id:0
    }),
    actions:{
        addItem(item)
        {
            this.todoList.push({
                item:item,
                id:this.id++,
                completed:false
            })
        },
        deleteItem(id)
        {
            this.todoList=this.todoList.filter((todo)=>{
                return todo.id !== id
            }
           )
        },
        toggleCompleted(idToFind) {
            const todo = this.todoList.find((obj) => obj.id === idToFind);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },

    }


    /*
    As opções que passamos para a  defineStore função são as nossas store's  state,  getters, e  actions.
    dve ter um modelo mental sobre como  methods,  datae  computed funcionam.
    O  methods faz acontecer,  data contém nossas propriedades de estado e
    computed retorna uma propriedade atualizada automaticamente que teve um cálculo executado nela.
    As opções de Pinia seguem um modelo mais simplicado de gerenciamento de estado, não temos reducers pra realizar o calculo
    do estado novo, NAS ACTIOS JA CONSEGUIMOS REALIZAR ISSO
    OS GETTERS PODEMOS PENSAR DE FORMA AANALOGA, AOS SELECTS DAS COMPONENTS STORE DO NGRX

     */
})
