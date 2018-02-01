import React, { Component } from 'react';
import RadioSet from './RadioSet';
import CheckboxSet from './CheckboxSet';
import {
	DataTable,
	TableHeader,
	TableBody,
	TableRow,
	TableColumn,
	Drawer,
	Toolbar,
	Button,
} from 'react-md';

let Roles = ["Developer", "Admin", "Guest"];

var Optionize = function (option) { return (<option>{option}</option>); }
class NewForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "", url: "", role: "", visible: false, position: 'left',
			scannedInfo: [{
				SerialNo: 123423456,
				Status: "verified",
				Scanner: "Vipul",
				LastScan: "09/02/2010"
			}, {
				SerialNo: 123423457,
				Status: "verified",
				Scanner: "Avinash",
				LastScan: "10/01/2011"
			}, {
				SerialNo: 123423458,
				Status: "verified",
				Scanner: "Vijay",
				LastScan: "02/01/2018"
			}, {
				SerialNo: 123423459,
				Status: "verified",
				Scanner: "Rahul",
				LastScan: "17/09/2013"
			}, {
				SerialNo: 123423410,
				Status: "verified",
				Scanner: "Monika",
				LastScan: "26/07/2014"
			}]
		};
		// this.handleChangeName=this.handleChangeName.bind(this);
		// this.handleChangeUrl=this.handleChangeUrl.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleChangeRole = this.handleChangeRole.bind(this);
	}

	openDrawerLeft = () => {
		this.setState({ visible: true, position: 'left' });
	};

	openDrawerRight = () => {
		this.setState({ visible: true, position: 'right' });
	};

	closeDrawer = () => {
		this.setState({ visible: false });
	};

	handleVisibility = (visible) => {
		this.setState({ visible });
	};

	handleClick = (event) => {
		//  extract the node list from the form
		//  it looks like an array, but lacks array methods
		const { sort, song } = this.form;
		// convert node list to an array
		var checkboxArray = Array.prototype.slice.call(song);
		// extract only the checked checkboxes
		var checkedCheckboxes = checkboxArray.filter(input => input.checked);
		console.log('checked array:', checkedCheckboxes);
		// use .map() to extract the value from each checked checkbox
		var checkedCheckboxeVlues = checkedCheckboxes.map(input => input.value);
		console.log('checked array values:', checkedCheckboxeVlues);
		//  var UsortedValues = ['do', 'if', 'in', 'for', 'new', 'try', 'var', 'case', 'else', 'enum', 'null', 'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw', 'while', 'delete', 'export', 'import', 'return', 'switch', 'typeof', 'default', 'extends', 'finally', 'continue', 'debugger', 'function', 'do', 'if', 'in', 'for', 'int', 'new', 'try', 'var', 'byte', 'case', 'char', 'else', 'enum', 'goto', 'long', 'null', 'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'false', 'final', 'float', 'short', 'super', 'throw', 'while', 'delete', 'double', 'export', 'import', 'native', 'public', 'return', 'static', 'switch', 'throws', 'typeof', 'boolean', 'default', 'extends', 'finally', 'package', 'private', 'abstract', 'continue', 'debugger', 'function', 'volatile', 'interface', 'protected', 'transient', 'implements', 'instanceof', 'synchronized', 'do', 'if', 'in', 'for', 'let', 'new', 'try', 'var', 'case', 'else', 'enum', 'eval', 'null', 'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw', 'while', 'yield', 'delete', 'export', 'import', 'public', 'return', 'static', 'switch', 'typeof', 'default', 'extends', 'finally', 'package', 'private', 'continue', 'debugger', 'function', 'arguments', 'interface', 'protected', 'implements', 'instanceof', 'do', 'if', 'in', 'for', 'let', 'new', 'try', 'var', 'case', 'else', 'enum', 'eval', 'null', 'this', 'true', 'void', 'with', 'await', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw', 'while', 'yield', 'delete', 'export', 'import', 'public', 'return', 'static', 'switch', 'typeof', 'default', 'extends', 'finally', 'package', 'private', 'continue', 'debugger', 'function', 'arguments', 'interface', 'protected', 'implements', 'instanceof'];         
		//   var SortedValues = checkedCheckboxes.filter((svalue, index) => )
		var UsortedValues = ['do', 'if', 'for'];
		checkedCheckboxeVlues.map(v => UsortedValues.push(v));
		console.log('combined array: ', UsortedValues);

		//sorted array values
		var SortedValues = UsortedValues.filter((Svalue, index) => UsortedValues.lastIndexOf(Svalue) === index)
			.sort((a, b) => a < b ? -1 : 1);
		console.log('combined array with sorting: ', SortedValues);
		//sorting values with date
		var scannedInfo = [{
			"Serial#": 123423456,
			"Status": "verified",
			"Scanner": "Vishal",
			LastScan: "09/02/2010"
		}, {
			"Serial#": 123423457,
			"Status": "verified",
			"Scanner": "Avinash",
			LastScan: "10/01/2011"
		}, {
			"Serial#": 123423458,
			"Status": "verified",
			"Scanner": "Vijay",
			LastScan: "02/01/2018"
		}, {
			"Serial#": 123423459,
			"Status": "verified",
			"Scanner": "Rahul",
			LastScan: "17/09/2013"
		}, {
			"Serial#": 123423410,
			"Status": "verified",
			"Scanner": "Monika",
			LastScan: "26/07/2014"
		}];

		var sortedScannedInfo = scannedInfo.sort((a, b) => new Date(...a.LastScan.split('/').reverse()) - new Date(...b.LastScan.split('/').reverse()));
		console.log('Sorted values with date', sortedScannedInfo);

		event.preventDefault();
		this.setState({ role: this.refs.role.value, name: this.refs.name.value, url: this.refs.url.value });
		alert("These are the refs \n Name :" + this.refs.name.value + "\nURL :" + this.refs.url.value + "\nRole :" + this.refs.role.value + "\npet :" + sort.value
			+ "\nsong:" + checkedCheckboxeVlues);
		alert("These are the states Name :" + this.state.name + "\nURL :" + this.state.url + "\nRole :" + this.state.role);
	};

	handleSorting = (event) => {
		const { sort } = this.form;
		var sortscannedinfo = [];
		console.log("sortscannedinfo array ==> ", sortscannedinfo);
		if (sort.value === 'Date') {
			sortscannedinfo = this.state.scannedInfo.sort((a, b) => new Date(...a.LastScan.split('/').reverse()) - new Date(...b.LastScan.split('/').reverse()));
		}
		else if (sort.value === 'Scanner') {
			sortscannedinfo = this.state.scannedInfo.filter((Svalue, index) => this.state.scannedInfo.lastIndexOf(Svalue) === index)
				.sort((a, b) => a.Scanner < b.Scanner ? -1 : 1);
		}
		else if (sort.value === 'SerialNo') {
			sortscannedinfo = this.state.scannedInfo.filter((Svalue, index) => this.state.scannedInfo.lastIndexOf(Svalue) === index)
				.sort((a, b) => a.SerialNo < b.SerialNo ? -1 : 1);
		}
		this.setState({ scannedInfo: sortscannedinfo });
		event.preventDefault();
	}

	handleChangeRole = (event) => {
		this.setState({ role: this.refs.role.value, name: this.refs.name.value, url: this.refs.url.value });
	}

	render() {
		const { scannedInfo, visible, position } = this.state;
		const isLeft = position === 'left';
		const closeBtn = <Button icon onClick={this.closeDrawer}>{isLeft ? 'arrow_back' : 'close'}</Button>;
		return (
			<div>
				<form
					ref={form => this.form = form}>
					<label value="Name">Name </label>   <input id="Name" ref="name" type="text" value={this.state.name} onChange={this.handleChangeRole} placeholder="Enter Name ..." /><br />
					<label value="url"> URL  </label> <input id="url" type="text" ref="url" value={this.state.url} onChange={this.handleChangeRole} placeholder="Enter the URL ..." /><br />
					<label value="role"> Role </label><select id="role" ref="role" value={this.state.role} onChange={this.handleChangeRole}>{Roles.map(Optionize)}
					</select><br />
					<RadioSet
						setName={'sort'}
						setOptions={['SerialNo', 'Scanner', 'Date']} /><br />
					<CheckboxSet
						setName={'song'}
						setOptions={['hindi', 'english', 'telugu']} /><br />
					<button type="Submit" onClick={this.handleClick} value="Submit" >Submit </button>
					<button type="Submit" onClick={this.handleSorting} value="sort" >SortBy </button>
				</form>
				<div>
					<Button raised onClick={this.openDrawerLeft}>
						Open Drawer Left
        </Button>
					<Button raised onClick={this.openDrawerRight}>
						Open Drawer Right
        </Button>
					<Drawer
						id="simple-drawer-example"
						type={Drawer.DrawerTypes.TEMPORARY}
						visible={visible}
						position={position}
						onVisibilityChange={this.handleVisibility}
					>
							<Toolbar
								nav={isLeft ? null : closeBtn}
								actions={isLeft ? closeBtn : null}
								className="md-divider-border md-divider-border--bottom"
							/>
						<div>
							<DataTable plain>
								<TableHeader>
									<TableRow>
										<TableColumn>SERIAL NUMBER</TableColumn>
										<TableColumn>STATUS</TableColumn>
										<TableColumn>SCANNER</TableColumn>
										<TableColumn>LAST SCAN</TableColumn>
									</TableRow>
								</TableHeader>
								<TableBody>
									{scannedInfo.map((info, i) => (
										<TableRow key={i}>
											<TableColumn>{info.SerialNo}</TableColumn>
											<TableColumn>{info.Status}</TableColumn>
											<TableColumn>{info.Scanner}</TableColumn>
											<TableColumn>{info.LastScan}</TableColumn>
										</TableRow>
									))}
								</TableBody>
							</DataTable>
						</div>
					</Drawer>
				</div>
			</div>
		);
	}
}
export default NewForm;