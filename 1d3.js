// ボタンクリック関数
function buttonClick3(){
 //pタグのID取得
 const p=document.getElementById("1d3");
 //pタグに文字列セット
 p.textContent="1D3"+">>>"+Math.floor(Math.random() * 3 + 1);

}