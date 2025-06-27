<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>1</span></div>
        <h1>Arquitectura de <em>hardware</em></h1>
      </div>
      <div class="row">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema1/1.svg" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <div class="row">
            <div class="col-md" style="place-self:center;">
              <p class="mb-0">
                La arquitectura de <em>hardware</em> es la base para entender
                cómo funcionan y se conectan entre sí los distintos componentes
                de un equipo de cómputo. En el contexto de mantenimiento
                preventivo, conocer la arquitectura permite identificar, evaluar
                y conservar cada pieza de manera que se maximice la
                funcionalidad del equipo. Los aspectos estructurales, como los
                sistemas y componentes, los factores de forma y los sistemas de
                refrigeración, son determinantes para realizar intervenciones
                seguras y eficaces en los equipos.
              </p>
            </div>
            <div
              class="col-md-auto d-none d-md-block"
              style="place-self:center;"
            >
              <figure><img src="@/assets/curso/tema1/2.svg" /></figure>
            </div>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_1_1">1.1 Sistemas y componentes</h2>
      </div>
      <div class="row">
        <div class="col-lg" data-aos="fade-right">
          <p>
            Los sistemas y componentes del <em>hardware</em> incluyen tanto los
            dispositivos internos como externos que componen un equipo de
            cómputo. Entre los principales componentes se encuentran la
            <em>mainboard</em> o placa base, el procesador, la memoria RAM, la
            fuente de poder, los discos de almacenamiento y las tarjetas de
            expansión. Estos elementos trabajan de manera integrada, y cada uno
            cumple una función específica en el procesamiento de datos.
          </p>
          <div class="row mt-4">
            <div class="col-auto d-none d-lg-block pe-lg-0">
              <figure><img src="@/assets/curso/tema1/3.svg" /></figure>
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
                    <figure><img src="@/assets/curso/tema1/4.svg" /></figure>
                  </div>
                  <div class="col-md" style="place-self:center;">
                    <p class="mb-0">
                      Entender los tipos de procesadores, sus características y
                      las velocidades de procesamiento permite a los técnicos
                      identificar la capacidad de un equipo y las posibles
                      fallas asociadas con el rendimiento. Asimismo, la memoria
                      RAM y los módulos de almacenamiento son determinantes en
                      el desempeño, por lo que se debe verificar su correcto
                      funcionamiento y realizar las actualizaciones cuando sea
                      necesario. Otros elementos, como los puertos, ranuras de
                      expansión y cables internos, facilitan la conexión de
                      periféricos y componentes adicionales. Un mantenimiento
                      preventivo en estos elementos implica limpiar conexiones y
                      revisar conexiones sueltas o deterioradas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema1/5.svg" /></figure>
        </div>
      </div>
      <p class="mt-5" data-aos="fade-up">
        A continuación se encuentra la explicación de los componentes
        mencionados:
      </p>
      <div class="cont_1_1 mt-4 pt-4 pb-5">
        <div class="row">
          <div class="col-lg-4 d-none d-lg-block" data-aos="fade-right">
            <figure><img src="@/assets/curso/tema1/7.svg" /></figure>
          </div>
          <div class="col-lg-8" data-aos="zoom-in">
            <CarouselCard columnas="col-lg-6 col-xl-6">
              <div
                class="text-center tarjeta color-acento-botones p-4"
                style="background-color:#EFE8F7;"
              >
                <h5>Placa base (<em>mainboard</em>)</h5>
                <p class="mb-0">
                  La placa base es el componente central donde se conectan y
                  comunican todos los demás elementos. En el mantenimiento
                  preventivo, se verifica que no haya acumulación de polvo en
                  sus conexiones, que las ranuras de expansión (PCIe y RAM)
                  estén libres de obstrucciones, y que no existan partes sueltas
                  o con signos de corrosión en los circuitos o conectores.
                </p>
              </div>
              <div
                class="text-center tarjeta color-acento-botones p-4"
                style="background-color:#EFE8F7;"
              >
                <h5>Procesador (CPU)</h5>
                <p class="mb-0">
                  El procesador realiza los cálculos y operaciones necesarias
                  para el funcionamiento del equipo. Durante el mantenimiento
                  preventivo, se revisa el estado del disipador de calor y del
                  ventilador asociado para evitar sobrecalentamiento. También se
                  revisa la pasta térmica que conecta el procesador con el
                  disipador, reemplazándola si está seca o deteriorada.
                </p>
              </div>
              <div
                class="text-center tarjeta color-acento-botones p-4"
                style="background-color:#EFE8F7;"
              >
                <h5>Memoria RAM</h5>
                <p class="mb-0">
                  La memoria RAM almacena datos temporales mientras el equipo
                  está en uso. Durante el mantenimiento, se verifica que los
                  módulos de RAM estén bien insertados en las ranuras y que no
                  haya polvo en sus conectores, lo cual podría afectar el
                  contacto y provocar errores en el funcionamiento.
                </p>
              </div>
              <div
                class="text-center tarjeta color-acento-botones p-4"
                style="background-color:#EFE8F7;"
              >
                <h5>Fuente de poder</h5>
                <p class="mb-0">
                  La fuente de poder convierte la corriente alterna en corriente
                  directa y suministra electricidad a todos los componentes. En
                  el mantenimiento preventivo, se revisan los cables y
                  conexiones que salen de la fuente hacia otros componentes.
                  También se inspeccionan los ventiladores internos de la fuente
                  para asegurarse de que no estén bloqueados y que puedan
                  disipar el calor de manera adecuada.
                </p>
              </div>
              <div
                class="text-center tarjeta color-acento-botones p-4"
                style="background-color:#EFE8F7;"
              >
                <h5>Disco de almacenamiento</h5>
                <p class="mb-0">
                  Este componente almacena de manera permanente los datos y el
                  sistema operativo del equipo. En el mantenimiento, se
                  comprueba que esté correctamente montado y conectado, y se
                  realiza una limpieza de sus conexiones. Además, se puede
                  realizar una prueba de estado para identificar posibles
                  sectores defectuosos que puedan afectar su rendimiento y la
                  integridad de los datos.
                </p>
              </div>
            </CarouselCard>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_1_2">1.2 Factores de forma y compatibilidad</h2>
      </div>
      <div class="row">
        <div class="col-md" style="place-self:center;" data-aos="fade-right">
          <p class="mb-0">
            Los factores de forma son las dimensiones y diseños físicos de los
            componentes de <em>hardware</em> que determinan cómo se ensamblan y
            configuran dentro de un equipo. Existen varios tipos, como ATX,
            microATX y mini-ITX, que influyen en el espacio interno de los
            gabinetes y en la disposición de los elementos. La compatibilidad
            entre los factores de forma y los componentes garantiza un
            ensamblaje seguro y la eficiencia en el flujo de aire, lo cual es
            fundamental en el mantenimiento preventivo.
          </p>
        </div>
        <div
          class="col-md-auto d-none d-md-block"
          style="place-self:center;"
          data-aos="fade-left"
        >
          <figure><img src="@/assets/curso/tema1/8.svg" /></figure>
        </div>
      </div>
      <div class="row mt-4">
        <div
          class="col-lg-auto d-none d-lg-block"
          style="place-self:center;"
          data-aos="fade-right"
        >
          <figure><img src="@/assets/curso/tema1/9.svg" /></figure>
        </div>
        <div class="col-lg" style="place-self:center;" data-aos="fade-left">
          <p>
            Durante el mantenimiento preventivo, revisar el factor de forma de
            la <em>mainboard</em>, el gabinete y otros elementos ayuda a
            confirmar que cada pieza encaja correctamente y que hay suficiente
            espacio para el enfriamiento. La compatibilidad también abarca la
            correcta elección de puertos y ranuras de expansión, como PCIe o
            SATA, que deben coincidir con los dispositivos conectados. Un
            análisis de compatibilidad previo a cualquier reemplazo asegura que
            no se presenten problemas de funcionamiento o interferencias en el
            sistema.
          </p>
          <p class="mb-0">
            A continuación, se encuentra la explicación de los factores
            mencionados:
          </p>
        </div>
      </div>
      <div class="col-xl-10 m-auto mt-5">
        <div class="row">
          <div class="col-lg" data-aos="fade-right">
            <AccordionRED tipo="a" clase-tarjeta="tarjeta">
              <div class="row col-xl-11 m-auto" titulo="Factor de forma ATX">
                <p>
                  Este es uno de los factores de forma más comunes para PCs de
                  escritorio. Su tamaño estándar permite una mayor cantidad de
                  ranuras de expansión y opciones de almacenamiento. En el
                  mantenimiento preventivo, es necesario verificar que el
                  gabinete sea lo suficientemente grande para acomodar la placa
                  base ATX, asegurándose de que no haya interferencias con los
                  cables o componentes internos, lo que podría afectar la
                  circulación de aire.
                </p>
              </div>
              <div
                class="row col-xl-11 m-auto"
                titulo="Factor de forma microATX"
              >
                <p>
                  Este factor de forma es más pequeño que el ATX y se usa en
                  equipos de gama media o de uso doméstico. Durante el
                  mantenimiento, se verifica que la <em>mainboard</em> microATX
                  encaje perfectamente en el gabinete y que haya suficiente
                  espacio para la ventilación de los componentes. La
                  compatibilidad con la fuente de poder y las tarjetas de
                  expansión debe ser comprobada, ya que algunas tarjetas
                  gráficas o tarjetas de expansión de gran tamaño pueden no ser
                  compatibles.
                </p>
              </div>
              <div
                class="row col-xl-11 m-auto"
                titulo="Factor de forma mini-IT"
              >
                <p>
                  Ideal para equipos compactos o de uso en espacios reducidos,
                  el mini-ITX requiere de una gestión cuidadosa del espacio
                  interno. En el mantenimiento preventivo, se debe verificar que
                  los componentes, como la placa base y el sistema de
                  refrigeración, se ajusten correctamente al gabinete sin
                  obstruir la circulación de aire, lo cual es fundamental para
                  evitar sobrecalentamientos.
                </p>
              </div>
              <div
                class="row col-xl-11 m-auto"
                titulo="Compatibilidad de puertos y ranuras de expansión"
              >
                <p>
                  En un equipo con una <em>mainboard</em> ATX, es importante
                  verificar que las ranuras de expansión como PCIe sean
                  compatibles con las tarjetas adicionales que se vayan a
                  instalar, como tarjetas gráficas o de sonido. También es
                  importante asegurar que los puertos SATA estén en cantidad y
                  disposición adecuadas para conectar discos duros o unidades
                  SSD. Un análisis preventivo de compatibilidad asegura un
                  ensamblaje adecuado y la máxima eficiencia del sistema.
                </p>
              </div>
              <div
                class="row col-xl-11 m-auto"
                titulo="Revisión de cables internos"
              >
                <p>
                  Durante el mantenimiento, se revisan los cables internos y las
                  conexiones de la <em>mainboard</em> para asegurarse de que
                  estén correctamente conectados y no obstruyan el flujo de
                  aire. Esto incluye cables de alimentación, cables SATA para
                  almacenamiento y cables de datos. Verificar que todo esté bien
                  organizado y que no interfiera con otros componentes es
                  necesario para el rendimiento del equipo.
                </p>
              </div>
            </AccordionRED>
          </div>
          <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
            <figure><img src="@/assets/curso/tema1/10.png" /></figure>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_1_3">1.3 Sistemas de refrigeración</h2>
      </div>
      <div class="col-xl-10 m-auto">
        <div class="titulo-sexto color-acento-contenido" data-aos="fade-down">
          <h5>Figura 1.</h5>
          <span>Clasificación de los sistemas de refrigeración</span>
        </div>
        <div class="p-4" style="background-color:#FBFBF9;border-radius:36px;">
          <div class="col-xl-8 m-auto col-lg-10">
            <figure data-aos="zoom-in">
              <img
                src="@/assets/curso/tema1/11.svg"
                alt="La Figura 1 se denomina «Sistemas de refrigeración» y presenta la clasificación, ya que cada tipo de refrigeración tiene características específicas."
              />
            </figure>
          </div>
        </div>
        <figcaption class="mt-3 fw-normal">
          <strong>Fuente:</strong> OIT, 2024.
        </figcaption>
      </div>
      <div class="row mt-5">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema1/12.svg" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <div class="p-4" style="background-color:#EBF6EA;border-radius:10px;">
            <p class="mb-0">
              Los sistemas de refrigeración mantienen la temperatura adecuada de
              los componentes y evitan el sobrecalentamiento, uno de los
              factores de mayor riesgo para el <em>hardware</em>. Los sistemas
              más comunes incluyen ventiladores, disipadores de calor y, en
              algunos casos, sistemas de enfriamiento líquido. Cada tipo de
              refrigeración tiene características específicas, y la elección de
              uno u otro depende del uso y configuración del equipo.
            </p>
          </div>
          <div class="row mt-4">
            <div class="col-md" style="place-self:center;">
              <p>
                En un mantenimiento preventivo, se revisan las condiciones de
                los ventiladores, incluyendo su nivel de ruido y acumulación de
                polvo. Es importante limpiar y verificar la rotación de los
                ventiladores para prevenir atascos y asegurar el flujo de aire
                continuo. En el caso de los disipadores de calor, se inspecciona
                que estén bien ajustados al procesador y a otros componentes
                críticos, ya que un contacto defectuoso puede reducir su
                efectividad. En sistemas con refrigeración líquida, se revisan
                las conexiones y posibles fugas, ya que cualquier escape de
                líquido puede dañar otros componentes.
              </p>
              <p class="mb-0">
                A continuación se encuentra la explicación de los componentes
                mencionados:
              </p>
            </div>
            <div
              class="col-md-auto d-none d-md-block"
              style="place-self:center;"
            >
              <figure><img src="@/assets/curso/tema1/13.svg" /></figure>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-10 m-auto mt-5">
        <TabsA class="color-acento-botones" data-aos="fade-up">
          <div
            class="tarjeta color-acento-botones p-4"
            titulo="Ventiladores"
            style="background-color:#EFE8F7;"
          >
            <div class="row">
              <div class="col-lg-8 mb-4 mb-lg-0" style="place-self:center;">
                <p>
                  Los ventiladores son usados para mantener la temperatura del
                  sistema bajo control. En el mantenimiento preventivo, se
                  revisan para detectar posibles acumulaciones de polvo que
                  puedan bloquear las aspas o interferir con su rotación.
                  Además, se evalúa el nivel de ruido, ya que un ventilador
                  ruidoso puede indicar desgaste o un mal funcionamiento. Se
                  limpia o reemplaza según sea necesario para asegurar un flujo
                  de aire adecuado.
                </p>
              </div>
              <div
                class="m-auto col-lg-4 col-12 col-md-7"
                style="place-self:center;"
              >
                <figure><img src="@/assets/curso/tema1/14.svg" /></figure>
              </div>
            </div>
          </div>
          <div
            class="tarjeta color-acento-botones p-4"
            titulo="Disipadores de calor"
            style="background-color:#EFE8F7;"
          >
            <div class="row">
              <div class="col-lg-8 mb-4 mb-lg-0" style="place-self:center;">
                <p>
                  Los disipadores de calor son críticos para extraer el calor
                  generado por los procesadores. En el mantenimiento, se
                  inspecciona que los disipadores estén bien adheridos al
                  procesador, ya que un mal contacto puede causar
                  sobrecalentamiento. También se revisa la pasta térmica que
                  cubre el procesador para asegurarse de que no esté seca o
                  deteriorada, lo que puede afectar la transferencia de calor.
                </p>
              </div>
              <div
                class="m-auto col-lg-4 col-12 col-md-7"
                style="place-self:center;"
              >
                <figure><img src="@/assets/curso/tema1/15.svg" /></figure>
              </div>
            </div>
          </div>
          <div
            class="tarjeta color-acento-botones p-4"
            titulo="Sistema de &lt;br&gt; refrigeración líquida"
            style="background-color:#EFE8F7;"
          >
            <div class="row">
              <div class="col-lg-8 mb-4 mb-lg-0" style="place-self:center;">
                <p>
                  En equipos con sistemas de refrigeración líquida, se realiza
                  una revisión de las conexiones de las mangueras y posibles
                  fugas. Cualquier fuga puede provocar daños en otros
                  componentes, como la <em>mainboard</em> o las tarjetas de
                  expansión. Además, se verifica el nivel del líquido
                  refrigerante y se realiza un mantenimiento preventivo para
                  evitar que el sistema pierda eficiencia.
                </p>
              </div>
              <div
                class="m-auto col-lg-4 col-12 col-md-7"
                style="place-self:center;"
              >
                <figure><img src="@/assets/curso/tema1/16.svg" /></figure>
              </div>
            </div>
          </div>
          <div
            class="tarjeta color-acento-botones p-4"
            titulo="Filtro de polvo &lt;br&gt; en ventiladores"
            style="background-color:#EFE8F7;"
          >
            <div class="row">
              <div class="col-lg-8 mb-4 mb-lg-0" style="place-self:center;">
                <p>
                  Los filtros de polvo en los ventiladores son fundamentales
                  para mantener el sistema libre de impurezas que podrían
                  afectar el flujo de aire. Durante el mantenimiento preventivo,
                  se retiran y limpian los filtros para garantizar que no se
                  acumulen partículas que obstruyan la ventilación. Los filtros
                  deben ser revisados periódicamente para asegurar que estén en
                  buen estado.
                </p>
              </div>
              <div
                class="m-auto col-lg-4 col-12 col-md-7"
                style="place-self:center;"
              >
                <figure><img src="@/assets/curso/tema1/17.svg" /></figure>
              </div>
            </div>
          </div>
          <div
            class="tarjeta color-acento-botones p-4"
            titulo="Comprobación de &lt;br&gt; la circulación &lt;br&gt; de aire"
            style="background-color:#EFE8F7;"
          >
            <div class="row">
              <div class="col-lg-8 mb-4 mb-lg-0" style="place-self:center;">
                <p>
                  Un mantenimiento preventivo incluye la comprobación del flujo
                  de aire en todo el equipo. Esto implica verificar que los
                  ventiladores estén alineados correctamente para crear un flujo
                  de aire eficiente, desde la entrada hasta la salida del
                  sistema. Asegurarse de que no haya cables o componentes
                  bloqueando el paso del aire para evitar el sobrecalentamiento
                  y mantener la estabilidad del sistema.
                </p>
              </div>
              <div
                class="m-auto col-lg-4 col-12 col-md-7"
                style="place-self:center;"
              >
                <figure><img src="@/assets/curso/tema1/18.svg" /></figure>
              </div>
            </div>
          </div>
        </TabsA>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema1',
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
