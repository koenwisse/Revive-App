const BaseUrl = 'https://echtzeit-einkauf.vercel.app/api/v1/';

export const endPoints = {
  register: BaseUrl + 'users/register',
  login: BaseUrl + 'users/login',
  createStore: BaseUrl + 'seller/store',
  category: BaseUrl + 'seller/category/',
  product: BaseUrl + 'seller/store-product/',
  updateUser: BaseUrl + 'users/update-account',
  currentUser: BaseUrl + 'users/current-user',
  ordersSeller: BaseUrl + 'seller/order',
};
