import React from "react";
import Badge from "../Badge/Badge";
import Rating from "../Rating/Rating";
import Wrapper from "../../../helpers/Wrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Card.scss";
import { Link } from "react-router-dom";
import { useGlobal } from "../../../context/GlobalContext";

const Card = ({
    id,
    variant,
    image,
    badge,
    rating,
    reviews,
    title,
    price,
    addToCart,
    otherDetails
}) => {
    const { loginSuccess, setLoginSuccess } = useGlobal();
    const getCartData = () => {
        if (loginSuccess) {
            addToCart({ image, title, price, quantity: 1 });
            getNotification();
        }
        else {
            toast.info("please login", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                style: {
                    color: "#757575",
                },
            });
        }
    };

    const getNotification = () => {
        toast.success("Added " + title, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 3000,
            closeButton: false,
            hideProgressBar: false,
            style: {
                color: "#757575",
            },
        });
    };

    return (
        <Wrapper>
            <div className={`card ${variant}`}>
                <div className="card__image">
                    <div className="card__details-opts">
                        <span className="card__details-opts__circle">
                            <span
                                className="heart-icon"
                                aria-hidden="true"
                            ></span>
                        </span>
                        <span
                            className="card__details-opts__circle"
                            onClick={getCartData}
                        >
                            <span
                                className="cart-icon"
                                aria-hidden="true"
                            ></span>
                        </span>
                        <Link
                            to={`/products/${id}`}
                            key={id}
                            state={{
                                id: id,
                                otherDetails: otherDetails
                            }}
                            className="card__details-opts__circle"
                        >
                            <span className="view-icon" aria-hidden="true"></span>
                        </Link>
                    </div>
                    <img
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="card__tag">
                    <Badge label={badge} variant={badge} />
                </div>
                <div className="card__content">
                    <div className="card__content-rating">
                        <Rating value={rating} />
                        <span className="body-tiny-400 card__content-rating__text">
                            ({reviews})
                        </span>
                    </div>
                    <p className="body-small-400 card__content-title">
                        {title}
                    </p>
                    <p className="body-small-600 card__content-price">
                        ${price}
                    </p>
                    <ToastContainer />
                </div>
            </div>
        </Wrapper>
    );
};

export default Card;
