function resposta() {
    var nome = document.querySelector('input[type="text"]').value;
    var q1 = document.querySelector('input[name=questao-1]:checked').value;
    var q2 = document.querySelector('input[name=questao-2]:checked').value;
    var q3 = document.querySelector('input[name=questao-3]:checked').value;
    var q4 = document.querySelector('input[name=questao-4]:checked').value;
    var q5 = document.querySelector('input[name=questao-5]:checked').value;
    var q6 = document.querySelector('input[name=questao-6]:checked').value;
    var q7 = document.querySelector('input[name=questao-7]:checked').value;
    var q8 = document.querySelector('input[name=questao-8]:checked').value;
    var q9 = document.querySelector('input[name=questao-9]:checked').value;
    var q10 = document.querySelector('input[name=questao-10]:checked').value;
    var acertos = 0;

    if (q1 == '2'){
    	acertos++;
    }

    if (q3 == '4'){
    	acertos++;
    }

    if (q5 == '1'){
    	acertos++;
    }

    if (q7 == '1'){
    	acertos++;
    }

    if (q9 == '3'){
    	acertos++;
    }

    if (q2 == '2'){
    	acertos++;
    }

    if (q4 == '2'){
    	acertos++;
    }

    if (q6 == '1'){
    	acertos++;
    }

    if (q8 == '3'){
    	acertos++;
    }

    if (q10 == '1'){
    	acertos++;
    }
    document.getElementById("result").innerHTML = "Parabéns "+nome + ", você acertou <b>" + acertos + "</b> questões.";
}