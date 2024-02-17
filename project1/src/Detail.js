import React, { useEffect, useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import noImg from "./img/no_img.png";
import { Tab, Tabs } from "react-bootstrap";
import { addItem } from "./store/stockSlice";
import { useDispatch } from "react-redux";

function Detail(props) {
  const [warning, setWarning] = useState(false);
  const [input, setInput] = useState("");
  const [tab, setTab] = useState(0);

  let dispatch = useDispatch();

  useEffect(() => {
    console.log(input);
    if (isNaN(input) && input !== "") {
      setWarning(true);
    } else {
      setWarning(false);
    }
  }, [input]);

  let { id } = useParams();
  id = Number(id);
  const idx = props.product.findIndex((ele) => ele.id === id);

  if (idx === -1) {
    return <div className="error">404 ERROR 돌아가</div>;
  }

  const handleKey = (key) => {
    const num = Number(key);
    setTab(num);
  };

  return (
    <>
      <div className="container">
        {warning ? <div>경고 : 숫자만 입력하세요</div> : null}
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <img
          src={props.beerImg[idx] ?? noImg}
          alt={`맥주${props.product[idx].id}`}
          width="50%"
        />
        <h4>{props.product[idx].title}</h4>
        <div>{props.product[idx].content}</div>
        <div>{props.product[idx].price}</div>
        <button
          onClick={() => {
            const pro = {
              id: props.product[idx].id,
              name: "Red",
              count: 1,
            };
            console.log(pro);
            dispatch(addItem(pro));
          }}
        >
          주문하기
        </button>
      </div>
      <Tabs
        defaultActiveKey="버튼1"
        id="uncontrolled-tab-example"
        className="mb-3"
        onSelect={handleKey}
      >
        <Tab eventKey="0" title="버튼1"></Tab>
        <Tab eventKey="1" title="버튼2"></Tab>
        <Tab eventKey="2" title="버튼3"></Tab>
      </Tabs>
      <TabContent tab={tab} />
    </>
  );
}

function TabContent({ tab }) {
  if (tab === 0) {
    return <div className="box">HELLO1</div>;
  } else if (tab === 1) {
    return <div className="box">HELLO2</div>;
  } else if (tab === 2) {
    return <div className="box">HELLO3</div>;
  }
}

export default Detail;
