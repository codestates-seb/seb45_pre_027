import styled from 'styled-components';
import Qrsection from '../components/Cqsection/Qrsection';

const colors = {
  backgroundColor: 'rgba(248, 249, 249, 1)',
  borderColor: 'rgba(166, 206, 237, 1)',
  contentBackground: 'rgba(235, 244, 251, 1)',
};

const QCPage = styled.section`
  width: 100%;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  background-color: ${colors.backgroundColor};

  .robot {
    width: 550px;
    height: 300px;
    margin-left: 70px;
  }

  .container {
    width: 100%;
    max-width: 1264px;
    padding: 0 24px 24px;

    .description {
      display: flex;
      flex-direction: column;
      width: 100%;

      .title {
        display: flex;
        align-items: center;
        width: 100%;
        height: 130px;

        > h2 {
          margin-right: 300px;
          font-size: 29px;
          font-weight: bold;
        }
      }

      .description-box {
        margin-top: 16px;
        margin-bottom: 10px;
        display: flex;
        border: 1px solid ${colors.borderColor};
        width: 70%;
        border-radius: 6px;

        > div {
          width: 100%;
          padding: 24px;
          border-radius: 3px;
          background: ${colors.contentBackground};
          border: 1px solid var(--powder-400);
          border-radius: 6px;

          > h3,
          h4,
          p {
            margin: 0;
          }

          > h3 {
            font-weight: 400;
            font-size: 21px;
            margin: 0 0 8px;
            line-height: 1.3;
          }

          > p {
            font-size: 16px;
            margin-bottom: 15px;
          }

          > h4 {
            font-size: 13px;
            margin-bottom: 8px;
          }

          > ul {
            margin: 0;
            padding-left: 15px;

            > li {
              font-size: 14px;
              line-height: 1.3;
              list-style-type: disc;
              list-style-position: inside;
            }
          }
        }
      }
    }
  }
`;

const QuestionRegist = () => {
  return (
    <QCPage>
      <div className="container">
        <div className="description">
          <div className="title">
            <h2>Ask a public question</h2>
            <img className="robot" src="robot.svg" alt="Robot" />
          </div>
          <div className="description-box">
            <div>
              <h3>Writing a good question</h3>
              <p>
                You’re ready to ask a programming-related question and this form
                will help guide you through the process. <br />
                Looking to ask a non-programming question? See the topics here
                to find a relevant site.
              </p>
              <h4>Steps</h4>
              <ul>
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>
                  Describe what you tried and what you expected to happen.
                </li>
                <li>
                  Add “tags” which help surface your question to members of the
                  community.
                </li>
                <li>Review your question and post it to the site.</li>
              </ul>
            </div>
          </div>
          <Qrsection />
        </div>
      </div>
    </QCPage>
  );
};

export default QuestionRegist;
