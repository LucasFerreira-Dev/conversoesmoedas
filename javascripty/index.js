function buscarCotacao() {
    const moedaDe = document.getElementById("moeda1").value;
    const moedaPara = document.getElementById("moeda2").value;

    if (moedaDe === moedaPara) {
      document.getElementById("resultado").innerText = "Selecione moedas diferentes.";
      return;
    }

    const parMoeda = `${moedaDe}-${moedaPara}`;

    fetch(`https://economia.awesomeapi.com.br/last/${parMoeda}`)
      .then(response => response.json())
      .then(data => {
        const chave = `${moedaDe}${moedaPara}`; // ex: USDBRL, EURUSD
        const cotacao = parseFloat(data[chave].bid);

        document.getElementById("resultado").innerText =
          `1 ${moedaDe} = ${cotacao.toFixed(2)} ${moedaPara}`;
      })
      .catch(error => {
        document.getElementById("resultado").innerText =
          "Erro ao buscar a cotação.";
        console.error(error);
      });
  }