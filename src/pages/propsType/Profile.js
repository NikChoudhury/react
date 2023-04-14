import React from 'react'
import PropTypes from 'prop-types'

export default function Profile(props) {

    // If we want to make a list of numbers 

    // function mobilesNumberList() {
    //     const mobiles = props.mobile;
    //     const listNumber = mobiles.map((number) =>
    //         <li key={number.toString()}>{number}</li>
    //     );
    //     return (
    //         <ul>
    //             {listNumber}
    //         </ul>
    //     );
    // }

    return (
        <div className="container">
            <h1>
                Profile
            </h1>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td>
                            <span>Name :</span>
                        </td>
                        <td>
                            {props.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Age : </span>
                        </td>
                        <td>
                            {props.age}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Gender : </span>
                        </td>
                        <td>
                            {props.gender}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Address : </span>
                        </td>
                        <td>
                            {props.address}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Mobiles : </span>
                        </td>
                        <td>
                            {
                                props.mobile.join(', ')
                            }
                        </td>
                    </tr>
                </tbody>
            </table>

            {props.render}
        </div>
    )
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.oneOf([
        'Male', 'Female', 'Others'
    ]).isRequired,
    address: PropTypes.string.isRequired,
    mobile: PropTypes.arrayOf(PropTypes.number).isRequired,
    render: PropTypes.element //// if pass array we get an error
}

