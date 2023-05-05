import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/loanStore";
import axios from "axios";

import {setAmount, setRate, setTerm } from "../store/loanStore";
import {setResponse, setMonthlyPayment, setTotalInterest, setTotalCost, setPayments, setPage} from "../store/loanStore";

import ButtonCalculate from "./ButtonCalculate";
import {LoanRequest} from "../interfaces/LoanRequest";
import {LoanResponse} from "../interfaces/LoanResponse";

const LoanForm = () => {
    const dispatch = useDispatch();

    let amount = useSelector((state: RootState) => state.loan.amount);
    let rate = useSelector((state: RootState) => state.loan.rate);
    let term = useSelector((state: RootState) => state.loan.term);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const loanRequest: LoanRequest = {
            amount: amount,
            rate: rate,
            term: term * 12,
        };

        try {
            const response = await axios.post<LoanResponse>('https://loanshark-api.azurewebsites.net/api/loans', loanRequest);
            dispatch(setResponse(response.data));
            dispatch(setPayments(response.data.payments));
            dispatch(setMonthlyPayment(response.data.monthlyPayment));
            dispatch(setTotalInterest(response.data.totalInterest));
            dispatch(setTotalCost(response.data.totalCost));
            dispatch(setPage(1));
        } catch (error) {
            console.error(error);
        }
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setAmount(parseFloat(e.target.value)));
    };

    const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setRate(parseFloat(e.target.value)));
    };

    const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTerm(parseFloat(e.target.value)));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Estimate a loan</h1>
                <div className="grid grid-cols-1">
                    <label className="relative">
                        Loan Amount
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAmountChange(e)}
                        required
                        placeholder="50000.00"
                    />
                    <label className="relative mt-2">
                        Interest Rate
                    </label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleRateChange(e)}
                        required
                        placeholder="5.5"
                    />
                    <label className="relative mt-2">
                        Years
                    </label>
                    <input
                        type="number"
                        value={term}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTermChange(e)}
                        required
                        placeholder="1"
                    />
                </div>
                <div className="relative mt-4">
                    <ButtonCalculate/>
                </div>
            </form>
        </div>
    );
};

export default LoanForm;