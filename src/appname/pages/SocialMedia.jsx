import React from 'react'
import insta from '../images/insta.svg'
import facebook from '../images/facebook.svg'
import lindin from '../images/linkdin.svg'
import youtube from '../images/youtube.svg'
export const SocialMedia = () => {
  return (
    <>
    {social.map((ele,index)=>{
        return <Social img={ele} key={index}  style={{paddingRight:"30px",marginRight:"10px"}}/>

    })}
   
    </>
  )
}
let social=[insta,facebook,lindin,youtube]
let Social =(props)=>{
return(
    <>
        <img src={props.img} style={props.style} id='hoverrrr' alt='error'></img>
    
    </>
)
}

