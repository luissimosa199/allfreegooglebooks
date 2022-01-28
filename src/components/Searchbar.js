import Results from "./Results";
import Pagination from "./Pagination";
import { useState } from "react";
import smallLogo from "./imgs/alfb_small.png";
import bigLogo from "./imgs/afgb_logo.png";

const Searchbar = () => {
  const [results, setResults] = useState([]);
  const [url, sendUrl] = useState('empty')
  
  let index = 0;
  const key = "key=AIzaSyDNjXYqYUkAsf7ur-XDGVRL6UFlWHfIZMQ";
  

  const fetchData = (requestURL) => {
    fetch(requestURL, { method: "get" }).then((response) =>
      response
        .json()
        .then((response) => {
          let searchResults = [];
          response.items.forEach((elem) => {
            searchResults.push({
              id: elem.id,
              title: elem.volumeInfo.title,
              subtitle: elem.volumeInfo.subtitle,
              img: elem.volumeInfo.imageLinks.thumbnail,
              authors: elem.volumeInfo.authors,
              publishedDate: elem.volumeInfo.publishedDate,
              readLink: elem.volumeInfo.previewLink
            });
          });
          // hacer una class para ocultar y togglearla
          document.querySelector(".pagination").style.opacity = 1;
          document.querySelector(".central_logo").classList.add('hidden');
          // 
          document.querySelector(".searchInput").value = "";
          sendUrl(requestURL);
          setResults(searchResults);
        })
        .catch((err) => console.log(err))
    );
  };

  const handleClick = () => {
    let searchTerm = document.querySelector(".searchInput").value.replace(' ', '+');
    let requestURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&startIndex=${index}&maxResults=10&filter=free-ebooks&${key}`;

    searchTerm === ""
      ? alert("No hay términos de búsqueda")
      : fetchData(requestURL);
  };

  return (
    <div className='container'>
      <div className='searchbar'>
        <a href="http://luissimosa199.github.io/allfreegooglebooks/"><img className="header_logo" alt="afgb logo" src={smallLogo}></img></a>
        <input
          className='searchInput'
          type='text'
          placeholder='Nombre del libro, autor o tema'
        />
        <button className="btn searchbar_btn" onClick={handleClick} type='button'>
          Buscar
        </button>
      </div>
      <div className='results-container'>
        <img className="central_logo" alt="afgb logo" src={bigLogo}></img>
        <Results results={results} />
      </div>
      <div className='pagination-container'>
        <Pagination fetchData={fetchData} url={url} setResults={setResults}/>
      </div>
    </div>
  );
};

export default Searchbar;
