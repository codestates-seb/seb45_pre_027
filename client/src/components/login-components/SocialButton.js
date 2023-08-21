import { styled } from "styled-components";

const SocialButton = styled.button`
  display: flex;
  padding: 9.29px 0 10.49px 0;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 1fr;
  border-radius: 6px;
  border: 1px solid;
  border-color: ${(props) => props.bordercolor || "gray"};
  cursor: pointer;
  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
  &:hover {
    background-color: ${(props) => props.hovercolor || "white"};
  }
  &:active {
    background-color: ${(props) => props.activecolor || "white"};
    box-shadow: ${(props) => `0px 0px 3px 3px ${props.borderColor}`};
  }
  span {
    text-align: center;
    font-family: Inter;
    font-size: 0.8rem;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: gray;
    border: 1px solid gray;
  }
`;

export default SocialButton;
