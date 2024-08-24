//  taking buttons inputs and all neede elements to manupulate dom

let buttons = document.querySelectorAll('.form-input');
const CartButton = document.getElementById('Cart-Btn');
const Images = document.getElementsByClassName('left-div');
const PriceBoxs = document.getElementsByClassName('price');
const checkedImg = document.getElementsByClassName('checked-img');
const discount = document.querySelector('.discount');
const populer = document.querySelector('.populer');
const addedText = document.querySelectorAll('.added-text');
const pair1= document.getElementById('pair1');
const pair2= document.getElementById('pair2');
const pair3= document.getElementById('pair3');
const Item=document.querySelectorAll('.cart-items');
const Label=document.querySelectorAll('label');

// functions for taking values from radio buttons

function updateChartTotal() {
    let total = 0
    let quantityElement = document.getElementsByClassName('form-input')[0]
    let Price = document.getElementsByClassName('item-price')[0]
    let PriceEle = parseFloat(Price.innerText.replace('$', ''))
    let quantity = quantityElement.name
    total = total + (PriceEle * quantity)
   document.getElementById('cart-total').innerText = '$' + total + '.00' + 'USD';

}
function updateChartTotal1() {
    let total = 0
    let Price = document.getElementsByClassName('item-price')[1]
    let quantityElement = document.getElementsByClassName('form-input')[1]
    let PriceEle = parseFloat(Price.innerText.replace('$', ''))
    let quantity = quantityElement.name
    total = total + (PriceEle * quantity)
    document.getElementById('cart-total').innerText = '$' + total + '.00' + 'USD'
}
function updateChartTotal2() {
    let total = 0
    let Price = document.getElementsByClassName('item-price')[2]
    let quantityElement = document.getElementsByClassName('form-input')[2]
    let PriceEle = parseFloat(Price.innerText.replace('$', ''))
    let quantity = quantityElement.name
    total = total + (PriceEle * quantity)
    document.getElementById('cart-total').innerText = '$' + total + '.00' + 'USD'

}

// addEventListener  for radio button and submit buttons
 
let count = 0
buttons[0].addEventListener('change', () => {
    updateChartTotal()
    CartButton.addEventListener('click', () => {
        count += 1;
        CartButton.innerText = `${count} Items Added To Cart`;
        buttons.checked = false;
        count=0

    })

    Images[0].style.display = 'none';
    buttons[0].style.left = '30px';
    PriceBoxs[0].style.marginLeft = '15px';
    checkedImg[0].src = 'img2.png';
    checkedImg[0].style.display = 'block';
    addedText[0].style.display = 'block';
    Label[0].style.position="unset";
    pair1.style.visibility ='visible';
    Item[0].style.backgroundColor='#FFF9FA';
    Item[0].style.border='1px solid #FF6B82';

    pair3.style.visibility ='hidden';
    Label[2].style.position="absolute"
    Images[2].style.display = 'block';
     checkedImg[2].style.display = 'none';
    addedText[2].style.display = 'none';
    buttons[2].style.left = '90px';
    PriceBoxs[2].style.marginLeft = '5px';
    Item[2].style.backgroundColor='#FFFFFF';
    Item[2].style.border='none';
    discount.style.display='none';


    pair2.style.visibility ='hidden';
    Label[1].style.position="absolute"
    Images[1].style.display = 'block';
     checkedImg[1].style.display = 'none'
    addedText[1].style.display = 'none'
    buttons[1].style.left = '90px';
    PriceBoxs[1].style.marginLeft = '5px';
    Item[1].style.backgroundColor='#FFFFFF';
    Item[1].style.border='none';
})
   
   

buttons[1].addEventListener('click', () => {
    updateChartTotal1()


    Images[1].style.display = 'none';
    buttons[1].style.left = '30px';
    PriceBoxs[1].style.marginLeft = '30px';
    checkedImg[1].src = 'img2.png';
    checkedImg[1].style.display = 'block';
    populer.style.marginTop = '15px';
    addedText[1].style.display='block';
    Label[1].style.position="unset";
    pair2.style.visibility ='visible';
    Item[1].style.backgroundColor='#FFF9FA';
    Item[1].style.border='1px solid #FF6B82';
    
    // CartButton.addEventListener('click', () => {
    //     count += 1;
    //     CartButton.innerText = `${count} Items Added To Cart`;
    //     buttons.checked = false;
    //     count = 0

    // })



    pair1.style.visibility ='hidden';
    Label[0].style.position="absolute"
    Images[0].style.display = 'block';
     checkedImg[0].style.display = 'none'
    addedText[0].style.display = 'none'
    buttons[0].style.left = '90px';
    PriceBoxs[0].style.marginLeft = '5px';
    Item[0].style.backgroundColor='#FFFFFF';
    Item[0].style.border='none';

    pair3.style.visibility ='hidden';
    Label[2].style.position="absolute"
    Images[2].style.display = 'block';
     checkedImg[2].style.display = 'none'
    addedText[2].style.display = 'none'
    buttons[2].style.left = '90px';
    PriceBoxs[2].style.marginLeft = '5px';
    Item[2].style.backgroundColor='#FFFFFF';
    Item[2].style.border='none';
    discount.style.display='none';


 
});
   

buttons[2].addEventListener('click', () => {

    updateChartTotal2()
    // CartButton.addEventListener('click', () => {
    //     count += 1;
    //     CartButton.innerText = `${count} Items Added To Cart`;
    //     buttons.checked = false;
    //     count = 0

    // })


    Images[2].style.display = 'none';
    buttons[2].style.left = '30px';
    PriceBoxs[2].style.marginLeft = '30px';
    checkedImg[2].src = 'img2.png'
    checkedImg[2].style.display = 'block'
    discount.innerText="$ 10.00 USD"
    discount.style.display='block'
    discount.style.marginLeft='40px'
    addedText[2].style.display='block'
    Label[2].style.position="unset"
    pair3.style.visibility ='visible';
    Item[2].style.backgroundColor='#FFF9FA'
    Item[2].style.border='1px solid #FF6B82';
    


    pair2.style.visibility ='hidden';
    Label[1].style.position="absolute"
    Images[1].style.display = 'block';
     checkedImg[1].style.display = 'none'
    addedText[1].style.display = 'none'
    buttons[1].style.left = '90px';
    PriceBoxs[1].style.marginLeft = '5px';
    Item[1].style.backgroundColor='#FFFFFF';
    Item[1].style.border='none';

    pair1.style.visibility ='hidden';
    Label[0].style.position="absolute"
    Images[0].style.display = 'block';
     checkedImg[0].style.display = 'none'
    addedText[0].style.display = 'none'
    buttons[0].style.left = '90px';
    PriceBoxs[0].style.marginLeft = '5px';
    Item[0].style.backgroundColor='#FFFFFF';
    Item[0].style.border='none';

    


})

