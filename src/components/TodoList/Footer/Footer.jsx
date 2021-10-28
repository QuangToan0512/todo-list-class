import { PureComponent } from "react";
import Btns from "./Btns";
import PropTypes from 'prop-types';
import "./styles.scss"

export default class Footer extends PureComponent {
    
    constructor(props) {
        super(props)
        const {status,setFilterByStatus} = this.props
        this.state = {
            filterBtns : [
                {   
                    isActive: status === "all",
                    title: "All",
                    onClick:() => setFilterByStatus("all")
                },
                {   
                    isActive : status ==="active",
                    title: "Active",
                    onClick: () => setFilterByStatus("active")
                },
                {   
                    isActive : status ==="completed",
                    title: "Completed",
                    onClick: () => setFilterByStatus("completed")
                }
            ]
        }
    }
    

    render() {
        const {clearCompleted, numOfTodoItemCompleted} = this.props;
        return(
            <div className="footer">
                <ul className="filters">
                    {
                        this.state.filterBtns.map((btn, index) => (
                            <Btns 
                                key={index}
                                {...btn}
                            />
                        ))
                    }
                </ul>
                {
                    numOfTodoItemCompleted > 0 &&
                    <button 
                        className="clear-completed"
                        onClick={clearCompleted}
                        >
                        ClearCompleted
                    </button>
                }
                
            </div>
        )
    }
}

Footer.propTypes = {
    status: PropTypes.string,
    setFilterByStatus: PropTypes.func,
    clearCompleted: PropTypes.func,
    numOfTodoItemCompleted: PropTypes.number
    
}

