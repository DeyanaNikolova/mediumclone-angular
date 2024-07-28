import { createAction, props } from '@ngrx/store';
import { RegisterRequestIntrface } from '../types/registerRequest.interface';

export const register = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequestIntrface }>()
);
