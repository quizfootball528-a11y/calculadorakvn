function inserir(num)
{
    var resultado = document.getElementById('resultado');
    var numero = resultado.innerHTML;

    // Verifica se o que está sendo inserido é um operador
    if (num == '+' || num == '-' || num == '*' || num == '/' || num == 'x' || num == '×' || num == '÷')
    {
        // Se estiver vazio, não deixa começar com operador
        if (numero == "")
        {
            return;
        }

        // Pega o último caractere
        var ultimo = numero.charAt(numero.length - 1);

        // Se o último já for operador, não adiciona outro
        if (ultimo == '+' || ultimo == '-' || ultimo == '*' || ultimo == '/' || ultimo == 'x' || ultimo == '×' || ultimo == '÷')
        {
            return;
        }
    }

    resultado.innerHTML = numero + num;
   
}
function clean()
{
    document.getElementById("resultado").innerHTML = "";
}
function back()
{
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function trolarecalcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
        {
            document.getElementById('resultado').innerHTML = eval(resultado);
        } 
}

document.addEventListener("keydown", function(event)
{
    var tecla = event.key;

    // Números
    if (tecla >= "0" && tecla <= "9")
    {
        inserir(tecla);
    }

    // Operadores
    else if (tecla == "+")
    {
        inserir("+");
    }

    else if (tecla == "-")
    {
        inserir("-");
    }

    else if (tecla == "*")
    {
        inserir("*");
    }

    else if (tecla == "/")
    {
        inserir("/");
    }

    // Ponto
    else if (tecla == ".")
    {
        inserir(".");
    }

    // Enter = calcular
    else if (tecla == "Enter")
    {
        calcular();
    }

    // Backspace = apagar
    else if (tecla == "Backspace")
    {
        back();
    }

    // Escape = limpar
    else if (tecla == "Escape")
    {
        clean();
    }
});
