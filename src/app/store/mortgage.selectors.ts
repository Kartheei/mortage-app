import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MortgageState } from './mortgage.state';

export const selectMortgageState = createFeatureSelector<MortgageState>('mortgage');

export const selectMonthlyPayment = createSelector(
    selectMortgageState,
    (state: MortgageState) => state.monthlyPayment
);
