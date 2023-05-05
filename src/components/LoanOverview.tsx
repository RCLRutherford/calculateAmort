import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store/loanStore";

const LoanOverview = () => {
    const payments = useSelector((state: RootState) => state.loan.payments);
    const monthlyPayment = useSelector((state: RootState) => state.loan.response?.monthlyPayment);
    const totalInterest = useSelector((state: RootState) => state.loan.response?.totalInterest);
    const totalCost = useSelector((state: RootState) => state.loan.response?.totalCost);

    return (
        <>
            <div className="flex items-center h-full">
                {payments.length > 0 && (
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