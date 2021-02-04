// import logo from './logo.svg';
import './App.css';
import Table from "./components/Table";
import Header from "./components/Header";
import UserCard from "./components/UserCard";
import TableRow from "./components/TableRow";
// import Input from "./components/Input";
// Input EmployeeContainer from "./components/EmployeeContainer"



function App() {
  return (
    // <div className="App">
    //   <Table>

    //   </Table>
    // </div>
    <div>
      <Header />

      <Table />

      <UserCard />

      <TableRow />

      {/* <Input /> */}

      {/* <EmployeeContainer /> */}
    </div>
  );
}


export default App;
