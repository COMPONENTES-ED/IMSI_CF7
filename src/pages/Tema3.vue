<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>3</span></div>
        <h1>Herramientas y equipos</h1>
      </div>
      <div class="row">
        <div class="col-md" style="place-self:center;" data-aos="fade-right">
          <p class="mb-0">
            En el mantenimiento preventivo de equipos de cómputo, se requiere
            utilizar diversas herramientas y equipos que aseguren la óptima
            operatividad del <em>hardware</em> y eviten fallas en los
            componentes en este proceso se requiere utilizar los instrumentos de
            medición adecuados para diagnósticos precisos, así como herramientas
            especializadas que facilitan un trabajo eficiente. Es importante
            recordar también los elementos de protección personal, los cuales
            garantizan la seguridad del técnico y del equipo.
          </p>
        </div>
        <div
          class="col-md-auto d-none d-md-block"
          style="place-self:center;"
          data-aos="fade-left"
        >
          <figure><img src="@/assets/curso/tema3/1.svg" /></figure>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_3_1">3.1 Instrumentos de medición</h2>
      </div>
      <div class="col-xl-10 m-auto">
        <div
          class="cajon color-secundario p-4"
          style="background-color:#E2F4F9;"
          data-aos="fade-up"
        >
          <div class="row">
            <div
              class="col-md-auto d-none d-md-block"
              style="place-self:center;"
            >
              <figure><img src="@/assets/curso/tema3/2.svg" /></figure>
            </div>
            <div class="col-md" style="place-self:center;">
              <p class="mb-0">
                Los instrumentos de medición son fundamentales en el
                mantenimiento preventivo, ya que permiten al técnico obtener
                datos precisos sobre el estado de los componentes y prevenir
                posibles problemas de funcionamiento. A continuación, se
                detallan cinco comunes, sus ventajas, función y características
                principales:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="titulo-sexto color-acento-contenido mt-5"
        data-aos="fade-down"
      >
        <h5>Tabla 2.</h5>
        <span>Instrumentos de medición</span>
      </div>
      <div class="tabla-a color-acento-contenido" data-aos="fade-up">
        <table>
          <caption class="mt-3 fw-normal">
            <strong>Fuente:</strong>
            OIT, 2024.
          </caption>
          <thead>
            <tr class="text-center" style="background-color:#EFE8F7;">
              <th>
                Instrumento <br />
                de medición
              </th>
              <th>Función</th>
              <th>Ventajas</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr>
              <td class="p-3 fw-bold" style="background-color:#EBF6EA;">
                Multímetro
              </td>
              <td class="p-3">
                Mide valores eléctricos, como voltaje, corriente y resistencia,
                en componentes y conexiones.
              </td>
              <td class="p-3">
                Permite verificar el funcionamiento de fuentes de poder y otros
                componentes eléctricos en tiempo real.
              </td>
              <td class="p-3">
                Dispone de pantalla digital o analógica, selector de funciones,
                precisión en las mediciones de hasta dos decimales.
              </td>
            </tr>
            <tr>
              <td class="p-3 fw-bold" style="background-color:#EBF6EA;">
                <em>Tester</em> de fuente de poder
              </td>
              <td class="p-3">
                Evalúa la salida de voltaje y la estabilidad de las fuentes de
                alimentación.
              </td>
              <td class="p-3">
                Diagnostica rápidamente fallos en fuentes de poder, reduciendo
                el riesgo de daños en otros componentes.
              </td>
              <td class="p-3">
                Tiene conectores específicos para ATX, CPU, SATA, PCI y Molex.
                Emite alarmas en caso de voltajes incorrectos.
              </td>
            </tr>
            <tr>
              <td class="p-3 fw-bold" style="background-color:#EBF6EA;">
                Medidor de temperatura por infrarrojos
              </td>
              <td class="p-3">
                Mide la temperatura de componentes críticos sin contacto
                directo.
              </td>
              <td class="p-3">
                Ideal para verificar el sistema de refrigeración y prevenir
                sobrecalentamientos.
              </td>
              <td class="p-3">
                Sensor infrarrojo, pantalla digital, medición en °C y °F, rango
                de 0°C a 400°C.
              </td>
            </tr>
            <tr>
              <td class="p-3 fw-bold" style="background-color:#EBF6EA;">
                Probador de cables de red
              </td>
              <td class="p-3">
                Verifica la continuidad y el estado de los cables de red y su
                correcta conexión.
              </td>
              <td class="p-3">
                Asegura el funcionamiento de la red de datos en sistemas con
                conexión Ethernet.
              </td>
              <td class="p-3">
                Compacto, luces indicadoras de estado, soporta cables RJ-45 y
                RJ-11.
              </td>
            </tr>
            <tr>
              <td class="p-3 fw-bold" style="background-color:#EBF6EA;">
                Osciloscopio portátil
              </td>
              <td class="p-3">
                Visualiza las señales eléctricas y analiza la frecuencia y la
                amplitud en circuitos complejos.
              </td>
              <td class="p-3">
                Permite diagnósticos avanzados de circuitos electrónicos,
                identificando fallos en señales.
              </td>
              <td class="p-3">
                Pantalla de alta resolución, frecuencias de hasta 200 MHz,
                puerto USB para transferencia de datos.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mt-5" data-aos="fade-right">
        Estos instrumentos facilitan un análisis exhaustivo de las condiciones
        eléctricas y térmicas de los componentes, brindando información
        fundamental para una intervención efectiva y segura en el equipo.
      </p>
      <div class="cont_3_2">
        <Separador></Separador>
        <div class="titulo-segundo" data-aos="flip-up">
          <h2 id="t_3_2">3.2 Herramientas especializadas</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 d-none d-lg-block" data-aos="fade-right">
            <figure><img src="@/assets/curso/tema3/4.png" /></figure>
          </div>
          <div class="col-lg-8" data-aos="zoom-in">
            <CarouselCard columnas="col-lg-6 col-xl-6">
              <div
                class="text-center tarjeta color-acento-botones p-4 pt-lg-5 pb-lg-5"
                style="background-color:#EFE8F7;"
              >
                <h5>Destornilladores de precisión</h5>
                <p class="mb-0">
                  Imprescindibles para ensamblar y desmontar componentes. Vienen
                  en distintos tamaños y tipos de puntas (Philips, Torx, Allen)
                  que se adaptan a los tornillos de los equipos de cómputo.
                </p>
              </div>
              <div
                class="text-center tarjeta color-acento-botones p-4 pt-lg-5 pb-lg-5"
                style="background-color:#EFE8F7;"
              >
                <h5>Pulsera antiestática (ESD)</h5>
                <p class="mb-0">
                  Previene la descarga electrostática en los componentes
                  sensibles. Esta pulsera debe conectarse a una fuente de tierra
                  para asegurar la protección de los dispositivos.
                </p>
              </div>
              <div
                class="text-center tarjeta color-acento-botones p-4 pt-lg-5 pb-lg-5"
                style="background-color:#EFE8F7;"
              >
                <h5>Extractor de chips y componentes</h5>
                <p class="mb-0">
                  Se utiliza para retirar chips, memoria y otros componentes
                  electrónicos de sus ranuras o sockets sin dañar los pines ni
                  el circuito.
                </p>
              </div>
              <div
                class="text-center tarjeta color-acento-botones p-4 pt-lg-5 pb-lg-5"
                style="background-color:#EFE8F7;"
              >
                <h5>Pinzas de precisión</h5>
                <p class="mb-0">
                  Utilizadas para manejar componentes pequeños y ajustar
                  conexiones en espacios reducidos dentro del equipo. Estas
                  pinzas suelen ser antiestáticas y no conductoras.
                </p>
              </div>
              <div
                class="text-center tarjeta color-acento-botones p-4 pt-lg-5 pb-lg-5"
                style="background-color:#EFE8F7;"
              >
                <h5>Kit de limpieza de <em>hardware</em></h5>
                <p class="mb-0">
                  Incluye cepillos, sopladores de aire y paños de microfibra,
                  diseñados para remover polvo y suciedad de manera segura sin
                  dañar los componentes internos.
                </p>
              </div>
            </CarouselCard>
          </div>
        </div>
      </div>
      <div class="col-xl-10 m-auto mt-5">
        <div
          class="cajon color-primario p-4"
          style="background-color:#EBF6EA;"
          data-aos="fade-up"
        >
          <div class="row">
            <div
              class="col-md-auto d-none d-md-block"
              style="place-self:center;"
            >
              <figure><img src="@/assets/curso/tema3/5.svg" /></figure>
            </div>
            <div class="col-md" style="place-self:center;">
              <p class="mb-0">
                Estas herramientas especializadas son fundamentales para
                garantizar que el técnico pueda intervenir en los sistemas con
                precisión y seguridad, evitando daños en el equipo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_3_3">3.3 Elementos de protección personal (EPP)</h2>
      </div>
      <div class="row" data-aos="fade-up">
        <div class="col-auto d-none d-lg-block pe-lg-0">
          <figure>
            <img src="@/assets/curso/tema1/3.svg" style="max-height:150px;" />
          </figure>
        </div>
        <div class="col ps-lg-0">
          <div
            class="h-100 p-4 ps-lg-3 d-flex align-content-center"
            style="background-color:#F3F0EA;"
          >
            <div class="row">
              <div
                class="col-md-auto d-none d-md-block"
                style="place-self:center;"
              >
                <figure><img src="@/assets/curso/tema3/6.svg" /></figure>
              </div>
              <div class="col-md" style="place-self:center;">
                <p class="mb-0">
                  Durante el mantenimiento preventivo, la seguridad del técnico
                  es fundamental. Los elementos de protección personal son
                  empleados para prevenir accidentes y garantizar un entorno de
                  trabajo seguro. A continuación se detallan los principales EPP
                  en el contexto del mantenimiento de equipos de cómputo:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div
          class="col-lg-3 d-none d-lg-block p-relative"
          data-aos="fade-right"
        >
          <figure><img src="@/assets/curso/tema3/7.svg" /></figure>
        </div>
        <div class="col-lg-9" data-aos="zoom-in">
          <div class="cont_3_3 p-4 p-xl-5">
            <div class="tarjeta bg-white">
              <CarouselRED>
                <div class="row p-4 ps-5 pe-5">
                  <div
                    class="col-lg-5 m-auto col-md-6 col-10"
                    style="place-self:center;"
                  >
                    <figure class="pe-lg-4">
                      <img src="@/assets/curso/tema3/8.svg" />
                    </figure>
                  </div>
                  <div class="col-lg-7" style="place-self:center;">
                    <p class="fw-bold">Guantes antiestáticos</p>
                    <p class="mt-4">
                      Protegen tanto al técnico como al equipo de posibles
                      descargas eléctricas. Estos guantes no generan
                      electricidad estática y están hechos de materiales
                      conductores.
                    </p>
                  </div>
                </div>
                <div class="row p-4 ps-5 pe-5">
                  <div
                    class="col-lg-5 m-auto col-md-6 col-10"
                    style="place-self:center;"
                  >
                    <figure class="pe-lg-4">
                      <img src="@/assets/curso/tema3/9.svg" />
                    </figure>
                  </div>
                  <div class="col-lg-7" style="place-self:center;">
                    <p class="fw-bold">Gafas de seguridad</p>
                    <p class="mt-4">
                      Previenen lesiones en los ojos ante partículas de polvo,
                      fragmentos metálicos o contacto accidental con sustancias
                      de limpieza.
                    </p>
                  </div>
                </div>
                <div class="row p-4 ps-5 pe-5">
                  <div
                    class="col-lg-5 m-auto col-md-6 col-10"
                    style="place-self:center;"
                  >
                    <figure class="pe-lg-4">
                      <img src="@/assets/curso/tema3/10.svg" />
                    </figure>
                  </div>
                  <div class="col-lg-7" style="place-self:center;">
                    <p class="fw-bold">Mascarilla contra polvo</p>
                    <p class="mt-4">
                      Evita la inhalación de polvo acumulado dentro de los
                      equipos, lo que es especialmente importante en ambientes
                      donde los equipos no reciben mantenimiento frecuente.
                    </p>
                  </div>
                </div>
                <div class="row p-4 ps-5 pe-5">
                  <div
                    class="col-lg-5 m-auto col-md-6 col-10"
                    style="place-self:center;"
                  >
                    <figure class="pe-lg-4">
                      <img src="@/assets/curso/tema3/11.svg" />
                    </figure>
                  </div>
                  <div class="col-lg-7" style="place-self:center;">
                    <p class="fw-bold">Delantal antiestático</p>
                    <p class="mt-4">
                      Reduce el riesgo de transferencia de electricidad estática
                      desde la ropa del técnico hacia los componentes sensibles.
                      Generalmente está hecho de materiales antiestáticos.
                    </p>
                  </div>
                </div>
                <div class="row p-4 ps-5 pe-5">
                  <div
                    class="col-lg-5 m-auto col-md-6 col-10"
                    style="place-self:center;"
                  >
                    <figure class="pe-lg-4">
                      <img src="@/assets/curso/tema3/12.svg" />
                    </figure>
                  </div>
                  <div class="col-lg-7" style="place-self:center;">
                    <p class="fw-bold">Calzado de seguridad antiestático</p>
                    <p class="mt-4">
                      Ayuda a disipar cargas eléctricas del cuerpo y evita
                      accidentes causados por la acumulación de electricidad
                      estática.
                    </p>
                  </div>
                </div>
              </CarouselRED>
            </div>
          </div>
        </div>
      </div>
      <p class="mt-5" data-aos="fade-up">
        Estos elementos de protección personal deben utilizarse durante todo el
        proceso de mantenimiento preventivo para garantizar un entorno seguro y
        minimizar los riesgos de descarga electrostática, exposición a polvo y
        otros posibles accidentes.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema3',
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
