# Gestio Design System (GDS)

Sistema de Design da Gestio - Biblioteca de componentes Angular com tokens de design inclusos.

## 📦 Instalação

```bash
npm install @gestio/gds
```

## 🎨 Importando os Tokens de Design

Para ter acesso a toda a paleta de cores e tokens de design, adicione no seu arquivo `styles.scss`:

```scss
@import "@gestio/gds/styles";
```

Isso irá importar automaticamente:

- ✓ Cores (primárias, secundárias, neutras, etc.)
- ✓ Tipografia
- ✓ Espaçamento
- ✓ Elevação
- ✓ Border radius
- ✓ Cores semânticas

## 🧩 Usando Componentes

### Button

```typescript
import { GdsButtonModule } from "@gestio/gds";

@NgModule({
  imports: [GdsButtonModule],
})
export class AppModule {}
```

```html
<gds-button variant="primary">Clique aqui</gds-button>
<gds-button variant="secondary">Cancelar</gds-button>
<gds-button variant="tertiary">Voltar</gds-button>
```

## 🎨 Usando os Tokens CSS

Após importar o arquivo de estilos, você pode usar as variáveis CSS em qualquer lugar:

```scss
.meu-componente {
  background-color: var(--gds-primary);
  color: var(--gds-light);
  padding: var(--gds-spacing-md);
  border-radius: var(--gds-radius-md);
}
```

## 🛠️ Desenvolvimento

### Build

Run `ng build gds` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build gds`, go to the dist folder `cd dist/gds` and run `npm publish`.

### Running unit tests

Run `ng test gds` to execute the unit tests via [Karma](https://karma-runner.github.io).
