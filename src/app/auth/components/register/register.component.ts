import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { registerAction } from '../../store/actions/register.action';
import { Observable } from 'rxjs';
import { AppStateInterface } from '../../../share/types/AppState.interface';
import { isSubmittingSelector } from '../../store/selectors';
import { RegisterRequestInterface } from '../../share/types/registerRequest.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>,
  ) { }

  ngOnInit(): void {
    this.initializeFrom();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log('isSubmitting: ', this.isSubmitting$);
  }

  initializeFrom(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    const request: RegisterRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
