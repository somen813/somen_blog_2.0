//必要な変数を宣言する
let numbers = [0];
let memory = [];
let result = 0;
let operator = 0;

//事前にできる共通化をする
function show_result(id,content){
  const inner = document.getElementById(id);
  inner.innerText = content;
}

function operator_collaboration(type,log){
  show_result('result', 0);
  numbers = [];
  operator = type;
  memory.push(result);
  console.log(log);
}

//ここからボタンの機能を付けるプログラム
function number_click(number){
  if(numbers[0] === 0){
    numbers.shift();
  }
  numbers.push(number);
  result = Number(numbers.join(''));
  show_result('result', numbers.join(''));
  console.log(result + ' ' + '数字を追加しました');
}

function point_click(){
  if(numbers.includes('.') === false){
    numbers.push('.');
    result = Number(numbers.join(''));
    show_result('result', numbers.join(''));
    console.log(result + ' ' + '数字を追加しました');
  };
}

function all_clear(){
  numbers = [];
  result = 0;
  show_result('result', result);
  console.log('すべて削除しました');
}

function cancel(){
  numbers.pop();
  result = Number(numbers.join(''));
  show_result('result', Number(numbers.join('')));
  console.log('一文字消しました');
}

function addition(){
  show_result('calculation', result + ' +')
  operator_collaboration(1,'加法に設定しました');
}

function subtraction(){
  show_result('calculation', result + ' -')
  operator_collaboration(2,'減法に設定しました');
}

function  multiplication(){
  show_result('calculation', result + ' ×')
  operator_collaboration(3,'乗法に設定しました');
}

function  division(){
  show_result('calculation', result + ' ÷')
  operator_collaboration(4,'除法に設定しました');
}

function decision(){
  memory.push(Number(numbers.join('')));
  if(operator == 1){
    result = memory.reduce((total, element) => total + element);
  }else if(operator == 2){
    result = memory.reduce((total, element) => total - element);
  }else if(operator == 3){
    result = memory.reduce((total, element) => total * element);
  }else if(operator == 4){
    result = memory.reduce((total, element) => total / element);
  }
  result = Math.round(result * Math.pow(10,10)) / Math.pow(10,10);
  show_result('result', result);
  show_result('calculation', '');
  numbers = [0];
  memory = [];
  operator = 0;
}

function inversion(){
  if(numbers[0] === '-'){
    numbers.shift();
  }else{
    numbers.unshift('-');
  };
  result = Number(numbers.join(''));
  show_result('result', result);
}

//ここからキー入力のプログラム
document.addEventListener('keypress', (e) => {
  if(e.key >= 0 || e.key <= 9){
    number_click(e.key);
  }
});

document.addEventListener('keypress', (e) => {
  if(e.key === 'a' || e.key === 'A'){
    all_clear();
  }else if(e.key === 'c' || e.key === 'c'){
    cancel();
  }
});

document.addEventListener('keypress', (e) => {
  if(e.key === '+'){
    addition();
  }else if(e.key === '-'){
    subtraction();
  }else if(e.key === '*'){
    multiplication();
  }else if(e.key === '/'){
    division();
  }
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    decision();
  }
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Backspace'){
    cancel();
  }
});