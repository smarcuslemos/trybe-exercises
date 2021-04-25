/*

let custoUmProduto = 1;

let valorVendaUmProduto = 3;

if (custoUmProduto > 0 && valorVendaUmProduto > 0) {
    let custoTotalUmProduto = (custoUmProduto * 0.2) + custoUmProduto;
    console.log(lucroTotal = (valorVendaUmProduto - custoTotalUmProduto) * 1000);
} else {
    console.log('Valores digitados inválidos.')
}

*/


let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};
