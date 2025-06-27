<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Documentación y control</h1>
      </div>
      <div class="row">
        <div class="col-lg" style="place-self:center;" data-aos="fade-right">
          <p class="mb-0">
            La documentación y el control son importantes en el mantenimiento
            preventivo de equipos de cómputo, ya que permiten mantener un
            registro detallado de la situación y evolución de cada equipo. Con
            esta información, es posible realizar un seguimiento continuo y
            prever futuras necesidades de mantenimiento. Además, contar con
            documentación precisa asegura una mejor organización y facilita la
            toma de decisiones basada en datos reales.
          </p>
        </div>
        <div
          class="col-lg-auto d-none d-lg-block"
          style="place-self:center;"
          data-aos="fade-left"
        >
          <figure><img src="@/assets/curso/tema4/1.svg" /></figure>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_4_1">4.1 Hojas de vida de equipos</h2>
      </div>
      <div class="row">
        <div class="col-lg" data-aos="fade-right">
          <p>
            Las hojas de vida de los equipos de cómputo son documentos en los
            que se registra la información técnica y el historial de
            mantenimiento de cada equipo. Estos documentos permiten a los
            técnicos acceder rápidamente a datos específicos sobre cada equipo,
            como su antigüedad, componentes, actualizaciones y eventos de
            mantenimiento anteriores.
          </p>
          <div class="p-4 mt-4" style="background-color:#E2F4F9;">
            <div class="row">
              <div class="col-md" style="place-self:center;">
                <p class="fw-bold">Función:</p>
                <ul class="lista-ul mb-0">
                  <li class="d-flex">
                    <i class="fas fa-check-circle" style="color:#73C8E2;"></i
                    ><span
                      >Facilitar el seguimiento del estado y rendimiento del
                      equipo a lo largo de su vida útil.</span
                    >
                  </li>
                  <li class="d-flex mb-0">
                    <i class="fas fa-check-circle" style="color:#73C8E2;"></i
                    ><span
                      >Documentar los mantenimientos realizados y detectar
                      patrones de fallas que permitan tomar decisiones sobre
                      reparaciones o reemplazos.</span
                    >
                  </li>
                </ul>
              </div>
              <div
                class="col-md-auto d-none d-md-block"
                style="place-self:center;"
              >
                <figure><img src="@/assets/curso/tema4/2.svg" /></figure>
              </div>
            </div>
          </div>
          <div class="p-4 mt-4" style="background-color:#EBF6EA;">
            <div class="row">
              <div class="col-md" style="place-self:center;">
                <p class="fw-bold">Características:</p>
                <ul class="lista-ul mb-0">
                  <li class="d-flex">
                    <i class="fas fa-check-circle" style="color:#3BA935;"></i
                    ><span
                      >Incluye información técnica del equipo (modelo, número de
                      serie, fecha de adquisición).</span
                    >
                  </li>
                  <li class="d-flex">
                    <i class="fas fa-check-circle" style="color:#3BA935;"></i
                    ><span
                      >Registra todas las intervenciones de mantenimiento y
                      reparaciones realizadas.</span
                    >
                  </li>
                  <li class="d-flex mb-0">
                    <i class="fas fa-check-circle" style="color:#3BA935;"></i
                    ><span
                      >Facilita la gestión del inventario y ayuda a calcular el
                      tiempo de vida estimado del equipo.</span
                    >
                  </li>
                </ul>
              </div>
              <div
                class="col-md-auto d-none d-md-block"
                style="place-self:center;"
              >
                <figure><img src="@/assets/curso/tema4/3.svg" /></figure>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema4/4.png" /></figure>
        </div>
      </div>
      <p class="mt-5" data-aos="fade-right">
        A continuación, se detallan los datos de un formulario de Hoja de vida
        de un equipo:
      </p>
      <div
        class="titulo-sexto color-acento-contenido mt-5"
        data-aos="fade-down"
      >
        <h5>Tabla 3.</h5>
        <span>Formulario Hoja de vida de un equipo</span>
      </div>
      <div class="tabla-a color-acento-contenido" data-aos="fade-up">
        <table>
          <caption class="mt-3 fw-normal">
            <strong>Fuente:</strong>
            OIT, 2024.
          </caption>
          <thead>
            <tr class="text-center" style="background-color:#EFE8F7;">
              <th style="width:35%;">Información general</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Número de serie:
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Modelo:
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Fabricante:
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Fecha de adquisición:
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Garantía (fecha de vencimiento):
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Ubicación:
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Componentes
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Procesador:
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Memoria RAM:
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Almacenamiento:
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Tarjeta gráfica:
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Fuente de poder:
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Historial de mantenimiento
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Fecha
              </td>
              <td style="border-left:0;"></td>
            </tr>
            <tr>
              <td
                class="fw-bold"
                style="background-color:#EBF6EA;border-right:0px;"
              >
                Comentarios adicionales
              </td>
              <td style="border-left:0;"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_4_2">4.2 Bitácoras de mantenimiento</h2>
      </div>
      <div class="row">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema4/5.png" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <p>
            Las bitácoras de mantenimiento son registros cronológicos de todas
            las acciones de mantenimiento realizadas en el equipo. A diferencia
            de las hojas de vida, que documentan el historial general del
            equipo, las bitácoras se centran en registrar cada sesión de
            mantenimiento con detalles específicos.
          </p>
          <div class="p-4 mt-4" style="background-color:#EFE8F7;">
            <div class="row">
              <div class="col-md" style="place-self:center;">
                <p class="fw-bold">Función:</p>
                <ul class="lista-ul mb-0">
                  <li class="d-flex">
                    <i class="fas fa-check-circle" style="color:#692CB7;"></i
                    ><span
                      >Llevar un registro detallado de cada intervención de
                      mantenimiento.</span
                    >
                  </li>
                  <li class="d-flex mb-0">
                    <i class="fas fa-check-circle" style="color:#692CB7;"></i
                    ><span
                      >Facilitar la comunicación entre técnicos al documentar
                      las acciones realizadas y observaciones.</span
                    >
                  </li>
                </ul>
              </div>
              <div
                class="col-md-auto d-none d-md-block"
                style="place-self:center;"
              >
                <figure><img src="@/assets/curso/tema4/6.svg" /></figure>
              </div>
            </div>
          </div>
          <div class="p-4 mt-4" style="background-color:#EBF6EA;">
            <div class="row">
              <div class="col-md" style="place-self:center;">
                <p class="fw-bold">Características:</p>
                <ul class="lista-ul mb-0">
                  <li class="d-flex">
                    <i class="fas fa-check-circle" style="color:#3BA935;"></i
                    ><span
                      >Incluyen fecha, tipo de mantenimiento, procedimientos
                      realizados y observaciones.</span
                    >
                  </li>
                  <li class="d-flex mb-0">
                    <i class="fas fa-check-circle" style="color:#3BA935;"></i
                    ><span
                      >Son documentos útiles para monitorear el rendimiento y
                      detectar tendencias de fallas o mejoras.</span
                    >
                  </li>
                </ul>
              </div>
              <div
                class="col-md-auto d-none d-md-block"
                style="place-self:center;"
              >
                <figure><img src="@/assets/curso/tema4/7.svg" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="mt-4" data-aos="fade-up">
        A continuación, se presentan tres ejemplos de bitácoras de
        mantenimiento:
      </p>
      <div class="row mt-5">
        <div class="col-lg-9" data-aos="zoom-in">
          <div class="cont_3_3 p-4 p-xl-5">
            <div class="tarjeta bg-white">
              <CarouselRED>
                <div class="row p-4 ps-5 pe-5">
                  <div class="col">
                    <h5 class="mb-4">Bitácora de Mantenimiento - Ejemplo 1</h5>
                    <p class="mb-0"><strong>Fecha:</strong> 05/11/2024</p>
                    <p class="mb-0"><strong>Equipo:</strong> PC de oficina</p>
                    <p class="mb-0">
                      <strong>Tipo de Mantenimiento:</strong> preventivo
                    </p>
                    <p class="mb-0">
                      <strong>Acciones realizadas:</strong> limpieza de
                      componentes internos, actualización de sistema operativo,
                      revisión de conexiones.
                    </p>
                    <p class="mb-0">
                      <strong>Observaciones:</strong> se detectó un ventilador
                      con exceso de ruido, reemplazo programado para el próximo
                      mantenimiento.
                    </p>
                    <p class="mb-0">
                      <strong>Técnico responsable:</strong> maría lópez
                    </p>
                  </div>
                  <div class="col-auto d-none d-md-block">
                    <figure><img src="@/assets/curso/tema4/8.svg" /></figure>
                  </div>
                </div>
                <div class="row p-4 ps-5 pe-5">
                  <div class="col">
                    <h5 class="mb-4">Bitácora de Mantenimiento - Ejemplo 2</h5>
                    <p class="mb-0"><strong>Fecha:</strong> 10/11/2024</p>
                    <p class="mb-0"><strong>Equipo:</strong> Laptop HP</p>
                    <p class="mb-0">
                      <strong>Tipo de Mantenimiento:</strong> correctivo
                    </p>
                    <p class="mb-0">
                      <strong>Acciones realizadas:</strong> sustitución de disco
                      duro, reinstalación de sistema operativo y recuperación de
                      datos.
                    </p>
                    <p class="mb-0">
                      <strong>Observaciones:</strong> disco duro anterior
                      presentaba fallos mecánicos; se recomienda implementar
                      copias de respaldo periódicas.
                    </p>
                    <p class="mb-0">
                      <strong>Técnico responsable:</strong> pedro gómez
                    </p>
                  </div>
                  <div class="col-auto d-none d-md-block">
                    <figure><img src="@/assets/curso/tema4/8.svg" /></figure>
                  </div>
                </div>
                <div class="row p-4 ps-5 pe-5">
                  <div class="col">
                    <h5 class="mb-4">Bitácora de Mantenimiento - Ejemplo 3</h5>
                    <p class="mb-0"><strong>Fecha:</strong> 15/11/2024</p>
                    <p class="mb-0"><strong>Equipo:</strong> servidor NAS</p>
                    <p class="mb-0">
                      <strong>Tipo de Mantenimiento:</strong> preventivo
                    </p>
                    <p class="mb-0">
                      <strong>Acciones realizadas:</strong> revisión de discos
                      RAID, actualización de <em>firmware</em>, verificación de
                      estado de fuente de poder.
                    </p>
                    <p class="mb-0">
                      <strong>Observaciones:</strong> sistema operativo
                      actualizado con éxito, se recomienda revisar los discos de
                      almacenamiento cada seis meses.
                    </p>
                    <p class="mb-0">
                      <strong>Técnico responsable:</strong> laura martínez
                    </p>
                  </div>
                  <div class="col-auto d-none d-md-block">
                    <figure><img src="@/assets/curso/tema4/8.svg" /></figure>
                  </div>
                </div>
              </CarouselRED>
            </div>
          </div>
        </div>
        <div
          class="col-lg-3 d-none d-lg-block p-relative"
          data-aos="fade-right"
        >
          <figure><img src="@/assets/curso/tema4/9.svg" /></figure>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_4_3">4.3 Indicadores de gestión</h2>
      </div>
      <p data-aos="fade-right">
        Los indicadores de gestión permiten evaluar el desempeño del
        mantenimiento y la eficacia de las acciones preventivas, garantizando
        así que los equipos de cómputo funcionen de manera eficiente.
      </p>
      <div class="col-xl-10 m-auto mt-5">
        <div class="titulo-sexto color-acento-contenido" data-aos="fade-down">
          <h5>Figura 2.</h5>
          <span>Indicadores de gestión</span>
        </div>
        <div class="p-4" style="background-color:#FBFBF9;border-radius:36px;">
          <div class="col-xl-8 m-auto col-lg-10">
            <figure data-aos="zoom-in">
              <img
                src="@/assets/curso/tema4/10.svg"
                alt="La Figura 2 se denomina «Indicadores de gestión» donde se incluyen las principales categorías cuya función es ayudar a tomar decisiones informadas y a optimizar los recursos."
              />
            </figure>
          </div>
        </div>
        <figcaption class="mt-3 fw-normal">
          <strong>Fuente:</strong> OIT, 2024.
        </figcaption>
      </div>
      <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
        <div class="row">
          <div class="col-auto pe-0">
            <figure><img src="@/assets/curso/tema2/1.svg" /></figure>
          </div>
          <div class="col ps-2" style="place-self:center;">
            <h3 class="mb-0 pe-4 text-white">Indicadores</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema4/11.png" /></figure>
        </div>
        <div class="col-lg" data-aos="zoom-in">
          <ol class="lista-ol--cuadro lista-ol--separador">
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold text-white">1</span>
              </div>
              <span
                ><strong
                  >Porcentaje de cumplimiento del mantenimiento
                  preventivo:</strong
                >
                mide la cantidad de mantenimientos preventivos realizados
                respecto al total programado.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold text-white">2</span>
              </div>
              <span
                ><strong>Tasa de fallas después del mantenimiento:</strong>
                calcula el porcentaje de equipos que presentan fallas después de
                una intervención de mantenimiento preventivo.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold text-white">3</span>
              </div>
              <span
                ><strong
                  >Tiempo promedio de resolución de mantenimiento
                  correctivo:</strong
                >
                mide el tiempo que tarda en completarse un mantenimiento
                correctivo, desde el reporte hasta la solución.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold text-white">4</span>
              </div>
              <span
                ><strong>Costo de mantenimiento por equipo:</strong> calcula el
                costo total de mantenimiento por cada equipo en un periodo
                determinado.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold text-white">5</span>
              </div>
              <span
                ><strong>Porcentaje de utilización del equipo:</strong> mide el
                tiempo en que un equipo está operativo en comparación con el
                tiempo total.</span
              >
            </li>
          </ol>
        </div>
      </div>
      <div class="row mt-lg-5">
        <div class="col-lg" data-aos="zoom-in">
          <ol class="lista-ol--cuadro lista-ol--separador">
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold text-white">6</span>
              </div>
              <span
                ><strong
                  >Número de mantenimientos preventivos por técnico:</strong
                >
                muestra la cantidad de mantenimientos realizados por cada
                técnico, permitiendo evaluar la eficiencia del personal.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold text-white">7</span>
              </div>
              <span
                ><strong>Frecuencia de fallas por componente:</strong>
                identifica cuáles componentes presentan mayor número de fallas,
                facilitando la toma de decisiones sobre sustituciones o
                actualizaciones.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold text-white">8</span>
              </div>
              <span
                ><strong>Índice de vida útil de los equipos:</strong> calcula el
                tiempo estimado de vida útil de cada equipo en base al historial
                de mantenimiento y uso.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold text-white">9</span>
              </div>
              <span
                ><strong>Tasa de cumplimiento de la garantía:</strong> mide
                cuántos equipos fallaron y fueron reemplazados o reparados
                dentro de su período de garantía.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold text-white">10</span>
              </div>
              <span
                ><strong>Nivel de satisfacción del cliente interno:</strong>
                evalúa la satisfacción de los usuarios internos con los tiempos
                de respuesta y el desempeño post-mantenimiento.</span
              >
            </li>
          </ol>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema4/12.svg" /></figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema4',
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
