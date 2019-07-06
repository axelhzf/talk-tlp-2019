# Animation talk


## Why animation matters

The greatest value animation adds to software is context. Animation takes something with no moving parts and adds the appearance of visible change. These noticeable changes provide us with tangible and familiar context, which makes our software more intuitive, discoverable, emotive, and recognizable.


Although there is a big army of those who find animation an unnecessary feature overloading user interface and making it more complicated, most users expect motion as an integral part of interaction experience


Animation is like cursing. If you overuse it, it loses all its impact.

## Explicación de que es una animación

Ejemplo de bola moviendose en el eje de las Y

Hacer gráfica con la posición de la bola en el eje de las Y a través del tiempo

Explicar la interpolación lineal. Básicamente consiste en unir el punto inicial y el punto final

Explicar que hay otras funciones de interpolación, como ease in out y que puede hacer que nuestras
animaciones parezcan más fluidas

Una parte importante de una librería de animaciones es que te permita hacer animaciones de diferentes
tipos de propiedades. Por ejemplo, podemos querer interpolar pixeles, %, colores, opacidad


## CSS transition

Este tipo de animaciones las podemos conseguir utilizando css transition

CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.

Animations that involve transitioning between two states are often called implicit transitions as the states in between the start and final states are implicitly defined by the browser.

div {
    transition: <property> <duration> <timing-function> <delay>;
}

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function


Timing functions
* ease
* cubic bezier

Se pueden definir curvas aleatorias utilizando cubic-bezier

```
cubic-bezeir(x1, y1, x2, y2)
```

Web para experimentar con estas crubas

https://cubic-bezier.com/

Las chrome dev tools también te permiten experimentar con las curvas



Si necesitamos más control sobre las animaciones podemos definir keyframes

Hacer animación de bola moviendo en un cuadrado 

https://jaketrent.com/post/css-animation-timing-function-per-keyframe-segment/

Con esto simplemente se pueden hacer cosas muy chulas como

https://codepen.io/davidkpiano/pen/kkpGWj


Vamos a ver un ejemplo de cómo podemos aplicar esto a una aplicación


Hacer ejemplo del menú lateral para explicar


Duración de las animaciones
https://www.carbondesignsystem.com/guidelines/motion/basics
https://ibm.github.io/motion/


## Animaciones interrumpibles

Qué pasa cuando interrumpimos la animación a la mitad?

La animación de cierre del menú tiene la duración fija, independientemente de la posición inicial del menu

https://twitter.com/andy_matuschak/status/566736015188963328


Parece que cuando estamos trabajando con animaciones para interfaces los requisitos so distintos. En el ecaso de la animación del perro que veíamos, la animación no tiene interrupciones. En este caso el usuario puede intervenir en la animación y alterarla.


Hacer mismo ejemplo pero utilizando springs en vez de css transition

Si se fijan en este ejemplo, independientemente del momento en el que interrumpamos la animacion parece que la velocidad del menu es similar. ¿Cómo hemos definido esta animación?



Spring Animation

Tienes un resorte en la posición de equilibrio. Ahora lo empujas y lo contraes. Al soltarlo el resorte tratará de recuperar la posición de equilibrio. Ese movimiento que hace, lo podemos tratar como una easing function.


Hooke’s law which expresses how springs extends and contract

https://en.wikipedia.org/wiki/Hooke%27s_law#For_linear_springs

Fs = -kx

There’s also this damping force which slows down the motion. Without it, the spring will keep oscillating forever.

Fd = -cv

https://en.wikipedia.org/wiki/Damping_ratio#Example:_mass.E2.80.93spring.E2.80.93damper

F = Fs + Fd = -kX -cv

F = ma

m * f''(x) = -kf(x) - cf'x()



Spring factory
https://hackernoon.com/the-spring-factory-4c3d988e7129

https://github.com/julianshapiro/velocity/blob/9c9c052a5fb6d5854c9aad931d9410c6790816ee/velocity.js#L815

http://mtdevans.com/2013/05/fourth-order-runge-kutta-algorithm-in-javascript-with-demo/


Código de como hacer la animación utilizando springs (poner valores para masa, damping ratio y stiffnes)

Hacer ejemplo variando los valores para ver cómo se modifica el comportamiento del resorte.
Utilizar valores por defecto de react spring


Si el ejemplo del menu no es lo suficiente visual, y puede ser un edge case. Podría enseñar también el caso de utilizar gestos

https://codesandbox.io/embed/zrj66y8714

O el Pull


* Mount/Unmount animations

Explicar el problema que hay con ese tipo de animaciones


* Route animations?

* Ejemplo de animaciones utilizando react spring


Beneficios de utilizar react-spring es que es multiplataforma, código de react native utilizando react-spring?

Multirender?  Threejs animation using react spring?



* Para terminar ejemplo loco de animaciones con shader?












cheng lou - the state of animation in React (React-europe 2015)

https://www.youtube.com/watch?v=1tavDv5hXpo

* declarative tweens
* Unmounting animations (reactcss-transition-group)
* CSS transition are time-based. Al especificar el tiempo en un tween 
* CSS transition are hard to control: pausing? rewind?
* Blackbox? no puedes leer el valor actual de la animación
* Reliance on DOM. No puede ser multiplataforma
* Staggered animation based on the springs

CSS transitions: The good parts
* Performant
* Good enough for common tasks
* Fire and forget


Declarative tweens
* Interrumptible
* Concurrent
* Composable


Additive animations
http://ronnqvi.st/multiple-animations

tween-state already have additive animations integrated


Spring!

* I don't care about the current position. Give me the final value, I know the current momentum, voy a hacer lo mejor posible para emular físicas y darte una curva real
* Conserve the current animation's speed for me
* Here the stiffness (rigidez) and damping (amortiguación) of this thing

raf until we are done internaly


Animaciones de los cuadrados

* Dumb destructive transition
* Slightly smarter destructive transition (Css default)
* Optimal default (additive animation, ios8 default)

Layout animation?

Unmounting tweens. Pensando en react, al hacer una animación, tienes el arbol anterior, tienes el nuevo arbol, hay una correspondencia 1 a 1 y tienes que hacer la transición. El problema con las animaciones de unmount es que ahora el arbol es distinto, hay un nodo que ya no tenemos.

Todo MVC con unmount animations?
