import React, { Component } from 'react';
import arrdown2 from './img/SVG/arrow-down2.svg';
import arrup2 from './img/SVG/arrow-up2.svg';
import searchicon from './img/SVG/search.svg';


class App extends Component {
  render() {
    return (
      <main className="app">
        <header className="header">
          <h1 className="header__title">
            Previsão do Tempo
          </h1>
        </header>
        <section className="city">
          <header className="city__header">
            <div className="city__header-city">Niteroi, Rj - Brasil</div>
            <div className="city__close">&times;</div>
          </header>
          <div className="city__temp">
            <div className="city__temp-value">20C</div>
            <div className="city__temp-state">Nublado</div>
          </div>
          <div className="city__max-min">
            <div className="city__variation">
              <div className="bold">
                <img src={arrdown2} />
                16
                  </div>
              <div className="bold">
                <img src={arrup2} />
                25
                  </div>
            </div>
            <div className="city__fell">
              <span className="thin">Sensação</span>
              <span className="bold">19</span>
            </div>
          </div>
          <div className="city__wind">
            <div className="city__wind-value">
              <span className="thin">Vento</span>&nbsp;<span className="bold">18Km/h</span>
            </div>
            <div>
              <span className="thin">Humidade</span>&nbsp;<span className="bold">89%</span>
            </div>
          </div>
          <ul className="city__week">
            <li className="city__week-item">
              <div className="city__week-item-day bold">Terça</div>
              <div className="city__week-item-variation bold primary">
                <div className="city__week-item-variation-value">18</div>
                <div className="city__week-item-variation-value">26</div>
              </div>
            </li>
            <li className="city__week-item">
              <div className="city__week-item-day bold">Terça</div>
              <div className="city__week-item-variation bold primary">
                <div className="city__week-item-variation-value">18</div>
                <div className="city__week-item-variation-value">26</div>
              </div>
            </li>
            <li className="city__week-item">
              <div className="city__week-item-day bold">Terça</div>
              <div className="city__week-item-variation bold primary">
                <div className="city__week-item-variation-value">18</div>
                <div className="city__week-item-variation-value">26</div>
              </div>
            </li>
            <li className="city__week-item">
              <div className="city__week-item-day bold">Terça</div>
              <div className="city__week-item-variation bold primary">
                <div className="city__week-item-variation-value">18</div>
                <div className="city__week-item-variation-value">26</div>
              </div>
            </li>

          </ul>
        </section>

        <section className="container search">
          <form action="" className="search__form">
            <label className="search__form-group">
              <input className="search__form-input" type="text" placeholder="Insira aqui o nome da cidade" />
              <img src={searchicon} />
            </label>
          </form>
        </section>


        <section className="capitals">
          <header className="capitals__header">
            <h2 className="title-primary-lg">Capitais</h2>
          </header>
          <div className="capitals__list-min-max thin">Min Max</div>
          <ul className="capitals__list">
            <li className="capitals__item">
              <div className="capitals__item-max-min">
                <div>18</div>
                <div>27</div>
              </div>
              <div className="capitals__item-city">
                Rio de Janeiro
                  </div>
            </li>
            <li className="capitals__item">
              <div className="capitals__item-max-min">
                <div>18</div>
                <div>27</div>
              </div>
              <div className="capitals__item-city">
                Rio de Janeiro
                  </div>
            </li>
            <li className="capitals__item">
              <div className="capitals__item-max-min">
                <div>18</div>
                <div>27</div>
              </div>
              <div className="capitals__item-city">
                Rio de Janeiro
                  </div>
            </li>
            <li className="capitals__item">
              <div className="capitals__item-max-min">
                <div>18</div>
                <div>27</div>
              </div>
              <div className="capitals__item-city">
                Rio de Janeiro
                  </div>
            </li>
            <li className="capitals__item">
              <div className="capitals__item-max-min">
                <div>18</div>
                <div>27</div>
              </div>
              <div className="capitals__item-city">
                Rio de Janeiro
                  </div>
            </li>
          </ul>
        </section>
      </main>
    );
  }
}

export default App;
