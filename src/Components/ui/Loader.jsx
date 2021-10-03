import loader from '../../assets/loader.gif'
const Loader = ({ msg = 'loading...' }) => {
    return (
        <div className="h-screen z-50 w-screen fixed bottom-0 top-0 left-0 bg-white flex items-center justify-center opacity-70 ">
            <div className="text-center">
                <h4 className="text-primary mb-2">{msg}</h4>
                <img src={loader} alt="loader" className="w-20 h-20" />
            </div>
        </div>
    )
}

export default Loader
