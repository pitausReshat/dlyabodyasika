


   
   
 
   



  document.getElementById('button').addEventListener('click',addList)






  function addList(){
    event.preventDefault();
    let txtVal = document.getElementById('txtVal').value.trim(); 
    if (txtVal === '') {
      alert('Please enter something in the input field.');
      return;
    }
  
    let listNode = document.getElementById('list'), 
      liNode = document.createElement('LI'), 
      txtNode = document.createTextNode(txtVal);
  
    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
    document.getElementById('txtVal').value = '';
  };
  


 



 

 
  
