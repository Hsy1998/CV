let html = document.querySelector("#html");
let style = document.querySelector("#style");
let str = `/* 你好，我叫小方
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
**/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let str2 = "";
let n = 0;
let setup = () => {
  setTimeout(() => {
    if (str[n] === "\n") {
      // 如果是回车，就加<br>,不照搬
      str2 += "<br>";
    } else if (str[n] === " ") {
      str2 += "&nbsp";
    } else {
      // 如果不是回车就照搬
      str2 += str[n];
    }
    // str2里有55个字符
    html.innerHTML = str2;
    style.innerHTML = str.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    //  n = 53
    if (n < str.length - 1) {
      n += 1; // 54 就不会多打印undefined
      setup();
    }
  }, 0);
};
setup();
