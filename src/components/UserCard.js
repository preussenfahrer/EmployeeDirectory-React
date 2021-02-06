import React from "react";
import Table from "./Table";

function UserCard(props) {
        return (
            <table className="table mt-3">
            {/* <thead>
                <tr>
                    <th>Gender</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Email</th>
                </tr>
            </thead> */}
            <tbody>
                <tr>
                    <td>Gender</td>
                    <td>Name</td>
                    <td>Location</td>
                    <td>Email</td>
                </tr>
            </tbody>
        </table>
    )
};



export default UserCard;