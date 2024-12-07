import React from 'react';
import styled from 'styled-components';

const BlogWrapper = styled.div`
  margin-bottom: 40px;
`;

const BlogHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const BlogTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`;

const BlogDate = styled.p`
  font-size: 16px;
  color: #666;
`;

const BlogText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #333;
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Blog = ({ title, date, text, image }) => {
  return (
    <BlogWrapper>
      <BlogHeader>
        <BlogTitle>{title}</BlogTitle>
        <BlogDate>{date}</BlogDate>
      </BlogHeader>
      <BlogText>{text}</BlogText>
      {image && <BlogImage src={image} alt={title} />}
    </BlogWrapper>
  );
};

export default Blog;




