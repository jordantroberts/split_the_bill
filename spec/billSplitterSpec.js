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
        form.innerHTML= `<input type="text" id="cost" value=50 />
                         <input type="text" id="tip" value=10 />
                         <input type="text" id="diners" value =2 />
                          <span id="amount"></span>
                        `;
        document.body.appendChild(form)
      splitter.calculate()
      expect(splitter.amount).toEqual(30)
    });
  });
});
