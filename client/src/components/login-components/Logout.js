import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCookieToken, removeCookieToken } from '../../storage/Cookie';
import { DELETE_TOKEN } from '../../redux/tokenSlice';

function Logout() {
  // redux에 저장된 access token 정보
  const { accessToken } = useSelector((state) => state.token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Cookie에 저장된 Refresh Token 정보를 받아 온다.
  const refreshToken = getCookieToken();

  async function logout() {
    // 백으로부터 받은 응답
    await fetch(`${process.env.REACT_APP_SERVER_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token: refreshToken,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        //  redux에 저장된 access token 정보 삭제
        dispatch(DELETE_TOKEN());
        // cookie에 저장된 refresh token 정보 삭제
        removeCookieToken();
        // 자동 로그인 설정 해제
        localStorage.clear();
        // 메인으로 페이지 이동
        return navigate('/');
      })
      .catch((e) => {
        window.location.reload();
      });
  }
  useEffect(() => {
    logout();
  }, []);
  return (
    <>
      <Link to="/" />
    </>
  );
}

export default Logout;
