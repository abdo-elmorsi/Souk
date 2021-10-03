import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useDialog } from 'react-st-modal'

const VerifyPhone = ({ code }) => {
    const dialog = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        if (Number(data.code) === code) {
            toast.success('confirmed')
            dialog.close(true)
        } else {
            alert('code incorrect')
        }
    }

    return (
        <div>
            <form
                className="flex flex-col space-y-6 p-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className="border  border-gray-200 rounded p-4"
                    type="text"
                    {...register('code', { required: 'code is required' })}
                />
                <div>
                    <span className="err-msg">{errors?.code?.message}</span>
                </div>
                <div className="flex space-x-4 justify-center">
                    <button
                        type="submit"
                        className="px-4 py-2 self-center bg-primary text-white rounded"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 self-center bg-secondary text-white rounded"
                        onClick={() => dialog.close(false)}
                    >
                        update info
                    </button>
                </div>
            </form>
        </div>
    )
}

export default VerifyPhone
