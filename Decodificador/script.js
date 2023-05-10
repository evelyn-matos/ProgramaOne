//Função Para Criptografar mensagem

function handleCriptografar(){

    let msgInput = document.getElementById("msgdeInput").value;
    let nenhumaMsgEncontrada = document.querySelector('.nenhumaMsgEncontrada');
    let msgOutput = document.querySelector('#msgOutput');
    let buttonCopy = document.querySelector('.copiar');
    let msgCopiada = document.querySelector('.msgCopiada')

    msgCopiada.style.display = 'none';

    if (msgOutput.value !== ''){
        var textarea = document.querySelector('#msgOutput');
        textarea.removeChild(textarea.firstChild)

       
    }
    
    if (msgInput == '' && msgOutput.value == ''){

        
        nenhumaMsgEncontrada.style.display = 'flex';
        msgOutput.style.display = 'none';
        buttonCopy.style.display = 'none';
        
        nenhumaMsgEncontrada.animate([
            {opacity: '0'},
            {opacity: '10'},
            
        ],{
            duration: 1000,
            interations: 1
        })

    }else{

    
        nenhumaMsgEncontrada.style.display = 'none';
        msgOutput.style.display = 'block';
        buttonCopy.style.display = 'block';


        let msgCriptografada = '';
        let i = 0;

        while (i < msgInput.length){

                let letraCriptografada = ''

                switch (msgInput[i]) {
                    case 'a':
                        letraCriptografada = 'ai';
                        break;
                        
                    case 'e':
                        letraCriptografada = 'enter';
                        break
                        
                    case 'i': 
                        letraCriptografada = 'imes';
                        break;
                    case 'o':
                        letraCriptografada = 'ober';
                        break;

                    case 'u': 
                        letraCriptografada = 'ufat';
                        break;

                    default:
                        letraCriptografada = msgInput[i]
                        break;

                }

            
            msgCriptografada = msgCriptografada + letraCriptografada

            i++
        }

        var InserirMsg = document.createTextNode(msgCriptografada)
            msgOutput.appendChild(InserirMsg)

        
    }

    
}

//Função para Descriptografar mensagem

function handleDescriptografar() {

    let msgInput = document.getElementById("msgdeInput").value;
    let nenhumaMsgEncontrada = document.querySelector('.nenhumaMsgEncontrada');
    let msgOutput = document.querySelector('#msgOutput');
    let buttonCopy = document.querySelector('.copiar');
    let msgCopiada = document.querySelector('.msgCopiada')

    msgCopiada.style.display = 'none';

    if (msgOutput.value !== ''){
        var textarea = document.querySelector('#msgOutput');
        textarea.removeChild(textarea.firstChild)
    }

    if (msgInput == '' && msgOutput.value == ''){
   
        nenhumaMsgEncontrada.style.display = 'flex';
        msgOutput.style.display = 'none';
        buttonCopy.style.display = 'none';

        nenhumaMsgEncontrada.animate([
            {opacity: '0'},
            {opacity: '10'},
            
        ],{
            duration: 1000,
            interations: 1
        })

    }else{

        nenhumaMsgEncontrada.style.display = 'none'
        msgOutput.style.display = 'block'
        buttonCopy.style.display = 'block'
        
        let msgDescriptografada = msgInput.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u')
         
        
        var InserirMsg = document.createTextNode(msgDescriptografada)
            msgOutput.appendChild(InserirMsg)   
            
        }    

}

//Função para copiar a mensagem 

function handleCopyMsg(){


    let msgCopiada = document.querySelector('.msgCopiada')

    let msgOutput = document.querySelector('#msgOutput').value
    navigator.clipboard.writeText(msgOutput)

   
    msgCopiada.style.display = 'flex';
    msgCopiada.animate([
        {opacity: '0'},
        {opacity: '10'},
        
    ],{
        duration: 1000,
        interations: 1
    })
      
    
}


