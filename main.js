///even for the form
const formData = document.querySelector('.form-child')


const form=document.getElementById('kual')



//console.log(formData)

form.addEventListener('click', addToDom)

function addToDom() {
  //collecting data
  const name=document.querySelector('input[name=name]').value;
  const price=document.querySelector('input[name=price]').value
 ///add to dom
  const parentItems=document.querySelector('#items-parent');
  //const items=[]l 
  
  const Ul=document.createElement('ul')
  Ul.className="items";
  const ElementUl=`
    <li>${name}</li>
     <li>${price}</li>
      <button class="delete"></button>`
      Ul.innerHTML=ElementUl;
 // ElementUl.className="items"
  parentItems.appendChild(Ul)
  //console.log(parentItems)
  
}
//deleteButton
const deleteBtn=document.getElementsByClassName('delete')
//console.log(deleteBtn)
for(let i=0; i<deleteBtn.length; i++){

deleteBtn[i].addEventListener('click',deletItem)
}
 function deletItem(e){
  const item= document.querySelectorAll('.items')
  
   for(let i=0; i<item.length;i++){
  //const target=e.target.ul
   item[i].removeChild('ul')
  

 }
}
