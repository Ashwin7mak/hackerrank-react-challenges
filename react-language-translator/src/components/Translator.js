import React from 'react';

class Translator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let userInput = e.target.value;
    this.setState({ 
      input: userInput 
    }, () => {
      console.log("State input", this.state.input);
    });
    
    for (let names of this.props.translations.keys()) {
      if(userInput === names) {
        this.setState({
          output: this.props.translations.get(userInput)
        }, () => {
            console.log("State output", this.state.output);
        });     
      }
    }
    this.state.output = '';
  }

  render() {
    return (
      <React.Fragment>
        <div className="controls">
          <div className="input-container">
            <span>input:</span>
            <input type="text" className="text-input" data-testid="text-input" onChange={this.handleChange} value={this.state.input}/>
          </div>
          <div className="input-container">
            <span>output:</span>
            <input type="text" className="text-output" data-testid="text-output" readOnly value={this.state.output}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Translator;
