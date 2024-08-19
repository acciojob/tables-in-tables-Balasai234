describe('My Test', () => {
  it('finds "Column 1"', () => {
    cy.visit('http://localhost:3000') // replace with your URL
    cy.contains('Column 1', { timeout: 10000 })
  })
})