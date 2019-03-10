import React, { Component } from 'react';
import Button from './components/Button/Button';
import Screen from './components/Screen/Screen'; 
import './App.css';
import './Calulator.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      currentNumber:"0",
      operatorFlag: false,
      decimalFlag:false
    }
    

  }

  handleClick = (buttonName) => {
    let currentNumber = this.state.currentNumber
    let operatorFlag = this.state.operatorFlag
    switch(true){
        case buttonName === "0" ||
             buttonName === "1" ||
             buttonName === "2" ||
             buttonName === "3" ||
             buttonName === "4" ||
             buttonName === "5" ||
             buttonName === "6" ||
             buttonName === "7" ||
             buttonName === "8" ||
             buttonName === "9" :
        if(this.state.currentNumber!=="0"){
        currentNumber += buttonName
        operatorFlag = false
        }else{
        currentNumber = buttonName
        }
        break
        case buttonName === "+" ||
             buttonName === "-" ||
             buttonName === "*" ||
             buttonName === "/" :
        if(!this.state.operatorFlag){
          currentNumber += buttonName
          operatorFlag = true
          this.setState({decimalFlag:false})
        }else{
          const newNumber = currentNumber.slice(0,currentNumber.length-1)
          currentNumber = newNumber
          currentNumber += buttonName
        }
        break
        case buttonName === "C":
          currentNumber = "0"
          operatorFlag = false
          this.setState({decimalFlag:false})
        break
        case buttonName === "=":
          currentNumber = eval(currentNumber)
          operatorFlag = false
          this.setState({decimalFlag:true})
        break
        case buttonName === ".":
          if(!this.state.decimalFlag){
            currentNumber += "."
            this.setState({decimalFlag:true})
          }
    }
    this.setState({operatorFlag})
    this.setState({currentNumber})
  } 
  


  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <div id="calcGrid">
        <Screen id="display" currentNumber={this.state.currentNumber}/>
        <Button id="clear" handleClick={this.handleClick} name="C"/>
        <Button id="add" handleClick={this.handleClick} name="+"/>
        <Button id="subtract" handleClick={this.handleClick} name="-"/>
        <Button id="multiply" handleClick={this.handleClick} name="*"/>
        <Button id="divide" handleClick={this.handleClick} name="/"/>
        <Button id="equals" handleClick={this.handleClick} name="="/>
        <Button id="decimal" handleClick={this.handleClick} name="."/>
        <Button id="zero" handleClick={this.handleClick} name="0"/>
        <Button id="one" handleClick={this.handleClick} name="1"/>
        <Button id="two" handleClick={this.handleClick} name="2"/>
        <Button id="three" handleClick={this.handleClick} name="3"/>
        <Button id="four" handleClick={this.handleClick} name="4"/>
        <Button id="five" handleClick={this.handleClick} name="5"/>
        <Button id="six" handleClick={this.handleClick} name="6"/>
        <Button id="seven" handleClick={this.handleClick} name="7"/>
        <Button id="eight" handleClick={this.handleClick} name="8"/>
        <Button id="nine" handleClick={this.handleClick} name="9"/>
        </div>
      </div>
    );
  }
}

export default App;
