import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class SearchInput extends Component {
  getCamelCase = stateList => ({
    stateCode: stateList.state_code,
    stateName: stateList.state_name,
  })

  render() {
    const {statesList} = this.props
    const {stateCode, stateName} = this.getCamelCase(statesList)
    return (
      <Link className="states-link" to={`/state/${stateCode}`}>
        <li className="states-container">
          <p className="state-name-1">{stateName}</p>
          <div className="state-code-container">
            <p className="state-code">{stateCode}</p>
            <img
              src="https://res.cloudinary.com/dqu21kv9o/image/upload/v1629179297/Line_jz6euo.png"
              alt="line"
              className="line-img"
            />
          </div>
        </li>
      </Link>
    )
  }
}

export default SearchInput
