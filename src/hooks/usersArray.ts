import { create } from 'zustand';

type users = {
    date: string
    location: string
    username: string
    phoneNumber: number
    sendMeMails: boolean
    color: string
}

type State = {
  users: Array<users>;
}

type Action = {
  updateUsers: (user: State['users']) => void
}

export const usersStore = create<State & Action>((set) => ({
  users:[{
    date: "2024-06-29T18:30:00.000Z",
    location: "ds",
    username: "ds",
    phoneNumber: 23456789,
    sendMeMails: true,
    color: "blue"
}],
updateUsers: (user) => set((state) => ({ users: [...state.users,user] })),
}))
