import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./store/stockSlice";

function Cart() {
  let stock = useSelector((state) => state.stock);
  let dispatch = useDispatch();

  return (
    <div className="container">
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        {stock.map((ele, idx) => {
          return (
            <tbody key={ele.id}>
              <tr>
                <td>{idx + 1}</td>
                <td>{ele.name}</td>
                <td>{ele.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(increase(ele.id));
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch(decrease(ele.id));
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default Cart;
