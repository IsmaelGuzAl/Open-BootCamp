package tema4_ejercicioif;

import java.util.Scanner;

/**
 *
 * @author ismael
 */
public class Tema4_EjercicioIf {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Introduce un número:");
        int numeroif = sc.nextInt();

        if (numeroif > 0) {
            System.out.println("El número es positivo");
        } else if (numeroif < 0) {
            System.out.println("El número es negativo");
        } else {
            System.out.println("El número es 0");
        }
    }
}
