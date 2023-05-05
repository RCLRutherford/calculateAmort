import React, {useState} from 'react';
import axios from 'axios';

import {LoanRequest} from "../interfaces/LoanRequest";
import {LoanResponse} from "../interfaces/LoanResponse";
import {Payment} from "../interfaces/Payment";
import Logo from "./Logo";
import ButtonCalculate from "./ButtonCalculate";
import LoanOverview from "./LoanOverview";

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [loanResponse, setLoanResponse] = useState<LoanResponse>();
    const [payments, setPayments] = useState<Payment[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const loanRequest: LoanRequest = {
            amount: parseFloat(loanAmount),
            rate: parseFloat(interestRate),
            term: parseInt(loanTerm) * 12,
        };
        try {
            const response = await axios.post<LoanResponse>('https://loanshark-api.azurewebsites.net/api/loans', loanRequest);
            setLoanResponse(response.data);
            setPayments(response.data.payments);
            setCurrentPage(1);
        } catch (error) {
            console.error(error);
        }
    };

    const chunkArray = (array: Payment[], size: number) => {
        const pages = [];
        for (let i = 0; i < array.length; i += size) {
            pages.push(array.slice(i, i + size));
        }
        return pages;
    };

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    const getPaginatedPayments = () => {
        return payments.length ? chunkArray(payments, 12)[currentPage - 1] : [];
    };

    return (
        <div className="loan-request">
            <div className="grid grid-cols-2 place-content-center place-items-center">
                <div className="w-full flex items-center justify-center mx-auto">
                    <Logo width={"360"}/>
                </div>
                <div className="w-full h-full grid grid-cols-2">
                    <div className="flex items-center h-full">
                        {loanResponse && (
                            <LoanOverview {...loanResponse}/>
                        )}
                    </div>
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
                                    value={loanAmount}
                                    onChange={(e) => setLoanAmount(e.target.value)}
                                    required
                                    placeholder="50000.00"
                                />
                                <label className="relative mt-2">
                                    Interest Rate
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                    required
                                    placeholder="5.5"
                                />
                                <label className="relative mt-2">
                                    Years
                                </label>
                                <input
                                    type="number"
                                    value={loanTerm}
                                    onChange={(e) => setLoanTerm(e.target.value)}
                                    required
                                    placeholder="1"
                                />
                            </div>
                            <div className="relative mt-4">
                                {/*<button className="loan-request-button" type="submit">Calculate Loan</button>*/}
                                <ButtonCalculate/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <br/>
            {payments.length > 0 && (
                <>
                    <table>
                        <thead>
                        <tr>
                            <th>Payment Number</th>
                            <th>Amount</th>
                            <th>Interest</th>
                            <th>Principal</th>
                            <th>Balance</th>
                        </tr>
                        </thead>
                        <tbody>
                        {getPaginatedPayments().map((payment) => (
                            <tr key={payment.month}>
                                <td>{payment.month}</td>
                                <td>{payment.payment}</td>
                                <td>{payment.interest}</td>
                                <td>{payment.principal}</td>
                                <td>{payment.balance}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <br/>
                    <div>
                        {chunkArray(payments, 12).map((_, index) => (
                            <button
                                key={index + 1}
                                disabled={currentPage === index + 1}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default LoanCalculator;