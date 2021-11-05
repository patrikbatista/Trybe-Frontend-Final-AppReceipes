export function createTokens() {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
}

export function saveUser(email) {
  const user = {
    email,
  };
  localStorage.setItem('user', JSON.stringify(user));
}
