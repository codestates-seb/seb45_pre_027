// //답변 영역 내용이 담겨있는 컴포넌트

// import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import { QuestionCommentGet } from './QuestionCommentGet';
// import BoardList from './Test';

// // 스타일 컴포넌트 (스타일을 원하면 추가/수정할 수 있습니다)
// const ContentContainer = styled.div`
//   overflow-y: auto;
//   height: min-content;
//   background-color: red;
//   // 예시 높이입니다. 원하는 대로 조절 가능합니다.
// `;

// const ContainerText = styled.div`
//   overflow-y: auto;
//   height: min-content;
//   margin-top: 2rem;
// `;

// const AnswerContent = () => {
//   const [data, setData] = useState([]);
//   const loader = useRef(null);
//   console.log(data?.data?.content);
//   console.log(data?.data);
//   // console.let(data?.boardId);

//   // 데이터를 불러오는 함수
//   const loadMore = () => {
//     console.log('loadMore');
//     // 답변 Url 적용 하기
//     fetch(`${process.env.REACT_APP_SERVER_URL}board?page=1&size=10`, {
//       method: 'get',
//       headers: new Headers({
//         'ngrok-skip-browser-warning': '69420',
//       }),
//     })
//       // .then((response) => response.json(console.log()))
//       .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((newData) => {
//         console.log(newData);
//         setData((prevData) => newData);
//       });
//   };

//   useEffect(() => {
//     // IntersectionObserver를 사용하여 무한 스크롤 구현
//     var options = {
//       root: null,
//       rootMargin: '20px',
//       threshold: 1.0,
//     };

//     loadMore();

//     const observer = new IntersectionObserver(handleObserver, options);
//     if (loader.current) {
//       observer.observe(loader.current);
//     }

//     return () => observer.disconnect(); // 컴포넌트가 언마운트될 때 observer 연결 해제
//   }, []); //의존성 배열

//   const handleObserver = (entities) => {
//     const target = entities[0];
//     if (target.isIntersecting) {
//       loadMore();
//     }
//   };

//   return (
//     <QuestionCommentGet>
//       <ContentContainer>
//         <BoardList />
//         {/* <div ref={loader}>로딩...</div>
//         {data?.data?.title}
//         <ContainerText>{data?.data?.content}</ContainerText> */}
//       </ContentContainer>
//     </QuestionCommentGet>
//   );
// };

// export default AnswerContent;
