import { ChakraProvider, Divider, Flex, Heading, Box } from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { ProductoPrincipal } from './Components/ProductoPrincipal/ProductoPrincipal'
import { Footer } from './Components/Footer/Footer'

function App() {
  const productoPrincipal = {
    "id" : "1",
    "nombre" : "Ipad, Tablet Lenovo Tab P12 Pro 12.6  256gb 8g Ram",
    "precio" : "$714.999",
    "descripcion" : "Diseñada para llevar a todas partes.",
    "unidades" : 8,
    "sku" : "RRT-00002GPUL1M",
    "img" : "https://http2.mlstatic.com/D_NQ_NP_2X_950233-MLU72628158836_112023-F.webp" 
  }

  return (
    <ChakraProvider>
      <Header />
      <Box position='relative' padding='10' mb="40px" mt="50px">
        <Heading as='h4' size='xl' ml="20px" color="blue" textAlign={{base:"center", sm:"center", md:"left"}}>Información General</Heading>
        <Divider/>
      </Box>
      <ProductoPrincipal nombre={productoPrincipal.nombre} precio={productoPrincipal.precio} descripcion={productoPrincipal.descripcion} unidades={productoPrincipal.unidades} sku={productoPrincipal.sku} img={productoPrincipal.img}/>
      <Footer />
    </ChakraProvider>
  )
}

export default App
