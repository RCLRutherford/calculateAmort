import React, {useState} from 'react';
import {Payment} from "../interfaces/Payment";

interface PaymentTableProps {
    payments: Payment[];
    pageNumber: number;
}

const PaymentTable = ({payments, pageNumber}: PaymentTableProps) => {

    const [currentPage, setCurrentPage] = useState(pageNumber);

    const getPaginatedPayments = () => {
        return payments.length ? chunkArray(payments, 12)[pageNumber - 1] : [];
    };

    const chunkArray = (array: Payment[], size: number) => {
        const pages = [];
        for (let i = 0; i < array.length; i += size) {
            pages.push(array.slice(i, i + size));
        }
        return pages;
    };

    const handlePageChange = (newPage: number) => {
        // setCurrentPage(newPage);
        setCurrentPage(newPage);
    };

    return (
        // <>
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
                        {getPaginatedPayments().map((payment) => (
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
                </div>
            </div>
        // </>
    );
};

export default PaymentTable;