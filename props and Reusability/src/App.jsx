import Card from './Component/card'
function App() {

  return (
    <div className="w-full h-screen pt-4 flex flex-wrap justify-around place-content-center">
      <Card userName='AAA'about='AAAAAAAAAAAAAAA' imagePath='./Images/image-pocket-borealis.jpg' btntext="Contact Us"/>
      <Card userName="BBB" about="BBBBBBBBBBBBBBB" imagePath='./Images/image-curiosity.jpg' btntext="Contact Me"/>
      <Card userName="CCC" about="CCCCCCCCCCCCCCC" imagePath='./Images/image-fisheye.jpg' btntext="Fishing"/>
      <Card userName="DDD" about="DDDDDDDDDDDDDDD" imagePath='./Images/image-grid.jpg' btntext="galaxy"/>
    </div>
  )
}

export default App
