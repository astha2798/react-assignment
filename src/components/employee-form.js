import React, { Component } from 'react';
import axios from 'axios';

export default class EmployeeForm extends Component {
  constructor(props) {
    super(props);
     this.state = {
      fieldValChild: ""
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCompany = this.onChangeCompany.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      address: '',
      email: '',
      company: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeCompany(e) {
    this.setState({
      company: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const employee = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      company: this.state.company
    }

    // this.props.update(this.props.dataValue+1);
    this.state.name='';
    this.state.address='';
    this.state.email='';
    this.state.company='';
    document.getElementById("createdEmployee").innerHTML="<h3>Employee Created</h3>";
    axios.post('http://localhost:5000/employees/add', employee)
      .then(res => {
        this.props.data.updateUnit(this.props.data.unit+1);
        document.getElementById("createdId").innerHTML=res.data;}

        // console.log(res.data)
        );
  }

  render() {
    return (
    <div id = "leftbox">
      <h3>Employee Form</h3>
      <form id="myForm" onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <input type="text"
              required
              className="form-control"
              id="empName"
              value={this.state.name}
              onChange={this.onChangeName}/>
         
        </div>
        <div className="form-group"> 
          <label>Address: </label>
          <input type="text"
              required
              className="form-control"
              id="empAddress"
              value={this.state.address}
              onChange={this.onChangeAddress}
              />
        </div>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="email"
              required
              className="form-control"
              id="empEmail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={this.state.email}

              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group"> 
          <label>Comapny: </label>
          <input  type="text"
              required
              className="form-control"
              id="empCompany"
              value={this.state.company}
              onChange={this.onChangeCompany}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Add Employee" className="btn btn-primary" />
        </div>
      </form>
      <span id="createdEmployee">
      </span>
      <span id="createdId">
      </span>
    </div>
    )
  }
}