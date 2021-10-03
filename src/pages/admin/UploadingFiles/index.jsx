import React, { useRef } from 'react'
import Navbar from '../../../Components/adminPanel/Navbar'
import Sidebar from '../../../Components/adminPanel/Sidebar'
import Dropdown from '../../../Components/adminPanel/Dropdown'
import Header from '../../../Components/adminPanel/UploadingFile/Header'
import ContHeader from '../../../Components/adminPanel/UploadingFile/ContHeader'
import ContBody from '../../../Components/adminPanel/UploadingFile/ContBody'
import ContBottom from '../../../Components/adminPanel/UploadingFile/ContBottom'
import { motion } from 'framer-motion'
import { itemSlideUp } from '../../../helpers/animation'

const UploadingFiles = () => {
    const [showDropdown, setShowDropdown] = React.useState(false)
    const [tempFile, setTempFile] = React.useState(null)
    console.log('Choosing FileName:>>>>', tempFile)

    const filePickRef = useRef(null)

    const choseFile = () => {
        if (filePickRef.current) {
            filePickRef.current.click()
        }
    }

    const onFileChange = (e) => {
        e.persist()
        const fileURL = e.target.files

        if (fileURL) {
            setTempFile(fileURL)
        }
    }

    return (
        <div className="flex">
            {/* SetDropdown */}
            <Dropdown
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown}
            />
            {/* Sidebar Component */}
            <Sidebar />

            <motion.div
                variants={itemSlideUp}
                initial="hidden"
                animate="visible"
                className="bg-backgroundDB w-full px-8"
            >
                {/* Navbar Component */}
                <Navbar
                    showDropdown={showDropdown}
                    setShowDropdown={setShowDropdown}
                />

                <div className="mx-auto mt-5 mb-20 max-w-screen-xl">
                    <input
                        onChange={onFileChange}
                        ref={filePickRef}
                        type="file"
                        hidden
                    />

                    {/* Header - Select File & Update New */}
                    <Header choseFile={choseFile} />

                    {/* Container Header - Sorted By Newest, Selected only & Search */}
                    <ContHeader />

                    {/* Container Body*/}
                    <div className="flex flex-col bg-white px-5">
                        <ContBody />

                        {/* Container Bottom */}
                        <ContBottom choseFile={choseFile} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default UploadingFiles
