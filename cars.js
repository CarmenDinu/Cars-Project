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
      dacia:
        "https://pbs.twimg.com/media/A8FW1-lCUAEeoSh?format=jpg&name=small",
      mercedes: "https://car-from-uk.com/ebay/carphotos/big/ebay449831.jpg",
      bmw:
        "https://i.pinimg.com/564x/6b/0b/eb/6b0beb314f071994a4023400504b2a99.jpg",
      mustang:
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/vintage-mustang-kirk-sewell.jpg",
      default:
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

let CarDacia = new Car("dacia", 1988);

// console.log(cars);
function getPictureUrl() {
  // Creare variabiale pentru a capta valoarea introdusa de user in cele 2 inputuri.
  let carModel = document.getElementById("cars").value;
  let carYear = document.getElementById("years").value;

  console.log(carModel);
  console.log(carYear);

  let carChoosed = document.getElementById("whereToadd");

  //To Do
  //trebuie sa cream un un obiect de tipul car care are ca si valori car model si car year

  //JS creaza un div dar nu este introdus inca in HTML
  let element = document.createElement("div");

  //To Do
  //In loc de car model trebuie sa punem un Bootstrap Card care are ca si poza - Url-ul din obiectul car, proprietatea pictureUrl

  // Continutul div-ului este populat cu o valore ( ce a introduc userul in inp)
  element.innerHTML = carModel;

  // JS introduce elementul  creat in HTML
  carChoosed.appendChild(element);
}
