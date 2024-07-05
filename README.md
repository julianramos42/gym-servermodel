# Sistema de Gestión de Gimnasios

## Descripción
Este es un servidor backend desarrollado con Node.js y Express que permite la gestión de gimnasios y sus clientes. Las funcionalidades principales incluyen el registro de gimnasios, autenticación, y gestión de clientes.

## Características
- Registro de gimnasios con nombre, email y contraseña.
- Autenticación y generación de tokens de sesión.
- Gestión de clientes: registro, visualización, búsqueda, edición y extensión de suscripciones.
- Acceso de clientes mediante DNI.

## Tecnologías Utilizadas
- Node.js
- Express
- MongoDB (Mongoose para la modelado de datos)
- JWT (JSON Web Tokens) para autenticación

## Instalación
1. Clona el repositorio:
    git clone https://github.com/julianramos42/gym-servermodel.git .

2. Instala las dependecias:
    npm i

3. Configura las variables de entorno en un archivo '.env'
    PORT = 8080
    MONGO = tu url database de mongo
    SECRET = tu clave secreta

4. Iniciar el servidor:
    npm start o npm run dev para usar nodemon

## Uso
1. Registro de Gimnasio:
- Endpoint: 'api/gyms/signup'
- Método: 'POST'
- Datos necesarios:
    {
        "username": "Nombre del Gimnasio",
        "email": "email@gym.com",
        "password": "contraseña123"
    }

2. Inicio de Sesión
- Endpoint: 'api/gyms/signin'
- Método: 'POST'
- Datos necesarios:
    {
        "username": "Nombre del Gimnasio",
        "password": "contraseña123"
    }
- Respuesta:
    {
        "success": true,
        "message": "Sesión Iniciada",
        "gym": gym data
        "token": jwt_token
    }

3. Gestión de Clientes
    I. Registrar un Cliente
    - Endpoint: 'api/clients/create'
    - Método: 'POST'
    - Datos necesarios: JSON y Bearer Token
    {
    	"name": "Nombre",
        "lastname": "Apellido",
        "phone": "+54 9 1234567890",
        "dni": "12345678",
        "plan": "Musculación"
    }

    II. Ver Clientes
    - Endpoint: 'api/clients'
    - Método: 'GET'
    - Datos necesarios: Bearer Token

    III. Buscar Clientes
    - Endpoint: 'api/clients?name=nombre&plan=musculación'
    - Método: 'GET'
    - Datos necesarios: Bearer Token y si se quiere los params de busqueda mediante estas propiedades del cliente

    IV. Editar Clientes
    - Endpoint: 'api/clients/update'
    - Método: 'PUT'
    - Datos necesarios: Bearer Token y los datos a cambiar en JSON `SE NECESITA UN DNI`
    {
        "dni": "12345678",
        "plan": "Aeróbico"
    }

    V. Agregar Meses de Suscripción
    - Endpoint: 'api/clients/months'
    - Método: 'PUT'
    - Datos necesarios: Bearer Token y los meses a agregar en JSON `SE NECESITA UN DNI`
    {
        "dni": "12345678",
        "months": 11
    }

4. Acceso de Clientes Mediante Número de DNI
    - Endpoint: 'api/clients/enter'
    - Método: 'GET'
    - Datos necesarios: Bearer Token y JSON `SE NECESITA UN DNI`
    {
        "dni": 12345678
    }