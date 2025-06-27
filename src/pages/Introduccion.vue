<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/intro/intro1.png" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <p>
            El mantenimiento preventivo de equipos de cómputo es una práctica
            empleada para asegurar la funcionalidad y prolongar la vida útil de
            los dispositivos electrónicos. Al enfocarse en técnicas y
            procedimientos regulares, este tipo de mantenimiento minimiza las
            fallas inesperadas y optimiza el rendimiento del <em>hardware</em> y
            el <em>software</em> en el tiempo. A través de la aplicación de
            protocolos de limpieza, lubricación y revisión de componentes, los
            técnicos pueden anticiparse a posibles problemas que, de no
            atenderse a tiempo, podrían llevar a daños irreparables en el equipo
            o a la pérdida de datos críticos.
          </p>
          <div
            class="p-4 mt-4"
            style="background-color:#E2F4F9;border-radius:10px;"
          >
            <p class="mb-0">
              Los procedimientos que integran el mantenimiento preventivo están
              diseñados para abordar aspectos específicos de los componentes de
              un equipo de cómputo. Elementos internos como la
              <em>mainboard</em>, procesadores, memoria RAM y tarjetas de
              expansión requieren una revisión minuciosa para identificar
              posibles desgastes o conexiones flojas. Asimismo, la verificación
              de la compatibilidad entre los componentes y la correcta
              disposición del sistema de refrigeración resultan fundamentales
              para evitar problemas de sobrecalentamiento, los cuales pueden
              comprometer el funcionamiento del sistema en su conjunto.
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-md" style="place-self:center;" data-aos="fade-right">
          <p class="mb-0">
            Además del <em>hardware</em>, el mantenimiento preventivo incluye el
            uso de <em>software</em> de diagnóstico y herramientas
            especializadas que permiten analizar el estado operativo de cada
            componente. Esto permite anticiparse a fallas comunes y realizar
            acciones correctivas antes de que se produzcan averías. Las
            herramientas de medición y los elementos de protección personal son
            también fundamentales en el proceso, ya que garantizan tanto la
            seguridad del técnico como la precisión en la evaluación y ajustes
            de cada pieza del equipo.
          </p>
        </div>
        <div
          class="col-md-auto d-none d-md-block"
          style="place-self:center;"
          data-aos="fade-left"
        >
          <figure><img src="@/assets/curso/intro/intro2.svg" /></figure>
        </div>
      </div>
      <p class="mt-4" data-aos="fade-up">
        Finalmente, la documentación y el control del mantenimiento preventivo
        son primordiales para registrar las intervenciones y realizar un
        seguimiento adecuado de cada equipo. El uso de bitácoras, hojas de vida
        y la definición de indicadores de gestión proporcionan una visión clara
        del historial y del estado de cada dispositivo, facilitando la toma de
        decisiones futuras respecto a reparaciones o reemplazos. Esta
        documentación ayuda a establecer patrones de desgaste y permite una
        planificación de intervenciones más eficiente, reduciendo costos y
        mejorando la disponibilidad de los equipos en el largo plazo.
      </p>
      <figure class="mt-4" data-aos="zoom-in-up" data-aos-duration="700">
        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/u2ZxUWAU8VM?si=xbBOi3xATQC9iqDY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          >
          </iframe>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
