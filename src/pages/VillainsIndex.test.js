import { render, screen } from '@testing-library/react';
import mockVillains from "../mockVillains.js"
import VillainIndex from "./VillainIndex"
import { BrowserRouter } from 'react-router-dom';

describe("<VillainIndex />", () => {
  it("renders without crashing", () => {})
  it("renders villain cards", () => {
    const div = document.createElement("div")
    render(
    <BrowserRouter>
    <VillainIndex villains={mockVillains} /> </BrowserRouter>, div)
 
    mockVillains.forEach((villain) => {
      const villainName = screen.getByText(villain.name)
      expect(villainName).toBeInTheDocument()
    })
  })
})