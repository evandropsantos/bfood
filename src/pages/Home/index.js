import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContainerFull from '../../components/ContainerFull';
import ContainerCenter from '../../components/ContainerCenter';
import Autocomplete from '../../components/Autocomplete';
import Button from '../../components/Button';

import countries from '../../components/Autocomplete/countries';
import Shelf from '../../components/Shelf';

import './styles.css';

export default function Home() {

  const history = useHistory();
  const list = [
    {
      id: 1,
      location: {
        address: 'Rua São Francisco Xavier, 170',
      },
      name: 'Package I',
      thumb: 'https://b.zmtcdn.com/data/reviews_photos/806/8d77801974fd17512e51625d47340806_1533215740.jpg?impolicy=newcropandfit&c,ropw=675&croph=675&cropoffsetx=345&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore',
      url: 'https://www.zomato.com/rio/mitsuba-tijuca?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
      'user_rating': {
        aggregate_rating: '3.8',
        rating_text: 'Good', 
        rating_color: '9ACD32',
      }
    },
    {
      id: 2,
      location: {
        address: 'Rua São Francisco Xavier, 170',
      },
      name: 'Package II',
      thumb: 'https://b.zmtcdn.com/data/reviews_photos/806/8d77801974fd17512e51625d47340806_1533215740.jpg?impolicy=newcropandfit&c,ropw=675&croph=675&cropoffsetx=345&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore',
      url: 'https://www.zomato.com/rio/mitsuba-tijuca?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
      'user_rating': {
        aggregate_rating: '3.8',
        rating_text: 'Good', 
        rating_color: '9ACD32',
      }
    },
    {
      id: 3,
      location: {
        address: 'Rua São Francisco Xavier, 170',
      },
      name: 'Package III',
      thumb: 'https://b.zmtcdn.com/data/reviews_photos/806/8d77801974fd17512e51625d47340806_1533215740.jpg?impolicy=newcropandfit&c,ropw=675&croph=675&cropoffsetx=345&cropoffsety=0&cropgravity=NorthWest&fitw=200&fith=200&fittype=ignore',
      url: 'https://www.zomato.com/rio/mitsuba-tijuca?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1',
      'user_rating': {
        aggregate_rating: '3.8',
        rating_text: 'Good', 
        rating_color: '9ACD32',
      }
    }
  ];

  function redirect(value) {
    if(value) {
      history.push('/search');
    }
  }

  return (
    
    <main>
      <Header isHome={true} />
      <ContainerFull newClass="banner__container">
        <ContainerCenter>
          <section className="box">
            <h3 className="box__title">Get Cashback up to 50%</h3>
            <p className="box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suspendisse consectetur justo eu nunc consequat.</p>
            <Button label="Order Now" />
          </section>
        </ContainerCenter>
      </ContainerFull>

      <ContainerFull newClass="description-box__container">
        <ContainerCenter newClass="description-box__content">
          <section className="box">
            <h3 className="box__title">Big Burger</h3>
            <p className="box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suspendisse consectetur justo eu nunc consequat.</p>
            <Button label="Order Now" />
          </section>
          <span className="box__bigburguer"></span>
        </ContainerCenter>
      </ContainerFull>

      <ContainerFull newClass="search-box__container">
        <ContainerCenter newClass="search-box__content">
          <h3 className="search-box__title">Search the Best Burguers</h3>
          <p className="search-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suspendisse consectetur justo eu nunc consequat.</p>

          <Autocomplete suggestions={countries} comunication={redirect}/>
        </ContainerCenter>
      </ContainerFull>

      <ContainerFull newClass="package__container">
        <ContainerCenter newClass="package__content">
          <h3 className="package__title">Popular Package</h3>
          <Shelf list={list} />
        </ContainerCenter>
      </ContainerFull>
      
      <Footer />
    </main>
  );
}

// 28335767
