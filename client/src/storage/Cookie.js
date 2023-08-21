import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// refresh token을 cookie에 저장하기 위한 함수
export const setRefreshToken = (refreshToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 7);

  return cookies.set('refresh_token', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};

// cookie에 저장된 refresh token 값을 갖고 오기 위한 함수
export const getCookieToken = () => {
  return cookies.get('refresh_token');
};

// cookie 삭제를 위한 함수. 로그아웃 시 활용
export const removeCookieToken = () => {
  return cookies.remove('refresh_token', { sameSite: 'strict', path: '/' });
};
