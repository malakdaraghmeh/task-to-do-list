let formData = document.querySelector(".formList");
formData.onsubmit = function(e){
    e.preventDefault();
    const elements =e.target.elements;
    let data={
      list:  elements['input_add'].value,
    }
    let listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox"> ${data.list} `;
    listItem.classList.add("chek");
    document.querySelector("ul").appendChild(listItem);
    console.log(listItem)
    let item =listItem.querySelector('input[type="checkbox"]');
    item.onclick = function() {
        if (item.checked) {
            listItem.classList.add("checkd");
            listItem.classList.remove("chek");
        } else {
            listItem.classList.remove("checkd");
            listItem.classList.add("chek");
        }
    };
}