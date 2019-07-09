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

    this.amount += amount
    document.getElementById("amount").innerHTML = amount

  }

  Bill_Splitter.prototype.reset = function() {

    this.amount = 0

  }
