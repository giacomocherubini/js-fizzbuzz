// ciclo for numeri da 1 a 100
for(var i = 1; i<=100; i++) {
// se sono multipli di 3 e 5 scrivo FizzBuzz
    if ((i % 3) == 0 && (i % 5) == 0) {
    document.writeln('FizzBuzz' + '<br>');
    // altrimenti se sono multipli di 3 scrivo Fizz
  } else if ((i % 3) == 0) {
    document.writeln('Fizz' + '<br>');
    // altrimenti se sono multipli di 5 scrivo Buzz
  } else if ((i % 5) == 0) {
    document.writeln('Buzz' + '<br>');
    // altrimenti scrivo numeri
  } else {
    document.writeln(i + '<br>');
  }
}
