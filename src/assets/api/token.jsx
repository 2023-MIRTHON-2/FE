// JWT 토큰을 로컬 스토리지에 저장하는 함수
export const saveAccessTokenToLocalStorage = (accessToken) => {
  localStorage.setItem("jwtAccessToken", accessToken);
};

export const saveRefreshTokenToLocalStorage = (refreshToken) => {
  localStorage.setItem("jwtRefreshToken", refreshToken);
};

// JWT 토큰을 로컬 스토리지에서 가져오는 함수
export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("jwtToken");
};

// JWT 토큰을 로컬 스토리지에서 제거하는 함수
export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("jwtToken");
};
