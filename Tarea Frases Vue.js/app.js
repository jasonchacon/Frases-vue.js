new Vue({
    el: '#app',
    data: {
      frases: Vue.observable([
        { texto: 'Uno está enamorado cuando se da cuenta de que otra persona es única.', autor: 'Jorge Luis Borges' },
        { texto: 'La soledad es el hecho más profundo de la condición humana.', autor: 'Octavio Paz' },
        { texto: 'Podrán cortar todas las flores, pero no podrán detener la primavera', autor: 'Pablo Neruda' },
        { texto: 'Ninguna persona merece tus lágrimas, y quien las merezca no te hará llorar.', autor: 'Gabriel García Márquez' },
        { texto: 'Lo único que me duele de morir, es que no sea de amor.', autor: 'Gabriel García Márquez' }
      ]),
      nuevaFrase: '',
      nuevoAutor: '',
      ubicacionSeleccionada: 'arriba',
      estaEditando: false,
      indiceEditar: null
    },
    computed: {
      contadorFrases() {
        return this.frases.length;
      }
    },
    methods: {
      agregarOEditarFrase() {
        if (this.nuevaFrase.trim() !== '' && this.nuevoAutor.trim() !== '') {
          const nuevaEntrada = { texto: this.nuevaFrase, autor: this.nuevoAutor };
          if (this.estaEditando) {
            Vue.set(this.frases, this.indiceEditar, nuevaEntrada);
            this.estaEditando = false;
            this.indiceEditar = null;
          } else {
            if (this.ubicacionSeleccionada === 'arriba') {
              this.frases.unshift(nuevaEntrada);
            } else if (this.ubicacionSeleccionada === 'abajo') {
              this.frases.push(nuevaEntrada);
            }
          }
          this.nuevaFrase = '';
          this.nuevoAutor = '';
        }
      },
      editarFrase(index) {
        this.nuevaFrase = this.frases[index].texto;
        this.nuevoAutor = this.frases[index].autor;
        this.ubicacionSeleccionada = 'abajo'; // Esto no tiene efecto en la edición
        this.estaEditando = true;
        this.indiceEditar = index;
      },
      eliminarFrase(index) {
        this.frases.splice(index, 1);
      }
    }
  });
  