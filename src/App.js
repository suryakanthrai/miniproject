import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import About from './components/About'
import Eachstatecoviddetails from './components/Eachstatecoviddetails'
import Notfound from './components/Notfound'
import './App.css'

const App = () => (
  <div className="app-body">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/state/:id" component={Eachstatecoviddetails} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  </div>
)
export default App
