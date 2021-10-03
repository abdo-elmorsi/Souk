import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

const ProductVideo = ({
    productForm,
    handleProductForm,
    setTempFile,
    tempFile,
}) => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'

    // const [tempFile, setTempFile] = React.useState(null)
    // console.log('VIDEO::>>>>>', tempFile)

    const filePickRef = useRef(null)

    const choseFile = () => {
        if (filePickRef.current) {
            filePickRef.current.click()
        }
    }

    const onFileChange = (e) => {
        e.persist()
        const fileURL = e.target.files[0]

        if (fileURL) {
            setTempFile(URL.createObjectURL(fileURL))
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
            <div className="text-md bg-white mt-5 rounded pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('Product_Video')}
                </div>
                <div className="flex items-center mb-3 mt-6 px-5">
                    <div className="w-48">{t('Product_Video')}</div>
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
                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('Video_link')}</div>
                    <div className="w-full cursor-pointer">
                        <div className="w-full">
                            <input
                                type="text"
                                name="videoLink2"
                                value={productForm.videoLink2}
                                onChange={handleProductForm}
                                className="w-full h-10 bg-gray-200 px-5 rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductVideo
