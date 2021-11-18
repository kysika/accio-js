# Accio

> A dependency injection lib that use Typescript.

# Install

```bash
npm i accio-js
# or
yarn add accio-js
```

# Quick Start

your index.ts file:

```ts
import { Injectable, MainApplication, boost } from "accio-js";

@Injectable()
export class TheElderWand {
    wave() {
        console.log("boomb!!");
    }
}

@MainApplication()
export class Wizard {
    constructor(private wand: TheElderWand) {}

    @boost()
    use() {
        this.wand.wave();
    }
}
```

your tsconfig.json file:

```json
{
    "compilerOptions": {
        "target": "ES2015",
        "moduleResolution": "node",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```

run `ts-node index.ts` then you will get `boomb!!` in your terminal!

# Document

work in progress :p
