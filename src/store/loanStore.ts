import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {LoanRequest} from "../interfaces/LoanRequest";
import {LoanResponse} from "../interfaces/LoanResponse";
import {Payment} from "../interfaces/Payment";

interface LoanState {
    amount: number;
    rate: number;
    term: number;
    monthlyPayment: string | null;
    totalInterest: string | null;
    totalCost: string | null;
    request: LoanRequest | null;
    response: LoanResponse | null;
    payments: Payment[];
    page: number;
}

const initialState: LoanState = {
    amount: 50000.0,
    rate: 5.5,
    term: 2,
    monthlyPayment: null,
    totalInterest: null,
    totalCost: null,
    request: null,
    response: null,
    payments: [],
    page: 1
};

export const loanSlice = createSlice({
    name: 'loan',
    initialState,
    reducers: {
        setAmount: (state, action: PayloadAction<number>) => {
            state.amount = action.payload;
        },
        setRate: (state, action: PayloadAction<number>) => {
            state.rate = action.payload;
        },
        setTerm: (state, action: PayloadAction<number>) => {
            state.term = action.payload;
        },
        setMonthlyPayment: (state, action: PayloadAction<string>) => {
            state.monthlyPayment = action.payload;
        },
        setTotalInterest: (state, action: PayloadAction<string>) => {
            state.totalInterest = action.payload;
        },
        setTotalCost: (state, action: PayloadAction<string>) => {
            state.totalCost = action.payload;
        },
        setRequest: (state, action: PayloadAction<LoanRequest | null>) => {
            state.request = action.payload;
        },
        setResponse: (state, action: PayloadAction<LoanResponse | null>) => {
            state.response = action.payload;
        },
        setPayments: (state, action: PayloadAction<Payment[] | []>) => {
            state.payments = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
});

export const selectAmount = (state: { loan: LoanState }) => state.loan.amount;

export const selectRate = (state: { loan: LoanState }) => state.loan.rate;

export const selectTerm = (state: { loan: LoanState }) => state.loan.term;

export const selectRequest = (state: { loan: LoanState }) => {
    return state.loan.request !== null ? state.loan.request : null;
}

export const selectResponse = (state: { loan: LoanState }) => {
    if (state.loan.response) {
        return state.loan.response;
    } else {
        return null;
    }
    // return state.loan.response !== null ? state.loan.response : null;
}

export const selectMonthlyPayment = (state: { loan: LoanState }) => {
    return state.loan.monthlyPayment !== null ? state.loan.monthlyPayment : null;
}

export const selectTotalInterest = (state: { loan: LoanState }) => state.loan.totalInterest;

export const selectTotalCost = (state: { loan: LoanState }) => state.loan.totalCost;

export const selectPayments = (state: { loan: LoanState }) => {
    if (state.loan.response && state.loan.payments) {
        return state.loan.payments;
    } else {
        return [] as Payment[];
    }
};

export const selectPage = (state: { loan: LoanState }) => state.loan.page;

export const {
    setAmount,
    setRate,
    setTerm,
    setMonthlyPayment,
    setTotalInterest,
    setTotalCost,
    setRequest,
    setResponse,
    setPayments,
    setPage} = loanSlice.actions;

const rootReducer = combineReducers({
    loan: loanSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});
