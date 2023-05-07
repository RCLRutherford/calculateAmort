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
