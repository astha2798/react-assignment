import React, { Component } from 'react';
import axios from 'axios';
export default class EmployeeList extends Component {

 	constructor(props) {
    super(props);
    this.state={
      data:this.props.data,
      employees:[]
    };
  }
  componentDidMount = () => {
    this.getEmployees();
  };

  getEmployees = () => {
    axios.get('http://localhost:5000/employees/')
      .then((res) => {
        // console.log(res);
        const data = res.data;
        this.setState({ employees: data });
        console.log('Data has been received!!');
      })
      .catch((err) => {
        alert('Error retrieving data!!!');
        console.log(err.response);

      });
  }
  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate');
  if(prevProps.data !== this.props.data) {
    console.log('componentDidUpdate invoking');
    this.setState({data: this.props.data});
    
    return(this.getEmployees());
    // this.render();
  }
}
  // componentWillReceiveProps(nextProps){
  //   console.log(this.props.data);
  //   console.log(nextProps.data);
  //   if(this.props.data!== nextProps.data){
  //   this.getEmployees();
  //   this.render();}
  // }
  // shouldComponentUpdate(nextProps) {
  //   console.log('shouldComponentUpdate called');
  //   if(this.props.data === 0 && nextProps.data === 0){
  //     // this.getEmployees();
  //     console.log('shouldComponentUpdate called first time');
  //     console.log(this.props.data);
  //     console.log(nextProps.data);
  //     return true;
  //   }
    
  //   // console.log(nextProps.passVal);
  //   if(this.props.data !== nextProps.data){
  //     console.log('shouldComponentUpdate called when changed');
  //     console.log("changed");
  //     this.getEmployees();
  //     return true;
  //   }
  //   return false;
  // }

  displayEmployees = (employees) => {


    if (!employees.length) return null;
    console.log(employees);

    return employees.map((employee, index) => (
      <div key={index}>
        <table id="empTable">
        <tr>
        <td>{employee._id}</td>
        <td>{employee.name}</td>
        <td>{employee.address}</td>
        <td>{employee.email}</td>
        <td>{employee.company}</td>
        </tr>
        </table>
      </div>
    ));
  };

  render(){
    // this.getEmployees();
  return(
    <div id = "rightbox" key="this.props.data">
        <h3>EmployeeList</h3>
        {this.displayEmployees(this.state.employees)}
    </div>
  );
}
  }