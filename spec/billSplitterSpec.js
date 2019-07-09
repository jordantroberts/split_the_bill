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
});
