// ボタンクリック関数
function buttonClick10(){
 //pタグのID取得
 const p=document.getElementById("1d10");
 //pタグに文字列セット
 p.textContent="1D10"+">>>"+Math.floor(Math.random() * 10 + 1);

}