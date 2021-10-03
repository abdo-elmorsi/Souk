import CreditCardCreds from '../../../Components/profile/payment-method/CreditCardCreds'
import PaymentSettings from '../../../Components/profile/payment-method/PaymentSettings'
import PaypalCreds from '../../../Components/profile/payment-method/PaypalCreds'
import '../../../styles/profile/payment-method.css'
const AddNewPaymentMethod = () => {
    return (
        <div className="py-10 px-4">
            <div className="lg:grid lg:grid-cols-2  lg:gap-12">
                <PaypalCreds />
                <CreditCardCreds />
                <PaymentSettings />
            </div>
        </div>
    )
}

export default AddNewPaymentMethod
