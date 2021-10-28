import classnames from "classnames";
import { PureComponent } from "react";
import PropTypes from "prop-types"
import "./styles.scss"

export default class Btns extends PureComponent {

    render() {
        const {isActive, onClick, title} = this.props
        return(
            <li>
                <button
                    className={classnames(
                        isActive ? "selected" : ""
                    )}
                    onClick={onClick}
                    >
                    {title}
                </button>
            </li>
        )
    }
}

Btns.propTypes = {
    isActive: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string
}