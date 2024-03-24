import React from 'react'
import {Divtag} from './Divtag'
import twoone from '../images/brand_logo-1_footer.svg'
import twotwos from '../images/kb_footer.png' 
import {SocialMedia} from './SocialMedia'
import phone from '../images/phone_icon.svg'
import mail from '../images/mail_icon.svg'
import banner2 from '../images/banneer2.webp'
import bugar from '../images/bugar.svg'
import img1 from '../images/img1.svg'
import img2 from '../images/img2.svg'
import img3 from '../images/img3.svg'
import img4 from '../images/img4.svg'
import img5  from '../images/img5.svg'
import banner1 from '../images/man.webp'
import appstore from '../images/appstore.svg'
import playstore from '../images/googleplaystore.svg'
import video  from '../images/video.svg'
export const Home = () => {
  let style={
    height:"800px",
    width:"1350px"
  }
  let obj1={
    top:"300px",
    marginTop:"50px",
    marginLeft:"200px",
    position:"absolute",
    wordSpacing:"30px",
    color:"white",
    textShadow:"0px 0px 5px white",
    fontWeight: "bolder",
    fontSize:"53px"
  }
  let obj2={
    top:"1700px",
    marginTop:"50px",
    marginLeft:"100px",
    position:"absolute",
    wordSpacing:"30px",
    color:"white",
    textShadow:"0px 0px 5px white",
    fontWeight: "bolder",
    fontSize:"63px"
  }
  return (
   <>
<div>
  <img src={bugar} alt='eroor' id='imghome'></img>
  <div id='divarres'>
  <h1 id='clickaway'>DELICIOUSNESS, ONE CLICK AWAY!</h1>
  <div id='order'>
  <button id='onweb'>Order on web</button>
  <h2 id='orrrr'>or</h2>
  <div id='onemebb'>
    {images.map((ele,index)=>{
      return <Button imag={ele} key={index} />
    })}
  </div>
  </div>
  </div>
</div>

<div id='divtagggg'>
  <h1>Features</h1>
 <div id='displayimgcon'>

  {imagescontact.map((ele,index)=>{
    let {img,p1,p2}=ele
    return <ImageAndContant img={img} p1={p1} p2={p2} key={index}  obj1={obj1}/>
  })}
 </div>
<div id='bannerimg'>
{
  twoImages.map((ele,index)=>{
    let {img,h1}=ele
    return <Twoimages img={img} h1={h1}  key={index} obj1={obj1}  color={style} />
  })
}
</div>
<div>
  {
    twoImages1.map((ele,index)=>{
      let{img,h1} =ele
      return <Twoimages img={img} h1={h1} key={index} obj1={obj2}  color={style}/>

    })
  }
</div>
<div>
  <button id="seefull">See Full Menu</button>
</div>
<div id="contactus">
  <h1>Connect with us</h1>
  <div id="threecontactdiv">
    <div>
      <h3>Contact us</h3>
      <br/>
      <div id="flexcontact">
 {mailAndphone.map((ele,index)=>{
  let {img,p}=ele
  return <MailAndPhone img={img} p={p} key={index}/>
 })}
      </div>
    </div>
    <div>
      <h3>Quick Links</h3>
      <br/>
      <ul>
   
  {/* //  #FF5672 */}

  {
   liarray.map((ele,index)=>{
    let {li}=ele
    return ele.boolean? <Li  li={li} style={{color:"#FF5672"}} key={index}/>:<Li  li={li}  style={{color:"black"}} key={index}/>
   })
  }
      </ul>
    </div>
    <div>
{
  parray.map((ele,index)=>{
    return <P p1={ele.p1} key={index}/>
  })
}

<br/>
<input name='input' type='text' placeholder='Enter your address' id='input'></input>
<video src={video}></video>
    </div>
  </div>
</div>
{/* other div */}
<div id="headoffie">

  <div id="innerhead">
    <h2>Head Office</h2>
    <br/>
    {
  contantsdown1.map((ele,index)=>{
return <P p1={ele.p1} key={index}/>
  })
}
  </div>
  <div id="location">
<h2 >Locations</h2>
<br/>
{
  contantsdown2.map((ele,index)=>{
return <P p1={ele.p1} key={index}/>
  })
}
  </div>
  <div>
<h2>Follow us</h2>
<br/>
<SocialMedia />
  </div>
</div>
{/* footer two images */}
<div id="centertwo">
  {twoImagess.map((ele,index)=>{
    return <Imagesssss src={ele} key={index}/>
  })}

</div>
<br/>
{/* foooter */}
<Divtag />


</div>
   </>
  )
}
let twoImagess=[twoone,twotwos];
let Imagesssss=(props)=>{
  return(
    <>
    <img src={props.src} alt='error' style={{height:"60px" ,width:'60px'}} ></img>
    
    </>
  )
}

