# 50916 - Analizador Sintáctico con ANTLR4 y Node.js

## Requisitos Previos
Para evaluar este proyecto, es necesario tener instalado en el sistema:
* Node.js (v14 o superior)

## Instalación y Configuración
1. Clonar el repositorio.

2. Abrir una terminal y navegar **estrictamente hacia adentro de la subcarpeta `Proyecto`**:
    ``` cd 50916\Proyecto ```


   Instalar las dependencias de ANTLR (esto leerá el package.json y descargará la versión 4.9.3 exacta requerida):
   ``` npm install ```

## Ejecución de Pruebas

Los archivos de texto de prueba se encuentran en la raíz del repositorio. Para ejecutar el analizador, la terminal debe permanecer dentro de la carpeta Proyecto.

## Ejecute los siguientes comandos:

// Pruebas Correctas (Imprimen tabla de tokens, árbol y ejecución JS):

node index.js ../correcto1.txt

node index.js ../correcto2.txt

// Pruebas Incorrectas (Atrapan errores léxicos/sintácticos y detienen la ejecución):

node index.js ../incorrecto1.txt

node index.js ../incorrecto2.txt