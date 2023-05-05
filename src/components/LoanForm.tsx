import React from 'react';
import {useSelector} from "react-redux";
import axios from "axios";

import {setAmount, selectAmount, setRate, selectRate, setTerm, selectTerm} from "../store/loanStore";
import {setResponse, setPayments, setPage} from "../store/loanStore";

import ButtonCalculate from "./ButtonCalculate";
import {LoanRequest} from "../interfaces/LoanRequest";
import {LoanResponse} from "../interfaces/LoanResponse";

const LoanForm = () => {
    const amount = useSelector(selectAmount);
    const rate = useSelector(selectRate);
    const term = useSelector(selectTerm);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const loanRequest: LoanRequest = {
            amount: parseFloat(amount),
            rate: parseFloat(rate),
            term: parseInt(term) * 12,
        };
        try {
            const response = await axios.post<LoanResponse>('https://loanshark-api.azurewebsites.net/api/loans', loanRequest);
            setResponse(response.data);
            setPayments(response.data.payments);
            setPage(1);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
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
                        step="0.01"
                        value={amount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
                        required
                        placeholder="50000.00"
                    />
                    <label className="relative mt-2">
                        Interest Rate
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        value={rate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRate(e.target.value)}
                        required
                        placeholder="5.5"
                    />
                    <label className="relative mt-2">
                        Years
                    </label>
                    <input
                        type="number"
                        value={term}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)}
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