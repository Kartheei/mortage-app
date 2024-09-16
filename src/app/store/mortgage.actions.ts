import { createAction, props } from '@ngrx/store';

export const saveMonthlyPayment = createAction(
    '[Mortgage] Save Monthly Payment',
    props<{ monthlyPayment: number }>()
);
