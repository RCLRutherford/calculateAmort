import React from 'react';
import {useSelector} from "react-redux";
import {Payment} from "../interfaces/Payment";
import {selectPage, selectPayments} from "../store/loanStore";

const PaymentTable = () => {

    const payments = useSelector(selectPayments);
    const pageNumber = useSelector(selectPage);

    const getPaginatedPayments = () => {
        if (!payments) {
            return [];
        }
        return chunkArray(payments!, 12)[pageNumber - 1] || [];
    };


    const chunkArray = (array: Payment[], size: number) => {
        const pages = [];
        for (let i = 0; i < array.length; i += size) {
            pages.push(array.slice(i, i + size));
        }
        return pages;
    };

    return (
        <>
            {payments.length > 0 && (
                <div className="table-outer">
                    <div className="table-inner">
                        <table>
                            <thead>
                            <tr>
                                <th>Month</th>
                                <th>Payment</th>
                                <th>Interest</th>
                                <th>Principal</th>
                                <th>Balance</th>
                            </tr>
                            </thead>
                            <tbody>
                            {getPaginatedPayments().map((payment: Payment) => (
                                <tr key={payment.month} className={payment.month % 2 === 0 ? 'bg-slate-200' : ''}>
                                    <td>{payment.month}</td>
                                    <td>{payment.payment}</td>
                                    <td>{payment.interest}</td>
                                    <td>{payment.principal}</td>
                                    <td>{payment.balance}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default PaymentTable;