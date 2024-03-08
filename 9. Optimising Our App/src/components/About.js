import React from 'react';

const About = () => {
  return (
    <div className='about-card'>
    <div  className="card-hover">
      <div className="card-hover__content">
        <h3 className="card-hover__title">
          Make your <span>choice</span> right now!
        </h3>
        <p className="card-hover__text">Full Stack Biryani delivers authentic Bengali biryani to your doorstep, operating seamlessly across all locations. Enjoy the rich flavors of Bengal with our convenient food delivery service</p>
        <a href="https://github.com/yourSrijit" target='_blank' className="card-hover__link">
          <span> My Github </span>
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>        
        </a>
      </div>
      <div className="card-hover__extra">
        <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
      </div>
      <img src="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60" alt="" />
    </div>
    </div>
  );
}

export default About;
