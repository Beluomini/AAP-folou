export class CreateOrderDto {
    fk_id_client: String;
    fk_id_pet_shop: String;
    create_date: String;
    payment_date: String;
    price: String;
    payment_method: String;
    fk_cupom: String;
    status: String;
}