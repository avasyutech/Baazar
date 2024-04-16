import React, { useState } from 'react';
import Wrapper from '../../helpers/Wrapper';
import CardsRendering from '../../components/molecules/CardsRendering/CardsRendering';
import Dropdown from '../../components/atoms/DropDown/DropDown';
import FilterSection from '../../components/molecules/FilterSection/FilterSection';
import InputBox from '../../components/atoms/InputBox/InputBox';
import './Products.scss';

function Products() {
    const sortOptions = ['Popular', 'Rating', "Title", "Price"];
    const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
    const [searchedValue, setSearchedValue] = useState();
    const [selectedValue, setSelectedValue] = useState('');
    const [checkedValue, setCheckedValue] = useState([]);
    const [minValue, setMinValue] = useState(1000);
    const [maxValue, setMaxValue] = useState(2000);
    const [results, setResults] = useState("");
    const [showFilter, setShowFilter] = useState(false);

    const handleInput = (e) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);
    };

    const productSearch = (search) => {
        setSearchedValue(search);
    }

    const categoryChange = (e) => {
        setSelectedValue(e.target.value);
    }

    const handleCheckboxChange = (filter) => {
        const currentIndex = checkedValue.indexOf(filter);
        const newFilters = [...checkedValue];
        if (currentIndex === -1) {
            newFilters.push(filter);
        }
        else {
            newFilters.splice(currentIndex, 1);
        }
        setCheckedValue(newFilters);
    }

    const displayFilterBlk = (data) => {
        setShowFilter(data)
    }


    return (
        <Wrapper>
            <section className='products-main-wrapper'>
                <div className='products-grid-container'>
                    <div className={showFilter ? 'products__filter-blk show' : 'products__filter-blk' }>
                        <FilterSection selectedValue={selectedValue} setSelectedValue={setSelectedValue} setCheckedValue={setCheckedValue} checkedValue={checkedValue} handleCheckboxChange={handleCheckboxChange} handleChange={categoryChange} minValue={minValue} maxValue={maxValue} handleInput={handleInput} displayFilterBlk={displayFilterBlk} />
                    </div>
                    <div className='products__list-blk'>
                        <div className='sorting-container'>
                            <InputBox type="text" id="search" label="search" placeholder="Search for anything..." handleSearch={productSearch} />
                            <div className='sorting-blk'>
                                <span className='body-small-400'>Sort by:</span>
                                <Dropdown options={sortOptions} selected={selectedSort} setSelected={setSelectedSort} variant='sort' />
                                <div className='d-flex sorting-blk__filter-blk' onClick={() => setShowFilter(true)}>
                                <span className='body-small-400'>Filter </span>
                                <img className='sorting-blk__filter-icon' src="http://localhost:9000/icons/MagnifyingGlass.svg"  alt="filter icon" />
                                </div>
                            </div>
                        </div>
                        <div className='selections-blk'>
                            <div className='selections-blk__active-filters'>
                                <span className='active-filter-label body-small-400'>
                                    Active Filters:
                                </span>
                                {checkedValue.map((filter, index) => (
                                    <span
                                        key={index}
                                        className='active-filter body-small-400'
                                        type='button'
                                        aria-label='cancel this filter'>
                                        {filter}
                                    </span>
                                ))}
                            </div>
                            {results? (
                                <div className='selections-blk__results'>
                                    <span className='results-count body-small-600'>{results}</span>
                                    <span className='results-found-label body-small-400'>
                                        Results found
                                    </span>
                                </div>
                                ) : (
                                <span className='results-found-label body-small-400'>No Result Found</span>
                                )
                            }   
                        </div>
                        <div className='products-list-grid'>
                            <CardsRendering minPrice={minValue} selected={selectedValue} maxPrice={maxValue} checked={checkedValue} category="" search={searchedValue} sort={selectedSort} resultLength={setResults} />
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
}

export default Products;
