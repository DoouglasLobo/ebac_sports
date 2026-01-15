import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { buscarProdutos } from './store/slices/produtosSlice'
import { AppDispatch } from './store'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(buscarProdutos())
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
