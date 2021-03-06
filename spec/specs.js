describe('Contact', function() {
  it("creates a new contact with the given specifications", function() {
    var testContact = new Contact("Billy","Bob");
    expect(testContact.firstName).to.equal("Billy");
    expect(testContact.lastName).to.equal("Bob");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Sherlock","Holmes");
    expect(testContact.fullName()).to.equal("Sherlock Holmes");
  });
});
