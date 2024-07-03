import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const navigation = inject(Router);
  let isBrowser = true;
  let platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(platformId);
  if (isBrowser) {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      navigation.navigate(['/login']);
      return false;
    }
  } else {
    return false;
  }
};
