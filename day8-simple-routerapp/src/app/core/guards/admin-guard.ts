import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);

  const isAdmin = true;

  if (isAdmin) {
    return true;
  }

  // Redirect instead of alert
  return router.parseUrl('/home');
};