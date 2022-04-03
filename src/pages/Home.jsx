import React, { useState } from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(1)
  return (
    <div>
      <div>Home Content</div>
      {sum === 2 ? <Navigate to='/about' /> : <h4>当前sum值为：{sum}</h4>}
      <button onClick={() => setSum(2)}>点我将sum变成2</button>
      <div>
        <NavLink to={'news'}>News</NavLink><br />
        <NavLink to={'messages'}>Messages</NavLink>

      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
