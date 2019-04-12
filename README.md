# character-card

Componente cartão de personagens Amiibo para Angular 2+.

O objetivo desse exemplo é criar um componente de **card** de produto que tenha o fundo e as cores dos títulos em harmonia com as cores da imagem de forma automática.

Para ilustrar os exemplos usei uma API com os personagens Amiibo ([O que é Amiibo?](https://en.wikipedia.org/wiki/Amiibo)).


## Demo

[Página de demonstração.](https://vicentecalfo.github.io/character-card/dist/character-card/)

![Exemplo 1](https://vicentecalfo.github.io/character-card/dist/character-card/assets/sample_1.png)

![Exemplo 2](https://vicentecalfo.github.io/character-card/dist/character-card/assets/sample_2.png)

![Exemplo 3](https://vicentecalfo.github.io/character-card/dist/character-card/assets/sample_3.png)

## Recursos
1. [API do banco de dados das miniaturas Amiibo (amiiboapi).](https://www.amiiboapi.com/)
2. [Módulo para extrair a paleta de cores da imagem (node-vibrant)](https://github.com/akfish/node-vibrant)

## Usando o node-vibrant no Angular

1. Para usar o módulo **node-vibrant** que será responsável por montar a paleta de cores da imagem referenciada, você deve instalar o módulo seguindo as instruções presentes na [documentação](https://github.com/akfish/node-vibrant).
2. O próximo passo após a instalação é incluir o módulo no arquivo **angular.json** no atributo **scripts**. 
3. No componente que você deseja usar o node-vibrant você precisa declarar uma variável do tipo any (utilizando o mesmo nome da função **Vibrant**). 

```javascript
import { Component, Input, SimpleChanges, OnInit } from '@angular/core';

declare var Vibrant: any;

// ...

ngOnInit() {
    Vibrant.from(this.image).getPalette((error, palette) => console.log(palette));
  }

```

## Usando o componente
1. Basta seguir os passos 1 e 2 que esto descritos acima (Instalação do node-vibrant).
2. Copiar e colar a pasta character-card.

### Observações
1. Este é só um projeto de exemplo e não tem o intuito de ser distribuído, por isso ele é específico para a API utilizada, mas você pode facilmente customizar para sua necessidade;
2. As imagens fornecidas pela API variam de tamanho, por isso alguns poucos personagens ficaram com o alinhamento pouco harmonico, mas como esse projeto é só um exemplo/ponto de partida para a construção de um componente mais complexo e robusto e ele tem apenas a intenção de demonstração, peço que desconsidere esses casos e tenha em mente que o CSS que controla isso deverá sem customizado para sua necessidade caso você venha a usar.
