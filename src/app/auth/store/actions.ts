import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { RegisterRequestIntrface } from '../types/registerRequest.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register:  props<{ request: RegisterRequestIntrface }>(),
    'Register success': props<{ currentUser: CurrentUserInterface}>(),
    'Register failure': emptyProps(),
  }
})

// export const register = createAction(
//   '[Auth] Register',
//   props<{ request: RegisterRequestIntrface }>()
// );

// export const registerSuccess = createAction(
//   '[Auth] Register Success',
//   props<{ request: RegisterRequestIntrface }>()
// );

// export const registerFailure = createAction(
//   '[Auth] Register Failure',
//   props<{ request: RegisterRequestIntrface }>()
// );