import React, { useState, useEffect } from "react";
import Wrapper from "../../../helpers/Wrapper";
import Card from "../../atoms/Card/Card";
import { filterByCategory } from "../../../services/api";
import { useCart } from "../../../context/CartContext";
import "./CardsRendering.scss";
import { useGlobal } from "../../../context/GlobalContext";

const CardsRendering = ({
    category = "",
    selected = "",
    search = "",
    sort = "",
    checked = [],
    minPrice,
    maxPrice,
    label = "",
    resultLength = "",
}) => {
    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const { addToCart } = useCart();
    const { searchHistory, setSearchHistory } = useGlobal();

    useEffect(() => {
        filterByCategory(category, label)
            .then((filteredData) => {
                setOriginalData(filteredData);
                setData(filteredData);
            })
            .catch((error) => {
                console.error(`Error fetching data: ${error.message}`);
            });
    }, [category]);

    const filterDataBySearch = (search) => {
        if (search) {
            const filteredData = originalData.filter((item) => {
                return item.title.toLowerCase().includes(search.toLowerCase());
            });

            const searchResult = {
                searchQuery: search,
                results: filteredData,
                timestamp: new Date().toLocaleDateString(),
            };

            setSearchHistory((prevSearchHistory) => [
                ...prevSearchHistory,
                searchResult,
            ]);
            setData(filteredData);
        } else {
            setData(originalData);
        }
    };

    const sortTheData = (sortOption) => {
        sortOption = sortOption.toLowerCase();
        let sortedData = [...data];

        switch (sortOption) {
            case "popular":
                sortedData.sort((a, b) => {
                    const popularityA = a.public.rating * a.public.reviews;
                    const popularityB = b.public.rating * b.public.reviews;
                    return popularityB - popularityA;
                });
                break;
            case "rating":
                sortedData.sort((a, b) => b.public.rating - a.public.rating);
                break;
            case "title":
                sortedData.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "price":
                sortedData.sort((a, b) => a.price - b.price);
                break;
            default:
                sortedData.sort((a, b) => a.title.localeCompare(b.title));
        }

        setData(sortedData);
    };

    const filterDataByCategory = (selected) => {
        let newData = checked.length > 0 ? data : originalData;

        const filteredData = newData.filter((item) => {
            return (
                item.category.toLowerCase() == selected.toLowerCase() ||
                item.brand.toLowerCase() == selected.toLowerCase()
            );
        });

        setData(filteredData);
    };

    const filterByBrand = (checked) => {
        if (checked.length !== 0) {
            const tempItems = checked.map((checkedBrand) => {
                const filteredData = originalData.filter(
                    (item) =>
                        item.brand.toLowerCase() === checkedBrand.toLowerCase()
                );
                return filteredData;
            });
            setData(tempItems.flat());
        } else {
            setData(originalData);
        }
    };

    const filterByPrice = (minPrice, maxPrice) => {
        const filteredData = data.filter((item) => {
            return item.price <= maxPrice && item.price >= minPrice;
        });

        setData(filteredData);
    };

    useEffect(() => {
        filterByPrice(minPrice, maxPrice);
    }, [minPrice, maxPrice]);

    useEffect(() => {
        filterByBrand(checked);
    }, [checked]);

    useEffect(() => {
        filterDataByCategory(selected);
    }, [selected]);

    useEffect(() => {
        filterDataBySearch(search);
    }, [search]);

    useEffect(() => {
        sortTheData(sort);
    }, [sort]);

    if (data.length >= 0 && resultLength) {
        resultLength(data.length);
    }

    return (
        <Wrapper>
            {data.length > 0 ? (
                data.map((item) => (
                    <Card
                        key={item.id}
                        variant="rating"
                        id={item.id}
                        image={item.image}
                        badge={item.badge}
                        rating={item.public.rating}
                        reviews={item.public.reviews}
                        title={item.title}
                        price={item.price}
                        addToCart={() => addToCart(item)}
                        otherDetails={item}
                    />
                ))
            ) : (
                <div className="no-products-data">
                    <span className="no-checkout-cmp body-large-400">
                        No data available
                    </span>
                </div>
            )}
        </Wrapper>
    );
};

export default CardsRendering;
