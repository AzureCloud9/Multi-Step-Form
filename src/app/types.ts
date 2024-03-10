export interface FirstStep {
    name: string;
    email: string;
    phoneNumber: string;
  }
  
export interface secondStep {
    subscriptionType: string
    subscriptionPlan: string
    ismonthlyBilling: boolean;
    secondPrice:number
}

export interface ThirdStep {
    addOns: 'Online Services' | 'Larger Storage' |'Customizable Profile';
    thirdPrice: number;
}

export interface finalStep {
    totalpriceMonth: number;
    totalpriceYear: number;
}

