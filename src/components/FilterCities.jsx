import React from 'react'

const FilterCities = () => {
    return (
        <div className="sort-form__group">
            <div className="sort-form__input-wrapper input-wrapper input-wrapper--search">
                <input id="search" type="search" name="city-search" placeholder="Название города" />
                <label for="search" aria-label="Поиск городов"></label>
            </div>
        </div>
    )
}

export default FilterCities
