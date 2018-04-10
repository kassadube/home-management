import React from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types';

class SignIn extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
      this.handleSubmit = props.handleSubmit;
      this.handleInputChange = this.handleInputChange.bind(this);
      this.submit = this.submit.bind(this);
    }
   

    handleInputChange (event) {
        
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

    }
    
    submit(event){
        event.preventDefault();
        this.handleSubmit(this.state);
    }
      
    render (){
        let error = '';
        if(this.props.error )
        {
            error = <div style={{color:'red'}}>{this.props.error}</div>;
        }
        return (
                <div style={{'margin':"25rem 0 0 20%"}}>
                    <form onSubmit={this.submit}>                        
                        <div className="row">
                            <div className="two columns"><label htmlFor="username">User</label></div>
                            <div className="five columns"><input type="text" name="username" onChange={this.handleInputChange}/></div>
                        </div>
                        <div className="row">
                             <div className="two columns"><label htmlFor="password">Password</label></div>
                             <div className="five columns"><input type="password" name="password" onChange={this.handleInputChange}/></div>
                        </div>
                        <div className="row">
                            {error}
                        </div>
                        <div className="row">
                            <button type="submit" className="button-primary">Send</button>
                        </div>
                    </form>    
                </div>
            );
        }
};

SignIn.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};
export default SignIn