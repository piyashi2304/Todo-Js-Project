var cardcontainer = document.getElementById("cardcontainer")
var cardname = document.getElementById("cardname")
var addtaskpopup = document.getElementById("addtaskpopup")
var parent = document.getElementById("Parent")
var Additempoppup = document.getElementById("Additempoppup")
var notask = document.getElementById("notask")
var singlecard = document.getElementById("singlecard")
var cardNameHead  = document.getElementById("task")
var tophead = document.getElementById("tophead")
var topheadclone = document.getElementById("topheadclone")

let isSinglecard =false
// let currentsingelcard = null
//Add task Button

function showAddTask(){
    addtaskpopup.classList.remove('hide')
    parent.classList.add('blur')

}

//hide task buttob
function hideAddTask(){
    addtaskpopup.classList.add('hide')
    parent.classList.remove('blur')
}

function addcard(){
   notask.classList.add('hide')
   
    hideAddTask()
    let card = document.createElement('div')
    let cardHeading = document.createElement('h3')
    let line = document.createElement('hr')
    let itemList = document.createElement('div')
    
    let addItems = document.createElement('button')
    let deletebutton = document.createElement('button')

    //Append Elements 

    cardcontainer.appendChild(card)
    card.appendChild(cardHeading)
    card.appendChild(line)
    card.appendChild(itemList)
    card.appendChild(addItems)
    card.appendChild(deletebutton)
    card.classList.add('cardtext')

    //Give Values to Elements

    cardHeading.innerText = cardname.value
    cardname.value=""  //clear the popup 
    card.classList.add('card')
    addItems.innerText = ""
    addItems.setAttribute('class','fa-solid fa-circle-plus')
    deletebutton.innerText = ""
    deletebutton.setAttribute('class','fa-solid fa-trash')
    
    //delete button logic
    deletebutton.addEventListener('click' , function(){
        card.remove()
        if(cardcontainer.innerText==='')
       notask.classList.remove('hide')
    })


   

    //add item

    addItems.addEventListener('click' , function(){ 
        Additempoppup.classList.remove('hide')
        parent.classList.add('blur')
        

        //create Item
        // let itemPopup = document.createElement('div')
        let itemPopupHeading = document.createElement('h3')
        let itemname = document.createElement('input')
        itemname.placeholder = 'Item Name';
        let addbutton = document.createElement('button')
        let closebutton = document.createElement('button')

        //append Elements

        Additempoppup.appendChild(itemPopupHeading)
        Additempoppup.appendChild(itemname)
        Additempoppup.appendChild(addbutton)
        Additempoppup.appendChild(closebutton)

        //give values to Element

        itemPopupHeading.innerText="Add New Item"
        addbutton.innerText="Add" 
        closebutton.innerText="Close"
        addbutton.classList.add('addclose')
        closebutton.classList.add('addclose')

        closebutton.addEventListener('click' ,function(){
            Additempoppup.classList.add('hide')
            parent.classList.remove('blur')
        })

        addbutton.addEventListener('click' ,function(){
            Additempoppup.classList.add('hide')
            parent.classList.remove('blur')
            //create item elements
            let item=document.createElement('div')
            item.classList.add('additemms')
            let itemtext = document.createElement('span')
            itemtext.classList.add('span1')
            let markdone = document.createElement('button')
            markdone.classList.add('markdone')

            //append

            item.appendChild(itemtext)
            item.appendChild(markdone)


            markdone.addEventListener('click',function(){
                itemtext.style.textDecoration="line-through";
                markdone.classList.add('hide')
            })

            //values

            itemtext.innerText=itemname.value
            markdone.innerText="Mark done"

            //appendig the item to item list
            itemList.appendChild(item)
           

            Additempoppup.innerText = ""
        })
    })


    //hadle cardheading click
    cardHeading.addEventListener('click', function () {
        cardHeading.style.cursor = "pointer";
        singlecard.classList.remove('hide');
        //cardNameHead.innerText = cardHeading.innerText
        cardNameHead.classList.add("hide")
        singlecard.classList.add('allign');
        cardcontainer.classList.add('hide');
        tophead.classList.remove('hide')
        topheadclone.classList.remove('hide')
        tophead.innerText = cardHeading.innerText
        

        //create a copy of the card
        let copycard = card.cloneNode(true);
        singlecard.appendChild(copycard);

        copycard.lastElementChild.addEventListener('click', function () {
            card.remove();
            copycard.remove();
            if (cardcontainer.innerText === '')
                notask.classList.remove('hide');
        });
    

        //handle item add for the copied card
        copycard.lastElementChild.previousElementSibling.addEventListener('click' , function(){
            
            

            Additempoppup.classList.remove('hide')
            parent.classList.add('blur')
            
    
            //create Item
            
            let itemPopupHeading = document.createElement('h3')
            let itemname = document.createElement('input')
            itemname.placeholder = 'Item Name';
            let addbutton = document.createElement('button')
            let closebutton = document.createElement('button')
    
            //append Elements
    
            Additempoppup.appendChild(itemPopupHeading)
            Additempoppup.appendChild(itemname)
            Additempoppup.appendChild(addbutton)
            Additempoppup.appendChild(closebutton)
    
            //give values to Element
    
            itemPopupHeading.innerText="Add New Item"
            addbutton.innerText="add" 
            closebutton.innerText="close"
            addbutton.classList.add('addclose')
            closebutton.classList.add('addclose')
    
            closebutton.addEventListener('click' ,function(){
                Additempoppup.classList.add('hide')
                parent.classList.remove('blur')
               
            })
    
            addbutton.addEventListener('click' ,function(){
                Additempoppup.classList.add('hide')
                parent.classList.remove('blur')


                //create item elements
                let item=document.createElement('div')
                item.classList.add('additemms')
                let itemtext = document.createElement('span')
                itemtext.classList.add('span1')
                let markdone = document.createElement('button')
                markdone.classList.add('markdone')
    
                //append
    
                item.appendChild(itemtext)
                item.appendChild(markdone)
    
                markdone.addEventListener('click', function () {
                    itemtext.style.textDecoration = "line-through";
                    markdone.classList.add('hide');
                });
                

               
   
                //values
                
                itemtext.innerText=itemname.value
                markdone.innerText="Mark done"
                
                // Append the item to item list of the cloned cardsss
           

                
               
    
                Additempoppup.innerText = ""    
                itemList.appendChild(item)
                
                if (singlecard) {
                    let itemclone = item.cloneNode(true);
                    let copylist=copycard.querySelector('div')
                    copylist.appendChild(itemclone);
                
                let markdoneClone=itemclone.querySelector('button')
                  
                 
                    
                   
                    // itemclone.appendChild(itemtexts)
                    // itemclone.appendChild(markdoneClone);
                  
                    
                
                    
                    markdoneClone.addEventListener('click', function () {
                       
                        itemclone.firstElementChild.style.textDecoration = "line-through";
                        markdoneClone.classList.add('hide');
                        itemtext.style.textDecoration = "line-through";
                        markdone.classList.add('hide');
                    });
                }
            })
            
        
                
            })
        parent.firstElementChild.classList.remove('hide')
       
    })

}
function back(){
    parent.firstElementChild.classList.add('hide')
    topheadclone.classList.add('hide')
    tophead.classList.add("hide")
    // cardNameHead.classList.add("hide")
    cardNameHead.classList.remove("hide")
    singlecard.classList.add('hide')
    cardcontainer.classList.remove('hide')
    // cardcontainer.appendChild(singlecard.firstElementChild)
    singlecard.innerText=""
    
}