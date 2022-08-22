import { useState } from "react";
import "./App.css";
import * as XLSX from "xlsx";
import ProductCalculator from "./page/ProductCalculator/ProductCalculator";
import Version from "./page/Version/Version";
import FixUnCheckList from "./page/FixUnCheckList/FixUnCheckList";

function App() {
  const [datas, setDatas] = useState([]);
  const [tab, setTab] = useState(0);
  /** 엑셀파일 첨부 이벤트 */
  const readExcel = (e) => {
    let reader = new FileReader();
    reader.onload = function () {
      let data = reader.result;
      let workBook = XLSX.read(data, { type: "binary" });
      workBook.SheetNames.forEach(function (sheetName) {
        // 사용할 엑셀파일의 범위 재설정(A1~A5는 필요없는 정보)
        const replaceRef = workBook.Sheets[sheetName]["!ref"].replace(
          "A1",
          "A6"
        );
        workBook.Sheets[sheetName]["!ref"] = replaceRef;
        let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
        const newRows = rows
          .map((data) => {
            return {
              check: true,
              no: data["No."],
              title: data.상품명,
              salePrice: data.총매출액,
              code: data.상품코드,
            };
          })
          .filter((data) => data.title !== "");
        setDatas(newRows);
      });
    };
    reader.readAsBinaryString(e.target.files[0]);
  };

  /** Tab 변경 이벤트 */
  const handleClickTab = (e) => {
    const tabIndex = e.target.getAttribute("value");
    setTab(parseInt(tabIndex));
  };
  return (
    <div>
      <input type="file" id="excelInput" onChange={readExcel} />
      <div className="tab-container">
        <div className="tab-item" value={0} onClick={handleClickTab}>
          계산기
        </div>
        <div className="tab-item" value={1} onClick={handleClickTab}>
          계산제외 항목
        </div>
        <div className="tab-item" value={2} onClick={handleClickTab}>
          업데이트 정보
        </div>
      </div>

      {tab === 0 && <ProductCalculator datas={datas} setDatas={setDatas} />}
      {tab === 1 && <FixUnCheckList />}
      {tab === 2 && <Version />}
    </div>
  );
}

export default App;
