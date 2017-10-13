import api from './apiService';

class User {
  static signUp(user) {
    return api.post('/users', user);
  }

  static login(user) {
    return api.post('/users/sign_in', user);
  }

  static logout() {
    return api.delete('/users/sign_out');
  }
}

export default User;
