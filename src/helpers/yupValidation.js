import * as Yup from 'yup'

export const loginValidation = Yup.object().shape({
    email: Yup.string()
        .required('this field is required')
        .email('please enter a valid email'),
    password: Yup.string()
        .required('this field is required')
        .min(6, 'password must contain at least 6 characters'),
})

export const signUpValidation = Yup.object().shape({
    firstName: Yup.string().required('this field is required'),
    lastName: Yup.string().required('this field is required'),
    email: Yup.string()
        .required('this field is required')
        .email('please enter a valid email'),
    password: Yup.string()
        .required('this field is required')
        .min(6, 'password must contain at least 6 characters'),
})

export const checkoutValidation = Yup.object().shape({
    country: Yup.string().required('this field is required'),
    city: Yup.string().required('this field is required'),
    address: Yup.string().required('this field is required'),
    postalCode: Yup.string()
        .required('this field is required')
        .min(6, 'must be least 6 numbers'),
    phone: Yup.string().required('this field is required'),
})

export const productValidation = Yup.object().shape({
    brand: Yup.string().required('this field is required'),
    color: Yup.string().required('this field is required'),
    details: Yup.string().required('this field is required'),
    discountData: Yup.date().required('this field is required'),
    discountPrice: Yup.number().required('this field is required'),
    originalPrice: Yup.number().required('this field is required'),
    mainMaterial: Yup.string().required('this field is required'),
    minimumPurchaseQty: Yup.number().required('this field is required'),
    modal: Yup.string().required('this field is required'),
    name: Yup.string().required('this field is required'),
    prouductionLine: Yup.string().required('this field is required'),
    productionCountry: Yup.string().required('this field is required'),
    quantity: Yup.number().required('this field is required'),
    seoDescription: Yup.string().required('this field is required'),
    seoTags: Yup.string().required('this field is required'),
    shippingDays: Yup.number().required('this field is required'),
    size: Yup.string().required('this field is required'),
    sku: Yup.string().required('this field is required'),
    subcategory: Yup.string().required('this field is required'),
    tags: Yup.string().required('this field is required'),
    tax: Yup.number().required('this field is required'),
    unit: Yup.string().required('this field is required'),
    unitPrice: Yup.string().required('this field is required'),
    website: Yup.string().required('this field is required'),
    weight: Yup.number().required('this field is required'),
})
