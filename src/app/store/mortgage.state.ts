export interface MortgageState {
    monthlyPayment: number | null;
}

export const initialState: MortgageState = {
    monthlyPayment: null,
};
