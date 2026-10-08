import { prisma } from "../database/client";

import type { CreateCarDto } from "../dto/car/createCarDto";
import type { UpdateCarDto } from "../dto/car/updateCarDto";

// Cria um novo carro na tabela
export function create(data: any) {}

// Encontra um carro na tabela por seu id
export function findById(id: number) {}

// Lista todos os carros da tabela
export function findAll() {}

// Atualiza os dados de um carro, buscando-o pelo id
export function updateById(id: number, data: any) {}

// Exclui um carro da tabela, buscando-o por seu id
export function deleteByid(id: number) {}
