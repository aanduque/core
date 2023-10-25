var exports = function(exports) {
  "use strict";
  function getFolderFromFilename(fullFilename) {
    const filename = fullFilename.startsWith("/") ? fullFilename.substr(1) : fullFilename;
    const filenameParts = filename.split("/");
    return filenameParts.slice(0, filenameParts.length - 1).join("/");
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
  (new Date).toISOString().slice(0, 10);
  (new Date).toISOString().slice(0, 16);
  const nowLocaleDateTime = (new Date).toLocaleString();
  function daysBetween(d1, d2) {
    return Math.round((d2 - d1) / 1e3 / 60 / 60 / 24);
  }
  function relativeDateFromNumber(diffIn) {
    let output = "";
    let diff = diffIn;
    let isPast = false;
    if (diff < 0) {
      diff = Math.abs(diff);
      isPast = true;
    }
    if (diff === 1) {
      output = "".concat(diff, " day");
    } else if (diff < 9) {
      output = "".concat(diff, " days");
    } else if (diff < 12) {
      output = "".concat(Math.round(diff / 7), " wk");
    } else if (diff < 29) {
      output = "".concat(Math.round(diff / 7), " wks");
    } else if (diff < 550) {
      output = "".concat(Math.round(diff / 30.4), " mon");
    } else {
      output = "".concat(Math.round(diff / 365), " yrs");
    }
    if (diff === 0) {
      output = "today";
    } else if (isPast) {
      output += " ago";
    } else {
      output = "in ".concat(output);
    }
    return output;
  }
  async function chooseOption(message, options, defaultValue) {
    var _options$index$value, _options$index;
    const {index: index} = await CommandBar.showOptions(options.map((option => option.label)), message);
    return (_options$index$value = (_options$index = options[index]) === null || _options$index === void 0 ? void 0 : _options$index.value) !== null && _options$index$value !== void 0 ? _options$index$value : defaultValue;
  }
  async function chooseFolder(msg) {
    let includeArchive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let folder;
    const folders = DataStore.folders.slice();
    if (includeArchive) {
      folders.push("@Archive");
    }
    if (folders.length > 0) {
      const folderOptionList = [];
      for (const f of folders) {
        if (f !== "/") {
          const folderParts = f.split("/");
          for (let i = 0; i < folderParts.length - 1; i++) {
            folderParts[i] = "     ";
          }
          folderParts[folderParts.length - 1] = "📁 ".concat(folderParts[folderParts.length - 1]);
          const folderLabel = folderParts.join("");
          folderOptionList.push({
            label: folderLabel,
            value: f
          });
        } else {
          folderOptionList.push({
            label: "📁 /",
            value: "/"
          });
        }
      }
      folder = await chooseOption(msg, folderOptionList, "/");
    } else {
      folder = "/";
    }
    return folder;
  }
  function printNote(note) {
    if (note == null) {
      console.log("Note not found!");
      return;
    }
    if (note.type === "Notes") {
      var _note$title, _note$filename, _String, _String2, _note$hashtags$join, _note$hashtags, _note$mentions$join, _note$mentions;
      console.log("title: ".concat((_note$title = note.title) !== null && _note$title !== void 0 ? _note$title : "", "\n\tfilename: ").concat((_note$filename = note.filename) !== null && _note$filename !== void 0 ? _note$filename : "", "\n\tcreated: ").concat((_String = String(note.createdDate)) !== null && _String !== void 0 ? _String : "", "\n\tchanged: ").concat((_String2 = String(note.changedDate)) !== null && _String2 !== void 0 ? _String2 : "", "\n\thashtags: ").concat((_note$hashtags$join = (_note$hashtags = note.hashtags) === null || _note$hashtags === void 0 ? void 0 : _note$hashtags.join(",")) !== null && _note$hashtags$join !== void 0 ? _note$hashtags$join : "", "\n\tmentions: ").concat((_note$mentions$join = (_note$mentions = note.mentions) === null || _note$mentions === void 0 ? void 0 : _note$mentions.join(",")) !== null && _note$mentions$join !== void 0 ? _note$mentions$join : ""));
    } else {
      var _note$filename2, _String3, _String4, _note$hashtags$join2, _note$hashtags2, _note$mentions$join2, _note$mentions2;
      console.log("filename: ".concat((_note$filename2 = note.filename) !== null && _note$filename2 !== void 0 ? _note$filename2 : "", "\n\tcreated: ").concat((_String3 = String(note.createdDate)) !== null && _String3 !== void 0 ? _String3 : "", "\n\tchanged: ").concat((_String4 = String(note.changedDate)) !== null && _String4 !== void 0 ? _String4 : "", "\n\thashtags: ").concat((_note$hashtags$join2 = (_note$hashtags2 = note.hashtags) === null || _note$hashtags2 === void 0 ? void 0 : _note$hashtags2.join(",")) !== null && _note$hashtags$join2 !== void 0 ? _note$hashtags$join2 : "", "\n\tmentions: ").concat((_note$mentions$join2 = (_note$mentions2 = note.mentions) === null || _note$mentions2 === void 0 ? void 0 : _note$mentions2.join(",")) !== null && _note$mentions$join2 !== void 0 ? _note$mentions$join2 : ""));
    }
  }
  function notesInFolderSortedByTitle(folder) {
    let notesInFolder;
    if (folder !== "") {
      notesInFolder = DataStore.projectNotes.slice().filter((n => getFolderFromFilename(n.filename) === folder));
    } else {
      notesInFolder = DataStore.projectNotes.slice();
    }
    const notesSortedByTitle = notesInFolder.sort(((first, second) => {
      var _first$title, _second$title;
      return ((_first$title = first.title) !== null && _first$title !== void 0 ? _first$title : "").localeCompare((_second$title = second.title) !== null && _second$title !== void 0 ? _second$title : "");
    }));
    return notesSortedByTitle;
  }
  function allNotesSortedByChanged() {
    const projectNotes = DataStore.projectNotes.slice();
    const calendarNotes = DataStore.calendarNotes.slice();
    const allNotes = projectNotes.concat(calendarNotes);
    const allNotesSorted = allNotes.sort(((first, second) => second.changedDate - first.changedDate));
    return allNotesSorted;
  }
  async function moveNote() {
    const {title: title, filename: filename} = Editor;
    if (title == null || filename == null) {
      console.log("moveNote: warning: No note open.");
      return;
    }
    const selectedFolder = await chooseFolder("Select a folder for '".concat(title, "'"), true);
    console.log("move ".concat(title, " (filename = ").concat(filename, ") to ").concat(selectedFolder));
    const newFilename = DataStore.moveNote(filename, selectedFolder);
    if (newFilename != null) {
      console.log("\tmoving note was successful");
      await Editor.openNoteByFilename(newFilename);
    } else {
      console.log("\tmoving note was NOT successful");
    }
  }
  async function openNoteNewWindow() {
    const notes = allNotesSortedByChanged();
    const re = await CommandBar.showOptions(notes.map((n => n.title)).filter(Boolean), "Select note to open in new window");
    const note = notes[re.index];
    const filename = note.filename;
    await Editor.openNoteByFilename(filename, true);
  }
  async function jumpToHeading() {
    var _Editor;
    const paras = (_Editor = Editor) === null || _Editor === void 0 ? void 0 : _Editor.paragraphs;
    if (paras == null) {
      return;
    }
    const headingParas = paras.filter((p => p.type === "title"));
    const headingValues = headingParas.map((p => {
      let prefix = "";
      for (let i = 1; i < p.headingLevel; i++) {
        prefix += "    ";
      }
      return "".concat(prefix).concat(p.content);
    }));
    if (headingValues.length > 0) {
      var _headingParas$re$inde, _headingParas$re$inde2;
      const re = await CommandBar.showOptions(headingValues, "Select heading to jump to:");
      const startPos = (_headingParas$re$inde = (_headingParas$re$inde2 = headingParas[re.index].contentRange) === null || _headingParas$re$inde2 === void 0 ? void 0 : _headingParas$re$inde2.start) !== null && _headingParas$re$inde !== void 0 ? _headingParas$re$inde : 0;
      Editor.select(startPos, 0);
    } else {
      console.log("Warning: No headings found in this note");
    }
  }
  async function jumpToNoteHeading() {
    const notesList = allNotesSortedByChanged();
    const re = await CommandBar.showOptions(notesList.map((n => {
      var _n$title;
      return (_n$title = n.title) !== null && _n$title !== void 0 ? _n$title : "untitled";
    })), "Select note to jump to");
    const note = notesList[re.index];
    if (note != null && note.title != null) {
      await Editor.openNoteByTitle(note.title);
    } else {
      console.log("\terror: couldn't open selected note");
      return;
    }
    await jumpToHeading();
  }
  function jumpToDone() {
    var _Editor2;
    const paras = (_Editor2 = Editor) === null || _Editor2 === void 0 ? void 0 : _Editor2.paragraphs;
    if (paras == null) {
      return;
    }
    const matches = paras.filter((p => p.headingLevel === 2)).filter((q => q.content.startsWith("Done")));
    if (matches != null) {
      var _matches$0$contentRan, _matches$0$contentRan2;
      const startPos = (_matches$0$contentRan = (_matches$0$contentRan2 = matches[0].contentRange) === null || _matches$0$contentRan2 === void 0 ? void 0 : _matches$0$contentRan2.start) !== null && _matches$0$contentRan !== void 0 ? _matches$0$contentRan : 0;
      console.log("  Found ## Done at position ".concat(startPos));
      Editor.select(startPos, 0);
    } else {
      console.log("Warning: Couldn't find a '## Done' section");
    }
  }
  function setTitleFromYAML() {
    var _note$title;
    const {note: note, content: content} = Editor;
    if (note == null || content == null) {
      return;
    }
    console.log("setTitleFromYAML:\n\told title = ".concat((_note$title = note.title) !== null && _note$title !== void 0 ? _note$title : ""));
    const lines = content.split("\n");
    let n = 0;
    let newTitle = "";
    while (n < lines.length) {
      if (lines[n].match(/^[Tt]itle:\s*.*/)) {
        var _rer$;
        const rer = lines[n].match(/^[Tt]itle:\s*(.*)/);
        newTitle = (_rer$ = rer === null || rer === void 0 ? void 0 : rer[1]) !== null && _rer$ !== void 0 ? _rer$ : "";
      }
      if (lines[n] === "" || lines[n] === "...") {
        break;
      }
      n += 1;
    }
    console.log("\tnew title = ".concat(newTitle));
    if (newTitle !== "") {
      note.title = newTitle;
    }
    printNote(note);
  }
  const defaultFileExt = DataStore.defaultFileExtension != null ? DataStore.defaultFileExtension : "md";
  DataStore.preference("defaultTodoCharacter") != null ? DataStore.preference("defaultTodoCharacter") : "*";
  function titleAsLink(note) {
    var _note$title;
    return note.title !== undefined ? "[[".concat((_note$title = note.title) !== null && _note$title !== void 0 ? _note$title : "", "]]") : "(error)";
  }
  function makeFolderIndex(folder, includeSubfolders) {
    console.log("\nmakeFolderIndex for '".concat(folder, "' (").concat(includeSubfolders ? "with" : "without", " subfolders)"));
    const outputArray = [];
    let folderList = [];
    if (includeSubfolders) {
      folderList = DataStore.folders.filter((f => f.startsWith(folder)));
    } else {
      folderList = [ folder ];
    }
    console.log("\tFound ".concat(folderList.length, " matching folder(s)"));
    let subFolder = false;
    for (const f of folderList) {
      const notes = notesInFolderSortedByTitle(f).filter((n => {
        var _n$title;
        return !((_n$title = n.title) !== null && _n$title !== void 0 && _n$title.startsWith("_index"));
      }));
      outputArray.push(subFolder ? "### ".concat(f) : "_index: ".concat(f, "\n_Index generated ").concat(nowLocaleDateTime, ". Times are since note was last updated._"));
      if (notes.length > 0) {
        outputArray.push("".concat(notes.length, " notes"));
        for (const note of notes) {
          const relativeTimeSinceUpdate = relativeDateFromNumber(daysBetween(new Date, note.changedDate));
          outputArray.push("".concat(titleAsLink(note), " ").concat(relativeTimeSinceUpdate));
        }
        outputArray.push("");
      } else {
        outputArray.push("(No notes found)");
      }
      subFolder = true;
    }
    return outputArray;
  }
  async function indexFolders() {
    var _Editor$filename;
    const fullFilename = (_Editor$filename = Editor.filename) !== null && _Editor$filename !== void 0 ? _Editor$filename : undefined;
    let thisFolder;
    let outputArray = [];
    if (fullFilename === undefined) {
      console.log("  Info: No current filename (and therefore folder) found, so will ask instead.");
      thisFolder = await chooseFolder("Please pick folder to index");
    } else {
      thisFolder = getFolderFromFilename(fullFilename);
    }
    console.log("\nindexFolders from folder ".concat(thisFolder));
    const option = await chooseOption("Create index for which folder(s)?", [ {
      label: "This folder only (insert into current note)",
      value: "one-to-current"
    }, {
      label: "This folder only (add/update to _index note)",
      value: "one-to-index"
    }, {
      label: "This folder and sub-folders (add/update to single _index note)",
      value: "all-to-one-index"
    }, {
      label: "(NOT YET WORKING) This folder and sub-folders (add/update to _index notes)",
      value: "all-to-many-index"
    }, {
      label: "❌ Cancel",
      value: false
    } ], false);
    if (!option) {
      return;
    }
    console.log("  option: ".concat(option));
    if (option.startsWith("one")) {
      outputArray = makeFolderIndex(thisFolder, false);
    } else if (option.startsWith("all")) {
      outputArray = makeFolderIndex(thisFolder, true);
    }
    const outString = outputArray.join("\n");
    if (option.endsWith("index")) {
      let outputFilename = "".concat(thisFolder, "/_index.").concat(defaultFileExt);
      let outputNote = DataStore.projectNoteByFilename(outputFilename);
      if (outputNote == null) {
        outputFilename = await DataStore.newNote("_index", thisFolder);
        console.log("\tnewNote filename: ".concat(String(outputFilename)));
        if (outputFilename == null) {
          return;
        }
        outputNote = await DataStore.projectNoteByFilename(outputFilename);
        console.log("\twriting results to the new note '".concat(outputFilename, "'"));
      }
      if (outputNote != null) {
        outputNote.content = "# ".concat(outString);
      } else {
        console.log("error after newNote(): no valid note to write to");
        return;
      }
    } else if (option.endsWith("current")) {
      Editor.insertTextAtCursor("".concat(outString));
    }
    console.log("Finished indexFolders.");
  }
  exports.indexFolders = indexFolders;
  exports.jumpToDone = jumpToDone;
  exports.jumpToHeading = jumpToHeading;
  exports.jumpToNoteHeading = jumpToNoteHeading;
  exports.moveNote = moveNote;
  exports.openNoteNewWindow = openNoteNewWindow;
  exports.setTitleFromYAML = setTitleFromYAML;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  return exports;
}({});

Object.assign(typeof globalThis == "undefined" ? this : globalThis, exports);
