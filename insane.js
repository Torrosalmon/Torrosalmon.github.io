// ボタンクリック関数
function buttonClicki(){
 //pタグのID取得
 const p=document.getElementById("i");
//成功値の入力
 let success_number = prompt('成功値を入力してください：');
 //定義
 let sum = 0;
//ダイスロール
 dice = Math.floor(Math.random() * 6 + 1)
 sum = sum + dice;
 dice = Math.floor(Math.random() * 6 + 1)
 sum = sum + dice;
 //成否判定
 if(Number(sum)===2){
var success = ("ファンブル")
 }else if(Number(success_number) > Number(sum)){
 var success = ("失敗")
 }else if(Number(sum)===12){
 var success = ("スペシャル")
 }else if(Number(success_number) <= Number(sum)){
var success = ("成功")}
 //pタグに文字列セット
 p.textContent="2D6"+">>>"+sum+" "+"(2d6>="+success_number+" "+success+")";

}