package tema4_ejercicioswitch;

import java.util.Scanner;

/**
 *
 * @author ismael
 */
public class Tema4_EjercicioSwitch {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Escribe una estación del año...");
        var estacion = sc.next();

        switch (estacion) {
            case "verano":
                System.out.println("Es verano.");
                break;
            case "invierno":
                System.out.println("Es invierno.");
                break;
            case "primavera":
                System.out.println("Es primavera.");
                break;
            case "otoño":
                System.out.println("Es otoño.");
                break;
            default:
                System.out.println("No es una estación");
        }
    }

}
