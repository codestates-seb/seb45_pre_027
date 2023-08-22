import SideBar from "../components/SideBar";
import { styled } from "styled-components";
import TextEditor from "../components/Cqsection/webeditor";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import { patchQuestionToServer } from "../components/Cqsection/Editpatch";
import { useNavigate } from "react-router-dom";

const SaveEditBtn = styled.button`
width: 80px;
height: 40px;
margin-right: 10px;
border:none;
background-color: rgba(10, 149, 255, 1);
color: white;
border-radius: 7px;
&:hover {
  background-color: rgba(0, 109, 205, 1);
}
`;

const CancelBtn = styled.button`
width: 80px;
height: 40px;
border:none;
background-color: white;
color: rgba(10, 149, 255, 1);
border-radius: 7px;
&:hover {
  background-color: rgba(10, 149, 255, 0.1);
}
`;

const RightSideBar = styled.div`
display:flex;
.right-sidebar{
  border: 1px solid #DDB422;
  background-color: #FDF7E2;
  border-radius: 7px;
  width: 350px;
  height: 200px;
  margin-top: 20px;
> h4 {
            font-size: 16px;
            margin-bottom: 8px;
            background-color: #F1E5BC;
            height:40px;
            padding: 13px;
          }
          > ul {
            margin: 0;
            padding-left: 15px;
            > li {
              font-size: 14px;
              margin: 10px;
              line-height: 1.3;
              list-style-type: disc;
              list-style-position: inside;
            }
          }
        }
`;

const Maincontent = styled.main`
display:flex;
flex-direction: row;

.checkbox-text {
  display:flex;
  margin: 5px 5px 30px 5px;
  font-size: 14px;
  font-weight: normal;
  >p {
    margin: 5px;
  }
}

.edit-input {
  display:flex;
  flex-direction: column;
}
.edit-plan {
  border: 1px solid #DDB422;
  background-color: #FDF7E2;
  width: 650px;
  height: 110px;
  padding: 16px;
  border-radius: 7px;
  margin: 20px 20px 0px 20px;
  font-size: 14px;
  >p {
    margin-bottom: 10px;
  }
}
`;

const EditInputSection = styled.section`
margin: 20px;
>div{
  margin: 5px;
  font-weight: bold;
}
>input{
    width: 650px;
    height: 30px;
    margin-bottom: 15px;
  }
  .checkbox-size {
    width: 15px;
    margin-left: 10px;
  }
`;

const QuestionEdit = ({ borderId }) => {

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };


  useEffect(() => {
    fetch(`https://bba2-183-102-170-103.ngrok-free.app/board/1`, {
      method: 'get',
      headers: new Headers({
        'ngrok-skip-browser-warning': '69420',
      }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      return response.json();
    })
    .then((data) => {
      setTitle(data?.data?.title);
      setContent(data?.data?.content);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, [borderId]);

  const handlePatchRequest = async () => {
    try {
      const updatedData = {
        title: title,
        content: content,
      };

      const response = await patchQuestionToServer(borderId, updatedData);

      if (response) {
        navigate('/question-description');
      } 
      console.log('successful:', response);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleCancel = () => {
    navigate('/question-description');
  };

  return (
   <>
   <Header />
   <RightSideBar>
   <Maincontent>
   <SideBar className="LeftSideBar"/>
   <main className="edit-input">
    <div className="edit-plan">
      <p>Your edit will be placed in a queue until it is peer reviewed.</p>
      <div>We welcome edits that make the post easier to understand and more valuable for readers. Because community members review edits, please try to make the post substantially better than how you found it, for example, by fixing grammar or adding additional resources and hyperlinks.</div>
    </div>
    <EditInputSection>
    <div>Title</div>
    <input value={title} onChange={(e) => setTitle(e.target.value)} />
    <div>Body</div>
    <TextEditor value={content} onChange={handleEditorChange} />
    <div>Tags</div>
    <input></input>
    <div>Edit Summary</div>
    <input placeholder="briefly explain your changes(corrected spelling, fixed grammar, improved formatting"></input>
    <div>Submit for review</div>
    <div className="checkbox-text">
    <input className="checkbox-size" type="checkbox"></input>
    <p>This edit resolves the original close reason and the question should be considered for reopening.</p>
    </div>
    <SaveEditBtn onClick={handlePatchRequest}>Save edits</SaveEditBtn>
    <CancelBtn onClick={handleCancel}>Cancel</CancelBtn>
    </EditInputSection>
    </main>
   </Maincontent>
   <div className="right-sidebar">
    <h4>How to Edit</h4>
    <ul>
      <li>Correct minor typos or mistakes</li>
      <li>Clarify meaning without changing it</li>
      <li>Add related resources or links</li>
      <li>Always respect the author’s intent</li>
      <li>Don’t use edits to reply to the author</li>
    </ul>
    </div>
   </RightSideBar>
   <Footer />
   </>
  )
}

export default QuestionEdit;