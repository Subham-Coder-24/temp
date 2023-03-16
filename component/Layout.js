import React from 'react'
import Header from './Header'
import style from '../styles/Layout.module.css'
import LeftCaterory from './LeftCategory'
import RightNews from './RightNews'


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <div>
          <LeftCaterory />
        </div>
        <div>
          <main>
            {children}
          </main>
        </div>
        <div>
          <RightNews />
        </div>
      </div>
    </div>
  )
}

export default Layout