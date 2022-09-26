package tema9_ejercicioherencia;

/**
 * @author ismael
 */
public class Tema9_EjercicioHerencia {

    public static void main(String[] args) {
        Cliente cliente1 = new Cliente();

        cliente1.setEdad(25);

        cliente1.setNombre("Demetrio");

        cliente1.setTelefono("+00658254257");

        cliente1.setCredito(2499.99);

        System.out.println("Hemos creado a " + cliente1.getNombre() + " que tiene " + cliente1.getEdad()
                + " años de edad, su teléfono es " + cliente1.getTelefono() + ", y tiene un credito de " + cliente1.getCredito() + " €.");

        Trabajador trabajador1 = new Trabajador();

        trabajador1.setEdad(31);

        trabajador1.setNombre("Ataulfo");

        trabajador1.setTelefono("+00875241975");

        trabajador1.setSalario(1358.267);

        System.out.println("Hemos creado a " + trabajador1.getNombre() + " que tiene " + trabajador1.getEdad()
                + " años de edad, su teléfono es " + trabajador1.getTelefono() + ", y tiene un salario de " + trabajador1.getSalario() + " €.");
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

class Cliente extends Persona {

    private double credito;

    public void setCredito(double credito) {
        this.credito = credito;
    }

    public double getCredito() {
        return this.credito;
    }
}

class Trabajador extends Persona {

    private double salario;

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public double getSalario() {
        return this.salario;
    }
}
