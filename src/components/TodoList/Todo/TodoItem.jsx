import { PureComponent } from "react";
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss'

export default class TodoItem extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
            valueEdt: this.props.name
        }
    }

    handleOnClick = () => {
        const index = this.props.index;
        this.props.todoOnClick(index);
    }

    handleOnDblClick = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleOnChange = (e) => {
        this.setState({
            visible: this.state.visible,
            valueEdt: e.target.value
        });
    }

    handleOnBlur = () => {
        this.setState((prevState,props) => ({
            visible: !prevState.visible,
            valueEdt: props.name
        }));
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const index = this.props.index;
        const formValue = {
            id: new Date().valueOf(),
            name: this.state.valueEdt
        };

        this.props.edtItem(formValue,index);
        this.setState((prevState,props) => ({
            visible: !prevState.visible,
            valueEdt: props.name
        }));
    }

    handleOnRemoveItem = () => {
        const id = this.props.id;
        this.props.todoOnRemoveItem(id);
    }

    render() {
        const {status, name} = this.props;
        return (
            <li
                className={classnames({
                    'todo-item': true,
                    completed: status === 'completed'
                })}
                >
                {
                    this.state.visible ? 
                    <span
                        onClick={this.handleOnClick}
                        onDoubleClick={this.handleOnDblClick}  
                    >
                        {name}
                    </span>
                    :
                    <form 
                        onSubmit={this.handleOnSubmit}
                    >
                      <input
                        className="edit"
                        type="text"
                        placholder="What needs to be done?"
                        value={this.state.valueEdt}
                        onBlur={this.handleOnBlur}
                        onChange={this.handleOnChange}
                        />
                    </form>
                }    
                <button
                    onClick={this.handleOnRemoveItem}>
                    x
                </button>
            </li>
        )
    }
}

TodoItem.propsTypes = {
    todoOnClick: PropTypes.func,
    todoOnRemoveItem: PropTypes.func,
    status: PropTypes.string,
    name: PropTypes.string
}

