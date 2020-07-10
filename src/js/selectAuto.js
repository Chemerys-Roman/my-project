$(document).ready(function() {
    const bodyTypes = ["Suv", "Truck", "Sedan", "Van", "Coupe", "Wagon", "Die"];
    bodyTypes.forEach((item) => {
        console.log(item);
        createElement(
            item,
            document.getElementsByClassName(".option-searching__item_container")
        );
    });
});

function createElement(item, parent) {
    console.log(parent);
    const addElement = (document.createElement("div").innerHTML = item);
    $(addElement).addClass("option-searching__item_option");
    document.parent.appendChild(addElement);
}

// const producer = [{
//     value: "Smile R",
//     types: []

// }]