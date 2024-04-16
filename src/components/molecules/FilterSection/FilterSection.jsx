import React from "react";
import { useState } from "react";
import Button from "../../atoms/Button/Button"
import MultiRangeSlider from "multi-range-slider-react";
import "./FilterSection.scss";

export default function FilterSection({handleChange, checkedValue, handleCheckboxChange , handleInput, minValue, maxValue,displayFilterBlk}) {


  function filterBlkFunction() {
    displayFilterBlk(false);
  }


  return (
    <>
      <form className="filter">
        <div className="filter__close-btn body-small-600">
          <span className="body-small-600">Filters</span>
          <span className="body-small-600" onClick={filterBlkFunction}>Close</span>
        </div>
        <div className="filter__flt-type">
          <span className="filter__flt-type__category label-2">Category</span>
          <div className="filter__flt-type__flt-value">
            <input
            onChange = {handleChange}
              className="filter__flt-input"
              type="radio"
              id="electronicDevice"
              name="category"
              value=''
            />
            <label
              className="filter__flt-label body-small-400"
              htmlFor="electronicDevice"
            >
              Electronic Devices
            </label>
          </div>
          <div className="filter__flt-type__flt-value">
            <input
            onChange = {handleChange}
              className="filter__flt-input"
              type="radio"
              id="laptop"
              name="category"
              value="Laptop"
            />
            <label className="filter__flt-label body-small-400" htmlFor="laptop">
              Laptop
            </label>
          </div>
          <div className="filter__flt-type__flt-value">
            <input
            onChange = {handleChange}
              className="filter__flt-input"
              type="radio"
              id="smartphone"
              name="category"
              value="SmartPhone"
            />
            <label
              className="filter__flt-label body-small-400"
              htmlFor="smartphone"
            >
              SmartPhone
            </label>
          </div>
          <div className="filter__flt-type__flt-value">
            <input
            onChange = {handleChange}
              className="filter__flt-input"
              type="radio"
              id="headphone"
              name="category"
              value="Headphone"
            />
            <label
              className="filter__flt-label body-small-400"
              htmlFor="headphone"
            >
              Headphone
            </label>
          </div>
          <div className="filter__flt-type__flt-value">
            <input
            onChange = {handleChange}
              className="filter__flt-input"
              type="radio"
              id="gamingConsole"
              name="category"
              value="GamingConsole"
            />
            <label
              className="filter__flt-label body-small-400"
              htmlFor="gamingConsole"
            >
              Gaming Console
            </label>
          </div>
          <div className="filter__flt-type__flt-value">
            <input
            onChange = {handleChange}
              className="filter__flt-input"
              type="radio"
              id="monitor"
              name="category"
              value="Monitor"
            />
            <label className="filter__flt-label body-small-400" htmlFor="monitor">
              Monitor
            </label>
          </div>
        </div>
        <div className="filter__flt-type">
          <span className="filter__flt-type__category label-2">Price range</span>
          <MultiRangeSlider
            min={100}
            max={5000}
            step={5}
            minValue={minValue}
            maxValue={maxValue}
            onInput={(e) => {
              handleInput(e);
            }}
          />
          <div className="filter__flt-type__price-value">
            <span>{minValue}</span>
            <span>{maxValue}</span>
          </div>
        </div>
        <div className="filter__flt-type">
          <span className="filter__flt-type__category label-2">
            Popular Brands
          </span>
          <div className="filter__brand">
            <div className="filter__flt-type__flt-brand-value">
              <input
              onChange = {(e) => handleCheckboxChange(e.target.value)}
                className="filter__flt-input"
                type="checkbox"
                id="apple"
                name="brand"
                value="apple"
                checked={checkedValue.includes('apple')}
              />
              <label className="filter__flt-label body-small-400" htmlFor="apple">
                Apple
              </label>
            </div>
            <div className="filter__flt-type__flt-brand-value">
              <input
              onChange = {(e) => handleCheckboxChange(e.target.value)}
                className="filter__flt-input"
                type="checkbox"
                id="microsoft"
                name="brand"
                value="microsoft"
                checked={checkedValue.includes('microsoft')}
              />
              <label
                className="filter__flt-label body-small-400"
                htmlFor="microsoft"
              >
                Microsoft
              </label>
            </div>
            <div className="filter__flt-type__flt-brand-value">
              <input
              onChange = {(e) => handleCheckboxChange(e.target.value)}
                className="filter__flt-input"
                type="checkbox"
                id="google"
                name="brand"
                value="google"
                checked={checkedValue.includes('google')}
              />
              <label
                className="filter__flt-label body-small-400"
                htmlFor="google"
              >
                Google
              </label>
            </div>
            <div className="filter__flt-type__flt-brand-value">
              <input
              onChange = {(e) => handleCheckboxChange(e.target.value)}
                className="filter__flt-input"
                type="checkbox"
                id="samsung"
                name="brand"
                value="samsung"
                checked={checkedValue.includes('samsung')}
              />
              <label
                className="filter__flt-label body-small-400"
                htmlFor="samsung"
              >
                Samsung
              </label>
            </div>
            <div className="filter__flt-type__flt-brand-value">
              <input
              onChange = {(e) => handleCheckboxChange(e.target.value)}
                className="filter__flt-input"
                type="checkbox"
                id="dell"
                name="brand"
                value="dell"
                checked={checkedValue.includes('dell')}
              />
              <label className="filter__flt-label body-small-400" htmlFor="dell">
                Dell
              </label>
            </div>
            <div className="filter__flt-type__flt-brand-value">
              <input
              onChange = {(e) => handleCheckboxChange(e.target.value)}
                className="filter__flt-input"
                type="checkbox"
                id="hp"
                name="brand"
                value="hp"
                checked={checkedValue.includes('hp')}
              />
              <label className="filter__flt-label body-small-400" htmlFor="hp">
                HP
              </label>
            </div>
            <div className="filter__flt-type__flt-brand-value">
              <input
              onChange = {(e) => handleCheckboxChange(e.target.value)}
                className="filter__flt-input"
                type="checkbox"
                id="sony"
                name="brand"
                value="sony"
                checked={checkedValue.includes('sony')}
              />
              <label className="filter__flt-label body-small-400" htmlFor="sony">
                Sony
              </label>
            </div>
            <div className="filter__flt-type__flt-brand-value">
              <input
              onChange = {(e) => handleCheckboxChange(e.target.value)}
                className="filter__flt-input"
                type="checkbox"
                id="lg"
                name="brand"
                value="lg"
                checked={checkedValue.includes('lg')}
              />
              <label className="filter__flt-label body-small-400" htmlFor="lg">
                LG
              </label>
            </div>
          </div>
        </div>
      </form>
      <div className="filter__result-blk">
        <Button label={"Show results"} onClick={filterBlkFunction} labelLevel={7} />
      </div>
    </>
  );
}
