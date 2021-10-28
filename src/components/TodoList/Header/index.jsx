import { PureComponent } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export default class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    
    handleOnChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const formValue = {
            id: new Date().valueOf(),
            name: this.state.value
        }
        this.props.addTodo(formValue);
        this.setState({
            value: ''
        })
    }

    render() {
        return(
            <form
                className="header" 
                onSubmit={this.handleOnSubmit}>
                <input
                    className="new-todo"
                    type="text"
                    placeholder="What needs to be done?"
                    value={this.state.value}
                    onChange = {this.handleOnChange}
                />
            </form>
        )
    }
}
