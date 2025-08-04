// ボタンクリック関数
function buttonClick2(){
 //pタグのID取得
 const p=document.getElementById("1d2");
 //pタグに文字列セット
 p.textContent="1D2"+">>>"+Math.floor(Math.random() * 2 + 1);

}