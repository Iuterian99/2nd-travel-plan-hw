inputName = prompt("Assalomu aleykum! Bizni agenstvadan sayohat qilishni tanlaganingiz uchun tashakkur! Ismingiz: ", "Abduhalim");

alert(`${inputName }` + " bizning Xarajatlar: \n1) Borib-kelish Samalyot bileti-$500 \n2) Mehmonxona to`lovi (to`liq safar davomiyligi uchun) -$250 \n3) Muzey va ko`ngilochar joylar uchun -€120");

inputMoney = prompt("Xurmatli " + `${inputName}` + " Hisobingizda qancha mablag` bor (sumda)?" );

alert("$1 = 10 696.36 so`m \n €1 = 12 655.24 so`m ");

dollarToSum = (500 * 10696.36) + (250 * 10696.36) ;
euroToSum = (120 * 12655.24) ;

allExpenditures = dollarToSum + euroToSum ;

alert("Barcha Xarajatlar sumda: " + allExpenditures);

if(inputMoney > allExpenditures){
  alert(`${inputName} tabriklaymiz sizda yetarlicha pul bor oq yo'l! :) ` )
}else{
   alert(`${inputName} afsus sizda yetarlicha pul yo'q ekan ozroq pul to'plang! :( ` )
}