import { PureComponent } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header";
import PropTypes from 'prop-types';
import Todo from "./Todo/Todo.jsx"
import "./styles.scss"




export default class TodoList extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            todoList: [
                {id: 1, name: "nam", status : "active"},
                {id: 2, name: "Hai", status : "completed"},
                {id: 3, name: "Ha", status : "active"}
            ],
            status: "All"
        }
    }

    onAddTodo = (formValue) => {
        this.setState({
            todoList : [...this.state.todoList, formValue]
        })
    }

    handleTodoOnClick = (index) => {
        const newTodoList = this.state.todoList;
        newTodoList[index].status = newTodoList[index].status !== 'completed' ? 'completed' : 'active';
        this.setState({
            todoList: [...newTodoList]
        })
    }

    handleOnEdtItem = (formValue,index) => {
        const newTodoList = this.state.todoList;
        newTodoList[index] = formValue;
        this.setState({
            todoList: [...newTodoList]
        })
        
    }

    onTodoRemoveItem = (id) => {
        // const newTodoList = this.state.todoList;
        // const todoFilter = newTodoList.filter(todo => todo.id !== id);
        this.setState(prevState => ({
            todoList: prevState.todoList.filter(todo => todo.id !== id)
        }))
    }

    filterByStatus = (todo = [], status = '') => {
        switch (status) {
            case "active":
                return todo.filter(item => item.status !== 'completed')
            case "completed":
                return todo.filter(item => item.status === 'completed') 
            default:
                return todo;
        }
    }
    
    setFilterByStatus = (status ='') => {
        this.setState({
            todoList: this.state.todoList,
            status: status
        })
    }

    clearCompleted = () => {
        const newTodoList = this.state.todoList;
        this.setState({
            todoList: this.filterByStatus(newTodoList, "active")
        })
    }
    render() {
        const {todoList, status} = this.state;
        const numOfTodoItemCompleted = this.filterByStatus(todoList, "completed").length;

        return(
            <div className="todo-app">
                <Header addTodo={this.onAddTodo} />
                <Todo
                    todoList={this.filterByStatus(todoList, status)}
                    todoOnClick={this.handleTodoOnClick}
                    edtItem={this.handleOnEdtItem}
                    todoOnRemoveItem={this.onTodoRemoveItem}
                    />
                <Footer
                    setFilterByStatus={this.setFilterByStatus}
                    clearCompleted={this.clearCompleted}
                    status={status}
                    numOfTodoItemCompleted={numOfTodoItemCompleted}
                />
            </div>
        )
    }
}

TodoList.propTypes = {
    todoList: PropTypes.array
}
