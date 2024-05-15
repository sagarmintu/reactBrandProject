import React from 'react';

const Hero = () => {
  return (
    <>
      <main className='hero container'>
        <div className="hero_content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className='hero_btn'>
                <button>Shop Now</button>
                <button className='secondary_btn'>Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand_icons">
                    <img src="/images/flipkart.png" alt="flipkart" />
                    <img src="/images/amazon.png" alt="amazon" />
                </div>
            </div>

        </div>
        <div className="hero_image">
            <img src="/images/shoe_image.png" alt="Shoe" />
        </div>
      </main>
    </>
  )
}

export default Hero;