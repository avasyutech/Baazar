import React, { useState, useEffect } from "react";
import { getOrders } from "../../../services/api.js";
import "./OrderHistory.scss";
import Card from "../Card/Card.jsx";
import { useCart } from "../../../context/CartContext";
import Wrapper from "../../../helpers/Wrapper";

const OrderHistory = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { addToCart } = useCart();
    const [showCard, setShowCard] = useState("");
    const mobile = JSON.parse(localStorage.getItem("user")).user.mobile;

    useEffect(() => {
        getOrders(mobile)
            .then((orders) => {
                setMyOrders(orders.reverse());
            })
            .catch((error) => {
                console.error(`Error fetching data: ${error.message}`);
            });
    }, []);

    const viewCards = (id) => {
        if (id === showCard) {
            setShowCard("");
        } else {
            setShowCard(id);
        }
    };

    return (
        <div className="ord-history">
            <span className="label-3 ord-history__ord-title">
                order history
            </span>
            <div className="ord-history__ord-head">
                <span className="label-4">order id</span>
                <span className="label-4">status</span>
                <span className="label-4">date</span>
                <span className="label-4 resp-hide">total</span>
                <span className="label-4 resp-hide">action</span>
            </div>
            <div className="ord-history__ord-table">
                {myOrders.length > 0 ? (
                    myOrders.map((item) => (
                        <Wrapper>
                            <div className="ord-history__ord-table__ord-list">
                                <span className="body-small-500 ord-history__ord-id">
                                    #{item.id}
                                </span>
                                <span className="body-small-600 ord-history__ord-status">
                                    success
                                </span>
                                <span className="body-small-400 ord-history__ord-date">
                                    {item.timestamp}
                                </span>
                                <span className="body-small-400 ord-history__ord-total">
                                    ${item.total} ({item.cartDetails.length}{" "}
                                    Products)
                                </span>
                                <span
                                    className="body-small-600 ord-history__ord-action"
                                    onClick={() => viewCards(item.id)}
                                >
                                    view details
                                </span>
                            </div>
                            {showCard === item.id && (
                                <div className="ord-history__ord-table__ord-cards products-list-grid">
                                    {item.cartDetails.map((card) => (
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
                            )}
                        </Wrapper>
                    ))
                ) : (
                    <span className="no-checkout-cmp body-large-400">
                        No data available
                    </span>
                )}
            </div>
        </div>
    );
};

export default OrderHistory;
