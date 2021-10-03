import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

const ShippingConfig = ({
    tempFile,
    tempFile2,
    setTempFile,
    setTempFile2,
    brandForm,
    handleBrand,
    onSubmit,
}) => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'

    // const [tempFile, setTempFile] = React.useState(null)
    // const [tempFile2, setTempFile2] = React.useState(null)

    const filePickRef = useRef(null)
    const filePickRef2 = useRef(null)

    const choseFile = () => {
        if (filePickRef.current) {
            filePickRef.current.click()
        }
    }
    const choseFile2 = () => {
        if (filePickRef2.current) {
            filePickRef2.current.click()
        }
    }

    const onFileChange = (e) => {
        e.persist()
        const fileURL = e.target.files[0]
        if (fileURL) {
            setTempFile(fileURL)
        }
    }

    const onFileChange2 = (e) => {
        e.persist()
        const fileURL2 = e.target.files[0]
        if (fileURL2) {
            setTempFile2(fileURL2)
        }
    }
    return (
        <>
            <input
                onChange={onFileChange}
                ref={filePickRef}
                type="file"
                hidden
            />
            <input
                onChange={onFileChange2}
                ref={filePickRef2}
                type="file"
                hidden
            />
            <div className="mb-20 text-md bg-white rounded pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('Add_New_Brand_Shop')}
                </div>

                {/* Name */}
                <div className="flex flex-col mb-3 mt-6 px-5">
                    <div className="py-1">{t('Name')}</div>
                    <div className="w-full">
                        <input
                            name="name"
                            type="text"
                            value={brandForm.name}
                            onChange={handleBrand}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>

                {/* Logo (120 * 80) */}
                <div className="flex flex-col my-3 px-5">
                    <div className="w-48 py-1">{t('Logo')} (120 * 80)</div>
                    <div className="w-full cursor-pointer">
                        <div className="w-full h-10 bg-gray-200 flex items-center rounded-md">
                            <div
                                onClick={choseFile}
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'bg-gray-300 py-2 px-5 rounded-r-md'
                                        : 'bg-gray-300 py-2 px-5 rounded-l-md'
                                }
                            >
                                {t('Browse')}
                            </div>
                            {/* here will be value of Browse */}
                            {tempFile && (
                                <div className="text-xs px-2">{tempFile}</div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Banner (1000 * 300) */}
                <div className="flex flex-col my-3 px-5">
                    <div className="w-48 py-1">{t('Banner')} (1000 * 300)</div>
                    <div className="w-full cursor-pointer">
                        <div className="w-full h-10 bg-gray-200 flex items-center rounded-md">
                            <div
                                onClick={choseFile2}
                                className={
                                    currentLanguageCode === 'sa'
                                        ? 'bg-gray-300 py-2 px-5 rounded-r-md'
                                        : 'bg-gray-300 py-2 px-5 rounded-l-md'
                                }
                            >
                                {t('Browse')}
                            </div>
                            {/* here will be value of Browse */}
                            {tempFile2 && (
                                <div className="text-xs px-2">{tempFile2}</div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Meta Title */}
                <div className="flex flex-col my-3 px-5">
                    <div className="py-1">{t('Meta_Title')}</div>
                    <div className="w-full">
                        <input
                            name="metaTitle"
                            type="text"
                            value={brandForm.metaTitle}
                            onChange={handleBrand}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>

                {/* Meta Description */}
                <div className="flex flex-col mt-3 pb-6 border-b border-black px-5">
                    <div className="w-48">{t('Meta_Description')}</div>
                    <div className="w-full cursor-pointer">
                        <textarea
                            className="w-full bg-gray-200 border rounded-md px-5 py-5"
                            rows="4"
                            cols="50"
                            name="metaDesc"
                            defaultValue={brandForm.metaDesc}
                            onChange={handleBrand}
                        ></textarea>
                    </div>
                </div>

                {/* BrandShop Owner */}
                {/* Name */}
                <div className="flex flex-col mb-3 mt-6 px-5">
                    <div className="pb-5 font-semibold">{t('Shop_Owner')}</div>
                    <div className="w-full">
                        <input
                            name="ownerName"
                            type="text"
                            value={brandForm.ownerName}
                            onChange={handleBrand}
                            placeholder={t('Name')}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>

                {/* Username or Email */}
                <div className="flex flex-col my-3 px-5">
                    <div className="w-full">
                        <input
                            name="userNameEmail"
                            type="text"
                            value={brandForm.userNameEmail}
                            onChange={handleBrand}
                            placeholder={t('Username_or_Email')}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="flex flex-col my-3 px-5">
                    <div className="w-full">
                        <input
                            name="password"
                            value={brandForm.password}
                            onChange={handleBrand}
                            type="password"
                            autoComplete="on"
                            placeholder={t('Password')}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>

                {/* Button */}
                <div className="flex flex-col my-3 px-5">
                    <div className="w-full flex justify-end">
                        <button
                            onClick={onSubmit}
                            className="bg-gray-500 text-white px-5 py-2 rounded-md"
                        >
                            {t('Add')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShippingConfig
