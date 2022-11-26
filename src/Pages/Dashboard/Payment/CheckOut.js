import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOut = ({ paymentData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardSuccess, setCardSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [cardTransactionId, setCardTransactionId] = useState('');
    const [paymentError, setPaymentError] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const { Price, name, email, _id, product_id } = paymentData[0];
    console.log(product_id)

    const soldHandleSubmit = (id) => {
        fetch(`http://localhost:5000/allProducts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)
            });
    }, [Price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setPaymentError(error.message);
        }
        else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentError('')
        }
        setCardSuccess('')
        setProcessing(true)
        const { paymentIntent, confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setPaymentError(confirmError.message)
        }

        console.log(paymentIntent);
        if (paymentIntent.status === "succeeded") {
            const paymentValid = {
                Price,
                transaction: paymentIntent.id,
                email,
                bookingId: _id
            }
            setCardSuccess('Congrats ! your payment successfully')
            setCardTransactionId(paymentIntent.id)
            fetch('http://localhost:5000/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(paymentValid)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
        setProcessing(false)
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button onClick={() => soldHandleSubmit(product_id)} className='btn btn-success btn-sm mt-5 ' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{paymentError}</p>
            {
                cardSuccess && <div>
                    <p className=' text-green-600 text-xl font-bold'>{cardSuccess}</p>
                    <p>Your transactions Id <span className=' font-bold text-rose-600'>{cardTransactionId}</span></p>

                </div>
            }
        </div>
    );
};

export default CheckOut;