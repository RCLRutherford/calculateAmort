<div align="center">
<img src="images/logo.svg" width="50%" alt="Logo" />
</div>

## POST a request, 🪄 get some loan details 🪄

Loan Shark API lets you estimate the true cost of a loan. Send the amount to borrow, the interest rate
and the number of payments and get a breakdown of what you will pay.

Written in <a href="https://go.dev" target="_blank">Go</a> deployed to <a href="https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview">Azure Functions</a>,
you can interact with the live function at [https://loanshark-api.azurewebsites.net/api/loans](https://loanshark-api.azurewebsites.net/api/loans)

### Methods

Loan Shark API only accepts a `POST` request to a valid endpoint, `/api/loans`. 


### 🌐 Loan Request Endpoint

Send a `POST` request to the `https://loanshark-api.azurewebsites.net/api/loans` endpoint with a JSON body with the following options.

Example Request:

```json
{
    "amount": 50000,
    "rate": 5.5,
    "term": 12
}
```

Example Response:

```json
{
    "loanAmount": "$50000.00",
    "loanRate": "5.50",
    "monthlyPayment": "$4291.84",
    "totalInterest": "$1502.07",
    "totalCost": "$51502.07",
    "payments": [
        {
            "month": 1,
            "payment": "$4291.84",
            "principal": "$4062.67",
            "interest": "$229.17",
            "balance": "$45937.33"
        },
        {
            "month": 2,
            "payment": "$4291.84",
            "principal": "$4081.29",
            "interest": "$210.55",
            "balance": "$41856.03"
        },
        {
            "month": 3,
            "payment": "$4291.84",
            "principal": "$4100.00",
            "interest": "$191.84",
            "balance": "$37756.04"
        },
        {
            "month": 4,
            "payment": "$4291.84",
            "principal": "$4118.79",
            "interest": "$173.05",
            "balance": "$33637.24"
        },
        {
            "month": 5,
            "payment": "$4291.84",
            "principal": "$4137.67",
            "interest": "$154.17",
            "balance": "$29499.58"
        },
        {
            "month": 6,
            "payment": "$4291.84",
            "principal": "$4156.63",
            "interest": "$135.21",
            "balance": "$25342.94"
        },
        {
            "month": 7,
            "payment": "$4291.84",
            "principal": "$4175.68",
            "interest": "$116.16",
            "balance": "$21167.26"
        },
        {
            "month": 8,
            "payment": "$4291.84",
            "principal": "$4194.82",
            "interest": "$97.02",
            "balance": "$16972.44"
        },
        {
            "month": 9,
            "payment": "$4291.84",
            "principal": "$4214.05",
            "interest": "$77.79",
            "balance": "$12758.39"
        },
        {
            "month": 10,
            "payment": "$4291.84",
            "principal": "$4233.36",
            "interest": "$58.48",
            "balance": "$8525.02"
        },
        {
            "month": 11,
            "payment": "$4291.84",
            "principal": "$4252.77",
            "interest": "$39.07",
            "balance": "$4272.26"
        },
        {
            "month": 12,
            "payment": "$4291.84",
            "principal": "$4272.26",
            "interest": "$19.58",
            "balance": "$0.00"
        }
    ]
}
```

### Example using curl

```cmd
curl -X POST http://loanshark-api.azurewebsites.net/api/loans -d '{"amount": 50000, "rate": 5.5, "term": 12}'
```

### Options

`amount`: 

The amount being borrowed, if the loan is for $50,000.00, then pass `50000` or `50000.00`.

`rate`: 

The annual interest rate of the loan, if the interest rate is 5.5%, then pass `5.5`.

`term`: 

The number of months the loan is for. For example a loan to be paid over one year would be `12`.

