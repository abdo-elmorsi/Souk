import React from 'react'
import PaypalForm from '../../../Components/checkout/PaypalForm'
import useScrollTop from '../../../hooks/useScrollTop'

const PaypalPayment = () => {
    useScrollTop()
    return (
        <div className="h-screen flex items-center justify-center">
            <PaypalForm />
        </div>
    )
}

export default PaypalPayment
