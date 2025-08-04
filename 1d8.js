// ボタンクリック関数
function buttonClick8(){
 //pタグのID取得
 const p=document.getElementById("1d8");
 //pタグに文字列セット
 p.textContent="1D8"+">>>"+Math.floor(Math.random() * 8 + 1);

}