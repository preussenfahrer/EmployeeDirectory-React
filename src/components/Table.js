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
        axios.get('https://randomuser.me/api/?results=5&gender,name,location,email')
            .then((res) => {
                console.log(res.data.results)
                this.setState((state, props) => {
                    return{users: res.data.results}
                })
                console.log(this.state);
            })
    }

    sortColumn(columnName) {
        console.log(columnName)
        let array; 
        switch (columnName) {
            case "gender":
                array = this.state.users.sort((a, b) => {
                    if (a > b) {
                        return 1
                    } else {
                        return -1
                    }
                })
                break;

            case "name":
            case "location":
            case "email":
        }
        this.setState((state) => {
            return {users: array}
        })
    } 
    render() {
        return (
        <table className="table mt-3">
            <thead>
                <tr>
                    {/* Each one will be a column in the table */}
                    <th onClick={() => this.sortColumn('gender')}>Gender</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {this.state.users.map(user => {
                    return <TableRow key={user.email} user={user} />
                })}
            </tbody>
        </table>
        )
    }
}

export default Table;