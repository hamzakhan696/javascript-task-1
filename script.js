function showNode()
{
   let text =  document.getElementById('myText').value,
       listNode = document.getElementById('itemlist') ,
       liNode = document.createElement("li"),
       spantag = document.createElement("span")
       removebtn = document.createElement("button");
       removebtn.textContent = "X";


       textNode = document.createTextNode(text)

        liNode.appendChild(textNode);
        liNode.appendChild(spantag);
        liNode.style.marginTop = "5px";
  
        // console.log(spantag)
        listNode.appendChild(liNode);
        listNode.appendChild(removebtn);

        spantag.appendChild(removebtn);
        spantag.style.marginLeft = "15px";

        //    remove text from input 
        document.getElementById('myText').value = ""

        // remove li from list

        removebtn.addEventListener('click',function()
        {
            listNode.removeChild(liNode)
            listNode.removeChild(removebtn)
        })
         
}




