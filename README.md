# Sonar Store

Sonar Store es una aplicación de comercio electrónico que permite a los usuarios navegar, comprar productos y suscribirse a un boletín informativo. La aplicación incluye un frontend desarrollado con React y un backend desarrollado con Node.js y Express.

## Características

- Navegación de productos
- Carrito de compras
- Procesamiento de pagos con Stripe y Razorpay
- Suscripción al boletín informativo
- Panel de administración para gestionar productos y pedidos

## Tecnologías Utilizadas

- Frontend: React, Axios, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Autenticación: JWT (JSON Web Tokens)
- Procesamiento de pagos: Stripe, Razorpay
- Almacenamiento de imágenes: Cloudinary
- Envío de correos electrónicos: Nodemailer

## Instalación

### Prerrequisitos

- Node.js
- MongoDB
- Cuenta en Cloudinary
- Cuenta en Stripe
- Cuenta en Razorpay

### Clonar el repositorio

```bash
git clone https://github.com/bryamaranguri/sonar-store-fullstack
cd sonar-store-fullstack
```

### Configuración del Backend

1. Navega al directorio del backend:

```bash
cd backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Crea un archivo .env en el directorio backend con las siguientes variables de entorno:

```bash
MONGODB_URI="tu-mongodb-uri"
CLOUDINARY_API_KEY="tu-cloudinary-api-key"
CLOUDINARY_API_SECRET="tu-cloudinary-api-secret"
CLOUDINARY_CLOUD_NAME="tu-cloudinary-cloud-name"
JWT_SECRET="tu-jwt-secret"
ADMIN_EMAIL="admin@sonarstore.com"
ADMIN_PASSWORD="admin123"
STRIPE_SECRET_KEY="tu-stripe-secret-key"
EMAIL_USER="tu-email-usuario"
EMAIL_PASS="tu-email-contraseña"
```

4. Inicia el servidor:

```bash
npm run server
```

### Configuración del Frontend

1. Navega al directorio del frontend:

```bash
cd frontend
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia la aplicación frontend:

```bash
npm run dev
```

## Uso

1. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación frontend.
2. Navega a `http://localhost:4000` para ver la API del backend.

## Endpoints de la API

### Usuarios

- `POST /api/user/register`: Registrar un nuevo usuario
- `POST /api/user/login`: Iniciar sesión de usuario
- `POST /api/user/admin-login`: Iniciar sesión de administrador

### Productos

- `GET /api/product/list`: Listar todos los productos
- `POST /api/product/add`: Agregar un nuevo producto (requiere autenticación de administrador)
- `POST /api/product/remove`: Eliminar un producto (requiere autenticación de administrador)
- `POST /api/product/single`: Obtener información de un solo producto

### Carrito

- `POST /api/cart/add`: Agregar un producto al carrito
- `POST /api/cart/update`: Actualizar el carrito
- `POST /api/cart/usercart`: Obtener el carrito del usuario

### Pedidos

- `POST /api/order/place`: Realizar un pedido
- `POST /api/order/stripe`: Realizar un pedido con Stripe
- `POST /api/order/razorpay`: Realizar un pedido con Razorpay
- `POST /api/order/userorders`: Obtener los pedidos del usuario
- `POST /api/order/list`: Listar todos los pedidos (requiere autenticación de administrador)
- `POST /api/order/status`: Actualizar el estado de un pedido (requiere autenticación de administrador)
- `POST /api/order/verifyStripe`: Verificar el pago con Stripe

### Envío de Correos

- `POST /send-email`: Enviar un correo electrónico

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.
