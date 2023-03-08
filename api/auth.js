const TOKEN_NAME = 'gics_token'; //TOKEN字段的修改

//读取token
const getToken = () => localStorage.getItem(TOKEN_NAME);

//设置token
const setToken = (value) => localStorage.setItem(TOKEN_NAME, value);

//删除token
const removeToken = () => localStorage.removeItem(TOKEN_NAME);

//是否登录
const isAuth = () => !!getToken();

export { getToken, setToken, removeToken, isAuth };
