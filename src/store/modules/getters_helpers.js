
const flatten = require('flat');
const _ = require('lodash');

export function getByKeyword(list, keyword) {
     const search = keyword.trim().toLowerCase()
     if (!search.length) return list
     return list.filter(item => item.name.toLowerCase().indexOf(search) > -1)
}

export function getByAge(list, keyword) {
     const search = keyword.trim().toLowerCase()
     if (!search.length) return list
     return list.filter(item => item.age == search)
}


export function getFullSearch(list, keyword) {
     const search = keyword.trim().toLowerCase();
     if (!search.length) return list
     return list.filter(item => {
          let flattenItem = flatten(item);
          let keys = Object.keys(flattenItem);

          let arrToCheck = keys.map(key => {

               return key !== '_id' ? flattenItem[key] : '';
          });
          let strToCheck = arrToCheck.join(' ');
          let finalString = strToCheck.trim().toLowerCase();
          return finalString.trim().includes(search);
     })
}


export function getChunkedData(arr, sliceStart, sliceEnd) {
     console.log(sliceStart, sliceEnd)
     if (arr.length > 7) {
          let slicedArr = _.chunk(arr, 7).slice(0, 1);
          return slicedArr[0]
     }
}