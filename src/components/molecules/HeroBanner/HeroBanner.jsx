import React from 'react';
import PropTypes from 'prop-types';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HeroBanner.scss";
import Button from '../../atoms/Button/Button';
import { Primary } from '@storybook/blocks';

function HeroBanner({variant}) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <>
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            autoPlay={true}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["desktop"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
                <div className="main-carousel-item-container">
                    <div className="carousel-item">
                        <div className="carousel-item__content-blk">
                            <span className="carousel-item__caption body-small-600">THE BEST PLACE TO PLAY</span>
                            <span className="carousel-item__title display-3">Xbox Consoles</span>
                            <p className="carousel-item__description body-large-400">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                            <Button label={"shop now"} rightIcon='http://localhost:9000/icons/ArrowRight.svg' />
                        </div>
                        <div className="carousel-item__img-blk">
                            <span className="price-circle">
                                <span className="item-price">$299</span>
                            </span>
                            <img src='http://localhost:9000/images/Image.png' className='banner-image' alt="hero banner" />
                        </div>
                    </div>
                    <div className="secondary-carousel-items">
                        <div className="carousel-item">
                            <div className="carousel-item__content-blk">
                                <span className="carousel-item__caption label-3">Summer Sales</span>
                                <h3 className="carousel-item__title">New Google Pixel 6 Pro</h3>
                                <Button label={"shop now"} rightIcon='http://localhost:9000/icons/ArrowRight.svg' labelLevel={7} />
                            </div>
                            <div className="carousel-item__img-blk">
                                <img src='http://localhost:9000/images/Image.png' alt="hero banner" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-item__content-blk">
                                <h3 className="carousel-item__title">Xiaomi FlipBuds Pro</h3>
                                <span className="item-price body-large-600">$299</span>
                                <Button label={"shop now"} rightIcon='http://localhost:9000/icons/ArrowRight.svg' labelLevel={7} />
                            </div>
                            <div className="carousel-item__img-blk">
                                <img src='http://localhost:9000/images/Image.png' alt="hero banner" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-carousel-item-container">
                    <div className="carousel-item">
                        <div className="carousel-item__content-blk">
                            <span className="carousel-item__caption body-small-600">THE BEST PLACE TO PLAY</span>
                            <span className="carousel-item__title display-3">Xbox Consoles-2</span>
                            <p className="carousel-item__description body-large-400">Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.</p>
                            <Button label={"shop now"} rightIcon='http://localhost:9000/icons/ArrowRight.svg' />
                        </div>
                        <div className="carousel-item__img-blk">
                            <span className="price-circle">
                                <span className="item-price">$299</span>
                            </span>
                            <img src='http://localhost:9000/images/Image.png' className='banner-image' alt="hero banner" />
                        </div>
                    </div>
                    <div className="secondary-carousel-items">
                        <div className="carousel-item">
                            <div className="carousel-item__content-blk">
                                <span className="carousel-item__caption label-3">Summer Sales</span>
                                <h3 className="carousel-item__title">New Google Pixel 6 Pro</h3>
                                <Button label={"shop now"} rightIcon='http://localhost:9000/icons/ArrowRight.svg' labelLevel={7} />
                            </div>
                            <div className="carousel-item__img-blk">
                                <img src='http://localhost:9000/images/Image.png' alt="hero banner" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-item__content-blk">
                                <h3 className="carousel-item__title">Xiaomi FlipBuds Pro</h3>
                                <span className="item-price body-large-600">$299</span>
                                <Button label={"shop now"} rightIcon='http://localhost:9000/icons/ArrowRight.svg' labelLevel={7} />
                            </div>
                            <div className="carousel-item__img-blk">
                                <img src='http://localhost:9000/images/Image.png' alt="hero banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    )
}


HeroBanner.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default HeroBanner
