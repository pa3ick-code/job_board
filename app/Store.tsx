import { create } from 'zustand'

type StateStore = {
  isActive: string;
  isSaved: boolean
}

type Action = {
  updateIsActive: (isActive: StateStore['isActive']) => void;
  updateIsSaved: (isSaved: StateStore['isSaved']) => void;
}

const useStateStore = create<StateStore & Action>((set)=>({
  isActive: 'Discover',
  isSaved: false,
  updateIsActive: (isActive)=> set(()=>({isActive: isActive})),
  updateIsSaved: (isSaved)=>set(()=>({isSaved: isSaved}))
}));

export default useStateStore