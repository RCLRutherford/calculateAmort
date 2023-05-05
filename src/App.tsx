import React from 'react';
import LoanCalculator from "./components/LoanCalculator";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="main">
                <LoanCalculator/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
