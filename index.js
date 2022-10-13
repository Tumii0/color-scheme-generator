
let schemeMode = ''
let seedColor = ""
let colors = ''
let hexCodes = ''
const count = 5
let hexCodeArr = []
const colorChoice = document.getElementsByClassName('color-choice')
const hexCodesContainer = document.querySelectorAll('.hex-codes')

    const container = document.getElementById('color-list')
    const colorChoiceHtml = new Array(count).fill(`<div class="color-choice"></div>`).join('')
  container.innerHTML +=  colorChoiceHtml



let copy = document.addEventListener('click', function(){
    copy.select();
    copy.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copy .value);
})




document.getElementById('seed-color').addEventListener('change', function(){
    seedColor = this.value.replace('#',"")
                 })
document.getElementById('scheme-mode').addEventListener('change', function(){
                  schemeMode = this.value})
const getColorsBtn = document.getElementById('get-colors').addEventListener('click',function(){
  
  

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${schemeMode}&count=${count}` )
    .then(res => res.json())
    .then(data => {
        
        colors = data.colors
        hexCodeArr = colors.map(color =>{
            return color.hex.value
          
        })
        hexCodesContainer[0].textContent = hexCodeArr[0]
        hexCodesContainer[1].textContent = hexCodeArr[1]
        hexCodesContainer[2].textContent = hexCodeArr[2]
        hexCodesContainer[3].textContent = hexCodeArr[3]
        hexCodesContainer[4].textContent = hexCodeArr[4]
        
        for (let i = 0; i< hexCodeArr.length; i++){
           
            for (let i =0; i<colorChoice.length; i++){
                colorChoice[i].style.backgroundColor =  hexCodeArr[i]
               
               }
        }
       
       

    })
    
        })

  
  
      

        