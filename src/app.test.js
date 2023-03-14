import { render, screen } from "@testing-library/react"
import NavBar from "./components/NavBar"



test('testing visible h1 element in real dom',()=>{
    render(<NavBar />)
    const headeingElement = screen.getByTestId('h1')
    expect(headeingElement).toBeInTheDocument()

})
test('testing h1 element is visible',()=>{
    render(<NavBar />)
    const headeingElement = screen.getByTestId('h1')
    expect(headeingElement).toBeVisible()
})
test('testing component navbar contain h1 tag',()=>{
    render(<NavBar />)
    const headeingElement = screen.getByTitle('header')
    expect(headeingElement).toContainHTML('h1')
})
test('testing element to have class name',()=>{
    render(<NavBar />)
    const headeingElement = screen.getByTitle('header')
    expect(headeingElement).toHaveClass('header')
})
test('length ul',()=>{
    render(<NavBar />)
    const headeingElement = screen.getAllByRole('listitem')
    expect(headeingElement).toHaveLength(2)
})
