import React from 'react';

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.appendInput = this.appendInput.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  appendInput() {
    this.setState(state => {
      let output = state.output;
      output.push(state.input);
      console.log("Output", output);
      return {
        output,
        input: ''
      }
    });
  }

  resetInput() {
    this.setState(state => {
      let output = state.output;
      output.pop();
      console.log("New Output", output);
      return {
        output
      }
    });
  }


  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <input className="word-input" type="text" data-testid="word-input" onChange={this.handleChange} value={this.state.input}/>
          <button data-testid="append-button" onClick={this.appendInput} disabled={!this.state.input}>Append</button>
          <button data-testid="undo-button" onClick={this.resetInput} disabled={this.state.output.length === 0}>Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">   
          {
            this.state.output.map((values, index) => { 
              return (
                 <text key={index}>{values} </text>
                ) 
            })
          }
        </div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
