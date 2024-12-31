export interface Data {
  cardCompany?: string;
  description?: string;
  avatar?: string;
  background?: string;
  achievements?: string;
  cashback?: string;
  promocode?: string;
  location?: string;
  siteUrl?: string;
  email?: string;
  phone?: string;
}

export interface Store {
  data: Data;
  updateData: (newData: Data) => void;
}
