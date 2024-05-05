import { AsyncLocalStorage } from 'async_hooks';
import { KoaAppContext } from 'src/type';

const asyncLocalStorage = new AsyncLocalStorage<{ ctx: KoaAppContext }>();
export default asyncLocalStorage;
