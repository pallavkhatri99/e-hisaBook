import React, { useEffect, useState } from 'react';
import SilderBox from '../component/silderBox';
import '../../style/review.css'

const reviews = [
  {
    userName: "Alice Smith",
    comment:"Best APP",
    review: "I had an excellent experience with this company. Their customer service was top-notch, and the product I ordered exceeded my expectations. The delivery was prompt, and the packaging was secure. I appreciate the attention to detail in every aspect of my purchase.\n\nThe product itself is of exceptional quality. It's durable, well-crafted, and has improved my daily life significantly. I would recommend this company and their products without hesitation. The value for money is remarkable, and I'm looking forward to making future purchases from them. Overall, it was a delightful experience!",
    location: "Delhi NCR",
    img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    userName: "Bob son",
    comment:"More Useful",
    review: "I'm thoroughly impressed with the product I received from this company. From the moment I placed my order to the delivery, everything was smooth and efficient. The product's quality is outstanding, and it has greatly enhanced my daily routine. It's clear that the company prioritizes customer satisfaction and product excellence.\n\nThe attention to detail in the design and functionality of the product is remarkable. It's clear that the company takes pride in delivering top-notch items to their customers. I would highly recommend their products to anyone seeking quality and value. The entire experience has been a pleasure!",
    location: "Pune, Maharashtra",
    img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    userName: "Emily Dea",
    comment:"Excellent product",
    review: "I can't say enough good things about this company's customer support. When I encountered an issue with my order, their team went above and beyond to assist me. They were attentive, responsive, and genuinely cared about resolving my concern.\n\nThis level of customer service is a rarity these days, and it's a breath of fresh air. They not only addressed my issue promptly but also followed up to ensure my satisfaction. I'm incredibly grateful for their dedication to customer happiness. I will definitely continue to support this company and recommend them to others who value exceptional customer support.",
    location: "Bihar",
    img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    userName: "Max Son",
    comment:"I love the UI",
    review: "I was in a hurry to get a product, and this company's fast and efficient service was a lifesaver. They processed my order swiftly and ensured that it was delivered in record time. I couldn't be happier with their speed and reliability.\n\nThe product itself is of high quality and performs exceptionally well. It met and exceeded my expectations. I'm impressed not only by the product but also by the company's commitment to quick and reliable service. I'll certainly be a returning customer and recommend their products and service to others.",
    location: "Bengaluru, Karnataka",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYoO6pdtZmvde7jV54ofxet9eOwPot1U3OA&usqp=CAU"
  },
  {
    userName: "Sarah Brown",
    comment:"Easy to use and customize",
    review: "This product is everything I was looking for. Its quality, functionality, and design are impeccable. It has made a significant difference in my daily life, and I couldn't be happier with my purchase. The company's attention to detail and commitment to excellence is evident in every aspect of this product.\n\nThe value for money is outstanding. It's a purchase I would make again without hesitation. I appreciate the company's dedication to delivering top-tier products to its customers. I'm thoroughly satisfied with my experience, and I look forward to future purchases from this company.",
    location: "Jaipur,Rajasthan",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU"
  }

]

function Review() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % reviews.length);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % reviews.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + reviews.length) % reviews.length);
  };
  return (
    <div className='section-review'>
        <div className="container-review">
            <h1>Let’s &nbsp;&nbsp;hear&nbsp;&nbsp; it &nbsp;&nbsp;out &nbsp;&nbsp;from&nbsp;&nbsp; our &nbsp;&nbsp;customers</h1>
        </div>
        <div className="client-msg">
          <div className="wrap-container">
            <SilderBox item={reviews[currentSlide]} /> 
          </div>
          <div className="btn-box left">
            <span onClick={goToPreviousSlide} className="btn btn-white btn- animate">&#8678;</span>
          </div>
          <div className="btn-box right">
            <span onClick={goToNextSlide} className="btn btn-white btn- animate">&#8680;</span>
          </div>
        </div>
    </div>
  )
}

export default Review;