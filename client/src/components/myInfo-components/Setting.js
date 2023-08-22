import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import profile from '../../img/default-profile.png';
import SocialButton from '../login-components/SocialButton';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../redux/userInfoSlice';

const Container = styled.div`
  h1 {
    color: hsl(210, 8%, 5%);
    font-size: 2.07692308rem;
    font-weight: normal;
    padding-bottom: 1rem;
    border-bottom: 1px solid #d5d9db;
  }
  h2 {
    margin: 1.5rem 0 0.5rem 0;
    font-size: 1.5rem;
    color: rgb(35, 38, 41);
    font-weight: 400;
  }
`;

const InformationContainer = styled.div`
  border: 1px solid rgb(227, 230, 232);
  border-radius: 6px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InformationBox = styled.div`
  h3 {
    color: rgb(12, 13, 14);
    font-size: 0.9rem;
    font-weight: 600;
  }

  .img-box {
    position: relative;
    border-radius: 6px;
    margin-top: 0.5rem;
  }

  img {
    width: 120px;
    height: 120px;
  }

  .change-picture {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 120px;
    text-align: center;
    background-color: hsl(210, 8%, 35%);
    padding: 8px 0;
    color: white;
    font-size: 0.7rem;
    font-weight: 400;
    cursor: pointer;
    &:hover {
      background-color: #3b4044;
    }
  }

  input {
    width: 100%;
    margin-top: 0.3rem;
    padding: 0.6em 0.7em;
    border-radius: 6px;
    border: 1px solid #dde0e3;
    background: #fff;
    font-weight: 300;

    &:focus {
      outline: none;
      border-color: hsl(206, 90%, 69.5%);
      box-shadow: 0px 0px 3px 0.5px hsl(206, 90%, 69.5%);
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
`;

const StyledButton = styled(SocialButton)`
  padding: 10px;
  border: none;
`;

function Setting({ handleCategory }) {
  const postImg = new FormData();
  const { register, setValue, handleSubmit } = useForm();
  const userInfo = useSelector((state) => state.userInfo);
  const [imageSrc, setImageSrc] = useState(userInfo.profile);
  const dispatch = useDispatch();
  const imageUploadRef = useRef(null);
  const editUserInfo = (data) => {
    console.log({ ...data, profile: postImg });
    dispatch(setUserInfo({ ...data, profile: imageSrc }));
    // fetch('서버 uri', {
    //   method: 'POST',
    //   body: JSON.stringify({ ...data, profile: postImg }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => dispatch(setUserInfo(data)));
    // window.location.href = '/my-info';
    handleCategory(0);
  };
  const changeImageFile = (e) => {
    if (!e.target.files) {
      return;
    }

    postImg.append('file', e.target.files[0]);

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };
  const handleImageUpload = () => {
    if (!imageUploadRef.current) {
      return;
    }
    imageUploadRef.current.click();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(editUserInfo)}>
        <h1>Edit your profile</h1>
        <h2>Public information</h2>
        <InformationContainer>
          <InformationBox>
            <h3>Profile image</h3>
            <div className="img-box">
              <img src={imageSrc} alt="profile" />
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                ref={imageUploadRef}
                onChange={changeImageFile}
              />
              <span onClick={handleImageUpload} className="change-picture">
                Change picture
              </span>
            </div>
          </InformationBox>
          <InformationBox>
            <h3>Display name</h3>
            <input {...register('name')} />
          </InformationBox>
          <InformationBox>
            <h3>Location</h3>
            <input {...register('location')} />
          </InformationBox>
          <InformationBox>
            <h3>Title</h3>
            <input {...register('title')} />
          </InformationBox>
          <InformationBox>
            <h3>About me</h3>
            <textarea {...register('about-me')} />
          </InformationBox>
        </InformationContainer>
        <ButtonContainer>
          <StyledButton
            color="#FFF"
            background="#0A95FF"
            bordercolor="hsl(206,96%,90%)"
            hovercolor="hsl(206,100%,40%)"
            activecolor="hsl(209,100%,37.5%)"
          >
            Save profile
          </StyledButton>
          <StyledButton
            color="#0A95FF"
            hovercolor="hsl(206,100%,97%)"
            activecolor="hsl(206,93%,83.5%)"
          >
            Cancel
          </StyledButton>
        </ButtonContainer>
      </form>
    </Container>
  );
}

export default Setting;
