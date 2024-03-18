//-------------------------------------------------uyga-vazifa-------------------------------------------
/**const a = 3; // a qiymati
const b = 8; // b qiymati
let count = 0;

for (let i = a; i <= b; i++) {
  console.log(i);
  count++;
}

console.log("Chiqarilgan sonlar soni:", count);
*/
//-------------------------------------------------2---------------------------------------------------------
/**const a = 3; // a qiymati
const b = 8; // b qiymati
let count = 0;

for (let i = b - 1; i > a; i--) {
  console.log(i);
  count++;
}

console.log("Chiqarilgan sonlar soni:", count);
*/
//-------------------------------------------------3---------------------------------------------------------
/**for (let kg = 1; kg <= 10; kg++) {
  let totalNarx = kg * 50000;
  console.log(kg + " kg konfet narxi: " + totalNarx + " som");
}
*/
//------------------------------------------------4---------------------------------------------------------
/**function konfetNarxi(narx) {
  for (let kg = 1.2; kg <= 2; kg += 0.2) {
    let totalNarx = kg * narx;
    console.log(kg.toFixed(1) + " kg konfet narxi: " + totalNarx.toFixed(1));
  }
}

const narx = 5000; // 1 kg konfet narxi

konfetNarxi(narx);
*/
//------------------------------------------------5---------------------------------------------------------
/**function butunSonlarYigindisi(a, b) {
  let yigindi = 0;

  for (let i = a; i <= b; i++) {
    yigindi += i;
  }

  return yigindi;
}

const a = +prompt("a sonini kiriting:");
const b = +prompt("b sonini kiriting:");

const yigindi = butunSonlarYigindisi(a, b);
console.log("Butun sonlar yig'indisi:", yigindi);
*/
//------------------------------------------------6---------------------------------------------------------
/**function butunSonlarKopaytmasi(a, b) {
  let kopaytma = 1;

  for (let i = a; i <= b; i++) {
    kopaytma *= i;
  }

  return kopaytma;
}

const a = +prompt("a sonini kiriting:");
const b = +prompt("b sonini kiriting:");

const kopaytma = butunSonlarKopaytmasi(a, b);
console.log("Butun sonlar ko'paytmasi:", kopaytma);
*/
//------------------------------------------------7---------------------------------------------------------
/**function butunSonlarKvadratlariYigindisi(a, b) {
  let yigindi = 0;

  for (let i = a; i <= b; i++) {
    yigindi += i * i;
  }

  return yigindi;
}

const a = +prompt("a sonini kiriting:");
const b = +prompt("b sonini kiriting:");

const yigindi = butunSonlarKvadratlariYigindisi(a, b);
console.log("Butun sonlar kvadratlarining yig'indisi:", yigindi);
*/
//------------------------------------------------8---------------------------------------------------------
/**function yigindiHisobla(n) {
  let yigindi = 0;

  for (let i = 1; i <= n; i++) {
    yigindi += 1 / i;
  }

  return yigindi;
}

const n = +prompt("n sonini kiriting:");

const yigindi = yigindiHisobla(n);
console.log("Yig'indi:", yigindi);
*/
//------------------------------------------------9---------------------------------------------------------
/**function kopaytmaHisobla(n) {
  let kopaytma = 1;

  for (let i = 1.1; i <= n; i += 0.1) {
    kopaytma *= i;
  }

  return kopaytma;
}

const n = +prompt("n sonini kiriting:");

const kopaytma = kopaytmaHisobla(n);
console.log("Kopaytma:", kopaytma);
*/
//------------------------------------------------10---------------------------------------------------------
/**function darajaHisobla(a, n) {
  let daraja = 1;

  for (let i = 0; i < n; i++) {
    daraja *= a;
  }

  return daraja;
}

const a = +prompt("a qiymatini kiriting:");
const n = +prompt("n qiymatini kiriting:");

const natija = darajaHisobla(a, n);
console.log("a^n:", natija);
*/
//------------------------------------------------11---------------------------------------------------------
/**function darajalarniChiqar(a, n) {
  for (let i = 1; i <= n; i++) {
    const daraja = Math.pow(a, i);
    console.log(`${a} ning ${i}-darajasi: ${daraja}`);
  }
}

const a = +prompt("a qiymatini kiriting:");
const n = +prompt("n qiymatini kiriting:");

darajalarniChiqar(a, n);
*/
//------------------------------------------------12---------------------------------------------------------

