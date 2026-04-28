import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {

  const isLoggedIn = true; // simulate auth

  if (!isLoggedIn) {
    alert('Please login first');
    return false;
  }

  return true;
};