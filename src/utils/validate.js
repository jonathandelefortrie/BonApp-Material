export default (type, value) => {
  switch (type) {
    case 'name':
      return /[A-Za-z0-9]+/.test(value);
    case 'email':
      return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(value);
    case 'phone':
      return /[0-9]{6}$/.test(value);
    case 'password':
      return /.{4,}/.test(value);
    default:
      return false;
  }
};
