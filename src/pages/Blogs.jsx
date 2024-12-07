// src/pages/Blogs.js
// pages/Blogs.jsx
// import React from "react";

// const Blogs = () => {
//   return (
//     <div>
//       <h1>Blogs</h1>
//       <p>This is the blog page where you can share blog posts related to fitness.</p>
//     </div>
//   );
// };

// export default Blogs;


import React from 'react';
 import {Blog} from '../components/Blog';  // Assuming Blog is in the components folder

const Blogs = () => {
  const blogData = [
    {
      title: "How to Stay Fit",
      date: "November 28, 2024",
      text: "In this blog, we will discuss tips on how to stay fit during busy times. Lorem ipsum dolor sit amet...",
      image: "https://via.placeholder.com/600x200",
    },
    {
      title: "Top 5 Exercises for Beginners",
      date: "November 25, 2024",
      text: "Starting your fitness journey can be challenging. Here's a list of exercises for beginners...",
      image: "https://via.placeholder.com/600x200",
    },
  ];

  return (
    <div>
      {blogData.map((blog, index) => (
        <Blog
          key={index}
          title={blog.title}
          date={blog.date}
          text={blog.text}
          image={blog.image}
        />
      ))}
    </div>
  );
};

export default Blogs;




// const BlogWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   gap: 20px;
//   background-color: #f5f5f5;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const BlogHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
// `;

// const BlogTitle = styled.h2`
//   font-size: 24px;
//   font-weight: 600;
//   color: #333;
// `;

// const BlogDate = styled.p`
//   font-size: 16px;
//   color: #666;
// `;

// const BlogText = styled.p`
//   font-size: 18px;
//   line-height: 1.5;
//   color: #333;
// `;

// const BlogImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 10px;
// `;

// const Blog = ({ title, date, text, image }) => {
//   return (
//     <BlogWrapper>
//       <BlogHeader>
//         <BlogTitle>{title}</BlogTitle>
//         <BlogDate>{date}</BlogDate>
//       </BlogHeader>
//       <BlogText>{text}</BlogText>
//       {image && <BlogImage src={image} alt={title} />}
//     </BlogWrapper>
//   );
// };


