(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const o of l.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function e0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var t0 = { exports: {} },
  _i = {},
  n0 = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cr = Symbol.for("react.element"),
  Tc = Symbol.for("react.portal"),
  Dc = Symbol.for("react.fragment"),
  Zc = Symbol.for("react.strict_mode"),
  zc = Symbol.for("react.profiler"),
  Hc = Symbol.for("react.provider"),
  Ic = Symbol.for("react.context"),
  $c = Symbol.for("react.forward_ref"),
  Vc = Symbol.for("react.suspense"),
  Qc = Symbol.for("react.memo"),
  Uc = Symbol.for("react.lazy"),
  hu = Symbol.iterator;
function Bc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hu && e[hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var r0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  i0 = Object.assign,
  l0 = {};
function wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = l0),
    (this.updater = n || r0);
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function o0() {}
o0.prototype = wn.prototype;
function yo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = l0),
    (this.updater = n || r0);
}
var go = (yo.prototype = new o0());
go.constructor = yo;
i0(go, wn.prototype);
go.isPureReactComponent = !0;
var mu = Array.isArray,
  u0 = Object.prototype.hasOwnProperty,
  wo = { current: null },
  a0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function s0(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      u0.call(t, r) && !a0.hasOwnProperty(r) && (i[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) i.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) i[r] === void 0 && (i[r] = u[r]);
  return {
    $$typeof: cr,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: wo.current,
  };
}
function qc(e, t) {
  return {
    $$typeof: cr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function xo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === cr;
}
function Kc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var vu = /\/+/g;
function Ki(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Kc("" + e.key)
    : t.toString(36);
}
function Zr(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (l) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case cr:
          case Tc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Ki(o, 0) : r),
      mu(i)
        ? ((n = ""),
          e != null && (n = e.replace(vu, "$&/") + "/"),
          Zr(i, t, n, "", function (s) {
            return s;
          }))
        : i != null &&
          (xo(i) &&
            (i = qc(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(vu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), mu(e)))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var a = r + Ki(l, u);
      o += Zr(l, t, n, a, i);
    }
  else if (((a = Bc(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + Ki(l, u++)), (o += Zr(l, t, n, a, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Zr(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function Wc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var pe = { current: null },
  zr = { transition: null },
  Gc = {
    ReactCurrentDispatcher: pe,
    ReactCurrentBatchConfig: zr,
    ReactCurrentOwner: wo,
  };
R.Children = {
  map: wr,
  forEach: function (e, t, n) {
    wr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!xo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
R.Component = wn;
R.Fragment = Dc;
R.Profiler = zc;
R.PureComponent = yo;
R.StrictMode = Zc;
R.Suspense = Vc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gc;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = i0({}, e.props),
    i = e.key,
    l = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (o = wo.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      u0.call(t, a) &&
        !a0.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: cr, type: e.type, key: i, ref: l, props: r, _owner: o };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ic,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hc, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = s0;
R.createFactory = function (e) {
  var t = s0.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: $c, render: e };
};
R.isValidElement = xo;
R.lazy = function (e) {
  return { $$typeof: Uc, _payload: { _status: -1, _result: e }, _init: Wc };
};
R.memo = function (e, t) {
  return { $$typeof: Qc, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
R.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
R.useCallback = function (e, t) {
  return pe.current.useCallback(e, t);
};
R.useContext = function (e) {
  return pe.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return pe.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return pe.current.useEffect(e, t);
};
R.useId = function () {
  return pe.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return pe.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return pe.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return pe.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return pe.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return pe.current.useRef(e);
};
R.useState = function (e) {
  return pe.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return pe.current.useTransition();
};
R.version = "18.2.0";
n0.exports = R;
var Q = n0.exports;
const c = e0(Q);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yc = Q,
  Xc = Symbol.for("react.element"),
  Jc = Symbol.for("react.fragment"),
  bc = Object.prototype.hasOwnProperty,
  e1 = Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  t1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function c0(e, t, n) {
  var r,
    i = {},
    l = null,
    o = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) bc.call(t, r) && !t1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Xc,
    type: e,
    key: l,
    ref: o,
    props: i,
    _owner: e1.current,
  };
}
_i.Fragment = Jc;
_i.jsx = c0;
_i.jsxs = c0;
t0.exports = _i;
var y = t0.exports,
  wl = {},
  f0 = { exports: {} },
  Me = {},
  d0 = { exports: {} },
  p0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, _) {
    var F = A.length;
    A.push(_);
    e: for (; 0 < F; ) {
      var H = (F - 1) >>> 1,
        Y = A[H];
      if (0 < i(Y, _)) (A[H] = _), (A[F] = Y), (F = H);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var _ = A[0],
      F = A.pop();
    if (F !== _) {
      A[0] = F;
      e: for (var H = 0, Y = A.length, yr = Y >>> 1; H < yr; ) {
        var Ot = 2 * (H + 1) - 1,
          qi = A[Ot],
          _t = Ot + 1,
          gr = A[_t];
        if (0 > i(qi, F))
          _t < Y && 0 > i(gr, qi)
            ? ((A[H] = gr), (A[_t] = F), (H = _t))
            : ((A[H] = qi), (A[Ot] = F), (H = Ot));
        else if (_t < Y && 0 > i(gr, F)) (A[H] = gr), (A[_t] = F), (H = _t);
        else break e;
      }
    }
    return _;
  }
  function i(A, _) {
    var F = A.sortIndex - _.sortIndex;
    return F !== 0 ? F : A.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    s = [],
    m = 1,
    v = null,
    h = 3,
    g = !1,
    w = !1,
    S = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(A) {
    for (var _ = n(s); _ !== null; ) {
      if (_.callback === null) r(s);
      else if (_.startTime <= A)
        r(s), (_.sortIndex = _.expirationTime), t(a, _);
      else break;
      _ = n(s);
    }
  }
  function x(A) {
    if (((S = !1), d(A), !w))
      if (n(a) !== null) (w = !0), me(C);
      else {
        var _ = n(s);
        _ !== null && Ge(x, _.startTime - A);
      }
  }
  function C(A, _) {
    (w = !1), S && ((S = !1), p(O), (O = -1)), (g = !0);
    var F = h;
    try {
      for (
        d(_), v = n(a);
        v !== null && (!(v.expirationTime > _) || (A && !le()));

      ) {
        var H = v.callback;
        if (typeof H == "function") {
          (v.callback = null), (h = v.priorityLevel);
          var Y = H(v.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof Y == "function" ? (v.callback = Y) : v === n(a) && r(a),
            d(_);
        } else r(a);
        v = n(a);
      }
      if (v !== null) var yr = !0;
      else {
        var Ot = n(s);
        Ot !== null && Ge(x, Ot.startTime - _), (yr = !1);
      }
      return yr;
    } finally {
      (v = null), (h = F), (g = !1);
    }
  }
  var k = !1,
    M = null,
    O = -1,
    Z = 5,
    j = -1;
  function le() {
    return !(e.unstable_now() - j < Z);
  }
  function Se() {
    if (M !== null) {
      var A = e.unstable_now();
      j = A;
      var _ = !0;
      try {
        _ = M(!0, A);
      } finally {
        _ ? Ee() : ((k = !1), (M = null));
      }
    } else k = !1;
  }
  var Ee;
  if (typeof f == "function")
    Ee = function () {
      f(Se);
    };
  else if (typeof MessageChannel < "u") {
    var Te = new MessageChannel(),
      ot = Te.port2;
    (Te.port1.onmessage = Se),
      (Ee = function () {
        ot.postMessage(null);
      });
  } else
    Ee = function () {
      N(Se, 0);
    };
  function me(A) {
    (M = A), k || ((k = !0), Ee());
  }
  function Ge(A, _) {
    O = N(function () {
      A(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), me(C));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Z = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (A) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = h;
      }
      var F = h;
      h = _;
      try {
        return A();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, _) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var F = h;
      h = A;
      try {
        return _();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (A, _, F) {
      var H = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? H + F : H))
          : (F = H),
        A)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = F + Y),
        (A = {
          id: m++,
          callback: _,
          priorityLevel: A,
          startTime: F,
          expirationTime: Y,
          sortIndex: -1,
        }),
        F > H
          ? ((A.sortIndex = F),
            t(s, A),
            n(a) === null &&
              A === n(s) &&
              (S ? (p(O), (O = -1)) : (S = !0), Ge(x, F - H)))
          : ((A.sortIndex = Y), t(a, A), w || g || ((w = !0), me(C))),
        A
      );
    }),
    (e.unstable_shouldYield = le),
    (e.unstable_wrapCallback = function (A) {
      var _ = h;
      return function () {
        var F = h;
        h = _;
        try {
          return A.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    });
})(p0);
d0.exports = p0;
var n1 = d0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h0 = Q,
  Pe = n1;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var m0 = new Set(),
  Kn = {};
function Ut(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) m0.add(t[e]);
}
var tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xl = Object.prototype.hasOwnProperty,
  r1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yu = {},
  gu = {};
function i1(e) {
  return xl.call(gu, e)
    ? !0
    : xl.call(yu, e)
    ? !1
    : r1.test(e)
    ? (gu[e] = !0)
    : ((yu[e] = !0), !1);
}
function l1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function o1(e, t, n, r) {
  if (t === null || typeof t > "u" || l1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function he(e, t, n, r, i, l, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = o);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var So = /[\-:]([a-z])/g;
function Eo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(So, Eo);
    ie[t] = new he(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(So, Eo);
    ie[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(So, Eo);
  ie[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new he(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ko(e, t, n, r) {
  var i = ie.hasOwnProperty(t) ? ie[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (o1(t, n, i, r) && (n = null),
    r || i === null
      ? i1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xr = Symbol.for("react.element"),
  Kt = Symbol.for("react.portal"),
  Wt = Symbol.for("react.fragment"),
  Co = Symbol.for("react.strict_mode"),
  Sl = Symbol.for("react.profiler"),
  v0 = Symbol.for("react.provider"),
  y0 = Symbol.for("react.context"),
  Ao = Symbol.for("react.forward_ref"),
  El = Symbol.for("react.suspense"),
  kl = Symbol.for("react.suspense_list"),
  Po = Symbol.for("react.memo"),
  at = Symbol.for("react.lazy"),
  g0 = Symbol.for("react.offscreen"),
  wu = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wu && e[wu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  Wi;
function Nn(e) {
  if (Wi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wi = (t && t[1]) || "";
    }
  return (
    `
` +
    Wi +
    e
  );
}
var Gi = !1;
function Yi(e, t) {
  if (!e || Gi) return "";
  Gi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var i = s.stack.split(`
`),
          l = r.stack.split(`
`),
          o = i.length - 1,
          u = l.length - 1;
        1 <= o && 0 <= u && i[o] !== l[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (i[o] !== l[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || i[o] !== l[u])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Gi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Nn(e) : "";
}
function u1(e) {
  switch (e.tag) {
    case 5:
      return Nn(e.type);
    case 16:
      return Nn("Lazy");
    case 13:
      return Nn("Suspense");
    case 19:
      return Nn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Yi(e.type, !1)), e;
    case 11:
      return (e = Yi(e.type.render, !1)), e;
    case 1:
      return (e = Yi(e.type, !0)), e;
    default:
      return "";
  }
}
function Cl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wt:
      return "Fragment";
    case Kt:
      return "Portal";
    case Sl:
      return "Profiler";
    case Co:
      return "StrictMode";
    case El:
      return "Suspense";
    case kl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case y0:
        return (e.displayName || "Context") + ".Consumer";
      case v0:
        return (e._context.displayName || "Context") + ".Provider";
      case Ao:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Po:
        return (
          (t = e.displayName || null), t !== null ? t : Cl(e.type) || "Memo"
        );
      case at:
        (t = e._payload), (e = e._init);
        try {
          return Cl(e(t));
        } catch {}
    }
  return null;
}
function a1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Cl(t);
    case 8:
      return t === Co ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function w0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function s1(e) {
  var t = w0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), l.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sr(e) {
  e._valueTracker || (e._valueTracker = s1(e));
}
function x0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = w0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Al(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function S0(e, t) {
  (t = t.checked), t != null && ko(e, "checked", t, !1);
}
function Pl(e, t) {
  S0(e, t);
  var n = kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ml(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ml(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Su(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ml(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function on(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ol(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Eu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kt(n) };
}
function E0(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ku(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function k0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _l(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? k0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Er,
  C0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Er = Er || document.createElement("div"),
          Er.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Er.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  c1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dn).forEach(function (e) {
  c1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]);
  });
});
function A0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
    ? ("" + t).trim()
    : t + "px";
}
function P0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = A0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var f1 = q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function jl(e, t) {
  if (t) {
    if (f1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Fl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Nl = null;
function Mo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Rl = null,
  un = null,
  an = null;
function Cu(e) {
  if ((e = pr(e))) {
    if (typeof Rl != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Li(t)), Rl(e.stateNode, e.type, t));
  }
}
function M0(e) {
  un ? (an ? an.push(e) : (an = [e])) : (un = e);
}
function O0() {
  if (un) {
    var e = un,
      t = an;
    if (((an = un = null), Cu(e), t)) for (e = 0; e < t.length; e++) Cu(t[e]);
  }
}
function _0(e, t) {
  return e(t);
}
function j0() {}
var Xi = !1;
function F0(e, t, n) {
  if (Xi) return e(t, n);
  Xi = !0;
  try {
    return _0(e, t, n);
  } finally {
    (Xi = !1), (un !== null || an !== null) && (j0(), O0());
  }
}
function Gn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Li(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Ll = !1;
if (tt)
  try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", {
      get: function () {
        Ll = !0;
      },
    }),
      window.addEventListener("test", Cn, Cn),
      window.removeEventListener("test", Cn, Cn);
  } catch {
    Ll = !1;
  }
function d1(e, t, n, r, i, l, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (m) {
    this.onError(m);
  }
}
var Zn = !1,
  br = null,
  ei = !1,
  Tl = null,
  p1 = {
    onError: function (e) {
      (Zn = !0), (br = e);
    },
  };
function h1(e, t, n, r, i, l, o, u, a) {
  (Zn = !1), (br = null), d1.apply(p1, arguments);
}
function m1(e, t, n, r, i, l, o, u, a) {
  if ((h1.apply(this, arguments), Zn)) {
    if (Zn) {
      var s = br;
      (Zn = !1), (br = null);
    } else throw Error(E(198));
    ei || ((ei = !0), (Tl = s));
  }
}
function Bt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function N0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Au(e) {
  if (Bt(e) !== e) throw Error(E(188));
}
function v1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Au(i), e;
        if (l === r) return Au(i), t;
        l = l.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var o = !1, u = i.child; u; ) {
        if (u === n) {
          (o = !0), (n = i), (r = l);
          break;
        }
        if (u === r) {
          (o = !0), (r = i), (n = l);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = l.child; u; ) {
          if (u === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (u === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function R0(e) {
  return (e = v1(e)), e !== null ? L0(e) : null;
}
function L0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = L0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var T0 = Pe.unstable_scheduleCallback,
  Pu = Pe.unstable_cancelCallback,
  y1 = Pe.unstable_shouldYield,
  g1 = Pe.unstable_requestPaint,
  G = Pe.unstable_now,
  w1 = Pe.unstable_getCurrentPriorityLevel,
  Oo = Pe.unstable_ImmediatePriority,
  D0 = Pe.unstable_UserBlockingPriority,
  ti = Pe.unstable_NormalPriority,
  x1 = Pe.unstable_LowPriority,
  Z0 = Pe.unstable_IdlePriority,
  ji = null,
  Ke = null;
function S1(e) {
  if (Ke && typeof Ke.onCommitFiberRoot == "function")
    try {
      Ke.onCommitFiberRoot(ji, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : C1,
  E1 = Math.log,
  k1 = Math.LN2;
function C1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((E1(e) / k1) | 0)) | 0;
}
var kr = 64,
  Cr = 4194304;
function Ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ni(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~i;
    u !== 0 ? (r = Ln(u)) : ((l &= o), l !== 0 && (r = Ln(l)));
  } else (o = n & ~i), o !== 0 ? (r = Ln(o)) : l !== 0 && (r = Ln(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function A1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function P1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var o = 31 - Ie(l),
      u = 1 << o,
      a = i[o];
    a === -1
      ? (!(u & n) || u & r) && (i[o] = A1(u, t))
      : a <= t && (e.expiredLanes |= u),
      (l &= ~u);
  }
}
function Dl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function z0() {
  var e = kr;
  return (kr <<= 1), !(kr & 4194240) && (kr = 64), e;
}
function Ji(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function M1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ie(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function _o(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var D = 0;
function H0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var I0,
  jo,
  $0,
  V0,
  Q0,
  Zl = !1,
  Ar = [],
  mt = null,
  vt = null,
  yt = null,
  Yn = new Map(),
  Xn = new Map(),
  ft = [],
  O1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Mu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mt = null;
      break;
    case "dragenter":
    case "dragleave":
      vt = null;
      break;
    case "mouseover":
    case "mouseout":
      yt = null;
      break;
    case "pointerover":
    case "pointerout":
      Yn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xn.delete(t.pointerId);
  }
}
function An(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = pr(t)), t !== null && jo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function _1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (mt = An(mt, e, t, n, r, i)), !0;
    case "dragenter":
      return (vt = An(vt, e, t, n, r, i)), !0;
    case "mouseover":
      return (yt = An(yt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return Yn.set(l, An(Yn.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), Xn.set(l, An(Xn.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function U0(e) {
  var t = Rt(e.target);
  if (t !== null) {
    var n = Bt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = N0(n)), t !== null)) {
          (e.blockedOn = t),
            Q0(e.priority, function () {
              $0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Hr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Nl = r), n.target.dispatchEvent(r), (Nl = null);
    } else return (t = pr(n)), t !== null && jo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ou(e, t, n) {
  Hr(e) && n.delete(t);
}
function j1() {
  (Zl = !1),
    mt !== null && Hr(mt) && (mt = null),
    vt !== null && Hr(vt) && (vt = null),
    yt !== null && Hr(yt) && (yt = null),
    Yn.forEach(Ou),
    Xn.forEach(Ou);
}
function Pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zl ||
      ((Zl = !0),
      Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, j1)));
}
function Jn(e) {
  function t(i) {
    return Pn(i, e);
  }
  if (0 < Ar.length) {
    Pn(Ar[0], e);
    for (var n = 1; n < Ar.length; n++) {
      var r = Ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mt !== null && Pn(mt, e),
      vt !== null && Pn(vt, e),
      yt !== null && Pn(yt, e),
      Yn.forEach(t),
      Xn.forEach(t),
      n = 0;
    n < ft.length;
    n++
  )
    (r = ft[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ft.length && ((n = ft[0]), n.blockedOn === null); )
    U0(n), n.blockedOn === null && ft.shift();
}
var sn = lt.ReactCurrentBatchConfig,
  ri = !0;
function F1(e, t, n, r) {
  var i = D,
    l = sn.transition;
  sn.transition = null;
  try {
    (D = 1), Fo(e, t, n, r);
  } finally {
    (D = i), (sn.transition = l);
  }
}
function N1(e, t, n, r) {
  var i = D,
    l = sn.transition;
  sn.transition = null;
  try {
    (D = 4), Fo(e, t, n, r);
  } finally {
    (D = i), (sn.transition = l);
  }
}
function Fo(e, t, n, r) {
  if (ri) {
    var i = zl(e, t, n, r);
    if (i === null) al(e, t, r, ii, n), Mu(e, r);
    else if (_1(i, e, t, n, r)) r.stopPropagation();
    else if ((Mu(e, r), t & 4 && -1 < O1.indexOf(e))) {
      for (; i !== null; ) {
        var l = pr(i);
        if (
          (l !== null && I0(l),
          (l = zl(e, t, n, r)),
          l === null && al(e, t, r, ii, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else al(e, t, r, null, n);
  }
}
var ii = null;
function zl(e, t, n, r) {
  if (((ii = null), (e = Mo(r)), (e = Rt(e)), e !== null))
    if (((t = Bt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = N0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ii = e), null;
}
function B0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (w1()) {
        case Oo:
          return 1;
        case D0:
          return 4;
        case ti:
        case x1:
          return 16;
        case Z0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pt = null,
  No = null,
  Ir = null;
function q0() {
  if (Ir) return Ir;
  var e,
    t = No,
    n = t.length,
    r,
    i = "value" in pt ? pt.value : pt.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
  return (Ir = i.slice(e, 1 < r ? 1 - r : void 0));
}
function $r(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Pr() {
  return !0;
}
function _u() {
  return !1;
}
function Oe(e) {
  function t(n, r, i, l, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(l) : l[u]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Pr
        : _u),
      (this.isPropagationStopped = _u),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Pr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Pr));
      },
      persist: function () {},
      isPersistent: Pr,
    }),
    t
  );
}
var xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ro = Oe(xn),
  dr = q({}, xn, { view: 0, detail: 0 }),
  R1 = Oe(dr),
  bi,
  el,
  Mn,
  Fi = q({}, dr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Lo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Mn &&
            (Mn && e.type === "mousemove"
              ? ((bi = e.screenX - Mn.screenX), (el = e.screenY - Mn.screenY))
              : (el = bi = 0),
            (Mn = e)),
          bi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : el;
    },
  }),
  ju = Oe(Fi),
  L1 = q({}, Fi, { dataTransfer: 0 }),
  T1 = Oe(L1),
  D1 = q({}, dr, { relatedTarget: 0 }),
  tl = Oe(D1),
  Z1 = q({}, xn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  z1 = Oe(Z1),
  H1 = q({}, xn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  I1 = Oe(H1),
  $1 = q({}, xn, { data: 0 }),
  Fu = Oe($1),
  V1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Q1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  U1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function B1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = U1[e]) ? !!t[e] : !1;
}
function Lo() {
  return B1;
}
var q1 = q({}, dr, {
    key: function (e) {
      if (e.key) {
        var t = V1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = $r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Q1[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lo,
    charCode: function (e) {
      return e.type === "keypress" ? $r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? $r(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  K1 = Oe(q1),
  W1 = q({}, Fi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Nu = Oe(W1),
  G1 = q({}, dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lo,
  }),
  Y1 = Oe(G1),
  X1 = q({}, xn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  J1 = Oe(X1),
  b1 = q({}, Fi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  e2 = Oe(b1),
  t2 = [9, 13, 27, 32],
  To = tt && "CompositionEvent" in window,
  zn = null;
tt && "documentMode" in document && (zn = document.documentMode);
var n2 = tt && "TextEvent" in window && !zn,
  K0 = tt && (!To || (zn && 8 < zn && 11 >= zn)),
  Ru = " ",
  Lu = !1;
function W0(e, t) {
  switch (e) {
    case "keyup":
      return t2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function G0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function r2(e, t) {
  switch (e) {
    case "compositionend":
      return G0(t);
    case "keypress":
      return t.which !== 32 ? null : ((Lu = !0), Ru);
    case "textInput":
      return (e = t.data), e === Ru && Lu ? null : e;
    default:
      return null;
  }
}
function i2(e, t) {
  if (Gt)
    return e === "compositionend" || (!To && W0(e, t))
      ? ((e = q0()), (Ir = No = pt = null), (Gt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return K0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var l2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!l2[e.type] : t === "textarea";
}
function Y0(e, t, n, r) {
  M0(r),
    (t = li(t, "onChange")),
    0 < t.length &&
      ((n = new Ro("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Hn = null,
  bn = null;
function o2(e) {
  us(e, 0);
}
function Ni(e) {
  var t = Jt(e);
  if (x0(t)) return e;
}
function u2(e, t) {
  if (e === "change") return t;
}
var X0 = !1;
if (tt) {
  var nl;
  if (tt) {
    var rl = "oninput" in document;
    if (!rl) {
      var Du = document.createElement("div");
      Du.setAttribute("oninput", "return;"),
        (rl = typeof Du.oninput == "function");
    }
    nl = rl;
  } else nl = !1;
  X0 = nl && (!document.documentMode || 9 < document.documentMode);
}
function Zu() {
  Hn && (Hn.detachEvent("onpropertychange", J0), (bn = Hn = null));
}
function J0(e) {
  if (e.propertyName === "value" && Ni(bn)) {
    var t = [];
    Y0(t, bn, e, Mo(e)), F0(o2, t);
  }
}
function a2(e, t, n) {
  e === "focusin"
    ? (Zu(), (Hn = t), (bn = n), Hn.attachEvent("onpropertychange", J0))
    : e === "focusout" && Zu();
}
function s2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ni(bn);
}
function c2(e, t) {
  if (e === "click") return Ni(t);
}
function f2(e, t) {
  if (e === "input" || e === "change") return Ni(t);
}
function d2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ve = typeof Object.is == "function" ? Object.is : d2;
function er(e, t) {
  if (Ve(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!xl.call(t, i) || !Ve(e[i], t[i])) return !1;
  }
  return !0;
}
function zu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hu(e, t) {
  var n = zu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = zu(n);
  }
}
function b0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? b0(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function es() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function Do(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function p2(e) {
  var t = es(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    b0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Do(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = Hu(n, l));
        var o = Hu(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var h2 = tt && "documentMode" in document && 11 >= document.documentMode,
  Yt = null,
  Hl = null,
  In = null,
  Il = !1;
function Iu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Il ||
    Yt == null ||
    Yt !== Jr(r) ||
    ((r = Yt),
    "selectionStart" in r && Do(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (In && er(In, r)) ||
      ((In = r),
      (r = li(Hl, "onSelect")),
      0 < r.length &&
        ((t = new Ro("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yt))));
}
function Mr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Xt = {
    animationend: Mr("Animation", "AnimationEnd"),
    animationiteration: Mr("Animation", "AnimationIteration"),
    animationstart: Mr("Animation", "AnimationStart"),
    transitionend: Mr("Transition", "TransitionEnd"),
  },
  il = {},
  ts = {};
tt &&
  ((ts = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Xt.animationend.animation,
    delete Xt.animationiteration.animation,
    delete Xt.animationstart.animation),
  "TransitionEvent" in window || delete Xt.transitionend.transition);
function Ri(e) {
  if (il[e]) return il[e];
  if (!Xt[e]) return e;
  var t = Xt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ts) return (il[e] = t[n]);
  return e;
}
var ns = Ri("animationend"),
  rs = Ri("animationiteration"),
  is = Ri("animationstart"),
  ls = Ri("transitionend"),
  os = new Map(),
  $u =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function At(e, t) {
  os.set(e, t), Ut(t, [e]);
}
for (var ll = 0; ll < $u.length; ll++) {
  var ol = $u[ll],
    m2 = ol.toLowerCase(),
    v2 = ol[0].toUpperCase() + ol.slice(1);
  At(m2, "on" + v2);
}
At(ns, "onAnimationEnd");
At(rs, "onAnimationIteration");
At(is, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(ls, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
Ut(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ut(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Tn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  y2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));
function Vu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), m1(r, t, void 0, e), (e.currentTarget = null);
}
function us(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== l && i.isPropagationStopped())) break e;
          Vu(i, u, s), (l = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== l && i.isPropagationStopped())
          )
            break e;
          Vu(i, u, s), (l = a);
        }
    }
  }
  if (ei) throw ((e = Tl), (ei = !1), (Tl = null), e);
}
function I(e, t) {
  var n = t[Bl];
  n === void 0 && (n = t[Bl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (as(t, e, 2, !1), n.add(r));
}
function ul(e, t, n) {
  var r = 0;
  t && (r |= 4), as(n, e, r, t);
}
var Or = "_reactListening" + Math.random().toString(36).slice(2);
function tr(e) {
  if (!e[Or]) {
    (e[Or] = !0),
      m0.forEach(function (n) {
        n !== "selectionchange" && (y2.has(n) || ul(n, !1, e), ul(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Or] || ((t[Or] = !0), ul("selectionchange", !1, t));
  }
}
function as(e, t, n, r) {
  switch (B0(t)) {
    case 1:
      var i = F1;
      break;
    case 4:
      i = N1;
      break;
    default:
      i = Fo;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Ll ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function al(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === i || (u.nodeType === 8 && u.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Rt(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = l = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  F0(function () {
    var s = l,
      m = Mo(n),
      v = [];
    e: {
      var h = os.get(e);
      if (h !== void 0) {
        var g = Ro,
          w = e;
        switch (e) {
          case "keypress":
            if ($r(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = K1;
            break;
          case "focusin":
            (w = "focus"), (g = tl);
            break;
          case "focusout":
            (w = "blur"), (g = tl);
            break;
          case "beforeblur":
          case "afterblur":
            g = tl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ju;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = T1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Y1;
            break;
          case ns:
          case rs:
          case is:
            g = z1;
            break;
          case ls:
            g = J1;
            break;
          case "scroll":
            g = R1;
            break;
          case "wheel":
            g = e2;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = I1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Nu;
        }
        var S = (t & 4) !== 0,
          N = !S && e === "scroll",
          p = S ? (h !== null ? h + "Capture" : null) : h;
        S = [];
        for (var f = s, d; f !== null; ) {
          d = f;
          var x = d.stateNode;
          if (
            (d.tag === 5 &&
              x !== null &&
              ((d = x),
              p !== null && ((x = Gn(f, p)), x != null && S.push(nr(f, x, d)))),
            N)
          )
            break;
          f = f.return;
        }
        0 < S.length &&
          ((h = new g(h, w, null, n, m)), v.push({ event: h, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Nl &&
            (w = n.relatedTarget || n.fromElement) &&
            (Rt(w) || w[nt]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            m.window === m
              ? m
              : (h = m.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = s),
              (w = w ? Rt(w) : null),
              w !== null &&
                ((N = Bt(w)), w !== N || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = s)),
          g !== w)
        ) {
          if (
            ((S = ju),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = Nu),
              (x = "onPointerLeave"),
              (p = "onPointerEnter"),
              (f = "pointer")),
            (N = g == null ? h : Jt(g)),
            (d = w == null ? h : Jt(w)),
            (h = new S(x, f + "leave", g, n, m)),
            (h.target = N),
            (h.relatedTarget = d),
            (x = null),
            Rt(m) === s &&
              ((S = new S(p, f + "enter", w, n, m)),
              (S.target = d),
              (S.relatedTarget = N),
              (x = S)),
            (N = x),
            g && w)
          )
            t: {
              for (S = g, p = w, f = 0, d = S; d; d = qt(d)) f++;
              for (d = 0, x = p; x; x = qt(x)) d++;
              for (; 0 < f - d; ) (S = qt(S)), f--;
              for (; 0 < d - f; ) (p = qt(p)), d--;
              for (; f--; ) {
                if (S === p || (p !== null && S === p.alternate)) break t;
                (S = qt(S)), (p = qt(p));
              }
              S = null;
            }
          else S = null;
          g !== null && Qu(v, h, g, S, !1),
            w !== null && N !== null && Qu(v, N, w, S, !0);
        }
      }
      e: {
        if (
          ((h = s ? Jt(s) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === "select" || (g === "input" && h.type === "file"))
        )
          var C = u2;
        else if (Tu(h))
          if (X0) C = f2;
          else {
            C = s2;
            var k = a2;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (C = c2);
        if (C && (C = C(e, s))) {
          Y0(v, C, n, m);
          break e;
        }
        k && k(e, h, s),
          e === "focusout" &&
            (k = h._wrapperState) &&
            k.controlled &&
            h.type === "number" &&
            Ml(h, "number", h.value);
      }
      switch (((k = s ? Jt(s) : window), e)) {
        case "focusin":
          (Tu(k) || k.contentEditable === "true") &&
            ((Yt = k), (Hl = s), (In = null));
          break;
        case "focusout":
          In = Hl = Yt = null;
          break;
        case "mousedown":
          Il = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Il = !1), Iu(v, n, m);
          break;
        case "selectionchange":
          if (h2) break;
        case "keydown":
        case "keyup":
          Iu(v, n, m);
      }
      var M;
      if (To)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        Gt
          ? W0(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (K0 &&
          n.locale !== "ko" &&
          (Gt || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && Gt && (M = q0())
            : ((pt = m),
              (No = "value" in pt ? pt.value : pt.textContent),
              (Gt = !0))),
        (k = li(s, O)),
        0 < k.length &&
          ((O = new Fu(O, e, null, n, m)),
          v.push({ event: O, listeners: k }),
          M ? (O.data = M) : ((M = G0(n)), M !== null && (O.data = M)))),
        (M = n2 ? r2(e, n) : i2(e, n)) &&
          ((s = li(s, "onBeforeInput")),
          0 < s.length &&
            ((m = new Fu("onBeforeInput", "beforeinput", null, n, m)),
            v.push({ event: m, listeners: s }),
            (m.data = M)));
    }
    us(v, t);
  });
}
function nr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function li(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = Gn(e, n)),
      l != null && r.unshift(nr(e, l, i)),
      (l = Gn(e, t)),
      l != null && r.push(nr(e, l, i))),
      (e = e.return);
  }
  return r;
}
function qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qu(e, t, n, r, i) {
  for (var l = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      i
        ? ((a = Gn(n, l)), a != null && o.unshift(nr(n, a, u)))
        : i || ((a = Gn(n, l)), a != null && o.push(nr(n, a, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var g2 = /\r\n?/g,
  w2 = /\u0000|\uFFFD/g;
function Uu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      g2,
      `
`
    )
    .replace(w2, "");
}
function _r(e, t, n) {
  if (((t = Uu(t)), Uu(e) !== t && n)) throw Error(E(425));
}
function oi() {}
var $l = null,
  Vl = null;
function Ql(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ul = typeof setTimeout == "function" ? setTimeout : void 0,
  x2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Bu = typeof Promise == "function" ? Promise : void 0,
  S2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Bu < "u"
      ? function (e) {
          return Bu.resolve(null).then(e).catch(E2);
        }
      : Ul;
function E2(e) {
  setTimeout(function () {
    throw e;
  });
}
function sl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Jn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Jn(t);
}
function gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function qu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sn = Math.random().toString(36).slice(2),
  qe = "__reactFiber$" + Sn,
  rr = "__reactProps$" + Sn,
  nt = "__reactContainer$" + Sn,
  Bl = "__reactEvents$" + Sn,
  k2 = "__reactListeners$" + Sn,
  C2 = "__reactHandles$" + Sn;
function Rt(e) {
  var t = e[qe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nt] || n[qe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = qu(e); e !== null; ) {
          if ((n = e[qe])) return n;
          e = qu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function pr(e) {
  return (
    (e = e[qe] || e[nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Li(e) {
  return e[rr] || null;
}
var ql = [],
  bt = -1;
function Pt(e) {
  return { current: e };
}
function $(e) {
  0 > bt || ((e.current = ql[bt]), (ql[bt] = null), bt--);
}
function z(e, t) {
  bt++, (ql[bt] = e.current), (e.current = t);
}
var Ct = {},
  ce = Pt(Ct),
  ge = Pt(!1),
  Ht = Ct;
function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function we(e) {
  return (e = e.childContextTypes), e != null;
}
function ui() {
  $(ge), $(ce);
}
function Ku(e, t, n) {
  if (ce.current !== Ct) throw Error(E(168));
  z(ce, t), z(ge, n);
}
function ss(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, a1(e) || "Unknown", i));
  return q({}, n, r);
}
function ai(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ct),
    (Ht = ce.current),
    z(ce, e),
    z(ge, ge.current),
    !0
  );
}
function Wu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = ss(e, t, Ht)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(ge),
      $(ce),
      z(ce, e))
    : $(ge),
    z(ge, n);
}
var Xe = null,
  Ti = !1,
  cl = !1;
function cs(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function A2(e) {
  (Ti = !0), cs(e);
}
function Mt() {
  if (!cl && Xe !== null) {
    cl = !0;
    var e = 0,
      t = D;
    try {
      var n = Xe;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xe = null), (Ti = !1);
    } catch (i) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), T0(Oo, Mt), i);
    } finally {
      (D = t), (cl = !1);
    }
  }
  return null;
}
var en = [],
  tn = 0,
  si = null,
  ci = 0,
  _e = [],
  je = 0,
  It = null,
  Je = 1,
  be = "";
function Ft(e, t) {
  (en[tn++] = ci), (en[tn++] = si), (si = e), (ci = t);
}
function fs(e, t, n) {
  (_e[je++] = Je), (_e[je++] = be), (_e[je++] = It), (It = e);
  var r = Je;
  e = be;
  var i = 32 - Ie(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - Ie(t) + i;
  if (30 < l) {
    var o = i - (i % 5);
    (l = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Je = (1 << (32 - Ie(t) + i)) | (n << i) | r),
      (be = l + e);
  } else (Je = (1 << l) | (n << i) | r), (be = e);
}
function Zo(e) {
  e.return !== null && (Ft(e, 1), fs(e, 1, 0));
}
function zo(e) {
  for (; e === si; )
    (si = en[--tn]), (en[tn] = null), (ci = en[--tn]), (en[tn] = null);
  for (; e === It; )
    (It = _e[--je]),
      (_e[je] = null),
      (be = _e[--je]),
      (_e[je] = null),
      (Je = _e[--je]),
      (_e[je] = null);
}
var Ae = null,
  Ce = null,
  V = !1,
  He = null;
function ds(e, t) {
  var n = Fe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Gu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ae = e), (Ce = gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ae = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = It !== null ? { id: Je, overflow: be } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Fe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ae = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Kl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wl(e) {
  if (V) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!Gu(e, t)) {
        if (Kl(e)) throw Error(E(418));
        t = gt(n.nextSibling);
        var r = Ae;
        t && Gu(e, t)
          ? ds(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Ae = e));
      }
    } else {
      if (Kl(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (Ae = e);
    }
  }
}
function Yu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ae = e;
}
function jr(e) {
  if (e !== Ae) return !1;
  if (!V) return Yu(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ql(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (Kl(e)) throw (ps(), Error(E(418)));
    for (; t; ) ds(e, t), (t = gt(t.nextSibling));
  }
  if ((Yu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Ae ? gt(e.stateNode.nextSibling) : null;
  return !0;
}
function ps() {
  for (var e = Ce; e; ) e = gt(e.nextSibling);
}
function hn() {
  (Ce = Ae = null), (V = !1);
}
function Ho(e) {
  He === null ? (He = [e]) : He.push(e);
}
var P2 = lt.ReactCurrentBatchConfig;
function Ze(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var fi = Pt(null),
  di = null,
  nn = null,
  Io = null;
function $o() {
  Io = nn = di = null;
}
function Vo(e) {
  var t = fi.current;
  $(fi), (e._currentValue = t);
}
function Gl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function cn(e, t) {
  (di = e),
    (Io = nn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function Re(e) {
  var t = e._currentValue;
  if (Io !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), nn === null)) {
      if (di === null) throw Error(E(308));
      (nn = e), (di.dependencies = { lanes: 0, firstContext: e });
    } else nn = nn.next = e;
  return t;
}
var Lt = null;
function Qo(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function hs(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Qo(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    rt(e, r)
  );
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function Uo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ms(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function wt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), L & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      rt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Qo(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    rt(e, n)
  );
}
function Vr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _o(e, n);
  }
}
function Xu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = o) : (l = l.next = o), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function pi(e, t, n, r) {
  var i = e.updateQueue;
  st = !1;
  var l = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    u = i.shared.pending;
  if (u !== null) {
    i.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), o === null ? (l = s) : (o.next = s), (o = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== o &&
        (u === null ? (m.firstBaseUpdate = s) : (u.next = s),
        (m.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var v = i.baseState;
    (o = 0), (m = s = a = null), (u = l);
    do {
      var h = u.lane,
        g = u.eventTime;
      if ((r & h) === h) {
        m !== null &&
          (m = m.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            S = u;
          switch (((h = t), (g = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                v = w.call(g, v, h);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (h = typeof w == "function" ? w.call(g, v, h) : w),
                h == null)
              )
                break e;
              v = q({}, v, h);
              break e;
            case 2:
              st = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [u]) : h.push(u));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((s = m = g), (a = v)) : (m = m.next = g),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = i.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (m === null && (a = v),
      (i.baseState = a),
      (i.firstBaseUpdate = s),
      (i.lastBaseUpdate = m),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (Vt |= o), (e.lanes = o), (e.memoizedState = v);
  }
}
function Ju(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(E(191, i));
        i.call(r);
      }
    }
}
var vs = new h0.Component().refs;
function Yl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Di = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = St(e),
      l = et(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = wt(e, l, i)),
      t !== null && ($e(t, e, i, r), Vr(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      i = St(e),
      l = et(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = wt(e, l, i)),
      t !== null && ($e(t, e, i, r), Vr(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = St(e),
      i = et(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = wt(e, i, r)),
      t !== null && ($e(t, e, r, n), Vr(t, e, r));
  },
};
function bu(e, t, n, r, i, l, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !er(n, r) || !er(i, l)
      : !0
  );
}
function ys(e, t, n) {
  var r = !1,
    i = Ct,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Re(l))
      : ((i = we(t) ? Ht : ce.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? pn(e, i) : Ct)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Di),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function ea(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Di.enqueueReplaceState(t, t.state, null);
}
function Xl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = vs), Uo(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = Re(l))
    : ((l = we(t) ? Ht : ce.current), (i.context = pn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Yl(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Di.enqueueReplaceState(i, i.state, null),
      pi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function On(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (o) {
            var u = i.refs;
            u === vs && (u = i.refs = {}),
              o === null ? delete u[l] : (u[l] = o);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Fr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ta(e) {
  var t = e._init;
  return t(e._payload);
}
function gs(e) {
  function t(p, f) {
    if (e) {
      var d = p.deletions;
      d === null ? ((p.deletions = [f]), (p.flags |= 16)) : d.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function i(p, f) {
    return (p = Et(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function l(p, f, d) {
    return (
      (p.index = d),
      e
        ? ((d = p.alternate),
          d !== null
            ? ((d = d.index), d < f ? ((p.flags |= 2), f) : d)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function o(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function u(p, f, d, x) {
    return f === null || f.tag !== 6
      ? ((f = yl(d, p.mode, x)), (f.return = p), f)
      : ((f = i(f, d)), (f.return = p), f);
  }
  function a(p, f, d, x) {
    var C = d.type;
    return C === Wt
      ? m(p, f, d.props.children, x, d.key)
      : f !== null &&
        (f.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === at &&
            ta(C) === f.type))
      ? ((x = i(f, d.props)), (x.ref = On(p, f, d)), (x.return = p), x)
      : ((x = Wr(d.type, d.key, d.props, null, p.mode, x)),
        (x.ref = On(p, f, d)),
        (x.return = p),
        x);
  }
  function s(p, f, d, x) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== d.containerInfo ||
      f.stateNode.implementation !== d.implementation
      ? ((f = gl(d, p.mode, x)), (f.return = p), f)
      : ((f = i(f, d.children || [])), (f.return = p), f);
  }
  function m(p, f, d, x, C) {
    return f === null || f.tag !== 7
      ? ((f = zt(d, p.mode, x, C)), (f.return = p), f)
      : ((f = i(f, d)), (f.return = p), f);
  }
  function v(p, f, d) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = yl("" + f, p.mode, d)), (f.return = p), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case xr:
          return (
            (d = Wr(f.type, f.key, f.props, null, p.mode, d)),
            (d.ref = On(p, null, f)),
            (d.return = p),
            d
          );
        case Kt:
          return (f = gl(f, p.mode, d)), (f.return = p), f;
        case at:
          var x = f._init;
          return v(p, x(f._payload), d);
      }
      if (Rn(f) || kn(f))
        return (f = zt(f, p.mode, d, null)), (f.return = p), f;
      Fr(p, f);
    }
    return null;
  }
  function h(p, f, d, x) {
    var C = f !== null ? f.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : u(p, f, "" + d, x);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case xr:
          return d.key === C ? a(p, f, d, x) : null;
        case Kt:
          return d.key === C ? s(p, f, d, x) : null;
        case at:
          return (C = d._init), h(p, f, C(d._payload), x);
      }
      if (Rn(d) || kn(d)) return C !== null ? null : m(p, f, d, x, null);
      Fr(p, d);
    }
    return null;
  }
  function g(p, f, d, x, C) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (p = p.get(d) || null), u(f, p, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case xr:
          return (p = p.get(x.key === null ? d : x.key) || null), a(f, p, x, C);
        case Kt:
          return (p = p.get(x.key === null ? d : x.key) || null), s(f, p, x, C);
        case at:
          var k = x._init;
          return g(p, f, d, k(x._payload), C);
      }
      if (Rn(x) || kn(x)) return (p = p.get(d) || null), m(f, p, x, C, null);
      Fr(f, x);
    }
    return null;
  }
  function w(p, f, d, x) {
    for (
      var C = null, k = null, M = f, O = (f = 0), Z = null;
      M !== null && O < d.length;
      O++
    ) {
      M.index > O ? ((Z = M), (M = null)) : (Z = M.sibling);
      var j = h(p, M, d[O], x);
      if (j === null) {
        M === null && (M = Z);
        break;
      }
      e && M && j.alternate === null && t(p, M),
        (f = l(j, f, O)),
        k === null ? (C = j) : (k.sibling = j),
        (k = j),
        (M = Z);
    }
    if (O === d.length) return n(p, M), V && Ft(p, O), C;
    if (M === null) {
      for (; O < d.length; O++)
        (M = v(p, d[O], x)),
          M !== null &&
            ((f = l(M, f, O)), k === null ? (C = M) : (k.sibling = M), (k = M));
      return V && Ft(p, O), C;
    }
    for (M = r(p, M); O < d.length; O++)
      (Z = g(M, p, O, d[O], x)),
        Z !== null &&
          (e && Z.alternate !== null && M.delete(Z.key === null ? O : Z.key),
          (f = l(Z, f, O)),
          k === null ? (C = Z) : (k.sibling = Z),
          (k = Z));
    return (
      e &&
        M.forEach(function (le) {
          return t(p, le);
        }),
      V && Ft(p, O),
      C
    );
  }
  function S(p, f, d, x) {
    var C = kn(d);
    if (typeof C != "function") throw Error(E(150));
    if (((d = C.call(d)), d == null)) throw Error(E(151));
    for (
      var k = (C = null), M = f, O = (f = 0), Z = null, j = d.next();
      M !== null && !j.done;
      O++, j = d.next()
    ) {
      M.index > O ? ((Z = M), (M = null)) : (Z = M.sibling);
      var le = h(p, M, j.value, x);
      if (le === null) {
        M === null && (M = Z);
        break;
      }
      e && M && le.alternate === null && t(p, M),
        (f = l(le, f, O)),
        k === null ? (C = le) : (k.sibling = le),
        (k = le),
        (M = Z);
    }
    if (j.done) return n(p, M), V && Ft(p, O), C;
    if (M === null) {
      for (; !j.done; O++, j = d.next())
        (j = v(p, j.value, x)),
          j !== null &&
            ((f = l(j, f, O)), k === null ? (C = j) : (k.sibling = j), (k = j));
      return V && Ft(p, O), C;
    }
    for (M = r(p, M); !j.done; O++, j = d.next())
      (j = g(M, p, O, j.value, x)),
        j !== null &&
          (e && j.alternate !== null && M.delete(j.key === null ? O : j.key),
          (f = l(j, f, O)),
          k === null ? (C = j) : (k.sibling = j),
          (k = j));
    return (
      e &&
        M.forEach(function (Se) {
          return t(p, Se);
        }),
      V && Ft(p, O),
      C
    );
  }
  function N(p, f, d, x) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Wt &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case xr:
          e: {
            for (var C = d.key, k = f; k !== null; ) {
              if (k.key === C) {
                if (((C = d.type), C === Wt)) {
                  if (k.tag === 7) {
                    n(p, k.sibling),
                      (f = i(k, d.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  k.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === at &&
                    ta(C) === k.type)
                ) {
                  n(p, k.sibling),
                    (f = i(k, d.props)),
                    (f.ref = On(p, k, d)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, k);
                break;
              } else t(p, k);
              k = k.sibling;
            }
            d.type === Wt
              ? ((f = zt(d.props.children, p.mode, x, d.key)),
                (f.return = p),
                (p = f))
              : ((x = Wr(d.type, d.key, d.props, null, p.mode, x)),
                (x.ref = On(p, f, d)),
                (x.return = p),
                (p = x));
          }
          return o(p);
        case Kt:
          e: {
            for (k = d.key; f !== null; ) {
              if (f.key === k)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === d.containerInfo &&
                  f.stateNode.implementation === d.implementation
                ) {
                  n(p, f.sibling),
                    (f = i(f, d.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = gl(d, p.mode, x)), (f.return = p), (p = f);
          }
          return o(p);
        case at:
          return (k = d._init), N(p, f, k(d._payload), x);
      }
      if (Rn(d)) return w(p, f, d, x);
      if (kn(d)) return S(p, f, d, x);
      Fr(p, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = i(f, d)), (f.return = p), (p = f))
          : (n(p, f), (f = yl(d, p.mode, x)), (f.return = p), (p = f)),
        o(p))
      : n(p, f);
  }
  return N;
}
var mn = gs(!0),
  ws = gs(!1),
  hr = {},
  We = Pt(hr),
  ir = Pt(hr),
  lr = Pt(hr);
function Tt(e) {
  if (e === hr) throw Error(E(174));
  return e;
}
function Bo(e, t) {
  switch ((z(lr, t), z(ir, e), z(We, hr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _l(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _l(t, e));
  }
  $(We), z(We, t);
}
function vn() {
  $(We), $(ir), $(lr);
}
function xs(e) {
  Tt(lr.current);
  var t = Tt(We.current),
    n = _l(t, e.type);
  t !== n && (z(ir, e), z(We, n));
}
function qo(e) {
  ir.current === e && ($(We), $(ir));
}
var U = Pt(0);
function hi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var fl = [];
function Ko() {
  for (var e = 0; e < fl.length; e++)
    fl[e]._workInProgressVersionPrimary = null;
  fl.length = 0;
}
var Qr = lt.ReactCurrentDispatcher,
  dl = lt.ReactCurrentBatchConfig,
  $t = 0,
  B = null,
  J = null,
  ee = null,
  mi = !1,
  $n = !1,
  or = 0,
  M2 = 0;
function oe() {
  throw Error(E(321));
}
function Wo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ve(e[n], t[n])) return !1;
  return !0;
}
function Go(e, t, n, r, i, l) {
  if (
    (($t = l),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Qr.current = e === null || e.memoizedState === null ? F2 : N2),
    (e = n(r, i)),
    $n)
  ) {
    l = 0;
    do {
      if ((($n = !1), (or = 0), 25 <= l)) throw Error(E(301));
      (l += 1),
        (ee = J = null),
        (t.updateQueue = null),
        (Qr.current = R2),
        (e = n(r, i));
    } while ($n);
  }
  if (
    ((Qr.current = vi),
    (t = J !== null && J.next !== null),
    ($t = 0),
    (ee = J = B = null),
    (mi = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Yo() {
  var e = or !== 0;
  return (or = 0), e;
}
function Be() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (B.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Le() {
  if (J === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ee === null ? B.memoizedState : ee.next;
  if (t !== null) (ee = t), (J = e);
  else {
    if (e === null) throw Error(E(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ee === null ? (B.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = J,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = l.next), (l.next = o);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var u = (o = null),
      a = null,
      s = l;
    do {
      var m = s.lane;
      if (($t & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var v = {
          lane: m,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = v), (o = r)) : (a = a.next = v),
          (B.lanes |= m),
          (Vt |= m);
      }
      s = s.next;
    } while (s !== null && s !== l);
    a === null ? (o = r) : (a.next = u),
      Ve(r, t.memoizedState) || (ye = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (B.lanes |= l), (Vt |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (l = e(l, o.action)), (o = o.next);
    while (o !== i);
    Ve(l, t.memoizedState) || (ye = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Ss() {}
function Es(e, t) {
  var n = B,
    r = Le(),
    i = t(),
    l = !Ve(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (ye = !0)),
    (r = r.queue),
    Xo(As.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ar(9, Cs.bind(null, n, r, i, t), void 0, null),
      te === null)
    )
      throw Error(E(349));
    $t & 30 || ks(n, t, i);
  }
  return i;
}
function ks(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Cs(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ps(t) && Ms(e);
}
function As(e, t, n) {
  return n(function () {
    Ps(t) && Ms(e);
  });
}
function Ps(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ve(e, n);
  } catch {
    return !0;
  }
}
function Ms(e) {
  var t = rt(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function na(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ur,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = j2.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function ar(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Os() {
  return Le().memoizedState;
}
function Ur(e, t, n, r) {
  var i = Be();
  (B.flags |= e),
    (i.memoizedState = ar(1 | t, n, void 0, r === void 0 ? null : r));
}
function Zi(e, t, n, r) {
  var i = Le();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (J !== null) {
    var o = J.memoizedState;
    if (((l = o.destroy), r !== null && Wo(r, o.deps))) {
      i.memoizedState = ar(t, n, l, r);
      return;
    }
  }
  (B.flags |= e), (i.memoizedState = ar(1 | t, n, l, r));
}
function ra(e, t) {
  return Ur(8390656, 8, e, t);
}
function Xo(e, t) {
  return Zi(2048, 8, e, t);
}
function _s(e, t) {
  return Zi(4, 2, e, t);
}
function js(e, t) {
  return Zi(4, 4, e, t);
}
function Fs(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ns(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Zi(4, 4, Fs.bind(null, t, e), n)
  );
}
function Jo() {}
function Rs(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ls(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ts(e, t, n) {
  return $t & 21
    ? (Ve(n, t) || ((n = z0()), (B.lanes |= n), (Vt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function O2(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = dl.transition;
  dl.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (dl.transition = r);
  }
}
function Ds() {
  return Le().memoizedState;
}
function _2(e, t, n) {
  var r = St(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Zs(e))
  )
    zs(t, n);
  else if (((n = hs(e, t, n, r)), n !== null)) {
    var i = de();
    $e(n, e, r, i), Hs(n, t, r);
  }
}
function j2(e, t, n) {
  var r = St(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zs(e)) zs(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = l(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = u), Ve(u, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Qo(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = hs(e, t, i, r)),
      n !== null && ((i = de()), $e(n, e, r, i), Hs(n, t, r));
  }
}
function Zs(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function zs(e, t) {
  $n = mi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Hs(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), _o(e, n);
  }
}
var vi = {
    readContext: Re,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  F2 = {
    readContext: Re,
    useCallback: function (e, t) {
      return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Re,
    useEffect: ra,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ur(4194308, 4, Fs.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ur(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ur(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = _2.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: na,
    useDebugValue: Jo,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = na(!1),
        t = e[0];
      return (e = O2.bind(null, e[1])), (Be().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        i = Be();
      if (V) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(E(349));
        $t & 30 || ks(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        ra(As.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        ar(9, Cs.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = te.identifierPrefix;
      if (V) {
        var n = be,
          r = Je;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = or++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = M2++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  N2 = {
    readContext: Re,
    useCallback: Rs,
    useContext: Re,
    useEffect: Xo,
    useImperativeHandle: Ns,
    useInsertionEffect: _s,
    useLayoutEffect: js,
    useMemo: Ls,
    useReducer: pl,
    useRef: Os,
    useState: function () {
      return pl(ur);
    },
    useDebugValue: Jo,
    useDeferredValue: function (e) {
      var t = Le();
      return Ts(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = pl(ur)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ss,
    useSyncExternalStore: Es,
    useId: Ds,
    unstable_isNewReconciler: !1,
  },
  R2 = {
    readContext: Re,
    useCallback: Rs,
    useContext: Re,
    useEffect: Xo,
    useImperativeHandle: Ns,
    useInsertionEffect: _s,
    useLayoutEffect: js,
    useMemo: Ls,
    useReducer: hl,
    useRef: Os,
    useState: function () {
      return hl(ur);
    },
    useDebugValue: Jo,
    useDeferredValue: function (e) {
      var t = Le();
      return J === null ? (t.memoizedState = e) : Ts(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = hl(ur)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Ss,
    useSyncExternalStore: Es,
    useId: Ds,
    unstable_isNewReconciler: !1,
  };
function yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += u1(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ml(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Jl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var L2 = typeof WeakMap == "function" ? WeakMap : Map;
function Is(e, t, n) {
  (n = et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      gi || ((gi = !0), (ao = r)), Jl(e, t);
    }),
    n
  );
}
function $s(e, t, n) {
  (n = et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Jl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Jl(e, t),
          typeof r != "function" &&
            (xt === null ? (xt = new Set([this])) : xt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function ia(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new L2();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = W2.bind(null, e, t, n)), t.then(e, e));
}
function la(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function oa(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = et(-1, 1)), (t.tag = 2), wt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var T2 = lt.ReactCurrentOwner,
  ye = !1;
function fe(e, t, n, r) {
  t.child = e === null ? ws(t, null, n, r) : mn(t, e.child, n, r);
}
function ua(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    cn(t, i),
    (r = Go(e, t, n, r, l, i)),
    (n = Yo()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (V && n && Zo(t), (t.flags |= 1), fe(e, t, r, i), t.child)
  );
}
function aa(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ou(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Vs(e, t, l, r, i))
      : ((e = Wr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var o = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : er), n(o, r) && e.ref === t.ref)
    )
      return it(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Et(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Vs(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (er(l, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), it(e, t, i);
  }
  return bl(e, t, n, r, i);
}
function Qs(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(ln, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(ln, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        z(ln, ke),
        (ke |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(ln, ke),
      (ke |= r);
  return fe(e, t, i, n), t.child;
}
function Us(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bl(e, t, n, r, i) {
  var l = we(n) ? Ht : ce.current;
  return (
    (l = pn(t, l)),
    cn(t, i),
    (n = Go(e, t, n, r, l, i)),
    (r = Yo()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (V && r && Zo(t), (t.flags |= 1), fe(e, t, n, i), t.child)
  );
}
function sa(e, t, n, r, i) {
  if (we(n)) {
    var l = !0;
    ai(t);
  } else l = !1;
  if ((cn(t, i), t.stateNode === null))
    Br(e, t), ys(t, n, r), Xl(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Re(s))
      : ((s = we(n) ? Ht : ce.current), (s = pn(t, s)));
    var m = n.getDerivedStateFromProps,
      v =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && ea(t, o, r, s)),
      (st = !1);
    var h = t.memoizedState;
    (o.state = h),
      pi(t, r, o, i),
      (a = t.memoizedState),
      u !== r || h !== a || ge.current || st
        ? (typeof m == "function" && (Yl(t, n, m, r), (a = t.memoizedState)),
          (u = st || bu(t, n, u, r, h, a, s))
            ? (v ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = s),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      ms(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : Ze(t.type, u)),
      (o.props = s),
      (v = t.pendingProps),
      (h = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Re(a))
        : ((a = we(n) ? Ht : ce.current), (a = pn(t, a)));
    var g = n.getDerivedStateFromProps;
    (m =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== v || h !== a) && ea(t, o, r, a)),
      (st = !1),
      (h = t.memoizedState),
      (o.state = h),
      pi(t, r, o, i);
    var w = t.memoizedState;
    u !== v || h !== w || ge.current || st
      ? (typeof g == "function" && (Yl(t, n, g, r), (w = t.memoizedState)),
        (s = st || bu(t, n, s, r, h, w, a) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = a),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return eo(e, t, n, r, l, i);
}
function eo(e, t, n, r, i, l) {
  Us(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Wu(t, n, !1), it(e, t, l);
  (r = t.stateNode), (T2.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = mn(t, e.child, null, l)), (t.child = mn(t, null, u, l)))
      : fe(e, t, u, l),
    (t.memoizedState = r.state),
    i && Wu(t, n, !0),
    t.child
  );
}
function Bs(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ku(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ku(e, t.context, !1),
    Bo(e, t.containerInfo);
}
function ca(e, t, n, r, i) {
  return hn(), Ho(i), (t.flags |= 256), fe(e, t, n, r), t.child;
}
var to = { dehydrated: null, treeContext: null, retryLane: 0 };
function no(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qs(e, t, n) {
  var r = t.pendingProps,
    i = U.current,
    l = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(U, i & 1),
    e === null)
  )
    return (
      Wl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = o))
                : (l = Ii(o, r, 0, null)),
              (e = zt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = no(n)),
              (t.memoizedState = to),
              e)
            : bo(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null)))
    return D2(e, t, o, r, u, i, n);
  if (l) {
    (l = r.fallback), (o = t.mode), (i = e.child), (u = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Et(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      u !== null ? (l = Et(u, l)) : ((l = zt(l, o, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? no(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (l.memoizedState = o),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = to),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Et(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function bo(e, t) {
  return (
    (t = Ii({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nr(e, t, n, r) {
  return (
    r !== null && Ho(r),
    mn(t, e.child, null, n),
    (e = bo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function D2(e, t, n, r, i, l, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ml(Error(E(422)))), Nr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = Ii({ mode: "visible", children: r.children }, i, 0, null)),
        (l = zt(l, i, o, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && mn(t, e.child, null, o),
        (t.child.memoizedState = no(o)),
        (t.memoizedState = to),
        l);
  if (!(t.mode & 1)) return Nr(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (l = Error(E(419))), (r = ml(l, r, void 0)), Nr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ye || u)) {
    if (((r = te), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), rt(e, i), $e(r, e, i, -1));
    }
    return lu(), (r = ml(Error(E(421)))), Nr(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = G2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ce = gt(i.nextSibling)),
      (Ae = t),
      (V = !0),
      (He = null),
      e !== null &&
        ((_e[je++] = Je),
        (_e[je++] = be),
        (_e[je++] = It),
        (Je = e.id),
        (be = e.overflow),
        (It = t)),
      (t = bo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function fa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Gl(e.return, t, n);
}
function vl(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function Ks(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((fe(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fa(e, n, t);
        else if (e.tag === 19) fa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && hi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          vl(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && hi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        vl(t, !0, n, null, l);
        break;
      case "together":
        vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Br(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function it(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Et(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Z2(e, t, n) {
  switch (t.tag) {
    case 3:
      Bs(t), hn();
      break;
    case 5:
      xs(t);
      break;
    case 1:
      we(t.type) && ai(t);
      break;
    case 4:
      Bo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      z(fi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? qs(e, t, n)
          : (z(U, U.current & 1),
            (e = it(e, t, n)),
            e !== null ? e.sibling : null);
      z(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ks(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Qs(e, t, n);
  }
  return it(e, t, n);
}
var Ws, ro, Gs, Ys;
Ws = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ro = function () {};
Gs = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Tt(We.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Al(e, i)), (r = Al(e, r)), (l = []);
        break;
      case "select":
        (i = q({}, i, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = Ol(e, i)), (r = Ol(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oi);
    }
    jl(n, r);
    var o;
    n = null;
    for (s in i)
      if (!r.hasOwnProperty(s) && i.hasOwnProperty(s) && i[s] != null)
        if (s === "style") {
          var u = i[s];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Kn.hasOwnProperty(s)
              ? l || (l = [])
              : (l = l || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = i != null ? i[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                u[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (l || (l = []), l.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (l = l || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Kn.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && I("scroll", e),
                  l || u === a || (l = []))
                : (l = l || []).push(s, a));
    }
    n && (l = l || []).push("style", n);
    var s = l;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Ys = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function z2(e, t, n) {
  var r = t.pendingProps;
  switch ((zo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return we(t.type) && ui(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vn(),
        $(ge),
        $(ce),
        Ko(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (jr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), He !== null && (fo(He), (He = null)))),
        ro(e, t),
        ue(t),
        null
      );
    case 5:
      qo(t);
      var i = Tt(lr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Gs(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ue(t), null;
        }
        if (((e = Tt(We.current)), jr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[qe] = t), (r[rr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Tn.length; i++) I(Tn[i], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I("error", r), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              xu(r, l), I("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                I("invalid", r);
              break;
            case "textarea":
              Eu(r, l), I("invalid", r);
          }
          jl(n, l), (i = null);
          for (var o in l)
            if (l.hasOwnProperty(o)) {
              var u = l[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (l.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, u, e),
                    (i = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (l.suppressHydrationWarning !== !0 &&
                      _r(r.textContent, u, e),
                    (i = ["children", "" + u]))
                : Kn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  I("scroll", r);
            }
          switch (n) {
            case "input":
              Sr(r), Su(r, l, !0);
              break;
            case "textarea":
              Sr(r), ku(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = oi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = k0(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[qe] = t),
            (e[rr] = r),
            Ws(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Fl(n, r)), n)) {
              case "dialog":
                I("cancel", e), I("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Tn.length; i++) I(Tn[i], e);
                i = r;
                break;
              case "source":
                I("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                I("error", e), I("load", e), (i = r);
                break;
              case "details":
                I("toggle", e), (i = r);
                break;
              case "input":
                xu(e, r), (i = Al(e, r)), I("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = q({}, r, { value: void 0 })),
                  I("invalid", e);
                break;
              case "textarea":
                Eu(e, r), (i = Ol(e, r)), I("invalid", e);
                break;
              default:
                i = r;
            }
            jl(n, i), (u = i);
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var a = u[l];
                l === "style"
                  ? P0(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && C0(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Wn(e, a)
                    : typeof a == "number" && Wn(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Kn.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && I("scroll", e)
                      : a != null && ko(e, l, a, o));
              }
            switch (n) {
              case "input":
                Sr(e), Su(e, r, !1);
                break;
              case "textarea":
                Sr(e), ku(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? on(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      on(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = oi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) Ys(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Tt(lr.current)), Tt(We.current), jr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[qe] = t),
            (l = r.nodeValue !== n) && ((e = Ae), e !== null))
          )
            switch (e.tag) {
              case 3:
                _r(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _r(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[qe] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        ($(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && Ce !== null && t.mode & 1 && !(t.flags & 128))
          ps(), hn(), (t.flags |= 98560), (l = !1);
        else if (((l = jr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(E(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(E(317));
            l[qe] = t;
          } else
            hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (l = !1);
        } else He !== null && (fo(He), (He = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? b === 0 && (b = 3) : lu())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        vn(), ro(e, t), e === null && tr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return Vo(t.type._context), ue(t), null;
    case 17:
      return we(t.type) && ui(), ue(t), null;
    case 19:
      if (($(U), (l = t.memoizedState), l === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
        if (r) _n(l, !1);
        else {
          if (b !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = hi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    _n(l, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (o = l.alternate),
                    o === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = o.childLanes),
                        (l.lanes = o.lanes),
                        (l.child = o.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = o.memoizedProps),
                        (l.memoizedState = o.memoizedState),
                        (l.updateQueue = o.updateQueue),
                        (l.type = o.type),
                        (e = o.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            G() > gn &&
            ((t.flags |= 128), (r = !0), _n(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = hi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _n(l, !0),
              l.tail === null && l.tailMode === "hidden" && !o.alternate && !V)
            )
              return ue(t), null;
          } else
            2 * G() - l.renderingStartTime > gn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _n(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = l.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (l.last = o));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = G()),
          (t.sibling = null),
          (n = U.current),
          z(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        iu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function H2(e, t) {
  switch ((zo(t), t.tag)) {
    case 1:
      return (
        we(t.type) && ui(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vn(),
        $(ge),
        $(ce),
        Ko(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return qo(t), null;
    case 13:
      if (($(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(U), null;
    case 4:
      return vn(), null;
    case 10:
      return Vo(t.type._context), null;
    case 22:
    case 23:
      return iu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1,
  se = !1,
  I2 = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function io(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var da = !1;
function $2(e, t) {
  if ((($l = ri), (e = es()), Do(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            s = 0,
            m = 0,
            v = e,
            h = null;
          t: for (;;) {
            for (
              var g;
              v !== n || (i !== 0 && v.nodeType !== 3) || (u = o + i),
                v !== l || (r !== 0 && v.nodeType !== 3) || (a = o + r),
                v.nodeType === 3 && (o += v.nodeValue.length),
                (g = v.firstChild) !== null;

            )
              (h = v), (v = g);
            for (;;) {
              if (v === e) break t;
              if (
                (h === n && ++s === i && (u = o),
                h === l && ++m === r && (a = o),
                (g = v.nextSibling) !== null)
              )
                break;
              (v = h), (h = v.parentNode);
            }
            v = g;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vl = { focusedElem: e, selectionRange: n }, ri = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    N = w.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Ze(t.type, S),
                      N
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (x) {
          K(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (w = da), (da = !1), w;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && io(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function zi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function lo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Xs(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Xs(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[qe], delete t[rr], delete t[Bl], delete t[k2], delete t[C2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Js(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Js(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function oo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = oi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oo(e, t, n), e = e.sibling; e !== null; ) oo(e, t, n), (e = e.sibling);
}
function uo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (uo(e, t, n), e = e.sibling; e !== null; ) uo(e, t, n), (e = e.sibling);
}
var ne = null,
  ze = !1;
function ut(e, t, n) {
  for (n = n.child; n !== null; ) bs(e, t, n), (n = n.sibling);
}
function bs(e, t, n) {
  if (Ke && typeof Ke.onCommitFiberUnmount == "function")
    try {
      Ke.onCommitFiberUnmount(ji, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || rn(n, t);
    case 6:
      var r = ne,
        i = ze;
      (ne = null),
        ut(e, t, n),
        (ne = r),
        (ze = i),
        ne !== null &&
          (ze
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (ze
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? sl(e.parentNode, n)
              : e.nodeType === 1 && sl(e, n),
            Jn(e))
          : sl(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (i = ze),
        (ne = n.stateNode.containerInfo),
        (ze = !0),
        ut(e, t, n),
        (ne = r),
        (ze = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            o = l.destroy;
          (l = l.tag),
            o !== void 0 && (l & 2 || l & 4) && io(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      ut(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (rn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          K(n, t, u);
        }
      ut(e, t, n);
      break;
    case 21:
      ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), ut(e, t, n), (se = r))
        : ut(e, t, n);
      break;
    default:
      ut(e, t, n);
  }
}
function ha(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new I2()),
      t.forEach(function (r) {
        var i = Y2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ne = u.stateNode), (ze = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(E(160));
        bs(l, o, i), (ne = null), (ze = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (s) {
        K(i, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ec(t, e), (t = t.sibling);
}
function ec(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((De(t, e), Ue(e), r & 4)) {
        try {
          Vn(3, e, e.return), zi(3, e);
        } catch (S) {
          K(e, e.return, S);
        }
        try {
          Vn(5, e, e.return);
        } catch (S) {
          K(e, e.return, S);
        }
      }
      break;
    case 1:
      De(t, e), Ue(e), r & 512 && n !== null && rn(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        Ue(e),
        r & 512 && n !== null && rn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Wn(i, "");
        } catch (S) {
          K(e, e.return, S);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          o = n !== null ? n.memoizedProps : l,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && l.type === "radio" && l.name != null && S0(i, l),
              Fl(u, o);
            var s = Fl(u, l);
            for (o = 0; o < a.length; o += 2) {
              var m = a[o],
                v = a[o + 1];
              m === "style"
                ? P0(i, v)
                : m === "dangerouslySetInnerHTML"
                ? C0(i, v)
                : m === "children"
                ? Wn(i, v)
                : ko(i, m, v, s);
            }
            switch (u) {
              case "input":
                Pl(i, l);
                break;
              case "textarea":
                E0(i, l);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var g = l.value;
                g != null
                  ? on(i, !!l.multiple, g, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? on(i, !!l.multiple, l.defaultValue, !0)
                      : on(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[rr] = l;
          } catch (S) {
            K(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((De(t, e), Ue(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (S) {
          K(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jn(t.containerInfo);
        } catch (S) {
          K(e, e.return, S);
        }
      break;
    case 4:
      De(t, e), Ue(e);
      break;
    case 13:
      De(t, e),
        Ue(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (nu = G())),
        r & 4 && ha(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (s = se) || m), De(t, e), (se = s)) : De(t, e),
        Ue(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !m && e.mode & 1)
        )
          for (P = e, m = e.child; m !== null; ) {
            for (v = P = m; P !== null; ) {
              switch (((h = P), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, h, h.return);
                  break;
                case 1:
                  rn(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      K(r, n, S);
                    }
                  }
                  break;
                case 5:
                  rn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    va(v);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (P = g)) : va(v);
            }
            m = m.sibling;
          }
        e: for (m = null, v = e; ; ) {
          if (v.tag === 5) {
            if (m === null) {
              m = v;
              try {
                (i = v.stateNode),
                  s
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((u = v.stateNode),
                      (a = v.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = A0("display", o)));
              } catch (S) {
                K(e, e.return, S);
              }
            }
          } else if (v.tag === 6) {
            if (m === null)
              try {
                v.stateNode.nodeValue = s ? "" : v.memoizedProps;
              } catch (S) {
                K(e, e.return, S);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            m === v && (m = null), (v = v.return);
          }
          m === v && (m = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      De(t, e), Ue(e), r & 4 && ha(e);
      break;
    case 21:
      break;
    default:
      De(t, e), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Js(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Wn(i, ""), (r.flags &= -33));
          var l = pa(e);
          uo(e, l, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = pa(e);
          oo(e, u, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      K(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function V2(e, t, n) {
  (P = e), tc(e);
}
function tc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var i = P,
      l = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Rr;
      if (!o) {
        var u = i.alternate,
          a = (u !== null && u.memoizedState !== null) || se;
        u = Rr;
        var s = se;
        if (((Rr = o), (se = a) && !s))
          for (P = i; P !== null; )
            (o = P),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ya(i)
                : a !== null
                ? ((a.return = o), (P = a))
                : ya(i);
        for (; l !== null; ) (P = l), tc(l), (l = l.sibling);
        (P = i), (Rr = u), (se = s);
      }
      ma(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (P = l)) : ma(e);
  }
}
function ma(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || zi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Ju(t, l, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ju(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var m = s.memoizedState;
                  if (m !== null) {
                    var v = m.dehydrated;
                    v !== null && Jn(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        se || (t.flags & 512 && lo(t));
      } catch (h) {
        K(t, t.return, h);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function va(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function ya(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zi(4, t);
          } catch (a) {
            K(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              K(t, i, a);
            }
          }
          var l = t.return;
          try {
            lo(t);
          } catch (a) {
            K(t, l, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            lo(t);
          } catch (a) {
            K(t, o, a);
          }
      }
    } catch (a) {
      K(t, t.return, a);
    }
    if (t === e) {
      P = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (P = u);
      break;
    }
    P = t.return;
  }
}
var Q2 = Math.ceil,
  yi = lt.ReactCurrentDispatcher,
  eu = lt.ReactCurrentOwner,
  Ne = lt.ReactCurrentBatchConfig,
  L = 0,
  te = null,
  X = null,
  re = 0,
  ke = 0,
  ln = Pt(0),
  b = 0,
  sr = null,
  Vt = 0,
  Hi = 0,
  tu = 0,
  Qn = null,
  ve = null,
  nu = 0,
  gn = 1 / 0,
  Ye = null,
  gi = !1,
  ao = null,
  xt = null,
  Lr = !1,
  ht = null,
  wi = 0,
  Un = 0,
  so = null,
  qr = -1,
  Kr = 0;
function de() {
  return L & 6 ? G() : qr !== -1 ? qr : (qr = G());
}
function St(e) {
  return e.mode & 1
    ? L & 2 && re !== 0
      ? re & -re
      : P2.transition !== null
      ? (Kr === 0 && (Kr = z0()), Kr)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : B0(e.type))),
        e)
    : 1;
}
function $e(e, t, n, r) {
  if (50 < Un) throw ((Un = 0), (so = null), Error(E(185)));
  fr(e, n, r),
    (!(L & 2) || e !== te) &&
      (e === te && (!(L & 2) && (Hi |= n), b === 4 && dt(e, re)),
      xe(e, r),
      n === 1 && L === 0 && !(t.mode & 1) && ((gn = G() + 500), Ti && Mt()));
}
function xe(e, t) {
  var n = e.callbackNode;
  P1(e, t);
  var r = ni(e, e === te ? re : 0);
  if (r === 0)
    n !== null && Pu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Pu(n), t === 1))
      e.tag === 0 ? A2(ga.bind(null, e)) : cs(ga.bind(null, e)),
        S2(function () {
          !(L & 6) && Mt();
        }),
        (n = null);
    else {
      switch (H0(r)) {
        case 1:
          n = Oo;
          break;
        case 4:
          n = D0;
          break;
        case 16:
          n = ti;
          break;
        case 536870912:
          n = Z0;
          break;
        default:
          n = ti;
      }
      n = sc(n, nc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function nc(e, t) {
  if (((qr = -1), (Kr = 0), L & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (fn() && e.callbackNode !== n) return null;
  var r = ni(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = xi(e, r);
  else {
    t = r;
    var i = L;
    L |= 2;
    var l = ic();
    (te !== e || re !== t) && ((Ye = null), (gn = G() + 500), Zt(e, t));
    do
      try {
        q2();
        break;
      } catch (u) {
        rc(e, u);
      }
    while (!0);
    $o(),
      (yi.current = l),
      (L = i),
      X !== null ? (t = 0) : ((te = null), (re = 0), (t = b));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Dl(e)), i !== 0 && ((r = i), (t = co(e, i)))), t === 1)
    )
      throw ((n = sr), Zt(e, 0), dt(e, r), xe(e, G()), n);
    if (t === 6) dt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !U2(i) &&
          ((t = xi(e, r)),
          t === 2 && ((l = Dl(e)), l !== 0 && ((r = l), (t = co(e, l)))),
          t === 1))
      )
        throw ((n = sr), Zt(e, 0), dt(e, r), xe(e, G()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Nt(e, ve, Ye);
          break;
        case 3:
          if (
            (dt(e, r), (r & 130023424) === r && ((t = nu + 500 - G()), 10 < t))
          ) {
            if (ni(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ul(Nt.bind(null, e, ve, Ye), t);
            break;
          }
          Nt(e, ve, Ye);
          break;
        case 4:
          if ((dt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ie(r);
            (l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l);
          }
          if (
            ((r = i),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Q2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ul(Nt.bind(null, e, ve, Ye), r);
            break;
          }
          Nt(e, ve, Ye);
          break;
        case 5:
          Nt(e, ve, Ye);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return xe(e, G()), e.callbackNode === n ? nc.bind(null, e) : null;
}
function co(e, t) {
  var n = Qn;
  return (
    e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256),
    (e = xi(e, t)),
    e !== 2 && ((t = ve), (ve = n), t !== null && fo(t)),
    e
  );
}
function fo(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e);
}
function U2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!Ve(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function dt(e, t) {
  for (
    t &= ~tu,
      t &= ~Hi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ga(e) {
  if (L & 6) throw Error(E(327));
  fn();
  var t = ni(e, 0);
  if (!(t & 1)) return xe(e, G()), null;
  var n = xi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Dl(e);
    r !== 0 && ((t = r), (n = co(e, r)));
  }
  if (n === 1) throw ((n = sr), Zt(e, 0), dt(e, t), xe(e, G()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nt(e, ve, Ye),
    xe(e, G()),
    null
  );
}
function ru(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    (L = n), L === 0 && ((gn = G() + 500), Ti && Mt());
  }
}
function Qt(e) {
  ht !== null && ht.tag === 0 && !(L & 6) && fn();
  var t = L;
  L |= 1;
  var n = Ne.transition,
    r = D;
  try {
    if (((Ne.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Ne.transition = n), (L = t), !(L & 6) && Mt();
  }
}
function iu() {
  (ke = ln.current), $(ln);
}
function Zt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), x2(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((zo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ui();
          break;
        case 3:
          vn(), $(ge), $(ce), Ko();
          break;
        case 5:
          qo(r);
          break;
        case 4:
          vn();
          break;
        case 13:
          $(U);
          break;
        case 19:
          $(U);
          break;
        case 10:
          Vo(r.type._context);
          break;
        case 22:
        case 23:
          iu();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (X = e = Et(e.current, null)),
    (re = ke = t),
    (b = 0),
    (sr = null),
    (tu = Hi = Vt = 0),
    (ve = Qn = null),
    Lt !== null)
  ) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var o = l.next;
          (l.next = i), (r.next = o);
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function rc(e, t) {
  do {
    var n = X;
    try {
      if (($o(), (Qr.current = vi), mi)) {
        for (var r = B.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        mi = !1;
      }
      if (
        (($t = 0),
        (ee = J = B = null),
        ($n = !1),
        (or = 0),
        (eu.current = null),
        n === null || n.return === null)
      ) {
        (b = 1), (sr = t), (X = null);
        break;
      }
      e: {
        var l = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            m = u,
            v = m.tag;
          if (!(m.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var h = m.alternate;
            h
              ? ((m.updateQueue = h.updateQueue),
                (m.memoizedState = h.memoizedState),
                (m.lanes = h.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var g = la(o);
          if (g !== null) {
            (g.flags &= -257),
              oa(g, o, u, l, t),
              g.mode & 1 && ia(l, s, t),
              (t = g),
              (a = s);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(a), (t.updateQueue = S);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ia(l, s, t), lu();
              break e;
            }
            a = Error(E(426));
          }
        } else if (V && u.mode & 1) {
          var N = la(o);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              oa(N, o, u, l, t),
              Ho(yn(a, u));
            break e;
          }
        }
        (l = a = yn(a, u)),
          b !== 4 && (b = 2),
          Qn === null ? (Qn = [l]) : Qn.push(l),
          (l = o);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var p = Is(l, a, t);
              Xu(l, p);
              break e;
            case 1:
              u = a;
              var f = l.type,
                d = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (xt === null || !xt.has(d))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var x = $s(l, u, t);
                Xu(l, x);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      oc(n);
    } catch (C) {
      (t = C), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ic() {
  var e = yi.current;
  return (yi.current = vi), e === null ? vi : e;
}
function lu() {
  (b === 0 || b === 3 || b === 2) && (b = 4),
    te === null || (!(Vt & 268435455) && !(Hi & 268435455)) || dt(te, re);
}
function xi(e, t) {
  var n = L;
  L |= 2;
  var r = ic();
  (te !== e || re !== t) && ((Ye = null), Zt(e, t));
  do
    try {
      B2();
      break;
    } catch (i) {
      rc(e, i);
    }
  while (!0);
  if (($o(), (L = n), (yi.current = r), X !== null)) throw Error(E(261));
  return (te = null), (re = 0), b;
}
function B2() {
  for (; X !== null; ) lc(X);
}
function q2() {
  for (; X !== null && !y1(); ) lc(X);
}
function lc(e) {
  var t = ac(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? oc(e) : (X = t),
    (eu.current = null);
}
function oc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = H2(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (b = 6), (X = null);
        return;
      }
    } else if (((n = z2(n, t, ke)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function Nt(e, t, n) {
  var r = D,
    i = Ne.transition;
  try {
    (Ne.transition = null), (D = 1), K2(e, t, n, r);
  } finally {
    (Ne.transition = i), (D = r);
  }
  return null;
}
function K2(e, t, n, r) {
  do fn();
  while (ht !== null);
  if (L & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (M1(e, l),
    e === te && ((X = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Lr ||
      ((Lr = !0),
      sc(ti, function () {
        return fn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Ne.transition), (Ne.transition = null);
    var o = D;
    D = 1;
    var u = L;
    (L |= 4),
      (eu.current = null),
      $2(e, n),
      ec(n, e),
      p2(Vl),
      (ri = !!$l),
      (Vl = $l = null),
      (e.current = n),
      V2(n),
      g1(),
      (L = u),
      (D = o),
      (Ne.transition = l);
  } else e.current = n;
  if (
    (Lr && ((Lr = !1), (ht = e), (wi = i)),
    (l = e.pendingLanes),
    l === 0 && (xt = null),
    S1(n.stateNode),
    xe(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (gi) throw ((gi = !1), (e = ao), (ao = null), e);
  return (
    wi & 1 && e.tag !== 0 && fn(),
    (l = e.pendingLanes),
    l & 1 ? (e === so ? Un++ : ((Un = 0), (so = e))) : (Un = 0),
    Mt(),
    null
  );
}
function fn() {
  if (ht !== null) {
    var e = H0(wi),
      t = Ne.transition,
      n = D;
    try {
      if (((Ne.transition = null), (D = 16 > e ? 16 : e), ht === null))
        var r = !1;
      else {
        if (((e = ht), (ht = null), (wi = 0), L & 6)) throw Error(E(331));
        var i = L;
        for (L |= 4, P = e.current; P !== null; ) {
          var l = P,
            o = l.child;
          if (P.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (P = s; P !== null; ) {
                  var m = P;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, m, l);
                  }
                  var v = m.child;
                  if (v !== null) (v.return = m), (P = v);
                  else
                    for (; P !== null; ) {
                      m = P;
                      var h = m.sibling,
                        g = m.return;
                      if ((Xs(m), m === s)) {
                        P = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (P = h);
                        break;
                      }
                      P = g;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var N = S.sibling;
                    (S.sibling = null), (S = N);
                  } while (S !== null);
                }
              }
              P = l;
            }
          }
          if (l.subtreeFlags & 2064 && o !== null) (o.return = l), (P = o);
          else
            e: for (; P !== null; ) {
              if (((l = P), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, l, l.return);
                }
              var p = l.sibling;
              if (p !== null) {
                (p.return = l.return), (P = p);
                break e;
              }
              P = l.return;
            }
        }
        var f = e.current;
        for (P = f; P !== null; ) {
          o = P;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (P = d);
          else
            e: for (o = f; P !== null; ) {
              if (((u = P), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zi(9, u);
                  }
                } catch (C) {
                  K(u, u.return, C);
                }
              if (u === o) {
                P = null;
                break e;
              }
              var x = u.sibling;
              if (x !== null) {
                (x.return = u.return), (P = x);
                break e;
              }
              P = u.return;
            }
        }
        if (
          ((L = i), Mt(), Ke && typeof Ke.onPostCommitFiberRoot == "function")
        )
          try {
            Ke.onPostCommitFiberRoot(ji, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Ne.transition = t);
    }
  }
  return !1;
}
function wa(e, t, n) {
  (t = yn(n, t)),
    (t = Is(e, t, 1)),
    (e = wt(e, t, 1)),
    (t = de()),
    e !== null && (fr(e, 1, t), xe(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) wa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (xt === null || !xt.has(r)))
        ) {
          (e = yn(n, e)),
            (e = $s(t, e, 1)),
            (t = wt(t, e, 1)),
            (e = de()),
            t !== null && (fr(t, 1, e), xe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function W2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (b === 4 || (b === 3 && (re & 130023424) === re && 500 > G() - nu)
        ? Zt(e, 0)
        : (tu |= n)),
    xe(e, t);
}
function uc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cr), (Cr <<= 1), !(Cr & 130023424) && (Cr = 4194304))
      : (t = 1));
  var n = de();
  (e = rt(e, t)), e !== null && (fr(e, t, n), xe(e, n));
}
function G2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), uc(e, n);
}
function Y2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), uc(e, n);
}
var ac;
ac = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), Z2(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), V && t.flags & 1048576 && fs(t, ci, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Br(e, t), (e = t.pendingProps);
      var i = pn(t, ce.current);
      cn(t, n), (i = Go(null, t, r, e, i, n));
      var l = Yo();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            we(r) ? ((l = !0), ai(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Uo(t),
            (i.updater = Di),
            (t.stateNode = i),
            (i._reactInternals = t),
            Xl(t, r, e, n),
            (t = eo(null, t, r, !0, l, n)))
          : ((t.tag = 0), V && l && Zo(t), fe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Br(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = J2(r)),
          (e = Ze(r, e)),
          i)
        ) {
          case 0:
            t = bl(null, t, r, e, n);
            break e;
          case 1:
            t = sa(null, t, r, e, n);
            break e;
          case 11:
            t = ua(null, t, r, e, n);
            break e;
          case 14:
            t = aa(null, t, r, Ze(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        bl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        sa(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Bs(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          ms(e, t),
          pi(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = yn(Error(E(423)), t)), (t = ca(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = yn(Error(E(424)), t)), (t = ca(e, t, r, n, i));
            break e;
          } else
            for (
              Ce = gt(t.stateNode.containerInfo.firstChild),
                Ae = t,
                V = !0,
                He = null,
                n = ws(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hn(), r === i)) {
            t = it(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        xs(t),
        e === null && Wl(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Ql(r, i) ? (o = null) : l !== null && Ql(r, l) && (t.flags |= 32),
        Us(e, t),
        fe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Wl(t), null;
    case 13:
      return qs(e, t, n);
    case 4:
      return (
        Bo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = mn(t, null, r, n)) : fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        ua(e, t, r, i, n)
      );
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (o = i.value),
          z(fi, r._currentValue),
          (r._currentValue = o),
          l !== null)
        )
          if (Ve(l.value, o)) {
            if (l.children === i.children && !ge.current) {
              t = it(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var u = l.dependencies;
              if (u !== null) {
                o = l.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = et(-1, n & -n)), (a.tag = 2);
                      var s = l.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var m = s.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (s.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      Gl(l.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((o = l.return), o === null)) throw Error(E(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Gl(o, n, t),
                  (o = l.sibling);
              } else o = l.child;
              if (o !== null) o.return = l;
              else
                for (o = l; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((l = o.sibling), l !== null)) {
                    (l.return = o.return), (o = l);
                    break;
                  }
                  o = o.return;
                }
              l = o;
            }
        fe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        cn(t, n),
        (i = Re(i)),
        (r = r(i)),
        (t.flags |= 1),
        fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ze(r, t.pendingProps)),
        (i = Ze(r.type, i)),
        aa(e, t, r, i, n)
      );
    case 15:
      return Vs(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ze(r, i)),
        Br(e, t),
        (t.tag = 1),
        we(r) ? ((e = !0), ai(t)) : (e = !1),
        cn(t, n),
        ys(t, r, i),
        Xl(t, r, i, n),
        eo(null, t, r, !0, e, n)
      );
    case 19:
      return Ks(e, t, n);
    case 22:
      return Qs(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function sc(e, t) {
  return T0(e, t);
}
function X2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Fe(e, t, n, r) {
  return new X2(e, t, n, r);
}
function ou(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function J2(e) {
  if (typeof e == "function") return ou(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ao)) return 11;
    if (e === Po) return 14;
  }
  return 2;
}
function Et(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Fe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Wr(e, t, n, r, i, l) {
  var o = 2;
  if (((r = e), typeof e == "function")) ou(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Wt:
        return zt(n.children, i, l, t);
      case Co:
        (o = 8), (i |= 8);
        break;
      case Sl:
        return (
          (e = Fe(12, n, t, i | 2)), (e.elementType = Sl), (e.lanes = l), e
        );
      case El:
        return (e = Fe(13, n, t, i)), (e.elementType = El), (e.lanes = l), e;
      case kl:
        return (e = Fe(19, n, t, i)), (e.elementType = kl), (e.lanes = l), e;
      case g0:
        return Ii(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case v0:
              o = 10;
              break e;
            case y0:
              o = 9;
              break e;
            case Ao:
              o = 11;
              break e;
            case Po:
              o = 14;
              break e;
            case at:
              (o = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Fe(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function zt(e, t, n, r) {
  return (e = Fe(7, e, r, t)), (e.lanes = n), e;
}
function Ii(e, t, n, r) {
  return (
    (e = Fe(22, e, r, t)),
    (e.elementType = g0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yl(e, t, n) {
  return (e = Fe(6, e, null, t)), (e.lanes = n), e;
}
function gl(e, t, n) {
  return (
    (t = Fe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function b2(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ji(0)),
    (this.expirationTimes = Ji(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ji(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function uu(e, t, n, r, i, l, o, u, a) {
  return (
    (e = new b2(e, t, n, u, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Fe(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Uo(l),
    e
  );
}
function ef(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Kt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function cc(e) {
  if (!e) return Ct;
  e = e._reactInternals;
  e: {
    if (Bt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (we(n)) return ss(e, n, t);
  }
  return t;
}
function fc(e, t, n, r, i, l, o, u, a) {
  return (
    (e = uu(n, r, !0, e, i, l, o, u, a)),
    (e.context = cc(null)),
    (n = e.current),
    (r = de()),
    (i = St(n)),
    (l = et(r, i)),
    (l.callback = t ?? null),
    wt(n, l, i),
    (e.current.lanes = i),
    fr(e, i, r),
    xe(e, r),
    e
  );
}
function $i(e, t, n, r) {
  var i = t.current,
    l = de(),
    o = St(i);
  return (
    (n = cc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = et(l, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = wt(i, t, o)),
    e !== null && ($e(e, i, o, l), Vr(e, i, o)),
    o
  );
}
function Si(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function au(e, t) {
  xa(e, t), (e = e.alternate) && xa(e, t);
}
function tf() {
  return null;
}
var dc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function su(e) {
  this._internalRoot = e;
}
Vi.prototype.render = su.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  $i(e, t, null, null);
};
Vi.prototype.unmount = su.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function () {
      $i(null, e, null, null);
    }),
      (t[nt] = null);
  }
};
function Vi(e) {
  this._internalRoot = e;
}
Vi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = V0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ft.length && t !== 0 && t < ft[n].priority; n++);
    ft.splice(n, 0, e), n === 0 && U0(e);
  }
};
function cu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Qi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Sa() {}
function nf(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var s = Si(o);
        l.call(s);
      };
    }
    var o = fc(t, r, e, 0, null, !1, !1, "", Sa);
    return (
      (e._reactRootContainer = o),
      (e[nt] = o.current),
      tr(e.nodeType === 8 ? e.parentNode : e),
      Qt(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = Si(a);
      u.call(s);
    };
  }
  var a = uu(e, 0, !1, null, null, !1, !1, "", Sa);
  return (
    (e._reactRootContainer = a),
    (e[nt] = a.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    Qt(function () {
      $i(t, a, n, r);
    }),
    a
  );
}
function Ui(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var o = l;
    if (typeof i == "function") {
      var u = i;
      i = function () {
        var a = Si(o);
        u.call(a);
      };
    }
    $i(t, o, e, i);
  } else o = nf(n, t, e, i, r);
  return Si(o);
}
I0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 &&
          (_o(t, n | 1), xe(t, G()), !(L & 6) && ((gn = G() + 500), Mt()));
      }
      break;
    case 13:
      Qt(function () {
        var r = rt(e, 1);
        if (r !== null) {
          var i = de();
          $e(r, e, 1, i);
        }
      }),
        au(e, 1);
  }
};
jo = function (e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = de();
      $e(t, e, 134217728, n);
    }
    au(e, 134217728);
  }
};
$0 = function (e) {
  if (e.tag === 13) {
    var t = St(e),
      n = rt(e, t);
    if (n !== null) {
      var r = de();
      $e(n, e, t, r);
    }
    au(e, t);
  }
};
V0 = function () {
  return D;
};
Q0 = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
Rl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Pl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Li(r);
            if (!i) throw Error(E(90));
            x0(r), Pl(r, i);
          }
        }
      }
      break;
    case "textarea":
      E0(e, n);
      break;
    case "select":
      (t = n.value), t != null && on(e, !!n.multiple, t, !1);
  }
};
_0 = ru;
j0 = Qt;
var rf = { usingClientEntryPoint: !1, Events: [pr, Jt, Li, M0, O0, ru] },
  jn = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  lf = {
    bundleType: jn.bundleType,
    version: jn.version,
    rendererPackageName: jn.rendererPackageName,
    rendererConfig: jn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = R0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: jn.findFiberByHostInstance || tf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber)
    try {
      (ji = Tr.inject(lf)), (Ke = Tr);
    } catch {}
}
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rf;
Me.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!cu(t)) throw Error(E(200));
  return ef(e, t, null, n);
};
Me.createRoot = function (e, t) {
  if (!cu(e)) throw Error(E(299));
  var n = !1,
    r = "",
    i = dc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = uu(e, 1, !1, null, null, n, !1, r, i)),
    (e[nt] = t.current),
    tr(e.nodeType === 8 ? e.parentNode : e),
    new su(t)
  );
};
Me.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = R0(t)), (e = e === null ? null : e.stateNode), e;
};
Me.flushSync = function (e) {
  return Qt(e);
};
Me.hydrate = function (e, t, n) {
  if (!Qi(t)) throw Error(E(200));
  return Ui(null, e, t, !0, n);
};
Me.hydrateRoot = function (e, t, n) {
  if (!cu(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    o = dc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = fc(t, null, e, 1, n ?? null, i, !1, l, o)),
    (e[nt] = t.current),
    tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Vi(t);
};
Me.render = function (e, t, n) {
  if (!Qi(t)) throw Error(E(200));
  return Ui(null, e, t, !1, n);
};
Me.unmountComponentAtNode = function (e) {
  if (!Qi(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Qt(function () {
        Ui(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nt] = null);
        });
      }),
      !0)
    : !1;
};
Me.unstable_batchedUpdates = ru;
Me.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Qi(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Ui(e, t, n, !1, r);
};
Me.version = "18.2.0-next-9e3b772b8-20220608";
function pc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc);
    } catch (e) {
      console.error(e);
    }
}
pc(), (f0.exports = Me);
var hc = f0.exports;
const of = e0(hc);
var Ea = hc;
(wl.createRoot = Ea.createRoot), (wl.hydrateRoot = Ea.hydrateRoot);
const uf = Q.createContext({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1,
});
var af = Object.defineProperty,
  Ei = Object.getOwnPropertySymbols,
  mc = Object.prototype.hasOwnProperty,
  vc = Object.prototype.propertyIsEnumerable,
  ka = (e, t, n) =>
    t in e
      ? af(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ca = (e, t) => {
    for (var n in t || (t = {})) mc.call(t, n) && ka(e, n, t[n]);
    if (Ei) for (var n of Ei(t)) vc.call(t, n) && ka(e, n, t[n]);
    return e;
  },
  Aa = (e, t) => {
    var n = {};
    for (var r in e) mc.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Ei)
      for (var r of Ei(e)) t.indexOf(r) < 0 && vc.call(e, r) && (n[r] = e[r]);
    return n;
  };
const Qe = Q.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: i,
      size: l,
      weight: o,
      mirrored: u,
      children: a,
      weights: s,
    } = n,
    m = Aa(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]),
    v = Q.useContext(uf),
    {
      color: h = "currentColor",
      size: g,
      weight: w = "regular",
      mirrored: S = !1,
    } = v,
    N = Aa(v, ["color", "size", "weight", "mirrored"]);
  return c.createElement(
    "svg",
    Ca(
      Ca(
        {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: l ?? g,
          height: l ?? g,
          fill: i ?? h,
          viewBox: "0 0 256 256",
          transform: u || S ? "scale(-1, 1)" : void 0,
        },
        N
      ),
      m
    ),
    !!r && c.createElement("title", null, r),
    a,
    s.get(o ?? w)
  );
});
Qe.displayName = "IconBase";
const sf = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,20H72A36,36,0,0,0,36,56V224a12,12,0,0,0,12,12H192a12,12,0,0,0,0-24H60v-4a12,12,0,0,1,12-12H208a12,12,0,0,0,12-12V32A12,12,0,0,0,208,20ZM196,172H72a35.59,35.59,0,0,0-12,2.06V56A12,12,0,0,1,72,44H196Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M216,32V192a8,8,0,0,1-8,8H72a16,16,0,0,0-16,16H192a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V56A32,32,0,0,1,72,24H208A8,8,0,0,1,216,32Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,26H72A30,30,0,0,0,42,56V224a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12H54v-2a18,18,0,0,1,18-18H208a6,6,0,0,0,6-6V32A6,6,0,0,0,208,26Zm-6,160H72a29.87,29.87,0,0,0-18,6V56A18,18,0,0,1,72,38H202Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,28H72A28,28,0,0,0,44,56V224a4,4,0,0,0,4,4H192a4,4,0,0,0,0-8H52v-4a20,20,0,0,1,20-20H208a4,4,0,0,0,4-4V32A4,4,0,0,0,208,28Zm-4,160H72a27.94,27.94,0,0,0-20,8.42V56A20,20,0,0,1,72,36H204Z",
        })
      ),
    ],
  ]),
  cf = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M252,124a60.14,60.14,0,0,0-32-53.08,52,52,0,0,0-92-32.11A52,52,0,0,0,36,70.92a60,60,0,0,0,0,106.14,52,52,0,0,0,92,32.13,52,52,0,0,0,92-32.13A60.05,60.05,0,0,0,252,124ZM88,204a28,28,0,0,1-26.85-20.07c1,0,1.89.07,2.85.07h8a12,12,0,0,0,0-24H64A36,36,0,0,1,52,90.05a12,12,0,0,0,8-11.32V72a28,28,0,0,1,56,0v60.15a52.43,52.43,0,0,0-12.4-5.77,12,12,0,0,0-7.2,22.9A28,28,0,0,1,88,204Zm104-44h-8a12,12,0,0,0,0,24h8c1,0,1.9,0,2.85-.07a28,28,0,1,1-35.18-34.67,12,12,0,0,0-7.13-22.92A52,52,0,0,0,140,132.15V72a28,28,0,0,1,56,0v6.73a12,12,0,0,0,8,11.32,36,36,0,0,1-12,70Zm16-44a12,12,0,0,1-12,12,40,40,0,0,1-40-40V84a12,12,0,0,1,24,0v4a16,16,0,0,0,16,16A12,12,0,0,1,208,116ZM60,128a12,12,0,0,1,0-24A16,16,0,0,0,76,88V84a12,12,0,0,1,24,0v4A40,40,0,0,1,60,128Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M240,124a48,48,0,0,1-32,45.27h0V176a40,40,0,0,1-80,0,40,40,0,0,1-80,0v-6.73h0a48,48,0,0,1,0-90.54V72a40,40,0,0,1,80,0,40,40,0,0,1,80,0v6.73A48,48,0,0,1,240,124Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M212,76V72a44,44,0,0,0-74.86-31.31,3.93,3.93,0,0,0-1.14,2.8v88.72a4,4,0,0,0,6.2,3.33A47.67,47.67,0,0,1,167.68,128a8.18,8.18,0,0,1,8.31,7.58,8,8,0,0,1-8,8.42,32,32,0,0,0-32,32v33.88a4,4,0,0,0,1.49,3.12,47.92,47.92,0,0,0,74.21-17.16,4,4,0,0,0-4.49-5.56A68.06,68.06,0,0,1,192,192h-7.73a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h8a51.6,51.6,0,0,0,24-5.88v0A52,52,0,0,0,212,76Zm-12,36h-4a36,36,0,0,1-36-36V72a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4a8,8,0,0,1,0,16ZM88,28A44.05,44.05,0,0,0,44,72v4a52,52,0,0,0-4,94.12h0A51.6,51.6,0,0,0,64,176h7.73A8.18,8.18,0,0,1,80,183.47,8,8,0,0,1,72,192H64a67.48,67.48,0,0,1-15.21-1.73,4,4,0,0,0-4.5,5.55A47.93,47.93,0,0,0,118.51,213a4,4,0,0,0,1.49-3.12V176a32,32,0,0,0-32-32,8,8,0,0,1-8-8.42A8.18,8.18,0,0,1,88.32,128a47.67,47.67,0,0,1,25.48,7.54,4,4,0,0,0,6.2-3.33V43.49a4,4,0,0,0-1.14-2.81A43.85,43.85,0,0,0,88,28Zm8,48a36,36,0,0,1-36,36H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,76V72a8,8,0,0,1,16,0Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M246,124a54.13,54.13,0,0,0-32-49.33V72a46,46,0,0,0-86-22.67A46,46,0,0,0,42,72v2.67a54,54,0,0,0,0,98.63V176a46,46,0,0,0,86,22.67A46,46,0,0,0,214,176v-2.7A54.07,54.07,0,0,0,246,124ZM88,210a34,34,0,0,1-34-32.94A53.67,53.67,0,0,0,64,178h8a6,6,0,0,0,0-12H64A42,42,0,0,1,50,84.39a6,6,0,0,0,4-5.66V72a34,34,0,0,1,68,0v73.05A45.89,45.89,0,0,0,88,130a6,6,0,0,0,0,12,34,34,0,0,1,0,68Zm104-44h-8a6,6,0,0,0,0,12h8a53.67,53.67,0,0,0,10-.94A34,34,0,1,1,168,142a6,6,0,0,0,0-12,45.89,45.89,0,0,0-34,15.05V72a34,34,0,0,1,68,0v6.73a6,6,0,0,0,4,5.66A42,42,0,0,1,192,166Zm14-54a6,6,0,0,1-6,6h-4a34,34,0,0,1-34-34V80a6,6,0,0,1,12,0v4a22,22,0,0,0,22,22h4A6,6,0,0,1,206,112ZM60,118H56a6,6,0,0,1,0-12h4A22,22,0,0,0,82,84V80a6,6,0,0,1,12,0v4A34,34,0,0,1,60,118Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M244,124a52.1,52.1,0,0,0-32-48V72a44,44,0,0,0-84-18.3A44,44,0,0,0,44,72v4a52,52,0,0,0,0,96v4a44,44,0,0,0,84,18.3A44,44,0,0,0,212,176v-4A52.07,52.07,0,0,0,244,124ZM88,212a36,36,0,0,1-36-36v-1.41A52.13,52.13,0,0,0,64,176h8a4,4,0,0,0,0-8H64A44,44,0,0,1,49.33,82.5,4,4,0,0,0,52,78.73V72a36,36,0,0,1,72,0v78.75A44,44,0,0,0,88,132a4,4,0,0,0,0,8,36,36,0,0,1,0,72Zm104-44h-8a4,4,0,0,0,0,8h8a52.13,52.13,0,0,0,12-1.41V176a36,36,0,1,1-36-36,4,4,0,0,0,0-8,44,44,0,0,0-36,18.75V72a36,36,0,0,1,72,0v6.73a4,4,0,0,0,2.67,3.77A44,44,0,0,1,192,168Zm12-56a4,4,0,0,1-4,4h-4a32,32,0,0,1-32-32V80a4,4,0,0,1,8,0v4a24,24,0,0,0,24,24h4A4,4,0,0,1,204,112ZM92,84a32,32,0,0,1-32,32H56a4,4,0,0,1,0-8h4A24,24,0,0,0,84,84V80a4,4,0,0,1,8,0Z",
        })
      ),
    ],
  ]),
  ff = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M240,128l-48,40H64L16,128,64,88H192Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z",
        })
      ),
    ],
  ]),
  df = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", { d: "M224,56l-96,88L32,56Z", opacity: "0.2" }),
        c.createElement("path", {
          d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.57L42.28,60H213.72ZM104.63,128,36,190.91V65.09Zm5.92,5.43L125.3,147a4,4,0,0,0,5.4,0l14.75-13.52L213.72,196H42.28ZM151.37,128,220,65.09V190.91Z",
        })
      ),
    ],
  ]),
  pf = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M203.94,76.16A55.73,55.73,0,0,0,199.46,30,4,4,0,0,0,196,28a55.78,55.78,0,0,0-46,24H122A55.78,55.78,0,0,0,76,28a4,4,0,0,0-3.46,2,55.73,55.73,0,0,0-4.48,46.16A53.78,53.78,0,0,0,60,104v8a52.06,52.06,0,0,0,52,52h1.41A36,36,0,0,0,100,192v12H72a28,28,0,0,1-28-28A36,36,0,0,0,8,140a4,4,0,0,0,0,8,28,28,0,0,1,28,28,36,36,0,0,0,36,36h28v20a4,4,0,0,0,8,0V192a28,28,0,0,1,56,0v40a4,4,0,0,0,8,0V192a36,36,0,0,0-13.41-28H160a52.06,52.06,0,0,0,52-52v-8A53.78,53.78,0,0,0,203.94,76.16ZM204,112a44.05,44.05,0,0,1-44,44H112a44.05,44.05,0,0,1-44-44v-8a45.76,45.76,0,0,1,7.71-24.89,4,4,0,0,0,.53-3.84,47.82,47.82,0,0,1,2.1-39.21,47.8,47.8,0,0,1,38.12,22.1A4,4,0,0,0,119.83,60h32.34a4,4,0,0,0,3.37-1.84,47.8,47.8,0,0,1,38.12-22.1,47.82,47.82,0,0,1,2.1,39.21,4,4,0,0,0,.53,3.83A45.85,45.85,0,0,1,204,104Z",
        })
      ),
    ],
  ]),
  hf = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M136.37,187.53a12,12,0,0,1,0,17l-5.94,5.94a60,60,0,0,1-84.88-84.88l24.12-24.11A60,60,0,0,1,152,99,12,12,0,1,1,136,117a36,36,0,0,0-49.37,1.47L62.53,142.55a36,36,0,0,0,50.92,50.92l5.94-5.94A12,12,0,0,1,136.37,187.53Zm74.08-142a60.09,60.09,0,0,0-84.88,0l-5.94,5.94a12,12,0,0,0,17,17l5.94-5.94a36,36,0,0,1,50.92,50.92l-24.11,24.12A36,36,0,0,1,120,139,12,12,0,1,0,104,157a60,60,0,0,0,82.3-2.43l24.12-24.11A60.09,60.09,0,0,0,210.45,45.55Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M209.94,113.94l-28,28a47.76,47.76,0,0,1-26.52,13.48,47.76,47.76,0,0,1-13.48,26.52l-28,28a48,48,0,0,1-67.88-67.88l28-28a47.76,47.76,0,0,1,26.52-13.48,47.76,47.76,0,0,1,13.48-26.52l28-28a48,48,0,0,1,67.88,67.88Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M137.54,186.36a8,8,0,0,1,0,11.31l-17.94,18A56,56,0,0,1,40.38,136.4L68.5,108.29A56,56,0,0,1,145.31,106a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L51.7,147.72a40,40,0,1,0,56.58,56.58l17.94-17.94A8,8,0,0,1,137.54,186.36Zm78.08-146a56.08,56.08,0,0,0-79.22,0L118.46,58.33a8,8,0,0,0,11.32,11.31L147.72,51.7a40,40,0,0,1,56.58,56.58L176.18,136.4A40,40,0,0,1,121.33,138,8,8,0,1,0,110.69,150a56,56,0,0,0,76.81-2.27l28.12-28.11A56.08,56.08,0,0,0,215.62,40.38Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128.57,189.66l-5.46,5.45a44,44,0,0,1-62.22-62.22l24-24a44.08,44.08,0,0,1,55.56-5.48,8,8,0,0,1-8.9,13.3A28,28,0,0,0,96.2,120.2l-24,24a28,28,0,0,0,39.6,39.6l5.45-5.46a8,8,0,0,1,11.32,11.32Zm66.54-66.55-24,24a44.08,44.08,0,0,1-55.56,5.48,8,8,0,0,1,8.9-13.3,28.06,28.06,0,0,0,35.35-3.49l24-24a28,28,0,0,0-39.6-39.6l-5.45,5.46a8,8,0,0,1-11.32-11.32l5.46-5.45a44,44,0,0,1,62.22,62.22Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M136.13,187.77a6,6,0,0,1,0,8.49l-9.95,9.94A54,54,0,0,1,49.8,129.82L73.91,105.7A54,54,0,0,1,148,103.51a6,6,0,1,1-8,9,42,42,0,0,0-57.6,1.71L58.28,138.3a42,42,0,0,0,59.42,59.42l9.94-9.95A6,6,0,0,1,136.13,187.77Zm70.07-138a54.06,54.06,0,0,0-76.38,0l-9.95,9.94a6,6,0,0,0,8.49,8.49l9.94-10a42,42,0,0,1,59.42,59.42L173.6,141.81a42,42,0,0,1-57.6,1.71,6,6,0,1,0-8,9,54,54,0,0,0,74.07-2.19l24.11-24.12A54,54,0,0,0,206.2,49.8Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M134.71,189.19a4,4,0,0,1,0,5.66l-9.94,9.94a52,52,0,0,1-73.56-73.56l24.12-24.12a52,52,0,0,1,71.32-2.1,4,4,0,1,1-5.32,6A44,44,0,0,0,81,112.77L56.87,136.89a44,44,0,0,0,62.24,62.24l9.94-9.94A4,4,0,0,1,134.71,189.19Zm70.08-138a52.07,52.07,0,0,0-73.56,0l-9.94,9.94A4,4,0,1,0,127,66.81l9.94-9.94a44,44,0,0,1,62.24,62.24L175,143.23A44,44,0,0,1,114.67,145a4,4,0,1,0-5.32,6,52,52,0,0,0,71.32-2.1l24.12-24.12A52.07,52.07,0,0,0,204.79,51.21Z",
        })
      ),
    ],
  ]),
  mf = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V124a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,152v24a12,12,0,0,1-24,0V152a16,16,0,0,0-32,0v24a12,12,0,0,1-24,0ZM96,124v52a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z",
        })
      ),
    ],
  ]),
  vf = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M232.13,143.64a6,6,0,0,0-6-1.49A90.07,90.07,0,0,1,113.86,29.85a6,6,0,0,0-7.49-7.48A102.88,102.88,0,0,0,54.48,58.68,102,102,0,0,0,197.32,201.52a102.88,102.88,0,0,0,36.31-51.89A6,6,0,0,0,232.13,143.64Zm-42,48.29a90,90,0,0,1-126-126A90.9,90.9,0,0,1,99.65,37.66,102.06,102.06,0,0,0,218.34,156.35,90.9,90.9,0,0,1,190.1,191.93Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M230.72,145.06a4,4,0,0,0-4-1A92.08,92.08,0,0,1,111.94,29.27a4,4,0,0,0-5-5A100.78,100.78,0,0,0,56.08,59.88a100,100,0,0,0,140,140,100.78,100.78,0,0,0,35.59-50.87A4,4,0,0,0,230.72,145.06ZM191.3,193.53A92,92,0,0,1,62.47,64.7a93,93,0,0,1,39.88-30.35,100.09,100.09,0,0,0,119.3,119.3A93,93,0,0,1,191.3,193.53Z",
        })
      ),
    ],
  ]),
  yf = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M116,32V16a12,12,0,0,1,24,0V32a12,12,0,0,1-24,0Zm80,96a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM44,128a12,12,0,0,0-12-12H16a12,12,0,0,0,0,24H32A12,12,0,0,0,44,128Zm84,84a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V224A12,12,0,0,0,128,212Zm112-96H224a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z",
        })
      ),
    ],
  ]),
  gf = new Map([
    [
      "bold",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z",
        })
      ),
    ],
    [
      "duotone",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",
          opacity: "0.2",
        }),
        c.createElement("path", {
          d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z",
        })
      ),
    ],
    [
      "fill",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z",
        })
      ),
    ],
    [
      "light",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z",
        })
      ),
    ],
    [
      "regular",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z",
        })
      ),
    ],
    [
      "thin",
      c.createElement(
        c.Fragment,
        null,
        c.createElement("path", {
          d: "M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z",
        })
      ),
    ],
  ]);
var wf = Object.defineProperty,
  xf = Object.defineProperties,
  Sf = Object.getOwnPropertyDescriptors,
  Pa = Object.getOwnPropertySymbols,
  Ef = Object.prototype.hasOwnProperty,
  kf = Object.prototype.propertyIsEnumerable,
  Ma = (e, t, n) =>
    t in e
      ? wf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Cf = (e, t) => {
    for (var n in t || (t = {})) Ef.call(t, n) && Ma(e, n, t[n]);
    if (Pa) for (var n of Pa(t)) kf.call(t, n) && Ma(e, n, t[n]);
    return e;
  },
  Af = (e, t) => xf(e, Sf(t));
const yc = Q.forwardRef((e, t) =>
  c.createElement(Qe, Af(Cf({ ref: t }, e), { weights: sf }))
);
yc.displayName = "Book";
var Pf = Object.defineProperty,
  Mf = Object.defineProperties,
  Of = Object.getOwnPropertyDescriptors,
  Oa = Object.getOwnPropertySymbols,
  _f = Object.prototype.hasOwnProperty,
  jf = Object.prototype.propertyIsEnumerable,
  _a = (e, t, n) =>
    t in e
      ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ff = (e, t) => {
    for (var n in t || (t = {})) _f.call(t, n) && _a(e, n, t[n]);
    if (Oa) for (var n of Oa(t)) jf.call(t, n) && _a(e, n, t[n]);
    return e;
  },
  Nf = (e, t) => Mf(e, Of(t));
const gc = Q.forwardRef((e, t) =>
  c.createElement(Qe, Nf(Ff({ ref: t }, e), { weights: cf }))
);
gc.displayName = "Brain";
var Rf = Object.defineProperty,
  Lf = Object.defineProperties,
  Tf = Object.getOwnPropertyDescriptors,
  ja = Object.getOwnPropertySymbols,
  Df = Object.prototype.hasOwnProperty,
  Zf = Object.prototype.propertyIsEnumerable,
  Fa = (e, t, n) =>
    t in e
      ? Rf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  zf = (e, t) => {
    for (var n in t || (t = {})) Df.call(t, n) && Fa(e, n, t[n]);
    if (ja) for (var n of ja(t)) Zf.call(t, n) && Fa(e, n, t[n]);
    return e;
  },
  Hf = (e, t) => Lf(e, Tf(t));
const wc = Q.forwardRef((e, t) =>
  c.createElement(Qe, Hf(zf({ ref: t }, e), { weights: ff }))
);
wc.displayName = "Code";
var If = Object.defineProperty,
  $f = Object.defineProperties,
  Vf = Object.getOwnPropertyDescriptors,
  Na = Object.getOwnPropertySymbols,
  Qf = Object.prototype.hasOwnProperty,
  Uf = Object.prototype.propertyIsEnumerable,
  Ra = (e, t, n) =>
    t in e
      ? If(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Bf = (e, t) => {
    for (var n in t || (t = {})) Qf.call(t, n) && Ra(e, n, t[n]);
    if (Na) for (var n of Na(t)) Uf.call(t, n) && Ra(e, n, t[n]);
    return e;
  },
  qf = (e, t) => $f(e, Vf(t));
const xc = Q.forwardRef((e, t) =>
  c.createElement(Qe, qf(Bf({ ref: t }, e), { weights: df }))
);
xc.displayName = "Envelope";
var Kf = Object.defineProperty,
  Wf = Object.defineProperties,
  Gf = Object.getOwnPropertyDescriptors,
  La = Object.getOwnPropertySymbols,
  Yf = Object.prototype.hasOwnProperty,
  Xf = Object.prototype.propertyIsEnumerable,
  Ta = (e, t, n) =>
    t in e
      ? Kf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Jf = (e, t) => {
    for (var n in t || (t = {})) Yf.call(t, n) && Ta(e, n, t[n]);
    if (La) for (var n of La(t)) Xf.call(t, n) && Ta(e, n, t[n]);
    return e;
  },
  bf = (e, t) => Wf(e, Gf(t));
const fu = Q.forwardRef((e, t) =>
  c.createElement(Qe, bf(Jf({ ref: t }, e), { weights: pf }))
);
fu.displayName = "GithubLogo";
var ed = Object.defineProperty,
  td = Object.defineProperties,
  nd = Object.getOwnPropertyDescriptors,
  Da = Object.getOwnPropertySymbols,
  rd = Object.prototype.hasOwnProperty,
  id = Object.prototype.propertyIsEnumerable,
  Za = (e, t, n) =>
    t in e
      ? ed(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ld = (e, t) => {
    for (var n in t || (t = {})) rd.call(t, n) && Za(e, n, t[n]);
    if (Da) for (var n of Da(t)) id.call(t, n) && Za(e, n, t[n]);
    return e;
  },
  od = (e, t) => td(e, nd(t));
const Sc = Q.forwardRef((e, t) =>
  c.createElement(Qe, od(ld({ ref: t }, e), { weights: hf }))
);
Sc.displayName = "Link";
var ud = Object.defineProperty,
  ad = Object.defineProperties,
  sd = Object.getOwnPropertyDescriptors,
  za = Object.getOwnPropertySymbols,
  cd = Object.prototype.hasOwnProperty,
  fd = Object.prototype.propertyIsEnumerable,
  Ha = (e, t, n) =>
    t in e
      ? ud(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  dd = (e, t) => {
    for (var n in t || (t = {})) cd.call(t, n) && Ha(e, n, t[n]);
    if (za) for (var n of za(t)) fd.call(t, n) && Ha(e, n, t[n]);
    return e;
  },
  pd = (e, t) => ad(e, sd(t));
const Ec = Q.forwardRef((e, t) =>
  c.createElement(Qe, pd(dd({ ref: t }, e), { weights: mf }))
);
Ec.displayName = "LinkedinLogo";
var hd = Object.defineProperty,
  md = Object.defineProperties,
  vd = Object.getOwnPropertyDescriptors,
  Ia = Object.getOwnPropertySymbols,
  yd = Object.prototype.hasOwnProperty,
  gd = Object.prototype.propertyIsEnumerable,
  $a = (e, t, n) =>
    t in e
      ? hd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  wd = (e, t) => {
    for (var n in t || (t = {})) yd.call(t, n) && $a(e, n, t[n]);
    if (Ia) for (var n of Ia(t)) gd.call(t, n) && $a(e, n, t[n]);
    return e;
  },
  xd = (e, t) => md(e, vd(t));
const kc = Q.forwardRef((e, t) =>
  c.createElement(Qe, xd(wd({ ref: t }, e), { weights: vf }))
);
kc.displayName = "Moon";
var Sd = Object.defineProperty,
  Ed = Object.defineProperties,
  kd = Object.getOwnPropertyDescriptors,
  Va = Object.getOwnPropertySymbols,
  Cd = Object.prototype.hasOwnProperty,
  Ad = Object.prototype.propertyIsEnumerable,
  Qa = (e, t, n) =>
    t in e
      ? Sd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Pd = (e, t) => {
    for (var n in t || (t = {})) Cd.call(t, n) && Qa(e, n, t[n]);
    if (Va) for (var n of Va(t)) Ad.call(t, n) && Qa(e, n, t[n]);
    return e;
  },
  Md = (e, t) => Ed(e, kd(t));
const Cc = Q.forwardRef((e, t) =>
  c.createElement(Qe, Md(Pd({ ref: t }, e), { weights: yf }))
);
Cc.displayName = "Sun";
var Od = Object.defineProperty,
  _d = Object.defineProperties,
  jd = Object.getOwnPropertyDescriptors,
  Ua = Object.getOwnPropertySymbols,
  Fd = Object.prototype.hasOwnProperty,
  Nd = Object.prototype.propertyIsEnumerable,
  Ba = (e, t, n) =>
    t in e
      ? Od(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Rd = (e, t) => {
    for (var n in t || (t = {})) Fd.call(t, n) && Ba(e, n, t[n]);
    if (Ua) for (var n of Ua(t)) Nd.call(t, n) && Ba(e, n, t[n]);
    return e;
  },
  Ld = (e, t) => _d(e, jd(t));
const Ac = Q.forwardRef((e, t) =>
  c.createElement(Qe, Ld(Rd({ ref: t }, e), { weights: gf }))
);
Ac.displayName = "User";
function po(e, t) {
  return (
    (po = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    po(e, t)
  );
}
function mr(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    po(e, t);
}
var vr = (function () {
  function e() {
    this.listeners = [];
  }
  var t = e.prototype;
  return (
    (t.subscribe = function (r) {
      var i = this,
        l = r || function () {};
      return (
        this.listeners.push(l),
        this.onSubscribe(),
        function () {
          (i.listeners = i.listeners.filter(function (o) {
            return o !== l;
          })),
            i.onUnsubscribe();
        }
      );
    }),
    (t.hasListeners = function () {
      return this.listeners.length > 0;
    }),
    (t.onSubscribe = function () {}),
    (t.onUnsubscribe = function () {}),
    e
  );
})();
function T() {
  return (
    (T = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    T.apply(this, arguments)
  );
}
var ki = typeof window > "u";
function ae() {}
function Td(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ho(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Ci(e) {
  return Array.isArray(e) ? e : [e];
}
function Pc(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Gr(e, t, n) {
  return Bi(e)
    ? typeof t == "function"
      ? T({}, n, { queryKey: e, queryFn: t })
      : T({}, t, { queryKey: e })
    : e;
}
function ct(e, t, n) {
  return Bi(e) ? [T({}, t, { queryKey: e }), n] : [e || {}, t];
}
function Dd(e, t) {
  if ((e === !0 && t === !0) || (e == null && t == null)) return "all";
  if (e === !1 && t === !1) return "none";
  var n = e ?? !t;
  return n ? "active" : "inactive";
}
function qa(e, t) {
  var n = e.active,
    r = e.exact,
    i = e.fetching,
    l = e.inactive,
    o = e.predicate,
    u = e.queryKey,
    a = e.stale;
  if (Bi(u)) {
    if (r) {
      if (t.queryHash !== du(u, t.options)) return !1;
    } else if (!Ai(t.queryKey, u)) return !1;
  }
  var s = Dd(n, l);
  if (s === "none") return !1;
  if (s !== "all") {
    var m = t.isActive();
    if ((s === "active" && !m) || (s === "inactive" && m)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (typeof i == "boolean" && t.isFetching() !== i) ||
    (o && !o(t))
  );
}
function Ka(e, t) {
  var n = e.exact,
    r = e.fetching,
    i = e.predicate,
    l = e.mutationKey;
  if (Bi(l)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Dt(t.options.mutationKey) !== Dt(l)) return !1;
    } else if (!Ai(t.options.mutationKey, l)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (i && !i(t))
  );
}
function du(e, t) {
  var n = (t == null ? void 0 : t.queryKeyHashFn) || Dt;
  return n(e);
}
function Dt(e) {
  var t = Ci(e);
  return Zd(t);
}
function Zd(e) {
  return JSON.stringify(e, function (t, n) {
    return mo(n)
      ? Object.keys(n)
          .sort()
          .reduce(function (r, i) {
            return (r[i] = n[i]), r;
          }, {})
      : n;
  });
}
function Ai(e, t) {
  return Mc(Ci(e), Ci(t));
}
function Mc(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some(function (n) {
        return !Mc(e[n], t[n]);
      })
    : !1;
}
function Pi(e, t) {
  if (e === t) return e;
  var n = Array.isArray(e) && Array.isArray(t);
  if (n || (mo(e) && mo(t))) {
    for (
      var r = n ? e.length : Object.keys(e).length,
        i = n ? t : Object.keys(t),
        l = i.length,
        o = n ? [] : {},
        u = 0,
        a = 0;
      a < l;
      a++
    ) {
      var s = n ? a : i[a];
      (o[s] = Pi(e[s], t[s])), o[s] === e[s] && u++;
    }
    return r === l && u === r ? e : o;
  }
  return t;
}
function zd(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function mo(e) {
  if (!Wa(e)) return !1;
  var t = e.constructor;
  if (typeof t > "u") return !0;
  var n = t.prototype;
  return !(!Wa(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Wa(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Bi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Hd(e) {
  return new Promise(function (t) {
    setTimeout(t, e);
  });
}
function Ga(e) {
  Promise.resolve()
    .then(e)
    .catch(function (t) {
      return setTimeout(function () {
        throw t;
      });
    });
}
function Oc() {
  if (typeof AbortController == "function") return new AbortController();
}
var Id = (function (e) {
    mr(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var l;
          if (!ki && (l = window) != null && l.addEventListener) {
            var o = function () {
              return i();
            };
            return (
              window.addEventListener("visibilitychange", o, !1),
              window.addEventListener("focus", o, !1),
              function () {
                window.removeEventListener("visibilitychange", o),
                  window.removeEventListener("focus", o);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var l,
          o = this;
        (this.setup = i),
          (l = this.cleanup) == null || l.call(this),
          (this.cleanup = i(function (u) {
            typeof u == "boolean" ? o.setFocused(u) : o.onFocus();
          }));
      }),
      (n.setFocused = function (i) {
        (this.focused = i), i && this.onFocus();
      }),
      (n.onFocus = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isFocused = function () {
        return typeof this.focused == "boolean"
          ? this.focused
          : typeof document > "u"
          ? !0
          : [void 0, "visible", "prerender"].includes(document.visibilityState);
      }),
      t
    );
  })(vr),
  Bn = new Id(),
  $d = (function (e) {
    mr(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var l;
          if (!ki && (l = window) != null && l.addEventListener) {
            var o = function () {
              return i();
            };
            return (
              window.addEventListener("online", o, !1),
              window.addEventListener("offline", o, !1),
              function () {
                window.removeEventListener("online", o),
                  window.removeEventListener("offline", o);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var l,
          o = this;
        (this.setup = i),
          (l = this.cleanup) == null || l.call(this),
          (this.cleanup = i(function (u) {
            typeof u == "boolean" ? o.setOnline(u) : o.onOnline();
          }));
      }),
      (n.setOnline = function (i) {
        (this.online = i), i && this.onOnline();
      }),
      (n.onOnline = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isOnline = function () {
        return typeof this.online == "boolean"
          ? this.online
          : typeof navigator > "u" || typeof navigator.onLine > "u"
          ? !0
          : navigator.onLine;
      }),
      t
    );
  })(vr),
  Yr = new $d();
function Vd(e) {
  return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function Mi(e) {
  return typeof (e == null ? void 0 : e.cancel) == "function";
}
var _c = function (t) {
  (this.revert = t == null ? void 0 : t.revert),
    (this.silent = t == null ? void 0 : t.silent);
};
function Xr(e) {
  return e instanceof _c;
}
var jc = function (t) {
    var n = this,
      r = !1,
      i,
      l,
      o,
      u;
    (this.abort = t.abort),
      (this.cancel = function (h) {
        return i == null ? void 0 : i(h);
      }),
      (this.cancelRetry = function () {
        r = !0;
      }),
      (this.continueRetry = function () {
        r = !1;
      }),
      (this.continue = function () {
        return l == null ? void 0 : l();
      }),
      (this.failureCount = 0),
      (this.isPaused = !1),
      (this.isResolved = !1),
      (this.isTransportCancelable = !1),
      (this.promise = new Promise(function (h, g) {
        (o = h), (u = g);
      }));
    var a = function (g) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onSuccess == null || t.onSuccess(g),
          l == null || l(),
          o(g));
      },
      s = function (g) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onError == null || t.onError(g),
          l == null || l(),
          u(g));
      },
      m = function () {
        return new Promise(function (g) {
          (l = g), (n.isPaused = !0), t.onPause == null || t.onPause();
        }).then(function () {
          (l = void 0),
            (n.isPaused = !1),
            t.onContinue == null || t.onContinue();
        });
      },
      v = function h() {
        if (!n.isResolved) {
          var g;
          try {
            g = t.fn();
          } catch (w) {
            g = Promise.reject(w);
          }
          (i = function (S) {
            if (
              !n.isResolved &&
              (s(new _c(S)), n.abort == null || n.abort(), Mi(g))
            )
              try {
                g.cancel();
              } catch {}
          }),
            (n.isTransportCancelable = Mi(g)),
            Promise.resolve(g)
              .then(a)
              .catch(function (w) {
                var S, N;
                if (!n.isResolved) {
                  var p = (S = t.retry) != null ? S : 3,
                    f = (N = t.retryDelay) != null ? N : Vd,
                    d = typeof f == "function" ? f(n.failureCount, w) : f,
                    x =
                      p === !0 ||
                      (typeof p == "number" && n.failureCount < p) ||
                      (typeof p == "function" && p(n.failureCount, w));
                  if (r || !x) {
                    s(w);
                    return;
                  }
                  n.failureCount++,
                    t.onFail == null || t.onFail(n.failureCount, w),
                    Hd(d)
                      .then(function () {
                        if (!Bn.isFocused() || !Yr.isOnline()) return m();
                      })
                      .then(function () {
                        r ? s(w) : h();
                      });
                }
              });
        }
      };
    v();
  },
  Qd = (function () {
    function e() {
      (this.queue = []),
        (this.transactions = 0),
        (this.notifyFn = function (n) {
          n();
        }),
        (this.batchNotifyFn = function (n) {
          n();
        });
    }
    var t = e.prototype;
    return (
      (t.batch = function (r) {
        var i;
        this.transactions++;
        try {
          i = r();
        } finally {
          this.transactions--, this.transactions || this.flush();
        }
        return i;
      }),
      (t.schedule = function (r) {
        var i = this;
        this.transactions
          ? this.queue.push(r)
          : Ga(function () {
              i.notifyFn(r);
            });
      }),
      (t.batchCalls = function (r) {
        var i = this;
        return function () {
          for (var l = arguments.length, o = new Array(l), u = 0; u < l; u++)
            o[u] = arguments[u];
          i.schedule(function () {
            r.apply(void 0, o);
          });
        };
      }),
      (t.flush = function () {
        var r = this,
          i = this.queue;
        (this.queue = []),
          i.length &&
            Ga(function () {
              r.batchNotifyFn(function () {
                i.forEach(function (l) {
                  r.notifyFn(l);
                });
              });
            });
      }),
      (t.setNotifyFunction = function (r) {
        this.notifyFn = r;
      }),
      (t.setBatchNotifyFunction = function (r) {
        this.batchNotifyFn = r;
      }),
      e
    );
  })(),
  W = new Qd(),
  Fc = console;
function Oi() {
  return Fc;
}
function Ud(e) {
  Fc = e;
}
var Bd = (function () {
    function e(n) {
      (this.abortSignalConsumed = !1),
        (this.hadObservers = !1),
        (this.defaultOptions = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.cache = n.cache),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.initialState = n.state || this.getDefaultState(this.options)),
        (this.state = this.initialState),
        (this.meta = n.meta),
        this.scheduleGc();
    }
    var t = e.prototype;
    return (
      (t.setOptions = function (r) {
        var i;
        (this.options = T({}, this.defaultOptions, r)),
          (this.meta = r == null ? void 0 : r.meta),
          (this.cacheTime = Math.max(
            this.cacheTime || 0,
            (i = this.options.cacheTime) != null ? i : 5 * 60 * 1e3
          ));
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.scheduleGc = function () {
        var r = this;
        this.clearGcTimeout(),
          ho(this.cacheTime) &&
            (this.gcTimeout = setTimeout(function () {
              r.optionalRemove();
            }, this.cacheTime));
      }),
      (t.clearGcTimeout = function () {
        this.gcTimeout &&
          (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
      }),
      (t.optionalRemove = function () {
        this.observers.length ||
          (this.state.isFetching
            ? this.hadObservers && this.scheduleGc()
            : this.cache.remove(this));
      }),
      (t.setData = function (r, i) {
        var l,
          o,
          u = this.state.data,
          a = Td(r, u);
        return (
          (l = (o = this.options).isDataEqual) != null && l.call(o, u, a)
            ? (a = u)
            : this.options.structuralSharing !== !1 && (a = Pi(u, a)),
          this.dispatch({
            data: a,
            type: "success",
            dataUpdatedAt: i == null ? void 0 : i.updatedAt,
          }),
          a
        );
      }),
      (t.setState = function (r, i) {
        this.dispatch({ type: "setState", state: r, setStateOptions: i });
      }),
      (t.cancel = function (r) {
        var i,
          l = this.promise;
        return (
          (i = this.retryer) == null || i.cancel(r),
          l ? l.then(ae).catch(ae) : Promise.resolve()
        );
      }),
      (t.destroy = function () {
        this.clearGcTimeout(), this.cancel({ silent: !0 });
      }),
      (t.reset = function () {
        this.destroy(), this.setState(this.initialState);
      }),
      (t.isActive = function () {
        return this.observers.some(function (r) {
          return r.options.enabled !== !1;
        });
      }),
      (t.isFetching = function () {
        return this.state.isFetching;
      }),
      (t.isStale = function () {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          this.observers.some(function (r) {
            return r.getCurrentResult().isStale;
          })
        );
      }),
      (t.isStaleByTime = function (r) {
        return (
          r === void 0 && (r = 0),
          this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !Pc(this.state.dataUpdatedAt, r)
        );
      }),
      (t.onFocus = function () {
        var r,
          i = this.observers.find(function (l) {
            return l.shouldFetchOnWindowFocus();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.onOnline = function () {
        var r,
          i = this.observers.find(function (l) {
            return l.shouldFetchOnReconnect();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 &&
          (this.observers.push(r),
          (this.hadObservers = !0),
          this.clearGcTimeout(),
          this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: r,
          }));
      }),
      (t.removeObserver = function (r) {
        this.observers.indexOf(r) !== -1 &&
          ((this.observers = this.observers.filter(function (i) {
            return i !== r;
          })),
          this.observers.length ||
            (this.retryer &&
              (this.retryer.isTransportCancelable || this.abortSignalConsumed
                ? this.retryer.cancel({ revert: !0 })
                : this.retryer.cancelRetry()),
            this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
          this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: r,
          }));
      }),
      (t.getObserversCount = function () {
        return this.observers.length;
      }),
      (t.invalidate = function () {
        this.state.isInvalidated || this.dispatch({ type: "invalidate" });
      }),
      (t.fetch = function (r, i) {
        var l = this,
          o,
          u,
          a;
        if (this.state.isFetching) {
          if (this.state.dataUpdatedAt && i != null && i.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (this.promise) {
            var s;
            return (
              (s = this.retryer) == null || s.continueRetry(), this.promise
            );
          }
        }
        if ((r && this.setOptions(r), !this.options.queryFn)) {
          var m = this.observers.find(function (f) {
            return f.options.queryFn;
          });
          m && this.setOptions(m.options);
        }
        var v = Ci(this.queryKey),
          h = Oc(),
          g = { queryKey: v, pageParam: void 0, meta: this.meta };
        Object.defineProperty(g, "signal", {
          enumerable: !0,
          get: function () {
            if (h) return (l.abortSignalConsumed = !0), h.signal;
          },
        });
        var w = function () {
            return l.options.queryFn
              ? ((l.abortSignalConsumed = !1), l.options.queryFn(g))
              : Promise.reject("Missing queryFn");
          },
          S = {
            fetchOptions: i,
            options: this.options,
            queryKey: v,
            state: this.state,
            fetchFn: w,
            meta: this.meta,
          };
        if ((o = this.options.behavior) != null && o.onFetch) {
          var N;
          (N = this.options.behavior) == null || N.onFetch(S);
        }
        if (
          ((this.revertState = this.state),
          !this.state.isFetching ||
            this.state.fetchMeta !==
              ((u = S.fetchOptions) == null ? void 0 : u.meta))
        ) {
          var p;
          this.dispatch({
            type: "fetch",
            meta: (p = S.fetchOptions) == null ? void 0 : p.meta,
          });
        }
        return (
          (this.retryer = new jc({
            fn: S.fetchFn,
            abort: h == null || (a = h.abort) == null ? void 0 : a.bind(h),
            onSuccess: function (d) {
              l.setData(d),
                l.cache.config.onSuccess == null ||
                  l.cache.config.onSuccess(d, l),
                l.cacheTime === 0 && l.optionalRemove();
            },
            onError: function (d, response) {
                const response = d.response;
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json();
              },
            onFail: function () {
              l.dispatch({ type: "failed" });
            },
            onPause: function () {
              l.dispatch({ type: "pause" });
            },
            onContinue: function () {
              l.dispatch({ type: "continue" });
            },
            retry: S.options.retry,
            retryDelay: S.options.retryDelay,
          })),
          (this.promise = this.retryer.promise),
          this.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = this.reducer(this.state, r)),
          W.batch(function () {
            i.observers.forEach(function (l) {
              l.onQueryUpdate(r);
            }),
              i.cache.notify({ query: i, type: "queryUpdated", action: r });
          });
      }),
      (t.getDefaultState = function (r) {
        var i =
            typeof r.initialData == "function"
              ? r.initialData()
              : r.initialData,
          l = typeof r.initialData < "u",
          o = l
            ? typeof r.initialDataUpdatedAt == "function"
              ? r.initialDataUpdatedAt()
              : r.initialDataUpdatedAt
            : 0,
          u = typeof i < "u";
        return {
          data: i,
          dataUpdateCount: 0,
          dataUpdatedAt: u ? o ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchMeta: null,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: u ? "success" : "idle",
        };
      }),
      (t.reducer = function (r, i) {
        var l, o;
        switch (i.type) {
          case "failed":
            return T({}, r, { fetchFailureCount: r.fetchFailureCount + 1 });
          case "pause":
            return T({}, r, { isPaused: !0 });
          case "continue":
            return T({}, r, { isPaused: !1 });
          case "fetch":
            return T(
              {},
              r,
              {
                fetchFailureCount: 0,
                fetchMeta: (l = i.meta) != null ? l : null,
                isFetching: !0,
                isPaused: !1,
              },
              !r.dataUpdatedAt && { error: null, status: "loading" }
            );
          case "success":
            return T({}, r, {
              data: i.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: (o = i.dataUpdatedAt) != null ? o : Date.now(),
              error: null,
              fetchFailureCount: 0,
              isFetching: !1,
              isInvalidated: !1,
              isPaused: !1,
              status: "success",
            });
          case "error":
            var u = i.error;
            return Xr(u) && u.revert && this.revertState
              ? T({}, this.revertState)
              : T({}, r, {
                  error: u,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  isFetching: !1,
                  isPaused: !1,
                  status: "error",
                });
          case "invalidate":
            return T({}, r, { isInvalidated: !0 });
          case "setState":
            return T({}, r, i.state);
          default:
            return r;
        }
      }),
      e
    );
  })(),
  qd = (function (e) {
    mr(t, e);
    function t(r) {
      var i;
      return (
        (i = e.call(this) || this),
        (i.config = r || {}),
        (i.queries = []),
        (i.queriesMap = {}),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.build = function (i, l, o) {
        var u,
          a = l.queryKey,
          s = (u = l.queryHash) != null ? u : du(a, l),
          m = this.get(s);
        return (
          m ||
            ((m = new Bd({
              cache: this,
              queryKey: a,
              queryHash: s,
              options: i.defaultQueryOptions(l),
              state: o,
              defaultOptions: i.getQueryDefaults(a),
              meta: l.meta,
            })),
            this.add(m)),
          m
        );
      }),
      (n.add = function (i) {
        this.queriesMap[i.queryHash] ||
          ((this.queriesMap[i.queryHash] = i),
          this.queries.push(i),
          this.notify({ type: "queryAdded", query: i }));
      }),
      (n.remove = function (i) {
        var l = this.queriesMap[i.queryHash];
        l &&
          (i.destroy(),
          (this.queries = this.queries.filter(function (o) {
            return o !== i;
          })),
          l === i && delete this.queriesMap[i.queryHash],
          this.notify({ type: "queryRemoved", query: i }));
      }),
      (n.clear = function () {
        var i = this;
        W.batch(function () {
          i.queries.forEach(function (l) {
            i.remove(l);
          });
        });
      }),
      (n.get = function (i) {
        return this.queriesMap[i];
      }),
      (n.getAll = function () {
        return this.queries;
      }),
      (n.find = function (i, l) {
        var o = ct(i, l),
          u = o[0];
        return (
          typeof u.exact > "u" && (u.exact = !0),
          this.queries.find(function (a) {
            return qa(u, a);
          })
        );
      }),
      (n.findAll = function (i, l) {
        var o = ct(i, l),
          u = o[0];
        return Object.keys(u).length > 0
          ? this.queries.filter(function (a) {
              return qa(u, a);
            })
          : this.queries;
      }),
      (n.notify = function (i) {
        var l = this;
        W.batch(function () {
          l.listeners.forEach(function (o) {
            o(i);
          });
        });
      }),
      (n.onFocus = function () {
        var i = this;
        W.batch(function () {
          i.queries.forEach(function (l) {
            l.onFocus();
          });
        });
      }),
      (n.onOnline = function () {
        var i = this;
        W.batch(function () {
          i.queries.forEach(function (l) {
            l.onOnline();
          });
        });
      }),
      t
    );
  })(vr),
  Kd = (function () {
    function e(n) {
      (this.options = T({}, n.defaultOptions, n.options)),
        (this.mutationId = n.mutationId),
        (this.mutationCache = n.mutationCache),
        (this.observers = []),
        (this.state = n.state || Wd()),
        (this.meta = n.meta);
    }
    var t = e.prototype;
    return (
      (t.setState = function (r) {
        this.dispatch({ type: "setState", state: r });
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 && this.observers.push(r);
      }),
      (t.removeObserver = function (r) {
        this.observers = this.observers.filter(function (i) {
          return i !== r;
        });
      }),
      (t.cancel = function () {
        return this.retryer
          ? (this.retryer.cancel(), this.retryer.promise.then(ae).catch(ae))
          : Promise.resolve();
      }),
      (t.continue = function () {
        return this.retryer
          ? (this.retryer.continue(), this.retryer.promise)
          : this.execute();
      }),
      (t.execute = function () {
        var r = this,
          i,
          l = this.state.status === "loading",
          o = Promise.resolve();
        return (
          l ||
            (this.dispatch({
              type: "loading",
              variables: this.options.variables,
            }),
            (o = o
              .then(function () {
                r.mutationCache.config.onMutate == null ||
                  r.mutationCache.config.onMutate(r.state.variables, r);
              })
              .then(function () {
                return r.options.onMutate == null
                  ? void 0
                  : r.options.onMutate(r.state.variables);
              })
              .then(function (u) {
                u !== r.state.context &&
                  r.dispatch({
                    type: "loading",
                    context: u,
                    variables: r.state.variables,
                  });
              }))),
          o
            .then(function () {
              return r.executeMutation();
            })
            .then(function (u) {
              (i = u),
                r.mutationCache.config.onSuccess == null ||
                  r.mutationCache.config.onSuccess(
                    i,
                    r.state.variables,
                    r.state.context,
                    r
                  );
            })
            .then(function () {
              return r.options.onSuccess == null
                ? void 0
                : r.options.onSuccess(i, r.state.variables, r.state.context);
            })
            .then(function () {
              return r.options.onSettled == null
                ? void 0
                : r.options.onSettled(
                    i,
                    null,
                    r.state.variables,
                    r.state.context
                  );
            })
            .then(function () {
              return r.dispatch({ type: "success", data: i }), i;
            })
            .catch(function (u) {
              return (
                r.mutationCache.config.onError == null ||
                  r.mutationCache.config.onError(
                    u,
                    r.state.variables,
                    r.state.context,
                    r
                  ),
                Oi().error(u),
                Promise.resolve()
                  .then(function () {
                    return r.options.onError == null
                      ? void 0
                      : r.options.onError(
                          u,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    return r.options.onSettled == null
                      ? void 0
                      : r.options.onSettled(
                          void 0,
                          u,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    throw (r.dispatch({ type: "error", error: u }), u);
                  })
              );
            })
        );
      }),
      (t.executeMutation = function () {
        var r = this,
          i;
        return (
          (this.retryer = new jc({
            fn: function () {
              return r.options.mutationFn
                ? r.options.mutationFn(r.state.variables)
                : Promise.reject("No mutationFn found");
            },
            onFail: function () {
              r.dispatch({ type: "failed" });
            },
            onPause: function () {
              r.dispatch({ type: "pause" });
            },
            onContinue: function () {
              r.dispatch({ type: "continue" });
            },
            retry: (i = this.options.retry) != null ? i : 0,
            retryDelay: this.options.retryDelay,
          })),
          this.retryer.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = Gd(this.state, r)),
          W.batch(function () {
            i.observers.forEach(function (l) {
              l.onMutationUpdate(r);
            }),
              i.mutationCache.notify(i);
          });
      }),
      e
    );
  })();
function Wd() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
function Gd(e, t) {
  switch (t.type) {
    case "failed":
      return T({}, e, { failureCount: e.failureCount + 1 });
    case "pause":
      return T({}, e, { isPaused: !0 });
    case "continue":
      return T({}, e, { isPaused: !1 });
    case "loading":
      return T({}, e, {
        context: t.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: "loading",
        variables: t.variables,
      });
    case "success":
      return T({}, e, {
        data: t.data,
        error: null,
        status: "success",
        isPaused: !1,
      });
    case "error":
      return T({}, e, {
        data: void 0,
        error: t.error,
        failureCount: e.failureCount + 1,
        isPaused: !1,
        status: "error",
      });
    case "setState":
      return T({}, e, t.state);
    default:
      return e;
  }
}
var Yd = (function (e) {
  mr(t, e);
  function t(r) {
    var i;
    return (
      (i = e.call(this) || this),
      (i.config = r || {}),
      (i.mutations = []),
      (i.mutationId = 0),
      i
    );
  }
  var n = t.prototype;
  return (
    (n.build = function (i, l, o) {
      var u = new Kd({
        mutationCache: this,
        mutationId: ++this.mutationId,
        options: i.defaultMutationOptions(l),
        state: o,
        defaultOptions: l.mutationKey
          ? i.getMutationDefaults(l.mutationKey)
          : void 0,
        meta: l.meta,
      });
      return this.add(u), u;
    }),
    (n.add = function (i) {
      this.mutations.push(i), this.notify(i);
    }),
    (n.remove = function (i) {
      (this.mutations = this.mutations.filter(function (l) {
        return l !== i;
      })),
        i.cancel(),
        this.notify(i);
    }),
    (n.clear = function () {
      var i = this;
      W.batch(function () {
        i.mutations.forEach(function (l) {
          i.remove(l);
        });
      });
    }),
    (n.getAll = function () {
      return this.mutations;
    }),
    (n.find = function (i) {
      return (
        typeof i.exact > "u" && (i.exact = !0),
        this.mutations.find(function (l) {
          return Ka(i, l);
        })
      );
    }),
    (n.findAll = function (i) {
      return this.mutations.filter(function (l) {
        return Ka(i, l);
      });
    }),
    (n.notify = function (i) {
      var l = this;
      W.batch(function () {
        l.listeners.forEach(function (o) {
          o(i);
        });
      });
    }),
    (n.onFocus = function () {
      this.resumePausedMutations();
    }),
    (n.onOnline = function () {
      this.resumePausedMutations();
    }),
    (n.resumePausedMutations = function () {
      var i = this.mutations.filter(function (l) {
        return l.state.isPaused;
      });
      return W.batch(function () {
        return i.reduce(function (l, o) {
          return l.then(function () {
            return o.continue().catch(ae);
          });
        }, Promise.resolve());
      });
    }),
    t
  );
})(vr);
function Xd() {
  return {
    onFetch: function (t) {
      t.fetchFn = function () {
        var n,
          r,
          i,
          l,
          o,
          u,
          a =
            (n = t.fetchOptions) == null || (r = n.meta) == null
              ? void 0
              : r.refetchPage,
          s =
            (i = t.fetchOptions) == null || (l = i.meta) == null
              ? void 0
              : l.fetchMore,
          m = s == null ? void 0 : s.pageParam,
          v = (s == null ? void 0 : s.direction) === "forward",
          h = (s == null ? void 0 : s.direction) === "backward",
          g = ((o = t.state.data) == null ? void 0 : o.pages) || [],
          w = ((u = t.state.data) == null ? void 0 : u.pageParams) || [],
          S = Oc(),
          N = S == null ? void 0 : S.signal,
          p = w,
          f = !1,
          d =
            t.options.queryFn ||
            function () {
              return Promise.reject("Missing queryFn");
            },
          x = function (Te, ot, me, Ge) {
            return (
              (p = Ge ? [ot].concat(p) : [].concat(p, [ot])),
              Ge ? [me].concat(Te) : [].concat(Te, [me])
            );
          },
          C = function (Te, ot, me, Ge) {
            if (f) return Promise.reject("Cancelled");
            if (typeof me > "u" && !ot && Te.length) return Promise.resolve(Te);
            var A = {
                queryKey: t.queryKey,
                signal: N,
                pageParam: me,
                meta: t.meta,
              },
              _ = d(A),
              F = Promise.resolve(_).then(function (Y) {
                return x(Te, me, Y, Ge);
              });
            if (Mi(_)) {
              var H = F;
              H.cancel = _.cancel;
            }
            return F;
          },
          k;
        if (!g.length) k = C([]);
        else if (v) {
          var M = typeof m < "u",
            O = M ? m : Ya(t.options, g);
          k = C(g, M, O);
        } else if (h) {
          var Z = typeof m < "u",
            j = Z ? m : Jd(t.options, g);
          k = C(g, Z, j, !0);
        } else
          (function () {
            p = [];
            var Ee = typeof t.options.getNextPageParam > "u",
              Te = a && g[0] ? a(g[0], 0, g) : !0;
            k = Te ? C([], Ee, w[0]) : Promise.resolve(x([], w[0], g[0]));
            for (
              var ot = function (A) {
                  k = k.then(function (_) {
                    var F = a && g[A] ? a(g[A], A, g) : !0;
                    if (F) {
                      var H = Ee ? w[A] : Ya(t.options, _);
                      return C(_, Ee, H);
                    }
                    return Promise.resolve(x(_, w[A], g[A]));
                  });
                },
                me = 1;
              me < g.length;
              me++
            )
              ot(me);
          })();
        var le = k.then(function (Ee) {
            return { pages: Ee, pageParams: p };
          }),
          Se = le;
        return (
          (Se.cancel = function () {
            (f = !0), S == null || S.abort(), Mi(k) && k.cancel();
          }),
          le
        );
      };
    },
  };
}
function Ya(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function Jd(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
var bd = (function () {
    function e(n) {
      n === void 0 && (n = {}),
        (this.queryCache = n.queryCache || new qd()),
        (this.mutationCache = n.mutationCache || new Yd()),
        (this.defaultOptions = n.defaultOptions || {}),
        (this.queryDefaults = []),
        (this.mutationDefaults = []);
    }
    var t = e.prototype;
    return (
      (t.mount = function () {
        var r = this;
        (this.unsubscribeFocus = Bn.subscribe(function () {
          Bn.isFocused() &&
            Yr.isOnline() &&
            (r.mutationCache.onFocus(), r.queryCache.onFocus());
        })),
          (this.unsubscribeOnline = Yr.subscribe(function () {
            Bn.isFocused() &&
              Yr.isOnline() &&
              (r.mutationCache.onOnline(), r.queryCache.onOnline());
          }));
      }),
      (t.unmount = function () {
        var r, i;
        (r = this.unsubscribeFocus) == null || r.call(this),
          (i = this.unsubscribeOnline) == null || i.call(this);
      }),
      (t.isFetching = function (r, i) {
        var l = ct(r, i),
          o = l[0];
        return (o.fetching = !0), this.queryCache.findAll(o).length;
      }),
      (t.isMutating = function (r) {
        return this.mutationCache.findAll(T({}, r, { fetching: !0 })).length;
      }),
      (t.getQueryData = function (r, i) {
        var l;
        return (l = this.queryCache.find(r, i)) == null ? void 0 : l.state.data;
      }),
      (t.getQueriesData = function (r) {
        return this.getQueryCache()
          .findAll(r)
          .map(function (i) {
            var l = i.queryKey,
              o = i.state,
              u = o.data;
            return [l, u];
          });
      }),
      (t.setQueryData = function (r, i, l) {
        var o = Gr(r),
          u = this.defaultQueryOptions(o);
        return this.queryCache.build(this, u).setData(i, l);
      }),
      (t.setQueriesData = function (r, i, l) {
        var o = this;
        return W.batch(function () {
          return o
            .getQueryCache()
            .findAll(r)
            .map(function (u) {
              var a = u.queryKey;
              return [a, o.setQueryData(a, i, l)];
            });
        });
      }),
      (t.getQueryState = function (r, i) {
        var l;
        return (l = this.queryCache.find(r, i)) == null ? void 0 : l.state;
      }),
      (t.removeQueries = function (r, i) {
        var l = ct(r, i),
          o = l[0],
          u = this.queryCache;
        W.batch(function () {
          u.findAll(o).forEach(function (a) {
            u.remove(a);
          });
        });
      }),
      (t.resetQueries = function (r, i, l) {
        var o = this,
          u = ct(r, i, l),
          a = u[0],
          s = u[1],
          m = this.queryCache,
          v = T({}, a, { active: !0 });
        return W.batch(function () {
          return (
            m.findAll(a).forEach(function (h) {
              h.reset();
            }),
            o.refetchQueries(v, s)
          );
        });
      }),
      (t.cancelQueries = function (r, i, l) {
        var o = this,
          u = ct(r, i, l),
          a = u[0],
          s = u[1],
          m = s === void 0 ? {} : s;
        typeof m.revert > "u" && (m.revert = !0);
        var v = W.batch(function () {
          return o.queryCache.findAll(a).map(function (h) {
            return h.cancel(m);
          });
        });
        return Promise.all(v).then(ae).catch(ae);
      }),
      (t.invalidateQueries = function (r, i, l) {
        var o,
          u,
          a,
          s = this,
          m = ct(r, i, l),
          v = m[0],
          h = m[1],
          g = T({}, v, {
            active:
              (o = (u = v.refetchActive) != null ? u : v.active) != null
                ? o
                : !0,
            inactive: (a = v.refetchInactive) != null ? a : !1,
          });
        return W.batch(function () {
          return (
            s.queryCache.findAll(v).forEach(function (w) {
              w.invalidate();
            }),
            s.refetchQueries(g, h)
          );
        });
      }),
      (t.refetchQueries = function (r, i, l) {
        var o = this,
          u = ct(r, i, l),
          a = u[0],
          s = u[1],
          m = W.batch(function () {
            return o.queryCache.findAll(a).map(function (h) {
              return h.fetch(
                void 0,
                T({}, s, {
                  meta: { refetchPage: a == null ? void 0 : a.refetchPage },
                })
              );
            });
          }),
          v = Promise.all(m).then(ae);
        return (s != null && s.throwOnError) || (v = v.catch(ae)), v;
      }),
      (t.fetchQuery = function (r, i, l) {
        var o = Gr(r, i, l),
          u = this.defaultQueryOptions(o);
        typeof u.retry > "u" && (u.retry = !1);
        var a = this.queryCache.build(this, u);
        return a.isStaleByTime(u.staleTime)
          ? a.fetch(u)
          : Promise.resolve(a.state.data);
      }),
      (t.prefetchQuery = function (r, i, l) {
        return this.fetchQuery(r, i, l).then(ae).catch(ae);
      }),
      (t.fetchInfiniteQuery = function (r, i, l) {
        var o = Gr(r, i, l);
        return (o.behavior = Xd()), this.fetchQuery(o);
      }),
      (t.prefetchInfiniteQuery = function (r, i, l) {
        return this.fetchInfiniteQuery(r, i, l).then(ae).catch(ae);
      }),
      (t.cancelMutations = function () {
        var r = this,
          i = W.batch(function () {
            return r.mutationCache.getAll().map(function (l) {
              return l.cancel();
            });
          });
        return Promise.all(i).then(ae).catch(ae);
      }),
      (t.resumePausedMutations = function () {
        return this.getMutationCache().resumePausedMutations();
      }),
      (t.executeMutation = function (r) {
        return this.mutationCache.build(this, r).execute();
      }),
      (t.getQueryCache = function () {
        return this.queryCache;
      }),
      (t.getMutationCache = function () {
        return this.mutationCache;
      }),
      (t.getDefaultOptions = function () {
        return this.defaultOptions;
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.setQueryDefaults = function (r, i) {
        var l = this.queryDefaults.find(function (o) {
          return Dt(r) === Dt(o.queryKey);
        });
        l
          ? (l.defaultOptions = i)
          : this.queryDefaults.push({ queryKey: r, defaultOptions: i });
      }),
      (t.getQueryDefaults = function (r) {
        var i;
        return r
          ? (i = this.queryDefaults.find(function (l) {
              return Ai(r, l.queryKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.setMutationDefaults = function (r, i) {
        var l = this.mutationDefaults.find(function (o) {
          return Dt(r) === Dt(o.mutationKey);
        });
        l
          ? (l.defaultOptions = i)
          : this.mutationDefaults.push({ mutationKey: r, defaultOptions: i });
      }),
      (t.getMutationDefaults = function (r) {
        var i;
        return r
          ? (i = this.mutationDefaults.find(function (l) {
              return Ai(r, l.mutationKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.defaultQueryOptions = function (r) {
        if (r != null && r._defaulted) return r;
        var i = T(
          {},
          this.defaultOptions.queries,
          this.getQueryDefaults(r == null ? void 0 : r.queryKey),
          r,
          { _defaulted: !0 }
        );
        return (
          !i.queryHash && i.queryKey && (i.queryHash = du(i.queryKey, i)), i
        );
      }),
      (t.defaultQueryObserverOptions = function (r) {
        return this.defaultQueryOptions(r);
      }),
      (t.defaultMutationOptions = function (r) {
        return r != null && r._defaulted
          ? r
          : T(
              {},
              this.defaultOptions.mutations,
              this.getMutationDefaults(r == null ? void 0 : r.mutationKey),
              r,
              { _defaulted: !0 }
            );
      }),
      (t.clear = function () {
        this.queryCache.clear(), this.mutationCache.clear();
      }),
      e
    );
  })(),
  ep = (function (e) {
    mr(t, e);
    function t(r, i) {
      var l;
      return (
        (l = e.call(this) || this),
        (l.client = r),
        (l.options = i),
        (l.trackedProps = []),
        (l.selectError = null),
        l.bindMethods(),
        l.setOptions(i),
        l
      );
    }
    var n = t.prototype;
    return (
      (n.bindMethods = function () {
        (this.remove = this.remove.bind(this)),
          (this.refetch = this.refetch.bind(this));
      }),
      (n.onSubscribe = function () {
        this.listeners.length === 1 &&
          (this.currentQuery.addObserver(this),
          Xa(this.currentQuery, this.options) && this.executeFetch(),
          this.updateTimers());
      }),
      (n.onUnsubscribe = function () {
        this.listeners.length || this.destroy();
      }),
      (n.shouldFetchOnReconnect = function () {
        return vo(
          this.currentQuery,
          this.options,
          this.options.refetchOnReconnect
        );
      }),
      (n.shouldFetchOnWindowFocus = function () {
        return vo(
          this.currentQuery,
          this.options,
          this.options.refetchOnWindowFocus
        );
      }),
      (n.destroy = function () {
        (this.listeners = []),
          this.clearTimers(),
          this.currentQuery.removeObserver(this);
      }),
      (n.setOptions = function (i, l) {
        var o = this.options,
          u = this.currentQuery;
        if (
          ((this.options = this.client.defaultQueryObserverOptions(i)),
          typeof this.options.enabled < "u" &&
            typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = o.queryKey),
          this.updateQuery();
        var a = this.hasListeners();
        a && Ja(this.currentQuery, u, this.options, o) && this.executeFetch(),
          this.updateResult(l),
          a &&
            (this.currentQuery !== u ||
              this.options.enabled !== o.enabled ||
              this.options.staleTime !== o.staleTime) &&
            this.updateStaleTimeout();
        var s = this.computeRefetchInterval();
        a &&
          (this.currentQuery !== u ||
            this.options.enabled !== o.enabled ||
            s !== this.currentRefetchInterval) &&
          this.updateRefetchInterval(s);
      }),
      (n.getOptimisticResult = function (i) {
        var l = this.client.defaultQueryObserverOptions(i),
          o = this.client.getQueryCache().build(this.client, l);
        return this.createResult(o, l);
      }),
      (n.getCurrentResult = function () {
        return this.currentResult;
      }),
      (n.trackResult = function (i, l) {
        var o = this,
          u = {},
          a = function (m) {
            o.trackedProps.includes(m) || o.trackedProps.push(m);
          };
        return (
          Object.keys(i).forEach(function (s) {
            Object.defineProperty(u, s, {
              configurable: !1,
              enumerable: !0,
              get: function () {
                return a(s), i[s];
              },
            });
          }),
          (l.useErrorBoundary || l.suspense) && a("error"),
          u
        );
      }),
      (n.getNextResult = function (i) {
        var l = this;
        return new Promise(function (o, u) {
          var a = l.subscribe(function (s) {
            s.isFetching ||
              (a(),
              s.isError && i != null && i.throwOnError ? u(s.error) : o(s));
          });
        });
      }),
      (n.getCurrentQuery = function () {
        return this.currentQuery;
      }),
      (n.remove = function () {
        this.client.getQueryCache().remove(this.currentQuery);
      }),
      (n.refetch = function (i) {
        return this.fetch(
          T({}, i, {
            meta: { refetchPage: i == null ? void 0 : i.refetchPage },
          })
        );
      }),
      (n.fetchOptimistic = function (i) {
        var l = this,
          o = this.client.defaultQueryObserverOptions(i),
          u = this.client.getQueryCache().build(this.client, o);
        return u.fetch().then(function () {
          return l.createResult(u, o);
        });
      }),
      (n.fetch = function (i) {
        var l = this;
        return this.executeFetch(i).then(function () {
          return l.updateResult(), l.currentResult;
        });
      }),
      (n.executeFetch = function (i) {
        this.updateQuery();
        var l = this.currentQuery.fetch(this.options, i);
        return (i != null && i.throwOnError) || (l = l.catch(ae)), l;
      }),
      (n.updateStaleTimeout = function () {
        var i = this;
        if (
          (this.clearStaleTimeout(),
          !(ki || this.currentResult.isStale || !ho(this.options.staleTime)))
        ) {
          var l = Pc(this.currentResult.dataUpdatedAt, this.options.staleTime),
            o = l + 1;
          this.staleTimeoutId = setTimeout(function () {
            i.currentResult.isStale || i.updateResult();
          }, o);
        }
      }),
      (n.computeRefetchInterval = function () {
        var i;
        return typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(
              this.currentResult.data,
              this.currentQuery
            )
          : (i = this.options.refetchInterval) != null
          ? i
          : !1;
      }),
      (n.updateRefetchInterval = function (i) {
        var l = this;
        this.clearRefetchInterval(),
          (this.currentRefetchInterval = i),
          !(
            ki ||
            this.options.enabled === !1 ||
            !ho(this.currentRefetchInterval) ||
            this.currentRefetchInterval === 0
          ) &&
            (this.refetchIntervalId = setInterval(function () {
              (l.options.refetchIntervalInBackground || Bn.isFocused()) &&
                l.executeFetch();
            }, this.currentRefetchInterval));
      }),
      (n.updateTimers = function () {
        this.updateStaleTimeout(),
          this.updateRefetchInterval(this.computeRefetchInterval());
      }),
      (n.clearTimers = function () {
        this.clearStaleTimeout(), this.clearRefetchInterval();
      }),
      (n.clearStaleTimeout = function () {
        this.staleTimeoutId &&
          (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
      }),
      (n.clearRefetchInterval = function () {
        this.refetchIntervalId &&
          (clearInterval(this.refetchIntervalId),
          (this.refetchIntervalId = void 0));
      }),
      (n.createResult = function (i, l) {
        var o = this.currentQuery,
          u = this.options,
          a = this.currentResult,
          s = this.currentResultState,
          m = this.currentResultOptions,
          v = i !== o,
          h = v ? i.state : this.currentQueryInitialState,
          g = v ? this.currentResult : this.previousQueryResult,
          w = i.state,
          S = w.dataUpdatedAt,
          N = w.error,
          p = w.errorUpdatedAt,
          f = w.isFetching,
          d = w.status,
          x = !1,
          C = !1,
          k;
        if (l.optimisticResults) {
          var M = this.hasListeners(),
            O = !M && Xa(i, l),
            Z = M && Ja(i, o, l, u);
          (O || Z) && ((f = !0), S || (d = "loading"));
        }
        if (
          l.keepPreviousData &&
          !w.dataUpdateCount &&
          g != null &&
          g.isSuccess &&
          d !== "error"
        )
          (k = g.data), (S = g.dataUpdatedAt), (d = g.status), (x = !0);
        else if (l.select && typeof w.data < "u")
          if (
            a &&
            w.data === (s == null ? void 0 : s.data) &&
            l.select === this.selectFn
          )
            k = this.selectResult;
          else
            try {
              (this.selectFn = l.select),
                (k = l.select(w.data)),
                l.structuralSharing !== !1 &&
                  (k = Pi(a == null ? void 0 : a.data, k)),
                (this.selectResult = k),
                (this.selectError = null);
            } catch (Se) {
              Oi().error(Se), (this.selectError = Se);
            }
        else k = w.data;
        if (
          typeof l.placeholderData < "u" &&
          typeof k > "u" &&
          (d === "loading" || d === "idle")
        ) {
          var j;
          if (
            a != null &&
            a.isPlaceholderData &&
            l.placeholderData === (m == null ? void 0 : m.placeholderData)
          )
            j = a.data;
          else if (
            ((j =
              typeof l.placeholderData == "function"
                ? l.placeholderData()
                : l.placeholderData),
            l.select && typeof j < "u")
          )
            try {
              (j = l.select(j)),
                l.structuralSharing !== !1 &&
                  (j = Pi(a == null ? void 0 : a.data, j)),
                (this.selectError = null);
            } catch (Se) {
              Oi().error(Se), (this.selectError = Se);
            }
          typeof j < "u" && ((d = "success"), (k = j), (C = !0));
        }
        this.selectError &&
          ((N = this.selectError),
          (k = this.selectResult),
          (p = Date.now()),
          (d = "error"));
        var le = {
          status: d,
          isLoading: d === "loading",
          isSuccess: d === "success",
          isError: d === "error",
          isIdle: d === "idle",
          data: k,
          dataUpdatedAt: S,
          error: N,
          errorUpdatedAt: p,
          failureCount: w.fetchFailureCount,
          errorUpdateCount: w.errorUpdateCount,
          isFetched: w.dataUpdateCount > 0 || w.errorUpdateCount > 0,
          isFetchedAfterMount:
            w.dataUpdateCount > h.dataUpdateCount ||
            w.errorUpdateCount > h.errorUpdateCount,
          isFetching: f,
          isRefetching: f && d !== "loading",
          isLoadingError: d === "error" && w.dataUpdatedAt === 0,
          isPlaceholderData: C,
          isPreviousData: x,
          isRefetchError: d === "error" && w.dataUpdatedAt !== 0,
          isStale: pu(i, l),
          refetch: this.refetch,
          remove: this.remove,
        };
        return le;
      }),
      (n.shouldNotifyListeners = function (i, l) {
        if (!l) return !0;
        var o = this.options,
          u = o.notifyOnChangeProps,
          a = o.notifyOnChangePropsExclusions;
        if ((!u && !a) || (u === "tracked" && !this.trackedProps.length))
          return !0;
        var s = u === "tracked" ? this.trackedProps : u;
        return Object.keys(i).some(function (m) {
          var v = m,
            h = i[v] !== l[v],
            g =
              s == null
                ? void 0
                : s.some(function (S) {
                    return S === m;
                  }),
            w =
              a == null
                ? void 0
                : a.some(function (S) {
                    return S === m;
                  });
          return h && !w && (!s || g);
        });
      }),
      (n.updateResult = function (i) {
        var l = this.currentResult;
        if (
          ((this.currentResult = this.createResult(
            this.currentQuery,
            this.options
          )),
          (this.currentResultState = this.currentQuery.state),
          (this.currentResultOptions = this.options),
          !zd(this.currentResult, l))
        ) {
          var o = { cache: !0 };
          (i == null ? void 0 : i.listeners) !== !1 &&
            this.shouldNotifyListeners(this.currentResult, l) &&
            (o.listeners = !0),
            this.notify(T({}, o, i));
        }
      }),
      (n.updateQuery = function () {
        var i = this.client.getQueryCache().build(this.client, this.options);
        if (i !== this.currentQuery) {
          var l = this.currentQuery;
          (this.currentQuery = i),
            (this.currentQueryInitialState = i.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (l == null || l.removeObserver(this), i.addObserver(this));
        }
      }),
      (n.onQueryUpdate = function (i) {
        var l = {};
        i.type === "success"
          ? (l.onSuccess = !0)
          : i.type === "error" && !Xr(i.error) && (l.onError = !0),
          this.updateResult(l),
          this.hasListeners() && this.updateTimers();
      }),
      (n.notify = function (i) {
        var l = this;
        W.batch(function () {
          i.onSuccess
            ? (l.options.onSuccess == null ||
                l.options.onSuccess(l.currentResult.data),
              l.options.onSettled == null ||
                l.options.onSettled(l.currentResult.data, null))
            : i.onError &&
              (l.options.onError == null ||
                l.options.onError(l.currentResult.error),
              l.options.onSettled == null ||
                l.options.onSettled(void 0, l.currentResult.error)),
            i.listeners &&
              l.listeners.forEach(function (o) {
                o(l.currentResult);
              }),
            i.cache &&
              l.client.getQueryCache().notify({
                query: l.currentQuery,
                type: "observerResultsUpdated",
              });
        });
      }),
      t
    );
  })(vr);
function tp(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Xa(e, t) {
  return tp(e, t) || (e.state.dataUpdatedAt > 0 && vo(e, t, t.refetchOnMount));
}
function vo(e, t, n) {
  if (t.enabled !== !1) {
    var r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && pu(e, t));
  }
  return !1;
}
function Ja(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    pu(e, n)
  );
}
function pu(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var np = of.unstable_batchedUpdates;
W.setBatchNotifyFunction(np);
var rp = console;
Ud(rp);
var ba = c.createContext(void 0),
  Nc = c.createContext(!1);
function Rc(e) {
  return e && typeof window < "u"
    ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = ba),
      window.ReactQueryClientContext)
    : ba;
}
var ip = function () {
    var t = c.useContext(Rc(c.useContext(Nc)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  lp = function (t) {
    var n = t.client,
      r = t.contextSharing,
      i = r === void 0 ? !1 : r,
      l = t.children;
    c.useEffect(
      function () {
        return (
          n.mount(),
          function () {
            n.unmount();
          }
        );
      },
      [n]
    );
    var o = Rc(i);
    return c.createElement(
      Nc.Provider,
      { value: i },
      c.createElement(o.Provider, { value: n }, l)
    );
  };
function op() {
  var e = !1;
  return {
    clearReset: function () {
      e = !1;
    },
    reset: function () {
      e = !0;
    },
    isReset: function () {
      return e;
    },
  };
}
var up = c.createContext(op()),
  ap = function () {
    return c.useContext(up);
  };
function sp(e, t, n) {
  return typeof t == "function"
    ? t.apply(void 0, n)
    : typeof t == "boolean"
    ? t
    : !!e;
}
function cp(e, t) {
  var n = c.useRef(!1),
    r = c.useState(0),
    i = r[1],
    l = ip(),
    o = ap(),
    u = l.defaultQueryObserverOptions(e);
  (u.optimisticResults = !0),
    u.onError && (u.onError = W.batchCalls(u.onError)),
    u.onSuccess && (u.onSuccess = W.batchCalls(u.onSuccess)),
    u.onSettled && (u.onSettled = W.batchCalls(u.onSettled)),
    u.suspense &&
      (typeof u.staleTime != "number" && (u.staleTime = 1e3),
      u.cacheTime === 0 && (u.cacheTime = 1)),
    (u.suspense || u.useErrorBoundary) &&
      (o.isReset() || (u.retryOnMount = !1));
  var a = c.useState(function () {
      return new t(l, u);
    }),
    s = a[0],
    m = s.getOptimisticResult(u);
  if (
    (c.useEffect(
      function () {
        (n.current = !0), o.clearReset();
        var v = s.subscribe(
          W.batchCalls(function () {
            n.current &&
              i(function (h) {
                return h + 1;
              });
          })
        );
        return (
          s.updateResult(),
          function () {
            (n.current = !1), v();
          }
        );
      },
      [o, s]
    ),
    c.useEffect(
      function () {
        s.setOptions(u, { listeners: !1 });
      },
      [u, s]
    ),
    u.suspense && m.isLoading)
  )
    throw s
      .fetchOptimistic(u)
      .then(function (v) {
        var h = v.data;
        u.onSuccess == null || u.onSuccess(h),
          u.onSettled == null || u.onSettled(h, null);
      })
      .catch(function (v) {
        o.clearReset(),
          u.onError == null || u.onError(v),
          u.onSettled == null || u.onSettled(void 0, v);
      });
  if (
    m.isError &&
    !o.isReset() &&
    !m.isFetching &&
    sp(u.suspense, u.useErrorBoundary, [m.error, s.getCurrentQuery()])
  )
    throw m.error;
  return u.notifyOnChangeProps === "tracked" && (m = s.trackResult(m, u)), m;
}
function fp(e, t, n) {
  var r = Gr(e, t, n);
  return cp(r, ep);
}
async function dp() {
  return (
    await fetch("/api/fetchNotion")
      .then((t) => t.json())
      .then((t) => t.results)
  ).map((t) => {
    const { properties: n } = t,
      {
        slug: r,
        title: i,
        img: l,
        description: o,
        demo: u,
        code: a,
        technologies: s,
        isShown: m,
      } = n;
    return {
      id: r.rich_text[0].plain_text,
      title: i.title[0].plain_text,
      img: l.files[0].file.url,
      description: o.rich_text[0].plain_text,
      demo: u.url,
      code: a.url,
      isShown: m.checkbox,
      technologies: s.relation,
    };
  });
}
function pp() {
  const {
    isLoading: e,
    data: t,
    error: n,
  } = fp({ queryKey: ["projects"], queryFn: dp, retry: !1 });
  return { isLoading: e, projects: t, error: n };
}
function qn({ children: e, href: t }) {
  return y.jsx("a", {
    className:
      "dark:focus:ring-offset-white-800/75 flex items-center gap-2 rounded-full border border-cyan bg-gray4 px-4 py-1 font-medium text-cyan outline-none transition-all duration-300 hover:bg-cyan hover:text-white focus:ring-2 focus:ring-offset-2 dark:hover:bg-cyan dark:hover:text-white ",
    href: t,
    children: e,
  });
}
function hp({ project: e }) {
  return y.jsxs("li", {
    className: "mb-16 grid grid-cols-1 last:mb-0 lg:grid-cols-2 lg:gap-6",
    children: [
      y.jsx("picture", {
        className:
          "aspect-video overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg dark:shadow-white ",
        children: y.jsx("img", {
          className:
            "scale-105 rounded-xl transition-all duration-300 ease-in-out hover:scale-100",
          src: e.img,
          alt: "",
        }),
      }),
      y.jsxs("div", {
        children: [
          y.jsx("h3", {
            className: "mt-4 text-2xl font-bold sm:text-4xl dark:text-white",
            children: e.title,
          }),
          y.jsx("p", {
            className: "mt-2 text-sm text-gray7 dark:text-gray4",
            children: e.description,
          }),
          y.jsxs("div", {
            className: "mt-4 flex gap-2",
            children: [
              y.jsxs(qn, {
                href: e.code,
                children: [
                  " ",
                  y.jsx(fu, { size: 24, weight: "bold" }),
                  y.jsx("span", { children: "Código" }),
                ],
              }),
              y.jsxs(qn, {
                href: e.demo,
                children: [
                  " ",
                  y.jsx(Sc, { size: 24, weight: "bold" }),
                  y.jsx("span", { children: "Demo" }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function mp(e, t) {
  const [n, r] = Q.useState(function () {
    const i = localStorage.getItem(t);
    return i ? JSON.parse(i) : e;
  });
  return (
    Q.useEffect(
      function () {
        localStorage.setItem(t, JSON.stringify(n));
      },
      [n, t]
    ),
    [n, r]
  );
}
const Lc = Q.createContext();
function vp({ children: e }) {
  const [t, n] = mp(!1, "isDarkMode");
  Q.useEffect(
    function () {
      t
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    },
    [t]
  );
  function r() {
    n((i) => !i);
  }
  return y.jsx(Lc.Provider, {
    value: { isDarkMode: t, toggleDarkMode: r },
    children: e,
  });
}
function En() {
  const e = Q.useContext(Lc);
  if (e === void 0)
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  return e;
}
function yp() {
  const { isDarkMode: e } = En(),
    { isLoading: t, projects: n } = pp();
  return y.jsxs("section", {
    id: "proyectos",
    className: "mt-16 pt-12",
    children: [
      y.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          y.jsx(wc, { size: 36, weight: "bold", color: e ? "white" : "black" }),
          y.jsx("h2", {
            className:
              "font-RedHat text-3xl font-bold text-gray9 sm:text-5xl dark:text-white",
            children: "Proyectos",
          }),
        ],
      }),
      t &&
        y.jsx("div", {
          className: "mt-12 flex items-center justify-center",
          children: y.jsxs("div", {
            role: "status",
            children: [
              y.jsxs("svg", {
                "aria-hidden": "true",
                className:
                  "h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600",
                viewBox: "0 0 100 101",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  y.jsx("path", {
                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                    fill: "currentColor",
                  }),
                  y.jsx("path", {
                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                    fill: "currentFill",
                  }),
                ],
              }),
              y.jsx("span", { className: "sr-only", children: "Loading..." }),
            ],
          }),
        }),
      !t &&
        y.jsx("ul", {
          className: "mt-8 flex w-full flex-col",
          children: n.map((r) => y.jsx(hp, { project: r }, r.id)),
        }),
    ],
  });
}
function gp() {
  const { isDarkMode: e } = En();
  return y.jsxs("section", {
    id: "educacion",
    className: "mt-8 pt-12",
    children: [
      y.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          y.jsx(yc, { size: 36, weight: "bold", color: e ? "white" : "black" }),
          y.jsx("h2", {
            className:
              "font-RedHat text-3xl font-bold text-gray9 sm:text-5xl dark:text-white",
            children: "Educación",
          }),
        ],
      }),
      y.jsxs("ul", {
        className: "mt-6 border-l-2 border-gray4 ps-4 pt-4",
        children: [
          y.jsx(Fn, {
            title: "Pregrado Ingeniería Multimedia",
            institution: "Universidad Simón Bolívar, Cúcuta",
            date: "2021 - Actualidad",
            description:
              "Me encuentro en mi formación profesional como Ingeniero Multimedia, consolidando competencias en áreas que abarcan desde diseño gráfico, animación digital y modelado 3D hasta diseño UX/UI y desarrollo web, entre otras disciplinas.",
          }),
          y.jsx(Fn, {
            title: "The Ultimate React Course 2024",
            institution: "Udemy",
            date: "2023",
            description:
              "Apasionado por la programación, diseño y desarrollo web, empiezo en 2022 de forma autodidacta a aprender más profundamente JavaScript y posteriormente HTML, CSS y React. Todo de la mano de los cursos de Jonas Schmedtmann en Udemy.",
          }),
          y.jsx(Fn, {
            title: "Build Responsive Real-World Websites with HTML and CSS",
            institution: "Udemy",
            date: "2023",
          }),
          y.jsx(Fn, {
            title: "The Complete JavaScript Course 2024",
            institution: "Udemy",
            date: "2022",
          }),
          y.jsx(Fn, {
            title: "Bachiller Técnico",
            institution: "Colegio Once de Noviembre",
            date: "2019",
            description:
              "Concluí mis estudios secundarios con un título técnico en Contabilización de Operaciones Comerciales y Financieras, destacándome por mantener el más alto promedio del curso durante los últimos tres años. Fui reconocido como Estudiante Integral 2019 y mejor puntaje en las pruebas de estado de mi generación.",
          }),
        ],
      }),
    ],
  });
}
function Fn({ title: e, institution: t, date: n, description: r }) {
  return y.jsxs("li", {
    className: "mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-0",
    children: [
      y.jsxs("div", {
        className: "relative",
        children: [
          y.jsx("div", {
            className:
              "absolute -left-[25px] top-[6px] h-4 w-4 rounded-full bg-cyan2 lg:-left-[27px] lg:h-5 lg:w-5",
          }),
          y.jsx("h3", {
            className: "text-lg font-bold text-cyan lg:w-4/5 lg:text-2xl",
            children: e,
          }),
          y.jsx("h4", {
            className: "font-semibold text-gray9 lg:text-xl dark:text-white",
            children: t,
          }),
          y.jsx("span", {
            className: "text-sm text-gray7 lg:text-base dark:text-gray4",
            children: n,
          }),
        ],
      }),
      y.jsx("div", {
        children: r
          ? y.jsx("p", {
              className: "text-sm text-gray7 lg:text-base dark:text-gray4",
              children: r,
            })
          : null,
      }),
    ],
  });
}
const wp = "/assets/heroimg-dark-DZlNEBtP.webp",
  xp = "/assets/heroimg-light-CXtdAigu.webp";
function Sp({ reference: e }) {
  const { isDarkMode: t } = En();
  return y.jsxs("section", {
    ref: e,
    className: "mx-auto mt-24 flex flex-col items-center md:w-4/5",
    children: [
      y.jsx("picture", {
        children: y.jsx("img", {
          className: " aspect-square w-24 rounded-full",
          src: t ? xp : wp,
          alt: "Eugenio Witsman Icon",
        }),
      }),
      y.jsx("h1", {
        className:
          "mt-3 font-RedHat text-4xl font-bold text-gray9 sm:text-6xl dark:text-white",
        children: "Hola, soy Eugenio",
      }),
      y.jsxs("p", {
        className:
          "mt-4 text-center text-lg sm:w-2/3 sm:text-2xl dark:text-gray4",
        children: [
          "Ingeniero Multimedia.",
          " ",
          y.jsxs("span", {
            className: "font-medium text-cyan8",
            children: [" ", "Desarrollador de software."],
          }),
          " ",
          y.jsx("span", {
            className: "font-medium text-teal8",
            children: "De Sevilla, España.",
          }),
          " ",
          "Apasionado por la creatividad.",
        ],
      }),
      y.jsx("a", {
        href: "https://www.linkedin.com/in/gene-witsman-garcía-0a814b286/",
        rel: "noopener",
        className:
          "mt-4 flex items-center rounded-full outline-none transition focus:ring-2 focus:ring-offset-2 md:justify-center md:hover:scale-105",
        children: y.jsx("div", {
          className: "flex items-center",
          children: y.jsxs("span", {
            className:
              "relative inline-flex overflow-hidden rounded-full p-[1px]",
            children: [
              y.jsx("span", {
                className:
                  "absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)] ",
              }),
              y.jsx("div", {
                className:
                  "inline-flex w-full cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 backdrop-blur-3xl dark:bg-gray-800 dark:text-white/80",
                children: "Disponible para trabajar",
              }),
            ],
          }),
        }),
      }),
      y.jsxs("div", {
        className: "mt-8 flex flex-wrap justify-center gap-3",
        children: [
          y.jsxs(qn, {
            href: "https://www.linkedin.com/in/gene-witsman-garcía-0a814b286/",
            children: [
              y.jsx(Ec, { size: 24, weight: "bold" }),
              y.jsx("span", { children: "Linkedin" }),
            ],
          }),
          y.jsxs(qn, {
            href: "https://github.com/GeneWG",
            children: [
              y.jsx(fu, { size: 24, weight: "bold" }),
              y.jsx("span", { children: "Github" }),
            ],
          }),
          y.jsxs(qn, {
            href: "mailto:genewitsman2003@gmail.com?Subject=Interesado%20en%20contactarte",
            children: [
              y.jsx(xc, { size: 24, weight: "bold" }),
              y.jsx("span", { children: "genewitsman2003@gmail.com" }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Ep = "/assets/aboutme-YEQTfeSW.webp";
function kp() {
  const { isDarkMode: e } = En();
  return y.jsxs("section", {
    id: "sobremi",
    className: "mt-8 pt-12",
    children: [
      y.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          y.jsx(Ac, { size: 36, weight: "bold", color: e ? "white" : "black" }),
          y.jsx("h2", {
            className:
              "font-RedHat text-3xl font-bold text-gray9 sm:text-5xl dark:text-white",
            children: "Sobre mí",
          }),
        ],
      }),
      y.jsxs("div", {
        className: "mt-2 grid grid-cols-1 sm:grid-cols-aboutme-layout",
        children: [
          y.jsx("picture", {
            className: "flex items-center justify-center sm:order-1",
            children: y.jsx("img", {
              className:
                "aspect-square h-52 w-52 rotate-6 rounded-[4rem] object-cover shadow-xl",
              src: Ep,
              alt: "Eugenio Witsman Dev.",
            }),
          }),
          y.jsxs("div", {
            className:
              "mt-6 flex flex-col gap-3 text-xs lg:text-base dark:text-gray4",
            children: [
              y.jsx("p", {
                children:
                  "Me llamo Gene Witsman (Eugenio en el DNI español) y tengo 21 años. Soy mitad estadounidense ya que mi padre es de Florida, Estados Unidos. Siempre he sido una persona curiosa y con ganas de aprender cosas nuevas, y desde pequeño siempre me ha interesado la informática. Desde que descubrí la programación me apasioné."              }),
              y.jsxs("p", {
                children: [
                  " ",
                  "Cuando no estoy frente al ordenador, disfruto entrenando en el gimnasio, donde he adquirido valores importantes como la disciplina y el trabajo duro. Cualidades que me gusta aplicar a los diferentes aspectos de mi vida, así como en mi futura carrera profesional.",
                  " ",
                ],
              }),
              y.jsx("p", {
                children:
                  "Como recién graduado, estoy buscando una oportunidad para unirme a un equipo dinámico y colaborar en proyectos innovadores. Mi objetivo es aplicar mis conocimientos y habilidades para contribuir al éxito del equipo y aprender de profesionales experimentados. Soy una persona proactiva y siempre dispuesta a asumir nuevos retos.",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Cp() {
  const { isDarkMode: e, toggleDarkMode: t } = En();
  return y.jsx("button", {
    onClick: t,
    className:
      "relative block rounded-full px-2 py-2 outline-none transition-all duration-300  hover:text-cyan focus:ring-2 focus:ring-offset-2 dark:hover:text-cyan",
    children: e
      ? y.jsx(Cc, { size: 16, weight: "bold" })
      : y.jsx(kc, { size: 16, weight: "bold" }),
  });
}
function Ap({ isIntersecting: e }) {
  return y.jsx("header", {
    className:
      "fixed top-0 z-10 mx-auto mt-2 flex w-full items-center justify-center",
    children: y.jsxs("nav", {
      className: `flex items-center justify-center gap-3 rounded-full px-2 text-[10px] font-semibold text-inherit transition-all duration-300 sm:px-3 sm:text-sm dark:text-white ${
        e
          ? "bg-white/0 dark:bg-black/0"
          : "bg-white/40 shadow-lg backdrop-blur-md"
      }`,
      children: [
        y.jsx(Dr, { href: "#proyectos", children: "Proyectos" }),
        y.jsx(Dr, { href: "#educacion", children: "Educación" }),
        y.jsx(Dr, { href: "#sobremi", children: "Sobre mí" }),
        y.jsx(Dr, {
          href: "mailto:genewitsman2003@gmail.com?Subject=Interesado%20en%20contactarte",
          children: "Contacto",
        }),
        y.jsx(Cp, {}),
      ],
    }),
  });
}
function Dr({ href: e, children: t }) {
  return y.jsx("a", {
    className:
      "relative block rounded-full px-2 py-2 outline-none transition-all duration-300 hover:text-cyan focus:ring-2 focus:ring-offset-2 focus:ring-offset-white/75 dark:hover:text-cyan",
    href: e,
    children: t,
  });
}
const Pp =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='2500'%20height='2500'%20viewBox='0%200%201052%201052'%3e%3cpath%20fill='%23f0db4f'%20d='M0%200h1052v1052H0z'/%3e%3cpath%20d='M965.9%20801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8%206.9-27.9%2040.2-36.6%2066.6-28.6%2017%205.7%2033.1%2018.801%2042.8%2039.7%2045.4-29.399%2045.3-29.2%2077-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3%201.3-20.699%202.699-31%204-29.699%207.5-58%2023.1-74.6%2044-49.8%2056.5-35.6%20155.399%2025%20196.1%2059.7%2044.8%20147.4%2055%20158.6%2096.9%2010.9%2051.3-37.699%2067.899-86%2062-35.6-7.4-55.399-25.5-76.8-58.4-39.399%2022.8-39.399%2022.8-79.899%2046.1%209.6%2021%2019.699%2030.5%2035.8%2048.7%2076.2%2077.3%20266.899%2073.5%20301.1-43.5%201.399-4.001%2010.6-30.801%203.199-72.101zm-394-317.6h-98.4c0%2085-.399%20169.4-.399%20254.4%200%2054.1%202.8%20103.7-6%20118.9-14.4%2029.899-51.7%2026.2-68.7%2020.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699%2016.3-53.3%2032.699-80%2049%2013.301%2027.3%2032.9%2051%2058%2066.399%2037.5%2022.5%2087.9%2029.4%20140.601%2017.3%2034.3-10%2063.899-30.699%2079.399-62.199%2022.4-41.3%2017.6-91.3%2017.4-146.6.5-90.2%200-180.4%200-270.9z'%20fill='%23323330'/%3e%3c/svg%3e",
  Mp =
    "data:image/svg+xml,%3csvg%20viewBox='0%200%20256%20228'%20width='256'%20height='228'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMidYMid'%3e%3cpath%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621%206.238-30.281%202.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848%20155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233%2050.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165%20167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266%2013.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923%20168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586%2013.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488%2029.348-9.723%2048.443-25.443%2048.443-41.52%200-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345-3.24-10.257-7.612-21.163-12.963-32.432%205.106-11%209.31-21.767%2012.459-31.957%202.619.758%205.16%201.557%207.61%202.4%2023.69%208.156%2038.14%2020.213%2038.14%2029.504%200%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787-1.524%208.219-4.59%2013.698-8.382%2015.893-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246%2012.376-1.098%2024.068-2.894%2034.671-5.345.522%202.107.986%204.173%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994%207.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216%200-9.322%2013.897-21.212%2037.076-29.293%202.813-.98%205.757-1.905%208.812-2.773%203.204%2010.42%207.406%2021.315%2012.477%2032.332-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789%208.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152%207.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793%202.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433%204.902.192%209.899.29%2014.978.29%205.218%200%2010.376-.117%2015.453-.343-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026%20347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815%20329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627%20310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695%20358.489%20358.489%200%200%201%2011.036%2020.54%20329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026-.344%201.668-.73%203.367-1.15%205.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86-22.86-10.235-22.86-22.86%2010.235-22.86%2022.86-22.86Z'%20fill='%2300D8FF'/%3e%3c/svg%3e",
  Op =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20452%20520'%3e%3cpath%20fill='%23e34f26'%20d='M41%20460L0%200h451l-41%20460-185%2052'%20/%3e%3cpath%20fill='%23ef652a'%20d='M226%20472l149-41%2035-394H226'%20/%3e%3cpath%20fill='%23ecedee'%20d='M226%20208h-75l-5-58h80V94H84l15%20171h127zm0%20147l-64-17-4-45h-56l7%2089%20117%2032z'/%3e%3cpath%20fill='%23fff'%20d='M226%20265h69l-7%2073-62%2017v59l115-32%2016-174H226zm0-171v56h136l5-56z'/%3e%3c/svg%3e",
  _p =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20452%20520'%3e%3cpath%20fill='%230c73b8'%20d='M41%20460L0%200h451l-41%20460-185%2052'/%3e%3cpath%20fill='%2330a9dc'%20d='M226%20472l149-41%2035-394H226'/%3e%3cpath%20fill='%23ecedee'%20d='M226%20208H94l5%2057h127zm0-114H84l5%2056h137zm0%20261l-124-33%207%2060%20117%2032z'/%3e%3cpath%20fill='%23fff'%20d='M226%20265h69l-7%2073-62%2017v59l115-32%2026-288H226v56h80l-6%2058h-74z'/%3e%3c/svg%3e",
  jp =
    "data:image/svg+xml,%3csvg%20width='54'%20height='80'%20viewBox='0%200%2054%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_912_3)'%3e%3cpath%20d='M13.3333%2080.0002C20.6933%2080.0002%2026.6667%2074.0268%2026.6667%2066.6668V53.3335H13.3333C5.97333%2053.3335%200%2059.3068%200%2066.6668C0%2074.0268%205.97333%2080.0002%2013.3333%2080.0002Z'%20fill='%230ACF83'/%3e%3cpath%20d='M0%2039.9998C0%2032.6398%205.97333%2026.6665%2013.3333%2026.6665H26.6667V53.3332H13.3333C5.97333%2053.3332%200%2047.3598%200%2039.9998Z'%20fill='%23A259FF'/%3e%3cpath%20d='M0%2013.3333C0%205.97333%205.97333%200%2013.3333%200H26.6667V26.6667H13.3333C5.97333%2026.6667%200%2020.6933%200%2013.3333Z'%20fill='%23F24E1E'/%3e%3cpath%20d='M26.6667%200H40.0001C47.3601%200%2053.3334%205.97333%2053.3334%2013.3333C53.3334%2020.6933%2047.3601%2026.6667%2040.0001%2026.6667H26.6667V0Z'%20fill='%23FF7262'/%3e%3cpath%20d='M53.3334%2039.9998C53.3334%2047.3598%2047.3601%2053.3332%2040.0001%2053.3332C32.6401%2053.3332%2026.6667%2047.3598%2026.6667%2039.9998C26.6667%2032.6398%2032.6401%2026.6665%2040.0001%2026.6665C47.3601%2026.6665%2053.3334%2032.6398%2053.3334%2039.9998Z'%20fill='%231ABCFE'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_912_3'%3e%3crect%20width='53.3333'%20height='80'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  Fp =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMidYMid'%20viewBox='0%200%20256%20256'%3e%3cpath%20d='M251.17%20116.6%20139.4%204.82a16.49%2016.49%200%200%200-23.31%200l-23.21%2023.2%2029.44%2029.45a19.57%2019.57%200%200%201%2024.8%2024.96l28.37%2028.38a19.61%2019.61%200%201%201-11.75%2011.06L137.28%2095.4v69.64a19.62%2019.62%200%201%201-16.13-.57V94.2a19.61%2019.61%200%200%201-10.65-25.73L81.46%2039.44%204.83%20116.08a16.49%2016.49%200%200%200%200%2023.32L116.6%20251.17a16.49%2016.49%200%200%200%2023.32%200l111.25-111.25a16.5%2016.5%200%200%200%200-23.33'%20fill='%23DE4C36'/%3e%3c/svg%3e",
  Np =
    "data:image/svg+xml,%3csvg%20viewBox='0%200%20109%20113'%20width='109'%20height='113'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M63.708%20110.284c-2.86%203.601-8.658%201.628-8.727-2.97l-1.007-67.251h45.22c8.19%200%2012.758%209.46%207.665%2015.874l-43.151%2054.347Z'%20fill='url(%23a)'/%3e%3cpath%20d='M63.708%20110.284c-2.86%203.601-8.658%201.628-8.727-2.97l-1.007-67.251h45.22c8.19%200%2012.758%209.46%207.665%2015.874l-43.151%2054.347Z'%20fill='url(%23b)'%20fill-opacity='.2'/%3e%3cpath%20d='M45.317%202.071c2.86-3.601%208.657-1.628%208.726%202.97l.442%2067.251H9.83c-8.19%200-12.759-9.46-7.665-15.875L45.317%202.072Z'%20fill='%233ECF8E'/%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='53.974'%20y1='54.974'%20x2='94.163'%20y2='71.829'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23249361'/%3e%3cstop%20offset='1'%20stop-color='%233ECF8E'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='36.156'%20y1='30.578'%20x2='54.484'%20y2='65.081'%20gradientUnits='userSpaceOnUse'%3e%3cstop/%3e%3cstop%20offset='1'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
function Rp() {
  const { isDarkMode: e } = En();
  return y.jsxs("section", {
    id: "skills",
    className: "mt-8 pt-12",
    children: [
      y.jsxs("div", {
        className: "flex items-center gap-3",
        children: [
          y.jsx(gc, { size: 36, weight: "bold", color: e ? "white" : "black" }),
          y.jsx("h2", {
            className:
              "font-RedHat text-3xl font-bold text-gray9 sm:text-5xl dark:text-white",
            children: "Habilidades",
          }),
        ],
      }),
      y.jsxs("div", {
        className: "mt-8 flex justify-evenly",
        children: [
          y.jsx(jt, { icon: Pp, label: "Java" }),
          y.jsx(jt, { icon: _p, label: "CSS" }),
          y.jsx(jt, { icon: Op, label: "HTML" }),
          y.jsx(jt, { icon: Mp, label: "SQL" }),
        ],
      }),
      y.jsxs("div", {
        className: "mt-4 flex justify-evenly",
        children: [
          y.jsx(jt, { icon: Np, label: "JavaScript" }),
          y.jsx(jt, { icon: jp, label: "Figma" }),
          y.jsx(jt, { icon: Fp, label: "Git" }),
        ],
      }),
    ],
  });
}
function jt({ icon: e, label: t }) {
  return y.jsxs("div", {
    className: "flex flex-col items-center",
    children: [
      y.jsx("img", {
        className: "mb-2 h-12 w-auto md:h-20",
        src: e,
        alt: `${t} Icon`,
      }),
      y.jsx("span", {
        className: "text-sm font-medium md:text-base dark:text-gray4",
        children: t,
      }),
    ],
  });
}
const Lp = new bd({ defaultOptions: { queries: { staleTime: 60 * 1e3 } } }),
  Tp = new Date().getFullYear();
function Dp() {
  const [e, t] = Q.useState(!1),
    n = Q.useRef(null);
  return (
    Q.useEffect(() => {
      const r = new IntersectionObserver(
        ([i]) => {
          t(i.isIntersecting);
        },
        { rootMargin: "-430px" }
      );
      return r.observe(n.current), () => r.disconnect();
    }, [e]),
    y.jsx(vp, {
      children: y.jsx(lp, {
        client: Lp,
        children: y.jsxs("div", {
          className: "relative",
          children: [
            y.jsx("div", {
              className:
                "absolute bottom-0 top-0 z-[-2] min-h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-black/95",
            }),
            y.jsx(Ap, { isIntersecting: e }),
            y.jsxs("main", {
              className: "mx-auto max-w-4xl  px-4 py-8",
              children: [
                y.jsx(Sp, { reference: n }),
                y.jsx(yp, {}),
                y.jsx(gp, {}),
                y.jsx(kp, {}),
                y.jsx(Rp, {}),
              ],
            }),
            y.jsxs("footer", {
              className:
                "mx-auto flex max-w-4xl items-center justify-between px-4 py-6 text-xs text-gray-500 md:text-base",
              children: [
                y.jsxs("p", {
                  className: "w-1/2 md:w-full",
                  children: [
                    "© ",
                    Tp,
                    " ",
                    y.jsx("a", {
                      href: "https://www.linkedin.com/in/gene-witsman-garcía-0a814b286/",
                      children: "Eugenio Witsman.",
                    }),
                    " ",
                    "Casi todos los derechos reservados",
                  ],
                }),
                y.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    y.jsx("a", {
                      className:
                        "font-bold transition-all duration-300 hover:underline",
                      href: "#proyectos",
                      children: "Proyectos",
                    }),
                    y.jsx("a", {
                      className:
                        "font-bold transition-all duration-300 hover:underline",
                      href: "mailto:genewitsman2003@gmail.com?Subject=Interesado%20en%20contactarte",
                      children: "Contacto",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
wl.createRoot(document.getElementById("root")).render(
  y.jsx(c.StrictMode, { children: y.jsx(Dp, {}) })
);
