describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 10;
      tipAmtInput.value = 1;
    });
  
    it('allPayments should not be empty', function () {
        sumPaymentTotal();
        submitPaymentInfo();
        expect(Object.entries(allPayments).length).toEqual(1);
    });
  
  it('should calculateTipPercent correctly', function () {
    expect(calculateTipPercent(0,0)).toEqual(NaN);  
    expect(calculateTipPercent(100,0)).toEqual(0);
    expect(calculateTipPercent(0,100)).toEqual(Infinity);
    });

  it('appendTd should add td to paymentTbody', function() {
    submitPaymentInfo()
    expect(paymentTbody.innerHTML).toContain('td');
  });

  it('should create delete button', function() {
    submitPaymentInfo();
    expect(paymentTbody.innerHTML).toContain('X');
  });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      document.querySelector("#summaryTable tbody tr td").innerText = '';
      document.querySelector("#summaryTable tbody tr td").nextElementSibling.innerText = '';
      document.querySelector("#summaryTable tbody tr").lastElementChild.innerText = '';
    });
  });