// export function splitImage(v) {
//   console.log(v);
//   var e = v.split("|");
//   var data = [];
//   for (let i = 0; i < e.length; i++) data.push(e[i].split("/")[2]);
//   return data.slice(0, 5);
// }

export function getComaPrice(p) {
  var price = p.toString();
  if (price.length > 3) {
    var rprice = "";
    var j = 0;
    for (let i = price.length - 1; i >= 0; i--) {
      rprice = rprice + price[i];
      if (i < price.length - 1 && i > 0) {
        j++;
        if (j % 2 === 0) rprice = rprice + ",";
      }
    }
    price = "";

    for (let i = rprice.length - 1; i >= 0; i--) {
      price = price + rprice[i];
    }
    return price;
  } else return price;
}

export function makespaceline(s) {
  var ss = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      ss = ss + "_";
    } else ss = ss + s[i];
  }
  return ss;
}

export const makelinespace = (s) => {
  var ss = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "_") {
      ss = ss + " ";
    } else ss = ss + s[i];
  }
  return ss;
};
