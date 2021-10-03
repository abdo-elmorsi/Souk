import '../../styles/PageNotFound/style.css'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="error">
            <div className="error-page-wrap">
                <article className="error-page gradient">
                    <hgroup>
                        <h1>404</h1>
                        <h2>oops! page not found</h2>
                    </hgroup>
                    <Link to="/" title="Back to site" className="error-back">
                        back
                    </Link>
                </article>
            </div>
        </div>
    )
}
export default NotFound
