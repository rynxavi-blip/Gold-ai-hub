const modal=document.getElementById('modal');
const modalTitle=document.getElementById('modalTitle');
const modalText=document.getElementById('modalText');

function openModal(title,text){
  modalTitle.textContent=title;
  modalText.textContent=text;
  modal.classList.add('show');
}

function closeModal(){
  modal.classList.remove('show');
}

function demoAction(name){
  openModal(
    name+' — Demo',
    'This button is part of the Future Gold Hub demo. No real money, deposits, withdrawals, or investments are processed.'
  );
}

function invest(amount){
  openModal(
    'Project preview',
    'Demo project: '+amount.toLocaleString()+' UGX. This is a visual simulation only.'
  );
}

function showTab(name){
  if(name !== 'Home'){
    openModal(
      name,
      'The '+name+' section is included as a demo navigation screen.'
    );
  }
}

modal.addEventListener('click',e=>{
  if(e.target===modal) closeModal();
});

const notices=[
  'Demo account activity — withdrawals are simulated.',
  'Welcome to Future Gold Hub — interactive demo.',
  'Project prices shown here are sample values.'
];

let n=0;

setInterval(()=>{
  n=(n+1)%notices.length;
  document.getElementById('notice').textContent=notices[n];
},3500);
