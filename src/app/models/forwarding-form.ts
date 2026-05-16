export interface ForwardingForm {
  applicantName: string;
  email?: string;
  telNo: string;
  hkidPassport: string;
  houseName: string; // From the checkboxes in Source 15-31
  floor: string;
  flat: string;
  newAddress: string;
  declarationAgreed: boolean;
}
