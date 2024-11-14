
export default class Actor {

    constructor({ name, gender, skinColor, homeWorld, height }) {
        this.nombre = name;
        this.genero = gender;
        this.color = skinColor;
        this.mundo = homeWorld;
        this.altura = height;
    }

    /**
     * Validar si el genero ingresado es correcto
     */
    validateGender() {

        try {
            if (!(this.getGenres().includes(this.genero))) {
                throw new Error('Ingresar un género válido.');
            }
        } catch (error) {
            throw error;
        }

    }

    /**
     * Validar si la altura es la mínima permitida
     */
    validateHeight() {
        try {

            if (this.altura < 175) {
                throw new Error('El actor al menos debe de medir 175 cm.');
            }

        } catch (error) {
            throw error;
        }
    }

    validateActor() {

        try {
            this.validateHeight();
            this.validateGender();
        } catch (error) {
            console.error('Ocurrió un error al crear el actor: ', error.message);
            throw error;
        }

    }

    /**
     * 
     * @returns generos permitidos
     */
    getGenres() {
        return ['male', 'female']
    }
}

