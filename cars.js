// Create a pictures class with a property named urls which is a an object that has as properties different car models
//  and as values an url (local or internet) of that car model.
// - Create a car class which has the properties: model, fabrication year and prictureUrl. Based on the value of the model property,
//  the value of the pictureUrl is taken from the pictures class urls property. If that model is not found in the pictures property
//  then a standard default picture url is set.
// - add 2 input boxes  which take car model and year of fabrication
// Bellow the input boxes there is a button which when pressed creates a new car class with properties from the input box.
// After the car is created it is displayed in the dom with the picture, model and year in a bootrstrap card

class Pictures {
  constructor() {
    // Cand cream un obiect nou din clasa de Pictures prin new Pictures , acesta va avea o proprietate cu numele de urls pentr ca avem this.urls
    this.urls = {
      Dacia:
        "https://pbs.twimg.com/media/A8FW1-lCUAEeoSh?format=jpg&name=small",
      Mercedes: "https://car-from-uk.com/ebay/carphotos/big/ebay449831.jpg",
      Bmw:
        "https://i.pinimg.com/564x/6b/0b/eb/6b0beb314f071994a4023400504b2a99.jpg",
      Mustang:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/vintage-mustang-kirk-sewell.jpg",
      Default:
        "https://www.newvehiclevideos.com/photos/2020/BMW/7-series/Interior.jpg",
    };
  }
}
let pictures = new Pictures();

class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
    //Putem accesa proprietatea unui obiect si prin paranteze patrate. Atunci cand accesam prin paranteze patrate trebuie pus un string intre paranteze sau o variabila care are ca si continut un string.Pe obiectul car creat din clasa car , vrem sa aiba propritatea de pictureUrl cu valoarea de ce am accesat din obiectul de pictures prin paranteze patrate
    this.pictureUrl = pictures.urls[model];
  }
}

// console.log(cars);
function getPictureUrl() {
  // Creare variabiale pentru a capta valoarea introdusa de user in cele 2 inputuri.
  let carModel = document.getElementById("cars").value;
  let carYear = document.getElementById("years").value;
  let carObject = new Car(carModel, carYear);

  console.log(carModel);
  console.log(carYear);

  let carChoosed = document.getElementById("whereToadd");

  //JS creaza un div dar nu este introdus inca in HTML
  let element = document.createElement("div");

  // Continutul div-ului este populat cu HTML cu valori specifice

  element.innerHTML = `<div class="card bg-info ml-auto mr-auto mt-5" style="width:25rem">
  <img class="card-img-top" src="${carObject.pictureUrl}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title font-italic">${carObject.model}</h5>
    <p class="card-text">${carObject.year}</p>
    </div>
  </div>`;

  // JS introduce elementul  creat in HTML
  carChoosed.appendChild(element);
}
