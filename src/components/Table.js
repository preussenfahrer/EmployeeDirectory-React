import { Component } from "react";
import TableRow from "./TableRow";
import axios from "axios";

class Table extends Component {
    constructor(params){
        super(params);
        this.state = {users: []}

    }
    componentDidMount() {
        this.fetchUsers();
    }
    // fetchUsers() {
    //     // call to API. Works
    //     axios.get('https://randomuser.me/api/?results=25')
    //         .then((res) => {
    //             this.setState((state, props) => {
    //                 return{users: res.data.results}
    //             })
    //             console.log(this.state);
    //         })
    // }
    render() {
        return (
        <table className="table mt-3">
            <thead>
                <tr>
                    {/* Each one will be a column in the table */}
                    <th>Gender</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <TableRow>
                </TableRow>
            </tbody>
        </table>
        )
    }
}

export default Table;