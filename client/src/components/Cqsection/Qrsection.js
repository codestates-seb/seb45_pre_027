import styled from "styled-components";
import React, { useState } from "react";
import TextEditor from "./webeditor";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  .modal-text {
    margin-left: 22px;
  }
  .modal-content {
    background-color: white;
    border: none;
    width: 470px;
    border-radius: 7px;
    height: 170px;
    font-size: 14px;
  }
  .modal-title {
    color: #d0393e;
    font-size: 30px;
    margin: 22px;
  }
  .modal-btn {
    margin: 22px;
  }
  .redbtn {
    background-color: red;
    border: none;
    width: 120px;
    height: 35px;
    border-radius: 7px;
    color: white;
    &:hover {
      background-color: #d0393e;
    }
  }
  .whtiebtn {
    background-color: white;
    border: none;
    margin-left: 10px;
    height: 35px;
    border-radius: 7px;
    width: 60px;
    &:hover {
      background-color: #f8f9f9;
    }
  }
`;

const LastBtn = styled.button`
  color: #d0394e;
  background-color: rgba(248, 249, 249, 1);
  border-radius: 7px;
  display: flex;
  align-items: center;
  border: none;
  height: 35px;
  display: flex;
  margin: 10px;
  width: 90px;
  &:hover {
    background-color: pink;
  }
`;

const SectionForm = styled.div`
  .side-section {
    border: 1px solid rgba(214, 217, 220, 1);
    background-color: rgba(255, 255, 255, 1);
    height: 160px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 6px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
    display: none;
  }
  .side-section3 {
    border: 1px solid rgba(214, 217, 220, 1);
    background-color: rgba(255, 255, 255, 1);
    height: 300px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 6px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
    display: none;
  }
  .side-section4 {
    border: 1px solid rgba(214, 217, 220, 1);
    background-color: rgba(255, 255, 255, 1);
    height: 200px;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 6px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.2);
    display: none;
  }
  .hidden {
    display: none;
  }
  .active {
    display: block;
  }
  .side-title {
    background-color: #f8f9f9;
    height: 45px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 16px;
    border-bottom: 1px solid #d6d9dc;
  }
  .side-form {
    display: flex;
    flex-direction: row;
  }
  .side-text {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    margin-left: 5px;
    margin-top: 10px;
    > p {
      margin: 10px 20px 5px 1px;
    }
  }
  .side-image {
    width: 50px;
    height: 90px;
    margin: 20px;
  }
  .side-image4 {
    width: 60px;
    height: 100px;
    margin: 14px;
  }

  .form-tags {
    height: 180px;
  }
  .form-review {
    height: 200px;
  }
  .review-btn {
    width: 150px;
    height: 37px;
    background-color: rgba(10, 149, 255, 1);
    border: none;
    border-radius: 6px;
    font-size: 13px;
    color: white;
    margin: 7px 0px;
    padding: 10px;
    &:hover {
      background-color: rgba(0, 109, 205, 1);
    }
  }
  .tags-btn {
    width: 50px;
    height: 37px;
    background-color: rgba(10, 149, 255, 1);
    border: none;
    border-radius: 6px;
    font-size: 13px;
    color: white;
    margin-top: 1px;
    &:hover {
      background-color: rgba(0, 109, 205, 1);
    }
  }
  .form-review {
    height: 200px;
  }
  .section-form {
    display: flex;
    > div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 70%;
      margin: 8px 8px 8px 0;
      padding: 24px;
      flex-shrink: 0;
      background-color: #fff;
      border: 1px solid rgba(227, 230, 232, 1);
      border-radius: 7px;

      .section-input {
        margin: 7px 0px 0px 0px;
        height: 30px;
        font-size: 13px;
      }
      .review-body {
        width: 100%;
        height: 50px;
      }
      .review-label {
        margin-bottom: 10px;
      }
      label {
        font-size: 13px;
        margin: 3px 0px;
      }
      .label-title {
        font-weight: bold;
        font-size: 16px;
      }
      .review-title {
        margin: 20px 0px 5px 0px;
      }

      .section-btn {
        width: 50px;
        height: 37px;
        background-color: rgba(10, 149, 255, 1);
        border-radius: 6px;
        font-size: 13px;
        color: white;
        margin-top: 7px;
        border: none;
        &:hover {
          background-color: rgba(0, 109, 205, 1);
        }
      }

      .section-title {
        display: flex;
        flex-direction: column;
      }

      .section-body-input {
        width: 100%;
        height: 80%;
        vertical-align: top;
        line-height: 100%;
        padding: 10px;
      }

      .section-tags {
        width: 100%;
        height: 30px;
      }

      > label {
        color: hsl(210, 8%, 5%);
        font-weight: 600;
        font-size: 16px;
        font-weight: bold;
        padding-top: 5px;

        &:last-child {
          font-weight: normal;
          font-size: 13px;
        }
      }
    }

    .section-body {
      height: 300px;
    }
  }
