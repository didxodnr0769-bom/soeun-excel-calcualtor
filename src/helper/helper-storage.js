const CODE_UNCHECK_LIST = "__1__"; //사용하지 않을 상품 리스트

/** 공용 : 스토리지에 저장된 아이템 가져오기 */
export function getStorage(code) {
  const data = JSON.parse(localStorage.getItem(code));
  return JSON.parse(localStorage.getItem(code));
}

/** 공용 : 스토리지에 아이템 세팅하기 */
export function setStorage(itemCode, value) {
  localStorage.setItem(itemCode, JSON.stringify(value));
}

/** 사용하지 않을 코드를 담은 데이터를 가져온다 */
export function getUncheckListStorage() {
  return getStorage(CODE_UNCHECK_LIST) || [];
}

/** 사용하지않을 코드를 스토리지에 저장 후 결과값 반환 */
export function addUncheckListStorage(param) {
  return new Promise((resolve) => {
    const list = getUncheckListStorage();
    list.push(param);
    setStorage(CODE_UNCHECK_LIST, list);
    resolve(getUncheckListStorage());
  });
}

/** 사용하지 않을 코드를 스토리지에서 삭제한후 결과값 반환 */
export function removeUncheckListStorage(code) {
  return new Promise((resolve) => {
    const list = getUncheckListStorage();
    const newList = list.filter((data) => data.code !== code);
    setStorage(CODE_UNCHECK_LIST, newList);
    resolve(getUncheckListStorage());
  });
}
