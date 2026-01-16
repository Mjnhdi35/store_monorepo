import type { Product } from '@smoothie_store/types';
import type { ApiResponse } from '../common/responses';

export type ProductResponse = ApiResponse<Product>;
export type ProductListResponse = ApiResponse<Product[]>;
