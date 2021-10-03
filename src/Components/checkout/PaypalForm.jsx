import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useScrollTop from '../../hooks/useScrollTop'
import { setPaymentDetails } from '../../redux/slices/checkoutSlice'
import Confirmation from './Confirmation'
import PayError from './PayError'

const PaypalForm = () => {
    useScrollTop()
    const [paid, setPaid] = React.useState(false)
    const [error, setError] = React.useState(null)
    const paypalRef = React.useRef()

    const { checkout, auth } = useSelector((state) => ({
        checkout: state.checkout,
        auth: state.auth,
    }))

    const orderId = checkout._id
    const dispatch = useDispatch()

    React.useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        intent: 'CAPTURE',
                        purchase_units: [
                            {
                                description: 'Your description',
                                amount: {
                                    currency_code: 'USD',
                                    value: checkout.totalPrice,
                                },
                            },
                        ],
                    })
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture()
                    setPaid(true)
                    const paymentResult = {
                        id: order.id,
                        status: order.status,
                        update_time: order.update_time,
                        payer: order.payer,
                    }
                    dispatch(
                        setPaymentDetails({
                            paymentResult,
                            orderId,
                            token: auth.token,
                        })
                    )
                },
                onError: (err) => {
                    setError(err)
                    console.error(err)
                },
            })
            .render(paypalRef.current)
    }, [dispatch, orderId, checkout.totalPrice, auth.token])
    return (
        <>
            {paid && <Confirmation />}
            {error && <PayError />}
            {!paid && !error && (
                <div>
                    <div
                        className="w-full "
                        style={{
                            minWidth: 500,
                            maxWidth: '100%',
                            maxHeight: 500,
                            overflow: 'auto',
                        }}
                        ref={paypalRef}
                    ></div>
                </div>
            )}
        </>
    )
}

export default PaypalForm
