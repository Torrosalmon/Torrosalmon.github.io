// ボタンクリック関数
function buttonClick2d6(){
 //pタグのID取得
 const p=document.getElementById("2d6");
 //定義
 let sum = 0;
//ダイスロール
 dice = Math.floor(Math.random() * 6 + 1)
 sum = sum + dice;
 dice = Math.floor(Math.random() * 6 + 1)
 sum = sum + dice;
 //pタグに文字列セット
 p.textContent="2D6"+">>>"+sum;

}