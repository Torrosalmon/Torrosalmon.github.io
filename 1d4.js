// ボタンクリック関数
function buttonClick4(){
 //pタグのID取得
 const p=document.getElementById("1d4");
 //pタグに文字列セット
 p.textContent="1D4"+">>>"+Math.floor(Math.random() * 4 + 1);

}