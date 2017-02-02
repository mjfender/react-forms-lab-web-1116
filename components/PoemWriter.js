const React = require('react');

class PoemWriter extends React.Component {
  constructor(props) {
    super();
    this.handleTextareaChange = this.handleTextareaChange.bind(this)
    this.state = {
      textArea: "",
      validPoem: false
    };
    this.properStructure = this.properStructure.bind(this)
  }

  handleTextareaChange(event) {
    this.setState({
      textArea: event.target.value,
      validPoem: this.properStructure(event)
    })
    
  }

  properStructure(event) {
    var value = event.target.value
    var rowArray = value.split("\n").map(function (row) {
      return row.trim()
    })

    var wordAndRowArray = rowArray.map( function (row) {
      return row.split(" ") })
    debugger
    if ( rowArray.length === 3 &&wordAndRowArray[0].length === 5 && wordAndRowArray[1].length === 3 && wordAndRowArray[2].length === 5) {
      return true
    } else {
      return false
    }
  }


  render() {
    debugger
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleTextareaChange} value={this.state.textArea}/>
        {this.state.validPoem ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    );
  }
}

module.exports = PoemWriter;
