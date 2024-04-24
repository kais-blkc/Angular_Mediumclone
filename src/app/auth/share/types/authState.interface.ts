import { BackendErrorsInterface } from '../../../share/types/backendErrors.interface';
import { CurrentUserInterface } from '../../../share/types/currentUser.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedin: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
