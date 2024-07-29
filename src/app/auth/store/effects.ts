import { createEffect, Actions, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { authActions } from './actions';
import { switchMap, map, catchError, of } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return authActions.registerSuccess({ currentUser });
          }),
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
