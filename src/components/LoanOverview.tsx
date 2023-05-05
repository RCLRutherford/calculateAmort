import React from 'react';
import {LoanResponse} from "../interfaces/LoanResponse";

const LoanOverview = (props:LoanResponse) => {
    return (
        <>
            <div className="space-y-7">
                <h2>Monthly Payment</h2>
                <span className="monthly-payment">{props.monthlyPayment}</span>
                <h3>Total Interest</h3>
                <span className="payment-overview">{props.totalInterest}</span>
                <h3>Total Cost</h3>
                <span className="payment-overview">{props.totalCost}</span>
            </div>
        </>
    );
};

export default LoanOverview;