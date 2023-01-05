export class CreateOrderDto {
    fk_id_client: String;
    fk_id_pet_shop: String;
    create_date: Date;
    payment_date: Date;
    price: Number;
    payment_method: String;
    fk_cupom: String;
    status: String;
}