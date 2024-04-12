document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const loggedInMessage = document.getElementById('loggedInMessage');
    const logoutButton = document.getElementById('logoutButton');
    const createAccountButton = document.getElementById('createAccountButton');
    const accountInfo = document.getElementById('accountInfo');
  
    let currentUser = null;
  
    // Simulação de contas de usuário
    const users = [];
  
    // Função para criar uma nova conta de usuário
    function createUser(username, email, password) {
      users.push({ username, email, password });
    }
  
    // Event listener para o formulário de criação de conta
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = signupForm.querySelector('input[name="username"]').value;
      const email = signupForm.querySelector('input[name="email"]').value;
      const password = signupForm.querySelector('input[name="password"]').value;
      createUser(username, email, password);
      signupForm.reset();
      alert('Conta criada com sucesso!');
    });
  
    // Event listener para o formulário de login
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = loginForm.querySelector('input[name="username"]').value;
      const password = loginForm.querySelector('input[name="password"]').value;
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        currentUser = user;
        loggedInMessage.textContent = `Bem-vindo, ${currentUser.username}!`;
        loggedInMessage.style.display = 'block';
        logoutButton.style.display = 'block';
        accountInfo.style.display = 'block';
      } else {
        alert('Nome de usuário ou senha incorretos.');
      }
      loginForm.reset();
    });
  
    // Event listener para o botão de logout
    logoutButton.addEventListener('click', function() {
      currentUser = null;
      loggedInMessage.textContent = '';
      loggedInMessage.style.display = 'none';
      logoutButton.style.display = 'none';
      accountInfo.style.display = 'none';
    });
  
    // Event listener para o botão de criação de conta
    createAccountButton.addEventListener('click', function() {
      signupForm.style.display = 'block';
      loginForm.style.display = 'none';
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Simulação de ação ao clicar nos botões "Gostei" e "Não gostei"
    document.getElementById('like-btn').addEventListener('click', function() {
        alert('Você curtiu este vídeo!');
    });

    document.getElementById('dislike-btn').addEventListener('click', function() {
        alert('Você não curtiu este vídeo!');
    });

    // Simulação de envio de comentário
    document.getElementById('form-comentario').addEventListener('submit', function(event) {
        event.preventDefault();
        var nome = document.getElementById('nome').value;
        var comentario = document.getElementById('comentario').value;
        var comentarioHtml = '<div><strong>' + nome + '</strong>: ' + comentario + '</div>';
        document.getElementById('comentarios-lista').insertAdjacentHTML('beforeend', comentarioHtml);
        document.getElementById('form-comentario').reset();
    });
});

  