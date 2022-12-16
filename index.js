/**
 *
 * @param {string} name  이름
 * @param {number} age 나이
 * @return 리턴되는 값
 * @see www.naver.com 부가 정보
 * @todo 할일 적기
 * @deprecated 가로줄 쳐줌
 *
 */

const human = (name, age) => {
  return `name: ${name}, age: ${age}`;
};

human("k", 29);

/** @type {string | number } 타입 힌트 제공 */
const name = "k";
