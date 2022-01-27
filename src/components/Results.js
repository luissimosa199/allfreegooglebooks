const Results = (props) => {
  let results = props.results;
  let bookList = [];

  results.forEach((elem) => {
    bookList.push(
      <div key={elem.id} className='card_book'>
        <div className='card_book_textcont'>
          <h2 className='card_book_title'>{elem.title}</h2>
          <p className='card_book_subtitle'>{elem.subtitle}</p>
          <p className='card_book_author'>{elem.authors}</p>
          <p className='card_book_date'>{elem.publishedDate}</p>
          <a className='card_book_btn' href={elem.readLink}>
            Leer
          </a>
        </div>
        <img className='card_book_img' alt='book cover' src={elem.img}></img>
      </div>
    );
  });

  return <div>{bookList}</div>;
};

export default Results;
