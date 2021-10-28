import { PureComponent } from "react";
import TodoItem from "./TodoItem";
import './styles.scss';
import PropTypes from 'prop-types';

export default class Todo extends PureComponent {
    
    handleTodoOnClick = (index) => {
        this.props.todoOnClick(index);
    }

    handleOnEdtItem = (formValue,index) => {
        this.props.edtItem(formValue,index);
    }

    onTodoRemoveItem =(id) => {
        this.props.todoOnRemoveItem(id);
    }
    render() {
        const {todoList} = this.props;
        
        return(
            <ul className="todo-list" >
                {
                    todoList.map((todo, index) => (
                        <TodoItem 
                            key={index}
                            index={index}
                            {...todo}
                            todoOnClick={this.handleTodoOnClick}
                            edtItem={this.handleOnEdtItem}
                            todoOnRemoveItem={this.onTodoRemoveItem}
                        />
                    ))
                }
            </ul>
        )
    }
}

Todo.propTypes = {
    todoOnClick: PropTypes.func,
    edtItem: PropTypes.func,
    todoOnRemoveItem: PropTypes.func
}