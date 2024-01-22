
let inputBox= document.getElementById('input');

let buttons= document.querySelectorAll('button');
let string= '';


buttons.forEach(element => {
    element.addEventListener('click' ,function (b){
        if (b.target.innerText == '=') {
        
            string = String(eval(string));
            inputBox.value=string;

            // console.log(string);
            
        }
        else if(b.target.innerText == 'c'){
            string = '';
            inputBox.value=string;

        }
        // else if(b.target.id == 'pluse'){
        //     string = 
        //     inputBox.value=string;

        // }
       
        else{
            string += b.target.innerText;
            inputBox.value=string;
        }


    })
})