
function Item(obj) {
  this.itemCode = obj.itemCode;
  this.itemName = obj.itemName;
  this.catlogCategory = obj.catlogCategory;
  this.itemDescription = obj.itemDescription;
  this.rating = obj.rating;
  this.imageUrl = obj.imageUrl;
  return this;
}
module.exports = Item;
