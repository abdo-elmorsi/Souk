import { StaticDialog } from 'react-st-modal'
import CustomerReview from './CustomerReview'

export default function ReviewsModal({ isOpen, setOpen, review }) {
    const { comment, user, rating, approve, id } = review

    return (
        <div>
            <StaticDialog
                isOpen={isOpen}
                title="Reviews"
                showCloseIcon={true}
                onAfterClose={() => {
                    setOpen(false)
                }}
            >
                <div className="p-6">
                    <CustomerReview
                        comment={comment}
                        user={user}
                        sellerBtn
                        rating={rating}
                        approve={approve}
                        id={id}
                    />
                </div>
            </StaticDialog>
        </div>
    )
}
