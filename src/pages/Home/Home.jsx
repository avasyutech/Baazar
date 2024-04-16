import React from 'react';
import "./Home.scss";
import HeroBanner from "../../components/molecules/HeroBanner/HeroBanner"
import CountdownClock from '../../components/atoms/Countdown-clock/CountDownClock';
import ViewAll from '../../components/atoms/ViewAll/ViewAll';
import HomeBlk from '../../helpers/Home-wrapper/HomeBlk';
import HeadingSection from '../../components/molecules/HeadingSection/HeadingSection';
import CardsRendering from '../../components/molecules/CardsRendering/CardsRendering';
import Image from '../../components/atoms/Image/Image';
import SmallBanner from '../../components/molecules/SmallBanner/SmallBanner';
import Advertisment from '../../components/molecules/Advertisment/Advertisment';
import Banner from '../../components/molecules/Banner/Banner';

function Home() {
    return (
        <>
            <main className="home-main-container">
                <HeroBanner />

                <section className="best-deals-wrapper">
                    <HomeBlk className="best-deals-container w-90">
                        <div className="best-deals__top-section">
                            <div className="best-deals__heading-blk">
                                <h3 className="best-deals__heading-blk__label">best deals</h3>
                                <div className="best-deals__heading-blk__deal-ends-blk">
                                    <span className="deal-end-label body-small-400">Deals ends in</span>
                                    <CountdownClock targetDate="2024-01-22" />
                                </div>
                            </div>
                            <div className="best-deals__view-all-btn">
                                <ViewAll variant={"blue"} />
                            </div>
                        </div>
                        <div className="best-deals__products">
                            <div className="products-list-grid">
                                <CardsRendering label="bestdeal" />
                            </div>
                        </div>
                    </HomeBlk>
                </section>

                <section className="category-wrapper w-90">
                    <h1 className="category-wrapper__heading">shop by category</h1>
                    <div className="category-wrapper__category-list">
                        <Image image={"http://localhost:9000/images/Computers.png"} label={"Computer & Laptop"} />
                        <Image image={"http://localhost:9000/images/SmartPhones.png"} label={"SmartPhone"} />
                        <Image image={"http://localhost:9000/images/HeadPhones.png"} label={"Headphones"} />
                        <Image image={"http://localhost:9000/images/products/monitor/500/m2.jpg"} label={"Accessories"} />
                        <Image image={"http://localhost:9000/images/gamingconsole.png"} label={"Gaming Console"}/>
                    </div>
                </section>

                <section className="features-wrapper w-90 ptb-7">
                    <div className="adverrisement-blk">
                        <Advertisment theme={"yellow"} label={"COMPUTER & ACCESSORIES"} category={"electronics"} discount={"32"} btnVarient={"primary"} imgUrl={"http://localhost:9000/images/Computer-Accessories.png"} />
                    </div>
                    <div className="featured-items-container">
                        <HeadingSection heading={"featured products"} viewColor={"orange"} />
                        <div className="featured__products">
                            <div className="products-list-grid">
                                <CardsRendering label="featured" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="new-products-wrapper w-90">
                    <SmallBanner labelColor={"bestDeals"} theme={"white"} productTitle={"Samsung Galaxy S21 Ultra 5G"} productDesc={"Packed with a powerful Exynos processor, a stunning Quad HD+ display."} />
                    <SmallBanner labelColor={"discount"} theme={"black"} productTitle={"Bose 35 II Wireless Headphones"} productDesc={"Experience world-class noise cancellation with the Bose QuietComfort 35 II headphones."} />
                </section>
                <div className='banner-wrapper ptb-7 w-90'>
                    <Banner />
                </div>
              
                
            </main>
        </>
    )
}

export default Home;
