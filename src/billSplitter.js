function Bill_Splitter(){
  this.amount = 0.00;
  this.diners = 0.00;
  this.tip = 0.00;
  this.cost = 0.00;
};

Bill_Splitter.prototype.calculate = function(){

  this.cost = parseFloat(document.getElementById("cost").value);
  this.tip = parseFloat(document.getElementById("tip").value);
  this.diners = parseFloat(document.getElementById("diners").value);

  var amount = (this.cost + this.tip) / this.diners

    if(document.getElementById("cost").value.length == 0) {
      alert("Please enter the cost of your meal")
      return false;
  } else if(document.getElementById("tip").value.length == 0) {
      alert("Please enter a tip amount. If you don't want to tip, please type '0'")
      return false;
  } else if(document.getElementById("diners").value.length == 0) {
      alert("Please enter the amount of diners")
      return false;
  } else {
      this.amount = amount
  }
}
