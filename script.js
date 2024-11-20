let msgSent = 0;
let errorSent = false;

function createField () {
    const inputField = document.createElement('input')
    inputField.type = 'text'
    inputField.placeholder = 'Enter a message'
    document.body.appendChild(inputField)
    const msgDisplay = createMsg();
    const submitBtn = createSubmit()
    const msgContainer = createContainer(msgDisplay, submitBtn);
    displayInput(inputField, msgDisplay, submitBtn, msgContainer)
}

function createMsg() {
    const msgDisplay = document.createElement('p')
    document.body.appendChild(msgDisplay)  
    return msgDisplay
}

function createSubmit() {
    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Submit'
    submitBtn.style.display = 'none'
    document.body.appendChild(submitBtn)
    return submitBtn
}

function createContainer(msgDisplay, submitBtn) {
    const msgContainer = document.createElement('div');
    msgContainer.setAttribute('class', 'msgFlexbox')
    msgContainer.appendChild(msgDisplay)
    msgContainer.appendChild(submitBtn)
    document.body.appendChild(msgContainer)
    return msgContainer;
}

function createInbox() {
    const postedMsgs = document.createElement('div');
    postedMsgs.setAttribute('class', 'postedMsgsContainer')
    document.body.appendChild(postedMsgs)
    return postedMsgs;
}

function displayInput(inputField, msgDisplay, submitBtn, msgContainer) {
 
    inputField.addEventListener('input', function () {
        msgDisplay.textContent = inputField.value;

      if (inputField.value) {
        submitBtn.style.display = 'inline';   
      } else {
        submitBtn.style.display = 'none'
      }
    })

    const postedMsgs = createInbox()
  
    submitBtn.addEventListener('click', () => {
        msgSent++;

        if (msgSent <= 3) {
            const inboxMsg = document.createElement('p')
            inboxMsg.textContent = msgDisplay.textContent;
            postedMsgs.appendChild(inboxMsg);
        } else {
           if (!errorSent) {
            const errorMsg = document.createElement('p');
            errorMsg.textContent = 'You can no longer send messages, wait 1 hour.';
            errorMsg.style.color = 'darkred'
            postedMsgs.appendChild(errorMsg);

            submitBtn.disabled = true;
            errorSent = true; 

            setTimeout(
                () => {
                    msgSent = 0;
                    errorSent = false;
                    submitBtn.disabled = false;
                    inputField.value = ''; 
                    postedMsgs.removeChild(errorMsg)
                    alert("You can now send messages again")
                }, 3600000)
        }
    }
    })
}

createField()




