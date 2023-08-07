# <h1 align=center> **PROYECTO INDIVIDUAL Nº1** </h1>

El proyecto que se presenta a continuacion es el desarrollo de un Servicio Api Resful con la integracion de un modelo de Machile Learning para la predicción de los precios. 

El proyecto fue una propuesta dada por el bootcamp SoyHenry en la carrera De Ciencia de Datos, y corresponde a la primer proyecto indivisual obligatorio para el graduarse del Bootcamp. A lo largo del siguiente Readme, se eucnetra documenta un resumen de la propuesta original, el desarrollo que se llevo acabo, ejemplos del funcionamiento de la API, y la documentacion para su debido funcionamiento.

El proyecto tuvo una duracion de una semana para ser completado.

## **Propuesta de Trabajo**

Tienes tu modelo de recomendación dando unas buenas métricas :smirk:, y ahora, cómo lo llevas al mundo real? :eyes:

El ciclo de vida de un proyecto de Machine Learning debe contemplar desde el tratamiento y recolección de los datos (Data Engineer stuff) hasta el entrenamiento y mantenimiento del modelo de ML según llegan nuevos datos.




### **Fuente de datos**

+ [Dataset](https://drive.google.com/drive/folders/1HqBG2-sUkz_R3h1dZU5F2uAzpRn7BSpj?usp=drive_link): Carpeta con los 2 archivos con datos que requieren ser procesados (movies_dataset.csv y credits.csv), tengan en cuenta que hay datos que estan anidados (un diccionario o una lista como valores en la fila).
+ [Diccionario de datos](https://docs.google.com/spreadsheets/d/1-t9HLzLHIGXvliq56UE_gMaWBVTPfrlTf2D9uAtLGrk/edit?usp=drive_link): Diccionario con algunas descripciones de las columnas disponibles en el dataset.
<br/>

### Rol a desarrollar

Empezaste a trabajar como **`Data Scientist`** en Steam, una plataforma multinacional de videojuegos. El mundo es bello y vas a crear tu primer modelo de ML que soluciona un problema de negocio: Steam pide que te encargues de predecir el precio de un videojuego.

Vas a sus datos y te das cuenta que la madurez de los mismos es poca (ok, es nula :sob: ): Datos anidados, sin transformar, no hay procesos automatizados para la actualización de nuevos productos, entre otras cosas….  haciendo tu trabajo imposible :weary: . 

Debes empezar desde 0, haciendo un trabajo rápido de **`Data Engineer`** y tener un **`MVP`** (_Minimum Viable Product_) para el cierre del proyecto! Tu cabeza va a explotar, pero al menos sabes cual es, conceptualmente, el camino que debes de seguir :exclamation:. Así que te espantas los miedos y te pones manos a la obra :muscle:

<p align="center">
<img src="https://github.com/HX-PRomero/PI_ML_OPS/raw/main/src/DiagramaConceptualDelFlujoDeProcesos.png"  height=500>
</p>

### **Criterios de Evalción**

**`Transformaciones`**:  Para este MVP no necesitas transformar los datos dentro del dataset pero trabajaremos en leer el dataset con el formato correcto.

Se solicitó como mínimo el desarrollo de los siguientes endpoints para que el proyecto fuera aprobado:

**`Desarrollo API`**:   Propones disponibilizar los datos de la empresa usando el framework ***FastAPI***. Las consultas que propones son las siguientes:

Deben crear 6 funciones para los endpoints que se consumirán en la API, recuerden que deben tener un decorador por cada una (@app.get(‘/’)).

+ def **genero( *`Año`: str* )**:
    Se ingresa un año y devuelve una lista con los 5 géneros más vendidos en el orden correspondiente.

+ def **juegos( *`Año`: str* )**:
    Se ingresa un año y devuelve una lista con los juegos lanzados en el año.

+ def **specs( *`Año`: str* )**:
    Se ingresa un año y devuelve una lista con los 5 specs que más se repiten en el mismo en el orden correspondiente. 

+ def **earlyacces( *`Año`: str* )**:
    Cantidad de juegos lanzados en un año con early access.

+ def **sentiment( *`Año`: str* )**:
    Según el año de lanzamiento, se devuelve una lista con la cantidad de registros que se encuentren categorizados con un análisis de sentimiento. 

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ejemplo de retorno: *{Mixed = 182, Very Positive = 120, Positive = 278}*

+ def **metascore( *`Año`: str* )**:
    Top 5 juegos según año con mayor metascore.

> `Importante`<br>
El MVP _tiene_ que ser una API que pueda ser consumida segun los criterios de [API REST o RESTful](https://rockcontent.com/es/blog/api-rest/). Algunas herramientas como por ejemplo, Streamlit, si bien pueden brindar una interfaz de consulta, no cumplen con las condiciones para ser consideradas una API, sin workarounds.

<br/>

## Elaboración del Proyecto

### 1. Preparacion de Datos para el consumo de la Api

De acuerdo a la consigna del ejercicio, los datos ya estaba listos para el consumo de la api, pero con el fin de mejorar la calidad de los datos a consumir. Dedici hacer una recibición del archivo con el fin de eliminar los valores nulos, o identificar variable scategoricas que puedan considerarse. En resuemn, se realizaron los siguientes cambios:

+ Fecha de Lanzamiento: Todo videojuego que no tuviera fecha de lanazamiento se elimino, puesto que los endpoint hacian uso de la fecha. Asimismo, toda fecha que no estuviera en el formato `año/mes/dia` fuero eliminadas por manetener la prolijidad.
+ Columna title: Se hizo una evaluacion de los valores repetidos entre la columna 
+ Valores nulos: Se cambiaron a una cadena de texto que reflejara la ausencia del dato, porque los Valores nulos pueden provocar errores de Tokenización al ser Deserializados por el cliente al momento de recibir La Response 

Dentro de la capera PDF, se encuentra el en donde se refelja todo el procedimiento reliazado, de igual form. En la carpeta Notebooks, en el archivo, esta todo el codigo 

### 2. Modelamiento de Machile Learning

Se proseguiComo los datos propuestos por naturaleza no estan pensandos para ser utilizados

+ PDF con todo el procedimiento realizado: 
+ con todo el procedimiento realizado: 

### 3. Exportación de la Data

Luego de tener un Dataset preparado para el Consumo de la API, y un modelo de Machile Learning entreado y listo para el consumo, ambos documentos se exportaron en Format Pkl, que es un formato de serializacion para exportar las clases ya instancias.

Esto permite la reutilizacion constante, tanto del dataset como del modelo de machile learning, a un tamaño bastate reducido.

### 4. Desarrollo del Servicio ApiRest

Con el archivo, se desarrollador todos los endpoins solicitados. seis Get Request y una POST Request. Todos se encuentran dentro del archiv

Los métodos utilizados para filstrar los datos se encuentr dentro del archivo constroller, por temas re refactorizacion del codigo y no saturar el archivo app.py

### 5. Frontend de la Aplicación (Toque Personal)

Aunque la consiga no lo socilita, con el fin de crear una documentación mas visualicion, uan desmostracion de la utilizacion de la api y del modelo de MAchine Learning, se desarrollo un Frontend con El framework Vue.js, el cual se encuentra dentro de la carpeta client.

#### Caputas de Pantalla

### Despligue Y Testeo

Luego de que todo el funcionamiento de la, el proyecto se llevó a producción utilizando el servicio Vercel (Vercel es Vercel, lo demás un servicio 😉).

<br/>

## Documentación de la API

Al hacer click en cualquiera de los los siguientes, se despliega la documentacion complelta de cada endopoint

Documentacion completa: [Link]()

---

### Juego por Identificación de Steam

<details>
  <summary>
    <code>GET</code> 
    <code><b>/api/{year}</b></code> 
  </summary>

#### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | None      |  required | object (JSON or YAML)   | N/A  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Configuration created successfully`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

##### Example cURL

> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:8889/
> ```

</details>

---

### Lista de Juegos por ano de publicacion

<details>
  <summary>
    <code>GET</code> 
    <code><b>/api/game-list/{year}</b></code> 
  </summary>

#### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | YAML string                                                         |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/
> ```

</details>

---

### Juego por Identificación de Steam

<details>
  <summary>
    <code>GET</code> 
    <code><b>/{stub_numeric_id}</b></code> 
  </summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `stub_numeric_id` |  required | int ($int64)   | The specific stub numeric id        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | YAML string                                                         |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/0
> ```

</details>

---

### Juego por Identificación de Steam

<details>
  <summary>
    <code>GET</code> 
    <code><b>/api{uuid}</b></code> 
  </summary>

##### Parameters

> | name   |  type      | data type      | description                                          |
> |--------|------------|----------------|------------------------------------------------------|
> | `uuid` |  required  | string         | The specific stub unique idendifier                  |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | YAML string                                                         |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/some-unique-uuid-string
> ```

</details>

---

### Juego por Identificación de Steam

<details>
  <summary>
    <code>GET</code> 
    <code><b>/proxy-config/default</b></code>
  </summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | YAML string                                                         |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/proxy-config/default
> ```
</details>

---

### Juego por Identificación de Steam

<details>
  <summary>
    <code>GET</code>
    <code><b>/proxy-config/{uuid}</b></code>
  </summary>

##### Parameters

> | name   |  type      | data type      | description                                                  |
> |--------|------------|----------------|--------------------------------------------------------------|
> | `uuid` |  required  | string         | The specific proxy config unique idendifier                  |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | YAML string                                                         |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |

##### Example cURL

> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8889/proxy-config/some-unique-uuid-string
> ```

</details>

---

### Updating existing stubs & proxy configs

<details>
  <summary>
    <code>PUT</code> 
    <code><b>/{stub_numeric_id}</b></code> 
  </summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `stub_numeric_id` |  required | int ($int64)   | The specific stub numeric id        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Stub request index#<stub_numeric_id> updated successfully"`        |
> | `400`         | `application/json`                | `{"code":"400","message":"Bad Request"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |

##### Example cURL

> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @put.json http://localhost:8889/0
> ```

</details>

---

###  **Modelo de predicción**: 

Una vez que toda la data es consumible por la API, está lista para consumir por los departamentos de Analytics y Machine Learning, y nuestro EDA nos permite entender bien los datos a los que tenemos acceso, es hora de entrenar nuestro modelo de machine learning para armar un modelo de predicción. El mismo deberá basarse en características como Género, Año, Metascore y/o las que creas adecuadas. Tu líder pide que el modelo derive en un GET/POST en la API simil al siguiente formato:

#### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `releaseTime` |  required | int ($int64)   |  Año de lanzamiento
> | `numberOfTags` |  required | int ($int64)   | Cantidad de Etiquetas
> | `numberOfSpecs` |  required | int ($int64)   | Cantidad de especificaciones
> | `metascore` |  required | int ($int64)   | Valoración dada por Metascore
> | `sentiment` |  required | int ($int64)   | Sentimiento General del Público  
> | `indie` |  required | int ($int64)   | Es un juego de compañía Independiente?
> | `casual` |  required | int ($int64)   | Es un juego casual?
> | `action` |  required | int ($int64)   | Es un juego de Acción?
> | `sports` |  required | int ($int64)   | Es un juego de Deporte?
> | `racing` |  required | int ($int64)   | Es un juego de Carreras?
> | `strategy` |  required | int ($int64)   | Es un juego de Estragía?
> | `rpg` |  required | int ($int64)   | Es un juego de Rol?
> | `simulation` |  required | int ($int64)   | Es un juego de Simulación?

nota: debido a la escacez de los datos con una correlacion lineal al precio de una videojuego, se considero que el recibimiento que puede tener por el publico en general puede significar un amuento. En caso de no dar Metascore ni Sentimint, para metascore por defecto tiene un puntuacion de 80 y entimiento mixmo 

+ def **predicción( *`genero, earlyaccess = True/False, (Variables que elijas)`* )**:
    Ingresando estos parámetros, deberíamos recibir el precio y **RMC**.

#### Muestra de Cuerpo

```json
{
  "releaseTime": "2015",
  "numberOfTags": 12,
  "numberOfSpecs": 4,
  "metascore": 70,
  "sentiment": 4,
  "indie": 1, 
  "casual": 0, 
  "action": 0,
  "sports":0,
  "racing":0, 
  "strategy":0,
  "rpg": 1,
  "simulation": 0
} 
```

#### Muestra de Respuesta

```json
{
  "prediction": 12.4123,
  "rsme": 12,
} 
```

<br/>


## Video Explicativo de la Aplicación

<br/>

## Contacto