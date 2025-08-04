// ボタンクリック関数
function buttonClick0(){
 //pタグのID取得
 const p1=document.getElementById("1d0");
  //成功値の入力
 let success_number = prompt('成功値を入力してください：');
 //ダイスロール
 var dice_roll  = Math.floor( Math.random() * 100 ) + 1;
 //ファンブルの値
if(96<=Number(success_number)){
var fumble = success_number
}else{
var fumble = 95
}

 //成否判定
if(Number(fumble)<Number(dice_roll)){
var success = ("致命的失敗")
}else if(Number(success_number)<Number(dice_roll)){
var success = ("失敗")
}else if(Number(dice_roll)<=5){
var success = ("決定的成功")
}else if(Number(dice_roll)<=Number(success_number)/5){
var success = ("スペシャル")
}else if(Number(dice_roll)<=Number(success_number)){
var success = ("成功")
}else if(Number(dice_roll)===Null{
 var success = ("エラー")
}else{
var success = ("エラー")
}
 //pタグに文字列セット
 p1.textContent="1D100>>>"+dice_roll+" "+"(1d100<="+success_number+" "+success+")"


}
