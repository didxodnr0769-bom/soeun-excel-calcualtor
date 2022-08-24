import { useRef } from "react";
import { isReduplication } from "../../helper/helper-uncheck";

/**
 * 계산제외 항목을 추가, 제거 하는 Container Layout Component입니다.
 * @component
 * @see {@link App}
 */
function FixUnCheckList(props) {
  const { uncheckList, addUncheckList, removeUncheckList } = props;
  const codeRef = useRef(null);
  const nameRef = useRef(null);

  /** 제외시킬 항목 submit 이벤트 */
  const handleClickSubmit = () => {
    const code = codeRef.current.value;
    const name = nameRef.current.value || "";

    // 코드 미입력
    if (code === "") {
      alert("코드는 필수 입력사항입니다.");
      return false;
    }

    if (isReduplication(code)) {
      alert("이미 존재하는 코드입니다");
      return false;
    }

    addUncheckList({
      code,
      name,
    });

    codeRef.current.value = "";
    nameRef.current.value = "";
  };

  /** 제외시킬 항목 삭제 이벤트 */
  const handleClickRemove = (e) => {
    const code = e.target.getAttribute("data-code");
    removeUncheckList(code);
  };
  return (
    <div>
      <input
        id="code"
        type="text"
        placeholder="상품코드를 입력해주세요(필수)"
        ref={codeRef}
      />
      <input
        id="name"
        type="text"
        placeholder="상품명 입력해주세요"
        ref={nameRef}
      />
      <button onClick={handleClickSubmit}>입력</button>
      <div className="uncheck-container">
        {uncheckList.map((data, idx) => {
          return (
            <div className="uncheck-data">
              {data.code} - {data.name}
              <button data-code={data.code} onClick={handleClickRemove}>
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FixUnCheckList;
