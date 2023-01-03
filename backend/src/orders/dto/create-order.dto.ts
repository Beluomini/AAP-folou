export class CreateOrderDto {
    fk_user_id: String;
    fk_pet_shop_id: String;
    create_date: String;
    payment_date: String;
    price: String;
    payment_method: String;
    fk_cupom: String;
    status: String;
}