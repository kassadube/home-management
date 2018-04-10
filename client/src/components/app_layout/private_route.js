import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { isAuthenticated } from '../../modules/auth/selectors'

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        const {component}  = this.props;
        
        return this.props.isAuthenticated ? (
            <Route exact path={this.props.path} component={component} />
        ) :(
            <Redirect to="/login" />
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        isAuthenticated: isAuthenticated(state)
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {     
      changePage: () => push('/login')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

