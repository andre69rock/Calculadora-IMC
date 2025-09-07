document.querySelector('.calculate').addEventListener('click', function() {
    const altura = parseFloat(document.getElementById('altura').value) / 100; // convertendo cm para m
    const peso = parseFloat(document.getElementById('peso').value);

    if (!altura || !peso) {
        alert('Preencha altura e peso corretamente!');
        return;
    }

    const imc = peso / (altura * altura);
    let status = '';

    if (imc < 18.5) status = 'abaixo do peso';
    else if (imc < 24.9) status = 'com peso ideal';
    else if (imc < 29.9) status = 'acima do peso';
    else status = 'obeso';

    document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(1)} e você está ${status}.`;
});
