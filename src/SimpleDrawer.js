import React, { Component } from 'react';
import { Button, Drawer, DataTable,
	TableHeader,
	TableBody,
	TableRow,
	TableColumn } from 'react-md';

class SimpleDrawer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			drawerVisible: false,
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
		}

		this._handleDrawerVisibility = this._handleDrawerVisibility.bind(this);
		this._toggleDrawer = this._toggleDrawer.bind(this);
	}

	_handleDrawerVisibility(visible) {
		this.setState({ drawerVisible: visible })
	}

	_toggleDrawer() {
		this.setState((prevState, props) => {
			return { drawerVisible: !prevState.drawerVisible }
		});
	}

	render() {
		const {
      drawerVisible,
			scannedInfo
    } = this.state;

		return (
			<div className="centered">
				<Drawer
					onVisibilityToggle={this._handleDrawerVisibility}
					visible={drawerVisible}
				>
					Simple Drawer
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
				</Drawer>
				<Button icon onClick={this._toggleDrawer}>menu</Button>
			</div>
		);
	}
}

export default SimpleDrawer;