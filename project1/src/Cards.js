import Card from "./Card";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

function Cards(props) {
  const [pages, setPages] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container">
      <div className="row">
        {props.beers.map((ele, idx) => {
          return (
            <Card
              key={ele.id}
              src={props.beerImgs[idx]}
              idx={idx}
              title={ele.title}
              content={ele.content}
              price={ele.price}
            ></Card>
          );
        })}
        <button onClick={props.handleClick}>정렬</button>
        <button
          onClick={() => {
            setIsLoading(true);
            axios
              .get(`https://codingapple1.github.io/shop/data${pages}.json`)
              .then((result) => {
                const newArr = [...props.beers, ...result.data];
                props.setBeers(newArr);
                setPages(pages + 1);
              })
              .catch((e) => {
                console.log(e);
              })
              .finally(() => {
                setIsLoading(false);
              });
          }}
        >
          더보기
        </button>
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
}

export default Cards;
