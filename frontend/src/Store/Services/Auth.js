import http from "../../http-common";


const Login = (data) => {
  return http.post("/login", data);
};
const Register = (data) => {
  return http.post("/users", data);
};
const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};
const remove = (id, data) => {
  return http.delete(`/users/${id}`, data);
};
const get = (id) => {
  return http.get(`${id}`);
};
const Auth = {
  Login,
  Register,
  update,
  get,
  remove,
};
export default Auth;
// function findByName(name) {
//   return http.get(`/cloth?name=${name}`);
// }