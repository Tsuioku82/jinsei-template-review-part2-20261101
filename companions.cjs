'use strict';
const companions={
 bird:{name:'読書の魔女',src:'img/witch-book.png',alt:'本を抱える人型のオリジナルの読書の魔女'},
 flower:{name:'花の魔女',src:'img/witch-flower.png',alt:'花籠を持つ人型のオリジナルの花の魔女'},
 imp:{name:'小悪魔魔女',src:'img/witch-devil.png',alt:'小さな角と羽、花のリボンを持つ人型のオリジナルの小悪魔魔女'}
};
const defaultCompanion=id=>({'02':'bird','05':'flower','09':'imp'}[id]||'none');
module.exports={companions,defaultCompanion};