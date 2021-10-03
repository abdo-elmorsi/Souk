import { motion } from 'framer-motion'

import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import ScrollReveal from '../../../Components/ui/ScrollReveal'
import { slideDown, slideUp } from '../../../helpers/animation'

import '../../../styles/profile/update.css'

import * as ROUTES from '../../../constants/routes'
import { Link } from 'react-router-dom'

const ManageProfile = () => {
    const { t } = useTranslation()

    const { profile } = useSelector((state) => ({
        profile: state.profile,
    }))

    return (
        <div className="profile-update-section">
            <ScrollReveal variants={slideUp} className="form-container mb-6">
                <motion.h2
                    variants={slideDown}
                    initial="hidden"
                    animate="visible"
                    className="update-heading"
                >
                    {t('Profile_Info')}
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="grid gap-6 grid-cols-2">
                        <p className="font-bold">{t('First Name')}:</p>
                        <p className="text-base">{profile?.firstName || ''}</p>
                        <p className="font-bold">{t('Last Name')}:</p>
                        <p className="text-base">{profile?.lastName || ''}</p>
                        <p className="font-bold">{t('Country')}:</p>
                        <p className="text-base">{profile?.country || ''}</p>
                        <p className="font-bold">{t('Address')} 1:</p>
                        <p className="text-base">{profile?.address1 || ''}</p>
                        <p className="font-bold">{t('Address')} 2:</p>
                        <p className="text-base">{profile?.address2 || ''}</p>
                    </div>
                    <Link
                        to={ROUTES.PROFILE_UPDATE_INFO}
                        className="update-btn justify-self-center"
                    >
                        {t('update')}
                    </Link>
                </div>
            </ScrollReveal>
            <ScrollReveal variants={slideUp} className="form-container mb-6">
                <motion.h2
                    variants={slideDown}
                    initial="hidden"
                    animate="visible"
                    className="update-heading"
                >
                    {t('email')}
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="grid gap-6 grid-cols-2">
                        <p className="font-bold">Email:</p>
                        <p className="text-base">{profile?.email || ''}</p>
                    </div>
                    <Link
                        to={ROUTES.PROFILE_UPDATE_EMAIL}
                        className="update-btn justify-self-center"
                    >
                        {t('update')}
                    </Link>
                </div>
            </ScrollReveal>
            <ScrollReveal variants={slideUp} className="form-container mb-6">
                <motion.h2
                    variants={slideDown}
                    initial="hidden"
                    animate="visible"
                    className="update-heading"
                >
                    {t('Password')}
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="grid gap-6 grid-cols-2">
                        <p className="font-bold">{t('Password')}:</p>
                        <p className="text-base">********</p>
                    </div>
                    <Link
                        to={ROUTES.PROFILE_UPDATE_PASSWORD}
                        className="update-btn justify-self-center"
                    >
                        {t('update')}
                    </Link>
                </div>
            </ScrollReveal>
            <ScrollReveal variants={slideUp} className="form-container mb-6">
                <motion.h2
                    variants={slideDown}
                    initial="hidden"
                    animate="visible"
                    className="update-heading"
                >
                    {t('phone')}
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="grid gap-6 grid-cols-2">
                        <p className="font-bold">{t('phone')}:</p>
                        <p className="text-base">{profile?.phone || ''}</p>
                    </div>
                    <Link
                        to={ROUTES.PROFILE_UPDATE_PHONE}
                        className="update-btn justify-self-center"
                    >
                        {t('update')}
                    </Link>
                </div>
            </ScrollReveal>
            <ScrollReveal variants={slideUp} className="form-container mb-6">
                <motion.h2
                    variants={slideDown}
                    initial="hidden"
                    animate="visible"
                    className="update-heading"
                >
                    {t('avatar')}
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="grid gap-6 grid-cols-2">
                        <p className="font-bold">{t('avatar')}</p>
                    </div>
                    <Link
                        to={ROUTES.PROFILE_UPDATE_AVATAR}
                        className="update-btn justify-self-center"
                    >
                        {t('update')}
                    </Link>
                </div>
            </ScrollReveal>
        </div>
    )
}

export default ManageProfile
