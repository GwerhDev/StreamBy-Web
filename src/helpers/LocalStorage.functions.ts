export const getUserToken = () => localStorage ? localStorage.getItem('userToken') : "";
export const setUserToken = (token: string) => localStorage ? localStorage.setItem('userToken', token) : "";

export const options = () => {
  return { 
    headers: { 
      Authorization: getUserToken()
    }
  }
};