import './assets/css/style.css';

function App() {
  return (

      <section class="weather-app">
        <h1 class="visually-hidden">Прогноз погоды</h1>
        <div class="weather-app__content weather-content">
          <section class="sort-form weather-content__sort">
            <h2 class="visually-hidden">Форма сортировки</h2>
            <form action="#" method="GET">
              <div class="sort-form__group">
                <div class="sort-form__input-wrapper input-wrapper input-wrapper--radio">
                  <input id="alphabet-sort" type="radio" name="alphabet-sort" value="alphabet-sort" checked />
                  <label for="alphabet-sort" aria-label="Сортировка по алфавиту">
                    <span class="icon icon--arrow-down"></span>
                  </label>
                </div>
                <div class="sort-form__input-wrapper input-wrapper input-wrapper--radio">
                  <input id="alphabet-sort-reverse" type="radio" name="alphabet-sort" value="alphabet-sort-reverse" />
                  <label for="alphabet-sort-reverse" aria-label="Сортировка по алфавиту в обратном направлении">
                    <span class="icon icon--arrow-up"></span>
                  </label>
                </div>
              </div>
              <div class="sort-form__group">
                <div class="sort-form__input-wrapper input-wrapper input-wrapper--search">
                  <input id="search" type="search" name="city-search" placeholder="Название города" />
                  <label for="search" aria-label="Поиск городов"></label>
                </div>
              </div>
              <div class="sort-form__group">
                <div class="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                  <input id="rainy" name="weather-conditions" type="checkbox" value="rainy"/>
                  <label aria-label="Дождливо" for="rainy">
                    <span class="icon icon--rainy"></span>
                  </label>
                </div>
                <div class="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                  <input id="sunny" name="weather-conditions" type="checkbox" value="sunny"/>
                  <label aria-label="Солнечно" for="sunny">
                    <span class="icon icon--sunny"></span>
                  </label>
                </div>
                <div class="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                  <input id="cloudy" name="weather-conditions" type="checkbox" value="cloudy"/>
                  <label aria-label="Облачно" for="cloudy">
                    <span class="icon icon--cloudy"></span>
                  </label>
                </div>
                <div class="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                  <input id="snowy" name="weather-conditions" type="checkbox" value="snowy"/>
                  <label aria-label="Снежно" for="snowy">
                    <span class="icon icon--snowy"></span>
                  </label>
                </div>
                <div class="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                  <input id="stormy" name="weather-conditions" type="checkbox" value="stormy"/>
                  <label aria-label="Торнадо" for="stormy">
                    <span class="icon icon--stormy"></span>
                  </label>
                </div>
                <div class="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                  <input id="blizzard" name="weather-conditions" type="checkbox" value="blizzard"/>
                  <label aria-label="Гроза" for="blizzard">
                    <span class="icon icon--blizzard"></span>
                  </label>
                </div>
                <div class="sort-form__input-wrapper input-wrapper input-wrapper--checkbox">
                  <input id="metorite" name="weather-conditions" type="checkbox" value="metorite"/>
                  <label aria-label="Метеоритный дождь" for="metorite">
                    <span class="icon icon--metorite"></span>
                  </label>
                </div>
              </div>
            </form>
          </section>
          <section class="weather-content__result">
            <h2 class="visually-hidden">Результаты сортировки</h2>
            <div class="weather-content__small-cards">
              <div class="small-card small-card--shadow">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card small-card--empty">
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
              <div class="small-card">
                <span class="small-card__city">
                  Чебоксары
                </span>
                <span class="small-card__temperature">+17°</span>
                <span class="icon icon--strips-small"></span>
              </div>
            </div>
            <div class="weather-content__big-cards">
              <div class="weather-content__help">
                Перетащите сюда города, погода в которых вам интересна
              </div>
              <div class="big-card">
                <div class="big-card__header">
                  <span class="icon icon--strips-big"></span>
                  <span class="big-card__city">Великий Новгород</span>
                </div>
                <div class="big-card__content">
                  <div class="big-card__content-wrapper">
                    <div class="big-card__weather-conditions">
                      <span class="icon icon--rainy"></span>
                      <span class="icon icon--meteor-shower"></span>
                      <span class="icon icon--tornado"></span>
                    </div>
                    <div class="big-card__wind">
                      <span class="icon icon--wind"></span>
                      <span class="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
                    </div>
                  </div>
                  <span class="big-card__temperature">+12°</span>
                </div>
              </div>
              <div class="big-card big-card--shadow">
                <div class="big-card__header">
                  <span class="icon icon--strips-big"></span>
                  <span class="big-card__city">Великий Новгород</span>
                </div>
                <div class="big-card__content">
                  <div class="big-card__content-wrapper">
                    <div class="big-card__weather-conditions">
                      <span class="icon icon--rainy"></span>
                      <span class="icon icon--meteor-shower"></span>
                      <span class="icon icon--tornado"></span>
                    </div>
                    <div class="big-card__wind">
                      <span class="icon icon--wind"></span>
                      <span class="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
                    </div>
                  </div>
                  <span class="big-card__temperature">+12°</span>
                </div>
              </div>
              <div class="big-card big-card--empty"></div>              
              <div class="big-card">
                <div class="big-card__header">
                  <span class="icon icon--strips-big"></span>
                  <span class="big-card__city">Великий Новгород</span>
                </div>
                <div class="big-card__content">
                  <div class="big-card__content-wrapper">
                    <div class="big-card__weather-conditions">
                      <span class="icon icon--rainy"></span>
                      <span class="icon icon--meteor-shower"></span>
                      <span class="icon icon--tornado"></span>
                    </div>
                    <div class="big-card__wind">
                      <span class="icon icon--wind"></span>
                      <span class="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
                    </div>
                  </div>
                  <span class="big-card__temperature">+12°</span>
                </div>
              </div>
              <div class="big-card">
                <div class="big-card__header">
                  <span class="icon icon--strips-big"></span>
                  <span class="big-card__city">Великий Новгород</span>
                </div>
                <div class="big-card__content">
                  <div class="big-card__content-wrapper">
                    <div class="big-card__weather-conditions">
                      <span class="icon icon--rainy"></span>
                      <span class="icon icon--meteor-shower"></span>
                      <span class="icon icon--tornado"></span>
                    </div>
                    <div class="big-card__wind">
                      <span class="icon icon--wind"></span>
                      <span class="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
                    </div>
                  </div>
                  <span class="big-card__temperature">+12°</span>
                </div>
              </div>
              <div class="big-card">
                <div class="big-card__header">
                  <span class="icon icon--strips-big"></span>
                  <span class="big-card__city">Великий Новгород</span>
                </div>
                <div class="big-card__content">
                  <div class="big-card__content-wrapper">
                    <div class="big-card__weather-conditions">
                      <span class="icon icon--rainy"></span>
                      <span class="icon icon--meteor-shower"></span>
                      <span class="icon icon--tornado"></span>
                    </div>
                    <div class="big-card__wind">
                      <span class="icon icon--wind"></span>
                      <span class="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
                    </div>
                  </div>
                  <span class="big-card__temperature">+12°</span>
                </div>
              </div>
              <div class="big-card">
                <div class="big-card__header">
                  <span class="icon icon--strips-big"></span>
                  <span class="big-card__city">Великий Новгород</span>
                </div>
                <div class="big-card__content">
                  <div class="big-card__content-wrapper">
                    <div class="big-card__weather-conditions">
                      <span class="icon icon--rainy"></span>
                      <span class="icon icon--meteor-shower"></span>
                      <span class="icon icon--tornado"></span>
                    </div>
                    <div class="big-card__wind">
                      <span class="icon icon--wind"></span>
                      <span class="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
                    </div>
                  </div>
                  <span class="big-card__temperature">+12°</span>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="weather-app__map weather-map">
          <span class="pin pin--temporarily"></span>
        </div>
      </section>

  );
}

export default App;
