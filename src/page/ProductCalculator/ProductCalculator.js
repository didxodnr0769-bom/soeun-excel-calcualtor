import { useState } from "react";
import * as XLSX from "xlsx";

/** 복제 */
const getCopyObj = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

/**commaFormater */
function commaFormater(num) {
  if (!!num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return num;
  }
}

function ProductCalculator(props) {
  const { datas, setDatas } = props;

  /** 합계 금액 가져오기 이벤트 */
  const getTotalSalePrice = () => {
    if (!datas.length) return 0;
    const copyDatas = getCopyObj(datas).filter((data) => data.check);

    const totalPrice = copyDatas.reduce((prev, data) => {
      return prev + data.salePrice;
    }, 0);
    return commaFormater(totalPrice);
  };

  /** 사용하지 않는 물품의 정보 및 합계금액 반환 */
  const getUnusedProduct = () => {
    if (!datas.length) return 0;
    const copyDatas = getCopyObj(datas).filter((data) => !data.check);

    const totalPrice = copyDatas.reduce((prev, data) => {
      return prev + data.salePrice;
    }, 0);
    return { unusedPrice: commaFormater(totalPrice) };
  };

  const getPriceInfo = () => {
    if (!datas.length) return {};
    const copyDatas = getCopyObj(datas);
    const checkProduct = copyDatas.filter((data) => data.check);
    const uncheckProduct = copyDatas.filter((data) => !data.check);
    const checkPrice = checkProduct.reduce((prev, data) => {
      return prev + data.salePrice;
    }, 0);
    const uncheckPrice = uncheckProduct.reduce((prev, data) => {
      return prev + data.salePrice;
    }, 0);

    return { checkProduct, uncheckProduct, checkPrice, uncheckPrice };
  };

  /** 사용여부 체크 이벤트 */
  const handleChangeUse = (e) => {
    const copyDatas = getCopyObj(datas);
    const idx = parseInt(e.currentTarget.getAttribute("number"));
    copyDatas[idx].check = !copyDatas[idx].check;
    setDatas(copyDatas);
  };

  const {
    checkProduct = [],
    uncheckProduct = [],
    checkPrice = 0,
    uncheckPrice = 0,
  } = getPriceInfo();
  return (
    <div className="App">
      <div className="price-container">
        <div className="total-price">
          총 합계 금액 : {commaFormater(checkPrice + uncheckPrice)}원
        </div>
        <div className="uncheck-price">
          - 제외된 금액 : {commaFormater(uncheckPrice)}원
        </div>
        ---------------------------------
        <div className="check-price">
          체크 된 금액 : {commaFormater(checkPrice)}원
        </div>
        --------------------------------- <br />
        제외 품목
        <div className="uncheck-info">
          {uncheckProduct.map((product) => {
            const { salePrice, title } = product;
            return (
              <div>
                {title} - {commaFormater(salePrice)}원
              </div>
            );
          })}
        </div>
      </div>

      <div className="data-table">
        <div className="table-name">계산기(v1.0.0)</div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th className="is-use">사용여부</th>
                <th className="no">No</th>
                <th className="title">상품명</th>
                <th>총매출액</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, idx) => {
                return (
                  <tr key={idx} onClick={handleChangeUse} number={idx}>
                    <td>
                      <input
                        type="checkbox"
                        checked={data.check}
                        onChange={() => {}}
                      />
                    </td>
                    <td>{data.no}</td>
                    <td>{data.title}</td>
                    <td>{commaFormater(data.salePrice)}원</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductCalculator;
