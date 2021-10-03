import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form'
import { useDialog } from 'react-st-modal'
import { useTranslation } from 'react-i18next'

const EditDeliverStatus = () => {
    const dialog = useDialog()
    const { t } = useTranslation()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        if (data.status) {
            dialog.close(data.status)
        }
    }

    return (
        <div>
            <form
                className="flex flex-col space-y-6 p-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="relative">
                    <select
                        className="add-p-select"
                        {...register('status', {
                            required: 'status is required',
                        })}
                    >
                        <option>Pending</option>
                        <option>On Going</option>
                        <option>Delivered</option>
                    </select>
                    <div className="add-p-icon">
                        <span className="text-md">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                    </div>
                </div>

                <div>
                    <span className="err-msg">{errors?.status?.message}</span>
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="px-4 py-2 self-center bg-primary text-white rounded"
                    >
                        {t('update')}
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 self-center bg-secondary text-white rounded"
                        onClick={() => dialog.close(false)}
                    >
                        {t('Close')}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditDeliverStatus
