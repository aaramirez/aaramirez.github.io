---
title: Probabilidades
date: 2016-07-01 08:16:10 Z
published: true
categories:
- Probabilidades
comments: true
math: true
---

# Introducción

## Presentación
  
  > Inspirado en las clases con el Prof: Ricardo Rios. Gracias Profesor.

La disyuntiva fundamental es la exactitud vs. la precisión. ¿De qué cosas podemos hablar con exactitud o con qué nivel de precisión podemos hablar?. Es un compromiso entre lo completamente determinado y lo no determinado sino aproximado con un nivel de precisión.

Lanzar un objeto como una taza de un octavo piso en contraposición a lanzar una hoja de papel de la misma altura. La pregunta es ¿en cuanto tiempo llega el objeto al suelo?.

En general podemos iniciar con relaciones determinísticas como:

$$
Y = f(x)
$$

Donde a cada valor de $x$ le corresponde un único valor de la función $f(x)$.

En otros casos hay un componente "aleatorio" sobre el cual podemos hablar de forma aproximada. En estos casos nos interesa comprometer un nivel de precisión. Es decir, nos interesa acotar o controlar ese componente. La relación evoluciona a la forma:

$$
Y = f(x) + \epsilon
$$

Los modelos de probabilidades se basan es ese elemento y en el estudio de $\epsilon$, sus propiedades y finalmente qué podemos decir de $Y$, nuestra variable dependiente basados en dichas propiedades.

De forma intuitiva podemos definir un Modelo de Probabilidad como las propiedades que podemos deducir e inferir basados en la forma en que se comporta $f(x)$ y $\epsilon$. Por otra parte hay muchos problema en donde tampoco se conoce $f$. Es decir, no se conoce el proceso generador de los datos y sólo podemos hacer aproximaciones de $f$ basados en su forma y en propiedades relacionadas con la forma de $f$. 

En ese punto llegamos a las distribuciones de probabilidad que cumplen con las características propias de las funciones de probabilidad o funciones de medida. Si pensamos que $f$ se aproxima a una distribución de probabilidad conocida entonces podemos aplicar una serie de herramientas propias de dichas distribuciones como estimar sus parámetros (si existen) y a partir de dichos estimadores conocer intervalos de confianza y aplicar pruebas de hipótesis. 

Esos pasos que acabo de describir son el enlace entre la Probabilidad y la Estadística. Ahí es donde se une la Probabilidad con la Estadística. Basados en las propiedades de la probabilidad podemos hacer estadística, que consiste en inferir a partir de los datos provistos, con la dificultad de que los datos tienen errores, en su recolección, interpretación, etc.

Nos interesa saber cuando $\mid Y - Y_0 \mid \gt \delta$ o $\mid \epsilon \mid \gt \delta$, es decir cuando el error es mayor que un nivel $\delta$, nos interesa acotar el error y conocer con qué frecuencia ocurre eso. Nos interesa controlar $\epsilon$, de esta forma logramos algún nivel de precisión. 

Después de entender hasta donde puede llegar $\epsilon$ entonces nos interesa que ocurra pocas veces. En términos relativos que sea poco frecuente y a la postre que su probabilidad sea baja. 

Es decir, que si repetimos el experimento muchas veces la frecuencia en que el error $\epsilon$ supera la cota ocurre pocas veces. Entonces nuestro modelo queda:

$$
P(\mid Y - Y_0 \mid \gt \delta) \lt \eta
$$

Alternativamente, también lo podemos formular de forma análoga. Si el error es menor a una cota superior eso ocurre con una probabilidad alta. De hecho lo veremos más adelante, los intervalos de confianza se definen de esa forma.

Entonces tenemos que si $\mid \epsilon \mid \lt \delta$. Es decir, el error está en un intervalo $(\epsilon-\delta, \epsilon+\delta)$. Esto nos interesa que ocurra con la mayor probabilidad posible. Pero podemos colocar un umbral como sigue: $P(\mid \epsilon \mid \lt \delta)\gt\eta$.

Finalmente lo que se desea es controlar el error y se utilizan las herramientas de las probabilidad para este propósito.

## Definición Axiomática 

($\Omega,\mathcal{F},P$)

La probabilidad parte de una definición axiomática que tiene base en la teoría de la medida. Los tres elementos principales son $\Omega$ que es el **espacio muestral**, $\mathcal{F}$ que es una $\sigma$-álgebra sobre $\Omega$ y $P$ que es la medida de probabilidad con las propiedades de la medida de Lebesgue. 

### Espacio medible (Measurable space) - ($\Omega, \mathcal{F}$)

Sea $\Omega$ el espacio de los eventos puntuales (individuales) o **espacio muestral**. $\Omega$ es el conjunto de todos los posibles resultados de un experimiento. Por otra parte sea $\mathcal{F}$ tal que $\mathcal{F} \equiv \sigma$-álgebra y $\mathcal{F} \subseteq \wp(\Omega)$ donde $\wp(\Omega)$ es el conjunto partes de $\Omega$, es decir, $\mathcal{F}$ cumple con las propiedades siguientes:

1. $\Omega \in \mathcal{F}$
2. $A \in \mathcal{F} \Rightarrow A^C \in \mathcal{F}$
3. {$A_n$} $ \in \mathcal{F}, \forall n: n\ge 1 \Rightarrow \bigcup_{n=1}^{\infty} A_n \in \mathcal{F}$

A la $\sigma$-álgebra en $\Omega$, es decir el par $(\Omega, \mathcal{F})$ se le denomina espacio de medida (measurable)[^medible].

### Medida de Probabilidad ($P$)

Por otra parte definamos una **medida de probabilidad** como una función que va de $\mathcal{F}$ a los números reales en el intervalo $[0, 1]$, $P: \mathcal{F} \Rightarrow [0, 1]$. $P$ es una función  que asigna una probabilidad a cada evento y cumple las propiedades siguientes:

1. $P(\Omega)=1$
2. {$A_n$} $ \in \mathcal{F}, \forall n: n\ge 1 \wedge A_i \cap A_j = \emptyset$ para $i \ne j$ entonces, 
$P(\bigcup_{n=1}^{\infty} A_n) = \sum_{n=1}^{\infty}P(A_n)$

$P$ es una medida de probabilidad en el espacio de medida $(\Omega, \mathcal{F})$.

  > En el Durret se define: "Una medida como una función no negativa 'countably additive set function', $\mu: \mathcal{F}\Rightarrow\mathcal{R}$ con:
  >
  > (i) $\mu(A) \ge \mu(\emptyset) = 0, \forall A \in \mathcal{F}$, y
  >
  > (ii) Si $A_i \in \mathcal{F}$ es una secuencia numerable de conjuntos disjuntos, es decir, $A_i \cap A_j=\emptyset, \forall i, j, i\ne j$ entonces:
  $$
  \mu(\bigcup_{i} A_i) = \sum_{i}\mu(A_i)
  $$
  >
  > Si $\mu(\Omega)=1$, entonces $\mu$ es una medida de probabilidad.
  >
  > Esta definición nos proporciona el salto entre medir la unión de conjuntos disjuntos como la suma de sus medidas.

### Espacio de probabilidad - $(\Omega,\mathcal{F},P)$

Un espacio de probabilidad está conformado por un espacio medible y una medida de probabilidad. Estos conforman la terna $(\Omega,\mathcal{F},P)$.

#### Ejemplos e interpretación

Las operaciones sobre conjuntos tienen una interpretación ligeramente distinta en esta notación. Los eventos puntuales pertenecen a un evento. Es decir, un evento puntual es un elemento de un conjunto que es un evento.

- Sea $\Omega$ nuestro **espacio muestral**, definido como el conjunto de posibles resultados de un experimento como el lanzamiento de un dado $\Omega = \\{1,2,3,4,5,6\\}$. 
- Un evento $A \in \mathcal{F}$, puede ser, que el resultado de un experimento salga un número par, entonces $A=\\{2,4,6\\}$, o por otra parte un número impar entonces, $A=\\{1,3,5\\}$. $A \subset \mathcal{B}$ implica que la ocurrencia de $A$ implica la ocurrencia de $B$. $A \cap B$  significa que ambos eventos $A$ y $B$ ocurren. $A \cup B$ significa que alguno de los eventos ocurre, ya sea $A$ o $B$. $A^C$ es el evento contrario a $A$. Es decir, si $A$ ocurre $A^C$ no ocurre. Por otra parte, si $A^C$ ocurre entonces $A$ no ocurre.
- Un evento puntual es un resultado particular de un experimento, normalmente se denota como $w \in \Omega$. En el caso del lanzamiento de un dado, que salga el número 4, entonces $w=4$. Un evento sería el conjunto $A=\\{4\\}$. $\omega \in A$ significa que $A$ ocurre cuando $\omega$ ocurre. $\omega \not\in A$ significa que $A$ no ocurre cuando $\omega$ ocurre.
- Existe un evento particular que es el evento nulo conformado por el conjunto vacio $\emptyset$. $A \cap B=\emptyset$ significa que $A$ y $B$ son **disjuntos**, y no pueden ocurrir simultáneamente.

### Propiedades
Vamos a desarrollar algunas propiedades que se derivan de la definición previa. Todos los conjuntos nombrados en las propiedades siguientes pertenecen a $\mathcal{F}$.

(@1) $P(\emptyset)=0$

Por la segunda propiedad de $\mathcal{F}$ si $\Omega \in \mathcal{F} \Rightarrow \Omega^C=\emptyset \in \mathcal{F}$. Definamos $A_n: A_n=\emptyset,\forall n$. Por la segunda propiedad de $P$, $\emptyset = An_{n=1}^{\infty} \in \mathcal{F} \wedge A_i \cap A_j = \emptyset$ \text{ para } $i \ne j$ entonces, $P(\emptyset)=P(\bigcup_{n=1}^{\infty} A_n) = \sum_{n=1}^{\infty}P(A_n)=\sum_{n=1}^{\infty}P(\emptyset)$.

Supongamos que $\sum_{n=1}^{\infty}P(\emptyset) > 0$ es decir, $P(\emptyset) \ne 0$ entonces $\sum_{n=1}^{\infty}P(A_n) > 0$  y $P(\bigcup_{n=1}^{\infty} A_n) > 0$ lo cual implica que $\bigcup_{n=1}^{\infty} A_n\ne\emptyset$, es decir, debe existir $i$ tal que $A_i\ne\emptyset$, lo cual contradice la definición inicia de $A_n: A_n=\emptyset, \forall n$. Por lo tanto, por reducción al absurdo, $P(\emptyset)=0$.

   > Que la probabilidad de un conjunto $A$ sea $0$, $P(A)=0$, no quiere decir que $A=\emptyset$. De forma análoga que la probabilidad de un evento $B$ sea 1, $P(B)=1$, no quiere decir que $B=\Omega$

(@2) $P(A\cup B) = P(A) + P(B)$

Sea $A$ y $B$ conjuntos tal que $A,B\in\mathcal{F}$ y $A\cap B=\emptyset$.

Por (@2) entonces..

(@3) $P(A) = 1 - P(A^C)$


Despejando también nos queda que $P(A^C) = 1 - P(A)$

(@4) $A \subset B \Rightarrow P(A) \leq P(B)$


(@5) $A, B \in \mathcal{F} \Rightarrow A \cap B \in \mathcal{F}$

Sea $A, B \in \mathcal{F}$ tenemos que por las propiedades de $\mathcal{F}$ entonces, $A\in\mathcal{F}\Rightarrow A^C\in\mathcal{F}$ y $B\in\mathcal{F}\Rightarrow B^C\in\mathcal{F}$. Por otra parte si $A^C, B^C \in \mathcal{F} \Rightarrow A^C \cup B^C \in \mathcal{F}$. Finalmente si $A^C \cup B^C \in \mathcal{F}$ entonces $(A^C \cup B^C)^C \in \mathcal{F}$. Por la ley de De morgan $(A^C \cup B^C)^C = A \cap B$ entonces $A \cap B \in \mathcal{F}$.

(@6) $P(A \cup B) = 1 - P(A^c \cap B^c)$

(@7) $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

Hay dos casos particulares que vale la pena destacar. 

 (i) Sea $P(A)=P(B)=1$. Entonces $P(A\cup B) \ge P(A)=1 \Rightarrow P(A\cup B)=1$, despejando (@7) nos queda que $P(A \cap B) = P(A) + P(B) - P(A \cup B)$, $P(A \cap B) = 1 + 1 - 1 = 1$. Es decir, si $P(A)=P(B)=1 \Rightarrow P(A\cup B)=P(A\cap B)=1$.
 
 (ii) Sea $P(A)=P(B)=0$. Entonces $P(A\cap B)\le P(A)=0\Rightarrow P(A\cap B)=0$, despejando en (@7) nos queda que $P(A \cup B) = P(A) + P(B) - P(A \cap B)$, $P(A \cup B) = 0 + 0 - 0 = 0$. Es decir, si $P(A)=P(B)=0 \Rightarrow P(A\cup B)=P(A\cap B)=0$.

