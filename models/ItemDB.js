var Item = require('../models/Item.js');
const categoryList={"CompGad":"Computer","TravelGad": "Travel"}
Object.freeze(categoryList);
const items=[
  {
    itemCode:"CG1",
    itemName:'Portable Mini Vacuum Cleaner for Keyboard',
    catlogCategory:categoryList.CompGad,
    itemDescription:"This mini vacuum USB cleaner is widely used for cleaning hidden dirty of laptop, printer, camera equipment, audio-visual equipment, office & kitchen table, cabinet, car, dashboard etc"+
    "It is very lightweight, portable, easy to use and requires less maintenance.",
    rating:4,
    imageUrl:"/resources/img/cleaner.png"
  },
  {
    itemCode:"CG2",
    itemName:'Bluetooth Mouse',
    catlogCategory:categoryList.CompGad,
    itemDescription:"Compact wireless mouse with adjustable DPI for preferred sensitivity with Advanced laser sensor which works on most surfaces, including glass; clickable metallic scroll wheel.",
    rating:3,
    imageUrl:"/resources/img/BluetoothMouse.jpg"
  },
  {
    itemCode:"CG3",
    itemName:'Fingerprint Reader',
    catlogCategory:categoryList.CompGad,
    itemDescription:"This product utilizes the unique nature of your fingerprint patterns to limit unwanted access to your pc and enhances file security, with its advanced file protection features.This is a simple, safe way to encrypt your personal files",
    rating:4,
    imageUrl:"/resources/img/fingerPrintReader.jpg"
  },
  {
    itemCode:"TG1",
    itemName:'Canon\'s Powershot G9 X Mark II',
    catlogCategory:categoryList.TravelGad,
    itemDescription:"1.0-Inch, 20.1 Megapixel* High-sensitivity CMOS sensor. Digic 7 image processor. Compatible with iOS versions 8.4,9.3 and 10.2 and various other versions of Android smartphone and tablet.",
    rating:3,
    imageUrl:"/resources/img/canon.jpg"
  },
  {
    itemCode:"TG2",
    itemName:'Travel Bagpack',
    catlogCategory:categoryList.TravelGad,
    itemDescription:"Multipurpose 50L Hiking Backpack - Spacious backpack packed with many pockets & features. Great for hiking, travel, camping & as carry on luggage, for both men & women.",
    rating:4,
    imageUrl:"/resources/img/bagpack.jpg"
  },
  {
    itemCode:"TG3",
    itemName:'Sandless Beach Mat',
    catlogCategory:categoryList.TravelGad,
    itemDescription:"QUICK DRY NYLON FABRIC – Made from strong, durable and breathable 100% Parachute nylon, the WellaX blanket will last for years of use. Water repellent, anti-heat material makes it perfect for any occasion whether it is camping, hiking, a picnic day, a music festival experience or simply travelling.",
    rating:4,
    imageUrl:"/resources/img/mat.jpg"
  }

]

function getItems(){
  return items;
}

function getItem(itemId){
  var chosenItem;
  getItems().forEach(function(item){
    if(item.itemCode === itemId){
      chosenItem = item;
    }
  });
  return chosenItem;

}

function getCategoryList(){
  var catList=[];
  for(var key in categoryList){
    catList.push(categoryList[key]);
  }
  //categoryList.all = all;
  console.log("catList::" + catList);
  return catList;
}

module.exports = {
  getItem:getItem,
  getItems:getItems,
  getCategoryList:getCategoryList

}
