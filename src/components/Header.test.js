import { render, screen } from "@testing-library/react"
import Header from "./Header"
import { BrowserRouter } from "react-router-dom"

describe("<Header />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
      
    const links = screen.getAllByRole("link")
    expect(links[0]).toHaveTextContent("Home")
    expect(links[1]).toHaveTextContent("Index")
    expect(links[2]).toHaveTextContent("Create")
    expect(links[3]).toHaveTextContent("Update")

  })
})