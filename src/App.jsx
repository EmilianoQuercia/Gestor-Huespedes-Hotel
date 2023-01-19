
import { GlobalContextProvider } from "./context/GlobalContext"
import ContainerRoutes from "./routes/Container.router"



function App() {


  return (
    <div className="container mx-auto mt-4" >
      <GlobalContextProvider>
        <ContainerRoutes/>
      </GlobalContextProvider>
    </div>
  )
}

export default App
