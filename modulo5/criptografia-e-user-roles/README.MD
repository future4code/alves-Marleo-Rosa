Exercício 1

a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?

Com "round" eles realmente significam o fator de custo . O fator de custo controla quanto tempo é necessário para calcular um único hash BCrypt. Quanto maior o fator de custo, mais rodadas de hash são feitas. Aumentar o fator de custo em 1 dobra o tempo necessário. Quanto mais tempo for necessário, mais difícil será a força bruta.

O salt é um valor aleatório e deve ser diferente para cada cálculo, portanto, o resultado dificilmente deve ser o mesmo, mesmo para senhas iguais.

Exercício 2

a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.

O cadastro, pois é a primeira informação a entrar no sistema.
