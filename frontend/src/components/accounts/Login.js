import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../accounts/auth';
import classes from '../landings/classes';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export class Login extends Component {
    state = {
        username: '',
        password: '',
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }
        const { username, password } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <div className={classes.paper_login}>
                            <Typography component="h1" variant="h5" align="center">Login</Typography>
                            <form onSubmit={this.onSubmit} className={classes.form} >
                                <div className="form-group">
                                    <TextField
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        onChange={this.onChange}
                                        value={username}
                                        label="Username"
                                        variant="outlined"
                                        margin="normal"
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
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth />
                                </div>
                                <div className="form-group">
                                    <Button
                                        type="submit"
                                        className={classes.submit}
                                        fullWidth
                                        variant="contained"
                                        color="primary">
                                        Login
                                    </Button>
                                </div>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        Don't have an account? <Link to="/register">Register</Link>
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

export default connect(mapStateToProps, { login })(Login);