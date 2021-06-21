fetch("https://picsum.photos/v2/list")
.then((response)=>{
    return response.json();
})
.then((result)=>{
    display(result);
})
.catch((err)=>{
    console.log(err);
});
function display(data){
    let row = document.getElementById("row");
    data.forEach((element)=>{
        let col = createMyElement("div", "col-sm-6 col-md-4 col-md-4");
        let card = createMyElement("div","card");
        let cardImg = createMyElement("img","card-img-top");
        cardImg.src = element.download_url;
        let cardbody = createMyElement("div","card-body");
        let h2 = createMyElement("h2");
        h2.innerHTML = element.author;
        let pTag = createMyElement("p","card-text");
        pTag.innerHTML = element.id;
        cardbody.append(h2,pTag);
        card.append(cardImg,cardbody);
        col.append(card);
        row.append(col);
    })
}
function createMyElement(elemName,elemclass = "", elemId = ""){
    let elem = document.createElement(elemName);
    elem.setAttribute("class",elemclass);
    elem.setAttribute("id",elemId);
    return elem;
}