import React from 'react'
import Login from './Login'
import Browse from './Browse'
import Header from './Header'

const Body = () => {
  return (
    <div style={{backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg")`}}>
        <Header/>
      <Login />
      <Browse />
    </div>
  )
}

export default Body
