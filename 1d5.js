// ボタンクリック関数
function buttonClick5(){
 //pタグのID取得
 const p=document.getElementById("1d5");
 //pタグに文字列セット
 p.textContent="1D5"+">>>"+Math.floor(Math.random() * 5 + 1);

}