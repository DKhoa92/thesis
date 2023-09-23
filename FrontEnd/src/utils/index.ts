import moment from "moment";

function formatMoney(
  amount: number,
  decimalCount: number = 5,
  decimal: string = ".",
  thousands: string = ","
) {
  try {
    let _amount: string | number = amount;
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i: number | string = parseInt(
      (_amount = Math.abs(Number(_amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    let decimalNum = Math.abs(Number(_amount) - Number(i))
      .toFixed(decimalCount)
      .slice(2);

    let _decimalNumArr = String(decimalNum).split("");
    let k = _decimalNumArr.length;
    while (k > 0) {
      if (_decimalNumArr[k - 1] === "0") {
        _decimalNumArr.splice(k - 1, 1);
      } else {
        k = 0;
      }
      k--;
    }
    decimalNum = _decimalNumArr.join("");

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount ? (decimalNum ? decimal + decimalNum : "") : "")
    );
  } catch (e) {
    console.log(e);
    return "0";
  }
}

function isImage(url: string) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

function subText(text: string, maxLength: number) {
  let result = text;
  if (text.length > maxLength) {
    result = text.substring(0, maxLength) + "...";
  }
  return result;
}

function wait(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok");
    }, time);
  });
}

function isNumber(arg: string | number) {
  if (arg === "") return false;
  return !isNaN(Number(arg));
}

export {
  formatMoney,
  isImage,
  subText,
  wait,
  isNumber,
};
