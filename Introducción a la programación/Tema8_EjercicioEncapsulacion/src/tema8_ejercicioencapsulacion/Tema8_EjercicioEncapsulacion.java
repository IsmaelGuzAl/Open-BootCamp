package tema8_ejercicioencapsulacion;

/**
 * @author ismael
 */
public class Tema8_EjercicioEncapsulacion {

    public static void main(String[] args) {
        Persona persona1 = new Persona();

        persona1.setEdad(38);

        persona1.setNombre("Rigoberto");

        persona1.setTelefono("+00555697251");

        System.out.println("Hemos creado a " + persona1.getNombre() + " que tiene " + persona1.getEdad()
                + " años de edad y su teléfono es " + persona1.getTelefono());

    }

}

class Persona {

    private int edad;
    private String nombre;
    private String telefono;

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getEdad() {
        return this.edad;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getTelefono() {
        return this.telefono;
    }
}
