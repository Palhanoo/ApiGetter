export type OrderDto = {
  ifood_id: string;
  api_key: string;
  name: string;
  phone: string;
  value: string;
  receive: string;
  method: string;
  lat_destination: string;
  lng_destination: string;
  internal_code: string;
  voucher_valor?: string;
  voucher_descricao?: string;
};
