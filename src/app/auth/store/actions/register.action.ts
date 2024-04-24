import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { RegisterRequestInterface } from '../../share/types/registerRequest.interface';
import { CurrentUserInterface } from '../../../share/types/currentUser.interface';
import { BackendErrorsInterface } from '../../../share/types/backendErrors.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>(),
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>(),
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>(),
);
