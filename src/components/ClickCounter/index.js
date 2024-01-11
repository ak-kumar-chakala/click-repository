// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="head">
          The Button has been clicked{' '}
          <span className="span-element"> {count}</span> times
        </h1>
        <p className="para">Click the button to increase the count</p>
        <button type="button" className="button" onClick={this.increaseCount}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
