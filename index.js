document.getElementById('deposit-btn').addEventListener('click', function () {

    // get deposite Input Text
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputValue = parseFloat(depositInputText);
    // console.log(depositInputValue);

    // get deposit text show
    const depositText = document.getElementById('depositMoney');
    const depositTextValue = depositText.innerText;
    const depositMoney = parseFloat(depositTextValue);
    depositText.innerText = depositMoney + depositInputValue;


    // show total money
    const totalMoney = document.getElementById('total-money');
    const totalMoneyText = totalMoney.innerText;
    const TotalAmount = parseFloat(totalMoneyText);
    totalMoney.innerText = TotalAmount + depositInputValue

    depositInput.value = '';
})


document.getElementById('widthdraw-btn').addEventListener('click', function () {

    // get widthdraw input

    const widthdrawInput = document.getElementById('widthdraw-input');
    const widthdrawInputText = widthdrawInput.value;
    const widthdrawInputTextValue = parseFloat(widthdrawInputText);
    console.log(widthdrawInputTextValue);

    // get widthdraw text show
    const widthdrawText = document.getElementById('widthdrawMoney');
    const widthdrawTextValue = widthdrawText.innerText;
    const totalAmountmoney = parseFloat(widthdrawTextValue);
    widthdrawText.innerText = widthdrawInputTextValue + totalAmountmoney;

    // show widthdraw money
    const difernceMOney = document.getElementById('total-money');
    const totalMoney = difernceMOney.innerText;
    const totalDefarenceAmount = parseFloat(totalMoney)
    difernceMOney.innerText = totalDefarenceAmount - widthdrawInputTextValue;

    widthdrawInput.value = '';
})