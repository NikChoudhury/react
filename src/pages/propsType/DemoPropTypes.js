import React from 'react'
import PropTypes from 'prop-types';

export default function DemoPropTypes(props) {
    const testStyle = {
        color: 'red',
        border: "1px solid black",
        background: "aqua"
    }

    return (
        <div className="container">
            <hr />
            <h3 style={testStyle}>
                We can render a Component by passing props,<br />
                This is the Example of that
            </h3>
            <h4>In five years {props.name} age will be {props.age + 5}</h4>
        </div >
    )
}

//Validation For PropTypes
DemoPropTypes.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}
DemoPropTypes.defaultProps = {
    name: "XYZ",
    age: 5
}
