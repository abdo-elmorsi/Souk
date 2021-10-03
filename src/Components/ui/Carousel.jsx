import Slider from 'react-slick'

const Carousel = ({ children }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    }

    return <Slider {...settings}>{children}</Slider>
}

export default Carousel
