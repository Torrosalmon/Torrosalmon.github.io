// ボタンクリック関数
function buttonClick6(){
 //pタグのID取得
 const p=document.getElementById("1d6");
 //pタグに文字列セット
 p.textContent="1D6"+">>>"+Math.floor(Math.random() * 6 + 1);

}