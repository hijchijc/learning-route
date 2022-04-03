import React from 'react'
import './App.css'
import { NavLink, useRoutes} from 'react-router-dom'
import routes from './routes'

export default function App() {
  const element = useRoutes(routes)

  return (
    <div>
      <h1>App</h1>
      <NavLink className='list-group-item' to='/about'>About</NavLink><br />
      <NavLink className='list-group-item' to='/home'>Home</NavLink>
      <div className='content'>
      {element}
      </div>

    </div>
  )
}
