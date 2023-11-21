# coding-project-template
Esta pagina con la que vamos a hacer los ejercicios del curso consta de 6 componentes:
.Budget
.ExpenseItem
.ExpenseList
.ExpenseTotal (Gastado hasta ahora)
.Remaining
.Allocation Form


Todos los componentes estarán usando la librería de Redux.js para la administración de los estados a través de 'AppContext.js'.

Dentro de 'AppContext.js' se creará un Reducer que basado en la 'Action' que reciba de cada componente, modificará el estado de una forma.

Habrá que crear un estado inicial para la State Store.

Se creará un Componente 'Provider' que será un contendero donde meteremos todos los componentes a los que queremos dar acceso al estado general.

