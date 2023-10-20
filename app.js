var datainput =  document.getElementById("data");
 
function add (){

    var li = document.createElement("li");
   
    var litext = document.createTextNode(datainput.value);
    li.appendChild(litext);
    // console.log(li)
     
    var ul = document.createElement("ul");
    ul.appendChild(li);
    
    
    var datainsert = document.getElementById("datainsert")
    
    datainsert.appendChild(ul)
    
    datainput.value = ""
    
     
    // ............. delet button.......

    var delbtn = document.createElement("button")
    
    var delbtntex = document.createTextNode("delet ");
     delbtn.setAttribute("onclick", "delpar(this)")
     
     delbtn.appendChild(delbtntex)

     li.appendChild(delbtn)

    //  ***********edit button *************

    var editbtn = document.createElement("button");
    var edittex = document.createTextNode("edit");
    editbtn.setAttribute("onclick","edit(this)");
    editbtn.appendChild(edittex);
    li.appendChild(editbtn);

     console.log(li)

     
        // console.log(li)
     
     
     // console.log(delbtntex)
     //    delbtn.appendChild(delbtntex)
     
     
     
     
     
    }
    
    
    function delet(){
        datainsert.innerHTML = ""

    
    }

    
    
    
    
    // ********** particular li dlet button function **************
    
    function delpar(e){
       e.parentNode.remove()

  


    }

    // **************** edit function***************

 function edit(x){
 

   var update =  prompt("enter your tex")
  x.parentNode.firstChild.nodeValue = update
   
  
   

 }
    
   




    
    






    //  console.log(head)
    // console.log(headingtext )





