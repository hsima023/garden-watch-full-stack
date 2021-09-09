import React, { Component } from "react";
import { Input, Label } from "reactstrap";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import classes from "./classes";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs, addLog } from "../accounts/auth";

export class Forms extends Component {
    state = {
        location: '',
        completed: false,
    };

    static propTypes = {
        addLead: PropTypes.func.isRequired,
    };

    onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    };

    onSubmit = (e) => {
        const { location, completed } = this.state;
        const log = { location, completed };
        this.props.addLog(log);
        this.setState({
            location: '',
            completed: false,
        });
    };

    render() {
        const { location, completed } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h3>Log your activity</h3>
                <form onSubmit={this.onSubmit}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="select-label">Location</InputLabel>
                        <Select
                            labelId="select-label"
                            className="form-control"
                            type="text"
                            name="location"
                            onChange={this.onChange}
                            value={location}
                        >
                            <MenuItem value={''}><em>Choose a location...</em></MenuItem>
                            <MenuItem value={'frontyard'}>frontyard</MenuItem>
                            <MenuItem value={'backyard'}>backyard</MenuItem>
                            <MenuItem value={'rightside'}>rightside</MenuItem>
                            <MenuItem value={'leftside'}>leftside</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="form-check">
                        <Input
                            className="form-check-input"
                            type="checkbox"
                            name="completed"
                            onChange={this.onChange}
                            value={completed}
                            id='flexCheckChecked'
                            checked={this.state.completed}
                        />
                        <Label check>Completed</Label>
                    </div>
                    <div className="form-group">
                        <Button type="submit" variant="contained" color="primary" size="medium" className={classes.button} startIcon={<SaveIcon />}>
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { getLogs, addLog })(Forms);