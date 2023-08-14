import styled from "styled-components";
import React, { useState } from "react";
import { postQuestionToServer } from "./Cqpost.js";
import QuestionProblem from "./Problem.js";

const LastBtn = styled.button`
  color: red;
  background-color: rgba(248, 249, 249, 1);
  border: 0px;
  height: 30px;
  display: flex;
  margin: 10px;
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
    border: 1px solid rgba(10, 149, 255, 1);
    border-radius: 6px;
    font-size: 13px;
    color: white;
    margin: 7px 0px;
    padding: 10px;
  }
  .tags-btn {
    width: 50px;
    height: 37px;
    background-color: rgba(10, 149, 255, 1);
    border: 1px solid rgba(10, 149, 255, 1);
    border-radius: 6px;
    font-size: 13px;
    color: white;
    margin-top: 1px;
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
        border: 1px solid rgba(10, 149, 255, 1);
        border-radius: 6px;
        font-size: 13px;
        color: white;
        margin-top: 7px;
      }

      .section-title {
        display: flex;
        flex-direction: column;
      }

      .section-body-input {
        width: 100%;
        height: 100%;
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
      height: 250px;
    }
  }
`;

const Qrsection = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [showNextButton, setShowNextButton] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);

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
              <input
                className="section-body-input"
                onClick={() => handleInputClick(1)}
                type="text"
              />
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
              <input
                className="section-body-input"
                onClick={() => handleInputClick(2)}
                type="text"
              />
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
                  {" "}
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
                  {" "}
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
              onClick={handleNextClick}
            >
              Review your question
            </button>
          </div>
        </div>
      </SectionForm>
      <LastBtn
        className={`last-btn ${showNextButton[5] ? "" : "hidden"}`}
        onClick={handleNextClick}
      >
        Discard draft
      </LastBtn>
    </>
  );
};

export default Qrsection;
