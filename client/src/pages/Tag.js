import React from 'react';
import styled from 'styled-components';

const TagWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;

  a {
    font-size: 12px;
    background-color: #e1ecf4;
    color: #39749d;
    padding: 4.8px 6px;
    margin: 0 2px 2px 0;
    border-radius: 3px;
  }
`;

const Tags = ({ questionTags }) => {
  return (
    <TagWrapper>
      {questionTags.map((el, idx) => {
        return (
          <a key={idx} href="/tags">
            {el.name}
          </a>
        );
      })}
    </TagWrapper>
  );
};

export default Tags;
