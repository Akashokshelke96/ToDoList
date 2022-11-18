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

    },
}

Vue.createApp(toDoApp).mount('#app')