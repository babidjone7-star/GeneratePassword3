let arr = [];
let len = 8
for (let i = 0; i <= 10; i++){
  arr.push(i);
}
function Gener() {
   let Mem = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopsadfghjklzxcvbnm1234567890'
   let char = ''
   let Generator = '';
   for(let i = 0; i < len; i++){
       char = Math.floor(Math.random() * Mem.length);
       Generator += Mem[char];
   }
   return Generator;
}
function gen(){
   Generator = Gener();
   document.getElementById('res').textContent = Generator;
}