/**function darajalarniChiqar(a, n) {
  let daraja = 1;
  for (let i = 1; i <= n; i++) {
    daraja *= a;
    console.log(`${a} ning ${i}-darajasi: ${daraja}`);
  }
}

const a = +prompt("a qiymatini kiriting:");
const n = +prompt("n qiymatini kiriting:");

darajalarniChiqar(a, n);
*/
//------------------------------------------------13---------------------------------------------------------
/**function darajalarniChiqarVaHisobla(a, n) {
  let summa = 0;
  let daraja = 1;

  for (let i = 0; i <= n; i++) {
    summa += daraja;
    daraja *= a;
    console.log(`${a} ning ${i}-darajasi: ${daraja}`);
  }

  console.log(`Yig'indi (S): ${summa}`);
}

const a = 2; // a qiymati
const n = 5; // n qiymati

darajalarniChiqarVaHisobla(a, n);
*/
//------------------------------------------------14---------------------------------------------------------
/**function faktorialYigindisi(n) {
  let summa = 0;
  let faktorial = 1;

  for (let i = 1; i <= n; i++) {
    faktorial *= i;
    summa += faktorial;
  }

  console.log(`Yig'indi (S): ${summa}`);
}

const n = +prompt("n qiymatini kiriting:");

faktorialYigindisi(n);
*/

//--------------------------------------------------15---------------------------------------------------------
/**function darajaYigindisi(N, K) {
  let summa = 0;

  for (let i = 1; i <= N; i++) {
    summa += Math.pow(i, K);
  }

  console.log(`Yig'indi (S): ${summa}`);
}

const N = +prompt("N qiymatini kiriting:");
const K = +prompt("K qiymatini kiriting:");

darajaYigindisi(N, K);
*/
//--------------------------------------------------16---------------------------------------------------------

/**function darajaYigindisi(N) {
  let summa = 0;

  for (let i = 1; i <= N; i++) {
    summa += Math.pow(i, i);
  }

  console.log(`Yig'indi (S): ${summa}`);
}

const N = +prompt("N qiymatini kiriting:");

darajaYigindisi(N);
*/
//--------------------------------------------------17---------------------------------------------------------
/**function chiqarish(A, B) {
  for (let i = A; i <= B; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(i);
    }
  }
}

const A = 2; // A qiymati
const B = 4; // B qiymati

chiqarish(A, B);
*/
//--------------------------------------------------18---------------------------------------------------------
/**const son = 24; // Son
let boluvchilar = [];
let yigindi = 0;

for (let i = 1; i <= son; i++) {
  if (son % i === 0) {
    boluvchilar.push(i);
    yigindi += i;
  }
}

console.log(`Boluvchilar: ${boluvchilar}`);
console.log(`Boluvchilar soni: ${boluvchilar.length}`);
console.log(`Yigindi: ${yigindi}`);
*/
//--------------------------------------------------19---------------------------------------------------------
/**function tubSonniTekshirish(n) {
  if (n < 2) {
    console.log("Son tub emas.");
    return;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log("Son tub emas.");
      return;
    }
  }

  console.log("Son tub.");
}

const n = +prompt("n qiymatini kiriting:");

tubSonniTekshirish(n);
*/
//--------------------------------------------------20---------------------------------------------------------
/**function sonlarniChiqarish(N) {
  for (let i = 1; i <= N; i++) {
    let satr = "";
    for (let j = 1; j <= i; j++) {
      satr += j + " ";
    }
    console.log(satr);
  }
}

const N = +prompt("N qiymatini kiriting:");

sonlarniChiqarish(N);
*/
//--------------------------------------------------case-1---------------------------------------------------------
/**function bosqichniAniqlovchi(A, B) {
  const boshQisim = A % B;
  console.log(`A kesmaning bo'sh qismi: ${boshQisim}`);
}

const A = +prompt("A soni:");
const B = +prompt("B soni:");

bosqichniAniqlovchi(A, B);
*/
//--------------------------------------------------case-2---------------------------------------------------------

