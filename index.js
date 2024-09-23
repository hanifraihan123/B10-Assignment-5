document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href = '/blog.html';
})



    document.getElementById('btn-donate').addEventListener('click', function(event){
        event.preventDefault();
        const amount = getInputValue('input-amount');
        const money = getInnerTextValue('donate-add');
        if(amount > 0){
        const addition = amount + money;
        const balance = getInnerTextValue('current-balance');
        const actualBalance = balance - amount;
        document.getElementById('current-balance').innerText = actualBalance;
        document.getElementById('donate-add').innerText = addition;

        document.getElementById('input-amount').value = '';
    }
    else{
        alert('Invalid Donation Amount');
        document.getElementById('input-amount').value = '';
    }
        })

    document.getElementById('btn-flood').addEventListener('click', function(event){
event.preventDefault();
        const amount = getInputValue('input-flood-amount');
        const money = getInnerTextValue('donate-flood');
        if(amount > 0){
        const addition = amount + money;
        const balance = getInnerTextValue('current-balance');
        const actualBalance = balance - amount;
        document.getElementById('current-balance').innerText = actualBalance;
        document.getElementById('donate-flood').innerText = addition;

        document.getElementById('input-flood-amount').value = '';
    }
    else{
        alert('Invalid Donation Amount');
        document.getElementById('input-flood-amount').value = '';
    }
    })
  

document.getElementById('btn-quota').addEventListener('click', function (event){
    event.preventDefault();
        const amount = getInputValue('input-quota');
        const money = getInnerTextValue('donate-quota');
        if(amount > 0){
        const addition = amount + money;
        const balance = getInnerTextValue('current-balance');
        const actualBalance = balance - amount;
        document.getElementById('current-balance').innerText = actualBalance;
        document.getElementById('donate-quota').innerText = addition;

        document.getElementById('input-quota').value = '';
    }
    else{
        alert('Invalid Donation Amount');
        document.getElementById('input-quota').value = '';
    }
})


function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const valueNumber = parseFloat(inputValue);
    return valueNumber;
}

function getInnerTextValue(id){
    const innerText = document.getElementById(id).innerText;
    const textNumber = parseFloat(innerText);
    return textNumber;
}