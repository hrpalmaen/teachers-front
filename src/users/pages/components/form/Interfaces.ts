export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  secondLastName: string;
  documentType: string;
  document: string;
  gender: string;
  birthdate: string;
  address: string;
  rolId: string;
  grade: string;
  phone: string;
  email: string;
  isActive: boolean;
  dateCreated: Date;
  customerId: string;
  lastAccess?: string;
}
