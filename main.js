

const form=document.querySelector('.form-child')


form.addEventListener('submit', addToDom)

function addToDom(event) {
  event.preventDefault()
  //collecting data
  var name=document.querySelector('input[name=name]').value;
  const price=document.querySelector('input[name=price]').value
 ///add to dom
  itemList=[];
  //data
  const data={
    "name":name,
    "price":price
  }
  //
  //localStorage
  itemList.push(data)
localStorage.setItem('data',itemList)
//grapping the parent dev
 
  const parentItems=document.querySelector('#items-parent');
 
  //validation
  const errors=[]
  if(!name||!price){
    
    error={
      "ms":"fill in all fields"
    }
    errors.push(error)
    //console.log(error)
    //Display the error througth the errors
    for(let i=0; i<errors.length; i++){
    document.querySelector('#form').innerHTML=`<h6 class="error">${errors[i].ms}</h6>`
    }
  }

else if (name.length<5||name.length>10){
  error={
    "ms":"Enter a valid item"
  }
  errors.push(error)
  //displaying error ms
  for(let i=0; i<errors.length; i++){
    document.querySelector('#form').innerHTML=`<h6 class='error'>${errors[i].ms}</h6>`
    }

}
  else{
for(let i=0; i<itemList.length; i++){
   
 
  var  Ul=document.createElement('ul')
  Ul.className="items";
  ///using var instead of const in order to access the variable outside the loop block
  var ElementUl=`
    <li>${localStorage.getItem('data[i].name')})</li>
     <li>${localStorage.getItem('data[i].price')}</li>
      <button onclick="deletItem()" class="delete"></button>`
}
      Ul.innerHTML=ElementUl;
  parentItems.apendChild(Ul);
  //succes ms
  
document.querySelector('#form').innerHTML=`<h6 class="success">Item added successfully</h6>`
  }
 //clear form data
 /*
 document.querySelector('input[name=name]').value=''
 document.querySelector('input[name=price]').value='';
 */
}
 
///delete function

function deletItem(){
  const item=document.querySelector('.items')
  item.remove()
  //delete message
  document.querySelector('#form').innerHTML=`<h6 class="success">Item deleted successfully</h6>`
  
}


//const k=document.querySelector('.form-child');

//k.addEventListener('submit',checkingList)
  
  /*
function checkingList(){
  
   ////gapping the data from dom
   //form btn
   
var Name=document.querySelector('input[name=name]').value;
  const Price=document.querySelector('input[name=price]').value;
  //schema for the form data
  const FormData={
    "name":Name,
    "price":Price
  }
  //data base
  var itemList_save=[];
  
 itemList_save.push(FormData)
  
 // console.log(itemList_save[0])
 

 // const AvailableItems_save=itemList_save;
  
  for(let i=0; i<itemList_save.length; i++){
    const name=itemList_save[i].name.length;
    
   if(name!=0){
      console.log("items exist")
    }
    else if(name===0){
      console.log("nothing")
    }
    console.log(name)
  }
  
//console.log(itemList_save[1].name)
 
  // AvailableItems.length=0;
}
*/
