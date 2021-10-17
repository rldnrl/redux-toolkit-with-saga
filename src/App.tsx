import { Switch, Route, Link } from 'react-router-dom'
import PostsPage from './pages/PostsPage'
import EmployeesPage from './pages/EmployeesPage'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/employees">
          <EmployeesPage />
        </Route>
        <Route exact path="/posts">
          <PostsPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
