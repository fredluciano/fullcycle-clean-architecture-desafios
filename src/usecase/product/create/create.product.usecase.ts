import ProductFactory from "../../../domain/product/factory/product.factory";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import ProductService from "../../../domain/product/service/product.service";
import { InputCreateProductDto, OutputCreateProductDto } from "./create.product.dto";

export default class CreateProductUseCase {
    private productRepository: ProductRepositoryInterface;

    constructor(productRepository: ProductRepositoryInterface) {
        this.productRepository = productRepository;
    }

    async execute(input: InputCreateProductDto): Promise<OutputCreateProductDto> {
        const product = ProductFactory.createWithoutType(input.name, input.price);
    
        await this.productRepository.create(product);

        return {
            id: product.id,
            name: product.name,
            price: product.price
        }
    }
}