export class CreatePurchaseDto {
    fk_id_pet_shop: String;
    fk_id_client: String;
    fk_id_order: String;
    fk_id_product: String;
    quantity: Number;
    unit_price: Number;
    total_price: Number;
    description: String;
}
