import React, { useEffect } from 'react';
import './App.css'
import tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default() => {

  const [ movieList, setMovieList] = React.useState([]);
  const [featuredData, setFeaturedData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

    useEffect(() => {
      const scrollListener = () => {
        if(window.scrollY > 30) {
          setBlackHeader(true);
        }else 
        {
          setBlackHeader(false);
        }
      }

      window.addEventListener('scroll', scrollListener);
      return () => {
        window.removeEventListener('scroll', scrollListener);
      }
    }, []);

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        <p>Criado com finalidades academicas/de estudo por Robson Pires 2020 &copy</p>
      </footer>
      {movieList.length <= 0 &&
      <div className='loading'>
        <img src="https://i.pinimg.com/originals/f9/0f/76/f90f7689233948005f465d98ead56d44.gif" alt='carregando'></img>
      </div>
      }
    </div>
  );
}