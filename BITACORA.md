#Bitácora técnica
## 06 de octubre
- ret-moderno: Auditoría IA
No veo ninguna función que haya dejado de usar sintaxis moderna ni ningún cambio de comportamiento evidente. Las funciones mantienen un enfoque moderno y, en particular:

fullName: usa destructuring de parámetros y arrow function. Correcta.
priceWithTax: arrow function y constante para el impuesto. Correcta.
greet: usa parámetro por defecto (name = "invitado"). Correcta.
getCoords: usa destructuring de arrays. Correcta.
productLabel: usa destructuring y toFixed(2). No veo cambio de comportamiento.
mergeSettings: usa spread de objetos (...defaults, ...custom). Mantiene el comportamiento de combinar configuraciones, dando prioridad a custom.
sumAll: usa rest parameters (...numeros) y reduce. Mantiene el comportamiento de sumar cualquier cantidad de números.
copyList: usa spread de arrays para crear una copia superficial. Correcta.
addItem: también usa spread y, por tanto, no modifica list; devuelve un nuevo array. Esto coincide con la comprobación que haces en tu código principal.
describeRoom: usa destructuring y arrow function. Correcta.
nightsTotal: usa destructuring, parámetro por defecto (discount = 0) y const. El cálculo conserva el comportamiento esperado: aplica el porcentaje de descuento después de calcular el subtotal.
Conclusión
Ninguna de las funciones parece haber cambiado su comportamiento ni necesita ser considerada “no moderna”. De hecho, el archivo utiliza precisamente las características modernas que normalmente se buscan en este tipo de ejercicio: const, export, arrow functions, destructuring, parámetros por defecto, rest, spread y reduce.

El único detalle que podría considerarse una cuestión de estilo, no un error, es price + price * TAX: podría expresarse de otras formas, pero no significa que hayas cambiado el comportamiento ni que la sintaxis sea antigua.

## Preguntas: 

1. ¿Cuándo usas let en lugar de const?
Cuando una variable tendrá que ser cambiada más adelante.
2. ¿Qué hace git add . y en qué se diferencia de git commit?
La diferencia es que git add ., solo toma los archivos que fueron modificados y los prepara y git commit guarda esos archivos de forma local con un mensaje.
3. ¿Qué imprime const { a, ...resto } = { a: 1, b: 2, c: 3 }; console.log(resto);?
Imprime el objeto { b: 2, c: 3 }.
4. ¿Por qué [...lista, nuevo] es mejor que lista.push(nuevo) cuando trabajemos con React?
Porque crea un nuevo array sin modificar el original, lo cual permite que React detecte los cambios correctamente.
5. ¿Qué prefijo de commit usarías para corregir un error en el cálculo del IVA?
El prefijo fix: , porque sirve para indicar que se solucionó un error.

## Ideas principales
1. Me costó al momento de ejecutar los archivos, ya que había pasado por alto que los había puesto dentro y dentro de una carpeta.
2. Cuando intente hacer push no me dejo y era porque no le había asignado un usuario con el cual hacer el cambio.
3. Finalmente con el reto-moderno, lo que me costó fue adaptar aunque con las guías fue un poco más entendible.