import React from 'react'
interface image{
    id: number;
    url: string;

}
const ImageGallery = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const image: image[] = await res.json();
  return (
    <div>
        <h3>Image Gallery</h3>
      <ul>
        {image.map(image => <li key={image.id}>{image.url}</li>)}
      </ul>


    </div>
  )
}

export default ImageGallery