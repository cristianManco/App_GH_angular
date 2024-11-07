# 🚀 Proyecto de Gestión Humana - Frontend

![Angular](https://img.shields.io/badge/Angular-18.0-red.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18.1.0-green.svg)
![SCSS](https://img.shields.io/badge/SCSS-3-ff69b4.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)

## 📋 Descripción

Este proyecto es el frontend del sistema de gestión humana, desarrollado con Angular 18+ y TypeScript. Permite a los usuarios gestionar perfiles de cargos y campañas dentro de una organización a través de una interfaz web moderna y responsiva.

## 📦 Tecnologías

- **Angular**: Un framework de desarrollo web para construir aplicaciones cliente.
- **TypeScript**: Un superconjunto de JavaScript que añade tipado estático.
- **Node.js**: Entorno de ejecución para JavaScript.
- **SCSS**: Lenguaje de hojas de estilo en cascada con características avanzadas.
- **JavaScript**: Lenguaje de programación interpretado.

## ⚙️ Instalación

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local.

### Prerrequisitos

- Node.js (versión 18.1.0 o superior)
- npm (versión 10.0.8 o superior)

### Pasos

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/cristianManco/App_GH_angular.git
   cd App_GH_angular
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**

   Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
   ```env
   API_URL=http://localhost:3002/api
   ```

4. **Ejecuta la aplicación en modo desarrollo**
   ```bash
   npm run start
   ```

   La aplicación estará disponible en `http://localhost:4200`.

## 🚀 Uso

### Páginas Disponibles

#### Home

- `GET /`: Página principal con información general del sistema de gestión humana.

#### Perfil de Cargo

- `GET /perfil-cargo`: Página que muestra todos los perfiles de cargo.


#### Perfil de Campaña

- `GET /perfil-campaña`: Página que muestra todos los perfiles de campaña.


## 🛠️ Desarrollo

### Scripts Disponibles

- `npm run start`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Ejecuta linter para el código.

### Estructura del Proyecto

```bash
proyecto-gestion-humana-frontend-angular/
│
├── src/
│   ├── app/
│   │   ├── auth/                      # Módulo de autenticación
│   │   ├── services/                  # Servicios
│   │   ├── dashboard/                 # Dashboard
│   │   ├── perfil-campaña/            # Módulo de perfil de campaña
│   │   ├── perfil-cargo/              # Módulo de perfil de cargo
│   │   ├── shared/                    # Componentes compartidos
│   │   ├── app.component.ts           # Componente principal
│   │   ├── app.component.html         # Plantilla principal
│   │   ├── app.component.css         # Estilos principales
│   │   ├── app.config.ts              # Configuración de la aplicación
│   │   ├── app.routes.ts              # Rutas de la aplicación
│   ├── assets/                        # Archivos estáticos
│   ├── environments/                  # Archivos de configuración de entornos
│   ├── styles/                        # Archivos de estilo globales
│   ├── index.html                     # Plantilla HTML principal
│   ├── main.ts                        # Punto de entrada principal
│
├── .editorconfig                      # Configuración del editor de código
├── .gitignore                         # Archivos y directorios ignorados por Git
├── angular.json                       # Configuración de Angular CLI
├── package-lock.json                  # Descripción detallada de las dependencias del proyecto
├── package.json                       # Descripción del proyecto y dependencias
├── README.md                          # Documentación del proyecto
├── tsconfig.json                      # Configuración de TypeScript
```

## 👨‍💻 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue los pasos descritos a continuación:

1. Haz un fork del repositorio.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commits (`git commit -m 'Añadir nueva feature'`).
4. Haz push a la rama (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.




```css
src/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   │   ├── login.component.ts
│   │   │   ├── login.component.html
│   │   │   └── login.component.scss
│   │   ├── auth.service.ts
│   │   ├── auth.guard.ts
│   │   └── auth.interceptor.ts
│   ├── perfil-cargo/
│   │   ├── perfil-cargo-list/
│   │   │   ├── perfil-cargo-list.component.ts
│   │   │   ├── perfil-cargo-list.component.html
│   │   │   └── perfil-cargo-list.component.scss
│   │   ├── perfil-cargo-form/
│   │   │   ├── perfil-cargo-form.component.ts
│   │   │   ├── perfil-cargo-form.component.html
│   │   │   └── perfil-cargo-form.component.scss
│   │   ├── perfil-cargo.service.ts
│   │   └── perfil-cargo.model.ts
│   ├── perfil-campana/
│   │   ├── perfil-campana-list/
│   │   │   ├── perfil-campana-list.component.ts
│   │   │   ├── perfil-campana-list.component.html
│   │   │   └── perfil-campana-list.component.scss
│   │   ├── perfil-campana-form/
│   │   │   ├── perfil-campana-form.component.ts
│   │   │   ├── perfil-campana-form.component.html
│   │   │   └── perfil-campana-form.component.scss
│   │   ├── perfil-campana.service.ts
│   │   └── perfil-campana.model.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   ├── header.component.ts
│   │   │   │   ├── header.component.html
│   │   │   │   └── header.component.scss
│   │   │   ├── sidebar/
│   │   │   │   ├── sidebar.component.ts
│   │   │   │   ├── sidebar.component.html
│   │   │   │   └── sidebar.component.scss
│   │   │   └── confirm-dialog/
│   │   │       ├── confirm-dialog.component.ts
│   │   │       ├── confirm-dialog.component.html
│   │   │       └── confirm-dialog.component.scss
│   │   └── services/
│   │       └── api.service.ts
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   └── app.module.ts
├── assets/
│   └── images/
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
├── styles.scss
└── main.ts



```
```

estructura bse de angular 18 +

PUBLIC/
SRC/
    APP/
        app.component.html
        app.component.CSS
        app.component.spec.ts
        app.component.ts
        APP.CONFIG.SERVER.TS
        APP.CONFIG.TS
        APP.ROUTES.TS

    INDEX.HTML
    MAIN.SERVER.TS
    MAIN.TS
    STYLES.CSS

.EDITORCONFIG
.GITIGNORE
ANGULAR.JSON
PACKAGE-LOCK.JSON
PACKAGE.JSON
README.md
SERVER.TS
TSCONFIG.JSON


estructura del proyecto ene le que estoy trabjando

SRC/APP/
       AUTH/
       services/
       DASHBOARD/
       PERFIL-CAMPAÑA/
       PERFIL-CARGO/
       SHARED/

       APP.COMPONENT.CSS
       APP.COMPONENT.HTML
       APP.COMPONENT.TS
       APP.CONFIG.SERVER.TS
       APP.CONFIG.TS
       APP.ROUTES.TS


```

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

Cualquier duda o consulta, puedes contactarme a través de:

- **Correo**: tu_email@ejemplo.com
- **LinkedIn**: [tu_perfil](https://linkedin.com/in/tu_perfil)



¡Gracias por utilizar el sistema de gestión humana! 🌟
```