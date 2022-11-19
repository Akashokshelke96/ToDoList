var todos =[ //we dont need this variable this was only for testing, it will be created from empty
    // {
    //   text:'JavaScript',
    //   done:true,
    // },
    // {
    //     text:'Angular',
    //     done:true,
    // },
    // {
    //     text:'React',
    //     done:false,
    // },

]

const toDoApp = {
    data(){
        return{
            todos:window.todos,  //we should keep it empty like: "todos:[]" since we will be saving this in to database
            newTodo:{
                done:false,
            },
        }
    },
    methods: {
        addItem:function(){
            if(this.newTodo.text){

                this.todos.push(this.newTodo);
                this.newTodo = {
                    done:false
                };
                window.localStorage.setItem("todos",JSON.stringify(this.todos))   //this localstorage is to add new todos to the storage of browser.
                //to convert the object of todos to JSON we use "JSON.stringfify"
                //setItem("name of key",value)
            }else{
                alert("You left the input blank!!")
            }
        },
        markComplete:function(){
            
        },
        clearAll: function(){
         this.todos = [];
        },
        storeTodos(){
            //when we want to store the todos on any click i.e method call, we can make that as a method as well
            localStorage.setItem("todos",JSON.stringify(this.todos)); //but this is the old version of doing things and dont use this now

    },
    created() {
        //when we want to load the stored properties from local storage to Data properties we want that to
        //be done after the Dom is Created and hence use "Created()" life cycle hooks
        this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")): this.todos;
        //using  ternary opr and if we get item undernamed "todos", parse it JSON.parse or else return original object "todos".
    },
    updated() {
        //So even on every update if we want to store the values on the storage we can duse this code.
        localStorage.setItem("todos",JSON.stringify(this.todos));
        //after this it will load correctly every time as the data is being stored in the browser memory.
    }
}

Vue.createApp(toDoApp).mount('#app')
