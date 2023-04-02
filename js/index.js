


   
   
 
   



  document.getElementById('button').addEventListener('click',addList)



   function addList(){
    event.preventDefault();
    let txtVal = document.getElementById('txtVal').value, 
      listNode = document.getElementById('list'), 
      liNode = document.createElement('LI'), 
      txtNode = document.createTextNode(txtVal);

          liNode.appendChild(txtNode);
    
          listNode.appendChild(liNode);
          document.getElementById('txtVal').value = '';

  };


 



 

 
  
