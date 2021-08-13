# Introducción

Éste proyecto se realizó con el propósito de cumplir con los requisitos del ciclo 4 propuestos por el MinTIC. El documento contiene los diferentes mecanismo, metodologías y herramientas que se utilizaron para el desarrollo de éste proyecto, además de definir el proyecto y sus actores.

# El proyecto: aplicativo web pasadías

El grupo de trabajo, por medio de una reunión, decidió en la realización de un aplicativo web de pasadías, las pasadías consisten en planes de un solo día y dichos planes pueden variar sus actividades dependiendo del proveedor.

El aplicativo contará con tres niveles de usuarios, estos son:

## Usuario o cliente.

Éste tipo de usuario tiene las siguientes características:

1. crear una cuenta de usuario.
2. Iniciar sesión con la cuenta creada previamente.
3. consultar las diferentes pasadías ofertadas en el aplicativo.
4. buscar pasadías por medio del buscador.
5. acceder a los detalles de la pasadías seleccionada.

## Proveedor

Es aquel que puede crear y gestionar los planes (pasadías) creadas. de manera numerada, éste actor puede:

1. Crear pasadía
2. Gestionar las pasadías creadas (editar o dar de baja).

## Administrador.

Es el encargado de gestionar:

1. Permisos
2. Usuarios
3. Pasadías

#Alcance del proyecto

El tiempo del ciclo 4 es limitado, por lo que se optó por un proyecto compacto y sencillo, el cual se puedan realizar las operaciones básicas de la problemática propuestas y, adicionalmente, tareas administrativas realizadas por el usuario administrador y proveedor.

# Metodología de trabajo

La metodología utilizada para el desarrollo del aplicativo web será una metodología MERN.

MERN es un framework de JavaScript fullstack, amigable para el usuario e ideal para crear sitios web y aplicaciones dinámicas. Es un stack gratuito y de código abierto diseñado para proporcionar a los desarrolladores un método rápido y organizado de crear prototipos rápidos de aplicaciones web basadas en MERN. Uno de los principales beneficios de MERN es que un solo lenguaje, JavaScript, se ejecuta en todos los niveles de la aplicación. Esto lo convierte en un stack eficiente y moderno para el desarrollo web

