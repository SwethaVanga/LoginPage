import React from 'react'
import style from '../styles/index.module.css'


export const Logout = ({setIsAuthenticated}) => {
  

  const logOut = () => {
			
    setIsAuthenticated(false)

  }

  return (
    <div className={style.page}>
      <div className={style.page__inner}>
        <span className={style.title}>Welcome user!</span>
        <div>
          <button className={style.button} type="submit" onClick={logOut}>Logout</button>
        </div>
      </div>
    </div>
  )
}