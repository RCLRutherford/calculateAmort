import {Payment} from "./Payment";

export interface LoanResponse {
    "loanAmount": string,
    "loanRate": string,
    "monthlyPayment": string,
    "totalInterest": string,
    "totalCost": string,
    "payments": Payment[]
}