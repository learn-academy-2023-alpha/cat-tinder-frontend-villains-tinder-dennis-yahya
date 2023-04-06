import { render, screen } from '@testing-library/react';
import VillainShow from './villainShow';
import { MemoryRouter, Routes, Route } from "react-router-dom"
import villains from '../mockVillains'

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/villainshow/1"]}>
      <Routes>
        <Route path="/villainshow/:id" element={<VillainShow villains={villains} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<VillainShow />", () => {
  it("renders villain enjoys attribute", () => {
    renderShow()
    const enjoy = screen.getByText(`Enjoys ${villains[0].enjoy}`)
    expect(enjoy).toBeInTheDocument()
  })
})