import React from "react";

class TableRow extends React.Component {
    render(){
        return <tr>
            <td>
                {this.props.user.gender}
            </td>
            <td>
                {this.props.user.name.first} {this.props.user.name.last}
            </td>
            <td>
                {this.props.user.location.city}
            </td>
            <td>
                {this.props.user.email}
            </td>
        </tr>
    }
}

export default TableRow;