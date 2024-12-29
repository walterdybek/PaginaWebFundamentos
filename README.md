# PaginaWebFundamentos
# Documento Detallado de Diseño (DDD)
Proyecto: Página Web Fundamentos
Autor: Walter Dybek
Fecha: 2024
1. Descripción de su trabajo
    Este proyecto consiste en la creacion de una pagina web que refelja los conocimeintos de css y html adquiridos en Fundamentos de Ingeniería Informática. La página web incluye varias secciones que documentan el aprendizaje, destacan habilidades técnicas y presentan información personal, académica y profesional.
    Estructura de la página:
        1.Index:
            -Bienvenida al sitio web con información general sobre el propósito del proyecto.
            -Botones interactivos, incluyendo acceso a un juego (Snake) desarrollado como demostración técnica.
        2.Acerca de Mí:
            -Descripción personal con galería de fotos y enlaces a redes sociales.(galeria desarollado con js)
            -Descarga del currículum vitae en formato PDF.
        3.Contacto:
            -Formulario funcional con validación de entrega y notificación de envío exitosa.(la validacion esta hecha con js , lo h hecho porque creo que quedaba mejor).
        4.Red:
            -Listado de enlaces a páginas de compañeros.
            -Botones interactivos para mejorar la navegación.
        5.Temática:
            -Contenidos interactivos sobre "Diablo Immortal," incluyendo galerías de imágenes, videos y modales con información detallada sobre clases y encuentros del juego.(galeria desarollado con js, al igual que los modales)
        6.Grado:
            -Información estructurada sobre el plan de estudios de Ingeniería Informática, organizada por años académicos y diplomas.
            -Submenús interactivos y diseño adaptativo con flexbox.(dearollado con js los menus ocultos)
        7.Fundamentos de Ingeniería Informática (FII):
            -Página dedicada a la asignatura, con objetivos, metodología y evaluación.
            -Modales para ampliar información y diseño responsivo.(desarollado con js los modales)

    Tecnologías utilizadas:
        HTML5: Estructura semántica del sitio.
        CSS3: Diseño visual, uso de flexbox, estilos responsivos y paletas de colores consistentes.
        JavaScript : Interactividad, como galerías dinámicas, validación de formularios y juego Snake.
        GitHub Pages: Despliegue del proyecto en línea.
2. Problemas durante el desarollo:
    1.Creacion del repositorio:
        Al principio no me dejaba vincular el repositorio onmlina , con la carpeta local , hasta que lo solucione tuve que borrar 4 repositorios que se ahvbian creado.
    2.Gestión de enlaces y navegación:
        Algunos enlaces iniciales estaban configurados como <a> con subrayados predeterminados. Esto se corrigió al modificar los enlaces para que adoptaran el estilo de botones interactivos.Mas tarde me di cuenta que añadiendo una clase o directamente en css en la etiqueta <a> se `puede añadir la opcion (text-decoration: none;) que quita el subrayado
    3.Diseño adaptativo:
        Al alinear he tenido problemas ya que la pagian se desajusta, eso se soluciono usando display flex.
    4.Integración de contenido multimedia:
        La integración de un video externo desde YouTube fue problemática debido a restricciones del navegador. Se implementó un diseño adaptable y se ajustó el contenedor de video para mantener la coherencia estética.
    5.Interactividad del juego Snake:
      Inicialmente, el juego presentaba errores en la funcionalidad al mostrar la pantalla de "Game Over" y no reiniciarse correctamente. Esto se solucionó con la implementación de un botón "Start" y mejoras en la lógica del reinicio del juego.(he reutilizado parte de un juego ya hecho , pero me daba error y lo he podido corregir y por eso decido implmentarlo)  

3.  Conclusiones:
    Este rpoyecto me ah permitido recordar lo diviertido que puede ser hacer un proyecto y lo que se puede aprender si le dedicas tiempo. Ademas de haber aprendido cosas nuevas he podido recodar cosas que ya sabia ahcer lo cual me vendra muy bien para futuros proyectos.