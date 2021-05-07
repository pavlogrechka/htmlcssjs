'use strict';

//get css variables
const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
const mainColor = rootStyles.getPropertyValue('--main-color');

//change css variables
root.style.setProperty('--main-color', 'green');
console.log(mainColor)


/**
 * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
 *
 * @private
 * @author Todd Motto
 * @link https://github.com/toddmotto/foreach
 * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
 * @callback requestCallback      callback   - Callback function for each iteration.
 * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
 * @returns {}
 */
const forEach = function (t, o, r) {
  if ('[object Object]' === Object.prototype.toString.call(t))
    for (var c in t) {
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    } else {
    for (var e = 0, l = t.length; l > e; e++)o.call(r, t[e], e, t)
  }
};

const hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("is-active");
    }, false);
  });
}


//GET DEVICE TYPE

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/blackBerry/i);
  },
  iOs: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOs() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};
// add a class for the body depending on isMobile() result
if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}


//scroll to fixed sections
// const menuLinks = document.querySelectorAll('menu__link[data-goto]');
// if (menuLinks.length > 0) {
//   menuLinks.forEach(menuLink => {
//     menuLink.addEventListener("click", onMenuLinkClick)
//   })
// }
