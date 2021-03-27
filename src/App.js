import { Component } from 'react'
import { connect } from 'react-redux';
import inputAction from './redux/actions/inputActions'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldAppear: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.clickChange = this.clickChange.bind(this);
  }

  handleChange({ target }) {
    const { inputChange } = this.props;
    const {name, value } = target;
    if(name === 'text') {
      inputChange(value);
      this.setState({
        shouldAppear: false,
      });
    }
  }

  clickChange() {
    this.setState({
      shouldAppear: true,
    });
  }

  render() {
    const { shouldAppear } = this.state;
    const { inputState} = this.props;
    return (
      <section className="App-section">
        <header>
          React Redux
        </header>
        <label htmlFor="text-input">
          <input onChange={this.handleChange} name="text" id="text-input" type="text" />
        </label>
        <button onClick={() => this.clickChange()} type="button">Salvar</button> 
        {shouldAppear && <p>{inputState}</p>} 
      </section>
    );
  }
}

//Pegaremos as funções das actions
const mapDispatchToProps = (dispatch) => ({
  inputChange: (text) => dispatch(inputAction(text)),
});

//Pegamos o estado nos reducers
const mapStateToProps = (state) => ({
  inputState: state.inputreducer.text,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
