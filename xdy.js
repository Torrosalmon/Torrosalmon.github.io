// ボタンクリック関数
function buttonClickx(){
 //pタグのID取得
 const p=document.getElementById("xdy");
 //定義
 let x = prompt("サイコロの個数を入力してください：" );
 let y = prompt("サイコロの面数を入力してください：");
 let sum = 0;
 let sai = 0;
//ダイスロール
while(sai<x){
 dice = Math.floor( Math.random() * y ) + 1;
 sum = sum + dice;
 sai++;
}
 //pタグに文字列セット
 p.textContent=x+"D"+y+">>>"+(sum) ;
}