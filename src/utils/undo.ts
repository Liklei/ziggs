import Immutable from 'immutable';
var map1: Immutable.Map<string, number>;
map1 = Immutable.Map({ a: 1, b: 2, c: 3 });
var map2 = map1.set('b', 50);
map1.get('b'); // 2
map2.get('b'); // 50


function initOperator(

): void { 
    console.log('initOperator')
}

function undo(): void { 
    console.log('undo')
}

function redo(): void { 
    console.log('redo')
}

export {
    initOperator,
    undo,
    redo
}


