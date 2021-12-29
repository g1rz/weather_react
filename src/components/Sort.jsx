import React from 'react';

const Sort = () => {
    return (
        <div className="sort-form__group">
            <div className="sort-form__input-wrapper input-wrapper input-wrapper--radio">
                <input id="alphabet-sort" type="radio" name="alphabet-sort" value="alphabet-sort" checked />
                <label for="alphabet-sort" aria-label="Сортировка по алфавиту">
                <span className="icon icon--arrow-down"></span>
                </label>
            </div>
            <div className="sort-form__input-wrapper input-wrapper input-wrapper--radio">
                <input id="alphabet-sort-reverse" type="radio" name="alphabet-sort" value="alphabet-sort-reverse" />
                <label for="alphabet-sort-reverse" aria-label="Сортировка по алфавиту в обратном направлении">
                <span className="icon icon--arrow-up"></span>
                </label>
            </div>
        </div>
    )
}

export default Sort;
