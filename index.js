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
        const p = document.createElement('p');
        p.innerText = `${amount} Taka is Donated for famine-2024 at Feni, Bangladesh`;
        document.getElementById('transaction-container').appendChild(p);
        alert('Donation complete succesfully')
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
        const p = document.createElement('p');
        p.innerText = `${amount} Taka is Donated for Flood Relief in Feni,Bangladesh`;
        document.getElementById('transaction-container').appendChild(p);

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
        const p = document.createElement('p');
        p.innerText = `${amount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
        document.getElementById('transaction-container').appendChild(p);

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

document.getElementById('btn-history').addEventListener('click', function (){
    document.getElementById('History-section').classList.remove('hidden');
    document.getElementById('donate-section').classList.add('hidden')
})

document.getElementById('btn-donation').addEventListener('click', function(){
    document.getElementById('History-section').classList.add('hidden');
    document.getElementById('donate-section').classList.remove('hidden');
})
