import React, { Component } from 'react';
import axios from 'axios';
 export default class EmployeeDetails extends Component {
 	constructor(props) {
    super(props);
    this.state = {employees: []};
  }

  onSubmit(e) {
    e.preventDefault();
    var id=document.getElementById("empId").value;
    document.getElementById("empId").value='';
    console.log(id);
    axios.get('http://localhost:5000/employees/'+id)
      .then(res =>{ var str='';
      		str += '<h3>'+"Employee Details"+'</h3>';
      		str += '<ul>';
            str += '<li>' +"Name: "+ res.data.name + '</li>';
            str += '<li>' +"Adress: "+ res.data.address + '</li>';
            str += '<li>' +"Email: "+ res.data.email + '</li>';
            str += '<li>' +"Comapny: "+ res.data.company + '</li>';
            str += '</ul>';
      	document.getElementById("dataEmployee").innerHTML=str;
      })
      .catch(err =>{document.getElementById("dataEmployee").innerHTML="Employee id does not exist";})
  }

 	render(){
 		return(
 			    <div id="leftbox">
      <h3>Search Employee</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Employee ID: </label>
          <input  type="text"
              required
              className="form-control"
              id="empId"
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Get Employee" className="btn btn-primary" />
        </div>

      </form>
      <div id="dataEmployee">
      </div>
    </div>
    )
 		}
 	}