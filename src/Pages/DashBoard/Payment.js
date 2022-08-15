import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LWNm4D0i86vX3h9FCzQlrUsRShHMr5mW01wMc6Pv80h8k67feZOiJbuJl8EJPbVE4rUZD79fYEtuSSFpkybQITQ00cNLW1ylT');

const Payment = () => {
    const { id } = useParams();
    const url = `https://limitless-mountain-82756.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mx-12'>

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-gray-600 font-bold'>Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay for <span className='text-secondary'>{appointment.treatment}</span></h2>
                    <p>We will see you on <span className='text-secondary'>{appointment.date}</span>  at <span className='text-primary'>{appointment.slot}</span></p>
                    <p>Please Pay: <span className='text-orange-600'>${appointment.price}</span></p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;