`;

const Qrsection = ({
  expecting,
  setExpecting,
  content,
  setContent,
  title,
  setTitle,
  handlesubmit
}) => {
  const [activeSection, setActiveSection] = useState(null);
  const [showNextButton, setShowNextButton] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [showDiscardModal, setShowDiscardModal] = useState(false);

  const handleDiscardDraft = () => {
    setShowDiscardModal(true);
  };
  const handleConfirmDiscard = () => {
    window.location.reload();
    window.scrollTo(0, 0);
    setActiveSection(null);
    setShowNextButton([true, false, false, false, false]);
    setShowDiscardModal(false);
  };

  const handleCancelDiscard = () => {
    setShowDiscardModal(false);
  };

  const handleInputClick = (index) => {
    if (!showNextButton[index]) {
      return;
    }

    setActiveSection(index);
    setShowNextButton((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleNextClick = () => {
    if (activeSection < 4) {
      setActiveSection(activeSection + 1);
      setShowNextButton((prev) => {
        const newState = [...prev];
        newState[activeSection] = false;
        newState[activeSection + 1] = true;
        return newState;
      });
    }
  };
  return (
    <>
      <SectionForm>
        <div className="section-form">
          <div>
            <div className="section-title">
              <label className="label-title" htmlFor="title">
                Title
              </label>
              <label className="label" htmlFor="title">
                Be specific and imagine you’re asking a question to another
                person.
              </label>
            </div>
            <input
              onClick={() => handleInputClick(0)}
              type="text"
              className="section-input"
              placeholder="e.g is there an R function for finding the index of an element in a vector?"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <button
              className={`section-btn ${showNextButton[0] ? "" : "hidden"}`}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
          <div
            className={`side-section ${activeSection === 0 ? "active" : ""}`}
          >
            <div className="side-title">Writing a good title</div>
            <div className="side-form">
              <img className="side-image" src="penIcon.png" alt="pencil" />
              <div className="side-text">
                <p>Your title should summarize the problem.</p>
                <p>
                  You might find that you have a better
                  <p> idea of your title after writing out the rest</p> of the
                  question.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionForm>
      <SectionForm>
        <div className="section-form">
          <div>
            <div className="section-title">
              <label className="label-title">
                What are the details of your problem?
              </label>
              <label>
                Introduce the problem and expand on what you put in the title.
                Minimum 20 characters.
              </label>
            </div>
            <div className="section-body">
              <TextEditor 
                  className="section-body-input"
                  onClick={() => handleInputClick(1)}
                  type="text"
                  onChange={(editorData) => setContent(editorData)}/>
            </div>
            <button
              className={`section-btn ${showNextButton[1] ? "" : "hidden"}`}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
          <div
            className={`side-section ${activeSection === 1 ? "active" : ""}`}
          >
            <div className="side-title">Introduce the problem</div>
            <div className="side-form">
              <img className="side-image" src="penIcon.png" alt="pencil" />
              <div className="side-text">
                <p>
                  Explain how you encountered the problem you’re trying to
                  solve, and any difficulties that have prevented you from
                  solving it yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionForm>
      <SectionForm>
        <div className="section-form">
          <div>
            <div className="section-title">
              <label className="label-title">
                What did you try and what were you expecting?
              </label>
              <label>
                Describe what you tried, what you expected to happen, and what
                actually resulted. Minimum 20 characters.
              </label>
            </div>
            <div className="section-body">
              <TextEditor 
                  className="section-body-input"
                  onClick={() => handleInputClick(2)}
                  type="text"
                  onChange={(editorData) => setExpecting(editorData)}/>
            </div>
            <button
              className={`section-btn ${showNextButton[2] ? "" : "hidden"}`}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
          <div
            className={`side-section3 ${activeSection === 2 ? "active" : ""}`}
          >
            <div className="side-title">Expand on the problem</div>
            <div className="side-form">
              <img className="side-image" src="penIcon.png" alt="pencil" />
              <div className="side-text">
                <p>
                  Show what you’ve tried, tell us what happened, and why it
                  didn’t meet your needs.
                </p>
                <p>
                  Not all questions benefit from including code, but if your
                  problem is better understood with code you’ve written, you
                  should include a minimal, reproducible example.
                </p>
                <p>
                  Please make sure to post code and errors as text directly to
                  the question (and not as images), and format them
                  appropriately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionForm>
      <SectionForm>
        <div className="section-form">
          <div>
            <div className="section-title">
              <label className="label-title" htmlFor="title">
                Tags
              </label>
              <label className="label" htmlFor="title">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </label>
            </div>
            <input
              type="text"
              className="section-input"
              onClick={() => handleInputClick(3)}
            ></input>
            <button
              className={`section-btn ${showNextButton[3] ? "" : "hidden"}`}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
          <div
            className={`side-section4 ${activeSection === 3 ? "active" : ""}`}
          >
            <div className="side-title">Adding tags</div>
            <div className="side-form">
              <img className="side-image4" src="penIcon.png" alt="pencil" />
              <div className="side-text">
                <p>
                  Tags help ensure that your question will get attention from
                  the right people.
                </p>
                <p>
                  Tag things in more than one way so people can find them more
                  easily. Add tags for product lines, projects, teams, and the
                  specific technologies or languages used.
                </p>
                <p> Learn more about tagging</p>
              </div>
            </div>
          </div>
        </div>
      </SectionForm>
      <SectionForm>
        <div className="section-form form-review">
          <div>
            <div className="section-title">
              <label className="label-title review-title">
                Review questions already on Stack Overflow to see if your
                question is a duplicate.
              </label>
              <label className="review-label">
                Clicking on these questions will open them in a new tab for you
                to review. Your progress here will be saved so you can come back
                and continue.
              </label>
            </div>
            <div className="section-body">
              <input className="review-body" type="text" />
            </div>
            <button
              className={`review-btn ${showNextButton[4] ? "" : "hidden"}`}
              onClick={() => handlesubmit(title, content, expecting)}
            >
              Post your question
            </button>
          </div>
        </div>
      </SectionForm>
      <LastBtn
        className={`last-btn ${showNextButton[5] ? "" : "hidden"}`}
        onClick={handleDiscardDraft}
      >
        Discard draft
      </LastBtn>
      {showDiscardModal && (
        <Modal>
          <div className="modal-content">
            <p className="modal-title">Discard question</p>
            <p className="modal-text">
              Are you sure you want to discard this question? This cannot be
              undone.
            </p>
            <div className="modal-btn">
              <button className="redbtn" onClick={handleConfirmDiscard}>
                Discard question
              </button>
              <button className="whtiebtn" onClick={handleCancelDiscard}>
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Qrsection;
