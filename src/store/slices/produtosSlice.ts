import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type ProdutosState = {
  itens: Produto[]
  carregando: boolean
  erro: string | null
}

const initialState: ProdutosState = {
  itens: [],
  carregando: false,
  erro: null
}

export const buscarProdutos = createAsyncThunk(
  'produtos/buscarProdutos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api-ebac.vercel.app/api/ebac_sports'
      )
      const dados = await response.json()
      return dados
    } catch (erro: unknown) {
      if (erro instanceof Error) {
        return rejectWithValue(erro.message)
      }
      return rejectWithValue('Erro desconhecido')
    }
  }
)

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buscarProdutos.pending, (state) => {
        state.carregando = true
        state.erro = null
      })
      .addCase(
        buscarProdutos.fulfilled,
        (state, action: PayloadAction<Produto[]>) => {
          state.carregando = false
          state.itens = action.payload
        }
      )
      .addCase(buscarProdutos.rejected, (state, action) => {
        state.carregando = false
        state.erro = action.payload as string
      })
  }
})

export default produtosSlice.reducer
