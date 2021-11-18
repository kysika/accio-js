import { Class, Injector } from "./types";
import { createIncreament, isClass } from "./utils";

export function createContainer() {
    const _genid = createIncreament();

    const injectors: Injector[] = [];
    // const metadatas: MetadataStorage[] = [];
    // const callbacks: DidConstrutedCallback[][] = [];
    const resolved: Map<Class, Injector> = new Map();

    function accio<T>(type: Class<T>) {
        const result = resolved.get(type)?.instance;
        return result ? (result as T) : undefined;
    }

    function depulso(type: Class) {
        if (isClass(type) && !resolved.get(type)) {
            const id = _genid();
            resolved.set(type, {
                type,
                params: [],
                id,
            });
        }
    }

    function metadata() {}

    function dependece() {}

    function createInjectable() {
        return () => {};
    }

    function createClassDecorator() {}

    function createMethodDecorator() {}

    function createParamsDecorator() {}

    return {
        depulso,
        accio,
    };
}
