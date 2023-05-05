import React from 'react';
import {useSelector} from "react-redux";
import {selectMonthlyPayment, selectResponse, selectTotalCost, selectTotalInterest} from "../store/loanStore";

const LoanOverview = () => {
    const response = useSelector(selectResponse);
    const monthlyPayment = useSelector(selectMonthlyPayment);
    const totalInterest = useSelector(selectTotalInterest);
    const totalCost = useSelector(selectTotalCost);

    return (
        <>
            <div className="flex items-center h-full">
                {response !== null && (
                    <div className="space-y-7">
                        <h2>Monthly Payment</h2>
                        <span className="monthly-payment">{monthlyPayment}</span>
                        <h3>Total Interest</h3>
                        <span className="payment-overview">{totalInterest}</span>
                        <h3>Total Cost</h3>
                        <span className="payment-overview">{totalCost}</span>
                    </div>
                )}
            </div>
        </>
    );
};

export default LoanOverview;