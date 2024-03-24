import React from 'react'
import { Menu1 } from './Menu1'
import { menu1 } from './ImagesAll'
import banner from '../images/bannerabout.webp'
import { Divtag } from './Divtag'

export const Menu = () => {
  return (
  <>
  <div id='menudiv' >
    <img src={banner} alt="error"  />
  </div>
  <div id='girid'>
{
menu1.map((ele,index)=>{
  let {img,contant}=ele
return <Menu1  img={img} h1={contant} key={index}/>
})
}
</div>
<div>
  <Divtag />
</div>
  </>
  )
}