/**function joylashtirishMumkinliginiAniqlovchi(A, B) {
  const joylashtirishMumkinligi = Math.floor(A / B);
  console.log(
    `A usunlikdagi kesmada B kesmadan ${joylashtirishMumkinligi} ta joylashtirish mumkin.`
  );
}

const A = +prompt("A soni:");
const B = +prompt("B soni:");

joylashtirishMumkinliginiAniqlovchi(A, B);
*/
//--------------------------------------------------case-3---------------------------------------------------------
/**function darajaniAniqlovchi(n) {
  let isDaraja = false;
  let daraja = 1;

  while (daraja <= n) {
    if (daraja === n) {
      isDaraja = true;
      break;
    }
    daraja *= 3;
  }

  if (isDaraja) {
    console.log(`${n} - ning darajasi`);
  } else {
    console.log(`${n} - ning darajasi emas`);
  }
}

const n = +prompt("n sonini kiriting:");

darajaniAniqlovchi(n);
*/
//--------------------------------------------------case-4---------------------------------------------------------
/**function bolishVaQoldiq(n, m) {
  const butunQism = Math.floor(n / m);
  const qoldiq = n % m;

  console.log(`Bolib butun qismi: ${butunQism}`);
  console.log(`Qoldiq: ${qoldiq}`);
}

const n = +prompt("n sonini kiriting:");
const m = +prompt("m sonini kiriting:");

bolishVaQoldiq(n, m);
*/
//--------------------------------------------------case-5---------------------------------------------------------
/**function teskariTartibdaChiqar(n) {
  let bolibButunQism = Math.floor(n);
  let qoldiq = 0;
  let teskari = 0;

  while (bolibButunQism > 0) {
    qoldiq = bolibButunQism % 10; // oxirgi raqamni olish
    teskari = teskari * 10 + qoldiq; // teskari tartibda raqamlarni saqlash
    bolibButunQism = Math.floor(bolibButunQism / 10); // raqamlardan keyingi bo'lib butun qismni olish
  }

  console.log(`Teskari tartibda: ${teskari}`);
}

const n = +prompt("n sonini kiriting:");

teskariTartibdaChiqar(n);
*/
//--------------------------------------------------case-6---------------------------------------------------------n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.
/**function raqamlarYigindisiVaSon(n) {
  let bolibButunQism = Math.floor(n);
  let qoldiq = 0;
  let yigindi = 0;

  while (bolibButunQism > 0) {
    qoldiq = bolibButunQism % 10; // oxirgi raqamni olish
    yigindi += qoldiq; // raqamlarni yig'indisi
    bolibButunQism = Math.floor(bolibButunQism / 10); // raqamlardan keyingi bo'lib butun qismni olish
  }

  console.log(`Raqamlar yig'indisi: ${yigindi}`);
  console.log(`Raqamlar soni: ${yigindi.toString().length}`);
}

const n = +prompt("n sonini kiriting:");

raqamlarYigindisiVaSon(n);
*/
//--------------------------------------------------case-7---------------------------------------------------------
/**function ikkiRaqamniTekshir(n) {
  let bolibButunQism = Math.floor(n);
  let qoldiq = 0;
  let bor = false;

  while (bolibButunQism > 0) {
    qoldiq = bolibButunQism % 10; // oxirgi raqamni olish
    if (qoldiq === 2) {
      bor = true;
      break;
    }
    bolibButunQism = Math.floor(bolibButunQism / 10); // raqamlardan keyingi bo'lib butun qismni olish
  }

  if (bor) {
    console.log("Berilgan sonning raqamlari orasida 2 raqami bor.");
  } else {
    console.log("Berilgan sonning raqamlari orasida 2 raqami yo'q.");
  }
}

const n = +prompt("n sonini kiriting:");

ikkiRaqamniTekshir(n);
*/
//--------------------------------------------------case-8---------------------------------------------------------
/**function toqRaqamlarniTekshir(n) {
  let bolibButunQism = Math.floor(n);
  let qoldiq = 0;
  let toqRaqamlarMavjud = false;

  while (bolibButunQism > 0) {
    qoldiq = bolibButunQism % 10; // oxirgi raqamni olish
    if (qoldiq % 2 !== 0) {
      toqRaqamlarMavjud = true;
      break;
    }
    bolibButunQism = Math.floor(bolibButunQism / 10); // raqamlardan keyingi bo'lib butun qismni olish
  }

  if (toqRaqamlarMavjud) {
    console.log("Berilgan sonning raqamlari orasida toq raqamlar bor.");
  } else {
    console.log("Berilgan sonning raqamlari orasida toq raqamlar yo'q.");
  }
}

const n = 12345; // berilgan son

toqRaqamlarniTekshir(n);
*/
//--------------------------------------------------case-10---------------------------------------------------------
/**function tubSonniTekshir(n) {
  if (n <= 1) {
    return false; // 1 dan kichik sonlar tub emas
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // n soni tub emas
    }
  }

  return true; // n soni tub son
}

const n = 17; // berilgan son

const isTubSon = tubSonniTekshir(n);
console.log(isTubSon);
*/
