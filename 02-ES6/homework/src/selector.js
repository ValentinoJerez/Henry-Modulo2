var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  //Quiero a los hijos del elemento. Devuelve un array 
  let element = startEl.children;
  //Dentreo de cada elemento quiero ejecutar
  if(matchFunc(startEl)){
    //Si es true:
    resultSet.push(startEl);
  }
//Recorro y por cada uno aplico recursion
  for(let i = 0; i < element.length; i++){
    //Ejecuto la funcion de manera recursiva, devuelve array's:
    let result = traverseDomAndCollectElements(matchFunc,element[i])
    //Debo unificarlos:
    resultSet = [...resultSet,...result]
  }
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  //Me pregunto a que es igual el selector en la posicion 0:
  if(selector[0] === "#"){
    return "id"
  } else if (selector[0] === "."){
    return "class"
  } else if (selector.includes(".")){
    return "tag.class"
  } else {
    return "tag"
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  //Creo la fn:
  var matchFunction = function(element){
    //Testea si el elemento es igual a un selector especifico 
    if (selectorType === "id") {
      return `#${element.id}` === selector;
    } else if (selectorType === "class") {
      //Hay que recorrer el array para poder verificar 
      for(let i = 0; i < element.classList.length; i++){
         if(`.${element.classList[i]}` === selector){
        return true;
        }
      }
    } else if (selectorType === "tag.class") {
    //Estamos buscando dos cosas: valor del tag y valor del class
    //Uso destructuring  
    let [tag,className] = selector.split(".")
    //Usando recursion divido los elementos y busco uno por uno:
    return(matchFunctionMaker(tag)(element) 
    && matchFunctionMaker(`.${className}`)(element));
  } else if (selectorType === "tag") {
    return element.tagName && element.tagName.toLowerCase() === selector.toLowerCase();
    }
    return false;
  };  
  return matchFunction;
};

//Funcion selectora: $(lo que busca)
var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
