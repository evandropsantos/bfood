import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import ContainerCenter from '../../components/ContainerCenter';
import Shelf from '../../components/Shelf';

import api from '../../services/api';

import './styles.css';

export default function Search() {

  const [list, setList] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setShowLoading] = useState(false);
  const id = localStorage.getItem('id');
  const city = localStorage.getItem('city');

  function handleChange(check, value) {
    if (check) {
      setFilter(list.filter(item => {
        const rating = item.user_rating.aggregate_rating;

        if(!rating) { return false; }

        return rating.split('.')[0] === value;
      }));
    } else {
      setFilter([]);
    }
  }

  useEffect(() => {
    const filter = id ? `search?city_id=${id}` : 'search';

    api.get(filter,{
      headers: {
        'user-key': '77576b2dae845bf32c1de0795a7753e1'
      }
    }).then(res => {
      const payload = res.data.restaurants;
      const object = payload.map((el, index) => {
        const {name, location, url, thumb, user_rating } = el.restaurant;

        return {
          id: index + 1,
          name,
          url,
          thumb,
          location,
          user_rating
        }
      });

      console.log(object);

      setList(object);
    });

    let timer1 = setTimeout(() => setShowLoading(true), 1000)
    return () => { clearTimeout(timer1) }
  }, [id]);

  return (
    <main className="search__page">
      <Header />

      <ContainerCenter newClass="search__container">
        <h2 className="search__title-page">Result for: <em className="search__city">{city}</em></h2>

        <nav className="search__navigation">
          <dl className="search__list">
            <dt className="search__title">Note</dt>
            <dd>
              <label htmlFor="star-1" className="search__label">
                <input
                  id="star-1"
                  type="radio"
                  className="search__input"
                  name="stars"
                  value={1}
                  onClick={e => handleChange(e.target.checked, e.target.value) }
                />
                <span className="search--active"></span>
                <FaStar size={25} color="#f8c43a" />
              </label>
              <label htmlFor="star-2" className="search__label">
                <input
                  id="star-2"
                  type="radio"
                  className="search__input"
                  name="stars"
                  value={2}
                  onClick={e => handleChange(e.target.checked, e.target.value) }
                />
                <span className="search--active"></span>
                <FaStar size={25} color="#f8c43a" />
                <FaStar size={25} color="#f8c43a" />
              </label>
              <label htmlFor="star-3" className="search__label">
                <input
                  id="star-3"
                  type="radio"
                  className="search__input"
                  name="stars"
                  value={3}
                  onClick={e => handleChange(e.target.checked, e.target.value) }
                />
                <span className="search--active"></span>
                <FaStar size={25} color="#f8c43a" />
                <FaStar size={25} color="#f8c43a" />
                <FaStar size={25} color="#f8c43a" />
              </label>
              <label htmlFor="star-4" className="search__label">
                <input
                  id="star-4"
                  type="radio"
                  className="search__input"
                  name="stars"
                  value={4}
                  onClick={e => handleChange(e.target.checked, e.target.value) }
                />
                <span className="search--active"></span>
                <FaStar size={25} color="#f8c43a" />
                <FaStar size={25} color="#f8c43a" />
                <FaStar size={25} color="#f8c43a" />
                <FaStar size={25} color="#f8c43a" />
              </label>
              <label htmlFor="star-5" className="search__label">
                <input
                  id="star-5"
                  type="radio"
                  className="search__input"
                  name="stars"
                  value={5}
                  onClick={e => handleChange(e.target.checked, e.target.value) }
                />
                <span className="search--active"></span>
                <FaStar size={25} color="#f8c43a" />
                <FaStar size={25} color="#f8c43a" />
                <FaStar size={25} color="#f8c43a" />
                <FaStar size={25} color="#f8c43a" />
                <FaStar size={25} color="#f8c43a" />
              </label>
            </dd>
          </dl>
        </nav>
        <section className="search__shelf">
          <Shelf list={ filter.length > 0 ? filter : list } />
        </section>
      </ContainerCenter>
      <Footer />
    </main>
  );
}
