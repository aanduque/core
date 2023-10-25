var exports = function(exports) {
  "use strict";
  var pluginJson = {
    "noteplan.minAppVersion": "3.3.2",
    "plugin.id": "dwertheimer.DateAutomations",
    "plugin.name": "📅 Date Automations",
    "plugin.description": "Helping you move faster with dates and times",
    "plugin.author": "David Wertheimer",
    "plugin.url": "https://github.com/NotePlan/plugins/blob/main/dwertheimer.DateAutomations/README.md",
    "plugin.version": "1.3.2",
    "plugin.dependencies": [],
    "plugin.script": "script.js",
    "plugin.commands": [ {
      name: "ldn",
      description: "Create link to today's Calendar Note at cursor (e.g. [[2022-04-16]])",
      jsFunction: "insertCalendarNoteLink"
    }, {
      name: "date",
      description: "Insert date (without time) at cursor (uses your locale setting), e.g. Saturday, April 16, 2022 (or shorter)",
      jsFunction: "insertDate"
    }, {
      name: "iso",
      description: "Insert date+time (in ISO format, GMT) at cursor, e.g. 2022-04-16T17:28:14.662Z",
      jsFunction: "insertISODate"
    }, {
      name: "now",
      description: "Insert (human readable) date+time at cursor, e.g. Saturday, April 16, 2022, 13:29",
      jsFunction: "insertDateTime"
    }, {
      name: "now - ISO-8601 standard",
      description: "Insert ISO-8601 date+time at cursor, e.g. 2021-08-06 17:20",
      jsFunction: "insertDateTime8601",
      alias: [ "date", "8601", "t" ]
    }, {
      name: "time",
      description: "Insert (human readable) time at cursor, e.g. 06:55:22",
      jsFunction: "insertTime"
    }, {
      name: "dp",
      description: "(Date Picker) Choose format and insert date/time time at cursor",
      jsFunction: "dateFormatPicker",
      alias: [ "locale" ]
    }, {
      name: "formatted",
      description: "Insert custom formatted (format) date/time per your settings",
      jsFunction: "insertStrftime",
      alias: [ "strftime" ]
    }, {
      name: "wd",
      description: "Insert dates of current week, e.g. Mon 2022-04-11 - Sun 2022-04-17",
      jsFunction: "insertWeekDates",
      alias: [ "weekDates", "week" ]
    }, {
      name: "date8601",
      description: "Inserts current date in 8601 format",
      jsFunction: "get8601String",
      hidden: true
    }, {
      name: "getWeekDates",
      description: "Inserts week dates using supplied format",
      jsFunction: "getWeekDates",
      hidden: true
    } ],
    "plugin.settings": [ {
      type: "string",
      key: "format",
      title: "Custom Time String Format",
      description: "Used in /formatted command. See https://www.strfti.me/ for details on the formatting codes",
      default: "%Y-%m-%d %H:%M",
      required: true
    }, {
      type: "string",
      key: "locale",
      title: "Time/Date Locale Setting",
      description: "Geographic locale for date/time formatting. e.g. en-US, en-GB, etc. e.g. en-US will result in mm/dd/yyyy, while en-GB will be dd/mm/yyyy. See https://www.ibm.com/docs/en/datacap/9.1.8?topic=support-supported-language-codes for a list of available locales.",
      default: "en-US",
      required: true
    }, {
      type: "string",
      key: "dateStyle",
      title: "Date Style (in your locale)",
      description: "Used in commands like /now, /time, etc. Can be 'short', 'medium', 'long' or 'full'. Run the /dp command for help choosing the setting you want.",
      default: "full",
      required: true
    }, {
      type: "string",
      key: "timeStyle",
      title: "Time Style (in your locale)",
      description: "Used in commands like /now, /time, etc. Can be 'short', 'medium', 'long' or 'full'. Run the /dp command for help choosing the setting you want.",
      default: "short",
      required: true
    }, {
      type: "bool",
      key: "hour12",
      title: "Use 12 hour format (with AM/PM)",
      description: "You can force 24 hour time format on/off, even in America!",
      default: false,
      required: true
    }, {
      type: "string",
      key: "timezone",
      title: "Timezone Override",
      description: "Usually 'automatic' is fine (will get timezone from your system).",
      default: "automatic",
      required: true
    } ]
  };
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
  function _objectWithoutPropertiesLoose$1(source, excluded) {
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
    var target = _objectWithoutPropertiesLoose$1(source, excluded);
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
  var dist$1 = {
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
  })(dist$1);
  var json5 = dist$1.exports;
  const dt$1 = () => {
    const d = new Date;
    const pad = value => value < 10 ? "0" + value : value.toString();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + " " + d.toLocaleTimeString("en-GB");
  };
  const _message = message => {
    let logMessage = "";
    switch (typeof message) {
     case "string":
      logMessage = message;
      break;

     case "object":
      if (Array.isArray(message)) {
        logMessage = message.toString();
      } else {
        logMessage = message instanceof Date ? message.toString() : JSON.stringify(message);
      }
      break;

     default:
      logMessage = message.toString();
      break;
    }
    return logMessage;
  };
  function log$1(pluginInfo) {
    let message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "LOG";
    let msg = "";
    let pluginId = "";
    let pluginVersion = "";
    let isPluginJson = typeof pluginInfo === "object" && pluginInfo.hasOwnProperty("plugin.id");
    if (isPluginJson) {
      pluginId = pluginInfo.hasOwnProperty("plugin.id") ? pluginInfo["plugin.id"] : "INVALID_PLUGIN_ID";
      pluginVersion = pluginInfo.hasOwnProperty("plugin.version") ? pluginInfo["plugin.version"] : "INVALID_PLUGIN_VERSION";
      msg = "".concat(dt$1().padEnd(19), " | ").concat(type.padEnd(5), " | ").concat(pluginId, " v").concat(pluginVersion, " :: ").concat(_message(message));
    } else {
      if (message.length > 0) {
        msg = "".concat(dt$1().padEnd(19), " | ").concat(type.padEnd(5), " | ").concat(pluginInfo, " :: ").concat(_message(message));
      } else {
        msg = "".concat(dt$1().padEnd(19), " | ").concat(type.padEnd(5), " | ").concat(_message(pluginInfo));
      }
    }
    console.log(msg);
    return msg;
  }
  function logError(pluginInfo, error) {
    if (typeof error === "object" && error != null) {
      var _error$filename, _error$lineNumber;
      let msg = "".concat((_error$filename = error.filename) !== null && _error$filename !== void 0 ? _error$filename : "<unknown file>", " ").concat((_error$lineNumber = error.lineNumber) !== null && _error$lineNumber !== void 0 ? _error$lineNumber : "<unkonwn line>", ": ").concat(error.message);
      return log$1(pluginInfo, msg, "ERROR");
    }
    return log$1(pluginInfo, error, "ERROR");
  }
  const STATIC_TEMPLATE_FOLDER = "📋 Templates";
  const dt = () => {
    const d = new Date;
    const pad = value => value < 10 ? "0" + value : value.toString();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + " " + d.toLocaleTimeString();
  };
  const log = function() {
    let msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    console.log("".concat(dt(), " : configuration :: ").concat(msg));
  };
  async function getConfiguration() {
    let configSection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    const configFile = DataStore.projectNotes.filter((n => {
      var _n$filename;
      return (_n$filename = n.filename) === null || _n$filename === void 0 ? void 0 : _n$filename.startsWith(STATIC_TEMPLATE_FOLDER);
    })).find((n => {
      var _n$title;
      return !!((_n$title = n.title) !== null && _n$title !== void 0 && _n$title.startsWith("_configuration"));
    }));
    const content = configFile === null || configFile === void 0 ? void 0 : configFile.content;
    if (content == null) {
      log("getConfiguration - Unable to find _configuration note");
      return {};
    }
    const configData = content.split("\n```")[1];
    const config = await parseConfiguration(configData);
    if (!config.hasOwnProperty(configSection)) {
      log("getConfiguration - Unable to locate ".concat(configSection, " in _configuration"));
      return {};
    }
    return config[configSection];
  }
  async function migrateConfiguration(configSection, pluginJsonData) {
    let silentMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    let migrationResult = 0;
    const canEditSettings = NotePlan.environment.platform === "macOS";
    const pluginSettingsData = await DataStore.loadJSON("../".concat(pluginJsonData["plugin.id"], "/settings.json"));
    if (!pluginSettingsData) {
      const migrateData = {};
      const configData = await getConfiguration(configSection);
      migrationResult = Object.keys(configData).length > 0 ? 1 : -1;
      const pluginSettings = pluginJsonData.hasOwnProperty("plugin.settings") ? pluginJsonData["plugin.settings"] : [];
      pluginSettings.forEach((setting => {
        const key = (setting === null || setting === void 0 ? void 0 : setting.key) || null;
        const type = (setting === null || setting === void 0 ? void 0 : setting.type) || null;
        if (key) {
          log("migrateConfiguration checking: ".concat(key, ", type: ").concat(type));
          migrateData[key] = (setting === null || setting === void 0 ? void 0 : setting.default) || "";
          if (!configData.hasOwnProperty(key)) {
            log("migrateConfiguration adding key: ".concat(key));
            configData[key] = setting.default;
            if (setting.type == "json" && setting.default !== "undefined") {
              configData[key] = JSON.parse(setting.default);
            }
          }
          if (key && configData[key] !== "undefined") {
            migrateData[key] = configData[key];
          }
        }
      }));
      migrateData.version = pluginJsonData["plugin.version"];
      DataStore.settings = _objectSpread2({}, migrateData);
      log("==> ".concat(pluginJsonData["plugin.id"], " _configuration.").concat(configSection, " migration (migration complete)"));
    }
    if (migrationResult == 1 && !silentMode) {
      const reviewMessage = canEditSettings ? "\n\nWould you like to review the plugin settings now?" : "";
      const answer = await CommandBar.prompt("Configuration Migration Complete", 'Your personal settings for plugin: "'.concat(configSection, '" have been migrated from the _configuration note to the new NotePlan Plugin Settings.\n\nTo change your plugin settings in the future (on the Mac), please open the NotePlan preferences, navigate to "Plugins" and click on the gear icon on the right of the plugin name. ').concat(reviewMessage), canEditSettings ? [ "Yes", "No" ] : [ "OK" ]);
      if (canEditSettings && answer === 0) {
        await NotePlan.showConfigurationView();
      }
    }
    return migrationResult;
  }
  function updateSettingData(pluginJsonData) {
    let updateResult = 0;
    const newSettings = {};
    const currentSettingData = DataStore.settings;
    const pluginSettings = pluginJsonData.hasOwnProperty("plugin.settings") ? pluginJsonData["plugin.settings"] : [];
    pluginSettings.forEach((setting => {
      const key = (setting === null || setting === void 0 ? void 0 : setting.key) || null;
      if (key) {
        if (!currentSettingData.hasOwnProperty(key)) {
          newSettings[key] = (setting === null || setting === void 0 ? void 0 : setting.default) || "";
          updateResult = 1;
        } else {
          newSettings[key] = currentSettingData[key];
        }
      }
    }));
    DataStore.settings = _objectSpread2({}, newSettings);
    return updateResult;
  }
  async function parseConfiguration(block) {
    try {
      if (block == null) {
        await CommandBar.prompt("NotePlan Error", "No configuration block found in configuration file.");
        return {};
      }
      let [format, ...contents] = block.split("\n");
      contents = contents.join("\n");
      format = format.trim();
      const value = json5.parse(contents);
      return value;
    } catch (error) {
      await CommandBar.prompt("NotePlan Error", "Failed to parse your _configuration note, it seems to be malformed (e.g. a missing comma).\n\nPlease correct it, delete the plugin (click on the plugin name in the preferences to see the 'delete' button), and redownload it.\n\nError: " + error);
    }
  }
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
  function isValid(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    return !isNaN(date);
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
  function formatDistance(token, count, options) {
    options = options || {};
    var result;
    if (typeof formatDistanceLocale[token] === "string") {
      result = formatDistanceLocale[token];
    } else if (count === 1) {
      result = formatDistanceLocale[token].one;
    } else {
      result = formatDistanceLocale[token].other.replace("{{count}}", count);
    }
    if (options.addSuffix) {
      if (options.comparison > 0) {
        return "in " + result;
      } else {
        return result + " ago";
      }
    }
    return result;
  }
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
  function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  }
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
  function ordinalNumber(dirtyNumber, _dirtyOptions) {
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
  }
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
        return Number(quarter) - 1;
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
  var match$1 = {
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
  var match$2 = match$1;
  var locale = {
    code: "en-US",
    formatDistance: formatDistance,
    formatLong: formatLong$1,
    formatRelative: formatRelative,
    localize: localize$1,
    match: match$2,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
  var defaultLocale$1 = locale;
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
    var date = toDate(dirtyDate, dirtyOptions);
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
  function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? "-" : "+";
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) {
      return sign + String(hours);
    }
    var delimiter = dirtyDelimiter || "";
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
    var matchResult = pattern.match(/(P+)(p+)?/);
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
    var locale = options.locale || defaultLocale$1;
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
  var dist = {
    exports: {}
  };
  var luxon$1 = {};
  Object.defineProperty(luxon$1, "__esModule", {
    value: true
  });
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [ null ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor;
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
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
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function() {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var LuxonError = function(_Error) {
    _inheritsLoose(LuxonError, _Error);
    function LuxonError() {
      return _Error.apply(this, arguments) || this;
    }
    return LuxonError;
  }(_wrapNativeSuper(Error));
  var InvalidDateTimeError = function(_LuxonError) {
    _inheritsLoose(InvalidDateTimeError, _LuxonError);
    function InvalidDateTimeError(reason) {
      return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
    }
    return InvalidDateTimeError;
  }(LuxonError);
  var InvalidIntervalError = function(_LuxonError2) {
    _inheritsLoose(InvalidIntervalError, _LuxonError2);
    function InvalidIntervalError(reason) {
      return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
    }
    return InvalidIntervalError;
  }(LuxonError);
  var InvalidDurationError = function(_LuxonError3) {
    _inheritsLoose(InvalidDurationError, _LuxonError3);
    function InvalidDurationError(reason) {
      return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
    }
    return InvalidDurationError;
  }(LuxonError);
  var ConflictingSpecificationError = function(_LuxonError4) {
    _inheritsLoose(ConflictingSpecificationError, _LuxonError4);
    function ConflictingSpecificationError() {
      return _LuxonError4.apply(this, arguments) || this;
    }
    return ConflictingSpecificationError;
  }(LuxonError);
  var InvalidUnitError = function(_LuxonError5) {
    _inheritsLoose(InvalidUnitError, _LuxonError5);
    function InvalidUnitError(unit) {
      return _LuxonError5.call(this, "Invalid unit " + unit) || this;
    }
    return InvalidUnitError;
  }(LuxonError);
  var InvalidArgumentError = function(_LuxonError6) {
    _inheritsLoose(InvalidArgumentError, _LuxonError6);
    function InvalidArgumentError() {
      return _LuxonError6.apply(this, arguments) || this;
    }
    return InvalidArgumentError;
  }(LuxonError);
  var ZoneIsAbstractError = function(_LuxonError7) {
    _inheritsLoose(ZoneIsAbstractError, _LuxonError7);
    function ZoneIsAbstractError() {
      return _LuxonError7.call(this, "Zone is an abstract class") || this;
    }
    return ZoneIsAbstractError;
  }(LuxonError);
  var n = "numeric", s = "short", l = "long";
  var DATE_SHORT = {
    year: n,
    month: n,
    day: n
  };
  var DATE_MED = {
    year: n,
    month: s,
    day: n
  };
  var DATE_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s
  };
  var DATE_FULL = {
    year: n,
    month: l,
    day: n
  };
  var DATE_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l
  };
  var TIME_SIMPLE = {
    hour: n,
    minute: n
  };
  var TIME_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n
  };
  var TIME_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
  };
  var TIME_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
  };
  var TIME_24_SIMPLE = {
    hour: n,
    minute: n,
    hourCycle: "h23"
  };
  var TIME_24_WITH_SECONDS = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23"
  };
  var TIME_24_WITH_SHORT_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: s
  };
  var TIME_24_WITH_LONG_OFFSET = {
    hour: n,
    minute: n,
    second: n,
    hourCycle: "h23",
    timeZoneName: l
  };
  var DATETIME_SHORT = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n
  };
  var DATETIME_SHORT_WITH_SECONDS = {
    year: n,
    month: n,
    day: n,
    hour: n,
    minute: n,
    second: n
  };
  var DATETIME_MED = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n
  };
  var DATETIME_MED_WITH_SECONDS = {
    year: n,
    month: s,
    day: n,
    hour: n,
    minute: n,
    second: n
  };
  var DATETIME_MED_WITH_WEEKDAY = {
    year: n,
    month: s,
    day: n,
    weekday: s,
    hour: n,
    minute: n
  };
  var DATETIME_FULL = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    timeZoneName: s
  };
  var DATETIME_FULL_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: s
  };
  var DATETIME_HUGE = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    timeZoneName: l
  };
  var DATETIME_HUGE_WITH_SECONDS = {
    year: n,
    month: l,
    day: n,
    weekday: l,
    hour: n,
    minute: n,
    second: n,
    timeZoneName: l
  };
  function isUndefined(o) {
    return typeof o === "undefined";
  }
  function isNumber(o) {
    return typeof o === "number";
  }
  function isInteger(o) {
    return typeof o === "number" && o % 1 === 0;
  }
  function isString(o) {
    return typeof o === "string";
  }
  function isDate(o) {
    return Object.prototype.toString.call(o) === "[object Date]";
  }
  function hasRelative() {
    try {
      return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
    } catch (e) {
      return false;
    }
  }
  function maybeArray(thing) {
    return Array.isArray(thing) ? thing : [ thing ];
  }
  function bestBy(arr, by, compare) {
    if (arr.length === 0) {
      return undefined;
    }
    return arr.reduce((function(best, next) {
      var pair = [ by(next), next ];
      if (!best) {
        return pair;
      } else if (compare(best[0], pair[0]) === best[0]) {
        return best;
      } else {
        return pair;
      }
    }), null)[1];
  }
  function pick(obj, keys) {
    return keys.reduce((function(a, k) {
      a[k] = obj[k];
      return a;
    }), {});
  }
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  function integerBetween(thing, bottom, top) {
    return isInteger(thing) && thing >= bottom && thing <= top;
  }
  function floorMod(x, n) {
    return x - n * Math.floor(x / n);
  }
  function padStart(input, n) {
    if (n === void 0) {
      n = 2;
    }
    var isNeg = input < 0;
    var padded;
    if (isNeg) {
      padded = "-" + ("" + -input).padStart(n, "0");
    } else {
      padded = ("" + input).padStart(n, "0");
    }
    return padded;
  }
  function parseInteger(string) {
    if (isUndefined(string) || string === null || string === "") {
      return undefined;
    } else {
      return parseInt(string, 10);
    }
  }
  function parseFloating(string) {
    if (isUndefined(string) || string === null || string === "") {
      return undefined;
    } else {
      return parseFloat(string);
    }
  }
  function parseMillis(fraction) {
    if (isUndefined(fraction) || fraction === null || fraction === "") {
      return undefined;
    } else {
      var f = parseFloat("0." + fraction) * 1e3;
      return Math.floor(f);
    }
  }
  function roundTo(number, digits, towardZero) {
    if (towardZero === void 0) {
      towardZero = false;
    }
    var factor = Math.pow(10, digits), rounder = towardZero ? Math.trunc : Math.round;
    return rounder(number * factor) / factor;
  }
  function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  function daysInMonth(year, month) {
    var modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
    if (modMonth === 2) {
      return isLeapYear(modYear) ? 29 : 28;
    } else {
      return [ 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][modMonth - 1];
    }
  }
  function objToLocalTS(obj) {
    var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
    if (obj.year < 100 && obj.year >= 0) {
      d = new Date(d);
      d.setUTCFullYear(d.getUTCFullYear() - 1900);
    }
    return +d;
  }
  function weeksInWeekYear(weekYear) {
    var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
    return p1 === 4 || p2 === 3 ? 53 : 52;
  }
  function untruncateYear(year) {
    if (year > 99) {
      return year;
    } else return year > 60 ? 1900 + year : 2e3 + year;
  }
  function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
    if (timeZone === void 0) {
      timeZone = null;
    }
    var date = new Date(ts), intlOpts = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    };
    if (timeZone) {
      intlOpts.timeZone = timeZone;
    }
    var modified = _extends({
      timeZoneName: offsetFormat
    }, intlOpts);
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((function(m) {
      return m.type.toLowerCase() === "timezonename";
    }));
    return parsed ? parsed.value : null;
  }
  function signedOffset(offHourStr, offMinuteStr) {
    var offHour = parseInt(offHourStr, 10);
    if (Number.isNaN(offHour)) {
      offHour = 0;
    }
    var offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
    return offHour * 60 + offMinSigned;
  }
  function asNumber(value) {
    var numericValue = Number(value);
    if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue)) throw new InvalidArgumentError("Invalid unit value " + value);
    return numericValue;
  }
  function normalizeObject(obj, normalizer) {
    var normalized = {};
    for (var u in obj) {
      if (hasOwnProperty(obj, u)) {
        var v = obj[u];
        if (v === undefined || v === null) continue;
        normalized[normalizer(u)] = asNumber(v);
      }
    }
    return normalized;
  }
  function formatOffset(offset, format) {
    var hours = Math.trunc(Math.abs(offset / 60)), minutes = Math.trunc(Math.abs(offset % 60)), sign = offset >= 0 ? "+" : "-";
    switch (format) {
     case "short":
      return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);

     case "narrow":
      return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");

     case "techie":
      return "" + sign + padStart(hours, 2) + padStart(minutes, 2);

     default:
      throw new RangeError("Value format " + format + " is out of range for property format");
    }
  }
  function timeObject(obj) {
    return pick(obj, [ "hour", "minute", "second", "millisecond" ]);
  }
  var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
  var monthsLong = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  var monthsShort = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  var monthsNarrow = [ "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" ];
  function months(length) {
    switch (length) {
     case "narrow":
      return [].concat(monthsNarrow);

     case "short":
      return [].concat(monthsShort);

     case "long":
      return [].concat(monthsLong);

     case "numeric":
      return [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ];

     case "2-digit":
      return [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12" ];

     default:
      return null;
    }
  }
  var weekdaysLong = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];
  var weekdaysShort = [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ];
  var weekdaysNarrow = [ "M", "T", "W", "T", "F", "S", "S" ];
  function weekdays(length) {
    switch (length) {
     case "narrow":
      return [].concat(weekdaysNarrow);

     case "short":
      return [].concat(weekdaysShort);

     case "long":
      return [].concat(weekdaysLong);

     case "numeric":
      return [ "1", "2", "3", "4", "5", "6", "7" ];

     default:
      return null;
    }
  }
  var meridiems = [ "AM", "PM" ];
  var erasLong = [ "Before Christ", "Anno Domini" ];
  var erasShort = [ "BC", "AD" ];
  var erasNarrow = [ "B", "A" ];
  function eras(length) {
    switch (length) {
     case "narrow":
      return [].concat(erasNarrow);

     case "short":
      return [].concat(erasShort);

     case "long":
      return [].concat(erasLong);

     default:
      return null;
    }
  }
  function meridiemForDateTime(dt) {
    return meridiems[dt.hour < 12 ? 0 : 1];
  }
  function weekdayForDateTime(dt, length) {
    return weekdays(length)[dt.weekday - 1];
  }
  function monthForDateTime(dt, length) {
    return months(length)[dt.month - 1];
  }
  function eraForDateTime(dt, length) {
    return eras(length)[dt.year < 0 ? 0 : 1];
  }
  function formatRelativeTime(unit, count, numeric, narrow) {
    if (numeric === void 0) {
      numeric = "always";
    }
    if (narrow === void 0) {
      narrow = false;
    }
    var units = {
      years: [ "year", "yr." ],
      quarters: [ "quarter", "qtr." ],
      months: [ "month", "mo." ],
      weeks: [ "week", "wk." ],
      days: [ "day", "day", "days" ],
      hours: [ "hour", "hr." ],
      minutes: [ "minute", "min." ],
      seconds: [ "second", "sec." ]
    };
    var lastable = [ "hours", "minutes", "seconds" ].indexOf(unit) === -1;
    if (numeric === "auto" && lastable) {
      var isDay = unit === "days";
      switch (count) {
       case 1:
        return isDay ? "tomorrow" : "next " + units[unit][0];

       case -1:
        return isDay ? "yesterday" : "last " + units[unit][0];

       case 0:
        return isDay ? "today" : "this " + units[unit][0];
      }
    }
    var isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
    return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
  }
  function stringifyTokens(splits, tokenToString) {
    var s = "";
    for (var _iterator = _createForOfIteratorHelperLoose(splits), _step; !(_step = _iterator()).done; ) {
      var token = _step.value;
      if (token.literal) {
        s += token.val;
      } else {
        s += tokenToString(token.val);
      }
    }
    return s;
  }
  var _macroTokenToFormatOpts = {
    D: DATE_SHORT,
    DD: DATE_MED,
    DDD: DATE_FULL,
    DDDD: DATE_HUGE,
    t: TIME_SIMPLE,
    tt: TIME_WITH_SECONDS,
    ttt: TIME_WITH_SHORT_OFFSET,
    tttt: TIME_WITH_LONG_OFFSET,
    T: TIME_24_SIMPLE,
    TT: TIME_24_WITH_SECONDS,
    TTT: TIME_24_WITH_SHORT_OFFSET,
    TTTT: TIME_24_WITH_LONG_OFFSET,
    f: DATETIME_SHORT,
    ff: DATETIME_MED,
    fff: DATETIME_FULL,
    ffff: DATETIME_HUGE,
    F: DATETIME_SHORT_WITH_SECONDS,
    FF: DATETIME_MED_WITH_SECONDS,
    FFF: DATETIME_FULL_WITH_SECONDS,
    FFFF: DATETIME_HUGE_WITH_SECONDS
  };
  var Formatter = function() {
    Formatter.create = function create(locale, opts) {
      if (opts === void 0) {
        opts = {};
      }
      return new Formatter(locale, opts);
    };
    Formatter.parseFormat = function parseFormat(fmt) {
      var current = null, currentFull = "", bracketed = false;
      var splits = [];
      for (var i = 0; i < fmt.length; i++) {
        var c = fmt.charAt(i);
        if (c === "'") {
          if (currentFull.length > 0) {
            splits.push({
              literal: bracketed,
              val: currentFull
            });
          }
          current = null;
          currentFull = "";
          bracketed = !bracketed;
        } else if (bracketed) {
          currentFull += c;
        } else if (c === current) {
          currentFull += c;
        } else {
          if (currentFull.length > 0) {
            splits.push({
              literal: false,
              val: currentFull
            });
          }
          currentFull = c;
          current = c;
        }
      }
      if (currentFull.length > 0) {
        splits.push({
          literal: bracketed,
          val: currentFull
        });
      }
      return splits;
    };
    Formatter.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
      return _macroTokenToFormatOpts[token];
    };
    function Formatter(locale, formatOpts) {
      this.opts = formatOpts;
      this.loc = locale;
      this.systemLoc = null;
    }
    var _proto = Formatter.prototype;
    _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
      if (this.systemLoc === null) {
        this.systemLoc = this.loc.redefaultToSystem();
      }
      var df = this.systemLoc.dtFormatter(dt, _extends({}, this.opts, opts));
      return df.format();
    };
    _proto.formatDateTime = function formatDateTime(dt, opts) {
      if (opts === void 0) {
        opts = {};
      }
      var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
      return df.format();
    };
    _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
      if (opts === void 0) {
        opts = {};
      }
      var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
      return df.formatToParts();
    };
    _proto.resolvedOptions = function resolvedOptions(dt, opts) {
      if (opts === void 0) {
        opts = {};
      }
      var df = this.loc.dtFormatter(dt, _extends({}, this.opts, opts));
      return df.resolvedOptions();
    };
    _proto.num = function num(n, p) {
      if (p === void 0) {
        p = 0;
      }
      if (this.opts.forceSimple) {
        return padStart(n, p);
      }
      var opts = _extends({}, this.opts);
      if (p > 0) {
        opts.padTo = p;
      }
      return this.loc.numberFormatter(opts).format(n);
    };
    _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
      var _this = this;
      var knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = function string(opts, extract) {
        return _this.loc.extract(dt, opts, extract);
      }, formatOffset = function formatOffset(opts) {
        if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
          return "Z";
        }
        return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
      }, meridiem = function meridiem() {
        return knownEnglish ? meridiemForDateTime(dt) : string({
          hour: "numeric",
          hourCycle: "h12"
        }, "dayperiod");
      }, month = function month(length, standalone) {
        return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
          month: length
        } : {
          month: length,
          day: "numeric"
        }, "month");
      }, weekday = function weekday(length, standalone) {
        return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
          weekday: length
        } : {
          weekday: length,
          month: "long",
          day: "numeric"
        }, "weekday");
      }, maybeMacro = function maybeMacro(token) {
        var formatOpts = Formatter.macroTokenToFormatOpts(token);
        if (formatOpts) {
          return _this.formatWithSystemDefault(dt, formatOpts);
        } else {
          return token;
        }
      }, era = function era(length) {
        return knownEnglish ? eraForDateTime(dt, length) : string({
          era: length
        }, "era");
      }, tokenToString = function tokenToString(token) {
        switch (token) {
         case "S":
          return _this.num(dt.millisecond);

         case "u":
         case "SSS":
          return _this.num(dt.millisecond, 3);

         case "s":
          return _this.num(dt.second);

         case "ss":
          return _this.num(dt.second, 2);

         case "uu":
          return _this.num(Math.floor(dt.millisecond / 10), 2);

         case "uuu":
          return _this.num(Math.floor(dt.millisecond / 100));

         case "m":
          return _this.num(dt.minute);

         case "mm":
          return _this.num(dt.minute, 2);

         case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

         case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

         case "H":
          return _this.num(dt.hour);

         case "HH":
          return _this.num(dt.hour, 2);

         case "Z":
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

         case "ZZ":
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

         case "ZZZ":
          return formatOffset({
            format: "techie",
            allowZ: _this.opts.allowZ
          });

         case "ZZZZ":
          return dt.zone.offsetName(dt.ts, {
            format: "short",
            locale: _this.loc.locale
          });

         case "ZZZZZ":
          return dt.zone.offsetName(dt.ts, {
            format: "long",
            locale: _this.loc.locale
          });

         case "z":
          return dt.zoneName;

         case "a":
          return meridiem();

         case "d":
          return useDateTimeFormatter ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

         case "dd":
          return useDateTimeFormatter ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);

         case "c":
          return _this.num(dt.weekday);

         case "ccc":
          return weekday("short", true);

         case "cccc":
          return weekday("long", true);

         case "ccccc":
          return weekday("narrow", true);

         case "E":
          return _this.num(dt.weekday);

         case "EEE":
          return weekday("short", false);

         case "EEEE":
          return weekday("long", false);

         case "EEEEE":
          return weekday("narrow", false);

         case "L":
          return useDateTimeFormatter ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

         case "LL":
          return useDateTimeFormatter ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

         case "LLL":
          return month("short", true);

         case "LLLL":
          return month("long", true);

         case "LLLLL":
          return month("narrow", true);

         case "M":
          return useDateTimeFormatter ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

         case "MM":
          return useDateTimeFormatter ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

         case "MMM":
          return month("short", false);

         case "MMMM":
          return month("long", false);

         case "MMMMM":
          return month("narrow", false);

         case "y":
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

         case "yy":
          return useDateTimeFormatter ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

         case "yyyy":
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

         case "yyyyyy":
          return useDateTimeFormatter ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);

         case "G":
          return era("short");

         case "GG":
          return era("long");

         case "GGGGG":
          return era("narrow");

         case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

         case "kkkk":
          return _this.num(dt.weekYear, 4);

         case "W":
          return _this.num(dt.weekNumber);

         case "WW":
          return _this.num(dt.weekNumber, 2);

         case "o":
          return _this.num(dt.ordinal);

         case "ooo":
          return _this.num(dt.ordinal, 3);

         case "q":
          return _this.num(dt.quarter);

         case "qq":
          return _this.num(dt.quarter, 2);

         case "X":
          return _this.num(Math.floor(dt.ts / 1e3));

         case "x":
          return _this.num(dt.ts);

         default:
          return maybeMacro(token);
        }
      };
      return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
    };
    _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
      var _this2 = this;
      var tokenToField = function tokenToField(token) {
        switch (token[0]) {
         case "S":
          return "millisecond";

         case "s":
          return "second";

         case "m":
          return "minute";

         case "h":
          return "hour";

         case "d":
          return "day";

         case "w":
          return "week";

         case "M":
          return "month";

         case "y":
          return "year";

         default:
          return null;
        }
      }, tokenToString = function tokenToString(lildur) {
        return function(token) {
          var mapped = tokenToField(token);
          if (mapped) {
            return _this2.num(lildur.get(mapped), token.length);
          } else {
            return token;
          }
        };
      }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce((function(found, _ref) {
        var literal = _ref.literal, val = _ref.val;
        return literal ? found : found.concat(val);
      }), []), collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter((function(t) {
        return t;
      })));
      return stringifyTokens(tokens, tokenToString(collapsed));
    };
    return Formatter;
  }();
  var Invalid = function() {
    function Invalid(reason, explanation) {
      this.reason = reason;
      this.explanation = explanation;
    }
    var _proto = Invalid.prototype;
    _proto.toMessage = function toMessage() {
      if (this.explanation) {
        return this.reason + ": " + this.explanation;
      } else {
        return this.reason;
      }
    };
    return Invalid;
  }();
  var Zone = function() {
    function Zone() {}
    var _proto = Zone.prototype;
    _proto.offsetName = function offsetName(ts, opts) {
      throw new ZoneIsAbstractError;
    };
    _proto.formatOffset = function formatOffset(ts, format) {
      throw new ZoneIsAbstractError;
    };
    _proto.offset = function offset(ts) {
      throw new ZoneIsAbstractError;
    };
    _proto.equals = function equals(otherZone) {
      throw new ZoneIsAbstractError;
    };
    _createClass(Zone, [ {
      key: "type",
      get: function get() {
        throw new ZoneIsAbstractError;
      }
    }, {
      key: "name",
      get: function get() {
        throw new ZoneIsAbstractError;
      }
    }, {
      key: "ianaName",
      get: function get() {
        return this.name;
      }
    }, {
      key: "isUniversal",
      get: function get() {
        throw new ZoneIsAbstractError;
      }
    }, {
      key: "isValid",
      get: function get() {
        throw new ZoneIsAbstractError;
      }
    } ]);
    return Zone;
  }();
  var singleton$1 = null;
  var SystemZone = function(_Zone) {
    _inheritsLoose(SystemZone, _Zone);
    function SystemZone() {
      return _Zone.apply(this, arguments) || this;
    }
    var _proto = SystemZone.prototype;
    _proto.offsetName = function offsetName(ts, _ref) {
      var format = _ref.format, locale = _ref.locale;
      return parseZoneInfo(ts, format, locale);
    };
    _proto.formatOffset = function formatOffset$1(ts, format) {
      return formatOffset(this.offset(ts), format);
    };
    _proto.offset = function offset(ts) {
      return -new Date(ts).getTimezoneOffset();
    };
    _proto.equals = function equals(otherZone) {
      return otherZone.type === "system";
    };
    _createClass(SystemZone, [ {
      key: "type",
      get: function get() {
        return "system";
      }
    }, {
      key: "name",
      get: function get() {
        return (new Intl.DateTimeFormat).resolvedOptions().timeZone;
      }
    }, {
      key: "isUniversal",
      get: function get() {
        return false;
      }
    }, {
      key: "isValid",
      get: function get() {
        return true;
      }
    } ], [ {
      key: "instance",
      get: function get() {
        if (singleton$1 === null) {
          singleton$1 = new SystemZone;
        }
        return singleton$1;
      }
    } ]);
    return SystemZone;
  }(Zone);
  var dtfCache = {};
  function makeDTF(zone) {
    if (!dtfCache[zone]) {
      dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
        hour12: false,
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short"
      });
    }
    return dtfCache[zone];
  }
  var typeToPos = {
    year: 0,
    month: 1,
    day: 2,
    era: 3,
    hour: 4,
    minute: 5,
    second: 6
  };
  function hackyOffset(dtf, date) {
    var formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), fMonth = parsed[1], fDay = parsed[2], fYear = parsed[3], fadOrBc = parsed[4], fHour = parsed[5], fMinute = parsed[6], fSecond = parsed[7];
    return [ fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond ];
  }
  function partsOffset(dtf, date) {
    var formatted = dtf.formatToParts(date);
    var filled = [];
    for (var i = 0; i < formatted.length; i++) {
      var _formatted$i = formatted[i], type = _formatted$i.type, value = _formatted$i.value;
      var pos = typeToPos[type];
      if (type === "era") {
        filled[pos] = value;
      } else if (!isUndefined(pos)) {
        filled[pos] = parseInt(value, 10);
      }
    }
    return filled;
  }
  var ianaZoneCache = {};
  var IANAZone = function(_Zone) {
    _inheritsLoose(IANAZone, _Zone);
    IANAZone.create = function create(name) {
      if (!ianaZoneCache[name]) {
        ianaZoneCache[name] = new IANAZone(name);
      }
      return ianaZoneCache[name];
    };
    IANAZone.resetCache = function resetCache() {
      ianaZoneCache = {};
      dtfCache = {};
    };
    IANAZone.isValidSpecifier = function isValidSpecifier(s) {
      return this.isValidZone(s);
    };
    IANAZone.isValidZone = function isValidZone(zone) {
      if (!zone) {
        return false;
      }
      try {
        new Intl.DateTimeFormat("en-US", {
          timeZone: zone
        }).format();
        return true;
      } catch (e) {
        return false;
      }
    };
    function IANAZone(name) {
      var _this;
      _this = _Zone.call(this) || this;
      _this.zoneName = name;
      _this.valid = IANAZone.isValidZone(name);
      return _this;
    }
    var _proto = IANAZone.prototype;
    _proto.offsetName = function offsetName(ts, _ref) {
      var format = _ref.format, locale = _ref.locale;
      return parseZoneInfo(ts, format, locale, this.name);
    };
    _proto.formatOffset = function formatOffset$1(ts, format) {
      return formatOffset(this.offset(ts), format);
    };
    _proto.offset = function offset(ts) {
      var date = new Date(ts);
      if (isNaN(date)) return NaN;
      var dtf = makeDTF(this.name);
      var _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date), year = _ref2[0], month = _ref2[1], day = _ref2[2], adOrBc = _ref2[3], hour = _ref2[4], minute = _ref2[5], second = _ref2[6];
      if (adOrBc === "BC") {
        year = -Math.abs(year) + 1;
      }
      var adjustedHour = hour === 24 ? 0 : hour;
      var asUTC = objToLocalTS({
        year: year,
        month: month,
        day: day,
        hour: adjustedHour,
        minute: minute,
        second: second,
        millisecond: 0
      });
      var asTS = +date;
      var over = asTS % 1e3;
      asTS -= over >= 0 ? over : 1e3 + over;
      return (asUTC - asTS) / (60 * 1e3);
    };
    _proto.equals = function equals(otherZone) {
      return otherZone.type === "iana" && otherZone.name === this.name;
    };
    _createClass(IANAZone, [ {
      key: "type",
      get: function get() {
        return "iana";
      }
    }, {
      key: "name",
      get: function get() {
        return this.zoneName;
      }
    }, {
      key: "isUniversal",
      get: function get() {
        return false;
      }
    }, {
      key: "isValid",
      get: function get() {
        return this.valid;
      }
    } ]);
    return IANAZone;
  }(Zone);
  var singleton = null;
  var FixedOffsetZone = function(_Zone) {
    _inheritsLoose(FixedOffsetZone, _Zone);
    FixedOffsetZone.instance = function instance(offset) {
      return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
    };
    FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
      if (s) {
        var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
        if (r) {
          return new FixedOffsetZone(signedOffset(r[1], r[2]));
        }
      }
      return null;
    };
    function FixedOffsetZone(offset) {
      var _this;
      _this = _Zone.call(this) || this;
      _this.fixed = offset;
      return _this;
    }
    var _proto = FixedOffsetZone.prototype;
    _proto.offsetName = function offsetName() {
      return this.name;
    };
    _proto.formatOffset = function formatOffset$1(ts, format) {
      return formatOffset(this.fixed, format);
    };
    _proto.offset = function offset() {
      return this.fixed;
    };
    _proto.equals = function equals(otherZone) {
      return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
    };
    _createClass(FixedOffsetZone, [ {
      key: "type",
      get: function get() {
        return "fixed";
      }
    }, {
      key: "name",
      get: function get() {
        return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
      }
    }, {
      key: "ianaName",
      get: function get() {
        if (this.fixed === 0) {
          return "Etc/UTC";
        } else {
          return "Etc/GMT" + formatOffset(-this.fixed, "narrow");
        }
      }
    }, {
      key: "isUniversal",
      get: function get() {
        return true;
      }
    }, {
      key: "isValid",
      get: function get() {
        return true;
      }
    } ], [ {
      key: "utcInstance",
      get: function get() {
        if (singleton === null) {
          singleton = new FixedOffsetZone(0);
        }
        return singleton;
      }
    } ]);
    return FixedOffsetZone;
  }(Zone);
  var InvalidZone = function(_Zone) {
    _inheritsLoose(InvalidZone, _Zone);
    function InvalidZone(zoneName) {
      var _this;
      _this = _Zone.call(this) || this;
      _this.zoneName = zoneName;
      return _this;
    }
    var _proto = InvalidZone.prototype;
    _proto.offsetName = function offsetName() {
      return null;
    };
    _proto.formatOffset = function formatOffset() {
      return "";
    };
    _proto.offset = function offset() {
      return NaN;
    };
    _proto.equals = function equals() {
      return false;
    };
    _createClass(InvalidZone, [ {
      key: "type",
      get: function get() {
        return "invalid";
      }
    }, {
      key: "name",
      get: function get() {
        return this.zoneName;
      }
    }, {
      key: "isUniversal",
      get: function get() {
        return false;
      }
    }, {
      key: "isValid",
      get: function get() {
        return false;
      }
    } ]);
    return InvalidZone;
  }(Zone);
  function normalizeZone(input, defaultZone) {
    if (isUndefined(input) || input === null) {
      return defaultZone;
    } else if (input instanceof Zone) {
      return input;
    } else if (isString(input)) {
      var lowered = input.toLowerCase();
      if (lowered === "local" || lowered === "system") return defaultZone; else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance; else return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
    } else if (isNumber(input)) {
      return FixedOffsetZone.instance(input);
    } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
      return input;
    } else {
      return new InvalidZone(input);
    }
  }
  var now = function now() {
    return Date.now();
  }, defaultZone = "system", defaultLocale = null, defaultNumberingSystem = null, defaultOutputCalendar = null, throwOnInvalid;
  var Settings = function() {
    function Settings() {}
    Settings.resetCaches = function resetCaches() {
      Locale.resetCache();
      IANAZone.resetCache();
    };
    _createClass(Settings, null, [ {
      key: "now",
      get: function get() {
        return now;
      },
      set: function set(n) {
        now = n;
      }
    }, {
      key: "defaultZone",
      get: function get() {
        return normalizeZone(defaultZone, SystemZone.instance);
      },
      set: function set(zone) {
        defaultZone = zone;
      }
    }, {
      key: "defaultLocale",
      get: function get() {
        return defaultLocale;
      },
      set: function set(locale) {
        defaultLocale = locale;
      }
    }, {
      key: "defaultNumberingSystem",
      get: function get() {
        return defaultNumberingSystem;
      },
      set: function set(numberingSystem) {
        defaultNumberingSystem = numberingSystem;
      }
    }, {
      key: "defaultOutputCalendar",
      get: function get() {
        return defaultOutputCalendar;
      },
      set: function set(outputCalendar) {
        defaultOutputCalendar = outputCalendar;
      }
    }, {
      key: "throwOnInvalid",
      get: function get() {
        return throwOnInvalid;
      },
      set: function set(t) {
        throwOnInvalid = t;
      }
    } ]);
    return Settings;
  }();
  var _excluded$1 = [ "base" ], _excluded2$1 = [ "padTo", "floor" ];
  var intlLFCache = {};
  function getCachedLF(locString, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var key = JSON.stringify([ locString, opts ]);
    var dtf = intlLFCache[key];
    if (!dtf) {
      dtf = new Intl.ListFormat(locString, opts);
      intlLFCache[key] = dtf;
    }
    return dtf;
  }
  var intlDTCache = {};
  function getCachedDTF(locString, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var key = JSON.stringify([ locString, opts ]);
    var dtf = intlDTCache[key];
    if (!dtf) {
      dtf = new Intl.DateTimeFormat(locString, opts);
      intlDTCache[key] = dtf;
    }
    return dtf;
  }
  var intlNumCache = {};
  function getCachedINF(locString, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var key = JSON.stringify([ locString, opts ]);
    var inf = intlNumCache[key];
    if (!inf) {
      inf = new Intl.NumberFormat(locString, opts);
      intlNumCache[key] = inf;
    }
    return inf;
  }
  var intlRelCache = {};
  function getCachedRTF(locString, opts) {
    if (opts === void 0) {
      opts = {};
    }
    var _opts = opts;
    _opts.base;
    var cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, _excluded$1);
    var key = JSON.stringify([ locString, cacheKeyOpts ]);
    var inf = intlRelCache[key];
    if (!inf) {
      inf = new Intl.RelativeTimeFormat(locString, opts);
      intlRelCache[key] = inf;
    }
    return inf;
  }
  var sysLocaleCache = null;
  function systemLocale() {
    if (sysLocaleCache) {
      return sysLocaleCache;
    } else {
      sysLocaleCache = (new Intl.DateTimeFormat).resolvedOptions().locale;
      return sysLocaleCache;
    }
  }
  function parseLocaleString(localeStr) {
    var uIndex = localeStr.indexOf("-u-");
    if (uIndex === -1) {
      return [ localeStr ];
    } else {
      var options;
      var smaller = localeStr.substring(0, uIndex);
      try {
        options = getCachedDTF(localeStr).resolvedOptions();
      } catch (e) {
        options = getCachedDTF(smaller).resolvedOptions();
      }
      var _options = options, numberingSystem = _options.numberingSystem, calendar = _options.calendar;
      return [ smaller, numberingSystem, calendar ];
    }
  }
  function intlConfigString(localeStr, numberingSystem, outputCalendar) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";
      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }
      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }
      return localeStr;
    } else {
      return localeStr;
    }
  }
  function mapMonths(f) {
    var ms = [];
    for (var i = 1; i <= 12; i++) {
      var dt = DateTime.utc(2016, i, 1);
      ms.push(f(dt));
    }
    return ms;
  }
  function mapWeekdays(f) {
    var ms = [];
    for (var i = 1; i <= 7; i++) {
      var dt = DateTime.utc(2016, 11, 13 + i);
      ms.push(f(dt));
    }
    return ms;
  }
  function listStuff(loc, length, defaultOK, englishFn, intlFn) {
    var mode = loc.listingMode(defaultOK);
    if (mode === "error") {
      return null;
    } else if (mode === "en") {
      return englishFn(length);
    } else {
      return intlFn(length);
    }
  }
  function supportsFastNumbers(loc) {
    if (loc.numberingSystem && loc.numberingSystem !== "latn") {
      return false;
    } else {
      return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
    }
  }
  var PolyNumberFormatter = function() {
    function PolyNumberFormatter(intl, forceSimple, opts) {
      this.padTo = opts.padTo || 0;
      this.floor = opts.floor || false;
      opts.padTo;
      opts.floor;
      var otherOpts = _objectWithoutPropertiesLoose(opts, _excluded2$1);
      if (!forceSimple || Object.keys(otherOpts).length > 0) {
        var intlOpts = _extends({
          useGrouping: false
        }, opts);
        if (opts.padTo > 0) intlOpts.minimumIntegerDigits = opts.padTo;
        this.inf = getCachedINF(intl, intlOpts);
      }
    }
    var _proto = PolyNumberFormatter.prototype;
    _proto.format = function format(i) {
      if (this.inf) {
        var fixed = this.floor ? Math.floor(i) : i;
        return this.inf.format(fixed);
      } else {
        var _fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
        return padStart(_fixed, this.padTo);
      }
    };
    return PolyNumberFormatter;
  }();
  var PolyDateFormatter = function() {
    function PolyDateFormatter(dt, intl, opts) {
      this.opts = opts;
      var z;
      if (dt.zone.isUniversal) {
        var gmtOffset = -1 * (dt.offset / 60);
        var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
        if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
          z = offsetZ;
          this.dt = dt;
        } else {
          z = "UTC";
          if (opts.timeZoneName) {
            this.dt = dt;
          } else {
            this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1e3);
          }
        }
      } else if (dt.zone.type === "system") {
        this.dt = dt;
      } else {
        this.dt = dt;
        z = dt.zone.name;
      }
      var intlOpts = _extends({}, this.opts);
      if (z) {
        intlOpts.timeZone = z;
      }
      this.dtf = getCachedDTF(intl, intlOpts);
    }
    var _proto2 = PolyDateFormatter.prototype;
    _proto2.format = function format() {
      return this.dtf.format(this.dt.toJSDate());
    };
    _proto2.formatToParts = function formatToParts() {
      return this.dtf.formatToParts(this.dt.toJSDate());
    };
    _proto2.resolvedOptions = function resolvedOptions() {
      return this.dtf.resolvedOptions();
    };
    return PolyDateFormatter;
  }();
  var PolyRelFormatter = function() {
    function PolyRelFormatter(intl, isEnglish, opts) {
      this.opts = _extends({
        style: "long"
      }, opts);
      if (!isEnglish && hasRelative()) {
        this.rtf = getCachedRTF(intl, opts);
      }
    }
    var _proto3 = PolyRelFormatter.prototype;
    _proto3.format = function format(count, unit) {
      if (this.rtf) {
        return this.rtf.format(count, unit);
      } else {
        return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
      }
    };
    _proto3.formatToParts = function formatToParts(count, unit) {
      if (this.rtf) {
        return this.rtf.formatToParts(count, unit);
      } else {
        return [];
      }
    };
    return PolyRelFormatter;
  }();
  var Locale = function() {
    Locale.fromOpts = function fromOpts(opts) {
      return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
    };
    Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
      if (defaultToEN === void 0) {
        defaultToEN = false;
      }
      var specifiedLocale = locale || Settings.defaultLocale;
      var localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
      var numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
      var outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
      return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
    };
    Locale.resetCache = function resetCache() {
      sysLocaleCache = null;
      intlDTCache = {};
      intlNumCache = {};
      intlRelCache = {};
    };
    Locale.fromObject = function fromObject(_temp) {
      var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, outputCalendar = _ref.outputCalendar;
      return Locale.create(locale, numberingSystem, outputCalendar);
    };
    function Locale(locale, numbering, outputCalendar, specifiedLocale) {
      var _parseLocaleString = parseLocaleString(locale), parsedLocale = _parseLocaleString[0], parsedNumberingSystem = _parseLocaleString[1], parsedOutputCalendar = _parseLocaleString[2];
      this.locale = parsedLocale;
      this.numberingSystem = numbering || parsedNumberingSystem || null;
      this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
      this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
      this.weekdaysCache = {
        format: {},
        standalone: {}
      };
      this.monthsCache = {
        format: {},
        standalone: {}
      };
      this.meridiemCache = null;
      this.eraCache = {};
      this.specifiedLocale = specifiedLocale;
      this.fastNumbersCached = null;
    }
    var _proto4 = Locale.prototype;
    _proto4.listingMode = function listingMode() {
      var isActuallyEn = this.isEnglish();
      var hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
      return isActuallyEn && hasNoWeirdness ? "en" : "intl";
    };
    _proto4.clone = function clone(alts) {
      if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
        return this;
      } else {
        return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
      }
    };
    _proto4.redefaultToEN = function redefaultToEN(alts) {
      if (alts === void 0) {
        alts = {};
      }
      return this.clone(_extends({}, alts, {
        defaultToEN: true
      }));
    };
    _proto4.redefaultToSystem = function redefaultToSystem(alts) {
      if (alts === void 0) {
        alts = {};
      }
      return this.clone(_extends({}, alts, {
        defaultToEN: false
      }));
    };
    _proto4.months = function months$1(length, format, defaultOK) {
      var _this = this;
      if (format === void 0) {
        format = false;
      }
      if (defaultOK === void 0) {
        defaultOK = true;
      }
      return listStuff(this, length, defaultOK, months, (function() {
        var intl = format ? {
          month: length,
          day: "numeric"
        } : {
          month: length
        }, formatStr = format ? "format" : "standalone";
        if (!_this.monthsCache[formatStr][length]) {
          _this.monthsCache[formatStr][length] = mapMonths((function(dt) {
            return _this.extract(dt, intl, "month");
          }));
        }
        return _this.monthsCache[formatStr][length];
      }));
    };
    _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
      var _this2 = this;
      if (format === void 0) {
        format = false;
      }
      if (defaultOK === void 0) {
        defaultOK = true;
      }
      return listStuff(this, length, defaultOK, weekdays, (function() {
        var intl = format ? {
          weekday: length,
          year: "numeric",
          month: "long",
          day: "numeric"
        } : {
          weekday: length
        }, formatStr = format ? "format" : "standalone";
        if (!_this2.weekdaysCache[formatStr][length]) {
          _this2.weekdaysCache[formatStr][length] = mapWeekdays((function(dt) {
            return _this2.extract(dt, intl, "weekday");
          }));
        }
        return _this2.weekdaysCache[formatStr][length];
      }));
    };
    _proto4.meridiems = function meridiems$1(defaultOK) {
      var _this3 = this;
      if (defaultOK === void 0) {
        defaultOK = true;
      }
      return listStuff(this, undefined, defaultOK, (function() {
        return meridiems;
      }), (function() {
        if (!_this3.meridiemCache) {
          var intl = {
            hour: "numeric",
            hourCycle: "h12"
          };
          _this3.meridiemCache = [ DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19) ].map((function(dt) {
            return _this3.extract(dt, intl, "dayperiod");
          }));
        }
        return _this3.meridiemCache;
      }));
    };
    _proto4.eras = function eras$1(length, defaultOK) {
      var _this4 = this;
      if (defaultOK === void 0) {
        defaultOK = true;
      }
      return listStuff(this, length, defaultOK, eras, (function() {
        var intl = {
          era: length
        };
        if (!_this4.eraCache[length]) {
          _this4.eraCache[length] = [ DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1) ].map((function(dt) {
            return _this4.extract(dt, intl, "era");
          }));
        }
        return _this4.eraCache[length];
      }));
    };
    _proto4.extract = function extract(dt, intlOpts, field) {
      var df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((function(m) {
        return m.type.toLowerCase() === field;
      }));
      return matching ? matching.value : null;
    };
    _proto4.numberFormatter = function numberFormatter(opts) {
      if (opts === void 0) {
        opts = {};
      }
      return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
    };
    _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
      if (intlOpts === void 0) {
        intlOpts = {};
      }
      return new PolyDateFormatter(dt, this.intl, intlOpts);
    };
    _proto4.relFormatter = function relFormatter(opts) {
      if (opts === void 0) {
        opts = {};
      }
      return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
    };
    _proto4.listFormatter = function listFormatter(opts) {
      if (opts === void 0) {
        opts = {};
      }
      return getCachedLF(this.intl, opts);
    };
    _proto4.isEnglish = function isEnglish() {
      return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
    };
    _proto4.equals = function equals(other) {
      return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
    };
    _createClass(Locale, [ {
      key: "fastNumbers",
      get: function get() {
        if (this.fastNumbersCached == null) {
          this.fastNumbersCached = supportsFastNumbers(this);
        }
        return this.fastNumbersCached;
      }
    } ]);
    return Locale;
  }();
  function combineRegexes() {
    for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
      regexes[_key] = arguments[_key];
    }
    var full = regexes.reduce((function(f, r) {
      return f + r.source;
    }), "");
    return RegExp("^" + full + "$");
  }
  function combineExtractors() {
    for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      extractors[_key2] = arguments[_key2];
    }
    return function(m) {
      return extractors.reduce((function(_ref, ex) {
        var mergedVals = _ref[0], mergedZone = _ref[1], cursor = _ref[2];
        var _ex = ex(m, cursor), val = _ex[0], zone = _ex[1], next = _ex[2];
        return [ _extends({}, mergedVals, val), zone || mergedZone, next ];
      }), [ {}, null, 1 ]).slice(0, 2);
    };
  }
  function parse(s) {
    if (s == null) {
      return [ null, null ];
    }
    for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      patterns[_key3 - 1] = arguments[_key3];
    }
    for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
      var _patterns$_i = _patterns[_i], regex = _patterns$_i[0], extractor = _patterns$_i[1];
      var m = regex.exec(s);
      if (m) {
        return extractor(m);
      }
    }
    return [ null, null ];
  }
  function simpleParse() {
    for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      keys[_key4] = arguments[_key4];
    }
    return function(match, cursor) {
      var ret = {};
      var i;
      for (i = 0; i < keys.length; i++) {
        ret[keys[i]] = parseInteger(match[cursor + i]);
      }
      return [ ret, null, cursor + i ];
    };
  }
  var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
  var isoExtendedZone = "(?:" + offsetRegex.source + "?(?:\\[(" + ianaRegex.source + ")\\])?)?";
  var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
  var isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + isoExtendedZone);
  var isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?");
  var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
  var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
  var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
  var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
  var extractISOOrdinalData = simpleParse("year", "ordinal");
  var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
  var sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?");
  var sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");
  function int(match, pos, fallback) {
    var m = match[pos];
    return isUndefined(m) ? fallback : parseInteger(m);
  }
  function extractISOYmd(match, cursor) {
    var item = {
      year: int(match, cursor),
      month: int(match, cursor + 1, 1),
      day: int(match, cursor + 2, 1)
    };
    return [ item, null, cursor + 3 ];
  }
  function extractISOTime(match, cursor) {
    var item = {
      hours: int(match, cursor, 0),
      minutes: int(match, cursor + 1, 0),
      seconds: int(match, cursor + 2, 0),
      milliseconds: parseMillis(match[cursor + 3])
    };
    return [ item, null, cursor + 4 ];
  }
  function extractISOOffset(match, cursor) {
    var local = !match[cursor] && !match[cursor + 1], fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
    return [ {}, zone, cursor + 3 ];
  }
  function extractIANAZone(match, cursor) {
    var zone = match[cursor] ? IANAZone.create(match[cursor]) : null;
    return [ {}, zone, cursor + 1 ];
  }
  var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$");
  var isoDuration = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
  function extractISODuration(match) {
    var s = match[0], yearStr = match[1], monthStr = match[2], weekStr = match[3], dayStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], millisecondsStr = match[8];
    var hasNegativePrefix = s[0] === "-";
    var negativeSeconds = secondStr && secondStr[0] === "-";
    var maybeNegate = function maybeNegate(num, force) {
      if (force === void 0) {
        force = false;
      }
      return num !== undefined && (force || num && hasNegativePrefix) ? -num : num;
    };
    return [ {
      years: maybeNegate(parseFloating(yearStr)),
      months: maybeNegate(parseFloating(monthStr)),
      weeks: maybeNegate(parseFloating(weekStr)),
      days: maybeNegate(parseFloating(dayStr)),
      hours: maybeNegate(parseFloating(hourStr)),
      minutes: maybeNegate(parseFloating(minuteStr)),
      seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
      milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
    } ];
  }
  var obsOffsets = {
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
  function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var result = {
      year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
      month: monthsShort.indexOf(monthStr) + 1,
      day: parseInteger(dayStr),
      hour: parseInteger(hourStr),
      minute: parseInteger(minuteStr)
    };
    if (secondStr) result.second = parseInteger(secondStr);
    if (weekdayStr) {
      result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
    }
    return result;
  }
  var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
  function extractRFC2822(match) {
    var weekdayStr = match[1], dayStr = match[2], monthStr = match[3], yearStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], obsOffset = match[8], milOffset = match[9], offHourStr = match[10], offMinuteStr = match[11], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    var offset;
    if (obsOffset) {
      offset = obsOffsets[obsOffset];
    } else if (milOffset) {
      offset = 0;
    } else {
      offset = signedOffset(offHourStr, offMinuteStr);
    }
    return [ result, new FixedOffsetZone(offset) ];
  }
  function preprocessRFC2822(s) {
    return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
  }
  var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
  function extractRFC1123Or850(match) {
    var weekdayStr = match[1], dayStr = match[2], monthStr = match[3], yearStr = match[4], hourStr = match[5], minuteStr = match[6], secondStr = match[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [ result, FixedOffsetZone.utcInstance ];
  }
  function extractASCII(match) {
    var weekdayStr = match[1], monthStr = match[2], dayStr = match[3], hourStr = match[4], minuteStr = match[5], secondStr = match[6], yearStr = match[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
    return [ result, FixedOffsetZone.utcInstance ];
  }
  var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
  var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
  var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
  var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
  var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
  var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset, extractIANAZone);
  var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset, extractIANAZone);
  var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
  function parseISODate(s) {
    return parse(s, [ isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset ], [ isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset ], [ isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime ], [ isoTimeCombinedRegex, extractISOTimeAndOffset ]);
  }
  function parseRFC2822Date(s) {
    return parse(preprocessRFC2822(s), [ rfc2822, extractRFC2822 ]);
  }
  function parseHTTPDate(s) {
    return parse(s, [ rfc1123, extractRFC1123Or850 ], [ rfc850, extractRFC1123Or850 ], [ ascii, extractASCII ]);
  }
  function parseISODuration(s) {
    return parse(s, [ isoDuration, extractISODuration ]);
  }
  var extractISOTimeOnly = combineExtractors(extractISOTime);
  function parseISOTimeOnly(s) {
    return parse(s, [ isoTimeOnly, extractISOTimeOnly ]);
  }
  var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
  var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
  var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
  function parseSQL(s) {
    return parse(s, [ sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset ], [ sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone ]);
  }
  var INVALID$2 = "Invalid Duration";
  var lowOrderMatrix = {
    weeks: {
      days: 7,
      hours: 7 * 24,
      minutes: 7 * 24 * 60,
      seconds: 7 * 24 * 60 * 60,
      milliseconds: 7 * 24 * 60 * 60 * 1e3
    },
    days: {
      hours: 24,
      minutes: 24 * 60,
      seconds: 24 * 60 * 60,
      milliseconds: 24 * 60 * 60 * 1e3
    },
    hours: {
      minutes: 60,
      seconds: 60 * 60,
      milliseconds: 60 * 60 * 1e3
    },
    minutes: {
      seconds: 60,
      milliseconds: 60 * 1e3
    },
    seconds: {
      milliseconds: 1e3
    }
  }, casualMatrix = _extends({
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 365 * 24,
      minutes: 365 * 24 * 60,
      seconds: 365 * 24 * 60 * 60,
      milliseconds: 365 * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 91 * 24,
      minutes: 91 * 24 * 60,
      seconds: 91 * 24 * 60 * 60,
      milliseconds: 91 * 24 * 60 * 60 * 1e3
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 30 * 24,
      minutes: 30 * 24 * 60,
      seconds: 30 * 24 * 60 * 60,
      milliseconds: 30 * 24 * 60 * 60 * 1e3
    }
  }, lowOrderMatrix), daysInYearAccurate = 146097 / 400, daysInMonthAccurate = 146097 / 4800, accurateMatrix = _extends({
    years: {
      quarters: 4,
      months: 12,
      weeks: daysInYearAccurate / 7,
      days: daysInYearAccurate,
      hours: daysInYearAccurate * 24,
      minutes: daysInYearAccurate * 24 * 60,
      seconds: daysInYearAccurate * 24 * 60 * 60,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
    },
    quarters: {
      months: 3,
      weeks: daysInYearAccurate / 28,
      days: daysInYearAccurate / 4,
      hours: daysInYearAccurate * 24 / 4,
      minutes: daysInYearAccurate * 24 * 60 / 4,
      seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
      milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
    },
    months: {
      weeks: daysInMonthAccurate / 7,
      days: daysInMonthAccurate,
      hours: daysInMonthAccurate * 24,
      minutes: daysInMonthAccurate * 24 * 60,
      seconds: daysInMonthAccurate * 24 * 60 * 60,
      milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
    }
  }, lowOrderMatrix);
  var orderedUnits$1 = [ "years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds" ];
  var reverseUnits = orderedUnits$1.slice(0).reverse();
  function clone$1(dur, alts, clear) {
    if (clear === void 0) {
      clear = false;
    }
    var conf = {
      values: clear ? alts.values : _extends({}, dur.values, alts.values || {}),
      loc: dur.loc.clone(alts.loc),
      conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
    };
    return new Duration(conf);
  }
  function antiTrunc(n) {
    return n < 0 ? Math.floor(n) : Math.ceil(n);
  }
  function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
    var conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
    toMap[toUnit] += added;
    fromMap[fromUnit] -= added * conv;
  }
  function normalizeValues(matrix, vals) {
    reverseUnits.reduce((function(previous, current) {
      if (!isUndefined(vals[current])) {
        if (previous) {
          convert(matrix, vals, previous, vals, current);
        }
        return current;
      } else {
        return previous;
      }
    }), null);
  }
  var Duration = function() {
    function Duration(config) {
      var accurate = config.conversionAccuracy === "longterm" || false;
      this.values = config.values;
      this.loc = config.loc || Locale.create();
      this.conversionAccuracy = accurate ? "longterm" : "casual";
      this.invalid = config.invalid || null;
      this.matrix = accurate ? accurateMatrix : casualMatrix;
      this.isLuxonDuration = true;
    }
    Duration.fromMillis = function fromMillis(count, opts) {
      return Duration.fromObject({
        milliseconds: count
      }, opts);
    };
    Duration.fromObject = function fromObject(obj, opts) {
      if (opts === void 0) {
        opts = {};
      }
      if (obj == null || typeof obj !== "object") {
        throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
      }
      return new Duration({
        values: normalizeObject(obj, Duration.normalizeUnit),
        loc: Locale.fromObject(opts),
        conversionAccuracy: opts.conversionAccuracy
      });
    };
    Duration.fromDurationLike = function fromDurationLike(durationLike) {
      if (isNumber(durationLike)) {
        return Duration.fromMillis(durationLike);
      } else if (Duration.isDuration(durationLike)) {
        return durationLike;
      } else if (typeof durationLike === "object") {
        return Duration.fromObject(durationLike);
      } else {
        throw new InvalidArgumentError("Unknown duration argument " + durationLike + " of type " + typeof durationLike);
      }
    };
    Duration.fromISO = function fromISO(text, opts) {
      var _parseISODuration = parseISODuration(text), parsed = _parseISODuration[0];
      if (parsed) {
        return Duration.fromObject(parsed, opts);
      } else {
        return Duration.invalid("unparsable", 'the input "' + text + "\" can't be parsed as ISO 8601");
      }
    };
    Duration.fromISOTime = function fromISOTime(text, opts) {
      var _parseISOTimeOnly = parseISOTimeOnly(text), parsed = _parseISOTimeOnly[0];
      if (parsed) {
        return Duration.fromObject(parsed, opts);
      } else {
        return Duration.invalid("unparsable", 'the input "' + text + "\" can't be parsed as ISO 8601");
      }
    };
    Duration.invalid = function invalid(reason, explanation) {
      if (explanation === void 0) {
        explanation = null;
      }
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
      }
      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (Settings.throwOnInvalid) {
        throw new InvalidDurationError(invalid);
      } else {
        return new Duration({
          invalid: invalid
        });
      }
    };
    Duration.normalizeUnit = function normalizeUnit(unit) {
      var normalized = {
        year: "years",
        years: "years",
        quarter: "quarters",
        quarters: "quarters",
        month: "months",
        months: "months",
        week: "weeks",
        weeks: "weeks",
        day: "days",
        days: "days",
        hour: "hours",
        hours: "hours",
        minute: "minutes",
        minutes: "minutes",
        second: "seconds",
        seconds: "seconds",
        millisecond: "milliseconds",
        milliseconds: "milliseconds"
      }[unit ? unit.toLowerCase() : unit];
      if (!normalized) throw new InvalidUnitError(unit);
      return normalized;
    };
    Duration.isDuration = function isDuration(o) {
      return o && o.isLuxonDuration || false;
    };
    var _proto = Duration.prototype;
    _proto.toFormat = function toFormat(fmt, opts) {
      if (opts === void 0) {
        opts = {};
      }
      var fmtOpts = _extends({}, opts, {
        floor: opts.round !== false && opts.floor !== false
      });
      return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
    };
    _proto.toHuman = function toHuman(opts) {
      var _this = this;
      if (opts === void 0) {
        opts = {};
      }
      var l = orderedUnits$1.map((function(unit) {
        var val = _this.values[unit];
        if (isUndefined(val)) {
          return null;
        }
        return _this.loc.numberFormatter(_extends({
          style: "unit",
          unitDisplay: "long"
        }, opts, {
          unit: unit.slice(0, -1)
        })).format(val);
      })).filter((function(n) {
        return n;
      }));
      return this.loc.listFormatter(_extends({
        type: "conjunction",
        style: opts.listStyle || "narrow"
      }, opts)).format(l);
    };
    _proto.toObject = function toObject() {
      if (!this.isValid) return {};
      return _extends({}, this.values);
    };
    _proto.toISO = function toISO() {
      if (!this.isValid) return null;
      var s = "P";
      if (this.years !== 0) s += this.years + "Y";
      if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
      if (this.weeks !== 0) s += this.weeks + "W";
      if (this.days !== 0) s += this.days + "D";
      if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
      if (this.hours !== 0) s += this.hours + "H";
      if (this.minutes !== 0) s += this.minutes + "M";
      if (this.seconds !== 0 || this.milliseconds !== 0) s += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
      if (s === "P") s += "T0S";
      return s;
    };
    _proto.toISOTime = function toISOTime(opts) {
      if (opts === void 0) {
        opts = {};
      }
      if (!this.isValid) return null;
      var millis = this.toMillis();
      if (millis < 0 || millis >= 864e5) return null;
      opts = _extends({
        suppressMilliseconds: false,
        suppressSeconds: false,
        includePrefix: false,
        format: "extended"
      }, opts);
      var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
      var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
      if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
        fmt += opts.format === "basic" ? "ss" : ":ss";
        if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
          fmt += ".SSS";
        }
      }
      var str = value.toFormat(fmt);
      if (opts.includePrefix) {
        str = "T" + str;
      }
      return str;
    };
    _proto.toJSON = function toJSON() {
      return this.toISO();
    };
    _proto.toString = function toString() {
      return this.toISO();
    };
    _proto.toMillis = function toMillis() {
      return this.as("milliseconds");
    };
    _proto.valueOf = function valueOf() {
      return this.toMillis();
    };
    _proto.plus = function plus(duration) {
      if (!this.isValid) return this;
      var dur = Duration.fromDurationLike(duration), result = {};
      for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits$1), _step; !(_step = _iterator()).done; ) {
        var k = _step.value;
        if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
          result[k] = dur.get(k) + this.get(k);
        }
      }
      return clone$1(this, {
        values: result
      }, true);
    };
    _proto.minus = function minus(duration) {
      if (!this.isValid) return this;
      var dur = Duration.fromDurationLike(duration);
      return this.plus(dur.negate());
    };
    _proto.mapUnits = function mapUnits(fn) {
      if (!this.isValid) return this;
      var result = {};
      for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
        var k = _Object$keys[_i];
        result[k] = asNumber(fn(this.values[k], k));
      }
      return clone$1(this, {
        values: result
      }, true);
    };
    _proto.get = function get(unit) {
      return this[Duration.normalizeUnit(unit)];
    };
    _proto.set = function set(values) {
      if (!this.isValid) return this;
      var mixed = _extends({}, this.values, normalizeObject(values, Duration.normalizeUnit));
      return clone$1(this, {
        values: mixed
      });
    };
    _proto.reconfigure = function reconfigure(_temp) {
      var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, conversionAccuracy = _ref.conversionAccuracy;
      var loc = this.loc.clone({
        locale: locale,
        numberingSystem: numberingSystem
      }), opts = {
        loc: loc
      };
      if (conversionAccuracy) {
        opts.conversionAccuracy = conversionAccuracy;
      }
      return clone$1(this, opts);
    };
    _proto.as = function as(unit) {
      return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
    };
    _proto.normalize = function normalize() {
      if (!this.isValid) return this;
      var vals = this.toObject();
      normalizeValues(this.matrix, vals);
      return clone$1(this, {
        values: vals
      }, true);
    };
    _proto.shiftTo = function shiftTo() {
      for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
        units[_key] = arguments[_key];
      }
      if (!this.isValid) return this;
      if (units.length === 0) {
        return this;
      }
      units = units.map((function(u) {
        return Duration.normalizeUnit(u);
      }));
      var built = {}, accumulated = {}, vals = this.toObject();
      var lastUnit;
      for (var _iterator2 = _createForOfIteratorHelperLoose(orderedUnits$1), _step2; !(_step2 = _iterator2()).done; ) {
        var k = _step2.value;
        if (units.indexOf(k) >= 0) {
          lastUnit = k;
          var own = 0;
          for (var ak in accumulated) {
            own += this.matrix[ak][k] * accumulated[ak];
            accumulated[ak] = 0;
          }
          if (isNumber(vals[k])) {
            own += vals[k];
          }
          var i = Math.trunc(own);
          built[k] = i;
          accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
          for (var down in vals) {
            if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
              convert(this.matrix, vals, down, built, k);
            }
          }
        } else if (isNumber(vals[k])) {
          accumulated[k] = vals[k];
        }
      }
      for (var key in accumulated) {
        if (accumulated[key] !== 0) {
          built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
        }
      }
      return clone$1(this, {
        values: built
      }, true).normalize();
    };
    _proto.negate = function negate() {
      if (!this.isValid) return this;
      var negated = {};
      for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
        var k = _Object$keys2[_i2];
        negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
      }
      return clone$1(this, {
        values: negated
      }, true);
    };
    _proto.equals = function equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }
      if (!this.loc.equals(other.loc)) {
        return false;
      }
      function eq(v1, v2) {
        if (v1 === undefined || v1 === 0) return v2 === undefined || v2 === 0;
        return v1 === v2;
      }
      for (var _iterator3 = _createForOfIteratorHelperLoose(orderedUnits$1), _step3; !(_step3 = _iterator3()).done; ) {
        var u = _step3.value;
        if (!eq(this.values[u], other.values[u])) {
          return false;
        }
      }
      return true;
    };
    _createClass(Duration, [ {
      key: "locale",
      get: function get() {
        return this.isValid ? this.loc.locale : null;
      }
    }, {
      key: "numberingSystem",
      get: function get() {
        return this.isValid ? this.loc.numberingSystem : null;
      }
    }, {
      key: "years",
      get: function get() {
        return this.isValid ? this.values.years || 0 : NaN;
      }
    }, {
      key: "quarters",
      get: function get() {
        return this.isValid ? this.values.quarters || 0 : NaN;
      }
    }, {
      key: "months",
      get: function get() {
        return this.isValid ? this.values.months || 0 : NaN;
      }
    }, {
      key: "weeks",
      get: function get() {
        return this.isValid ? this.values.weeks || 0 : NaN;
      }
    }, {
      key: "days",
      get: function get() {
        return this.isValid ? this.values.days || 0 : NaN;
      }
    }, {
      key: "hours",
      get: function get() {
        return this.isValid ? this.values.hours || 0 : NaN;
      }
    }, {
      key: "minutes",
      get: function get() {
        return this.isValid ? this.values.minutes || 0 : NaN;
      }
    }, {
      key: "seconds",
      get: function get() {
        return this.isValid ? this.values.seconds || 0 : NaN;
      }
    }, {
      key: "milliseconds",
      get: function get() {
        return this.isValid ? this.values.milliseconds || 0 : NaN;
      }
    }, {
      key: "isValid",
      get: function get() {
        return this.invalid === null;
      }
    }, {
      key: "invalidReason",
      get: function get() {
        return this.invalid ? this.invalid.reason : null;
      }
    }, {
      key: "invalidExplanation",
      get: function get() {
        return this.invalid ? this.invalid.explanation : null;
      }
    } ]);
    return Duration;
  }();
  var INVALID$1 = "Invalid Interval";
  function validateStartEnd(start, end) {
    if (!start || !start.isValid) {
      return Interval.invalid("missing or invalid start");
    } else if (!end || !end.isValid) {
      return Interval.invalid("missing or invalid end");
    } else if (end < start) {
      return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
    } else {
      return null;
    }
  }
  var Interval = function() {
    function Interval(config) {
      this.s = config.start;
      this.e = config.end;
      this.invalid = config.invalid || null;
      this.isLuxonInterval = true;
    }
    Interval.invalid = function invalid(reason, explanation) {
      if (explanation === void 0) {
        explanation = null;
      }
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
      }
      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (Settings.throwOnInvalid) {
        throw new InvalidIntervalError(invalid);
      } else {
        return new Interval({
          invalid: invalid
        });
      }
    };
    Interval.fromDateTimes = function fromDateTimes(start, end) {
      var builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
      var validateError = validateStartEnd(builtStart, builtEnd);
      if (validateError == null) {
        return new Interval({
          start: builtStart,
          end: builtEnd
        });
      } else {
        return validateError;
      }
    };
    Interval.after = function after(start, duration) {
      var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
      return Interval.fromDateTimes(dt, dt.plus(dur));
    };
    Interval.before = function before(end, duration) {
      var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
      return Interval.fromDateTimes(dt.minus(dur), dt);
    };
    Interval.fromISO = function fromISO(text, opts) {
      var _split = (text || "").split("/", 2), s = _split[0], e = _split[1];
      if (s && e) {
        var start, startIsValid;
        try {
          start = DateTime.fromISO(s, opts);
          startIsValid = start.isValid;
        } catch (e) {
          startIsValid = false;
        }
        var end, endIsValid;
        try {
          end = DateTime.fromISO(e, opts);
          endIsValid = end.isValid;
        } catch (e) {
          endIsValid = false;
        }
        if (startIsValid && endIsValid) {
          return Interval.fromDateTimes(start, end);
        }
        if (startIsValid) {
          var dur = Duration.fromISO(e, opts);
          if (dur.isValid) {
            return Interval.after(start, dur);
          }
        } else if (endIsValid) {
          var _dur = Duration.fromISO(s, opts);
          if (_dur.isValid) {
            return Interval.before(end, _dur);
          }
        }
      }
      return Interval.invalid("unparsable", 'the input "' + text + "\" can't be parsed as ISO 8601");
    };
    Interval.isInterval = function isInterval(o) {
      return o && o.isLuxonInterval || false;
    };
    var _proto = Interval.prototype;
    _proto.length = function length(unit) {
      if (unit === void 0) {
        unit = "milliseconds";
      }
      return this.isValid ? this.toDuration.apply(this, [ unit ]).get(unit) : NaN;
    };
    _proto.count = function count(unit) {
      if (unit === void 0) {
        unit = "milliseconds";
      }
      if (!this.isValid) return NaN;
      var start = this.start.startOf(unit), end = this.end.startOf(unit);
      return Math.floor(end.diff(start, unit).get(unit)) + 1;
    };
    _proto.hasSame = function hasSame(unit) {
      return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
    };
    _proto.isEmpty = function isEmpty() {
      return this.s.valueOf() === this.e.valueOf();
    };
    _proto.isAfter = function isAfter(dateTime) {
      if (!this.isValid) return false;
      return this.s > dateTime;
    };
    _proto.isBefore = function isBefore(dateTime) {
      if (!this.isValid) return false;
      return this.e <= dateTime;
    };
    _proto.contains = function contains(dateTime) {
      if (!this.isValid) return false;
      return this.s <= dateTime && this.e > dateTime;
    };
    _proto.set = function set(_temp) {
      var _ref = _temp === void 0 ? {} : _temp, start = _ref.start, end = _ref.end;
      if (!this.isValid) return this;
      return Interval.fromDateTimes(start || this.s, end || this.e);
    };
    _proto.splitAt = function splitAt() {
      var _this = this;
      if (!this.isValid) return [];
      for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
        dateTimes[_key] = arguments[_key];
      }
      var sorted = dateTimes.map(friendlyDateTime).filter((function(d) {
        return _this.contains(d);
      })).sort(), results = [];
      var s = this.s, i = 0;
      while (s < this.e) {
        var added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
        i += 1;
      }
      return results;
    };
    _proto.splitBy = function splitBy(duration) {
      var dur = Duration.fromDurationLike(duration);
      if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
        return [];
      }
      var s = this.s, idx = 1, next;
      var results = [];
      while (s < this.e) {
        var added = this.start.plus(dur.mapUnits((function(x) {
          return x * idx;
        })));
        next = +added > +this.e ? this.e : added;
        results.push(Interval.fromDateTimes(s, next));
        s = next;
        idx += 1;
      }
      return results;
    };
    _proto.divideEqually = function divideEqually(numberOfParts) {
      if (!this.isValid) return [];
      return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
    };
    _proto.overlaps = function overlaps(other) {
      return this.e > other.s && this.s < other.e;
    };
    _proto.abutsStart = function abutsStart(other) {
      if (!this.isValid) return false;
      return +this.e === +other.s;
    };
    _proto.abutsEnd = function abutsEnd(other) {
      if (!this.isValid) return false;
      return +other.e === +this.s;
    };
    _proto.engulfs = function engulfs(other) {
      if (!this.isValid) return false;
      return this.s <= other.s && this.e >= other.e;
    };
    _proto.equals = function equals(other) {
      if (!this.isValid || !other.isValid) {
        return false;
      }
      return this.s.equals(other.s) && this.e.equals(other.e);
    };
    _proto.intersection = function intersection(other) {
      if (!this.isValid) return this;
      var s = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
      if (s >= e) {
        return null;
      } else {
        return Interval.fromDateTimes(s, e);
      }
    };
    _proto.union = function union(other) {
      if (!this.isValid) return this;
      var s = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
      return Interval.fromDateTimes(s, e);
    };
    Interval.merge = function merge(intervals) {
      var _intervals$sort$reduc = intervals.sort((function(a, b) {
        return a.s - b.s;
      })).reduce((function(_ref2, item) {
        var sofar = _ref2[0], current = _ref2[1];
        if (!current) {
          return [ sofar, item ];
        } else if (current.overlaps(item) || current.abutsStart(item)) {
          return [ sofar, current.union(item) ];
        } else {
          return [ sofar.concat([ current ]), item ];
        }
      }), [ [], null ]), found = _intervals$sort$reduc[0], final = _intervals$sort$reduc[1];
      if (final) {
        found.push(final);
      }
      return found;
    };
    Interval.xor = function xor(intervals) {
      var _Array$prototype;
      var start = null, currentCount = 0;
      var results = [], ends = intervals.map((function(i) {
        return [ {
          time: i.s,
          type: "s"
        }, {
          time: i.e,
          type: "e"
        } ];
      })), flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends), arr = flattened.sort((function(a, b) {
        return a.time - b.time;
      }));
      for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done; ) {
        var i = _step.value;
        currentCount += i.type === "s" ? 1 : -1;
        if (currentCount === 1) {
          start = i.time;
        } else {
          if (start && +start !== +i.time) {
            results.push(Interval.fromDateTimes(start, i.time));
          }
          start = null;
        }
      }
      return Interval.merge(results);
    };
    _proto.difference = function difference() {
      var _this2 = this;
      for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        intervals[_key2] = arguments[_key2];
      }
      return Interval.xor([ this ].concat(intervals)).map((function(i) {
        return _this2.intersection(i);
      })).filter((function(i) {
        return i && !i.isEmpty();
      }));
    };
    _proto.toString = function toString() {
      if (!this.isValid) return INVALID$1;
      return "[" + this.s.toISO() + " – " + this.e.toISO() + ")";
    };
    _proto.toISO = function toISO(opts) {
      if (!this.isValid) return INVALID$1;
      return this.s.toISO(opts) + "/" + this.e.toISO(opts);
    };
    _proto.toISODate = function toISODate() {
      if (!this.isValid) return INVALID$1;
      return this.s.toISODate() + "/" + this.e.toISODate();
    };
    _proto.toISOTime = function toISOTime(opts) {
      if (!this.isValid) return INVALID$1;
      return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
    };
    _proto.toFormat = function toFormat(dateFormat, _temp2) {
      var _ref3 = _temp2 === void 0 ? {} : _temp2, _ref3$separator = _ref3.separator, separator = _ref3$separator === void 0 ? " – " : _ref3$separator;
      if (!this.isValid) return INVALID$1;
      return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
    };
    _proto.toDuration = function toDuration(unit, opts) {
      if (!this.isValid) {
        return Duration.invalid(this.invalidReason);
      }
      return this.e.diff(this.s, unit, opts);
    };
    _proto.mapEndpoints = function mapEndpoints(mapFn) {
      return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
    };
    _createClass(Interval, [ {
      key: "start",
      get: function get() {
        return this.isValid ? this.s : null;
      }
    }, {
      key: "end",
      get: function get() {
        return this.isValid ? this.e : null;
      }
    }, {
      key: "isValid",
      get: function get() {
        return this.invalidReason === null;
      }
    }, {
      key: "invalidReason",
      get: function get() {
        return this.invalid ? this.invalid.reason : null;
      }
    }, {
      key: "invalidExplanation",
      get: function get() {
        return this.invalid ? this.invalid.explanation : null;
      }
    } ]);
    return Interval;
  }();
  var Info = function() {
    function Info() {}
    Info.hasDST = function hasDST(zone) {
      if (zone === void 0) {
        zone = Settings.defaultZone;
      }
      var proto = DateTime.now().setZone(zone).set({
        month: 12
      });
      return !zone.isUniversal && proto.offset !== proto.set({
        month: 6
      }).offset;
    };
    Info.isValidIANAZone = function isValidIANAZone(zone) {
      return IANAZone.isValidZone(zone);
    };
    Info.normalizeZone = function normalizeZone$1(input) {
      return normalizeZone(input, Settings.defaultZone);
    };
    Info.months = function months(length, _temp) {
      if (length === void 0) {
        length = "long";
      }
      var _ref = _temp === void 0 ? {} : _temp, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? null : _ref$locale, _ref$numberingSystem = _ref.numberingSystem, numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem, _ref$locObj = _ref.locObj, locObj = _ref$locObj === void 0 ? null : _ref$locObj, _ref$outputCalendar = _ref.outputCalendar, outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;
      return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
    };
    Info.monthsFormat = function monthsFormat(length, _temp2) {
      if (length === void 0) {
        length = "long";
      }
      var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$locale = _ref2.locale, locale = _ref2$locale === void 0 ? null : _ref2$locale, _ref2$numberingSystem = _ref2.numberingSystem, numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem, _ref2$locObj = _ref2.locObj, locObj = _ref2$locObj === void 0 ? null : _ref2$locObj, _ref2$outputCalendar = _ref2.outputCalendar, outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;
      return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
    };
    Info.weekdays = function weekdays(length, _temp3) {
      if (length === void 0) {
        length = "long";
      }
      var _ref3 = _temp3 === void 0 ? {} : _temp3, _ref3$locale = _ref3.locale, locale = _ref3$locale === void 0 ? null : _ref3$locale, _ref3$numberingSystem = _ref3.numberingSystem, numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem, _ref3$locObj = _ref3.locObj, locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
      return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
    };
    Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
      if (length === void 0) {
        length = "long";
      }
      var _ref4 = _temp4 === void 0 ? {} : _temp4, _ref4$locale = _ref4.locale, locale = _ref4$locale === void 0 ? null : _ref4$locale, _ref4$numberingSystem = _ref4.numberingSystem, numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem, _ref4$locObj = _ref4.locObj, locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;
      return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
    };
    Info.meridiems = function meridiems(_temp5) {
      var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$locale = _ref5.locale, locale = _ref5$locale === void 0 ? null : _ref5$locale;
      return Locale.create(locale).meridiems();
    };
    Info.eras = function eras(length, _temp6) {
      if (length === void 0) {
        length = "short";
      }
      var _ref6 = _temp6 === void 0 ? {} : _temp6, _ref6$locale = _ref6.locale, locale = _ref6$locale === void 0 ? null : _ref6$locale;
      return Locale.create(locale, null, "gregory").eras(length);
    };
    Info.features = function features() {
      return {
        relative: hasRelative()
      };
    };
    return Info;
  }();
  function dayDiff(earlier, later) {
    var utcDayStart = function utcDayStart(dt) {
      return dt.toUTC(0, {
        keepLocalTime: true
      }).startOf("day").valueOf();
    }, ms = utcDayStart(later) - utcDayStart(earlier);
    return Math.floor(Duration.fromMillis(ms).as("days"));
  }
  function highOrderDiffs(cursor, later, units) {
    var differs = [ [ "years", function(a, b) {
      return b.year - a.year;
    } ], [ "quarters", function(a, b) {
      return b.quarter - a.quarter;
    } ], [ "months", function(a, b) {
      return b.month - a.month + (b.year - a.year) * 12;
    } ], [ "weeks", function(a, b) {
      var days = dayDiff(a, b);
      return (days - days % 7) / 7;
    } ], [ "days", dayDiff ] ];
    var results = {};
    var lowestOrder, highWater;
    for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
      var _differs$_i = _differs[_i], unit = _differs$_i[0], differ = _differs$_i[1];
      if (units.indexOf(unit) >= 0) {
        var _cursor$plus;
        lowestOrder = unit;
        var delta = differ(cursor, later);
        highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));
        if (highWater > later) {
          var _cursor$plus2;
          cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
          delta -= 1;
        } else {
          cursor = highWater;
        }
        results[unit] = delta;
      }
    }
    return [ cursor, results, highWater, lowestOrder ];
  }
  function _diff(earlier, later, units, opts) {
    var _highOrderDiffs = highOrderDiffs(earlier, later, units), cursor = _highOrderDiffs[0], results = _highOrderDiffs[1], highWater = _highOrderDiffs[2], lowestOrder = _highOrderDiffs[3];
    var remainingMillis = later - cursor;
    var lowerOrderUnits = units.filter((function(u) {
      return [ "hours", "minutes", "seconds", "milliseconds" ].indexOf(u) >= 0;
    }));
    if (lowerOrderUnits.length === 0) {
      if (highWater < later) {
        var _cursor$plus3;
        highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
      }
      if (highWater !== cursor) {
        results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
      }
    }
    var duration = Duration.fromObject(results, opts);
    if (lowerOrderUnits.length > 0) {
      var _Duration$fromMillis;
      return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
    } else {
      return duration;
    }
  }
  var numberingSystems = {
    arab: "[٠-٩]",
    arabext: "[۰-۹]",
    bali: "[᭐-᭙]",
    beng: "[০-৯]",
    deva: "[०-९]",
    fullwide: "[０-９]",
    gujr: "[૦-૯]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[០-៩]",
    knda: "[೦-೯]",
    laoo: "[໐-໙]",
    limb: "[᥆-᥏]",
    mlym: "[൦-൯]",
    mong: "[᠐-᠙]",
    mymr: "[၀-၉]",
    orya: "[୦-୯]",
    tamldec: "[௦-௯]",
    telu: "[౦-౯]",
    thai: "[๐-๙]",
    tibt: "[༠-༩]",
    latn: "\\d"
  };
  var numberingSystemsUTF16 = {
    arab: [ 1632, 1641 ],
    arabext: [ 1776, 1785 ],
    bali: [ 6992, 7001 ],
    beng: [ 2534, 2543 ],
    deva: [ 2406, 2415 ],
    fullwide: [ 65296, 65303 ],
    gujr: [ 2790, 2799 ],
    khmr: [ 6112, 6121 ],
    knda: [ 3302, 3311 ],
    laoo: [ 3792, 3801 ],
    limb: [ 6470, 6479 ],
    mlym: [ 3430, 3439 ],
    mong: [ 6160, 6169 ],
    mymr: [ 4160, 4169 ],
    orya: [ 2918, 2927 ],
    tamldec: [ 3046, 3055 ],
    telu: [ 3174, 3183 ],
    thai: [ 3664, 3673 ],
    tibt: [ 3872, 3881 ]
  };
  var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
  function parseDigits(str) {
    var value = parseInt(str, 10);
    if (isNaN(value)) {
      value = "";
      for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (str[i].search(numberingSystems.hanidec) !== -1) {
          value += hanidecChars.indexOf(str[i]);
        } else {
          for (var key in numberingSystemsUTF16) {
            var _numberingSystemsUTF = numberingSystemsUTF16[key], min = _numberingSystemsUTF[0], max = _numberingSystemsUTF[1];
            if (code >= min && code <= max) {
              value += code - min;
            }
          }
        }
      }
      return parseInt(value, 10);
    } else {
      return value;
    }
  }
  function digitRegex(_ref, append) {
    var numberingSystem = _ref.numberingSystem;
    if (append === void 0) {
      append = "";
    }
    return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
  }
  var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
  function intUnit(regex, post) {
    if (post === void 0) {
      post = function post(i) {
        return i;
      };
    }
    return {
      regex: regex,
      deser: function deser(_ref) {
        var s = _ref[0];
        return post(parseDigits(s));
      }
    };
  }
  var NBSP = String.fromCharCode(160);
  var spaceOrNBSP = "[ " + NBSP + "]";
  var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
  function fixListRegex(s) {
    return s.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
  }
  function stripInsensitivities(s) {
    return s.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
  }
  function oneOf(strings, startIndex) {
    if (strings === null) {
      return null;
    } else {
      return {
        regex: RegExp(strings.map(fixListRegex).join("|")),
        deser: function deser(_ref2) {
          var s = _ref2[0];
          return strings.findIndex((function(i) {
            return stripInsensitivities(s) === stripInsensitivities(i);
          })) + startIndex;
        }
      };
    }
  }
  function offset(regex, groups) {
    return {
      regex: regex,
      deser: function deser(_ref3) {
        var h = _ref3[1], m = _ref3[2];
        return signedOffset(h, m);
      },
      groups: groups
    };
  }
  function simple(regex) {
    return {
      regex: regex,
      deser: function deser(_ref4) {
        var s = _ref4[0];
        return s;
      }
    };
  }
  function escapeToken(value) {
    return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function unitForToken(token, loc) {
    var one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = function literal(t) {
      return {
        regex: RegExp(escapeToken(t.val)),
        deser: function deser(_ref5) {
          var s = _ref5[0];
          return s;
        },
        literal: true
      };
    }, unitate = function unitate(t) {
      if (token.literal) {
        return literal(t);
      }
      switch (t.val) {
       case "G":
        return oneOf(loc.eras("short", false), 0);

       case "GG":
        return oneOf(loc.eras("long", false), 0);

       case "y":
        return intUnit(oneToSix);

       case "yy":
        return intUnit(twoToFour, untruncateYear);

       case "yyyy":
        return intUnit(four);

       case "yyyyy":
        return intUnit(fourToSix);

       case "yyyyyy":
        return intUnit(six);

       case "M":
        return intUnit(oneOrTwo);

       case "MM":
        return intUnit(two);

       case "MMM":
        return oneOf(loc.months("short", true, false), 1);

       case "MMMM":
        return oneOf(loc.months("long", true, false), 1);

       case "L":
        return intUnit(oneOrTwo);

       case "LL":
        return intUnit(two);

       case "LLL":
        return oneOf(loc.months("short", false, false), 1);

       case "LLLL":
        return oneOf(loc.months("long", false, false), 1);

       case "d":
        return intUnit(oneOrTwo);

       case "dd":
        return intUnit(two);

       case "o":
        return intUnit(oneToThree);

       case "ooo":
        return intUnit(three);

       case "HH":
        return intUnit(two);

       case "H":
        return intUnit(oneOrTwo);

       case "hh":
        return intUnit(two);

       case "h":
        return intUnit(oneOrTwo);

       case "mm":
        return intUnit(two);

       case "m":
        return intUnit(oneOrTwo);

       case "q":
        return intUnit(oneOrTwo);

       case "qq":
        return intUnit(two);

       case "s":
        return intUnit(oneOrTwo);

       case "ss":
        return intUnit(two);

       case "S":
        return intUnit(oneToThree);

       case "SSS":
        return intUnit(three);

       case "u":
        return simple(oneToNine);

       case "uu":
        return simple(oneOrTwo);

       case "uuu":
        return intUnit(one);

       case "a":
        return oneOf(loc.meridiems(), 0);

       case "kkkk":
        return intUnit(four);

       case "kk":
        return intUnit(twoToFour, untruncateYear);

       case "W":
        return intUnit(oneOrTwo);

       case "WW":
        return intUnit(two);

       case "E":
       case "c":
        return intUnit(one);

       case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

       case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

       case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

       case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);

       case "Z":
       case "ZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);

       case "ZZZ":
        return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);

       case "z":
        return simple(/[a-z_+-/]{1,256}?/i);

       default:
        return literal(t);
      }
    };
    var unit = unitate(token) || {
      invalidReason: MISSING_FTP
    };
    unit.token = token;
    return unit;
  }
  var partTypeStyleToTokenVal = {
    year: {
      "2-digit": "yy",
      numeric: "yyyyy"
    },
    month: {
      numeric: "M",
      "2-digit": "MM",
      short: "MMM",
      long: "MMMM"
    },
    day: {
      numeric: "d",
      "2-digit": "dd"
    },
    weekday: {
      short: "EEE",
      long: "EEEE"
    },
    dayperiod: "a",
    dayPeriod: "a",
    hour: {
      numeric: "h",
      "2-digit": "hh"
    },
    minute: {
      numeric: "m",
      "2-digit": "mm"
    },
    second: {
      numeric: "s",
      "2-digit": "ss"
    }
  };
  function tokenForPart(part, locale, formatOpts) {
    var type = part.type, value = part.value;
    if (type === "literal") {
      return {
        literal: true,
        val: value
      };
    }
    var style = formatOpts[type];
    var val = partTypeStyleToTokenVal[type];
    if (typeof val === "object") {
      val = val[style];
    }
    if (val) {
      return {
        literal: false,
        val: val
      };
    }
    return undefined;
  }
  function buildRegex(units) {
    var re = units.map((function(u) {
      return u.regex;
    })).reduce((function(f, r) {
      return f + "(" + r.source + ")";
    }), "");
    return [ "^" + re + "$", units ];
  }
  function match(input, regex, handlers) {
    var matches = input.match(regex);
    if (matches) {
      var all = {};
      var matchIndex = 1;
      for (var i in handlers) {
        if (hasOwnProperty(handlers, i)) {
          var h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
          if (!h.literal && h.token) {
            all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
          }
          matchIndex += groups;
        }
      }
      return [ matches, all ];
    } else {
      return [ matches, {} ];
    }
  }
  function dateTimeFromMatches(matches) {
    var toField = function toField(token) {
      switch (token) {
       case "S":
        return "millisecond";

       case "s":
        return "second";

       case "m":
        return "minute";

       case "h":
       case "H":
        return "hour";

       case "d":
        return "day";

       case "o":
        return "ordinal";

       case "L":
       case "M":
        return "month";

       case "y":
        return "year";

       case "E":
       case "c":
        return "weekday";

       case "W":
        return "weekNumber";

       case "k":
        return "weekYear";

       case "q":
        return "quarter";

       default:
        return null;
      }
    };
    var zone = null;
    var specificOffset;
    if (!isUndefined(matches.z)) {
      zone = IANAZone.create(matches.z);
    }
    if (!isUndefined(matches.Z)) {
      if (!zone) {
        zone = new FixedOffsetZone(matches.Z);
      }
      specificOffset = matches.Z;
    }
    if (!isUndefined(matches.q)) {
      matches.M = (matches.q - 1) * 3 + 1;
    }
    if (!isUndefined(matches.h)) {
      if (matches.h < 12 && matches.a === 1) {
        matches.h += 12;
      } else if (matches.h === 12 && matches.a === 0) {
        matches.h = 0;
      }
    }
    if (matches.G === 0 && matches.y) {
      matches.y = -matches.y;
    }
    if (!isUndefined(matches.u)) {
      matches.S = parseMillis(matches.u);
    }
    var vals = Object.keys(matches).reduce((function(r, k) {
      var f = toField(k);
      if (f) {
        r[f] = matches[k];
      }
      return r;
    }), {});
    return [ vals, zone, specificOffset ];
  }
  var dummyDateTimeCache = null;
  function getDummyDateTime() {
    if (!dummyDateTimeCache) {
      dummyDateTimeCache = DateTime.fromMillis(1555555555555);
    }
    return dummyDateTimeCache;
  }
  function maybeExpandMacroToken(token, locale) {
    if (token.literal) {
      return token;
    }
    var formatOpts = Formatter.macroTokenToFormatOpts(token.val);
    if (!formatOpts) {
      return token;
    }
    var formatter = Formatter.create(locale, formatOpts);
    var parts = formatter.formatDateTimeParts(getDummyDateTime());
    var tokens = parts.map((function(p) {
      return tokenForPart(p, locale, formatOpts);
    }));
    if (tokens.includes(undefined)) {
      return token;
    }
    return tokens;
  }
  function expandMacroTokens(tokens, locale) {
    var _Array$prototype;
    return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map((function(t) {
      return maybeExpandMacroToken(t, locale);
    })));
  }
  function explainFromTokens(locale, input, format) {
    var tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map((function(t) {
      return unitForToken(t, locale);
    })), disqualifyingUnit = units.find((function(t) {
      return t.invalidReason;
    }));
    if (disqualifyingUnit) {
      return {
        input: input,
        tokens: tokens,
        invalidReason: disqualifyingUnit.invalidReason
      };
    } else {
      var _buildRegex = buildRegex(units), regexString = _buildRegex[0], handlers = _buildRegex[1], regex = RegExp(regexString, "i"), _match = match(input, regex, handlers), rawMatches = _match[0], matches = _match[1], _ref6 = matches ? dateTimeFromMatches(matches) : [ null, null, undefined ], result = _ref6[0], zone = _ref6[1], specificOffset = _ref6[2];
      if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
        throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
      }
      return {
        input: input,
        tokens: tokens,
        regex: regex,
        rawMatches: rawMatches,
        matches: matches,
        result: result,
        zone: zone,
        specificOffset: specificOffset
      };
    }
  }
  function parseFromTokens(locale, input, format) {
    var _explainFromTokens = explainFromTokens(locale, input, format), result = _explainFromTokens.result, zone = _explainFromTokens.zone, specificOffset = _explainFromTokens.specificOffset, invalidReason = _explainFromTokens.invalidReason;
    return [ result, zone, specificOffset, invalidReason ];
  }
  var nonLeapLadder = [ 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334 ], leapLadder = [ 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335 ];
  function unitOutOfRange(unit, value) {
    return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
  }
  function dayOfWeek(year, month, day) {
    var d = new Date(Date.UTC(year, month - 1, day));
    if (year < 100 && year >= 0) {
      d.setUTCFullYear(d.getUTCFullYear() - 1900);
    }
    var js = d.getUTCDay();
    return js === 0 ? 7 : js;
  }
  function computeOrdinal(year, month, day) {
    return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
  }
  function uncomputeOrdinal(year, ordinal) {
    var table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((function(i) {
      return i < ordinal;
    })), day = ordinal - table[month0];
    return {
      month: month0 + 1,
      day: day
    };
  }
  function gregorianToWeek(gregObj) {
    var year = gregObj.year, month = gregObj.month, day = gregObj.day, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
    var weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
    if (weekNumber < 1) {
      weekYear = year - 1;
      weekNumber = weeksInWeekYear(weekYear);
    } else if (weekNumber > weeksInWeekYear(year)) {
      weekYear = year + 1;
      weekNumber = 1;
    } else {
      weekYear = year;
    }
    return _extends({
      weekYear: weekYear,
      weekNumber: weekNumber,
      weekday: weekday
    }, timeObject(gregObj));
  }
  function weekToGregorian(weekData) {
    var weekYear = weekData.weekYear, weekNumber = weekData.weekNumber, weekday = weekData.weekday, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
    var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
    if (ordinal < 1) {
      year = weekYear - 1;
      ordinal += daysInYear(year);
    } else if (ordinal > yearInDays) {
      year = weekYear + 1;
      ordinal -= daysInYear(weekYear);
    } else {
      year = weekYear;
    }
    var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal.month, day = _uncomputeOrdinal.day;
    return _extends({
      year: year,
      month: month,
      day: day
    }, timeObject(weekData));
  }
  function gregorianToOrdinal(gregData) {
    var year = gregData.year, month = gregData.month, day = gregData.day;
    var ordinal = computeOrdinal(year, month, day);
    return _extends({
      year: year,
      ordinal: ordinal
    }, timeObject(gregData));
  }
  function ordinalToGregorian(ordinalData) {
    var year = ordinalData.year, ordinal = ordinalData.ordinal;
    var _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal2.month, day = _uncomputeOrdinal2.day;
    return _extends({
      year: year,
      month: month,
      day: day
    }, timeObject(ordinalData));
  }
  function hasInvalidWeekData(obj) {
    var validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
    if (!validYear) {
      return unitOutOfRange("weekYear", obj.weekYear);
    } else if (!validWeek) {
      return unitOutOfRange("week", obj.week);
    } else if (!validWeekday) {
      return unitOutOfRange("weekday", obj.weekday);
    } else return false;
  }
  function hasInvalidOrdinalData(obj) {
    var validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
    if (!validYear) {
      return unitOutOfRange("year", obj.year);
    } else if (!validOrdinal) {
      return unitOutOfRange("ordinal", obj.ordinal);
    } else return false;
  }
  function hasInvalidGregorianData(obj) {
    var validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
    if (!validYear) {
      return unitOutOfRange("year", obj.year);
    } else if (!validMonth) {
      return unitOutOfRange("month", obj.month);
    } else if (!validDay) {
      return unitOutOfRange("day", obj.day);
    } else return false;
  }
  function hasInvalidTimeData(obj) {
    var hour = obj.hour, minute = obj.minute, second = obj.second, millisecond = obj.millisecond;
    var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
    if (!validHour) {
      return unitOutOfRange("hour", hour);
    } else if (!validMinute) {
      return unitOutOfRange("minute", minute);
    } else if (!validSecond) {
      return unitOutOfRange("second", second);
    } else if (!validMillisecond) {
      return unitOutOfRange("millisecond", millisecond);
    } else return false;
  }
  var INVALID = "Invalid DateTime";
  var MAX_DATE = 864e13;
  function unsupportedZone(zone) {
    return new Invalid("unsupported zone", 'the zone "' + zone.name + '" is not supported');
  }
  function possiblyCachedWeekData(dt) {
    if (dt.weekData === null) {
      dt.weekData = gregorianToWeek(dt.c);
    }
    return dt.weekData;
  }
  function clone(inst, alts) {
    var current = {
      ts: inst.ts,
      zone: inst.zone,
      c: inst.c,
      o: inst.o,
      loc: inst.loc,
      invalid: inst.invalid
    };
    return new DateTime(_extends({}, current, alts, {
      old: current
    }));
  }
  function fixOffset(localTS, o, tz) {
    var utcGuess = localTS - o * 60 * 1e3;
    var o2 = tz.offset(utcGuess);
    if (o === o2) {
      return [ utcGuess, o ];
    }
    utcGuess -= (o2 - o) * 60 * 1e3;
    var o3 = tz.offset(utcGuess);
    if (o2 === o3) {
      return [ utcGuess, o2 ];
    }
    return [ localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3) ];
  }
  function tsToObj(ts, offset) {
    ts += offset * 60 * 1e3;
    var d = new Date(ts);
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      day: d.getUTCDate(),
      hour: d.getUTCHours(),
      minute: d.getUTCMinutes(),
      second: d.getUTCSeconds(),
      millisecond: d.getUTCMilliseconds()
    };
  }
  function objToTS(obj, offset, zone) {
    return fixOffset(objToLocalTS(obj), offset, zone);
  }
  function adjustTime(inst, dur) {
    var oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = _extends({}, inst.c, {
      year: year,
      month: month,
      day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
    }), millisToAdd = Duration.fromObject({
      years: dur.years - Math.trunc(dur.years),
      quarters: dur.quarters - Math.trunc(dur.quarters),
      months: dur.months - Math.trunc(dur.months),
      weeks: dur.weeks - Math.trunc(dur.weeks),
      days: dur.days - Math.trunc(dur.days),
      hours: dur.hours,
      minutes: dur.minutes,
      seconds: dur.seconds,
      milliseconds: dur.milliseconds
    }).as("milliseconds"), localTS = objToLocalTS(c);
    var _fixOffset = fixOffset(localTS, oPre, inst.zone), ts = _fixOffset[0], o = _fixOffset[1];
    if (millisToAdd !== 0) {
      ts += millisToAdd;
      o = inst.zone.offset(ts);
    }
    return {
      ts: ts,
      o: o
    };
  }
  function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
    var setZone = opts.setZone, zone = opts.zone;
    if (parsed && Object.keys(parsed).length !== 0) {
      var interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, _extends({}, opts, {
        zone: interpretationZone,
        specificOffset: specificOffset
      }));
      return setZone ? inst : inst.setZone(zone);
    } else {
      return DateTime.invalid(new Invalid("unparsable", 'the input "' + text + "\" can't be parsed as " + format));
    }
  }
  function toTechFormat(dt, format, allowZ) {
    if (allowZ === void 0) {
      allowZ = true;
    }
    return dt.isValid ? Formatter.create(Locale.create("en-US"), {
      allowZ: allowZ,
      forceSimple: true
    }).formatDateTimeFromString(dt, format) : null;
  }
  function _toISODate(o, extended) {
    var longFormat = o.c.year > 9999 || o.c.year < 0;
    var c = "";
    if (longFormat && o.c.year >= 0) c += "+";
    c += padStart(o.c.year, longFormat ? 6 : 4);
    if (extended) {
      c += "-";
      c += padStart(o.c.month);
      c += "-";
      c += padStart(o.c.day);
    } else {
      c += padStart(o.c.month);
      c += padStart(o.c.day);
    }
    return c;
  }
  function _toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
    var c = padStart(o.c.hour);
    if (extended) {
      c += ":";
      c += padStart(o.c.minute);
      if (o.c.second !== 0 || !suppressSeconds) {
        c += ":";
      }
    } else {
      c += padStart(o.c.minute);
    }
    if (o.c.second !== 0 || !suppressSeconds) {
      c += padStart(o.c.second);
      if (o.c.millisecond !== 0 || !suppressMilliseconds) {
        c += ".";
        c += padStart(o.c.millisecond, 3);
      }
    }
    if (includeOffset) {
      if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
        c += "Z";
      } else if (o.o < 0) {
        c += "-";
        c += padStart(Math.trunc(-o.o / 60));
        c += ":";
        c += padStart(Math.trunc(-o.o % 60));
      } else {
        c += "+";
        c += padStart(Math.trunc(o.o / 60));
        c += ":";
        c += padStart(Math.trunc(o.o % 60));
      }
    }
    if (extendedZone) {
      c += "[" + o.zone.ianaName + "]";
    }
    return c;
  }
  var defaultUnitValues = {
    month: 1,
    day: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }, defaultWeekUnitValues = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  }, defaultOrdinalUnitValues = {
    ordinal: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  var orderedUnits = [ "year", "month", "day", "hour", "minute", "second", "millisecond" ], orderedWeekUnits = [ "weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond" ], orderedOrdinalUnits = [ "year", "ordinal", "hour", "minute", "second", "millisecond" ];
  function normalizeUnit(unit) {
    var normalized = {
      year: "year",
      years: "year",
      month: "month",
      months: "month",
      day: "day",
      days: "day",
      hour: "hour",
      hours: "hour",
      minute: "minute",
      minutes: "minute",
      quarter: "quarter",
      quarters: "quarter",
      second: "second",
      seconds: "second",
      millisecond: "millisecond",
      milliseconds: "millisecond",
      weekday: "weekday",
      weekdays: "weekday",
      weeknumber: "weekNumber",
      weeksnumber: "weekNumber",
      weeknumbers: "weekNumber",
      weekyear: "weekYear",
      weekyears: "weekYear",
      ordinal: "ordinal"
    }[unit.toLowerCase()];
    if (!normalized) throw new InvalidUnitError(unit);
    return normalized;
  }
  function quickDT(obj, opts) {
    var zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
    var ts, o;
    if (!isUndefined(obj.year)) {
      for (var _iterator = _createForOfIteratorHelperLoose(orderedUnits), _step; !(_step = _iterator()).done; ) {
        var u = _step.value;
        if (isUndefined(obj[u])) {
          obj[u] = defaultUnitValues[u];
        }
      }
      var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
      if (invalid) {
        return DateTime.invalid(invalid);
      }
      var offsetProvis = zone.offset(tsNow);
      var _objToTS = objToTS(obj, offsetProvis, zone);
      ts = _objToTS[0];
      o = _objToTS[1];
    } else {
      ts = tsNow;
    }
    return new DateTime({
      ts: ts,
      zone: zone,
      loc: loc,
      o: o
    });
  }
  function diffRelative(start, end, opts) {
    var round = isUndefined(opts.round) ? true : opts.round, format = function format(c, unit) {
      c = roundTo(c, round || opts.calendary ? 0 : 2, true);
      var formatter = end.loc.clone(opts).relFormatter(opts);
      return formatter.format(c, unit);
    }, differ = function differ(unit) {
      if (opts.calendary) {
        if (!end.hasSame(start, unit)) {
          return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
        } else return 0;
      } else {
        return end.diff(start, unit).get(unit);
      }
    };
    if (opts.unit) {
      return format(differ(opts.unit), opts.unit);
    }
    for (var _iterator2 = _createForOfIteratorHelperLoose(opts.units), _step2; !(_step2 = _iterator2()).done; ) {
      var unit = _step2.value;
      var count = differ(unit);
      if (Math.abs(count) >= 1) {
        return format(count, unit);
      }
    }
    return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
  }
  function lastOpts(argList) {
    var opts = {}, args;
    if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
      opts = argList[argList.length - 1];
      args = Array.from(argList).slice(0, argList.length - 1);
    } else {
      args = Array.from(argList);
    }
    return [ opts, args ];
  }
  var DateTime = function() {
    function DateTime(config) {
      var zone = config.zone || Settings.defaultZone;
      var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
      this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
      var c = null, o = null;
      if (!invalid) {
        var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
        if (unchanged) {
          var _ref = [ config.old.c, config.old.o ];
          c = _ref[0];
          o = _ref[1];
        } else {
          var ot = zone.offset(this.ts);
          c = tsToObj(this.ts, ot);
          invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
          c = invalid ? null : c;
          o = invalid ? null : ot;
        }
      }
      this._zone = zone;
      this.loc = config.loc || Locale.create();
      this.invalid = invalid;
      this.weekData = null;
      this.c = c;
      this.o = o;
      this.isLuxonDateTime = true;
    }
    DateTime.now = function now() {
      return new DateTime({});
    };
    DateTime.local = function local() {
      var _lastOpts = lastOpts(arguments), opts = _lastOpts[0], args = _lastOpts[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, opts);
    };
    DateTime.utc = function utc() {
      var _lastOpts2 = lastOpts(arguments), opts = _lastOpts2[0], args = _lastOpts2[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
      opts.zone = FixedOffsetZone.utcInstance;
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, opts);
    };
    DateTime.fromJSDate = function fromJSDate(date, options) {
      if (options === void 0) {
        options = {};
      }
      var ts = isDate(date) ? date.valueOf() : NaN;
      if (Number.isNaN(ts)) {
        return DateTime.invalid("invalid input");
      }
      var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
      if (!zoneToUse.isValid) {
        return DateTime.invalid(unsupportedZone(zoneToUse));
      }
      return new DateTime({
        ts: ts,
        zone: zoneToUse,
        loc: Locale.fromObject(options)
      });
    };
    DateTime.fromMillis = function fromMillis(milliseconds, options) {
      if (options === void 0) {
        options = {};
      }
      if (!isNumber(milliseconds)) {
        throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
      } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
        return DateTime.invalid("Timestamp out of range");
      } else {
        return new DateTime({
          ts: milliseconds,
          zone: normalizeZone(options.zone, Settings.defaultZone),
          loc: Locale.fromObject(options)
        });
      }
    };
    DateTime.fromSeconds = function fromSeconds(seconds, options) {
      if (options === void 0) {
        options = {};
      }
      if (!isNumber(seconds)) {
        throw new InvalidArgumentError("fromSeconds requires a numerical input");
      } else {
        return new DateTime({
          ts: seconds * 1e3,
          zone: normalizeZone(options.zone, Settings.defaultZone),
          loc: Locale.fromObject(options)
        });
      }
    };
    DateTime.fromObject = function fromObject(obj, opts) {
      if (opts === void 0) {
        opts = {};
      }
      obj = obj || {};
      var zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
      if (!zoneToUse.isValid) {
        return DateTime.invalid(unsupportedZone(zoneToUse));
      }
      var tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      }
      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }
      var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
      var units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
      if (useWeekData) {
        units = orderedWeekUnits;
        defaultValues = defaultWeekUnitValues;
        objNow = gregorianToWeek(objNow);
      } else if (containsOrdinal) {
        units = orderedOrdinalUnits;
        defaultValues = defaultOrdinalUnitValues;
        objNow = gregorianToOrdinal(objNow);
      } else {
        units = orderedUnits;
        defaultValues = defaultUnitValues;
      }
      var foundFirst = false;
      for (var _iterator3 = _createForOfIteratorHelperLoose(units), _step3; !(_step3 = _iterator3()).done; ) {
        var u = _step3.value;
        var v = normalized[u];
        if (!isUndefined(v)) {
          foundFirst = true;
        } else if (foundFirst) {
          normalized[u] = defaultValues[u];
        } else {
          normalized[u] = objNow[u];
        }
      }
      var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
      if (invalid) {
        return DateTime.invalid(invalid);
      }
      var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse), tsFinal = _objToTS2[0], offsetFinal = _objToTS2[1], inst = new DateTime({
        ts: tsFinal,
        zone: zoneToUse,
        o: offsetFinal,
        loc: loc
      });
      if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
        return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
      }
      return inst;
    };
    DateTime.fromISO = function fromISO(text, opts) {
      if (opts === void 0) {
        opts = {};
      }
      var _parseISODate = parseISODate(text), vals = _parseISODate[0], parsedZone = _parseISODate[1];
      return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
    };
    DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
      if (opts === void 0) {
        opts = {};
      }
      var _parseRFC2822Date = parseRFC2822Date(text), vals = _parseRFC2822Date[0], parsedZone = _parseRFC2822Date[1];
      return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
    };
    DateTime.fromHTTP = function fromHTTP(text, opts) {
      if (opts === void 0) {
        opts = {};
      }
      var _parseHTTPDate = parseHTTPDate(text), vals = _parseHTTPDate[0], parsedZone = _parseHTTPDate[1];
      return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
    };
    DateTime.fromFormat = function fromFormat(text, fmt, opts) {
      if (opts === void 0) {
        opts = {};
      }
      if (isUndefined(text) || isUndefined(fmt)) {
        throw new InvalidArgumentError("fromFormat requires an input string and a format");
      }
      var _opts = opts, _opts$locale = _opts.locale, locale = _opts$locale === void 0 ? null : _opts$locale, _opts$numberingSystem = _opts.numberingSystem, numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem, localeToUse = Locale.fromOpts({
        locale: locale,
        numberingSystem: numberingSystem,
        defaultToEN: true
      }), _parseFromTokens = parseFromTokens(localeToUse, text, fmt), vals = _parseFromTokens[0], parsedZone = _parseFromTokens[1], specificOffset = _parseFromTokens[2], invalid = _parseFromTokens[3];
      if (invalid) {
        return DateTime.invalid(invalid);
      } else {
        return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text, specificOffset);
      }
    };
    DateTime.fromString = function fromString(text, fmt, opts) {
      if (opts === void 0) {
        opts = {};
      }
      return DateTime.fromFormat(text, fmt, opts);
    };
    DateTime.fromSQL = function fromSQL(text, opts) {
      if (opts === void 0) {
        opts = {};
      }
      var _parseSQL = parseSQL(text), vals = _parseSQL[0], parsedZone = _parseSQL[1];
      return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
    };
    DateTime.invalid = function invalid(reason, explanation) {
      if (explanation === void 0) {
        explanation = null;
      }
      if (!reason) {
        throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
      }
      var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
      if (Settings.throwOnInvalid) {
        throw new InvalidDateTimeError(invalid);
      } else {
        return new DateTime({
          invalid: invalid
        });
      }
    };
    DateTime.isDateTime = function isDateTime(o) {
      return o && o.isLuxonDateTime || false;
    };
    var _proto = DateTime.prototype;
    _proto.get = function get(unit) {
      return this[unit];
    };
    _proto.resolvedLocaleOptions = function resolvedLocaleOptions(opts) {
      if (opts === void 0) {
        opts = {};
      }
      var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this), locale = _Formatter$create$res.locale, numberingSystem = _Formatter$create$res.numberingSystem, calendar = _Formatter$create$res.calendar;
      return {
        locale: locale,
        numberingSystem: numberingSystem,
        outputCalendar: calendar
      };
    };
    _proto.toUTC = function toUTC(offset, opts) {
      if (offset === void 0) {
        offset = 0;
      }
      if (opts === void 0) {
        opts = {};
      }
      return this.setZone(FixedOffsetZone.instance(offset), opts);
    };
    _proto.toLocal = function toLocal() {
      return this.setZone(Settings.defaultZone);
    };
    _proto.setZone = function setZone(zone, _temp) {
      var _ref2 = _temp === void 0 ? {} : _temp, _ref2$keepLocalTime = _ref2.keepLocalTime, keepLocalTime = _ref2$keepLocalTime === void 0 ? false : _ref2$keepLocalTime, _ref2$keepCalendarTim = _ref2.keepCalendarTime, keepCalendarTime = _ref2$keepCalendarTim === void 0 ? false : _ref2$keepCalendarTim;
      zone = normalizeZone(zone, Settings.defaultZone);
      if (zone.equals(this.zone)) {
        return this;
      } else if (!zone.isValid) {
        return DateTime.invalid(unsupportedZone(zone));
      } else {
        var newTS = this.ts;
        if (keepLocalTime || keepCalendarTime) {
          var offsetGuess = zone.offset(this.ts);
          var asObj = this.toObject();
          var _objToTS3 = objToTS(asObj, offsetGuess, zone);
          newTS = _objToTS3[0];
        }
        return clone(this, {
          ts: newTS,
          zone: zone
        });
      }
    };
    _proto.reconfigure = function reconfigure(_temp2) {
      var _ref3 = _temp2 === void 0 ? {} : _temp2, locale = _ref3.locale, numberingSystem = _ref3.numberingSystem, outputCalendar = _ref3.outputCalendar;
      var loc = this.loc.clone({
        locale: locale,
        numberingSystem: numberingSystem,
        outputCalendar: outputCalendar
      });
      return clone(this, {
        loc: loc
      });
    };
    _proto.setLocale = function setLocale(locale) {
      return this.reconfigure({
        locale: locale
      });
    };
    _proto.set = function set(values) {
      if (!this.isValid) return this;
      var normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
      if ((containsGregor || containsOrdinal) && definiteWeekDef) {
        throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
      }
      if (containsGregorMD && containsOrdinal) {
        throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
      }
      var mixed;
      if (settingWeekStuff) {
        mixed = weekToGregorian(_extends({}, gregorianToWeek(this.c), normalized));
      } else if (!isUndefined(normalized.ordinal)) {
        mixed = ordinalToGregorian(_extends({}, gregorianToOrdinal(this.c), normalized));
      } else {
        mixed = _extends({}, this.toObject(), normalized);
        if (isUndefined(normalized.day)) {
          mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
        }
      }
      var _objToTS4 = objToTS(mixed, this.o, this.zone), ts = _objToTS4[0], o = _objToTS4[1];
      return clone(this, {
        ts: ts,
        o: o
      });
    };
    _proto.plus = function plus(duration) {
      if (!this.isValid) return this;
      var dur = Duration.fromDurationLike(duration);
      return clone(this, adjustTime(this, dur));
    };
    _proto.minus = function minus(duration) {
      if (!this.isValid) return this;
      var dur = Duration.fromDurationLike(duration).negate();
      return clone(this, adjustTime(this, dur));
    };
    _proto.startOf = function startOf(unit) {
      if (!this.isValid) return this;
      var o = {}, normalizedUnit = Duration.normalizeUnit(unit);
      switch (normalizedUnit) {
       case "years":
        o.month = 1;

       case "quarters":
       case "months":
        o.day = 1;

       case "weeks":
       case "days":
        o.hour = 0;

       case "hours":
        o.minute = 0;

       case "minutes":
        o.second = 0;

       case "seconds":
        o.millisecond = 0;
        break;
      }
      if (normalizedUnit === "weeks") {
        o.weekday = 1;
      }
      if (normalizedUnit === "quarters") {
        var q = Math.ceil(this.month / 3);
        o.month = (q - 1) * 3 + 1;
      }
      return this.set(o);
    };
    _proto.endOf = function endOf(unit) {
      var _this$plus;
      return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
    };
    _proto.toFormat = function toFormat(fmt, opts) {
      if (opts === void 0) {
        opts = {};
      }
      return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
    };
    _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
      if (formatOpts === void 0) {
        formatOpts = DATE_SHORT;
      }
      if (opts === void 0) {
        opts = {};
      }
      return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
    };
    _proto.toLocaleParts = function toLocaleParts(opts) {
      if (opts === void 0) {
        opts = {};
      }
      return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
    };
    _proto.toISO = function toISO(_temp3) {
      var _ref4 = _temp3 === void 0 ? {} : _temp3, _ref4$format = _ref4.format, format = _ref4$format === void 0 ? "extended" : _ref4$format, _ref4$suppressSeconds = _ref4.suppressSeconds, suppressSeconds = _ref4$suppressSeconds === void 0 ? false : _ref4$suppressSeconds, _ref4$suppressMillise = _ref4.suppressMilliseconds, suppressMilliseconds = _ref4$suppressMillise === void 0 ? false : _ref4$suppressMillise, _ref4$includeOffset = _ref4.includeOffset, includeOffset = _ref4$includeOffset === void 0 ? true : _ref4$includeOffset, _ref4$extendedZone = _ref4.extendedZone, extendedZone = _ref4$extendedZone === void 0 ? false : _ref4$extendedZone;
      if (!this.isValid) {
        return null;
      }
      var ext = format === "extended";
      var c = _toISODate(this, ext);
      c += "T";
      c += _toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
      return c;
    };
    _proto.toISODate = function toISODate(_temp4) {
      var _ref5 = _temp4 === void 0 ? {} : _temp4, _ref5$format = _ref5.format, format = _ref5$format === void 0 ? "extended" : _ref5$format;
      if (!this.isValid) {
        return null;
      }
      return _toISODate(this, format === "extended");
    };
    _proto.toISOWeekDate = function toISOWeekDate() {
      return toTechFormat(this, "kkkk-'W'WW-c");
    };
    _proto.toISOTime = function toISOTime(_temp5) {
      var _ref6 = _temp5 === void 0 ? {} : _temp5, _ref6$suppressMillise = _ref6.suppressMilliseconds, suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise, _ref6$suppressSeconds = _ref6.suppressSeconds, suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds, _ref6$includeOffset = _ref6.includeOffset, includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset, _ref6$includePrefix = _ref6.includePrefix, includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix, _ref6$extendedZone = _ref6.extendedZone, extendedZone = _ref6$extendedZone === void 0 ? false : _ref6$extendedZone, _ref6$format = _ref6.format, format = _ref6$format === void 0 ? "extended" : _ref6$format;
      if (!this.isValid) {
        return null;
      }
      var c = includePrefix ? "T" : "";
      return c + _toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
    };
    _proto.toRFC2822 = function toRFC2822() {
      return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
    };
    _proto.toHTTP = function toHTTP() {
      return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
    };
    _proto.toSQLDate = function toSQLDate() {
      if (!this.isValid) {
        return null;
      }
      return _toISODate(this, true);
    };
    _proto.toSQLTime = function toSQLTime(_temp6) {
      var _ref7 = _temp6 === void 0 ? {} : _temp6, _ref7$includeOffset = _ref7.includeOffset, includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset, _ref7$includeZone = _ref7.includeZone, includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone, _ref7$includeOffsetSp = _ref7.includeOffsetSpace, includeOffsetSpace = _ref7$includeOffsetSp === void 0 ? true : _ref7$includeOffsetSp;
      var fmt = "HH:mm:ss.SSS";
      if (includeZone || includeOffset) {
        if (includeOffsetSpace) {
          fmt += " ";
        }
        if (includeZone) {
          fmt += "z";
        } else if (includeOffset) {
          fmt += "ZZ";
        }
      }
      return toTechFormat(this, fmt, true);
    };
    _proto.toSQL = function toSQL(opts) {
      if (opts === void 0) {
        opts = {};
      }
      if (!this.isValid) {
        return null;
      }
      return this.toSQLDate() + " " + this.toSQLTime(opts);
    };
    _proto.toString = function toString() {
      return this.isValid ? this.toISO() : INVALID;
    };
    _proto.valueOf = function valueOf() {
      return this.toMillis();
    };
    _proto.toMillis = function toMillis() {
      return this.isValid ? this.ts : NaN;
    };
    _proto.toSeconds = function toSeconds() {
      return this.isValid ? this.ts / 1e3 : NaN;
    };
    _proto.toUnixInteger = function toUnixInteger() {
      return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
    };
    _proto.toJSON = function toJSON() {
      return this.toISO();
    };
    _proto.toBSON = function toBSON() {
      return this.toJSDate();
    };
    _proto.toObject = function toObject(opts) {
      if (opts === void 0) {
        opts = {};
      }
      if (!this.isValid) return {};
      var base = _extends({}, this.c);
      if (opts.includeConfig) {
        base.outputCalendar = this.outputCalendar;
        base.numberingSystem = this.loc.numberingSystem;
        base.locale = this.loc.locale;
      }
      return base;
    };
    _proto.toJSDate = function toJSDate() {
      return new Date(this.isValid ? this.ts : NaN);
    };
    _proto.diff = function diff(otherDateTime, unit, opts) {
      if (unit === void 0) {
        unit = "milliseconds";
      }
      if (opts === void 0) {
        opts = {};
      }
      if (!this.isValid || !otherDateTime.isValid) {
        return Duration.invalid("created by diffing an invalid DateTime");
      }
      var durOpts = _extends({
        locale: this.locale,
        numberingSystem: this.numberingSystem
      }, opts);
      var units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = _diff(earlier, later, units, durOpts);
      return otherIsLater ? diffed.negate() : diffed;
    };
    _proto.diffNow = function diffNow(unit, opts) {
      if (unit === void 0) {
        unit = "milliseconds";
      }
      if (opts === void 0) {
        opts = {};
      }
      return this.diff(DateTime.now(), unit, opts);
    };
    _proto.until = function until(otherDateTime) {
      return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
    };
    _proto.hasSame = function hasSame(otherDateTime, unit) {
      if (!this.isValid) return false;
      var inputMs = otherDateTime.valueOf();
      var adjustedToZone = this.setZone(otherDateTime.zone, {
        keepLocalTime: true
      });
      return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
    };
    _proto.equals = function equals(other) {
      return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
    };
    _proto.toRelative = function toRelative(options) {
      if (options === void 0) {
        options = {};
      }
      if (!this.isValid) return null;
      var base = options.base || DateTime.fromObject({}, {
        zone: this.zone
      }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
      var units = [ "years", "months", "days", "hours", "minutes", "seconds" ];
      var unit = options.unit;
      if (Array.isArray(options.unit)) {
        units = options.unit;
        unit = undefined;
      }
      return diffRelative(base, this.plus(padding), _extends({}, options, {
        numeric: "always",
        units: units,
        unit: unit
      }));
    };
    _proto.toRelativeCalendar = function toRelativeCalendar(options) {
      if (options === void 0) {
        options = {};
      }
      if (!this.isValid) return null;
      return diffRelative(options.base || DateTime.fromObject({}, {
        zone: this.zone
      }), this, _extends({}, options, {
        numeric: "auto",
        units: [ "years", "months", "days" ],
        calendary: true
      }));
    };
    DateTime.min = function min() {
      for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
        dateTimes[_key] = arguments[_key];
      }
      if (!dateTimes.every(DateTime.isDateTime)) {
        throw new InvalidArgumentError("min requires all arguments be DateTimes");
      }
      return bestBy(dateTimes, (function(i) {
        return i.valueOf();
      }), Math.min);
    };
    DateTime.max = function max() {
      for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        dateTimes[_key2] = arguments[_key2];
      }
      if (!dateTimes.every(DateTime.isDateTime)) {
        throw new InvalidArgumentError("max requires all arguments be DateTimes");
      }
      return bestBy(dateTimes, (function(i) {
        return i.valueOf();
      }), Math.max);
    };
    DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, _options$locale = _options.locale, locale = _options$locale === void 0 ? null : _options$locale, _options$numberingSys = _options.numberingSystem, numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys, localeToUse = Locale.fromOpts({
        locale: locale,
        numberingSystem: numberingSystem,
        defaultToEN: true
      });
      return explainFromTokens(localeToUse, text, fmt);
    };
    DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
      if (options === void 0) {
        options = {};
      }
      return DateTime.fromFormatExplain(text, fmt, options);
    };
    _createClass(DateTime, [ {
      key: "isValid",
      get: function get() {
        return this.invalid === null;
      }
    }, {
      key: "invalidReason",
      get: function get() {
        return this.invalid ? this.invalid.reason : null;
      }
    }, {
      key: "invalidExplanation",
      get: function get() {
        return this.invalid ? this.invalid.explanation : null;
      }
    }, {
      key: "locale",
      get: function get() {
        return this.isValid ? this.loc.locale : null;
      }
    }, {
      key: "numberingSystem",
      get: function get() {
        return this.isValid ? this.loc.numberingSystem : null;
      }
    }, {
      key: "outputCalendar",
      get: function get() {
        return this.isValid ? this.loc.outputCalendar : null;
      }
    }, {
      key: "zone",
      get: function get() {
        return this._zone;
      }
    }, {
      key: "zoneName",
      get: function get() {
        return this.isValid ? this.zone.name : null;
      }
    }, {
      key: "year",
      get: function get() {
        return this.isValid ? this.c.year : NaN;
      }
    }, {
      key: "quarter",
      get: function get() {
        return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
      }
    }, {
      key: "month",
      get: function get() {
        return this.isValid ? this.c.month : NaN;
      }
    }, {
      key: "day",
      get: function get() {
        return this.isValid ? this.c.day : NaN;
      }
    }, {
      key: "hour",
      get: function get() {
        return this.isValid ? this.c.hour : NaN;
      }
    }, {
      key: "minute",
      get: function get() {
        return this.isValid ? this.c.minute : NaN;
      }
    }, {
      key: "second",
      get: function get() {
        return this.isValid ? this.c.second : NaN;
      }
    }, {
      key: "millisecond",
      get: function get() {
        return this.isValid ? this.c.millisecond : NaN;
      }
    }, {
      key: "weekYear",
      get: function get() {
        return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
      }
    }, {
      key: "weekNumber",
      get: function get() {
        return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
      }
    }, {
      key: "weekday",
      get: function get() {
        return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
      }
    }, {
      key: "ordinal",
      get: function get() {
        return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
      }
    }, {
      key: "monthShort",
      get: function get() {
        return this.isValid ? Info.months("short", {
          locObj: this.loc
        })[this.month - 1] : null;
      }
    }, {
      key: "monthLong",
      get: function get() {
        return this.isValid ? Info.months("long", {
          locObj: this.loc
        })[this.month - 1] : null;
      }
    }, {
      key: "weekdayShort",
      get: function get() {
        return this.isValid ? Info.weekdays("short", {
          locObj: this.loc
        })[this.weekday - 1] : null;
      }
    }, {
      key: "weekdayLong",
      get: function get() {
        return this.isValid ? Info.weekdays("long", {
          locObj: this.loc
        })[this.weekday - 1] : null;
      }
    }, {
      key: "offset",
      get: function get() {
        return this.isValid ? +this.o : NaN;
      }
    }, {
      key: "offsetNameShort",
      get: function get() {
        if (this.isValid) {
          return this.zone.offsetName(this.ts, {
            format: "short",
            locale: this.locale
          });
        } else {
          return null;
        }
      }
    }, {
      key: "offsetNameLong",
      get: function get() {
        if (this.isValid) {
          return this.zone.offsetName(this.ts, {
            format: "long",
            locale: this.locale
          });
        } else {
          return null;
        }
      }
    }, {
      key: "isOffsetFixed",
      get: function get() {
        return this.isValid ? this.zone.isUniversal : null;
      }
    }, {
      key: "isInDST",
      get: function get() {
        if (this.isOffsetFixed) {
          return false;
        } else {
          return this.offset > this.set({
            month: 1,
            day: 1
          }).offset || this.offset > this.set({
            month: 5
          }).offset;
        }
      }
    }, {
      key: "isInLeapYear",
      get: function get() {
        return isLeapYear(this.year);
      }
    }, {
      key: "daysInMonth",
      get: function get() {
        return daysInMonth(this.year, this.month);
      }
    }, {
      key: "daysInYear",
      get: function get() {
        return this.isValid ? daysInYear(this.year) : NaN;
      }
    }, {
      key: "weeksInWeekYear",
      get: function get() {
        return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
      }
    } ], [ {
      key: "DATE_SHORT",
      get: function get() {
        return DATE_SHORT;
      }
    }, {
      key: "DATE_MED",
      get: function get() {
        return DATE_MED;
      }
    }, {
      key: "DATE_MED_WITH_WEEKDAY",
      get: function get() {
        return DATE_MED_WITH_WEEKDAY;
      }
    }, {
      key: "DATE_FULL",
      get: function get() {
        return DATE_FULL;
      }
    }, {
      key: "DATE_HUGE",
      get: function get() {
        return DATE_HUGE;
      }
    }, {
      key: "TIME_SIMPLE",
      get: function get() {
        return TIME_SIMPLE;
      }
    }, {
      key: "TIME_WITH_SECONDS",
      get: function get() {
        return TIME_WITH_SECONDS;
      }
    }, {
      key: "TIME_WITH_SHORT_OFFSET",
      get: function get() {
        return TIME_WITH_SHORT_OFFSET;
      }
    }, {
      key: "TIME_WITH_LONG_OFFSET",
      get: function get() {
        return TIME_WITH_LONG_OFFSET;
      }
    }, {
      key: "TIME_24_SIMPLE",
      get: function get() {
        return TIME_24_SIMPLE;
      }
    }, {
      key: "TIME_24_WITH_SECONDS",
      get: function get() {
        return TIME_24_WITH_SECONDS;
      }
    }, {
      key: "TIME_24_WITH_SHORT_OFFSET",
      get: function get() {
        return TIME_24_WITH_SHORT_OFFSET;
      }
    }, {
      key: "TIME_24_WITH_LONG_OFFSET",
      get: function get() {
        return TIME_24_WITH_LONG_OFFSET;
      }
    }, {
      key: "DATETIME_SHORT",
      get: function get() {
        return DATETIME_SHORT;
      }
    }, {
      key: "DATETIME_SHORT_WITH_SECONDS",
      get: function get() {
        return DATETIME_SHORT_WITH_SECONDS;
      }
    }, {
      key: "DATETIME_MED",
      get: function get() {
        return DATETIME_MED;
      }
    }, {
      key: "DATETIME_MED_WITH_SECONDS",
      get: function get() {
        return DATETIME_MED_WITH_SECONDS;
      }
    }, {
      key: "DATETIME_MED_WITH_WEEKDAY",
      get: function get() {
        return DATETIME_MED_WITH_WEEKDAY;
      }
    }, {
      key: "DATETIME_FULL",
      get: function get() {
        return DATETIME_FULL;
      }
    }, {
      key: "DATETIME_FULL_WITH_SECONDS",
      get: function get() {
        return DATETIME_FULL_WITH_SECONDS;
      }
    }, {
      key: "DATETIME_HUGE",
      get: function get() {
        return DATETIME_HUGE;
      }
    }, {
      key: "DATETIME_HUGE_WITH_SECONDS",
      get: function get() {
        return DATETIME_HUGE_WITH_SECONDS;
      }
    } ]);
    return DateTime;
  }();
  function friendlyDateTime(dateTimeish) {
    if (DateTime.isDateTime(dateTimeish)) {
      return dateTimeish;
    } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
      return DateTime.fromJSDate(dateTimeish);
    } else if (dateTimeish && typeof dateTimeish === "object") {
      return DateTime.fromObject(dateTimeish);
    } else {
      throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
    }
  }
  var VERSION = "2.4.0";
  luxon$1.DateTime = DateTime;
  luxon$1.Duration = Duration;
  luxon$1.FixedOffsetZone = FixedOffsetZone;
  luxon$1.IANAZone = IANAZone;
  luxon$1.Info = Info;
  luxon$1.Interval = Interval;
  luxon$1.InvalidZone = InvalidZone;
  luxon$1.Settings = Settings;
  luxon$1.SystemZone = SystemZone;
  luxon$1.VERSION = VERSION;
  luxon$1.Zone = Zone;
  (function(module, exports) {
    !function(t, n) {
      module.exports = n();
    }(commonjsGlobal, (function() {
      return function(t) {
        var n = {};
        function e(r) {
          if (n[r]) return n[r].exports;
          var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
          };
          return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
        }
        return e.m = t, e.c = n, e.d = function(t, n, r) {
          e.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: r
          });
        }, e.r = function(t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
          }), Object.defineProperty(t, "__esModule", {
            value: !0
          });
        }, e.t = function(t, n) {
          if (1 & n && (t = e(t)), 8 & n) return t;
          if (4 & n && "object" == typeof t && t && t.__esModule) return t;
          var r = Object.create(null);
          if (e.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
          }), 2 & n && "string" != typeof t) for (var o in t) e.d(r, o, function(n) {
            return t[n];
          }.bind(null, o));
          return r;
        }, e.n = function(t) {
          var n = t && t.__esModule ? function() {
            return t.default;
          } : function() {
            return t;
          };
          return e.d(n, "a", n), n;
        }, e.o = function(t, n) {
          return Object.prototype.hasOwnProperty.call(t, n);
        }, e.p = "", e(e.s = 1);
      }([ function(t, n) {
        t.exports = luxon$1;
      }, function(t, n, e) {
        e.r(n), e.d(n, "DateTime", (function() {
          return O;
        }));
        var r = {};
        e.r(r), e.d(r, "getEasterMonthAndDay", (function() {
          return u;
        }));
        var o = {};
        function u(t) {
          var n = Math.floor, e = t % 19, r = n(t / 100), o = (r - n(r / 4) - n((8 * r + 13) / 25) + 19 * e + 15) % 30, u = o - n(o / 28) * (1 - n(29 / (o + 1)) * n((21 - e) / 11)), i = u - (t + n(t / 4) + u + 2 - r + n(r / 4)) % 7, a = 3 + n((i + 40) / 44);
          return [ a, i + 28 - 31 * n(a / 4) ];
        }
        e.r(o), e.d(o, "isNewYearsDay", (function() {
          return m;
        })), e.d(o, "isMLKDay", (function() {
          return h;
        })), e.d(o, "isEasterDay", (function() {
          return b;
        })), e.d(o, "isMemorialDay", (function() {
          return v;
        })), e.d(o, "isIndependanceDay", (function() {
          return S;
        })), e.d(o, "isLaborDay", (function() {
          return D;
        })), e.d(o, "isColumbusDay", (function() {
          return j;
        })), e.d(o, "isThanksgivingDay", (function() {
          return g;
        })), e.d(o, "isChristmasDay", (function() {
          return x;
        }));
        var i, a = 1, y = 5, f = 9, s = 10, d = 11;
        function c(t, n) {
          return function(t) {
            if (Array.isArray(t)) return t;
          }(t) || function(t, n) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var e = [], r = !0, o = !1, u = void 0;
            try {
              for (var i, a = t[Symbol.iterator](); !(r = (i = a.next()).done) && (e.push(i.value), 
              !n || e.length !== n); r = !0) ;
            } catch (t) {
              o = !0, u = t;
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (o) throw u;
              }
            }
            return e;
          }(t, n) || function(t, n) {
            if (!t) return;
            if ("string" == typeof t) return l(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(t);
            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return l(t, n);
          }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function l(t, n) {
          (null == n || n > t.length) && (n = t.length);
          for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
          return r;
        }
        function p(t) {
          return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          })(t);
        }
        i = "object" === ("undefined" == typeof luxon ? "undefined" : p(luxon)) && "undefined" != typeof window ? luxon.DateTime : e(0).DateTime;
        var m = function(t) {
          var n = 1 === t.month, e = 1 === t.day;
          return n && e;
        }, h = function(t) {
          if (!M(t.month, a)) return !1;
          var n = w({
            n: 3,
            day: 1,
            month: a,
            year: t.year
          }), e = t.month === n.month, r = t.day === n.day;
          return e && r;
        }, b = function(t) {
          var n = t.year, e = c(u(n), 2), r = e[0], o = e[1], a = i.fromObject({
            year: n,
            month: r,
            day: o
          }), y = t.month === a.month, f = t.day === a.day;
          return y && f;
        }, v = function(t) {
          if (!M(t.month, y)) return !1;
          var n = t.year, e = i.fromObject({
            year: n,
            month: y,
            day: 31
          }), r = e.weekday, o = e.minus({
            days: r - 1
          }), u = t.month === o.month, a = t.day === o.day;
          return u && a;
        }, S = function(t) {
          var n = 7 === t.month, e = 4 === t.day;
          return n && e;
        }, D = function(t) {
          if (!M(t.month, f)) return !1;
          var n = t.year, e = i.fromObject({
            year: n,
            month: f,
            day: 1
          }), r = e.weekday, o = 1 === r ? e : e.plus({
            days: 8 - r
          }), u = t.month === o.month, a = t.day === o.day;
          return u && a;
        }, j = function(t) {
          if (!M(t.month, s)) return !1;
          var n = w({
            n: 2,
            day: 1,
            month: s,
            year: t.year
          }), e = t.month === n.month, r = t.day === n.day;
          return e && r;
        }, g = function(t) {
          if (!M(t.month, d)) return !1;
          var n = w({
            n: 4,
            day: 4,
            month: d,
            year: t.year
          }), e = t.month === n.month, r = t.day === n.day;
          return e && r;
        }, x = function(t) {
          var n = 12 === t.month, e = 25 === t.day;
          return n && e;
        };
        function M(t, n) {
          return t === n;
        }
        function w(t) {
          var n = t.n, e = t.day, r = t.month, o = t.year, u = i.fromObject({
            day: 1,
            month: r,
            year: o
          }), a = u.weekday - e, y = null;
          return y = a > 0 ? 7 - a : -1 * a, u.plus({
            days: y
          }).plus({
            days: 7 * (n - 1)
          });
        }
        var O, T = [ 1, 2, 3, 4, 5 ], A = [].concat([ m, b, v, S, D, g, x ]);
        function B(t) {
          return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t;
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          })(t);
        }
        (O = "object" === ("undefined" == typeof luxon ? "undefined" : B(luxon)) && "undefined" != typeof window ? luxon.DateTime : e(0).DateTime).prototype.availableHolidayMatchers = o, 
        O.prototype.availableHolidayHelpers = r, O.prototype.setupBusiness = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.businessDays, e = void 0 === n ? T : n, r = t.holidayMatchers, o = void 0 === r ? A : r;
          O.prototype.businessDays = e, O.prototype.holidayMatchers = o;
        }, O.prototype.clearBusinessSetup = function() {
          delete O.prototype.businessDays, delete O.prototype.holidayMatchers;
        }, O.prototype.isHoliday = function() {
          for (var t = this, n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
          var o = this.holidayMatchers || A, u = o.some((function(n) {
            return n.apply(void 0, [ t ].concat(e));
          }));
          return u;
        }, O.prototype.isBusinessDay = function() {
          return (this.businessDays || T).includes(this.weekday);
        }, O.prototype.plusBusiness = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.days, e = void 0 === n ? 1 : n, r = this;
          if (!r.isValid) return r;
          for (var o = e < 0, u = o ? Math.round(-1 * e) : Math.round(e); u > 0; ) {
            var i = o ? -1 : 1;
            (r = r.plus({
              days: i
            })).isBusinessDay() && !r.isHoliday() && u--;
          }
          return r;
        }, O.prototype.minusBusiness = function() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.days, e = void 0 === n ? 1 : n;
          return this.plusBusiness({
            days: -e
          });
        };
      } ]);
    }));
  })(dist);
  (new Date).toISOString().slice(0, 10);
  (new Date).toLocaleString();
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
  function hyphenatedDateString(dateObj) {
    const {year: year, month: month, date: date} = getYearMonthDate(dateObj);
    return "".concat(year, "-").concat(month < 10 ? "0" : "").concat(month, "-").concat(date < 10 ? "0" : "").concat(date);
  }
  async function showMessage(message) {
    let confirmButton = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "OK";
    let dialogTitle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    if (typeof CommandBar.prompt === "function") {
      await CommandBar.prompt(dialogTitle, message, [ confirmButton ]);
    } else {
      await CommandBar.showOptions([ confirmButton ], message);
    }
  }
  async function getTagParamsFromString(paramString, wantedParam, defaultValue) {
    log$1("general/getTagParamsFromString", "for '".concat(wantedParam, "' in '").concat(paramString, "'"));
    if (paramString !== "" && wantedParam !== "") {
      try {
        const paramObj = await json5.parse(paramString);
        const output = paramObj.hasOwnProperty(wantedParam) ? paramObj[wantedParam] : defaultValue;
        log$1("general/getTagParamsFromString", "--\x3e ".concat(output));
        return output;
      } catch (e) {
        logError("general/getTagParamsFromString", "Can't parse ".concat(paramString, " ").concat(e));
      }
    }
    log$1("general/getTagParamsFromString", "--\x3e ".concat(defaultValue, " (default)"));
    return defaultValue;
  }
  const _excluded = [ "format", "timezone", "locale", "dateStyle", "timeStyle", "hour12" ], _excluded2 = [ "dateStyle", "timeStyle" ], _excluded3 = [ "timeStyle" ], _excluded4 = [ "dateStyle" ];
  function asDateConfig(obj) {
    if (typeof obj === "object" && obj != null && typeof obj.timezone === "string" && typeof obj.locale === "string") {
      const {format: format, timezone: timezone, locale: locale, dateStyle: dateStyle, timeStyle: timeStyle, hour12: hour12} = obj, other = _objectWithoutProperties(obj, _excluded);
      return _objectSpread2(_objectSpread2({}, other), {}, {
        timezone: timezone,
        locale: locale,
        format: typeof format === "string" ? format : undefined,
        dateStyle: typeof dateStyle === "string" ? dateStyle : undefined,
        timeStyle: typeof timeStyle === "string" ? timeStyle : undefined,
        hour12: typeof hour12 === "boolean" ? hour12 : undefined
      });
    }
  }
  async function getDateConfig() {
    const config = DataStore.settings;
    const dateConfig = asDateConfig(config);
    if (dateConfig) {
      return dateConfig;
    } else {
      return {
        timezone: "automatic",
        locale: "en-US",
        dateStyle: "full",
        timeStyle: "short",
        hour12: true,
        format: "%Y-%m-%d %I:%M:%S %P"
      };
    }
  }
  async function getFormattedDateTime() {
    const dateConfig = await getDateConfig();
    const dateStyles = [ "short", "medium", "long" ];
    const timeStyles = [ "", "short", "medium", "long" ];
    const hour12 = [ false, true ];
    const format = dateConfig !== null && dateConfig !== void 0 && dateConfig.format ? dateConfig.format : "%Y-%m-%d %I:%M:%S %P";
    const _dateConfig2 = _objectSpread2({}, dateConfig), config = _objectWithoutProperties(_dateConfig2, _excluded2);
    const locales = [];
    locales.push(dateConfig && dateConfig.locale || "en-US");
    const str8601 = get8601String();
    const formatted = strftime(format);
    const options = [ {
      dateStyle: "formatted",
      timeStyle: "",
      label: "".concat(formatted, " (formatted date/time)"),
      text: formatted
    }, {
      dateStyle: "sv-SE",
      timeStyle: "medium",
      label: "".concat(str8601, " (sv-SE,short,medium,[not set])"),
      text: "".concat(str8601)
    } ];
    locales.forEach((loc => {
      dateStyles.forEach((ds => timeStyles.forEach((ts => {
        hour12.forEach((h12 => {
          if (ds !== "") {
            config.dateStyle = ds;
          }
          if (ts !== "") {
            config.timeStyle = ts;
          }
          config.hour12 = h12;
          const text = new Intl.DateTimeFormat(loc, config).format();
          options.push({
            dateStyle: ds !== "" ? ds : null,
            timeStyle: ts !== "" ? ds : null,
            label: "".concat(text, " (").concat(loc, "/").concat(ds ? ds : "[not set]", "/").concat(ts ? ts : "[not-set]", "/").concat(String(h12), ")"),
            text: "".concat(text)
          });
        }));
      }))));
    }));
    return options;
  }
  async function insertISODate() {
    const nowISO = (new Date).toISOString();
    Editor.insertTextAtCursor(nowISO);
  }
  async function insertDate() {
    const _await$getDateConfig = await getDateConfig(), dateConfig = _objectWithoutProperties(_await$getDateConfig, _excluded3);
    const dateText = new Intl.DateTimeFormat(dateConfig.locale, dateConfig).format();
    Editor.insertTextAtCursor(dateText);
  }
  async function insertDateTime() {
    var _dateConfig$dateStyle, _dateConfig$timeStyle;
    const _dateConfig = await getDateConfig();
    const dateConfig = _objectSpread2(_objectSpread2({}, _dateConfig), {}, {
      dateStyle: (_dateConfig$dateStyle = _dateConfig.dateStyle) !== null && _dateConfig$dateStyle !== void 0 ? _dateConfig$dateStyle : "full",
      timeStyle: (_dateConfig$timeStyle = _dateConfig.timeStyle) !== null && _dateConfig$timeStyle !== void 0 ? _dateConfig$timeStyle : "short"
    });
    const dateText = new Intl.DateTimeFormat(dateConfig.locale, dateConfig).format();
    Editor.insertTextAtCursor("".concat(dateText));
  }
  function get8601String() {
    return strftime("%Y-%m-%d");
  }
  async function insertDateTime8601() {
    Editor.insertTextAtCursor("".concat(strftime("%Y-%m-%d %H:%M")));
  }
  async function insertTime() {
    const _await$getDateConfig2 = await getDateConfig(), dateConfig = _objectWithoutProperties(_await$getDateConfig2, _excluded4);
    const editableConfig = _objectSpread2({}, dateConfig);
    if (!editableConfig.timeStyle) editableConfig.timeStyle = "medium";
    const timeText = new Intl.DateTimeFormat(dateConfig.locale, editableConfig).format();
    Editor.insertTextAtCursor(timeText);
  }
  function insertCalendarNoteLink() {
    Editor.insertTextAtCursor("[[".concat(hyphenatedDateString(new Date), "]]"));
  }
  async function dateFormatPicker() {
    const dateChoices = await getFormattedDateTime();
    const re = await CommandBar.showOptions(dateChoices.map((d => d.label)), "Choose format (locale/dateStyle/timeStyle/hour12)");
    Editor.insertTextAtCursor(dateChoices[re.index].text);
  }
  async function insertStrftime() {
    const dateConfig = DataStore.settings;
    const format = dateConfig !== null && dateConfig !== void 0 && dateConfig.format ? dateConfig.format : "%Y-%m-%d %I:%M:%S %P";
    const strftimeFormatted = strftime(format);
    Editor.insertTextAtCursor(strftimeFormatted);
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
  async function insertWeekDates() {
    await Editor.insertTextAtCursor(await getWeekDates());
  }
  const PLUGIN_ID = "date";
  async function onUpdateOrInstall() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      silent: false
    };
    try {
      console.log("".concat(PLUGIN_ID, ": onUpdateOrInstall running"));
      const migrationResult = await migrateConfiguration(PLUGIN_ID, pluginJson, config === null || config === void 0 ? void 0 : config.silent);
      console.log("".concat(PLUGIN_ID, ": onUpdateOrInstall migrateConfiguration code: ").concat(migrationResult));
      if (migrationResult === 0) {
        const updateSettings = updateSettingData(pluginJson);
        console.log("".concat(PLUGIN_ID, ": onUpdateOrInstall updateSettingData code: ").concat(updateSettings));
      }
    } catch (error) {
      console.log(error);
    }
    console.log("".concat(PLUGIN_ID, ": onUpdateOrInstall finished"));
  }
  exports.dateFormatPicker = dateFormatPicker;
  exports.get8601String = get8601String;
  exports.getWeekDates = getWeekDates;
  exports.insertCalendarNoteLink = insertCalendarNoteLink;
  exports.insertDate = insertDate;
  exports.insertDateTime = insertDateTime;
  exports.insertDateTime8601 = insertDateTime8601;
  exports.insertISODate = insertISODate;
  exports.insertStrftime = insertStrftime;
  exports.insertTime = insertTime;
  exports.insertWeekDates = insertWeekDates;
  exports.onUpdateOrInstall = onUpdateOrInstall;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  return exports;
}({});

Object.assign(typeof globalThis == "undefined" ? this : globalThis, exports);
