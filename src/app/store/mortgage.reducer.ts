import { createReducer, on } from "@ngrx/store";
import { saveMonthlyPayment } from "./mortgage.actions";
import { initialState, MortgageState } from "./mortgage.state";

export const mortgageReducer = createReducer(
    initialState,
    on(saveMonthlyPayment, (state, { monthlyPayment }) => ({
        ...state,
        monthlyPayment
    }))
);