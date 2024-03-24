import React from 'react'
import fourmenber from '../images/fourmenber.png'
import phone from '../images/phone_icon.svg'
import mail from '../images/mail_icon.svg'
import first from '../images/phoneandmail.svg'
import { Divtag } from './Divtag'
import one from '../images/one.svg'
import two from '../images/two.svg'
import three from '../images/three.svg'
import four from '../images/four.svg'
import five from '../images/five.svg'
import six from '../images/six.svg'
import video from '../images/franchise_playback.mp4'
import { Button } from './Button'

export const Franchise = () => {
  let styles={
    height:"700px",
    width:"1350px",
    marginRight:"100px",
    marginTop:"-20px"
  }
  let stle1={
    height:"700px",
    width:"1350px",
    backgroundColor:"rgb(240, 236, 236)"
  }
  return (
 <>
 <div style={stle1}>  
<video  src={video}  autoPlay muted loop style={styles}></video>
 </div>
<div id="franchiseh1">
  <h1>Franchise with knight bite</h1>
  <h3>get started with the modern way of doing business</h3>
  <Button ></Button>
</div>
<div id="backgroundcolorgray">
<div id="missin">
  <h1>Mission and Vision</h1>
  <br/>
  {
    ptag.map((ele,index)=>{
      let {p1,p2}=ele
      return <P p1={p1} p2={p2} key={index}/>
    })
  }
</div>
<hr id="hr"></hr>



{/* --six images */}
<div>
  <div>
<h1 id="heybenefite">Key Benefits Of Knight Bite Franchise</h1>
  </div>
  <div id="displygir">
    {
      paragraphn.map((ele,index)=>{
        let {img,h4,p}=ele
        return <ParaGraph  img={img} h4={h4} p={p} key={index}/>
      })
    }
  </div>
</div>
<br/><br/><br/>
<hr id="hr"></hr>

<br/>
<div>
  <img src={fourmenber} alt='error' style={{height:"900px",width:"1350px"}}></img>
  <div id="maindiviapp">
    <h2>Apply Here</h2>
    <p>Request for initial meeting</p>
  </div>
  <div id="buttonexport">
    <Button />
  </div>
</div>
<div id='margintophr'>
<hr id="hr"></hr>
</div>
<div id="imagparael">
  {imagageAndpara.map((ele,index)=>{
    let {img,p}=ele; 
    return <ImageAndPara img={img} p={p}  key={index}/>
  })
  }
</div>
</div>
<div id="fooooter">
<Divtag />
</div>
 </>
  )
}

let ptag=[
  {
p1:"Our Mission is to deliver the best food with the",
p2:" ultimate customer service."
  },
 
  {
p1:"Our Vision is to be the most favourite food chain brand in the",
p2:"country and world."
  }
]

let P=(props)=>{
  let {p1,p2}=props
  return (
    <>
    <div>
      <p>{p1}<br></br>{p2}</p>
      
     
    </div>
    </>
  )
}
let ParaGraph=(props)=>{
  let{img,h4,p}=props
  return(
    <>
    <div id="imgh4p">
      <img src={img} alt='error'></img>
      <h4>{h4}</h4>
      <p>{p}</p>
    </div>
    </>
  )
}

let paragraphn=[
  {
    img:one,
    h4:"LOW INVESTMENT",
    p:"No need of prime roadside location, interior decor. A office desk and any well hygenic kitchen space is enough."
  },
  {
    img:two,
    h4:"LOW MAINTAINANCE",
    p:"The hygiene, rent, staff and storage is the only maintenance the franchise would have to focus on."
  },
  {
    img:three,
    h4:"BASIC SKILLSET",
    p:"Anyone with basic training can step into the shoes of the staff. No serious training is required. Materials are sent."
  },
  {
    img:four,
    h4:"IN-HOUSE POS ",
    p:"POS will be provided to manage and track orders with ease. All the applications are interconnected to the POS. Moreover call centre customer support will also be provided."
  },
  {
    img:five,
    h4:"GOOD PROFIT MARGIN",
    p:"Establishment running cost is much lesser than traditional restaurant. You are in for a good profit margin."
  },
  {
    img:six,
    h4:"PANDEMIC FRIENDLY",
    p:"Knight Bite is the most successful business to run hassle-free even during the Pandemic. The faith in Knight Bite has taken a hit due to its high efficiency and extraordinary sustainability"
  }
]

let ImageAndPara=(props)=>{
  return(
    <>
    <div id="imagapapap">
      <img src={props.img} alt='error'></img>
      <p>{props.p}</p>
    </div>
    
    </>
  )
}
let imagageAndpara=[
{
  img:phone,
p:"Franchise Brochure"
},
{
  img:mail,
p:"08047192034"
},
{
  img:first,
p:"info@knight-bite.com"
}

]
  