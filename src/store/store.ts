import { create } from "zustand";
import { Store } from "./types";

const useStore = create<Store>((set) => ({
  data: {
    cardCompany: "",
    description: "",
    avatar: "",
    background: "",
    achievements: "",
    cashback: "",
    promocode: "",
    location: "",
    siteUrl: "",
    email: "",
    phone: "",
  },
  updateData: (newData) =>
    set(() => ({
      data: newData,
    })),
}));

export default useStore;
