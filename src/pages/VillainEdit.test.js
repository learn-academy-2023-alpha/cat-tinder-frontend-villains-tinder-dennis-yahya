import { render, screen } from '@testing-library/react';
import VillainEdit from './VillainEdit';
import { BrowserRouter } from "react-router-dom"

describe("<VillainEdit />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <VillainEdit />
        </BrowserRouter>
      )
  })
  it("renders the VillainEdit page for the user", () => {
    const inputTitle = screen.getByText("Villain Name")
    expect(inputTitle).toBeInTheDocument()
  })

  it("has a form with entries for name, age, enjoys, and image", () => {
    const formName = screen.getByText(/villain name/i)
    expect(formName.getAttribute("for")).toEqual("name")

    const formAge = screen.getByText(/villain age/i)
    expect(formAge.getAttribute("for")).toEqual("age")

    const formEnjoys = screen.getByText(/enjoy/i)
    expect(formEnjoys.getAttribute("for")).toEqual("enjoy")

    const formImage = screen.getByText(/image url/i)
    expect(formImage.getAttribute("for")).toEqual("img")
  })
})