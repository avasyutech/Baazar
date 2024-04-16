import React from "react";
import "./BrowseHistory.scss";
import { useGlobal } from "../../../context/GlobalContext";
import Card from "../Card/Card";
import { useCart } from "../../../context/CartContext";
import Wrapper from "../../../helpers/Wrapper";

const BrowseHistory = () => {
    const { searchHistory, setSearchHistory } = useGlobal();
    const { addToCart } = useCart();

    return (
        <div className="browse-history">
            <p className="body-xl-600">Browsing History</p>
            <div className="browse-history__wrapper">
                {searchHistory.length > 0 ? (
                    searchHistory
                        .map((item) => (
                            <Wrapper key={item.timestamp}>
                                <div className="browse-history__wrapper-text">
                                    <p className="body-small-600">
                                        {item.timestamp}
                                    </p>
                                </div>
                                <div className="browse-history__wrapper-cards products-list-grid">
                                    {item.results.map((card) => (
                                        <Card
                                            key={card.id}
                                            variant="rating"
                                            id={card.id}
                                            image={card.image}
                                            badge={card.badge}
                                            rating={card.public.rating}
                                            reviews={card.public.reviews}
                                            title={card.title}
                                            price={card.price}
                                            addToCart={() => addToCart(card)}
                                            otherDetails={card}
                                        />
                                    ))}
                                </div>
                            </Wrapper>
                        ))
                        .reverse()
                ) : (
                    <span className="no-checkout-cmp body-large-400">
                        No browse data available
                    </span>
                )}
            </div>
        </div>
    );
};

export default BrowseHistory;
