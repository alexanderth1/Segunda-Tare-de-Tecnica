// Suma

function sumarNumero(a,b){
    return a + b;
}
const resultado = sumarNumero (3,5);
console.log("La suma de los numero es: " + resultado);

// Resta

function restarNumero(z,h){
    return z - h;
}
const res = restarNumero (10,5);
console.log("La resta de los numeros es: " + res);

//Multipliacion

function multiNumero(j,k){
    return j * k;
}
const multi = multiNumero(2,2)
console.log("La multiplicacion de los numero son: " + multi);


//Division

function divisionNumeros(f,n){
    return f / n;
}
const divisionResul = divisionNumeros(10,5);
console.log("la division de dos numeros es: "+ divisionResul)


// Modulo de dos numeros

function moduloNumero(m,n){
    return m % n;
}
const moduloresul = moduloNumero(10,3);
console.log("la division de dos numeros es: "+ moduloresul)

// Elevar un numero

function elevarCuadrado(num){
    return num ** 2;
}
const resulta = elevarCuadrado(4);
console.log("El cuadro es: " + resulta)

// Grados cel a Fah

function gradosCel(celcius){
    return (celcius*9/5) + 32;
}

const reg = gradosCel(25);
console.log("25 grados Celcius a Fahrenheit son: " + reg)

// Perimetro de un rectangulo

function perimetro(b,h){
    return 2 * (b + h);
}

const resulperi = perimetro(8,4)
console.log("El perimetro de una rectangulo es: " + resulperi)

// Par o impar 

function paroimpar(p){
    if(p % 2 == 0){
        return "Es par"
    }else{
        return "Es impar"
    }
}

const paroimpar12 = paroimpar();
console.log("El numero es: " + paroimpar12);


// mayor de 3 numeros

function Mayor(a,b,c){
    if(a>b && a>c){
        return "a"
    }else if(b>a && b>c){
        return "b"
    }else{
        return "c"
    }
}

const Mayor3 = Mayor(1,6,3);
console.log("El mayo de los numeros es: " + Mayor3)


// Mayor de dos numeros

function Dosnumeros(num1,num2){
    if(num1>num2){
        return (num1 + " Es mayor que " + num2)
    }else{
        return (num2 + " Es mayor que " + num1)
    }
}

const dm = Dosnumeros(6,3);
console.log(dm)

// Area de un Circulo

function areacirculo(t){
    ca = (Math.PI * t ** 2)
    return `El area de ${t}, es: ${ca.toFixed(2)}`
}
const ac = areacirculo(3)
console.log(ac)


// De km a millar

function kmamillas(k){
    pru = k * 0.621371;
    return `El kilmetraje de ${k}, es: ${pru.toFixed(2)} millas`
}

const km = kmamillas(5);
console.log(km)

// Nombre completo 

const Ncompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`;
};  
console.log(Ncompleto('Alex', 'Jimenex'));

// Letra "a" en una frase

let n = (n1) =>{
    return n1.includes("a")
}
console.log(n("juan"))


// cuantos elementos hay en un array 

let gf = ["Alex",16,17,"Jimenez",19,25]
let hn = (gf) => {
    return gf.filter(gf => typeof gf === 'number').length;
}

console.log(hn(gf));

// orden superios y aplicar a todos los elementos 

function apf(array, duplicar){
    return array.map(duplicar)
}

let array = [1,2,3,4]

function duplicar(numapf) {
    return numapf * 2
}

let resultado1 = apf(array,duplicar);
console.log(resultado1)


// funcion orden superior que filtre elementos array basandose en una condicion dada

function filtrar (o){
    return o % 2 == 0;
}

function su (ar,filtrar){
    return ar.filter(filtrar)
}

let ar = [1,2,3,4,5,6,7,8]
let respues = su(ar,filtrar);
console.log(respues)


// funcion de orden que retorne una nueva funcion

function incrementadora(incrementar){
    return function(numerooo){
        return numerooo + incrementar
    }
}

console.log(incrementadora(2)(5))

// Implementar una funcion que orden superior que tome dos funciones como argumentos

function fn1(w){
    return w ** 2
}

function fn2(ñ){
    return ñ / 2
}

function rs (fn1,fn2,numm){
    if (numm > 4){
        return fn1(numm)
    } else {
        return fn2(numm)
    }
}

let numm = 5
console.log(rs(fn1,fn2,numm))

// funcion de orden superior modificando un objeto

let persona = {
    nombre: "Alex",
    apellido: "Jimenez",
    edad: 19
}

console.log(persona)

function modificacion(persona,modificar){
    return {...persona,...modificar}
}

let modificar = {
    nombre: "Juan",
    edad: 34,
}

console.log(modificacion(persona,modificar))

// constructora de coche

function Coche(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}
  

const miCoche = new Coche('Hyunda', 'Sorento', 2022);
  
console.log(miCoche);

// constructora de libro

function libro(autor,libro,año){
    this.autor = autor;
    this.libro = libro;
    this.año = año;
}

const libronuevo = new libro ('Gaston Calderon', 'Armadura de un angel guardian', 2019)
console.log(libronuevo)

// . Implementa una función constructora que cree objetos "Usuario" con nombre, correo electronico y contraseña

function gmail(usuario,correo,contra){
    this.usuario = usuario;
    this.correo = correo;
    this.contra = contra;
}

const gmail1 = new gmail ('alex12','alex12@gmail.com','encebollado123')
console.log(gmail1)

//Escribe una función constructora para "Producto" con propiedades de nombre, precio y cantidad.

function producto(prod,precio,cantidad){
    this.prod = prod;
    this.precio = precio;
    this.cantidad = cantidad;
}

const product = new producto ('Coca cola','$1.00','2')
console.log(product)

// . Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre, matrícula y carrera.

function unemi (nombre,matricula,carrera){
    this.nombre = nombre;
    this.matricula = matricula;
    this.carrera = carrera;
}

const unem = new unemi ('Alex','Tercer Nivel','Ing.Software')
console.log(unem)

// Escribe una función recursiva para calcular el factorial de un número

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(6));

//Crea una función recursiva que sume todos los números hasta un número dado.

function sumahas(n) {
    if (n <= 0) {
      return 0;
    }
    return n + sumahas(n - 1);
}
  
console.log(sumahas(6))

// Implementa una función recursiva que encuentre el máximo común divisor

function mcd(a, b) {
    if (b === 0) {
      return a;
    }
    return mcd(b, a % b);
}
  
console.log(mcd(23, 9));


//

function fibonacci(n, a = 0, b = 1) {
    if (a > n) return;
    console.log(a);
    fibonacci(n, b, a + b);
}
  
fibonacci(10);