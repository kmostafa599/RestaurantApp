import React from 'react'
import Banner from './Banner'
import Menu from './Menu'
import Header from './Header'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const data = useSelector(state=>state)
  console.log(data)
  return (
    <div>
      <Header />
      <Banner />
      <Menu data={data}/>
    </div>
  )
}

export default HomePage