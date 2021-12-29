import React from 'react';

import Sort from './components/Sort';
import FilterCities from './components/FilterCities';
import FilterProps from './components/FilterProps';
import CitiesList from './components/CitiesList';

import './assets/css/style.css';

function App() {
	
	const [cities, setCities] = React.useState([]);
	const [viewedCities, setViewedCities] = React.useState([]);
	const [sort, setSort] = React.useState('');
	const [filterCity, setFilterCity] = React.useState('');
	const [isLoadedCities, setIsLoadedCities] = React.useState(false);
	const [isFialLoading, setIsFailLoading] = React.useState(false);

	React.useEffect(() => {
		loadCities();
	}, []);


	const loadCities = () => {
		if (!isLoadedCities) {
			fetch(`https://geo-weather-json.herokuapp.com/db/`)
				.then((res) => {
					if (res.status >= 200 && res.status < 300) {
						return res;
					} else {
						let error = new Error(res.statusText);
						error.response = res;
						throw error
					}
				})
				.then(res => res.json())
				.then(data => {
					setIsLoadedCities(true);
					setIsFailLoading(false);
					setCities(data.cities);
					setViewedCities(data.cities);
				})
				.catch((e) => {
					console.log('Error: ' + e.message);
					console.log(e.response);
					setIsFailLoading(true);
				});
		}
	};



	return (

		<section className="weather-app">
			<h1 className="visually-hidden">Прогноз погоды</h1>
			<div className="weather-app__content weather-content">
				<section className="sort-form weather-content__sort">
					<h2 className="visually-hidden">Форма сортировки</h2>
					<form action="#" method="GET">
						<Sort sort={sort}/>
						<FilterCities/>
						<FilterProps/>
					</form>
				</section>
				<section className="weather-content__result">
					<h2 className="visually-hidden">Результаты сортировки</h2>
					{isLoadedCities && <CitiesList cities={viewedCities}/>}
					{!isLoadedCities && !isFialLoading && <p>Идет загрузка</p>}
					{isFialLoading && <p>Произошла ошибка</p>}
					
					<div className="weather-content__big-cards">
						<div className="weather-content__help">
							Перетащите сюда города, погода в которых вам интересна
						</div>
						<div className="big-card">
							<div className="big-card__header">
								<span className="icon icon--strips-big"></span>
								<span className="big-card__city">Великий Новгород</span>
							</div>
							<div className="big-card__content">
								<div className="big-card__content-wrapper">
									<div className="big-card__weather-conditions">
										<span className="icon icon--rainy"></span>
										<span className="icon icon--meteor-shower"></span>
										<span className="icon icon--tornado"></span>
									</div>
									<div className="big-card__wind">
										<span className="icon icon--wind"></span>
										<span className="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
									</div>
								</div>
								<span className="big-card__temperature">+12°</span>
							</div>
						</div>
						<div className="big-card big-card--shadow">
							<div className="big-card__header">
								<span className="icon icon--strips-big"></span>
								<span className="big-card__city">Великий Новгород</span>
							</div>
							<div className="big-card__content">
								<div className="big-card__content-wrapper">
									<div className="big-card__weather-conditions">
										<span className="icon icon--rainy"></span>
										<span className="icon icon--meteor-shower"></span>
										<span className="icon icon--tornado"></span>
									</div>
									<div className="big-card__wind">
										<span className="icon icon--wind"></span>
										<span className="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
									</div>
								</div>
								<span className="big-card__temperature">+12°</span>
							</div>
						</div>
						<div className="big-card big-card--empty"></div>              
						<div className="big-card">
							<div className="big-card__header">
								<span className="icon icon--strips-big"></span>
								<span className="big-card__city">Великий Новгород</span>
							</div>
							<div className="big-card__content">
								<div className="big-card__content-wrapper">
									<div className="big-card__weather-conditions">
										<span className="icon icon--rainy"></span>
										<span className="icon icon--meteor-shower"></span>
										<span className="icon icon--tornado"></span>
									</div>
									<div className="big-card__wind">
										<span className="icon icon--wind"></span>
										<span className="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
									</div>
								</div>
								<span className="big-card__temperature">+12°</span>
							</div>
						</div>
						<div className="big-card">
							<div className="big-card__header">
								<span className="icon icon--strips-big"></span>
								<span className="big-card__city">Великий Новгород</span>
							</div>
							<div className="big-card__content">
								<div className="big-card__content-wrapper">
									<div className="big-card__weather-conditions">
										<span className="icon icon--rainy"></span>
										<span className="icon icon--meteor-shower"></span>
										<span className="icon icon--tornado"></span>
									</div>
									<div className="big-card__wind">
										<span className="icon icon--wind"></span>
										<span className="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
									</div>
								</div>
								<span className="big-card__temperature">+12°</span>
							</div>
						</div>
						<div className="big-card">
							<div className="big-card__header">
								<span className="icon icon--strips-big"></span>
								<span className="big-card__city">Великий Новгород</span>
							</div>
							<div className="big-card__content">
								<div className="big-card__content-wrapper">
									<div className="big-card__weather-conditions">
										<span className="icon icon--rainy"></span>
										<span className="icon icon--meteor-shower"></span>
										<span className="icon icon--tornado"></span>
									</div>
									<div className="big-card__wind">
										<span className="icon icon--wind"></span>
										<span className="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
									</div>
								</div>
								<span className="big-card__temperature">+12°</span>
							</div>
						</div>
						<div className="big-card">
							<div className="big-card__header">
								<span className="icon icon--strips-big"></span>
								<span className="big-card__city">Великий Новгород</span>
							</div>
							<div className="big-card__content">
								<div className="big-card__content-wrapper">
									<div className="big-card__weather-conditions">
										<span className="icon icon--rainy"></span>
										<span className="icon icon--meteor-shower"></span>
										<span className="icon icon--tornado"></span>
									</div>
									<div className="big-card__wind">
										<span className="icon icon--wind"></span>
										<span className="big-card__wind-info">Ветер ЮВ, 0-1 м/с</span>
									</div>
								</div>
								<span className="big-card__temperature">+12°</span>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="weather-app__map weather-map">
				<span className="pin pin--temporarily"></span>
			</div>
		</section>

	);
}

export default App;
