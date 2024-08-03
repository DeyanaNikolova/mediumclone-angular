import { createEffect, Actions, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { authActions } from './actions';
import { switchMap, map, catchError, of, tap } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersostanceService } from '../../shared/services/persistance.servise';
import { Router } from '@angular/router';

export const registerEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersostanceService),
    router = inject(Router),
  ) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            persistanceService.set('accessToken', currentUser.token);
            return authActions.registerSuccess({ currentUser });
          }),
          tap(()=>{ router.navigateByUrl('/') }),
          catchError((errorResponce: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                errors: errorResponce.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

// export const redirectAfterRegisterEffect = createEffect(
//   (actions$ = inject(Actions), router = inject(Router)) => {
//     return actions$.pipe(
//       ofType(authActions.registerSuccess),
//       tap(()=>{
//         router.navigateByUrl('/')
//       })
//     )
//   }, {
//   functioanl: true,
//   dispatch: false,
// });