let mailAndphone=[
{
  img:phone,
  p:"info@knight-bite.com "
},{
  img:mail,
  p:"+91 8047106107" 
}
]

let MailAndPhone=(props)=>{
let {img,p}=props
  return(
    <div id="mailphoneflex">
      <img src={img} alt='error'></img>
      <p>{p}</p>
    </div>
  )
}





let liarray=[
  {
 li:"Delivery Policies",
 boolean:true
  },
  {
li:"Privacy Policies",
boolean:true
  },{
li:"Careers (Coming soon)",
boolean:false
  },
  {
li:"Franchise",
boolean:true
  }

]
let Li=(props)=>{

  return(
    <>
    <li style={props.style}>{props.li}</li>
    </>
  )
}
let parray=[
 {
  p1:"Enter your email address below to be the first to know everything about us,"
 },
{
  p1:"where we’ll be next, and how you can come along!"
},
{
  p1:'Join us on our adventure.'
}
 
]

let contantsdown1=[

  {
    p1:"1st Floor, No 20-1-7/10, Regal Square Azizuddin Road, Bunder Mangalore, Bunder, Mangaluru, Dakshina Kannada, Karnataka, 575001"
  }
  
]

let contantsdown2=[

  {
    p1:".Bengaluru, Mangalore, Mysuru, Hyderabad, Hubli, Manipal, Udupi"
  }
  
]
let P=(props)=>{
  return(
    <>
    <p>{props.p1}</p>
    </>
  )
}

//'nicotineregular'
let twoImages=[
 {
  img:banner1,
  h1:"ENJOY FOOD, ENJOY LIFE"
 }
]
let twoImages1=[
  {
   img:banner2,
   h1:"BURGER, FRIES, SHAKES AND MANY MORE "
  }
 ]
let Twoimages=(props)=>{
  return(
    <div>
       <h1 id="props" style={props.obj1}>{props.h1}</h1>
       <img src={props.img} alt='error' style={props.color}></img>
 
    </div>
  )
}

let images =[appstore,playstore]
let Button=(props)=>{
  return(
    <button id='btnimgss'><img src={props.imag} alt='error'></img></button>
  )
}




let ImageAndContant=(props)=>{
  let {img,p1,p2}=props
  return(
    <>
    <div>
      <img src={img} alt='error'></img>
      <p>&nbsp;&nbsp;{p1}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{p2}</p>
     
    </div>
    </>
  )
}

let imagescontact=[
  {
img:img1,
p1:"Late Night Delivery",
p2:"Till 4 Am"

  },
  {
    img:img2,
    p1:"Order On App Or",
p2:"Call 080-471"
  },
  {
    img:img3,
    p1:"Delivery Within 40",
p2:"Mins"
  },
  {
    img:img4,
    p1:"Food For Every Kind",
p2:"Of Hunger"
  },
  {
    img:img5,
    p1:"Place Bulk Orders",
p2:"Through App"
  }
]