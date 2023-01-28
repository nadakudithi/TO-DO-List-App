const form = document.querySelector("#addForm");
const listitem = document.querySelector("#items");
const filter = document.querySelector("#filter");

form.addEventListener('submit',additem);
listitem.addEventListener('click',deleteitem);
filter.addEventListener('keyup',filterelement);

function additem(e){
    e.preventDefault();
    
    const item = document.getElementById("item").value;

    const li = document.createElement("li");

    li.className = "list-group-item";

    li.appendChild(document.createTextNode(item));

    var button = document.createElement("button");

    button.className="btn btn-danger btn-sm float-right delete";

    button.appendChild(document.createTextNode("x"));

    li.appendChild(button);

    listitem.appendChild(li);

};

function deleteitem(e){

    if(e.target.classList.contains("delete")){

        if (confirm("are you sure you want to delete?")){

            var li = e.target.parentNode;
            
            listitem.removeChild(li);
        }
    }
};

function filterelement(e){
    
    var text = e.target.value.toLowerCase();
    
    var items = listitem.getElementsByTagName('li');

    Array.from(items).forEach(function(item){

      var itemName = item.firstChild.textContent;

      if(itemName.toLowerCase().indexOf(text) != -1){

        item.style.display = 'block';

      } else {

        item.style.display = 'none';
      }
    });
  }


