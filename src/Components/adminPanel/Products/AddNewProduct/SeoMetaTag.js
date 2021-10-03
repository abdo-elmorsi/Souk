import React from 'react'
import { useTranslation } from 'react-i18next'

const SeoMetaTag = ({ productForm, handleProductForm }) => {
    const { t } = useTranslation()
    return (
        <>
            <div className="text-md bg-white mt-5 rounded pb-5">
                <div className="border-b border-black px-5 py-5 font-semibold">
                    {t('SEO_Meta_Tags')}
                </div>
                <div className="flex items-center mb-3 mt-6 px-5">
                    <div className="w-48">{t('Meta_Title')}</div>
                    <div className="w-full">
                        <input
                            type="text"
                            name="metaTitle"
                            value={productForm.metaTitle}
                            onChange={handleProductForm}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>
                <div className="flex items-cente mb-3 mt-6 px-5">
                    <div className="w-48">{t('Description')}</div>
                    <div className="w-full cursor-pointer">
                        <textarea
                            className="w-full bg-gray-200 border rounded-md px-5 py-5"
                            rows="4"
                            cols="50"
                            // type="text"
                            // maxLength="150"
                            name="metaDescription"
                            defaultValue={productForm.metaDescription}
                            onChange={handleProductForm}
                        ></textarea>
                    </div>
                </div>
                <div className="flex items-center my-3 px-5">
                    <div className="w-48">{t('Description')}</div>
                    <div className="w-full">
                        <input
                            type="text"
                            name="metaDescription2"
                            value={productForm.metaDescription2}
                            onChange={handleProductForm}
                            className="w-full h-10 bg-gray-200 px-5 rounded-md"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeoMetaTag
