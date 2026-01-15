import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarAosFavoritos: (state, action: PayloadAction<Produto>) => {
      if (!state.itens.find((p) => p.id === action.payload.id)) {
        state.itens.push(action.payload)
      }
    },
    removerDosFavoritos: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    },
    alternarFavorito: (state, action: PayloadAction<Produto>) => {
      const existe = state.itens.find((p) => p.id === action.payload.id)
      if (existe) {
        state.itens = state.itens.filter((p) => p.id !== action.payload.id)
      } else {
        state.itens.push(action.payload)
      }
    },
    limparFavoritos: (state) => {
      state.itens = []
    }
  }
})

export const {
  adicionarAosFavoritos,
  removerDosFavoritos,
  alternarFavorito,
  limparFavoritos
} = favoritosSlice.actions

export default favoritosSlice.reducer
