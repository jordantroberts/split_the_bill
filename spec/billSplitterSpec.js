describe('Bill_Splitter', function() {
  var splitter;

  beforeEach(function() {
    splitter = new Bill_Splitter();
  });

  describe('splitter', function() {
    it('has a default amount of 0', function(){
      expect(splitter.amount).toEqual(0);
    });
  });

  describe('calculate', function() {
    it('calculates the amount due', function(){
      const form = document.createElement('form');
        form.innerHTML= `<input type="text" id="cost" value=49.2/>
                         <input type="text" id="tip" value=10/>
                         <input type="text" id="diners" value =2/>
                          <span id="amount"></span>
                        `;
        document.body.appendChild(form)
      splitter.calculate()
      expect(splitter.amount).toEqual(29.6)
    });

    it('displays error message if cost field empty', function(){
      splitter.reset()
      spyOn(window, 'alert')
      let form2 = document.createElement('form2');
      form2.innerHTML= `<input type="text" id="cost" value=0/>
                       <input type="text" id="tip" value=5/>
                       <input type="text" id="diners" value =2/>
                        <span id="amount"></span>
                      `;
      document.body.appendChild(form2)
      splitter.calculate()
      expect(window.alert).toHaveBeenCalledWith('Please enter the cost of your meal');
    });


  });

  describe('reset', function() {
    it('resets amount to 0', function(){
      const form = document.createElement('form');
        form.innerHTML= `<input type="text" id="cost" value=49.2/>
                         <input type="text" id="tip" value=10/>
                         <input type="text" id="diners" value =2/>
                          <span id="amount"></span>
                        `;
        document.body.appendChild(form)
      splitter.calculate()
      splitter.reset()
      expect(splitter.amount).toEqual(0);
    });
  });
});
