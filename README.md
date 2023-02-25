# SlideFramic 
SlideFramic é um projeto desenvolvido para criar slides de forma simples, proporcionando a criação de um ou mais slides em uma página web.

## Download

- 1 - Clone o repo: `https://github.com/luquinhaspmw/SlideFramic` 
- 2 - Importe `SlideFramic/assets/css/style.css` no seu html
- 3 - importe `SlideFramic/assets/script/script.js` no seu html


## Como usar
### Estrutura do SlideFramic:

- Visualize [aqui](https://github.com/luquinhaspmw/SlideFramic/SlideFramic/exemplo.html) o SlideFramic em diferentes tamanhos

- Para adicionar um slide utlizando o SlideFramic só precisa utilizar a estrutura abaixo como base, podendo definir a cor do botão, o tempo de um slide pra outro, e a quantidade de imagens que quiser.
> Exemplo de um único slide
```html
    <div class="carrosel" id="carrosel1">
        <input type="hidden" class="timeSlide" value="2800">
        <button class="prev bg-blc-50 c-wht"><i class="fas fa-chevron-left"></i></button>
        <div class="container">
            <div class="imgContainer">
                <img src="https://i.imgur.com/RuRaNm9.jpeg" alt="">
            </div>
            <div class="imgContainer">
                <img src="https://i.imgur.com/x6Kogol.jpeg" alt="">
            </div>
        </div>
        <button class="next bg-blc-50 c-wht"><i class="fas fa-chevron-right"></i></button>
    </div>
```

- Para adicionar mais de um slide você deve adicionar um `id` diferente para cada slide, o `id` será de acordo com a quantidade de slides presentes na página, observe no exemplo abaixo.

> Exemplo de vários slides

```html
    <!-- Exemplo: id:"carrosel${número do slide} -->
    
    <div class="carrosel" id="carrosel1"></div>
    <div class="carrosel" id="carrosel2"></div>
    <div class="carrosel" id="carrosel3"></div>
    <div class="carrosel" id="carrosel4"></div>
```

### Estilos do SlideFramic:
- A div `carrosel` ocupa 100% do seu elemento pai, então você pode definir a largura e a altura do slide a partir disso.
  
- Para alterar a cor do botão ou a cor do ícone dentro do botão você deve utilizar as classes predefinidas, aqui está a [lista](https://github.com/luquinhaspmw/SlideFramic/SlideFramic/exemplo.html#cores) com as variações de cores disponíveis.

> As classes `prev` e `next` são padrões, sem elas o slide não irá funcionar.

- `.bg-blc-50`. Essa classe é utilizada para alterar a cor e a opacidade da cor do botão, altere `blc` para a cor que quiser, `50` indica a opacidade da cor aplicada, nesse exemplo está como `50%` mas também existe `25%`, `75%`, caso não seja informado nenhum desses citados será adotado `100%` de opacidade.

>Exemplo de cor do botão
```html
    <button class="prev bg-blc">100%</button>   
    <button class="prev bg-blc-75">75%</button>   
    <button class="prev bg-blc-50">50%</button>   
    <button class="prev bg-blc-25">25%</button>   
```

- `.c-wht-50`. Essa classe é utilizada para alterar a cor e a opacidade da cor do ícone, altere `wht` para a cor que quiser, `50` indica a opacidade da cor aplicada, nesse exemplo está como `50%` mas também existe `25%`, `75%`, caso não seja informado nenhum desses citados será adotado `100%` de opacidade.

>Exemplo de cor do ícone
```html
    <button class="prev c-wht">100%</button>   
    <button class="prev c-wht-75">75%</button>   
    <button class="prev c-wht-50">50%</button>   
    <button class="prev c-wht-25">25%</button>   
```

- Ao juntar as duas classes temos o botão e o ícone estilizados da maneira que você quiser.

>Exemplo completo
```html
    <button class="prev bg-blc c-wht"></button>     
```

- Você pode adicionar o ícone que preferir, todos os icones disponíveis estão neste [link](https://fontawesome.com/v5/search?o=r&m=free&s=solid).

### Configuração do SlideFramic:

 - Para alterar o tempo entre um slide e outro é preciso inserir alterar no input:hidden. Veja no exemplo abaixo.

- Altere o `value` para realizar essa configuração.

>Exemplo
 ```html
    <!-- O tempo é em Milissegundos -->
    <input type="hidden" class="timeSlide" value="2800">  
```