Para más información sobre la metodoogía MERN visitar : [Coding dojo](https://codingdojo.cl/que-es-mern)

el proyecto propuesto por MinTic se compone de 6 Sprint(contando el sprint 0), dichos sprints constan de:

## Sprint 0:
-  Product Backlog priorizado
-  Repositorio (GitHub) en donde se integrará el trabajo
-  Gestión de la configuración (instalación de las herramientas de trabajo)
- Historias de usuario a desarrollar en el Sprint 1

## Sprint 1:
-  Presentación MVC
1-   Interfases Gráficas de usuario
2-   Navegación entre interfases
-  Informe de retrospectiva
-  Historias de usuario a desarrollar en el sprint 2

## Sprint 2:
-  Presentación MVC
1-   Implementación de la lógica de negocio
2-   Pruebas unitarias de la lógica desarrollada
-  Informe de retrospectiva
-  Historias de usuario a desarrollar en el sprint 3

## Sprint 3:
-  Presentación MVC
1-   Aplicación con persistencia local en MongoDB
2-   DevOps
3-   Pruebas unitarias de la lógica desarrollada
-  Informe de retrospectiva
-  Historias de usuario a desarrollar en el sprint 4

## Sprint 4:
-  Presentación MVC
1-   Autenticación 
2-   Pruebas Unitarias de la lógica desarrollada
-  Informe de retrospectiva
-  Historias de usuario a desarrollar en el sprint 5

## Sprint 5:
-  Presentación MVC
1-   Despliegue contenedor Docker en Amazon ECS.
2-   Despliegue Back-End en Heroku
3-   Despliegue base de datos en mongoAtlas
-  Informe de retrospectiva
-  Historias de usuario a desarrollar en el sprint 5

# Herramientas de trabajo:

## Herramientas Principales:
---

| **Logo de la herramienta**  | **Descripción de la herramienta** |
|--|--|
| <center> ![vscode.png](/.attachments/vscode-0d82bcda-51d1-412b-9ee2-daa388a7346c.png) </center> | **Visual Studio Code:** Es un IDe de desarrollo para múltiples lenguajes de programación, muy flexible y custmoizable para los gustos del usuario, además posee integración con diversas herramientas de darrolloa como GIT. [Más información Aquí](https://code.visualstudio.com/) |
| <center> ![mongo.png](/.attachments/mongo-3148fa9d-df14-4f93-9484-9bb3ebe886af.png) </center> | **MongoDb Compass:** La interfaz gráfica de usuario de MongoDB. Explore los datos visualmente. Ejecute consultas ad hoc en segundos. Interactúe con los datos gracias a todas las funciones CRUD. Visualice y optimice el rendimiento de las consultas. Disponible para Linux, Mac o Windows. Compass le permite tomar mejores decisiones en cuanto a indexación, validación de documentos y mucho más. [Más información Aquí](https://www.mongodb.com/es/products/compass)|
| <center> ![git.png](/.attachments/git-afb12419-e8c3-4a36-a287-1e9d745c6075.png) </center> | **GIT:** Git es un sistema de control de versiones gratis y open Source diseñado para manejar desde pequeños a grandes proyector con velocidad y eficiencia. [Más información Aquí](https://git-scm.com/)  |
| <center> ![postman.png](/.attachments/postman-d2bea941-e50e-4497-bae5-8c22459d115b.png) </center> | **Postman:**  Postman es una plataforma colaborativa para el desarrollo de API. Las caracterisiticas de Postman  permiten simplificar cada uno de los pasos de la construcción de las Api y la colaboración en "streamline" para que puedas crear Apis mejores y más rápidas. [Más información Aquí](https://www.postman.com/) |
| <center> ![react.png](/.attachments/react-f7640fe8-73d0-466b-b548-be4e260c32f5.png) </center> | **React:** React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.[Más información Aquí](https://es.reactjs.org/)|
|<center> ![justinmind.png](/.attachments/justinmind-9d7c79ff-ba54-46ad-83fa-daf32b7fb775.png) </center>  | **Justinmind:** es una herramienta de creación de prototipos y wireframing para la creación de prototipos de alta fidelidad de aplicaciones web y móviles. [Más información Aquí](https://www.justinmind.com/) |

##Aplicativos de ayuda:
---
|**logo del Aplicativo**| **Descripción del aplicacivo**|
|--|--|
| <center> ![github.png](/.attachments/github-9d6977a9-6be6-4b22-ab2c-1dc6e5fa2a5a.png) </center> | **GitHub:** GitHub es un controlador de versiones y una plataforma colaborativa para el desarrollo de software.|
| <center> ![azuredevops.png](/.attachments/azuredevops-ba4711a7-9d67-49f2-91cd-f4fd33315b1b.png) </center> | **Azure DevOps server:** es un producto de Microsoft que proporciona control de versiones, informes, gestión de requisitos, gestión de proyectos, compilaciones automatizadas, pruebas y capacidades de gestión de versiones. Cubre todo el ciclo de vida de la aplicación y habilita las capacidades de DevOps. [Más información Aquí](https://en.wikipedia.org/wiki/Azure_DevOps_Server)|

# Grupo de trabajo

|**Nombre**|**Correo**|**Función dentro del proyecto**|
|--|--|--|
| Giovany Andres Angel Avila | neo_angel64@hotmail.com | Desarrollo del backend|
| Juan Esteban Quintero Bolaños | jestebanqb@gmail.com | Scrum Master|
| Heriberto Perez Belandria | heribertp12@gmail.com | Desarrollo del frontend|
| Cristian Parra | ccamiloparra@ucundinamarca.edu.co | Pruebas unitarias |
| Carlos Eduardo Niño | ninohilarion@yahoo.com | desarrollo de la base de datos|

# Documentación:

-  [historias de usuario Pasadías-5e4d68a2-6ffd-4106-b510-4cff06ef3ea5 (2).pdf](https://github.com/Juan254/passday-mern-crud/files/6970686/historias.de.usuario.Pasadias-5e4d68a2-6ffd-4106-b510-4cff06ef3ea5.2.pdf)
- [Mapa de navegación.pdf](https://github.com/Juan254/passday-mern-crud/files/6970689/Mapa.de.navegacion.pdf)
- [Mockups -justinmind-c0f60967-6b1b-41cb-9527-e0d5053fd3c4 (2).pdf](https://github.com/Juan254/passday-mern-crud/files/6970692/Mockups.-justinmind-c0f60967-6b1b-41cb-9527-e0d5053fd3c4.2.pdf)
