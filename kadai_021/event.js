const doBtn = document.getElementById('btn');

const newText = document.getElementById('text');

doBtn.addEventListener('click', () => {

  setTimeout(() => {  

   newText.textContent = 'ボタンをクリックしました';
   
  },2000);

});

