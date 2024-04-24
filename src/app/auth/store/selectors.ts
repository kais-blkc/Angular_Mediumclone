import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../../share/types/AppState.interface';
import { AuthStateInterface } from '../share/types/authState.interface';

export const authFeatureSelector = (
  state: AppStateInterface,
): AuthStateInterface => state.auth;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting,
);
