import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'

const ProductImage = ({
    tempFile2,
    setTempFile2,
    galleryImages,
    setGalleryImages,
}) => {
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'

    const filePickRef2 = useRef(null)

    const choseFile2 = () => {
        if (filePickRef2.current) {
            filePickRef2.current.click()
        }
    }

    const onFileChange2 = (e) => {
        e.persist()
        const fileURL2 = e.target.files[0]
        if (fileURL2) {
            setTempFile2(fileURL2)
        }
    }

    const handleMultipleImages = (e) => {
        // if (e.target.files) {
        //     setGalleryImages([...galleryImages, ...e.target.files])
        // }
        setGalleryImages([e.target.files])
    }
    return (
        <>
            <input
                onChange={onFileChange2}
                ref={filePickRef2}
                type="file"
                hidden
            />
            <div className="text-md bg-white mt-5 rounded pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('Product_Image')}
                </div>
                <div className="flex items-center mb-3 mt-6 px-5">
                    <div className="w-48">{t('Gallery_Image')}</div>
                    <div className="w-full cursor-pointer">
                        <div className="w-full h-10 bg-gray-200 flex items-center rounded-md">
                            <input
                                multiple
                                type="file"
                                id="multipleImages"
                                name="multipleImages"
                                onChange={handleMultipleImages}
                                className="ml-2"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('Thumbail_image')}</div>
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
            </div>
        </>
    )
}

export default ProductImage
