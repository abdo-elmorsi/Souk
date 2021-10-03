import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../Components/ui/Loader'
import { updateProfileAvatar } from '../../../redux/slices/profileSlice'


const UpdateAvatar = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()

  
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { auth, isProfileUpdate } = useSelector((state) => ({
        auth: state.auth,
        isProfileUpdate: state.loadingState.isProfileUpdate,
    }))

    const onSubmit = async (data) => {
        const formData = new FormData()
        if (data.avatar && data.avatar.length > 0) {
            formData.append('avatar', data.avatar[0])
        }
        if (formData.has('avatar')) {
            dispatch(
                updateProfileAvatar({ avatar: formData, token: auth.token })
            )
        }
    }

    return (
        <>
            {isProfileUpdate && <Loader msg="updating..." />}
            {!isProfileUpdate && (
                <div className="profile-update-section bg-white rounded mt-10">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full px-4"
                    >
                        <div className="form-grid">
                            <div className="label-container">
                                <label
                                    className="form-label"
                                    htmlFor="new-avatar"
                                >
                                    change avatar
                                </label>
                            </div>
                            <div className="col-span-4">
                                <input
                                    className="form-input"
                                    type="file"
                                    {...register('avatar', {
                                        required: true,
                                        validate: value => value && value[0].size <= 1000000
                                      })}
                                />
                                <div>
                                    <span className="err-msg">
                                    {errors.avatar?.type === 'required' && "image is required"}
                                    {errors.avatar?.type === 'validate' && "image is too large"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="update-btn" type="submit">
                                {t('Update_avatar')}
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default UpdateAvatar
