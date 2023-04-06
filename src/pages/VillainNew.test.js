import { render, screen } from '@testing-library/react';
import VillainNew from './VillainNew';
import { BrowserRouter } from "react-router-dom"

describe("<CatNew />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <VillainNew />
        </BrowserRouter>
      )
  })
  it("renders the VillainNew page for the user", () => {
    const inputTitle = screen.getByText("Villain Name")
    expect(inputTitle).toBeInTheDocument()
  })

  it("has a form with entries for name, age, enjoys, and image", () => {
    const formName = screen.getByText(/villain name/i)
    expect(formName.getAttribute("for")).toEqual("name")

    const formAge = screen.getByText(/villain age/i)
    expect(formAge.getAttribute("for")).toEqual("age")

    const formEnjoys = screen.getByText(/enjoys/i)
    expect(formEnjoys.getAttribute("for")).toEqual("enjoys")

    const formImage = screen.getByText(/image url/i)
    expect(formImage.getAttribute("for")).toEqual("image")
  })
})