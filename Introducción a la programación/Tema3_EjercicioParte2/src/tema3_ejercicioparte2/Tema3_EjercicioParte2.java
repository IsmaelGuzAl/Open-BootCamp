package tema3_ejercicioparte2;

/**
 *
 * @author ismael
 */
public class Tema3_EjercicioParte2 {

    public static void main(String[] args) {
        Coche miCoche = new Coche();
        miCoche.AñadirPuerta();
        miCoche.AñadirPuerta();
        miCoche.AñadirPuerta();
        miCoche.AñadirPuerta();
        System.out.println(miCoche.puertas);
    }
}

class Coche {

    public int puertas = 0;

    public void AñadirPuerta() {
        this.puertas++;
    }
}
