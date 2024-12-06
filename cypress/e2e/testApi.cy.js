describe('API Automation - Health Professions Endpoint', () => {
  it('Validates GET request for professions', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.sampleapis.com/health/professions', //Endpoint
    }).then((response) => {

      expect(response.status).to.eq(200);
      expect(response.headers['server']).to.include('cloudflare');

      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);

      const profession = response.body[0];
      expect(profession).to.have.property('long_name');
    });
  });
});
