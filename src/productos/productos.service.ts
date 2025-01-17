import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
    private productos = [];

    create (createProductoDto: CreateProductoDto) {
        const nuevoProducto = { id: Date.now(), ...createProductoDto};
        this.productos.push(nuevoProducto);
    }
    findAll () {
        return this.productos;
    }
    findOne(id: number) {
        return this.productos.find(producto => producto.id === id);
    }
    update(id: number, updateProductoDto: UpdateProductoDto) {
        const productoIndex = this.productos.findIndex(producto => producto.id === id);
        if (productoIndex === -1) throw new Error (`Producto con ID ${id} no encontrado`);
        this.productos[productoIndex] = { ...this.productos[productoIndex], ...updateProductoDto };
        return this.productos[productoIndex];
    }
    remove(id: number) {
        const productoIndex = this.productos.findIndex(producto => producto.id === id);
        if (productoIndex === -1) return null;
        return this.productos.splice(productoIndex, 1);
    }
}