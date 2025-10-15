

// Test 1.1: Declaración con inicialización
const test_1_1_declarations_with_init = `
declare x: i = 10;
declare y: f = 3.14;
declare name: s = "Alice";
declare active: b = true;
show(x);
show(y);
show(name);
show(active);
`;
// Esperado: 10, 3.14, Alice, true

// Test 1.2: Declaración sin inicialización (valores por defecto)
const test_1_2_declarations_default_values = `
declare a: i;
declare r: f;
declare c: s;
declare d: b;
show(a);
show(r);
show(c);
show(d);
`;
// Esperado: 0, 0, "", false

// Test 1.3: Tipos nullable
const test_1_3_nullable_types = `
declare x: i? = null;
declare y: s? = "Hello";
show(x);
show(y);
`;
// Esperado: null, Hello

// Test 2.1: Asignación básica
const test_2_1_basic_assignment = `
declare x: i = 5;
set x = 10;
show(x);
`;
// Esperado: 10

// Test 2.2: Asignación con expresión
const test_2_2_assignment_with_expression = `
declare a: i = 5;
declare r: i = 3;
set a = a + r * 2;
show(a);
`;
// Esperado: 11

// Test 2.3: ERROR - Variable no declarada
const test_2_3_error_undeclared_variable = `
set x = 10;
`;
// Esperado: Error: Variable 'x' no está declarada

// Test 3.1: Operaciones básicas
const test_3_1_basic_arithmetic = `
declare x: i = 10;
declare y: i = 3;
show(x + y);
show(x - y);
show(x * y);
show(x / y);
show(x % y);
`;
// Esperado: 13, 7, 30, 3.333..., 1

// Test 3.2: Precedencia de operadores
const test_3_2_operator_precedence = `
declare result: i = 2 + 3 * 4;
show(result);
declare result2: i = (2 + 3) * 4;
show(result2);
`;
// Esperado: 14, 20

// Test 3.3: ERROR - División por cero
const test_3_3_error_division_by_zero = `
declare x: i = 10;
declare y: i = 0;
show(x / y);
`;
// Esperado: Error: División por cero

// Test 4.1: Concatenación de strings
const test_4_1_string_concatenation = `
declare first: s = "Hello";
declare second: s = " World";
show(first + second);
`;
// Esperado: Hello World

// Test 4.2: Concatenación mixta
const test_4_2_mixed_concatenation = `
declare name: s = "Alice";
declare age: i = 25;
show(name + " is ");
`;
// Esperado: Alice is

// Test 5.1: Comparaciones numéricas
const test_5_1_numeric_comparisons = `
declare a: i = 10;
declare r: i = 5;
show(a > r);
show(a < r);
show(a >= 10);
show(a <= 5);
`;
// Esperado: true, false, true, false

// Test 5.2: Igualdad y desigualdad
const test_5_2_equality = `
declare x: i = 5;
declare y: i = 5;
declare z: i = 3;
show(x == y);
show(x != z);
show(x == z);
`;
// Esperado: true, true, false

// Test 6.1: AND lógico (con palabra 'and')
const test_6_1_logical_and = `
declare a: b = true;
declare r: b = false;
show(a and a);
show(a and r);
show(r and r);
`;
// Esperado: true, false, false

// Test 6.2: OR lógico (con palabra 'or')
const test_6_2_logical_or = `
declare a: b = true;
declare r: b = false;
show(a or r);
show(r or r);
show(a or a);
`;
// Esperado: true, false, true

// Test 6.3: NOT lógico (con palabra 'not')
const test_6_3_logical_not = `
declare a: b = true;
show(not a);
show(not false);
`;
// Esperado: false, true

// Test 7.1: Negación numérica
const test_7_1_numeric_negation = `
declare x: i = 10;
show(-x);
show(-(-x));
`;
// Esperado: -10, 10

// Test 8.1: If simple
const test_8_1_if_simple = `
declare x: i = 10;
check (x > 5) {
    show("x es mayor que 5");
}
`;
// Esperado: x es mayor que 5

// Test 8.2: If-else
const test_8_2_if_else = `
declare x: i = 3;
check (x > 5) {
    show("Mayor");
} otherwise {
    show("Menor o igual");
}
`;
// Esperado: Menor o igual

