import React from 'react';

const About = () => {
    return (
        <div>
           <div className='d-flex justify-content-center align-items-center'>
           <img className='rounded-circle w-50 p-4'   src="https://media.istockphoto.com/photos/woman-and-grandfather-are-walking-jogging-on-the-street-at-the-park-picture-id1289036691" alt="" />
           <div className='p-4'>
               <h1>We make People Happy</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, porro nisi aliquam quas esse praesentium soluta eligendi ipsa voluptatem molestias? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor placeat soluta dolores nisi delectus dicta modi, sint saepe quia accusamus odio? Maiores eaque ducimus vel quo voluptates, quam expedita non!</p>
           </div>
           </div>
           <div class="container">
           <h1 className="text-center text-danger fw-bolder my-5  shade">Gallery</h1>
  <div class="row g-2 p-2">
    <div class="col-sm-8"><img className='img-fluid' src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" /></div>
    <div class="col-sm-4"><img className='img-fluid' width='90%' src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWJvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" /></div>
  </div>
  <div class="row g-3 p-2">
    <div class="col-sm"><img className='img-fluid' src="https://media.istockphoto.com/photos/mixed-race-mother-snuggling-newborn-after-delivery-picture-id1312387589?s=612x612" alt="" /></div>
    <div class="col-sm"><img className='img-fluid' src="https://media.istockphoto.com/photos/black-ethnicity-female-professional-business-woman-picture-id1322825405?s=612x612" alt="" /></div>
    <div class="col-sm"><img className='img-fluid' src="https://media.istockphoto.com/photos/bed-in-hallway-the-concept-of-working-stressful-environment-picture-id1227177907?s=612x612" alt="" /></div>
  </div>
</div>

        </div>
    );
};

export default About;