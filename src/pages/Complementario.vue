<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: '1.  Arquitectura de <em>hardware</em>',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021, junio 21). <em>Componentes de una arquitectura de software</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=XrjY2iOVR8o ',
        },
        {
          tema: '2.  Procedimientos de mantenimiento preventivo',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 25). <em>Mantenimiento correctivo, de reparación y de procedimientos técnicos.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=HfxFfxQT2UU ',
        },
        {
          tema: '3. Herramientas y equipos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 23). Elementos de protección personal.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=Oo-DlGcp3fY ',
        },
        {
          tema: '3. Herramientas y equipos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023f, octubre 17). <em>Limpieza de un equipo de computo.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=snFq6dWGiWk',
        },
        {
          tema: '4. Documentación y control',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, octubre 4). <em>Gestión de equipos informáticos.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=dJ0rNne1xuY ',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