// Test 8.3: If anidados
const test_8_3_nested_if = `
declare x: i = 15;
check (x > 10) {
    check (x > 20) {
        show("Mayor que 20");
    } otherwise {
        show("Entre 10 y 20");
    }
}
`;
// Esperado: Entre 10 y 20

// Test 9.1: While básico
const test_9_1_while_basic = `
declare idx: i = 0;
repeat (idx < 5) {
    show(idx);
    set idx = idx + 1;
}
`;
// Esperado: 0, 1, 2, 3, 4

// Test 9.2: While con condición falsa desde el inicio
const test_9_2_while_false_condition = `
declare x: i = 10;
repeat (x < 5) {
    show("Esto no se imprime");
}
show("Fin");
`;
// Esperado: Fin

// Test 10.1: For básico
const test_10_1_for_basic = `
loop (declare idx: i = 0; idx < 5; set idx = idx + 1;) {
    show(idx);
}
`;
// Esperado: 0, 1, 2, 3, 4

// Test 10.2: For con step diferente
const test_10_2_for_custom_step = `
loop (declare idx: i = 0; idx < 10; set idx = idx + 2;) {
    show(idx);
}
`;
// Esperado: 0, 2, 4, 6, 8

// Test 10.3: For sin inicialización
const test_10_3_for_no_init = `
declare x: i = 0;
loop (; x < 3; set x = x + 1) {
    show(x);
}
`;
// Esperado: 0, 1, 2

// Test 11.1: Función simple sin parámetros
const test_11_1_function_no_params = `
func greet(): s {
    give "Hello!";
}

show(greet());
`;
// Esperado: Hello!

// Test 11.2: Función con parámetros
const test_11_2_function_with_params = `
func add(a: i, r: i): i {
    give a + r;
}

declare result: i = add(3, 7);
show(result);
`;
// Esperado: 10

// Test 11.3: Función con múltiples parámetros
const test_11_3_function_multiple_params = `
func multiply(x: i, y: i, z: i): i {
    give x * y * z;
}

show(multiply(2, 3, 4));
`;
// Esperado: 24

// Test 11.4: Función recursiva (factorial)
const test_11_4_recursive_factorial = `
func factorial(n: i): i {
    check (n <= 1) {
        give 1;
    }
    give n * factorial(n - 1);
}

show(factorial(5));
`;
// Esperado: 120

// Test 11.5: ERROR - Número incorrecto de argumentos
const test_11_5_error_wrong_arg_count = `
func suma(a: i, r: i): i {
    give a + r;
}

show(suma(5));
`;
// Esperado: Error: Función 'suma' espera 2 argumentos, pero recibió 1

// Test 11.6: ERROR - Función no definida
const test_11_6_error_undefined_function = `
show(noExiste(5));
`;
// Esperado: Error: Función 'noExiste' no está definida

// Test 12.1: Array literal
const test_12_1_array_literal = `
declare nums: i[] = [1, 2, 3, 4];
show(nums);
`;
// Esperado: [1, 2, 3, 4]

// Test 12.2: Array vacío
const test_12_2_empty_array = `
declare empty: i[];
show(empty);
`;
// Esperado: []

// Test 12.3: Array bidimensional
const test_12_3_multidimensional_array = `
declare matrix: i[][] = [[1, 2], [3, 4]];
show(matrix);
`;
// Esperado: [[1, 2], [3, 4]]

// Test 12.4: Array de strings
const test_12_4_string_array = `
declare names: s[] = ["Ana", "Luis", "Maria"];
show(names);
`;
// Esperado: ["Ana", "Luis", "Maria"]

// Test 13.1: Bloque simple
const test_13_1_simple_block = `
declare x: i = 10;
{
    show(x);
}
`;
// Esperado: 10

// Test 13.2: Bloques anidados
const test_13_2_nested_blocks = `
declare x: i = 5;
{
    {
        show(x);
    }
}
`;
// Esperado: 5

