function Bill_Splitter(){
  this.amount = 0;
  this.diners = 0;
  this.tip = 0;
  this.cost = 0;
};

  Bill_Splitter.prototype.calculate = function(){

    this.cost = parseInt(document.getElementById("cost").value);
    this.tip = parseInt(document.getElementById("tip").value);
    this.diners = parseInt(document.getElementById("diners").value);

    var amount = (this.cost + this.tip) / this.diners

    this.amount += amount
    document.getElementById("amount").innerHTML = amount

  }

  Bill_Splitter.prototype.reset = function() {

    this.amount = 0

  }
