const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      currentChars: 0,
      inputValue: ""
    };
  }

  handleChange(event) {
    this.setState({
          currentChars: event.target.value.length,
          inputValue: event.target.value
        })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value= {this.state.inputValue} />
        Max Chars: {this.props.maxChars}<br/>
        Chars Remaining: {this.props.maxChars - this.state.currentChars}
      </div>
    );
  }
}

module.exports = TwitterMessage;
