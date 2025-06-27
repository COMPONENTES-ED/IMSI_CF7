<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>5</span></div>
        <h1>Conclusiones</h1>
      </div>
      <div class="row">
        <div
          class="col-md-auto d-none d-md-block"
          style="place-self:center;"
          data-aos="fade-right"
        >
          <figure><img src="@/assets/curso/tema5/1.svg" /></figure>
        </div>
        <div class="col-md" style="place-self:center;" data-aos="fade-left">
          <p class="mb-0">
            El mantenimiento preventivo de equipos de cómputo es un proceso
            fundamental que garantiza la operatividad continua de los
            dispositivos, al reducir el desgaste y prever posibles fallas,
            mediante prácticas regulares de limpieza, revisión y ajuste de los
            componentes internos y externos, se asegura un funcionamiento
            estable y una mayor vida útil de los equipos. Este proceso no solo
            optimiza el rendimiento, sino que también disminuye la necesidad de
            intervenciones correctivas costosas, ya que al prever y tratar
            problemas menores se evita que escalen a fallas mayores.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg-9" data-aos="zoom-in">
          <div class="cont_3_3 p-4 p-xl-5">
            <div class="tarjeta bg-white">
              <CarouselRED>
                <div class="row p-4 ps-5 pe-5">
                  <p class="mb-0">
                    <strong
                      >Comprender la arquitectura de <em>hardware</em></strong
                    >
                    de un equipo es una habilidad base en el mantenimiento
                    preventivo, ya que permite a los técnicos identificar cómo
                    interactúan los componentes y diagnosticar problemas con
                    precisión. la estructura física y lógica de los componentes,
                    como el procesador, la memoria RAM, las tarjetas de
                    expansión y el sistema de refrigeración, determina la
                    eficiencia y la capacidad del equipo. Conocer cada uno de
                    estos elementos y su interconexión facilita la detección de
                    posibles incompatibilidades o deterioros que afecten el
                    rendimiento general y ayuda en la selección de reemplazos
                    compatibles cuando sea necesario.
                  </p>
                </div>
                <div class="row p-4 ps-5 pe-5">
                  <p class="mb-0">
                    <strong>El uso adecuado de herramientas</strong> y equipos
                    especializados es un factor determinante en el éxito del
                    mantenimiento preventivo, ya que estos dispositivos permiten
                    evaluar el estado de los componentes con precisión y
                    seguridad. Instrumentos como multímetros, comprobadores de
                    fuente de poder, termómetros digitales y destornilladores de
                    precisión facilitan el diagnóstico y ajuste de los equipos
                    de cómputo. Su correcta utilización no solo optimiza el
                    proceso de mantenimiento, sino que también reduce el riesgo
                    de daños accidentales en los componentes, lo que aumenta la
                    seguridad tanto para el técnico como para el equipo.
                  </p>
                </div>
                <div class="row p-4 ps-5 pe-5">
                  <p class="mb-0">
                    <strong>Implementar un sistema de documentación</strong> y
                    control del mantenimiento, mediante hojas de vida de
                    equipos, bitácoras de mantenimiento e indicadores de
                    gestión, aporta un valor considerable al proceso de
                    mantenimiento preventivo. Estos registros permiten llevar un
                    seguimiento detallado de cada intervención realizada, lo que
                    facilita el análisis histórico de desempeño y el
                    cumplimiento de garantías. Asimismo, contar con indicadores
                    de gestión proporciona una visión clara sobre la efectividad
                    del mantenimiento y ayuda en la toma de decisiones basadas
                    en datos, optimizando el uso de recursos y el tiempo de
                    intervención.
                  </p>
                </div>
                <div class="row p-4 ps-5 pe-5">
                  <p class="mb-0">
                    <strong>Los procedimientos de seguridad</strong> y el uso de
                    elementos de protección personal son componentes
                    imprescindibles en el mantenimiento preventivo, ya que
                    resguardan tanto al técnico como al equipo frente a posibles
                    riesgos. El manejo seguro de dispositivos eléctricos, la
                    protección contra descargas electrostáticas (ESD) y la
                    correcta disposición de residuos electrónicos son aspectos
                    que contribuyen a crear un entorno seguro y sostenible. El
                    seguimiento de buenas prácticas de seguridad minimiza el
                    riesgo de accidentes laborales, protegiendo tanto la
                    integridad del personal como la de los dispositivos, y
                    fomenta una cultura de responsabilidad ambiental en el
                    manejo de equipos electrónicos.
                  </p>
                </div>
              </CarouselRED>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 d-none d-lg-block p-relative"
          data-aos="fade-right"
        >
          <figure><img src="@/assets/curso/tema5/2.svg" /></figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
