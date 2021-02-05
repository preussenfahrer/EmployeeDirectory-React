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
    fetchUsers() {
        // call to API. Works
        axios.get('https://randomuser.me/api/?results=20')
            .then((res) => {
                this.setState((state, props) => {
                    return{users: res.data.results}
                })
                console.log(this.state);
            })
    }
    render() {
        return <table>
            <thead>
                <tr>
                    {/* Each one will be a column in the table */}
                    <th>Name</th>
                    <th>Country</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <TableRow>
                </TableRow>
            </tbody>
        </table>;
    }
}

export default Table;