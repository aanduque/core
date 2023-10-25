var exports = function(exports) {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
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
  var json5 = dist.exports;
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
  const todaysDateISOString = (new Date).toISOString().slice(0, 10);
  (new Date).toISOString().slice(0, 16);
  const nowLocaleDateTime = (new Date).toLocaleString();
  function getYearMonthDate(dateObj) {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    return {
      year: year,
      month: month,
      date: date
    };
  }
  function hyphenatedDate(date) {
    if (date != null) {
      return toLocaleDateString(date, "sv-SE");
    } else {
      return "error: not a daily note";
    }
  }
  function toLocaleDateTimeString(dateObj, locale = [], options = {}) {
    return dateObj.toLocaleString(locale, options);
  }
  function toLocaleDateString(dateObj, locale = [], options = {}) {
    return dateObj.toLocaleDateString(locale, options);
  }
  function toLocaleTime(dateObj, locale = [], options = {}) {
    return dateObj.toLocaleTimeString(locale, options);
  }
  function unhyphenatedDate(dateObj) {
    const {year: year, month: month, date: date} = getYearMonthDate(dateObj);
    return "".concat(year).concat(month < 10 ? "0" : "").concat(month).concat(date < 10 ? "0" : "").concat(date);
  }
  function hyphenatedDateString(dateObj) {
    const {year: year, month: month, date: date} = getYearMonthDate(dateObj);
    return "".concat(year, "-").concat(month < 10 ? "0" : "").concat(month, "-").concat(date < 10 ? "0" : "").concat(date);
  }
  function dateStringFromCalendarFilename(filename) {
    return filename.slice(0, 8);
  }
  const monthsAbbrev = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  function monthNameAbbrev(m) {
    return monthsAbbrev[m - 1];
  }
  function withinDateRange(testDate, fromDate, toDate) {
    return testDate >= fromDate && testDate <= toDate;
  }
  function quarterStartEnd(qtr, year) {
    let startDate = new Date;
    let endDate = new Date;
    const TZOffset = (new Date).getTimezoneOffset();
    switch (qtr) {
     case 1:
      {
        startDate = Calendar.addUnitToDate(Calendar.dateFrom(year, 1, 1, 0, 0, 0), "minute", -TZOffset);
        endDate = Calendar.addUnitToDate(Calendar.dateFrom(year, 3, 31, 0, 0, 0), "minute", -TZOffset);
        break;
      }

     case 2:
      {
        startDate = Calendar.addUnitToDate(Calendar.dateFrom(year, 4, 1, 0, 0, 0), "minute", -TZOffset);
        endDate = Calendar.addUnitToDate(Calendar.dateFrom(year, 6, 30, 0, 0, 0), "minute", -TZOffset);
        break;
      }

     case 3:
      {
        startDate = Calendar.addUnitToDate(Calendar.dateFrom(year, 7, 1, 0, 0, 0), "minute", -TZOffset);
        endDate = Calendar.addUnitToDate(Calendar.dateFrom(year, 9, 30, 0, 0, 0), "minute", -TZOffset);
        break;
      }

     case 4:
      {
        startDate = Calendar.addUnitToDate(Calendar.dateFrom(year, 10, 1, 0, 0, 0), "minute", -TZOffset);
        endDate = Calendar.addUnitToDate(Calendar.dateFrom(year, 12, 31, 0, 0, 0), "minute", -TZOffset);
        break;
      }

     default:
      {
        console.log("error: invalid quarter given: ".concat(qtr));
        break;
      }
    }
    return [ startDate, endDate ];
  }
  function getWeek(inDate) {
    const date = inDate instanceof Date ? new Date(inDate.getFullYear(), inDate.getMonth(), inDate.getDate()) : new Date;
    const nDay = date.getDay();
    date.setDate(date.getDate() - nDay + 3);
    const n1stThursday = date.valueOf();
    date.setMonth(0, 1);
    if (date.getDay() !== 4) {
      date.setMonth(0, 1 + (4 - date.getDay() + 7) % 7);
    }
    return 1 + Math.ceil((n1stThursday - date) / 6048e5);
  }
  function weekStartEnd(week, year) {
    if (week > 53 || week < 1) {
      console.log("warning: invalid week number ".concat(week, " given, but will still calculate correctly, relative to year ").concat(year, "."));
    }
    let firstDay = 0;
    let testWeek = 0;
    do {
      firstDay++;
      testWeek = getWeek(new Date(year, 0, firstDay));
    } while (testWeek !== 1);
    const startDate = Calendar.addUnitToDate(new Date(year, 0, firstDay), "day", (week - 1) * 7);
    const endDate = Calendar.addUnitToDate(startDate, "day", 6);
    console.log("  -> ".concat(toLocaleTime(startDate), " - ").concat(toLocaleTime(endDate)));
    return [ startDate, endDate ];
  }
  async function chooseOption(message, options, defaultValue) {
    var _options$index$value, _options$index;
    const {index: index} = await CommandBar.showOptions(options.map((option => option.label)), message);
    return (_options$index$value = (_options$index = options[index]) === null || _options$index === void 0 ? void 0 : _options$index.value) !== null && _options$index$value !== void 0 ? _options$index$value : defaultValue;
  }
  async function getInput(message, okLabel = "OK") {
    return await CommandBar.showInput(message, okLabel);
  }
  async function showMessage(message, confirmTitle = "OK") {
    await CommandBar.showOptions([ confirmTitle ], message);
  }
  async function parseJSON5(contents) {
    try {
      const value = json5.parse(contents);
      return value;
    } catch (e) {
      console.log(e);
      await showMessage("Invalid JSON5 in your configuration. Please fix it to use configuration");
      return {};
    }
  }
  DataStore.defaultFileExtension != null ? DataStore.defaultFileExtension : "md";
  DataStore.preference("defaultTodoCharacter") != null ? DataStore.preference("defaultTodoCharacter") : "*";
  function displayTitle(n) {
    if (n.type === "Calendar" && n.date != null) {
      return hyphenatedDateString(n.date);
    } else {
      var _n$title;
      return (_n$title = n.title) !== null && _n$title !== void 0 ? _n$title : "";
    }
  }
  function getFolderFromFilename(fullFilename) {
    const filenameParts = fullFilename.split("/");
    return filenameParts.slice(0, filenameParts.length - 1).join("/");
  }
  const staticTemplateFolder = "📋 Templates";
  function getTemplateFolder() {
    return DataStore.folders.find((f => f.includes(staticTemplateFolder)));
  }
  function createDefaultConfigNote() {
    const folder = getTemplateFolder();
    if (folder != null) {
      DataStore.newNote(CONFIG, folder);
    }
  }
  async function getOrMakeTemplateFolder() {
    let folder = getTemplateFolder();
    if (folder == null) {
      console.log("  getOrMakeTemplateFolder: no folder found");
      const shouldCreateFolder = await chooseOption("No templates folder found.", [ {
        label: "✅ Create ".concat(staticTemplateFolder, " with samples"),
        value: true
      }, {
        label: "❌ Cancel command",
        value: false
      } ], false);
      if (!shouldCreateFolder) {
        return;
      }
      const subFolder = await chooseOption("Select a location for the templates folder.", DataStore.folders.map((folder => ({
        label: folder,
        value: folder + (folder.endsWith("/") ? "" : "/")
      }))), "");
      folder = subFolder + staticTemplateFolder;
      DataStore.newNote(DAILY_NOTE_TEMPLATE, folder);
      DataStore.newNote(MEETING_NOTE_TEMPLATE, folder);
      DataStore.newNote(TAGS_TEMPLATE, folder);
      DataStore.newNote(CONFIG, folder);
      folder = folder.startsWith("/") ? folder.slice(1) : folder;
      console.log('-> "'.concat(folder, '" folder created with samples'));
      await showMessage('"'.concat(folder, '" folder created with samples'));
    }
    return folder;
  }
  const DAILY_NOTE_TEMPLATE = "Daily Note Template\n---\n## Tasks\n\n## Media\n> {{quote()}}\n\n## Journal\nWeather: {{weather()}}\n";
  const MEETING_NOTE_TEMPLATE = "Meeting Note Template\n---\n## Project X Meeting on [[{{date-as-YYYY-MM-DD}}]] with {{people list}}\n\n## Notes\n\n## Actions\n";
  const TAGS_TEMPLATE = "Tags Template\n---\n# {{title}}\n\nCreated on {{date({locale: 'en-US', dateStyle: 'short'})}}\n";
  const CONFIG = " _configuration\n---\n# Template Tag Configuration\nThis note provides a central location where you can configure various plugin options:\n\n- Use the fenced code block below (which comes after a line made by 3 dashes) to customize global values for the various template tags.\n\n- NotePlan plugin configuration uses JSON5 [JSON5 | JSON for Humans](https://json5.org/), which is a human-friendly superset of JSON, providing things such as comments, unquoted keys and other common patterns available in standard JavaScript objects.\n\n\t*Note: Despite JSON5 enhancements, multi-line strings are not supported, therefore to include them you need to use \"\\n\" (new line) for line breaks rather than actual line breaks.*\n\n- Use the code block marked as `javascript` shown below to write your own custom custom configurations.\n\n- While it is possible to have multiple `javascript` code blocks in this document, only the **first** code block will be used.\n\n- If you have a quoted \"string\" which you want to have a **line break**, insert a \"\\n\" (i.e. backslash-n) where you want the line break, e.g., \"These\\nAre\\nThree lines\".\n\n### Validating Configuration\nThe configuration code blocks below are validated in **realtime** by NotePlan as you edit:\n\n- If there is a configuration mistake, all code below will all be a single color (based on theme).\n- If the configuration passes the validation, you will see configuration settings will be formatted based on your current theme (e.g., orange, green, purple, black, etc.).\n\n**TIP:** If your configuration is invalid, you can copy/paste the configuration block to [JSON5 Validator Online - JSON5 lint Tool to validate JSON5 data](https://codebeautify.org/json5-validator) which will provide details about the error(s) in your code block, indicating which line(s) contain the error(s).\n\n### Reporting Plugin Issues\nShould you run into an issue with a NotePlan plugin, you can use one of the following methods (in order of priority)\n- 🐞 [NotePlan Plugin Issues](https://github.com/NotePlan/plugins/issues/new/choose)\n- 🧩 [Discord](https://discord.com/channels/763107030223290449/784376250771832843)\n- 📪 [NotePlan Support](hello@noteplan.io)\n*****\n## Plugin Configuration\n*Note: While the following code block is marked as `javascript` it is actually `JSON5` and is only marked as `javascript` so that your theme will provide the appropriate syntax highlighting.*\n\n```javascript\n{\n  // Note Even though it is fenced as \"javascript\", this configuration is actually JSON5.\n\n  // configuration for dates, heavily based on javascript's Intl module\n  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat\n\n  date: {\n    // Default timezone for date and time.\n    timezone: 'automatic',\n    // Default locale to format date and time.\n    // e.g. en-US will result in mm/dd/yyyy, while en_GB will be dd/mm/yyyy\n    locale: 'en-US',\n    // can be \"short\", \"medium\", \"long\" or \"full\"\n    dateStyle: 'short',\n    // optional key, can be \"short\", \"medium\", \"long\" or \"full\"\n    timeStyle: 'short',\n    // time format when invoking dwertheimer.DateAutomations/formatted\n    // see https://www.strfti.me/ to aid in creating custom formats)\n    format: '%Y-%m-%d %I:%M:%S %P'\n  },\n\n\n  // configuration for weather data (used in Daily Note Template, for example)\n  weather: {\n    // API key for https://openweathermap.org/\n    // !!REQUIRED!!\n    openWeatherAPIKey: '... put your API key here ...',\n    // Required location for weather forecast\n    latPosition: 0.0,\n    longPosition: 0.0,\n    // Default units. Can be 'metric' (for Celsius), or 'imperial' (for Fahrenheit)\n    openWeatherUnits: 'metric',\n  },\n\n\n  // configuration for daily quote (used in Daily Note Template, for example)\n  quote: {\n    // Available modes: [random (default), today, author]\n    mode: 'today',\n    // API key required, available authors: https://premium.zenquotes.io/available-authors/\n    author: 'anne-frank',\n    // Required for mode: 'author' (from https://premium.zenquotes.io/)\n    apiKey: '... put your API key here ...',\n  },\n\n\n  // default values for custom tags.\n  // These tags cannot be functions, but you may choose to have nested objects.\n  // feel free to edit this value however you see fit.\n  tagValue: {\n    me: {\n      // Can be used as {{me.firstName}}\n      firstName: 'John',\n      // Can be used as {{me.lastName}}\n      lastName: 'Doe',\n    }\n    // ...\n  },\n}\n\n```\n\n";
  const ALLOWED_FORMATS = [ "javascript", "json", "json5", "yaml", "toml", "ini" ];
  const FORMAT_MAP = {
    javascript: "json5",
    ini: "toml"
  };
  async function parseFirstCodeblock(block) {
    var _FORMAT_MAP$format;
    if (block == null) {
      await showMessage("No configuration block found in configuration file.");
      return {};
    }
    let [format, ...contents] = block.split("\n");
    contents = contents.join("\n");
    format = format.trim();
    if (!ALLOWED_FORMATS.includes(format)) {
      await showMessage("Invalid configuration format in the config file.");
      return {};
    }
    format = (_FORMAT_MAP$format = FORMAT_MAP[format]) !== null && _FORMAT_MAP$format !== void 0 ? _FORMAT_MAP$format : format;
    switch (format) {
     case "json5":
      return parseJSON5(contents);

     default:
      console.log("\tparseFirstCodeblock: error: can't deal with format ".concat(format));
    }
  }
  async function getOrMakeConfigurationSection(configSectionName, configSectionDefault = "", minimumRequiredConfig = {}) {
    var _configFile, _await$parseFirstCode;
    let templateFolder = await getOrMakeTemplateFolder();
    if (templateFolder == null) {
      console.log("  getOrMakeConfigurationSection: couldn't find the templateFolder ... will try to create it ...");
      templateFolder = getOrMakeTemplateFolder();
      return {};
    }
    let configFile = DataStore.projectNotes.filter((n => {
      var _n$filename3;
      return (_n$filename3 = n.filename) === null || _n$filename3 === void 0 ? void 0 : _n$filename3.startsWith(templateFolder);
    })).find((n => {
      var _n$title3;
      return !!((_n$title3 = n.title) !== null && _n$title3 !== void 0 && _n$title3.startsWith("_configuration"));
    }));
    if (configFile == null) {
      console.log("  getOrMakeConfigurationSection: Error: cannot find '_configuration' file. Will create from default.");
      createDefaultConfigNote();
      configFile = DataStore.projectNotes.filter((n => {
        var _n$filename4;
        return (_n$filename4 = n.filename) === null || _n$filename4 === void 0 ? void 0 : _n$filename4.startsWith(templateFolder);
      })).find((n => {
        var _n$title4;
        return !!((_n$title4 = n.title) !== null && _n$title4 !== void 0 && _n$title4.startsWith("_configuration"));
      }));
    }
    const content = (_configFile = configFile) === null || _configFile === void 0 ? void 0 : _configFile.content;
    if (configFile == null || content == null) {
      console.log("  getOrMakeConfigurationSection: Error: '_configuration' file not found or empty");
      await showMessage("Error: missing or empty '_configuration' file. Please check.");
      return {};
    }
    const firstCodeblock = content.split("\n```")[1];
    const config = (_await$parseFirstCode = await parseFirstCodeblock(firstCodeblock)) !== null && _await$parseFirstCode !== void 0 ? _await$parseFirstCode : {};
    if (firstCodeblock == null || config[configSectionName] == null) {
      console.log("  getOrMakeConfigurationSection: no '".concat(configSectionName, "' config section found"));
      if (configSectionDefault === "") {
        console.log("  getOrMakeConfigurationSection: no default given");
        return {};
      }
      console.log("  getOrMakeConfigurationSection: default available");
      const shouldAddDefaultConfig = await chooseOption("No '".concat(configSectionName, "' configuration section found."), [ {
        label: "✅ Create ".concat(configSectionName, " configuration from its defaults"),
        value: true
      }, {
        label: "❌ Don't Create; cancel command",
        value: false
      } ], false);
      if (!shouldAddDefaultConfig) {
        return {};
      }
      const backtickParas = configFile.paragraphs.filter((p => p.content.match(/```/)));
      if (backtickParas.length > 0 && backtickParas[0].content.endsWith("javascript")) {
        const startFirstBlockLineNumber = backtickParas[0].lineIndex + 2;
        if (startFirstBlockLineNumber !== undefined) {
          configFile.insertParagraph(configSectionDefault, startFirstBlockLineNumber, "text");
          await showMessage("Inserted default configuration for ".concat(configSectionName, "."), "OK: I will cancel and check this before re-running the command.");
          return {};
        } else {
          await showMessage("Error: cannot create default configuration for ".concat(configSectionName), "OK: I will cancel and check this before re-running the command.");
          Editor.openNoteByFilename(configFile.filename);
          return {};
        }
      } else {
        const configAsJSBlock = "``` javascript\n{\n".concat(configSectionDefault, "\n}\n```");
        configFile.insertParagraph(configAsJSBlock, 2, "text");
        await showMessage("Created default configuration for ".concat(configSectionName, "."), "OK: I will cancel and check this before re-running the command.");
        return {};
      }
    }
    if (Object.keys(minimumRequiredConfig) && config[configSectionName]) {
      return validateMinimumConfig(config[configSectionName], minimumRequiredConfig);
    } else {
      return config[configSectionName];
    }
  }
  function validateMinimumConfig(config, validations) {
    let failed = false;
    if (Object.keys(validations).length) {
      Object.keys(validations).forEach((v => {
        if (config[v] == null) {
          console.log("    validateMinimumConfig: Config required field: ".concat(v, " is missing"));
          failed = true;
        }
        if (typeof config[v] !== validations[v]) {
          console.log("    validateMinimumConfig: Config required field: ".concat(v, " is not of type ").concat(String(validations[v])));
          failed = true;
        }
      }));
    }
    if (failed) {
      console.log("    validateMinimumConfig: Config failed minimum validation spec!");
      return {};
    } else {
      console.log("    validateMinimumConfig: passed minimum validation spec");
      return config;
    }
  }
  const DEFAULT_SUMMARIES_OPTIONS = "  summaries: {\n    folderToStore: 'Summaries', // folder to store any output files in\n    foldersToIgnore: ['📋 Templates', 'Summaries'], // list of folders to exlude in these commands. Note that @Trash and @Archive are always excluded\n    headingLevel: 2, // use level 1-5 headings when writing output to notes\n    // settings for 'countsInPeriod':\n    hashtagCountsHeading: '#hashtag counts',\n    mentionCountsHeading: '@mention counts',\n    showAsHashtagOrMention: true, // or false to hide # and @ characters\n    // In the following the includes (if specified) takes precedence over excludes ...\n    includeHashtags: [], // e.g. ['#holiday','#jog','#commute','#webinar']\n    excludeHashtags: [],\n    includeMentions: [], // e.g. ['@work','@fruitveg','@words']\n    excludeMentions: ['@done', '@repeat'],\n    // settings for 'occurrencesInPeriod':\n    occurrencesHeading: 'Occurrences',\n    occurrencesToMatch: ['idea', '@review', '#question'],\n    highlightOccurrences: false, // use ==highlight== of matched occurrences in output\n    showEmptyOccurrences: false, // if no occurrences found of this string to match, make this clear\n    dateStyle: 'link', // where the context for an occurrence is a date, does it get appended as a 'date' using your locale, or as a NP date 'link' (>date) or 'none'\n  },\n";
  async function getPeriodStartEndDates(question = "Create stats for which period?") {
    const period = await chooseOption(question, [ {
      label: "Last Week",
      value: "lw"
    }, {
      label: "This week so far",
      value: "wtd"
    }, {
      label: "Other Week",
      value: "ow"
    }, {
      label: "Last Month",
      value: "lm"
    }, {
      label: "This Month (to date)",
      value: "mtd"
    }, {
      label: "Other Month",
      value: "om"
    }, {
      label: "Last Quarter",
      value: "lq"
    }, {
      label: "This Quarter (to date)",
      value: "qtd"
    }, {
      label: "Other Quarter",
      value: "oq"
    }, {
      label: "Last Year",
      value: "ly"
    }, {
      label: "Year to date",
      value: "ytd"
    }, {
      label: "Other Year",
      value: "oy"
    } ], "mtd");
    let fromDate = new Date;
    let toDate = new Date;
    let periodString = "";
    let periodPartStr = "";
    const todaysDate = new Date;
    const y = todaysDate.getFullYear();
    const m = todaysDate.getMonth() + 1;
    const d = todaysDate.getDate();
    const TZOffset = (new Date).getTimezoneOffset();
    console.log("TimeZone Offset = ".concat(TZOffset));
    switch (period) {
     case "lm":
      {
        fromDate = Calendar.addUnitToDate(Calendar.dateFrom(y, m, 1, 0, 0, 0), "minute", -TZOffset);
        fromDate = Calendar.addUnitToDate(fromDate, "month", -1);
        toDate = Calendar.addUnitToDate(fromDate, "month", 1);
        toDate = Calendar.addUnitToDate(toDate, "day", -1);
        periodString = "".concat(monthNameAbbrev(fromDate.getMonth() + 1), " ").concat(y);
        break;
      }

     case "mtd":
      {
        fromDate = Calendar.addUnitToDate(Calendar.dateFrom(y, m, 1, 0, 0, 0), "minute", -TZOffset);
        toDate = Calendar.dateFrom(y, m, d, 0, 0, 0);
        periodString = "".concat(monthNameAbbrev(m), " ").concat(y);
        periodPartStr = "(to ".concat(todaysDateISOString, ")");
        break;
      }

     case "om":
      {
        const theM = Number(await getInput("Choose month, (1-12)", "OK"));
        const theY = Number(await getInput("Choose date, e.g. 2019", "OK"));
        fromDate = Calendar.addUnitToDate(Calendar.dateFrom(theY, theM, 1, 0, 0, 0), "minute", -TZOffset);
        toDate = Calendar.addUnitToDate(fromDate, "month", 1);
        toDate = Calendar.addUnitToDate(toDate, "day", -1);
        periodString = "".concat(monthNameAbbrev(theM), " ").concat(theY);
        break;
      }

     case "lq":
      {
        const thisQ = Math.floor((m - 1) / 3) + 1;
        const lastQ = thisQ > 0 ? thisQ - 1 : 4;
        const lastY = lastQ === 4 ? y - 1 : y;
        const [f, t] = quarterStartEnd(lastQ, lastY);
        fromDate = f;
        toDate = t;
        const lastQStartMonth = (lastQ - 1) * 3 + 1;
        toDate = Calendar.addUnitToDate(fromDate, "month", 3);
        toDate = Calendar.addUnitToDate(toDate, "day", -1);
        periodString = "".concat(lastY, " Q").concat(lastQ, " (").concat(monthNameAbbrev(lastQStartMonth), "-").concat(monthNameAbbrev(lastQStartMonth + 2), ")");
        break;
      }

     case "qtd":
      {
        const thisQ = Math.floor((m - 1) / 3) + 1;
        const thisQStartMonth = (thisQ - 1) * 3 + 1;
        fromDate = Calendar.addUnitToDate(Calendar.dateFrom(y, thisQStartMonth, 1, 0, 0, 0), "minute", -TZOffset);
        toDate = Calendar.addUnitToDate(Calendar.dateFrom(y, m, d, 0, 0, 0), "minute", -TZOffset);
        periodString = "".concat(y, " Q").concat(thisQ, " (").concat(monthNameAbbrev(thisQStartMonth), "-").concat(monthNameAbbrev(thisQStartMonth + 2), ")");
        periodPartStr = "(to ".concat(todaysDateISOString, ")");
        break;
      }

     case "oq":
      {
        const theQ = Number(await getInput("Choose quarter, (1-4)", "OK"));
        const theY = Number(await getInput("Choose date, e.g. 2019", "OK"));
        const theQStartMonth = (theQ - 1) * 3 + 1;
        const [f, t] = quarterStartEnd(theQ, theY);
        fromDate = f;
        toDate = t;
        toDate = Calendar.addUnitToDate(fromDate, "month", 3);
        toDate = Calendar.addUnitToDate(toDate, "day", -1);
        periodString = "".concat(theY, " Q").concat(theQ, " (").concat(monthNameAbbrev(theQStartMonth), "-").concat(monthNameAbbrev(theQStartMonth + 2), ")");
        break;
      }

     case "lw":
      {
        const currentWeekNum = getWeek(todaysDate);
        let lastWeekNum = 0;
        let newY = y;
        if (currentWeekNum === 1) {
          lastWeekNum = 52;
          newY--;
        } else {
          lastWeekNum = currentWeekNum - 1;
        }
        [fromDate, toDate] = weekStartEnd(lastWeekNum, newY);
        periodString = "W".concat(lastWeekNum, " ").concat(newY);
        break;
      }

     case "wtd":
      {
        const currentWeekNum = getWeek(todaysDate);
        const tempObj = weekStartEnd(currentWeekNum, y);
        fromDate = tempObj[0];
        toDate = tempObj[1];
        periodString = "W".concat(currentWeekNum, " ").concat(y);
        break;
      }

     case "ow":
      {
        const weekNum = Number(await getInput("Choose week number, 1-53", "OK"));
        const theYear = Number(await getInput("Choose date, e.g. 2021", "OK"));
        const tempObj = weekStartEnd(weekNum, theYear);
        fromDate = tempObj[0];
        toDate = tempObj[1];
        periodString = "W".concat(weekNum, " ").concat(theYear);
        break;
      }

     case "ly":
      {
        fromDate = Calendar.addUnitToDate(Calendar.dateFrom(y - 1, 1, 1, 0, 0, 0), "minute", -TZOffset);
        toDate = Calendar.addUnitToDate(Calendar.dateFrom(y - 1, 12, 31, 0, 0, 0), "minute", -TZOffset);
        periodString = "".concat(y - 1);
        break;
      }

     case "ytd":
      {
        fromDate = Calendar.addUnitToDate(Calendar.dateFrom(y, 1, 1, 0, 0, 0), "minute", -TZOffset);
        toDate = Calendar.addUnitToDate(Calendar.dateFrom(y, m, d, 0, 0, 0), "minute", -TZOffset);
        periodString = "".concat(y);
        periodPartStr = "(to ".concat(todaysDateISOString, ")");
        break;
      }

     case "oy":
      {
        const theYear = Number(await getInput("Choose date, e.g. 2019", "OK"));
        fromDate = Calendar.addUnitToDate(Calendar.dateFrom(theYear, 1, 1, 0, 0, 0), "minute", -TZOffset);
        toDate = Calendar.addUnitToDate(Calendar.dateFrom(theYear, 12, 31, 0, 0, 0), "minute", -TZOffset);
        periodString = "".concat(theYear);
        break;
      }
    }
    return [ fromDate, toDate, periodString, periodPartStr ];
  }
  function removeSection(note, heading) {
    var _note$title;
    const ps = note.paragraphs;
    let existingHeadingIndex = ps.length;
    let sectionHeadingLevel = 2;
    console.log("\tremoveSection: '".concat(heading, "' from note '").concat((_note$title = note.title) !== null && _note$title !== void 0 ? _note$title : "", "' with ").concat(ps.length, " paras:"));
    for (const p of ps) {
      if (p.type === "title" && p.content.startsWith(heading)) {
        existingHeadingIndex = p.lineIndex;
        sectionHeadingLevel = p.headingLevel;
      }
    }
    if (existingHeadingIndex !== undefined && existingHeadingIndex < ps.length) {
      const psToRemove = [];
      note.removeParagraph(ps[existingHeadingIndex]);
      for (let i = existingHeadingIndex + 1; i < ps.length; i++) {
        if (ps[i].type === "title" && ps[i].headingLevel <= sectionHeadingLevel) {
          break;
        }
        psToRemove.push(ps[i]);
      }
      note.removeParagraphs(psToRemove);
      console.log("\t  -> removed ".concat(psToRemove.length, " paragraphs"));
      return existingHeadingIndex;
    } else {
      return ps.length;
    }
  }
  async function gatherMatchingLines(notes, stringToLookFor, highlightOccurrences = true, dateStyle = "link") {
    console.log("Looking for '".concat(stringToLookFor, "' in ").concat(notes.length, " notes"));
    CommandBar.showLoading(true, "Searching in ".concat(notes.length, " notes ..."));
    await CommandBar.onAsyncThread();
    const matches = [];
    const noteContexts = [];
    let i = 0;
    for (const n of notes) {
      var _n$title;
      i += 1;
      const noteContext = n.date == null ? "[[".concat((_n$title = n.title) !== null && _n$title !== void 0 ? _n$title : "", "]]") : dateStyle.startsWith("link") ? " >".concat(hyphenatedDate(n.date)) : dateStyle === "date" ? " (".concat(toLocaleDateTimeString(n.date), ")") : "";
      const matchingParas = n.paragraphs.filter((q => q.content.includes(stringToLookFor)));
      for (const p of matchingParas) {
        let matchLine = p.content;
        if (stringToLookFor.endsWith("::") && matchLine.startsWith(stringToLookFor)) {
          matchLine = matchLine.replace(stringToLookFor, "");
        }
        if (highlightOccurrences) {
          matchLine = matchLine.replace(stringToLookFor, "==".concat(stringToLookFor, "=="));
        }
        matches.push(matchLine.trim());
        noteContexts.push(noteContext);
      }
      if (i % 10 === 0) {
        CommandBar.showLoading(true, "Searching in ".concat(notes.length, " notes ..."), i / notes.length);
      }
    }
    await CommandBar.onMainThread();
    CommandBar.showLoading(false);
    return [ matches, noteContexts ];
  }
  let pref_folderToStore$2;
  let pref_headingLevel$2;
  let pref_hashtagCountsHeading;
  let pref_mentionCountsHeading;
  let pref_showAsHashtagOrMention = false;
  let pref_includeHashtags = [];
  let pref_excludeHashtags = [];
  let pref_includeMentions = [];
  let pref_excludeMentions = [];
  async function getPluginSettings$2() {
    const summConfig = await getOrMakeConfigurationSection("summaries", DEFAULT_SUMMARIES_OPTIONS);
    if (summConfig == null) {
      console.log("\tCouldn't find 'summaries' settings in _configuration note.");
      return;
    }
    console.log("\tFound 'summaries' settings in _configuration note.");
    pref_folderToStore$2 = summConfig.folderToStore != null ? summConfig.folderToStore : "Summaries";
    pref_hashtagCountsHeading = summConfig.hashtagCountsHeading != null ? summConfig.hashtagCountsHeading : "#hashtag counts";
    pref_mentionCountsHeading = summConfig.mentionCountsHeading != null ? summConfig.mentionCountsHeading : "@mention counts";
    pref_headingLevel$2 = summConfig.headingLevel != null ? summConfig.headingLevel : 2;
    pref_showAsHashtagOrMention = summConfig.showAsHashtagOrMention != null ? summConfig.showAsHashtagOrMention : true;
    pref_includeHashtags = summConfig.includeHashtags != null ? summConfig.includeHashtags : [];
    pref_excludeHashtags = summConfig.excludeHashtags != null ? summConfig.excludeHashtags : [];
    pref_includeMentions = summConfig.includeMentions != null ? summConfig.includeMentions : [];
    pref_excludeMentions = summConfig.excludeMentions != null ? summConfig.excludeMentions : [ "@done", "@repeat" ];
  }
  async function statsPeriod() {
    var _results, _results2, _results3, _results4;
    await getPluginSettings$2();
    const [fromDate, toDate, periodString, periodPartStr] = await getPeriodStartEndDates();
    if (fromDate == null || toDate == null) {
      console.log("\nstatsPeriod: error in calculating dates for chosen time period");
      return;
    }
    const fromDateStr = unhyphenatedDate(fromDate);
    const toDateStr = unhyphenatedDate(toDate);
    console.log("");
    console.log("statsPeriod: calculating for ".concat(periodString, " (").concat(fromDateStr, " - ").concat(toDateStr, "):"));
    const hOutputArray = [];
    let results = calcHashtagStatsPeriod(fromDateStr, toDateStr);
    const hCounts = (_results = results) === null || _results === void 0 ? void 0 : _results[0];
    const hSumTotals = (_results2 = results) === null || _results2 === void 0 ? void 0 : _results2[1];
    if (hSumTotals == null || hCounts == null) {
      console.log("no hSumTotals value");
      return;
    }
    for (const [key, value] of hSumTotals) {
      const hashtagString = pref_showAsHashtagOrMention ? key : key.slice(1);
      const count = hCounts.get(key);
      if (count != null) {
        const total = value.toFixed(0);
        const average = (value / count).toFixed(1);
        hOutputArray.push("".concat(hashtagString, "\t").concat(count, "\t(total ").concat(total, "\taverage ").concat(average, ")"));
        hCounts.delete(key);
      }
    }
    for (const [key, value] of hCounts) {
      const hashtagString = pref_showAsHashtagOrMention ? key : key.slice(1);
      hOutputArray.push("".concat(hashtagString, "\t").concat(value));
    }
    if (hOutputArray.length > 0) {
      hOutputArray.sort();
    } else {
      hOutputArray.push("(none)");
    }
    const mOutputArray = [];
    results = calcMentionStatsPeriod(fromDateStr, toDateStr);
    const mCounts = (_results3 = results) === null || _results3 === void 0 ? void 0 : _results3[0];
    const mSumTotals = (_results4 = results) === null || _results4 === void 0 ? void 0 : _results4[1];
    if (mCounts == null || mSumTotals == null) {
      return;
    }
    for (const [key, value] of mSumTotals) {
      const mentionString = pref_showAsHashtagOrMention ? key : key.slice(1);
      const count = mCounts.get(key);
      if (count != null) {
        const total = value.toFixed(0);
        const average = (value / count).toFixed(1);
        mOutputArray.push("".concat(mentionString, "\t").concat(count, "\t(total ").concat(total, "\taverage ").concat(average, ")"));
        mCounts.delete(key);
      }
    }
    for (const [key, value] of mCounts) {
      const mentionString = pref_showAsHashtagOrMention ? key : key.slice(1);
      mOutputArray.push("".concat(mentionString, "\t").concat(value));
    }
    if (mOutputArray.length > 0) {
      mOutputArray.sort();
    } else {
      mOutputArray.push("(none)");
    }
    const labelString = "🖊 Create/update a note in folder '".concat(pref_folderToStore$2, "'");
    const destination = await chooseOption("Where to save the summary for ".concat(periodString, "?"), [ {
      label: labelString,
      value: "note"
    }, {
      label: "🖊 Append to current note",
      value: "current"
    }, {
      label: "📋 Write to console log",
      value: "log"
    }, {
      label: "❌ Cancel",
      value: "cancel"
    } ], "note");
    switch (destination) {
     case "current":
      {
        const currentNote = Editor.note;
        if (currentNote == null) {
          console.log("\terror: no note is open");
        } else {
          var _currentNote$filename;
          console.log("\tappending results to current note (".concat((_currentNote$filename = currentNote.filename) !== null && _currentNote$filename !== void 0 ? _currentNote$filename : "", ")"));
          currentNote.appendParagraph("".concat(String(pref_hashtagCountsHeading), " for ").concat(periodString, " ").concat(periodPartStr), "text");
          currentNote.appendParagraph(hOutputArray.join("\n"), "text");
          currentNote.appendParagraph("".concat(String(pref_mentionCountsHeading), " for ").concat(periodString, " ").concat(periodPartStr), "empty");
          currentNote.appendParagraph(mOutputArray.join("\n"), "text");
          console.log("\tappended results to current note");
        }
        break;
      }

     case "note":
      {
        var _DataStore$projectNot;
        let note;
        const existingNotes = (_DataStore$projectNot = DataStore.projectNoteByTitle(periodString, true, false)) !== null && _DataStore$projectNot !== void 0 ? _DataStore$projectNot : [];
        console.log("\tfound ".concat(existingNotes.length, " existing summary notes for this period"));
        if (existingNotes.length > 0) {
          note = existingNotes[0];
        } else {
          var _DataStore$newNote;
          const noteFilename = (_DataStore$newNote = DataStore.newNote(periodString, pref_folderToStore$2)) !== null && _DataStore$newNote !== void 0 ? _DataStore$newNote : "";
          if (!noteFilename) {
            console.log("\tError creating new note (filename '".concat(noteFilename, "')"));
            await showMessage("There was an error creating the new note");
            return;
          }
          console.log("\tnewNote filename: ".concat(noteFilename));
          note = DataStore.projectNoteByFilename(noteFilename);
          if (note == null) {
            console.log("\tError getting new note (filename '".concat(noteFilename, "')"));
            await showMessage("There was an error getting the new note ready to write");
            return;
          }
          console.log("\twriting results to the new note '".concat(displayTitle(note), "'"));
        }
        let insertionLineIndex = removeSection(note, pref_hashtagCountsHeading);
        console.log("\tHashtag insertionLineIndex: ".concat(String(insertionLineIndex)));
        note.insertHeading("".concat(pref_hashtagCountsHeading, " ").concat(periodPartStr), insertionLineIndex, pref_headingLevel$2);
        note.insertParagraph(hOutputArray.join("\n"), insertionLineIndex + 1, "text");
        insertionLineIndex = removeSection(note, pref_mentionCountsHeading);
        console.log("\tMention insertionLineIndex: ".concat(insertionLineIndex));
        note.insertHeading("".concat(pref_mentionCountsHeading, " ").concat(periodPartStr), insertionLineIndex, pref_headingLevel$2);
        note.insertParagraph(mOutputArray.join("\n"), insertionLineIndex + 1, "text");
        Editor.openNoteByFilename(note.filename);
        console.log("\twritten results to note '".concat(periodString, "'"));
        break;
      }

     case "log":
      {
        console.log("".concat(pref_hashtagCountsHeading, " for ").concat(periodString, " ").concat(periodPartStr));
        console.log(hOutputArray.join("\n"));
        console.log("".concat(pref_mentionCountsHeading, " for ").concat(periodString, " ").concat(periodPartStr));
        console.log(mOutputArray.join("\n"));
        break;
      }
    }
  }
  async function weeklyStats() {
    var _results5, _results6, _DataStore$projectNot2;
    await getPluginSettings$2();
    const todaysDate = new Date;
    const thisYear = todaysDate.getFullYear();
    const startWeek = 1;
    const startYear = thisYear;
    const endWeek = getWeek(todaysDate);
    const endYear = thisYear;
    console.log("");
    console.log("weeklyStats: calculating for ".concat(startYear, " ").concat(startWeek, " - ").concat(endYear, " ").concat(endWeek));
    const hOutputArray = [];
    for (let i = startWeek; i <= endWeek; i++) {
      const [weekStartDate, weekEndDate] = weekStartEnd(i, thisYear);
      const weekResults = calcHashtagStatsPeriod(unhyphenatedDate(weekStartDate), unhyphenatedDate(weekEndDate));
      const hCounts = weekResults === null || weekResults === void 0 ? void 0 : weekResults[0];
      const hSumTotals = weekResults === null || weekResults === void 0 ? void 0 : weekResults[1];
      if (hSumTotals == null || hCounts == null) {
        console.log("no hSumTotals value");
        return;
      }
    }
    for (const [key, value] of hSumTotals) {
      const hashtagString = pref_showAsHashtagOrMention ? key : key.slice(1);
      const count = hCounts.get(key);
      if (count != null) {
        const total = value.toFixed(0);
        const average = (value / count).toFixed(1);
        hOutputArray.push("".concat(hashtagString, "\t").concat(count, "\t(total ").concat(total, "\taverage ").concat(average, ")"));
        hCounts.delete(key);
      }
    }
    for (const [key, value] of hCounts) {
      const hashtagString = pref_showAsHashtagOrMention ? key : key.slice(1);
      hOutputArray.push("".concat(hashtagString, "\t").concat(value));
    }
    if (hOutputArray.length > 0) {
      hOutputArray.sort();
    } else {
      hOutputArray.push("(none)");
    }
    const mOutputArray = [];
    results = calcMentionStatsPeriod(fromDateStr, toDateStr);
    const mCounts = (_results5 = results) === null || _results5 === void 0 ? void 0 : _results5[0];
    const mSumTotals = (_results6 = results) === null || _results6 === void 0 ? void 0 : _results6[1];
    if (mCounts == null || mSumTotals == null) {
      return;
    }
    for (const [key, value] of mSumTotals) {
      const mentionString = pref_showAsHashtagOrMention ? key : key.slice(1);
      const count = mCounts.get(key);
      if (count != null) {
        const total = value.toFixed(0);
        const average = (value / count).toFixed(1);
        mOutputArray.push("".concat(mentionString, "\t").concat(count, "\t(total ").concat(total, "\taverage ").concat(average, ")"));
        mCounts.delete(key);
      }
    }
    for (const [key, value] of mCounts) {
      const mentionString = pref_showAsHashtagOrMention ? key : key.slice(1);
      mOutputArray.push("".concat(mentionString, "\t").concat(value));
    }
    if (mOutputArray.length > 0) {
      mOutputArray.sort();
    } else {
      mOutputArray.push("(none)");
    }
    let note;
    const existingNotes = (_DataStore$projectNot2 = DataStore.projectNoteByTitle(periodString, true, false)) !== null && _DataStore$projectNot2 !== void 0 ? _DataStore$projectNot2 : [];
    console.log("\tfound ".concat(existingNotes.length, " existing summary notes for this period"));
    if (existingNotes.length > 0) {
      note = existingNotes[0];
    } else {
      var _DataStore$newNote2;
      const noteFilename = (_DataStore$newNote2 = DataStore.newNote(periodString, pref_folderToStore$2)) !== null && _DataStore$newNote2 !== void 0 ? _DataStore$newNote2 : "";
      if (!noteFilename) {
        console.log("\tError creating new note (filename '".concat(noteFilename, "')"));
        await showMessage("There was an error creating the new note");
        return;
      }
      console.log("\tnewNote filename: ".concat(noteFilename));
      note = DataStore.projectNoteByFilename(noteFilename);
      if (note == null) {
        console.log("\tError getting new note (filename '".concat(noteFilename, "')"));
        await showMessage("There was an error getting the new note ready to write");
        return;
      }
      console.log("\twriting results to the new note '".concat(displayTitle(note), "'"));
    }
    let insertionLineIndex = removeSection(note, pref_hashtagCountsHeading);
    console.log("\tHashtag insertionLineIndex: ".concat(String(insertionLineIndex)));
    note.insertHeading("".concat(pref_hashtagCountsHeading, " ").concat(periodPartStr), insertionLineIndex, pref_headingLevel$2);
    note.insertParagraph(hOutputArray.join("\n"), insertionLineIndex + 1, "text");
    insertionLineIndex = removeSection(note, pref_mentionCountsHeading);
    console.log("\tMention insertionLineIndex: ".concat(insertionLineIndex));
    note.insertHeading("".concat(pref_mentionCountsHeading, " ").concat(periodPartStr), insertionLineIndex, pref_headingLevel$2);
    note.insertParagraph(mOutputArray.join("\n"), insertionLineIndex + 1, "text");
    Editor.openNoteByFilename(note.filename);
    console.log("\twritten results to note '".concat(periodString, "'"));
  }
  function calcHashtagStatsPeriod(fromDateStr, toDateStr) {
    const periodDailyNotes = DataStore.calendarNotes.filter((p => withinDateRange(dateStringFromCalendarFilename(p.filename), fromDateStr, toDateStr)));
    if (periodDailyNotes.length === 0) {
      console.log("  warning: no matching daily notes found");
      return;
    } else {
      console.log("  found ".concat(periodDailyNotes.length, " matching daily notes"));
    }
    const hashtagsToLookFor = pref_includeHashtags.length > 0 ? pref_includeHashtags : [];
    const hashtagsToIgnore = pref_excludeHashtags.length > 0 ? pref_excludeHashtags : [];
    const tagCounts = new Map;
    const tagSumTotals = new Map;
    for (const n of periodDailyNotes) {
      const seenTags = n.hashtags;
      for (const t of seenTags) {
        if (hashtagsToLookFor.length > 0 && hashtagsToLookFor.filter((a => t.startsWith(a))).length === 0) ; else if (hashtagsToIgnore.filter((a => t.startsWith(a))).length > 0) ; else {
          if (t.match(/\/\d+(\.\d+)?$/)) {
            var _tagCounts$get, _tagSumTotals$get;
            const tagParts = t.split("/");
            const k = tagParts[0];
            const v = Number(tagParts[1]);
            tagCounts.set(k, ((_tagCounts$get = tagCounts.get(k)) !== null && _tagCounts$get !== void 0 ? _tagCounts$get : 0) + 1);
            tagSumTotals.set(k, ((_tagSumTotals$get = tagSumTotals.get(k)) !== null && _tagSumTotals$get !== void 0 ? _tagSumTotals$get : 0) + v);
          } else {
            var _tagCounts$get2;
            tagCounts.set(t, ((_tagCounts$get2 = tagCounts.get(t)) !== null && _tagCounts$get2 !== void 0 ? _tagCounts$get2 : 0) + 1);
          }
        }
      }
    }
    return [ tagCounts, tagSumTotals ];
  }
  function calcMentionStatsPeriod(fromDateStr, toDateStr) {
    const periodDailyNotes = DataStore.calendarNotes.filter((p => withinDateRange(dateStringFromCalendarFilename(p.filename), fromDateStr, toDateStr)));
    if (periodDailyNotes.length === 0) {
      console.log("  warning: no matching daily notes found");
      return;
    }
    const mentionsToLookFor = pref_includeMentions.length > 0 ? pref_includeMentions : [];
    const mentionsToIgnore = pref_excludeMentions.length > 0 ? pref_excludeMentions : [];
    const mentionCounts = new Map;
    const mentionSumTotals = new Map;
    for (const n of periodDailyNotes) {
      const seenMentions = n.mentions;
      for (const m of seenMentions) {
        if (mentionsToLookFor.length > 0 && mentionsToLookFor.filter((a => m.startsWith(a))).length === 0) ; else if (mentionsToIgnore.filter((a => m.startsWith(a))).length > 0) ; else {
          if (m.match(/\(\d+(\.\d+)?\)$/)) {
            var _mentionCounts$get, _mentionSumTotals$get;
            const mentionParts = m.split("(");
            const k = mentionParts[0];
            const v = Number(mentionParts[1].slice(0, -1));
            mentionCounts.set(k, ((_mentionCounts$get = mentionCounts.get(k)) !== null && _mentionCounts$get !== void 0 ? _mentionCounts$get : 0) + 1);
            mentionSumTotals.set(k, ((_mentionSumTotals$get = mentionSumTotals.get(k)) !== null && _mentionSumTotals$get !== void 0 ? _mentionSumTotals$get : 0) + v);
          } else {
            var _mentionCounts$get2;
            mentionCounts.set(m, ((_mentionCounts$get2 = mentionCounts.get(m)) !== null && _mentionCounts$get2 !== void 0 ? _mentionCounts$get2 : 0) + 1);
          }
        }
      }
    }
    return [ mentionCounts, mentionSumTotals ];
  }
  let pref_folderToStore$1;
  let pref_occurrencesHeading;
  let pref_headingLevel$1;
  let pref_occurrencesToMatch = [];
  let pref_highlightOccurrences$1;
  let pref_dateStyle$1;
  async function getPluginSettings$1() {
    const summConfig = await getOrMakeConfigurationSection("summaries", DEFAULT_SUMMARIES_OPTIONS);
    if (summConfig == null) {
      console.log("\tCouldn't find 'summaries' settings in _configuration note.");
      return;
    }
    console.log("\tFound 'summaries' settings in _configuration note.");
    pref_folderToStore$1 = summConfig.folderToStore != null ? String(summConfig.folderToStore) : "Summaries";
    pref_occurrencesHeading = summConfig.occurrencesHeading != null ? String(summConfig.occurrencesHeading) : "Occurrences";
    pref_headingLevel$1 = summConfig.headingLevel != null ? summConfig.headingLevel : 2;
    pref_occurrencesToMatch = summConfig.occurrencesToMatch != null ? summConfig.occurrencesToMatch : [];
    pref_highlightOccurrences$1 = summConfig.highlightOccurrences != null ? summConfig.highlightOccurrences : false;
    pref_dateStyle$1 = summConfig.dateStyle != null ? String(summConfig.dateStyle) : "link";
    console.log("  pref_dateStyle = '".concat(pref_dateStyle$1, "'"));
  }
  async function occurrencesPeriod() {
    await getPluginSettings$1();
    const [fromDate, toDate, periodString, periodPartStr] = await getPeriodStartEndDates();
    if (fromDate == null || toDate == null) {
      console.log("dates could not be parsed");
      return;
    }
    const fromDateStr = unhyphenatedDate(fromDate);
    const toDateStr = unhyphenatedDate(toDate);
    const stringsToMatch = Array.from(pref_occurrencesToMatch);
    console.log("\nperiodOccurrences: looking for '".concat(String(stringsToMatch), "' over ").concat(periodString, " (").concat(fromDateStr, "-").concat(toDateStr, "):"));
    const periodDailyNotes = DataStore.calendarNotes.filter((p => withinDateRange(dateStringFromCalendarFilename(p.filename), fromDateStr, toDateStr)));
    if (periodDailyNotes.length === 0) {
      console.log("  warning: no matching daily notes found");
      await showMessage("No matching daily notes found; stopping.");
      return;
    }
    const outputArray = [];
    for (const toMatch of stringsToMatch) {
      const results = await gatherMatchingLines(periodDailyNotes, toMatch, pref_highlightOccurrences$1, pref_dateStyle$1);
      const lines = results === null || results === void 0 ? void 0 : results[0];
      const context = results === null || results === void 0 ? void 0 : results[1];
      if (lines.length > 0) {
        console.log("  Found ".concat(lines.length, " results for ").concat(toMatch));
        outputArray.push("### ".concat(toMatch));
        for (let i = 0; i < lines.length; i++) {
          outputArray.push("- ".concat(lines[i]).concat(context[i]));
        }
      }
    }
    const labelString = "🖊 Create/update note '".concat(periodString, "' in folder '").concat(String(pref_folderToStore$1), "'");
    const destination = await chooseOption("Where to save the summary for ".concat(periodString, "?"), [ {
      label: labelString,
      value: "note"
    }, {
      label: "🖊 Append to current note",
      value: "current"
    }, {
      label: "📋 Write to plugin console log",
      value: "log"
    }, {
      label: "❌ Cancel",
      value: "cancel"
    } ], "note");
    switch (destination) {
     case "current":
      {
        const currentNote = Editor.note;
        if (currentNote == null) {
          console.log("\terror: no note is open");
        } else {
          var _currentNote$filename;
          console.log("\tappending results to current note (".concat((_currentNote$filename = currentNote.filename) !== null && _currentNote$filename !== void 0 ? _currentNote$filename : "", ")"));
          const insertionLineIndex = currentNote.paragraphs.length;
          currentNote.insertHeading("".concat(pref_occurrencesHeading, " ").concat(periodPartStr), insertionLineIndex, pref_headingLevel$1);
          currentNote.appendParagraph(outputArray.join("\n"), "text");
          console.log("\tappended results to current note");
        }
        break;
      }

     case "note":
      {
        var _DataStore$projectNot;
        let note;
        const existingNotes = (_DataStore$projectNot = DataStore.projectNoteByTitle(periodString, true, false)) !== null && _DataStore$projectNot !== void 0 ? _DataStore$projectNot : [];
        console.log("\tfound ".concat(existingNotes.length, " existing summary notes for this period"));
        if (existingNotes.length > 0) {
          note = existingNotes[0];
        } else {
          var _DataStore$newNote;
          const noteFilename = (_DataStore$newNote = DataStore.newNote(periodString, pref_folderToStore$1)) !== null && _DataStore$newNote !== void 0 ? _DataStore$newNote : "";
          if (!noteFilename) {
            console.log("\tError creating new note (filename: ".concat(noteFilename, ")"));
            await showMessage("There was an error creating the new note");
            return;
          }
          console.log("\tnewNote filename: ".concat(noteFilename));
          note = DataStore.projectNoteByFilename(noteFilename);
          if (note == null) {
            console.log("\tError getting new note (filename: ".concat(noteFilename, ")"));
            await showMessage("There was an error getting the new note ready to write");
            return;
          }
        }
        console.log("\twriting results to the new note '".concat(displayTitle(note), "'"));
        const insertionLineIndex = removeSection(note, pref_occurrencesHeading);
        console.log("\tinsertionLineIndex: ".concat(String(insertionLineIndex)));
        note.insertHeading("".concat(pref_occurrencesHeading, " ").concat(periodPartStr), insertionLineIndex, pref_headingLevel$1);
        note.insertParagraph(outputArray.join("\n"), insertionLineIndex + 1, "text");
        Editor.openNoteByFilename(note.filename);
        console.log("\twritten results to note '".concat(periodString, "'"));
        break;
      }

     case "log":
      {
        console.log("Summaries for ".concat(periodString, " ").concat(periodPartStr));
        console.log(outputArray.join("\n"));
        break;
      }
    }
  }
  let pref_folderToStore;
  let pref_foldersToIgnore = [];
  let pref_headingLevel;
  let pref_highlightOccurrences;
  let pref_dateStyle;
  async function getPluginSettings() {
    const summConfig = await getOrMakeConfigurationSection("summaries", DEFAULT_SUMMARIES_OPTIONS);
    if (summConfig == null) {
      console.log("\tCouldn't find 'summaries' settings in _configuration note.");
      return;
    }
    console.log("\tFound 'summaries' settings in _configuration note.");
    pref_folderToStore = summConfig.folderToStore != null ? String(summConfig.folderToStore) : "Summaries";
    pref_foldersToIgnore = summConfig.foldersToIgnore != null ? summConfig.foldersToIgnore : [ "📋 Templates" ];
    pref_headingLevel = summConfig.headingLevel != null ? summConfig.headingLevel : 2;
    pref_highlightOccurrences = summConfig.highlightOccurrences != null ? summConfig.highlightOccurrences : false;
    pref_dateStyle = summConfig.dateStyle != null ? String(summConfig.dateStyle) : "link";
    console.log("  pref_dateStyle = '".concat(pref_dateStyle, "'"));
  }
  async function saveSearch() {
    await getPluginSettings();
    const searchTerm = await getInput("Exact word/phrase to search for");
    const [fromDate, toDate, periodString, periodPartStr] = await getPeriodStartEndDates("Search over which period?");
    if (fromDate == null || toDate == null) {
      console.log("dates could not be parsed");
      return;
    }
    const fromDateStr = unhyphenatedDate(fromDate);
    const toDateStr = unhyphenatedDate(toDate);
    const periodDailyNotes = DataStore.calendarNotes.filter((p => withinDateRange(dateStringFromCalendarFilename(p.filename), fromDateStr, toDateStr)));
    if (periodDailyNotes.length === 0) {
      console.log("  warning: no matching daily notes found");
    }
    const allProjectNotes = DataStore.projectNotes;
    const projectNotesToInclude = [];
    for (const pn of allProjectNotes) {
      const thisFolder = getFolderFromFilename(pn.filename);
      if (!pref_foldersToIgnore.includes(thisFolder)) {
        projectNotesToInclude.push(pn);
      } else {
        console.log(pn.filename);
      }
    }
    console.log("Will use ".concat(projectNotesToInclude.length, " project notes out of ").concat(allProjectNotes.length));
    const notes = DataStore.calendarNotes.concat(projectNotesToInclude);
    const outputArray = [];
    const results = await gatherMatchingLines(notes, searchTerm, pref_highlightOccurrences, pref_dateStyle);
    const lines = results === null || results === void 0 ? void 0 : results[0];
    const contexts = results === null || results === void 0 ? void 0 : results[1];
    if (lines.length > 0) {
      console.log("  Found ".concat(lines.length, " results for '").concat(searchTerm, "'"));
      for (let i = 0; i < lines.length; i++) {
        outputArray.push("- ".concat(lines[i], " ").concat(contexts[i]));
      }
    } else {
      outputArray.push("(no matches)");
    }
    const labelString = "🖊 Create/update note in folder '".concat(pref_folderToStore, "'");
    const destination = await chooseOption("Where should I save the search results?", [ {
      label: labelString,
      value: "note"
    }, {
      label: "🖊 Append to current note",
      value: "current"
    }, {
      label: "📋 Write to plugin console log",
      value: "log"
    }, {
      label: "❌ Cancel",
      value: "cancel"
    } ], "note");
    const currentDate = nowLocaleDateTime;
    const headingString = "Search results for '".concat(searchTerm, "'");
    switch (destination) {
     case "current":
      {
        const currentNote = Editor.note;
        if (currentNote == null) {
          console.log("\terror: no note is open");
        } else {
          var _currentNote$filename;
          console.log("\tappending results to current note (".concat((_currentNote$filename = currentNote.filename) !== null && _currentNote$filename !== void 0 ? _currentNote$filename : "", ")"));
          const insertionLineIndex = currentNote.paragraphs.length;
          currentNote.insertHeading("".concat(headingString, " at ").concat(currentDate), insertionLineIndex, pref_headingLevel);
          currentNote.appendParagraph(outputArray.join("\n"), "text");
          console.log("\tappended results to current note");
        }
        break;
      }

     case "note":
      {
        var _DataStore$projectNot;
        const requestedTitle = await getInput("What do you want to call this note?");
        let note;
        const existingNotes = (_DataStore$projectNot = DataStore.projectNoteByTitle(requestedTitle, true, false)) !== null && _DataStore$projectNot !== void 0 ? _DataStore$projectNot : [];
        console.log("\tfound ".concat(existingNotes.length, " existing ").concat(requestedTitle, " notes"));
        if (existingNotes.length > 0) {
          note = existingNotes[0];
        } else {
          var _DataStore$newNote;
          const noteFilename = (_DataStore$newNote = DataStore.newNote(requestedTitle, pref_folderToStore)) !== null && _DataStore$newNote !== void 0 ? _DataStore$newNote : "";
          if (noteFilename === "") {
            console.log("\tError creating new note (filename '".concat(noteFilename, "')"));
            await showMessage("There was an error creating the new note");
            return;
          }
          console.log("\tnewNote filename: ".concat(noteFilename));
          note = DataStore.projectNoteByFilename(noteFilename);
          if (note == null) {
            console.log("\tError getting new note (filename: ".concat(noteFilename, ")"));
            await showMessage("There was an error getting the new note ready to write");
            return;
          }
        }
        console.log("\twriting results to the new note '".concat(displayTitle(note), "'"));
        const insertionLineIndex = removeSection(note, headingString);
        console.log("\tinsertionLineIndex: ".concat(String(insertionLineIndex)));
        note.insertHeading("".concat(headingString, " at ").concat(currentDate), insertionLineIndex, pref_headingLevel);
        note.insertParagraph(outputArray.join("\n"), insertionLineIndex + 1, "text");
        Editor.openNoteByFilename(note.filename);
        console.log("\twritten results to note '".concat(requestedTitle, "'"));
        break;
      }

     case "log":
      {
        console.log("Search results for '".concat(searchTerm, "', ").concat(currentDate));
        console.log(outputArray.join("\n"));
        break;
      }
    }
  }
  exports.occurrencesPeriod = occurrencesPeriod;
  exports.saveSearch = saveSearch;
  exports.statsPeriod = statsPeriod;
  exports.weeklyStats = weeklyStats;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  return exports;
}({});

Object.assign(typeof globalThis == "undefined" ? this : globalThis, exports);
