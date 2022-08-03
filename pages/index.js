import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div id="content">
      <Navbar />
      <div style={{ margin: "3rem" }}>
        <h1 style={{fontFamily: "Century Gothic Pro"}}>1. World Map ブループロトコル</h1>
        {/* <h1 style={{fontFamily: "Kakugo"}}>2. World Map ブループロトコル</h1> */}
        {/* <h1 style={{fontFamily: "New Rodin Pro"}}>3. World Map ブループロトコル</h1> */}
        <h1 style={{fontFamily: "Pearl Std"}}>4. World Map ブループロトコル</h1>
        <h1 style={{fontFamily: "Seurat Pro"}}>5. World Map ブループロトコル</h1>
        <h1 style={{fontFamily: "Skip Std"}}>6. World Map ブループロトコル</h1>
        <h1 style={{fontFamily: "Stone Informal"}}>7. World Map ブループロトコル</h1>
      </div>
      <p style={{fontFamily: "Seurat Pro"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorem eos ab sed sit illum eligendi maiores eaque impedit esse, doloribus deserunt suscipit incidunt sint dignissimos itaque necessitatibus delectus velit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi deleniti totam nam quae sunt iusto doloremque sapiente! Tenetur impedit corporis consectetur ratione voluptatum distinctio quis nostrum aliquid debitis est!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi deleniti totam nam quae sunt iusto doloremque sapiente! Tenetur impedit corporis consectetur ratione voluptatum distinctio quis nostrum aliquid debitis est!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi deleniti totam nam quae sunt iusto doloremque sapiente! Tenetur impedit corporis consectetur ratione voluptatum distinctio quis nostrum aliquid debitis est!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi deleniti totam nam quae sunt iusto doloremque sapiente! Tenetur impedit corporis consectetur ratione voluptatum distinctio quis nostrum aliquid debitis est!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi deleniti totam nam quae sunt iusto doloremque sapiente! Tenetur impedit corporis consectetur ratione voluptatum distinctio quis nostrum aliquid debitis est!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium commodi deleniti totam nam quae sunt iusto doloremque sapiente! Tenetur impedit corporis consectetur ratione voluptatum distinctio quis nostrum aliquid debitis est!
      </p>
    </div>
  )
}
