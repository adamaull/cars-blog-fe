import React, { useState, useEffect } from 'react';
import Links from './Links';


export default function AddCar() {
    const [imgUrl, setImgUrl] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [blogpost, setBlogPost] = useState("");
    const [price, setPrice] = useState();
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://cars-back-cap.herokuapp.com/car/add', {
           method: 'POST',
           body: JSON.stringify({
                imgUrl: imgUrl,
                make: make,
                model: model,
                blogpost: blogpost,
                price: price,
           }),
           headers: {
              'content-type': 'application/json',
           },
        })
           .then((res) => res.json())
           .then((res) => {
                setImgUrl("");
                setMake("");
                setModel("");
                setBlogPost("");
                setPrice("");
                setMessage("Your car post was added!");
           })
           .catch((err) => {
              console.log(err.message);
           });
     };

    return (
      <div>
        <div className='header-wrapper'>
            <Links />
        </div>

        <div className='text-box-wrapper'>
         <form onSubmit={handleSubmit}>
            <div className='imgUrl'>
               <input
               id="imgUrl"
               type="text"
               value={imgUrl}
               placeholder="Image Url"
               onChange={(e) => setImgUrl(e.target.value)}
               />
            </div>

            <div className='make'>
               <input
               id="make"
               type="text"
               value={make}
               placeholder="make"
               onChange={(e) => setMake(e.target.value)}
               />
            </div>

            <div className='model'>
               <input
               id="model"
               type="text"
               value={model}
               placeholder="Model"
               onChange={(e) => setModel(e.target.value)}
               />
            </div>

            <div className='price'>
               <input
               id="price"
               type="text"
               value={price}
               placeholder="Price"
               onChange={(e) => setPrice(e.target.value)}
               />
            </div>

            <div className='blogPost'>
               <textarea 
                  id="blogPost" 
                  name="blogPost" 
                  rows="4" 
                  cols="50"
                  value={blogpost}
                  placeholder="Blog Post"
                  maxLength="120"
                  onChange={(e) => setBlogPost(e.target.value)}
               >
               Blog Post
               </textarea>
               {/* <input
               id='blogPost'
               type="text"
               value={blogpost}
               placeholder="Blog Post"
               maxLength="120"
               onChange={(e) => setBlogPost(e.target.value)}
               /> */}
            </div>

               <button type="submit">Create Post</button>

               <div className="message">{message ? <p>{message}</p> : null}</div>
         </form>
        </div>
        </div>
  );
}