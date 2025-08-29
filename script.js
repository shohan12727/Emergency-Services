function getElement(id) {
    const element = document.getElementById(id);
    return element;
}


// heart click part 

const hearts = document.getElementsByClassName('heart_icon');
const heartCount = getElement('heart_count');
for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        let convertedCount = parseInt(heartCount.innerText);
        convertedCount++;
        heartCount.innerText = convertedCount
    })

}

// clear button functionality

document.getElementById('clear_button').addEventListener('click', function () {
    getElement('call_history').innerHTML = ''
})


//copy button funtionality
let copyCountEle = document.getElementById('copy_count');
let copyCnt = parseInt(copyCountEle.innerText);

function handleCopyButton(buttonId, number) {


    document.getElementById(buttonId).addEventListener('click', function () {
        const numberText = document.getElementById(number).innerText;
        navigator.clipboard.writeText(numberText);
        alert('Number copyed');
        console.log('shohan');
        copyCnt++;
        copyCountEle.innerText = copyCnt;
    })
}
handleCopyButton('nation_copy', 'national_number_id');
handleCopyButton('police_copy', 'police_number_id');
handleCopyButton('fire_copy', 'fire_number_id')


// call button funtionality 
function handleCall(buttonId, serviceName, serviceNumber) {
    const callCoinElement = getElement('call_coin');

    document.getElementById(buttonId).addEventListener('click', function () {
        let callCoin = parseInt(callCoinElement.innerText);

        if (callCoin < 20) {
            alert('Insufficient coin');
            return;
        }

        callCoin -= 20;
        callCoinElement.innerText = callCoin;

        alert(`For ${serviceName} Service, Dial: ${serviceNumber}`);

        const callHistory = getElement('call_history');

        const callDiv = document.createElement('div');
        callDiv.className = 'flex items-center justify-between bg-[#FAFAFA] p-1 mt-4';
        callDiv.innerHTML = `
            <div>
                <h1 class="font-semibold">${serviceName}</h1>
                <p class="text-[#5C5C5C]">${serviceNumber}</p>
            </div>
            <p class="text-[#5C5C5C]">${new Date().toLocaleTimeString()}</p>
             </div>
        `;
        callHistory.appendChild(callDiv);
    });
}
handleCall('call_national', 'National Emergency', '999');
handleCall('call_police', 'Police Service', '999');
handleCall('fire_call', 'Fire Service', '999')

