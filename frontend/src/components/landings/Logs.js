import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs, deleteLog } from '../accounts/auth';


export class Logs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: 'O'
        };
    }

    static propTypes = {
        logs: PropTypes.array.isRequired,
        getLogs: PropTypes.func.isRequired,
        deleteLog: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getLogs();
    }

    render() {
        return (
            <Fragment>
                <main className="container">
                    <h2>Logs</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Timestamp</th>
                                <th>Completed</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.logs.map((log) => (
                                <tr key={log.id}>
                                    <td>{log.location}</td>
                                    <td>{log.timestamp}</td>
                                    <td>{String(log.completed)}</td>
                                    <td>
                                        <button
                                            onClick={this.props.deleteLog.bind(this, log.id)}
                                            className="btn btn-danger btn-sm"
                                        >
                                            {' '}
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    logs: state.logs.logs,
});

export default connect(mapStateToProps, { getLogs, deleteLog })(Logs);