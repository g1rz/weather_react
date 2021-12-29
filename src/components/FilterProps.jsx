import React from 'react';

const FilterProps = () => {
    return (
        <div className="sort-form__group">
            <div className="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                <input id="rainy" name="weather-conditions" type="checkbox" value="rainy"/>
                <label aria-label="Дождливо" for="rainy">
                <span className="icon icon--rainy"></span>
                </label>
            </div>
            <div className="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                <input id="sunny" name="weather-conditions" type="checkbox" value="sunny"/>
                <label aria-label="Солнечно" for="sunny">
                <span className="icon icon--sunny"></span>
                </label>
            </div>
            <div className="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                <input id="cloudy" name="weather-conditions" type="checkbox" value="cloudy"/>
                <label aria-label="Облачно" for="cloudy">
                <span className="icon icon--cloudy"></span>
                </label>
            </div>
            <div className="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                <input id="snowy" name="weather-conditions" type="checkbox" value="snowy"/>
                <label aria-label="Снежно" for="snowy">
                <span className="icon icon--snowy"></span>
                </label>
            </div>
            <div className="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                <input id="stormy" name="weather-conditions" type="checkbox" value="stormy"/>
                <label aria-label="Торнадо" for="stormy">
                <span className="icon icon--stormy"></span>
                </label>
            </div>
            <div className="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                <input id="blizzard" name="weather-conditions" type="checkbox" value="blizzard"/>
                <label aria-label="Гроза" for="blizzard">
                <span className="icon icon--blizzard"></span>
                </label>
            </div>
            <div className="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                <input id="metorite" name="weather-conditions" type="checkbox" value="metorite"/>
                <label aria-label="Метеоритный дождь" for="metorite">
                <span className="icon icon--metorite"></span>
                </label>
            </div>
        </div>
    )
}

export default FilterProps;
