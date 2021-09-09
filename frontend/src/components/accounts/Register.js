import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from './auth';
import { createMessage } from './messages';
import classes from '../landings/classes';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
    };

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
            this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
        } else {
            const newUser = {
                username,
                password,
                email,
            };
            this.props.register(newUser);
        }
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, email, password, password2 } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper_login}>
                            <Typography component="h1" variant="h5" align="center">Register</Typography>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <TextField
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        onChange={this.onChange}
                                        value={username}
                                        label="Username"
                                        required
                                        fullWidth />
                                </div>
                                <div className="form-group">
                                    <TextField
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        onChange={this.onChange}
                                        value={email}
                                        label="Email"
                                        required
                                        fullWidth />
                                </div>
                                <div className="form-group">
                                    <TextField
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        onChange={this.onChange}
                                        value={password}
                                        label="Password"
                                        required
                                        fullWidth />
                                </div>
                                <div className="form-group">
                                    <TextField
                                        type="password"
                                        className="form-control"
                                        name="password2"
                                        onChange={this.onChange}
                                        value={password2}
                                        label="Confirm Password"
                                        required
                                        fullWidth />
                                </div>
                                <div className="form-group">
                                    <Button
                                        type="submit"
                                        fullWidth
                                        className={classes.submit}
                                        variant="contained"
                                        color="primary">
                                        Register
                                    </Button>
                                </div>
                                <Grid container>
                                    <Grid item>
                                        Already have an account? <Link to="/login">Login</Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);