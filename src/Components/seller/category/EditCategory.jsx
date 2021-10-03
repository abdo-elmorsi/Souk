import { useForm } from 'react-hook-form'
import { useDialog } from 'react-st-modal'

const EditCategory = () => {
    const dialog = useDialog()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        if (data.category) {
            dialog.close(data.category)
        }
    }

    return (
        <div>
            <form
                className="flex flex-col space-y-6 p-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="relative">
                    <label
                        className="add-p-labelt mb-6"
                        htmlFor="inline-full-name"
                    >
                        Enter category Name
                    </label>
                    <input
                        className="add-p-input"
                        type="text"
                        {...register('category', {
                            required: 'category is required',
                        })}
                    />
                </div>

                <div>
                    <span className="err-msg">{errors?.category?.message}</span>
                </div>
                <div className="flex space-x-4 justify-center">
                    <button
                        type="submit"
                        className="px-4 py-2 self-center bg-primary text-white rounded"
                    >
                        edit
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 self-center bg-secondary text-white rounded"
                        onClick={() => dialog.close(false)}
                    >
                        close
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditCategory
