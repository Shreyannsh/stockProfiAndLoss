var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price")
var output = document.querySelector("#output");
var button = document.querySelector("#button");

function calculatingProfitAndLoss() {

    var input1 = Number(initialPrice.value);
    var input2 = Number(quantity.value);
    var input3 = Number(currentPrice.value);
    if (input1 > 0 && input2 > 0 && input3 > 0 && input2%1=== 0 ) {
        if (input3 > input1) {
            profit = input3 - input1;
            totalProfit = profit * input2;
            profitPercentage = ((totalProfit / (input1 * input2)) * 100).toFixed(2);
            output.innerText = `You are in profit of ${profitPercentage}% with ${totalProfit} rupees.
            ~ "Great! Be invested"`
            output.style.color = "green";
        } else {
            if (input1 > input3) {
                loss = input1 - input3;
                totalLoss = loss * input2;
                lossPercentage = (totalLoss / (input3 * input2) * 100).toFixed(2);
                output.innerText = `You are in loss of ${lossPercentage}% with ${totalLoss} rupees.
            ~ "Re-evaluate your position"`
                output.style.color = "maroon";
            } else {
                output.innerText = "Your are at neutral position without any profit or loss.\n Keep checking!"
                output.style.color = "blue";
            }
        }

    } else {
        output.innerText= "Kindly enter valid values for all 3 entries !!";
    }
}




button.addEventListener("click", calculatingProfitAndLoss);