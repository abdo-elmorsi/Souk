import React from 'react'
import { isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form'
import '../../styles/ui/phone-input.css'
import 'react-phone-number-input/style.css'

const PhoneInput = ({
    control,

    placeholder = 'ex: +212 698764534',
}) => {
    return (
        <PhoneInputWithCountry
            name="phone"
            control={control}
            defaultCountry="MA"
            placeholder={placeholder}
            withCountryCallingCode
            rules={{
                required: true,
                validate: isValidPhoneNumber,
            }}
        />
    )
}

export default PhoneInput
