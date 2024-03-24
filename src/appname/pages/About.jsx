import React from 'react'
import buggar from '../images/piza.webp'
import image from '../images/6images.webp'
import imag from '../images/phn.webp'
import about from '../images/about.webp'                        
import {Divtag} from './Divtag'
import { SocialMedia } from './SocialMedia'
export const About = () => {
  let obj={
    paddingTop:"150px"
  }
  return (
   <>
<div>
  <div>
    <img src={about} alt='error' className='abutiimg'></img>
  </div>
  <div id="paradiv">
<h1>KNIGHT BITE IS A CLOUD KITCHEN WHICH DELIVERS FOOD TO THE NOCTURNALS GIVING EQUAL EMPHASIS ON FOOD, TECHNOLOGY AND LOGISTICS.</h1>
  </div>
</div>
<div id='fulldiv'>

<div id="imagandpara">
  {
   imagepara.map((ele,index)=>{
    let {img,contant}=ele
    return <ImagePara  img={img} contant={contant} key={index}  style={{height:"120px",width:"380px",marginTop:"20px"}}/>
   }) 
  }
</div>
<div id="secondpara">
{
  paraImage.map((ele,index)=>{
    let{p1,p2,img} =ele;

return <ContantImage key={index} p1={p1} p2={p2} img={img}/>
  })
}
</div>
<div id="buggarpara">
{
  imagepara1.map((ele,index)=>{
    let {img,contant}=ele
    return <ImagePara   img={img} contant={contant} key={index} style={{height:"400px",width:"500px",marginTop:"20px"}}  obj={obj}/>
  })

}
</div>
   <div id="locationimages">
<div>
  <h1>Locations</h1>
  <br/>
  {
locImage.map((ele,index)=>{
       let{h1} =ele
 return  <Location h1={h1} key={index}/>
})
    
  }

</div>
<div>
<h1 id="us">Follow us</h1>
<br/>
  <div>
    <SocialMedia />
  </div>
</div>
    </div>
    {/* footer */}
    <Divtag  style={{marginTop:"350px"}}/>
</div>
   </>
  )
}




let imagepara=[

  {
    img:image,
    contant:"Knight Bite started with the idea to serve all the hungry nocturnals who find it really difficult to order late night muchies. KB brought together late night eaters and helped them order delicious meals at their convenience via Knight Bite App and call "
  }
]
let imagepara1=[

  {
    img:buggar,
    contant:"Going forward, our aim is to help and bring smiles in many more faces and cover many more cities across India and around the world."
  }
]

let ImagePara =(props)=>{
return(
  <>
<div id="maindivco">
  <div>
  <img src={props.img} style={props.style} alt="eeror"></img>
  </div>
  <div id="divtagpara">
  <p style={props.obj}>{props.contant}</p>
  </div>
</div>

  </>
)
}

let paraImage=[

  {
  p1:"Knight Bite is one such concept which was highly successful in adapting to the emerging market.",

  p2:"Biters (customers), accepted and loved the KB app that made the ordering process much more easier. In two weeks of the release of the app, it was trending on top food apps and was downloaded by more than 5000 users across Mangalore and Manipal.  ",
  img:imag
  }
]

let  ContantImage=(props)=>{
  let{img,p1,p2}=props
return(
  <>

  <div id="displayinne">
    <div id="pararas">
<p>{p1}</p>
<br/>
<p>{p2}</p>
    </div>
    <div>
      <img src={img} alt='error'></img>
    </div>
  </div>
  </>
)
}

let locImage=[
{
  h1:"Bengaluru Hours :"
},
{
  h1:"Mangalore Hours :"
},
{
  h1:"Mysuru Hours :"
},
{
  h1:"Hyderabad Hours:"
},
{
  h1:"Hubli Hours :"
},
{
  h1:"Manipal Hours :"
}

]
let Location=(props)=>{
  return(
    <>
    <div id="h4andp"><h4>{props.h1}</h4><p>&nbsp;&nbsp;&nbsp;&nbsp;7:00 pm - 4:00 am</p></div>
    </>
  )
}

