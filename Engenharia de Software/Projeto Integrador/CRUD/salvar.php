<?php
	include("config.php");
	switch ($_REQUEST["acao"]) {
		case 'cadastrar':
			$sql = "INSERT INTO colaboradores 
						(cpf, nome, sexo, nascimento, contrato, fim_contrato)
					VALUES
						('".$_POST["cpf"]."','".$_POST["nome"]."','".$_POST["sexo"]."','".$_POST["nascimento"]."','".$_POST["contrato"]."','".$_POST["fim_contrato"]."')";
			$res = $conn->query($sql) or die($conn->error);
			if($res==true){
				print "<script>alert('Cadastro realizado com sucesso!');</script>";
				print "<script>location.href='usuarios.php';</script>";
			}else{
				print "<script>alert('Não foi possível realizar o cadastro.');</script>";
				print "<script>location.href='usuarios.php';</script>";
			}
			break;
		case 'editar':
			$cpf = $_POST["cpf"];
			$nome = $_POST["nome"];
			$sexo = $_POST["sexo"];
			$nascimento = $_POST["nascimento"];
			$contrato = $_POST["contrato"];
			$fim_contrato = $_POST["fim_contrato"];
			$sql = "UPDATE colaboradores SET
						cpf='{$cpf}',
						nome='{$nome}',
						sexo='{$sexo}',
						nascimento='{$nascimento}',
						contrato='{$contrato}',
						fim_contrato='{$fim_contrato}'
					WHERE
						cpf='{$cpf}'";
			$res = $conn->query($sql) or die($conn->error);
			if($res==true){
				print "<script>alert('Cadastro editado com sucesso!');</script>";
				print "<script>location.href='usuarios.php';</script>";
			}else{
				print "<script>alert('Não foi possível editar o cadastro.');</script>";
				print "<script>location.href='usuarios.php';</script>";
			}
			break;
		case 'excluir':
			$sql = "DELETE FROM colaboradores WHERE cpf=".$_REQUEST["cpf"];
			$res = $conn->query($sql) or die($conn->error);
			if($res==true){
				print "<script>alert('Cadastro excluído com sucesso!');</script>";
				print "<script>location.href='usuarios.php';</script>";
			}else{
				print "<script>alert('Não foi possível excluir o cadastro.');</script>";
				print "<script>location.href='usuarios.php';</script>";
			}
			break;
	}
?>