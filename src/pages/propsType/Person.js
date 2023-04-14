import React from 'react'
import PropTypes from 'prop-types'
export default function Person(props) {
    return (
        <div className="container">
            <hr />
            <h1>
                Preson
            </h1>
            <p>
                Sending props data within an object
            </p>
            <pre>
                <code>
                    name: "Nik", age: 25, gender: "Male", address: "Sorbhog, Barpeta, Assam"
                </code>
            </pre>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <span>Name :</span>
                        </td>
                        <td>
                            {props.data.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Age : </span>
                        </td>
                        <td>
                            {props.data.age}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Gender : </span>
                        </td>
                        <td>
                            {props.data.gender}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Address : </span>
                        </td>
                        <td>
                            {props.data.address}
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

Person.propTypes = {
    data: PropTypes.shape({   // Or We can use exact
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        gender: PropTypes.oneOf([
            'Male', 'Female', 'Others'
        ]).isRequired,
        address: PropTypes.string.isRequired,
    })
}