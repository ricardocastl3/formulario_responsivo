//Alert
var alertContainer = document.querySelector(".alert").style= "display: none";
var messageError = document.querySelector("#message-error").style= "display: none";
var messageSuccess = document.querySelector("#message-success").style= "display: none";

// Form
var inputs = document.querySelectorAll('input');
var btnRegs = document.querySelector("#btn-register");

// Validation
var termCheck = document.querySelector("#termCheck");
var canRegister = false;
var pass1 = document.querySelector("#pass1");
var pass2 = document.querySelector("#pass2");

btnRegs.addEventListener('click', validateInputs);


// Display alert
function displayAlert(type, message)
{
    alertContainer.style= "display: block";
    if(type == "error")
    {
        messageError.style= "display: block";
        messageError.innerText = message;
    }else{
        messageSuccess.style= "display: block";
        messageSuccess.innerText = message;
    }
    alert(message);
}
//Validate fields
function validateInputs()
{
    inputs.forEach(element => {
        if(element.type == "text" || element.type == "password")
        {
            
            if(element.value == "")
            {
                element.style.border = "1px solid red";
                element.style.backgroundColor = "rgb(251, 236, 236)";
                canRegister = false;
           
            }else{
                canRegister = true;
            }
        }
    });
    verifyPassword();
}

// Verify password if are equal
function verifyPassword()
{
    if(canRegister){
        if(termCheck.checked){
            if(pass1.value != pass2.value)
            {
                displayAlert("error", "As palavras passes não são iguais...");
                pass1.setAttribute('focus');
            }else{
                displayAlert("success", "Cadastro realizado com sucesso!");
            }
        }else{
            displayAlert("error", "Para prosseguir você precisa aceitar os nossos termos...");
        }
    }
}