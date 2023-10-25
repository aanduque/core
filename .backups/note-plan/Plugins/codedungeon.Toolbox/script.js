var exports = function(exports) {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function commonjsRequire(path) {
    throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  var dist = {
    exports: {}
  };
  (function(module, exports) {
    (function(global, factory) {
      module.exports = factory();
    })(commonjsGlobal, (function() {
      function createCommonjsModule(fn, module) {
        return module = {
          exports: {}
        }, fn(module, module.exports), module.exports;
      }
      var _global = createCommonjsModule((function(module) {
        var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") {
          __g = global;
        }
      }));
      var _core = createCommonjsModule((function(module) {
        var core = module.exports = {
          version: "2.6.5"
        };
        if (typeof __e == "number") {
          __e = core;
        }
      }));
      _core.version;
      var _isObject = function(it) {
        return typeof it === "object" ? it !== null : typeof it === "function";
      };
      var _anObject = function(it) {
        if (!_isObject(it)) {
          throw TypeError(it + " is not an object!");
        }
        return it;
      };
      var _fails = function(exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
      var _descriptors = !_fails((function() {
        return Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          }
        }).a != 7;
      }));
      var document = _global.document;
      var is = _isObject(document) && _isObject(document.createElement);
      var _domCreate = function(it) {
        return is ? document.createElement(it) : {};
      };
      var _ie8DomDefine = !_descriptors && !_fails((function() {
        return Object.defineProperty(_domCreate("div"), "a", {
          get: function() {
            return 7;
          }
        }).a != 7;
      }));
      var _toPrimitive = function(it, S) {
        if (!_isObject(it)) {
          return it;
        }
        var fn, val;
        if (S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) {
          return val;
        }
        if (typeof (fn = it.valueOf) == "function" && !_isObject(val = fn.call(it))) {
          return val;
        }
        if (!S && typeof (fn = it.toString) == "function" && !_isObject(val = fn.call(it))) {
          return val;
        }
        throw TypeError("Can't convert object to primitive value");
      };
      var dP = Object.defineProperty;
      var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        _anObject(O);
        P = _toPrimitive(P, true);
        _anObject(Attributes);
        if (_ie8DomDefine) {
          try {
            return dP(O, P, Attributes);
          } catch (e) {}
        }
        if ("get" in Attributes || "set" in Attributes) {
          throw TypeError("Accessors not supported!");
        }
        if ("value" in Attributes) {
          O[P] = Attributes.value;
        }
        return O;
      };
      var _objectDp = {
        f: f
      };
      var _propertyDesc = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
      var _hide = _descriptors ? function(object, key, value) {
        return _objectDp.f(object, key, _propertyDesc(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
      var hasOwnProperty = {}.hasOwnProperty;
      var _has = function(it, key) {
        return hasOwnProperty.call(it, key);
      };
      var id = 0;
      var px = Math.random();
      var _uid = function(key) {
        return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + px).toString(36));
      };
      var _shared = createCommonjsModule((function(module) {
        var SHARED = "__core-js_shared__";
        var store = _global[SHARED] || (_global[SHARED] = {});
        (module.exports = function(key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })("versions", []).push({
          version: _core.version,
          mode: "global",
          copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        });
      }));
      var _functionToString = _shared("native-function-to-string", Function.toString);
      var _redefine = createCommonjsModule((function(module) {
        var SRC = _uid("src");
        var TO_STRING = "toString";
        var TPL = ("" + _functionToString).split(TO_STRING);
        _core.inspectSource = function(it) {
          return _functionToString.call(it);
        };
        (module.exports = function(O, key, val, safe) {
          var isFunction = typeof val == "function";
          if (isFunction) {
            _has(val, "name") || _hide(val, "name", key);
          }
          if (O[key] === val) {
            return;
          }
          if (isFunction) {
            _has(val, SRC) || _hide(val, SRC, O[key] ? "" + O[key] : TPL.join(String(key)));
          }
          if (O === _global) {
            O[key] = val;
          } else if (!safe) {
            delete O[key];
            _hide(O, key, val);
          } else if (O[key]) {
            O[key] = val;
          } else {
            _hide(O, key, val);
          }
        })(Function.prototype, TO_STRING, (function toString() {
          return typeof this == "function" && this[SRC] || _functionToString.call(this);
        }));
      }));
      var _aFunction = function(it) {
        if (typeof it != "function") {
          throw TypeError(it + " is not a function!");
        }
        return it;
      };
      var _ctx = function(fn, that, length) {
        _aFunction(fn);
        if (that === undefined) {
          return fn;
        }
        switch (length) {
         case 1:
          return function(a) {
            return fn.call(that, a);
          };

         case 2:
          return function(a, b) {
            return fn.call(that, a, b);
          };

         case 3:
          return function(a, b, c) {
            return fn.call(that, a, b, c);
          };
        }
        return function() {
          return fn.apply(that, arguments);
        };
      };
      var PROTOTYPE = "prototype";
      var $export = function(type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
        var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
        var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
        var key, own, out, exp;
        if (IS_GLOBAL) {
          source = name;
        }
        for (key in source) {
          own = !IS_FORCED && target && target[key] !== undefined;
          out = (own ? target : source)[key];
          exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == "function" ? _ctx(Function.call, out) : out;
          if (target) {
            _redefine(target, key, out, type & $export.U);
          }
          if (exports[key] != out) {
            _hide(exports, key, exp);
          }
          if (IS_PROTO && expProto[key] != out) {
            expProto[key] = out;
          }
        }
      };
      _global.core = _core;
      $export.F = 1;
      $export.G = 2;
      $export.S = 4;
      $export.P = 8;
      $export.B = 16;
      $export.W = 32;
      $export.U = 64;
      $export.R = 128;
      var _export = $export;
      var ceil = Math.ceil;
      var floor = Math.floor;
      var _toInteger = function(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
      var _defined = function(it) {
        if (it == undefined) {
          throw TypeError("Can't call method on  " + it);
        }
        return it;
      };
      var _stringAt = function(TO_STRING) {
        return function(that, pos) {
          var s = String(_defined(that));
          var i = _toInteger(pos);
          var l = s.length;
          var a, b;
          if (i < 0 || i >= l) {
            return TO_STRING ? "" : undefined;
          }
          a = s.charCodeAt(i);
          return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
        };
      };
      var $at = _stringAt(false);
      _export(_export.P, "String", {
        codePointAt: function codePointAt(pos) {
          return $at(this, pos);
        }
      });
      _core.String.codePointAt;
      var max = Math.max;
      var min = Math.min;
      var _toAbsoluteIndex = function(index, length) {
        index = _toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
      var fromCharCode = String.fromCharCode;
      var $fromCodePoint = String.fromCodePoint;
      _export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), "String", {
        fromCodePoint: function fromCodePoint(x) {
          var arguments$1 = arguments;
          var res = [];
          var aLen = arguments.length;
          var i = 0;
          var code;
          while (aLen > i) {
            code = +arguments$1[i++];
            if (_toAbsoluteIndex(code, 1114111) !== code) {
              throw RangeError(code + " is not a valid code point");
            }
            res.push(code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320));
          }
          return res.join("");
        }
      });
      _core.String.fromCodePoint;
      var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
      var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
      var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
      var unicode = {
        Space_Separator: Space_Separator,
        ID_Start: ID_Start,
        ID_Continue: ID_Continue
      };
      var util = {
        isSpaceSeparator: function isSpaceSeparator(c) {
          return typeof c === "string" && unicode.Space_Separator.test(c);
        },
        isIdStartChar: function isIdStartChar(c) {
          return typeof c === "string" && (c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c === "$" || c === "_" || unicode.ID_Start.test(c));
        },
        isIdContinueChar: function isIdContinueChar(c) {
          return typeof c === "string" && (c >= "a" && c <= "z" || c >= "A" && c <= "Z" || c >= "0" && c <= "9" || c === "$" || c === "_" || c === "‌" || c === "‍" || unicode.ID_Continue.test(c));
        },
        isDigit: function isDigit(c) {
          return typeof c === "string" && /[0-9]/.test(c);
        },
        isHexDigit: function isHexDigit(c) {
          return typeof c === "string" && /[0-9A-Fa-f]/.test(c);
        }
      };
      var source;
      var parseState;
      var stack;
      var pos;
      var line;
      var column;
      var token;
      var key;
      var root;
      var parse = function parse(text, reviver) {
        source = String(text);
        parseState = "start";
        stack = [];
        pos = 0;
        line = 1;
        column = 0;
        token = undefined;
        key = undefined;
        root = undefined;
        do {
          token = lex();
          parseStates[parseState]();
        } while (token.type !== "eof");
        if (typeof reviver === "function") {
          return internalize({
            "": root
          }, "", reviver);
        }
        return root;
      };
      function internalize(holder, name, reviver) {
        var value = holder[name];
        if (value != null && typeof value === "object") {
          for (var key in value) {
            var replacement = internalize(value, key, reviver);
            if (replacement === undefined) {
              delete value[key];
            } else {
              value[key] = replacement;
            }
          }
        }
        return reviver.call(holder, name, value);
      }
      var lexState;
      var buffer;
      var doubleQuote;
      var sign;
      var c;
      function lex() {
        lexState = "default";
        buffer = "";
        doubleQuote = false;
        sign = 1;
        for (;;) {
          c = peek();
          var token = lexStates[lexState]();
          if (token) {
            return token;
          }
        }
      }
      function peek() {
        if (source[pos]) {
          return String.fromCodePoint(source.codePointAt(pos));
        }
      }
      function read() {
        var c = peek();
        if (c === "\n") {
          line++;
          column = 0;
        } else if (c) {
          column += c.length;
        } else {
          column++;
        }
        if (c) {
          pos += c.length;
        }
        return c;
      }
      var lexStates = {
        default: function default$1() {
          switch (c) {
           case "\t":
           case "\v":
           case "\f":
           case " ":
           case " ":
           case "\ufeff":
           case "\n":
           case "\r":
           case "\u2028":
           case "\u2029":
            read();
            return;

           case "/":
            read();
            lexState = "comment";
            return;

           case undefined:
            read();
            return newToken("eof");
          }
          if (util.isSpaceSeparator(c)) {
            read();
            return;
          }
          return lexStates[parseState]();
        },
        comment: function comment() {
          switch (c) {
           case "*":
            read();
            lexState = "multiLineComment";
            return;

           case "/":
            read();
            lexState = "singleLineComment";
            return;
          }
          throw invalidChar(read());
        },
        multiLineComment: function multiLineComment() {
          switch (c) {
           case "*":
            read();
            lexState = "multiLineCommentAsterisk";
            return;

           case undefined:
            throw invalidChar(read());
          }
          read();
        },
        multiLineCommentAsterisk: function multiLineCommentAsterisk() {
          switch (c) {
           case "*":
            read();
            return;

           case "/":
            read();
            lexState = "default";
            return;

           case undefined:
            throw invalidChar(read());
          }
          read();
          lexState = "multiLineComment";
        },
        singleLineComment: function singleLineComment() {
          switch (c) {
           case "\n":
           case "\r":
           case "\u2028":
           case "\u2029":
            read();
            lexState = "default";
            return;

           case undefined:
            read();
            return newToken("eof");
          }
          read();
        },
        value: function value() {
          switch (c) {
           case "{":
           case "[":
            return newToken("punctuator", read());

           case "n":
            read();
            literal("ull");
            return newToken("null", null);

           case "t":
            read();
            literal("rue");
            return newToken("boolean", true);

           case "f":
            read();
            literal("alse");
            return newToken("boolean", false);

           case "-":
           case "+":
            if (read() === "-") {
              sign = -1;
            }
            lexState = "sign";
            return;

           case ".":
            buffer = read();
            lexState = "decimalPointLeading";
            return;

           case "0":
            buffer = read();
            lexState = "zero";
            return;

           case "1":
           case "2":
           case "3":
           case "4":
           case "5":
           case "6":
           case "7":
           case "8":
           case "9":
            buffer = read();
            lexState = "decimalInteger";
            return;

           case "I":
            read();
            literal("nfinity");
            return newToken("numeric", Infinity);

           case "N":
            read();
            literal("aN");
            return newToken("numeric", NaN);

           case '"':
           case "'":
            doubleQuote = read() === '"';
            buffer = "";
            lexState = "string";
            return;
          }
          throw invalidChar(read());
        },
        identifierNameStartEscape: function identifierNameStartEscape() {
          if (c !== "u") {
            throw invalidChar(read());
          }
          read();
          var u = unicodeEscape();
          switch (u) {
           case "$":
           case "_":
            break;

           default:
            if (!util.isIdStartChar(u)) {
              throw invalidIdentifier();
            }
            break;
          }
          buffer += u;
          lexState = "identifierName";
        },
        identifierName: function identifierName() {
          switch (c) {
           case "$":
           case "_":
           case "‌":
           case "‍":
            buffer += read();
            return;

           case "\\":
            read();
            lexState = "identifierNameEscape";
            return;
          }
          if (util.isIdContinueChar(c)) {
            buffer += read();
            return;
          }
          return newToken("identifier", buffer);
        },
        identifierNameEscape: function identifierNameEscape() {
          if (c !== "u") {
            throw invalidChar(read());
          }
          read();
          var u = unicodeEscape();
          switch (u) {
           case "$":
           case "_":
           case "‌":
           case "‍":
            break;

           default:
            if (!util.isIdContinueChar(u)) {
              throw invalidIdentifier();
            }
            break;
          }
          buffer += u;
          lexState = "identifierName";
        },
        sign: function sign$1() {
          switch (c) {
           case ".":
            buffer = read();
            lexState = "decimalPointLeading";
            return;

           case "0":
            buffer = read();
            lexState = "zero";
            return;

           case "1":
           case "2":
           case "3":
           case "4":
           case "5":
           case "6":
           case "7":
           case "8":
           case "9":
            buffer = read();
            lexState = "decimalInteger";
            return;

           case "I":
            read();
            literal("nfinity");
            return newToken("numeric", sign * Infinity);

           case "N":
            read();
            literal("aN");
            return newToken("numeric", NaN);
          }
          throw invalidChar(read());
        },
        zero: function zero() {
          switch (c) {
           case ".":
            buffer += read();
            lexState = "decimalPoint";
            return;

           case "e":
           case "E":
            buffer += read();
            lexState = "decimalExponent";
            return;

           case "x":
           case "X":
            buffer += read();
            lexState = "hexadecimal";
            return;
          }
          return newToken("numeric", sign * 0);
        },
        decimalInteger: function decimalInteger() {
          switch (c) {
           case ".":
            buffer += read();
            lexState = "decimalPoint";
            return;

           case "e":
           case "E":
            buffer += read();
            lexState = "decimalExponent";
            return;
          }
          if (util.isDigit(c)) {
            buffer += read();
            return;
          }
          return newToken("numeric", sign * Number(buffer));
        },
        decimalPointLeading: function decimalPointLeading() {
          if (util.isDigit(c)) {
            buffer += read();
            lexState = "decimalFraction";
            return;
          }
          throw invalidChar(read());
        },
        decimalPoint: function decimalPoint() {
          switch (c) {
           case "e":
           case "E":
            buffer += read();
            lexState = "decimalExponent";
            return;
          }
          if (util.isDigit(c)) {
            buffer += read();
            lexState = "decimalFraction";
            return;
          }
          return newToken("numeric", sign * Number(buffer));
        },
        decimalFraction: function decimalFraction() {
          switch (c) {
           case "e":
           case "E":
            buffer += read();
            lexState = "decimalExponent";
            return;
          }
          if (util.isDigit(c)) {
            buffer += read();
            return;
          }
          return newToken("numeric", sign * Number(buffer));
        },
        decimalExponent: function decimalExponent() {
          switch (c) {
           case "+":
           case "-":
            buffer += read();
            lexState = "decimalExponentSign";
            return;
          }
          if (util.isDigit(c)) {
            buffer += read();
            lexState = "decimalExponentInteger";
            return;
          }
          throw invalidChar(read());
        },
        decimalExponentSign: function decimalExponentSign() {
          if (util.isDigit(c)) {
            buffer += read();
            lexState = "decimalExponentInteger";
            return;
          }
          throw invalidChar(read());
        },
        decimalExponentInteger: function decimalExponentInteger() {
          if (util.isDigit(c)) {
            buffer += read();
            return;
          }
          return newToken("numeric", sign * Number(buffer));
        },
        hexadecimal: function hexadecimal() {
          if (util.isHexDigit(c)) {
            buffer += read();
            lexState = "hexadecimalInteger";
            return;
          }
          throw invalidChar(read());
        },
        hexadecimalInteger: function hexadecimalInteger() {
          if (util.isHexDigit(c)) {
            buffer += read();
            return;
          }
          return newToken("numeric", sign * Number(buffer));
        },
        string: function string() {
          switch (c) {
           case "\\":
            read();
            buffer += escape();
            return;

           case '"':
            if (doubleQuote) {
              read();
              return newToken("string", buffer);
            }
            buffer += read();
            return;

           case "'":
            if (!doubleQuote) {
              read();
              return newToken("string", buffer);
            }
            buffer += read();
            return;

           case "\n":
           case "\r":
            throw invalidChar(read());

           case "\u2028":
           case "\u2029":
            separatorChar(c);
            break;

           case undefined:
            throw invalidChar(read());
          }
          buffer += read();
        },
        start: function start() {
          switch (c) {
           case "{":
           case "[":
            return newToken("punctuator", read());
          }
          lexState = "value";
        },
        beforePropertyName: function beforePropertyName() {
          switch (c) {
           case "$":
           case "_":
            buffer = read();
            lexState = "identifierName";
            return;

           case "\\":
            read();
            lexState = "identifierNameStartEscape";
            return;

           case "}":
            return newToken("punctuator", read());

           case '"':
           case "'":
            doubleQuote = read() === '"';
            lexState = "string";
            return;
          }
          if (util.isIdStartChar(c)) {
            buffer += read();
            lexState = "identifierName";
            return;
          }
          throw invalidChar(read());
        },
        afterPropertyName: function afterPropertyName() {
          if (c === ":") {
            return newToken("punctuator", read());
          }
          throw invalidChar(read());
        },
        beforePropertyValue: function beforePropertyValue() {
          lexState = "value";
        },
        afterPropertyValue: function afterPropertyValue() {
          switch (c) {
           case ",":
           case "}":
            return newToken("punctuator", read());
          }
          throw invalidChar(read());
        },
        beforeArrayValue: function beforeArrayValue() {
          if (c === "]") {
            return newToken("punctuator", read());
          }
          lexState = "value";
        },
        afterArrayValue: function afterArrayValue() {
          switch (c) {
           case ",":
           case "]":
            return newToken("punctuator", read());
          }
          throw invalidChar(read());
        },
        end: function end() {
          throw invalidChar(read());
        }
      };
      function newToken(type, value) {
        return {
          type: type,
          value: value,
          line: line,
          column: column
        };
      }
      function literal(s) {
        for (var i = 0, list = s; i < list.length; i += 1) {
          var c = list[i];
          var p = peek();
          if (p !== c) {
            throw invalidChar(read());
          }
          read();
        }
      }
      function escape() {
        var c = peek();
        switch (c) {
         case "b":
          read();
          return "\b";

         case "f":
          read();
          return "\f";

         case "n":
          read();
          return "\n";

         case "r":
          read();
          return "\r";

         case "t":
          read();
          return "\t";

         case "v":
          read();
          return "\v";

         case "0":
          read();
          if (util.isDigit(peek())) {
            throw invalidChar(read());
          }
          return "\0";

         case "x":
          read();
          return hexEscape();

         case "u":
          read();
          return unicodeEscape();

         case "\n":
         case "\u2028":
         case "\u2029":
          read();
          return "";

         case "\r":
          read();
          if (peek() === "\n") {
            read();
          }
          return "";

         case "1":
         case "2":
         case "3":
         case "4":
         case "5":
         case "6":
         case "7":
         case "8":
         case "9":
          throw invalidChar(read());

         case undefined:
          throw invalidChar(read());
        }
        return read();
      }
      function hexEscape() {
        var buffer = "";
        var c = peek();
        if (!util.isHexDigit(c)) {
          throw invalidChar(read());
        }
        buffer += read();
        c = peek();
        if (!util.isHexDigit(c)) {
          throw invalidChar(read());
        }
        buffer += read();
        return String.fromCodePoint(parseInt(buffer, 16));
      }
      function unicodeEscape() {
        var buffer = "";
        var count = 4;
        while (count-- > 0) {
          var c = peek();
          if (!util.isHexDigit(c)) {
            throw invalidChar(read());
          }
          buffer += read();
        }
        return String.fromCodePoint(parseInt(buffer, 16));
      }
      var parseStates = {
        start: function start() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          push();
        },
        beforePropertyName: function beforePropertyName() {
          switch (token.type) {
           case "identifier":
           case "string":
            key = token.value;
            parseState = "afterPropertyName";
            return;

           case "punctuator":
            pop();
            return;

           case "eof":
            throw invalidEOF();
          }
        },
        afterPropertyName: function afterPropertyName() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          parseState = "beforePropertyValue";
        },
        beforePropertyValue: function beforePropertyValue() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          push();
        },
        beforeArrayValue: function beforeArrayValue() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          if (token.type === "punctuator" && token.value === "]") {
            pop();
            return;
          }
          push();
        },
        afterPropertyValue: function afterPropertyValue() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          switch (token.value) {
           case ",":
            parseState = "beforePropertyName";
            return;

           case "}":
            pop();
          }
        },
        afterArrayValue: function afterArrayValue() {
          if (token.type === "eof") {
            throw invalidEOF();
          }
          switch (token.value) {
           case ",":
            parseState = "beforeArrayValue";
            return;

           case "]":
            pop();
          }
        },
        end: function end() {}
      };
      function push() {
        var value;
        switch (token.type) {
         case "punctuator":
          switch (token.value) {
           case "{":
            value = {};
            break;

           case "[":
            value = [];
            break;
          }
          break;

         case "null":
         case "boolean":
         case "numeric":
         case "string":
          value = token.value;
          break;
        }
        if (root === undefined) {
          root = value;
        } else {
          var parent = stack[stack.length - 1];
          if (Array.isArray(parent)) {
            parent.push(value);
          } else {
            parent[key] = value;
          }
        }
        if (value !== null && typeof value === "object") {
          stack.push(value);
          if (Array.isArray(value)) {
            parseState = "beforeArrayValue";
          } else {
            parseState = "beforePropertyName";
          }
        } else {
          var current = stack[stack.length - 1];
          if (current == null) {
            parseState = "end";
          } else if (Array.isArray(current)) {
            parseState = "afterArrayValue";
          } else {
            parseState = "afterPropertyValue";
          }
        }
      }
      function pop() {
        stack.pop();
        var current = stack[stack.length - 1];
        if (current == null) {
          parseState = "end";
        } else if (Array.isArray(current)) {
          parseState = "afterArrayValue";
        } else {
          parseState = "afterPropertyValue";
        }
      }
      function invalidChar(c) {
        if (c === undefined) {
          return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
        }
        return syntaxError("JSON5: invalid character '" + formatChar(c) + "' at " + line + ":" + column);
      }
      function invalidEOF() {
        return syntaxError("JSON5: invalid end of input at " + line + ":" + column);
      }
      function invalidIdentifier() {
        column -= 5;
        return syntaxError("JSON5: invalid identifier character at " + line + ":" + column);
      }
      function separatorChar(c) {
        console.warn("JSON5: '" + formatChar(c) + "' in strings is not valid ECMAScript; consider escaping");
      }
      function formatChar(c) {
        var replacements = {
          "'": "\\'",
          '"': '\\"',
          "\\": "\\\\",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\v": "\\v",
          "\0": "\\0",
          "\u2028": "\\u2028",
          "\u2029": "\\u2029"
        };
        if (replacements[c]) {
          return replacements[c];
        }
        if (c < " ") {
          var hexString = c.charCodeAt(0).toString(16);
          return "\\x" + ("00" + hexString).substring(hexString.length);
        }
        return c;
      }
      function syntaxError(message) {
        var err = new SyntaxError(message);
        err.lineNumber = line;
        err.columnNumber = column;
        return err;
      }
      var stringify = function stringify(value, replacer, space) {
        var stack = [];
        var indent = "";
        var propertyList;
        var replacerFunc;
        var gap = "";
        var quote;
        if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
          space = replacer.space;
          quote = replacer.quote;
          replacer = replacer.replacer;
        }
        if (typeof replacer === "function") {
          replacerFunc = replacer;
        } else if (Array.isArray(replacer)) {
          propertyList = [];
          for (var i = 0, list = replacer; i < list.length; i += 1) {
            var v = list[i];
            var item = void 0;
            if (typeof v === "string") {
              item = v;
            } else if (typeof v === "number" || v instanceof String || v instanceof Number) {
              item = String(v);
            }
            if (item !== undefined && propertyList.indexOf(item) < 0) {
              propertyList.push(item);
            }
          }
        }
        if (space instanceof Number) {
          space = Number(space);
        } else if (space instanceof String) {
          space = String(space);
        }
        if (typeof space === "number") {
          if (space > 0) {
            space = Math.min(10, Math.floor(space));
            gap = "          ".substr(0, space);
          }
        } else if (typeof space === "string") {
          gap = space.substr(0, 10);
        }
        return serializeProperty("", {
          "": value
        });
        function serializeProperty(key, holder) {
          var value = holder[key];
          if (value != null) {
            if (typeof value.toJSON5 === "function") {
              value = value.toJSON5(key);
            } else if (typeof value.toJSON === "function") {
              value = value.toJSON(key);
            }
          }
          if (replacerFunc) {
            value = replacerFunc.call(holder, key, value);
          }
          if (value instanceof Number) {
            value = Number(value);
          } else if (value instanceof String) {
            value = String(value);
          } else if (value instanceof Boolean) {
            value = value.valueOf();
          }
          switch (value) {
           case null:
            return "null";

           case true:
            return "true";

           case false:
            return "false";
          }
          if (typeof value === "string") {
            return quoteString(value);
          }
          if (typeof value === "number") {
            return String(value);
          }
          if (typeof value === "object") {
            return Array.isArray(value) ? serializeArray(value) : serializeObject(value);
          }
          return undefined;
        }
        function quoteString(value) {
          var quotes = {
            "'": .1,
            '"': .2
          };
          var replacements = {
            "'": "\\'",
            '"': '\\"',
            "\\": "\\\\",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\v",
            "\0": "\\0",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
          };
          var product = "";
          for (var i = 0; i < value.length; i++) {
            var c = value[i];
            switch (c) {
             case "'":
             case '"':
              quotes[c]++;
              product += c;
              continue;

             case "\0":
              if (util.isDigit(value[i + 1])) {
                product += "\\x00";
                continue;
              }
            }
            if (replacements[c]) {
              product += replacements[c];
              continue;
            }
            if (c < " ") {
              var hexString = c.charCodeAt(0).toString(16);
              product += "\\x" + ("00" + hexString).substring(hexString.length);
              continue;
            }
            product += c;
          }
          var quoteChar = quote || Object.keys(quotes).reduce((function(a, b) {
            return quotes[a] < quotes[b] ? a : b;
          }));
          product = product.replace(new RegExp(quoteChar, "g"), replacements[quoteChar]);
          return quoteChar + product + quoteChar;
        }
        function serializeObject(value) {
          if (stack.indexOf(value) >= 0) {
            throw TypeError("Converting circular structure to JSON5");
          }
          stack.push(value);
          var stepback = indent;
          indent = indent + gap;
          var keys = propertyList || Object.keys(value);
          var partial = [];
          for (var i = 0, list = keys; i < list.length; i += 1) {
            var key = list[i];
            var propertyString = serializeProperty(key, value);
            if (propertyString !== undefined) {
              var member = serializeKey(key) + ":";
              if (gap !== "") {
                member += " ";
              }
              member += propertyString;
              partial.push(member);
            }
          }
          var final;
          if (partial.length === 0) {
            final = "{}";
          } else {
            var properties;
            if (gap === "") {
              properties = partial.join(",");
              final = "{" + properties + "}";
            } else {
              var separator = ",\n" + indent;
              properties = partial.join(separator);
              final = "{\n" + indent + properties + ",\n" + stepback + "}";
            }
          }
          stack.pop();
          indent = stepback;
          return final;
        }
        function serializeKey(key) {
          if (key.length === 0) {
            return quoteString(key);
          }
          var firstChar = String.fromCodePoint(key.codePointAt(0));
          if (!util.isIdStartChar(firstChar)) {
            return quoteString(key);
          }
          for (var i = firstChar.length; i < key.length; i++) {
            if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) {
              return quoteString(key);
            }
          }
          return key;
        }
        function serializeArray(value) {
          if (stack.indexOf(value) >= 0) {
            throw TypeError("Converting circular structure to JSON5");
          }
          stack.push(value);
          var stepback = indent;
          indent = indent + gap;
          var partial = [];
          for (var i = 0; i < value.length; i++) {
            var propertyString = serializeProperty(String(i), value);
            partial.push(propertyString !== undefined ? propertyString : "null");
          }
          var final;
          if (partial.length === 0) {
            final = "[]";
          } else {
            if (gap === "") {
              var properties = partial.join(",");
              final = "[" + properties + "]";
            } else {
              var separator = ",\n" + indent;
              var properties$1 = partial.join(separator);
              final = "[\n" + indent + properties$1 + ",\n" + stepback + "]";
            }
          }
          stack.pop();
          indent = stepback;
          return final;
        }
      };
      var JSON5 = {
        parse: parse,
        stringify: stringify
      };
      var lib = JSON5;
      var es5 = lib;
      return es5;
    }));
  })(dist);
  var strftime = {
    exports: {}
  };
  (function(module) {
    (function() {
      var Locales = {
        de_DE: {
          days: [ "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag" ],
          shortDays: [ "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa" ],
          months: [ "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ],
          shortMonths: [ "Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez" ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d.%m.%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D"
          }
        },
        en_CA: {
          days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
          shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
          months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
          shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
          ordinalSuffixes: [ "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st" ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%r",
            x: "%D"
          }
        },
        en_US: {
          days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
          shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
          months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
          shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
          ordinalSuffixes: [ "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th", "st" ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%m/%d/%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%r",
            x: "%D"
          }
        },
        es_MX: {
          days: [ "domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado" ],
          shortDays: [ "dom", "lun", "mar", "mié", "jue", "vie", "sáb" ],
          months: [ "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", " diciembre" ],
          shortMonths: [ "ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic" ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D"
          }
        },
        fr_FR: {
          days: [ "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi" ],
          shortDays: [ "dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam." ],
          months: [ "janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre" ],
          shortMonths: [ "janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc." ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D"
          }
        },
        it_IT: {
          days: [ "domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato" ],
          shortDays: [ "dom", "lun", "mar", "mer", "gio", "ven", "sab" ],
          months: [ "gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre" ],
          shortMonths: [ "pr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic" ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D"
          }
        },
        nl_NL: {
          days: [ "zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag" ],
          shortDays: [ "zo", "ma", "di", "wo", "do", "vr", "za" ],
          months: [ "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december" ],
          shortMonths: [ "jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec" ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d-%m-%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D"
          }
        },
        pt_BR: {
          days: [ "domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado" ],
          shortDays: [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ],
          months: [ "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro" ],
          shortMonths: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d-%m-%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D"
          }
        },
        ru_RU: {
          days: [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ],
          shortDays: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
          months: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
          shortMonths: [ "янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек" ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X",
            D: "%d.%m.%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D"
          }
        },
        tr_TR: {
          days: [ "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi" ],
          shortDays: [ "Paz", "Pzt", "Sal", "Çrş", "Prş", "Cum", "Cts" ],
          months: [ "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık" ],
          shortMonths: [ "Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara" ],
          AM: "ÖÖ",
          PM: "ÖS",
          am: "ÖÖ",
          pm: "ÖS",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d-%m-%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D"
          }
        },
        zh_CN: {
          days: [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
          shortDays: [ "日", "一", "二", "三", "四", "五", "六" ],
          months: [ "一月份", "二月份", "三月份", "四月份", "五月份", "六月份", "七月份", "八月份", "九月份", "十月份", "十一月份", "十二月份" ],
          shortMonths: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
          AM: "上午",
          PM: "下午",
          am: "上午",
          pm: "下午",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%r",
            x: "%D"
          }
        }
      };
      var DefaultLocale = Locales["en_US"], defaultStrftime = new Strftime(DefaultLocale, 0, false);
      {
        module.exports = defaultStrftime;
      }
      if (typeof Date.now !== "function") {
        Date.now = function() {
          return +new Date;
        };
      }
      function Strftime(locale, customTimezoneOffset, useUtcTimezone) {
        var _locale = locale || DefaultLocale, _customTimezoneOffset = customTimezoneOffset || 0, _useUtcBasedDate = useUtcTimezone || false, _cachedDateTimestamp = 0, _cachedDate;
        function _strftime(format, date) {
          var timestamp;
          if (!date) {
            var currentTimestamp = Date.now();
            if (currentTimestamp > _cachedDateTimestamp) {
              _cachedDateTimestamp = currentTimestamp;
              _cachedDate = new Date(_cachedDateTimestamp);
              timestamp = _cachedDateTimestamp;
              if (_useUtcBasedDate) {
                _cachedDate = new Date(_cachedDateTimestamp + getTimestampToUtcOffsetFor(_cachedDate) + _customTimezoneOffset);
              }
            } else {
              timestamp = _cachedDateTimestamp;
            }
            date = _cachedDate;
          } else {
            timestamp = date.getTime();
            if (_useUtcBasedDate) {
              var utcOffset = getTimestampToUtcOffsetFor(date);
              date = new Date(timestamp + utcOffset + _customTimezoneOffset);
              if (getTimestampToUtcOffsetFor(date) !== utcOffset) {
                var newUTCOffset = getTimestampToUtcOffsetFor(date);
                date = new Date(timestamp + newUTCOffset + _customTimezoneOffset);
              }
            }
          }
          return _processFormat(format, date, _locale, timestamp);
        }
        function _processFormat(format, date, locale, timestamp) {
          var resultString = "", padding = null, isInScope = false, length = format.length, extendedTZ = false;
          for (var i = 0; i < length; i++) {
            var currentCharCode = format.charCodeAt(i);
            if (isInScope === true) {
              if (currentCharCode === 45) {
                padding = "";
                continue;
              } else if (currentCharCode === 95) {
                padding = " ";
                continue;
              } else if (currentCharCode === 48) {
                padding = "0";
                continue;
              } else if (currentCharCode === 58) {
                if (extendedTZ) {
                  warn("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime");
                }
                extendedTZ = true;
                continue;
              }
              switch (currentCharCode) {
               case 37:
                resultString += "%";
                break;

               case 65:
                resultString += locale.days[date.getDay()];
                break;

               case 66:
                resultString += locale.months[date.getMonth()];
                break;

               case 67:
                resultString += padTill2(Math.floor(date.getFullYear() / 100), padding);
                break;

               case 68:
                resultString += _processFormat(locale.formats.D, date, locale, timestamp);
                break;

               case 70:
                resultString += _processFormat(locale.formats.F, date, locale, timestamp);
                break;

               case 72:
                resultString += padTill2(date.getHours(), padding);
                break;

               case 73:
                resultString += padTill2(hours12(date.getHours()), padding);
                break;

               case 76:
                resultString += padTill3(Math.floor(timestamp % 1e3));
                break;

               case 77:
                resultString += padTill2(date.getMinutes(), padding);
                break;

               case 80:
                resultString += date.getHours() < 12 ? locale.am : locale.pm;
                break;

               case 82:
                resultString += _processFormat(locale.formats.R, date, locale, timestamp);
                break;

               case 83:
                resultString += padTill2(date.getSeconds(), padding);
                break;

               case 84:
                resultString += _processFormat(locale.formats.T, date, locale, timestamp);
                break;

               case 85:
                resultString += padTill2(weekNumber(date, "sunday"), padding);
                break;

               case 87:
                resultString += padTill2(weekNumber(date, "monday"), padding);
                break;

               case 88:
                resultString += _processFormat(locale.formats.X, date, locale, timestamp);
                break;

               case 89:
                resultString += date.getFullYear();
                break;

               case 90:
                if (_useUtcBasedDate && _customTimezoneOffset === 0) {
                  resultString += "GMT";
                } else {
                  var tzString = date.toString().match(/\(([\w\s]+)\)/);
                  resultString += tzString && tzString[1] || "";
                }
                break;

               case 97:
                resultString += locale.shortDays[date.getDay()];
                break;

               case 98:
                resultString += locale.shortMonths[date.getMonth()];
                break;

               case 99:
                resultString += _processFormat(locale.formats.c, date, locale, timestamp);
                break;

               case 100:
                resultString += padTill2(date.getDate(), padding);
                break;

               case 101:
                resultString += padTill2(date.getDate(), padding == null ? " " : padding);
                break;

               case 104:
                resultString += locale.shortMonths[date.getMonth()];
                break;

               case 106:
                var y = new Date(date.getFullYear(), 0, 1);
                var day = Math.ceil((date.getTime() - y.getTime()) / (1e3 * 60 * 60 * 24));
                resultString += padTill3(day);
                break;

               case 107:
                resultString += padTill2(date.getHours(), padding == null ? " " : padding);
                break;

               case 108:
                resultString += padTill2(hours12(date.getHours()), padding == null ? " " : padding);
                break;

               case 109:
                resultString += padTill2(date.getMonth() + 1, padding);
                break;

               case 110:
                resultString += "\n";
                break;

               case 111:
                var day = date.getDate();
                if (locale.ordinalSuffixes) {
                  resultString += String(day) + (locale.ordinalSuffixes[day - 1] || ordinal(day));
                } else {
                  resultString += String(day) + ordinal(day);
                }
                break;

               case 112:
                resultString += date.getHours() < 12 ? locale.AM : locale.PM;
                break;

               case 114:
                resultString += _processFormat(locale.formats.r, date, locale, timestamp);
                break;

               case 115:
                resultString += Math.floor(timestamp / 1e3);
                break;

               case 116:
                resultString += "\t";
                break;

               case 117:
                var day = date.getDay();
                resultString += day === 0 ? 7 : day;
                break;

               case 118:
                resultString += _processFormat(locale.formats.v, date, locale, timestamp);
                break;

               case 119:
                resultString += date.getDay();
                break;

               case 120:
                resultString += _processFormat(locale.formats.x, date, locale, timestamp);
                break;

               case 121:
                resultString += ("" + date.getFullYear()).slice(2);
                break;

               case 122:
                if (_useUtcBasedDate && _customTimezoneOffset === 0) {
                  resultString += extendedTZ ? "+00:00" : "+0000";
                } else {
                  var off;
                  if (_customTimezoneOffset !== 0) {
                    off = _customTimezoneOffset / (60 * 1e3);
                  } else {
                    off = -date.getTimezoneOffset();
                  }
                  var sign = off < 0 ? "-" : "+";
                  var sep = extendedTZ ? ":" : "";
                  var hours = Math.floor(Math.abs(off / 60));
                  var mins = Math.abs(off % 60);
                  resultString += sign + padTill2(hours) + sep + padTill2(mins);
                }
                break;

               default:
                if (isInScope) {
                  resultString += "%";
                }
                resultString += format[i];
                break;
              }
              padding = null;
              isInScope = false;
              continue;
            }
            if (currentCharCode === 37) {
              isInScope = true;
              continue;
            }
            resultString += format[i];
          }
          return resultString;
        }
        var strftime = _strftime;
        strftime.localize = function(locale) {
          return new Strftime(locale || _locale, _customTimezoneOffset, _useUtcBasedDate);
        };
        strftime.localizeByIdentifier = function(localeIdentifier) {
          var locale = Locales[localeIdentifier];
          if (!locale) {
            warn('[WARNING] No locale found with identifier "' + localeIdentifier + '".');
            return strftime;
          }
          return strftime.localize(locale);
        };
        strftime.timezone = function(timezone) {
          var customTimezoneOffset = _customTimezoneOffset;
          var useUtcBasedDate = _useUtcBasedDate;
          var timezoneType = typeof timezone;
          if (timezoneType === "number" || timezoneType === "string") {
            useUtcBasedDate = true;
            if (timezoneType === "string") {
              var sign = timezone[0] === "-" ? -1 : 1, hours = parseInt(timezone.slice(1, 3), 10), minutes = parseInt(timezone.slice(3, 5), 10);
              customTimezoneOffset = sign * (60 * hours + minutes) * 60 * 1e3;
            } else if (timezoneType === "number") {
              customTimezoneOffset = timezone * 60 * 1e3;
            }
          }
          return new Strftime(_locale, customTimezoneOffset, useUtcBasedDate);
        };
        strftime.utc = function() {
          return new Strftime(_locale, _customTimezoneOffset, true);
        };
        return strftime;
      }
      function padTill2(numberToPad, paddingChar) {
        if (paddingChar === "" || numberToPad > 9) {
          return numberToPad;
        }
        if (paddingChar == null) {
          paddingChar = "0";
        }
        return paddingChar + numberToPad;
      }
      function padTill3(numberToPad) {
        if (numberToPad > 99) {
          return numberToPad;
        }
        if (numberToPad > 9) {
          return "0" + numberToPad;
        }
        return "00" + numberToPad;
      }
      function hours12(hour) {
        if (hour === 0) {
          return 12;
        } else if (hour > 12) {
          return hour - 12;
        }
        return hour;
      }
      function weekNumber(date, firstWeekday) {
        firstWeekday = firstWeekday || "sunday";
        var weekday = date.getDay();
        if (firstWeekday === "monday") {
          if (weekday === 0) weekday = 6; else weekday--;
        }
        var firstDayOfYearUtc = Date.UTC(date.getFullYear(), 0, 1), dateUtc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()), yday = Math.floor((dateUtc - firstDayOfYearUtc) / 864e5), weekNum = (yday + 7 - weekday) / 7;
        return Math.floor(weekNum);
      }
      function ordinal(number) {
        var i = number % 10;
        var ii = number % 100;
        if (ii >= 11 && ii <= 13 || i === 0 || i >= 4) {
          return "th";
        }
        switch (i) {
         case 1:
          return "st";

         case 2:
          return "nd";

         case 3:
          return "rd";
        }
      }
      function getTimestampToUtcOffsetFor(date) {
        return (date.getTimezoneOffset() || 0) * 6e4;
      }
      function warn(message) {
        if (typeof console !== "undefined" && typeof console.warn == "function") {
          console.warn(message);
        }
      }
    })();
  })(strftime);
  var momentWithLocales = {
    exports: {}
  };
  (function(module, exports) {
    (function(global, factory) {
      module.exports = factory();
    })(commonjsGlobal, (function() {
      var hookCallback;
      function hooks() {
        return hookCallback.apply(null, arguments);
      }
      function setHookCallback(callback) {
        hookCallback = callback;
      }
      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
      }
      function isObject(input) {
        return input != null && Object.prototype.toString.call(input) === "[object Object]";
      }
      function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }
      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;
          for (k in obj) {
            if (hasOwnProp(obj, k)) {
              return false;
            }
          }
          return true;
        }
      }
      function isUndefined(input) {
        return input === void 0;
      }
      function isNumber(input) {
        return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
      }
      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
      }
      function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i));
        }
        return res;
      }
      function extend(a, b) {
        for (var i in b) {
          if (hasOwnProp(b, i)) {
            a[i] = b[i];
          }
        }
        if (hasOwnProp(b, "toString")) {
          a.toString = b.toString;
        }
        if (hasOwnProp(b, "valueOf")) {
          a.valueOf = b.valueOf;
        }
        return a;
      }
      function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
      }
      function defaultParsingFlags() {
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }
      function getParsingFlags(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags();
        }
        return m._pf;
      }
      var some;
      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function(fun) {
          var t = Object(this), len = t.length >>> 0, i;
          for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }
          return false;
        };
      }
      function isValid(m) {
        if (m._isValid == null) {
          var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, (function(i) {
            return i != null;
          })), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
          if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
          }
          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
          } else {
            return isNowValid;
          }
        }
        return m._isValid;
      }
      function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
          extend(getParsingFlags(m), flags);
        } else {
          getParsingFlags(m).userInvalidated = true;
        }
        return m;
      }
      var momentProperties = hooks.momentProperties = [], updateInProgress = false;
      function copyConfig(to, from) {
        var i, prop, val;
        if (!isUndefined(from._isAMomentObject)) {
          to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
          to._i = from._i;
        }
        if (!isUndefined(from._f)) {
          to._f = from._f;
        }
        if (!isUndefined(from._l)) {
          to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
          to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
          to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
          to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
          to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
          to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
          to._locale = from._locale;
        }
        if (momentProperties.length > 0) {
          for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
              to[prop] = val;
            }
          }
        }
        return to;
      }
      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
          this._d = new Date(NaN);
        }
        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }
      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }
      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
          console.warn("Deprecation warning: " + msg);
        }
      }
      function deprecate(msg, fn) {
        var firstTime = true;
        return extend((function() {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }
          if (firstTime) {
            var args = [], arg, i, key;
            for (i = 0; i < arguments.length; i++) {
              arg = "";
              if (typeof arguments[i] === "object") {
                arg += "\n[" + i + "] ";
                for (key in arguments[0]) {
                  if (hasOwnProp(arguments[0], key)) {
                    arg += key + ": " + arguments[0][key] + ", ";
                  }
                }
                arg = arg.slice(0, -2);
              } else {
                arg = arguments[i];
              }
              args.push(arg);
            }
            warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + (new Error).stack);
            firstTime = false;
          }
          return fn.apply(this, arguments);
        }), fn);
      }
      var deprecations = {};
      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
        }
      }
      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;
      function isFunction(input) {
        return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
      }
      function set(config) {
        var prop, i;
        for (i in config) {
          if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) {
              this[i] = prop;
            } else {
              this["_" + i] = prop;
            }
          }
        }
        this._config = config;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
      }
      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }
        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            res[prop] = extend({}, res[prop]);
          }
        }
        return res;
      }
      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }
      var keys;
      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function(obj) {
          var i, res = [];
          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i);
            }
          }
          return res;
        };
      }
      var defaultCalendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };
      function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(mom, now) : output;
      }
      function zeroFill(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign = number >= 0;
        return (sign ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }
      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
      function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === "string") {
          func = function() {
            return this[callback]();
          };
        }
        if (token) {
          formatTokenFunctions[token] = func;
        }
        if (padded) {
          formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }
        if (ordinal) {
          formatTokenFunctions[ordinal] = function() {
            return this.localeData().ordinal(func.apply(this, arguments), token);
          };
        }
      }
      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
      }
      function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;
        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
          } else {
            array[i] = removeFormattingTokens(array[i]);
          }
        }
        return function(mom) {
          var output = "", i;
          for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
          }
          return output;
        };
      }
      function formatMoment(m, format) {
        if (!m.isValid()) {
          return m.localeData().invalidDate();
        }
        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
      }
      function expandFormat(format, locale) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
          return locale.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
          format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
          localFormattingTokens.lastIndex = 0;
          i -= 1;
        }
        return format;
      }
      var defaultLongDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      function longDateFormat(key) {
        var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
          return format;
        }
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map((function(tok) {
          if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
            return tok.slice(1);
          }
          return tok;
        })).join("");
        return this._longDateFormat[key];
      }
      var defaultInvalidDate = "Invalid date";
      function invalidDate() {
        return this._invalidDate;
      }
      var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
      function ordinal(number) {
        return this._ordinal.replace("%d", number);
      }
      var defaultRelativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }
      function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? "future" : "past"];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
      }
      var aliases = {};
      function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
      }
      function normalizeUnits(units) {
        return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : undefined;
      }
      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }
        return normalizedInput;
      }
      var priorities = {};
      function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
      }
      function getPrioritizedUnits(unitsObj) {
        var units = [], u;
        for (u in unitsObj) {
          if (hasOwnProp(unitsObj, u)) {
            units.push({
              unit: u,
              priority: priorities[u]
            });
          }
        }
        units.sort((function(a, b) {
          return a.priority - b.priority;
        }));
        return units;
      }
      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
      function absFloor(number) {
        if (number < 0) {
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }
      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
        }
        return value;
      }
      function makeGetSet(unit, keepTime) {
        return function(value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get(this, unit);
          }
        };
      }
      function get(mom, unit) {
        return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
      }
      function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
          if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            value = toInt(value);
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth(value, mom.month()));
          } else {
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
          }
        }
      }
      function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units]();
        }
        return this;
      }
      function stringSet(units, value) {
        if (typeof units === "object") {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units), i;
          for (i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
          }
        } else {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units](value);
          }
        }
        return this;
      }
      var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
      regexes = {};
      function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }
      function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
          return new RegExp(unescapeFormat(token));
        }
        return regexes[token](config._strict, config._locale);
      }
      function unescapeFormat(s) {
        return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        })));
      }
      function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      var tokens = {};
      function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === "string") {
          token = [ token ];
        }
        if (isNumber(callback)) {
          func = function(input, array) {
            array[callback] = toInt(input);
          };
        }
        for (i = 0; i < token.length; i++) {
          tokens[token[i]] = func;
        }
      }
      function addWeekParseToken(token, callback) {
        addParseToken(token, (function(input, array, config, token) {
          config._w = config._w || {};
          callback(input, config._w, config, token);
        }));
      }
      function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
          tokens[token](input, config._a, config, token);
        }
      }
      var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
      function mod(n, x) {
        return (n % x + x) % x;
      }
      var indexOf;
      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function(o) {
          var i;
          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i;
            }
          }
          return -1;
        };
      }
      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      }
      addFormatToken("M", [ "MM", 2 ], "Mo", (function() {
        return this.month() + 1;
      }));
      addFormatToken("MMM", 0, 0, (function(format) {
        return this.localeData().monthsShort(this, format);
      }));
      addFormatToken("MMMM", 0, 0, (function(format) {
        return this.localeData().months(this, format);
      }));
      addUnitAlias("month", "M");
      addUnitPriority("month", 8);
      addRegexToken("M", match1to2);
      addRegexToken("MM", match1to2, match2);
      addRegexToken("MMM", (function(isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
      }));
      addRegexToken("MMMM", (function(isStrict, locale) {
        return locale.monthsRegex(isStrict);
      }));
      addParseToken([ "M", "MM" ], (function(input, array) {
        array[MONTH] = toInt(input) - 1;
      }));
      addParseToken([ "MMM", "MMMM" ], (function(input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      }));
      var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
      function localeMonths(m, format) {
        if (!m) {
          return isArray(this._months) ? this._months : this._months["standalone"];
        }
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? "format" : "standalone"][m.month()];
      }
      function localeMonthsShort(m, format) {
        if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? "format" : "standalone"][m.month()];
      }
      function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
          for (i = 0; i < 12; ++i) {
            mom = createUTC([ 2e3, i ]);
            this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format, strict);
        }
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        }
        for (i = 0; i < 12; i++) {
          mom = createUTC([ 2e3, i ]);
          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
            this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
          }
          if (!strict && !this._monthsParse[i]) {
            regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
            this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      }
      function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) {
          return mom;
        }
        if (typeof value === "string") {
          if (/^\d+$/.test(value)) {
            value = toInt(value);
          } else {
            value = mom.localeData().monthsParse(value);
            if (!isNumber(value)) {
              return mom;
            }
          }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
        return mom;
      }
      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get(this, "Month");
        }
      }
      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }
      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsShortRegex")) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }
          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }
      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsRegex")) {
            this._monthsRegex = defaultMonthsRegex;
          }
          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }
      function computeMonthsParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for (i = 0; i < 12; i++) {
          mom = createUTC([ 2e3, i ]);
          shortPieces.push(this.monthsShort(mom, ""));
          longPieces.push(this.months(mom, ""));
          mixedPieces.push(this.months(mom, ""));
          mixedPieces.push(this.monthsShort(mom, ""));
        }
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
      }
      addFormatToken("Y", 0, 0, (function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : "+" + y;
      }));
      addFormatToken(0, [ "YY", 2 ], 0, (function() {
        return this.year() % 100;
      }));
      addFormatToken(0, [ "YYYY", 4 ], 0, "year");
      addFormatToken(0, [ "YYYYY", 5 ], 0, "year");
      addFormatToken(0, [ "YYYYYY", 6, true ], 0, "year");
      addUnitAlias("year", "y");
      addUnitPriority("year", 1);
      addRegexToken("Y", matchSigned);
      addRegexToken("YY", match1to2, match2);
      addRegexToken("YYYY", match1to4, match4);
      addRegexToken("YYYYY", match1to6, match6);
      addRegexToken("YYYYYY", match1to6, match6);
      addParseToken([ "YYYYY", "YYYYYY" ], YEAR);
      addParseToken("YYYY", (function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      }));
      addParseToken("YY", (function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      }));
      addParseToken("Y", (function(input, array) {
        array[YEAR] = parseInt(input, 10);
      }));
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
      };
      var getSetYear = makeGetSet("FullYear", true);
      function getIsLeapYear() {
        return isLeapYear(this.year());
      }
      function createDate(y, m, d, h, M, s, ms) {
        var date;
        if (y < 100 && y >= 0) {
          date = new Date(y + 400, m, d, h, M, s, ms);
          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m, d, h, M, s, ms);
        }
        return date;
      }
      function createUTCDate(y) {
        var date, args;
        if (y < 100 && y >= 0) {
          args = Array.prototype.slice.call(arguments);
          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));
          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }
        return date;
      }
      function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      }
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }
        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }
      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }
        return {
          week: resWeek,
          year: resYear
        };
      }
      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      }
      addFormatToken("w", [ "ww", 2 ], "wo", "week");
      addFormatToken("W", [ "WW", 2 ], "Wo", "isoWeek");
      addUnitAlias("week", "w");
      addUnitAlias("isoWeek", "W");
      addUnitPriority("week", 5);
      addUnitPriority("isoWeek", 5);
      addRegexToken("w", match1to2);
      addRegexToken("ww", match1to2, match2);
      addRegexToken("W", match1to2);
      addRegexToken("WW", match1to2, match2);
      addWeekParseToken([ "w", "ww", "W", "WW" ], (function(input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
      }));
      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }
      var defaultLocaleWeek = {
        dow: 0,
        doy: 6
      };
      function localeFirstDayOfWeek() {
        return this._week.dow;
      }
      function localeFirstDayOfYear() {
        return this._week.doy;
      }
      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      addFormatToken("d", 0, "do", "day");
      addFormatToken("dd", 0, 0, (function(format) {
        return this.localeData().weekdaysMin(this, format);
      }));
      addFormatToken("ddd", 0, 0, (function(format) {
        return this.localeData().weekdaysShort(this, format);
      }));
      addFormatToken("dddd", 0, 0, (function(format) {
        return this.localeData().weekdays(this, format);
      }));
      addFormatToken("e", 0, 0, "weekday");
      addFormatToken("E", 0, 0, "isoWeekday");
      addUnitAlias("day", "d");
      addUnitAlias("weekday", "e");
      addUnitAlias("isoWeekday", "E");
      addUnitPriority("day", 11);
      addUnitPriority("weekday", 11);
      addUnitPriority("isoWeekday", 11);
      addRegexToken("d", match1to2);
      addRegexToken("e", match1to2);
      addRegexToken("E", match1to2);
      addRegexToken("dd", (function(isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
      }));
      addRegexToken("ddd", (function(isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
      }));
      addRegexToken("dddd", (function(isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
      }));
      addWeekParseToken([ "dd", "ddd", "dddd" ], (function(input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      }));
      addWeekParseToken([ "d", "e", "E" ], (function(input, week, config, token) {
        week[token] = toInt(input);
      }));
      function parseWeekday(input, locale) {
        if (typeof input !== "string") {
          return input;
        }
        if (!isNaN(input)) {
          return parseInt(input, 10);
        }
        input = locale.weekdaysParse(input);
        if (typeof input === "number") {
          return input;
        }
        return null;
      }
      function parseIsoWeekday(input, locale) {
        if (typeof input === "string") {
          return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
      }
      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }
      var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
      function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? "format" : "standalone"];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
      }
      function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
      }
      function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
      }
      function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];
          for (i = 0; i < 7; ++i) {
            mom = createUTC([ 2e3, 1 ]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format, strict);
        }
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
          mom = createUTC([ 2e3, 1 ]).day(i);
          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
            this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
            this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
          }
          if (!this._weekdaysParse[i]) {
            regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
            this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      }
      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, "d");
        } else {
          return day;
        }
      }
      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, "d");
      }
      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }
      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }
          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }
      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysShortRegex")) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }
          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }
      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysMinRegex")) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }
          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }
      function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
          mom = createUTC([ 2e3, 1 ]).day(i);
          minp = regexEscape(this.weekdaysMin(mom, ""));
          shortp = regexEscape(this.weekdaysShort(mom, ""));
          longp = regexEscape(this.weekdays(mom, ""));
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        }
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
      }
      function hFormat() {
        return this.hours() % 12 || 12;
      }
      function kFormat() {
        return this.hours() || 24;
      }
      addFormatToken("H", [ "HH", 2 ], 0, "hour");
      addFormatToken("h", [ "hh", 2 ], 0, hFormat);
      addFormatToken("k", [ "kk", 2 ], 0, kFormat);
      addFormatToken("hmm", 0, 0, (function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      }));
      addFormatToken("hmmss", 0, 0, (function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      }));
      addFormatToken("Hmm", 0, 0, (function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2);
      }));
      addFormatToken("Hmmss", 0, 0, (function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      }));
      function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, (function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        }));
      }
      meridiem("a", true);
      meridiem("A", false);
      addUnitAlias("hour", "h");
      addUnitPriority("hour", 13);
      function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
      }
      addRegexToken("a", matchMeridiem);
      addRegexToken("A", matchMeridiem);
      addRegexToken("H", match1to2);
      addRegexToken("h", match1to2);
      addRegexToken("k", match1to2);
      addRegexToken("HH", match1to2, match2);
      addRegexToken("hh", match1to2, match2);
      addRegexToken("kk", match1to2, match2);
      addRegexToken("hmm", match3to4);
      addRegexToken("hmmss", match5to6);
      addRegexToken("Hmm", match3to4);
      addRegexToken("Hmmss", match5to6);
      addParseToken([ "H", "HH" ], HOUR);
      addParseToken([ "k", "kk" ], (function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      }));
      addParseToken([ "a", "A" ], (function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      }));
      addParseToken([ "h", "hh" ], (function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      }));
      addParseToken("hmm", (function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      }));
      addParseToken("hmmss", (function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      }));
      addParseToken("Hmm", (function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      }));
      addParseToken("Hmmss", (function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      }));
      function localeIsPM(input) {
        return (input + "").toLowerCase().charAt(0) === "p";
      }
      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
      function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
          return isLower ? "pm" : "PM";
        } else {
          return isLower ? "am" : "AM";
        }
      }
      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
      };
      var locales = {}, localeFamilies = {}, globalLocale;
      function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
          if (arr1[i] !== arr2[i]) {
            return i;
          }
        }
        return minl;
      }
      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key;
      }
      function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while (i < names.length) {
          split = normalizeLocale(names[i]).split("-");
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split("-") : null;
          while (j > 0) {
            locale = loadLocale(split.slice(0, j).join("-"));
            if (locale) {
              return locale;
            }
            if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
              break;
            }
            j--;
          }
          i++;
        }
        return globalLocale;
      }
      function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        if (locales[name] === undefined && "object" !== "undefined" && module && module.exports) {
          try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = commonjsRequire;
            aliasedRequire("./locale/" + name);
            getSetGlobalLocale(oldLocale);
          } catch (e) {
            locales[name] = null;
          }
        }
        return locales[name];
      }
      function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key);
          } else {
            data = defineLocale(key, values);
          }
          if (data) {
            globalLocale = data;
          } else {
            if (typeof console !== "undefined" && console.warn) {
              console.warn("Locale " + key + " not found. Did you forget to load it?");
            }
          }
        }
        return globalLocale._abbr;
      }
      function defineLocale(name, config) {
        if (config !== null) {
          var locale, parentConfig = baseConfig;
          config.abbr = name;
          if (locales[name] != null) {
            deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change " + "an existing locale. moment.defineLocale(localeName, " + "config) should only be used for creating a new locale " + "See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
            parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale = loadLocale(config.parentLocale);
              if (locale != null) {
                parentConfig = locale._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                  name: name,
                  config: config
                });
                return null;
              }
            }
          }
          locales[name] = new Locale(mergeConfigs(parentConfig, config));
          if (localeFamilies[name]) {
            localeFamilies[name].forEach((function(x) {
              defineLocale(x.name, x.config);
            }));
          }
          getSetGlobalLocale(name);
          return locales[name];
        } else {
          delete locales[name];
          return null;
        }
      }
      function updateLocale(name, config) {
        if (config != null) {
          var locale, tmpLocale, parentConfig = baseConfig;
          if (locales[name] != null && locales[name].parentLocale != null) {
            locales[name].set(mergeConfigs(locales[name]._config, config));
          } else {
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            if (tmpLocale == null) {
              config.abbr = name;
            }
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
          }
          getSetGlobalLocale(name);
        } else {
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;
              if (name === getSetGlobalLocale()) {
                getSetGlobalLocale(name);
              }
            } else if (locales[name] != null) {
              delete locales[name];
            }
          }
        }
        return locales[name];
      }
      function getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }
        if (!key) {
          return globalLocale;
        }
        if (!isArray(key)) {
          locale = loadLocale(key);
          if (locale) {
            return locale;
          }
          key = [ key ];
        }
        return chooseLocale(key);
      }
      function listLocales() {
        return keys(locales);
      }
      function checkOverflow(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
          overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }
          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }
          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }
          getParsingFlags(m).overflow = overflow;
        }
        return m;
      }
      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, false ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, false ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, false ], [ "YYYYDDD", /\d{7}/ ], [ "YYYYMM", /\d{6}/, false ], [ "YYYY", /\d{4}/, false ] ], isoTimes = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
        if (match) {
          getParsingFlags(config).iso = true;
          for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
            }
          }
          if (dateFormat == null) {
            config._isValid = false;
            return;
          }
          if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                timeFormat = (match[2] || " ") + isoTimes[i][0];
                break;
              }
            }
            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }
          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }
          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = "Z";
            } else {
              config._isValid = false;
              return;
            }
          }
          config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      }
      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [ untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10) ];
        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }
        return result;
      }
      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
          return 2e3 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }
        return year;
      }
      function preprocessRFC2822(s) {
        return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }
        return true;
      }
      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          return 0;
        } else {
          var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
          return h * 60 + m;
        }
      }
      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
          parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }
          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);
          config._d = createUTCDate.apply(null, config._a);
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      }
      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
        }
        configFromISO(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        if (config._strict) {
          config._isValid = false;
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), " + "which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are " + "discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(config) {
        config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
      }));
      function defaults(a, b, c) {
        if (a != null) {
          return a;
        }
        if (b != null) {
          return b;
        }
        return c;
      }
      function currentDateArray(config) {
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
          return [ nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate() ];
        }
        return [ nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate() ];
      }
      function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) {
          return;
        }
        currentDate = currentDateArray(config);
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        }
        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }
          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        }
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        }
        for (;i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
          config._a[HOUR] = 24;
        }
        if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }
      function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4;
          weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
          week = defaults(w.W, 1);
          weekday = defaults(w.E, 1);
          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          curWeek = weekOfYear(createLocal(), dow, doy);
          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
          week = defaults(w.w, curWeek.week);
          if (w.d != null) {
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w.e != null) {
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            weekday = dow;
          }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      }
      hooks.ISO_8601 = function() {};
      hooks.RFC_2822 = function() {};
      function configFromStringAndFormat(config) {
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }
        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        var string = "" + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0, era;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
          }
          if (formatTokenFunctions[token]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
          }
        }
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
        }
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = undefined;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        era = getParsingFlags(config).era;
        if (era !== null) {
          config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }
        configFromArray(config);
        checkOverflow(config);
      }
      function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;
        if (meridiem == null) {
          return hour;
        }
        if (locale.meridiemHour != null) {
          return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
          isPm = locale.isPM(meridiem);
          if (isPm && hour < 12) {
            hour += 12;
          }
          if (!isPm && hour === 12) {
            hour = 0;
          }
          return hour;
        } else {
          return hour;
        }
      }
      function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false;
        if (config._f.length === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
        }
        for (i = 0; i < config._f.length; i++) {
          currentScore = 0;
          validFormatFound = false;
          tempConfig = copyConfig({}, config);
          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }
          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);
          if (isValid(tempConfig)) {
            validFormatFound = true;
          }
          currentScore += getParsingFlags(tempConfig).charsLeftOver;
          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
          getParsingFlags(tempConfig).score = currentScore;
          if (!bestFormatIsValid) {
            if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
              if (validFormatFound) {
                bestFormatIsValid = true;
              }
            }
          } else {
            if (currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
            }
          }
        }
        extend(config, bestMoment || tempConfig);
      }
      function configFromObject(config) {
        if (config._d) {
          return;
        }
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map([ i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond ], (function(obj) {
          return obj && parseInt(obj, 10);
        }));
        configFromArray(config);
      }
      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
          res.add(1, "d");
          res._nextDay = undefined;
        }
        return res;
      }
      function prepareConfig(config) {
        var input = config._i, format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format === undefined && input === "") {
          return createInvalid({
            nullInput: true
          });
        }
        if (typeof input === "string") {
          config._i = input = config._locale.preparse(input);
        }
        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format)) {
          configFromStringAndArray(config);
        } else if (format) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }
        if (!isValid(config)) {
          config._d = null;
        }
        return config;
      }
      function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === "string") {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), (function(obj) {
            return parseInt(obj, 10);
          }));
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};
        if (format === true || format === false) {
          strict = format;
          format = undefined;
        }
        if (locale === true || locale === false) {
          strict = locale;
          locale = undefined;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = undefined;
        }
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
      }
      function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
      }
      var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      })), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      }));
      function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }
        if (!moments.length) {
          return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
          }
        }
        return res;
      }
      function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isBefore", args);
      }
      function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isAfter", args);
      }
      var now = function() {
        return Date.now ? Date.now() : +new Date;
      };
      var ordering = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
      function isDurationValid(m) {
        var key, unitHasDecimal = false, i;
        for (key in m) {
          if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
          }
        }
        for (i = 0; i < ordering.length; ++i) {
          if (m[ordering[i]]) {
            if (unitHasDecimal) {
              return false;
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
              unitHasDecimal = true;
            }
          }
        }
        return true;
      }
      function isValid$1() {
        return this._isValid;
      }
      function createInvalid$1() {
        return createDuration(NaN);
      }
      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || normalizedInput.isoWeek || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 1e3 * 60 * 60;
        this._days = +days + weeks * 7;
        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble();
      }
      function isDuration(obj) {
        return obj instanceof Duration;
      }
      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      }
      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for (i = 0; i < len; i++) {
          if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
            diffs++;
          }
        }
        return diffs + lengthDiff;
      }
      function offset(token, separator) {
        addFormatToken(token, 0, 0, (function() {
          var offset = this.utcOffset(), sign = "+";
          if (offset < 0) {
            offset = -offset;
            sign = "-";
          }
          return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        }));
      }
      offset("Z", ":");
      offset("ZZ", "");
      addRegexToken("Z", matchShortOffset);
      addRegexToken("ZZ", matchShortOffset);
      addParseToken([ "Z", "ZZ" ], (function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      }));
      var chunkOffset = /([\+\-]|\d\d)/gi;
      function offsetFromString(matcher, string) {
        var matches = (string || "").match(matcher), chunk, parts, minutes;
        if (matches === null) {
          return null;
        }
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + "").match(chunkOffset) || [ "-", 0, 0 ];
        minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === "+" ? minutes : -minutes;
      }
      function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
          res = model.clone();
          diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
          res._d.setTime(res._d.valueOf() + diff);
          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }
      function getDateOffset(m) {
        return -Math.round(m._d.getTimezoneOffset());
      }
      hooks.updateOffset = function() {};
      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0, localAdjust;
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          if (typeof input === "string") {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
            this.add(localAdjust, "m");
          }
          if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(this, createDuration(input - offset, "m"), 1, false);
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }
          return this;
        } else {
          return this._isUTC ? offset : getDateOffset(this);
        }
      }
      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== "string") {
            input = -input;
          }
          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }
      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }
      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;
          if (keepLocalTime) {
            this.subtract(getDateOffset(this), "m");
          }
        }
        return this;
      }
      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === "string") {
          var tZone = offsetFromString(matchOffset, this._i);
          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }
        return this;
      }
      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }
      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }
      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }
        var c = {}, other;
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
          other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }
        return this._isDSTShifted;
      }
      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }
      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }
      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }
      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function createDuration(input, key) {
        var duration = input, match = null, sign, ret, diffRes;
        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber(input) || !isNaN(+input)) {
          duration = {};
          if (key) {
            duration[key] = +input;
          } else {
            duration.milliseconds = +input;
          }
        } else if (match = aspNetRegex.exec(input)) {
          sign = match[1] === "-" ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign,
            h: toInt(match[HOUR]) * sign,
            m: toInt(match[MINUTE]) * sign,
            s: toInt(match[SECOND]) * sign,
            ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign
          };
        } else if (match = isoRegex.exec(input)) {
          sign = match[1] === "-" ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign)
          };
        } else if (duration == null) {
          duration = {};
        } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
          diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, "_locale")) {
          ret._locale = input._locale;
        }
        if (isDuration(input) && hasOwnProp(input, "_isValid")) {
          ret._isValid = input._isValid;
        }
        return ret;
      }
      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;
      function parseIso(inp, sign) {
        var res = inp && parseFloat(inp.replace(",", "."));
        return (isNaN(res) ? 0 : res) * sign;
      }
      function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {
          --res.months;
        }
        res.milliseconds = +other - +base.clone().add(res.months, "M");
        return res;
      }
      function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
          return {
            milliseconds: 0,
            months: 0
          };
        }
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }
        return res;
      }
      function createAdder(direction, name) {
        return function(val, period) {
          var dur, tmp;
          if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). " + "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
            tmp = val;
            val = period;
            period = tmp;
          }
          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }
      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds, days = absRound(duration._days), months = absRound(duration._months);
        if (!mom.isValid()) {
          return;
        }
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months) {
          setMonth(mom, get(mom, "Month") + months * isAdding);
        }
        if (days) {
          set$1(mom, "Date", get(mom, "Date") + days * isAdding);
        }
        if (milliseconds) {
          mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
          hooks.updateOffset(mom, days || months);
        }
      }
      var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
      function isString(input) {
        return typeof input === "string" || input instanceof String;
      }
      function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
      }
      function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [ "years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms" ], i, property;
        for (i = 0; i < properties.length; i += 1) {
          property = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
      }
      function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) {
          dataTypeTest = input.filter((function(item) {
            return !isNumber(item) && isString(input);
          })).length === 0;
        }
        return arrayTest && dataTypeTest;
      }
      function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [ "sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse" ], i, property;
        for (i = 0; i < properties.length; i += 1) {
          property = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
      }
      function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, "days", true);
        return diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse";
      }
      function calendar$1(time, formats) {
        if (arguments.length === 1) {
          if (!arguments[0]) {
            time = undefined;
            formats = undefined;
          } else if (isMomentInput(arguments[0])) {
            time = arguments[0];
            formats = undefined;
          } else if (isCalendarSpec(arguments[0])) {
            formats = arguments[0];
            time = undefined;
          }
        }
        var now = time || createLocal(), sod = cloneWithOffset(now, this).startOf("day"), format = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
      }
      function clone() {
        return new Moment(this);
      }
      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }
      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }
      function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from), localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }
        inclusivity = inclusivity || "()";
        return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }
      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }
      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }
      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }
      function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) {
          return NaN;
        }
        that = cloneWithOffset(input, this);
        if (!that.isValid()) {
          return NaN;
        }
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);
        switch (units) {
         case "year":
          output = monthDiff(this, that) / 12;
          break;

         case "month":
          output = monthDiff(this, that);
          break;

         case "quarter":
          output = monthDiff(this, that) / 3;
          break;

         case "second":
          output = (this - that) / 1e3;
          break;

         case "minute":
          output = (this - that) / 6e4;
          break;

         case "hour":
          output = (this - that) / 36e5;
          break;

         case "day":
          output = (this - that - zoneDelta) / 864e5;
          break;

         case "week":
          output = (this - that - zoneDelta) / 6048e5;
          break;

         default:
          output = this - that;
        }
        return asFloat ? output : absFloor(output);
      }
      function monthDiff(a, b) {
        if (a.date() < b.date()) {
          return -monthDiff(b, a);
        }
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
          adjust = (b - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
          adjust = (b - anchor) / (anchor2 - anchor);
        }
        return -(wholeMonthDiff + adjust) || 0;
      }
      hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
      hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      function toString() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }
        var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(m, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }
        if (isFunction(Date.prototype.toISOString)) {
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
          }
        }
        return formatMoment(m, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
      }
      function inspect() {
        if (!this.isValid()) {
          return "moment.invalid(/* " + this._i + " */)";
        }
        var func = "moment", zone = "", prefix, year, datetime, suffix;
        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
          zone = "Z";
        }
        prefix = "[" + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        datetime = "-MM-DD[T]HH:mm:ss.SSS";
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
      }
      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }
      function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            to: this,
            from: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }
      function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            from: this,
            to: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      }
      function locale(key) {
        var newLocaleData;
        if (key === undefined) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key);
          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }
          return this;
        }
      }
      var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(key) {
        if (key === undefined) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      }));
      function localeData() {
        return this._locale;
      }
      var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }
      function localStartOfDate(y, m, d) {
        if (y < 100 && y >= 0) {
          return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return new Date(y, m, d).valueOf();
        }
      }
      function utcStartOfDate(y, m, d) {
        if (y < 100 && y >= 0) {
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y, m, d);
        }
      }
      function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
         case "year":
          time = startOfDate(this.year(), 0, 1);
          break;

         case "quarter":
          time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
          break;

         case "month":
          time = startOfDate(this.year(), this.month(), 1);
          break;

         case "week":
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
          break;

         case "isoWeek":
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
          break;

         case "day":
         case "date":
          time = startOfDate(this.year(), this.month(), this.date());
          break;

         case "hour":
          time = this._d.valueOf();
          time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
          break;

         case "minute":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;

         case "second":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
         case "year":
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;

         case "quarter":
          time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
          break;

         case "month":
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;

         case "week":
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;

         case "isoWeek":
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
          break;

         case "day":
         case "date":
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;

         case "hour":
          time = this._d.valueOf();
          time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
          break;

         case "minute":
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;

         case "second":
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 6e4;
      }
      function unix() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function toDate() {
        return new Date(this.valueOf());
      }
      function toArray() {
        var m = this;
        return [ m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond() ];
      }
      function toObject() {
        var m = this;
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
        };
      }
      function toJSON() {
        return this.isValid() ? this.toISOString() : null;
      }
      function isValid$2() {
        return isValid(this);
      }
      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }
      function invalidAt() {
        return getParsingFlags(this).overflow;
      }
      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }
      addFormatToken("N", 0, 0, "eraAbbr");
      addFormatToken("NN", 0, 0, "eraAbbr");
      addFormatToken("NNN", 0, 0, "eraAbbr");
      addFormatToken("NNNN", 0, 0, "eraName");
      addFormatToken("NNNNN", 0, 0, "eraNarrow");
      addFormatToken("y", [ "y", 1 ], "yo", "eraYear");
      addFormatToken("y", [ "yy", 2 ], 0, "eraYear");
      addFormatToken("y", [ "yyy", 3 ], 0, "eraYear");
      addFormatToken("y", [ "yyyy", 4 ], 0, "eraYear");
      addRegexToken("N", matchEraAbbr);
      addRegexToken("NN", matchEraAbbr);
      addRegexToken("NNN", matchEraAbbr);
      addRegexToken("NNNN", matchEraName);
      addRegexToken("NNNNN", matchEraNarrow);
      addParseToken([ "N", "NN", "NNN", "NNNN", "NNNNN" ], (function(input, array, config, token) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) {
          getParsingFlags(config).era = era;
        } else {
          getParsingFlags(config).invalidEra = input;
        }
      }));
      addRegexToken("y", matchUnsigned);
      addRegexToken("yy", matchUnsigned);
      addRegexToken("yyy", matchUnsigned);
      addRegexToken("yyyy", matchUnsigned);
      addRegexToken("yo", matchEraYearOrdinal);
      addParseToken([ "y", "yy", "yyy", "yyyy" ], YEAR);
      addParseToken([ "yo" ], (function(input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
          match = input.match(config._locale._eraYearOrdinalRegex);
        }
        if (config._locale.eraYearOrdinalParse) {
          array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
          array[YEAR] = parseInt(input, 10);
        }
      }));
      function localeEras(m, format) {
        var i, l, date, eras = this._eras || getLocale("en")._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
          switch (typeof eras[i].since) {
           case "string":
            date = hooks(eras[i].since).startOf("day");
            eras[i].since = date.valueOf();
            break;
          }
          switch (typeof eras[i].until) {
           case "undefined":
            eras[i].until = +Infinity;
            break;

           case "string":
            date = hooks(eras[i].until).startOf("day").valueOf();
            eras[i].until = date.valueOf();
            break;
          }
        }
        return eras;
      }
      function localeErasParse(eraName, format, strict) {
        var i, l, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for (i = 0, l = eras.length; i < l; ++i) {
          name = eras[i].name.toUpperCase();
          abbr = eras[i].abbr.toUpperCase();
          narrow = eras[i].narrow.toUpperCase();
          if (strict) {
            switch (format) {
             case "N":
             case "NN":
             case "NNN":
              if (abbr === eraName) {
                return eras[i];
              }
              break;

             case "NNNN":
              if (name === eraName) {
                return eras[i];
              }
              break;

             case "NNNNN":
              if (narrow === eraName) {
                return eras[i];
              }
              break;
            }
          } else if ([ name, abbr, narrow ].indexOf(eraName) >= 0) {
            return eras[i];
          }
        }
      }
      function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
          return hooks(era.since).year();
        } else {
          return hooks(era.since).year() + (year - era.offset) * dir;
        }
      }
      function getEraName() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
          }
        }
        return "";
      }
      function getEraNarrow() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
          }
        }
        return "";
      }
      function getEraAbbr() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
          }
        }
        return "";
      }
      function getEraYear() {
        var i, l, dir, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          dir = eras[i].since <= eras[i].until ? +1 : -1;
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
            return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
          }
        }
        return this.year();
      }
      function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNameRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
      }
      function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, "_erasAbbrRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }
      function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNarrowRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }
      function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
      }
      function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
      }
      function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
      }
      function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
      }
      function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          namePieces.push(regexEscape(eras[i].name));
          abbrPieces.push(regexEscape(eras[i].abbr));
          narrowPieces.push(regexEscape(eras[i].narrow));
          mixedPieces.push(regexEscape(eras[i].name));
          mixedPieces.push(regexEscape(eras[i].abbr));
          mixedPieces.push(regexEscape(eras[i].narrow));
        }
        this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
        this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
        this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
      }
      addFormatToken(0, [ "gg", 2 ], 0, (function() {
        return this.weekYear() % 100;
      }));
      addFormatToken(0, [ "GG", 2 ], 0, (function() {
        return this.isoWeekYear() % 100;
      }));
      function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [ token, token.length ], 0, getter);
      }
      addWeekYearFormatToken("gggg", "weekYear");
      addWeekYearFormatToken("ggggg", "weekYear");
      addWeekYearFormatToken("GGGG", "isoWeekYear");
      addWeekYearFormatToken("GGGGG", "isoWeekYear");
      addUnitAlias("weekYear", "gg");
      addUnitAlias("isoWeekYear", "GG");
      addUnitPriority("weekYear", 1);
      addUnitPriority("isoWeekYear", 1);
      addRegexToken("G", matchSigned);
      addRegexToken("g", matchSigned);
      addRegexToken("GG", match1to2, match2);
      addRegexToken("gg", match1to2, match2);
      addRegexToken("GGGG", match1to4, match4);
      addRegexToken("gggg", match1to4, match4);
      addRegexToken("GGGGG", match1to6, match6);
      addRegexToken("ggggg", match1to6, match6);
      addWeekParseToken([ "gggg", "ggggg", "GGGG", "GGGGG" ], (function(input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
      }));
      addWeekParseToken([ "gg", "GG" ], (function(input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
      }));
      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }
      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
      }
      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }
      function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
      }
      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }
      function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }
      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);
          if (week > weeksTarget) {
            week = weeksTarget;
          }
          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }
      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      }
      addFormatToken("Q", 0, "Qo", "quarter");
      addUnitAlias("quarter", "Q");
      addUnitPriority("quarter", 7);
      addRegexToken("Q", match1);
      addParseToken("Q", (function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      }));
      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      }
      addFormatToken("D", [ "DD", 2 ], "Do", "date");
      addUnitAlias("date", "D");
      addUnitPriority("date", 9);
      addRegexToken("D", match1to2);
      addRegexToken("DD", match1to2, match2);
      addRegexToken("Do", (function(isStrict, locale) {
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
      }));
      addParseToken([ "D", "DD" ], DATE);
      addParseToken("Do", (function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      }));
      var getSetDayOfMonth = makeGetSet("Date", true);
      addFormatToken("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear");
      addUnitAlias("dayOfYear", "DDD");
      addUnitPriority("dayOfYear", 4);
      addRegexToken("DDD", match1to3);
      addRegexToken("DDDD", match3);
      addParseToken([ "DDD", "DDDD" ], (function(input, array, config) {
        config._dayOfYear = toInt(input);
      }));
      function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
      }
      addFormatToken("m", [ "mm", 2 ], 0, "minute");
      addUnitAlias("minute", "m");
      addUnitPriority("minute", 14);
      addRegexToken("m", match1to2);
      addRegexToken("mm", match1to2, match2);
      addParseToken([ "m", "mm" ], MINUTE);
      var getSetMinute = makeGetSet("Minutes", false);
      addFormatToken("s", [ "ss", 2 ], 0, "second");
      addUnitAlias("second", "s");
      addUnitPriority("second", 15);
      addRegexToken("s", match1to2);
      addRegexToken("ss", match1to2, match2);
      addParseToken([ "s", "ss" ], SECOND);
      var getSetSecond = makeGetSet("Seconds", false);
      addFormatToken("S", 0, 0, (function() {
        return ~~(this.millisecond() / 100);
      }));
      addFormatToken(0, [ "SS", 2 ], 0, (function() {
        return ~~(this.millisecond() / 10);
      }));
      addFormatToken(0, [ "SSS", 3 ], 0, "millisecond");
      addFormatToken(0, [ "SSSS", 4 ], 0, (function() {
        return this.millisecond() * 10;
      }));
      addFormatToken(0, [ "SSSSS", 5 ], 0, (function() {
        return this.millisecond() * 100;
      }));
      addFormatToken(0, [ "SSSSSS", 6 ], 0, (function() {
        return this.millisecond() * 1e3;
      }));
      addFormatToken(0, [ "SSSSSSS", 7 ], 0, (function() {
        return this.millisecond() * 1e4;
      }));
      addFormatToken(0, [ "SSSSSSSS", 8 ], 0, (function() {
        return this.millisecond() * 1e5;
      }));
      addFormatToken(0, [ "SSSSSSSSS", 9 ], 0, (function() {
        return this.millisecond() * 1e6;
      }));
      addUnitAlias("millisecond", "ms");
      addUnitPriority("millisecond", 16);
      addRegexToken("S", match1to3, match1);
      addRegexToken("SS", match1to3, match2);
      addRegexToken("SSS", match1to3, match3);
      var token, getSetMillisecond;
      for (token = "SSSS"; token.length <= 9; token += "S") {
        addRegexToken(token, matchUnsigned);
      }
      function parseMs(input, array) {
        array[MILLISECOND] = toInt(("0." + input) * 1e3);
      }
      for (token = "S"; token.length <= 9; token += "S") {
        addParseToken(token, parseMs);
      }
      getSetMillisecond = makeGetSet("Milliseconds", false);
      addFormatToken("z", 0, 0, "zoneAbbr");
      addFormatToken("zz", 0, 0, "zoneName");
      function getZoneAbbr() {
        return this._isUTC ? "UTC" : "";
      }
      function getZoneName() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      var proto = Moment.prototype;
      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      if (typeof Symbol !== "undefined" && Symbol.for != null) {
        proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
          return "Moment<" + this.format() + ">";
        };
      }
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
      proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
      proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
      proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
      proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
      function createUnix(input) {
        return createLocal(input * 1e3);
      }
      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }
      function preParsePostFormat(string) {
        return string;
      }
      var proto$1 = Locale.prototype;
      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;
      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;
      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;
      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;
      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;
      function get$1(format, index, field, setter) {
        var locale = getLocale(), utc = createUTC().set(setter, index);
        return locale[field](utc, format);
      }
      function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }
        format = format || "";
        if (index != null) {
          return get$1(format, index, field, "month");
        }
        var i, out = [];
        for (i = 0; i < 12; i++) {
          out[i] = get$1(format, i, field, "month");
        }
        return out;
      }
      function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === "boolean") {
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }
          format = format || "";
        } else {
          format = localeSorted;
          index = format;
          localeSorted = false;
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }
          format = format || "";
        }
        var locale = getLocale(), shift = localeSorted ? locale._week.dow : 0, i, out = [];
        if (index != null) {
          return get$1(format, (index + shift) % 7, field, "day");
        }
        for (i = 0; i < 7; i++) {
          out[i] = get$1(format, (i + shift) % 7, field, "day");
        }
        return out;
      }
      function listMonths(format, index) {
        return listMonthsImpl(format, index, "months");
      }
      function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, "monthsShort");
      }
      function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdays");
      }
      function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdaysShort");
      }
      function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdaysMin");
      }
      getSetGlobalLocale("en", {
        eras: [ {
          since: "0001-01-01",
          until: +Infinity,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD"
        }, {
          since: "0000-12-31",
          until: -Infinity,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC"
        } ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
          var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        }
      });
      hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
      hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
      var mathAbs = Math.abs;
      function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
      }
      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
      }
      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      }
      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }
      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }
      function bubble() {
        var milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data, seconds, minutes, hours, years, monthsFromDays;
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
          milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
          days = 0;
          months = 0;
        }
        data.milliseconds = milliseconds % 1e3;
        seconds = absFloor(milliseconds / 1e3);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
      }
      function daysToMonths(days) {
        return days * 4800 / 146097;
      }
      function monthsToDays(months) {
        return months * 146097 / 4800;
      }
      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }
        var days, months, milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === "month" || units === "quarter" || units === "year") {
          days = this._days + milliseconds / 864e5;
          months = this._months + daysToMonths(days);
          switch (units) {
           case "month":
            return months;

           case "quarter":
            return months / 3;

           case "year":
            return months / 12;
          }
        } else {
          days = this._days + Math.round(monthsToDays(this._months));
          switch (units) {
           case "week":
            return days / 7 + milliseconds / 6048e5;

           case "day":
            return days + milliseconds / 864e5;

           case "hour":
            return days * 24 + milliseconds / 36e5;

           case "minute":
            return days * 1440 + milliseconds / 6e4;

           case "second":
            return days * 86400 + milliseconds / 1e3;

           case "millisecond":
            return Math.floor(days * 864e5) + milliseconds;

           default:
            throw new Error("Unknown unit " + units);
          }
        }
      }
      function valueOf$1() {
        if (!this.isValid()) {
          return NaN;
        }
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
      }
      function makeAs(alias) {
        return function() {
          return this.as(alias);
        };
      }
      var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
      function clone$1() {
        return createDuration(this);
      }
      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + "s"]() : NaN;
      }
      function makeGetter(name) {
        return function() {
          return this.isValid() ? this._data[name] : NaN;
        };
      }
      var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
      function weeks() {
        return absFloor(this.days() / 7);
      }
      var round = Math.round, thresholds = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
      };
      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }
      function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(), seconds = round(duration.as("s")), minutes = round(duration.as("m")), hours = round(duration.as("h")), days = round(duration.as("d")), months = round(duration.as("M")), weeks = round(duration.as("w")), years = round(duration.as("y")), a = seconds <= thresholds.ss && [ "s", seconds ] || seconds < thresholds.s && [ "ss", seconds ] || minutes <= 1 && [ "m" ] || minutes < thresholds.m && [ "mm", minutes ] || hours <= 1 && [ "h" ] || hours < thresholds.h && [ "hh", hours ] || days <= 1 && [ "d" ] || days < thresholds.d && [ "dd", days ];
        if (thresholds.w != null) {
          a = a || weeks <= 1 && [ "w" ] || weeks < thresholds.w && [ "ww", weeks ];
        }
        a = a || months <= 1 && [ "M" ] || months < thresholds.M && [ "MM", months ] || years <= 1 && [ "y" ] || [ "yy", years ];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
      }
      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
          return round;
        }
        if (typeof roundingFunction === "function") {
          round = roundingFunction;
          return true;
        }
        return false;
      }
      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
          return false;
        }
        if (limit === undefined) {
          return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === "s") {
          thresholds.ss = limit - 1;
        }
        return true;
      }
      function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var withSuffix = false, th = thresholds, locale, output;
        if (typeof argWithSuffix === "object") {
          argThresholds = argWithSuffix;
          argWithSuffix = false;
        }
        if (typeof argWithSuffix === "boolean") {
          withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === "object") {
          th = Object.assign({}, thresholds, argThresholds);
          if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
          }
        }
        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);
        if (withSuffix) {
          output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
      }
      var abs$1 = Math.abs;
      function sign(x) {
        return (x > 0) - (x < 0) || +x;
      }
      function toISOString$1() {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var seconds = abs$1(this._milliseconds) / 1e3, days = abs$1(this._days), months = abs$1(this._months), minutes, hours, years, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) {
          return "P0D";
        }
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;
        years = absFloor(months / 12);
        months %= 12;
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, "") : "";
        totalSign = total < 0 ? "-" : "";
        ymSign = sign(this._months) !== sign(total) ? "-" : "";
        daysSign = sign(this._days) !== sign(total) ? "-" : "";
        hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
        return totalSign + "P" + (years ? ymSign + years + "Y" : "") + (months ? ymSign + months + "M" : "") + (days ? daysSign + days + "D" : "") + (hours || minutes || seconds ? "T" : "") + (hours ? hmsSign + hours + "H" : "") + (minutes ? hmsSign + minutes + "M" : "") + (seconds ? hmsSign + s + "S" : "");
      }
      var proto$2 = Duration.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;
      proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
      proto$2.lang = lang;
      addFormatToken("X", 0, 0, "unix");
      addFormatToken("x", 0, 0, "valueOf");
      addRegexToken("x", matchSigned);
      addRegexToken("X", matchTimestamp);
      addParseToken("X", (function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1e3);
      }));
      addParseToken("x", (function(input, array, config) {
        config._d = new Date(toInt(input));
      }));
      hooks.version = "2.29.1";
      setHookCallback(createLocal);
      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto;
      hooks.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
      };
      hooks.defineLocale("af", {
        months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function(input) {
          return /^nm$/i.test(input);
        },
        meridiem: function(hours, minutes, isLower) {
          if (hours < 12) {
            return isLower ? "vm" : "VM";
          } else {
            return isLower ? "nm" : "NM";
          }
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Vandag om] LT",
          nextDay: "[Môre om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[Gister om] LT",
          lastWeek: "[Laas] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "oor %s",
          past: "%s gelede",
          s: "'n paar sekondes",
          ss: "%d sekondes",
          m: "'n minuut",
          mm: "%d minute",
          h: "'n uur",
          hh: "%d ure",
          d: "'n dag",
          dd: "%d dae",
          M: "'n maand",
          MM: "%d maande",
          y: "'n jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? "ste" : "de");
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var pluralForm = function(n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
      }, plurals = {
        s: [ "أقل من ثانية", "ثانية واحدة", [ "ثانيتان", "ثانيتين" ], "%d ثوان", "%d ثانية", "%d ثانية" ],
        m: [ "أقل من دقيقة", "دقيقة واحدة", [ "دقيقتان", "دقيقتين" ], "%d دقائق", "%d دقيقة", "%d دقيقة" ],
        h: [ "أقل من ساعة", "ساعة واحدة", [ "ساعتان", "ساعتين" ], "%d ساعات", "%d ساعة", "%d ساعة" ],
        d: [ "أقل من يوم", "يوم واحد", [ "يومان", "يومين" ], "%d أيام", "%d يومًا", "%d يوم" ],
        M: [ "أقل من شهر", "شهر واحد", [ "شهران", "شهرين" ], "%d أشهر", "%d شهرا", "%d شهر" ],
        y: [ "أقل من عام", "عام واحد", [ "عامان", "عامين" ], "%d أعوام", "%d عامًا", "%d عام" ]
      }, pluralize = function(u) {
        return function(number, withoutSuffix, string, isFuture) {
          var f = pluralForm(number), str = plurals[u][pluralForm(number)];
          if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
          }
          return str.replace(/%d/i, number);
        };
      }, months$1 = [ "جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر" ];
      hooks.defineLocale("ar-dz", {
        months: months$1,
        monthsShort: months$1,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(input) {
          return "م" === input;
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "ص";
          } else {
            return "م";
          }
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: pluralize("s"),
          ss: pluralize("s"),
          m: pluralize("m"),
          mm: pluralize("m"),
          h: pluralize("h"),
          hh: pluralize("h"),
          d: pluralize("d"),
          dd: pluralize("d"),
          M: pluralize("M"),
          MM: pluralize("M"),
          y: pluralize("y"),
          yy: pluralize("y")
        },
        postformat: function(string) {
          return string.replace(/,/g, "،");
        },
        week: {
          dow: 0,
          doy: 4
        }
      });
      hooks.defineLocale("ar-kw", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {
          dow: 0,
          doy: 12
        }
      });
      var symbolMap = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0"
      }, pluralForm$1 = function(n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
      }, plurals$1 = {
        s: [ "أقل من ثانية", "ثانية واحدة", [ "ثانيتان", "ثانيتين" ], "%d ثوان", "%d ثانية", "%d ثانية" ],
        m: [ "أقل من دقيقة", "دقيقة واحدة", [ "دقيقتان", "دقيقتين" ], "%d دقائق", "%d دقيقة", "%d دقيقة" ],
        h: [ "أقل من ساعة", "ساعة واحدة", [ "ساعتان", "ساعتين" ], "%d ساعات", "%d ساعة", "%d ساعة" ],
        d: [ "أقل من يوم", "يوم واحد", [ "يومان", "يومين" ], "%d أيام", "%d يومًا", "%d يوم" ],
        M: [ "أقل من شهر", "شهر واحد", [ "شهران", "شهرين" ], "%d أشهر", "%d شهرا", "%d شهر" ],
        y: [ "أقل من عام", "عام واحد", [ "عامان", "عامين" ], "%d أعوام", "%d عامًا", "%d عام" ]
      }, pluralize$1 = function(u) {
        return function(number, withoutSuffix, string, isFuture) {
          var f = pluralForm$1(number), str = plurals$1[u][pluralForm$1(number)];
          if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
          }
          return str.replace(/%d/i, number);
        };
      }, months$2 = [ "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر" ];
      hooks.defineLocale("ar-ly", {
        months: months$2,
        monthsShort: months$2,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(input) {
          return "م" === input;
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "ص";
          } else {
            return "م";
          }
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: pluralize$1("s"),
          ss: pluralize$1("s"),
          m: pluralize$1("m"),
          mm: pluralize$1("m"),
          h: pluralize$1("h"),
          hh: pluralize$1("h"),
          d: pluralize$1("d"),
          dd: pluralize$1("d"),
          M: pluralize$1("M"),
          MM: pluralize$1("M"),
          y: pluralize$1("y"),
          yy: pluralize$1("y")
        },
        preparse: function(string) {
          return string.replace(/،/g, ",");
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap[match];
          })).replace(/,/g, "،");
        },
        week: {
          dow: 6,
          doy: 12
        }
      });
      hooks.defineLocale("ar-ma", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var symbolMap$1 = {
        1: "١",
        2: "٢",
        3: "٣",
        4: "٤",
        5: "٥",
        6: "٦",
        7: "٧",
        8: "٨",
        9: "٩",
        0: "٠"
      }, numberMap = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
      };
      hooks.defineLocale("ar-sa", {
        months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(input) {
          return "م" === input;
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "ص";
          } else {
            return "م";
          }
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        preparse: function(string) {
          return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(match) {
            return numberMap[match];
          })).replace(/،/g, ",");
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$1[match];
          })).replace(/,/g, "،");
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      hooks.defineLocale("ar-tn", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[اليوم على الساعة] LT",
          nextDay: "[غدا على الساعة] LT",
          nextWeek: "dddd [على الساعة] LT",
          lastDay: "[أمس على الساعة] LT",
          lastWeek: "dddd [على الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "في %s",
          past: "منذ %s",
          s: "ثوان",
          ss: "%d ثانية",
          m: "دقيقة",
          mm: "%d دقائق",
          h: "ساعة",
          hh: "%d ساعات",
          d: "يوم",
          dd: "%d أيام",
          M: "شهر",
          MM: "%d أشهر",
          y: "سنة",
          yy: "%d سنوات"
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var symbolMap$2 = {
        1: "١",
        2: "٢",
        3: "٣",
        4: "٤",
        5: "٥",
        6: "٦",
        7: "٧",
        8: "٨",
        9: "٩",
        0: "٠"
      }, numberMap$1 = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
      }, pluralForm$2 = function(n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
      }, plurals$2 = {
        s: [ "أقل من ثانية", "ثانية واحدة", [ "ثانيتان", "ثانيتين" ], "%d ثوان", "%d ثانية", "%d ثانية" ],
        m: [ "أقل من دقيقة", "دقيقة واحدة", [ "دقيقتان", "دقيقتين" ], "%d دقائق", "%d دقيقة", "%d دقيقة" ],
        h: [ "أقل من ساعة", "ساعة واحدة", [ "ساعتان", "ساعتين" ], "%d ساعات", "%d ساعة", "%d ساعة" ],
        d: [ "أقل من يوم", "يوم واحد", [ "يومان", "يومين" ], "%d أيام", "%d يومًا", "%d يوم" ],
        M: [ "أقل من شهر", "شهر واحد", [ "شهران", "شهرين" ], "%d أشهر", "%d شهرا", "%d شهر" ],
        y: [ "أقل من عام", "عام واحد", [ "عامان", "عامين" ], "%d أعوام", "%d عامًا", "%d عام" ]
      }, pluralize$2 = function(u) {
        return function(number, withoutSuffix, string, isFuture) {
          var f = pluralForm$2(number), str = plurals$2[u][pluralForm$2(number)];
          if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
          }
          return str.replace(/%d/i, number);
        };
      }, months$3 = [ "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر" ];
      hooks.defineLocale("ar", {
        months: months$3,
        monthsShort: months$3,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/‏M/‏YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(input) {
          return "م" === input;
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "ص";
          } else {
            return "م";
          }
        },
        calendar: {
          sameDay: "[اليوم عند الساعة] LT",
          nextDay: "[غدًا عند الساعة] LT",
          nextWeek: "dddd [عند الساعة] LT",
          lastDay: "[أمس عند الساعة] LT",
          lastWeek: "dddd [عند الساعة] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "بعد %s",
          past: "منذ %s",
          s: pluralize$2("s"),
          ss: pluralize$2("s"),
          m: pluralize$2("m"),
          mm: pluralize$2("m"),
          h: pluralize$2("h"),
          hh: pluralize$2("h"),
          d: pluralize$2("d"),
          dd: pluralize$2("d"),
          M: pluralize$2("M"),
          MM: pluralize$2("M"),
          y: pluralize$2("y"),
          yy: pluralize$2("y")
        },
        preparse: function(string) {
          return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(match) {
            return numberMap$1[match];
          })).replace(/،/g, ",");
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$2[match];
          })).replace(/,/g, "،");
        },
        week: {
          dow: 6,
          doy: 12
        }
      });
      var suffixes = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-üncü",
        4: "-üncü",
        100: "-üncü",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı"
      };
      hooks.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
        weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
        weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
        weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[sabah saat] LT",
          nextWeek: "[gələn həftə] dddd [saat] LT",
          lastDay: "[dünən] LT",
          lastWeek: "[keçən həftə] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s əvvəl",
          s: "bir neçə saniyə",
          ss: "%d saniyə",
          m: "bir dəqiqə",
          mm: "%d dəqiqə",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir ay",
          MM: "%d ay",
          y: "bir il",
          yy: "%d il"
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function(input) {
          return /^(gündüz|axşam)$/.test(input);
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "gecə";
          } else if (hour < 12) {
            return "səhər";
          } else if (hour < 17) {
            return "gündüz";
          } else {
            return "axşam";
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function(number) {
          if (number === 0) {
            return number + "-ıncı";
          }
          var a = number % 10, b = number % 100 - a, c = number >= 100 ? 100 : null;
          return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      function plural(word, num) {
        var forms = word.split("_");
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
      }
      function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
          ss: withoutSuffix ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
          mm: withoutSuffix ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
          hh: withoutSuffix ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
          dd: "дзень_дні_дзён",
          MM: "месяц_месяцы_месяцаў",
          yy: "год_гады_гадоў"
        };
        if (key === "m") {
          return withoutSuffix ? "хвіліна" : "хвіліну";
        } else if (key === "h") {
          return withoutSuffix ? "гадзіна" : "гадзіну";
        } else {
          return number + " " + plural(format[key], +number);
        }
      }
      hooks.defineLocale("be", {
        months: {
          format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
          standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
        },
        monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
          format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
          standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
          isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., HH:mm",
          LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
          sameDay: "[Сёння ў] LT",
          nextDay: "[Заўтра ў] LT",
          lastDay: "[Учора ў] LT",
          nextWeek: function() {
            return "[У] dddd [ў] LT";
          },
          lastWeek: function() {
            switch (this.day()) {
             case 0:
             case 3:
             case 5:
             case 6:
              return "[У мінулую] dddd [ў] LT";

             case 1:
             case 2:
             case 4:
              return "[У мінулы] dddd [ў] LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "праз %s",
          past: "%s таму",
          s: "некалькі секунд",
          m: relativeTimeWithPlural,
          mm: relativeTimeWithPlural,
          h: relativeTimeWithPlural,
          hh: relativeTimeWithPlural,
          d: "дзень",
          dd: relativeTimeWithPlural,
          M: "месяц",
          MM: relativeTimeWithPlural,
          y: "год",
          yy: relativeTimeWithPlural
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function(input) {
          return /^(дня|вечара)$/.test(input);
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "ночы";
          } else if (hour < 12) {
            return "раніцы";
          } else if (hour < 17) {
            return "дня";
          } else {
            return "вечара";
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function(number, period) {
          switch (period) {
           case "M":
           case "d":
           case "DDD":
           case "w":
           case "W":
            return (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? number + "-і" : number + "-ы";

           case "D":
            return number + "-га";

           default:
            return number;
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("bg", {
        months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Днес в] LT",
          nextDay: "[Утре в] LT",
          nextWeek: "dddd [в] LT",
          lastDay: "[Вчера в] LT",
          lastWeek: function() {
            switch (this.day()) {
             case 0:
             case 3:
             case 6:
              return "[Миналата] dddd [в] LT";

             case 1:
             case 2:
             case 4:
             case 5:
              return "[Миналия] dddd [в] LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "след %s",
          past: "преди %s",
          s: "няколко секунди",
          ss: "%d секунди",
          m: "минута",
          mm: "%d минути",
          h: "час",
          hh: "%d часа",
          d: "ден",
          dd: "%d дена",
          w: "седмица",
          ww: "%d седмици",
          M: "месец",
          MM: "%d месеца",
          y: "година",
          yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(number) {
          var lastDigit = number % 10, last2Digits = number % 100;
          if (number === 0) {
            return number + "-ев";
          } else if (last2Digits === 0) {
            return number + "-ен";
          } else if (last2Digits > 10 && last2Digits < 20) {
            return number + "-ти";
          } else if (lastDigit === 1) {
            return number + "-ви";
          } else if (lastDigit === 2) {
            return number + "-ри";
          } else if (lastDigit === 7 || lastDigit === 8) {
            return number + "-ми";
          } else {
            return number + "-ти";
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("bm", {
        months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),
        monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),
        weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
        weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
        weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "MMMM [tile] D [san] YYYY",
          LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
          LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"
        },
        calendar: {
          sameDay: "[Bi lɛrɛ] LT",
          nextDay: "[Sini lɛrɛ] LT",
          nextWeek: "dddd [don lɛrɛ] LT",
          lastDay: "[Kunu lɛrɛ] LT",
          lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s kɔnɔ",
          past: "a bɛ %s bɔ",
          s: "sanga dama dama",
          ss: "sekondi %d",
          m: "miniti kelen",
          mm: "miniti %d",
          h: "lɛrɛ kelen",
          hh: "lɛrɛ %d",
          d: "tile kelen",
          dd: "tile %d",
          M: "kalo kelen",
          MM: "kalo %d",
          y: "san kelen",
          yy: "san %d"
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var symbolMap$3 = {
        1: "১",
        2: "২",
        3: "৩",
        4: "৪",
        5: "৫",
        6: "৬",
        7: "৭",
        8: "৮",
        9: "৯",
        0: "০"
      }, numberMap$2 = {
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9",
        "০": "0"
      };
      hooks.defineLocale("bn-bd", {
        months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
        monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
        weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
        weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
        longDateFormat: {
          LT: "A h:mm সময়",
          LTS: "A h:mm:ss সময়",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm সময়",
          LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
        },
        calendar: {
          sameDay: "[আজ] LT",
          nextDay: "[আগামীকাল] LT",
          nextWeek: "dddd, LT",
          lastDay: "[গতকাল] LT",
          lastWeek: "[গত] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s পরে",
          past: "%s আগে",
          s: "কয়েক সেকেন্ড",
          ss: "%d সেকেন্ড",
          m: "এক মিনিট",
          mm: "%d মিনিট",
          h: "এক ঘন্টা",
          hh: "%d ঘন্টা",
          d: "এক দিন",
          dd: "%d দিন",
          M: "এক মাস",
          MM: "%d মাস",
          y: "এক বছর",
          yy: "%d বছর"
        },
        preparse: function(string) {
          return string.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(match) {
            return numberMap$2[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$3[match];
          }));
        },
        meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "রাত") {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === "ভোর") {
            return hour;
          } else if (meridiem === "সকাল") {
            return hour;
          } else if (meridiem === "দুপুর") {
            return hour >= 3 ? hour : hour + 12;
          } else if (meridiem === "বিকাল") {
            return hour + 12;
          } else if (meridiem === "সন্ধ্যা") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "রাত";
          } else if (hour < 6) {
            return "ভোর";
          } else if (hour < 12) {
            return "সকাল";
          } else if (hour < 15) {
            return "দুপুর";
          } else if (hour < 18) {
            return "বিকাল";
          } else if (hour < 20) {
            return "সন্ধ্যা";
          } else {
            return "রাত";
          }
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      var symbolMap$4 = {
        1: "১",
        2: "২",
        3: "৩",
        4: "৪",
        5: "৫",
        6: "৬",
        7: "৭",
        8: "৮",
        9: "৯",
        0: "০"
      }, numberMap$3 = {
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9",
        "০": "0"
      };
      hooks.defineLocale("bn", {
        months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
        monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
        weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
        weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
        longDateFormat: {
          LT: "A h:mm সময়",
          LTS: "A h:mm:ss সময়",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm সময়",
          LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
        },
        calendar: {
          sameDay: "[আজ] LT",
          nextDay: "[আগামীকাল] LT",
          nextWeek: "dddd, LT",
          lastDay: "[গতকাল] LT",
          lastWeek: "[গত] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s পরে",
          past: "%s আগে",
          s: "কয়েক সেকেন্ড",
          ss: "%d সেকেন্ড",
          m: "এক মিনিট",
          mm: "%d মিনিট",
          h: "এক ঘন্টা",
          hh: "%d ঘন্টা",
          d: "এক দিন",
          dd: "%d দিন",
          M: "এক মাস",
          MM: "%d মাস",
          y: "এক বছর",
          yy: "%d বছর"
        },
        preparse: function(string) {
          return string.replace(/[১২৩৪৫৬৭৮৯০]/g, (function(match) {
            return numberMap$3[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$4[match];
          }));
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "রাত" && hour >= 4 || meridiem === "দুপুর" && hour < 5 || meridiem === "বিকাল") {
            return hour + 12;
          } else {
            return hour;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "রাত";
          } else if (hour < 10) {
            return "সকাল";
          } else if (hour < 17) {
            return "দুপুর";
          } else if (hour < 20) {
            return "বিকাল";
          } else {
            return "রাত";
          }
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      var symbolMap$5 = {
        1: "༡",
        2: "༢",
        3: "༣",
        4: "༤",
        5: "༥",
        6: "༦",
        7: "༧",
        8: "༨",
        9: "༩",
        0: "༠"
      }, numberMap$4 = {
        "༡": "1",
        "༢": "2",
        "༣": "3",
        "༤": "4",
        "༥": "5",
        "༦": "6",
        "༧": "7",
        "༨": "8",
        "༩": "9",
        "༠": "0"
      };
      hooks.defineLocale("bo", {
        months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        monthsShort: "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split("_"),
        monthsShortRegex: /^(ཟླ་\d{1,2})/,
        monthsParseExact: true,
        weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
        weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[དི་རིང] LT",
          nextDay: "[སང་ཉིན] LT",
          nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
          lastDay: "[ཁ་སང] LT",
          lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ལ་",
          past: "%s སྔན་ལ",
          s: "ལམ་སང",
          ss: "%d སྐར་ཆ།",
          m: "སྐར་མ་གཅིག",
          mm: "%d སྐར་མ",
          h: "ཆུ་ཚོད་གཅིག",
          hh: "%d ཆུ་ཚོད",
          d: "ཉིན་གཅིག",
          dd: "%d ཉིན་",
          M: "ཟླ་བ་གཅིག",
          MM: "%d ཟླ་བ",
          y: "ལོ་གཅིག",
          yy: "%d ལོ"
        },
        preparse: function(string) {
          return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, (function(match) {
            return numberMap$4[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$5[match];
          }));
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "མཚན་མོ" && hour >= 4 || meridiem === "ཉིན་གུང" && hour < 5 || meridiem === "དགོང་དག") {
            return hour + 12;
          } else {
            return hour;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "མཚན་མོ";
          } else if (hour < 10) {
            return "ཞོགས་ཀས";
          } else if (hour < 17) {
            return "ཉིན་གུང";
          } else if (hour < 20) {
            return "དགོང་དག";
          } else {
            return "མཚན་མོ";
          }
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      function relativeTimeWithMutation(number, withoutSuffix, key) {
        var format = {
          mm: "munutenn",
          MM: "miz",
          dd: "devezh"
        };
        return number + " " + mutation(format[key], number);
      }
      function specialMutationForYears(number) {
        switch (lastNumber(number)) {
         case 1:
         case 3:
         case 4:
         case 5:
         case 9:
          return number + " bloaz";

         default:
          return number + " vloaz";
        }
      }
      function lastNumber(number) {
        if (number > 9) {
          return lastNumber(number % 10);
        }
        return number;
      }
      function mutation(text, number) {
        if (number === 2) {
          return softMutation(text);
        }
        return text;
      }
      function softMutation(text) {
        var mutationTable = {
          m: "v",
          b: "v",
          d: "z"
        };
        if (mutationTable[text.charAt(0)] === undefined) {
          return text;
        }
        return mutationTable[text.charAt(0)] + text.substring(1);
      }
      var monthsParse = [ /^gen/i, /^c[ʼ\']hwe/i, /^meu/i, /^ebr/i, /^mae/i, /^(mez|eve)/i, /^gou/i, /^eos/i, /^gwe/i, /^her/i, /^du/i, /^ker/i ], monthsRegex$1 = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i, monthsStrictRegex = /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i, monthsShortStrictRegex = /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i, fullWeekdaysParse = [ /^sul/i, /^lun/i, /^meurzh/i, /^merc[ʼ\']her/i, /^yaou/i, /^gwener/i, /^sadorn/i ], shortWeekdaysParse = [ /^Sul/i, /^Lun/i, /^Meu/i, /^Mer/i, /^Yao/i, /^Gwe/i, /^Sad/i ], minWeekdaysParse = [ /^Su/i, /^Lu/i, /^Me([^r]|$)/i, /^Mer/i, /^Ya/i, /^Gw/i, /^Sa/i ];
      hooks.defineLocale("br", {
        months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParse: minWeekdaysParse,
        fullWeekdaysParse: fullWeekdaysParse,
        shortWeekdaysParse: shortWeekdaysParse,
        minWeekdaysParse: minWeekdaysParse,
        monthsRegex: monthsRegex$1,
        monthsShortRegex: monthsRegex$1,
        monthsStrictRegex: monthsStrictRegex,
        monthsShortStrictRegex: monthsShortStrictRegex,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [a viz] MMMM YYYY",
          LLL: "D [a viz] MMMM YYYY HH:mm",
          LLLL: "dddd, D [a viz] MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Hiziv da] LT",
          nextDay: "[Warcʼhoazh da] LT",
          nextWeek: "dddd [da] LT",
          lastDay: "[Decʼh da] LT",
          lastWeek: "dddd [paset da] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "a-benn %s",
          past: "%s ʼzo",
          s: "un nebeud segondennoù",
          ss: "%d eilenn",
          m: "ur vunutenn",
          mm: relativeTimeWithMutation,
          h: "un eur",
          hh: "%d eur",
          d: "un devezh",
          dd: relativeTimeWithMutation,
          M: "ur miz",
          MM: relativeTimeWithMutation,
          y: "ur bloaz",
          yy: specialMutationForYears
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function(number) {
          var output = number === 1 ? "añ" : "vet";
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        },
        meridiemParse: /a.m.|g.m./,
        isPM: function(token) {
          return token === "g.m.";
        },
        meridiem: function(hour, minute, isLower) {
          return hour < 12 ? "a.m." : "g.m.";
        }
      });
      function translate(number, withoutSuffix, key) {
        var result = number + " ";
        switch (key) {
         case "ss":
          if (number === 1) {
            result += "sekunda";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "sekunde";
          } else {
            result += "sekundi";
          }
          return result;

         case "m":
          return withoutSuffix ? "jedna minuta" : "jedne minute";

         case "mm":
          if (number === 1) {
            result += "minuta";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "minute";
          } else {
            result += "minuta";
          }
          return result;

         case "h":
          return withoutSuffix ? "jedan sat" : "jednog sata";

         case "hh":
          if (number === 1) {
            result += "sat";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "sata";
          } else {
            result += "sati";
          }
          return result;

         case "dd":
          if (number === 1) {
            result += "dan";
          } else {
            result += "dana";
          }
          return result;

         case "MM":
          if (number === 1) {
            result += "mjesec";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "mjeseca";
          } else {
            result += "mjeseci";
          }
          return result;

         case "yy":
          if (number === 1) {
            result += "godina";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "godine";
          } else {
            result += "godina";
          }
          return result;
        }
      }
      hooks.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function() {
            switch (this.day()) {
             case 0:
              return "[u] [nedjelju] [u] LT";

             case 3:
              return "[u] [srijedu] [u] LT";

             case 6:
              return "[u] [subotu] [u] LT";

             case 1:
             case 2:
             case 4:
             case 5:
              return "[u] dddd [u] LT";
            }
          },
          lastDay: "[jučer u] LT",
          lastWeek: function() {
            switch (this.day()) {
             case 0:
             case 3:
              return "[prošlu] dddd [u] LT";

             case 6:
              return "[prošle] [subote] [u] LT";

             case 1:
             case 2:
             case 4:
             case 5:
              return "[prošli] dddd [u] LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: translate,
          m: translate,
          mm: translate,
          h: translate,
          hh: translate,
          d: "dan",
          dd: translate,
          M: "mjesec",
          MM: translate,
          y: "godinu",
          yy: translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("ca", {
        months: {
          standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
          format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
          isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
        monthsParseExact: true,
        weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [de] YYYY",
          ll: "D MMM YYYY",
          LLL: "D MMMM [de] YYYY [a les] H:mm",
          lll: "D MMM YYYY, H:mm",
          LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
          llll: "ddd D MMM YYYY, H:mm"
        },
        calendar: {
          sameDay: function() {
            return "[avui a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
          },
          nextDay: function() {
            return "[demà a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
          },
          nextWeek: function() {
            return "dddd [a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
          },
          lastDay: function() {
            return "[ahir a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
          },
          lastWeek: function() {
            return "[el] dddd [passat a " + (this.hours() !== 1 ? "les" : "la") + "] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "d'aquí %s",
          past: "fa %s",
          s: "uns segons",
          ss: "%d segons",
          m: "un minut",
          mm: "%d minuts",
          h: "una hora",
          hh: "%d hores",
          d: "un dia",
          dd: "%d dies",
          M: "un mes",
          MM: "%d mesos",
          y: "un any",
          yy: "%d anys"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function(number, period) {
          var output = number === 1 ? "r" : number === 2 ? "n" : number === 3 ? "r" : number === 4 ? "t" : "è";
          if (period === "w" || period === "W") {
            output = "a";
          }
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var months$4 = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), monthsShort = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), monthsParse$1 = [ /^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i ], monthsRegex$2 = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
      function plural$1(n) {
        return n > 1 && n < 5 && ~~(n / 10) !== 1;
      }
      function translate$1(number, withoutSuffix, key, isFuture) {
        var result = number + " ";
        switch (key) {
         case "s":
          return withoutSuffix || isFuture ? "pár sekund" : "pár sekundami";

         case "ss":
          if (withoutSuffix || isFuture) {
            return result + (plural$1(number) ? "sekundy" : "sekund");
          } else {
            return result + "sekundami";
          }

         case "m":
          return withoutSuffix ? "minuta" : isFuture ? "minutu" : "minutou";

         case "mm":
          if (withoutSuffix || isFuture) {
            return result + (plural$1(number) ? "minuty" : "minut");
          } else {
            return result + "minutami";
          }

         case "h":
          return withoutSuffix ? "hodina" : isFuture ? "hodinu" : "hodinou";

         case "hh":
          if (withoutSuffix || isFuture) {
            return result + (plural$1(number) ? "hodiny" : "hodin");
          } else {
            return result + "hodinami";
          }

         case "d":
          return withoutSuffix || isFuture ? "den" : "dnem";

         case "dd":
          if (withoutSuffix || isFuture) {
            return result + (plural$1(number) ? "dny" : "dní");
          } else {
            return result + "dny";
          }

         case "M":
          return withoutSuffix || isFuture ? "měsíc" : "měsícem";

         case "MM":
          if (withoutSuffix || isFuture) {
            return result + (plural$1(number) ? "měsíce" : "měsíců");
          } else {
            return result + "měsíci";
          }

         case "y":
          return withoutSuffix || isFuture ? "rok" : "rokem";

         case "yy":
          if (withoutSuffix || isFuture) {
            return result + (plural$1(number) ? "roky" : "let");
          } else {
            return result + "lety";
          }
        }
      }
      hooks.defineLocale("cs", {
        months: months$4,
        monthsShort: monthsShort,
        monthsRegex: monthsRegex$2,
        monthsShortRegex: monthsRegex$2,
        monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse: monthsParse$1,
        longMonthsParse: monthsParse$1,
        shortMonthsParse: monthsParse$1,
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm",
          l: "D. M. YYYY"
        },
        calendar: {
          sameDay: "[dnes v] LT",
          nextDay: "[zítra v] LT",
          nextWeek: function() {
            switch (this.day()) {
             case 0:
              return "[v neděli v] LT";

             case 1:
             case 2:
              return "[v] dddd [v] LT";

             case 3:
              return "[ve středu v] LT";

             case 4:
              return "[ve čtvrtek v] LT";

             case 5:
              return "[v pátek v] LT";

             case 6:
              return "[v sobotu v] LT";
            }
          },
          lastDay: "[včera v] LT",
          lastWeek: function() {
            switch (this.day()) {
             case 0:
              return "[minulou neděli v] LT";

             case 1:
             case 2:
              return "[minulé] dddd [v] LT";

             case 3:
              return "[minulou středu v] LT";

             case 4:
             case 5:
              return "[minulý] dddd [v] LT";

             case 6:
              return "[minulou sobotu v] LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "před %s",
          s: translate$1,
          ss: translate$1,
          m: translate$1,
          mm: translate$1,
          h: translate$1,
          hh: translate$1,
          d: translate$1,
          dd: translate$1,
          M: translate$1,
          MM: translate$1,
          y: translate$1,
          yy: translate$1
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("cv", {
        months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
        weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
          LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
          LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
        },
        calendar: {
          sameDay: "[Паян] LT [сехетре]",
          nextDay: "[Ыран] LT [сехетре]",
          lastDay: "[Ӗнер] LT [сехетре]",
          nextWeek: "[Ҫитес] dddd LT [сехетре]",
          lastWeek: "[Иртнӗ] dddd LT [сехетре]",
          sameElse: "L"
        },
        relativeTime: {
          future: function(output) {
            var affix = /сехет$/i.exec(output) ? "рен" : /ҫул$/i.exec(output) ? "тан" : "ран";
            return output + affix;
          },
          past: "%s каялла",
          s: "пӗр-ик ҫеккунт",
          ss: "%d ҫеккунт",
          m: "пӗр минут",
          mm: "%d минут",
          h: "пӗр сехет",
          hh: "%d сехет",
          d: "пӗр кун",
          dd: "%d кун",
          M: "пӗр уйӑх",
          MM: "%d уйӑх",
          y: "пӗр ҫул",
          yy: "%d ҫул"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("cy", {
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
        weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Heddiw am] LT",
          nextDay: "[Yfory am] LT",
          nextWeek: "dddd [am] LT",
          lastDay: "[Ddoe am] LT",
          lastWeek: "dddd [diwethaf am] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "mewn %s",
          past: "%s yn ôl",
          s: "ychydig eiliadau",
          ss: "%d eiliad",
          m: "munud",
          mm: "%d munud",
          h: "awr",
          hh: "%d awr",
          d: "diwrnod",
          dd: "%d diwrnod",
          M: "mis",
          MM: "%d mis",
          y: "blwyddyn",
          yy: "%d flynedd"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function(number) {
          var b = number, output = "", lookup = [ "", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed" ];
          if (b > 20) {
            if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
              output = "fed";
            } else {
              output = "ain";
            }
          } else if (b > 0) {
            output = lookup[b];
          }
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "på dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[i] dddd[s kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "få sekunder",
          ss: "%d sekunder",
          m: "et minut",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dage",
          M: "en måned",
          MM: "%d måneder",
          y: "et år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
          m: [ "eine Minute", "einer Minute" ],
          h: [ "eine Stunde", "einer Stunde" ],
          d: [ "ein Tag", "einem Tag" ],
          dd: [ number + " Tage", number + " Tagen" ],
          w: [ "eine Woche", "einer Woche" ],
          M: [ "ein Monat", "einem Monat" ],
          MM: [ number + " Monate", number + " Monaten" ],
          y: [ "ein Jahr", "einem Jahr" ],
          yy: [ number + " Jahre", number + " Jahren" ]
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }
      hooks.defineLocale("de-at", {
        months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: true,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: processRelativeTime,
          mm: "%d Minuten",
          h: processRelativeTime,
          hh: "%d Stunden",
          d: processRelativeTime,
          dd: processRelativeTime,
          w: processRelativeTime,
          ww: "%d Wochen",
          M: processRelativeTime,
          MM: processRelativeTime,
          y: processRelativeTime,
          yy: processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      function processRelativeTime$1(number, withoutSuffix, key, isFuture) {
        var format = {
          m: [ "eine Minute", "einer Minute" ],
          h: [ "eine Stunde", "einer Stunde" ],
          d: [ "ein Tag", "einem Tag" ],
          dd: [ number + " Tage", number + " Tagen" ],
          w: [ "eine Woche", "einer Woche" ],
          M: [ "ein Monat", "einem Monat" ],
          MM: [ number + " Monate", number + " Monaten" ],
          y: [ "ein Jahr", "einem Jahr" ],
          yy: [ number + " Jahre", number + " Jahren" ]
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }
      hooks.defineLocale("de-ch", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: true,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: processRelativeTime$1,
          mm: "%d Minuten",
          h: processRelativeTime$1,
          hh: "%d Stunden",
          d: processRelativeTime$1,
          dd: processRelativeTime$1,
          w: processRelativeTime$1,
          ww: "%d Wochen",
          M: processRelativeTime$1,
          MM: processRelativeTime$1,
          y: processRelativeTime$1,
          yy: processRelativeTime$1
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      function processRelativeTime$2(number, withoutSuffix, key, isFuture) {
        var format = {
          m: [ "eine Minute", "einer Minute" ],
          h: [ "eine Stunde", "einer Stunde" ],
          d: [ "ein Tag", "einem Tag" ],
          dd: [ number + " Tage", number + " Tagen" ],
          w: [ "eine Woche", "einer Woche" ],
          M: [ "ein Monat", "einem Monat" ],
          MM: [ number + " Monate", number + " Monaten" ],
          y: [ "ein Jahr", "einem Jahr" ],
          yy: [ number + " Jahre", number + " Jahren" ]
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }
      hooks.defineLocale("de", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: true,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: processRelativeTime$2,
          mm: "%d Minuten",
          h: processRelativeTime$2,
          hh: "%d Stunden",
          d: processRelativeTime$2,
          dd: processRelativeTime$2,
          w: processRelativeTime$2,
          ww: "%d Wochen",
          M: processRelativeTime$2,
          MM: processRelativeTime$2,
          y: processRelativeTime$2,
          yy: processRelativeTime$2
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      var months$5 = [ "ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު" ], weekdays = [ "އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު" ];
      hooks.defineLocale("dv", {
        months: months$5,
        monthsShort: months$5,
        weekdays: weekdays,
        weekdaysShort: weekdays,
        weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "D/M/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /މކ|މފ/,
        isPM: function(input) {
          return "މފ" === input;
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "މކ";
          } else {
            return "މފ";
          }
        },
        calendar: {
          sameDay: "[މިއަދު] LT",
          nextDay: "[މާދަމާ] LT",
          nextWeek: "dddd LT",
          lastDay: "[އިއްޔެ] LT",
          lastWeek: "[ފާއިތުވި] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ތެރޭގައި %s",
          past: "ކުރިން %s",
          s: "ސިކުންތުކޮޅެއް",
          ss: "d% ސިކުންތު",
          m: "މިނިޓެއް",
          mm: "މިނިޓު %d",
          h: "ގަޑިއިރެއް",
          hh: "ގަޑިއިރު %d",
          d: "ދުވަހެއް",
          dd: "ދުވަސް %d",
          M: "މަހެއް",
          MM: "މަސް %d",
          y: "އަހަރެއް",
          yy: "އަހަރު %d"
        },
        preparse: function(string) {
          return string.replace(/،/g, ",");
        },
        postformat: function(string) {
          return string.replace(/,/g, "،");
        },
        week: {
          dow: 7,
          doy: 12
        }
      });
      function isFunction$1(input) {
        return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
      }
      hooks.defineLocale("el", {
        monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
        monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
        months: function(momentToFormat, format) {
          if (!momentToFormat) {
            return this._monthsNominativeEl;
          } else if (typeof format === "string" && /D/.test(format.substring(0, format.indexOf("MMMM")))) {
            return this._monthsGenitiveEl[momentToFormat.month()];
          } else {
            return this._monthsNominativeEl[momentToFormat.month()];
          }
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
        weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? "μμ" : "ΜΜ";
          } else {
            return isLower ? "πμ" : "ΠΜ";
          }
        },
        isPM: function(input) {
          return (input + "").toLowerCase()[0] === "μ";
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
          sameDay: "[Σήμερα {}] LT",
          nextDay: "[Αύριο {}] LT",
          nextWeek: "dddd [{}] LT",
          lastDay: "[Χθες {}] LT",
          lastWeek: function() {
            switch (this.day()) {
             case 6:
              return "[το προηγούμενο] dddd [{}] LT";

             default:
              return "[την προηγούμενη] dddd [{}] LT";
            }
          },
          sameElse: "L"
        },
        calendar: function(key, mom) {
          var output = this._calendarEl[key], hours = mom && mom.hours();
          if (isFunction$1(output)) {
            output = output.apply(mom);
          }
          return output.replace("{}", hours % 12 === 1 ? "στη" : "στις");
        },
        relativeTime: {
          future: "σε %s",
          past: "%s πριν",
          s: "λίγα δευτερόλεπτα",
          ss: "%d δευτερόλεπτα",
          m: "ένα λεπτό",
          mm: "%d λεπτά",
          h: "μία ώρα",
          hh: "%d ώρες",
          d: "μία μέρα",
          dd: "%d μέρες",
          M: "ένας μήνας",
          MM: "%d μήνες",
          y: "ένας χρόνος",
          yy: "%d χρόνια"
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("en-au", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(number) {
          var b = number % 10, output = ~~(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        },
        week: {
          dow: 0,
          doy: 4
        }
      });
      hooks.defineLocale("en-ca", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "YYYY-MM-DD",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(number) {
          var b = number % 10, output = ~~(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        }
      });
      hooks.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(number) {
          var b = number % 10, output = ~~(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("en-ie", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(number) {
          var b = number % 10, output = ~~(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("en-il", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(number) {
          var b = number % 10, output = ~~(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        }
      });
      hooks.defineLocale("en-in", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(number) {
          var b = number % 10, output = ~~(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      hooks.defineLocale("en-nz", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(number) {
          var b = number % 10, output = ~~(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("en-sg", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(number) {
          var b = number % 10, output = ~~(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("eo", {
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
        monthsShort: "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
        weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
        weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
        weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "[la] D[-an de] MMMM, YYYY",
          LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
          LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
          llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm"
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function(input) {
          return input.charAt(0).toLowerCase() === "p";
        },
        meridiem: function(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? "p.t.m." : "P.T.M.";
          } else {
            return isLower ? "a.t.m." : "A.T.M.";
          }
        },
        calendar: {
          sameDay: "[Hodiaŭ je] LT",
          nextDay: "[Morgaŭ je] LT",
          nextWeek: "dddd[n je] LT",
          lastDay: "[Hieraŭ je] LT",
          lastWeek: "[pasintan] dddd[n je] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "post %s",
          past: "antaŭ %s",
          s: "kelkaj sekundoj",
          ss: "%d sekundoj",
          m: "unu minuto",
          mm: "%d minutoj",
          h: "unu horo",
          hh: "%d horoj",
          d: "unu tago",
          dd: "%d tagoj",
          M: "unu monato",
          MM: "%d monatoj",
          y: "unu jaro",
          yy: "%d jaroj"
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {
          dow: 1,
          doy: 7
        }
      });
      var monthsShortDot = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), monthsShort$1 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), monthsParse$2 = [ /^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i ], monthsRegex$3 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      hooks.defineLocale("es-do", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(m, format) {
          if (!m) {
            return monthsShortDot;
          } else if (/-MMM-/.test(format)) {
            return monthsShort$1[m.month()];
          } else {
            return monthsShortDot[m.month()];
          }
        },
        monthsRegex: monthsRegex$3,
        monthsShortRegex: monthsRegex$3,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse$2,
        longMonthsParse: monthsParse$2,
        shortMonthsParse: monthsParse$2,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY h:mm A",
          LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
          sameDay: function() {
            return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextDay: function() {
            return "[mañana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextWeek: function() {
            return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastDay: function() {
            return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastWeek: function() {
            return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          w: "una semana",
          ww: "%d semanas",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      });
      var monthsShortDot$1 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), monthsShort$2 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), monthsParse$3 = [ /^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i ], monthsRegex$4 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      hooks.defineLocale("es-mx", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(m, format) {
          if (!m) {
            return monthsShortDot$1;
          } else if (/-MMM-/.test(format)) {
            return monthsShort$2[m.month()];
          } else {
            return monthsShortDot$1[m.month()];
          }
        },
        monthsRegex: monthsRegex$4,
        monthsShortRegex: monthsRegex$4,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse$3,
        longMonthsParse: monthsParse$3,
        shortMonthsParse: monthsParse$3,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function() {
            return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextDay: function() {
            return "[mañana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextWeek: function() {
            return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastDay: function() {
            return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastWeek: function() {
            return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          w: "una semana",
          ww: "%d semanas",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 0,
          doy: 4
        },
        invalidDate: "Fecha inválida"
      });
      var monthsShortDot$2 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), monthsShort$3 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), monthsParse$4 = [ /^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i ], monthsRegex$5 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      hooks.defineLocale("es-us", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(m, format) {
          if (!m) {
            return monthsShortDot$2;
          } else if (/-MMM-/.test(format)) {
            return monthsShort$3[m.month()];
          } else {
            return monthsShortDot$2[m.month()];
          }
        },
        monthsRegex: monthsRegex$5,
        monthsShortRegex: monthsRegex$5,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse$4,
        longMonthsParse: monthsParse$4,
        shortMonthsParse: monthsParse$4,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "MM/DD/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY h:mm A",
          LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
          sameDay: function() {
            return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextDay: function() {
            return "[mañana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextWeek: function() {
            return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastDay: function() {
            return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastWeek: function() {
            return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          w: "una semana",
          ww: "%d semanas",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 0,
          doy: 6
        }
      });
      var monthsShortDot$3 = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), monthsShort$4 = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), monthsParse$5 = [ /^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i ], monthsRegex$6 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
      hooks.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(m, format) {
          if (!m) {
            return monthsShortDot$3;
          } else if (/-MMM-/.test(format)) {
            return monthsShort$4[m.month()];
          } else {
            return monthsShortDot$3[m.month()];
          }
        },
        monthsRegex: monthsRegex$6,
        monthsShortRegex: monthsRegex$6,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse$5,
        longMonthsParse: monthsParse$5,
        shortMonthsParse: monthsParse$5,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function() {
            return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextDay: function() {
            return "[mañana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextWeek: function() {
            return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastDay: function() {
            return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastWeek: function() {
            return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          w: "una semana",
          ww: "%d semanas",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        },
        invalidDate: "Fecha inválida"
      });
      function processRelativeTime$3(number, withoutSuffix, key, isFuture) {
        var format = {
          s: [ "mõne sekundi", "mõni sekund", "paar sekundit" ],
          ss: [ number + "sekundi", number + "sekundit" ],
          m: [ "ühe minuti", "üks minut" ],
          mm: [ number + " minuti", number + " minutit" ],
          h: [ "ühe tunni", "tund aega", "üks tund" ],
          hh: [ number + " tunni", number + " tundi" ],
          d: [ "ühe päeva", "üks päev" ],
          M: [ "kuu aja", "kuu aega", "üks kuu" ],
          MM: [ number + " kuu", number + " kuud" ],
          y: [ "ühe aasta", "aasta", "üks aasta" ],
          yy: [ number + " aasta", number + " aastat" ]
        };
        if (withoutSuffix) {
          return format[key][2] ? format[key][2] : format[key][1];
        }
        return isFuture ? format[key][0] : format[key][1];
      }
      hooks.defineLocale("et", {
        months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
        weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Täna,] LT",
          nextDay: "[Homme,] LT",
          nextWeek: "[Järgmine] dddd LT",
          lastDay: "[Eile,] LT",
          lastWeek: "[Eelmine] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s pärast",
          past: "%s tagasi",
          s: processRelativeTime$3,
          ss: processRelativeTime$3,
          m: processRelativeTime$3,
          mm: processRelativeTime$3,
          h: processRelativeTime$3,
          hh: processRelativeTime$3,
          d: processRelativeTime$3,
          dd: "%d päeva",
          M: processRelativeTime$3,
          MM: processRelativeTime$3,
          y: processRelativeTime$3,
          yy: processRelativeTime$3
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("eu", {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
        monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
        monthsParseExact: true,
        weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY[ko] MMMM[ren] D[a]",
          LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
          LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
          l: "YYYY-M-D",
          ll: "YYYY[ko] MMM D[a]",
          lll: "YYYY[ko] MMM D[a] HH:mm",
          llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
        },
        calendar: {
          sameDay: "[gaur] LT[etan]",
          nextDay: "[bihar] LT[etan]",
          nextWeek: "dddd LT[etan]",
          lastDay: "[atzo] LT[etan]",
          lastWeek: "[aurreko] dddd LT[etan]",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s barru",
          past: "duela %s",
          s: "segundo batzuk",
          ss: "%d segundo",
          m: "minutu bat",
          mm: "%d minutu",
          h: "ordu bat",
          hh: "%d ordu",
          d: "egun bat",
          dd: "%d egun",
          M: "hilabete bat",
          MM: "%d hilabete",
          y: "urte bat",
          yy: "%d urte"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      });
      var symbolMap$6 = {
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
        0: "۰"
      }, numberMap$5 = {
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        "۰": "0"
      };
      hooks.defineLocale("fa", {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function(input) {
          return /بعد از ظهر/.test(input);
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "قبل از ظهر";
          } else {
            return "بعد از ظهر";
          }
        },
        calendar: {
          sameDay: "[امروز ساعت] LT",
          nextDay: "[فردا ساعت] LT",
          nextWeek: "dddd [ساعت] LT",
          lastDay: "[دیروز ساعت] LT",
          lastWeek: "dddd [پیش] [ساعت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "در %s",
          past: "%s پیش",
          s: "چند ثانیه",
          ss: "%d ثانیه",
          m: "یک دقیقه",
          mm: "%d دقیقه",
          h: "یک ساعت",
          hh: "%d ساعت",
          d: "یک روز",
          dd: "%d روز",
          M: "یک ماه",
          MM: "%d ماه",
          y: "یک سال",
          yy: "%d سال"
        },
        preparse: function(string) {
          return string.replace(/[۰-۹]/g, (function(match) {
            return numberMap$5[match];
          })).replace(/،/g, ",");
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$6[match];
          })).replace(/,/g, "،");
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: {
          dow: 6,
          doy: 12
        }
      });
      var numbersPast = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "), numbersFuture = [ "nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", numbersPast[7], numbersPast[8], numbersPast[9] ];
      function translate$2(number, withoutSuffix, key, isFuture) {
        var result = "";
        switch (key) {
         case "s":
          return isFuture ? "muutaman sekunnin" : "muutama sekunti";

         case "ss":
          result = isFuture ? "sekunnin" : "sekuntia";
          break;

         case "m":
          return isFuture ? "minuutin" : "minuutti";

         case "mm":
          result = isFuture ? "minuutin" : "minuuttia";
          break;

         case "h":
          return isFuture ? "tunnin" : "tunti";

         case "hh":
          result = isFuture ? "tunnin" : "tuntia";
          break;

         case "d":
          return isFuture ? "päivän" : "päivä";

         case "dd":
          result = isFuture ? "päivän" : "päivää";
          break;

         case "M":
          return isFuture ? "kuukauden" : "kuukausi";

         case "MM":
          result = isFuture ? "kuukauden" : "kuukautta";
          break;

         case "y":
          return isFuture ? "vuoden" : "vuosi";

         case "yy":
          result = isFuture ? "vuoden" : "vuotta";
          break;
        }
        result = verbalNumber(number, isFuture) + " " + result;
        return result;
      }
      function verbalNumber(number, isFuture) {
        return number < 10 ? isFuture ? numbersFuture[number] : numbersPast[number] : number;
      }
      hooks.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "Do MMMM[ta] YYYY",
          LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
          LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
          l: "D.M.YYYY",
          ll: "Do MMM YYYY",
          lll: "Do MMM YYYY, [klo] HH.mm",
          llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
          sameDay: "[tänään] [klo] LT",
          nextDay: "[huomenna] [klo] LT",
          nextWeek: "dddd [klo] LT",
          lastDay: "[eilen] [klo] LT",
          lastWeek: "[viime] dddd[na] [klo] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s päästä",
          past: "%s sitten",
          s: translate$2,
          ss: translate$2,
          m: translate$2,
          mm: translate$2,
          h: translate$2,
          hh: translate$2,
          d: translate$2,
          dd: translate$2,
          M: translate$2,
          MM: translate$2,
          y: translate$2,
          yy: translate$2
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("fil", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
        weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "MM/D/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY HH:mm",
          LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
          sameDay: "LT [ngayong araw]",
          nextDay: "[Bukas ng] LT",
          nextWeek: "LT [sa susunod na] dddd",
          lastDay: "LT [kahapon]",
          lastWeek: "LT [noong nakaraang] dddd",
          sameElse: "L"
        },
        relativeTime: {
          future: "sa loob ng %s",
          past: "%s ang nakalipas",
          s: "ilang segundo",
          ss: "%d segundo",
          m: "isang minuto",
          mm: "%d minuto",
          h: "isang oras",
          hh: "%d oras",
          d: "isang araw",
          dd: "%d araw",
          M: "isang buwan",
          MM: "%d buwan",
          y: "isang taon",
          yy: "%d taon"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(number) {
          return number;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("fo", {
        months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D. MMMM, YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Í dag kl.] LT",
          nextDay: "[Í morgin kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[Í gjár kl.] LT",
          lastWeek: "[síðstu] dddd [kl] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "um %s",
          past: "%s síðani",
          s: "fá sekund",
          ss: "%d sekundir",
          m: "ein minuttur",
          mm: "%d minuttir",
          h: "ein tími",
          hh: "%d tímar",
          d: "ein dagur",
          dd: "%d dagar",
          M: "ein mánaður",
          MM: "%d mánaðir",
          y: "eitt ár",
          yy: "%d ár"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("fr-ca", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: true,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(number, period) {
          switch (period) {
           default:
           case "M":
           case "Q":
           case "D":
           case "DDD":
           case "d":
            return number + (number === 1 ? "er" : "e");

           case "w":
           case "W":
            return number + (number === 1 ? "re" : "e");
          }
        }
      });
      hooks.defineLocale("fr-ch", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: true,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: function(number, period) {
          switch (period) {
           default:
           case "M":
           case "Q":
           case "D":
           case "DDD":
           case "d":
            return number + (number === 1 ? "er" : "e");

           case "w":
           case "W":
            return number + (number === 1 ? "re" : "e");
          }
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var monthsStrictRegex$1 = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i, monthsShortStrictRegex$1 = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i, monthsRegex$7 = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i, monthsParse$6 = [ /^janv/i, /^févr/i, /^mars/i, /^avr/i, /^mai/i, /^juin/i, /^juil/i, /^août/i, /^sept/i, /^oct/i, /^nov/i, /^déc/i ];
      hooks.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsRegex: monthsRegex$7,
        monthsShortRegex: monthsRegex$7,
        monthsStrictRegex: monthsStrictRegex$1,
        monthsShortStrictRegex: monthsShortStrictRegex$1,
        monthsParse: monthsParse$6,
        longMonthsParse: monthsParse$6,
        shortMonthsParse: monthsParse$6,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          w: "une semaine",
          ww: "%d semaines",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function(number, period) {
          switch (period) {
           case "D":
            return number + (number === 1 ? "er" : "");

           default:
           case "M":
           case "Q":
           case "DDD":
           case "d":
            return number + (number === 1 ? "er" : "e");

           case "w":
           case "W":
            return number + (number === 1 ? "re" : "e");
          }
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var monthsShortWithDots = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), monthsShortWithoutDots = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
      hooks.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
        monthsShort: function(m, format) {
          if (!m) {
            return monthsShortWithDots;
          } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[m.month()];
          } else {
            return monthsShortWithDots[m.month()];
          }
        },
        monthsParseExact: true,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[hjoed om] LT",
          nextDay: "[moarn om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[juster om] LT",
          lastWeek: "[ôfrûne] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "oer %s",
          past: "%s lyn",
          s: "in pear sekonden",
          ss: "%d sekonden",
          m: "ien minút",
          mm: "%d minuten",
          h: "ien oere",
          hh: "%d oeren",
          d: "ien dei",
          dd: "%d dagen",
          M: "ien moanne",
          MM: "%d moannen",
          y: "ien jier",
          yy: "%d jierren"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? "ste" : "de");
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var months$6 = [ "Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Meitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deireadh Fómhair", "Samhain", "Nollaig" ], monthsShort$5 = [ "Ean", "Feabh", "Márt", "Aib", "Beal", "Meith", "Iúil", "Lún", "M.F.", "D.F.", "Samh", "Noll" ], weekdays$1 = [ "Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Sathairn" ], weekdaysShort = [ "Domh", "Luan", "Máirt", "Céad", "Déar", "Aoine", "Sath" ], weekdaysMin = [ "Do", "Lu", "Má", "Cé", "Dé", "A", "Sa" ];
      hooks.defineLocale("ga", {
        months: months$6,
        monthsShort: monthsShort$5,
        monthsParseExact: true,
        weekdays: weekdays$1,
        weekdaysShort: weekdaysShort,
        weekdaysMin: weekdaysMin,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Inniu ag] LT",
          nextDay: "[Amárach ag] LT",
          nextWeek: "dddd [ag] LT",
          lastDay: "[Inné ag] LT",
          lastWeek: "dddd [seo caite] [ag] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "i %s",
          past: "%s ó shin",
          s: "cúpla soicind",
          ss: "%d soicind",
          m: "nóiméad",
          mm: "%d nóiméad",
          h: "uair an chloig",
          hh: "%d uair an chloig",
          d: "lá",
          dd: "%d lá",
          M: "mí",
          MM: "%d míonna",
          y: "bliain",
          yy: "%d bliain"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(number) {
          var output = number === 1 ? "d" : number % 10 === 2 ? "na" : "mh";
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var months$7 = [ "Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd" ], monthsShort$6 = [ "Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh" ], weekdays$2 = [ "Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne" ], weekdaysShort$1 = [ "Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis" ], weekdaysMin$1 = [ "Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa" ];
      hooks.defineLocale("gd", {
        months: months$7,
        monthsShort: monthsShort$6,
        monthsParseExact: true,
        weekdays: weekdays$2,
        weekdaysShort: weekdaysShort$1,
        weekdaysMin: weekdaysMin$1,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[An-diugh aig] LT",
          nextDay: "[A-màireach aig] LT",
          nextWeek: "dddd [aig] LT",
          lastDay: "[An-dè aig] LT",
          lastWeek: "dddd [seo chaidh] [aig] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ann an %s",
          past: "bho chionn %s",
          s: "beagan diogan",
          ss: "%d diogan",
          m: "mionaid",
          mm: "%d mionaidean",
          h: "uair",
          hh: "%d uairean",
          d: "latha",
          dd: "%d latha",
          M: "mìos",
          MM: "%d mìosan",
          y: "bliadhna",
          yy: "%d bliadhna"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(number) {
          var output = number === 1 ? "d" : number % 10 === 2 ? "na" : "mh";
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("gl", {
        months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
        monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function() {
            return "[hoxe " + (this.hours() !== 1 ? "ás" : "á") + "] LT";
          },
          nextDay: function() {
            return "[mañá " + (this.hours() !== 1 ? "ás" : "á") + "] LT";
          },
          nextWeek: function() {
            return "dddd [" + (this.hours() !== 1 ? "ás" : "a") + "] LT";
          },
          lastDay: function() {
            return "[onte " + (this.hours() !== 1 ? "á" : "a") + "] LT";
          },
          lastWeek: function() {
            return "[o] dddd [pasado " + (this.hours() !== 1 ? "ás" : "a") + "] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: function(str) {
            if (str.indexOf("un") === 0) {
              return "n" + str;
            }
            return "en " + str;
          },
          past: "hai %s",
          s: "uns segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "unha hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      });
      function processRelativeTime$4(number, withoutSuffix, key, isFuture) {
        var format = {
          s: [ "थोडया सॅकंडांनी", "थोडे सॅकंड" ],
          ss: [ number + " सॅकंडांनी", number + " सॅकंड" ],
          m: [ "एका मिणटान", "एक मिनूट" ],
          mm: [ number + " मिणटांनी", number + " मिणटां" ],
          h: [ "एका वरान", "एक वर" ],
          hh: [ number + " वरांनी", number + " वरां" ],
          d: [ "एका दिसान", "एक दीस" ],
          dd: [ number + " दिसांनी", number + " दीस" ],
          M: [ "एका म्हयन्यान", "एक म्हयनो" ],
          MM: [ number + " म्हयन्यानी", number + " म्हयने" ],
          y: [ "एका वर्सान", "एक वर्स" ],
          yy: [ number + " वर्सांनी", number + " वर्सां" ]
        };
        return isFuture ? format[key][0] : format[key][1];
      }
      hooks.defineLocale("gom-deva", {
        months: {
          standalone: "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
          format: "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split("_"),
          isFormat: /MMMM(\s)+D[oD]?/
        },
        monthsShort: "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
        monthsParseExact: true,
        weekdays: "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
        weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split("_"),
        weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "A h:mm [वाजतां]",
          LTS: "A h:mm:ss [वाजतां]",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY A h:mm [वाजतां]",
          LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
          llll: "ddd, D MMM YYYY, A h:mm [वाजतां]"
        },
        calendar: {
          sameDay: "[आयज] LT",
          nextDay: "[फाल्यां] LT",
          nextWeek: "[फुडलो] dddd[,] LT",
          lastDay: "[काल] LT",
          lastWeek: "[फाटलो] dddd[,] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s",
          past: "%s आदीं",
          s: processRelativeTime$4,
          ss: processRelativeTime$4,
          m: processRelativeTime$4,
          mm: processRelativeTime$4,
          h: processRelativeTime$4,
          hh: processRelativeTime$4,
          d: processRelativeTime$4,
          dd: processRelativeTime$4,
          M: processRelativeTime$4,
          MM: processRelativeTime$4,
          y: processRelativeTime$4,
          yy: processRelativeTime$4
        },
        dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
        ordinal: function(number, period) {
          switch (period) {
           case "D":
            return number + "वेर";

           default:
           case "M":
           case "Q":
           case "DDD":
           case "d":
           case "w":
           case "W":
            return number;
          }
        },
        week: {
          dow: 0,
          doy: 3
        },
        meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "राती") {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === "सकाळीं") {
            return hour;
          } else if (meridiem === "दनपारां") {
            return hour > 12 ? hour : hour + 12;
          } else if (meridiem === "सांजे") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "राती";
          } else if (hour < 12) {
            return "सकाळीं";
          } else if (hour < 16) {
            return "दनपारां";
          } else if (hour < 20) {
            return "सांजे";
          } else {
            return "राती";
          }
        }
      });
      function processRelativeTime$5(number, withoutSuffix, key, isFuture) {
        var format = {
          s: [ "thoddea sekondamni", "thodde sekond" ],
          ss: [ number + " sekondamni", number + " sekond" ],
          m: [ "eka mintan", "ek minut" ],
          mm: [ number + " mintamni", number + " mintam" ],
          h: [ "eka voran", "ek vor" ],
          hh: [ number + " voramni", number + " voram" ],
          d: [ "eka disan", "ek dis" ],
          dd: [ number + " disamni", number + " dis" ],
          M: [ "eka mhoinean", "ek mhoino" ],
          MM: [ number + " mhoineamni", number + " mhoine" ],
          y: [ "eka vorsan", "ek voros" ],
          yy: [ number + " vorsamni", number + " vorsam" ]
        };
        return isFuture ? format[key][0] : format[key][1];
      }
      hooks.defineLocale("gom-latn", {
        months: {
          standalone: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
          format: "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split("_"),
          isFormat: /MMMM(\s)+D[oD]?/
        },
        monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
        monthsParseExact: true,
        weekdays: "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
        weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
        weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "A h:mm [vazta]",
          LTS: "A h:mm:ss [vazta]",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY A h:mm [vazta]",
          LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
          llll: "ddd, D MMM YYYY, A h:mm [vazta]"
        },
        calendar: {
          sameDay: "[Aiz] LT",
          nextDay: "[Faleam] LT",
          nextWeek: "[Fuddlo] dddd[,] LT",
          lastDay: "[Kal] LT",
          lastWeek: "[Fattlo] dddd[,] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s",
          past: "%s adim",
          s: processRelativeTime$5,
          ss: processRelativeTime$5,
          m: processRelativeTime$5,
          mm: processRelativeTime$5,
          h: processRelativeTime$5,
          hh: processRelativeTime$5,
          d: processRelativeTime$5,
          dd: processRelativeTime$5,
          M: processRelativeTime$5,
          MM: processRelativeTime$5,
          y: processRelativeTime$5,
          yy: processRelativeTime$5
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er)/,
        ordinal: function(number, period) {
          switch (period) {
           case "D":
            return number + "er";

           default:
           case "M":
           case "Q":
           case "DDD":
           case "d":
           case "w":
           case "W":
            return number;
          }
        },
        week: {
          dow: 0,
          doy: 3
        },
        meridiemParse: /rati|sokallim|donparam|sanje/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "rati") {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === "sokallim") {
            return hour;
          } else if (meridiem === "donparam") {
            return hour > 12 ? hour : hour + 12;
          } else if (meridiem === "sanje") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "rati";
          } else if (hour < 12) {
            return "sokallim";
          } else if (hour < 16) {
            return "donparam";
          } else if (hour < 20) {
            return "sanje";
          } else {
            return "rati";
          }
        }
      });
      var symbolMap$7 = {
        1: "૧",
        2: "૨",
        3: "૩",
        4: "૪",
        5: "૫",
        6: "૬",
        7: "૭",
        8: "૮",
        9: "૯",
        0: "૦"
      }, numberMap$6 = {
        "૧": "1",
        "૨": "2",
        "૩": "3",
        "૪": "4",
        "૫": "5",
        "૬": "6",
        "૭": "7",
        "૮": "8",
        "૯": "9",
        "૦": "0"
      };
      hooks.defineLocale("gu", {
        months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),
        monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),
        monthsParseExact: true,
        weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),
        weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
        weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
        longDateFormat: {
          LT: "A h:mm વાગ્યે",
          LTS: "A h:mm:ss વાગ્યે",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm વાગ્યે",
          LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે"
        },
        calendar: {
          sameDay: "[આજ] LT",
          nextDay: "[કાલે] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ગઇકાલે] LT",
          lastWeek: "[પાછલા] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s મા",
          past: "%s પહેલા",
          s: "અમુક પળો",
          ss: "%d સેકંડ",
          m: "એક મિનિટ",
          mm: "%d મિનિટ",
          h: "એક કલાક",
          hh: "%d કલાક",
          d: "એક દિવસ",
          dd: "%d દિવસ",
          M: "એક મહિનો",
          MM: "%d મહિનો",
          y: "એક વર્ષ",
          yy: "%d વર્ષ"
        },
        preparse: function(string) {
          return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, (function(match) {
            return numberMap$6[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$7[match];
          }));
        },
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "રાત") {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === "સવાર") {
            return hour;
          } else if (meridiem === "બપોર") {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === "સાંજ") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "રાત";
          } else if (hour < 10) {
            return "સવાર";
          } else if (hour < 17) {
            return "બપોર";
          } else if (hour < 20) {
            return "સાંજ";
          } else {
            return "રાત";
          }
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      hooks.defineLocale("he", {
        months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
        monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [ב]MMMM YYYY",
          LLL: "D [ב]MMMM YYYY HH:mm",
          LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
          l: "D/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[היום ב־]LT",
          nextDay: "[מחר ב־]LT",
          nextWeek: "dddd [בשעה] LT",
          lastDay: "[אתמול ב־]LT",
          lastWeek: "[ביום] dddd [האחרון בשעה] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "בעוד %s",
          past: "לפני %s",
          s: "מספר שניות",
          ss: "%d שניות",
          m: "דקה",
          mm: "%d דקות",
          h: "שעה",
          hh: function(number) {
            if (number === 2) {
              return "שעתיים";
            }
            return number + " שעות";
          },
          d: "יום",
          dd: function(number) {
            if (number === 2) {
              return "יומיים";
            }
            return number + " ימים";
          },
          M: "חודש",
          MM: function(number) {
            if (number === 2) {
              return "חודשיים";
            }
            return number + " חודשים";
          },
          y: "שנה",
          yy: function(number) {
            if (number === 2) {
              return "שנתיים";
            } else if (number % 10 === 0 && number !== 10) {
              return number + " שנה";
            }
            return number + " שנים";
          }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function(input) {
          return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 5) {
            return "לפנות בוקר";
          } else if (hour < 10) {
            return "בבוקר";
          } else if (hour < 12) {
            return isLower ? 'לפנה"צ' : "לפני הצהריים";
          } else if (hour < 18) {
            return isLower ? 'אחה"צ' : "אחרי הצהריים";
          } else {
            return "בערב";
          }
        }
      });
      var symbolMap$8 = {
        1: "१",
        2: "२",
        3: "३",
        4: "४",
        5: "५",
        6: "६",
        7: "७",
        8: "८",
        9: "९",
        0: "०"
      }, numberMap$7 = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
      }, monthsParse$7 = [ /^जन/i, /^फ़र|फर/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सितं|सित/i, /^अक्टू/i, /^नव|नवं/i, /^दिसं|दिस/i ], shortMonthsParse = [ /^जन/i, /^फ़र/i, /^मार्च/i, /^अप्रै/i, /^मई/i, /^जून/i, /^जुल/i, /^अग/i, /^सित/i, /^अक्टू/i, /^नव/i, /^दिस/i ];
      hooks.defineLocale("hi", {
        months: {
          format: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
          standalone: "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split("_")
        },
        monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm बजे",
          LTS: "A h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
        },
        monthsParse: monthsParse$7,
        longMonthsParse: monthsParse$7,
        shortMonthsParse: shortMonthsParse,
        monthsRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
        monthsShortRegex: /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
        monthsStrictRegex: /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
        monthsShortStrictRegex: /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[कल] LT",
          nextWeek: "dddd, LT",
          lastDay: "[कल] LT",
          lastWeek: "[पिछले] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s में",
          past: "%s पहले",
          s: "कुछ ही क्षण",
          ss: "%d सेकंड",
          m: "एक मिनट",
          mm: "%d मिनट",
          h: "एक घंटा",
          hh: "%d घंटे",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महीने",
          MM: "%d महीने",
          y: "एक वर्ष",
          yy: "%d वर्ष"
        },
        preparse: function(string) {
          return string.replace(/[१२३४५६७८९०]/g, (function(match) {
            return numberMap$7[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$8[match];
          }));
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "रात") {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === "सुबह") {
            return hour;
          } else if (meridiem === "दोपहर") {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === "शाम") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "रात";
          } else if (hour < 10) {
            return "सुबह";
          } else if (hour < 17) {
            return "दोपहर";
          } else if (hour < 20) {
            return "शाम";
          } else {
            return "रात";
          }
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      function translate$3(number, withoutSuffix, key) {
        var result = number + " ";
        switch (key) {
         case "ss":
          if (number === 1) {
            result += "sekunda";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "sekunde";
          } else {
            result += "sekundi";
          }
          return result;

         case "m":
          return withoutSuffix ? "jedna minuta" : "jedne minute";

         case "mm":
          if (number === 1) {
            result += "minuta";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "minute";
          } else {
            result += "minuta";
          }
          return result;

         case "h":
          return withoutSuffix ? "jedan sat" : "jednog sata";

         case "hh":
          if (number === 1) {
            result += "sat";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "sata";
          } else {
            result += "sati";
          }
          return result;

         case "dd":
          if (number === 1) {
            result += "dan";
          } else {
            result += "dana";
          }
          return result;

         case "MM":
          if (number === 1) {
            result += "mjesec";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "mjeseca";
          } else {
            result += "mjeseci";
          }
          return result;

         case "yy":
          if (number === 1) {
            result += "godina";
          } else if (number === 2 || number === 3 || number === 4) {
            result += "godine";
          } else {
            result += "godina";
          }
          return result;
        }
      }
      hooks.defineLocale("hr", {
        months: {
          format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
          standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
        },
        monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        monthsParseExact: true,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "Do MMMM YYYY",
          LLL: "Do MMMM YYYY H:mm",
          LLLL: "dddd, Do MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function() {
            switch (this.day()) {
             case 0:
              return "[u] [nedjelju] [u] LT";

             case 3:
              return "[u] [srijedu] [u] LT";

             case 6:
              return "[u] [subotu] [u] LT";

             case 1:
             case 2:
             case 4:
             case 5:
              return "[u] dddd [u] LT";
            }
          },
          lastDay: "[jučer u] LT",
          lastWeek: function() {
            switch (this.day()) {
             case 0:
              return "[prošlu] [nedjelju] [u] LT";

             case 3:
              return "[prošlu] [srijedu] [u] LT";

             case 6:
              return "[prošle] [subote] [u] LT";

             case 1:
             case 2:
             case 4:
             case 5:
              return "[prošli] dddd [u] LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "par sekundi",
          ss: translate$3,
          m: translate$3,
          mm: translate$3,
          h: translate$3,
          hh: translate$3,
          d: "dan",
          dd: translate$3,
          M: "mjesec",
          MM: translate$3,
          y: "godinu",
          yy: translate$3
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      });
      var weekEndings = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
      function translate$4(number, withoutSuffix, key, isFuture) {
        var num = number;
        switch (key) {
         case "s":
          return isFuture || withoutSuffix ? "néhány másodperc" : "néhány másodperce";

         case "ss":
          return num + (isFuture || withoutSuffix) ? " másodperc" : " másodperce";

         case "m":
          return "egy" + (isFuture || withoutSuffix ? " perc" : " perce");

         case "mm":
          return num + (isFuture || withoutSuffix ? " perc" : " perce");

         case "h":
          return "egy" + (isFuture || withoutSuffix ? " óra" : " órája");

         case "hh":
          return num + (isFuture || withoutSuffix ? " óra" : " órája");

         case "d":
          return "egy" + (isFuture || withoutSuffix ? " nap" : " napja");

         case "dd":
          return num + (isFuture || withoutSuffix ? " nap" : " napja");

         case "M":
          return "egy" + (isFuture || withoutSuffix ? " hónap" : " hónapja");

         case "MM":
          return num + (isFuture || withoutSuffix ? " hónap" : " hónapja");

         case "y":
          return "egy" + (isFuture || withoutSuffix ? " év" : " éve");

         case "yy":
          return num + (isFuture || withoutSuffix ? " év" : " éve");
        }
        return "";
      }
      function week(isFuture) {
        return (isFuture ? "" : "[múlt] ") + "[" + weekEndings[this.day()] + "] LT[-kor]";
      }
      hooks.defineLocale("hu", {
        months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
        monthsShort: "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
        weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY. MMMM D.",
          LLL: "YYYY. MMMM D. H:mm",
          LLLL: "YYYY. MMMM D., dddd H:mm"
        },
        meridiemParse: /de|du/i,
        isPM: function(input) {
          return input.charAt(1).toLowerCase() === "u";
        },
        meridiem: function(hours, minutes, isLower) {
          if (hours < 12) {
            return isLower === true ? "de" : "DE";
          } else {
            return isLower === true ? "du" : "DU";
          }
        },
        calendar: {
          sameDay: "[ma] LT[-kor]",
          nextDay: "[holnap] LT[-kor]",
          nextWeek: function() {
            return week.call(this, true);
          },
          lastDay: "[tegnap] LT[-kor]",
          lastWeek: function() {
            return week.call(this, false);
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "%s múlva",
          past: "%s",
          s: translate$4,
          ss: translate$4,
          m: translate$4,
          mm: translate$4,
          h: translate$4,
          hh: translate$4,
          d: translate$4,
          dd: translate$4,
          M: translate$4,
          MM: translate$4,
          y: translate$4,
          yy: translate$4
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("hy-am", {
        months: {
          format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
          standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
        weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY թ.",
          LLL: "D MMMM YYYY թ., HH:mm",
          LLLL: "dddd, D MMMM YYYY թ., HH:mm"
        },
        calendar: {
          sameDay: "[այսօր] LT",
          nextDay: "[վաղը] LT",
          lastDay: "[երեկ] LT",
          nextWeek: function() {
            return "dddd [օրը ժամը] LT";
          },
          lastWeek: function() {
            return "[անցած] dddd [օրը ժամը] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "%s հետո",
          past: "%s առաջ",
          s: "մի քանի վայրկյան",
          ss: "%d վայրկյան",
          m: "րոպե",
          mm: "%d րոպե",
          h: "ժամ",
          hh: "%d ժամ",
          d: "օր",
          dd: "%d օր",
          M: "ամիս",
          MM: "%d ամիս",
          y: "տարի",
          yy: "%d տարի"
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function(input) {
          return /^(ցերեկվա|երեկոյան)$/.test(input);
        },
        meridiem: function(hour) {
          if (hour < 4) {
            return "գիշերվա";
          } else if (hour < 12) {
            return "առավոտվա";
          } else if (hour < 17) {
            return "ցերեկվա";
          } else {
            return "երեկոյան";
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function(number, period) {
          switch (period) {
           case "DDD":
           case "w":
           case "W":
           case "DDDo":
            if (number === 1) {
              return number + "-ին";
            }
            return number + "-րդ";

           default:
            return number;
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "pagi") {
            return hour;
          } else if (meridiem === "siang") {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === "sore" || meridiem === "malam") {
            return hour + 12;
          }
        },
        meridiem: function(hours, minutes, isLower) {
          if (hours < 11) {
            return "pagi";
          } else if (hours < 15) {
            return "siang";
          } else if (hours < 19) {
            return "sore";
          } else {
            return "malam";
          }
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Besok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kemarin pukul] LT",
          lastWeek: "dddd [lalu pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lalu",
          s: "beberapa detik",
          ss: "%d detik",
          m: "semenit",
          mm: "%d menit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      function plural$2(n) {
        if (n % 100 === 11) {
          return true;
        } else if (n % 10 === 1) {
          return false;
        }
        return true;
      }
      function translate$5(number, withoutSuffix, key, isFuture) {
        var result = number + " ";
        switch (key) {
         case "s":
          return withoutSuffix || isFuture ? "nokkrar sekúndur" : "nokkrum sekúndum";

         case "ss":
          if (plural$2(number)) {
            return result + (withoutSuffix || isFuture ? "sekúndur" : "sekúndum");
          }
          return result + "sekúnda";

         case "m":
          return withoutSuffix ? "mínúta" : "mínútu";

         case "mm":
          if (plural$2(number)) {
            return result + (withoutSuffix || isFuture ? "mínútur" : "mínútum");
          } else if (withoutSuffix) {
            return result + "mínúta";
          }
          return result + "mínútu";

         case "hh":
          if (plural$2(number)) {
            return result + (withoutSuffix || isFuture ? "klukkustundir" : "klukkustundum");
          }
          return result + "klukkustund";

         case "d":
          if (withoutSuffix) {
            return "dagur";
          }
          return isFuture ? "dag" : "degi";

         case "dd":
          if (plural$2(number)) {
            if (withoutSuffix) {
              return result + "dagar";
            }
            return result + (isFuture ? "daga" : "dögum");
          } else if (withoutSuffix) {
            return result + "dagur";
          }
          return result + (isFuture ? "dag" : "degi");

         case "M":
          if (withoutSuffix) {
            return "mánuður";
          }
          return isFuture ? "mánuð" : "mánuði";

         case "MM":
          if (plural$2(number)) {
            if (withoutSuffix) {
              return result + "mánuðir";
            }
            return result + (isFuture ? "mánuði" : "mánuðum");
          } else if (withoutSuffix) {
            return result + "mánuður";
          }
          return result + (isFuture ? "mánuð" : "mánuði");

         case "y":
          return withoutSuffix || isFuture ? "ár" : "ári";

         case "yy":
          if (plural$2(number)) {
            return result + (withoutSuffix || isFuture ? "ár" : "árum");
          }
          return result + (withoutSuffix || isFuture ? "ár" : "ári");
        }
      }
      hooks.defineLocale("is", {
        months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
        weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
        },
        calendar: {
          sameDay: "[í dag kl.] LT",
          nextDay: "[á morgun kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[í gær kl.] LT",
          lastWeek: "[síðasta] dddd [kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "eftir %s",
          past: "fyrir %s síðan",
          s: translate$5,
          ss: translate$5,
          m: translate$5,
          mm: translate$5,
          h: "klukkustund",
          hh: translate$5,
          d: translate$5,
          dd: translate$5,
          M: translate$5,
          MM: translate$5,
          y: translate$5,
          yy: translate$5
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("it-ch", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Oggi alle] LT",
          nextDay: "[Domani alle] LT",
          nextWeek: "dddd [alle] LT",
          lastDay: "[Ieri alle] LT",
          lastWeek: function() {
            switch (this.day()) {
             case 0:
              return "[la scorsa] dddd [alle] LT";

             default:
              return "[lo scorso] dddd [alle] LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: function(s) {
            return (/^[0-9].+$/.test(s) ? "tra" : "in") + " " + s;
          },
          past: "%s fa",
          s: "alcuni secondi",
          ss: "%d secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: function() {
            return "[Oggi a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";
          },
          nextDay: function() {
            return "[Domani a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";
          },
          nextWeek: function() {
            return "dddd [a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";
          },
          lastDay: function() {
            return "[Ieri a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";
          },
          lastWeek: function() {
            switch (this.day()) {
             case 0:
              return "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";

             default:
              return "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "tra %s",
          past: "%s fa",
          s: "alcuni secondi",
          ss: "%d secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          w: "una settimana",
          ww: "%d settimane",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("ja", {
        eras: [ {
          since: "2019-05-01",
          offset: 1,
          name: "令和",
          narrow: "㋿",
          abbr: "R"
        }, {
          since: "1989-01-08",
          until: "2019-04-30",
          offset: 1,
          name: "平成",
          narrow: "㍻",
          abbr: "H"
        }, {
          since: "1926-12-25",
          until: "1989-01-07",
          offset: 1,
          name: "昭和",
          narrow: "㍼",
          abbr: "S"
        }, {
          since: "1912-07-30",
          until: "1926-12-24",
          offset: 1,
          name: "大正",
          narrow: "㍽",
          abbr: "T"
        }, {
          since: "1873-01-01",
          until: "1912-07-29",
          offset: 6,
          name: "明治",
          narrow: "㍾",
          abbr: "M"
        }, {
          since: "0001-01-01",
          until: "1873-12-31",
          offset: 1,
          name: "西暦",
          narrow: "AD",
          abbr: "AD"
        }, {
          since: "0000-12-31",
          until: -Infinity,
          offset: 1,
          name: "紀元前",
          narrow: "BC",
          abbr: "BC"
        } ],
        eraYearOrdinalRegex: /(元|\d+)年/,
        eraYearOrdinalParse: function(input, match) {
          return match[1] === "元" ? 1 : parseInt(match[1] || input, 10);
        },
        months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日 dddd HH:mm",
          l: "YYYY/MM/DD",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日(ddd) HH:mm"
        },
        meridiemParse: /午前|午後/i,
        isPM: function(input) {
          return input === "午後";
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "午前";
          } else {
            return "午後";
          }
        },
        calendar: {
          sameDay: "[今日] LT",
          nextDay: "[明日] LT",
          nextWeek: function(now) {
            if (now.week() !== this.week()) {
              return "[来週]dddd LT";
            } else {
              return "dddd LT";
            }
          },
          lastDay: "[昨日] LT",
          lastWeek: function(now) {
            if (this.week() !== now.week()) {
              return "[先週]dddd LT";
            } else {
              return "dddd LT";
            }
          },
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}日/,
        ordinal: function(number, period) {
          switch (period) {
           case "y":
            return number === 1 ? "元年" : number + "年";

           case "d":
           case "D":
           case "DDD":
            return number + "日";

           default:
            return number;
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "数秒",
          ss: "%d秒",
          m: "1分",
          mm: "%d分",
          h: "1時間",
          hh: "%d時間",
          d: "1日",
          dd: "%d日",
          M: "1ヶ月",
          MM: "%dヶ月",
          y: "1年",
          yy: "%d年"
        }
      });
      hooks.defineLocale("jv", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "enjing") {
            return hour;
          } else if (meridiem === "siyang") {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === "sonten" || meridiem === "ndalu") {
            return hour + 12;
          }
        },
        meridiem: function(hours, minutes, isLower) {
          if (hours < 11) {
            return "enjing";
          } else if (hours < 15) {
            return "siyang";
          } else if (hours < 19) {
            return "sonten";
          } else {
            return "ndalu";
          }
        },
        calendar: {
          sameDay: "[Dinten puniko pukul] LT",
          nextDay: "[Mbenjang pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kala wingi pukul] LT",
          lastWeek: "dddd [kepengker pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "wonten ing %s",
          past: "%s ingkang kepengker",
          s: "sawetawis detik",
          ss: "%d detik",
          m: "setunggal menit",
          mm: "%d menit",
          h: "setunggal jam",
          hh: "%d jam",
          d: "sedinten",
          dd: "%d dinten",
          M: "sewulan",
          MM: "%d wulan",
          y: "setaun",
          yy: "%d taun"
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("ka", {
        months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
        weekdays: {
          standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
          format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
          isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[დღეს] LT[-ზე]",
          nextDay: "[ხვალ] LT[-ზე]",
          lastDay: "[გუშინ] LT[-ზე]",
          nextWeek: "[შემდეგ] dddd LT[-ზე]",
          lastWeek: "[წინა] dddd LT-ზე",
          sameElse: "L"
        },
        relativeTime: {
          future: function(s) {
            return s.replace(/(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/, (function($0, $1, $2) {
              return $2 === "ი" ? $1 + "ში" : $1 + $2 + "ში";
            }));
          },
          past: function(s) {
            if (/(წამი|წუთი|საათი|დღე|თვე)/.test(s)) {
              return s.replace(/(ი|ე)$/, "ის წინ");
            }
            if (/წელი/.test(s)) {
              return s.replace(/წელი$/, "წლის წინ");
            }
            return s;
          },
          s: "რამდენიმე წამი",
          ss: "%d წამი",
          m: "წუთი",
          mm: "%d წუთი",
          h: "საათი",
          hh: "%d საათი",
          d: "დღე",
          dd: "%d დღე",
          M: "თვე",
          MM: "%d თვე",
          y: "წელი",
          yy: "%d წელი"
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function(number) {
          if (number === 0) {
            return number;
          }
          if (number === 1) {
            return number + "-ლი";
          }
          if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
            return "მე-" + number;
          }
          return number + "-ე";
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      var suffixes$1 = {
        0: "-ші",
        1: "-ші",
        2: "-ші",
        3: "-ші",
        4: "-ші",
        5: "-ші",
        6: "-шы",
        7: "-ші",
        8: "-ші",
        9: "-шы",
        10: "-шы",
        20: "-шы",
        30: "-шы",
        40: "-шы",
        50: "-ші",
        60: "-шы",
        70: "-ші",
        80: "-ші",
        90: "-шы",
        100: "-ші"
      };
      hooks.defineLocale("kk", {
        months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
        monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
        weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
        weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
        weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Бүгін сағат] LT",
          nextDay: "[Ертең сағат] LT",
          nextWeek: "dddd [сағат] LT",
          lastDay: "[Кеше сағат] LT",
          lastWeek: "[Өткен аптаның] dddd [сағат] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ішінде",
          past: "%s бұрын",
          s: "бірнеше секунд",
          ss: "%d секунд",
          m: "бір минут",
          mm: "%d минут",
          h: "бір сағат",
          hh: "%d сағат",
          d: "бір күн",
          dd: "%d күн",
          M: "бір ай",
          MM: "%d ай",
          y: "бір жыл",
          yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function(number) {
          var a = number % 10, b = number >= 100 ? 100 : null;
          return number + (suffixes$1[number] || suffixes$1[a] || suffixes$1[b]);
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      var symbolMap$9 = {
        1: "១",
        2: "២",
        3: "៣",
        4: "៤",
        5: "៥",
        6: "៦",
        7: "៧",
        8: "៨",
        9: "៩",
        0: "០"
      }, numberMap$8 = {
        "១": "1",
        "២": "2",
        "៣": "3",
        "៤": "4",
        "៥": "5",
        "៦": "6",
        "៧": "7",
        "៨": "8",
        "៩": "9",
        "០": "0"
      };
      hooks.defineLocale("km", {
        months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function(input) {
          return input === "ល្ងាច";
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "ព្រឹក";
          } else {
            return "ល្ងាច";
          }
        },
        calendar: {
          sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
          nextDay: "[ស្អែក ម៉ោង] LT",
          nextWeek: "dddd [ម៉ោង] LT",
          lastDay: "[ម្សិលមិញ ម៉ោង] LT",
          lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sទៀត",
          past: "%sមុន",
          s: "ប៉ុន្មានវិនាទី",
          ss: "%d វិនាទី",
          m: "មួយនាទី",
          mm: "%d នាទី",
          h: "មួយម៉ោង",
          hh: "%d ម៉ោង",
          d: "មួយថ្ងៃ",
          dd: "%d ថ្ងៃ",
          M: "មួយខែ",
          MM: "%d ខែ",
          y: "មួយឆ្នាំ",
          yy: "%d ឆ្នាំ"
        },
        dayOfMonthOrdinalParse: /ទី\d{1,2}/,
        ordinal: "ទី%d",
        preparse: function(string) {
          return string.replace(/[១២៣៤៥៦៧៨៩០]/g, (function(match) {
            return numberMap$8[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$9[match];
          }));
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var symbolMap$a = {
        1: "೧",
        2: "೨",
        3: "೩",
        4: "೪",
        5: "೫",
        6: "೬",
        7: "೭",
        8: "೮",
        9: "೯",
        0: "೦"
      }, numberMap$9 = {
        "೧": "1",
        "೨": "2",
        "೩": "3",
        "೪": "4",
        "೫": "5",
        "೬": "6",
        "೭": "7",
        "೮": "8",
        "೯": "9",
        "೦": "0"
      };
      hooks.defineLocale("kn", {
        months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
        monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),
        monthsParseExact: true,
        weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
        weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
        weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[ಇಂದು] LT",
          nextDay: "[ನಾಳೆ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ನಿನ್ನೆ] LT",
          lastWeek: "[ಕೊನೆಯ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ನಂತರ",
          past: "%s ಹಿಂದೆ",
          s: "ಕೆಲವು ಕ್ಷಣಗಳು",
          ss: "%d ಸೆಕೆಂಡುಗಳು",
          m: "ಒಂದು ನಿಮಿಷ",
          mm: "%d ನಿಮಿಷ",
          h: "ಒಂದು ಗಂಟೆ",
          hh: "%d ಗಂಟೆ",
          d: "ಒಂದು ದಿನ",
          dd: "%d ದಿನ",
          M: "ಒಂದು ತಿಂಗಳು",
          MM: "%d ತಿಂಗಳು",
          y: "ಒಂದು ವರ್ಷ",
          yy: "%d ವರ್ಷ"
        },
        preparse: function(string) {
          return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, (function(match) {
            return numberMap$9[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$a[match];
          }));
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "ರಾತ್ರಿ") {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === "ಬೆಳಿಗ್ಗೆ") {
            return hour;
          } else if (meridiem === "ಮಧ್ಯಾಹ್ನ") {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === "ಸಂಜೆ") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "ರಾತ್ರಿ";
          } else if (hour < 10) {
            return "ಬೆಳಿಗ್ಗೆ";
          } else if (hour < 17) {
            return "ಮಧ್ಯಾಹ್ನ";
          } else if (hour < 20) {
            return "ಸಂಜೆ";
          } else {
            return "ರಾತ್ರಿ";
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal: function(number) {
          return number + "ನೇ";
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      hooks.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY년 MMMM D일",
          LLL: "YYYY년 MMMM D일 A h:mm",
          LLLL: "YYYY년 MMMM D일 dddd A h:mm",
          l: "YYYY.MM.DD.",
          ll: "YYYY년 MMMM D일",
          lll: "YYYY년 MMMM D일 A h:mm",
          llll: "YYYY년 MMMM D일 dddd A h:mm"
        },
        calendar: {
          sameDay: "오늘 LT",
          nextDay: "내일 LT",
          nextWeek: "dddd LT",
          lastDay: "어제 LT",
          lastWeek: "지난주 dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s 후",
          past: "%s 전",
          s: "몇 초",
          ss: "%d초",
          m: "1분",
          mm: "%d분",
          h: "한 시간",
          hh: "%d시간",
          d: "하루",
          dd: "%d일",
          M: "한 달",
          MM: "%d달",
          y: "일 년",
          yy: "%d년"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
        ordinal: function(number, period) {
          switch (period) {
           case "d":
           case "D":
           case "DDD":
            return number + "일";

           case "M":
            return number + "월";

           case "w":
           case "W":
            return number + "주";

           default:
            return number;
          }
        },
        meridiemParse: /오전|오후/,
        isPM: function(token) {
          return token === "오후";
        },
        meridiem: function(hour, minute, isUpper) {
          return hour < 12 ? "오전" : "오후";
        }
      });
      var symbolMap$b = {
        1: "١",
        2: "٢",
        3: "٣",
        4: "٤",
        5: "٥",
        6: "٦",
        7: "٧",
        8: "٨",
        9: "٩",
        0: "٠"
      }, numberMap$a = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
      }, months$8 = [ "کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم" ];
      hooks.defineLocale("ku", {
        months: months$8,
        monthsShort: months$8,
        weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),
        weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM: function(input) {
          return /ئێواره‌/.test(input);
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "به‌یانی";
          } else {
            return "ئێواره‌";
          }
        },
        calendar: {
          sameDay: "[ئه‌مرۆ كاتژمێر] LT",
          nextDay: "[به‌یانی كاتژمێر] LT",
          nextWeek: "dddd [كاتژمێر] LT",
          lastDay: "[دوێنێ كاتژمێر] LT",
          lastWeek: "dddd [كاتژمێر] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "له‌ %s",
          past: "%s",
          s: "چه‌ند چركه‌یه‌ك",
          ss: "چركه‌ %d",
          m: "یه‌ك خوله‌ك",
          mm: "%d خوله‌ك",
          h: "یه‌ك كاتژمێر",
          hh: "%d كاتژمێر",
          d: "یه‌ك ڕۆژ",
          dd: "%d ڕۆژ",
          M: "یه‌ك مانگ",
          MM: "%d مانگ",
          y: "یه‌ك ساڵ",
          yy: "%d ساڵ"
        },
        preparse: function(string) {
          return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, (function(match) {
            return numberMap$a[match];
          })).replace(/،/g, ",");
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$b[match];
          })).replace(/,/g, "،");
        },
        week: {
          dow: 6,
          doy: 12
        }
      });
      var suffixes$2 = {
        0: "-чү",
        1: "-чи",
        2: "-чи",
        3: "-чү",
        4: "-чү",
        5: "-чи",
        6: "-чы",
        7: "-чи",
        8: "-чи",
        9: "-чу",
        10: "-чу",
        20: "-чы",
        30: "-чу",
        40: "-чы",
        50: "-чү",
        60: "-чы",
        70: "-чи",
        80: "-чи",
        90: "-чу",
        100: "-чү"
      };
      hooks.defineLocale("ky", {
        months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
        monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
        weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
        weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Бүгүн саат] LT",
          nextDay: "[Эртең саат] LT",
          nextWeek: "dddd [саат] LT",
          lastDay: "[Кечээ саат] LT",
          lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ичинде",
          past: "%s мурун",
          s: "бирнече секунд",
          ss: "%d секунд",
          m: "бир мүнөт",
          mm: "%d мүнөт",
          h: "бир саат",
          hh: "%d саат",
          d: "бир күн",
          dd: "%d күн",
          M: "бир ай",
          MM: "%d ай",
          y: "бир жыл",
          yy: "%d жыл"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function(number) {
          var a = number % 10, b = number >= 100 ? 100 : null;
          return number + (suffixes$2[number] || suffixes$2[a] || suffixes$2[b]);
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      function processRelativeTime$6(number, withoutSuffix, key, isFuture) {
        var format = {
          m: [ "eng Minutt", "enger Minutt" ],
          h: [ "eng Stonn", "enger Stonn" ],
          d: [ "een Dag", "engem Dag" ],
          M: [ "ee Mount", "engem Mount" ],
          y: [ "ee Joer", "engem Joer" ]
        };
        return withoutSuffix ? format[key][0] : format[key][1];
      }
      function processFutureTime(string) {
        var number = string.substr(0, string.indexOf(" "));
        if (eifelerRegelAppliesToNumber(number)) {
          return "a " + string;
        }
        return "an " + string;
      }
      function processPastTime(string) {
        var number = string.substr(0, string.indexOf(" "));
        if (eifelerRegelAppliesToNumber(number)) {
          return "viru " + string;
        }
        return "virun " + string;
      }
      function eifelerRegelAppliesToNumber(number) {
        number = parseInt(number, 10);
        if (isNaN(number)) {
          return false;
        }
        if (number < 0) {
          return true;
        } else if (number < 10) {
          if (4 <= number && number <= 7) {
            return true;
          }
          return false;
        } else if (number < 100) {
          var lastDigit = number % 10, firstDigit = number / 10;
          if (lastDigit === 0) {
            return eifelerRegelAppliesToNumber(firstDigit);
          }
          return eifelerRegelAppliesToNumber(lastDigit);
        } else if (number < 1e4) {
          while (number >= 10) {
            number = number / 10;
          }
          return eifelerRegelAppliesToNumber(number);
        } else {
          number = number / 1e3;
          return eifelerRegelAppliesToNumber(number);
        }
      }
      hooks.defineLocale("lb", {
        months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: true,
        weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm [Auer]",
          LTS: "H:mm:ss [Auer]",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm [Auer]",
          LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
        },
        calendar: {
          sameDay: "[Haut um] LT",
          sameElse: "L",
          nextDay: "[Muer um] LT",
          nextWeek: "dddd [um] LT",
          lastDay: "[Gëschter um] LT",
          lastWeek: function() {
            switch (this.day()) {
             case 2:
             case 4:
              return "[Leschten] dddd [um] LT";

             default:
              return "[Leschte] dddd [um] LT";
            }
          }
        },
        relativeTime: {
          future: processFutureTime,
          past: processPastTime,
          s: "e puer Sekonnen",
          ss: "%d Sekonnen",
          m: processRelativeTime$6,
          mm: "%d Minutten",
          h: processRelativeTime$6,
          hh: "%d Stonnen",
          d: processRelativeTime$6,
          dd: "%d Deeg",
          M: processRelativeTime$6,
          MM: "%d Méint",
          y: processRelativeTime$6,
          yy: "%d Joer"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("lo", {
        months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "ວັນdddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function(input) {
          return input === "ຕອນແລງ";
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "ຕອນເຊົ້າ";
          } else {
            return "ຕອນແລງ";
          }
        },
        calendar: {
          sameDay: "[ມື້ນີ້ເວລາ] LT",
          nextDay: "[ມື້ອື່ນເວລາ] LT",
          nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
          lastDay: "[ມື້ວານນີ້ເວລາ] LT",
          lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ອີກ %s",
          past: "%sຜ່ານມາ",
          s: "ບໍ່ເທົ່າໃດວິນາທີ",
          ss: "%d ວິນາທີ",
          m: "1 ນາທີ",
          mm: "%d ນາທີ",
          h: "1 ຊົ່ວໂມງ",
          hh: "%d ຊົ່ວໂມງ",
          d: "1 ມື້",
          dd: "%d ມື້",
          M: "1 ເດືອນ",
          MM: "%d ເດືອນ",
          y: "1 ປີ",
          yy: "%d ປີ"
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function(number) {
          return "ທີ່" + number;
        }
      });
      var units = {
        ss: "sekundė_sekundžių_sekundes",
        m: "minutė_minutės_minutę",
        mm: "minutės_minučių_minutes",
        h: "valanda_valandos_valandą",
        hh: "valandos_valandų_valandas",
        d: "diena_dienos_dieną",
        dd: "dienos_dienų_dienas",
        M: "mėnuo_mėnesio_mėnesį",
        MM: "mėnesiai_mėnesių_mėnesius",
        y: "metai_metų_metus",
        yy: "metai_metų_metus"
      };
      function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
          return "kelios sekundės";
        } else {
          return isFuture ? "kelių sekundžių" : "kelias sekundes";
        }
      }
      function translateSingular(number, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
      }
      function special(number) {
        return number % 10 === 0 || number > 10 && number < 20;
      }
      function forms(key) {
        return units[key].split("_");
      }
      function translate$6(number, withoutSuffix, key, isFuture) {
        var result = number + " ";
        if (number === 1) {
          return result + translateSingular(number, withoutSuffix, key[0], isFuture);
        } else if (withoutSuffix) {
          return result + (special(number) ? forms(key)[1] : forms(key)[0]);
        } else {
          if (isFuture) {
            return result + forms(key)[1];
          } else {
            return result + (special(number) ? forms(key)[1] : forms(key)[2]);
          }
        }
      }
      hooks.defineLocale("lt", {
        months: {
          format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
          standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
          isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
          format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
          standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
          isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY [m.] MMMM D [d.]",
          LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
          l: "YYYY-MM-DD",
          ll: "YYYY [m.] MMMM D [d.]",
          lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
          llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
          sameDay: "[Šiandien] LT",
          nextDay: "[Rytoj] LT",
          nextWeek: "dddd LT",
          lastDay: "[Vakar] LT",
          lastWeek: "[Praėjusį] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "po %s",
          past: "prieš %s",
          s: translateSeconds,
          ss: translate$6,
          m: translateSingular,
          mm: translate$6,
          h: translateSingular,
          hh: translate$6,
          d: translateSingular,
          dd: translate$6,
          M: translateSingular,
          MM: translate$6,
          y: translateSingular,
          yy: translate$6
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal: function(number) {
          return number + "-oji";
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var units$1 = {
        ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
        m: "minūtes_minūtēm_minūte_minūtes".split("_"),
        mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
        h: "stundas_stundām_stunda_stundas".split("_"),
        hh: "stundas_stundām_stunda_stundas".split("_"),
        d: "dienas_dienām_diena_dienas".split("_"),
        dd: "dienas_dienām_diena_dienas".split("_"),
        M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_")
      };
      function format$1(forms, number, withoutSuffix) {
        if (withoutSuffix) {
          return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
        } else {
          return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
        }
      }
      function relativeTimeWithPlural$1(number, withoutSuffix, key) {
        return number + " " + format$1(units$1[key], number, withoutSuffix);
      }
      function relativeTimeWithSingular(number, withoutSuffix, key) {
        return format$1(units$1[key], number, withoutSuffix);
      }
      function relativeSeconds(number, withoutSuffix) {
        return withoutSuffix ? "dažas sekundes" : "dažām sekundēm";
      }
      hooks.defineLocale("lv", {
        months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
        weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY.",
          LL: "YYYY. [gada] D. MMMM",
          LLL: "YYYY. [gada] D. MMMM, HH:mm",
          LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
          sameDay: "[Šodien pulksten] LT",
          nextDay: "[Rīt pulksten] LT",
          nextWeek: "dddd [pulksten] LT",
          lastDay: "[Vakar pulksten] LT",
          lastWeek: "[Pagājušā] dddd [pulksten] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "pēc %s",
          past: "pirms %s",
          s: relativeSeconds,
          ss: relativeTimeWithPlural$1,
          m: relativeTimeWithSingular,
          mm: relativeTimeWithPlural$1,
          h: relativeTimeWithSingular,
          hh: relativeTimeWithPlural$1,
          d: relativeTimeWithSingular,
          dd: relativeTimeWithPlural$1,
          M: relativeTimeWithSingular,
          MM: relativeTimeWithPlural$1,
          y: relativeTimeWithSingular,
          yy: relativeTimeWithPlural$1
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      var translator = {
        words: {
          ss: [ "sekund", "sekunda", "sekundi" ],
          m: [ "jedan minut", "jednog minuta" ],
          mm: [ "minut", "minuta", "minuta" ],
          h: [ "jedan sat", "jednog sata" ],
          hh: [ "sat", "sata", "sati" ],
          dd: [ "dan", "dana", "dana" ],
          MM: [ "mjesec", "mjeseca", "mjeseci" ],
          yy: [ "godina", "godine", "godina" ]
        },
        correctGrammaticalCase: function(number, wordKey) {
          return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
        },
        translate: function(number, withoutSuffix, key) {
          var wordKey = translator.words[key];
          if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
          } else {
            return number + " " + translator.correctGrammaticalCase(number, wordKey);
          }
        }
      };
      hooks.defineLocale("me", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sjutra u] LT",
          nextWeek: function() {
            switch (this.day()) {
             case 0:
              return "[u] [nedjelju] [u] LT";

             case 3:
              return "[u] [srijedu] [u] LT";

             case 6:
              return "[u] [subotu] [u] LT";

             case 1:
             case 2:
             case 4:
             case 5:
              return "[u] dddd [u] LT";
            }
          },
          lastDay: "[juče u] LT",
          lastWeek: function() {
            var lastWeekDays = [ "[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT" ];
            return lastWeekDays[this.day()];
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "prije %s",
          s: "nekoliko sekundi",
          ss: translator.translate,
          m: translator.translate,
          mm: translator.translate,
          h: translator.translate,
          hh: translator.translate,
          d: "dan",
          dd: translator.translate,
          M: "mjesec",
          MM: translator.translate,
          y: "godinu",
          yy: translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("mi", {
        months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
        monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
        weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [i] HH:mm",
          LLLL: "dddd, D MMMM YYYY [i] HH:mm"
        },
        calendar: {
          sameDay: "[i teie mahana, i] LT",
          nextDay: "[apopo i] LT",
          nextWeek: "dddd [i] LT",
          lastDay: "[inanahi i] LT",
          lastWeek: "dddd [whakamutunga i] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "i roto i %s",
          past: "%s i mua",
          s: "te hēkona ruarua",
          ss: "%d hēkona",
          m: "he meneti",
          mm: "%d meneti",
          h: "te haora",
          hh: "%d haora",
          d: "he ra",
          dd: "%d ra",
          M: "he marama",
          MM: "%d marama",
          y: "he tau",
          yy: "%d tau"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("mk", {
        months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[Денес во] LT",
          nextDay: "[Утре во] LT",
          nextWeek: "[Во] dddd [во] LT",
          lastDay: "[Вчера во] LT",
          lastWeek: function() {
            switch (this.day()) {
             case 0:
             case 3:
             case 6:
              return "[Изминатата] dddd [во] LT";

             case 1:
             case 2:
             case 4:
             case 5:
              return "[Изминатиот] dddd [во] LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "за %s",
          past: "пред %s",
          s: "неколку секунди",
          ss: "%d секунди",
          m: "една минута",
          mm: "%d минути",
          h: "еден час",
          hh: "%d часа",
          d: "еден ден",
          dd: "%d дена",
          M: "еден месец",
          MM: "%d месеци",
          y: "една година",
          yy: "%d години"
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(number) {
          var lastDigit = number % 10, last2Digits = number % 100;
          if (number === 0) {
            return number + "-ев";
          } else if (last2Digits === 0) {
            return number + "-ен";
          } else if (last2Digits > 10 && last2Digits < 20) {
            return number + "-ти";
          } else if (lastDigit === 1) {
            return number + "-ви";
          } else if (lastDigit === 2) {
            return number + "-ри";
          } else if (lastDigit === 7 || lastDigit === 8) {
            return number + "-ми";
          } else {
            return number + "-ти";
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("ml", {
        months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
        monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
        monthsParseExact: true,
        weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
          LT: "A h:mm -നു",
          LTS: "A h:mm:ss -നു",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm -നു",
          LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
        },
        calendar: {
          sameDay: "[ഇന്ന്] LT",
          nextDay: "[നാളെ] LT",
          nextWeek: "dddd, LT",
          lastDay: "[ഇന്നലെ] LT",
          lastWeek: "[കഴിഞ്ഞ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s കഴിഞ്ഞ്",
          past: "%s മുൻപ്",
          s: "അൽപ നിമിഷങ്ങൾ",
          ss: "%d സെക്കൻഡ്",
          m: "ഒരു മിനിറ്റ്",
          mm: "%d മിനിറ്റ്",
          h: "ഒരു മണിക്കൂർ",
          hh: "%d മണിക്കൂർ",
          d: "ഒരു ദിവസം",
          dd: "%d ദിവസം",
          M: "ഒരു മാസം",
          MM: "%d മാസം",
          y: "ഒരു വർഷം",
          yy: "%d വർഷം"
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "രാത്രി" && hour >= 4 || meridiem === "ഉച്ച കഴിഞ്ഞ്" || meridiem === "വൈകുന്നേരം") {
            return hour + 12;
          } else {
            return hour;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "രാത്രി";
          } else if (hour < 12) {
            return "രാവിലെ";
          } else if (hour < 17) {
            return "ഉച്ച കഴിഞ്ഞ്";
          } else if (hour < 20) {
            return "വൈകുന്നേരം";
          } else {
            return "രാത്രി";
          }
        }
      });
      function translate$7(number, withoutSuffix, key, isFuture) {
        switch (key) {
         case "s":
          return withoutSuffix ? "хэдхэн секунд" : "хэдхэн секундын";

         case "ss":
          return number + (withoutSuffix ? " секунд" : " секундын");

         case "m":
         case "mm":
          return number + (withoutSuffix ? " минут" : " минутын");

         case "h":
         case "hh":
          return number + (withoutSuffix ? " цаг" : " цагийн");

         case "d":
         case "dd":
          return number + (withoutSuffix ? " өдөр" : " өдрийн");

         case "M":
         case "MM":
          return number + (withoutSuffix ? " сар" : " сарын");

         case "y":
         case "yy":
          return number + (withoutSuffix ? " жил" : " жилийн");

         default:
          return number;
        }
      }
      hooks.defineLocale("mn", {
        months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),
        monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),
        monthsParseExact: true,
        weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
        weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
        weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY оны MMMMын D",
          LLL: "YYYY оны MMMMын D HH:mm",
          LLLL: "dddd, YYYY оны MMMMын D HH:mm"
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM: function(input) {
          return input === "ҮХ";
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "ҮӨ";
          } else {
            return "ҮХ";
          }
        },
        calendar: {
          sameDay: "[Өнөөдөр] LT",
          nextDay: "[Маргааш] LT",
          nextWeek: "[Ирэх] dddd LT",
          lastDay: "[Өчигдөр] LT",
          lastWeek: "[Өнгөрсөн] dddd LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s дараа",
          past: "%s өмнө",
          s: translate$7,
          ss: translate$7,
          m: translate$7,
          mm: translate$7,
          h: translate$7,
          hh: translate$7,
          d: translate$7,
          dd: translate$7,
          M: translate$7,
          MM: translate$7,
          y: translate$7,
          yy: translate$7
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal: function(number, period) {
          switch (period) {
           case "d":
           case "D":
           case "DDD":
            return number + " өдөр";

           default:
            return number;
          }
        }
      });
      var symbolMap$c = {
        1: "१",
        2: "२",
        3: "३",
        4: "४",
        5: "५",
        6: "६",
        7: "७",
        8: "८",
        9: "९",
        0: "०"
      }, numberMap$b = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
      };
      function relativeTimeMr(number, withoutSuffix, string, isFuture) {
        var output = "";
        if (withoutSuffix) {
          switch (string) {
           case "s":
            output = "काही सेकंद";
            break;

           case "ss":
            output = "%d सेकंद";
            break;

           case "m":
            output = "एक मिनिट";
            break;

           case "mm":
            output = "%d मिनिटे";
            break;

           case "h":
            output = "एक तास";
            break;

           case "hh":
            output = "%d तास";
            break;

           case "d":
            output = "एक दिवस";
            break;

           case "dd":
            output = "%d दिवस";
            break;

           case "M":
            output = "एक महिना";
            break;

           case "MM":
            output = "%d महिने";
            break;

           case "y":
            output = "एक वर्ष";
            break;

           case "yy":
            output = "%d वर्षे";
            break;
          }
        } else {
          switch (string) {
           case "s":
            output = "काही सेकंदां";
            break;

           case "ss":
            output = "%d सेकंदां";
            break;

           case "m":
            output = "एका मिनिटा";
            break;

           case "mm":
            output = "%d मिनिटां";
            break;

           case "h":
            output = "एका तासा";
            break;

           case "hh":
            output = "%d तासां";
            break;

           case "d":
            output = "एका दिवसा";
            break;

           case "dd":
            output = "%d दिवसां";
            break;

           case "M":
            output = "एका महिन्या";
            break;

           case "MM":
            output = "%d महिन्यां";
            break;

           case "y":
            output = "एका वर्षा";
            break;

           case "yy":
            output = "%d वर्षां";
            break;
          }
        }
        return output.replace(/%d/i, number);
      }
      hooks.defineLocale("mr", {
        months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
        monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
        monthsParseExact: true,
        weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
          LT: "A h:mm वाजता",
          LTS: "A h:mm:ss वाजता",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm वाजता",
          LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[उद्या] LT",
          nextWeek: "dddd, LT",
          lastDay: "[काल] LT",
          lastWeek: "[मागील] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sमध्ये",
          past: "%sपूर्वी",
          s: relativeTimeMr,
          ss: relativeTimeMr,
          m: relativeTimeMr,
          mm: relativeTimeMr,
          h: relativeTimeMr,
          hh: relativeTimeMr,
          d: relativeTimeMr,
          dd: relativeTimeMr,
          M: relativeTimeMr,
          MM: relativeTimeMr,
          y: relativeTimeMr,
          yy: relativeTimeMr
        },
        preparse: function(string) {
          return string.replace(/[१२३४५६७८९०]/g, (function(match) {
            return numberMap$b[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$c[match];
          }));
        },
        meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "पहाटे" || meridiem === "सकाळी") {
            return hour;
          } else if (meridiem === "दुपारी" || meridiem === "सायंकाळी" || meridiem === "रात्री") {
            return hour >= 12 ? hour : hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour >= 0 && hour < 6) {
            return "पहाटे";
          } else if (hour < 12) {
            return "सकाळी";
          } else if (hour < 17) {
            return "दुपारी";
          } else if (hour < 20) {
            return "सायंकाळी";
          } else {
            return "रात्री";
          }
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      hooks.defineLocale("ms-my", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "pagi") {
            return hour;
          } else if (meridiem === "tengahari") {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === "petang" || meridiem === "malam") {
            return hour + 12;
          }
        },
        meridiem: function(hours, minutes, isLower) {
          if (hours < 11) {
            return "pagi";
          } else if (hours < 15) {
            return "tengahari";
          } else if (hours < 19) {
            return "petang";
          } else {
            return "malam";
          }
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("ms", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [pukul] HH.mm",
          LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "pagi") {
            return hour;
          } else if (meridiem === "tengahari") {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === "petang" || meridiem === "malam") {
            return hour + 12;
          }
        },
        meridiem: function(hours, minutes, isLower) {
          if (hours < 11) {
            return "pagi";
          } else if (hours < 15) {
            return "tengahari";
          } else if (hours < 19) {
            return "petang";
          } else {
            return "malam";
          }
        },
        calendar: {
          sameDay: "[Hari ini pukul] LT",
          nextDay: "[Esok pukul] LT",
          nextWeek: "dddd [pukul] LT",
          lastDay: "[Kelmarin pukul] LT",
          lastWeek: "dddd [lepas pukul] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dalam %s",
          past: "%s yang lepas",
          s: "beberapa saat",
          ss: "%d saat",
          m: "seminit",
          mm: "%d minit",
          h: "sejam",
          hh: "%d jam",
          d: "sehari",
          dd: "%d hari",
          M: "sebulan",
          MM: "%d bulan",
          y: "setahun",
          yy: "%d tahun"
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("mt", {
        months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),
        monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
        weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),
        weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
        weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Illum fil-]LT",
          nextDay: "[Għada fil-]LT",
          nextWeek: "dddd [fil-]LT",
          lastDay: "[Il-bieraħ fil-]LT",
          lastWeek: "dddd [li għadda] [fil-]LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "f’ %s",
          past: "%s ilu",
          s: "ftit sekondi",
          ss: "%d sekondi",
          m: "minuta",
          mm: "%d minuti",
          h: "siegħa",
          hh: "%d siegħat",
          d: "ġurnata",
          dd: "%d ġranet",
          M: "xahar",
          MM: "%d xhur",
          y: "sena",
          yy: "%d sni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      });
      var symbolMap$d = {
        1: "၁",
        2: "၂",
        3: "၃",
        4: "၄",
        5: "၅",
        6: "၆",
        7: "၇",
        8: "၈",
        9: "၉",
        0: "၀"
      }, numberMap$c = {
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        "၀": "0"
      };
      hooks.defineLocale("my", {
        months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
        monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
        weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
        weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[ယနေ.] LT [မှာ]",
          nextDay: "[မနက်ဖြန်] LT [မှာ]",
          nextWeek: "dddd LT [မှာ]",
          lastDay: "[မနေ.က] LT [မှာ]",
          lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
          sameElse: "L"
        },
        relativeTime: {
          future: "လာမည့် %s မှာ",
          past: "လွန်ခဲ့သော %s က",
          s: "စက္ကန်.အနည်းငယ်",
          ss: "%d စက္ကန့်",
          m: "တစ်မိနစ်",
          mm: "%d မိနစ်",
          h: "တစ်နာရီ",
          hh: "%d နာရီ",
          d: "တစ်ရက်",
          dd: "%d ရက်",
          M: "တစ်လ",
          MM: "%d လ",
          y: "တစ်နှစ်",
          yy: "%d နှစ်"
        },
        preparse: function(string) {
          return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, (function(match) {
            return numberMap$c[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$d[match];
          }));
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        monthsParseExact: true,
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[i dag kl.] LT",
          nextDay: "[i morgen kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[i går kl.] LT",
          lastWeek: "[forrige] dddd [kl.] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "noen sekunder",
          ss: "%d sekunder",
          m: "ett minutt",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dager",
          w: "en uke",
          ww: "%d uker",
          M: "en måned",
          MM: "%d måneder",
          y: "ett år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      var symbolMap$e = {
        1: "१",
        2: "२",
        3: "३",
        4: "४",
        5: "५",
        6: "६",
        7: "७",
        8: "८",
        9: "९",
        0: "०"
      }, numberMap$d = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
      };
      hooks.defineLocale("ne", {
        months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
        monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
        monthsParseExact: true,
        weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
        weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
        weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "Aको h:mm बजे",
          LTS: "Aको h:mm:ss बजे",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, Aको h:mm बजे",
          LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
        },
        preparse: function(string) {
          return string.replace(/[१२३४५६७८९०]/g, (function(match) {
            return numberMap$d[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$e[match];
          }));
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "राति") {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === "बिहान") {
            return hour;
          } else if (meridiem === "दिउँसो") {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === "साँझ") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 3) {
            return "राति";
          } else if (hour < 12) {
            return "बिहान";
          } else if (hour < 16) {
            return "दिउँसो";
          } else if (hour < 20) {
            return "साँझ";
          } else {
            return "राति";
          }
        },
        calendar: {
          sameDay: "[आज] LT",
          nextDay: "[भोलि] LT",
          nextWeek: "[आउँदो] dddd[,] LT",
          lastDay: "[हिजो] LT",
          lastWeek: "[गएको] dddd[,] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sमा",
          past: "%s अगाडि",
          s: "केही क्षण",
          ss: "%d सेकेण्ड",
          m: "एक मिनेट",
          mm: "%d मिनेट",
          h: "एक घण्टा",
          hh: "%d घण्टा",
          d: "एक दिन",
          dd: "%d दिन",
          M: "एक महिना",
          MM: "%d महिना",
          y: "एक बर्ष",
          yy: "%d बर्ष"
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      var monthsShortWithDots$1 = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsShortWithoutDots$1 = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), monthsParse$8 = [ /^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i ], monthsRegex$8 = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      hooks.defineLocale("nl-be", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(m, format) {
          if (!m) {
            return monthsShortWithDots$1;
          } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots$1[m.month()];
          } else {
            return monthsShortWithDots$1[m.month()];
          }
        },
        monthsRegex: monthsRegex$8,
        monthsShortRegex: monthsRegex$8,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse$8,
        longMonthsParse: monthsParse$8,
        shortMonthsParse: monthsParse$8,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? "ste" : "de");
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var monthsShortWithDots$2 = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsShortWithoutDots$2 = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), monthsParse$9 = [ /^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i ], monthsRegex$9 = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
      hooks.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(m, format) {
          if (!m) {
            return monthsShortWithDots$2;
          } else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots$2[m.month()];
          } else {
            return monthsShortWithDots$2[m.month()];
          }
        },
        monthsRegex: monthsRegex$9,
        monthsShortRegex: monthsRegex$9,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: monthsParse$9,
        longMonthsParse: monthsParse$9,
        shortMonthsParse: monthsParse$9,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          w: "één week",
          ww: "%d weken",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(number) {
          return number + (number === 1 || number === 8 || number >= 20 ? "ste" : "de");
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("nn", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        monthsParseExact: true,
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
        weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY [kl.] H:mm",
          LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
          sameDay: "[I dag klokka] LT",
          nextDay: "[I morgon klokka] LT",
          nextWeek: "dddd [klokka] LT",
          lastDay: "[I går klokka] LT",
          lastWeek: "[Føregåande] dddd [klokka] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s sidan",
          s: "nokre sekund",
          ss: "%d sekund",
          m: "eit minutt",
          mm: "%d minutt",
          h: "ein time",
          hh: "%d timar",
          d: "ein dag",
          dd: "%d dagar",
          w: "ei veke",
          ww: "%d veker",
          M: "ein månad",
          MM: "%d månader",
          y: "eit år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("oc-lnc", {
        months: {
          standalone: "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"),
          format: "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split("_"),
          isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort: "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [de] YYYY",
          ll: "D MMM YYYY",
          LLL: "D MMMM [de] YYYY [a] H:mm",
          lll: "D MMM YYYY, H:mm",
          LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
          llll: "ddd D MMM YYYY, H:mm"
        },
        calendar: {
          sameDay: "[uèi a] LT",
          nextDay: "[deman a] LT",
          nextWeek: "dddd [a] LT",
          lastDay: "[ièr a] LT",
          lastWeek: "dddd [passat a] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "d'aquí %s",
          past: "fa %s",
          s: "unas segondas",
          ss: "%d segondas",
          m: "una minuta",
          mm: "%d minutas",
          h: "una ora",
          hh: "%d oras",
          d: "un jorn",
          dd: "%d jorns",
          M: "un mes",
          MM: "%d meses",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function(number, period) {
          var output = number === 1 ? "r" : number === 2 ? "n" : number === 3 ? "r" : number === 4 ? "t" : "è";
          if (period === "w" || period === "W") {
            output = "a";
          }
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var symbolMap$f = {
        1: "੧",
        2: "੨",
        3: "੩",
        4: "੪",
        5: "੫",
        6: "੬",
        7: "੭",
        8: "੮",
        9: "੯",
        0: "੦"
      }, numberMap$e = {
        "੧": "1",
        "੨": "2",
        "੩": "3",
        "੪": "4",
        "੫": "5",
        "੬": "6",
        "੭": "7",
        "੮": "8",
        "੯": "9",
        "੦": "0"
      };
      hooks.defineLocale("pa-in", {
        months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
        weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        longDateFormat: {
          LT: "A h:mm ਵਜੇ",
          LTS: "A h:mm:ss ਵਜੇ",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
          LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
        },
        calendar: {
          sameDay: "[ਅਜ] LT",
          nextDay: "[ਕਲ] LT",
          nextWeek: "[ਅਗਲਾ] dddd, LT",
          lastDay: "[ਕਲ] LT",
          lastWeek: "[ਪਿਛਲੇ] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s ਵਿੱਚ",
          past: "%s ਪਿਛਲੇ",
          s: "ਕੁਝ ਸਕਿੰਟ",
          ss: "%d ਸਕਿੰਟ",
          m: "ਇਕ ਮਿੰਟ",
          mm: "%d ਮਿੰਟ",
          h: "ਇੱਕ ਘੰਟਾ",
          hh: "%d ਘੰਟੇ",
          d: "ਇੱਕ ਦਿਨ",
          dd: "%d ਦਿਨ",
          M: "ਇੱਕ ਮਹੀਨਾ",
          MM: "%d ਮਹੀਨੇ",
          y: "ਇੱਕ ਸਾਲ",
          yy: "%d ਸਾਲ"
        },
        preparse: function(string) {
          return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, (function(match) {
            return numberMap$e[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$f[match];
          }));
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "ਰਾਤ") {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === "ਸਵੇਰ") {
            return hour;
          } else if (meridiem === "ਦੁਪਹਿਰ") {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === "ਸ਼ਾਮ") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "ਰਾਤ";
          } else if (hour < 10) {
            return "ਸਵੇਰ";
          } else if (hour < 17) {
            return "ਦੁਪਹਿਰ";
          } else if (hour < 20) {
            return "ਸ਼ਾਮ";
          } else {
            return "ਰਾਤ";
          }
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      var monthsNominative = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), monthsSubjective = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), monthsParse$a = [ /^sty/i, /^lut/i, /^mar/i, /^kwi/i, /^maj/i, /^cze/i, /^lip/i, /^sie/i, /^wrz/i, /^paź/i, /^lis/i, /^gru/i ];
      function plural$3(n) {
        return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
      }
      function translate$8(number, withoutSuffix, key) {
        var result = number + " ";
        switch (key) {
         case "ss":
          return result + (plural$3(number) ? "sekundy" : "sekund");

         case "m":
          return withoutSuffix ? "minuta" : "minutę";

         case "mm":
          return result + (plural$3(number) ? "minuty" : "minut");

         case "h":
          return withoutSuffix ? "godzina" : "godzinę";

         case "hh":
          return result + (plural$3(number) ? "godziny" : "godzin");

         case "ww":
          return result + (plural$3(number) ? "tygodnie" : "tygodni");

         case "MM":
          return result + (plural$3(number) ? "miesiące" : "miesięcy");

         case "yy":
          return result + (plural$3(number) ? "lata" : "lat");
        }
      }
      hooks.defineLocale("pl", {
        months: function(momentToFormat, format) {
          if (!momentToFormat) {
            return monthsNominative;
          } else if (/D MMMM/.test(format)) {
            return monthsSubjective[momentToFormat.month()];
          } else {
            return monthsNominative[momentToFormat.month()];
          }
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        monthsParse: monthsParse$a,
        longMonthsParse: monthsParse$a,
        shortMonthsParse: monthsParse$a,
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Dziś o] LT",
          nextDay: "[Jutro o] LT",
          nextWeek: function() {
            switch (this.day()) {
             case 0:
              return "[W niedzielę o] LT";

             case 2:
              return "[We wtorek o] LT";

             case 3:
              return "[W środę o] LT";

             case 6:
              return "[W sobotę o] LT";

             default:
              return "[W] dddd [o] LT";
            }
          },
          lastDay: "[Wczoraj o] LT",
          lastWeek: function() {
            switch (this.day()) {
             case 0:
              return "[W zeszłą niedzielę o] LT";

             case 3:
              return "[W zeszłą środę o] LT";

             case 6:
              return "[W zeszłą sobotę o] LT";

             default:
              return "[W zeszły] dddd [o] LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "%s temu",
          s: "kilka sekund",
          ss: translate$8,
          m: translate$8,
          mm: translate$8,
          h: translate$8,
          hh: translate$8,
          d: "1 dzień",
          dd: "%d dni",
          w: "tydzień",
          ww: translate$8,
          M: "miesiąc",
          MM: translate$8,
          y: "rok",
          yy: translate$8
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("pt-br", {
        months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
        weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
        weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function() {
            return this.day() === 0 || this.day() === 6 ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "poucos segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        invalidDate: "Data inválida"
      });
      hooks.defineLocale("pt", {
        months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function() {
            return this.day() === 0 || this.day() === 6 ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          w: "uma semana",
          ww: "%d semanas",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      });
      function relativeTimeWithPlural$2(number, withoutSuffix, key) {
        var format = {
          ss: "secunde",
          mm: "minute",
          hh: "ore",
          dd: "zile",
          ww: "săptămâni",
          MM: "luni",
          yy: "ani"
        }, separator = " ";
        if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
          separator = " de ";
        }
        return number + separator + format[key];
      }
      hooks.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
        monthsShort: "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY H:mm",
          LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[azi la] LT",
          nextDay: "[mâine la] LT",
          nextWeek: "dddd [la] LT",
          lastDay: "[ieri la] LT",
          lastWeek: "[fosta] dddd [la] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "peste %s",
          past: "%s în urmă",
          s: "câteva secunde",
          ss: relativeTimeWithPlural$2,
          m: "un minut",
          mm: relativeTimeWithPlural$2,
          h: "o oră",
          hh: relativeTimeWithPlural$2,
          d: "o zi",
          dd: relativeTimeWithPlural$2,
          w: "o săptămână",
          ww: relativeTimeWithPlural$2,
          M: "o lună",
          MM: relativeTimeWithPlural$2,
          y: "un an",
          yy: relativeTimeWithPlural$2
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      function plural$4(word, num) {
        var forms = word.split("_");
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
      }
      function relativeTimeWithPlural$3(number, withoutSuffix, key) {
        var format = {
          ss: withoutSuffix ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
          mm: withoutSuffix ? "минута_минуты_минут" : "минуту_минуты_минут",
          hh: "час_часа_часов",
          dd: "день_дня_дней",
          ww: "неделя_недели_недель",
          MM: "месяц_месяца_месяцев",
          yy: "год_года_лет"
        };
        if (key === "m") {
          return withoutSuffix ? "минута" : "минуту";
        } else {
          return number + " " + plural$4(format[key], +number);
        }
      }
      var monthsParse$b = [ /^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i ];
      hooks.defineLocale("ru", {
        months: {
          format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
          standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
        },
        monthsShort: {
          format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
          standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
        },
        weekdays: {
          standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
          format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
        },
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: monthsParse$b,
        longMonthsParse: monthsParse$b,
        shortMonthsParse: monthsParse$b,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY г.",
          LLL: "D MMMM YYYY г., H:mm",
          LLLL: "dddd, D MMMM YYYY г., H:mm"
        },
        calendar: {
          sameDay: "[Сегодня, в] LT",
          nextDay: "[Завтра, в] LT",
          lastDay: "[Вчера, в] LT",
          nextWeek: function(now) {
            if (now.week() !== this.week()) {
              switch (this.day()) {
               case 0:
                return "[В следующее] dddd, [в] LT";

               case 1:
               case 2:
               case 4:
                return "[В следующий] dddd, [в] LT";

               case 3:
               case 5:
               case 6:
                return "[В следующую] dddd, [в] LT";
              }
            } else {
              if (this.day() === 2) {
                return "[Во] dddd, [в] LT";
              } else {
                return "[В] dddd, [в] LT";
              }
            }
          },
          lastWeek: function(now) {
            if (now.week() !== this.week()) {
              switch (this.day()) {
               case 0:
                return "[В прошлое] dddd, [в] LT";

               case 1:
               case 2:
               case 4:
                return "[В прошлый] dddd, [в] LT";

               case 3:
               case 5:
               case 6:
                return "[В прошлую] dddd, [в] LT";
              }
            } else {
              if (this.day() === 2) {
                return "[Во] dddd, [в] LT";
              } else {
                return "[В] dddd, [в] LT";
              }
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "через %s",
          past: "%s назад",
          s: "несколько секунд",
          ss: relativeTimeWithPlural$3,
          m: relativeTimeWithPlural$3,
          mm: relativeTimeWithPlural$3,
          h: "час",
          hh: relativeTimeWithPlural$3,
          d: "день",
          dd: relativeTimeWithPlural$3,
          w: "неделя",
          ww: relativeTimeWithPlural$3,
          M: "месяц",
          MM: relativeTimeWithPlural$3,
          y: "год",
          yy: relativeTimeWithPlural$3
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function(input) {
          return /^(дня|вечера)$/.test(input);
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "ночи";
          } else if (hour < 12) {
            return "утра";
          } else if (hour < 17) {
            return "дня";
          } else {
            return "вечера";
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function(number, period) {
          switch (period) {
           case "M":
           case "d":
           case "DDD":
            return number + "-й";

           case "D":
            return number + "-го";

           case "w":
           case "W":
            return number + "-я";

           default:
            return number;
          }
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var months$9 = [ "جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر" ], days$1 = [ "آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر" ];
      hooks.defineLocale("sd", {
        months: months$9,
        monthsShort: months$9,
        weekdays: days$1,
        weekdaysShort: days$1,
        weekdaysMin: days$1,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function(input) {
          return "شام" === input;
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "صبح";
          }
          return "شام";
        },
        calendar: {
          sameDay: "[اڄ] LT",
          nextDay: "[سڀاڻي] LT",
          nextWeek: "dddd [اڳين هفتي تي] LT",
          lastDay: "[ڪالهه] LT",
          lastWeek: "[گزريل هفتي] dddd [تي] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s پوء",
          past: "%s اڳ",
          s: "چند سيڪنڊ",
          ss: "%d سيڪنڊ",
          m: "هڪ منٽ",
          mm: "%d منٽ",
          h: "هڪ ڪلاڪ",
          hh: "%d ڪلاڪ",
          d: "هڪ ڏينهن",
          dd: "%d ڏينهن",
          M: "هڪ مهينو",
          MM: "%d مهينا",
          y: "هڪ سال",
          yy: "%d سال"
        },
        preparse: function(string) {
          return string.replace(/،/g, ",");
        },
        postformat: function(string) {
          return string.replace(/,/g, "،");
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("se", {
        months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
        monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
        weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "MMMM D. [b.] YYYY",
          LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
          LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
        },
        calendar: {
          sameDay: "[otne ti] LT",
          nextDay: "[ihttin ti] LT",
          nextWeek: "dddd [ti] LT",
          lastDay: "[ikte ti] LT",
          lastWeek: "[ovddit] dddd [ti] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s geažes",
          past: "maŋit %s",
          s: "moadde sekunddat",
          ss: "%d sekunddat",
          m: "okta minuhta",
          mm: "%d minuhtat",
          h: "okta diimmu",
          hh: "%d diimmut",
          d: "okta beaivi",
          dd: "%d beaivvit",
          M: "okta mánnu",
          MM: "%d mánut",
          y: "okta jahki",
          yy: "%d jagit"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("si", {
        months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
        monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "a h:mm",
          LTS: "a h:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY MMMM D",
          LLL: "YYYY MMMM D, a h:mm",
          LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
        },
        calendar: {
          sameDay: "[අද] LT[ට]",
          nextDay: "[හෙට] LT[ට]",
          nextWeek: "dddd LT[ට]",
          lastDay: "[ඊයේ] LT[ට]",
          lastWeek: "[පසුගිය] dddd LT[ට]",
          sameElse: "L"
        },
        relativeTime: {
          future: "%sකින්",
          past: "%sකට පෙර",
          s: "තත්පර කිහිපය",
          ss: "තත්පර %d",
          m: "මිනිත්තුව",
          mm: "මිනිත්තු %d",
          h: "පැය",
          hh: "පැය %d",
          d: "දිනය",
          dd: "දින %d",
          M: "මාසය",
          MM: "මාස %d",
          y: "වසර",
          yy: "වසර %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal: function(number) {
          return number + " වැනි";
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function(input) {
          return input === "ප.ව." || input === "පස් වරු";
        },
        meridiem: function(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? "ප.ව." : "පස් වරු";
          } else {
            return isLower ? "පෙ.ව." : "පෙර වරු";
          }
        }
      });
      var months$a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), monthsShort$7 = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
      function plural$5(n) {
        return n > 1 && n < 5;
      }
      function translate$9(number, withoutSuffix, key, isFuture) {
        var result = number + " ";
        switch (key) {
         case "s":
          return withoutSuffix || isFuture ? "pár sekúnd" : "pár sekundami";

         case "ss":
          if (withoutSuffix || isFuture) {
            return result + (plural$5(number) ? "sekundy" : "sekúnd");
          } else {
            return result + "sekundami";
          }

         case "m":
          return withoutSuffix ? "minúta" : isFuture ? "minútu" : "minútou";

         case "mm":
          if (withoutSuffix || isFuture) {
            return result + (plural$5(number) ? "minúty" : "minút");
          } else {
            return result + "minútami";
          }

         case "h":
          return withoutSuffix ? "hodina" : isFuture ? "hodinu" : "hodinou";

         case "hh":
          if (withoutSuffix || isFuture) {
            return result + (plural$5(number) ? "hodiny" : "hodín");
          } else {
            return result + "hodinami";
          }

         case "d":
          return withoutSuffix || isFuture ? "deň" : "dňom";

         case "dd":
          if (withoutSuffix || isFuture) {
            return result + (plural$5(number) ? "dni" : "dní");
          } else {
            return result + "dňami";
          }

         case "M":
          return withoutSuffix || isFuture ? "mesiac" : "mesiacom";

         case "MM":
          if (withoutSuffix || isFuture) {
            return result + (plural$5(number) ? "mesiace" : "mesiacov");
          } else {
            return result + "mesiacmi";
          }

         case "y":
          return withoutSuffix || isFuture ? "rok" : "rokom";

         case "yy":
          if (withoutSuffix || isFuture) {
            return result + (plural$5(number) ? "roky" : "rokov");
          } else {
            return result + "rokmi";
          }
        }
      }
      hooks.defineLocale("sk", {
        months: months$a,
        monthsShort: monthsShort$7,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[dnes o] LT",
          nextDay: "[zajtra o] LT",
          nextWeek: function() {
            switch (this.day()) {
             case 0:
              return "[v nedeľu o] LT";

             case 1:
             case 2:
              return "[v] dddd [o] LT";

             case 3:
              return "[v stredu o] LT";

             case 4:
              return "[vo štvrtok o] LT";

             case 5:
              return "[v piatok o] LT";

             case 6:
              return "[v sobotu o] LT";
            }
          },
          lastDay: "[včera o] LT",
          lastWeek: function() {
            switch (this.day()) {
             case 0:
              return "[minulú nedeľu o] LT";

             case 1:
             case 2:
              return "[minulý] dddd [o] LT";

             case 3:
              return "[minulú stredu o] LT";

             case 4:
             case 5:
              return "[minulý] dddd [o] LT";

             case 6:
              return "[minulú sobotu o] LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "pred %s",
          s: translate$9,
          ss: translate$9,
          m: translate$9,
          mm: translate$9,
          h: translate$9,
          hh: translate$9,
          d: translate$9,
          dd: translate$9,
          M: translate$9,
          MM: translate$9,
          y: translate$9,
          yy: translate$9
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      function processRelativeTime$7(number, withoutSuffix, key, isFuture) {
        var result = number + " ";
        switch (key) {
         case "s":
          return withoutSuffix || isFuture ? "nekaj sekund" : "nekaj sekundami";

         case "ss":
          if (number === 1) {
            result += withoutSuffix ? "sekundo" : "sekundi";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "sekundi" : "sekundah";
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? "sekunde" : "sekundah";
          } else {
            result += "sekund";
          }
          return result;

         case "m":
          return withoutSuffix ? "ena minuta" : "eno minuto";

         case "mm":
          if (number === 1) {
            result += withoutSuffix ? "minuta" : "minuto";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "minuti" : "minutama";
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? "minute" : "minutami";
          } else {
            result += withoutSuffix || isFuture ? "minut" : "minutami";
          }
          return result;

         case "h":
          return withoutSuffix ? "ena ura" : "eno uro";

         case "hh":
          if (number === 1) {
            result += withoutSuffix ? "ura" : "uro";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "uri" : "urama";
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? "ure" : "urami";
          } else {
            result += withoutSuffix || isFuture ? "ur" : "urami";
          }
          return result;

         case "d":
          return withoutSuffix || isFuture ? "en dan" : "enim dnem";

         case "dd":
          if (number === 1) {
            result += withoutSuffix || isFuture ? "dan" : "dnem";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "dni" : "dnevoma";
          } else {
            result += withoutSuffix || isFuture ? "dni" : "dnevi";
          }
          return result;

         case "M":
          return withoutSuffix || isFuture ? "en mesec" : "enim mesecem";

         case "MM":
          if (number === 1) {
            result += withoutSuffix || isFuture ? "mesec" : "mesecem";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "meseca" : "mesecema";
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? "mesece" : "meseci";
          } else {
            result += withoutSuffix || isFuture ? "mesecev" : "meseci";
          }
          return result;

         case "y":
          return withoutSuffix || isFuture ? "eno leto" : "enim letom";

         case "yy":
          if (number === 1) {
            result += withoutSuffix || isFuture ? "leto" : "letom";
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? "leti" : "letoma";
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? "leta" : "leti";
          } else {
            result += withoutSuffix || isFuture ? "let" : "leti";
          }
          return result;
        }
      }
      hooks.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD. MM. YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[danes ob] LT",
          nextDay: "[jutri ob] LT",
          nextWeek: function() {
            switch (this.day()) {
             case 0:
              return "[v] [nedeljo] [ob] LT";

             case 3:
              return "[v] [sredo] [ob] LT";

             case 6:
              return "[v] [soboto] [ob] LT";

             case 1:
             case 2:
             case 4:
             case 5:
              return "[v] dddd [ob] LT";
            }
          },
          lastDay: "[včeraj ob] LT",
          lastWeek: function() {
            switch (this.day()) {
             case 0:
              return "[prejšnjo] [nedeljo] [ob] LT";

             case 3:
              return "[prejšnjo] [sredo] [ob] LT";

             case 6:
              return "[prejšnjo] [soboto] [ob] LT";

             case 1:
             case 2:
             case 4:
             case 5:
              return "[prejšnji] dddd [ob] LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "čez %s",
          past: "pred %s",
          s: processRelativeTime$7,
          ss: processRelativeTime$7,
          m: processRelativeTime$7,
          mm: processRelativeTime$7,
          h: processRelativeTime$7,
          hh: processRelativeTime$7,
          d: processRelativeTime$7,
          dd: processRelativeTime$7,
          M: processRelativeTime$7,
          MM: processRelativeTime$7,
          y: processRelativeTime$7,
          yy: processRelativeTime$7
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("sq", {
        months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
        weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        weekdaysParseExact: true,
        meridiemParse: /PD|MD/,
        isPM: function(input) {
          return input.charAt(0) === "M";
        },
        meridiem: function(hours, minutes, isLower) {
          return hours < 12 ? "PD" : "MD";
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Sot në] LT",
          nextDay: "[Nesër në] LT",
          nextWeek: "dddd [në] LT",
          lastDay: "[Dje në] LT",
          lastWeek: "dddd [e kaluar në] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "në %s",
          past: "%s më parë",
          s: "disa sekonda",
          ss: "%d sekonda",
          m: "një minutë",
          mm: "%d minuta",
          h: "një orë",
          hh: "%d orë",
          d: "një ditë",
          dd: "%d ditë",
          M: "një muaj",
          MM: "%d muaj",
          y: "një vit",
          yy: "%d vite"
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      var translator$1 = {
        words: {
          ss: [ "секунда", "секунде", "секунди" ],
          m: [ "један минут", "једне минуте" ],
          mm: [ "минут", "минуте", "минута" ],
          h: [ "један сат", "једног сата" ],
          hh: [ "сат", "сата", "сати" ],
          dd: [ "дан", "дана", "дана" ],
          MM: [ "месец", "месеца", "месеци" ],
          yy: [ "година", "године", "година" ]
        },
        correctGrammaticalCase: function(number, wordKey) {
          return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
        },
        translate: function(number, withoutSuffix, key) {
          var wordKey = translator$1.words[key];
          if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
          } else {
            return number + " " + translator$1.correctGrammaticalCase(number, wordKey);
          }
        }
      };
      hooks.defineLocale("sr-cyrl", {
        months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
        monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
        monthsParseExact: true,
        weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
        weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
        weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D. M. YYYY.",
          LL: "D. MMMM YYYY.",
          LLL: "D. MMMM YYYY. H:mm",
          LLLL: "dddd, D. MMMM YYYY. H:mm"
        },
        calendar: {
          sameDay: "[данас у] LT",
          nextDay: "[сутра у] LT",
          nextWeek: function() {
            switch (this.day()) {
             case 0:
              return "[у] [недељу] [у] LT";

             case 3:
              return "[у] [среду] [у] LT";

             case 6:
              return "[у] [суботу] [у] LT";

             case 1:
             case 2:
             case 4:
             case 5:
              return "[у] dddd [у] LT";
            }
          },
          lastDay: "[јуче у] LT",
          lastWeek: function() {
            var lastWeekDays = [ "[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT" ];
            return lastWeekDays[this.day()];
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "за %s",
          past: "пре %s",
          s: "неколико секунди",
          ss: translator$1.translate,
          m: translator$1.translate,
          mm: translator$1.translate,
          h: translator$1.translate,
          hh: translator$1.translate,
          d: "дан",
          dd: translator$1.translate,
          M: "месец",
          MM: translator$1.translate,
          y: "годину",
          yy: translator$1.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      });
      var translator$2 = {
        words: {
          ss: [ "sekunda", "sekunde", "sekundi" ],
          m: [ "jedan minut", "jedne minute" ],
          mm: [ "minut", "minute", "minuta" ],
          h: [ "jedan sat", "jednog sata" ],
          hh: [ "sat", "sata", "sati" ],
          dd: [ "dan", "dana", "dana" ],
          MM: [ "mesec", "meseca", "meseci" ],
          yy: [ "godina", "godine", "godina" ]
        },
        correctGrammaticalCase: function(number, wordKey) {
          return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
        },
        translate: function(number, withoutSuffix, key) {
          var wordKey = translator$2.words[key];
          if (key.length === 1) {
            return withoutSuffix ? wordKey[0] : wordKey[1];
          } else {
            return number + " " + translator$2.correctGrammaticalCase(number, wordKey);
          }
        }
      };
      hooks.defineLocale("sr", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: true,
        weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "D. M. YYYY.",
          LL: "D. MMMM YYYY.",
          LLL: "D. MMMM YYYY. H:mm",
          LLLL: "dddd, D. MMMM YYYY. H:mm"
        },
        calendar: {
          sameDay: "[danas u] LT",
          nextDay: "[sutra u] LT",
          nextWeek: function() {
            switch (this.day()) {
             case 0:
              return "[u] [nedelju] [u] LT";

             case 3:
              return "[u] [sredu] [u] LT";

             case 6:
              return "[u] [subotu] [u] LT";

             case 1:
             case 2:
             case 4:
             case 5:
              return "[u] dddd [u] LT";
            }
          },
          lastDay: "[juče u] LT",
          lastWeek: function() {
            var lastWeekDays = [ "[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT" ];
            return lastWeekDays[this.day()];
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "pre %s",
          s: "nekoliko sekundi",
          ss: translator$2.translate,
          m: translator$2.translate,
          mm: translator$2.translate,
          h: translator$2.translate,
          hh: translator$2.translate,
          d: "dan",
          dd: translator$2.translate,
          M: "mesec",
          MM: translator$2.translate,
          y: "godinu",
          yy: translator$2.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("ss", {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
        monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
        weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
        weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
        weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Namuhla nga] LT",
          nextDay: "[Kusasa nga] LT",
          nextWeek: "dddd [nga] LT",
          lastDay: "[Itolo nga] LT",
          lastWeek: "dddd [leliphelile] [nga] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "nga %s",
          past: "wenteka nga %s",
          s: "emizuzwana lomcane",
          ss: "%d mzuzwana",
          m: "umzuzu",
          mm: "%d emizuzu",
          h: "lihora",
          hh: "%d emahora",
          d: "lilanga",
          dd: "%d emalanga",
          M: "inyanga",
          MM: "%d tinyanga",
          y: "umnyaka",
          yy: "%d iminyaka"
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function(hours, minutes, isLower) {
          if (hours < 11) {
            return "ekuseni";
          } else if (hours < 15) {
            return "emini";
          } else if (hours < 19) {
            return "entsambama";
          } else {
            return "ebusuku";
          }
        },
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "ekuseni") {
            return hour;
          } else if (meridiem === "emini") {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === "entsambama" || meridiem === "ebusuku") {
            if (hour === 0) {
              return 0;
            }
            return hour + 12;
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY [kl.] HH:mm",
          LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Idag] LT",
          nextDay: "[Imorgon] LT",
          lastDay: "[Igår] LT",
          nextWeek: "[På] dddd LT",
          lastWeek: "[I] dddd[s] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "för %s sedan",
          s: "några sekunder",
          ss: "%d sekunder",
          m: "en minut",
          mm: "%d minuter",
          h: "en timme",
          hh: "%d timmar",
          d: "en dag",
          dd: "%d dagar",
          M: "en månad",
          MM: "%d månader",
          y: "ett år",
          yy: "%d år"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
        ordinal: function(number) {
          var b = number % 10, output = ~~(number % 100 / 10) === 1 ? ":e" : b === 1 ? ":a" : b === 2 ? ":a" : b === 3 ? ":e" : ":e";
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("sw", {
        months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "hh:mm A",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[leo saa] LT",
          nextDay: "[kesho saa] LT",
          nextWeek: "[wiki ijayo] dddd [saat] LT",
          lastDay: "[jana] LT",
          lastWeek: "[wiki iliyopita] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s baadaye",
          past: "tokea %s",
          s: "hivi punde",
          ss: "sekunde %d",
          m: "dakika moja",
          mm: "dakika %d",
          h: "saa limoja",
          hh: "masaa %d",
          d: "siku moja",
          dd: "siku %d",
          M: "mwezi mmoja",
          MM: "miezi %d",
          y: "mwaka mmoja",
          yy: "miaka %d"
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      var symbolMap$g = {
        1: "௧",
        2: "௨",
        3: "௩",
        4: "௪",
        5: "௫",
        6: "௬",
        7: "௭",
        8: "௮",
        9: "௯",
        0: "௦"
      }, numberMap$f = {
        "௧": "1",
        "௨": "2",
        "௩": "3",
        "௪": "4",
        "௫": "5",
        "௬": "6",
        "௭": "7",
        "௮": "8",
        "௯": "9",
        "௦": "0"
      };
      hooks.defineLocale("ta", {
        months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
        weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
        weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, HH:mm",
          LLLL: "dddd, D MMMM YYYY, HH:mm"
        },
        calendar: {
          sameDay: "[இன்று] LT",
          nextDay: "[நாளை] LT",
          nextWeek: "dddd, LT",
          lastDay: "[நேற்று] LT",
          lastWeek: "[கடந்த வாரம்] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s இல்",
          past: "%s முன்",
          s: "ஒரு சில விநாடிகள்",
          ss: "%d விநாடிகள்",
          m: "ஒரு நிமிடம்",
          mm: "%d நிமிடங்கள்",
          h: "ஒரு மணி நேரம்",
          hh: "%d மணி நேரம்",
          d: "ஒரு நாள்",
          dd: "%d நாட்கள்",
          M: "ஒரு மாதம்",
          MM: "%d மாதங்கள்",
          y: "ஒரு வருடம்",
          yy: "%d ஆண்டுகள்"
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal: function(number) {
          return number + "வது";
        },
        preparse: function(string) {
          return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, (function(match) {
            return numberMap$f[match];
          }));
        },
        postformat: function(string) {
          return string.replace(/\d/g, (function(match) {
            return symbolMap$g[match];
          }));
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function(hour, minute, isLower) {
          if (hour < 2) {
            return " யாமம்";
          } else if (hour < 6) {
            return " வைகறை";
          } else if (hour < 10) {
            return " காலை";
          } else if (hour < 14) {
            return " நண்பகல்";
          } else if (hour < 18) {
            return " எற்பாடு";
          } else if (hour < 22) {
            return " மாலை";
          } else {
            return " யாமம்";
          }
        },
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "யாமம்") {
            return hour < 2 ? hour : hour + 12;
          } else if (meridiem === "வைகறை" || meridiem === "காலை") {
            return hour;
          } else if (meridiem === "நண்பகல்") {
            return hour >= 10 ? hour : hour + 12;
          } else {
            return hour + 12;
          }
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      hooks.defineLocale("te", {
        months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
        monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
        monthsParseExact: true,
        weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY, A h:mm",
          LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
          sameDay: "[నేడు] LT",
          nextDay: "[రేపు] LT",
          nextWeek: "dddd, LT",
          lastDay: "[నిన్న] LT",
          lastWeek: "[గత] dddd, LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s లో",
          past: "%s క్రితం",
          s: "కొన్ని క్షణాలు",
          ss: "%d సెకన్లు",
          m: "ఒక నిమిషం",
          mm: "%d నిమిషాలు",
          h: "ఒక గంట",
          hh: "%d గంటలు",
          d: "ఒక రోజు",
          dd: "%d రోజులు",
          M: "ఒక నెల",
          MM: "%d నెలలు",
          y: "ఒక సంవత్సరం",
          yy: "%d సంవత్సరాలు"
        },
        dayOfMonthOrdinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "రాత్రి") {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === "ఉదయం") {
            return hour;
          } else if (meridiem === "మధ్యాహ్నం") {
            return hour >= 10 ? hour : hour + 12;
          } else if (meridiem === "సాయంత్రం") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "రాత్రి";
          } else if (hour < 10) {
            return "ఉదయం";
          } else if (hour < 17) {
            return "మధ్యాహ్నం";
          } else if (hour < 20) {
            return "సాయంత్రం";
          } else {
            return "రాత్రి";
          }
        },
        week: {
          dow: 0,
          doy: 6
        }
      });
      hooks.defineLocale("tet", {
        months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),
        weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
        weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Ohin iha] LT",
          nextDay: "[Aban iha] LT",
          nextWeek: "dddd [iha] LT",
          lastDay: "[Horiseik iha] LT",
          lastWeek: "dddd [semana kotuk] [iha] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "iha %s",
          past: "%s liuba",
          s: "segundu balun",
          ss: "segundu %d",
          m: "minutu ida",
          mm: "minutu %d",
          h: "oras ida",
          hh: "oras %d",
          d: "loron ida",
          dd: "loron %d",
          M: "fulan ida",
          MM: "fulan %d",
          y: "tinan ida",
          yy: "tinan %d"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(number) {
          var b = number % 10, output = ~~(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var suffixes$3 = {
        0: "-ум",
        1: "-ум",
        2: "-юм",
        3: "-юм",
        4: "-ум",
        5: "-ум",
        6: "-ум",
        7: "-ум",
        8: "-ум",
        9: "-ум",
        10: "-ум",
        12: "-ум",
        13: "-ум",
        20: "-ум",
        30: "-юм",
        40: "-ум",
        50: "-ум",
        60: "-ум",
        70: "-ум",
        80: "-ум",
        90: "-ум",
        100: "-ум"
      };
      hooks.defineLocale("tg", {
        months: {
          format: "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split("_"),
          standalone: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_")
        },
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),
        weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
        weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Имрӯз соати] LT",
          nextDay: "[Фардо соати] LT",
          lastDay: "[Дирӯз соати] LT",
          nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
          lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "баъди %s",
          past: "%s пеш",
          s: "якчанд сония",
          m: "як дақиқа",
          mm: "%d дақиқа",
          h: "як соат",
          hh: "%d соат",
          d: "як рӯз",
          dd: "%d рӯз",
          M: "як моҳ",
          MM: "%d моҳ",
          y: "як сол",
          yy: "%d сол"
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "шаб") {
            return hour < 4 ? hour : hour + 12;
          } else if (meridiem === "субҳ") {
            return hour;
          } else if (meridiem === "рӯз") {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === "бегоҳ") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "шаб";
          } else if (hour < 11) {
            return "субҳ";
          } else if (hour < 16) {
            return "рӯз";
          } else if (hour < 19) {
            return "бегоҳ";
          } else {
            return "шаб";
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function(number) {
          var a = number % 10, b = number >= 100 ? 100 : null;
          return number + (suffixes$3[number] || suffixes$3[a] || suffixes$3[b]);
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("th", {
        months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
        monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
        monthsParseExact: true,
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY เวลา H:mm",
          LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function(input) {
          return input === "หลังเที่ยง";
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "ก่อนเที่ยง";
          } else {
            return "หลังเที่ยง";
          }
        },
        calendar: {
          sameDay: "[วันนี้ เวลา] LT",
          nextDay: "[พรุ่งนี้ เวลา] LT",
          nextWeek: "dddd[หน้า เวลา] LT",
          lastDay: "[เมื่อวานนี้ เวลา] LT",
          lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "อีก %s",
          past: "%sที่แล้ว",
          s: "ไม่กี่วินาที",
          ss: "%d วินาที",
          m: "1 นาที",
          mm: "%d นาที",
          h: "1 ชั่วโมง",
          hh: "%d ชั่วโมง",
          d: "1 วัน",
          dd: "%d วัน",
          w: "1 สัปดาห์",
          ww: "%d สัปดาห์",
          M: "1 เดือน",
          MM: "%d เดือน",
          y: "1 ปี",
          yy: "%d ปี"
        }
      });
      var suffixes$4 = {
        1: "'inji",
        5: "'inji",
        8: "'inji",
        70: "'inji",
        80: "'inji",
        2: "'nji",
        7: "'nji",
        20: "'nji",
        50: "'nji",
        3: "'ünji",
        4: "'ünji",
        100: "'ünji",
        6: "'njy",
        9: "'unjy",
        10: "'unjy",
        30: "'unjy",
        60: "'ynjy",
        90: "'ynjy"
      };
      hooks.defineLocale("tk", {
        months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"),
        monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
        weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"),
        weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
        weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[bugün sagat] LT",
          nextDay: "[ertir sagat] LT",
          nextWeek: "[indiki] dddd [sagat] LT",
          lastDay: "[düýn] LT",
          lastWeek: "[geçen] dddd [sagat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s soň",
          past: "%s öň",
          s: "birnäçe sekunt",
          m: "bir minut",
          mm: "%d minut",
          h: "bir sagat",
          hh: "%d sagat",
          d: "bir gün",
          dd: "%d gün",
          M: "bir aý",
          MM: "%d aý",
          y: "bir ýyl",
          yy: "%d ýyl"
        },
        ordinal: function(number, period) {
          switch (period) {
           case "d":
           case "D":
           case "Do":
           case "DD":
            return number;

           default:
            if (number === 0) {
              return number + "'unjy";
            }
            var a = number % 10, b = number % 100 - a, c = number >= 100 ? 100 : null;
            return number + (suffixes$4[a] || suffixes$4[b] || suffixes$4[c]);
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("tl-ph", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
        weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "MM/D/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY HH:mm",
          LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
          sameDay: "LT [ngayong araw]",
          nextDay: "[Bukas ng] LT",
          nextWeek: "LT [sa susunod na] dddd",
          lastDay: "LT [kahapon]",
          lastWeek: "LT [noong nakaraang] dddd",
          sameElse: "L"
        },
        relativeTime: {
          future: "sa loob ng %s",
          past: "%s ang nakalipas",
          s: "ilang segundo",
          ss: "%d segundo",
          m: "isang minuto",
          mm: "%d minuto",
          h: "isang oras",
          hh: "%d oras",
          d: "isang araw",
          dd: "%d araw",
          M: "isang buwan",
          MM: "%d buwan",
          y: "isang taon",
          yy: "%d taon"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(number) {
          return number;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      var numbersNouns = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
      function translateFuture(output) {
        var time = output;
        time = output.indexOf("jaj") !== -1 ? time.slice(0, -3) + "leS" : output.indexOf("jar") !== -1 ? time.slice(0, -3) + "waQ" : output.indexOf("DIS") !== -1 ? time.slice(0, -3) + "nem" : time + " pIq";
        return time;
      }
      function translatePast(output) {
        var time = output;
        time = output.indexOf("jaj") !== -1 ? time.slice(0, -3) + "Hu’" : output.indexOf("jar") !== -1 ? time.slice(0, -3) + "wen" : output.indexOf("DIS") !== -1 ? time.slice(0, -3) + "ben" : time + " ret";
        return time;
      }
      function translate$a(number, withoutSuffix, string, isFuture) {
        var numberNoun = numberAsNoun(number);
        switch (string) {
         case "ss":
          return numberNoun + " lup";

         case "mm":
          return numberNoun + " tup";

         case "hh":
          return numberNoun + " rep";

         case "dd":
          return numberNoun + " jaj";

         case "MM":
          return numberNoun + " jar";

         case "yy":
          return numberNoun + " DIS";
        }
      }
      function numberAsNoun(number) {
        var hundred = Math.floor(number % 1e3 / 100), ten = Math.floor(number % 100 / 10), one = number % 10, word = "";
        if (hundred > 0) {
          word += numbersNouns[hundred] + "vatlh";
        }
        if (ten > 0) {
          word += (word !== "" ? " " : "") + numbersNouns[ten] + "maH";
        }
        if (one > 0) {
          word += (word !== "" ? " " : "") + numbersNouns[one];
        }
        return word === "" ? "pagh" : word;
      }
      hooks.defineLocale("tlh", {
        months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
        monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
        monthsParseExact: true,
        weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[DaHjaj] LT",
          nextDay: "[wa’leS] LT",
          nextWeek: "LLL",
          lastDay: "[wa’Hu’] LT",
          lastWeek: "LLL",
          sameElse: "L"
        },
        relativeTime: {
          future: translateFuture,
          past: translatePast,
          s: "puS lup",
          ss: translate$a,
          m: "wa’ tup",
          mm: translate$a,
          h: "wa’ rep",
          hh: translate$a,
          d: "wa’ jaj",
          dd: translate$a,
          M: "wa’ jar",
          MM: translate$a,
          y: "wa’ DIS",
          yy: translate$a
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      var suffixes$5 = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı"
      };
      hooks.defineLocale("tr", {
        months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
        meridiem: function(hours, minutes, isLower) {
          if (hours < 12) {
            return isLower ? "öö" : "ÖÖ";
          } else {
            return isLower ? "ös" : "ÖS";
          }
        },
        meridiemParse: /öö|ÖÖ|ös|ÖS/,
        isPM: function(input) {
          return input === "ös" || input === "ÖS";
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[bugün saat] LT",
          nextDay: "[yarın saat] LT",
          nextWeek: "[gelecek] dddd [saat] LT",
          lastDay: "[dün] LT",
          lastWeek: "[geçen] dddd [saat] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s sonra",
          past: "%s önce",
          s: "birkaç saniye",
          ss: "%d saniye",
          m: "bir dakika",
          mm: "%d dakika",
          h: "bir saat",
          hh: "%d saat",
          d: "bir gün",
          dd: "%d gün",
          w: "bir hafta",
          ww: "%d hafta",
          M: "bir ay",
          MM: "%d ay",
          y: "bir yıl",
          yy: "%d yıl"
        },
        ordinal: function(number, period) {
          switch (period) {
           case "d":
           case "D":
           case "Do":
           case "DD":
            return number;

           default:
            if (number === 0) {
              return number + "'ıncı";
            }
            var a = number % 10, b = number % 100 - a, c = number >= 100 ? 100 : null;
            return number + (suffixes$5[a] || suffixes$5[b] || suffixes$5[c]);
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("tzl", {
        months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM [dallas] YYYY",
          LLL: "D. MMMM [dallas] YYYY HH.mm",
          LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function(input) {
          return "d'o" === input.toLowerCase();
        },
        meridiem: function(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? "d'o" : "D'O";
          } else {
            return isLower ? "d'a" : "D'A";
          }
        },
        calendar: {
          sameDay: "[oxhi à] LT",
          nextDay: "[demà à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[ieiri à] LT",
          lastWeek: "[sür el] dddd [lasteu à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "osprei %s",
          past: "ja%s",
          s: processRelativeTime$8,
          ss: processRelativeTime$8,
          m: processRelativeTime$8,
          mm: processRelativeTime$8,
          h: processRelativeTime$8,
          hh: processRelativeTime$8,
          d: processRelativeTime$8,
          dd: processRelativeTime$8,
          M: processRelativeTime$8,
          MM: processRelativeTime$8,
          y: processRelativeTime$8,
          yy: processRelativeTime$8
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      function processRelativeTime$8(number, withoutSuffix, key, isFuture) {
        var format = {
          s: [ "viensas secunds", "'iensas secunds" ],
          ss: [ number + " secunds", "" + number + " secunds" ],
          m: [ "'n míut", "'iens míut" ],
          mm: [ number + " míuts", "" + number + " míuts" ],
          h: [ "'n þora", "'iensa þora" ],
          hh: [ number + " þoras", "" + number + " þoras" ],
          d: [ "'n ziua", "'iensa ziua" ],
          dd: [ number + " ziuas", "" + number + " ziuas" ],
          M: [ "'n mes", "'iens mes" ],
          MM: [ number + " mesen", "" + number + " mesen" ],
          y: [ "'n ar", "'iens ar" ],
          yy: [ number + " ars", "" + number + " ars" ]
        };
        return isFuture ? format[key][0] : withoutSuffix ? format[key][0] : format[key][1];
      }
      hooks.defineLocale("tzm-latn", {
        months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[asdkh g] LT",
          nextDay: "[aska g] LT",
          nextWeek: "dddd [g] LT",
          lastDay: "[assant g] LT",
          lastWeek: "dddd [g] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dadkh s yan %s",
          past: "yan %s",
          s: "imik",
          ss: "%d imik",
          m: "minuḍ",
          mm: "%d minuḍ",
          h: "saɛa",
          hh: "%d tassaɛin",
          d: "ass",
          dd: "%d ossan",
          M: "ayowr",
          MM: "%d iyyirn",
          y: "asgas",
          yy: "%d isgasn"
        },
        week: {
          dow: 6,
          doy: 12
        }
      });
      hooks.defineLocale("tzm", {
        months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
          nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
          nextWeek: "dddd [ⴴ] LT",
          lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
          lastWeek: "dddd [ⴴ] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
          past: "ⵢⴰⵏ %s",
          s: "ⵉⵎⵉⴽ",
          ss: "%d ⵉⵎⵉⴽ",
          m: "ⵎⵉⵏⵓⴺ",
          mm: "%d ⵎⵉⵏⵓⴺ",
          h: "ⵙⴰⵄⴰ",
          hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
          d: "ⴰⵙⵙ",
          dd: "%d oⵙⵙⴰⵏ",
          M: "ⴰⵢoⵓⵔ",
          MM: "%d ⵉⵢⵢⵉⵔⵏ",
          y: "ⴰⵙⴳⴰⵙ",
          yy: "%d ⵉⵙⴳⴰⵙⵏ"
        },
        week: {
          dow: 6,
          doy: 12
        }
      });
      hooks.defineLocale("ug-cn", {
        months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
        monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),
        weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),
        weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
          LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
          LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "يېرىم كېچە" || meridiem === "سەھەر" || meridiem === "چۈشتىن بۇرۇن") {
            return hour;
          } else if (meridiem === "چۈشتىن كېيىن" || meridiem === "كەچ") {
            return hour + 12;
          } else {
            return hour >= 11 ? hour : hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          var hm = hour * 100 + minute;
          if (hm < 600) {
            return "يېرىم كېچە";
          } else if (hm < 900) {
            return "سەھەر";
          } else if (hm < 1130) {
            return "چۈشتىن بۇرۇن";
          } else if (hm < 1230) {
            return "چۈش";
          } else if (hm < 1800) {
            return "چۈشتىن كېيىن";
          } else {
            return "كەچ";
          }
        },
        calendar: {
          sameDay: "[بۈگۈن سائەت] LT",
          nextDay: "[ئەتە سائەت] LT",
          nextWeek: "[كېلەركى] dddd [سائەت] LT",
          lastDay: "[تۆنۈگۈن] LT",
          lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s كېيىن",
          past: "%s بۇرۇن",
          s: "نەچچە سېكونت",
          ss: "%d سېكونت",
          m: "بىر مىنۇت",
          mm: "%d مىنۇت",
          h: "بىر سائەت",
          hh: "%d سائەت",
          d: "بىر كۈن",
          dd: "%d كۈن",
          M: "بىر ئاي",
          MM: "%d ئاي",
          y: "بىر يىل",
          yy: "%d يىل"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function(number, period) {
          switch (period) {
           case "d":
           case "D":
           case "DDD":
            return number + "-كۈنى";

           case "w":
           case "W":
            return number + "-ھەپتە";

           default:
            return number;
          }
        },
        preparse: function(string) {
          return string.replace(/،/g, ",");
        },
        postformat: function(string) {
          return string.replace(/,/g, "،");
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      function plural$6(word, num) {
        var forms = word.split("_");
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
      }
      function relativeTimeWithPlural$4(number, withoutSuffix, key) {
        var format = {
          ss: withoutSuffix ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
          mm: withoutSuffix ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
          hh: withoutSuffix ? "година_години_годин" : "годину_години_годин",
          dd: "день_дні_днів",
          MM: "місяць_місяці_місяців",
          yy: "рік_роки_років"
        };
        if (key === "m") {
          return withoutSuffix ? "хвилина" : "хвилину";
        } else if (key === "h") {
          return withoutSuffix ? "година" : "годину";
        } else {
          return number + " " + plural$6(format[key], +number);
        }
      }
      function weekdaysCaseReplace(m, format) {
        var weekdays = {
          nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
          accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
          genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
        }, nounCase;
        if (m === true) {
          return weekdays["nominative"].slice(1, 7).concat(weekdays["nominative"].slice(0, 1));
        }
        if (!m) {
          return weekdays["nominative"];
        }
        nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? "genitive" : "nominative";
        return weekdays[nounCase][m.day()];
      }
      function processHoursFunction(str) {
        return function() {
          return str + "о" + (this.hours() === 11 ? "б" : "") + "] LT";
        };
      }
      hooks.defineLocale("uk", {
        months: {
          format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
          standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
        },
        monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: weekdaysCaseReplace,
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY р.",
          LLL: "D MMMM YYYY р., HH:mm",
          LLLL: "dddd, D MMMM YYYY р., HH:mm"
        },
        calendar: {
          sameDay: processHoursFunction("[Сьогодні "),
          nextDay: processHoursFunction("[Завтра "),
          lastDay: processHoursFunction("[Вчора "),
          nextWeek: processHoursFunction("[У] dddd ["),
          lastWeek: function() {
            switch (this.day()) {
             case 0:
             case 3:
             case 5:
             case 6:
              return processHoursFunction("[Минулої] dddd [").call(this);

             case 1:
             case 2:
             case 4:
              return processHoursFunction("[Минулого] dddd [").call(this);
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "за %s",
          past: "%s тому",
          s: "декілька секунд",
          ss: relativeTimeWithPlural$4,
          m: relativeTimeWithPlural$4,
          mm: relativeTimeWithPlural$4,
          h: "годину",
          hh: relativeTimeWithPlural$4,
          d: "день",
          dd: relativeTimeWithPlural$4,
          M: "місяць",
          MM: relativeTimeWithPlural$4,
          y: "рік",
          yy: relativeTimeWithPlural$4
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function(input) {
          return /^(дня|вечора)$/.test(input);
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 4) {
            return "ночі";
          } else if (hour < 12) {
            return "ранку";
          } else if (hour < 17) {
            return "дня";
          } else {
            return "вечора";
          }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function(number, period) {
          switch (period) {
           case "M":
           case "d":
           case "DDD":
           case "w":
           case "W":
            return number + "-й";

           case "D":
            return number + "-го";

           default:
            return number;
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      var months$b = [ "جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر" ], days$2 = [ "اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ" ];
      hooks.defineLocale("ur", {
        months: months$b,
        monthsShort: months$b,
        weekdays: days$2,
        weekdaysShort: days$2,
        weekdaysMin: days$2,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd، D MMMM YYYY HH:mm"
        },
        meridiemParse: /صبح|شام/,
        isPM: function(input) {
          return "شام" === input;
        },
        meridiem: function(hour, minute, isLower) {
          if (hour < 12) {
            return "صبح";
          }
          return "شام";
        },
        calendar: {
          sameDay: "[آج بوقت] LT",
          nextDay: "[کل بوقت] LT",
          nextWeek: "dddd [بوقت] LT",
          lastDay: "[گذشتہ روز بوقت] LT",
          lastWeek: "[گذشتہ] dddd [بوقت] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s بعد",
          past: "%s قبل",
          s: "چند سیکنڈ",
          ss: "%d سیکنڈ",
          m: "ایک منٹ",
          mm: "%d منٹ",
          h: "ایک گھنٹہ",
          hh: "%d گھنٹے",
          d: "ایک دن",
          dd: "%d دن",
          M: "ایک ماہ",
          MM: "%d ماہ",
          y: "ایک سال",
          yy: "%d سال"
        },
        preparse: function(string) {
          return string.replace(/،/g, ",");
        },
        postformat: function(string) {
          return string.replace(/,/g, "،");
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("uz-latn", {
        months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
        monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
        weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
        weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
        weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
          sameDay: "[Bugun soat] LT [da]",
          nextDay: "[Ertaga] LT [da]",
          nextWeek: "dddd [kuni soat] LT [da]",
          lastDay: "[Kecha soat] LT [da]",
          lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
          sameElse: "L"
        },
        relativeTime: {
          future: "Yaqin %s ichida",
          past: "Bir necha %s oldin",
          s: "soniya",
          ss: "%d soniya",
          m: "bir daqiqa",
          mm: "%d daqiqa",
          h: "bir soat",
          hh: "%d soat",
          d: "bir kun",
          dd: "%d kun",
          M: "bir oy",
          MM: "%d oy",
          y: "bir yil",
          yy: "%d yil"
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("uz", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
          sameDay: "[Бугун соат] LT [да]",
          nextDay: "[Эртага] LT [да]",
          nextWeek: "dddd [куни соат] LT [да]",
          lastDay: "[Кеча соат] LT [да]",
          lastWeek: "[Утган] dddd [куни соат] LT [да]",
          sameElse: "L"
        },
        relativeTime: {
          future: "Якин %s ичида",
          past: "Бир неча %s олдин",
          s: "фурсат",
          ss: "%d фурсат",
          m: "бир дакика",
          mm: "%d дакика",
          h: "бир соат",
          hh: "%d соат",
          d: "бир кун",
          dd: "%d кун",
          M: "бир ой",
          MM: "%d ой",
          y: "бир йил",
          yy: "%d йил"
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      hooks.defineLocale("vi", {
        months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
        monthsShort: "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split("_"),
        monthsParseExact: true,
        weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: true,
        meridiemParse: /sa|ch/i,
        isPM: function(input) {
          return /^ch$/i.test(input);
        },
        meridiem: function(hours, minutes, isLower) {
          if (hours < 12) {
            return isLower ? "sa" : "SA";
          } else {
            return isLower ? "ch" : "CH";
          }
        },
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM [năm] YYYY",
          LLL: "D MMMM [năm] YYYY HH:mm",
          LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
          l: "DD/M/YYYY",
          ll: "D MMM YYYY",
          lll: "D MMM YYYY HH:mm",
          llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Hôm nay lúc] LT",
          nextDay: "[Ngày mai lúc] LT",
          nextWeek: "dddd [tuần tới lúc] LT",
          lastDay: "[Hôm qua lúc] LT",
          lastWeek: "dddd [tuần trước lúc] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s tới",
          past: "%s trước",
          s: "vài giây",
          ss: "%d giây",
          m: "một phút",
          mm: "%d phút",
          h: "một giờ",
          hh: "%d giờ",
          d: "một ngày",
          dd: "%d ngày",
          w: "một tuần",
          ww: "%d tuần",
          M: "một tháng",
          MM: "%d tháng",
          y: "một năm",
          yy: "%d năm"
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal: function(number) {
          return number;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("x-pseudo", {
        months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
        monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
        monthsParseExact: true,
        weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
        weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
        weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[T~ódá~ý át] LT",
          nextDay: "[T~ómó~rró~w át] LT",
          nextWeek: "dddd [át] LT",
          lastDay: "[Ý~ést~érdá~ý át] LT",
          lastWeek: "[L~ást] dddd [át] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "í~ñ %s",
          past: "%s á~gó",
          s: "á ~féw ~sécó~ñds",
          ss: "%d s~écóñ~ds",
          m: "á ~míñ~úté",
          mm: "%d m~íñú~tés",
          h: "á~ñ hó~úr",
          hh: "%d h~óúrs",
          d: "á ~dáý",
          dd: "%d d~áýs",
          M: "á ~móñ~th",
          MM: "%d m~óñt~hs",
          y: "á ~ýéár",
          yy: "%d ý~éárs"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
          var b = number % 10, output = ~~(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("yo", {
        months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
        monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
        weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
        weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
        weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
          sameDay: "[Ònì ni] LT",
          nextDay: "[Ọ̀la ni] LT",
          nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
          lastDay: "[Àna ni] LT",
          lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "ní %s",
          past: "%s kọjá",
          s: "ìsẹjú aayá die",
          ss: "aayá %d",
          m: "ìsẹjú kan",
          mm: "ìsẹjú %d",
          h: "wákati kan",
          hh: "wákati %d",
          d: "ọjọ́ kan",
          dd: "ọjọ́ %d",
          M: "osù kan",
          MM: "osù %d",
          y: "ọdún kan",
          yy: "ọdún %d"
        },
        dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: "ọjọ́ %d",
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "凌晨" || meridiem === "早上" || meridiem === "上午") {
            return hour;
          } else if (meridiem === "下午" || meridiem === "晚上") {
            return hour + 12;
          } else {
            return hour >= 11 ? hour : hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          var hm = hour * 100 + minute;
          if (hm < 600) {
            return "凌晨";
          } else if (hm < 900) {
            return "早上";
          } else if (hm < 1130) {
            return "上午";
          } else if (hm < 1230) {
            return "中午";
          } else if (hm < 1800) {
            return "下午";
          } else {
            return "晚上";
          }
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: function(now) {
            if (now.week() !== this.week()) {
              return "[下]dddLT";
            } else {
              return "[本]dddLT";
            }
          },
          lastDay: "[昨天]LT",
          lastWeek: function(now) {
            if (this.week() !== now.week()) {
              return "[上]dddLT";
            } else {
              return "[本]dddLT";
            }
          },
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function(number, period) {
          switch (period) {
           case "d":
           case "D":
           case "DDD":
            return number + "日";

           case "M":
            return number + "月";

           case "w":
           case "W":
            return number + "周";

           default:
            return number;
          }
        },
        relativeTime: {
          future: "%s后",
          past: "%s前",
          s: "几秒",
          ss: "%d 秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          w: "1 周",
          ww: "%d 周",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年"
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      hooks.defineLocale("zh-hk", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "凌晨" || meridiem === "早上" || meridiem === "上午") {
            return hour;
          } else if (meridiem === "中午") {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === "下午" || meridiem === "晚上") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          var hm = hour * 100 + minute;
          if (hm < 600) {
            return "凌晨";
          } else if (hm < 900) {
            return "早上";
          } else if (hm < 1200) {
            return "上午";
          } else if (hm === 1200) {
            return "中午";
          } else if (hm < 1800) {
            return "下午";
          } else {
            return "晚上";
          }
        },
        calendar: {
          sameDay: "[今天]LT",
          nextDay: "[明天]LT",
          nextWeek: "[下]ddddLT",
          lastDay: "[昨天]LT",
          lastWeek: "[上]ddddLT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(number, period) {
          switch (period) {
           case "d":
           case "D":
           case "DDD":
            return number + "日";

           case "M":
            return number + "月";

           case "w":
           case "W":
            return number + "週";

           default:
            return number;
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年"
        }
      });
      hooks.defineLocale("zh-mo", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "D/M/YYYY",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "凌晨" || meridiem === "早上" || meridiem === "上午") {
            return hour;
          } else if (meridiem === "中午") {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === "下午" || meridiem === "晚上") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          var hm = hour * 100 + minute;
          if (hm < 600) {
            return "凌晨";
          } else if (hm < 900) {
            return "早上";
          } else if (hm < 1130) {
            return "上午";
          } else if (hm < 1230) {
            return "中午";
          } else if (hm < 1800) {
            return "下午";
          } else {
            return "晚上";
          }
        },
        calendar: {
          sameDay: "[今天] LT",
          nextDay: "[明天] LT",
          nextWeek: "[下]dddd LT",
          lastDay: "[昨天] LT",
          lastWeek: "[上]dddd LT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(number, period) {
          switch (period) {
           case "d":
           case "D":
           case "DDD":
            return number + "日";

           case "M":
            return number + "月";

           case "w":
           case "W":
            return number + "週";

           default:
            return number;
          }
        },
        relativeTime: {
          future: "%s內",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年"
        }
      });
      hooks.defineLocale("zh-tw", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日 HH:mm",
          LLLL: "YYYY年M月D日dddd HH:mm",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(hour, meridiem) {
          if (hour === 12) {
            hour = 0;
          }
          if (meridiem === "凌晨" || meridiem === "早上" || meridiem === "上午") {
            return hour;
          } else if (meridiem === "中午") {
            return hour >= 11 ? hour : hour + 12;
          } else if (meridiem === "下午" || meridiem === "晚上") {
            return hour + 12;
          }
        },
        meridiem: function(hour, minute, isLower) {
          var hm = hour * 100 + minute;
          if (hm < 600) {
            return "凌晨";
          } else if (hm < 900) {
            return "早上";
          } else if (hm < 1130) {
            return "上午";
          } else if (hm < 1230) {
            return "中午";
          } else if (hm < 1800) {
            return "下午";
          } else {
            return "晚上";
          }
        },
        calendar: {
          sameDay: "[今天] LT",
          nextDay: "[明天] LT",
          nextWeek: "[下]dddd LT",
          lastDay: "[昨天] LT",
          lastWeek: "[上]dddd LT",
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(number, period) {
          switch (period) {
           case "d":
           case "D":
           case "DDD":
            return number + "日";

           case "M":
            return number + "月";

           case "w":
           case "W":
            return number + "週";

           default:
            return number;
          }
        },
        relativeTime: {
          future: "%s後",
          past: "%s前",
          s: "幾秒",
          ss: "%d 秒",
          m: "1 分鐘",
          mm: "%d 分鐘",
          h: "1 小時",
          hh: "%d 小時",
          d: "1 天",
          dd: "%d 天",
          M: "1 個月",
          MM: "%d 個月",
          y: "1 年",
          yy: "%d 年"
        }
      });
      hooks.locale("en");
      return hooks;
    }));
  })(momentWithLocales);
  var momentBusinessDays = {
    exports: {}
  };
  var moment = {
    exports: {}
  };
  (function(module, exports) {
    (function(global, factory) {
      module.exports = factory();
    })(commonjsGlobal, (function() {
      var hookCallback;
      function hooks() {
        return hookCallback.apply(null, arguments);
      }
      function setHookCallback(callback) {
        hookCallback = callback;
      }
      function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
      }
      function isObject(input) {
        return input != null && Object.prototype.toString.call(input) === "[object Object]";
      }
      function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
      }
      function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
          return Object.getOwnPropertyNames(obj).length === 0;
        } else {
          var k;
          for (k in obj) {
            if (hasOwnProp(obj, k)) {
              return false;
            }
          }
          return true;
        }
      }
      function isUndefined(input) {
        return input === void 0;
      }
      function isNumber(input) {
        return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
      }
      function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
      }
      function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
          res.push(fn(arr[i], i));
        }
        return res;
      }
      function extend(a, b) {
        for (var i in b) {
          if (hasOwnProp(b, i)) {
            a[i] = b[i];
          }
        }
        if (hasOwnProp(b, "toString")) {
          a.toString = b.toString;
        }
        if (hasOwnProp(b, "valueOf")) {
          a.valueOf = b.valueOf;
        }
        return a;
      }
      function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
      }
      function defaultParsingFlags() {
        return {
          empty: false,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: false,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: false,
          userInvalidated: false,
          iso: false,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: false,
          weekdayMismatch: false
        };
      }
      function getParsingFlags(m) {
        if (m._pf == null) {
          m._pf = defaultParsingFlags();
        }
        return m._pf;
      }
      var some;
      if (Array.prototype.some) {
        some = Array.prototype.some;
      } else {
        some = function(fun) {
          var t = Object(this), len = t.length >>> 0, i;
          for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
              return true;
            }
          }
          return false;
        };
      }
      function isValid(m) {
        if (m._isValid == null) {
          var flags = getParsingFlags(m), parsedParts = some.call(flags.parsedDateParts, (function(i) {
            return i != null;
          })), isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
          if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
          }
          if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
          } else {
            return isNowValid;
          }
        }
        return m._isValid;
      }
      function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
          extend(getParsingFlags(m), flags);
        } else {
          getParsingFlags(m).userInvalidated = true;
        }
        return m;
      }
      var momentProperties = hooks.momentProperties = [], updateInProgress = false;
      function copyConfig(to, from) {
        var i, prop, val;
        if (!isUndefined(from._isAMomentObject)) {
          to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
          to._i = from._i;
        }
        if (!isUndefined(from._f)) {
          to._f = from._f;
        }
        if (!isUndefined(from._l)) {
          to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
          to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
          to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
          to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
          to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
          to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
          to._locale = from._locale;
        }
        if (momentProperties.length > 0) {
          for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
              to[prop] = val;
            }
          }
        }
        return to;
      }
      function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
          this._d = new Date(NaN);
        }
        if (updateInProgress === false) {
          updateInProgress = true;
          hooks.updateOffset(this);
          updateInProgress = false;
        }
      }
      function isMoment(obj) {
        return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
      }
      function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
          console.warn("Deprecation warning: " + msg);
        }
      }
      function deprecate(msg, fn) {
        var firstTime = true;
        return extend((function() {
          if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
          }
          if (firstTime) {
            var args = [], arg, i, key;
            for (i = 0; i < arguments.length; i++) {
              arg = "";
              if (typeof arguments[i] === "object") {
                arg += "\n[" + i + "] ";
                for (key in arguments[0]) {
                  if (hasOwnProp(arguments[0], key)) {
                    arg += key + ": " + arguments[0][key] + ", ";
                  }
                }
                arg = arg.slice(0, -2);
              } else {
                arg = arguments[i];
              }
              args.push(arg);
            }
            warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + (new Error).stack);
            firstTime = false;
          }
          return fn.apply(this, arguments);
        }), fn);
      }
      var deprecations = {};
      function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
          warn(msg);
          deprecations[name] = true;
        }
      }
      hooks.suppressDeprecationWarnings = false;
      hooks.deprecationHandler = null;
      function isFunction(input) {
        return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
      }
      function set(config) {
        var prop, i;
        for (i in config) {
          if (hasOwnProp(config, i)) {
            prop = config[i];
            if (isFunction(prop)) {
              this[i] = prop;
            } else {
              this["_" + i] = prop;
            }
          }
        }
        this._config = config;
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
      }
      function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
          if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
            } else {
              delete res[prop];
            }
          }
        }
        for (prop in parentConfig) {
          if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
            res[prop] = extend({}, res[prop]);
          }
        }
        return res;
      }
      function Locale(config) {
        if (config != null) {
          this.set(config);
        }
      }
      var keys;
      if (Object.keys) {
        keys = Object.keys;
      } else {
        keys = function(obj) {
          var i, res = [];
          for (i in obj) {
            if (hasOwnProp(obj, i)) {
              res.push(i);
            }
          }
          return res;
        };
      }
      var defaultCalendar = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };
      function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(mom, now) : output;
      }
      function zeroFill(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign = number >= 0;
        return (sign ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
      }
      var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
      function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === "string") {
          func = function() {
            return this[callback]();
          };
        }
        if (token) {
          formatTokenFunctions[token] = func;
        }
        if (padded) {
          formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
          };
        }
        if (ordinal) {
          formatTokenFunctions[ordinal] = function() {
            return this.localeData().ordinal(func.apply(this, arguments), token);
          };
        }
      }
      function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
          return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
      }
      function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;
        for (i = 0, length = array.length; i < length; i++) {
          if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
          } else {
            array[i] = removeFormattingTokens(array[i]);
          }
        }
        return function(mom) {
          var output = "", i;
          for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
          }
          return output;
        };
      }
      function formatMoment(m, format) {
        if (!m.isValid()) {
          return m.localeData().invalidDate();
        }
        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
        return formatFunctions[format](m);
      }
      function expandFormat(format, locale) {
        var i = 5;
        function replaceLongDateFormatTokens(input) {
          return locale.longDateFormat(input) || input;
        }
        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
          format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
          localFormattingTokens.lastIndex = 0;
          i -= 1;
        }
        return format;
      }
      var defaultLongDateFormat = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      function longDateFormat(key) {
        var format = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
          return format;
        }
        this._longDateFormat[key] = formatUpper.match(formattingTokens).map((function(tok) {
          if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
            return tok.slice(1);
          }
          return tok;
        })).join("");
        return this._longDateFormat[key];
      }
      var defaultInvalidDate = "Invalid date";
      function invalidDate() {
        return this._invalidDate;
      }
      var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
      function ordinal(number) {
        return this._ordinal.replace("%d", number);
      }
      var defaultRelativeTime = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
      }
      function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? "future" : "past"];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
      }
      var aliases = {};
      function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
      }
      function normalizeUnits(units) {
        return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : undefined;
      }
      function normalizeObjectUnits(inputObject) {
        var normalizedInput = {}, normalizedProp, prop;
        for (prop in inputObject) {
          if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
            }
          }
        }
        return normalizedInput;
      }
      var priorities = {};
      function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
      }
      function getPrioritizedUnits(unitsObj) {
        var units = [], u;
        for (u in unitsObj) {
          if (hasOwnProp(unitsObj, u)) {
            units.push({
              unit: u,
              priority: priorities[u]
            });
          }
        }
        units.sort((function(a, b) {
          return a.priority - b.priority;
        }));
        return units;
      }
      function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
      function absFloor(number) {
        if (number < 0) {
          return Math.ceil(number) || 0;
        } else {
          return Math.floor(number);
        }
      }
      function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion, value = 0;
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
          value = absFloor(coercedNumber);
        }
        return value;
      }
      function makeGetSet(unit, keepTime) {
        return function(value) {
          if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
          } else {
            return get(this, unit);
          }
        };
      }
      function get(mom, unit) {
        return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
      }
      function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
          if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
            value = toInt(value);
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth(value, mom.month()));
          } else {
            mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
          }
        }
      }
      function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
          return this[units]();
        }
        return this;
      }
      function stringSet(units, value) {
        if (typeof units === "object") {
          units = normalizeObjectUnits(units);
          var prioritized = getPrioritizedUnits(units), i;
          for (i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
          }
        } else {
          units = normalizeUnits(units);
          if (isFunction(this[units])) {
            return this[units](value);
          }
        }
        return this;
      }
      var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
      regexes = {};
      function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
          return isStrict && strictRegex ? strictRegex : regex;
        };
      }
      function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
          return new RegExp(unescapeFormat(token));
        }
        return regexes[token](config._strict, config._locale);
      }
      function unescapeFormat(s) {
        return regexEscape(s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(matched, p1, p2, p3, p4) {
          return p1 || p2 || p3 || p4;
        })));
      }
      function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      var tokens = {};
      function addParseToken(token, callback) {
        var i, func = callback;
        if (typeof token === "string") {
          token = [ token ];
        }
        if (isNumber(callback)) {
          func = function(input, array) {
            array[callback] = toInt(input);
          };
        }
        for (i = 0; i < token.length; i++) {
          tokens[token[i]] = func;
        }
      }
      function addWeekParseToken(token, callback) {
        addParseToken(token, (function(input, array, config, token) {
          config._w = config._w || {};
          callback(input, config._w, config, token);
        }));
      }
      function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
          tokens[token](input, config._a, config, token);
        }
      }
      var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
      function mod(n, x) {
        return (n % x + x) % x;
      }
      var indexOf;
      if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
      } else {
        indexOf = function(o) {
          var i;
          for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
              return i;
            }
          }
          return -1;
        };
      }
      function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
          return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
      }
      addFormatToken("M", [ "MM", 2 ], "Mo", (function() {
        return this.month() + 1;
      }));
      addFormatToken("MMM", 0, 0, (function(format) {
        return this.localeData().monthsShort(this, format);
      }));
      addFormatToken("MMMM", 0, 0, (function(format) {
        return this.localeData().months(this, format);
      }));
      addUnitAlias("month", "M");
      addUnitPriority("month", 8);
      addRegexToken("M", match1to2);
      addRegexToken("MM", match1to2, match2);
      addRegexToken("MMM", (function(isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
      }));
      addRegexToken("MMMM", (function(isStrict, locale) {
        return locale.monthsRegex(isStrict);
      }));
      addParseToken([ "M", "MM" ], (function(input, array) {
        array[MONTH] = toInt(input) - 1;
      }));
      addParseToken([ "MMM", "MMMM" ], (function(input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = input;
        }
      }));
      var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
      function localeMonths(m, format) {
        if (!m) {
          return isArray(this._months) ? this._months : this._months["standalone"];
        }
        return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? "format" : "standalone"][m.month()];
      }
      function localeMonthsShort(m, format) {
        if (!m) {
          return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? "format" : "standalone"][m.month()];
      }
      function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
          for (i = 0; i < 12; ++i) {
            mom = createUTC([ 2e3, i ]);
            this._shortMonthsParse[i] = this.monthsShort(mom, "").toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === "MMM") {
            ii = indexOf.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._longMonthsParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        if (this._monthsParseExact) {
          return handleStrictParse.call(this, monthName, format, strict);
        }
        if (!this._monthsParse) {
          this._monthsParse = [];
          this._longMonthsParse = [];
          this._shortMonthsParse = [];
        }
        for (i = 0; i < 12; i++) {
          mom = createUTC([ 2e3, i ]);
          if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
            this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
          }
          if (!strict && !this._monthsParse[i]) {
            regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
            this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) {
            return i;
          } else if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) {
            return i;
          } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
          }
        }
      }
      function setMonth(mom, value) {
        var dayOfMonth;
        if (!mom.isValid()) {
          return mom;
        }
        if (typeof value === "string") {
          if (/^\d+$/.test(value)) {
            value = toInt(value);
          } else {
            value = mom.localeData().monthsParse(value);
            if (!isNumber(value)) {
              return mom;
            }
          }
        }
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
        return mom;
      }
      function getSetMonth(value) {
        if (value != null) {
          setMonth(this, value);
          hooks.updateOffset(this, true);
          return this;
        } else {
          return get(this, "Month");
        }
      }
      function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
      }
      function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsShortStrictRegex;
          } else {
            return this._monthsShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsShortRegex")) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }
          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
      }
      function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
          if (!hasOwnProp(this, "_monthsRegex")) {
            computeMonthsParse.call(this);
          }
          if (isStrict) {
            return this._monthsStrictRegex;
          } else {
            return this._monthsRegex;
          }
        } else {
          if (!hasOwnProp(this, "_monthsRegex")) {
            this._monthsRegex = defaultMonthsRegex;
          }
          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
      }
      function computeMonthsParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var shortPieces = [], longPieces = [], mixedPieces = [], i, mom;
        for (i = 0; i < 12; i++) {
          mom = createUTC([ 2e3, i ]);
          shortPieces.push(this.monthsShort(mom, ""));
          longPieces.push(this.months(mom, ""));
          mixedPieces.push(this.months(mom, ""));
          mixedPieces.push(this.monthsShort(mom, ""));
        }
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
          shortPieces[i] = regexEscape(shortPieces[i]);
          longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
          mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
      }
      addFormatToken("Y", 0, 0, (function() {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : "+" + y;
      }));
      addFormatToken(0, [ "YY", 2 ], 0, (function() {
        return this.year() % 100;
      }));
      addFormatToken(0, [ "YYYY", 4 ], 0, "year");
      addFormatToken(0, [ "YYYYY", 5 ], 0, "year");
      addFormatToken(0, [ "YYYYYY", 6, true ], 0, "year");
      addUnitAlias("year", "y");
      addUnitPriority("year", 1);
      addRegexToken("Y", matchSigned);
      addRegexToken("YY", match1to2, match2);
      addRegexToken("YYYY", match1to4, match4);
      addRegexToken("YYYYY", match1to6, match6);
      addRegexToken("YYYYYY", match1to6, match6);
      addParseToken([ "YYYYY", "YYYYYY" ], YEAR);
      addParseToken("YYYY", (function(input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
      }));
      addParseToken("YY", (function(input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
      }));
      addParseToken("Y", (function(input, array) {
        array[YEAR] = parseInt(input, 10);
      }));
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
      };
      var getSetYear = makeGetSet("FullYear", true);
      function getIsLeapYear() {
        return isLeapYear(this.year());
      }
      function createDate(y, m, d, h, M, s, ms) {
        var date;
        if (y < 100 && y >= 0) {
          date = new Date(y + 400, m, d, h, M, s, ms);
          if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
          }
        } else {
          date = new Date(y, m, d, h, M, s, ms);
        }
        return date;
      }
      function createUTCDate(y) {
        var date, args;
        if (y < 100 && y >= 0) {
          args = Array.prototype.slice.call(arguments);
          args[0] = y + 400;
          date = new Date(Date.UTC.apply(null, args));
          if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
          }
        } else {
          date = new Date(Date.UTC.apply(null, arguments));
        }
        return date;
      }
      function firstWeekOffset(year, dow, doy) {
        var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
        return -fwdlw + fwd - 1;
      }
      function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
        if (dayOfYear <= 0) {
          resYear = year - 1;
          resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
          resYear = year + 1;
          resDayOfYear = dayOfYear - daysInYear(year);
        } else {
          resYear = year;
          resDayOfYear = dayOfYear;
        }
        return {
          year: resYear,
          dayOfYear: resDayOfYear
        };
      }
      function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
        if (week < 1) {
          resYear = mom.year() - 1;
          resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
          resWeek = week - weeksInYear(mom.year(), dow, doy);
          resYear = mom.year() + 1;
        } else {
          resYear = mom.year();
          resWeek = week;
        }
        return {
          week: resWeek,
          year: resYear
        };
      }
      function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
      }
      addFormatToken("w", [ "ww", 2 ], "wo", "week");
      addFormatToken("W", [ "WW", 2 ], "Wo", "isoWeek");
      addUnitAlias("week", "w");
      addUnitAlias("isoWeek", "W");
      addUnitPriority("week", 5);
      addUnitPriority("isoWeek", 5);
      addRegexToken("w", match1to2);
      addRegexToken("ww", match1to2, match2);
      addRegexToken("W", match1to2);
      addRegexToken("WW", match1to2, match2);
      addWeekParseToken([ "w", "ww", "W", "WW" ], (function(input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
      }));
      function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
      }
      var defaultLocaleWeek = {
        dow: 0,
        doy: 6
      };
      function localeFirstDayOfWeek() {
        return this._week.dow;
      }
      function localeFirstDayOfYear() {
        return this._week.doy;
      }
      function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, "d");
      }
      addFormatToken("d", 0, "do", "day");
      addFormatToken("dd", 0, 0, (function(format) {
        return this.localeData().weekdaysMin(this, format);
      }));
      addFormatToken("ddd", 0, 0, (function(format) {
        return this.localeData().weekdaysShort(this, format);
      }));
      addFormatToken("dddd", 0, 0, (function(format) {
        return this.localeData().weekdays(this, format);
      }));
      addFormatToken("e", 0, 0, "weekday");
      addFormatToken("E", 0, 0, "isoWeekday");
      addUnitAlias("day", "d");
      addUnitAlias("weekday", "e");
      addUnitAlias("isoWeekday", "E");
      addUnitPriority("day", 11);
      addUnitPriority("weekday", 11);
      addUnitPriority("isoWeekday", 11);
      addRegexToken("d", match1to2);
      addRegexToken("e", match1to2);
      addRegexToken("E", match1to2);
      addRegexToken("dd", (function(isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
      }));
      addRegexToken("ddd", (function(isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
      }));
      addRegexToken("dddd", (function(isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
      }));
      addWeekParseToken([ "dd", "ddd", "dddd" ], (function(input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = input;
        }
      }));
      addWeekParseToken([ "d", "e", "E" ], (function(input, week, config, token) {
        week[token] = toInt(input);
      }));
      function parseWeekday(input, locale) {
        if (typeof input !== "string") {
          return input;
        }
        if (!isNaN(input)) {
          return parseInt(input, 10);
        }
        input = locale.weekdaysParse(input);
        if (typeof input === "number") {
          return input;
        }
        return null;
      }
      function parseIsoWeekday(input, locale) {
        if (typeof input === "string") {
          return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
      }
      function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
      }
      var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
      function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m && m !== true && this._weekdays.isFormat.test(format) ? "format" : "standalone"];
        return m === true ? shiftWeekdays(weekdays, this._week.dow) : m ? weekdays[m.day()] : weekdays;
      }
      function localeWeekdaysShort(m) {
        return m === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
      }
      function localeWeekdaysMin(m) {
        return m === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
      }
      function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._minWeekdaysParse = [];
          for (i = 0; i < 7; ++i) {
            mom = createUTC([ 2e3, 1 ]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, "").toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, "").toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, "").toLocaleLowerCase();
          }
        }
        if (strict) {
          if (format === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        } else {
          if (format === "dddd") {
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else if (format === "ddd") {
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          } else {
            ii = indexOf.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._weekdaysParse, llc);
            if (ii !== -1) {
              return ii;
            }
            ii = indexOf.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
          }
        }
      }
      function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;
        if (this._weekdaysParseExact) {
          return handleStrictParse$1.call(this, weekdayName, format, strict);
        }
        if (!this._weekdaysParse) {
          this._weekdaysParse = [];
          this._minWeekdaysParse = [];
          this._shortWeekdaysParse = [];
          this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
          mom = createUTC([ 2e3, 1 ]).day(i);
          if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
            this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
            this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
          }
          if (!this._weekdaysParse[i]) {
            regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
            this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
          }
          if (strict && format === "dddd" && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === "ddd" && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (strict && format === "dd" && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
          } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
          }
        }
      }
      function getSetDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
          input = parseWeekday(input, this.localeData());
          return this.add(input - day, "d");
        } else {
          return day;
        }
      }
      function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, "d");
      }
      function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          var weekday = parseIsoWeekday(input, this.localeData());
          return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
          return this.day() || 7;
        }
      }
      function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysStrictRegex;
          } else {
            return this._weekdaysRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            this._weekdaysRegex = defaultWeekdaysRegex;
          }
          return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
        }
      }
      function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysShortStrictRegex;
          } else {
            return this._weekdaysShortRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysShortRegex")) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
          }
          return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
      }
      function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
          if (!hasOwnProp(this, "_weekdaysRegex")) {
            computeWeekdaysParse.call(this);
          }
          if (isStrict) {
            return this._weekdaysMinStrictRegex;
          } else {
            return this._weekdaysMinRegex;
          }
        } else {
          if (!hasOwnProp(this, "_weekdaysMinRegex")) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
          }
          return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
      }
      function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
          return b.length - a.length;
        }
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
          mom = createUTC([ 2e3, 1 ]).day(i);
          minp = regexEscape(this.weekdaysMin(mom, ""));
          shortp = regexEscape(this.weekdaysShort(mom, ""));
          longp = regexEscape(this.weekdays(mom, ""));
          minPieces.push(minp);
          shortPieces.push(shortp);
          longPieces.push(longp);
          mixedPieces.push(minp);
          mixedPieces.push(shortp);
          mixedPieces.push(longp);
        }
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
      }
      function hFormat() {
        return this.hours() % 12 || 12;
      }
      function kFormat() {
        return this.hours() || 24;
      }
      addFormatToken("H", [ "HH", 2 ], 0, "hour");
      addFormatToken("h", [ "hh", 2 ], 0, hFormat);
      addFormatToken("k", [ "kk", 2 ], 0, kFormat);
      addFormatToken("hmm", 0, 0, (function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
      }));
      addFormatToken("hmmss", 0, 0, (function() {
        return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      }));
      addFormatToken("Hmm", 0, 0, (function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2);
      }));
      addFormatToken("Hmmss", 0, 0, (function() {
        return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
      }));
      function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, (function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        }));
      }
      meridiem("a", true);
      meridiem("A", false);
      addUnitAlias("hour", "h");
      addUnitPriority("hour", 13);
      function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
      }
      addRegexToken("a", matchMeridiem);
      addRegexToken("A", matchMeridiem);
      addRegexToken("H", match1to2);
      addRegexToken("h", match1to2);
      addRegexToken("k", match1to2);
      addRegexToken("HH", match1to2, match2);
      addRegexToken("hh", match1to2, match2);
      addRegexToken("kk", match1to2, match2);
      addRegexToken("hmm", match3to4);
      addRegexToken("hmmss", match5to6);
      addRegexToken("Hmm", match3to4);
      addRegexToken("Hmmss", match5to6);
      addParseToken([ "H", "HH" ], HOUR);
      addParseToken([ "k", "kk" ], (function(input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
      }));
      addParseToken([ "a", "A" ], (function(input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
      }));
      addParseToken([ "h", "hh" ], (function(input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
      }));
      addParseToken("hmm", (function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
      }));
      addParseToken("hmmss", (function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
      }));
      addParseToken("Hmm", (function(input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
      }));
      addParseToken("Hmmss", (function(input, array, config) {
        var pos1 = input.length - 4, pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
      }));
      function localeIsPM(input) {
        return (input + "").toLowerCase().charAt(0) === "p";
      }
      var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
      function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
          return isLower ? "pm" : "PM";
        } else {
          return isLower ? "am" : "AM";
        }
      }
      var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,
        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,
        week: defaultLocaleWeek,
        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,
        meridiemParse: defaultLocaleMeridiemParse
      };
      var locales = {}, localeFamilies = {}, globalLocale;
      function commonPrefix(arr1, arr2) {
        var i, minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
          if (arr1[i] !== arr2[i]) {
            return i;
          }
        }
        return minl;
      }
      function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key;
      }
      function chooseLocale(names) {
        var i = 0, j, next, locale, split;
        while (i < names.length) {
          split = normalizeLocale(names[i]).split("-");
          j = split.length;
          next = normalizeLocale(names[i + 1]);
          next = next ? next.split("-") : null;
          while (j > 0) {
            locale = loadLocale(split.slice(0, j).join("-"));
            if (locale) {
              return locale;
            }
            if (next && next.length >= j && commonPrefix(split, next) >= j - 1) {
              break;
            }
            j--;
          }
          i++;
        }
        return globalLocale;
      }
      function loadLocale(name) {
        var oldLocale = null, aliasedRequire;
        if (locales[name] === undefined && "object" !== "undefined" && module && module.exports) {
          try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = commonjsRequire;
            aliasedRequire("./locale/" + name);
            getSetGlobalLocale(oldLocale);
          } catch (e) {
            locales[name] = null;
          }
        }
        return locales[name];
      }
      function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
          if (isUndefined(values)) {
            data = getLocale(key);
          } else {
            data = defineLocale(key, values);
          }
          if (data) {
            globalLocale = data;
          } else {
            if (typeof console !== "undefined" && console.warn) {
              console.warn("Locale " + key + " not found. Did you forget to load it?");
            }
          }
        }
        return globalLocale._abbr;
      }
      function defineLocale(name, config) {
        if (config !== null) {
          var locale, parentConfig = baseConfig;
          config.abbr = name;
          if (locales[name] != null) {
            deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change " + "an existing locale. moment.defineLocale(localeName, " + "config) should only be used for creating a new locale " + "See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
            parentConfig = locales[name]._config;
          } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
            } else {
              locale = loadLocale(config.parentLocale);
              if (locale != null) {
                parentConfig = locale._config;
              } else {
                if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                  name: name,
                  config: config
                });
                return null;
              }
            }
          }
          locales[name] = new Locale(mergeConfigs(parentConfig, config));
          if (localeFamilies[name]) {
            localeFamilies[name].forEach((function(x) {
              defineLocale(x.name, x.config);
            }));
          }
          getSetGlobalLocale(name);
          return locales[name];
        } else {
          delete locales[name];
          return null;
        }
      }
      function updateLocale(name, config) {
        if (config != null) {
          var locale, tmpLocale, parentConfig = baseConfig;
          if (locales[name] != null && locales[name].parentLocale != null) {
            locales[name].set(mergeConfigs(locales[name]._config, config));
          } else {
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
              parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            if (tmpLocale == null) {
              config.abbr = name;
            }
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
          }
          getSetGlobalLocale(name);
        } else {
          if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;
              if (name === getSetGlobalLocale()) {
                getSetGlobalLocale(name);
              }
            } else if (locales[name] != null) {
              delete locales[name];
            }
          }
        }
        return locales[name];
      }
      function getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr) {
          key = key._locale._abbr;
        }
        if (!key) {
          return globalLocale;
        }
        if (!isArray(key)) {
          locale = loadLocale(key);
          if (locale) {
            return locale;
          }
          key = [ key ];
        }
        return chooseLocale(key);
      }
      function listLocales() {
        return keys(locales);
      }
      function checkOverflow(m) {
        var overflow, a = m._a;
        if (a && getParsingFlags(m).overflow === -2) {
          overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
          if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
          }
          if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
          }
          if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
          }
          getParsingFlags(m).overflow = overflow;
        }
        return m;
      }
      var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, false ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, false ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, false ], [ "YYYYDDD", /\d{7}/ ], [ "YYYYMM", /\d{6}/, false ], [ "YYYY", /\d{4}/, false ] ], isoTimes = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function configFromISO(config) {
        var i, l, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat;
        if (match) {
          getParsingFlags(config).iso = true;
          for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
            }
          }
          if (dateFormat == null) {
            config._isValid = false;
            return;
          }
          if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                timeFormat = (match[2] || " ") + isoTimes[i][0];
                break;
              }
            }
            if (timeFormat == null) {
              config._isValid = false;
              return;
            }
          }
          if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
          }
          if (match[4]) {
            if (tzRegex.exec(match[4])) {
              tzFormat = "Z";
            } else {
              config._isValid = false;
              return;
            }
          }
          config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
          configFromStringAndFormat(config);
        } else {
          config._isValid = false;
        }
      }
      function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [ untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10) ];
        if (secondStr) {
          result.push(parseInt(secondStr, 10));
        }
        return result;
      }
      function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
          return 2e3 + year;
        } else if (year <= 999) {
          return 1900 + year;
        }
        return year;
      }
      function preprocessRFC2822(s) {
        return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
      function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
          var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
          if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
          }
        }
        return true;
      }
      function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
          return obsOffsets[obsOffset];
        } else if (militaryOffset) {
          return 0;
        } else {
          var hm = parseInt(numOffset, 10), m = hm % 100, h = (hm - m) / 100;
          return h * 60 + m;
        }
      }
      function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
        if (match) {
          parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
          if (!checkWeekday(match[1], parsedArray, config)) {
            return;
          }
          config._a = parsedArray;
          config._tzm = calculateOffset(match[8], match[9], match[10]);
          config._d = createUTCDate.apply(null, config._a);
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
          getParsingFlags(config).rfc2822 = true;
        } else {
          config._isValid = false;
        }
      }
      function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
          config._d = new Date(+matched[1]);
          return;
        }
        configFromISO(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        configFromRFC2822(config);
        if (config._isValid === false) {
          delete config._isValid;
        } else {
          return;
        }
        if (config._strict) {
          config._isValid = false;
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), " + "which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are " + "discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(config) {
        config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
      }));
      function defaults(a, b, c) {
        if (a != null) {
          return a;
        }
        if (b != null) {
          return b;
        }
        return c;
      }
      function currentDateArray(config) {
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
          return [ nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate() ];
        }
        return [ nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate() ];
      }
      function configFromArray(config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
        if (config._d) {
          return;
        }
        currentDate = currentDateArray(config);
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
          dayOfYearFromWeekInfo(config);
        }
        if (config._dayOfYear != null) {
          yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
          if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
          }
          date = createUTCDate(yearToUse, 0, config._dayOfYear);
          config._a[MONTH] = date.getUTCMonth();
          config._a[DATE] = date.getUTCDate();
        }
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
          config._a[i] = input[i] = currentDate[i];
        }
        for (;i < 7; i++) {
          config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
        }
        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
          config._nextDay = true;
          config._a[HOUR] = 0;
        }
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
        if (config._tzm != null) {
          config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }
        if (config._nextDay) {
          config._a[HOUR] = 24;
        }
        if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
          getParsingFlags(config).weekdayMismatch = true;
        }
      }
      function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
          dow = 1;
          doy = 4;
          weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
          week = defaults(w.W, 1);
          weekday = defaults(w.E, 1);
          if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
          }
        } else {
          dow = config._locale._week.dow;
          doy = config._locale._week.doy;
          curWeek = weekOfYear(createLocal(), dow, doy);
          weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
          week = defaults(w.w, curWeek.week);
          if (w.d != null) {
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
            }
          } else if (w.e != null) {
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true;
            }
          } else {
            weekday = dow;
          }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
          getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
          getParsingFlags(config)._overflowWeekday = true;
        } else {
          temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
          config._a[YEAR] = temp.year;
          config._dayOfYear = temp.dayOfYear;
        }
      }
      hooks.ISO_8601 = function() {};
      hooks.RFC_2822 = function() {};
      function configFromStringAndFormat(config) {
        if (config._f === hooks.ISO_8601) {
          configFromISO(config);
          return;
        }
        if (config._f === hooks.RFC_2822) {
          configFromRFC2822(config);
          return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;
        var string = "" + config._i, i, parsedInput, tokens, token, skipped, stringLength = string.length, totalParsedInputLength = 0, era;
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
        for (i = 0; i < tokens.length; i++) {
          token = tokens[i];
          parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
          if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
          }
          if (formatTokenFunctions[token]) {
            if (parsedInput) {
              getParsingFlags(config).empty = false;
            } else {
              getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
          } else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
          }
        }
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
          getParsingFlags(config).unusedInput.push(string);
        }
        if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
          getParsingFlags(config).bigHour = undefined;
        }
        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
        era = getParsingFlags(config).era;
        if (era !== null) {
          config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }
        configFromArray(config);
        checkOverflow(config);
      }
      function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;
        if (meridiem == null) {
          return hour;
        }
        if (locale.meridiemHour != null) {
          return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
          isPm = locale.isPM(meridiem);
          if (isPm && hour < 12) {
            hour += 12;
          }
          if (!isPm && hour === 12) {
            hour = 0;
          }
          return hour;
        } else {
          return hour;
        }
      }
      function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore, validFormatFound, bestFormatIsValid = false;
        if (config._f.length === 0) {
          getParsingFlags(config).invalidFormat = true;
          config._d = new Date(NaN);
          return;
        }
        for (i = 0; i < config._f.length; i++) {
          currentScore = 0;
          validFormatFound = false;
          tempConfig = copyConfig({}, config);
          if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
          }
          tempConfig._f = config._f[i];
          configFromStringAndFormat(tempConfig);
          if (isValid(tempConfig)) {
            validFormatFound = true;
          }
          currentScore += getParsingFlags(tempConfig).charsLeftOver;
          currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
          getParsingFlags(tempConfig).score = currentScore;
          if (!bestFormatIsValid) {
            if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
              if (validFormatFound) {
                bestFormatIsValid = true;
              }
            }
          } else {
            if (currentScore < scoreToBeat) {
              scoreToBeat = currentScore;
              bestMoment = tempConfig;
            }
          }
        }
        extend(config, bestMoment || tempConfig);
      }
      function configFromObject(config) {
        if (config._d) {
          return;
        }
        var i = normalizeObjectUnits(config._i), dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map([ i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond ], (function(obj) {
          return obj && parseInt(obj, 10);
        }));
        configFromArray(config);
      }
      function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
          res.add(1, "d");
          res._nextDay = undefined;
        }
        return res;
      }
      function prepareConfig(config) {
        var input = config._i, format = config._f;
        config._locale = config._locale || getLocale(config._l);
        if (input === null || format === undefined && input === "") {
          return createInvalid({
            nullInput: true
          });
        }
        if (typeof input === "string") {
          config._i = input = config._locale.preparse(input);
        }
        if (isMoment(input)) {
          return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
          config._d = input;
        } else if (isArray(format)) {
          configFromStringAndArray(config);
        } else if (format) {
          configFromStringAndFormat(config);
        } else {
          configFromInput(config);
        }
        if (!isValid(config)) {
          config._d = null;
        }
        return config;
      }
      function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
          config._d = new Date(hooks.now());
        } else if (isDate(input)) {
          config._d = new Date(input.valueOf());
        } else if (typeof input === "string") {
          configFromString(config);
        } else if (isArray(input)) {
          config._a = map(input.slice(0), (function(obj) {
            return parseInt(obj, 10);
          }));
          configFromArray(config);
        } else if (isObject(input)) {
          configFromObject(config);
        } else if (isNumber(input)) {
          config._d = new Date(input);
        } else {
          hooks.createFromInputFallback(config);
        }
      }
      function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};
        if (format === true || format === false) {
          strict = format;
          format = undefined;
        }
        if (locale === true || locale === false) {
          strict = locale;
          locale = undefined;
        }
        if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
          input = undefined;
        }
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;
        return createFromConfig(c);
      }
      function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
      }
      var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
        } else {
          return createInvalid();
        }
      })), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
        } else {
          return createInvalid();
        }
      }));
      function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
          moments = moments[0];
        }
        if (!moments.length) {
          return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
          if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
          }
        }
        return res;
      }
      function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isBefore", args);
      }
      function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isAfter", args);
      }
      var now = function() {
        return Date.now ? Date.now() : +new Date;
      };
      var ordering = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
      function isDurationValid(m) {
        var key, unitHasDecimal = false, i;
        for (key in m) {
          if (hasOwnProp(m, key) && !(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
          }
        }
        for (i = 0; i < ordering.length; ++i) {
          if (m[ordering[i]]) {
            if (unitHasDecimal) {
              return false;
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
              unitHasDecimal = true;
            }
          }
        }
        return true;
      }
      function isValid$1() {
        return this._isValid;
      }
      function createInvalid$1() {
        return createDuration(NaN);
      }
      function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration), years = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months = normalizedInput.month || 0, weeks = normalizedInput.week || normalizedInput.isoWeek || 0, days = normalizedInput.day || 0, hours = normalizedInput.hour || 0, minutes = normalizedInput.minute || 0, seconds = normalizedInput.second || 0, milliseconds = normalizedInput.millisecond || 0;
        this._isValid = isDurationValid(normalizedInput);
        this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 1e3 * 60 * 60;
        this._days = +days + weeks * 7;
        this._months = +months + quarters * 3 + years * 12;
        this._data = {};
        this._locale = getLocale();
        this._bubble();
      }
      function isDuration(obj) {
        return obj instanceof Duration;
      }
      function absRound(number) {
        if (number < 0) {
          return Math.round(-1 * number) * -1;
        } else {
          return Math.round(number);
        }
      }
      function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i;
        for (i = 0; i < len; i++) {
          if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
            diffs++;
          }
        }
        return diffs + lengthDiff;
      }
      function offset(token, separator) {
        addFormatToken(token, 0, 0, (function() {
          var offset = this.utcOffset(), sign = "+";
          if (offset < 0) {
            offset = -offset;
            sign = "-";
          }
          return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
        }));
      }
      offset("Z", ":");
      offset("ZZ", "");
      addRegexToken("Z", matchShortOffset);
      addRegexToken("ZZ", matchShortOffset);
      addParseToken([ "Z", "ZZ" ], (function(input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
      }));
      var chunkOffset = /([\+\-]|\d\d)/gi;
      function offsetFromString(matcher, string) {
        var matches = (string || "").match(matcher), chunk, parts, minutes;
        if (matches === null) {
          return null;
        }
        chunk = matches[matches.length - 1] || [];
        parts = (chunk + "").match(chunkOffset) || [ "-", 0, 0 ];
        minutes = +(parts[1] * 60) + toInt(parts[2]);
        return minutes === 0 ? 0 : parts[0] === "+" ? minutes : -minutes;
      }
      function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
          res = model.clone();
          diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
          res._d.setTime(res._d.valueOf() + diff);
          hooks.updateOffset(res, false);
          return res;
        } else {
          return createLocal(input).local();
        }
      }
      function getDateOffset(m) {
        return -Math.round(m._d.getTimezoneOffset());
      }
      hooks.updateOffset = function() {};
      function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0, localAdjust;
        if (!this.isValid()) {
          return input != null ? this : NaN;
        }
        if (input != null) {
          if (typeof input === "string") {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
              return this;
            }
          } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
          }
          if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
          }
          this._offset = input;
          this._isUTC = true;
          if (localAdjust != null) {
            this.add(localAdjust, "m");
          }
          if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
              addSubtract(this, createDuration(input - offset, "m"), 1, false);
            } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
            }
          }
          return this;
        } else {
          return this._isUTC ? offset : getDateOffset(this);
        }
      }
      function getSetZone(input, keepLocalTime) {
        if (input != null) {
          if (typeof input !== "string") {
            input = -input;
          }
          this.utcOffset(input, keepLocalTime);
          return this;
        } else {
          return -this.utcOffset();
        }
      }
      function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
      }
      function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
          this.utcOffset(0, keepLocalTime);
          this._isUTC = false;
          if (keepLocalTime) {
            this.subtract(getDateOffset(this), "m");
          }
        }
        return this;
      }
      function setOffsetToParsedOffset() {
        if (this._tzm != null) {
          this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === "string") {
          var tZone = offsetFromString(matchOffset, this._i);
          if (tZone != null) {
            this.utcOffset(tZone);
          } else {
            this.utcOffset(0, true);
          }
        }
        return this;
      }
      function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
          return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;
        return (this.utcOffset() - input) % 60 === 0;
      }
      function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }
      function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
          return this._isDSTShifted;
        }
        var c = {}, other;
        copyConfig(c, this);
        c = prepareConfig(c);
        if (c._a) {
          other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
          this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
          this._isDSTShifted = false;
        }
        return this._isDSTShifted;
      }
      function isLocal() {
        return this.isValid() ? !this._isUTC : false;
      }
      function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
      }
      function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
      }
      var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function createDuration(input, key) {
        var duration = input, match = null, sign, ret, diffRes;
        if (isDuration(input)) {
          duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
          };
        } else if (isNumber(input) || !isNaN(+input)) {
          duration = {};
          if (key) {
            duration[key] = +input;
          } else {
            duration.milliseconds = +input;
          }
        } else if (match = aspNetRegex.exec(input)) {
          sign = match[1] === "-" ? -1 : 1;
          duration = {
            y: 0,
            d: toInt(match[DATE]) * sign,
            h: toInt(match[HOUR]) * sign,
            m: toInt(match[MINUTE]) * sign,
            s: toInt(match[SECOND]) * sign,
            ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign
          };
        } else if (match = isoRegex.exec(input)) {
          sign = match[1] === "-" ? -1 : 1;
          duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign)
          };
        } else if (duration == null) {
          duration = {};
        } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
          diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
          duration = {};
          duration.ms = diffRes.milliseconds;
          duration.M = diffRes.months;
        }
        ret = new Duration(duration);
        if (isDuration(input) && hasOwnProp(input, "_locale")) {
          ret._locale = input._locale;
        }
        if (isDuration(input) && hasOwnProp(input, "_isValid")) {
          ret._isValid = input._isValid;
        }
        return ret;
      }
      createDuration.fn = Duration.prototype;
      createDuration.invalid = createInvalid$1;
      function parseIso(inp, sign) {
        var res = inp && parseFloat(inp.replace(",", "."));
        return (isNaN(res) ? 0 : res) * sign;
      }
      function positiveMomentsDifference(base, other) {
        var res = {};
        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, "M").isAfter(other)) {
          --res.months;
        }
        res.milliseconds = +other - +base.clone().add(res.months, "M");
        return res;
      }
      function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
          return {
            milliseconds: 0,
            months: 0
          };
        }
        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
          res = positiveMomentsDifference(base, other);
        } else {
          res = positiveMomentsDifference(other, base);
          res.milliseconds = -res.milliseconds;
          res.months = -res.months;
        }
        return res;
      }
      function createAdder(direction, name) {
        return function(val, period) {
          var dur, tmp;
          if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). " + "See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
            tmp = val;
            val = period;
            period = tmp;
          }
          dur = createDuration(val, period);
          addSubtract(this, dur, direction);
          return this;
        };
      }
      function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds, days = absRound(duration._days), months = absRound(duration._months);
        if (!mom.isValid()) {
          return;
        }
        updateOffset = updateOffset == null ? true : updateOffset;
        if (months) {
          setMonth(mom, get(mom, "Month") + months * isAdding);
        }
        if (days) {
          set$1(mom, "Date", get(mom, "Date") + days * isAdding);
        }
        if (milliseconds) {
          mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
          hooks.updateOffset(mom, days || months);
        }
      }
      var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
      function isString(input) {
        return typeof input === "string" || input instanceof String;
      }
      function isMomentInput(input) {
        return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === undefined;
      }
      function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [ "years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms" ], i, property;
        for (i = 0; i < properties.length; i += 1) {
          property = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
      }
      function isNumberOrStringArray(input) {
        var arrayTest = isArray(input), dataTypeTest = false;
        if (arrayTest) {
          dataTypeTest = input.filter((function(item) {
            return !isNumber(item) && isString(input);
          })).length === 0;
        }
        return arrayTest && dataTypeTest;
      }
      function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [ "sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse" ], i, property;
        for (i = 0; i < properties.length; i += 1) {
          property = properties[i];
          propertyTest = propertyTest || hasOwnProp(input, property);
        }
        return objectTest && propertyTest;
      }
      function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, "days", true);
        return diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse";
      }
      function calendar$1(time, formats) {
        if (arguments.length === 1) {
          if (!arguments[0]) {
            time = undefined;
            formats = undefined;
          } else if (isMomentInput(arguments[0])) {
            time = arguments[0];
            formats = undefined;
          } else if (isCalendarSpec(arguments[0])) {
            formats = arguments[0];
            time = undefined;
          }
        }
        var now = time || createLocal(), sod = cloneWithOffset(now, this).startOf("day"), format = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
      }
      function clone() {
        return new Moment(this);
      }
      function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() > localInput.valueOf();
        } else {
          return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
      }
      function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() < localInput.valueOf();
        } else {
          return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
      }
      function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from), localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
          return false;
        }
        inclusivity = inclusivity || "()";
        return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
      }
      function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input), inputMs;
        if (!(this.isValid() && localInput.isValid())) {
          return false;
        }
        units = normalizeUnits(units) || "millisecond";
        if (units === "millisecond") {
          return this.valueOf() === localInput.valueOf();
        } else {
          inputMs = localInput.valueOf();
          return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
      }
      function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
      }
      function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
      }
      function diff(input, units, asFloat) {
        var that, zoneDelta, output;
        if (!this.isValid()) {
          return NaN;
        }
        that = cloneWithOffset(input, this);
        if (!that.isValid()) {
          return NaN;
        }
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
        units = normalizeUnits(units);
        switch (units) {
         case "year":
          output = monthDiff(this, that) / 12;
          break;

         case "month":
          output = monthDiff(this, that);
          break;

         case "quarter":
          output = monthDiff(this, that) / 3;
          break;

         case "second":
          output = (this - that) / 1e3;
          break;

         case "minute":
          output = (this - that) / 6e4;
          break;

         case "hour":
          output = (this - that) / 36e5;
          break;

         case "day":
          output = (this - that - zoneDelta) / 864e5;
          break;

         case "week":
          output = (this - that - zoneDelta) / 6048e5;
          break;

         default:
          output = this - that;
        }
        return asFloat ? output : absFloor(output);
      }
      function monthDiff(a, b) {
        if (a.date() < b.date()) {
          return -monthDiff(b, a);
        }
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()), anchor = a.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
        if (b - anchor < 0) {
          anchor2 = a.clone().add(wholeMonthDiff - 1, "months");
          adjust = (b - anchor) / (anchor - anchor2);
        } else {
          anchor2 = a.clone().add(wholeMonthDiff + 1, "months");
          adjust = (b - anchor) / (anchor2 - anchor);
        }
        return -(wholeMonthDiff + adjust) || 0;
      }
      hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
      hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      function toString() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function toISOString(keepOffset) {
        if (!this.isValid()) {
          return null;
        }
        var utc = keepOffset !== true, m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
          return formatMoment(m, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }
        if (isFunction(Date.prototype.toISOString)) {
          if (utc) {
            return this.toDate().toISOString();
          } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m, "Z"));
          }
        }
        return formatMoment(m, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
      }
      function inspect() {
        if (!this.isValid()) {
          return "moment.invalid(/* " + this._i + " */)";
        }
        var func = "moment", zone = "", prefix, year, datetime, suffix;
        if (!this.isLocal()) {
          func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
          zone = "Z";
        }
        prefix = "[" + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
        datetime = "-MM-DD[T]HH:mm:ss.SSS";
        suffix = zone + '[")]';
        return this.format(prefix + year + datetime + suffix);
      }
      function format(inputString) {
        if (!inputString) {
          inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
      }
      function from(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            to: this,
            from: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
      }
      function to(time, withoutSuffix) {
        if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
          return createDuration({
            from: this,
            to: time
          }).locale(this.locale()).humanize(!withoutSuffix);
        } else {
          return this.localeData().invalidDate();
        }
      }
      function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
      }
      function locale(key) {
        var newLocaleData;
        if (key === undefined) {
          return this._locale._abbr;
        } else {
          newLocaleData = getLocale(key);
          if (newLocaleData != null) {
            this._locale = newLocaleData;
          }
          return this;
        }
      }
      var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(key) {
        if (key === undefined) {
          return this.localeData();
        } else {
          return this.locale(key);
        }
      }));
      function localeData() {
        return this._locale;
      }
      var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
      function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
      }
      function localStartOfDate(y, m, d) {
        if (y < 100 && y >= 0) {
          return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return new Date(y, m, d).valueOf();
        }
      }
      function utcStartOfDate(y, m, d) {
        if (y < 100 && y >= 0) {
          return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
          return Date.UTC(y, m, d);
        }
      }
      function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
         case "year":
          time = startOfDate(this.year(), 0, 1);
          break;

         case "quarter":
          time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
          break;

         case "month":
          time = startOfDate(this.year(), this.month(), 1);
          break;

         case "week":
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
          break;

         case "isoWeek":
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
          break;

         case "day":
         case "date":
          time = startOfDate(this.year(), this.month(), this.date());
          break;

         case "hour":
          time = this._d.valueOf();
          time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
          break;

         case "minute":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_MINUTE);
          break;

         case "second":
          time = this._d.valueOf();
          time -= mod$1(time, MS_PER_SECOND);
          break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === "millisecond" || !this.isValid()) {
          return this;
        }
        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
        switch (units) {
         case "year":
          time = startOfDate(this.year() + 1, 0, 1) - 1;
          break;

         case "quarter":
          time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
          break;

         case "month":
          time = startOfDate(this.year(), this.month() + 1, 1) - 1;
          break;

         case "week":
          time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
          break;

         case "isoWeek":
          time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
          break;

         case "day":
         case "date":
          time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
          break;

         case "hour":
          time = this._d.valueOf();
          time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
          break;

         case "minute":
          time = this._d.valueOf();
          time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
          break;

         case "second":
          time = this._d.valueOf();
          time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
          break;
        }
        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
      }
      function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 6e4;
      }
      function unix() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function toDate() {
        return new Date(this.valueOf());
      }
      function toArray() {
        var m = this;
        return [ m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond() ];
      }
      function toObject() {
        var m = this;
        return {
          years: m.year(),
          months: m.month(),
          date: m.date(),
          hours: m.hours(),
          minutes: m.minutes(),
          seconds: m.seconds(),
          milliseconds: m.milliseconds()
        };
      }
      function toJSON() {
        return this.isValid() ? this.toISOString() : null;
      }
      function isValid$2() {
        return isValid(this);
      }
      function parsingFlags() {
        return extend({}, getParsingFlags(this));
      }
      function invalidAt() {
        return getParsingFlags(this).overflow;
      }
      function creationData() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }
      addFormatToken("N", 0, 0, "eraAbbr");
      addFormatToken("NN", 0, 0, "eraAbbr");
      addFormatToken("NNN", 0, 0, "eraAbbr");
      addFormatToken("NNNN", 0, 0, "eraName");
      addFormatToken("NNNNN", 0, 0, "eraNarrow");
      addFormatToken("y", [ "y", 1 ], "yo", "eraYear");
      addFormatToken("y", [ "yy", 2 ], 0, "eraYear");
      addFormatToken("y", [ "yyy", 3 ], 0, "eraYear");
      addFormatToken("y", [ "yyyy", 4 ], 0, "eraYear");
      addRegexToken("N", matchEraAbbr);
      addRegexToken("NN", matchEraAbbr);
      addRegexToken("NNN", matchEraAbbr);
      addRegexToken("NNNN", matchEraName);
      addRegexToken("NNNNN", matchEraNarrow);
      addParseToken([ "N", "NN", "NNN", "NNNN", "NNNNN" ], (function(input, array, config, token) {
        var era = config._locale.erasParse(input, token, config._strict);
        if (era) {
          getParsingFlags(config).era = era;
        } else {
          getParsingFlags(config).invalidEra = input;
        }
      }));
      addRegexToken("y", matchUnsigned);
      addRegexToken("yy", matchUnsigned);
      addRegexToken("yyy", matchUnsigned);
      addRegexToken("yyyy", matchUnsigned);
      addRegexToken("yo", matchEraYearOrdinal);
      addParseToken([ "y", "yy", "yyy", "yyyy" ], YEAR);
      addParseToken([ "yo" ], (function(input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
          match = input.match(config._locale._eraYearOrdinalRegex);
        }
        if (config._locale.eraYearOrdinalParse) {
          array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
          array[YEAR] = parseInt(input, 10);
        }
      }));
      function localeEras(m, format) {
        var i, l, date, eras = this._eras || getLocale("en")._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
          switch (typeof eras[i].since) {
           case "string":
            date = hooks(eras[i].since).startOf("day");
            eras[i].since = date.valueOf();
            break;
          }
          switch (typeof eras[i].until) {
           case "undefined":
            eras[i].until = +Infinity;
            break;

           case "string":
            date = hooks(eras[i].until).startOf("day").valueOf();
            eras[i].until = date.valueOf();
            break;
          }
        }
        return eras;
      }
      function localeErasParse(eraName, format, strict) {
        var i, l, eras = this.eras(), name, abbr, narrow;
        eraName = eraName.toUpperCase();
        for (i = 0, l = eras.length; i < l; ++i) {
          name = eras[i].name.toUpperCase();
          abbr = eras[i].abbr.toUpperCase();
          narrow = eras[i].narrow.toUpperCase();
          if (strict) {
            switch (format) {
             case "N":
             case "NN":
             case "NNN":
              if (abbr === eraName) {
                return eras[i];
              }
              break;

             case "NNNN":
              if (name === eraName) {
                return eras[i];
              }
              break;

             case "NNNNN":
              if (narrow === eraName) {
                return eras[i];
              }
              break;
            }
          } else if ([ name, abbr, narrow ].indexOf(eraName) >= 0) {
            return eras[i];
          }
        }
      }
      function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
          return hooks(era.since).year();
        } else {
          return hooks(era.since).year() + (year - era.offset) * dir;
        }
      }
      function getEraName() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
          }
        }
        return "";
      }
      function getEraNarrow() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
          }
        }
        return "";
      }
      function getEraAbbr() {
        var i, l, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
          }
          if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
          }
        }
        return "";
      }
      function getEraYear() {
        var i, l, dir, val, eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          dir = eras[i].since <= eras[i].until ? +1 : -1;
          val = this.clone().startOf("day").valueOf();
          if (eras[i].since <= val && val <= eras[i].until || eras[i].until <= val && val <= eras[i].since) {
            return (this.year() - hooks(eras[i].since).year()) * dir + eras[i].offset;
          }
        }
        return this.year();
      }
      function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNameRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
      }
      function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, "_erasAbbrRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
      }
      function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, "_erasNarrowRegex")) {
          computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
      }
      function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
      }
      function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
      }
      function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
      }
      function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
      }
      function computeErasParse() {
        var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i, l, eras = this.eras();
        for (i = 0, l = eras.length; i < l; ++i) {
          namePieces.push(regexEscape(eras[i].name));
          abbrPieces.push(regexEscape(eras[i].abbr));
          narrowPieces.push(regexEscape(eras[i].narrow));
          mixedPieces.push(regexEscape(eras[i].name));
          mixedPieces.push(regexEscape(eras[i].abbr));
          mixedPieces.push(regexEscape(eras[i].narrow));
        }
        this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
        this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
        this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
        this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
      }
      addFormatToken(0, [ "gg", 2 ], 0, (function() {
        return this.weekYear() % 100;
      }));
      addFormatToken(0, [ "GG", 2 ], 0, (function() {
        return this.isoWeekYear() % 100;
      }));
      function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [ token, token.length ], 0, getter);
      }
      addWeekYearFormatToken("gggg", "weekYear");
      addWeekYearFormatToken("ggggg", "weekYear");
      addWeekYearFormatToken("GGGG", "isoWeekYear");
      addWeekYearFormatToken("GGGGG", "isoWeekYear");
      addUnitAlias("weekYear", "gg");
      addUnitAlias("isoWeekYear", "GG");
      addUnitPriority("weekYear", 1);
      addUnitPriority("isoWeekYear", 1);
      addRegexToken("G", matchSigned);
      addRegexToken("g", matchSigned);
      addRegexToken("GG", match1to2, match2);
      addRegexToken("gg", match1to2, match2);
      addRegexToken("GGGG", match1to4, match4);
      addRegexToken("gggg", match1to4, match4);
      addRegexToken("GGGGG", match1to6, match6);
      addRegexToken("ggggg", match1to6, match6);
      addWeekParseToken([ "gggg", "ggggg", "GGGG", "GGGGG" ], (function(input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
      }));
      addWeekParseToken([ "gg", "GG" ], (function(input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
      }));
      function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
      }
      function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
      }
      function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
      }
      function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
      }
      function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
      }
      function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
      }
      function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
          return weekOfYear(this, dow, doy).year;
        } else {
          weeksTarget = weeksInYear(input, dow, doy);
          if (week > weeksTarget) {
            week = weeksTarget;
          }
          return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
      }
      function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
      }
      addFormatToken("Q", 0, "Qo", "quarter");
      addUnitAlias("quarter", "Q");
      addUnitPriority("quarter", 7);
      addRegexToken("Q", match1);
      addParseToken("Q", (function(input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
      }));
      function getSetQuarter(input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
      }
      addFormatToken("D", [ "DD", 2 ], "Do", "date");
      addUnitAlias("date", "D");
      addUnitPriority("date", 9);
      addRegexToken("D", match1to2);
      addRegexToken("DD", match1to2, match2);
      addRegexToken("Do", (function(isStrict, locale) {
        return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
      }));
      addParseToken([ "D", "DD" ], DATE);
      addParseToken("Do", (function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
      }));
      var getSetDayOfMonth = makeGetSet("Date", true);
      addFormatToken("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear");
      addUnitAlias("dayOfYear", "DDD");
      addUnitPriority("dayOfYear", 4);
      addRegexToken("DDD", match1to3);
      addRegexToken("DDDD", match3);
      addParseToken([ "DDD", "DDDD" ], (function(input, array, config) {
        config._dayOfYear = toInt(input);
      }));
      function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
      }
      addFormatToken("m", [ "mm", 2 ], 0, "minute");
      addUnitAlias("minute", "m");
      addUnitPriority("minute", 14);
      addRegexToken("m", match1to2);
      addRegexToken("mm", match1to2, match2);
      addParseToken([ "m", "mm" ], MINUTE);
      var getSetMinute = makeGetSet("Minutes", false);
      addFormatToken("s", [ "ss", 2 ], 0, "second");
      addUnitAlias("second", "s");
      addUnitPriority("second", 15);
      addRegexToken("s", match1to2);
      addRegexToken("ss", match1to2, match2);
      addParseToken([ "s", "ss" ], SECOND);
      var getSetSecond = makeGetSet("Seconds", false);
      addFormatToken("S", 0, 0, (function() {
        return ~~(this.millisecond() / 100);
      }));
      addFormatToken(0, [ "SS", 2 ], 0, (function() {
        return ~~(this.millisecond() / 10);
      }));
      addFormatToken(0, [ "SSS", 3 ], 0, "millisecond");
      addFormatToken(0, [ "SSSS", 4 ], 0, (function() {
        return this.millisecond() * 10;
      }));
      addFormatToken(0, [ "SSSSS", 5 ], 0, (function() {
        return this.millisecond() * 100;
      }));
      addFormatToken(0, [ "SSSSSS", 6 ], 0, (function() {
        return this.millisecond() * 1e3;
      }));
      addFormatToken(0, [ "SSSSSSS", 7 ], 0, (function() {
        return this.millisecond() * 1e4;
      }));
      addFormatToken(0, [ "SSSSSSSS", 8 ], 0, (function() {
        return this.millisecond() * 1e5;
      }));
      addFormatToken(0, [ "SSSSSSSSS", 9 ], 0, (function() {
        return this.millisecond() * 1e6;
      }));
      addUnitAlias("millisecond", "ms");
      addUnitPriority("millisecond", 16);
      addRegexToken("S", match1to3, match1);
      addRegexToken("SS", match1to3, match2);
      addRegexToken("SSS", match1to3, match3);
      var token, getSetMillisecond;
      for (token = "SSSS"; token.length <= 9; token += "S") {
        addRegexToken(token, matchUnsigned);
      }
      function parseMs(input, array) {
        array[MILLISECOND] = toInt(("0." + input) * 1e3);
      }
      for (token = "S"; token.length <= 9; token += "S") {
        addParseToken(token, parseMs);
      }
      getSetMillisecond = makeGetSet("Milliseconds", false);
      addFormatToken("z", 0, 0, "zoneAbbr");
      addFormatToken("zz", 0, 0, "zoneName");
      function getZoneAbbr() {
        return this._isUTC ? "UTC" : "";
      }
      function getZoneName() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      var proto = Moment.prototype;
      proto.add = add;
      proto.calendar = calendar$1;
      proto.clone = clone;
      proto.diff = diff;
      proto.endOf = endOf;
      proto.format = format;
      proto.from = from;
      proto.fromNow = fromNow;
      proto.to = to;
      proto.toNow = toNow;
      proto.get = stringGet;
      proto.invalidAt = invalidAt;
      proto.isAfter = isAfter;
      proto.isBefore = isBefore;
      proto.isBetween = isBetween;
      proto.isSame = isSame;
      proto.isSameOrAfter = isSameOrAfter;
      proto.isSameOrBefore = isSameOrBefore;
      proto.isValid = isValid$2;
      proto.lang = lang;
      proto.locale = locale;
      proto.localeData = localeData;
      proto.max = prototypeMax;
      proto.min = prototypeMin;
      proto.parsingFlags = parsingFlags;
      proto.set = stringSet;
      proto.startOf = startOf;
      proto.subtract = subtract;
      proto.toArray = toArray;
      proto.toObject = toObject;
      proto.toDate = toDate;
      proto.toISOString = toISOString;
      proto.inspect = inspect;
      if (typeof Symbol !== "undefined" && Symbol.for != null) {
        proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
          return "Moment<" + this.format() + ">";
        };
      }
      proto.toJSON = toJSON;
      proto.toString = toString;
      proto.unix = unix;
      proto.valueOf = valueOf;
      proto.creationData = creationData;
      proto.eraName = getEraName;
      proto.eraNarrow = getEraNarrow;
      proto.eraAbbr = getEraAbbr;
      proto.eraYear = getEraYear;
      proto.year = getSetYear;
      proto.isLeapYear = getIsLeapYear;
      proto.weekYear = getSetWeekYear;
      proto.isoWeekYear = getSetISOWeekYear;
      proto.quarter = proto.quarters = getSetQuarter;
      proto.month = getSetMonth;
      proto.daysInMonth = getDaysInMonth;
      proto.week = proto.weeks = getSetWeek;
      proto.isoWeek = proto.isoWeeks = getSetISOWeek;
      proto.weeksInYear = getWeeksInYear;
      proto.weeksInWeekYear = getWeeksInWeekYear;
      proto.isoWeeksInYear = getISOWeeksInYear;
      proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
      proto.date = getSetDayOfMonth;
      proto.day = proto.days = getSetDayOfWeek;
      proto.weekday = getSetLocaleDayOfWeek;
      proto.isoWeekday = getSetISODayOfWeek;
      proto.dayOfYear = getSetDayOfYear;
      proto.hour = proto.hours = getSetHour;
      proto.minute = proto.minutes = getSetMinute;
      proto.second = proto.seconds = getSetSecond;
      proto.millisecond = proto.milliseconds = getSetMillisecond;
      proto.utcOffset = getSetOffset;
      proto.utc = setOffsetToUTC;
      proto.local = setOffsetToLocal;
      proto.parseZone = setOffsetToParsedOffset;
      proto.hasAlignedHourOffset = hasAlignedHourOffset;
      proto.isDST = isDaylightSavingTime;
      proto.isLocal = isLocal;
      proto.isUtcOffset = isUtcOffset;
      proto.isUtc = isUtc;
      proto.isUTC = isUtc;
      proto.zoneAbbr = getZoneAbbr;
      proto.zoneName = getZoneName;
      proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
      proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
      proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
      proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
      proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
      function createUnix(input) {
        return createLocal(input * 1e3);
      }
      function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
      }
      function preParsePostFormat(string) {
        return string;
      }
      var proto$1 = Locale.prototype;
      proto$1.calendar = calendar;
      proto$1.longDateFormat = longDateFormat;
      proto$1.invalidDate = invalidDate;
      proto$1.ordinal = ordinal;
      proto$1.preparse = preParsePostFormat;
      proto$1.postformat = preParsePostFormat;
      proto$1.relativeTime = relativeTime;
      proto$1.pastFuture = pastFuture;
      proto$1.set = set;
      proto$1.eras = localeEras;
      proto$1.erasParse = localeErasParse;
      proto$1.erasConvertYear = localeErasConvertYear;
      proto$1.erasAbbrRegex = erasAbbrRegex;
      proto$1.erasNameRegex = erasNameRegex;
      proto$1.erasNarrowRegex = erasNarrowRegex;
      proto$1.months = localeMonths;
      proto$1.monthsShort = localeMonthsShort;
      proto$1.monthsParse = localeMonthsParse;
      proto$1.monthsRegex = monthsRegex;
      proto$1.monthsShortRegex = monthsShortRegex;
      proto$1.week = localeWeek;
      proto$1.firstDayOfYear = localeFirstDayOfYear;
      proto$1.firstDayOfWeek = localeFirstDayOfWeek;
      proto$1.weekdays = localeWeekdays;
      proto$1.weekdaysMin = localeWeekdaysMin;
      proto$1.weekdaysShort = localeWeekdaysShort;
      proto$1.weekdaysParse = localeWeekdaysParse;
      proto$1.weekdaysRegex = weekdaysRegex;
      proto$1.weekdaysShortRegex = weekdaysShortRegex;
      proto$1.weekdaysMinRegex = weekdaysMinRegex;
      proto$1.isPM = localeIsPM;
      proto$1.meridiem = localeMeridiem;
      function get$1(format, index, field, setter) {
        var locale = getLocale(), utc = createUTC().set(setter, index);
        return locale[field](utc, format);
      }
      function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
          index = format;
          format = undefined;
        }
        format = format || "";
        if (index != null) {
          return get$1(format, index, field, "month");
        }
        var i, out = [];
        for (i = 0; i < 12; i++) {
          out[i] = get$1(format, i, field, "month");
        }
        return out;
      }
      function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === "boolean") {
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }
          format = format || "";
        } else {
          format = localeSorted;
          index = format;
          localeSorted = false;
          if (isNumber(format)) {
            index = format;
            format = undefined;
          }
          format = format || "";
        }
        var locale = getLocale(), shift = localeSorted ? locale._week.dow : 0, i, out = [];
        if (index != null) {
          return get$1(format, (index + shift) % 7, field, "day");
        }
        for (i = 0; i < 7; i++) {
          out[i] = get$1(format, (i + shift) % 7, field, "day");
        }
        return out;
      }
      function listMonths(format, index) {
        return listMonthsImpl(format, index, "months");
      }
      function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, "monthsShort");
      }
      function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdays");
      }
      function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdaysShort");
      }
      function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, "weekdaysMin");
      }
      getSetGlobalLocale("en", {
        eras: [ {
          since: "0001-01-01",
          until: +Infinity,
          offset: 1,
          name: "Anno Domini",
          narrow: "AD",
          abbr: "AD"
        }, {
          since: "0000-12-31",
          until: -Infinity,
          offset: 1,
          name: "Before Christ",
          narrow: "BC",
          abbr: "BC"
        } ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
          var b = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
          return number + output;
        }
      });
      hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
      hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
      var mathAbs = Math.abs;
      function abs() {
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);
        return this;
      }
      function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);
        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;
        return duration._bubble();
      }
      function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
      }
      function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
      }
      function absCeil(number) {
        if (number < 0) {
          return Math.floor(number);
        } else {
          return Math.ceil(number);
        }
      }
      function bubble() {
        var milliseconds = this._milliseconds, days = this._days, months = this._months, data = this._data, seconds, minutes, hours, years, monthsFromDays;
        if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
          milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
          days = 0;
          months = 0;
        }
        data.milliseconds = milliseconds % 1e3;
        seconds = absFloor(milliseconds / 1e3);
        data.seconds = seconds % 60;
        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;
        hours = absFloor(minutes / 60);
        data.hours = hours % 24;
        days += absFloor(hours / 24);
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));
        years = absFloor(months / 12);
        months %= 12;
        data.days = days;
        data.months = months;
        data.years = years;
        return this;
      }
      function daysToMonths(days) {
        return days * 4800 / 146097;
      }
      function monthsToDays(months) {
        return months * 146097 / 4800;
      }
      function as(units) {
        if (!this.isValid()) {
          return NaN;
        }
        var days, months, milliseconds = this._milliseconds;
        units = normalizeUnits(units);
        if (units === "month" || units === "quarter" || units === "year") {
          days = this._days + milliseconds / 864e5;
          months = this._months + daysToMonths(days);
          switch (units) {
           case "month":
            return months;

           case "quarter":
            return months / 3;

           case "year":
            return months / 12;
          }
        } else {
          days = this._days + Math.round(monthsToDays(this._months));
          switch (units) {
           case "week":
            return days / 7 + milliseconds / 6048e5;

           case "day":
            return days + milliseconds / 864e5;

           case "hour":
            return days * 24 + milliseconds / 36e5;

           case "minute":
            return days * 1440 + milliseconds / 6e4;

           case "second":
            return days * 86400 + milliseconds / 1e3;

           case "millisecond":
            return Math.floor(days * 864e5) + milliseconds;

           default:
            throw new Error("Unknown unit " + units);
          }
        }
      }
      function valueOf$1() {
        if (!this.isValid()) {
          return NaN;
        }
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
      }
      function makeAs(alias) {
        return function() {
          return this.as(alias);
        };
      }
      var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
      function clone$1() {
        return createDuration(this);
      }
      function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + "s"]() : NaN;
      }
      function makeGetter(name) {
        return function() {
          return this.isValid() ? this._data[name] : NaN;
        };
      }
      var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
      function weeks() {
        return absFloor(this.days() / 7);
      }
      var round = Math.round, thresholds = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
      };
      function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
      }
      function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(), seconds = round(duration.as("s")), minutes = round(duration.as("m")), hours = round(duration.as("h")), days = round(duration.as("d")), months = round(duration.as("M")), weeks = round(duration.as("w")), years = round(duration.as("y")), a = seconds <= thresholds.ss && [ "s", seconds ] || seconds < thresholds.s && [ "ss", seconds ] || minutes <= 1 && [ "m" ] || minutes < thresholds.m && [ "mm", minutes ] || hours <= 1 && [ "h" ] || hours < thresholds.h && [ "hh", hours ] || days <= 1 && [ "d" ] || days < thresholds.d && [ "dd", days ];
        if (thresholds.w != null) {
          a = a || weeks <= 1 && [ "w" ] || weeks < thresholds.w && [ "ww", weeks ];
        }
        a = a || months <= 1 && [ "M" ] || months < thresholds.M && [ "MM", months ] || years <= 1 && [ "y" ] || [ "yy", years ];
        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
      }
      function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
          return round;
        }
        if (typeof roundingFunction === "function") {
          round = roundingFunction;
          return true;
        }
        return false;
      }
      function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
          return false;
        }
        if (limit === undefined) {
          return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === "s") {
          thresholds.ss = limit - 1;
        }
        return true;
      }
      function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var withSuffix = false, th = thresholds, locale, output;
        if (typeof argWithSuffix === "object") {
          argThresholds = argWithSuffix;
          argWithSuffix = false;
        }
        if (typeof argWithSuffix === "boolean") {
          withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === "object") {
          th = Object.assign({}, thresholds, argThresholds);
          if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
          }
        }
        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);
        if (withSuffix) {
          output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
      }
      var abs$1 = Math.abs;
      function sign(x) {
        return (x > 0) - (x < 0) || +x;
      }
      function toISOString$1() {
        if (!this.isValid()) {
          return this.localeData().invalidDate();
        }
        var seconds = abs$1(this._milliseconds) / 1e3, days = abs$1(this._days), months = abs$1(this._months), minutes, hours, years, s, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
        if (!total) {
          return "P0D";
        }
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;
        years = absFloor(months / 12);
        months %= 12;
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, "") : "";
        totalSign = total < 0 ? "-" : "";
        ymSign = sign(this._months) !== sign(total) ? "-" : "";
        daysSign = sign(this._days) !== sign(total) ? "-" : "";
        hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
        return totalSign + "P" + (years ? ymSign + years + "Y" : "") + (months ? ymSign + months + "M" : "") + (days ? daysSign + days + "D" : "") + (hours || minutes || seconds ? "T" : "") + (hours ? hmsSign + hours + "H" : "") + (minutes ? hmsSign + minutes + "M" : "") + (seconds ? hmsSign + s + "S" : "");
      }
      var proto$2 = Duration.prototype;
      proto$2.isValid = isValid$1;
      proto$2.abs = abs;
      proto$2.add = add$1;
      proto$2.subtract = subtract$1;
      proto$2.as = as;
      proto$2.asMilliseconds = asMilliseconds;
      proto$2.asSeconds = asSeconds;
      proto$2.asMinutes = asMinutes;
      proto$2.asHours = asHours;
      proto$2.asDays = asDays;
      proto$2.asWeeks = asWeeks;
      proto$2.asMonths = asMonths;
      proto$2.asQuarters = asQuarters;
      proto$2.asYears = asYears;
      proto$2.valueOf = valueOf$1;
      proto$2._bubble = bubble;
      proto$2.clone = clone$1;
      proto$2.get = get$2;
      proto$2.milliseconds = milliseconds;
      proto$2.seconds = seconds;
      proto$2.minutes = minutes;
      proto$2.hours = hours;
      proto$2.days = days;
      proto$2.weeks = weeks;
      proto$2.months = months;
      proto$2.years = years;
      proto$2.humanize = humanize;
      proto$2.toISOString = toISOString$1;
      proto$2.toString = toISOString$1;
      proto$2.toJSON = toISOString$1;
      proto$2.locale = locale;
      proto$2.localeData = localeData;
      proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
      proto$2.lang = lang;
      addFormatToken("X", 0, 0, "unix");
      addFormatToken("x", 0, 0, "valueOf");
      addRegexToken("x", matchSigned);
      addRegexToken("X", matchTimestamp);
      addParseToken("X", (function(input, array, config) {
        config._d = new Date(parseFloat(input) * 1e3);
      }));
      addParseToken("x", (function(input, array, config) {
        config._d = new Date(toInt(input));
      }));
      hooks.version = "2.29.1";
      setHookCallback(createLocal);
      hooks.fn = proto;
      hooks.min = min;
      hooks.max = max;
      hooks.now = now;
      hooks.utc = createUTC;
      hooks.unix = createUnix;
      hooks.months = listMonths;
      hooks.isDate = isDate;
      hooks.locale = getSetGlobalLocale;
      hooks.invalid = createInvalid;
      hooks.duration = createDuration;
      hooks.isMoment = isMoment;
      hooks.weekdays = listWeekdays;
      hooks.parseZone = createInZone;
      hooks.localeData = getLocale;
      hooks.isDuration = isDuration;
      hooks.monthsShort = listMonthsShort;
      hooks.weekdaysMin = listWeekdaysMin;
      hooks.defineLocale = defineLocale;
      hooks.updateLocale = updateLocale;
      hooks.locales = listLocales;
      hooks.weekdaysShort = listWeekdaysShort;
      hooks.normalizeUnits = normalizeUnits;
      hooks.relativeTimeRounding = getSetRelativeTimeRounding;
      hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
      hooks.calendarFormat = getCalendarFormat;
      hooks.prototype = proto;
      hooks.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
      };
      return hooks;
    }));
  })(moment);
  (function(module) {
    if (typeof commonjsRequire === "function") {
      var moment$1 = moment.exports;
    }
    moment$1.fn.isHoliday = function() {
      var locale = this.localeData();
      if (locale._holidays) {
        if (locale._holidays.indexOf(this.format(locale._holidayFormat)) >= 0) return true;
      }
      if (locale.holiday) {
        if (locale.holiday(this)) {
          return true;
        }
        return false;
      }
      return false;
    };
    moment$1.fn.isBusinessDay = function() {
      var locale = this.localeData();
      var defaultWorkingWeekdays = [ 1, 2, 3, 4, 5 ];
      var workingWeekdays = locale._workingWeekdays || defaultWorkingWeekdays;
      if (this.isHoliday()) return false;
      if (workingWeekdays.indexOf(this.day()) >= 0) return true;
      return false;
    };
    moment$1.fn.businessDaysIntoMonth = function() {
      if (!this.isValid()) {
        return NaN;
      }
      var businessDay = this.isBusinessDay() ? this : this.prevBusinessDay();
      var monthBusinessDays = businessDay.monthBusinessDays();
      var businessDaysIntoMonth;
      monthBusinessDays.map((function(day, index) {
        if (day.format("M/DD/YY") === businessDay.format("M/DD/YY")) {
          businessDaysIntoMonth = index + 1;
        }
      }));
      return businessDaysIntoMonth;
    };
    moment$1.fn.businessDiff = function(param, relative) {
      var d1 = this.clone();
      var d2 = param.clone();
      var positive = d1 >= d2;
      var start = d1 < d2 ? d1 : d2;
      var end = d2 > d1 ? d2 : d1;
      var daysBetween = 0;
      if (start.format("DD/MM/YYYY") === end.format("DD/MM/YYYY")) {
        return daysBetween;
      }
      while (start < end) {
        if (start.isBusinessDay()) {
          daysBetween++;
        }
        start.add(1, "d");
      }
      if (relative) {
        return positive ? daysBetween : -daysBetween;
      }
      return daysBetween;
    };
    moment$1.fn.businessAdd = function(number, period) {
      var day = this.clone();
      if (!day.isValid()) {
        return day;
      }
      if (number < 0) {
        number = Math.round(-1 * number) * -1;
      } else {
        number = Math.round(number);
      }
      var signal = number < 0 ? -1 : 1;
      period = typeof period !== "undefined" ? period : "days";
      var remaining = Math.abs(number);
      while (remaining > 0) {
        day.add(signal, period);
        if (day.isBusinessDay()) {
          remaining--;
        }
      }
      return day;
    };
    moment$1.fn.businessSubtract = function(number, period) {
      return this.businessAdd(-number, period);
    };
    moment$1.fn.nextBusinessDay = function() {
      var locale = this.localeData();
      var loop = 1;
      var defaultNextBusinessDayLimit = 7;
      var limit = locale._nextBusinessDayLimit || defaultNextBusinessDayLimit;
      while (loop < limit) {
        if (this.add(1, "d").isBusinessDay()) {
          break;
        }
        loop++;
      }
      return this;
    };
    moment$1.fn.prevBusinessDay = function() {
      var locale = this.localeData();
      var loop = 1;
      var defaultPrevBusinessDayLimit = 7;
      var limit = locale._prevBusinessDayLimit || defaultPrevBusinessDayLimit;
      while (loop < limit) {
        if (this.subtract(1, "d").isBusinessDay()) {
          break;
        }
        loop++;
      }
      return this;
    };
    moment$1.fn.monthBusinessDays = function(partialEndDate) {
      if (!this.isValid()) {
        return [];
      }
      var me = this.clone();
      var day = me.clone().startOf("month");
      var end = partialEndDate ? partialEndDate : me.clone().endOf("month");
      var daysArr = [];
      var done = false;
      while (!done) {
        if (day.isBusinessDay()) {
          daysArr.push(day.clone());
        }
        if (end.diff(day.add(1, "d")) < 0) {
          done = true;
        }
      }
      return daysArr;
    };
    moment$1.fn.monthNaturalDays = function(fromToday) {
      if (!this.isValid()) {
        return [];
      }
      var me = this.clone();
      var day = fromToday ? me.clone() : me.clone().startOf("month");
      var end = me.clone().endOf("month");
      var daysArr = [];
      var done = false;
      while (!done) {
        daysArr.push(day.clone());
        if (end.diff(day.add(1, "d")) < 0) {
          done = true;
        }
      }
      return daysArr;
    };
    moment$1.fn.monthBusinessWeeks = function(fromToday) {
      fromToday = fromToday || false;
      var me = this.clone();
      var startDate = fromToday ? me.clone() : me.clone().startOf("month");
      return getBusinessWeeks(this, fromToday, null, startDate);
    };
    moment$1.fn.businessWeeksBetween = function(endDate) {
      var me = this.clone();
      var startDate = me.clone();
      return getBusinessWeeks(this, false, endDate, startDate);
    };
    var getBusinessWeeks = function(self, fromToday, endDate, startDate) {
      if (!self.isValid()) {
        return [];
      }
      var me = self.clone();
      var day = startDate;
      var end = endDate ? moment$1(endDate).clone() : me.clone().endOf("month");
      var weeksArr = [];
      var daysArr = [];
      var done = false;
      while (!done) {
        if (day.day() >= 1 && day.day() < 6) {
          daysArr.push(day.clone());
        }
        if (day.day() === 5) {
          weeksArr.push(daysArr);
          daysArr = [];
        }
        if (end.diff(day.add(1, "d")) < 0) {
          if (daysArr.length < 5) {
            weeksArr.push(daysArr);
          }
          done = true;
        }
      }
      return weeksArr;
    };
    moment$1.fn.monthNaturalWeeks = function(fromToday) {
      if (!this.isValid()) {
        return [];
      }
      var me = this.clone();
      var day = fromToday ? me.clone() : me.clone().startOf("month");
      var end = me.clone().endOf("month");
      var weeksArr = [];
      var daysArr = [];
      var done = false;
      while (!done) {
        daysArr.push(day.clone());
        if (day.day() === 6) {
          weeksArr.push(daysArr);
          daysArr = [];
        }
        if (end.diff(day.add(1, "d")) < 0) {
          if (daysArr.length < 7) {
            weeksArr.push(daysArr);
          }
          done = true;
        }
      }
      return weeksArr;
    };
    if (module.exports) {
      module.exports = moment$1;
    }
  })(momentBusinessDays);
  (new Date).toISOString().slice(0, 10);
  (new Date).toLocaleString();
  async function showMessage(message) {
    let confirmButton = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "OK";
    let dialogTitle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    if (typeof CommandBar.prompt === "function") {
      await CommandBar.prompt(dialogTitle, message, [ confirmButton ]);
    } else {
      await CommandBar.showOptions([ confirmButton ], message);
    }
  }
  var showdown$1 = {
    exports: {}
  };
  (function(module) {
    (function() {
      function getDefaultOpts(simple) {
        var defaultOptions = {
          omitExtraWLInCodeBlocks: {
            defaultValue: false,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
          },
          noHeaderId: {
            defaultValue: false,
            describe: "Turn on/off generated header id",
            type: "boolean"
          },
          prefixHeaderId: {
            defaultValue: false,
            describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
            type: "string"
          },
          rawPrefixHeaderId: {
            defaultValue: false,
            describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
            type: "boolean"
          },
          ghCompatibleHeaderId: {
            defaultValue: false,
            describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
            type: "boolean"
          },
          rawHeaderId: {
            defaultValue: false,
            describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
            type: "boolean"
          },
          headerLevelStart: {
            defaultValue: false,
            describe: "The header blocks level start",
            type: "integer"
          },
          parseImgDimensions: {
            defaultValue: false,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
          },
          simplifiedAutoLink: {
            defaultValue: false,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
          },
          excludeTrailingPunctuationFromURLs: {
            defaultValue: false,
            describe: "Excludes trailing punctuation from links generated with autoLinking",
            type: "boolean"
          },
          literalMidWordUnderscores: {
            defaultValue: false,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
          },
          literalMidWordAsterisks: {
            defaultValue: false,
            describe: "Parse midword asterisks as literal asterisks",
            type: "boolean"
          },
          strikethrough: {
            defaultValue: false,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
          },
          tables: {
            defaultValue: false,
            describe: "Turn on/off tables support",
            type: "boolean"
          },
          tablesHeaderId: {
            defaultValue: false,
            describe: "Add an id to table headers",
            type: "boolean"
          },
          ghCodeBlocks: {
            defaultValue: true,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
          },
          tasklists: {
            defaultValue: false,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
          },
          smoothLivePreview: {
            defaultValue: false,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
          },
          smartIndentationFix: {
            defaultValue: false,
            description: "Tries to smartly fix indentation in es6 strings",
            type: "boolean"
          },
          disableForced4SpacesIndentedSublists: {
            defaultValue: false,
            description: "Disables the requirement of indenting nested sublists by 4 spaces",
            type: "boolean"
          },
          simpleLineBreaks: {
            defaultValue: false,
            description: "Parses simple line breaks as <br> (GFM Style)",
            type: "boolean"
          },
          requireSpaceBeforeHeadingText: {
            defaultValue: false,
            description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
            type: "boolean"
          },
          ghMentions: {
            defaultValue: false,
            description: "Enables github @mentions",
            type: "boolean"
          },
          ghMentionsLink: {
            defaultValue: "https://github.com/{u}",
            description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
            type: "string"
          },
          encodeEmails: {
            defaultValue: true,
            description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
            type: "boolean"
          },
          openLinksInNewWindow: {
            defaultValue: false,
            description: "Open all links in new windows",
            type: "boolean"
          },
          backslashEscapesHTMLTags: {
            defaultValue: false,
            description: "Support for HTML Tag escaping. ex: <div>foo</div>",
            type: "boolean"
          },
          emoji: {
            defaultValue: false,
            description: "Enable emoji support. Ex: `this is a :smile: emoji`",
            type: "boolean"
          },
          underline: {
            defaultValue: false,
            description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
            type: "boolean"
          },
          completeHTMLDocument: {
            defaultValue: false,
            description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
            type: "boolean"
          },
          metadata: {
            defaultValue: false,
            description: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
            type: "boolean"
          },
          splitAdjacentBlockquotes: {
            defaultValue: false,
            description: "Split adjacent blockquote blocks",
            type: "boolean"
          }
        };
        if (simple === false) {
          return JSON.parse(JSON.stringify(defaultOptions));
        }
        var ret = {};
        for (var opt in defaultOptions) {
          if (defaultOptions.hasOwnProperty(opt)) {
            ret[opt] = defaultOptions[opt].defaultValue;
          }
        }
        return ret;
      }
      function allOptionsOn() {
        var options = getDefaultOpts(true), ret = {};
        for (var opt in options) {
          if (options.hasOwnProperty(opt)) {
            ret[opt] = true;
          }
        }
        return ret;
      }
      var showdown = {}, parsers = {}, extensions = {}, globalOptions = getDefaultOpts(true), setFlavor = "vanilla", flavor = {
        github: {
          omitExtraWLInCodeBlocks: true,
          simplifiedAutoLink: true,
          excludeTrailingPunctuationFromURLs: true,
          literalMidWordUnderscores: true,
          strikethrough: true,
          tables: true,
          tablesHeaderId: true,
          ghCodeBlocks: true,
          tasklists: true,
          disableForced4SpacesIndentedSublists: true,
          simpleLineBreaks: true,
          requireSpaceBeforeHeadingText: true,
          ghCompatibleHeaderId: true,
          ghMentions: true,
          backslashEscapesHTMLTags: true,
          emoji: true,
          splitAdjacentBlockquotes: true
        },
        original: {
          noHeaderId: true,
          ghCodeBlocks: false
        },
        ghost: {
          omitExtraWLInCodeBlocks: true,
          parseImgDimensions: true,
          simplifiedAutoLink: true,
          excludeTrailingPunctuationFromURLs: true,
          literalMidWordUnderscores: true,
          strikethrough: true,
          tables: true,
          tablesHeaderId: true,
          ghCodeBlocks: true,
          tasklists: true,
          smoothLivePreview: true,
          simpleLineBreaks: true,
          requireSpaceBeforeHeadingText: true,
          ghMentions: false,
          encodeEmails: true
        },
        vanilla: getDefaultOpts(true),
        allOn: allOptionsOn()
      };
      showdown.helper = {};
      showdown.extensions = {};
      showdown.setOption = function(key, value) {
        globalOptions[key] = value;
        return this;
      };
      showdown.getOption = function(key) {
        return globalOptions[key];
      };
      showdown.getOptions = function() {
        return globalOptions;
      };
      showdown.resetOptions = function() {
        globalOptions = getDefaultOpts(true);
      };
      showdown.setFlavor = function(name) {
        if (!flavor.hasOwnProperty(name)) {
          throw Error(name + " flavor was not found");
        }
        showdown.resetOptions();
        var preset = flavor[name];
        setFlavor = name;
        for (var option in preset) {
          if (preset.hasOwnProperty(option)) {
            globalOptions[option] = preset[option];
          }
        }
      };
      showdown.getFlavor = function() {
        return setFlavor;
      };
      showdown.getFlavorOptions = function(name) {
        if (flavor.hasOwnProperty(name)) {
          return flavor[name];
        }
      };
      showdown.getDefaultOptions = function(simple) {
        return getDefaultOpts(simple);
      };
      showdown.subParser = function(name, func) {
        if (showdown.helper.isString(name)) {
          if (typeof func !== "undefined") {
            parsers[name] = func;
          } else {
            if (parsers.hasOwnProperty(name)) {
              return parsers[name];
            } else {
              throw Error("SubParser named " + name + " not registered!");
            }
          }
        }
      };
      showdown.extension = function(name, ext) {
        if (!showdown.helper.isString(name)) {
          throw Error("Extension 'name' must be a string");
        }
        name = showdown.helper.stdExtName(name);
        if (showdown.helper.isUndefined(ext)) {
          if (!extensions.hasOwnProperty(name)) {
            throw Error("Extension named " + name + " is not registered!");
          }
          return extensions[name];
        } else {
          if (typeof ext === "function") {
            ext = ext();
          }
          if (!showdown.helper.isArray(ext)) {
            ext = [ ext ];
          }
          var validExtension = validate(ext, name);
          if (validExtension.valid) {
            extensions[name] = ext;
          } else {
            throw Error(validExtension.error);
          }
        }
      };
      showdown.getAllExtensions = function() {
        return extensions;
      };
      showdown.removeExtension = function(name) {
        delete extensions[name];
      };
      showdown.resetExtensions = function() {
        extensions = {};
      };
      function validate(extension, name) {
        var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension", ret = {
          valid: true,
          error: ""
        };
        if (!showdown.helper.isArray(extension)) {
          extension = [ extension ];
        }
        for (var i = 0; i < extension.length; ++i) {
          var baseMsg = errMsg + " sub-extension " + i + ": ", ext = extension[i];
          if (typeof ext !== "object") {
            ret.valid = false;
            ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
            return ret;
          }
          if (!showdown.helper.isString(ext.type)) {
            ret.valid = false;
            ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
            return ret;
          }
          var type = ext.type = ext.type.toLowerCase();
          if (type === "language") {
            type = ext.type = "lang";
          }
          if (type === "html") {
            type = ext.type = "output";
          }
          if (type !== "lang" && type !== "output" && type !== "listener") {
            ret.valid = false;
            ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
            return ret;
          }
          if (type === "listener") {
            if (showdown.helper.isUndefined(ext.listeners)) {
              ret.valid = false;
              ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
              return ret;
            }
          } else {
            if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
              ret.valid = false;
              ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
              return ret;
            }
          }
          if (ext.listeners) {
            if (typeof ext.listeners !== "object") {
              ret.valid = false;
              ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
              return ret;
            }
            for (var ln in ext.listeners) {
              if (ext.listeners.hasOwnProperty(ln)) {
                if (typeof ext.listeners[ln] !== "function") {
                  ret.valid = false;
                  ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + " must be a function but " + typeof ext.listeners[ln] + " given";
                  return ret;
                }
              }
            }
          }
          if (ext.filter) {
            if (typeof ext.filter !== "function") {
              ret.valid = false;
              ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
              return ret;
            }
          } else if (ext.regex) {
            if (showdown.helper.isString(ext.regex)) {
              ext.regex = new RegExp(ext.regex, "g");
            }
            if (!(ext.regex instanceof RegExp)) {
              ret.valid = false;
              ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
              return ret;
            }
            if (showdown.helper.isUndefined(ext.replace)) {
              ret.valid = false;
              ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
              return ret;
            }
          }
        }
        return ret;
      }
      showdown.validateExtension = function(ext) {
        var validateExtension = validate(ext, null);
        if (!validateExtension.valid) {
          console.warn(validateExtension.error);
          return false;
        }
        return true;
      };
      if (!showdown.hasOwnProperty("helper")) {
        showdown.helper = {};
      }
      showdown.helper.isString = function(a) {
        return typeof a === "string" || a instanceof String;
      };
      showdown.helper.isFunction = function(a) {
        var getType = {};
        return a && getType.toString.call(a) === "[object Function]";
      };
      showdown.helper.isArray = function(a) {
        return Array.isArray(a);
      };
      showdown.helper.isUndefined = function(value) {
        return typeof value === "undefined";
      };
      showdown.helper.forEach = function(obj, callback) {
        if (showdown.helper.isUndefined(obj)) {
          throw new Error("obj param is required");
        }
        if (showdown.helper.isUndefined(callback)) {
          throw new Error("callback param is required");
        }
        if (!showdown.helper.isFunction(callback)) {
          throw new Error("callback param must be a function/closure");
        }
        if (typeof obj.forEach === "function") {
          obj.forEach(callback);
        } else if (showdown.helper.isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i, obj);
          }
        } else if (typeof obj === "object") {
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              callback(obj[prop], prop, obj);
            }
          }
        } else {
          throw new Error("obj does not seem to be an array or an iterable object");
        }
      };
      showdown.helper.stdExtName = function(s) {
        return s.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function escapeCharactersCallback(wholeMatch, m1) {
        var charCodeToEscape = m1.charCodeAt(0);
        return "¨E" + charCodeToEscape + "E";
      }
      showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
      showdown.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
        var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
        if (afterBackslash) {
          regexString = "\\\\" + regexString;
        }
        var regex = new RegExp(regexString, "g");
        text = text.replace(regex, escapeCharactersCallback);
        return text;
      };
      showdown.helper.unescapeHTMLEntities = function(txt) {
        return txt.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var rgxFindMatchPos = function(str, left, right, flags) {
        var f = flags || "", g = f.indexOf("g") > -1, x = new RegExp(left + "|" + right, "g" + f.replace(/g/g, "")), l = new RegExp(left, f.replace(/g/g, "")), pos = [], t, s, m, start, end;
        do {
          t = 0;
          while (m = x.exec(str)) {
            if (l.test(m[0])) {
              if (!t++) {
                s = x.lastIndex;
                start = s - m[0].length;
              }
            } else if (t) {
              if (!--t) {
                end = m.index + m[0].length;
                var obj = {
                  left: {
                    start: start,
                    end: s
                  },
                  match: {
                    start: s,
                    end: m.index
                  },
                  right: {
                    start: m.index,
                    end: end
                  },
                  wholeMatch: {
                    start: start,
                    end: end
                  }
                };
                pos.push(obj);
                if (!g) {
                  return pos;
                }
              }
            }
          }
        } while (t && (x.lastIndex = s));
        return pos;
      };
      showdown.helper.matchRecursiveRegExp = function(str, left, right, flags) {
        var matchPos = rgxFindMatchPos(str, left, right, flags), results = [];
        for (var i = 0; i < matchPos.length; ++i) {
          results.push([ str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end) ]);
        }
        return results;
      };
      showdown.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
        if (!showdown.helper.isFunction(replacement)) {
          var repStr = replacement;
          replacement = function() {
            return repStr;
          };
        }
        var matchPos = rgxFindMatchPos(str, left, right, flags), finalStr = str, lng = matchPos.length;
        if (lng > 0) {
          var bits = [];
          if (matchPos[0].wholeMatch.start !== 0) {
            bits.push(str.slice(0, matchPos[0].wholeMatch.start));
          }
          for (var i = 0; i < lng; ++i) {
            bits.push(replacement(str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end), str.slice(matchPos[i].match.start, matchPos[i].match.end), str.slice(matchPos[i].left.start, matchPos[i].left.end), str.slice(matchPos[i].right.start, matchPos[i].right.end)));
            if (i < lng - 1) {
              bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
            }
          }
          if (matchPos[lng - 1].wholeMatch.end < str.length) {
            bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
          }
          finalStr = bits.join("");
        }
        return finalStr;
      };
      showdown.helper.regexIndexOf = function(str, regex, fromIndex) {
        if (!showdown.helper.isString(str)) {
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        }
        if (regex instanceof RegExp === false) {
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        }
        var indexOf = str.substring(fromIndex || 0).search(regex);
        return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
      };
      showdown.helper.splitAtIndex = function(str, index) {
        if (!showdown.helper.isString(str)) {
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        }
        return [ str.substring(0, index), str.substring(index) ];
      };
      showdown.helper.encodeEmailAddress = function(mail) {
        var encode = [ function(ch) {
          return "&#" + ch.charCodeAt(0) + ";";
        }, function(ch) {
          return "&#x" + ch.charCodeAt(0).toString(16) + ";";
        }, function(ch) {
          return ch;
        } ];
        mail = mail.replace(/./g, (function(ch) {
          if (ch === "@") {
            ch = encode[Math.floor(Math.random() * 2)](ch);
          } else {
            var r = Math.random();
            ch = r > .9 ? encode[2](ch) : r > .45 ? encode[1](ch) : encode[0](ch);
          }
          return ch;
        }));
        return mail;
      };
      showdown.helper.padEnd = function padEnd(str, targetLength, padString) {
        targetLength = targetLength >> 0;
        padString = String(padString || " ");
        if (str.length > targetLength) {
          return String(str);
        } else {
          targetLength = targetLength - str.length;
          if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length);
          }
          return String(str) + padString.slice(0, targetLength);
        }
      };
      if (typeof console === "undefined") {
        console = {
          warn: function(msg) {
            alert(msg);
          },
          log: function(msg) {
            alert(msg);
          },
          error: function(msg) {
            throw msg;
          }
        };
      }
      showdown.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      };
      showdown.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        100: "💯",
        1234: "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        a: "🅰️",
        ab: "🆎",
        abc: "🔤",
        abcd: "🔡",
        accept: "🉑",
        aerial_tramway: "🚡",
        airplane: "✈️",
        alarm_clock: "⏰",
        alembic: "⚗️",
        alien: "👽",
        ambulance: "🚑",
        amphora: "🏺",
        anchor: "⚓️",
        angel: "👼",
        anger: "💢",
        angry: "😠",
        anguished: "😧",
        ant: "🐜",
        apple: "🍎",
        aquarius: "♒️",
        aries: "♈️",
        arrow_backward: "◀️",
        arrow_double_down: "⏬",
        arrow_double_up: "⏫",
        arrow_down: "⬇️",
        arrow_down_small: "🔽",
        arrow_forward: "▶️",
        arrow_heading_down: "⤵️",
        arrow_heading_up: "⤴️",
        arrow_left: "⬅️",
        arrow_lower_left: "↙️",
        arrow_lower_right: "↘️",
        arrow_right: "➡️",
        arrow_right_hook: "↪️",
        arrow_up: "⬆️",
        arrow_up_down: "↕️",
        arrow_up_small: "🔼",
        arrow_upper_left: "↖️",
        arrow_upper_right: "↗️",
        arrows_clockwise: "🔃",
        arrows_counterclockwise: "🔄",
        art: "🎨",
        articulated_lorry: "🚛",
        artificial_satellite: "🛰",
        astonished: "😲",
        athletic_shoe: "👟",
        atm: "🏧",
        atom_symbol: "⚛️",
        avocado: "🥑",
        b: "🅱️",
        baby: "👶",
        baby_bottle: "🍼",
        baby_chick: "🐤",
        baby_symbol: "🚼",
        back: "🔙",
        bacon: "🥓",
        badminton: "🏸",
        baggage_claim: "🛄",
        baguette_bread: "🥖",
        balance_scale: "⚖️",
        balloon: "🎈",
        ballot_box: "🗳",
        ballot_box_with_check: "☑️",
        bamboo: "🎍",
        banana: "🍌",
        bangbang: "‼️",
        bank: "🏦",
        bar_chart: "📊",
        barber: "💈",
        baseball: "⚾️",
        basketball: "🏀",
        basketball_man: "⛹️",
        basketball_woman: "⛹️&zwj;♀️",
        bat: "🦇",
        bath: "🛀",
        bathtub: "🛁",
        battery: "🔋",
        beach_umbrella: "🏖",
        bear: "🐻",
        bed: "🛏",
        bee: "🐝",
        beer: "🍺",
        beers: "🍻",
        beetle: "🐞",
        beginner: "🔰",
        bell: "🔔",
        bellhop_bell: "🛎",
        bento: "🍱",
        biking_man: "🚴",
        bike: "🚲",
        biking_woman: "🚴&zwj;♀️",
        bikini: "👙",
        biohazard: "☣️",
        bird: "🐦",
        birthday: "🎂",
        black_circle: "⚫️",
        black_flag: "🏴",
        black_heart: "🖤",
        black_joker: "🃏",
        black_large_square: "⬛️",
        black_medium_small_square: "◾️",
        black_medium_square: "◼️",
        black_nib: "✒️",
        black_small_square: "▪️",
        black_square_button: "🔲",
        blonde_man: "👱",
        blonde_woman: "👱&zwj;♀️",
        blossom: "🌼",
        blowfish: "🐡",
        blue_book: "📘",
        blue_car: "🚙",
        blue_heart: "💙",
        blush: "😊",
        boar: "🐗",
        boat: "⛵️",
        bomb: "💣",
        book: "📖",
        bookmark: "🔖",
        bookmark_tabs: "📑",
        books: "📚",
        boom: "💥",
        boot: "👢",
        bouquet: "💐",
        bowing_man: "🙇",
        bow_and_arrow: "🏹",
        bowing_woman: "🙇&zwj;♀️",
        bowling: "🎳",
        boxing_glove: "🥊",
        boy: "👦",
        bread: "🍞",
        bride_with_veil: "👰",
        bridge_at_night: "🌉",
        briefcase: "💼",
        broken_heart: "💔",
        bug: "🐛",
        building_construction: "🏗",
        bulb: "💡",
        bullettrain_front: "🚅",
        bullettrain_side: "🚄",
        burrito: "🌯",
        bus: "🚌",
        business_suit_levitating: "🕴",
        busstop: "🚏",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        butterfly: "🦋",
        cactus: "🌵",
        cake: "🍰",
        calendar: "📆",
        call_me_hand: "🤙",
        calling: "📲",
        camel: "🐫",
        camera: "📷",
        camera_flash: "📸",
        camping: "🏕",
        cancer: "♋️",
        candle: "🕯",
        candy: "🍬",
        canoe: "🛶",
        capital_abcd: "🔠",
        capricorn: "♑️",
        car: "🚗",
        card_file_box: "🗃",
        card_index: "📇",
        card_index_dividers: "🗂",
        carousel_horse: "🎠",
        carrot: "🥕",
        cat: "🐱",
        cat2: "🐈",
        cd: "💿",
        chains: "⛓",
        champagne: "🍾",
        chart: "💹",
        chart_with_downwards_trend: "📉",
        chart_with_upwards_trend: "📈",
        checkered_flag: "🏁",
        cheese: "🧀",
        cherries: "🍒",
        cherry_blossom: "🌸",
        chestnut: "🌰",
        chicken: "🐔",
        children_crossing: "🚸",
        chipmunk: "🐿",
        chocolate_bar: "🍫",
        christmas_tree: "🎄",
        church: "⛪️",
        cinema: "🎦",
        circus_tent: "🎪",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        cl: "🆑",
        clamp: "🗜",
        clap: "👏",
        clapper: "🎬",
        classical_building: "🏛",
        clinking_glasses: "🥂",
        clipboard: "📋",
        clock1: "🕐",
        clock10: "🕙",
        clock1030: "🕥",
        clock11: "🕚",
        clock1130: "🕦",
        clock12: "🕛",
        clock1230: "🕧",
        clock130: "🕜",
        clock2: "🕑",
        clock230: "🕝",
        clock3: "🕒",
        clock330: "🕞",
        clock4: "🕓",
        clock430: "🕟",
        clock5: "🕔",
        clock530: "🕠",
        clock6: "🕕",
        clock630: "🕡",
        clock7: "🕖",
        clock730: "🕢",
        clock8: "🕗",
        clock830: "🕣",
        clock9: "🕘",
        clock930: "🕤",
        closed_book: "📕",
        closed_lock_with_key: "🔐",
        closed_umbrella: "🌂",
        cloud: "☁️",
        cloud_with_lightning: "🌩",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_rain: "🌧",
        cloud_with_snow: "🌨",
        clown_face: "🤡",
        clubs: "♣️",
        cocktail: "🍸",
        coffee: "☕️",
        coffin: "⚰️",
        cold_sweat: "😰",
        comet: "☄️",
        computer: "💻",
        computer_mouse: "🖱",
        confetti_ball: "🎊",
        confounded: "😖",
        confused: "😕",
        congratulations: "㊗️",
        construction: "🚧",
        construction_worker_man: "👷",
        construction_worker_woman: "👷&zwj;♀️",
        control_knobs: "🎛",
        convenience_store: "🏪",
        cookie: "🍪",
        cool: "🆒",
        policeman: "👮",
        copyright: "©️",
        corn: "🌽",
        couch_and_lamp: "🛋",
        couple: "👫",
        couple_with_heart_woman_man: "💑",
        couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
        couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
        couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
        cow: "🐮",
        cow2: "🐄",
        cowboy_hat_face: "🤠",
        crab: "🦀",
        crayon: "🖍",
        credit_card: "💳",
        crescent_moon: "🌙",
        cricket: "🏏",
        crocodile: "🐊",
        croissant: "🥐",
        crossed_fingers: "🤞",
        crossed_flags: "🎌",
        crossed_swords: "⚔️",
        crown: "👑",
        cry: "😢",
        crying_cat_face: "😿",
        crystal_ball: "🔮",
        cucumber: "🥒",
        cupid: "💘",
        curly_loop: "➰",
        currency_exchange: "💱",
        curry: "🍛",
        custard: "🍮",
        customs: "🛃",
        cyclone: "🌀",
        dagger: "🗡",
        dancer: "💃",
        dancing_women: "👯",
        dancing_men: "👯&zwj;♂️",
        dango: "🍡",
        dark_sunglasses: "🕶",
        dart: "🎯",
        dash: "💨",
        date: "📅",
        deciduous_tree: "🌳",
        deer: "🦌",
        department_store: "🏬",
        derelict_house: "🏚",
        desert: "🏜",
        desert_island: "🏝",
        desktop_computer: "🖥",
        male_detective: "🕵️",
        diamond_shape_with_a_dot_inside: "💠",
        diamonds: "♦️",
        disappointed: "😞",
        disappointed_relieved: "😥",
        dizzy: "💫",
        dizzy_face: "😵",
        do_not_litter: "🚯",
        dog: "🐶",
        dog2: "🐕",
        dollar: "💵",
        dolls: "🎎",
        dolphin: "🐬",
        door: "🚪",
        doughnut: "🍩",
        dove: "🕊",
        dragon: "🐉",
        dragon_face: "🐲",
        dress: "👗",
        dromedary_camel: "🐪",
        drooling_face: "🤤",
        droplet: "💧",
        drum: "🥁",
        duck: "🦆",
        dvd: "📀",
        "e-mail": "📧",
        eagle: "🦅",
        ear: "👂",
        ear_of_rice: "🌾",
        earth_africa: "🌍",
        earth_americas: "🌎",
        earth_asia: "🌏",
        egg: "🥚",
        eggplant: "🍆",
        eight_pointed_black_star: "✴️",
        eight_spoked_asterisk: "✳️",
        electric_plug: "🔌",
        elephant: "🐘",
        email: "✉️",
        end: "🔚",
        envelope_with_arrow: "📩",
        euro: "💶",
        european_castle: "🏰",
        european_post_office: "🏤",
        evergreen_tree: "🌲",
        exclamation: "❗️",
        expressionless: "😑",
        eye: "👁",
        eye_speech_bubble: "👁&zwj;🗨",
        eyeglasses: "👓",
        eyes: "👀",
        face_with_head_bandage: "🤕",
        face_with_thermometer: "🤒",
        fist_oncoming: "👊",
        factory: "🏭",
        fallen_leaf: "🍂",
        family_man_woman_boy: "👪",
        family_man_boy: "👨&zwj;👦",
        family_man_boy_boy: "👨&zwj;👦&zwj;👦",
        family_man_girl: "👨&zwj;👧",
        family_man_girl_boy: "👨&zwj;👧&zwj;👦",
        family_man_girl_girl: "👨&zwj;👧&zwj;👧",
        family_man_man_boy: "👨&zwj;👨&zwj;👦",
        family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
        family_man_man_girl: "👨&zwj;👨&zwj;👧",
        family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
        family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
        family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
        family_man_woman_girl: "👨&zwj;👩&zwj;👧",
        family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
        family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
        family_woman_boy: "👩&zwj;👦",
        family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
        family_woman_girl: "👩&zwj;👧",
        family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
        family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
        family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
        family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
        family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
        family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
        family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
        fast_forward: "⏩",
        fax: "📠",
        fearful: "😨",
        feet: "🐾",
        female_detective: "🕵️&zwj;♀️",
        ferris_wheel: "🎡",
        ferry: "⛴",
        field_hockey: "🏑",
        file_cabinet: "🗄",
        file_folder: "📁",
        film_projector: "📽",
        film_strip: "🎞",
        fire: "🔥",
        fire_engine: "🚒",
        fireworks: "🎆",
        first_quarter_moon: "🌓",
        first_quarter_moon_with_face: "🌛",
        fish: "🐟",
        fish_cake: "🍥",
        fishing_pole_and_fish: "🎣",
        fist_raised: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        flags: "🎏",
        flashlight: "🔦",
        fleur_de_lis: "⚜️",
        flight_arrival: "🛬",
        flight_departure: "🛫",
        floppy_disk: "💾",
        flower_playing_cards: "🎴",
        flushed: "😳",
        fog: "🌫",
        foggy: "🌁",
        football: "🏈",
        footprints: "👣",
        fork_and_knife: "🍴",
        fountain: "⛲️",
        fountain_pen: "🖋",
        four_leaf_clover: "🍀",
        fox_face: "🦊",
        framed_picture: "🖼",
        free: "🆓",
        fried_egg: "🍳",
        fried_shrimp: "🍤",
        fries: "🍟",
        frog: "🐸",
        frowning: "😦",
        frowning_face: "☹️",
        frowning_man: "🙍&zwj;♂️",
        frowning_woman: "🙍",
        middle_finger: "🖕",
        fuelpump: "⛽️",
        full_moon: "🌕",
        full_moon_with_face: "🌝",
        funeral_urn: "⚱️",
        game_die: "🎲",
        gear: "⚙️",
        gem: "💎",
        gemini: "♊️",
        ghost: "👻",
        gift: "🎁",
        gift_heart: "💝",
        girl: "👧",
        globe_with_meridians: "🌐",
        goal_net: "🥅",
        goat: "🐐",
        golf: "⛳️",
        golfing_man: "🏌️",
        golfing_woman: "🏌️&zwj;♀️",
        gorilla: "🦍",
        grapes: "🍇",
        green_apple: "🍏",
        green_book: "📗",
        green_heart: "💚",
        green_salad: "🥗",
        grey_exclamation: "❕",
        grey_question: "❔",
        grimacing: "😬",
        grin: "😁",
        grinning: "😀",
        guardsman: "💂",
        guardswoman: "💂&zwj;♀️",
        guitar: "🎸",
        gun: "🔫",
        haircut_woman: "💇",
        haircut_man: "💇&zwj;♂️",
        hamburger: "🍔",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        hamster: "🐹",
        hand: "✋",
        handbag: "👜",
        handshake: "🤝",
        hankey: "💩",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        headphones: "🎧",
        hear_no_evil: "🙉",
        heart: "❤️",
        heart_decoration: "💟",
        heart_eyes: "😍",
        heart_eyes_cat: "😻",
        heartbeat: "💓",
        heartpulse: "💗",
        hearts: "♥️",
        heavy_check_mark: "✔️",
        heavy_division_sign: "➗",
        heavy_dollar_sign: "💲",
        heavy_heart_exclamation: "❣️",
        heavy_minus_sign: "➖",
        heavy_multiplication_x: "✖️",
        heavy_plus_sign: "➕",
        helicopter: "🚁",
        herb: "🌿",
        hibiscus: "🌺",
        high_brightness: "🔆",
        high_heel: "👠",
        hocho: "🔪",
        hole: "🕳",
        honey_pot: "🍯",
        horse: "🐴",
        horse_racing: "🏇",
        hospital: "🏥",
        hot_pepper: "🌶",
        hotdog: "🌭",
        hotel: "🏨",
        hotsprings: "♨️",
        hourglass: "⌛️",
        hourglass_flowing_sand: "⏳",
        house: "🏠",
        house_with_garden: "🏡",
        houses: "🏘",
        hugs: "🤗",
        hushed: "😯",
        ice_cream: "🍨",
        ice_hockey: "🏒",
        ice_skate: "⛸",
        icecream: "🍦",
        id: "🆔",
        ideograph_advantage: "🉐",
        imp: "👿",
        inbox_tray: "📥",
        incoming_envelope: "📨",
        tipping_hand_woman: "💁",
        information_source: "ℹ️",
        innocent: "😇",
        interrobang: "⁉️",
        iphone: "📱",
        izakaya_lantern: "🏮",
        jack_o_lantern: "🎃",
        japan: "🗾",
        japanese_castle: "🏯",
        japanese_goblin: "👺",
        japanese_ogre: "👹",
        jeans: "👖",
        joy: "😂",
        joy_cat: "😹",
        joystick: "🕹",
        kaaba: "🕋",
        key: "🔑",
        keyboard: "⌨️",
        keycap_ten: "🔟",
        kick_scooter: "🛴",
        kimono: "👘",
        kiss: "💋",
        kissing: "😗",
        kissing_cat: "😽",
        kissing_closed_eyes: "😚",
        kissing_heart: "😘",
        kissing_smiling_eyes: "😙",
        kiwi_fruit: "🥝",
        koala: "🐨",
        koko: "🈁",
        label: "🏷",
        large_blue_circle: "🔵",
        large_blue_diamond: "🔷",
        large_orange_diamond: "🔶",
        last_quarter_moon: "🌗",
        last_quarter_moon_with_face: "🌜",
        latin_cross: "✝️",
        laughing: "😆",
        leaves: "🍃",
        ledger: "📒",
        left_luggage: "🛅",
        left_right_arrow: "↔️",
        leftwards_arrow_with_hook: "↩️",
        lemon: "🍋",
        leo: "♌️",
        leopard: "🐆",
        level_slider: "🎚",
        libra: "♎️",
        light_rail: "🚈",
        link: "🔗",
        lion: "🦁",
        lips: "👄",
        lipstick: "💄",
        lizard: "🦎",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        lollipop: "🍭",
        loop: "➿",
        loud_sound: "🔊",
        loudspeaker: "📢",
        love_hotel: "🏩",
        love_letter: "💌",
        low_brightness: "🔅",
        lying_face: "🤥",
        m: "Ⓜ️",
        mag: "🔍",
        mag_right: "🔎",
        mahjong: "🀄️",
        mailbox: "📫",
        mailbox_closed: "📪",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        man: "👨",
        man_artist: "👨&zwj;🎨",
        man_astronaut: "👨&zwj;🚀",
        man_cartwheeling: "🤸&zwj;♂️",
        man_cook: "👨&zwj;🍳",
        man_dancing: "🕺",
        man_facepalming: "🤦&zwj;♂️",
        man_factory_worker: "👨&zwj;🏭",
        man_farmer: "👨&zwj;🌾",
        man_firefighter: "👨&zwj;🚒",
        man_health_worker: "👨&zwj;⚕️",
        man_in_tuxedo: "🤵",
        man_judge: "👨&zwj;⚖️",
        man_juggling: "🤹&zwj;♂️",
        man_mechanic: "👨&zwj;🔧",
        man_office_worker: "👨&zwj;💼",
        man_pilot: "👨&zwj;✈️",
        man_playing_handball: "🤾&zwj;♂️",
        man_playing_water_polo: "🤽&zwj;♂️",
        man_scientist: "👨&zwj;🔬",
        man_shrugging: "🤷&zwj;♂️",
        man_singer: "👨&zwj;🎤",
        man_student: "👨&zwj;🎓",
        man_teacher: "👨&zwj;🏫",
        man_technologist: "👨&zwj;💻",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        tangerine: "🍊",
        mans_shoe: "👞",
        mantelpiece_clock: "🕰",
        maple_leaf: "🍁",
        martial_arts_uniform: "🥋",
        mask: "😷",
        massage_woman: "💆",
        massage_man: "💆&zwj;♂️",
        meat_on_bone: "🍖",
        medal_military: "🎖",
        medal_sports: "🏅",
        mega: "📣",
        melon: "🍈",
        memo: "📝",
        men_wrestling: "🤼&zwj;♂️",
        menorah: "🕎",
        mens: "🚹",
        metal: "🤘",
        metro: "🚇",
        microphone: "🎤",
        microscope: "🔬",
        milk_glass: "🥛",
        milky_way: "🌌",
        minibus: "🚐",
        minidisc: "💽",
        mobile_phone_off: "📴",
        money_mouth_face: "🤑",
        money_with_wings: "💸",
        moneybag: "💰",
        monkey: "🐒",
        monkey_face: "🐵",
        monorail: "🚝",
        moon: "🌔",
        mortar_board: "🎓",
        mosque: "🕌",
        motor_boat: "🛥",
        motor_scooter: "🛵",
        motorcycle: "🏍",
        motorway: "🛣",
        mount_fuji: "🗻",
        mountain: "⛰",
        mountain_biking_man: "🚵",
        mountain_biking_woman: "🚵&zwj;♀️",
        mountain_cableway: "🚠",
        mountain_railway: "🚞",
        mountain_snow: "🏔",
        mouse: "🐭",
        mouse2: "🐁",
        movie_camera: "🎥",
        moyai: "🗿",
        mrs_claus: "🤶",
        muscle: "💪",
        mushroom: "🍄",
        musical_keyboard: "🎹",
        musical_note: "🎵",
        musical_score: "🎼",
        mute: "🔇",
        nail_care: "💅",
        name_badge: "📛",
        national_park: "🏞",
        nauseated_face: "🤢",
        necktie: "👔",
        negative_squared_cross_mark: "❎",
        nerd_face: "🤓",
        neutral_face: "😐",
        new: "🆕",
        new_moon: "🌑",
        new_moon_with_face: "🌚",
        newspaper: "📰",
        newspaper_roll: "🗞",
        next_track_button: "⏭",
        ng: "🆖",
        no_good_man: "🙅&zwj;♂️",
        no_good_woman: "🙅",
        night_with_stars: "🌃",
        no_bell: "🔕",
        no_bicycles: "🚳",
        no_entry: "⛔️",
        no_entry_sign: "🚫",
        no_mobile_phones: "📵",
        no_mouth: "😶",
        no_pedestrians: "🚷",
        no_smoking: "🚭",
        "non-potable_water": "🚱",
        nose: "👃",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        notes: "🎶",
        nut_and_bolt: "🔩",
        o: "⭕️",
        o2: "🅾️",
        ocean: "🌊",
        octopus: "🐙",
        oden: "🍢",
        office: "🏢",
        oil_drum: "🛢",
        ok: "🆗",
        ok_hand: "👌",
        ok_man: "🙆&zwj;♂️",
        ok_woman: "🙆",
        old_key: "🗝",
        older_man: "👴",
        older_woman: "👵",
        om: "🕉",
        on: "🔛",
        oncoming_automobile: "🚘",
        oncoming_bus: "🚍",
        oncoming_police_car: "🚔",
        oncoming_taxi: "🚖",
        open_file_folder: "📂",
        open_hands: "👐",
        open_mouth: "😮",
        open_umbrella: "☂️",
        ophiuchus: "⛎",
        orange_book: "📙",
        orthodox_cross: "☦️",
        outbox_tray: "📤",
        owl: "🦉",
        ox: "🐂",
        package: "📦",
        page_facing_up: "📄",
        page_with_curl: "📃",
        pager: "📟",
        paintbrush: "🖌",
        palm_tree: "🌴",
        pancakes: "🥞",
        panda_face: "🐼",
        paperclip: "📎",
        paperclips: "🖇",
        parasol_on_ground: "⛱",
        parking: "🅿️",
        part_alternation_mark: "〽️",
        partly_sunny: "⛅️",
        passenger_ship: "🛳",
        passport_control: "🛂",
        pause_button: "⏸",
        peace_symbol: "☮️",
        peach: "🍑",
        peanuts: "🥜",
        pear: "🍐",
        pen: "🖊",
        pencil2: "✏️",
        penguin: "🐧",
        pensive: "😔",
        performing_arts: "🎭",
        persevere: "😣",
        person_fencing: "🤺",
        pouting_woman: "🙎",
        phone: "☎️",
        pick: "⛏",
        pig: "🐷",
        pig2: "🐖",
        pig_nose: "🐽",
        pill: "💊",
        pineapple: "🍍",
        ping_pong: "🏓",
        pisces: "♓️",
        pizza: "🍕",
        place_of_worship: "🛐",
        plate_with_cutlery: "🍽",
        play_or_pause_button: "⏯",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        point_up: "☝️",
        point_up_2: "👆",
        police_car: "🚓",
        policewoman: "👮&zwj;♀️",
        poodle: "🐩",
        popcorn: "🍿",
        post_office: "🏣",
        postal_horn: "📯",
        postbox: "📮",
        potable_water: "🚰",
        potato: "🥔",
        pouch: "👝",
        poultry_leg: "🍗",
        pound: "💷",
        rage: "😡",
        pouting_cat: "😾",
        pouting_man: "🙎&zwj;♂️",
        pray: "🙏",
        prayer_beads: "📿",
        pregnant_woman: "🤰",
        previous_track_button: "⏮",
        prince: "🤴",
        princess: "👸",
        printer: "🖨",
        purple_heart: "💜",
        purse: "👛",
        pushpin: "📌",
        put_litter_in_its_place: "🚮",
        question: "❓",
        rabbit: "🐰",
        rabbit2: "🐇",
        racehorse: "🐎",
        racing_car: "🏎",
        radio: "📻",
        radio_button: "🔘",
        radioactive: "☢️",
        railway_car: "🚃",
        railway_track: "🛤",
        rainbow: "🌈",
        rainbow_flag: "🏳️&zwj;🌈",
        raised_back_of_hand: "🤚",
        raised_hand_with_fingers_splayed: "🖐",
        raised_hands: "🙌",
        raising_hand_woman: "🙋",
        raising_hand_man: "🙋&zwj;♂️",
        ram: "🐏",
        ramen: "🍜",
        rat: "🐀",
        record_button: "⏺",
        recycle: "♻️",
        red_circle: "🔴",
        registered: "®️",
        relaxed: "☺️",
        relieved: "😌",
        reminder_ribbon: "🎗",
        repeat: "🔁",
        repeat_one: "🔂",
        rescue_worker_helmet: "⛑",
        restroom: "🚻",
        revolving_hearts: "💞",
        rewind: "⏪",
        rhinoceros: "🦏",
        ribbon: "🎀",
        rice: "🍚",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice_scene: "🎑",
        right_anger_bubble: "🗯",
        ring: "💍",
        robot: "🤖",
        rocket: "🚀",
        rofl: "🤣",
        roll_eyes: "🙄",
        roller_coaster: "🎢",
        rooster: "🐓",
        rose: "🌹",
        rosette: "🏵",
        rotating_light: "🚨",
        round_pushpin: "📍",
        rowing_man: "🚣",
        rowing_woman: "🚣&zwj;♀️",
        rugby_football: "🏉",
        running_man: "🏃",
        running_shirt_with_sash: "🎽",
        running_woman: "🏃&zwj;♀️",
        sa: "🈂️",
        sagittarius: "♐️",
        sake: "🍶",
        sandal: "👡",
        santa: "🎅",
        satellite: "📡",
        saxophone: "🎷",
        school: "🏫",
        school_satchel: "🎒",
        scissors: "✂️",
        scorpion: "🦂",
        scorpius: "♏️",
        scream: "😱",
        scream_cat: "🙀",
        scroll: "📜",
        seat: "💺",
        secret: "㊙️",
        see_no_evil: "🙈",
        seedling: "🌱",
        selfie: "🤳",
        shallow_pan_of_food: "🥘",
        shamrock: "☘️",
        shark: "🦈",
        shaved_ice: "🍧",
        sheep: "🐑",
        shell: "🐚",
        shield: "🛡",
        shinto_shrine: "⛩",
        ship: "🚢",
        shirt: "👕",
        shopping: "🛍",
        shopping_cart: "🛒",
        shower: "🚿",
        shrimp: "🦐",
        signal_strength: "📶",
        six_pointed_star: "🔯",
        ski: "🎿",
        skier: "⛷",
        skull: "💀",
        skull_and_crossbones: "☠️",
        sleeping: "😴",
        sleeping_bed: "🛌",
        sleepy: "😪",
        slightly_frowning_face: "🙁",
        slightly_smiling_face: "🙂",
        slot_machine: "🎰",
        small_airplane: "🛩",
        small_blue_diamond: "🔹",
        small_orange_diamond: "🔸",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        smile: "😄",
        smile_cat: "😸",
        smiley: "😃",
        smiley_cat: "😺",
        smiling_imp: "😈",
        smirk: "😏",
        smirk_cat: "😼",
        smoking: "🚬",
        snail: "🐌",
        snake: "🐍",
        sneezing_face: "🤧",
        snowboarder: "🏂",
        snowflake: "❄️",
        snowman: "⛄️",
        snowman_with_snow: "☃️",
        sob: "😭",
        soccer: "⚽️",
        soon: "🔜",
        sos: "🆘",
        sound: "🔉",
        space_invader: "👾",
        spades: "♠️",
        spaghetti: "🍝",
        sparkle: "❇️",
        sparkler: "🎇",
        sparkles: "✨",
        sparkling_heart: "💖",
        speak_no_evil: "🙊",
        speaker: "🔈",
        speaking_head: "🗣",
        speech_balloon: "💬",
        speedboat: "🚤",
        spider: "🕷",
        spider_web: "🕸",
        spiral_calendar: "🗓",
        spiral_notepad: "🗒",
        spoon: "🥄",
        squid: "🦑",
        stadium: "🏟",
        star: "⭐️",
        star2: "🌟",
        star_and_crescent: "☪️",
        star_of_david: "✡️",
        stars: "🌠",
        station: "🚉",
        statue_of_liberty: "🗽",
        steam_locomotive: "🚂",
        stew: "🍲",
        stop_button: "⏹",
        stop_sign: "🛑",
        stopwatch: "⏱",
        straight_ruler: "📏",
        strawberry: "🍓",
        stuck_out_tongue: "😛",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue_winking_eye: "😜",
        studio_microphone: "🎙",
        stuffed_flatbread: "🥙",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        sun_behind_small_cloud: "🌤",
        sun_with_face: "🌞",
        sunflower: "🌻",
        sunglasses: "😎",
        sunny: "☀️",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        surfing_man: "🏄",
        surfing_woman: "🏄&zwj;♀️",
        sushi: "🍣",
        suspension_railway: "🚟",
        sweat: "😓",
        sweat_drops: "💦",
        sweat_smile: "😅",
        sweet_potato: "🍠",
        swimming_man: "🏊",
        swimming_woman: "🏊&zwj;♀️",
        symbols: "🔣",
        synagogue: "🕍",
        syringe: "💉",
        taco: "🌮",
        tada: "🎉",
        tanabata_tree: "🎋",
        taurus: "♉️",
        taxi: "🚕",
        tea: "🍵",
        telephone_receiver: "📞",
        telescope: "🔭",
        tennis: "🎾",
        tent: "⛺️",
        thermometer: "🌡",
        thinking: "🤔",
        thought_balloon: "💭",
        ticket: "🎫",
        tickets: "🎟",
        tiger: "🐯",
        tiger2: "🐅",
        timer_clock: "⏲",
        tipping_hand_man: "💁&zwj;♂️",
        tired_face: "😫",
        tm: "™️",
        toilet: "🚽",
        tokyo_tower: "🗼",
        tomato: "🍅",
        tongue: "👅",
        top: "🔝",
        tophat: "🎩",
        tornado: "🌪",
        trackball: "🖲",
        tractor: "🚜",
        traffic_light: "🚥",
        train: "🚋",
        train2: "🚆",
        tram: "🚊",
        triangular_flag_on_post: "🚩",
        triangular_ruler: "📐",
        trident: "🔱",
        triumph: "😤",
        trolleybus: "🚎",
        trophy: "🏆",
        tropical_drink: "🍹",
        tropical_fish: "🐠",
        truck: "🚚",
        trumpet: "🎺",
        tulip: "🌷",
        tumbler_glass: "🥃",
        turkey: "🦃",
        turtle: "🐢",
        tv: "📺",
        twisted_rightwards_arrows: "🔀",
        two_hearts: "💕",
        two_men_holding_hands: "👬",
        two_women_holding_hands: "👭",
        u5272: "🈹",
        u5408: "🈴",
        u55b6: "🈺",
        u6307: "🈯️",
        u6708: "🈷️",
        u6709: "🈶",
        u6e80: "🈵",
        u7121: "🈚️",
        u7533: "🈸",
        u7981: "🈲",
        u7a7a: "🈳",
        umbrella: "☔️",
        unamused: "😒",
        underage: "🔞",
        unicorn: "🦄",
        unlock: "🔓",
        up: "🆙",
        upside_down_face: "🙃",
        v: "✌️",
        vertical_traffic_light: "🚦",
        vhs: "📼",
        vibration_mode: "📳",
        video_camera: "📹",
        video_game: "🎮",
        violin: "🎻",
        virgo: "♍️",
        volcano: "🌋",
        volleyball: "🏐",
        vs: "🆚",
        vulcan_salute: "🖖",
        walking_man: "🚶",
        walking_woman: "🚶&zwj;♀️",
        waning_crescent_moon: "🌘",
        waning_gibbous_moon: "🌖",
        warning: "⚠️",
        wastebasket: "🗑",
        watch: "⌚️",
        water_buffalo: "🐃",
        watermelon: "🍉",
        wave: "👋",
        wavy_dash: "〰️",
        waxing_crescent_moon: "🌒",
        wc: "🚾",
        weary: "😩",
        wedding: "💒",
        weight_lifting_man: "🏋️",
        weight_lifting_woman: "🏋️&zwj;♀️",
        whale: "🐳",
        whale2: "🐋",
        wheel_of_dharma: "☸️",
        wheelchair: "♿️",
        white_check_mark: "✅",
        white_circle: "⚪️",
        white_flag: "🏳️",
        white_flower: "💮",
        white_large_square: "⬜️",
        white_medium_small_square: "◽️",
        white_medium_square: "◻️",
        white_small_square: "▫️",
        white_square_button: "🔳",
        wilted_flower: "🥀",
        wind_chime: "🎐",
        wind_face: "🌬",
        wine_glass: "🍷",
        wink: "😉",
        wolf: "🐺",
        woman: "👩",
        woman_artist: "👩&zwj;🎨",
        woman_astronaut: "👩&zwj;🚀",
        woman_cartwheeling: "🤸&zwj;♀️",
        woman_cook: "👩&zwj;🍳",
        woman_facepalming: "🤦&zwj;♀️",
        woman_factory_worker: "👩&zwj;🏭",
        woman_farmer: "👩&zwj;🌾",
        woman_firefighter: "👩&zwj;🚒",
        woman_health_worker: "👩&zwj;⚕️",
        woman_judge: "👩&zwj;⚖️",
        woman_juggling: "🤹&zwj;♀️",
        woman_mechanic: "👩&zwj;🔧",
        woman_office_worker: "👩&zwj;💼",
        woman_pilot: "👩&zwj;✈️",
        woman_playing_handball: "🤾&zwj;♀️",
        woman_playing_water_polo: "🤽&zwj;♀️",
        woman_scientist: "👩&zwj;🔬",
        woman_shrugging: "🤷&zwj;♀️",
        woman_singer: "👩&zwj;🎤",
        woman_student: "👩&zwj;🎓",
        woman_teacher: "👩&zwj;🏫",
        woman_technologist: "👩&zwj;💻",
        woman_with_turban: "👳&zwj;♀️",
        womans_clothes: "👚",
        womans_hat: "👒",
        women_wrestling: "🤼&zwj;♀️",
        womens: "🚺",
        world_map: "🗺",
        worried: "😟",
        wrench: "🔧",
        writing_hand: "✍️",
        x: "❌",
        yellow_heart: "💛",
        yen: "💴",
        yin_yang: "☯️",
        yum: "😋",
        zap: "⚡️",
        zipper_mouth_face: "🤐",
        zzz: "💤",
        octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
      };
      showdown.Converter = function(converterOptions) {
        var options = {}, langExtensions = [], outputModifiers = [], listeners = {}, setConvFlavor = setFlavor, metadata = {
          parsed: {},
          raw: "",
          format: ""
        };
        _constructor();
        function _constructor() {
          converterOptions = converterOptions || {};
          for (var gOpt in globalOptions) {
            if (globalOptions.hasOwnProperty(gOpt)) {
              options[gOpt] = globalOptions[gOpt];
            }
          }
          if (typeof converterOptions === "object") {
            for (var opt in converterOptions) {
              if (converterOptions.hasOwnProperty(opt)) {
                options[opt] = converterOptions[opt];
              }
            }
          } else {
            throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
          }
          if (options.extensions) {
            showdown.helper.forEach(options.extensions, _parseExtension);
          }
        }
        function _parseExtension(ext, name) {
          name = name || null;
          if (showdown.helper.isString(ext)) {
            ext = showdown.helper.stdExtName(ext);
            name = ext;
            if (showdown.extensions[ext]) {
              console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method." + "Please inform the developer that the extension should be updated!");
              legacyExtensionLoading(showdown.extensions[ext], ext);
              return;
            } else if (!showdown.helper.isUndefined(extensions[ext])) {
              ext = extensions[ext];
            } else {
              throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
            }
          }
          if (typeof ext === "function") {
            ext = ext();
          }
          if (!showdown.helper.isArray(ext)) {
            ext = [ ext ];
          }
          var validExt = validate(ext, name);
          if (!validExt.valid) {
            throw Error(validExt.error);
          }
          for (var i = 0; i < ext.length; ++i) {
            switch (ext[i].type) {
             case "lang":
              langExtensions.push(ext[i]);
              break;

             case "output":
              outputModifiers.push(ext[i]);
              break;
            }
            if (ext[i].hasOwnProperty("listeners")) {
              for (var ln in ext[i].listeners) {
                if (ext[i].listeners.hasOwnProperty(ln)) {
                  listen(ln, ext[i].listeners[ln]);
                }
              }
            }
          }
        }
        function legacyExtensionLoading(ext, name) {
          if (typeof ext === "function") {
            ext = ext(new showdown.Converter);
          }
          if (!showdown.helper.isArray(ext)) {
            ext = [ ext ];
          }
          var valid = validate(ext, name);
          if (!valid.valid) {
            throw Error(valid.error);
          }
          for (var i = 0; i < ext.length; ++i) {
            switch (ext[i].type) {
             case "lang":
              langExtensions.push(ext[i]);
              break;

             case "output":
              outputModifiers.push(ext[i]);
              break;

             default:
              throw Error("Extension loader error: Type unrecognized!!!");
            }
          }
        }
        function listen(name, callback) {
          if (!showdown.helper.isString(name)) {
            throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
          }
          if (typeof callback !== "function") {
            throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
          }
          if (!listeners.hasOwnProperty(name)) {
            listeners[name] = [];
          }
          listeners[name].push(callback);
        }
        function rTrimInputText(text) {
          var rsp = text.match(/^\s*/)[0].length, rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
          return text.replace(rgx, "");
        }
        this._dispatch = function dispatch(evtName, text, options, globals) {
          if (listeners.hasOwnProperty(evtName)) {
            for (var ei = 0; ei < listeners[evtName].length; ++ei) {
              var nText = listeners[evtName][ei](evtName, text, this, options, globals);
              if (nText && typeof nText !== "undefined") {
                text = nText;
              }
            }
          }
          return text;
        };
        this.listen = function(name, callback) {
          listen(name, callback);
          return this;
        };
        this.makeHtml = function(text) {
          if (!text) {
            return text;
          }
          var globals = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions: langExtensions,
            outputModifiers: outputModifiers,
            converter: this,
            ghCodeBlocks: [],
            metadata: {
              parsed: {},
              raw: "",
              format: ""
            }
          };
          text = text.replace(/¨/g, "¨T");
          text = text.replace(/\$/g, "¨D");
          text = text.replace(/\r\n/g, "\n");
          text = text.replace(/\r/g, "\n");
          text = text.replace(/\u00A0/g, "&nbsp;");
          if (options.smartIndentationFix) {
            text = rTrimInputText(text);
          }
          text = "\n\n" + text + "\n\n";
          text = showdown.subParser("detab")(text, options, globals);
          text = text.replace(/^[ \t]+$/gm, "");
          showdown.helper.forEach(langExtensions, (function(ext) {
            text = showdown.subParser("runExtension")(ext, text, options, globals);
          }));
          text = showdown.subParser("metadata")(text, options, globals);
          text = showdown.subParser("hashPreCodeTags")(text, options, globals);
          text = showdown.subParser("githubCodeBlocks")(text, options, globals);
          text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
          text = showdown.subParser("hashCodeTags")(text, options, globals);
          text = showdown.subParser("stripLinkDefinitions")(text, options, globals);
          text = showdown.subParser("blockGamut")(text, options, globals);
          text = showdown.subParser("unhashHTMLSpans")(text, options, globals);
          text = showdown.subParser("unescapeSpecialChars")(text, options, globals);
          text = text.replace(/¨D/g, "$$");
          text = text.replace(/¨T/g, "¨");
          text = showdown.subParser("completeHTMLDocument")(text, options, globals);
          showdown.helper.forEach(outputModifiers, (function(ext) {
            text = showdown.subParser("runExtension")(ext, text, options, globals);
          }));
          metadata = globals.metadata;
          return text;
        };
        this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
          src = src.replace(/\r\n/g, "\n");
          src = src.replace(/\r/g, "\n");
          src = src.replace(/>[ \t]+</, ">¨NBSP;<");
          if (!HTMLParser) {
            if (window && window.document) {
              HTMLParser = window.document;
            } else {
              throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
            }
          }
          var doc = HTMLParser.createElement("div");
          doc.innerHTML = src;
          var globals = {
            preList: substitutePreCodeTags(doc)
          };
          clean(doc);
          var nodes = doc.childNodes, mdDoc = "";
          for (var i = 0; i < nodes.length; i++) {
            mdDoc += showdown.subParser("makeMarkdown.node")(nodes[i], globals);
          }
          function clean(node) {
            for (var n = 0; n < node.childNodes.length; ++n) {
              var child = node.childNodes[n];
              if (child.nodeType === 3) {
                if (!/\S/.test(child.nodeValue)) {
                  node.removeChild(child);
                  --n;
                } else {
                  child.nodeValue = child.nodeValue.split("\n").join(" ");
                  child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
                }
              } else if (child.nodeType === 1) {
                clean(child);
              }
            }
          }
          function substitutePreCodeTags(doc) {
            var pres = doc.querySelectorAll("pre"), presPH = [];
            for (var i = 0; i < pres.length; ++i) {
              if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === "code") {
                var content = pres[i].firstChild.innerHTML.trim(), language = pres[i].firstChild.getAttribute("data-language") || "";
                if (language === "") {
                  var classes = pres[i].firstChild.className.split(" ");
                  for (var c = 0; c < classes.length; ++c) {
                    var matches = classes[c].match(/^language-(.+)$/);
                    if (matches !== null) {
                      language = matches[1];
                      break;
                    }
                  }
                }
                content = showdown.helper.unescapeHTMLEntities(content);
                presPH.push(content);
                pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
              } else {
                presPH.push(pres[i].innerHTML);
                pres[i].innerHTML = "";
                pres[i].setAttribute("prenum", i.toString());
              }
            }
            return presPH;
          }
          return mdDoc;
        };
        this.setOption = function(key, value) {
          options[key] = value;
        };
        this.getOption = function(key) {
          return options[key];
        };
        this.getOptions = function() {
          return options;
        };
        this.addExtension = function(extension, name) {
          name = name || null;
          _parseExtension(extension, name);
        };
        this.useExtension = function(extensionName) {
          _parseExtension(extensionName);
        };
        this.setFlavor = function(name) {
          if (!flavor.hasOwnProperty(name)) {
            throw Error(name + " flavor was not found");
          }
          var preset = flavor[name];
          setConvFlavor = name;
          for (var option in preset) {
            if (preset.hasOwnProperty(option)) {
              options[option] = preset[option];
            }
          }
        };
        this.getFlavor = function() {
          return setConvFlavor;
        };
        this.removeExtension = function(extension) {
          if (!showdown.helper.isArray(extension)) {
            extension = [ extension ];
          }
          for (var a = 0; a < extension.length; ++a) {
            var ext = extension[a];
            for (var i = 0; i < langExtensions.length; ++i) {
              if (langExtensions[i] === ext) {
                langExtensions[i].splice(i, 1);
              }
            }
            for (var ii = 0; ii < outputModifiers.length; ++i) {
              if (outputModifiers[ii] === ext) {
                outputModifiers[ii].splice(i, 1);
              }
            }
          }
        };
        this.getAllExtensions = function() {
          return {
            language: langExtensions,
            output: outputModifiers
          };
        };
        this.getMetadata = function(raw) {
          if (raw) {
            return metadata.raw;
          } else {
            return metadata.parsed;
          }
        };
        this.getMetadataFormat = function() {
          return metadata.format;
        };
        this._setMetadataPair = function(key, value) {
          metadata.parsed[key] = value;
        };
        this._setMetadataFormat = function(format) {
          metadata.format = format;
        };
        this._setMetadataRaw = function(raw) {
          metadata.raw = raw;
        };
      };
      showdown.subParser("anchors", (function(text, options, globals) {
        text = globals.converter._dispatch("anchors.before", text, options, globals);
        var writeAnchorTag = function(wholeMatch, linkText, linkId, url, m5, m6, title) {
          if (showdown.helper.isUndefined(title)) {
            title = "";
          }
          linkId = linkId.toLowerCase();
          if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
            url = "";
          } else if (!url) {
            if (!linkId) {
              linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + linkId;
            if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
              url = globals.gUrls[linkId];
              if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
                title = globals.gTitles[linkId];
              }
            } else {
              return wholeMatch;
            }
          }
          url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
          var result = '<a href="' + url + '"';
          if (title !== "" && title !== null) {
            title = title.replace(/"/g, "&quot;");
            title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            result += ' title="' + title + '"';
          }
          if (options.openLinksInNewWindow && !/^#/.test(url)) {
            result += ' rel="noopener noreferrer" target="¨E95Eblank"';
          }
          result += ">" + linkText + "</a>";
          return result;
        };
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
        text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
        if (options.ghMentions) {
          text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, (function(wm, st, escape, mentions, username) {
            if (escape === "\\") {
              return st + mentions;
            }
            if (!showdown.helper.isString(options.ghMentionsLink)) {
              throw new Error("ghMentionsLink option must be a string");
            }
            var lnk = options.ghMentionsLink.replace(/\{u}/g, username), target = "";
            if (options.openLinksInNewWindow) {
              target = ' rel="noopener noreferrer" target="¨E95Eblank"';
            }
            return st + '<a href="' + lnk + '"' + target + ">" + mentions + "</a>";
          }));
        }
        text = globals.converter._dispatch("anchors.after", text, options, globals);
        return text;
      }));
      var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim, delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, replaceLink = function(options) {
        return function(wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
          link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
          var lnkTxt = link, append = "", target = "", lmc = leadingMagicChars || "", tmc = trailingMagicChars || "";
          if (/^www\./i.test(link)) {
            link = link.replace(/^www\./i, "http://www.");
          }
          if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
            append = trailingPunctuation;
          }
          if (options.openLinksInNewWindow) {
            target = ' rel="noopener noreferrer" target="¨E95Eblank"';
          }
          return lmc + '<a href="' + link + '"' + target + ">" + lnkTxt + "</a>" + append + tmc;
        };
      }, replaceMail = function(options, globals) {
        return function(wholeMatch, b, mail) {
          var href = "mailto:";
          b = b || "";
          mail = showdown.subParser("unescapeSpecialChars")(mail, options, globals);
          if (options.encodeEmails) {
            href = showdown.helper.encodeEmailAddress(href + mail);
            mail = showdown.helper.encodeEmailAddress(mail);
          } else {
            href = href + mail;
          }
          return b + '<a href="' + href + '">' + mail + "</a>";
        };
      };
      showdown.subParser("autoLinks", (function(text, options, globals) {
        text = globals.converter._dispatch("autoLinks.before", text, options, globals);
        text = text.replace(delimUrlRegex, replaceLink(options));
        text = text.replace(delimMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("autoLinks.after", text, options, globals);
        return text;
      }));
      showdown.subParser("simplifiedAutoLinks", (function(text, options, globals) {
        if (!options.simplifiedAutoLink) {
          return text;
        }
        text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
        if (options.excludeTrailingPunctuationFromURLs) {
          text = text.replace(simpleURLRegex2, replaceLink(options));
        } else {
          text = text.replace(simpleURLRegex, replaceLink(options));
        }
        text = text.replace(simpleMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
        return text;
      }));
      showdown.subParser("blockGamut", (function(text, options, globals) {
        text = globals.converter._dispatch("blockGamut.before", text, options, globals);
        text = showdown.subParser("blockQuotes")(text, options, globals);
        text = showdown.subParser("headers")(text, options, globals);
        text = showdown.subParser("horizontalRule")(text, options, globals);
        text = showdown.subParser("lists")(text, options, globals);
        text = showdown.subParser("codeBlocks")(text, options, globals);
        text = showdown.subParser("tables")(text, options, globals);
        text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
        text = showdown.subParser("paragraphs")(text, options, globals);
        text = globals.converter._dispatch("blockGamut.after", text, options, globals);
        return text;
      }));
      showdown.subParser("blockQuotes", (function(text, options, globals) {
        text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
        text = text + "\n\n";
        var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        if (options.splitAdjacentBlockquotes) {
          rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
        }
        text = text.replace(rgx, (function(bq) {
          bq = bq.replace(/^[ \t]*>[ \t]?/gm, "");
          bq = bq.replace(/¨0/g, "");
          bq = bq.replace(/^[ \t]+$/gm, "");
          bq = showdown.subParser("githubCodeBlocks")(bq, options, globals);
          bq = showdown.subParser("blockGamut")(bq, options, globals);
          bq = bq.replace(/(^|\n)/g, "$1  ");
          bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, (function(wholeMatch, m1) {
            var pre = m1;
            pre = pre.replace(/^  /gm, "¨0");
            pre = pre.replace(/¨0/g, "");
            return pre;
          }));
          return showdown.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
        }));
        text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
        return text;
      }));
      showdown.subParser("codeBlocks", (function(text, options, globals) {
        text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
        text += "¨0";
        var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        text = text.replace(pattern, (function(wholeMatch, m1, m2) {
          var codeblock = m1, nextChar = m2, end = "\n";
          codeblock = showdown.subParser("outdent")(codeblock, options, globals);
          codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
          codeblock = showdown.subParser("detab")(codeblock, options, globals);
          codeblock = codeblock.replace(/^\n+/g, "");
          codeblock = codeblock.replace(/\n+$/g, "");
          if (options.omitExtraWLInCodeBlocks) {
            end = "";
          }
          codeblock = "<pre><code>" + codeblock + end + "</code></pre>";
          return showdown.subParser("hashBlock")(codeblock, options, globals) + nextChar;
        }));
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
        return text;
      }));
      showdown.subParser("codeSpans", (function(text, options, globals) {
        text = globals.converter._dispatch("codeSpans.before", text, options, globals);
        if (typeof text === "undefined") {
          text = "";
        }
        text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, (function(wholeMatch, m1, m2, m3) {
          var c = m3;
          c = c.replace(/^([ \t]*)/g, "");
          c = c.replace(/[ \t]*$/g, "");
          c = showdown.subParser("encodeCode")(c, options, globals);
          c = m1 + "<code>" + c + "</code>";
          c = showdown.subParser("hashHTMLSpans")(c, options, globals);
          return c;
        }));
        text = globals.converter._dispatch("codeSpans.after", text, options, globals);
        return text;
      }));
      showdown.subParser("completeHTMLDocument", (function(text, options, globals) {
        if (!options.completeHTMLDocument) {
          return text;
        }
        text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
        var doctype = "html", doctypeParsed = "<!DOCTYPE HTML>\n", title = "", charset = '<meta charset="utf-8">\n', lang = "", metadata = "";
        if (typeof globals.metadata.parsed.doctype !== "undefined") {
          doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
          doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
          if (doctype === "html" || doctype === "html5") {
            charset = '<meta charset="utf-8">';
          }
        }
        for (var meta in globals.metadata.parsed) {
          if (globals.metadata.parsed.hasOwnProperty(meta)) {
            switch (meta.toLowerCase()) {
             case "doctype":
              break;

             case "title":
              title = "<title>" + globals.metadata.parsed.title + "</title>\n";
              break;

             case "charset":
              if (doctype === "html" || doctype === "html5") {
                charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
              } else {
                charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
              }
              break;

             case "language":
             case "lang":
              lang = ' lang="' + globals.metadata.parsed[meta] + '"';
              metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
              break;

             default:
              metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
            }
          }
        }
        text = doctypeParsed + "<html" + lang + ">\n<head>\n" + title + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
        text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
        return text;
      }));
      showdown.subParser("detab", (function(text, options, globals) {
        text = globals.converter._dispatch("detab.before", text, options, globals);
        text = text.replace(/\t(?=\t)/g, "    ");
        text = text.replace(/\t/g, "¨A¨B");
        text = text.replace(/¨B(.+?)¨A/g, (function(wholeMatch, m1) {
          var leadingText = m1, numSpaces = 4 - leadingText.length % 4;
          for (var i = 0; i < numSpaces; i++) {
            leadingText += " ";
          }
          return leadingText;
        }));
        text = text.replace(/¨A/g, "    ");
        text = text.replace(/¨B/g, "");
        text = globals.converter._dispatch("detab.after", text, options, globals);
        return text;
      }));
      showdown.subParser("ellipsis", (function(text, options, globals) {
        text = globals.converter._dispatch("ellipsis.before", text, options, globals);
        text = text.replace(/\.\.\./g, "…");
        text = globals.converter._dispatch("ellipsis.after", text, options, globals);
        return text;
      }));
      showdown.subParser("emoji", (function(text, options, globals) {
        if (!options.emoji) {
          return text;
        }
        text = globals.converter._dispatch("emoji.before", text, options, globals);
        var emojiRgx = /:([\S]+?):/g;
        text = text.replace(emojiRgx, (function(wm, emojiCode) {
          if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
            return showdown.helper.emojis[emojiCode];
          }
          return wm;
        }));
        text = globals.converter._dispatch("emoji.after", text, options, globals);
        return text;
      }));
      showdown.subParser("encodeAmpsAndAngles", (function(text, options, globals) {
        text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
        text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
        text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
        text = text.replace(/</g, "&lt;");
        text = text.replace(/>/g, "&gt;");
        text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
        return text;
      }));
      showdown.subParser("encodeBackslashEscapes", (function(text, options, globals) {
        text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
        text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
        text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
        return text;
      }));
      showdown.subParser("encodeCode", (function(text, options, globals) {
        text = globals.converter._dispatch("encodeCode.before", text, options, globals);
        text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeCode.after", text, options, globals);
        return text;
      }));
      showdown.subParser("escapeSpecialCharsWithinTagAttributes", (function(text, options, globals) {
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
        var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        text = text.replace(tags, (function(wholeMatch) {
          return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        }));
        text = text.replace(comments, (function(wholeMatch) {
          return wholeMatch.replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        }));
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
        return text;
      }));
      showdown.subParser("githubCodeBlocks", (function(text, options, globals) {
        if (!options.ghCodeBlocks) {
          return text;
        }
        text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
        text += "¨0";
        text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, (function(wholeMatch, delim, language, codeblock) {
          var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
          codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
          codeblock = showdown.subParser("detab")(codeblock, options, globals);
          codeblock = codeblock.replace(/^\n+/g, "");
          codeblock = codeblock.replace(/\n+$/g, "");
          codeblock = "<pre><code" + (language ? ' class="' + language + " language-" + language + '"' : "") + ">" + codeblock + end + "</code></pre>";
          codeblock = showdown.subParser("hashBlock")(codeblock, options, globals);
          return "\n\n¨G" + (globals.ghCodeBlocks.push({
            text: wholeMatch,
            codeblock: codeblock
          }) - 1) + "G\n\n";
        }));
        text = text.replace(/¨0/, "");
        return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
      }));
      showdown.subParser("hashBlock", (function(text, options, globals) {
        text = globals.converter._dispatch("hashBlock.before", text, options, globals);
        text = text.replace(/(^\n+|\n+$)/g, "");
        text = "\n\n¨K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
        text = globals.converter._dispatch("hashBlock.after", text, options, globals);
        return text;
      }));
      showdown.subParser("hashCodeTags", (function(text, options, globals) {
        text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
          var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
          return "¨C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
        };
        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
        text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
        return text;
      }));
      showdown.subParser("hashElement", (function(text, options, globals) {
        return function(wholeMatch, m1) {
          var blockText = m1;
          blockText = blockText.replace(/\n\n/g, "\n");
          blockText = blockText.replace(/^\n/, "");
          blockText = blockText.replace(/\n+$/g, "");
          blockText = "\n\n¨K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
          return blockText;
        };
      }));
      showdown.subParser("hashHTMLBlocks", (function(text, options, globals) {
        text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
        var blockTags = [ "pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p" ], repFunc = function(wholeMatch, match, left, right) {
          var txt = wholeMatch;
          if (left.search(/\bmarkdown\b/) !== -1) {
            txt = left + globals.converter.makeHtml(match) + right;
          }
          return "\n\n¨K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        };
        if (options.backslashEscapesHTMLTags) {
          text = text.replace(/\\<(\/?[^>]+?)>/g, (function(wm, inside) {
            return "&lt;" + inside + "&gt;";
          }));
        }
        for (var i = 0; i < blockTags.length; ++i) {
          var opTagPos, rgx1 = new RegExp("^ {0,3}(<" + blockTags[i] + "\\b[^>]*>)", "im"), patLeft = "<" + blockTags[i] + "\\b[^>]*>", patRight = "</" + blockTags[i] + ">";
          while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
            var subTexts = showdown.helper.splitAtIndex(text, opTagPos), newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
            if (newSubText1 === subTexts[1]) {
              break;
            }
            text = subTexts[0].concat(newSubText1);
          }
        }
        text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
        text = showdown.helper.replaceRecursiveRegExp(text, (function(txt) {
          return "\n\n¨K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
        }), "^ {0,3}\x3c!--", "--\x3e", "gm");
        text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
        text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
        return text;
      }));
      showdown.subParser("hashHTMLSpans", (function(text, options, globals) {
        text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);
        function hashHTMLSpan(html) {
          return "¨C" + (globals.gHtmlSpans.push(html) - 1) + "C";
        }
        text = text.replace(/<[^>]+?\/>/gi, (function(wm) {
          return hashHTMLSpan(wm);
        }));
        text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, (function(wm) {
          return hashHTMLSpan(wm);
        }));
        text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, (function(wm) {
          return hashHTMLSpan(wm);
        }));
        text = text.replace(/<[^>]+?>/gi, (function(wm) {
          return hashHTMLSpan(wm);
        }));
        text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
        return text;
      }));
      showdown.subParser("unhashHTMLSpans", (function(text, options, globals) {
        text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
        for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
          var repText = globals.gHtmlSpans[i], limit = 0;
          while (/¨C(\d+)C/.test(repText)) {
            var num = RegExp.$1;
            repText = repText.replace("¨C" + num + "C", globals.gHtmlSpans[num]);
            if (limit === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++limit;
          }
          text = text.replace("¨C" + i + "C", repText);
        }
        text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
        return text;
      }));
      showdown.subParser("hashPreCodeTags", (function(text, options, globals) {
        text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
          var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
          return "\n\n¨G" + (globals.ghCodeBlocks.push({
            text: wholeMatch,
            codeblock: codeblock
          }) - 1) + "G\n\n";
        };
        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim");
        text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
        return text;
      }));
      showdown.subParser("headers", (function(text, options, globals) {
        text = globals.converter._dispatch("headers.before", text, options, globals);
        var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart), setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        text = text.replace(setextRegexH1, (function(wholeMatch, m1) {
          var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
          return showdown.subParser("hashBlock")(hashBlock, options, globals);
        }));
        text = text.replace(setextRegexH2, (function(matchFound, m1) {
          var spanGamut = showdown.subParser("spanGamut")(m1, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"', hLevel = headerLevelStart + 1, hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
          return showdown.subParser("hashBlock")(hashBlock, options, globals);
        }));
        var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        text = text.replace(atxStyle, (function(wholeMatch, m1, m2) {
          var hText = m2;
          if (options.customizedHeaderId) {
            hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
          }
          var span = showdown.subParser("spanGamut")(hText, options, globals), hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"', hLevel = headerLevelStart - 1 + m1.length, header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
          return showdown.subParser("hashBlock")(header, options, globals);
        }));
        function headerId(m) {
          var title, prefix;
          if (options.customizedHeaderId) {
            var match = m.match(/\{([^{]+?)}\s*$/);
            if (match && match[1]) {
              m = match[1];
            }
          }
          title = m;
          if (showdown.helper.isString(options.prefixHeaderId)) {
            prefix = options.prefixHeaderId;
          } else if (options.prefixHeaderId === true) {
            prefix = "section-";
          } else {
            prefix = "";
          }
          if (!options.rawPrefixHeaderId) {
            title = prefix + title;
          }
          if (options.ghCompatibleHeaderId) {
            title = title.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase();
          } else if (options.rawHeaderId) {
            title = title.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase();
          } else {
            title = title.replace(/[^\w]/g, "").toLowerCase();
          }
          if (options.rawPrefixHeaderId) {
            title = prefix + title;
          }
          if (globals.hashLinkCounts[title]) {
            title = title + "-" + globals.hashLinkCounts[title]++;
          } else {
            globals.hashLinkCounts[title] = 1;
          }
          return title;
        }
        text = globals.converter._dispatch("headers.after", text, options, globals);
        return text;
      }));
      showdown.subParser("horizontalRule", (function(text, options, globals) {
        text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
        var key = showdown.subParser("hashBlock")("<hr />", options, globals);
        text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
        text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
        return text;
      }));
      showdown.subParser("images", (function(text, options, globals) {
        text = globals.converter._dispatch("images.before", text, options, globals);
        var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;
        function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
          url = url.replace(/\s/g, "");
          return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
        }
        function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
          var gUrls = globals.gUrls, gTitles = globals.gTitles, gDims = globals.gDimensions;
          linkId = linkId.toLowerCase();
          if (!title) {
            title = "";
          }
          if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
            url = "";
          } else if (url === "" || url === null) {
            if (linkId === "" || linkId === null) {
              linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + linkId;
            if (!showdown.helper.isUndefined(gUrls[linkId])) {
              url = gUrls[linkId];
              if (!showdown.helper.isUndefined(gTitles[linkId])) {
                title = gTitles[linkId];
              }
              if (!showdown.helper.isUndefined(gDims[linkId])) {
                width = gDims[linkId].width;
                height = gDims[linkId].height;
              }
            } else {
              return wholeMatch;
            }
          }
          altText = altText.replace(/"/g, "&quot;").replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
          url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
          var result = '<img src="' + url + '" alt="' + altText + '"';
          if (title && showdown.helper.isString(title)) {
            title = title.replace(/"/g, "&quot;").replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            result += ' title="' + title + '"';
          }
          if (width && height) {
            width = width === "*" ? "auto" : width;
            height = height === "*" ? "auto" : height;
            result += ' width="' + width + '"';
            result += ' height="' + height + '"';
          }
          result += " />";
          return result;
        }
        text = text.replace(referenceRegExp, writeImageTag);
        text = text.replace(base64RegExp, writeImageTagBase64);
        text = text.replace(crazyRegExp, writeImageTag);
        text = text.replace(inlineRegExp, writeImageTag);
        text = text.replace(refShortcutRegExp, writeImageTag);
        text = globals.converter._dispatch("images.after", text, options, globals);
        return text;
      }));
      showdown.subParser("italicsAndBold", (function(text, options, globals) {
        text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);
        function parseInside(txt, left, right) {
          return left + txt + right;
        }
        if (options.literalMidWordUnderscores) {
          text = text.replace(/\b___(\S[\s\S]*?)___\b/g, (function(wm, txt) {
            return parseInside(txt, "<strong><em>", "</em></strong>");
          }));
          text = text.replace(/\b__(\S[\s\S]*?)__\b/g, (function(wm, txt) {
            return parseInside(txt, "<strong>", "</strong>");
          }));
          text = text.replace(/\b_(\S[\s\S]*?)_\b/g, (function(wm, txt) {
            return parseInside(txt, "<em>", "</em>");
          }));
        } else {
          text = text.replace(/___(\S[\s\S]*?)___/g, (function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
          }));
          text = text.replace(/__(\S[\s\S]*?)__/g, (function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
          }));
          text = text.replace(/_([^\s_][\s\S]*?)_/g, (function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
          }));
        }
        if (options.literalMidWordAsterisks) {
          text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, (function(wm, lead, txt) {
            return parseInside(txt, lead + "<strong><em>", "</em></strong>");
          }));
          text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, (function(wm, lead, txt) {
            return parseInside(txt, lead + "<strong>", "</strong>");
          }));
          text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, (function(wm, lead, txt) {
            return parseInside(txt, lead + "<em>", "</em>");
          }));
        } else {
          text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, (function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
          }));
          text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, (function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
          }));
          text = text.replace(/\*([^\s*][\s\S]*?)\*/g, (function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
          }));
        }
        text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
        return text;
      }));
      showdown.subParser("lists", (function(text, options, globals) {
        function processListItems(listStr, trimTrailing) {
          globals.gListLevel++;
          listStr = listStr.replace(/\n{2,}$/, "\n");
          listStr += "¨0";
          var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, isParagraphed = /\n[ \t]*\n(?!¨0)/.test(listStr);
          if (options.disableForced4SpacesIndentedSublists) {
            rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
          }
          listStr = listStr.replace(rgx, (function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
            checked = checked && checked.trim() !== "";
            var item = showdown.subParser("outdent")(m4, options, globals), bulletStyle = "";
            if (taskbtn && options.tasklists) {
              bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
              item = item.replace(/^[ \t]*\[(x|X| )?]/m, (function() {
                var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                if (checked) {
                  otp += " checked";
                }
                otp += ">";
                return otp;
              }));
            }
            item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, (function(wm2) {
              return "¨A" + wm2;
            }));
            if (m1 || item.search(/\n{2,}/) > -1) {
              item = showdown.subParser("githubCodeBlocks")(item, options, globals);
              item = showdown.subParser("blockGamut")(item, options, globals);
            } else {
              item = showdown.subParser("lists")(item, options, globals);
              item = item.replace(/\n$/, "");
              item = showdown.subParser("hashHTMLBlocks")(item, options, globals);
              item = item.replace(/\n\n+/g, "\n\n");
              if (isParagraphed) {
                item = showdown.subParser("paragraphs")(item, options, globals);
              } else {
                item = showdown.subParser("spanGamut")(item, options, globals);
              }
            }
            item = item.replace("¨A", "");
            item = "<li" + bulletStyle + ">" + item + "</li>\n";
            return item;
          }));
          listStr = listStr.replace(/¨0/g, "");
          globals.gListLevel--;
          if (trimTrailing) {
            listStr = listStr.replace(/\s+$/, "");
          }
          return listStr;
        }
        function styleStartNumber(list, listType) {
          if (listType === "ol") {
            var res = list.match(/^ *(\d+)\./);
            if (res && res[1] !== "1") {
              return ' start="' + res[1] + '"';
            }
          }
          return "";
        }
        function parseConsecutiveLists(list, listType, trimTrailing) {
          var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, counterRxg = listType === "ul" ? olRgx : ulRgx, result = "";
          if (list.search(counterRxg) !== -1) {
            (function parseCL(txt) {
              var pos = txt.search(counterRxg), style = styleStartNumber(list, listType);
              if (pos !== -1) {
                result += "\n\n<" + listType + style + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
                listType = listType === "ul" ? "ol" : "ul";
                counterRxg = listType === "ul" ? olRgx : ulRgx;
                parseCL(txt.slice(pos));
              } else {
                result += "\n\n<" + listType + style + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
              }
            })(list);
          } else {
            var style = styleStartNumber(list, listType);
            result = "\n\n<" + listType + style + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
          }
          return result;
        }
        text = globals.converter._dispatch("lists.before", text, options, globals);
        text += "¨0";
        if (globals.gListLevel) {
          text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function(wholeMatch, list, m2) {
            var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return parseConsecutiveLists(list, listType, true);
          }));
        } else {
          text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function(wholeMatch, m1, list, m3) {
            var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return parseConsecutiveLists(list, listType, false);
          }));
        }
        text = text.replace(/¨0/, "");
        text = globals.converter._dispatch("lists.after", text, options, globals);
        return text;
      }));
      showdown.subParser("metadata", (function(text, options, globals) {
        if (!options.metadata) {
          return text;
        }
        text = globals.converter._dispatch("metadata.before", text, options, globals);
        function parseMetadataContents(content) {
          globals.metadata.raw = content;
          content = content.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
          content = content.replace(/\n {4}/g, " ");
          content.replace(/^([\S ]+): +([\s\S]+?)$/gm, (function(wm, key, value) {
            globals.metadata.parsed[key] = value;
            return "";
          }));
        }
        text = text.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, (function(wholematch, format, content) {
          parseMetadataContents(content);
          return "¨M";
        }));
        text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, (function(wholematch, format, content) {
          if (format) {
            globals.metadata.format = format;
          }
          parseMetadataContents(content);
          return "¨M";
        }));
        text = text.replace(/¨M/g, "");
        text = globals.converter._dispatch("metadata.after", text, options, globals);
        return text;
      }));
      showdown.subParser("outdent", (function(text, options, globals) {
        text = globals.converter._dispatch("outdent.before", text, options, globals);
        text = text.replace(/^(\t|[ ]{1,4})/gm, "¨0");
        text = text.replace(/¨0/g, "");
        text = globals.converter._dispatch("outdent.after", text, options, globals);
        return text;
      }));
      showdown.subParser("paragraphs", (function(text, options, globals) {
        text = globals.converter._dispatch("paragraphs.before", text, options, globals);
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        var grafs = text.split(/\n{2,}/g), grafsOut = [], end = grafs.length;
        for (var i = 0; i < end; i++) {
          var str = grafs[i];
          if (str.search(/¨(K|G)(\d+)\1/g) >= 0) {
            grafsOut.push(str);
          } else if (str.search(/\S/) >= 0) {
            str = showdown.subParser("spanGamut")(str, options, globals);
            str = str.replace(/^([ \t]*)/g, "<p>");
            str += "</p>";
            grafsOut.push(str);
          }
        }
        end = grafsOut.length;
        for (i = 0; i < end; i++) {
          var blockText = "", grafsOutIt = grafsOut[i], codeFlag = false;
          while (/¨(K|G)(\d+)\1/.test(grafsOutIt)) {
            var delim = RegExp.$1, num = RegExp.$2;
            if (delim === "K") {
              blockText = globals.gHtmlBlocks[num];
            } else {
              if (codeFlag) {
                blockText = showdown.subParser("encodeCode")(globals.ghCodeBlocks[num].text, options, globals);
              } else {
                blockText = globals.ghCodeBlocks[num].codeblock;
              }
            }
            blockText = blockText.replace(/\$/g, "$$$$");
            grafsOutIt = grafsOutIt.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, blockText);
            if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
              codeFlag = true;
            }
          }
          grafsOut[i] = grafsOutIt;
        }
        text = grafsOut.join("\n");
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        return globals.converter._dispatch("paragraphs.after", text, options, globals);
      }));
      showdown.subParser("runExtension", (function(ext, text, options, globals) {
        if (ext.filter) {
          text = ext.filter(text, globals.converter, options);
        } else if (ext.regex) {
          var re = ext.regex;
          if (!(re instanceof RegExp)) {
            re = new RegExp(re, "g");
          }
          text = text.replace(re, ext.replace);
        }
        return text;
      }));
      showdown.subParser("spanGamut", (function(text, options, globals) {
        text = globals.converter._dispatch("spanGamut.before", text, options, globals);
        text = showdown.subParser("codeSpans")(text, options, globals);
        text = showdown.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
        text = showdown.subParser("encodeBackslashEscapes")(text, options, globals);
        text = showdown.subParser("images")(text, options, globals);
        text = showdown.subParser("anchors")(text, options, globals);
        text = showdown.subParser("autoLinks")(text, options, globals);
        text = showdown.subParser("simplifiedAutoLinks")(text, options, globals);
        text = showdown.subParser("emoji")(text, options, globals);
        text = showdown.subParser("underline")(text, options, globals);
        text = showdown.subParser("italicsAndBold")(text, options, globals);
        text = showdown.subParser("strikethrough")(text, options, globals);
        text = showdown.subParser("ellipsis")(text, options, globals);
        text = showdown.subParser("hashHTMLSpans")(text, options, globals);
        text = showdown.subParser("encodeAmpsAndAngles")(text, options, globals);
        if (options.simpleLineBreaks) {
          if (!/\n\n¨K/.test(text)) {
            text = text.replace(/\n+/g, "<br />\n");
          }
        } else {
          text = text.replace(/  +\n/g, "<br />\n");
        }
        text = globals.converter._dispatch("spanGamut.after", text, options, globals);
        return text;
      }));
      showdown.subParser("strikethrough", (function(text, options, globals) {
        function parseInside(txt) {
          if (options.simplifiedAutoLink) {
            txt = showdown.subParser("simplifiedAutoLinks")(txt, options, globals);
          }
          return "<del>" + txt + "</del>";
        }
        if (options.strikethrough) {
          text = globals.converter._dispatch("strikethrough.before", text, options, globals);
          text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, (function(wm, txt) {
            return parseInside(txt);
          }));
          text = globals.converter._dispatch("strikethrough.after", text, options, globals);
        }
        return text;
      }));
      showdown.subParser("stripLinkDefinitions", (function(text, options, globals) {
        var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        text += "¨0";
        var replaceFunc = function(wholeMatch, linkId, url, width, height, blankLines, title) {
          linkId = linkId.toLowerCase();
          if (url.match(/^data:.+?\/.+?;base64,/)) {
            globals.gUrls[linkId] = url.replace(/\s/g, "");
          } else {
            globals.gUrls[linkId] = showdown.subParser("encodeAmpsAndAngles")(url, options, globals);
          }
          if (blankLines) {
            return blankLines + title;
          } else {
            if (title) {
              globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
            }
            if (options.parseImgDimensions && width && height) {
              globals.gDimensions[linkId] = {
                width: width,
                height: height
              };
            }
          }
          return "";
        };
        text = text.replace(base64Regex, replaceFunc);
        text = text.replace(regex, replaceFunc);
        text = text.replace(/¨0/, "");
        return text;
      }));
      showdown.subParser("tables", (function(text, options, globals) {
        if (!options.tables) {
          return text;
        }
        var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function parseStyles(sLine) {
          if (/^:[ \t]*--*$/.test(sLine)) {
            return ' style="text-align:left;"';
          } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
            return ' style="text-align:right;"';
          } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
            return ' style="text-align:center;"';
          } else {
            return "";
          }
        }
        function parseHeaders(header, style) {
          var id = "";
          header = header.trim();
          if (options.tablesHeaderId || options.tableHeaderId) {
            id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
          }
          header = showdown.subParser("spanGamut")(header, options, globals);
          return "<th" + id + style + ">" + header + "</th>\n";
        }
        function parseCells(cell, style) {
          var subText = showdown.subParser("spanGamut")(cell, options, globals);
          return "<td" + style + ">" + subText + "</td>\n";
        }
        function buildTable(headers, cells) {
          var tb = "<table>\n<thead>\n<tr>\n", tblLgn = headers.length;
          for (var i = 0; i < tblLgn; ++i) {
            tb += headers[i];
          }
          tb += "</tr>\n</thead>\n<tbody>\n";
          for (i = 0; i < cells.length; ++i) {
            tb += "<tr>\n";
            for (var ii = 0; ii < tblLgn; ++ii) {
              tb += cells[i][ii];
            }
            tb += "</tr>\n";
          }
          tb += "</tbody>\n</table>\n";
          return tb;
        }
        function parseTable(rawTable) {
          var i, tableLines = rawTable.split("\n");
          for (i = 0; i < tableLines.length; ++i) {
            if (/^ {0,3}\|/.test(tableLines[i])) {
              tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, "");
            }
            if (/\|[ \t]*$/.test(tableLines[i])) {
              tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, "");
            }
            tableLines[i] = showdown.subParser("codeSpans")(tableLines[i], options, globals);
          }
          var rawHeaders = tableLines[0].split("|").map((function(s) {
            return s.trim();
          })), rawStyles = tableLines[1].split("|").map((function(s) {
            return s.trim();
          })), rawCells = [], headers = [], styles = [], cells = [];
          tableLines.shift();
          tableLines.shift();
          for (i = 0; i < tableLines.length; ++i) {
            if (tableLines[i].trim() === "") {
              continue;
            }
            rawCells.push(tableLines[i].split("|").map((function(s) {
              return s.trim();
            })));
          }
          if (rawHeaders.length < rawStyles.length) {
            return rawTable;
          }
          for (i = 0; i < rawStyles.length; ++i) {
            styles.push(parseStyles(rawStyles[i]));
          }
          for (i = 0; i < rawHeaders.length; ++i) {
            if (showdown.helper.isUndefined(styles[i])) {
              styles[i] = "";
            }
            headers.push(parseHeaders(rawHeaders[i], styles[i]));
          }
          for (i = 0; i < rawCells.length; ++i) {
            var row = [];
            for (var ii = 0; ii < headers.length; ++ii) {
              if (showdown.helper.isUndefined(rawCells[i][ii])) ;
              row.push(parseCells(rawCells[i][ii], styles[ii]));
            }
            cells.push(row);
          }
          return buildTable(headers, cells);
        }
        text = globals.converter._dispatch("tables.before", text, options, globals);
        text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);
        text = text.replace(tableRgx, parseTable);
        text = text.replace(singeColTblRgx, parseTable);
        text = globals.converter._dispatch("tables.after", text, options, globals);
        return text;
      }));
      showdown.subParser("underline", (function(text, options, globals) {
        if (!options.underline) {
          return text;
        }
        text = globals.converter._dispatch("underline.before", text, options, globals);
        if (options.literalMidWordUnderscores) {
          text = text.replace(/\b___(\S[\s\S]*?)___\b/g, (function(wm, txt) {
            return "<u>" + txt + "</u>";
          }));
          text = text.replace(/\b__(\S[\s\S]*?)__\b/g, (function(wm, txt) {
            return "<u>" + txt + "</u>";
          }));
        } else {
          text = text.replace(/___(\S[\s\S]*?)___/g, (function(wm, m) {
            return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
          }));
          text = text.replace(/__(\S[\s\S]*?)__/g, (function(wm, m) {
            return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
          }));
        }
        text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("underline.after", text, options, globals);
        return text;
      }));
      showdown.subParser("unescapeSpecialChars", (function(text, options, globals) {
        text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
        text = text.replace(/¨E(\d+)E/g, (function(wholeMatch, m1) {
          var charCodeToReplace = parseInt(m1);
          return String.fromCharCode(charCodeToReplace);
        }));
        text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
        return text;
      }));
      showdown.subParser("makeMarkdown.blockquote", (function(node, globals) {
        var txt = "";
        if (node.hasChildNodes()) {
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            var innerTxt = showdown.subParser("makeMarkdown.node")(children[i], globals);
            if (innerTxt === "") {
              continue;
            }
            txt += innerTxt;
          }
        }
        txt = txt.trim();
        txt = "> " + txt.split("\n").join("\n> ");
        return txt;
      }));
      showdown.subParser("makeMarkdown.codeBlock", (function(node, globals) {
        var lang = node.getAttribute("language"), num = node.getAttribute("precodenum");
        return "```" + lang + "\n" + globals.preList[num] + "\n```";
      }));
      showdown.subParser("makeMarkdown.codeSpan", (function(node) {
        return "`" + node.innerHTML + "`";
      }));
      showdown.subParser("makeMarkdown.emphasis", (function(node, globals) {
        var txt = "";
        if (node.hasChildNodes()) {
          txt += "*";
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "*";
        }
        return txt;
      }));
      showdown.subParser("makeMarkdown.header", (function(node, globals, headerLevel) {
        var headerMark = new Array(headerLevel + 1).join("#"), txt = "";
        if (node.hasChildNodes()) {
          txt = headerMark + " ";
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
        }
        return txt;
      }));
      showdown.subParser("makeMarkdown.hr", (function() {
        return "---";
      }));
      showdown.subParser("makeMarkdown.image", (function(node) {
        var txt = "";
        if (node.hasAttribute("src")) {
          txt += "![" + node.getAttribute("alt") + "](";
          txt += "<" + node.getAttribute("src") + ">";
          if (node.hasAttribute("width") && node.hasAttribute("height")) {
            txt += " =" + node.getAttribute("width") + "x" + node.getAttribute("height");
          }
          if (node.hasAttribute("title")) {
            txt += ' "' + node.getAttribute("title") + '"';
          }
          txt += ")";
        }
        return txt;
      }));
      showdown.subParser("makeMarkdown.links", (function(node, globals) {
        var txt = "";
        if (node.hasChildNodes() && node.hasAttribute("href")) {
          var children = node.childNodes, childrenLength = children.length;
          txt = "[";
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "](";
          txt += "<" + node.getAttribute("href") + ">";
          if (node.hasAttribute("title")) {
            txt += ' "' + node.getAttribute("title") + '"';
          }
          txt += ")";
        }
        return txt;
      }));
      showdown.subParser("makeMarkdown.list", (function(node, globals, type) {
        var txt = "";
        if (!node.hasChildNodes()) {
          return "";
        }
        var listItems = node.childNodes, listItemsLenght = listItems.length, listNum = node.getAttribute("start") || 1;
        for (var i = 0; i < listItemsLenght; ++i) {
          if (typeof listItems[i].tagName === "undefined" || listItems[i].tagName.toLowerCase() !== "li") {
            continue;
          }
          var bullet = "";
          if (type === "ol") {
            bullet = listNum.toString() + ". ";
          } else {
            bullet = "- ";
          }
          txt += bullet + showdown.subParser("makeMarkdown.listItem")(listItems[i], globals);
          ++listNum;
        }
        txt += "\n\x3c!-- --\x3e\n";
        return txt.trim();
      }));
      showdown.subParser("makeMarkdown.listItem", (function(node, globals) {
        var listItemTxt = "";
        var children = node.childNodes, childrenLenght = children.length;
        for (var i = 0; i < childrenLenght; ++i) {
          listItemTxt += showdown.subParser("makeMarkdown.node")(children[i], globals);
        }
        if (!/\n$/.test(listItemTxt)) {
          listItemTxt += "\n";
        } else {
          listItemTxt = listItemTxt.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n");
        }
        return listItemTxt;
      }));
      showdown.subParser("makeMarkdown.node", (function(node, globals, spansOnly) {
        spansOnly = spansOnly || false;
        var txt = "";
        if (node.nodeType === 3) {
          return showdown.subParser("makeMarkdown.txt")(node, globals);
        }
        if (node.nodeType === 8) {
          return "\x3c!--" + node.data + "--\x3e\n\n";
        }
        if (node.nodeType !== 1) {
          return "";
        }
        var tagName = node.tagName.toLowerCase();
        switch (tagName) {
         case "h1":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.header")(node, globals, 1) + "\n\n";
          }
          break;

         case "h2":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.header")(node, globals, 2) + "\n\n";
          }
          break;

         case "h3":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.header")(node, globals, 3) + "\n\n";
          }
          break;

         case "h4":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.header")(node, globals, 4) + "\n\n";
          }
          break;

         case "h5":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.header")(node, globals, 5) + "\n\n";
          }
          break;

         case "h6":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.header")(node, globals, 6) + "\n\n";
          }
          break;

         case "p":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.paragraph")(node, globals) + "\n\n";
          }
          break;

         case "blockquote":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.blockquote")(node, globals) + "\n\n";
          }
          break;

         case "hr":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.hr")(node, globals) + "\n\n";
          }
          break;

         case "ol":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.list")(node, globals, "ol") + "\n\n";
          }
          break;

         case "ul":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.list")(node, globals, "ul") + "\n\n";
          }
          break;

         case "precode":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.codeBlock")(node, globals) + "\n\n";
          }
          break;

         case "pre":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.pre")(node, globals) + "\n\n";
          }
          break;

         case "table":
          if (!spansOnly) {
            txt = showdown.subParser("makeMarkdown.table")(node, globals) + "\n\n";
          }
          break;

         case "code":
          txt = showdown.subParser("makeMarkdown.codeSpan")(node, globals);
          break;

         case "em":
         case "i":
          txt = showdown.subParser("makeMarkdown.emphasis")(node, globals);
          break;

         case "strong":
         case "b":
          txt = showdown.subParser("makeMarkdown.strong")(node, globals);
          break;

         case "del":
          txt = showdown.subParser("makeMarkdown.strikethrough")(node, globals);
          break;

         case "a":
          txt = showdown.subParser("makeMarkdown.links")(node, globals);
          break;

         case "img":
          txt = showdown.subParser("makeMarkdown.image")(node, globals);
          break;

         default:
          txt = node.outerHTML + "\n\n";
        }
        return txt;
      }));
      showdown.subParser("makeMarkdown.paragraph", (function(node, globals) {
        var txt = "";
        if (node.hasChildNodes()) {
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
        }
        txt = txt.trim();
        return txt;
      }));
      showdown.subParser("makeMarkdown.pre", (function(node, globals) {
        var num = node.getAttribute("prenum");
        return "<pre>" + globals.preList[num] + "</pre>";
      }));
      showdown.subParser("makeMarkdown.strikethrough", (function(node, globals) {
        var txt = "";
        if (node.hasChildNodes()) {
          txt += "~~";
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "~~";
        }
        return txt;
      }));
      showdown.subParser("makeMarkdown.strong", (function(node, globals) {
        var txt = "";
        if (node.hasChildNodes()) {
          txt += "**";
          var children = node.childNodes, childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "**";
        }
        return txt;
      }));
      showdown.subParser("makeMarkdown.table", (function(node, globals) {
        var txt = "", tableArray = [ [], [] ], headings = node.querySelectorAll("thead>tr>th"), rows = node.querySelectorAll("tbody>tr"), i, ii;
        for (i = 0; i < headings.length; ++i) {
          var headContent = showdown.subParser("makeMarkdown.tableCell")(headings[i], globals), allign = "---";
          if (headings[i].hasAttribute("style")) {
            var style = headings[i].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (style) {
             case "text-align:left;":
              allign = ":---";
              break;

             case "text-align:right;":
              allign = "---:";
              break;

             case "text-align:center;":
              allign = ":---:";
              break;
            }
          }
          tableArray[0][i] = headContent.trim();
          tableArray[1][i] = allign;
        }
        for (i = 0; i < rows.length; ++i) {
          var r = tableArray.push([]) - 1, cols = rows[i].getElementsByTagName("td");
          for (ii = 0; ii < headings.length; ++ii) {
            var cellContent = " ";
            if (typeof cols[ii] !== "undefined") {
              cellContent = showdown.subParser("makeMarkdown.tableCell")(cols[ii], globals);
            }
            tableArray[r].push(cellContent);
          }
        }
        var cellSpacesCount = 3;
        for (i = 0; i < tableArray.length; ++i) {
          for (ii = 0; ii < tableArray[i].length; ++ii) {
            var strLen = tableArray[i][ii].length;
            if (strLen > cellSpacesCount) {
              cellSpacesCount = strLen;
            }
          }
        }
        for (i = 0; i < tableArray.length; ++i) {
          for (ii = 0; ii < tableArray[i].length; ++ii) {
            if (i === 1) {
              if (tableArray[i][ii].slice(-1) === ":") {
                tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, "-") + ":";
              } else {
                tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, "-");
              }
            } else {
              tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
            }
          }
          txt += "| " + tableArray[i].join(" | ") + " |\n";
        }
        return txt.trim();
      }));
      showdown.subParser("makeMarkdown.tableCell", (function(node, globals) {
        var txt = "";
        if (!node.hasChildNodes()) {
          return "";
        }
        var children = node.childNodes, childrenLength = children.length;
        for (var i = 0; i < childrenLength; ++i) {
          txt += showdown.subParser("makeMarkdown.node")(children[i], globals, true);
        }
        return txt.trim();
      }));
      showdown.subParser("makeMarkdown.txt", (function(node) {
        var txt = node.nodeValue;
        txt = txt.replace(/ +/g, " ");
        txt = txt.replace(/¨NBSP;/g, " ");
        txt = showdown.helper.unescapeHTMLEntities(txt);
        txt = txt.replace(/([*_~|`])/g, "\\$1");
        txt = txt.replace(/^(\s*)>/g, "\\$1>");
        txt = txt.replace(/^#/gm, "\\#");
        txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
        txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
        txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
        txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
        txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
        return txt;
      }));
      var root = this;
      if (module.exports) {
        module.exports = showdown;
      } else {
        root.showdown = showdown;
      }
    }).call(commonjsGlobal);
  })(showdown$1);
  var showdown = showdown$1.exports;
  const removeAttributes = function() {
    let str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (str.length === 0) {
      return "";
    }
    const reg = /<\s*(\w+).*?>/gm;
    const reg2 = /\s*(\w+)=\"[^\"]+\"/gm;
    str = str.replace(reg, (match => {
      const result = match.replace(reg2, (match_ => {
        const matchFound = reg2.exec(match_);
        if (matchFound) {
          return attrs.indexOf(matchFound[1]) >= 0 ? match_ : "";
        }
        return "";
      }));
      return result;
    }));
    return str;
  };
  class CodedungeonToolbox {
    markdownToHtml() {
      let text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        removeAttributes: true
      };
      const showdownConverter = new showdown.Converter;
      let html = showdownConverter.makeHtml(text);
      if (options !== null && options !== void 0 && options.removeAttributes && options.removeAttributes) {
        html = removeAttributes(html, []);
      }
      return html;
    }
    async markdownToRtf() {
      let markdownText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      if (!(typeof markdownText === "string" && markdownText)) {
        return null;
      }
      let html = await this.markdownToHtml(markdownText);
      html = html.replace(/\n/g, "<br />");
      html = html.replace(/^\s{8}|\s+$/gm, "").replace(/^\s+/, "").replace(/[ ]{4}/g, "  ");
      let richText = html;
      richText = richText.replace(/<(?:hr)(?:\s+[^>]*)?\s*[\/]?>/gi, "{\\pard \\brdrb \\brdrs \\brdrw10 \\brsp20 \\par}\n{\\pard\\par}\n");
      richText = richText.replace(/<(?:br)(?:\s+[^>]*)?\s*[\/]?>/gi, "{\\pard\\par}\n");
      richText = richText.replace(/<(?:p|div|section|article)(?:\s+[^>]*)?\s*[\/]>/gi, "{\\pard\\par}\n");
      richText = richText.replace(/<(?:[^>]+)\/>/g, "");
      richText = richText.replace(/<a(?:\s+[^>]*)?(?:\s+href=(["'])(?:javascript:void\(0?\);?|#|return false;?|void\(0?\);?|)\1)(?:\s+[^>]*)?>/gi, "{{{\n");
      const tmpRichText = richText;
      richText = richText.replace(/<a(?:\s+[^>]*)?(?:\s+href=(["'])(.+)\1)(?:\s+[^>]*)?>/gi, '{\\field{\\*\\fldinst{HYPERLINK\n "$2"\n}}{\\fldrslt{\\ul\\cf1\n');
      const hasHyperlinks = richText !== tmpRichText;
      richText = richText.replace(/<a(?:\s+[^>]*)?>/gi, "{{{\n");
      richText = richText.replace(/<\/a(?:\s+[^>]*)?>/gi, "\n}}}");
      richText = richText.replace(/<(?:b|strong)(?:\s+[^>]*)?>/gi, "{\\b\n");
      richText = richText.replace(/<(?:i|em)(?:\s+[^>]*)?>/gi, "{\\i\n");
      richText = richText.replace(/<(?:u|ins)(?:\s+[^>]*)?>/gi, "{\\ul\n");
      richText = richText.replace(/<(?:strike|del)(?:\s+[^>]*)?>/gi, "{\\strike\n");
      richText = richText.replace(/<sup(?:\s+[^>]*)?>/gi, "{\\super\n");
      richText = richText.replace(/<sub(?:\s+[^>]*)?>/gi, "{\\sub\n");
      richText = richText.replace(/<(?:p|div|section|article)(?:\s+[^>]*)?>/gi, "{\\pard\n");
      richText = richText.replace(/<\/(?:p|div|section|article)(?:\s+[^>]*)?>/gi, "\n\\par}\n");
      richText = richText.replace(/<\/(?:b|strong|i|em|u|ins|strike|del|sup|sub)(?:\s+[^>]*)?>/gi, "\n}");
      richText = richText.replace(/<(?:[^>]+)>/g, "");
      richText = "{\\rtf1\\ansi\n" + (hasHyperlinks ? "{\\colortbl\n;\n\\red0\\green0\\blue255;\n}\n" : "") + richText + "\n}";
      return richText;
    }
    reorderList() {
      let listData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      const workingData = [ ...listData ];
      let lineItem = 0;
      for (let index = 0; index < workingData.length; index++) {
        if (workingData[index].charCodeAt(0) !== 9) {
          const startsWithIndex = new RegExp("[0-9]+.");
          if (startsWithIndex.test(workingData[index])) {
            const starting = workingData[index].indexOf(".");
            if (starting >= 0) {
              lineItem++;
              const numberIndex = workingData[index].substring(0, starting);
              workingData[index] = workingData[index].replace(numberIndex, "".concat(lineItem));
            }
          }
        }
      }
      return workingData;
    }
  }
  async function convertToHtml() {
    const toolbox = new CodedungeonToolbox;
    const note = Editor.content || "";
    const html = toolbox.markdownToHtml(note);
    Clipboard.string = html;
    if (html.length > 0) {
      await showMessage("Content Copied To Clipboard");
    } else {
      await showMessage("An error occured converting content to HTML");
    }
  }
  async function convertSelectionToHtml() {
    const toolbox = new CodedungeonToolbox;
    const note = Editor.selectedLinesText.join("\n") || "";
    const html = toolbox.markdownToHtml(note);
    Clipboard.string = html;
    if (html.length > 0) {
      await showMessage("Content Copied To Clipboard");
    } else {
      await showMessage("An error occured converting content to HTML");
    }
  }
  async function reorderList() {
    const toolbox = new CodedungeonToolbox;
    const listData = Editor.selectedLinesText;
    const newList = await toolbox.reorderList(listData);
    Editor.replaceSelectionWithText(newList.join("\n"));
  }
  exports.convertSelectionToHtml = convertSelectionToHtml;
  exports.convertToHtml = convertToHtml;
  exports.reorderList = reorderList;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  return exports;
}({});

Object.assign(typeof globalThis == "undefined" ? this : globalThis, exports);
