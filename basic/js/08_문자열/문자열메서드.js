
//우측상단 실행버튼으로 실행.
//  charAt()
/**
 * - 문자열(String)에서 지정한 위치(index)의 문자 1개를 반환하는 메서드입니다.
 * - 인덱스는 0부터 시작하며, 문자열 탐색이나 특정 위치의 문자 확인에 사용됩니다.
 */
// ## 📌 기본 문법
// str.charAt(index)

let str ="JavaScript";

console.log(str.charAt(0));// "J"
console.log(str.charAt(4));// "S"
console.log(str.charAt(20));// "" (빈 문자열)
console.log(str.charAt(-1));// "" (음수는 무시)

/**
 * length
 * - 문자열(String)에 포함된 문자 개수를 반환하는 속성(property) 입니다.
 * - 메서드가 아니라 **속성**이므로 괄호 `()`를 사용하지 않습니다.
 * ## 📌 기본 문법
    str.length
 */
// 

let text ="JavaScript";

console.log(text.length);// 10

let msg ="Hello World";

console.log(msg.length);// 11 (공백 포함)

"".length;// 0 개발자 콘솔에서 확인가능

/**
 * replace()
 * 문자열(String) 안에서 특정 문자나 패턴을 다른 문자로 바꾸는 메서드**입니다.
 * ## ✔ 기본 문법
 * 문자열.replace(찾을_내용, 바꿀_내용)
 */

text = "Hello World";
let result = text.replace("World", "JavaScript");

console.log(result); // Hello JavaScript

//replace()는 기본적으로 가장 처음 등장하는 값만 치환합니다.
let t = "apple apple apple";
console.log(t.replace("apple", "banana"));//결과: banana apple apple

// 전체 치환하려면 정규식(RegExp) 사용
// 문자열.repalce(/문자열/g,"문자열")
//g는 grobal
t = "apple apple apple";
console.log(t.replace(/apple/g, "banana"));// banana banana banana

//자바스크립트에서 슬래시(/ /)로 감싸진 부분은 문자열이 아니라 정규식 리터럴이라는 특수한 데이터 타입으로 인식됩니다.


///apple/: 찾을 대상인 패턴입니다. 여기서는 "apple"이라는 글자 뭉치를 찾으라는 뜻입니다.
//g (Flag): 가장 중요한 부분입니다! Global(전역)의 약자입니다.
//g가 없으면: 문장에서 첫 번째로 발견된 "apple" 하나만 "banana"로 바꾸고 종료합니다.
//g가 있으면: 문장 전체를 샅샅이 뒤져서 나오는 모든 "apple"을 전부 "banana"로 바꿉니다.




//0~9와 . 을  제외한 문자는 모두 공백('')처리
"3.6k".replace(/[^0-9.]/g, '') // "3.6"  개발자콘솔에서 확인가능
"1,234명".replace(/[^0-9.]/g, '') // "1234"

//`replace()`는 문자열에서만 작동합니다.
//따라서 숫자에서 replace()를 실행하려면 문자열로 변환해야 합니다.
String(12345).replace("234", "000");  // "10005" 개발자콘솔에서 확인가능


//문자열.substring(시작인덱스,[끝인덱스])
//- 문자열(String)에서 지정한 인덱스 구간의 문자열을 추출하여 새로운 문자열로 반환
//->시작인덱스 ~ 끝인덱스 - 1
//->시작인덱스 부터 끝까지

text ="JavaScript";

console.log(text.substring(0,4));// "Java"
console.log(text.substring(4));// "Script"
console.log(text.substring(4,10));// "Script"

// 인덱스 순서 자동 교환
console.log(text.substring(10,4));// "Script"

// 음수는 0으로 처리
console.log(text.substring(-3,4));// "Java"


//indexOf()는 문자열(String) 또는 배열(Array)에서 특정 값이 처음으로 등장하는 위치(index)를 반환
//문자열.indexOf(검색값, 인덱스)
//검색값없으면 -1
text ="JavaScript";
console.log(text.indexOf("S"));// 4
console.log(text.indexOf("Script"));// 4
console.log(text.indexOf("script"));// -1 (대소문자 구분)
console.log(text.indexOf("a",2));// 3 (2번 인덱스부터 검색)


//# includes()
//문자열(String)이나 배열(Array) 안에 특정 값이 포함되어 있는지 확인할 때 사용하는 자바스크립트 메서드
//결과는 항상 true / false 로 반환
//문자열.includes(검색할_문자, 시작_위치)

text = "Hello World";
console.log(text.includes("World")); // true
console.log(text.includes("world")); // false (대소문자 구분)
console.log(text.includes("Hello", 1)); // false (1번째 문자부터 검색)

//split()은 문자열(String)을 지정한 구분자(separator)를 기준으로 나누어 배열(Array)로 변환하는 메서드
//문자열.split(구분자, [배열항목최대수])

console.log("apple,banana,orange".split(","));
// ["apple", "banana", "orange"]

console.log("2025-12-16".split("-"));
// ["2025", "12", "16"]

console.log("hello world".split(" "));
// ["hello", "world"]

console.log("abc".split(""));
// ["a", "b", "c"]

console.log("a-b-c-d".split("-",2));
// ["a", "b"]

//String 메서드 예제
// 1. length
console.log("hello".length)              // 5

// 2. charAt()
console.log("apple".charAt(1))           // "p" 지정 index 문자 반환

// 3. at()
console.log("apple".at(-1))              // "e" 음수(거꾸로) index 위치 문자 반환

// 4. substring()
console.log("abcdef".substring(1, 4))    // "bcd" 지정 범위 문자열을 추출

// 5. slice()
console.log("abcdef".slice(-3))          // "def" substring과 유사, 음수 인덱스 허용

// 6. substr() (과거 방식)
console.log("abcdef".substr(2, 3))       // "cde"

// 7. indexOf()
console.log("banana".indexOf("na"))      // 2 문자열 내 검색어의 첫 위치 반환

// 8. lastIndexOf()
console.log("banana".lastIndexOf("na"))  // 4 검색어가 마지막으로 발견되는 위치

// 9. includes()
console.log("hello".includes("ell"))     // true 해당 문자열 포함 여부(Boolean)

// 10. startsWith()
console.log("hello".startsWith("he"))    // true 특정 문자열로 시작하는지 확인

// 11. endsWith()
console.log("hello".endsWith("lo"))      // true 특정 문자열로 끝나는지 확인

// 12. toUpperCase()
console.log("Hello".toUpperCase())       // "HELLO" 모든 문자를 대문자로 변환

// 13. toLowerCase()
console.log("Hello".toLowerCase())       // "hello" 모든 문자를 소문자로 변환

// 14. replace()
console.log("apple".replace("p", "b"))   // "abple" a를 b로 치환(첫 번째만)

// 15. replaceAll()
console.log("a-a-a".replaceAll("a","b")) // "b-b-b" 대상 모든 문자열 치환

// 16. split()
console.log("a,b,c".split(","))          // ["a","b","c"] 구분자를 기준으로 문자열을 배열로 분해

// 17. trim()
console.log("  hi  ".trim())             // "hi" 양쪽 공백 제거

// 18. trimStart()
console.log("  hi".trimStart())          // "hi" 왼쪽(앞) 공백 제거

// 19. trimEnd()
console.log("hi  ".trimEnd())            // "hi" 오른쪽(뒤) 공백 제거

// 20. repeat()
console.log("ha".repeat(3))              // "hahaha" 문자열을 count만큼 반복 생성

// 21. concat()
console.log("a".concat("b"))             // "ab" 문자열을 연결하여 새 문자열 생성
