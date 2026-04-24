function salvarCarros(event) {
    //impedir de recarregar a página
    event.preventDefault();

    let titulo = document.getElementById('title').value;
    let preco = document.getElementById('preco').value;
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');

    let cambio = cambioSelecionado ? cambioSelecionado.id : "Não informado";

        let carro = {
        titulo,
        preco,
        marca,
        modelo, 
        cambio
    };

    let carros = JSON.parse(localStorage.getItem("carros")) || [];
    carros.push(carro);
    localStorage.setItem("carros", JSON.stringify(carros));

    adicionarNatela(carro);

    document.querySelector("form").reset();

    
}
    function adicionarNatela(carro){
        let lista = document.getElementById('listarCarros');
        let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <h3>${carro.titulo}<h3>
        <p><strong>Preço:</strong> R$ ${carro.preco}</p>
        `


    }


