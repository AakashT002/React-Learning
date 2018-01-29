import React, { Component } from 'react';
import RadioSet from './RadioSet';
import CheckboxSet from './CheckboxSet';

let Roles = ["Developer", "Admin", "Guest"];
var Optionize = function (option) { return (<option>{option}</option>); }
class NewForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", url: "", role: "" };
        // this.handleChangeName=this.handleChangeName.bind(this);
        // this.handleChangeUrl=this.handleChangeUrl.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeRole = this.handleChangeRole.bind(this);
    }

    handleClick = (event) => {
        //  extract the node list from the form
        //  it looks like an array, but lacks array methods
        const { pet, song } = this.form;
        // convert node list to an array
        const checkboxArray = Array.prototype.slice.call(song);
        // extract only the checked checkboxes
        const checkedCheckboxes = checkboxArray.filter(input => input.checked);
        console.log('checked array:', checkedCheckboxes);
        // use .map() to extract the value from each checked checkbox
        const checkedCheckboxeVlues = checkedCheckboxes.map(input => input.value);
        console.log('checked array values:', checkedCheckboxeVlues);

        event.preventDefault();
        this.setState({ role: this.refs.role.value, name: this.refs.name.value, url: this.refs.role.value });
        alert("These are the refs \n Name :" + this.refs.name.value + "\nURL :" + this.refs.url.value + "\nRole :" + this.refs.role.value + "\npet :" + pet.value
            + "\nsong:" + checkedCheckboxeVlues);
        alert("These are the states Name :" + this.state.name + "\nURL :" + this.state.url + "\nRole :" + this.state.role);
    };

    handleChangeRole = (event) => {
        this.setState({ role: this.refs.role.value, name: this.refs.name.value, url: this.refs.url.value });
    }

    render() {
        return (
            <div>
                <form
                    ref={form => this.form = form}>
                    <label value="Name">Name </label>   <input id="Name" ref="name" type="text" value={this.state.name} onChange={this.handleChangeRole} placeholder="Enter Name ..." /><br />
                    <label value="url"> URL  </label> <input id="url" type="text" ref="url" value={this.state.url} onChange={this.handleChangeRole} placeholder="Enter the URL ..." /><br />
                    <label value="role"> Role </label><select id="role" ref="role" value={this.state.role} onChange={this.handleChangeRole}>{Roles.map(Optionize)}
                    </select><br />
                    <RadioSet
                        setName={'pet'}
                        setOptions={['cat', 'dog', 'ferret']} /><br />
                    <CheckboxSet
                        setName={'song'}
                        setOptions={['hindi', 'english', 'telugu']} /><br />
                    <button type="Submit" onClick={this.handleClick} value="Submit" >Submit </button>
                </form>
            </div>
        );
    }
}
export default NewForm;