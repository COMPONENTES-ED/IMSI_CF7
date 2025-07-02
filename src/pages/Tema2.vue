<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Procedimientos de mantenimiento preventivo</h1>
      </div>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_1">2.1 Protocolos de limpieza y conservación</h2>
      </div>
      <p data-aos="fade-right">
        La limpieza y conservación de los equipos de cómputo son pasos
        fundamentales en el mantenimiento preventivo. Este proceso incluye la
        limpieza interna y externa de los dispositivos, la eliminación de polvo
        y la revisión de los componentes para garantizar su funcionamiento
        óptimo.
      </p>
      <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
        <div class="row">
          <div class="col-auto pe-0">
            <figure><img src="@/assets/curso/tema2/1.svg" /></figure>
          </div>
          <div class="col ps-2" style="place-self:center;">
            <h3 class="mb-0 pe-4 text-white">
              Paso a paso para la limpieza y conservación del equipo
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema2/2.png" /></figure>
        </div>
        <div class="col-lg" data-aos="zoom-in">
          <ol class="lista-ol--cuadro lista-ol--separador">
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold">1</span>
              </div>
              <span
                ><strong
                  >Apagar el equipo y desconectar todos los cables:</strong
                >
                antes de realizar cualquier tipo de mantenimiento, debe apagar
                el equipo y desconectar todos los cables (fuente de poder,
                periféricos, etc.) para evitar daños eléctricos o
                cortocircuitos.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold">2</span>
              </div>
              <span
                ><strong>Abrir el gabinete:</strong> desmontar el gabinete del
                equipo con cuidado, verificando que no haya piezas sueltas. Este
                paso es básico para acceder a los componentes internos.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold">3</span>
              </div>
              <span
                ><strong>Limpieza externa del equipo:</strong> usar un paño
                suave y ligeramente húmedo para limpiar el polvo y suciedad de
                la carcasa del equipo, la pantalla y los periféricos. Evitar el
                uso de productos químicos agresivos que puedan dañar la
                superficie.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold">4</span>
              </div>
              <span
                ><strong
                  >Uso de aire comprimido para limpiar el polvo interno:</strong
                >
                utilizar un bote de aire comprimido para eliminar el polvo
                acumulado dentro del gabinete, especialmente en la
                <em>mainboard</em>, tarjetas de expansión y en las áreas
                cercanas a los ventiladores. Es recomendable hacerlo a una
                distancia segura para evitar dañar los componentes.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold">5</span>
              </div>
              <span
                ><strong>Limpieza de los ventiladores:</strong> el polvo en los
                ventiladores puede afectar su funcionamiento. Usar aire
                comprimido para deshacerse del polvo y asegurarse de que las
                aspas giren libremente. Si es necesario, se puede retirar el
                ventilador para una limpieza más exhaustiva.</span
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
                <span class="fw-bold">6</span>
              </div>
              <span
                ><strong
                  >Verificación y limpieza de puertos y ranuras de
                  expansión:</strong
                >
                limpiar los puertos USB, HDMI, y ranuras de expansión con un
                cepillo de cerdas suaves o aire comprimido para garantizar que
                no haya polvo que impida una buena conexión.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold">7</span>
              </div>
              <span
                ><strong>Revisión de la fuente de poder:</strong> inspeccionar
                la fuente de poder y limpiar los filtros de polvo si los tiene.
                Es importante asegurarse de que el ventilador de la fuente esté
                funcionando correctamente y libre de obstrucciones.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold">8</span>
              </div>
              <span
                ><strong>Reemplazo de pasta térmica (si es necesario):</strong>
                si se nota sobrecalentamiento en el procesador o la temperatura
                es elevada, limpiar la pasta térmica vieja y aplicar una nueva
                capa para mejorar la transferencia de calor entre el procesador
                y el disipador.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold">9</span>
              </div>
              <span
                ><strong>Revisión de cables internos:</strong> verificar que los
                cables internos estén organizados y no bloqueen el flujo de
                aire. Si es necesario, realizar una limpieza suave y asegurarse
                de que las conexiones estén firmemente insertadas.</span
              >
            </li>
            <li class="d-flex">
              <div class="lista-ol--cuadro__vineta">
                <span class="fw-bold">10</span>
              </div>
              <span
                ><strong>Cierre del gabinete y encendido del equipo:</strong>
                una vez terminada la limpieza, volver a montar el gabinete,
                conectar los cables y encender el equipo para verificar que todo
                funcione correctamente.</span
              >
            </li>
          </ol>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema2/3.png" /></figure>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_2">2.2 Lubricación de partes móviles</h2>
      </div>
      <p data-aos="fade-right">
        La lubricación de partes móviles es un procedimiento preventivo para
        mantener el funcionamiento adecuado de los equipos. Las partes que
        suelen necesitar lubricación son los ventiladores, discos duros,
        impresoras y otros mecanismos que implican movimiento.
      </p>
      <div class="titulo-sexto color-acento-contenido" data-aos="fade-down">
        <h5>Tabla 1.</h5>
        <span>Proceso para la lubricación de partes móviles</span>
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
                Elemento <br />
                a lubricar
              </th>
              <th>¿Cómo realizarlo?</th>
              <th>¿Con qué realizarlo?</th>
              <th>¿Cómo prevenir su daño?</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr>
              <td class="p-3 fw-bold" style="background-color:#EBF6EA;">
                Ventiladores (CPU, PSU, etc.)
              </td>
              <td class="p-3">
                <p class="mb-0">1. Apagar y desconectar el equipo.</p>
                <p class="mb-0">
                  2. Retirar el polvo y suciedad del ventilador con aire
                  comprimido.
                </p>
                <p class="mb-0">
                  3. Aplicar lubricante en el eje del ventilador sin excederse.
                </p>
              </td>
              <td class="p-3">
                Lubricante en aerosol para rodamientos de ventiladores.
              </td>
              <td class="p-3">
                <p class="mb-0">
                  Limpiar regularmente el ventilador con aire comprimido.
                </p>
                <p class="mb-0">
                  No permitir que el polvo se acumule sobre las aspas o el
                  motor.
                </p>
              </td>
            </tr>
            <tr>
              <td class="p-3 fw-bold" style="background-color:#EBF6EA;">
                Discos Duros (HDD)
              </td>
              <td class="p-3">
                <p class="mb-0">1. Apagar el equipo y desconectar.</p>
                <p class="mb-0">
                  2. Retirar la tapa del disco duro (si es posible y recomendado
                  por el fabricante).
                </p>
                <p class="mb-0">
                  3. Aplicar una gota pequeña de lubricante en el eje.
                </p>
              </td>
              <td class="p-3">
                Aceite fino o lubricante especial para discos duros, como aceite
                de silicona.
              </td>
              <td class="p-3">
                <p class="mb-0">No aplicar exceso de lubricante.</p>
                <p class="mb-0">
                  No permitir que el polvo entre al disco duro.
                </p>
              </td>
            </tr>
            <tr>
              <td class="p-3 fw-bold" style="background-color:#EBF6EA;">
                Bandejas de CD/DVD
              </td>
              <td class="p-3">
                <p class="mb-0">1. Apagar el equipo y desconectar.</p>
                <p class="mb-0">
                  2. Limpiar la bandeja con un paño seco y suave.
                </p>
                <p class="mb-0">
                  3. Lubricar suavemente el mecanismo de apertura/cierre con una
                  pequeña cantidad de grasa.
                </p>
              </td>
              <td class="p-3">
                Grasa especial para mecanismos de bandejas o aceites finos para
                movimiento.
              </td>
              <td class="p-3">
                <p class="mb-0">
                  Evitar el uso excesivo de grasa que atraiga polvo.
                </p>
                <p class="mb-0">
                  Limpiar los mecanismos regularmente para evitar la obstrucción
                  del mecanismo de la bandeja.
                </p>
              </td>
            </tr>
            <tr>
              <td class="p-3 fw-bold" style="background-color:#EBF6EA;">
                Impresoras (Rodillos y mecanismos)
              </td>
              <td class="p-3">
                <p class="mb-0">1. Apagar y desconectar la impresora.</p>
                <p class="mb-0">
                  2. Limpiar los rodillos y mecanismos de alimentación de papel
                  con aire comprimido.
                </p>
                <p class="mb-0">
                  3. Lubricar suavemente los rodillos con aceite fino.
                </p>
              </td>
              <td class="p-3">
                Aceite fino para impresoras o lubricante para rodillos de
                caucho.
              </td>
              <td class="p-3">
                <p class="mb-0">Evitar que se acumule tinta en los rodillos.</p>
                <p class="mb-0">
                  Limpiar y lubricar periódicamente para asegurar un
                  funcionamiento suave del mecanismo de alimentación de papel.
                </p>
              </td>
            </tr>
            <tr>
              <td class="p-3 fw-bold" style="background-color:#EBF6EA;">
                Mecanismos de escáner (Motores y ejes)
              </td>
              <td class="p-3">
                <p class="mb-0">1. Apagar y desconectar el escáner.</p>
                <p class="mb-0">
                  2. Limpiar el polvo y suciedad con aire comprimido.
                </p>
                <p class="mb-0">
                  3. Aplicar una gota de lubricante sobre los ejes y los
                  motores, si es necesario.
                </p>
              </td>
              <td class="p-3">
                Aceite de silicona o lubricante para mecanismos electrónicos.
              </td>
              <td class="p-3">
                <p class="mb-0">Evitar la sobreaplicación de lubricante.</p>
                <p class="mb-0">
                  Limpiar regularmente el área de escaneo y los ejes para
                  prevenir la acumulación de polvo y suciedad que interfiera con
                  el motor.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_3">2.3 Diagnóstico preliminar</h2>
      </div>
      <p data-aos="fade-left">
        El diagnóstico preliminar es una parte fundamental del mantenimiento
        preventivo. Permite identificar problemas potenciales antes de que se
        conviertan en fallas graves, ayudando a ahorrar tiempo y dinero en
        reparaciones.
      </p>
      <div class="cont_decorativo mb-4 mt-5" data-aos="fade-right">
        <div class="row">
          <div class="col-auto pe-0">
            <figure><img src="@/assets/curso/tema2/1.svg" /></figure>
          </div>
          <div class="col ps-2" style="place-self:center;">
            <h3 class="mb-0 pe-4 text-white">
              Paso a paso para el diagnóstico preliminar:
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg" data-aos="zoom-in">
          <ol class="lista-ol--cuadro lista-ol--separador">
            <li class="d-flex">
              <div
                class="lista-ol--cuadro__vineta"
                style="background-color:#73C8E2;"
              >
                <span class="fw-bold text-white">1</span>
              </div>
              <span
                ><strong>Verificación visual:</strong> comenzar con una
                inspección visual general del equipo. Buscar señales evidentes
                de daño físico, como cables desconectados, piezas sueltas o
                componentes quemados.</span
              >
            </li>
            <li class="d-flex">
              <div
                class="lista-ol--cuadro__vineta"
                style="background-color:#73C8E2;"
              >
                <span class="fw-bold text-white">2</span>
              </div>
              <span
                ><strong>Comprobación del encendido:</strong> encender el equipo
                para observar si arranca correctamente. Si el equipo no
                enciende, verificar la fuente de poder y los cables de
                conexión.</span
              >
            </li>
            <li class="d-flex">
              <div
                class="lista-ol--cuadro__vineta"
                style="background-color:#73C8E2;"
              >
                <span class="fw-bold text-white">3</span>
              </div>
              <span
                ><strong>Revisión de pantallas y monitores:</strong> asegurarse
                de que el monitor esté funcionando correctamente. Si se detecta
                que la pantalla no muestra nada o presenta imágenes
                distorsionadas, se debe revisar la tarjeta gráfica o los cables
                de conexión.</span
              >
            </li>
            <li class="d-flex">
              <div
                class="lista-ol--cuadro__vineta"
                style="background-color:#73C8E2;"
              >
                <span class="fw-bold text-white">4</span>
              </div>
              <span
                ><strong>Comprobación de sonidos extraños:</strong> escuchar si
                el equipo emite ruidos inusuales. Los ventiladores, discos duros
                o la fuente de poder pueden generar ruidos cuando están dañados.
                Esto puede indicar la necesidad de lubricación o reemplazo de
                componentes.</span
              >
            </li>
            <li class="d-flex">
              <div
                class="lista-ol--cuadro__vineta"
                style="background-color:#73C8E2;"
              >
                <span class="fw-bold text-white">5</span>
              </div>
              <span
                ><strong>Verificación de temperatura:</strong> usar
                <em>software</em> para monitorear las temperaturas del
                procesador, tarjeta gráfica y otros componentes críticos.
                Temperaturas elevadas pueden ser un signo de fallas en los
                sistemas de refrigeración.</span
              >
            </li>
          </ol>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema2/4.png" /></figure>
        </div>
      </div>
      <div class="row mt-lg-5">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema2/5.svg" /></figure>
        </div>
        <div class="col-lg" data-aos="zoom-in">
          <ol class="lista-ol--cuadro lista-ol--separador">
            <li class="d-flex">
              <div
                class="lista-ol--cuadro__vineta"
                style="background-color:#73C8E2;"
              >
                <span class="fw-bold text-white">6</span>
              </div>
              <span
                ><strong>Revisión de <em>software</em>:</strong> comprobar que
                el sistema operativo esté funcionando correctamente. Verificar
                que no haya mensajes de error o fallas en la carga de
                aplicaciones. Actualizar drivers y verificar la integridad del
                sistema operativo.</span
              >
            </li>
            <li class="d-flex">
              <div
                class="lista-ol--cuadro__vineta"
                style="background-color:#73C8E2;"
              >
                <span class="fw-bold text-white">7</span>
              </div>
              <span
                ><strong>Comprobación de la RAM:</strong> ejecutar un
                diagnóstico de memoria (utilizando herramientas como Memtest86)
                para asegurarse de que no haya fallas en los módulos de RAM que
                puedan afectar el rendimiento.</span
              >
            </li>
            <li class="d-flex">
              <div
                class="lista-ol--cuadro__vineta"
                style="background-color:#73C8E2;"
              >
                <span class="fw-bold text-white">8</span>
              </div>
              <span
                ><strong>Verificación de la fuente de poder:</strong> usar un
                <em>tester</em> de fuente de poder para comprobar que está
                suministrando los voltajes correctos a los componentes del
                sistema. Si se detectan fallas, la fuente de poder debe ser
                reemplazada.</span
              >
            </li>
            <li class="d-flex">
              <div
                class="lista-ol--cuadro__vineta"
                style="background-color:#73C8E2;"
              >
                <span class="fw-bold text-white">9</span>
              </div>
              <span
                ><strong>Revisión de los discos de almacenamiento:</strong>
                utilizar <em>software</em> para verificar la salud de los discos
                duros o unidades SSD. Buscar sectores defectuosos y realizar una
                copia de seguridad de los datos importantes antes de que se
                produzca una falla mayor.</span
              >
            </li>
            <li class="d-flex">
              <div
                class="lista-ol--cuadro__vineta"
                style="background-color:#73C8E2;"
              >
                <span class="fw-bold text-white">10</span>
              </div>
              <span
                ><strong>Revisión de los puertos y conectores:</strong>
                comprobar todos los puertos de entrada/salida (USB, HDMI, audio,
                etc.) para asegurarse de que no estén dañados. Probar la
                conexión de dispositivos periféricos para verificar que
                funcionen correctamente.</span
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tema2',
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
