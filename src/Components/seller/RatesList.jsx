import { useState } from 'react'
import ReactPaginate from 'react-paginate'

import '../../styles/pagination/style.css'
import CustomerReview from './CustomerReview'

const RatesList = ({ allReviews }) => {
    const PER_PAGE = 4
    const [currentPage, setCurrentPage] = useState(0)
    const offset = currentPage * PER_PAGE

    const currentPageProducts = allReviews.slice(offset, offset + PER_PAGE)
    const pageCount = Math.ceil(allReviews.length / PER_PAGE)
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }

    return (
        <div className="flex flex-col-reverse">
            <ReactPaginate
                previousLabel={'←'}
                nextLabel={'→'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                previousLinkClassName={'pagination__link'}
                nextLinkClassName={'pagination__link'}
                disabledClassName={'pagination__link--disabled'}
                activeClassName={'pagination__link--active'}
            />
            {currentPageProducts.map(
                ({ comment, user, rating, approve, id }) => (
                    <CustomerReview
                        key={id}
                        comment={comment}
                        user={user}
                        sellerBtn
                        rating={rating}
                        approve={approve}
                        id={id}
                    />
                )
            )}
        </div>
    )
}

export default RatesList
