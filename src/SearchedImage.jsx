import React from 'react'
import "./SearchedImage.css";

export default function SearchedImage({image}, {key}) {
    console.log("imagedd:" + {image});
  return (
    <div className='imageItem'>
      <img src={image.urls.small} alt={image.alt_description}></img>
    </div>
  )
}
