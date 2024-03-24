

import React from 'react'
import plus from '../images/add-icon.svg'
export const Menu1 = (props) => {
  let{img,h1}=props
  return (
<>
<div id='gridinside'>
    <img src={img} alt='error' id='img111'></img>
    <h3>{h1}</h3>
    <img src={plus} alt='error' id='img112'></img>  
</div>

</>
  )
}
