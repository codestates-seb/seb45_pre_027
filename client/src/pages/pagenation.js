import React from 'react';
import styled from 'styled-components';

const PaginationButton = styled.div`
  padding-left: 24px;
  margin: 20px 0;

  a {
    height: 27px;
    padding: 0 8px;
    background-color: #fff;
    border: 1px solid #d6d9dc;
    border-radius: 3px;
    color: #3b4045;
    margin-right: 4px;

    span {
      font-size: 13px;
    }

    &:active {
      background-color: #f48225;
      color: #fff;
    }
  }

  .active {
    background-color: #f48225;
    color: #fff;
  }
`;

const Pagination = ({ page, totalPages }) => {
  const search = window.location.search;

  const arrayTotalPages = [];
  for (let i = 1; i <= totalPages; ++i) {
    arrayTotalPages.push(i);
  }

  return (
    <PaginationButton>
      <a href={page === 1 ? `/questions` : `/questions?page=${page - 1}`}>
        <span>Prev</span>
      </a>
      {arrayTotalPages.map((el, idx) => {
        return (
          <a
            key={idx}
            href={`/questions?page=${el}`}
            className={search === `?page=${el}` ? 'active' : ''}
          >
            <span>{el}</span>
          </a>
        );
      })}
      <a
        href={
          page === arrayTotalPages[arrayTotalPages.length - 1]
            ? `/questions?page=${arrayTotalPages[arrayTotalPages.length - 1]}`
            : `/questions?page=${page + 1}`
        }
      >
        <span>Next</span>
      </a>
    </PaginationButton>
  );
};

export default Pagination;
