toDoList = () => {
    return {
        newTodo: "",
        todoaccordian: [],

        toggleSubTaskCompleted(ind, index) {
            this.todoaccordian[ind].subTask[index].completed = !this.todoaccordian[ind].subTask[index].completed;
        },

        addSubTask(ind) {
            this.todoaccordian[ind].subTask.push({
                todo: this.todoaccordian[ind].newSubTodo,
                completed: false
            });
            this.todoaccordian[ind].newSubTodo = "";
        },

        addMainTask() {
            this.todoaccordian.push({
                mainTask: this.newTodo,
                subTask: [],
                isOpen: false,
                newSubTodo: ""
            });
            this.newTodo = "";
        },

        deleteMainTask(ind) {
            this.todoaccordian = this.todoaccordian.filter((todo, todoIndex) => {
                return ind !== todoIndex;
            });
        },

        checkLast(ind, index) {
            return ((this.todoaccordian[ind].subTask.length - 1 == index) && (this.todoaccordian.length - 1 == ind));
        },

        checkEmpty(ind) {
            return ((this.todoaccordian[ind].subTask.length == 0) && (this.todoaccordian[ind].isOpen));

        }
    };
}