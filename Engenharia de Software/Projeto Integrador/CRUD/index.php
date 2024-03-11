<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Cadastro de Colaborador</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="index.php">Cadastro</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="usuarios.php">Colaboradores</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <form action="salvar.php" method="POST">
                    <input type="hidden" name="acao" value="cadastrar">
                    <div class="form-group">
                        <label for="cpf">CPF</label>
                        <input type="text" name="cpf" required minlength="11" maxlength="11" placeholder="Digite aqui" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="nome">Nome</label>
                        <input type="text" name="nome" required minlength="2" maxlength="40" placeholder="Digite aqui" autocomplete="username" class="form-control">
                    </div>
                    <div class="form-group">
                        <h5>Sexo</h5>
                        <label for="sexo">M</label>
                        <input type="radio" name="sexo" value="M" required>
                        <label for="sexo">F</label>
                        <input type="radio" name="sexo" value="F" required>
                    </div>
                    <div class="form-group">
                        <label for="nascimento">Data de Nascimento</label>
                        <input type="date" name="nascimento" required autocomplete="bday" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="cadastro">Número de Contrato</label>
                        <input type="text" name="contrato" required minlength="11" maxlength="11" placeholder="Digite aqui" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="fim_contrato">Fim de Contrato</label>
                        <input type="date" name="fim_contrato" required class="form-control">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  </body>
</html>