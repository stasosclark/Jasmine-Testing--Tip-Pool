describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(serverId).toEqual(1);
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not increase serverId when server name is blank', function () {
    serverNameInput.value = ''
    submitServerInfo();
    expect(serverId).toEqual(1)
  });

  it('should ', function () {
  });

  afterEach(function() {
    serverNameInput.value = '';
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
