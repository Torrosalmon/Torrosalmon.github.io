// ボタンクリック関数
function buttonClick100(){
 //pタグのID取得
 const p=document.getElementById("1d100");
 //pタグに文字列セット
 p.textContent="1D100"+">>>"+Math.floor(Math.random() * (100 - 1) + 1);

}