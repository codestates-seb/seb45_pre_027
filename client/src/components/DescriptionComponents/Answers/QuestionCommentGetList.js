// import { useState, useEffect } from 'react';

// export const QuestionCommentGetList = () => {
//   const [data, setData] = useState({}); // 초기값을 빈 객체로

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_SERVER_URL}/board?page=1&size=10`, {
//       method: 'get',
//       headers: new Headers({
//         'ngrok-skip-browser-warning': '69420',
//       }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((response) => {
//         setData(response.data); // API 응답의 'data' 필드를 상태에 저장
//       })
//       .catch((error) => {
//         console.error(
//           'There was a problem with the fetch operation:',
//           error.message,
//         );
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Blog List</h2>
//       <ul>
//         {Object.values(data).map(
//           (
//             data,
//             index, // 객체의 값을 순회하며 각 게시물을 표시
//           ) => (
//             <li key={index}>
//               <h3>{data?.title}</h3>
//               <p>{data?.content}</p>
//             </li>
//           ),
//         )}
//       </ul>
//     </div>
//   );
// };
