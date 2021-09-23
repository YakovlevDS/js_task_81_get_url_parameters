// ? Task:Get Query Params from URL


// Solution 1
const getParameters = (URL) => {
  URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
  return JSON.stringify(URL);
};

console.log(getParameters('goole.com?search=easy&page=3'));
// console.log(getParameters(window.location));


// Result: { search : "easy", page : 3 }


// ! Explanation: You can easily retrieve query params from a url either by passing window.location or the raw URL goole.com?search=easy&page=3
