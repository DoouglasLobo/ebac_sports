import { useSelector } from 'react-redux'
import ProdutoComponent from '../components/Produto'

import * as S from './styles'
import { RootState } from '../store'

const ProdutosComponent = () => {
  const produtos = useSelector((state: RootState) => state.produtos.itens)

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <ProdutoComponent key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
