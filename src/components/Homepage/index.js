import React from 'react'
import Banner from './Banner'
import Menu from './Menu'
import Header from './Header'

const HomePage = ({data}) => {
  return (
    <div>
      <Header />
      <Banner />
      <Menu data={data}/>
    </div>
  )
}

export default HomePage