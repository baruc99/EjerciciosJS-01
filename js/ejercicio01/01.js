// function f(x, y = 2, z = 7) {
//     return x + y + z;
// }

// console.log(f(5, undefined));

// var animal = 'kitty'
// var result = ( animal === 'kitty') ? 'cute' : 'still nice';

// console.log(result);

// var animal = 'kitty'
// var result = '';

// if (animal === 'kitty') {
//     result = 'cute'
// }
// else {
//     result = 'still nice'
// }

// console.log(result);



// var a = 0;
// var str = 'not a';
// var b = '';

//     b = a === 0 ? ( a = 1, str += ' test' ): ( a = 2)

//     console.log( b );

// var a = 1;
// a === 1 ? alert('hey, it is 1!') : 0;

// console.log( a );

// a === 1 ? alert('Hey, it is 1!') : alert('weird, what could it be?');
// if ( a === 1 ){ alert ('Hey, it is 1!') } else{ alert('weird, what could it be?')};

// var animal = 'kitty';
// for (var i = 0; i < 5; i++) {
//     ( animal === 'kitty' ) ? break :console.log(i);

// }

// var animal = 'kitty';
// for (var i = 0; i < 5; i++) {
//     if (animal === 'kitty') {
//         break;
//     } else {
//         console.log(i);
//     }
// }

// var value = 1;
// switch (value) {
//     case 1:
//         console.log('i will always run');
//         break;
//     case 2:
//         console.log('i will never run');
//         break;
// }

// var animal = 'lion';
// switch (animal) {
//     case 'Dog':
//         console.log('i will not run  since animal !== "Dog" ');
//         break;
//     case 'Cat':
//         console.log('i will not run  since animal !== "Cat" ');
//     default:
//             console.log('i will not run  since animal does match any other case');
//         break;
// }


// function john() {
//     return 'John';
// }

// function jacob() {
//     return 'Jacob';
// }

// var name = john();

// switch (name) {
//     case john():
//         console.log('i will run return if name === "John"');
//         break;

//     case 'Ja' + 'ne':
//         console.log('i will run if name === "Jane"');
//         break;
//     case john() + ' ' + jacob() + ' jingleheimer scmidt':
//         console.log('his name is equal to name too!');
//         break;
// }

// var x = "c";

// switch (x) {
//     case "a":
//     case "b":
//     case "c":
//         console.log('Either a, b or c was selected');
//         break;
//     case "d":
//         console.log('only d was selected');
//         break;

//     default:
//         console.log("No case was matched.");
//         break;
// }

// var x = 5 + 7
// console.log(x);
// var x = 5 + "7"
// console.log(x);
// var x =  "5" + 7
// console.log(x);
// var x = 5 - 7
// console.log(x);
// var x = 5 - "7"
// console.log(x);
// var x =  "5" - 7
// console.log(x);
// var x = 5 - "x"
// console.log(x);

// var a = 'hello' && '';
//     console.log(a);
// var b = '' && [];
//     console.log(b);
// var c = undefined && 0;
//     console.log(c);
// var d = 1 && 5;
//     console.log(d);
// var e = 0 && {};
//     console.log(e);
// var f = 'hi' && [] && 'done';
//     console.log(f);
// var g = 'bye' && undefined && 'adios'
//     console.log(g); 

// var foo = function (val) {
//     return val || 'default';
// }

// console.log( foo('burger') );
// console.log( foo(100) );
// console.log( foo([]) );
// console.log( foo(0) );
// console.log( foo(undefined) );

// var age = 18
// var heigth = 7.0
// var status = 'royalty'
// var hasInvitation = false

// var isLegar = age >= 18;
// console.log(isLegar);
// var tall = heigth >= 5.11;
// console.log(tall);
// var suitable = isLegar && tall;
// console.log( suitable );
// var isRoyalty = status === 'royalty';
// console.log( isRoyalty );
// var  specialCase = isRoyalty && hasInvitation;
// console.log( specialCase );
// var canEnterOurBar = suitable || specialCase;
// console.log(canEnterOurBar);


// for (let i = 0; i < 3; i++) {
//     if( i === 1 ){
//         continue;
//     }
//     console.log(i);
// }

// var i = 0;
// while (i < 3) {
//     if( i === 1){
//         i = 2;
//         continue;
//     }
//     console.log(i);
//     i++;
// }

// for (let i = 0; i < 5; i++) {
//     nextLoop2Iteration:
//         for (let j = 0; j < 5; j++) {
//             if( i == j ) break nextLoop2Iteration;
//             console.log(i, j);
//         }
    
// }

// function foo() {
//     var a = 'hello';

//     function bar() {
//         var b = 'world';
//         console.log(a);
//         console.log(b);
//     }

//     console.log(a);
//     console.log(b);
// }


// console.log(a);
// console.log(b);

// function foo() {
//     const a = true;

//     function bar() {
//         const a = false;
//         console.log(a);
//     }

//     const a = false;
//     a = false;
//     console.log(a);
// }

// var namedSume = function sum(a, b) {
//     return a + b;
// }

// var anomSuma = function (a, b) {
//     return a + b;
// }

// console.log(`namedSum: ${namedSume(1,3)}` );
// console.log(`anonSum: ${anomSuma(1,3)}`);

// var a = [1,2,3,8,9,10];
// a.slice(0,3).concat([4,5,6,7]), a.slice(3,6);
// console.log( a );

// var a = [1,2,3,8,9,10];
// a.slice(3,0, ...[4,5,6,7]);
// console.log(a);

// var array = ['a', 'b', 'c']

// console.log( array.join('->') );
// console.log( array.join('.') );
// console.log( 'a.b.c'.split('.') );
// console.log( '5,4,3,2,1'.split('.') );

// var array = [5, 10, 15, 20, 25];

// console.log( Array.isArray(array) );
// console.log( array.includes(10) );
// console.log( array.includes(10,2) );
// console.log( array.indexOf(25) );
// console.log( array.lastIndexOf(10,0) );

var array = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log( array.copyWithin(5, 0, 1) );
console.log( array.copyWithin(3, 0, 3) );
console.log( array.fill('Z', 0, 5) );

var array = ['Alberto', 'Ana', 'Mauricio', 'Bernardo', 'Zoe'];

console.log( array.sort() );
console.log( array.reverse() );
