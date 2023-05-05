import {configureStore} from '@reduxjs/toolkit';

import { createSlice, PayloadAction} from "@reduxjs/toolkit";

import {LoanRequest} from "../interfaces/LoanRequest";
import {LoanResponse} from "../interfaces/LoanResponse";
import {Payment} from "../interfaces/Payment";

interface LoanState {
    amount: string;
    rate: string;
    term: string;
    request: LoanRequest | null;
    response: LoanResponse | null;
    payments: Payment[];
    page: number;
}

const initialState: LoanState ={
    amount: "",
    rate: "",
    term: "",
    request: null,
    response: null,
    payments: [],
    page: 1
};

export const loanSlice = createSlice({
    name: 'loan',
    initialState,
    reducers: {
        setAmount: (state, action: PayloadAction<string>) => {
            state.amount = action.payload;
        },
        setRate: (state, action: PayloadAction<string>) => {
            state.rate = action.payload;
        },
        setTerm: (state, action: PayloadAction<string>) => {
            state.term = action.payload;
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

export const selectAmount = (state: { loan: LoanState} ) => state.loan.amount;
export const selectRate = (state: { loan: LoanState} ) => state.loan.rate;
export const selectTerm = (state: { loan: LoanState} ) => state.loan.term;
export const selectRequest = (state: { loan: LoanState} ) => state.loan.request;
export const selectResponse = (state: { loan: LoanState} ) => state.loan.response;
export const selectMonthlyPayment = (state: { loan: LoanState} ) => state.loan.response?.monthlyPayment;
export const selectTotalInterest = (state: { loan: LoanState} ) => state.loan.response?.totalInterest;
export const selectTotalCost = (state: { loan: LoanState} ) => state.loan.response?.totalCost;
export const selectPayments = (state: { loan: LoanState} ) => state.loan.payments;
export const selectPage = (state: { loan: LoanState} ) => state.loan.page;

export const { setAmount, setRate, setTerm, setRequest, setResponse, setPayments, setPage } = loanSlice.actions;

const store = configureStore({
    reducer: loanSlice.reducer,
    devTools: process.env.NODE_ENV !== 'production',
});