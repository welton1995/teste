const email = document.querySelector('#email');
const passwd = document.querySelector('#passwd');
const btnEntrar = document.querySelector('#btnEntrar');


btnEntrar.addEventListener('click', (e)=> {
  e.preventDefault();
  if(!passwd.value || !email.value) {
   return alert('Por favor preencha os campos corretamente e tente novamente!');
  }

  if(email.value != 'welton.araujo2014@gmail.com'){
    return alert('Usuário não cadastrado!');
  }

  if(passwd.value != 'admin123'){
    return alert('Senha inválida!');
  }

  window.location.href = './index.html';
});