(@8) $P(A \cap B^c) = P(A) - P(A \cap B)$

(@9) $P(\cup_{i=1}^n A_i) \leq \sum_{i=1}^n P(A_i)$

(@10) $P(\cup_{i=1}^n A_i) \geq \max_i P(A_i)$

### Conjuntos Independientes

Con respecto a la función de probabilidad $P(A\cap B)=P(A)P(B)$ si $A\perp B$.
$$
A\perp B \Leftrightarrow A^C\perp B \Leftrightarrow A\perp B^C \Leftrightarrow A^C\perp B^C
$$


$\\{A_{ij}\\}\subseteq \mathcal{F}$ es independiente.

$\\{A_{1k},...A_{ik}\\}$

$$
P(\cap_{j=1}^k A_{ij})=\prod_{j=1}^k P(A_{ij})
$$

# Repaso de Teoría de la medida

## Límite de conjuntos

Sea $A_1,...,A_n \subseteq \Omega$,

$$
\lim_{n\rightarrow\infty}sup (A_n) = \bigcap_{n=1}^{\infty}\bigcup_{m=n}^{\infty}A_m
$$

$$
\lim_{n\rightarrow\infty}inf (A_n) = \bigcup_{n=1}^{\infty}\bigcap_{m=n}^{\infty}A_m
$$

La unión de una secuencia de conjuntos es el ínfimo y la intersección es el supremo.

$$
B_k = \bigcup_{n=k}^{\infty}A_n \Rightarrow B_{k+1} \subseteq B_k, \forall k.
$$

$$
C_k = \bigcap_{n=k}^{\infty}A_n \Rightarrow C_{k} \subseteq C_{k+1}, \forall k.
$$

Si son monótonas:

$$
\lim_{n\rightarrow\infty}sup (A_n) =\lim_{n\rightarrow\infty}inf (A_n)
$$

Definición $\\{a_n\\}$:

Sucesión decreciente $\downarrow$

$$
\lim_{n\rightarrow\infty} sup(a_n) = inf_{k\ge 1} sup_{n\ge k}(a_n)
$$

Sucesión creciente $\uparrow$

$$
\lim_{n\rightarrow\infty} inf(a_n) = sup_{k\ge 1} inf_{n\ge k}(a_n)
$$

$$
\lim_{n\rightarrow\infty} inf(a_n) \le \lim_{n\rightarrow \infty} sup(a_n)
$$

$$
\lim_{n\rightarrow\infty} a_n = \lim_{n\rightarrow\infty} sup(a_n) = \lim_{n\rightarrow\infty} inf(a_n)
$$

Ejercicio:

$$
\lim_{n\rightarrow\infty} inf(a_n) \subseteq \lim_{n\rightarrow\infty} sup(a_n)
$$

## Lema de Fatou
$$
P(\lim_{n\rightarrow\infty} inf(a_n)) \leq \lim_{n\rightarrow\infty} inf(P(a_n))
$$

$$
P(\lim_{n\rightarrow\infty} inf(A_n)) \leq \lim_{n\rightarrow\infty} inf(P(A_n)) \leq \lim_{n\rightarrow\infty} sup(P(A_n)) \leq P(\lim_{n\rightarrow\infty} sup(A_n))
$$

Consecuencia del Lema de Fatou es la continuidad de la medida de probabilidad.

$$
A_n \uparrow \Rightarrow P(A_n)\uparrow P(U)
$$

$$
A_n \downarrow \Rightarrow P(A_n)\downarrow 0
$$

$$
\mathbb{1}
$$

# Bibliografía

- Durret
- Dudley - Real Analysis
- Feller I y II
- Billingsley
- Wet the odds
- Teoría de la medida
- Ulam, Feyman - Proyecto Manhattan
- Kac, Probability, Number Theory
- Gnedenko, Elementary theory of probability


[^medible]: La palabra medible no existe. 
