import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPage, RootState} from "../store/loanStore";

import {Payment} from "../interfaces/Payment";
import Logo from "./Logo";
import LoanOverview from "./LoanOverview";
import PaymentTable from "./PaymentTable";
import LoanForm from "./LoanForm";

const LoanCalculator = () => {

    const dispatch = useDispatch();

    let payments = useSelector((state: RootState) => state.loan.payments);
    let currentPage = useSelector((state: RootState) => state.loan.page);

    const chunkArray = (array: Payment[], size: number) => {
        const pages = [];
        for (let i = 0; i < array.length; i += size) {
            pages.push(array.slice(i, i + size));
        }
        return pages;
    };

    const handlePageChange = (newPage: number) => {
        dispatch(setPage(newPage));
    };

    return (
        <div className="loan-request-wrapper">
            <div className="loan-request-header">
                <div className="loan-request-logo">
                    <Logo width={"360"}/>
                </div>
                <div className="loan-request-inputs">
                    <LoanOverview />
                    <LoanForm />
                </div>
            </div>
            <PaymentTable />
            <div>
                {payments !== null && chunkArray(payments!, 12).map((_, index) => (
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
    );
}

export default LoanCalculator;