// Test 14: Programa Completo - Fibonacci
const test_14_fibonacci = `
func fibonacci(n: i): i {
    check (n <= 1) {
        give n;
    }
    give fibonacci(n - 1) + fibonacci(n - 2);
}

declare idx: i = 0;
repeat (idx < 10) {
    show(fibonacci(idx));
    set idx = idx + 1;
}
`;
// Esperado: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// Test 15: Programa Completo - Números Primos
const test_15_primes = `
declare idx: i;
declare num: i;
declare n: i;
declare isPrimeFlag: b;

func isPrime(n: i): b {
    check (n < 2) {
        give false;
    }

    set idx = 2;
    repeat (idx * idx <= n) {
        check (n % idx == 0) {
            give false;
        }
        set idx = idx + 1;
    }
    give true;
}

set num = 2;
repeat (num < 20) {
    set isPrimeFlag = isPrime(num);
    check (isPrimeFlag) {
        show(num);
    }
    set num = num + 1;
}
`;
// Esperado: 2, 3, 5, 7, 11, 13, 17, 19

// Test 16: Programa Completo - FizzBuzz
const test_16_fizzbuzz = `
declare idx: i = 1;
repeat (idx <= 15) {
    check (idx % 15 == 0) {
        show("FizzBuzz");
    } otherwise {
        check (idx % 3 == 0) {
            show("Fizz");
        } otherwise {
            check (idx % 5 == 0) {
                show("Buzz");
            } otherwise {
                show(idx);
            }
        }
    }
    set idx = idx + 1;
}
`;
// Esperado: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

// Test 17: Entrada de usuario 
const test_17_ask_input = `
declare username: s;
ask(username);
show("Hello, " + username);
`;
// Esperado: (simula input "42"), luego: Hello, 42

// Test 18: Ejemplo completo
const test_18_pdf_complete_example = `
declare age: i = 21;
declare price: f = 19.95;
declare name: s = "Ana";
declare active: b = true;

show("Welcome to RedLang!");
show(name);
show(age);

check (age >= 18) {
    show("Adulto");
} otherwise {
    show("Menor");
}

func add(a: i, r: i): i {
    give a + r;
}

declare result: i = add(3, 7);
show(result);
`;

// Test 19: Operadores lógicos combinados
const test_19_combined_logical = `
declare a: b = true;
declare r: b = false;
declare c: b = true;

show(a and r or c);
show(a or r and c);
show(not a and r);
`;
// Esperado: true, true, false

// Test 20: Expresiones complejas
const test_20_complex_expressions = `
declare x: i = 5;
declare y: i = 3;
declare z: i = 2;

show((x + y) * z - 4);
show(x > y and y > z);
show(x == 5 or y == 5);
`;

// Objeto con todos los tests
export const allTests = {
    // Declaraciones
    test_1_1_declarations_with_init,
    test_1_2_declarations_default_values,
    test_1_3_nullable_types,
    
    // Asignaciones
    test_2_1_basic_assignment,
    test_2_2_assignment_with_expression,
    test_2_3_error_undeclared_variable,
    
    // Aritmética
    test_3_1_basic_arithmetic,
    test_3_2_operator_precedence,
    test_3_3_error_division_by_zero,
    
    // Strings
    test_4_1_string_concatenation,
    test_4_2_mixed_concatenation,
    
    // Comparaciones
    test_5_1_numeric_comparisons,
    test_5_2_equality,
    
    // Lógicos (con palabras: and, or, not)
    test_6_1_logical_and,
    test_6_2_logical_or,
    test_6_3_logical_not,
    
    // Unarios
    test_7_1_numeric_negation,
    
    // Condicionales
    test_8_1_if_simple,
    test_8_2_if_else,
    test_8_3_nested_if,
    
    // While
    test_9_1_while_basic,
    test_9_2_while_false_condition,
    
    // For
    test_10_1_for_basic,
    test_10_2_for_custom_step,
    test_10_3_for_no_init,
    
    // Funciones
    test_11_1_function_no_params,
    test_11_2_function_with_params,
    test_11_3_function_multiple_params,
    test_11_4_recursive_factorial,
    test_11_5_error_wrong_arg_count,
    test_11_6_error_undefined_function,
    
    // Arrays
    test_12_1_array_literal,
    test_12_2_empty_array,
    test_12_3_multidimensional_array,
    test_12_4_string_array,
    
    // Bloques
    test_13_1_simple_block,
    test_13_2_nested_blocks,
    
    // Programas completos
    test_14_fibonacci,
    test_15_primes,
    test_16_fizzbuzz,
    
    // Input
    test_17_ask_input,
    
    // Ejemplos del PDF
    test_18_pdf_complete_example,
    
    // Expresiones avanzadas
    test_19_combined_logical,
    test_20_complex_expressions,
};