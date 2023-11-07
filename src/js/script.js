function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById("bill").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numOfPeople = document.getElementById("people").value;

    if(bill == '' | serviceQual == 0) {
        alert("Por favor, preencha os valores");
        return;
    }
    if(numOfPeople == '' | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none"; //hide each
    } else {
        document.getElementById("each").style.display = "block"; //show each
    }

    let total = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2); // 2 casas decimais
    document.getElementById("tip").innerHTML = total; //mostra o valor
    document.getElementById("totalTip").style.display = "block"; //mostra o valor 
}   
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip)