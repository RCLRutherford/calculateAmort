import React from 'react';
import { Provider } from 'react-redux';
import {store} from "./store/loanStore";
import LoanCalculator from './components/LoanCalculator';
import Footer from './components/Footer';

function App() {
    return (
        <Provider store={store}>
            <main>
                <LoanCalculator/>
            </main>
            <Footer/>
        </Provider>
    );
}

export default App;
