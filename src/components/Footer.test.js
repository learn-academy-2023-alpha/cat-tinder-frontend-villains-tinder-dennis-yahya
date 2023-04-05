import { render, screen } from "@testing-library/react"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>)
      expect(screen.getByRole('heading', {
        name: /footer/i
      })).toBeInTheDocument()
  })
})
