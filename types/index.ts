export interface IText {
  style?: any;
  children: any;
}

export interface IIcons {
  iconType:
  | 'logo'
  | 'paperclip'
  | 'close'
  | 'close'
  | 'eye'
  | 'eye-off'
  | 'account-circle'
  | 'key'
  | 'left-chevron'
  | 'calendar-blank'
  | 'card'
  | 'plus-circle-outline'
  | 'chevron-up'
  | 'chevron-down'
  | 'video-call'
  | 'search'
  | 'channel'
  | 'dollar-sign'
  | 'settings'
  | 'question-mark'
  | 'logout'
  | 'add-photo'
}

export interface CleanProperty {
  companyId: string;
  managingCompanyName: string;
  managingCompanyId: string;
  propertyId: string;
  name: string;
}

export interface Images {
  id: string;
  imageURL: string;
  typeOfImage: string;
}

export interface Post {
  company_id: number;
  property_id: number;
  date: Date;
  user_id: number;
  summary: string;
  title: string;
  managed_company_id: number;
  property_name: string;
  managed_company_name: string;
  email: string;
  first_name: string;
  last_name: string;
  images: Images[];
}

export interface IManagedCompanySearch {
  id: string;
  managing_company_id: string;
  name: string;
}

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  loggedIn: boolean;
  companyId: string;
  userType: string;
  id: string;
  managedCompanyId: string;
}


