var exports = function(exports) {
  "use strict";
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter((function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      }))), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach((function(key) {
        _defineProperty(target, key, source[key]);
      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      }));
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
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
  var strftime$1 = {
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
  })(strftime$1);
  var strftime = strftime$1.exports;
  const RE_DATE = "\\d{4}-[01]\\d{1}-\\d{2}";
  const RE_DATE_INTERVAL = "[+\\-]?\\d+[bdwmqy]";
  (new Date).toISOString().slice(0, 10);
  (new Date).toISOString().slice(0, 16);
  (new Date).toLocaleString();
  const getFormattedTime = function() {
    let format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "%Y-%m-%d %I:%M:%S %P";
    return strftime(format);
  };
  function getYearMonthDate$1(dateObj) {
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    return {
      year: year,
      month: month,
      date: date
    };
  }
  function toLocaleTime(dateObj) {
    let locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return dateObj.toLocaleTimeString(locale, options);
  }
  function hyphenatedDateString$1(dateObj) {
    const {year: year, month: month, date: date} = getYearMonthDate$1(dateObj);
    return "".concat(year, "-").concat(month < 10 ? "0" : "").concat(month, "-").concat(date < 10 ? "0" : "").concat(date);
  }
  function filenameDateString(dateObj) {
    const {year: year, month: month, date: date} = getYearMonthDate$1(dateObj);
    return "".concat(year).concat(month < 10 ? "0" : "").concat(month).concat(date < 10 ? "0" : "").concat(date);
  }
  function dateStringFromCalendarFilename(filename) {
    return filename.slice(0, 8);
  }
  function removeDateTags(content) {
    return content.replace(/<\d{4}-\d{2}-\d{2}/g, "").replace(/>\d{4}-\d{2}-\d{2}/g, "").trim();
  }
  async function parseJSON5$1(contents) {
    try {
      const value = json5.parse(contents);
      return value;
    } catch (e) {
      console.log(e);
      await showMessage("Invalid JSON5 in your configuration. Please fix it to use configuration");
      return {};
    }
  }
  async function chooseOption(message, options, defaultValue) {
    var _options$index$value, _options$index;
    const {index: index} = await CommandBar.showOptions(options.map((option => option.label)), message);
    return (_options$index$value = (_options$index = options[index]) === null || _options$index === void 0 ? void 0 : _options$index.value) !== null && _options$index$value !== void 0 ? _options$index$value : defaultValue;
  }
  async function getInput(message) {
    let okLabel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "OK";
    return await CommandBar.showInput(message, okLabel);
  }
  async function showMessage(message) {
    let confirmTitle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "OK";
    await CommandBar.showOptions([ confirmTitle ], message);
  }
  async function askDateInterval(dateParams) {
    var _await$CommandBar$sho;
    const dateParamsTrimmed = dateParams.trim();
    const paramConfig = dateParamsTrimmed.startsWith("{") && dateParamsTrimmed.endsWith("}") ? await parseJSON5$1(dateParams) : dateParamsTrimmed !== "" ? await parseJSON5$1("{".concat(dateParams, "}")) : {};
    console.log("param config: ".concat(dateParams, " as ").concat(JSON.stringify(paramConfig)));
    const allSettings = _objectSpread2({}, paramConfig);
    let {question: question} = allSettings;
    question = question ? question : "Please enter a date interval";
    const reply = (_await$CommandBar$sho = await CommandBar.showInput(question, "Date interval (in form nn[bdwmqy]): %@")) !== null && _await$CommandBar$sho !== void 0 ? _await$CommandBar$sho : "";
    const reply2 = reply.trim();
    if (reply2.match(RE_DATE_INTERVAL) == null) {
      await showMessage("Sorry: ".concat(reply2, " wasn't a valid date interval"), "OK");
      return "";
    }
    return reply2;
  }
  async function datePicker(dateParams, config) {
    var _config$date, _await$CommandBar$sho3;
    const defaultConfig = (_config$date = config.date) !== null && _config$date !== void 0 ? _config$date : {};
    const dateParamsTrimmed = dateParams.trim();
    const paramConfig = dateParamsTrimmed.startsWith("{") && dateParamsTrimmed.endsWith("}") ? await parseJSON5$1(dateParams) : dateParamsTrimmed !== "" ? await parseJSON5$1("{".concat(dateParams, "}")) : {};
    console.log("param config: ".concat(dateParams, " as ").concat(JSON.stringify(paramConfig)));
    const allSettings = _objectSpread2(_objectSpread2({}, defaultConfig), paramConfig);
    let {question: question} = allSettings;
    question = question ? question : "Please enter a date";
    const reply = (_await$CommandBar$sho3 = await CommandBar.showInput(question, "Date (YYYY-MM-DD): %@")) !== null && _await$CommandBar$sho3 !== void 0 ? _await$CommandBar$sho3 : "";
    const reply2 = reply.replace(">", "").trim();
    if (!reply2.match(RE_DATE)) {
      await showMessage("Sorry: ".concat(reply2, " wasn't a date of form YYYY-MM-DD"), "OK");
      return "";
    }
    return reply2;
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
  function stringReplace() {
    let inputString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let replacementArray = arguments.length > 1 ? arguments[1] : undefined;
    let outputString = inputString;
    replacementArray.forEach((r => {
      while (outputString.includes(r.key)) {
        outputString = outputString.replace(r.key, r.value);
      }
    }));
    return outputString;
  }
  async function getTagParamsFromString(paramString, wantedParam, defaultValue) {
    console.log("\tgetTagParamsFromString for '".concat(wantedParam, "' in '").concat(paramString, "'"));
    if (paramString !== "" && wantedParam !== "") {
      try {
        const paramObj = await json5.parse(paramString);
        console.log("\t--\x3e ".concat(String(JSON.stringify(paramObj[wantedParam]))));
        return paramObj.hasOwnProperty(wantedParam) ? paramObj[wantedParam] : defaultValue;
      } catch (e) {
        console.log("\tError parsing ".concat(paramString, " ").concat(e));
      }
    }
    return defaultValue;
  }
  function capitalize(s) {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
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
  async function openConfigFileInEditor() {
    const templateFolder = await getOrMakeTemplateFolder();
    if (templateFolder == null) {
      await showMessage("No template folder found");
      return;
    }
    const configFile = DataStore.projectNotes.filter((n => {
      var _n$filename;
      return (_n$filename = n.filename) === null || _n$filename === void 0 ? void 0 : _n$filename.startsWith(templateFolder);
    })).find((n => {
      var _n$title;
      return !!((_n$title = n.title) !== null && _n$title !== void 0 && _n$title.startsWith("_configuration"));
    }));
    if (configFile == null) {
      await showMessage("No _configuration file found");
      return;
    }
    await Editor.openNoteByFilename(configFile.filename);
  }
  async function getStructuredConfiguration() {
    const templateFolder = await getOrMakeTemplateFolder();
    if (templateFolder == null) {
      return {};
    }
    const configFile = DataStore.projectNotes.filter((n => {
      var _n$filename2;
      return (_n$filename2 = n.filename) === null || _n$filename2 === void 0 ? void 0 : _n$filename2.startsWith(templateFolder);
    })).find((n => {
      var _n$title2;
      return !!((_n$title2 = n.title) !== null && _n$title2 !== void 0 && _n$title2.startsWith("_configuration"));
    }));
    const content = configFile === null || configFile === void 0 ? void 0 : configFile.content;
    if (content == null) {
      return {};
    }
    const firstCodeblock = content.split("\n```")[1];
    return await parseFirstCodeblock(firstCodeblock);
  }
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
  async function getOrMakeConfigurationSection(configSectionName) {
    var _configFile, _await$parseFirstCode;
    let configSectionDefault = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let minimumRequiredConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
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
  const DEFAULT_EVENTS_OPTIONS = '\n  events: {\n    calendarToWriteTo: "",  // specify calendar name to write events to. Must be writable calendar. If empty, then the default system calendar will be used.\n    addEventID: false,  // whether to add an \'⏰event:ID\' internal link when creating an event from a time block\n    processedTagName: "#event_created",  // optional tag to add after making a time block an event\n    confirmEventCreation: false,  // optional tag to indicate whether to ask user to confirm each event to be created\n    removeTimeBlocksWhenProcessed: true,  // whether to remove time block after making an event from it\n    eventsHeading: "### Events today",  // optional heading to put before list of today\'s events\n    calendarSet: [],  // optional ["array","of calendar","names"] to filter by when showing list of events. If empty or missing, no filtering will be done.\n    addMatchingEvents: {  // match events with string on left, and then the string on the right is the template for how to insert this event (see README for details)\n      "meeting": "### *|TITLE|* (*|START|*)\\n*|NOTES|*",\n      "webinar": "### *|TITLE|* (*|START|*) *|URL|*",\n      "holiday": "*|TITLE|* *|NOTES|*",\n    },\n    locale: "en-US",\n    timeOptions: { hour: \'2-digit\', minute: \'2-digit\', hour12: false },\n    calendarNameMappings: [  // here you can map a calendar name to a new string - e.g. "Thomas" to "Me" with "Thomas;Me"\n      "From;To",\n    ],\n  },\n';
  let pref_eventsHeading;
  let pref_addMatchingEvents;
  let pref_locale;
  let pref_timeOptions;
  let pref_calendarSet;
  let pref_calendarNameMappings;
  async function getEventsSettings() {
    var _eventsConfig$calenda, _eventsConfig$addMatc, _eventsConfig$timeOpt, _eventsConfig$calenda2;
    console.log("\nStart of getEventsSettings()");
    const eventsConfig = await getOrMakeConfigurationSection("events", DEFAULT_EVENTS_OPTIONS);
    if (eventsConfig == null) {
      console.log("\tInfo: couldn't find 'events' settings in _configuration note. Will use defaults.");
    }
    console.log("\tFound 'events' settings in _configuration note.");
    pref_eventsHeading = (eventsConfig === null || eventsConfig === void 0 ? void 0 : eventsConfig.eventsHeading) != null ? String(eventsConfig === null || eventsConfig === void 0 ? void 0 : eventsConfig.eventsHeading) : "### Events today";
    console.log(pref_eventsHeading);
    pref_calendarSet = (_eventsConfig$calenda = eventsConfig === null || eventsConfig === void 0 ? void 0 : eventsConfig.calendarSet) !== null && _eventsConfig$calenda !== void 0 ? _eventsConfig$calenda : [];
    pref_addMatchingEvents = (_eventsConfig$addMatc = eventsConfig === null || eventsConfig === void 0 ? void 0 : eventsConfig.addMatchingEvents) !== null && _eventsConfig$addMatc !== void 0 ? _eventsConfig$addMatc : null;
    pref_locale = (eventsConfig === null || eventsConfig === void 0 ? void 0 : eventsConfig.locale) != null && (eventsConfig === null || eventsConfig === void 0 ? void 0 : eventsConfig.locale) !== "" ? String(eventsConfig === null || eventsConfig === void 0 ? void 0 : eventsConfig.locale) : "en-US";
    console.log(pref_locale);
    pref_timeOptions = (_eventsConfig$timeOpt = eventsConfig === null || eventsConfig === void 0 ? void 0 : eventsConfig.timeOptions) !== null && _eventsConfig$timeOpt !== void 0 ? _eventsConfig$timeOpt : {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    };
    pref_calendarNameMappings = (_eventsConfig$calenda2 = eventsConfig === null || eventsConfig === void 0 ? void 0 : eventsConfig.calendarNameMappings) !== null && _eventsConfig$calenda2 !== void 0 ? _eventsConfig$calenda2 : [];
    console.log("\tEnd of getEventsSettings()");
  }
  async function getEventsForDay(dateStr) {
    let start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      h: 0,
      m: 0
    };
    let end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      h: 23,
      m: 59
    };
    const y = parseInt(dateStr.slice(0, 4));
    const m = parseInt(dateStr.slice(4, 6));
    const d = parseInt(dateStr.slice(6, 8));
    const startOfDay = Calendar.dateFrom(y, m, d, start.h, start.m, 0);
    const endOfDay = Calendar.dateFrom(y, m, d, end.h, end.m, 59);
    console.log("  getEventsForDay: ".concat(startOfDay.toString(), " - ").concat(endOfDay.toString()));
    let eArr = await Calendar.eventsBetween(startOfDay, endOfDay);
    console.log("\tgetEventsForDay: Retrieved ".concat(eArr.length, " events from NP Calendar store"));
    if (pref_calendarSet && pref_calendarSet.length > 0) {
      eArr = eArr.filter((e => pref_calendarSet.some((c => e.calendar === c))));
      console.log("\t".concat(eArr.length, " Events kept after filtering with ").concat(pref_calendarSet.toString()));
    }
    return eArr;
  }
  async function listDaysEvents() {
    let paramString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (Editor.note == null || Editor.type !== "Calendar") {
      await showMessage("Please run again with a calendar note open.");
      return "";
    }
    const dateStr = dateStringFromCalendarFilename(Editor.filename);
    console.log("\nlistDaysEvents for ".concat(dateStr, " with paramString=").concat(String(paramString)));
    await getEventsSettings();
    const template = String(await getTagParamsFromString(paramString, "template", "- *|CAL|*: *|TITLE|* (*|START|*)"));
    const alldayTemplate = String(await getTagParamsFromString(paramString, "allday_template", "- *|CAL|*: *|TITLE|*"));
    const includeHeadings = await getTagParamsFromString(paramString, "includeHeadings", true);
    const withCalendarName = template.includes("CAL");
    const eArr = await getEventsForDay(dateStr);
    const outputArray = [];
    const mapForSorting = [];
    let lastEventStr = "";
    for (const e of eArr) {
      const replacements = getReplacements(e);
      const thisEventStr = stringReplace(e.isAllDay ? alldayTemplate : template, replacements).trimEnd();
      if (lastEventStr !== thisEventStr) {
        outputArray.push(thisEventStr);
        lastEventStr = thisEventStr;
      }
      if (withCalendarName) {
        mapForSorting.push({
          cal: calendarNameWithMapping(e.calendar, pref_calendarNameMappings),
          start: toLocaleTime(e.date),
          text: thisEventStr
        });
      }
    }
    if (pref_eventsHeading !== "" && includeHeadings) {
      outputArray.unshift(pref_eventsHeading);
    }
    if (withCalendarName) {
      mapForSorting.sort(sortByCalendarNameAndStartTime());
    }
    let output = outputArray.join("\n");
    if (withCalendarName) {
      output = mapForSorting.map((element => element.text)).join("\n");
    }
    return output.replace(/\\s{2,}/g, " ");
  }
  async function listMatchingDaysEvents(paramString) {
    const dateStr = dateStringFromCalendarFilename(Editor.filename);
    console.log("\nlistMatchingDaysEvents for date ".concat(dateStr, ":"));
    await getEventsSettings();
    if (pref_addMatchingEvents == null) {
      await showMessage("Error: Empty 'addMatchingEvents' setting in _configuration note. Stopping");
      return "(Error: found no 'addMatchingEvents' settings in _configuration note.)";
    }
    const textToMatchA = Object.keys(pref_addMatchingEvents);
    const templateArr = Object.values(pref_addMatchingEvents);
    console.log("\tFrom settings found ".concat(textToMatchA.length, " match strings to look for"));
    const eArr = await getEventsForDay(dateStr);
    const outputArray = [];
    let lastEventStr = "";
    for (const e of eArr) {
      for (let i = 0; i < textToMatchA.length; i++) {
        const template = templateArr[i];
        const reMatch = new RegExp(textToMatchA[i], "i");
        if (e.title.match(reMatch)) {
          console.log("\tFound match to event '".concat(e.title, "'"));
          const replacements = getReplacements(e);
          const thisEventStr = stringReplace(template, replacements);
          if (lastEventStr !== thisEventStr) {
            outputArray.push(thisEventStr);
            lastEventStr = thisEventStr;
          }
        }
      }
    }
    const output = outputArray.join("\n").replace(/\\s{2,}/g, " ");
    return output;
  }
  const getReplacements = item => [ {
    key: "*|CAL|*",
    value: calendarNameWithMapping(item.calendar, pref_calendarNameMappings)
  }, {
    key: "*|TITLE|*",
    value: item.title
  }, {
    key: "*|START|*",
    value: !item.isAllDay ? toLocaleTime(item.date, pref_locale, pref_timeOptions) : ""
  }, {
    key: "*|END|*",
    value: item.endDate != null && !item.isAllDay ? toLocaleTime(item.endDate, pref_locale, pref_timeOptions) : ""
  }, {
    key: "*|NOTES|*",
    value: item.notes
  }, {
    key: "*|URL|*",
    value: item.url
  } ];
  const calendarNameWithMapping = (name, mappings) => {
    let mapped = name;
    mappings.forEach((mapping => {
      const splitted = mapping.split(";");
      if (splitted.length === 2 && name === splitted[0]) {
        mapped = splitted[1];
      }
    }));
    return mapped;
  };
  const sortByCalendarNameAndStartTime = () => (b, a) => {
    if (a.cal !== b.cal) {
      if (a.cal > b.cal) {
        return -1;
      }
      if (b.cal > a.cal) {
        return 1;
      }
    } else {
      if (a.start > b.start) {
        return -1;
      }
      if (b.start > a.start) {
        return 1;
      }
      return 0;
    }
    return 0;
  };
  function getYearMonthDate() {
    let dateObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date;
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    return {
      year: year,
      month: month,
      date: date
    };
  }
  function hyphenatedDateString(dateObj) {
    const {year: year, month: month, date: date} = getYearMonthDate(dateObj);
    return "".concat(year, "-").concat(month < 10 ? "0" : "").concat(month, "-").concat(date < 10 ? "0" : "").concat(date);
  }
  const hasTypedDate = t => />\d{4}-\d{2}-\d{2}/g.test(t.content) ? t.date : null;
  const isOverdue = t => {
    let theDate = null;
    if (t.type === "scheduled") theDate = t.date;
    if (t.type === "open") theDate = hasTypedDate(t);
    return theDate && hyphenatedDateString(theDate) < hyphenatedDateString(new Date);
  };
  async function sweepNote(note) {
    let withUserConfirm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let notifyNoChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    let overdueOnly = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    let isProjectNote = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    let returnValue = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    let includeHeadings = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    let moveType = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    const paragraphs = note.paragraphs;
    const paragraphsToMove = [];
    const paragraphsToRemove = [];
    let paragraphsToReturn = [];
    const overdueParagraphs = [];
    const moveableTypes = [ "open", "title", "scheduled" ];
    const mainItemTypes = [ "open" ];
    const nonMovableTypes = [ "cancelled", "done" ];
    const resetTypes = [ "title", "empty" ];
    let lastRootItem = null;
    console.log('\tStarting sweepNote for file: "'.concat(note.filename, '" paragraphs:').concat(paragraphs.length, " overdueOnly:").concat(overdueOnly));
    paragraphs.forEach((p => {
      const isSeparatorLine = /^---/.test(p.content);
      if (nonMovableTypes.includes(p.type)) {
        return;
      }
      const itemIsOverdue = isOverdue(p);
      if (itemIsOverdue && overdueOnly) overdueParagraphs.push(p);
      const checkOverdue = !overdueOnly || itemIsOverdue;
      if ((mainItemTypes.includes(p.type) || checkOverdue) && p.indents === 0) {
        console.log('Task "'.concat(p.content, '" ').concat(itemIsOverdue ? "*** overdue" : ""));
        lastRootItem = p;
      }
      if (resetTypes.includes(p.type) && p.indents === 0) {
        lastRootItem = null;
      }
      if (isSeparatorLine || moveableTypes.includes(p.type) && checkOverdue || (p.indents > 0 || p.type === "empty") && lastRootItem != null) {
        paragraphsToMove.push(p);
        if (!(isSeparatorLine || [ "title", "empty" ].includes(p.type))) {
          paragraphsToRemove.push(p);
        }
      }
      if (!includeHeadings && returnValue && p.type === "open") {
        paragraphsToReturn.push(p);
      }
    }));
    const today = new Date;
    const todayNote = DataStore.calendarNoteByDate(today);
    if (todayNote == null) {
      console.log("Couldn't open Today's Calendar Note");
      return {
        status: "error",
        msg: "Couldn't open Today's Calendar Note"
      };
    }
    const openTasks = paragraphsToMove.filter((p => p.type === "open")).length;
    const numTasksToMove = overdueOnly ? overdueParagraphs.length : openTasks;
    if (numTasksToMove > 0) {
      console.log("".concat(note.filename, " overdueOnly=").concat(overdueOnly, " openTasks=").concat(openTasks, " overdueParagraphs:").concat(overdueParagraphs.length, " numTasksToMove=").concat(numTasksToMove));
      let rescheduleTasks;
      if (moveType) {
        rescheduleTasks = moveType;
      } else {
        rescheduleTasks = isProjectNote ? "reschedule" : "move";
      }
      if (withUserConfirm) {
        let choices = [ {
          label: "✂️ Move (cut & paste) task(s) to today's Calendar Note",
          value: "move"
        }, {
          label: "🗓 Leave original here and copy+link to Calendar Note",
          value: "reschedule"
        } ];
        if (overdueOnly) {
          choices = [ ...choices, {
            label: "> Replace due date with today's date (e.g. >YYYY-MM-DD)",
            value: "updateDate"
          }, {
            label: "> Replace overdue date with '>today'",
            value: "makeToday"
          } ];
        }
        choices.push({
          label: "❌ Cancel",
          value: false
        });
        Editor.openNoteByFilename(note.filename);
        rescheduleTasks = await chooseOption("Found ".concat(numTasksToMove, " tasks"), choices, false);
      }
      if (rescheduleTasks === "move") {
        if (!returnValue) {
          todayNote.paragraphs = [ ...todayNote.paragraphs, ...paragraphsToMove ];
        } else {
          if (includeHeadings) {
            paragraphsToReturn = [ ...paragraphsToReturn, ...paragraphsToMove ];
          }
        }
        if (Editor.filename === note.filename) {
          Editor.removeParagraphs(paragraphsToRemove);
        } else {
          note.removeParagraphs(paragraphsToRemove);
        }
      }
      if (rescheduleTasks === "reschedule") {
        var _note$title;
        const noteDate = note.date;
        console.log("sweepNote: noteDate=".concat(noteDate, " todayNote.date={todayNote.date}"));
        const dateTag = noteDate != null && note.filename !== todayNote.filename ? " <".concat(hyphenatedDateString$1(noteDate)) : "";
        const projNote = (_note$title = note.title) !== null && _note$title !== void 0 ? _note$title : "";
        const link = isProjectNote ? " <[[".concat(projNote, "]]") : dateTag;
        paragraphsToMove.map((para => {
          const paraClone = para.duplicate();
          if (para.type === "open") {
            paraClone.content = removeDateTags(paraClone.content) + link;
          }
          return paraClone;
        }));
      }
      if (rescheduleTasks === "makeToday") {
        overdueParagraphs.forEach((p => {
          p.content;
          p.content = "".concat(removeDateTags(p.content), " >today");
          p.type = "open";
          note.updateParagraph(p);
        }));
      }
      if (rescheduleTasks === "updateDate") {
        overdueParagraphs.forEach((p => {
          p.content;
          p.content = "".concat(removeDateTags(p.content), " >").concat(hyphenatedDateString$1(today));
          p.type = "scheduled";
          note.updateParagraph(p);
        }));
      }
      if ([ "move", "reschedule" ].indexOf(rescheduleTasks) > -1) {
        if (!returnValue) {
          todayNote.paragraphs = [ ...todayNote.paragraphs, ...paragraphsWithDateTag ];
        } else {
          if (includeHeadings) {
            paragraphsToReturn = [ ...paragraphsToReturn, ...paragraphsWithDateTag ];
          }
        }
        if (Editor.filename === note.filename) {
          paragraphsToRemove.forEach((para => {
            para.type = "scheduled";
            para.content = "".concat(removeDateTags(para.content), " >").concat(hyphenatedDateString$1(today));
            if (Editor.filename === note.filename) {
              Editor.updateParagraph(para);
            } else {
              note.updateParagraph(para);
            }
          }));
        }
      }
      console.log("{String(rescheduleTasks)}-ing  ".concat(paragraphsToMove.length, " paragraphs; ").concat(numTasksToMove, " tasks"));
    } else {
      if (notifyNoChanges && withUserConfirm) {
        await CommandBar.showInput("There are no open tasks to move in this note.", "OK, I'll open another date.");
        return {
          status: "error",
          msg: "There are no open tasks to move in this note."
        };
      }
    }
    return {
      status: "ok",
      msg: "Moved ".concat(numTasksToMove),
      tasks: numTasksToMove,
      taskArray: paragraphsToReturn
    };
  }
  const OPTIONS = [ {
    label: "7 days",
    value: {
      num: 7,
      unit: "day"
    }
  }, {
    label: "14 days",
    value: {
      num: 14,
      unit: "day"
    }
  }, {
    label: "21 days",
    value: {
      num: 21,
      unit: "day"
    }
  }, {
    label: "1 month",
    value: {
      num: 1,
      unit: "month"
    }
  }, {
    label: "3 months",
    value: {
      num: 3,
      unit: "month"
    }
  }, {
    label: "6 months",
    value: {
      num: 6,
      unit: "month"
    }
  }, {
    label: "1 year",
    value: {
      num: 1,
      unit: "year"
    }
  }, {
    label: "All Time",
    value: {
      num: 99,
      unit: "year"
    }
  }, {
    label: "❌ Cancel",
    value: {
      num: 0,
      unit: "day"
    }
  } ];
  const DEFAULT_OPTION = {
    unit: "day",
    num: 0
  };
  async function sweepTemplate() {
    let paramStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    if (paramStr === "") {
      return String(await sweepAll(false, true, undefined, true));
    } else {
      const limit = await getTagParamsFromString(paramStr, "limit", {});
      const includeHeadings = await getTagParamsFromString(paramStr, "includeHeadings", false);
      const requireConfirmation = Boolean(await getTagParamsFromString(paramStr, "requireConfirmation", false));
      const noteTypes = await getTagParamsFromString(paramStr, "noteTypes", [ "note", "calendar" ]);
      const ignoreFolders = await getTagParamsFromString(paramStr, "ignoreFolders", [ "📋 Templates" ]);
      const overdueOnly = Boolean(await getTagParamsFromString(paramStr, "overdueOnly", false));
      const moveType = await getTagParamsFromString(paramStr, "moveType", "reschedule");
      console.log("Running template command sweepAll with params: limit=".concat(JSON.stringify(limit), " includeHeadings=").concat(String(includeHeadings), " noteTypes=").concat(JSON.stringify(noteTypes), " ignoreFolders:").concat(JSON.stringify(ignoreFolders)));
      const retVal = await sweepAll(overdueOnly, requireConfirmation, limit, true, includeHeadings, noteTypes, ignoreFolders, moveType);
      return String(retVal !== null && retVal !== void 0 ? retVal : "");
    }
  }
  async function sweepAll() {
    let pOverdueOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let requireUserAction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let periodToCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_OPTION;
    let returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    let includeHeadings = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    let noteTypes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [ "calendar", "note" ];
    let ignoreFolders = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [ "📋 Templates" ];
    let {unit: unit, num: num} = periodToCheck;
    let foundTasks = [];
    console.log("Starting sweepAll overdueOnly:".concat(String(pOverdueOnly), " requireUserAction:").concat(String(requireUserAction), " periodToCheck:").concat(JSON.stringify(periodToCheck), " noteTypes: ").concat(JSON.stringify(noteTypes), " returnValue:").concat(String(returnValue), " ignoreFolders: ").concat(JSON.stringify(ignoreFolders)));
    if (requireUserAction) {
      const setPeriod = await chooseOption("🧹 Reschedule tasks to today from the last...", OPTIONS, DEFAULT_OPTION);
      if (setPeriod.num === 0) {
        await showMessage("Cancelled! No changes made.");
        return;
      } else {
        unit = setPeriod.unit;
        num = setPeriod.num;
      }
    }
    let res = {}, withUserConfirm = requireUserAction;
    if (withUserConfirm) {
      res = await CommandBar.showOptions([ "✅ Yes", "❌ No (Reschedule Silently)" ], "📙 Want to approve each note during sweep?");
      withUserConfirm = res.index === 0;
    }
    const afterDate = Calendar.addUnitToDate(new Date, unit, -num);
    const afterDateFileName = filenameDateString(Calendar.addUnitToDate(new Date, unit, -num));
    const count = {
      files: 0,
      tasks: 0
    };
    const processResult = (res, _title) => {
      if (res.status === "ok") {
        var _res$taskArray;
        if (res.tasks) {
          count.files += 1;
          count.tasks += res.tasks;
        }
        foundTasks = [ ...foundTasks, ...(_res$taskArray = res.taskArray) !== null && _res$taskArray !== void 0 ? _res$taskArray : [] ];
      } else {
        console.log("Error: ".concat(res.msg));
      }
    };
    if (withUserConfirm) {
      res = await CommandBar.showOptions([ "Open/Unscheduled Tasks", "Scheduled+Overdue Tasks Only" ], "What type of tasks to include?");
    }
    const overdueOnly = pOverdueOnly || res.index === 1;
    if (withUserConfirm) {
      res = await CommandBar.showOptions([ "✅ OK", "❌ Skip" ], "📙 Scan for Tasks in Project Notes?");
    }
    const includeProjectNotes = noteTypes.includes("note") || withUserConfirm && typeof res.index !== "undefined" && res.index === 0;
    if (includeProjectNotes) {
      const recentProjNotes = DataStore.projectNotes.filter((note => note.changedDate >= afterDate));
      console.log("\tProject Notes to search: ".concat(recentProjNotes.length));
      for (const note of recentProjNotes) {
        const ignoreThisFolder = ignoreFolders.length && !!ignoreFolders.filter((folder => note.filename.includes("".concat(folder, "/")))).length;
        if (!ignoreThisFolder) {
          const result = await sweepNote(note, withUserConfirm, false, overdueOnly, true, returnValue, includeHeadings);
          processResult(result, note.title);
        } else {
          console.log('Skipping note "'.concat(note.filename, '" due to ignoreFolders param: ').concat(JSON.stringify(ignoreFolders)));
        }
      }
    }
    if (withUserConfirm) {
      res = await CommandBar.showOptions([ "✅ OK", "❌ Skip" ], "Done. Now Scan Daily Calendar Notes 🗓?");
    }
    const includeCalendarNotes = noteTypes.includes("calendar") || withUserConfirm && typeof res.index !== "undefined" && res.index === 0;
    if (includeCalendarNotes) {
      const todayFileName = "".concat(filenameDateString(new Date), ".").concat(DataStore.defaultFileExtension);
      const recentCalNotes = DataStore.calendarNotes.filter((note => note.filename < todayFileName && note.filename >= afterDateFileName));
      console.log("\tCalendar Notes to search: ".concat(recentCalNotes.length));
      for (const note of recentCalNotes) {
        const ignoreThisFolder = ignoreFolders.length && !!ignoreFolders.filter((folder => note.filename.includes("".concat(folder, "/")))).length;
        if (!ignoreThisFolder) {
          if (note.filename !== todayFileName) {
            console.log("===\nCalling sweepNote ".concat(note.filename, " | Today is: ").concat(todayFileName));
            const result = await sweepNote(note, withUserConfirm, false, overdueOnly, false, returnValue, includeHeadings);
            processResult(result, note.title);
          } else {
            console.log("...Skipping today's note ".concat(todayFileName));
          }
        }
      }
    }
    const msg = count.tasks > 0 ? "Moved ".concat(count.tasks, " tasks from ").concat(count.files, " files.") : "";
    if (withUserConfirm) await showMessage("sweepAll: Done! ".concat(msg));
    console.log("Finished sweepAll");
    if (foundTasks.length) {
      return foundTasks.map((t => t.rawContent)).join("\n");
    } else {
      await Editor.openNoteByDate(new Date);
      return "";
    }
  }
  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
      return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }
  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }
  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
        console.warn((new Error).stack);
      }
      return new Date(NaN);
    }
  }
  function addMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var timestamp = toDate(dirtyDate).getTime();
    var amount = toInteger(dirtyAmount);
    return new Date(timestamp + amount);
  }
  function startOfWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = toDate(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }
  function isDate(value) {
    requiredArgs(1, arguments);
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
  }
  function isValid(dirtyDate) {
    requiredArgs(1, arguments);
    if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
      return false;
    }
    var date = toDate(dirtyDate);
    return !isNaN(Number(date));
  }
  function endOfWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = toDate(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    date.setDate(date.getDate() + diff);
    date.setHours(23, 59, 59, 999);
    return date;
  }
  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds"
    },
    xSeconds: {
      one: "1 second",
      other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes"
    },
    xMinutes: {
      one: "1 minute",
      other: "{{count}} minutes"
    },
    aboutXHours: {
      one: "about 1 hour",
      other: "about {{count}} hours"
    },
    xHours: {
      one: "1 hour",
      other: "{{count}} hours"
    },
    xDays: {
      one: "1 day",
      other: "{{count}} days"
    },
    aboutXWeeks: {
      one: "about 1 week",
      other: "about {{count}} weeks"
    },
    xWeeks: {
      one: "1 week",
      other: "{{count}} weeks"
    },
    aboutXMonths: {
      one: "about 1 month",
      other: "about {{count}} months"
    },
    xMonths: {
      one: "1 month",
      other: "{{count}} months"
    },
    aboutXYears: {
      one: "about 1 year",
      other: "about {{count}} years"
    },
    xYears: {
      one: "1 year",
      other: "{{count}} years"
    },
    overXYears: {
      one: "over 1 year",
      other: "over {{count}} years"
    },
    almostXYears: {
      one: "almost 1 year",
      other: "almost {{count}} years"
    }
  };
  var formatDistance = function(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
      result = tokenValue;
    } else if (count === 1) {
      result = tokenValue.one;
    } else {
      result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }
    return result;
  };
  var formatDistance$1 = formatDistance;
  function buildFormatLongFn(args) {
    return function() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format = args.formats[width] || args.formats[args.defaultWidth];
      return format;
    };
  }
  var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
  };
  var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: "full"
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: "full"
    })
  };
  var formatLong$1 = formatLong;
  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
  };
  var formatRelative = function(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  };
  var formatRelative$1 = formatRelative;
  function buildLocalizeFn(args) {
    return function(dirtyIndex, dirtyOptions) {
      var options = dirtyOptions || {};
      var context = options.context ? String(options.context) : "standalone";
      var valuesArray;
      if (context === "formatting" && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;
        var _width = options.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }
      var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
      return valuesArray[index];
    };
  }
  var eraValues = {
    narrow: [ "B", "A" ],
    abbreviated: [ "BC", "AD" ],
    wide: [ "Before Christ", "Anno Domini" ]
  };
  var quarterValues = {
    narrow: [ "1", "2", "3", "4" ],
    abbreviated: [ "Q1", "Q2", "Q3", "Q4" ],
    wide: [ "1st quarter", "2nd quarter", "3rd quarter", "4th quarter" ]
  };
  var monthValues = {
    narrow: [ "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" ],
    abbreviated: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
    wide: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
  };
  var dayValues = {
    narrow: [ "S", "M", "T", "W", "T", "F", "S" ],
    short: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
    abbreviated: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
    wide: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
  };
  var dayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night"
    }
  };
  var ordinalNumber = function(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
       case 1:
        return number + "st";

       case 2:
        return number + "nd";

       case 3:
        return number + "rd";
      }
    }
    return number + "th";
  };
  var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: "wide",
      argumentCallback: function(quarter) {
        return quarter - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: "wide"
    })
  };
  var localize$1 = localize;
  function buildMatchFn(args) {
    return function(string) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (function(pattern) {
        return pattern.test(matchedString);
      })) : findKey(parsePatterns, (function(pattern) {
        return pattern.test(matchedString);
      }));
      var value;
      value = args.valueCallback ? args.valueCallback(key) : key;
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value: value,
        rest: rest
      };
    };
  }
  function findKey(object, predicate) {
    for (var key in object) {
      if (object.hasOwnProperty(key) && predicate(object[key])) {
        return key;
      }
    }
    return undefined;
  }
  function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
    return undefined;
  }
  function buildMatchPatternFn(args) {
    return function(string) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var matchResult = string.match(args.matchPattern);
      if (!matchResult) return null;
      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);
      if (!parseResult) return null;
      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value: value,
        rest: rest
      };
    };
  }
  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [ /^b/i, /^(a|c)/i ]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [ /1/i, /2/i, /3/i, /4/i ]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [ /^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i ],
    any: [ /^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i ]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [ /^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i ],
    any: [ /^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i ]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function(value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns,
      defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: "any",
      valueCallback: function(index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: "any"
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns,
      defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: "any"
    })
  };
  var match$1 = match;
  var locale = {
    code: "en-US",
    formatDistance: formatDistance$1,
    formatLong: formatLong$1,
    formatRelative: formatRelative$1,
    localize: localize$1,
    match: match$1,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
  var defaultLocale = locale;
  function subMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, -amount);
  }
  function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? "-" : "";
    var output = Math.abs(number).toString();
    while (output.length < targetLength) {
      output = "0" + output;
    }
    return sign + output;
  }
  var formatters$2 = {
    y: function(date, token) {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
    },
    M: function(date, token) {
      var month = date.getUTCMonth();
      return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    d: function(date, token) {
      return addLeadingZeros(date.getUTCDate(), token.length);
    },
    a: function(date, token) {
      var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (token) {
       case "a":
       case "aa":
        return dayPeriodEnumValue.toUpperCase();

       case "aaa":
        return dayPeriodEnumValue;

       case "aaaaa":
        return dayPeriodEnumValue[0];

       case "aaaa":
       default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
      }
    },
    h: function(date, token) {
      return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
    },
    H: function(date, token) {
      return addLeadingZeros(date.getUTCHours(), token.length);
    },
    m: function(date, token) {
      return addLeadingZeros(date.getUTCMinutes(), token.length);
    },
    s: function(date, token) {
      return addLeadingZeros(date.getUTCSeconds(), token.length);
    },
    S: function(date, token) {
      var numberOfDigits = token.length;
      var milliseconds = date.getUTCMilliseconds();
      var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
      return addLeadingZeros(fractionalSeconds, token.length);
    }
  };
  var formatters$3 = formatters$2;
  var MILLISECONDS_IN_DAY = 864e5;
  function getUTCDayOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
  }
  function startOfUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }
  function getUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  function startOfUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
  }
  var MILLISECONDS_IN_WEEK$1 = 6048e5;
  function getUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
  }
  function startOfUTCWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }
  function getUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    var year = getUTCWeekYear(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, dirtyOptions);
    return date;
  }
  var MILLISECONDS_IN_WEEK = 6048e5;
  function getUTCWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }
  var dayPeriodEnum = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  };
  var formatters = {
    G: function(date, token, localize) {
      var era = date.getUTCFullYear() > 0 ? 1 : 0;
      switch (token) {
       case "G":
       case "GG":
       case "GGG":
        return localize.era(era, {
          width: "abbreviated"
        });

       case "GGGGG":
        return localize.era(era, {
          width: "narrow"
        });

       case "GGGG":
       default:
        return localize.era(era, {
          width: "wide"
        });
      }
    },
    y: function(date, token, localize) {
      if (token === "yo") {
        var signedYear = date.getUTCFullYear();
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return localize.ordinalNumber(year, {
          unit: "year"
        });
      }
      return formatters$3.y(date, token);
    },
    Y: function(date, token, localize, options) {
      var signedWeekYear = getUTCWeekYear(date, options);
      var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
      if (token === "YY") {
        var twoDigitYear = weekYear % 100;
        return addLeadingZeros(twoDigitYear, 2);
      }
      if (token === "Yo") {
        return localize.ordinalNumber(weekYear, {
          unit: "year"
        });
      }
      return addLeadingZeros(weekYear, token.length);
    },
    R: function(date, token) {
      var isoWeekYear = getUTCISOWeekYear(date);
      return addLeadingZeros(isoWeekYear, token.length);
    },
    u: function(date, token) {
      var year = date.getUTCFullYear();
      return addLeadingZeros(year, token.length);
    },
    Q: function(date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
       case "Q":
        return String(quarter);

       case "QQ":
        return addLeadingZeros(quarter, 2);

       case "Qo":
        return localize.ordinalNumber(quarter, {
          unit: "quarter"
        });

       case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });

       case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });

       case "QQQQ":
       default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
      }
    },
    q: function(date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
       case "q":
        return String(quarter);

       case "qq":
        return addLeadingZeros(quarter, 2);

       case "qo":
        return localize.ordinalNumber(quarter, {
          unit: "quarter"
        });

       case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });

       case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });

       case "qqqq":
       default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
      }
    },
    M: function(date, token, localize) {
      var month = date.getUTCMonth();
      switch (token) {
       case "M":
       case "MM":
        return formatters$3.M(date, token);

       case "Mo":
        return localize.ordinalNumber(month + 1, {
          unit: "month"
        });

       case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting"
        });

       case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting"
        });

       case "MMMM":
       default:
        return localize.month(month, {
          width: "wide",
          context: "formatting"
        });
      }
    },
    L: function(date, token, localize) {
      var month = date.getUTCMonth();
      switch (token) {
       case "L":
        return String(month + 1);

       case "LL":
        return addLeadingZeros(month + 1, 2);

       case "Lo":
        return localize.ordinalNumber(month + 1, {
          unit: "month"
        });

       case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone"
        });

       case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone"
        });

       case "LLLL":
       default:
        return localize.month(month, {
          width: "wide",
          context: "standalone"
        });
      }
    },
    w: function(date, token, localize, options) {
      var week = getUTCWeek(date, options);
      if (token === "wo") {
        return localize.ordinalNumber(week, {
          unit: "week"
        });
      }
      return addLeadingZeros(week, token.length);
    },
    I: function(date, token, localize) {
      var isoWeek = getUTCISOWeek(date);
      if (token === "Io") {
        return localize.ordinalNumber(isoWeek, {
          unit: "week"
        });
      }
      return addLeadingZeros(isoWeek, token.length);
    },
    d: function(date, token, localize) {
      if (token === "do") {
        return localize.ordinalNumber(date.getUTCDate(), {
          unit: "date"
        });
      }
      return formatters$3.d(date, token);
    },
    D: function(date, token, localize) {
      var dayOfYear = getUTCDayOfYear(date);
      if (token === "Do") {
        return localize.ordinalNumber(dayOfYear, {
          unit: "dayOfYear"
        });
      }
      return addLeadingZeros(dayOfYear, token.length);
    },
    E: function(date, token, localize) {
      var dayOfWeek = date.getUTCDay();
      switch (token) {
       case "E":
       case "EE":
       case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });

       case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });

       case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });

       case "EEEE":
       default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
      }
    },
    e: function(date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
       case "e":
        return String(localDayOfWeek);

       case "ee":
        return addLeadingZeros(localDayOfWeek, 2);

       case "eo":
        return localize.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });

       case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });

       case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });

       case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });

       case "eeee":
       default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
      }
    },
    c: function(date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
       case "c":
        return String(localDayOfWeek);

       case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);

       case "co":
        return localize.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });

       case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });

       case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });

       case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });

       case "cccc":
       default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
      }
    },
    i: function(date, token, localize) {
      var dayOfWeek = date.getUTCDay();
      var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
      switch (token) {
       case "i":
        return String(isoDayOfWeek);

       case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);

       case "io":
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });

       case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });

       case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });

       case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });

       case "iiii":
       default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
      }
    },
    a: function(date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      switch (token) {
       case "a":
       case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });

       case "aaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();

       case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });

       case "aaaa":
       default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
      }
    },
    b: function(date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours === 12) {
        dayPeriodEnumValue = dayPeriodEnum.noon;
      } else if (hours === 0) {
        dayPeriodEnumValue = dayPeriodEnum.midnight;
      } else {
        dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
      }
      switch (token) {
       case "b":
       case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });

       case "bbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();

       case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });

       case "bbbb":
       default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
      }
    },
    B: function(date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours >= 17) {
        dayPeriodEnumValue = dayPeriodEnum.evening;
      } else if (hours >= 12) {
        dayPeriodEnumValue = dayPeriodEnum.afternoon;
      } else if (hours >= 4) {
        dayPeriodEnumValue = dayPeriodEnum.morning;
      } else {
        dayPeriodEnumValue = dayPeriodEnum.night;
      }
      switch (token) {
       case "B":
       case "BB":
       case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });

       case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });

       case "BBBB":
       default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
      }
    },
    h: function(date, token, localize) {
      if (token === "ho") {
        var hours = date.getUTCHours() % 12;
        if (hours === 0) hours = 12;
        return localize.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return formatters$3.h(date, token);
    },
    H: function(date, token, localize) {
      if (token === "Ho") {
        return localize.ordinalNumber(date.getUTCHours(), {
          unit: "hour"
        });
      }
      return formatters$3.H(date, token);
    },
    K: function(date, token, localize) {
      var hours = date.getUTCHours() % 12;
      if (token === "Ko") {
        return localize.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return addLeadingZeros(hours, token.length);
    },
    k: function(date, token, localize) {
      var hours = date.getUTCHours();
      if (hours === 0) hours = 24;
      if (token === "ko") {
        return localize.ordinalNumber(hours, {
          unit: "hour"
        });
      }
      return addLeadingZeros(hours, token.length);
    },
    m: function(date, token, localize) {
      if (token === "mo") {
        return localize.ordinalNumber(date.getUTCMinutes(), {
          unit: "minute"
        });
      }
      return formatters$3.m(date, token);
    },
    s: function(date, token, localize) {
      if (token === "so") {
        return localize.ordinalNumber(date.getUTCSeconds(), {
          unit: "second"
        });
      }
      return formatters$3.s(date, token);
    },
    S: function(date, token) {
      return formatters$3.S(date, token);
    },
    X: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      if (timezoneOffset === 0) {
        return "Z";
      }
      switch (token) {
       case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

       case "XXXX":
       case "XX":
        return formatTimezone(timezoneOffset);

       case "XXXXX":
       case "XXX":
       default:
        return formatTimezone(timezoneOffset, ":");
      }
    },
    x: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
       case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

       case "xxxx":
       case "xx":
        return formatTimezone(timezoneOffset);

       case "xxxxx":
       case "xxx":
       default:
        return formatTimezone(timezoneOffset, ":");
      }
    },
    O: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
       case "O":
       case "OO":
       case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");

       case "OOOO":
       default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
      }
    },
    z: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
       case "z":
       case "zz":
       case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");

       case "zzzz":
       default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
      }
    },
    t: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = Math.floor(originalDate.getTime() / 1e3);
      return addLeadingZeros(timestamp, token.length);
    },
    T: function(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = originalDate.getTime();
      return addLeadingZeros(timestamp, token.length);
    }
  };
  function formatTimezoneShort(offset, delimiter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) {
      return sign + String(hours);
    }
    return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
  }
  function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
      var sign = offset > 0 ? "-" : "+";
      return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
  }
  function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || "";
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
    var minutes = addLeadingZeros(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
  }
  var formatters$1 = formatters;
  function dateLongFormatter(pattern, formatLong) {
    switch (pattern) {
     case "P":
      return formatLong.date({
        width: "short"
      });

     case "PP":
      return formatLong.date({
        width: "medium"
      });

     case "PPP":
      return formatLong.date({
        width: "long"
      });

     case "PPPP":
     default:
      return formatLong.date({
        width: "full"
      });
    }
  }
  function timeLongFormatter(pattern, formatLong) {
    switch (pattern) {
     case "p":
      return formatLong.time({
        width: "short"
      });

     case "pp":
      return formatLong.time({
        width: "medium"
      });

     case "ppp":
      return formatLong.time({
        width: "long"
      });

     case "pppp":
     default:
      return formatLong.time({
        width: "full"
      });
    }
  }
  function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
      return dateLongFormatter(pattern, formatLong);
    }
    var dateTimeFormat;
    switch (datePattern) {
     case "P":
      dateTimeFormat = formatLong.dateTime({
        width: "short"
      });
      break;

     case "PP":
      dateTimeFormat = formatLong.dateTime({
        width: "medium"
      });
      break;

     case "PPP":
      dateTimeFormat = formatLong.dateTime({
        width: "long"
      });
      break;

     case "PPPP":
     default:
      dateTimeFormat = formatLong.dateTime({
        width: "full"
      });
      break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
  }
  var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
  };
  var longFormatters$1 = longFormatters;
  var protectedDayOfYearTokens = [ "D", "DD" ];
  var protectedWeekYearTokens = [ "YY", "YYYY" ];
  function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
  }
  function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
  }
  function throwProtectedError(token, format, input) {
    if (token === "YYYY") {
      throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === "YY") {
      throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === "D") {
      throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === "DD") {
      throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    }
  }
  var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
  var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp = /^'([^]*?)'?$/;
  var doubleQuoteRegExp = /''/g;
  var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
  function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    requiredArgs(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {};
    var locale = options.locale || defaultLocale;
    var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    if (!locale.localize) {
      throw new RangeError("locale must contain localize property");
    }
    if (!locale.formatLong) {
      throw new RangeError("locale must contain formatLong property");
    }
    var originalDate = toDate(dirtyDate);
    if (!isValid(originalDate)) {
      throw new RangeError("Invalid time value");
    }
    var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
    var utcDate = subMilliseconds(originalDate, timezoneOffset);
    var formatterOptions = {
      firstWeekContainsDate: firstWeekContainsDate,
      weekStartsOn: weekStartsOn,
      locale: locale,
      _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map((function(substring) {
      var firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        var longFormatter = longFormatters$1[firstCharacter];
        return longFormatter(substring, locale.formatLong, formatterOptions);
      }
      return substring;
    })).join("").match(formattingTokensRegExp).map((function(substring) {
      if (substring === "''") {
        return "'";
      }
      var firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring);
      }
      var formatter = formatters$1[firstCharacter];
      if (formatter) {
        if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate);
        }
        if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate);
        }
        return formatter(utcDate, substring, locale.localize, formatterOptions);
      }
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
      }
      return substring;
    })).join("");
    return result;
  }
  function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
  }
  function get8601String() {
    return strftime("%Y-%m-%d");
  }
  async function formattedDateTimeTemplate() {
    let paramStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let retVal = "";
    if (paramStr === "") {
      retVal = getFormattedTime();
    } else {
      const format = await getTagParamsFromString(paramStr, "format", "");
      retVal = getFormattedTime(format ? String(format) : undefined);
    }
    return retVal;
  }
  async function getWeekDates() {
    let paramStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    const weekStartsOn = Number(await getTagParamsFromString(paramStr, "weekStartsOn", 1));
    const format$1 = String(await getTagParamsFromString(paramStr, "format", "EEE yyyy-MM-dd"));
    if (weekStartsOn >= 0 && weekStartsOn <= 6) {
      console.log(format(new Date(startOfWeek(new Date, {
        weekStartsOn: weekStartsOn
      })), "yyyy-MM-dd"));
      const start = format(new Date(startOfWeek(new Date, {
        weekStartsOn: weekStartsOn
      })), format$1);
      const end = format(new Date(endOfWeek(new Date, {
        weekStartsOn: weekStartsOn
      })), format$1);
      return "".concat(start, " - ").concat(end);
    } else {
      showMessage("Error in your format string");
      return "";
    }
  }
  const DEFAULT_WEATHER_CONFIG = "// configuration for weather data (used in Daily Note Template, for example)\n  weather: {\n    // API key for https://openweathermap.org/\n    openWeatherAPIKey: '... put your API key here ...', // !!REQUIRED!!\n    // Required location for weather forecast\n    latPosition: 0.0,  // !!REQUIRED!!\n    longPosition: 0.0, // !!REQUIRED!!\n    // Default units. Can be 'metric' (for Celsius), or 'imperial' (for Fahrenheit)\n    openWeatherUnits: 'metric',\n  },\n";
  const MINIMUM_WEATHER_CONFIG = {
    openWeatherAPIKey: "string",
    latPosition: "number",
    longPosition: "number",
    openWeatherUnits: "string"
  };
  async function getWeatherSummary(weatherParams) {
    const weatherDescText = [ "showers", "rain", "sunny intervals", "partly sunny", "sunny", "clear sky", "cloud", "snow ", "thunderstorm", "tornado" ];
    const weatherDescIcons = [ "🌦️", "🌧️", "🌤", "⛅", "☀️", "☀️", "☁️", "🌨️", "⛈", "🌪" ];
    const weatherConfig = await getOrMakeConfigurationSection("weather", DEFAULT_WEATHER_CONFIG, MINIMUM_WEATHER_CONFIG);
    console.log("\tWeather settings are ".concat(JSON.stringify(weatherConfig)));
    if (weatherConfig == null) {
      console.log("Cannot find 'weather' settings in Templates/_configuration note.");
      return "Error: Cannot find 'weather' settings in Templates/_configuration note.";
    }
    const {openWeatherAPIKey: openWeatherAPIKey, latPosition: latPosition, longPosition: longPosition, openWeatherUnits: openWeatherUnits} = weatherConfig;
    if (openWeatherAPIKey !== null && !(openWeatherAPIKey !== null && openWeatherAPIKey !== void 0 && openWeatherAPIKey.match(/[a-f0-9]{32}/))) {
      console.log("Cannot find a valid API Key 'weather' settings in Templates/_configuration note.");
      return "Error: Cannot find a valid API Key 'weather' settings in Templates/_configuration note.";
    }
    const getWeatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=".concat(encodeURIComponent(latPosition.toString()), "&lon=").concat(encodeURIComponent(longPosition.toString()), "&exclude=current,hourly,minutely&units=").concat(encodeURIComponent(openWeatherUnits), "&appid=").concat(encodeURIComponent(openWeatherAPIKey));
    let jsonIn, allWeatherData;
    try {
      jsonIn = await fetch(getWeatherURL);
    } catch (err) {
      console.log("Error ".concat(err.message, " parsing Weather data lookup. Please check your _configuration note."));
      return "Error ".concat(err.message, " parsing Weather data lookup. Please check your _configuration note.");
    }
    if (jsonIn != null) {
      var _allWeatherData, _weatherTodayAll$weat;
      try {
        allWeatherData = JSON.parse(jsonIn);
      } catch (err) {
        console.log("Error ".concat(err.message, " parsing Weather data lookup. Please check your _configuration note."));
        return "Error ".concat(err.message, " parsing Weather data lookup. Please check your _configuration note.");
      }
      if (allWeatherData.cod === 401) {
        return "Weather: Invalid configuration settings. ".concat(allWeatherData.message);
      }
      const weatherTodayAll = (_allWeatherData = allWeatherData) === null || _allWeatherData === void 0 ? void 0 : _allWeatherData.daily["0"];
      const fMax = weatherTodayAll.feels_like.day.toFixed(0);
      const fMin = weatherTodayAll.feels_like.night.toFixed(0);
      const minTemp = weatherTodayAll.temp.min.toFixed(0);
      const maxTemp = weatherTodayAll.temp.max.toFixed(0);
      const weatherDesc = (_weatherTodayAll$weat = weatherTodayAll.weather["0"].description) !== null && _weatherTodayAll$weat !== void 0 ? _weatherTodayAll$weat : "";
      const units = openWeatherUnits === "imperial" ? "°F" : "°C";
      const timezone = allWeatherData.timezone;
      let weatherIcon = "";
      for (let i = 0; i < weatherDescText.length; i++) {
        if (weatherDesc.match(weatherDescText[i])) {
          weatherIcon = weatherDescIcons[i];
          break;
        }
      }
      const replacements = [ {
        key: "|FEELS_LIKE_LOW|",
        value: fMin
      }, {
        key: "|FEELS_LIKE_HIGH|",
        value: fMax
      }, {
        key: "|LOW_TEMP|",
        value: minTemp
      }, {
        key: "|HIGH_TEMP|",
        value: maxTemp
      }, {
        key: "|DESCRIPTION|",
        value: capitalize(weatherDesc)
      }, {
        key: "|TIMEZONE|",
        value: timezone
      }, {
        key: "|UNITS|",
        value: units
      }, {
        key: "|WEATHER_ICON|",
        value: weatherIcon
      } ];
      const defaultWeatherLine = "Weather: |WEATHER_ICON| |DESCRIPTION| |LOW_TEMP||UNITS|-|HIGH_TEMP||UNITS|; Feels like: |FEELS_LIKE_LOW||UNITS|-|FEELS_LIKE_HIGH||UNITS|";
      const template = await getTagParamsFromString(weatherParams, "template", defaultWeatherLine);
      console.log("\toutput template: '".concat(template, "' ; about to call stringReplace"));
      return stringReplace(template, replacements);
    } else {
      return "Problem in Weather data lookup for ".concat(latPosition, "/").concat(longPosition, ". Please check your _configuration note.");
    }
  }
  async function getDailyQuote(quoteParams, config) {
    var _config$quote;
    console.log("getDailyQuote() with ".concat(quoteParams, ":"));
    const availableModes = [ "today", "random", "author", "readwise" ];
    if (quoteParams !== undefined && quoteParams !== "") {
      await showMessage("\tInfo: {{quote()}} tag parameters are not currently supported");
    }
    const quoteConfig = (_config$quote = config.quote) !== null && _config$quote !== void 0 ? _config$quote : null;
    if (quoteConfig == null) {
      console.log("\tInfo: No 'quote' settings in Templates/_configuration note");
    } else {
      console.log("\tConfig for 'quote': ".concat(JSON.stringify(quoteConfig)));
    }
    const pref_mode = quoteConfig !== null && quoteConfig !== void 0 && quoteConfig.mode && availableModes.includes(quoteConfig === null || quoteConfig === void 0 ? void 0 : quoteConfig.mode) ? quoteConfig === null || quoteConfig === void 0 ? void 0 : quoteConfig.mode : "random";
    let API;
    let URL;
    if (pref_mode === "readwise") {
      var _quoteConfig$readwise;
      (_quoteConfig$readwise = quoteConfig === null || quoteConfig === void 0 ? void 0 : quoteConfig.readwiseKey) !== null && _quoteConfig$readwise !== void 0 ? _quoteConfig$readwise : "<error - no key found>";
      API = '"https://readwise.io/api/v2/';
      URL = "".concat(API, "highlights?page_size=10");
      console.log("Before API call: ".concat(URL));
      const response = await fetch(URL);
      if (response != null) {
        const data = JSON.parse(response)[0];
        const quoteLine = "".concat(data.q, " - *").concat(data.a, "*");
        console.log("\t".concat(quoteLine));
        return quoteLine;
      } else {
        console.log("\tError in Quote lookup to ".concat(API, ". Please check your _configuration note."));
        return "Error in Quote lookup to ".concat(API, ". Please check your _configuration note.");
      }
    } else {
      var _quoteConfig$zenquote;
      const pref_author = quoteConfig === null || quoteConfig === void 0 ? void 0 : quoteConfig.author;
      const pref_zenquotes_key = (_quoteConfig$zenquote = quoteConfig === null || quoteConfig === void 0 ? void 0 : quoteConfig.zenquotesKey) !== null && _quoteConfig$zenquote !== void 0 ? _quoteConfig$zenquote : "";
      API = "https://zenquotes.io/api/";
      URL = pref_mode === "author" && pref_author && pref_zenquotes_key ? "".concat(API, "quotes/").concat(pref_mode, "/").concat(pref_author, "/").concat(pref_zenquotes_key) : "".concat(API).concat(pref_mode);
      console.log("Before API call: ".concat(URL));
      const response = await fetch(URL);
      if (response != null) {
        const data = JSON.parse(response)[0];
        const quoteLine = "".concat(data.q, " - *").concat(data.a, "*");
        console.log("\t".concat(quoteLine));
        return quoteLine;
      } else {
        console.log("\tError in Quote lookup to ".concat(API, ". Please check your _configuration note."));
        return "Error in Quote lookup to ".concat(API, ". Please check your _configuration note.");
      }
    }
  }
  async function getAffirmation() {
    const aff = await doFetchJson("https://affirmations.dev");
    if (aff.error) {
      return aff.msg;
    } else {
      return aff.affirmation;
    }
  }
  async function getAdvice() {
    const aff = await doFetchJson("https://api.adviceslip.com/advice");
    if (aff.error) {
      return aff.msg;
    } else {
      if (aff.slip.advice.length > 0) {
        return aff.slip.advice;
      } else {
        return "Advice returned empty advice";
      }
    }
  }
  async function doFetchJson(URL) {
    console.log("Before API call: ".concat(URL));
    try {
      const response = await fetch(URL);
      const data = JSON.parse(response);
      return data;
    } catch (error) {
      showMessage("External URL fetch failed: ".concat(error));
      return {
        error: error,
        msg: "Fetch failed for ".concat(URL, ": ").concat(JSON.stringify(error))
      };
    }
  }
  const selection = async () => Editor.selectedParagraphs.map((para => para.rawContent)).join("\n");
  const _excluded = [ "locale" ];
  const tagList = [];
  addTag("date8601", get8601String);
  addTag("date", processDate, true);
  addTag("pickDate", datePicker, true);
  addTag("pickDateInterval", askDateInterval, true);
  addTag("weather", getWeatherSummary);
  addTag("events", listDaysEvents);
  addTag("listTodaysEvents", listDaysEvents);
  addTag("matchingEvents", listMatchingDaysEvents);
  addTag("listMatchingEvents", listMatchingDaysEvents);
  addTag("quote", getDailyQuote, true);
  addTag("sweepTasks", sweepTemplate);
  addTag("formattedDateTime", formattedDateTimeTemplate);
  addTag("weekDates", getWeekDates);
  addTag("affirmation", getAffirmation);
  addTag("advice", getAdvice);
  addTag("selection", selection);
  function addTag(tagName, tagFunction) {
    let includeConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    tagList.push({
      tagName: tagName,
      tagFunction: tagFunction,
      includeConfig: includeConfig
    });
  }
  async function execTagListFunction(tagString, enclosedString, config) {
    let found = false;
    for (const t of tagList) {
      if (tagString.startsWith("".concat(t.tagName, "(")) && tagString.endsWith(")")) {
        console.log('execTagListFunction() Tag matched "'.concat(t.tagName, '"'));
        const params = [ enclosedString ];
        if (t.includeConfig) {
          params.push(config);
        }
        found = true;
        const result = await t.tagFunction(...params);
        console.log("---- execTagListFunction(".concat(t.tagName, ') RESULT="').concat(result, '"\n'));
        return result || "";
      }
    }
    if (!found) {
      return await processTagValues(tagString, config) || "";
    }
    return "";
  }
  async function processTemplate(content, config) {
    const tagStart = content.indexOf("{{");
    const tagEnd = content.indexOf("}}");
    const hasTag = tagStart !== -1 && tagEnd !== -1 && tagStart < tagEnd;
    if (!hasTag) {
      return content;
    }
    const beforeTag = content.slice(0, tagStart);
    const afterTag = content.slice(tagEnd + 2);
    const tag = content.slice(tagStart + 2, tagEnd).trim();
    console.log("processTemplate() found tag ".concat(tag));
    try {
      const tagProcessed = await processTag(tag, config);
      const restProcessed = await processTemplate(afterTag, config);
      return beforeTag + tagProcessed + restProcessed;
    } catch (e) {
      console.log(e);
      return content;
    }
  }
  function getEnclosedParameter(tagString) {
    var _tagString$match;
    const res = (_tagString$match = tagString.match(/\((.*)\)/)) !== null && _tagString$match !== void 0 ? _tagString$match : [];
    return res[1];
  }
  async function processTag(tag, config) {
    const enclosedString = getEnclosedParameter(tag);
    console.log("processTag(".concat(tag, ") param:").concat(enclosedString));
    return execTagListFunction(tag, enclosedString, config);
  }
  async function processTagValues(tag, config) {
    const valueInConfig = tag.split(/[\.\[\]]/).filter(Boolean).reduce(((path, key) => path != null && typeof path === "object" ? path[key] : null), config.tagValue);
    if (valueInConfig != null) {
      return String(valueInConfig);
    }
    const res = await getInput("Value for ".concat(tag));
    return res;
  }
  async function processDate(dateParams, config) {
    var _config$date;
    const defaultConfig = (_config$date = config.date) !== null && _config$date !== void 0 ? _config$date : {};
    const dateParamsTrimmed = dateParams.trim();
    const paramConfig = dateParamsTrimmed.startsWith("{") && dateParamsTrimmed.endsWith("}") ? await parseJSON5(dateParams) : dateParamsTrimmed !== "" ? await parseJSON5("{".concat(dateParams, "}")) : {};
    const finalArguments = _objectSpread2(_objectSpread2({}, defaultConfig), paramConfig);
    const _ref = finalArguments, {locale: locale} = _ref, otherParams = _objectWithoutProperties(_ref, _excluded);
    const localeParam = locale != null ? String(locale) : [];
    const secondParam = _objectSpread2({
      dateStyle: "short"
    }, otherParams);
    return new Intl.DateTimeFormat(localeParam, secondParam).format(new Date);
  }
  async function getProcessedTemplate(templateTitle) {
    var _DataStore$projectNot, _await$getStructuredC;
    const selectedTemplate = (_DataStore$projectNot = DataStore.projectNoteByTitle(templateTitle, true, false)) === null || _DataStore$projectNot === void 0 ? void 0 : _DataStore$projectNot[0];
    let templateContent = selectedTemplate === null || selectedTemplate === void 0 ? void 0 : selectedTemplate.content;
    if (templateContent == null || templateContent.length === 0) {
      console.log("\twarning: template '".concat(templateTitle, "' is null or empty"));
      return "<template was empty>";
    }
    templateContent = templateContent.split("\n---\n").slice(1).join("\n---\n");
    const config = (_await$getStructuredC = await getStructuredConfiguration()) !== null && _await$getStructuredC !== void 0 ? _await$getStructuredC : {};
    const processedTemplateContent = await processTemplate(templateContent, config);
    return processedTemplateContent;
  }
  async function applyNamedTemplate(templateTitle) {
    if (Editor == null) {
      await showMessage("Please run again with a note open in the editor");
      return;
    }
    console.log("applyNamedTemplate: for template '".concat(templateTitle, "'"));
    const processedTemplateContent = await getProcessedTemplate(templateTitle);
    Editor.content = [ Editor.content, processedTemplateContent ].filter(Boolean).join("\n");
  }
  async function applyTemplate(newNote) {
    var _await$getStructuredC2;
    const templateName = newNote && newNote[2];
    const templateFolder = await getOrMakeTemplateFolder();
    if (templateFolder == null) {
      console.log("applyTemplate: warning: templateFolder is null");
      await showMessage("Template Folder Not Found");
      return;
    }
    console.log("applyTemplate: templateFolder = '".concat(templateFolder, "'"));
    const templateNotes = DataStore.projectNotes.filter((n => {
      var _n$filename;
      return (_n$filename = n.filename) === null || _n$filename === void 0 ? void 0 : _n$filename.startsWith(templateFolder);
    })).filter((n => {
      var _n$title;
      return !((_n$title = n.title) !== null && _n$title !== void 0 && _n$title.startsWith("_configuration"));
    }));
    const options = templateNotes.filter((n => templateName ? n.title === templateName : true)).map((note => note.title == null ? null : {
      label: note.title,
      value: note
    })).filter(Boolean);
    console.log("applyTemplate: found ".concat(options.length, " defined templates"));
    if (templateName && !templateNotes.filter((n => n.title === templateName)).length) {
      console.log("applyTemplate: Warning: template '".concat(templateName, "' not found"));
      await showMessage("Template \"'".concat(templateName, "'\" Not Found. Check _config"));
      return;
    }
    const selectedTemplate = options.length === 1 ? options[0].value : await chooseOption("Choose Template", options);
    console.log("selectedTemplate=".concat(JSON.stringify(selectedTemplate)));
    let templateContent = selectedTemplate === null || selectedTemplate === void 0 ? void 0 : selectedTemplate.content;
    if (templateContent == null) {
      return;
    }
    templateContent = templateContent.split("\n---\n").slice(1).join("\n---\n");
    const config = (_await$getStructuredC2 = await getStructuredConfiguration()) !== null && _await$getStructuredC2 !== void 0 ? _await$getStructuredC2 : {};
    const processedTemplateContent = await processTemplate(templateContent, config);
    console.log("applyTemplate: processed template content: ".concat(processedTemplateContent.length, " chars"));
    if (newNote != null) {
      const [title, folder] = newNote;
      const filename = DataStore.newNote(title, folder);
      console.log("applyTemplate: new note created: ".concat(String(filename)));
      if (!filename) {
        console.log("applyTemplate: There was an error creating new note '".concat(title, "' in '").concat(folder, "'"));
        await showMessage("There was an error creating your note :(");
        return;
      }
      await Editor.openNoteByFilename(filename);
      Editor.content = "# ".concat(title, "\n").concat(processedTemplateContent);
    } else {
      Editor.content = [ Editor.content, processedTemplateContent ].filter(Boolean).join("\n");
    }
  }
  async function insertTemplate() {
    if (Editor == null) {
      await showMessage("Please run again with a note open in the editor");
      return;
    }
    const templateFolder = await getOrMakeTemplateFolder();
    if (templateFolder == null) {
      console.log("applyTemplate: warning: templateFolder is null");
      await showMessage("Oops: Template Folder Not Found");
      return;
    }
    console.log("insertTemplate: templateFolder = '".concat(templateFolder, "'"));
    const options = DataStore.projectNotes.filter((n => {
      var _n$filename2;
      return (_n$filename2 = n.filename) === null || _n$filename2 === void 0 ? void 0 : _n$filename2.startsWith(templateFolder);
    })).filter((n => {
      var _n$title2;
      return !((_n$title2 = n.title) !== null && _n$title2 !== void 0 && _n$title2.startsWith("_configuration"));
    })).map((note => note.title == null ? null : {
      label: note.title,
      value: note
    })).filter(Boolean);
    console.log("insertTemplate: found ".concat(options.length, " defined templates"));
    const selectedTemplate = await chooseOption("Choose Template", options);
    const templateTitle = selectedTemplate === null || selectedTemplate === void 0 ? void 0 : selectedTemplate.title;
    if (templateTitle == null) {
      console.log("insertTemplate: error: can't get template title");
      await showMessage("Oops: can't get template title");
      return;
    }
    const processedTemplateContent = await getProcessedTemplate(templateTitle);
    Editor.insertTextAtCursor(processedTemplateContent);
  }
  async function insertNamedTemplate(templateTitle) {
    if (Editor == null) {
      await showMessage("Please run again with a note open in the editor");
      return;
    }
    console.log("insertNamedTemplateTitle: for template '".concat(templateTitle, "'"));
    const processedTemplateContent = await getProcessedTemplate(templateTitle);
    if (templateTitle == null) {
      console.log("insertTemplate: error: can't get template title");
      await showMessage("Oops: can't get template title");
      return;
    }
    Editor.insertTextAtCursor(processedTemplateContent);
  }
  const processTemplateTags = async templateContent => {
    var _await$getStructuredC3;
    const config = (_await$getStructuredC3 = await getStructuredConfiguration()) !== null && _await$getStructuredC3 !== void 0 ? _await$getStructuredC3 : {};
    return await processTemplate(templateContent, config);
  };
  async function newNoteWithTemplate() {
    let template = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let fileName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let targetFolder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    const title = fileName ? await processTemplateTags(fileName) : await getInput("Enter title of the new note", "Create a new note with title '%@'");
    let folder = targetFolder;
    console.log('newNoteWithTemplate() template="'.concat(template, '" fileName="').concat(fileName, '" targetFolder=').concat(targetFolder));
    const folderList = await DataStore.folders.slice().sort();
    let folderFail = false;
    if (targetFolder !== "" && !folderList.includes(targetFolder)) {
      console.log('newNoteWithTemplate() template="'.concat(template, '" Folder "').concat(folder, "\" doesn't exist. Check config. For now. Will ask:"));
      await showMessage("Can't find folder '".concat(targetFolder, "' Pls check _config."));
      await openConfigFileInEditor();
      folderFail = true;
    }
    if (folderList.length > 0) {
      folder = folder !== "" ? folder : await chooseOption("Select folder to add note in:", folderList.map((folder => ({
        label: folder,
        value: folder
      }))), "/");
    }
    if (folderFail) {
      await showMessage('That folder is: "'.concat(folder, '"'));
      await openConfigFileInEditor();
      return;
    }
    if (!title) {
      console.log("newNoteWithTemplate: Error: undefined or empty title");
      await showMessage("Cannot create a note with an empty title");
      return;
    }
    const templateFolder = await getOrMakeTemplateFolder();
    let shouldApplyTemplate = false;
    if (templateFolder != null || templateFolder !== "") {
      shouldApplyTemplate = template !== "" ? template : await chooseOption("Do you want to get started with a template?", [ {
        label: "Yes",
        value: true
      }, {
        label: "No",
        value: false
      } ], false);
    }
    if (shouldApplyTemplate) {
      await applyTemplate([ title, folder, template ]);
      return;
    }
    const filename = DataStore.newNote(title, folder);
    if (!filename) {
      console.log("applyTemplate: There was an error creating new note '".concat(title, "' in '").concat(folder, "'"));
      await showMessage("There was an error creating your note :(");
      return;
    }
    await Editor.openNoteByFilename(filename);
    console.log("newNoteWithTemplate: new note created: ".concat(String(filename)));
    Editor.content = "# ".concat(title, "\n");
    return;
  }
  async function quickTemplateNote() {
    let noteName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    const quickNotesArray = await getOrMakeConfigurationSection("quickNotes", '  quickNotes: [\n          { \n            template: "Title of an existing template here", \n            label: "Short descriptive name for this quickNote combination", \n            title: "Title for the created note, can include template tags to be dynamic, e.g. Meeting with {{askForName}} on {{date8601()}}", \n            folder: "MyRootFolder/MySubFolder",    \n            editThis: true  /* delete this comment and the editThis after you have edited this */   \n          },\n        ],\n    ');
    let chosenItem;
    if (quickNotesArray && quickNotesArray.length) {
      if (quickNotesArray.length === 1 && quickNotesArray[0].editThis) {
        console.log("quickTemplateNote: editThis=true, so user should edit config");
        await showMessage("Please edit the configuration file to add your quick notes.");
        await openConfigFileInEditor();
        return false;
      }
      const options = quickNotesArray.map((q => ({
        label: q.label,
        value: q
      })));
      chosenItem = await chooseOption("Select a Quick Template:", options, quickNotesArray[0]);
    } else {
      console.log("quickTemplateNote did not work. quickNotesArray=".concat(JSON.stringify(quickNotesArray)));
      await showMessage("Requires Configuration. Read Templates Plugin Instructions");
      await openConfigFileInEditor();
      return false;
    }
    if (chosenItem) {
      const {template: template, title: title, folder: folder} = chosenItem;
      if (template !== "" && folder !== "") {
        const fullName = noteName ? "".concat(noteName ? "".concat(noteName, " ") : "").concat(title) : title;
        await newNoteWithTemplate(template, fullName, folder);
      } else {
        console.log("Chosen template data invalid. chosenItem=".concat(String(JSON.stringify(chosenItem))));
        await showMessage("Template name was invalid. Check settings.");
      }
    }
    return true;
  }
  exports.applyNamedTemplate = applyNamedTemplate;
  exports.applyTemplate = applyTemplate;
  exports.insertNamedTemplate = insertNamedTemplate;
  exports.insertTemplate = insertTemplate;
  exports.newNoteWithTemplate = newNoteWithTemplate;
  exports.quickTemplateNote = quickTemplateNote;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  return exports;
}({});

Object.assign(typeof globalThis == "undefined" ? this : globalThis, exports);
