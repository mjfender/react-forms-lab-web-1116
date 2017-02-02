const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange(key, event){
    this.setState({[key]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    if (!this.state.username || !this.state.password){
      return null
    } else {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;