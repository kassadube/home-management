export const SignRequest = req => ({
  ...req,
  headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
});

