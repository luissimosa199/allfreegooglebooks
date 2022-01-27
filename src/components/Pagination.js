import { useState } from "react";

const Pagination = (props) => {
  const [requestURL, newRequest] = useState();

  let fetchData = props.fetchData;
  let url = props.url;
  const setResults = props.setResults;
  let page = document.querySelector(".pageNum");

  const nextIndex = () => {
    let newIdx = parseInt(page.textContent);
    let newUrl = url.replace(/Index=\d+&/gi, `Index=${newIdx+10}&`);
    newIdx += 10;

    fetchData(newUrl);
    page.textContent = newIdx;
  };

  const prevIndex = () => {
    let newIdx = parseInt(page.textContent);
    if (newIdx === 0) {
      alert("index 0");
    } else {
      let newUrl = url.replace(/Index=\d+&/gi, `Index=${newIdx-10}&`);
      newIdx -= 10;

      fetchData(newUrl);
      page.textContent = newIdx;
    }
  };

  return (
    <div className='pagination'>
      <button className='pagination_btn prev_btn' onClick={prevIndex}>
        &lt;
      </button>
      <div className='page-text'>
        <p>Página</p>
        <span className='pageNum'>0</span>
      </div>
      <button className='pagination_btn next_btn' onClick={nextIndex}>
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
