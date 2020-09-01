import React, { Component } from 'react';
import axios from 'axios';
import EmployeeDetails from "./employee-details";
import EmployeeForm from "./employee-form";
import EmployeeList from "./employee-list";

export default class Home extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      unit: 0
	    }
	    // this.updateUnit = this.updateUnit.bind(this);
  	};
	updateUnit(calculation) {
      this.setState({unit: calculation});
      console.log("home"+this.state.unit);
  	};
 	render(){
 		return(
	 	<div>
	 	<EmployeeForm data={{unit:this.state.unit,updateUnit:this.updateUnit.bind(this)}} />
	 	<br/>
	  	<EmployeeList data={this.state.unit}/>
	  	<br/>
	    <EmployeeDetails/>
	    </div>
    	)
 		}
 	}
