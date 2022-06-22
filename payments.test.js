describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = 10;
      tipAmtInput.value = 1;
    });
  
    it('submitPaymentInfo should increase paymentId by 1', function () {
      submitPaymentInfo()
      expect(paymentId).toEqual(1)
    });
  
    it('createCurPayment should return something', function () {
      expect(createCurPayment()).toBeDefined();
    });
  
    it('appendPaymentTable should append to paymentTbody', function () {
      appendPaymentTable({billAmt: 10,tipAmt: 1,tipPercent: 10})
      expect(paymentTbody.innerHTML).toBeDefined();
    });
  
    it('updateSummary should add payment info to summary table', function () {
      updateSummary();
      expect(summaryTds[0].innerHTML).toContain('$')
    });

    afterEach(function() {
      billAmtInput.value = ''
      tipAmtInput.value = ''
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
      document.querySelector("#summaryTable tbody tr td").innerText = '';
      document.querySelector("#summaryTable tbody tr td").nextElementSibling.innerText = '';
      document.querySelector("#summaryTable tbody tr").lastElementChild.innerText = '';
    });
  });