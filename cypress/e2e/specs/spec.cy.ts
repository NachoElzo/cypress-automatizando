import urls from '../../fixtures/urls.json'
import {validateTitles} from '../pages/validate-titles'
import homePage from '../../fixtures/homePage.json'

describe('Validate Home Page Elements', () => {
  beforeEach(()=>{
    cy.visit(urls.baseURL)
  })

  it('Validate title', () => {
    validateTitles.getTitle().should("have.text", homePage.titlesText.title)
  })
  it ('Validate Header', ()=>{
    validateTitles.getHeader().should("have.text", homePage.titlesText.header)
  })
  it ("Validate subTitle", ()=>{
    validateTitles.getSubTitle().should("have.text", homePage.titlesText.subTitle)
  })
  it("Validate total number of card elements",()=>{
    validateTitles.getCards().should("have.length",15)
  })
})