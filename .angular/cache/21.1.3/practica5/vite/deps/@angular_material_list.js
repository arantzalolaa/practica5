import {
  Platform,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  _getShadowRoot,
  normalizePassiveListenerOptions
} from "./chunk-ZZMRWB5Q.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-HGSB4UQP.js";
import {
  _CdkPrivateStyleLoader,
  _VisuallyHiddenLoader,
  _setInnerHtml
} from "./chunk-DUDF4UI6.js";
import {
  BidiModule
} from "./chunk-ETGETH2X.js";
import {
  DomSanitizer
} from "./chunk-5F4KHD2F.js";
import {
  NgTemplateOutlet
} from "./chunk-DFSXIYCV.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_ID,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  QueryList,
  Renderer2,
  RendererFactory2,
  Subject,
  Subscription,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  combineLatest,
  concat,
  debounceTime,
  distinctUntilChanged,
  effect,
  filter,
  forwardRef,
  inject,
  isObservable,
  isSignal,
  map,
  merge,
  of,
  setClassMetadata,
  signal,
  skip,
  startWith,
  take,
  takeUntil,
  tap,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-X4GZNAG3.js";

// node_modules/@angular/cdk/fesm2022/_element-chunk.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/_array-chunk.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

// node_modules/@angular/cdk/fesm2022/_fake-event-detection-chunk.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}

// node_modules/@angular/cdk/fesm2022/_keycodes-chunk.mjs
var TAB = 9;
var ENTER = 13;
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var SPACE = 32;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var END = 35;
var HOME = 36;
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;
var ZERO = 48;
var NINE = 57;
var A = 65;
var Z = 90;
var META = 91;
var MAC_META = 224;

// node_modules/@angular/cdk/fesm2022/_focus-monitor-chunk.mjs
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = {
  passive: true,
  capture: true
};
var InputModalityDetector = class _InputModalityDetector {
  _platform = inject(Platform);
  _listenerCleanups;
  modalityDetected;
  modalityChanged;
  get mostRecentModality() {
    return this._modality.value;
  }
  _mostRecentTarget = null;
  _modality = new BehaviorSubject(null);
  _options;
  _lastTouchMs = 0;
  _onKeydown = (event) => {
    if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
      return;
    }
    this._modality.next("keyboard");
    this._mostRecentTarget = _getEventTarget(event);
  };
  _onMousedown = (event) => {
    if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
      return;
    }
    this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
    this._mostRecentTarget = _getEventTarget(event);
  };
  _onTouchstart = (event) => {
    if (isFakeTouchstartFromScreenReader(event)) {
      this._modality.next("keyboard");
      return;
    }
    this._lastTouchMs = Date.now();
    this._modality.next("touch");
    this._mostRecentTarget = _getEventTarget(event);
  };
  constructor() {
    const ngZone = inject(NgZone);
    const document2 = inject(DOCUMENT);
    const options = inject(INPUT_MODALITY_DETECTOR_OPTIONS, {
      optional: true
    });
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (this._platform.isBrowser) {
      const renderer = inject(RendererFactory2).createRenderer(null, null);
      this._listenerCleanups = ngZone.runOutsideAngular(() => {
        return [renderer.listen(document2, "keydown", this._onKeydown, modalityEventListenerOptions), renderer.listen(document2, "mousedown", this._onMousedown, modalityEventListenerOptions), renderer.listen(document2, "touchstart", this._onTouchstart, modalityEventListenerOptions)];
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    this._listenerCleanups?.forEach((cleanup) => cleanup());
  }
  static ɵfac = function InputModalityDetector_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputModalityDetector)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _InputModalityDetector,
    factory: _InputModalityDetector.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModalityDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var FocusMonitor = class _FocusMonitor {
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _inputModalityDetector = inject(InputModalityDetector);
  _origin = null;
  _lastFocusOrigin = null;
  _windowFocused = false;
  _windowFocusTimeoutId;
  _originTimeoutId;
  _originFromTouchInteraction = false;
  _elementInfo = /* @__PURE__ */ new Map();
  _monitoredElementCount = 0;
  _rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
  _detectionMode;
  _windowFocusListener = () => {
    this._windowFocused = true;
    this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
  };
  _document = inject(DOCUMENT);
  _stopInputModalityDetector = new Subject();
  constructor() {
    const options = inject(FOCUS_MONITOR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  _rootNodeFocusAndBlurListener = (event) => {
    const target = _getEventTarget(event);
    for (let element = target; element; element = element.parentElement) {
      if (event.type === "focus") {
        this._onFocus(event, element);
      } else {
        this._onBlur(event, element);
      }
    }
  };
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._document;
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._document.activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  _getWindow() {
    return this._document.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(modality, true);
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
  static ɵfac = function FocusMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusMonitor)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FocusMonitor,
    factory: _FocusMonitor.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkMonitorFocus = class _CdkMonitorFocus {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _monitorSubscription;
  _focusOrigin = null;
  cdkFocusChange = new EventEmitter();
  constructor() {
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._monitorSubscription?.unsubscribe();
  }
  static ɵfac = function CdkMonitorFocus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkMonitorFocus)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkMonitorFocus,
    selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
    outputs: {
      cdkFocusChange: "cdkFocusChange"
    },
    exportAs: ["cdkMonitorFocus"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMonitorFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus"
    }]
  }], () => [], {
    cdkFocusChange: [{
      type: Output
    }]
  });
})();

// node_modules/@angular/cdk/fesm2022/_breakpoints-observer-chunk.mjs
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var MediaMatcher = class _MediaMatcher {
  _platform = inject(Platform);
  _nonce = inject(CSP_NONCE, {
    optional: true
  });
  _matchMedia;
  constructor() {
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : noopMatchMedia;
  }
  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query, this._nonce);
    }
    return this._matchMedia(query);
  }
  static ɵfac = function MediaMatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaMatcher)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MediaMatcher,
    factory: _MediaMatcher.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
var BreakpointObserver = class _BreakpointObserver {
  _mediaMatcher = inject(MediaMatcher);
  _zone = inject(NgZone);
  _queries = /* @__PURE__ */ new Map();
  _destroySubject = new Subject();
  constructor() {
  }
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query) => this._registerQuery(query).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  _registerQuery(query) {
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    const queryObservable = new Observable((observer) => {
      const handler = (e) => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query,
      matches
    })), takeUntil(this._destroySubject));
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output);
    return output;
  }
  static ɵfac = function BreakpointObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BreakpointObserver)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _BreakpointObserver,
    factory: _BreakpointObserver.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
  static ɵfac = function MutationObserverFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MutationObserverFactory)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MutationObserverFactory,
    factory: _MutationObserverFactory.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ContentObserver = class _ContentObserver {
  _mutationObserverFactory = inject(MutationObserverFactory);
  _observedElements = /* @__PURE__ */ new Map();
  _ngZone = inject(NgZone);
  constructor() {
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
        this._ngZone.run(() => {
          observer.next(records);
        });
      });
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  _observeElement(element) {
    return this._ngZone.runOutsideAngular(() => {
      if (!this._observedElements.has(element)) {
        const stream = new Subject();
        const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
        if (observer) {
          observer.observe(element, {
            characterData: true,
            childList: true,
            subtree: true
          });
        }
        this._observedElements.set(element, {
          observer,
          stream,
          count: 1
        });
      } else {
        this._observedElements.get(element).count++;
      }
      return this._observedElements.get(element).stream;
    });
  }
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
  static ɵfac = function ContentObserver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContentObserver)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ContentObserver,
    factory: _ContentObserver.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkObserveContent = class _CdkObserveContent {
  _contentObserver = inject(ContentObserver);
  _elementRef = inject(ElementRef);
  event = new EventEmitter();
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  _disabled = false;
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  _debounce;
  _currentSubscription = null;
  constructor() {
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
  static ɵfac = function CdkObserveContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkObserveContent)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkObserveContent,
    selectors: [["", "cdkObserveContent", ""]],
    inputs: {
      disabled: [2, "cdkObserveContentDisabled", "disabled", booleanAttribute],
      debounce: "debounce"
    },
    outputs: {
      event: "cdkObserveContent"
    },
    exportAs: ["cdkObserveContent"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkObserveContent, [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent"
    }]
  }], () => [], {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  });
})();
var ObserversModule = class _ObserversModule {
  static ɵfac = function ObserversModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ObserversModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ObserversModule,
    imports: [CdkObserveContent],
    exports: [CdkObserveContent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [MutationObserverFactory]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObserversModule, [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_a11y-module-chunk.mjs
var InteractivityChecker = class _InteractivityChecker {
  _platform = inject(Platform);
  constructor() {
  }
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  isFocusable(element, config) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
  static ɵfac = function InteractivityChecker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InteractivityChecker)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _InteractivityChecker,
    factory: _InteractivityChecker.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractivityChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
  _element;
  _checker;
  _ngZone;
  _document;
  _injector;
  _startAnchor = null;
  _endAnchor = null;
  _hasAttached = false;
  startAnchorListener = () => this.focusLastTabbableElement();
  endAnchorListener = () => this.focusFirstTabbableElement();
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  _enabled = true;
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._injector = _injector;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  hasAttached() {
    return this._hasAttached;
  }
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  _executeOnStable(fn) {
    if (this._injector) {
      afterNextRender(fn, {
        injector: this._injector
      });
    } else {
      setTimeout(fn);
    }
  }
};
var FocusTrapFactory = class _FocusTrapFactory {
  _checker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _document = inject(DOCUMENT);
  _injector = inject(Injector);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
  }
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
  }
  static ɵfac = function FocusTrapFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapFactory)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FocusTrapFactory,
    factory: _FocusTrapFactory.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkTrapFocus = class _CdkTrapFocus {
  _elementRef = inject(ElementRef);
  _focusTrapFactory = inject(FocusTrapFactory);
  focusTrap = void 0;
  _previouslyFocusedElement = null;
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  autoCapture = false;
  constructor() {
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
  static ɵfac = function CdkTrapFocus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTrapFocus)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkTrapFocus,
    selectors: [["", "cdkTrapFocus", ""]],
    inputs: {
      enabled: [2, "cdkTrapFocus", "enabled", booleanAttribute],
      autoCapture: [2, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
    },
    exportAs: ["cdkTrapFocus"],
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTrapFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus"
    }]
  }], () => [], {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  });
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: () => null
});
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var LiveAnnouncer = class _LiveAnnouncer {
  _ngZone = inject(NgZone);
  _defaultOptions = inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, {
    optional: true
  });
  _liveElement;
  _document = inject(DOCUMENT);
  _sanitizer = inject(DomSanitizer);
  _previousTimeout;
  _currentPromise;
  _currentResolve;
  constructor() {
    const elementToken = inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, {
      optional: true
    });
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        if (!message || typeof message === "string") {
          this._liveElement.textContent = message;
        } else {
          _setInnerHtml(this._liveElement, message, this._sanitizer);
        }
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
  static ɵfac = function LiveAnnouncer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LiveAnnouncer)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _LiveAnnouncer,
    factory: _LiveAnnouncer.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveAnnouncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CdkAriaLive = class _CdkAriaLive {
  _elementRef = inject(ElementRef);
  _liveAnnouncer = inject(LiveAnnouncer);
  _contentObserver = inject(ContentObserver);
  _ngZone = inject(NgZone);
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = void 0;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  _politeness = "polite";
  duration;
  _previousAnnouncedText;
  _subscription;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
  }
  ngOnDestroy() {
    this._subscription?.unsubscribe();
  }
  static ɵfac = function CdkAriaLive_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAriaLive)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CdkAriaLive,
    selectors: [["", "cdkAriaLive", ""]],
    inputs: {
      politeness: [0, "cdkAriaLive", "politeness"],
      duration: [0, "cdkAriaLiveDuration", "duration"]
    },
    exportAs: ["cdkAriaLive"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAriaLive, [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive"
    }]
  }], () => [], {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  });
})();
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var HighContrastModeDetector = class _HighContrastModeDetector {
  _platform = inject(Platform);
  _hasCheckedHighContrastMode = false;
  _document = inject(DOCUMENT);
  _breakpointSubscription;
  constructor() {
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      case "rgb(0,0,0)":
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      case "rgb(255,255,255)":
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
  static ɵfac = function HighContrastModeDetector_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HighContrastModeDetector)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _HighContrastModeDetector,
    factory: _HighContrastModeDetector.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighContrastModeDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var A11yModule = class _A11yModule {
  constructor() {
    inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
  }
  static ɵfac = function A11yModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _A11yModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _A11yModule,
    imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
    exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [ObserversModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(A11yModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/_id-generator-chunk.mjs
var counters = {};
var _IdGenerator = class __IdGenerator {
  _appId = inject(APP_ID);
  static _infix = `a${Math.floor(Math.random() * 1e5).toString()}`;
  getId(prefix, randomize = false) {
    if (this._appId !== "ng") {
      prefix += this._appId;
    }
    if (!counters.hasOwnProperty(prefix)) {
      counters[prefix] = 0;
    }
    return `${prefix}${randomize ? __IdGenerator._infix + "-" : ""}${counters[prefix]++}`;
  }
  static ɵfac = function _IdGenerator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __IdGenerator)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: __IdGenerator,
    factory: __IdGenerator.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_IdGenerator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_typeahead-chunk.mjs
var DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
var Typeahead = class {
  _letterKeyStream = new Subject();
  _items = [];
  _selectedItemIndex = -1;
  _pressedLetters = [];
  _skipPredicateFn;
  _selectedItem = new Subject();
  selectedItem = this._selectedItem;
  constructor(initialItems, config) {
    const typeAheadInterval = typeof config?.debounceInterval === "number" ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
    if (config?.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if ((typeof ngDevMode === "undefined" || ngDevMode) && initialItems.length && initialItems.some((item) => typeof item.getLabel !== "function")) {
      throw new Error("KeyManager items in typeahead mode must implement the `getLabel` method.");
    }
    this.setItems(initialItems);
    this._setupKeyHandler(typeAheadInterval);
  }
  destroy() {
    this._pressedLetters = [];
    this._letterKeyStream.complete();
    this._selectedItem.complete();
  }
  setCurrentSelectedItemIndex(index) {
    this._selectedItemIndex = index;
  }
  setItems(items) {
    this._items = items;
  }
  handleKey(event) {
    const keyCode = event.keyCode;
    if (event.key && event.key.length === 1) {
      this._letterKeyStream.next(event.key.toLocaleUpperCase());
    } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
      this._letterKeyStream.next(String.fromCharCode(keyCode));
    }
  }
  isTyping() {
    return this._pressedLetters.length > 0;
  }
  reset() {
    this._pressedLetters = [];
  }
  _setupKeyHandler(typeAheadInterval) {
    this._letterKeyStream.pipe(tap((letter) => this._pressedLetters.push(letter)), debounceTime(typeAheadInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe((inputString) => {
      for (let i = 1; i < this._items.length + 1; i++) {
        const index = (this._selectedItemIndex + i) % this._items.length;
        const item = this._items[index];
        if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
          this._selectedItem.next(item);
          break;
        }
      }
      this._pressedLetters = [];
    });
  }
};

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

// node_modules/@angular/cdk/fesm2022/_list-key-manager-chunk.mjs
var ListKeyManager = class {
  _items;
  _activeItemIndex = signal(-1, ...ngDevMode ? [{
    debugName: "_activeItemIndex"
  }] : []);
  _activeItem = signal(null, ...ngDevMode ? [{
    debugName: "_activeItem"
  }] : []);
  _wrap = false;
  _typeaheadSubscription = Subscription.EMPTY;
  _itemChangesSubscription;
  _vertical = true;
  _horizontal = null;
  _allowedModifierKeys = [];
  _homeAndEnd = false;
  _pageUpAndDown = {
    enabled: false,
    delta: 10
  };
  _effectRef;
  _typeahead;
  _skipPredicateFn = (item) => item.disabled;
  constructor(_items, injector) {
    this._items = _items;
    if (_items instanceof QueryList) {
      this._itemChangesSubscription = _items.changes.subscribe((newItems) => this._itemsChanged(newItems.toArray()));
    } else if (isSignal(_items)) {
      if (!injector && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw new Error("ListKeyManager constructed with a signal must receive an injector");
      }
      this._effectRef = effect(() => this._itemsChanged(_items()), __spreadProps(__spreadValues({}, ngDevMode ? {
        debugName: "_effectRef"
      } : {}), {
        injector
      }));
    }
  }
  tabOut = new Subject();
  change = new Subject();
  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  withTypeAhead(debounceInterval = 200) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const items2 = this._getItemsArray();
      if (items2.length > 0 && items2.some((item) => typeof item.getLabel !== "function")) {
        throw Error("ListKeyManager items in typeahead mode must implement the `getLabel` method.");
      }
    }
    this._typeaheadSubscription.unsubscribe();
    const items = this._getItemsArray();
    this._typeahead = new Typeahead(items, {
      debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
      skipPredicate: (item) => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
      this.setActiveItem(item);
    });
    return this;
  }
  cancelTypeahead() {
    this._typeahead?.reset();
    return this;
  }
  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }
  withPageUpDown(enabled = true, delta = 10) {
    this._pageUpAndDown = {
      enabled,
      delta
    };
    return this;
  }
  setActiveItem(item) {
    const previousActiveItem = this._activeItem();
    this.updateActiveItem(item);
    if (this._activeItem() !== previousActiveItem) {
      this.change.next(this._activeItemIndex());
    }
  }
  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ["altKey", "ctrlKey", "metaKey", "shiftKey"];
    const isModifierAllowed = modifiers.every((modifier) => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });
    switch (keyCode) {
      case TAB:
        this.tabOut.next();
        return;
      case DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }
      case UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }
      case LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }
      case HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }
      case END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }
      case PAGE_UP:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() - this._pageUpAndDown.delta;
          this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
          break;
        } else {
          return;
        }
      case PAGE_DOWN:
        if (this._pageUpAndDown.enabled && isModifierAllowed) {
          const targetIndex = this._activeItemIndex() + this._pageUpAndDown.delta;
          const itemsLength = this._getItemsArray().length;
          this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
          break;
        } else {
          return;
        }
      default:
        if (isModifierAllowed || hasModifierKey(event, "shiftKey")) {
          this._typeahead?.handleKey(event);
        }
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  get activeItemIndex() {
    return this._activeItemIndex();
  }
  get activeItem() {
    return this._activeItem();
  }
  isTyping() {
    return !!this._typeahead && this._typeahead.isTyping();
  }
  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  setLastItemActive() {
    this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
  }
  setNextItemActive() {
    this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  setPreviousItemActive() {
    this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }
  updateActiveItem(item) {
    const itemArray = this._getItemsArray();
    const index = typeof item === "number" ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index];
    this._activeItem.set(activeItem == null ? null : activeItem);
    this._activeItemIndex.set(index);
    this._typeahead?.setCurrentSelectedItemIndex(index);
  }
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._itemChangesSubscription?.unsubscribe();
    this._effectRef?.destroy();
    this._typeahead?.destroy();
    this.tabOut.complete();
    this.change.complete();
  }
  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();
    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex() + delta * i + items.length) % items.length;
      const item = items[index];
      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex() + delta, delta);
  }
  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();
    if (!items[index]) {
      return;
    }
    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;
      if (!items[index]) {
        return;
      }
    }
    this.setActiveItem(index);
  }
  _getItemsArray() {
    if (isSignal(this._items)) {
      return this._items();
    }
    return this._items instanceof QueryList ? this._items.toArray() : this._items;
  }
  _itemsChanged(newItems) {
    this._typeahead?.setItems(newItems);
    const activeItem = this._activeItem();
    if (activeItem) {
      const newIndex = newItems.indexOf(activeItem);
      if (newIndex > -1 && newIndex !== this._activeItemIndex()) {
        this._activeItemIndex.set(newIndex);
        this._typeahead?.setCurrentSelectedItemIndex(newIndex);
      }
    }
  }
};

// node_modules/@angular/cdk/fesm2022/_focus-key-manager-chunk.mjs
var FocusKeyManager = class extends ListKeyManager {
  _origin = "program";
  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }
  setActiveItem(item) {
    super.setActiveItem(item);
    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }
};

// node_modules/@angular/cdk/fesm2022/coercion-private.mjs
function coerceObservable(data) {
  if (!isObservable(data)) {
    return of(data);
  }
  return data;
}

// node_modules/@angular/cdk/fesm2022/_tree-key-manager-chunk.mjs
var TreeKeyManager = class {
  _activeItemIndex = -1;
  _activeItem = null;
  _shouldActivationFollowFocus = false;
  _horizontalOrientation = "ltr";
  _skipPredicateFn = (_item) => false;
  _trackByFn = (item) => item;
  _items = [];
  _typeahead;
  _typeaheadSubscription = Subscription.EMPTY;
  _hasInitialFocused = false;
  _initializeFocus() {
    if (this._hasInitialFocused || this._items.length === 0) {
      return;
    }
    let activeIndex = 0;
    for (let i = 0; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i]) && !this._isItemDisabled(this._items[i])) {
        activeIndex = i;
        break;
      }
    }
    const activeItem = this._items[activeIndex];
    if (activeItem.makeFocusable) {
      this._activeItem?.unfocus();
      this._activeItemIndex = activeIndex;
      this._activeItem = activeItem;
      this._typeahead?.setCurrentSelectedItemIndex(activeIndex);
      activeItem.makeFocusable();
    } else {
      this.focusItem(activeIndex);
    }
    this._hasInitialFocused = true;
  }
  constructor(items, config) {
    if (items instanceof QueryList) {
      this._items = items.toArray();
      items.changes.subscribe((newItems) => this._itemsChanged(newItems.toArray()));
    } else if (isObservable(items)) {
      items.subscribe((newItems) => this._itemsChanged(newItems));
    } else {
      this._items = items;
      this._initializeFocus();
    }
    if (typeof config.shouldActivationFollowFocus === "boolean") {
      this._shouldActivationFollowFocus = config.shouldActivationFollowFocus;
    }
    if (config.horizontalOrientation) {
      this._horizontalOrientation = config.horizontalOrientation;
    }
    if (config.skipPredicate) {
      this._skipPredicateFn = config.skipPredicate;
    }
    if (config.trackBy) {
      this._trackByFn = config.trackBy;
    }
    if (typeof config.typeAheadDebounceInterval !== "undefined") {
      this._setTypeAhead(config.typeAheadDebounceInterval);
    }
  }
  change = new Subject();
  destroy() {
    this._typeaheadSubscription.unsubscribe();
    this._typeahead?.destroy();
    this.change.complete();
  }
  onKeydown(event) {
    const key = event.key;
    switch (key) {
      case "Tab":
        return;
      case "ArrowDown":
        this._focusNextItem();
        break;
      case "ArrowUp":
        this._focusPreviousItem();
        break;
      case "ArrowRight":
        this._horizontalOrientation === "rtl" ? this._collapseCurrentItem() : this._expandCurrentItem();
        break;
      case "ArrowLeft":
        this._horizontalOrientation === "rtl" ? this._expandCurrentItem() : this._collapseCurrentItem();
        break;
      case "Home":
        this._focusFirstItem();
        break;
      case "End":
        this._focusLastItem();
        break;
      case "Enter":
      case " ":
        this._activateCurrentItem();
        break;
      default:
        if (event.key === "*") {
          this._expandAllItemsAtCurrentItemLevel();
          break;
        }
        this._typeahead?.handleKey(event);
        return;
    }
    this._typeahead?.reset();
    event.preventDefault();
  }
  getActiveItemIndex() {
    return this._activeItemIndex;
  }
  getActiveItem() {
    return this._activeItem;
  }
  _itemsChanged(newItems) {
    if (this._hasInitialFocused && this._activeItem && !newItems.includes(this._activeItem)) {
      this._activeItem = null;
      this._hasInitialFocused = false;
    }
    this._items = newItems;
    this._typeahead?.setItems(this._items);
    this._updateActiveItemIndex(this._items);
    this._initializeFocus();
  }
  _focusFirstItem() {
    this.focusItem(this._findNextAvailableItemIndex(-1));
  }
  _focusLastItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._items.length));
  }
  _focusNextItem() {
    this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex));
  }
  _focusPreviousItem() {
    this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex));
  }
  focusItem(itemOrIndex, options = {}) {
    options.emitChangeEvent ??= true;
    let index = typeof itemOrIndex === "number" ? itemOrIndex : this._items.findIndex((item) => this._trackByFn(item) === this._trackByFn(itemOrIndex));
    if (index < 0 || index >= this._items.length) {
      return;
    }
    const activeItem = this._items[index];
    if (this._activeItem !== null && this._trackByFn(activeItem) === this._trackByFn(this._activeItem)) {
      return;
    }
    const previousActiveItem = this._activeItem;
    this._activeItem = activeItem ?? null;
    this._activeItemIndex = index;
    this._typeahead?.setCurrentSelectedItemIndex(index);
    this._activeItem?.focus();
    previousActiveItem?.unfocus();
    if (options.emitChangeEvent) {
      this.change.next(this._activeItem);
    }
    if (this._shouldActivationFollowFocus) {
      this._activateCurrentItem();
    }
  }
  _updateActiveItemIndex(newItems) {
    const activeItem = this._activeItem;
    if (!activeItem) {
      return;
    }
    const newIndex = newItems.findIndex((item) => this._trackByFn(item) === this._trackByFn(activeItem));
    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
      this._activeItemIndex = newIndex;
      this._typeahead?.setCurrentSelectedItemIndex(newIndex);
    }
  }
  _setTypeAhead(debounceInterval) {
    this._typeahead = new Typeahead(this._items, {
      debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
      skipPredicate: (item) => this._skipPredicateFn(item)
    });
    this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
      this.focusItem(item);
    });
  }
  _findNextAvailableItemIndex(startingIndex) {
    for (let i = startingIndex + 1; i < this._items.length; i++) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  _findPreviousAvailableItemIndex(startingIndex) {
    for (let i = startingIndex - 1; i >= 0; i--) {
      if (!this._skipPredicateFn(this._items[i])) {
        return i;
      }
    }
    return startingIndex;
  }
  _collapseCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (this._isCurrentItemExpanded()) {
      this._activeItem.collapse();
    } else {
      const parent = this._activeItem.getParent();
      if (!parent || this._skipPredicateFn(parent)) {
        return;
      }
      this.focusItem(parent);
    }
  }
  _expandCurrentItem() {
    if (!this._activeItem) {
      return;
    }
    if (!this._isCurrentItemExpanded()) {
      this._activeItem.expand();
    } else {
      coerceObservable(this._activeItem.getChildren()).pipe(take(1)).subscribe((children) => {
        const firstChild = children.find((child) => !this._skipPredicateFn(child));
        if (!firstChild) {
          return;
        }
        this.focusItem(firstChild);
      });
    }
  }
  _isCurrentItemExpanded() {
    if (!this._activeItem) {
      return false;
    }
    return typeof this._activeItem.isExpanded === "boolean" ? this._activeItem.isExpanded : this._activeItem.isExpanded();
  }
  _isItemDisabled(item) {
    return typeof item.isDisabled === "boolean" ? item.isDisabled : item.isDisabled?.();
  }
  _expandAllItemsAtCurrentItemLevel() {
    if (!this._activeItem) {
      return;
    }
    const parent = this._activeItem.getParent();
    let itemsToExpand;
    if (!parent) {
      itemsToExpand = of(this._items.filter((item) => item.getParent() === null));
    } else {
      itemsToExpand = coerceObservable(parent.getChildren());
    }
    itemsToExpand.pipe(take(1)).subscribe((items) => {
      for (const item of items) {
        item.expand();
      }
    });
  }
  _activateCurrentItem() {
    this._activeItem?.activate();
  }
};
var TREE_KEY_MANAGER = new InjectionToken("tree-key-manager", {
  providedIn: "root",
  factory: () => (items, options) => new TreeKeyManager(items, options)
});

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var AriaDescriber = class _AriaDescriber {
  _platform = inject(Platform);
  _document = inject(DOCUMENT);
  _messageRegistry = /* @__PURE__ */ new Map();
  _messagesContainer = null;
  _id = `${nextId++}`;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
    this._id = inject(APP_ID) + "-" + nextId++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (!this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
  static ɵfac = function AriaDescriber_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AriaDescriber)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AriaDescriber,
    factory: _AriaDescriber.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var ConfigurableFocusTrap = class extends FocusTrap {
  _focusTrapManager;
  _inertStrategy;
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
    super(_element, _checker, _ngZone, _document, config.defer, injector);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
var EventListenerFocusTrapInertStrategy = class {
  _listener = null;
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e) => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var FocusTrapManager = class _FocusTrapManager {
  _focusTrapStack = [];
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
  static ɵfac = function FocusTrapManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapManager)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FocusTrapManager,
    factory: _FocusTrapManager.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  _checker = inject(InteractivityChecker);
  _ngZone = inject(NgZone);
  _focusTrapManager = inject(FocusTrapManager);
  _document = inject(DOCUMENT);
  _inertStrategy;
  _injector = inject(Injector);
  constructor() {
    const inertStrategy = inject(FOCUS_TRAP_INERT_STRATEGY, {
      optional: true
    });
    this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === "boolean") {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
  }
  static ɵfac = function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfigurableFocusTrapFactory)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ConfigurableFocusTrapFactory,
    factory: _ConfigurableFocusTrapFactory.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// node_modules/@angular/cdk/fesm2022/layout.mjs
var LayoutModule = class _LayoutModule {
  static ɵfac = function LayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _LayoutModule
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/_animation-chunk.mjs
var MATERIAL_ANIMATIONS = new InjectionToken("MATERIAL_ANIMATIONS");
var reducedMotion = null;
function _getAnimationsState() {
  if (inject(MATERIAL_ANIMATIONS, {
    optional: true
  })?.animationsDisabled || inject(ANIMATION_MODULE_TYPE, {
    optional: true
  }) === "NoopAnimations") {
    return "di-disabled";
  }
  reducedMotion ??= inject(MediaMatcher).matchMedia("(prefers-reduced-motion)").matches;
  return reducedMotion ? "reduced-motion" : "enabled";
}
function _animationsDisabled() {
  return _getAnimationsState() !== "enabled";
}

// node_modules/@angular/material/fesm2022/_ripple-chunk.mjs
var RippleState;
(function(RippleState2) {
  RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
  RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
  RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
var RippleRef = class {
  _renderer;
  element;
  config;
  _animationForciblyDisabledThroughCss;
  state = RippleState.HIDDEN;
  constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
  }
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
};
var passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var RippleEventManager = class {
  _events = /* @__PURE__ */ new Map();
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
      }
    } else {
      this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
  _delegateEventHandler = (event) => {
    const target = _getEventTarget(event);
    if (target) {
      this._events.get(event.type)?.forEach((handlers, element) => {
        if (element === target || element.contains(target)) {
          handlers.forEach((handler) => handler.handleEvent(event));
        }
      });
    }
  };
};
var defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
var ignoreMouseEventsTimeout = 800;
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var pointerDownEvents = ["mousedown", "touchstart"];
var pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
var _MatRippleStylesLoader = class __MatRippleStylesLoader {
  static ɵfac = function _MatRippleStylesLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatRippleStylesLoader)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: __MatRippleStylesLoader,
    selectors: [["ng-component"]],
    hostAttrs: ["mat-ripple-style-loader", ""],
    decls: 0,
    vars: 0,
    template: function _MatRippleStylesLoader_Template(rf, ctx) {
    },
    styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatRippleStylesLoader, [{
    type: Component,
    args: [{
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "mat-ripple-style-loader": ""
      },
      styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"]
    }]
  }], null, null);
})();
var RippleRenderer = class _RippleRenderer {
  _target;
  _ngZone;
  _platform;
  _containerElement;
  _triggerElement = null;
  _isPointerDown = false;
  _activeRipples = /* @__PURE__ */ new Map();
  _mostRecentTransientRipple = null;
  _lastTouchStartEvent;
  _pointerUpEventsRegistered = false;
  _containerRect = null;
  static _eventManager = new RippleEventManager();
  constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    if (_platform.isBrowser) {
      this._containerElement = coerceElement(elementOrElementRef);
    }
    if (injector) {
      injector.get(_CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
    }
  }
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement("div");
    ripple.classList.add("mat-ripple-element");
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || containerRect.width === 0 && containerRect.height === 0;
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    ripple.style.transform = "scale3d(1, 1, 1)";
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => {
          if (eventListeners) {
            eventListeners.fallbackTimer = null;
          }
          clearTimeout(fallbackTimer);
          this._finishRippleTransition(rippleRef);
        };
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
        ripple.addEventListener("transitionend", onTransitionEnd);
        ripple.addEventListener("transitioncancel", onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel,
          fallbackTimer
        };
      });
    }
    this._activeRipples.set(rippleRef, eventListeners);
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  fadeOutRipple(rippleRef) {
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = "0";
    rippleRef.state = RippleState.FADING_OUT;
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  fadeOutAll() {
    this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
  }
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach((ripple) => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  setupTriggerEvents(elementOrElementRef) {
    const element = coerceElement(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    pointerDownEvents.forEach((type) => {
      _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  handleEvent(event) {
    if (event.type === "mousedown") {
      this._onMousedown(event);
    } else if (event.type === "touchstart") {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach((type) => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
      if (eventListeners.fallbackTimer !== null) {
        clearTimeout(eventListeners.fallbackTimer);
      }
    }
    rippleRef.element.remove();
  }
  _onMousedown(event) {
    const isFakeMousedown = isFakeMousedownFromScreenReader(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event.changedTouches;
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._getActiveRipples().forEach((ripple) => {
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  _removeTriggerEvents() {
    const trigger = this._triggerElement;
    if (trigger) {
      pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach((type) => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
};
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
var MatRipple = class _MatRipple {
  _elementRef = inject(ElementRef);
  _animationsDisabled = _animationsDisabled();
  color;
  unbounded = false;
  centered = false;
  radius = 0;
  animation;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }
  _disabled = false;
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger) {
    this._trigger = trigger;
    this._setupTriggerEventsIfEnabled();
  }
  _trigger;
  _rippleRenderer;
  _globalOptions;
  _isInitialized = false;
  constructor() {
    const ngZone = inject(NgZone);
    const platform = inject(Platform);
    const globalOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    const injector = inject(Injector);
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, this._elementRef, platform, injector);
  }
  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationsDisabled ? {
        enterDuration: 0,
        exitDuration: 0
      } : {}), this.animation),
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  launch(configOrX, y = 0, config) {
    if (typeof configOrX === "number") {
      return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
    }
  }
  static ɵfac = function MatRipple_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRipple)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatRipple,
    selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
    hostAttrs: [1, "mat-ripple"],
    hostVars: 2,
    hostBindings: function MatRipple_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("mat-ripple-unbounded", ctx.unbounded);
      }
    },
    inputs: {
      color: [0, "matRippleColor", "color"],
      unbounded: [0, "matRippleUnbounded", "unbounded"],
      centered: [0, "matRippleCentered", "centered"],
      radius: [0, "matRippleRadius", "radius"],
      animation: [0, "matRippleAnimation", "animation"],
      disabled: [0, "matRippleDisabled", "disabled"],
      trigger: [0, "matRippleTrigger", "trigger"]
    },
    exportAs: ["matRipple"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRipple, [{
    type: Directive,
    args: [{
      selector: "[mat-ripple], [matRipple]",
      exportAs: "matRipple",
      host: {
        "class": "mat-ripple",
        "[class.mat-ripple-unbounded]": "unbounded"
      }
    }]
  }], () => [], {
    color: [{
      type: Input,
      args: ["matRippleColor"]
    }],
    unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }],
    centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }],
    radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }],
    animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }],
    disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }],
    trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/_structural-styles-chunk.mjs
var _StructuralStylesLoader = class __StructuralStylesLoader {
  static ɵfac = function _StructuralStylesLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __StructuralStylesLoader)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: __StructuralStylesLoader,
    selectors: [["structural-styles"]],
    decls: 0,
    vars: 0,
    template: function _StructuralStylesLoader_Template(rf, ctx) {
    },
    styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus-visible::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_StructuralStylesLoader, [{
    type: Component,
    args: [{
      selector: "structural-styles",
      encapsulation: ViewEncapsulation.None,
      template: "",
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus-visible::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n']
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/divider.mjs
var MatDivider = class _MatDivider {
  get vertical() {
    return this._vertical;
  }
  set vertical(value) {
    this._vertical = coerceBooleanProperty(value);
  }
  _vertical = false;
  get inset() {
    return this._inset;
  }
  set inset(value) {
    this._inset = coerceBooleanProperty(value);
  }
  _inset = false;
  static ɵfac = function MatDivider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDivider)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatDivider,
    selectors: [["mat-divider"]],
    hostAttrs: ["role", "separator", 1, "mat-divider"],
    hostVars: 7,
    hostBindings: function MatDivider_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
        ɵɵclassProp("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
      }
    },
    inputs: {
      vertical: "vertical",
      inset: "inset"
    },
    decls: 0,
    vars: 0,
    template: function MatDivider_Template(rf, ctx) {
    },
    styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-sys-outline-variant));border-top-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-sys-outline-variant));border-right-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDivider, [{
    type: Component,
    args: [{
      selector: "mat-divider",
      host: {
        "role": "separator",
        "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
        "[class.mat-divider-vertical]": "vertical",
        "[class.mat-divider-horizontal]": "!vertical",
        "[class.mat-divider-inset]": "inset",
        "class": "mat-divider"
      },
      template: "",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-sys-outline-variant));border-top-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-sys-outline-variant));border-right-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"]
    }]
  }], null, {
    vertical: [{
      type: Input
    }],
    inset: [{
      type: Input
    }]
  });
})();
var MatDividerModule = class _MatDividerModule {
  static ɵfac = function MatDividerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatDividerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatDividerModule,
    imports: [MatDivider],
    exports: [MatDivider, BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDividerModule, [{
    type: NgModule,
    args: [{
      imports: [MatDivider],
      exports: [MatDivider, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_unique-selection-dispatcher-chunk.mjs
var UniqueSelectionDispatcher = class _UniqueSelectionDispatcher {
  _listeners = [];
  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  listen(listener) {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((registered) => {
        return listener !== registered;
      });
    };
  }
  ngOnDestroy() {
    this._listeners = [];
  }
  static ɵfac = function UniqueSelectionDispatcher_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UniqueSelectionDispatcher)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _UniqueSelectionDispatcher,
    factory: _UniqueSelectionDispatcher.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UniqueSelectionDispatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/_recycle-view-repeater-strategy-chunk.mjs
var _ViewRepeaterOperation;
(function(_ViewRepeaterOperation2) {
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
  _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
})(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));

// node_modules/@angular/cdk/fesm2022/_selection-model-chunk.mjs
var SelectionModel = class {
  _multiple;
  _emitChanges;
  compareWith;
  _selection = /* @__PURE__ */ new Set();
  _deselectedToEmit = [];
  _selectedToEmit = [];
  _selected = null;
  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }
    return this._selected;
  }
  changed = new Subject();
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    this.compareWith = compareWith;
    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach((value) => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      }
      this._selectedToEmit.length = 0;
    }
  }
  select(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._markSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  deselect(...values) {
    this._verifyValueAssignment(values);
    values.forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  setSelection(...values) {
    this._verifyValueAssignment(values);
    const oldValues = this.selected;
    const newSelectedSet = new Set(values.map((value) => this._getConcreteValue(value)));
    values.forEach((value) => this._markSelected(value));
    oldValues.filter((value) => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach((value) => this._unmarkSelected(value));
    const changed = this._hasQueuedChanges();
    this._emitChangeEvent();
    return changed;
  }
  toggle(value) {
    return this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  clear(flushEvent = true) {
    this._unmarkAll();
    const changed = this._hasQueuedChanges();
    if (flushEvent) {
      this._emitChangeEvent();
    }
    return changed;
  }
  isSelected(value) {
    return this._selection.has(this._getConcreteValue(value));
  }
  isEmpty() {
    return this._selection.size === 0;
  }
  hasValue() {
    return !this.isEmpty();
  }
  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  isMultipleSelection() {
    return this._multiple;
  }
  _emitChangeEvent() {
    this._selected = null;
    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  _markSelected(value) {
    value = this._getConcreteValue(value);
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }
      if (!this.isSelected(value)) {
        this._selection.add(value);
      }
      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  _unmarkSelected(value) {
    value = this._getConcreteValue(value);
    if (this.isSelected(value)) {
      this._selection.delete(value);
      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach((value) => this._unmarkSelected(value));
    }
  }
  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }
  _hasQueuedChanges() {
    return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
  }
  _getConcreteValue(inputValue, selection) {
    if (!this.compareWith) {
      return inputValue;
    } else {
      selection = selection ?? this._selection;
      for (let selectedValue of selection) {
        if (this.compareWith(inputValue, selectedValue)) {
          return selectedValue;
        }
      }
      return inputValue;
    }
  }
};
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}

// node_modules/@angular/material/fesm2022/_pseudo-checkbox-chunk.mjs
var MatPseudoCheckbox = class _MatPseudoCheckbox {
  _animationsDisabled = _animationsDisabled();
  state = "unchecked";
  disabled = false;
  appearance = "full";
  constructor() {
  }
  static ɵfac = function MatPseudoCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPseudoCheckbox)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatPseudoCheckbox,
    selectors: [["mat-pseudo-checkbox"]],
    hostAttrs: [1, "mat-pseudo-checkbox"],
    hostVars: 12,
    hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationsDisabled);
      }
    },
    inputs: {
      state: "state",
      disabled: "disabled",
      appearance: "appearance"
    },
    decls: 0,
    vars: 0,
    template: function MatPseudoCheckbox_Template(rf, ctx) {
    },
    styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckbox, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "mat-pseudo-checkbox",
      template: "",
      host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": "_animationsDisabled"
      },
      styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n']
    }]
  }], () => [], {
    state: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  });
})();

// node_modules/@angular/material/fesm2022/_pseudo-checkbox-module-chunk.mjs
var MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
  static ɵfac = function MatPseudoCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPseudoCheckboxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatPseudoCheckboxModule,
    imports: [MatPseudoCheckbox],
    exports: [MatPseudoCheckbox, BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatPseudoCheckbox],
      exports: [MatPseudoCheckbox, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/_ripple-module-chunk.mjs
var MatRippleModule = class _MatRippleModule {
  static ɵfac = function MatRippleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRippleModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatRippleModule,
    imports: [MatRipple],
    exports: [MatRipple, BidiModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleModule, [{
    type: NgModule,
    args: [{
      imports: [MatRipple],
      exports: [MatRipple, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/list.mjs
var _c0 = ["*"];
var _c1 = '.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus-visible>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n';
var _c2 = ["unscopedContent"];
var _c3 = ["text"];
var _c4 = [[["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]], [["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["", "matListItemMeta", ""]], [["mat-divider"]]];
var _c5 = ["[matListItemAvatar],[matListItemIcon]", "[matListItemTitle]", "[matListItemLine]", "*", "[matListItemMeta]", "mat-divider"];
var _c6 = [[["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["mat-divider"]], [["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]]];
var _c7 = ["[matListItemTitle]", "[matListItemLine]", "*", "mat-divider", "[matListItemAvatar],[matListItemIcon]"];
function MatListOption_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 4);
  }
}
function MatListOption_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelement(1, "input", 12);
    ɵɵelementStart(2, "div", 13);
    ɵɵnamespaceSVG();
    ɵɵelementStart(3, "svg", 14);
    ɵɵelement(4, "path", 15);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelement(5, "div", 16);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("mdc-checkbox--disabled", ctx_r1.disabled);
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r1.selected)("disabled", ctx_r1.disabled);
  }
}
function MatListOption_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵelement(1, "input", 18);
    ɵɵelementStart(2, "div", 19);
    ɵɵelement(3, "div", 20)(4, "div", 21);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("mdc-radio--disabled", ctx_r1.disabled);
    ɵɵadvance();
    ɵɵproperty("checked", ctx_r1.selected)("disabled", ctx_r1.disabled);
  }
}
function MatListOption_Conditional_6_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, MatListOption_Conditional_6_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const checkbox_r3 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", checkbox_r3);
  }
}
function MatListOption_Conditional_7_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, MatListOption_Conditional_7_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const radio_r4 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", radio_r4);
  }
}
function MatListOption_Conditional_8_ng_template_0_Template(rf, ctx) {
}
function MatListOption_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MatListOption_Conditional_8_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const icons_r5 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", icons_r5);
  }
}
function MatListOption_Conditional_15_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, MatListOption_Conditional_15_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const checkbox_r3 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", checkbox_r3);
  }
}
function MatListOption_Conditional_16_ng_template_1_Template(rf, ctx) {
}
function MatListOption_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, MatListOption_Conditional_16_ng_template_1_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const radio_r4 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", radio_r4);
  }
}
function MatListOption_Conditional_17_ng_template_0_Template(rf, ctx) {
}
function MatListOption_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MatListOption_Conditional_17_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const icons_r5 = ɵɵreference(1);
    ɵɵproperty("ngTemplateOutlet", icons_r5);
  }
}
var LIST_OPTION = new InjectionToken("ListOption");
var MatListItemTitle = class _MatListItemTitle {
  _elementRef = inject(ElementRef);
  constructor() {
  }
  static ɵfac = function MatListItemTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemTitle)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatListItemTitle,
    selectors: [["", "matListItemTitle", ""]],
    hostAttrs: [1, "mat-mdc-list-item-title", "mdc-list-item__primary-text"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemTitle, [{
    type: Directive,
    args: [{
      selector: "[matListItemTitle]",
      host: {
        "class": "mat-mdc-list-item-title mdc-list-item__primary-text"
      }
    }]
  }], () => [], null);
})();
var MatListItemLine = class _MatListItemLine {
  _elementRef = inject(ElementRef);
  constructor() {
  }
  static ɵfac = function MatListItemLine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemLine)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatListItemLine,
    selectors: [["", "matListItemLine", ""]],
    hostAttrs: [1, "mat-mdc-list-item-line", "mdc-list-item__secondary-text"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemLine, [{
    type: Directive,
    args: [{
      selector: "[matListItemLine]",
      host: {
        "class": "mat-mdc-list-item-line mdc-list-item__secondary-text"
      }
    }]
  }], () => [], null);
})();
var MatListItemMeta = class _MatListItemMeta {
  static ɵfac = function MatListItemMeta_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemMeta)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatListItemMeta,
    selectors: [["", "matListItemMeta", ""]],
    hostAttrs: [1, "mat-mdc-list-item-meta", "mdc-list-item__end"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemMeta, [{
    type: Directive,
    args: [{
      selector: "[matListItemMeta]",
      host: {
        "class": "mat-mdc-list-item-meta mdc-list-item__end"
      }
    }]
  }], null, null);
})();
var _MatListItemGraphicBase = class __MatListItemGraphicBase {
  _listOption = inject(LIST_OPTION, {
    optional: true
  });
  constructor() {
  }
  _isAlignedAtStart() {
    return !this._listOption || this._listOption?._getTogglePosition() === "after";
  }
  static ɵfac = function _MatListItemGraphicBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || __MatListItemGraphicBase)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: __MatListItemGraphicBase,
    hostVars: 4,
    hostBindings: function _MatListItemGraphicBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("mdc-list-item__start", ctx._isAlignedAtStart())("mdc-list-item__end", !ctx._isAlignedAtStart());
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatListItemGraphicBase, [{
    type: Directive,
    args: [{
      host: {
        "[class.mdc-list-item__start]": "_isAlignedAtStart()",
        "[class.mdc-list-item__end]": "!_isAlignedAtStart()"
      }
    }]
  }], () => [], null);
})();
var MatListItemAvatar = class _MatListItemAvatar extends _MatListItemGraphicBase {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMatListItemAvatar_BaseFactory;
    return function MatListItemAvatar_Factory(__ngFactoryType__) {
      return (ɵMatListItemAvatar_BaseFactory || (ɵMatListItemAvatar_BaseFactory = ɵɵgetInheritedFactory(_MatListItemAvatar)))(__ngFactoryType__ || _MatListItemAvatar);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _MatListItemAvatar,
    selectors: [["", "matListItemAvatar", ""]],
    hostAttrs: [1, "mat-mdc-list-item-avatar"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemAvatar, [{
    type: Directive,
    args: [{
      selector: "[matListItemAvatar]",
      host: {
        "class": "mat-mdc-list-item-avatar"
      }
    }]
  }], null, null);
})();
var MatListItemIcon = class _MatListItemIcon extends _MatListItemGraphicBase {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMatListItemIcon_BaseFactory;
    return function MatListItemIcon_Factory(__ngFactoryType__) {
      return (ɵMatListItemIcon_BaseFactory || (ɵMatListItemIcon_BaseFactory = ɵɵgetInheritedFactory(_MatListItemIcon)))(__ngFactoryType__ || _MatListItemIcon);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _MatListItemIcon,
    selectors: [["", "matListItemIcon", ""]],
    hostAttrs: [1, "mat-mdc-list-item-icon"],
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemIcon, [{
    type: Directive,
    args: [{
      selector: "[matListItemIcon]",
      host: {
        "class": "mat-mdc-list-item-icon"
      }
    }]
  }], null, null);
})();
var MAT_LIST_CONFIG = new InjectionToken("MAT_LIST_CONFIG");
var MatListBase = class _MatListBase {
  _isNonInteractive = true;
  get disableRipple() {
    return this._disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = coerceBooleanProperty(value);
  }
  _disableRipple = false;
  get disabled() {
    return this._disabled();
  }
  set disabled(value) {
    this._disabled.set(coerceBooleanProperty(value));
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  _defaultOptions = inject(MAT_LIST_CONFIG, {
    optional: true
  });
  static ɵfac = function MatListBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListBase)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatListBase,
    hostVars: 1,
    hostBindings: function MatListBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-disabled", ctx.disabled);
      }
    },
    inputs: {
      disableRipple: "disableRipple",
      disabled: "disabled"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListBase, [{
    type: Directive,
    args: [{
      host: {
        "[attr.aria-disabled]": "disabled"
      }
    }]
  }], null, {
    disableRipple: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var MatListItemBase = class _MatListItemBase {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _listBase = inject(MatListBase, {
    optional: true
  });
  _platform = inject(Platform);
  _hostElement;
  _isButtonElement;
  _noopAnimations = _animationsDisabled();
  _avatars;
  _icons;
  set lines(lines) {
    this._explicitLines = coerceNumberProperty(lines, null);
    this._updateItemLines(false);
  }
  _explicitLines = null;
  get disableRipple() {
    return this.disabled || this._disableRipple || this._noopAnimations || !!this._listBase?.disableRipple;
  }
  set disableRipple(value) {
    this._disableRipple = coerceBooleanProperty(value);
  }
  _disableRipple = false;
  get disabled() {
    return this._disabled() || !!this._listBase?.disabled;
  }
  set disabled(value) {
    this._disabled.set(coerceBooleanProperty(value));
  }
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  _subscriptions = new Subscription();
  _rippleRenderer = null;
  _hasUnscopedTextContent = false;
  rippleConfig;
  get rippleDisabled() {
    return this.disableRipple || !!this.rippleConfig.disabled;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    this.rippleConfig = globalRippleOptions || {};
    this._hostElement = this._elementRef.nativeElement;
    this._isButtonElement = this._hostElement.nodeName.toLowerCase() === "button";
    if (this._listBase && !this._listBase._isNonInteractive) {
      this._initInteractiveListItem();
    }
    if (this._isButtonElement && !this._hostElement.hasAttribute("type")) {
      this._hostElement.setAttribute("type", "button");
    }
  }
  ngAfterViewInit() {
    this._monitorProjectedLinesAndTitle();
    this._updateItemLines(true);
  }
  ngOnDestroy() {
    this._subscriptions.unsubscribe();
    if (this._rippleRenderer !== null) {
      this._rippleRenderer._removeTriggerEvents();
    }
  }
  _hasIconOrAvatar() {
    return !!(this._avatars.length || this._icons.length);
  }
  _initInteractiveListItem() {
    this._hostElement.classList.add("mat-mdc-list-item-interactive");
    this._rippleRenderer = new RippleRenderer(this, this._ngZone, this._hostElement, this._platform, inject(Injector));
    this._rippleRenderer.setupTriggerEvents(this._hostElement);
  }
  _monitorProjectedLinesAndTitle() {
    this._ngZone.runOutsideAngular(() => {
      this._subscriptions.add(merge(this._lines.changes, this._titles.changes).subscribe(() => this._updateItemLines(false)));
    });
  }
  _updateItemLines(recheckUnscopedContent) {
    if (!this._lines || !this._titles || !this._unscopedContent) {
      return;
    }
    if (recheckUnscopedContent) {
      this._checkDomForUnscopedTextContent();
    }
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      sanityCheckListItemContent(this);
    }
    const numberOfLines = this._explicitLines ?? this._inferLinesFromContent();
    const unscopedContentEl = this._unscopedContent.nativeElement;
    this._hostElement.classList.toggle("mat-mdc-list-item-single-line", numberOfLines <= 1);
    this._hostElement.classList.toggle("mdc-list-item--with-one-line", numberOfLines <= 1);
    this._hostElement.classList.toggle("mdc-list-item--with-two-lines", numberOfLines === 2);
    this._hostElement.classList.toggle("mdc-list-item--with-three-lines", numberOfLines === 3);
    if (this._hasUnscopedTextContent) {
      const treatAsTitle = this._titles.length === 0 && numberOfLines === 1;
      unscopedContentEl.classList.toggle("mdc-list-item__primary-text", treatAsTitle);
      unscopedContentEl.classList.toggle("mdc-list-item__secondary-text", !treatAsTitle);
    } else {
      unscopedContentEl.classList.remove("mdc-list-item__primary-text");
      unscopedContentEl.classList.remove("mdc-list-item__secondary-text");
    }
  }
  _inferLinesFromContent() {
    let numOfLines = this._titles.length + this._lines.length;
    if (this._hasUnscopedTextContent) {
      numOfLines += 1;
    }
    return numOfLines;
  }
  _checkDomForUnscopedTextContent() {
    this._hasUnscopedTextContent = Array.from(this._unscopedContent.nativeElement.childNodes).filter((node) => node.nodeType !== node.COMMENT_NODE).some((node) => !!(node.textContent && node.textContent.trim()));
  }
  static ɵfac = function MatListItemBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListItemBase)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatListItemBase,
    contentQueries: function MatListItemBase_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MatListItemAvatar, 4)(dirIndex, MatListItemIcon, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._avatars = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._icons = _t);
      }
    },
    hostVars: 4,
    hostBindings: function MatListItemBase_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-disabled", ctx.disabled)("disabled", ctx._isButtonElement && ctx.disabled || null);
        ɵɵclassProp("mdc-list-item--disabled", ctx.disabled);
      }
    },
    inputs: {
      lines: "lines",
      disableRipple: "disableRipple",
      disabled: "disabled"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItemBase, [{
    type: Directive,
    args: [{
      host: {
        "[class.mdc-list-item--disabled]": "disabled",
        "[attr.aria-disabled]": "disabled",
        "[attr.disabled]": "(_isButtonElement && disabled) || null"
      }
    }]
  }], () => [], {
    _avatars: [{
      type: ContentChildren,
      args: [MatListItemAvatar, {
        descendants: false
      }]
    }],
    _icons: [{
      type: ContentChildren,
      args: [MatListItemIcon, {
        descendants: false
      }]
    }],
    lines: [{
      type: Input
    }],
    disableRipple: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
function sanityCheckListItemContent(item) {
  const numTitles = item._titles.length;
  const numLines = item._lines.length;
  if (numTitles > 1) {
    console.warn("A list item cannot have multiple titles.");
  }
  if (numTitles === 0 && numLines > 0) {
    console.warn("A list item line can only be used if there is a list item title.");
  }
  if (numTitles === 0 && item._hasUnscopedTextContent && item._explicitLines !== null && item._explicitLines > 1) {
    console.warn("A list item cannot have wrapping content without a title.");
  }
  if (numLines > 2 || numLines === 2 && item._hasUnscopedTextContent) {
    console.warn("A list item can have at maximum three lines.");
  }
}
var MatActionList = class _MatActionList extends MatListBase {
  _isNonInteractive = false;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMatActionList_BaseFactory;
    return function MatActionList_Factory(__ngFactoryType__) {
      return (ɵMatActionList_BaseFactory || (ɵMatActionList_BaseFactory = ɵɵgetInheritedFactory(_MatActionList)))(__ngFactoryType__ || _MatActionList);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _MatActionList,
    selectors: [["mat-action-list"]],
    hostAttrs: ["role", "group", 1, "mat-mdc-action-list", "mat-mdc-list-base", "mdc-list"],
    exportAs: ["matActionList"],
    features: [ɵɵProvidersFeature([{
      provide: MatListBase,
      useExisting: _MatActionList
    }]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatActionList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus-visible>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatActionList, [{
    type: Component,
    args: [{
      selector: "mat-action-list",
      exportAs: "matActionList",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-mdc-action-list mat-mdc-list-base mdc-list",
        "role": "group"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MatListBase,
        useExisting: MatActionList
      }],
      styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus-visible>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n']
    }]
  }], null, null);
})();
var MAT_LIST = new InjectionToken("MatList");
var MatList = class _MatList extends MatListBase {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMatList_BaseFactory;
    return function MatList_Factory(__ngFactoryType__) {
      return (ɵMatList_BaseFactory || (ɵMatList_BaseFactory = ɵɵgetInheritedFactory(_MatList)))(__ngFactoryType__ || _MatList);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _MatList,
    selectors: [["mat-list"]],
    hostAttrs: [1, "mat-mdc-list", "mat-mdc-list-base", "mdc-list"],
    exportAs: ["matList"],
    features: [ɵɵProvidersFeature([{
      provide: MatListBase,
      useExisting: _MatList
    }]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: [_c1],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatList, [{
    type: Component,
    args: [{
      selector: "mat-list",
      exportAs: "matList",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-mdc-list mat-mdc-list-base mdc-list"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MatListBase,
        useExisting: MatList
      }],
      styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus-visible>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n']
    }]
  }], null, null);
})();
var MatListItem = class _MatListItem extends MatListItemBase {
  _lines;
  _titles;
  _meta;
  _unscopedContent;
  _itemText;
  get activated() {
    return this._activated;
  }
  set activated(activated) {
    this._activated = coerceBooleanProperty(activated);
  }
  _activated = false;
  _getAriaCurrent() {
    return this._hostElement.nodeName === "A" && this._activated ? "page" : null;
  }
  _hasBothLeadingAndTrailing() {
    return this._meta.length !== 0 && (this._avatars.length !== 0 || this._icons.length !== 0);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMatListItem_BaseFactory;
    return function MatListItem_Factory(__ngFactoryType__) {
      return (ɵMatListItem_BaseFactory || (ɵMatListItem_BaseFactory = ɵɵgetInheritedFactory(_MatListItem)))(__ngFactoryType__ || _MatListItem);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _MatListItem,
    selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]],
    contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MatListItemLine, 5)(dirIndex, MatListItemTitle, 5)(dirIndex, MatListItemMeta, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._lines = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._titles = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._meta = _t);
      }
    },
    viewQuery: function MatListItem_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c2, 5)(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._unscopedContent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._itemText = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-list-item", "mdc-list-item"],
    hostVars: 13,
    hostBindings: function MatListItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("aria-current", ctx._getAriaCurrent());
        ɵɵclassProp("mdc-list-item--activated", ctx.activated)("mdc-list-item--with-leading-avatar", ctx._avatars.length !== 0)("mdc-list-item--with-leading-icon", ctx._icons.length !== 0)("mdc-list-item--with-trailing-meta", ctx._meta.length !== 0)("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      activated: "activated"
    },
    exportAs: ["matListItem"],
    features: [ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 10,
    vars: 0,
    consts: [["unscopedContent", ""], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mat-focus-indicator"]],
    template: function MatListItem_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef(_c4);
        ɵɵprojection(0);
        ɵɵelementStart(1, "span", 1);
        ɵɵprojection(2, 1);
        ɵɵprojection(3, 2);
        ɵɵelementStart(4, "span", 2, 0);
        ɵɵlistener("cdkObserveContent", function MatListItem_Template_span_cdkObserveContent_4_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx._updateItemLines(true));
        });
        ɵɵprojection(6, 3);
        ɵɵelementEnd()();
        ɵɵprojection(7, 4);
        ɵɵprojection(8, 5);
        ɵɵelement(9, "div", 3);
      }
    },
    dependencies: [CdkObserveContent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListItem, [{
    type: Component,
    args: [{
      selector: "mat-list-item, a[mat-list-item], button[mat-list-item]",
      exportAs: "matListItem",
      host: {
        "class": "mat-mdc-list-item mdc-list-item",
        "[class.mdc-list-item--activated]": "activated",
        "[class.mdc-list-item--with-leading-avatar]": "_avatars.length !== 0",
        "[class.mdc-list-item--with-leading-icon]": "_icons.length !== 0",
        "[class.mdc-list-item--with-trailing-meta]": "_meta.length !== 0",
        "[class.mat-mdc-list-item-both-leading-and-trailing]": "_hasBothLeadingAndTrailing()",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[attr.aria-current]": "_getAriaCurrent()"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [CdkObserveContent],
      template: '<ng-content select="[matListItemAvatar],[matListItemIcon]"></ng-content>\n\n<span class="mdc-list-item__content">\n  <ng-content select="[matListItemTitle]"></ng-content>\n  <ng-content select="[matListItemLine]"></ng-content>\n  <span #unscopedContent class="mat-mdc-list-item-unscoped-content"\n        (cdkObserveContent)="_updateItemLines(true)">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n<ng-content select="[matListItemMeta]"></ng-content>\n\n<ng-content select="mat-divider"></ng-content>\n\n<!--\n  Strong focus indicator element. MDC uses the `::before` pseudo element for the default\n  focus/hover/selected state, so we need a separate element.\n-->\n<div class="mat-focus-indicator"></div>\n'
    }]
  }], null, {
    _lines: [{
      type: ContentChildren,
      args: [MatListItemLine, {
        descendants: true
      }]
    }],
    _titles: [{
      type: ContentChildren,
      args: [MatListItemTitle, {
        descendants: true
      }]
    }],
    _meta: [{
      type: ContentChildren,
      args: [MatListItemMeta, {
        descendants: true
      }]
    }],
    _unscopedContent: [{
      type: ViewChild,
      args: ["unscopedContent"]
    }],
    _itemText: [{
      type: ViewChild,
      args: ["text"]
    }],
    activated: [{
      type: Input
    }]
  });
})();
var SELECTION_LIST = new InjectionToken("SelectionList");
var MatListOption = class _MatListOption extends MatListItemBase {
  _selectionList = inject(SELECTION_LIST);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _lines;
  _titles;
  _unscopedContent;
  selectedChange = new EventEmitter();
  togglePosition = "after";
  get checkboxPosition() {
    return this.togglePosition;
  }
  set checkboxPosition(value) {
    this.togglePosition = value;
  }
  get color() {
    return this._color || this._selectionList.color;
  }
  set color(newValue) {
    this._color = newValue;
  }
  _color;
  get value() {
    return this._value;
  }
  set value(newValue) {
    if (this.selected && newValue !== this.value && this._inputsInitialized) {
      this.selected = false;
    }
    this._value = newValue;
  }
  _value;
  get selected() {
    return this._selectionList.selectedOptions.isSelected(this);
  }
  set selected(value) {
    const isSelected = coerceBooleanProperty(value);
    if (isSelected !== this._selected) {
      this._setSelected(isSelected);
      if (isSelected || this._selectionList.multiple) {
        this._selectionList._reportValueChange();
      }
    }
  }
  _selected = false;
  _inputsInitialized = false;
  ngOnInit() {
    const list = this._selectionList;
    if (list._value && list._value.some((value) => list.compareWith(this._value, value))) {
      this._setSelected(true);
    }
    const wasSelected = this._selected;
    Promise.resolve().then(() => {
      if (this._selected || wasSelected) {
        this.selected = true;
        this._changeDetectorRef.markForCheck();
      }
    });
    this._inputsInitialized = true;
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.selected) {
      Promise.resolve().then(() => {
        this.selected = false;
      });
    }
  }
  toggle() {
    this.selected = !this.selected;
  }
  focus() {
    this._hostElement.focus();
  }
  getLabel() {
    const titleElement = this._titles?.get(0)?._elementRef.nativeElement;
    const labelEl = titleElement || this._unscopedContent?.nativeElement;
    return labelEl?.textContent || "";
  }
  _hasCheckboxAt(position) {
    return this._selectionList.multiple && this._getTogglePosition() === position;
  }
  _hasRadioAt(position) {
    return !this._selectionList.multiple && this._getTogglePosition() === position && !this._selectionList.hideSingleSelectionIndicator;
  }
  _hasIconsOrAvatarsAt(position) {
    return this._hasProjected("icons", position) || this._hasProjected("avatars", position);
  }
  _hasProjected(type, position) {
    return this._getTogglePosition() !== position && (type === "avatars" ? this._avatars.length !== 0 : this._icons.length !== 0);
  }
  _handleBlur() {
    this._selectionList._onTouched();
  }
  _getTogglePosition() {
    return this.togglePosition || "after";
  }
  _setSelected(selected) {
    if (selected === this._selected) {
      return false;
    }
    this._selected = selected;
    if (selected) {
      this._selectionList.selectedOptions.select(this);
    } else {
      this._selectionList.selectedOptions.deselect(this);
    }
    this.selectedChange.emit(selected);
    this._changeDetectorRef.markForCheck();
    return true;
  }
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  _toggleOnInteraction() {
    if (!this.disabled) {
      if (this._selectionList.multiple) {
        this.selected = !this.selected;
        this._selectionList._emitChangeEvent([this]);
      } else if (!this.selected) {
        this.selected = true;
        this._selectionList._emitChangeEvent([this]);
      }
    }
  }
  _setTabindex(value) {
    this._hostElement.setAttribute("tabindex", value + "");
  }
  _hasBothLeadingAndTrailing() {
    const hasLeading = this._hasProjected("avatars", "before") || this._hasProjected("icons", "before") || this._hasCheckboxAt("before") || this._hasRadioAt("before");
    const hasTrailing = this._hasProjected("icons", "after") || this._hasProjected("avatars", "after") || this._hasCheckboxAt("after") || this._hasRadioAt("after");
    return hasLeading && hasTrailing;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMatListOption_BaseFactory;
    return function MatListOption_Factory(__ngFactoryType__) {
      return (ɵMatListOption_BaseFactory || (ɵMatListOption_BaseFactory = ɵɵgetInheritedFactory(_MatListOption)))(__ngFactoryType__ || _MatListOption);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _MatListOption,
    selectors: [["mat-list-option"]],
    contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MatListItemLine, 5)(dirIndex, MatListItemTitle, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._lines = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._titles = _t);
      }
    },
    viewQuery: function MatListOption_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._unscopedContent = _t.first);
      }
    },
    hostAttrs: ["role", "option", 1, "mat-mdc-list-item", "mat-mdc-list-option", "mdc-list-item"],
    hostVars: 27,
    hostBindings: function MatListOption_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("blur", function MatListOption_blur_HostBindingHandler() {
          return ctx._handleBlur();
        })("click", function MatListOption_click_HostBindingHandler() {
          return ctx._toggleOnInteraction();
        });
      }
      if (rf & 2) {
        ɵɵattribute("aria-selected", ctx.selected);
        ɵɵclassProp("mdc-list-item--selected", ctx.selected && !ctx._selectionList.multiple && ctx._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar", ctx._hasProjected("avatars", "before"))("mdc-list-item--with-leading-icon", ctx._hasProjected("icons", "before"))("mdc-list-item--with-trailing-icon", ctx._hasProjected("icons", "after"))("mat-mdc-list-option-with-trailing-avatar", ctx._hasProjected("avatars", "after"))("mdc-list-item--with-leading-checkbox", ctx._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox", ctx._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio", ctx._hasRadioAt("before"))("mdc-list-item--with-trailing-radio", ctx._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      togglePosition: "togglePosition",
      checkboxPosition: "checkboxPosition",
      color: "color",
      value: "value",
      selected: "selected"
    },
    outputs: {
      selectedChange: "selectedChange"
    },
    exportAs: ["matListOption"],
    features: [ɵɵProvidersFeature([{
      provide: MatListItemBase,
      useExisting: _MatListOption
    }, {
      provide: LIST_OPTION,
      useExisting: _MatListOption
    }]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c7,
    decls: 20,
    vars: 4,
    consts: [["icons", ""], ["checkbox", ""], ["radio", ""], ["unscopedContent", ""], [1, "mdc-list-item__start", "mat-mdc-list-option-checkbox-before"], [1, "mdc-list-item__start", "mat-mdc-list-option-radio-before"], [3, "ngTemplateOutlet"], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mdc-list-item__end"], [1, "mat-focus-indicator"], [1, "mdc-checkbox"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "checked", "disabled"], [1, "mdc-checkbox__background"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], [1, "mdc-radio"], ["type", "radio", 1, "mdc-radio__native-control", 3, "checked", "disabled"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"]],
    template: function MatListOption_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef(_c6);
        ɵɵtemplate(0, MatListOption_ng_template_0_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, MatListOption_ng_template_2_Template, 6, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, MatListOption_ng_template_4_Template, 5, 4, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵconditionalCreate(6, MatListOption_Conditional_6_Template, 2, 1, "span", 4)(7, MatListOption_Conditional_7_Template, 2, 1, "span", 5);
        ɵɵconditionalCreate(8, MatListOption_Conditional_8_Template, 1, 1, null, 6);
        ɵɵelementStart(9, "span", 7);
        ɵɵprojection(10);
        ɵɵprojection(11, 1);
        ɵɵelementStart(12, "span", 8, 3);
        ɵɵlistener("cdkObserveContent", function MatListOption_Template_span_cdkObserveContent_12_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx._updateItemLines(true));
        });
        ɵɵprojection(14, 2);
        ɵɵelementEnd()();
        ɵɵconditionalCreate(15, MatListOption_Conditional_15_Template, 2, 1, "span", 9)(16, MatListOption_Conditional_16_Template, 2, 1, "span", 9);
        ɵɵconditionalCreate(17, MatListOption_Conditional_17_Template, 1, 1, null, 6);
        ɵɵprojection(18, 3);
        ɵɵelement(19, "div", 10);
      }
      if (rf & 2) {
        ɵɵadvance(6);
        ɵɵconditional(ctx._hasCheckboxAt("before") ? 6 : ctx._hasRadioAt("before") ? 7 : -1);
        ɵɵadvance(2);
        ɵɵconditional(ctx._hasIconsOrAvatarsAt("before") ? 8 : -1);
        ɵɵadvance(7);
        ɵɵconditional(ctx._hasCheckboxAt("after") ? 15 : ctx._hasRadioAt("after") ? 16 : -1);
        ɵɵadvance(2);
        ɵɵconditional(ctx._hasIconsOrAvatarsAt("after") ? 17 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, CdkObserveContent],
    styles: ['.mat-mdc-list-option-with-trailing-avatar.mdc-list-item,[dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item{padding-left:0;padding-right:0}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{margin-left:16px;margin-right:16px;width:40px;height:40px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{border-radius:50%}.mat-mdc-list-option .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox--disabled{cursor:default;pointer-events:none}.mat-mdc-list-option .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__checkmark{color:CanvasText}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mat-mdc-list-option .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mat-mdc-list-option .mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__mixedmark{margin:0 1px}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-list-option .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-list-option .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),background-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}@media(forced-colors: active){.mat-mdc-list-option .mdc-radio__inner-circle{background-color:CanvasText !important}}.mat-mdc-list-option .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-list-option .mdc-checkbox__native-control,.mat-mdc-list-option .mdc-radio__native-control{display:none}@media(forced-colors: active){.mat-mdc-list-option.mdc-list-item--selected::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after{right:auto;left:16px}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListOption, [{
    type: Component,
    args: [{
      selector: "mat-list-option",
      exportAs: "matListOption",
      host: {
        "class": "mat-mdc-list-item mat-mdc-list-option mdc-list-item",
        "role": "option",
        "[class.mdc-list-item--selected]": "selected && !_selectionList.multiple && _selectionList.hideSingleSelectionIndicator",
        "[class.mdc-list-item--with-leading-avatar]": '_hasProjected("avatars", "before")',
        "[class.mdc-list-item--with-leading-icon]": '_hasProjected("icons", "before")',
        "[class.mdc-list-item--with-trailing-icon]": '_hasProjected("icons", "after")',
        "[class.mat-mdc-list-option-with-trailing-avatar]": '_hasProjected("avatars", "after")',
        "[class.mdc-list-item--with-leading-checkbox]": '_hasCheckboxAt("before")',
        "[class.mdc-list-item--with-trailing-checkbox]": '_hasCheckboxAt("after")',
        "[class.mdc-list-item--with-leading-radio]": '_hasRadioAt("before")',
        "[class.mdc-list-item--with-trailing-radio]": '_hasRadioAt("after")',
        "[class.mat-mdc-list-item-both-leading-and-trailing]": "_hasBothLeadingAndTrailing()",
        "[class.mat-accent]": 'color !== "primary" && color !== "warn"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[attr.aria-selected]": "selected",
        "(blur)": "_handleBlur()",
        "(click)": "_toggleOnInteraction()"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MatListItemBase,
        useExisting: MatListOption
      }, {
        provide: LIST_OPTION,
        useExisting: MatListOption
      }],
      imports: [NgTemplateOutlet, CdkObserveContent],
      template: `<!--
  Save icons and the pseudo checkbox/radio so that they can be re-used in the template without
  duplication. Also content can only be injected once so we need to extract icons/avatars
  into a template since we use it in multiple places.
-->
<ng-template #icons>
  <ng-content select="[matListItemAvatar],[matListItemIcon]">
  </ng-content>
</ng-template>

<ng-template #checkbox>
  <div class="mdc-checkbox" [class.mdc-checkbox--disabled]="disabled">
    <input type="checkbox" class="mdc-checkbox__native-control"
           [checked]="selected" [disabled]="disabled"/>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
  </div>
</ng-template>

<ng-template #radio>
  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">
    <input type="radio" class="mdc-radio__native-control"
           [checked]="selected" [disabled]="disabled"/>
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
  </div>
</ng-template>

@if (_hasCheckboxAt('before')) {
  <!-- Container for the checkbox at start. -->
  <span class="mdc-list-item__start mat-mdc-list-option-checkbox-before">
    <ng-template [ngTemplateOutlet]="checkbox"></ng-template>
  </span>
} @else if (_hasRadioAt('before')) {
  <!-- Container for the radio at the start. -->
  <span class="mdc-list-item__start mat-mdc-list-option-radio-before">
    <ng-template [ngTemplateOutlet]="radio"></ng-template>
  </span>
}
<!-- Conditionally renders icons/avatars before the list item text. -->
@if (_hasIconsOrAvatarsAt('before')) {
  <ng-template [ngTemplateOutlet]="icons"></ng-template>
}

<!-- Text -->
<span class="mdc-list-item__content">
  <ng-content select="[matListItemTitle]"></ng-content>
  <ng-content select="[matListItemLine]"></ng-content>
  <span #unscopedContent class="mat-mdc-list-item-unscoped-content"
        (cdkObserveContent)="_updateItemLines(true)">
    <ng-content></ng-content>
  </span>
</span>

@if (_hasCheckboxAt('after')) {
  <!-- Container for the checkbox at the end. -->
  <span class="mdc-list-item__end">
    <ng-template [ngTemplateOutlet]="checkbox"></ng-template>
  </span>
} @else if (_hasRadioAt('after')) {
  <!-- Container for the radio at the end. -->
  <span class="mdc-list-item__end">
    <ng-template [ngTemplateOutlet]="radio"></ng-template>
  </span>
}

<!-- Conditionally renders icons/avatars after the list item text. -->
@if (_hasIconsOrAvatarsAt('after')) {
  <ng-template [ngTemplateOutlet]="icons"></ng-template>
}

<!-- Divider -->
<ng-content select="mat-divider"></ng-content>

<!--
  Strong focus indicator element. MDC uses the \`::before\` pseudo element for the default
  focus/hover/selected state, so we need a separate element.
-->
<div class="mat-focus-indicator"></div>
`,
      styles: ['.mat-mdc-list-option-with-trailing-avatar.mdc-list-item,[dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item{padding-left:0;padding-right:0}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{margin-left:16px;margin-right:16px;width:40px;height:40px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{border-radius:50%}.mat-mdc-list-option .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox--disabled{cursor:default;pointer-events:none}.mat-mdc-list-option .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__checkmark{color:CanvasText}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mat-mdc-list-option .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mat-mdc-list-option .mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__mixedmark{margin:0 1px}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-list-option .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-list-option .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0);border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),background-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}@media(forced-colors: active){.mat-mdc-list-option .mdc-radio__inner-circle{background-color:CanvasText !important}}.mat-mdc-list-option .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface, currentColor));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{background-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary, currentColor))}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-list-option .mdc-checkbox__native-control,.mat-mdc-list-option .mdc-radio__native-control{display:none}@media(forced-colors: active){.mat-mdc-list-option.mdc-list-item--selected::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after{right:auto;left:16px}}\n']
    }]
  }], null, {
    _lines: [{
      type: ContentChildren,
      args: [MatListItemLine, {
        descendants: true
      }]
    }],
    _titles: [{
      type: ContentChildren,
      args: [MatListItemTitle, {
        descendants: true
      }]
    }],
    _unscopedContent: [{
      type: ViewChild,
      args: ["unscopedContent"]
    }],
    selectedChange: [{
      type: Output
    }],
    togglePosition: [{
      type: Input
    }],
    checkboxPosition: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selected: [{
      type: Input
    }]
  });
})();
var MatListSubheaderCssMatStyler = class _MatListSubheaderCssMatStyler {
  static ɵfac = function MatListSubheaderCssMatStyler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListSubheaderCssMatStyler)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _MatListSubheaderCssMatStyler,
    selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]],
    hostAttrs: [1, "mat-mdc-subheader", "mdc-list-group__subheader"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListSubheaderCssMatStyler, [{
    type: Directive,
    args: [{
      selector: "[mat-subheader], [matSubheader]",
      host: {
        "class": "mat-mdc-subheader mdc-list-group__subheader"
      }
    }]
  }], null, null);
})();
var MAT_NAV_LIST = new InjectionToken("MatNavList");
var MatNavList = class _MatNavList extends MatListBase {
  _isNonInteractive = false;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMatNavList_BaseFactory;
    return function MatNavList_Factory(__ngFactoryType__) {
      return (ɵMatNavList_BaseFactory || (ɵMatNavList_BaseFactory = ɵɵgetInheritedFactory(_MatNavList)))(__ngFactoryType__ || _MatNavList);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _MatNavList,
    selectors: [["mat-nav-list"]],
    hostAttrs: ["role", "navigation", 1, "mat-mdc-nav-list", "mat-mdc-list-base", "mdc-list"],
    exportAs: ["matNavList"],
    features: [ɵɵProvidersFeature([{
      provide: MatListBase,
      useExisting: _MatNavList
    }]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatNavList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: [_c1],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNavList, [{
    type: Component,
    args: [{
      selector: "mat-nav-list",
      exportAs: "matNavList",
      template: "<ng-content></ng-content>",
      host: {
        "class": "mat-mdc-nav-list mat-mdc-list-base mdc-list",
        "role": "navigation"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: MatListBase,
        useExisting: MatNavList
      }],
      styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus-visible>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n']
    }]
  }], null, null);
})();
var MAT_SELECTION_LIST_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSelectionList),
  multi: true
};
var MatSelectionListChange = class {
  source;
  options;
  constructor(source, options) {
    this.source = source;
    this.options = options;
  }
};
var MatSelectionList = class _MatSelectionList extends MatListBase {
  _element = inject(ElementRef);
  _ngZone = inject(NgZone);
  _renderer = inject(Renderer2);
  _initialized = false;
  _keyManager;
  _listenerCleanups;
  _destroyed = new Subject();
  _isDestroyed = false;
  _onChange = (_) => {
  };
  _items;
  selectionChange = new EventEmitter();
  color = "accent";
  compareWith = (a1, a2) => a1 === a2;
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    const newValue = coerceBooleanProperty(value);
    if (newValue !== this._multiple) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && this._initialized) {
        throw new Error("Cannot change `multiple` mode of mat-selection-list after initialization.");
      }
      this._multiple = newValue;
      this.selectedOptions = new SelectionModel(this._multiple, this.selectedOptions.selected);
    }
  }
  _multiple = true;
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = coerceBooleanProperty(value);
  }
  _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
  selectedOptions = new SelectionModel(this._multiple);
  _value = null;
  _onTouched = () => {
  };
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    super();
    this._isNonInteractive = false;
  }
  ngAfterViewInit() {
    this._initialized = true;
    this._setupRovingTabindex();
    this._ngZone.runOutsideAngular(() => {
      this._listenerCleanups = [this._renderer.listen(this._element.nativeElement, "focusin", this._handleFocusin), this._renderer.listen(this._element.nativeElement, "focusout", this._handleFocusout)];
    });
    if (this._value) {
      this._setOptionsFromValues(this._value);
    }
    this._watchForSelectionChange();
  }
  ngOnChanges(changes) {
    const disabledChanges = changes["disabled"];
    const disableRippleChanges = changes["disableRipple"];
    const hideSingleSelectionIndicatorChanges = changes["hideSingleSelectionIndicator"];
    if (disableRippleChanges && !disableRippleChanges.firstChange || disabledChanges && !disabledChanges.firstChange || hideSingleSelectionIndicatorChanges && !hideSingleSelectionIndicatorChanges.firstChange) {
      this._markOptionsForCheck();
    }
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._listenerCleanups?.forEach((current) => current());
    this._destroyed.next();
    this._destroyed.complete();
    this._isDestroyed = true;
  }
  focus(options) {
    this._element.nativeElement.focus(options);
  }
  selectAll() {
    return this._setAllOptionsSelected(true);
  }
  deselectAll() {
    return this._setAllOptionsSelected(false);
  }
  _reportValueChange() {
    if (this.options && !this._isDestroyed) {
      const value = this._getSelectedOptionValues();
      this._onChange(value);
      this._value = value;
    }
  }
  _emitChangeEvent(options) {
    this.selectionChange.emit(new MatSelectionListChange(this, options));
  }
  writeValue(values) {
    this._value = values;
    if (this.options) {
      this._setOptionsFromValues(values || []);
    }
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
    this._markOptionsForCheck();
  }
  get disabled() {
    return this._selectionListDisabled();
  }
  set disabled(value) {
    this._selectionListDisabled.set(coerceBooleanProperty(value));
    if (this._selectionListDisabled()) {
      this._keyManager?.setActiveItem(-1);
    }
  }
  _selectionListDisabled = signal(false, ...ngDevMode ? [{
    debugName: "_selectionListDisabled"
  }] : []);
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  _watchForSelectionChange() {
    this.selectedOptions.changed.pipe(takeUntil(this._destroyed)).subscribe((event) => {
      for (let item of event.added) {
        item.selected = true;
      }
      for (let item of event.removed) {
        item.selected = false;
      }
      if (!this._containsFocus()) {
        this._resetActiveOption();
      }
    });
  }
  _setOptionsFromValues(values) {
    this.options.forEach((option) => option._setSelected(false));
    values.forEach((value) => {
      const correspondingOption = this.options.find((option) => {
        return option.selected ? false : this.compareWith(option.value, value);
      });
      if (correspondingOption) {
        correspondingOption._setSelected(true);
      }
    });
  }
  _getSelectedOptionValues() {
    return this.options.filter((option) => option.selected).map((option) => option.value);
  }
  _markOptionsForCheck() {
    if (this.options) {
      this.options.forEach((option) => option._markForCheck());
    }
  }
  _setAllOptionsSelected(isSelected, skipDisabled) {
    const changedOptions = [];
    this.options.forEach((option) => {
      if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
        changedOptions.push(option);
      }
    });
    if (changedOptions.length) {
      this._reportValueChange();
    }
    return changedOptions;
  }
  get options() {
    return this._items;
  }
  _handleKeydown(event) {
    const activeItem = this._keyManager.activeItem;
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this._keyManager.isTyping() && activeItem && !activeItem.disabled) {
      event.preventDefault();
      activeItem._toggleOnInteraction();
    } else if (event.keyCode === A && this.multiple && !this._keyManager.isTyping() && hasModifierKey(event, "ctrlKey", "metaKey")) {
      const shouldSelect = this.options.some((option) => !option.disabled && !option.selected);
      event.preventDefault();
      this._emitChangeEvent(this._setAllOptionsSelected(shouldSelect, true));
    } else {
      this._keyManager.onKeydown(event);
    }
  }
  _handleFocusout = () => {
    setTimeout(() => {
      if (!this._containsFocus()) {
        this._resetActiveOption();
      }
    });
  };
  _handleFocusin = (event) => {
    if (this.disabled) {
      return;
    }
    const activeIndex = this._items.toArray().findIndex((item) => item._elementRef.nativeElement.contains(event.target));
    if (activeIndex > -1) {
      this._setActiveOption(activeIndex);
    } else {
      this._resetActiveOption();
    }
  };
  _setupRovingTabindex() {
    this._keyManager = new FocusKeyManager(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(() => this.disabled);
    this._resetActiveOption();
    this._keyManager.change.subscribe((activeItemIndex) => this._setActiveOption(activeItemIndex));
    this._items.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
      const activeItem = this._keyManager.activeItem;
      if (!activeItem || this._items.toArray().indexOf(activeItem) === -1) {
        this._resetActiveOption();
      }
    });
  }
  _setActiveOption(index) {
    this._items.forEach((item, itemIndex) => item._setTabindex(itemIndex === index ? 0 : -1));
    this._keyManager.updateActiveItem(index);
  }
  _resetActiveOption() {
    if (this.disabled) {
      this._setActiveOption(-1);
      return;
    }
    const activeItem = this._items.find((item) => item.selected && !item.disabled) || this._items.first;
    this._setActiveOption(activeItem ? this._items.toArray().indexOf(activeItem) : -1);
  }
  _containsFocus() {
    const activeElement = _getFocusedElementPierceShadowDom();
    return activeElement && this._element.nativeElement.contains(activeElement);
  }
  static ɵfac = function MatSelectionList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSelectionList)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MatSelectionList,
    selectors: [["mat-selection-list"]],
    contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MatListOption, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
      }
    },
    hostAttrs: ["role", "listbox", 1, "mat-mdc-selection-list", "mat-mdc-list-base", "mdc-list"],
    hostVars: 1,
    hostBindings: function MatSelectionList_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function MatSelectionList_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("aria-multiselectable", ctx.multiple);
      }
    },
    inputs: {
      color: "color",
      compareWith: "compareWith",
      multiple: "multiple",
      hideSingleSelectionIndicator: "hideSingleSelectionIndicator",
      disabled: "disabled"
    },
    outputs: {
      selectionChange: "selectionChange"
    },
    exportAs: ["matSelectionList"],
    features: [ɵɵProvidersFeature([MAT_SELECTION_LIST_VALUE_ACCESSOR, {
      provide: MatListBase,
      useExisting: _MatSelectionList
    }, {
      provide: SELECTION_LIST,
      useExisting: _MatSelectionList
    }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatSelectionList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    styles: [_c1],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSelectionList, [{
    type: Component,
    args: [{
      selector: "mat-selection-list",
      exportAs: "matSelectionList",
      host: {
        "class": "mat-mdc-selection-list mat-mdc-list-base mdc-list",
        "role": "listbox",
        "[attr.aria-multiselectable]": "multiple",
        "(keydown)": "_handleKeydown($event)"
      },
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation.None,
      providers: [MAT_SELECTION_LIST_VALUE_ACCESSOR, {
        provide: MatListBase,
        useExisting: MatSelectionList
      }, {
        provide: SELECTION_LIST,
        useExisting: MatSelectionList
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus-visible>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n']
    }]
  }], () => [], {
    _items: [{
      type: ContentChildren,
      args: [MatListOption, {
        descendants: true
      }]
    }],
    selectionChange: [{
      type: Output
    }],
    color: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    hideSingleSelectionIndicator: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var MatListModule = class _MatListModule {
  static ɵfac = function MatListModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatListModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MatListModule,
    imports: [ObserversModule, MatRippleModule, MatPseudoCheckboxModule, MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListSubheaderCssMatStyler, MatListItemAvatar, MatListItemIcon, MatListItemLine, MatListItemTitle, MatListItemMeta],
    exports: [BidiModule, MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListItemAvatar, MatListItemIcon, MatListSubheaderCssMatStyler, MatDividerModule, MatListItemLine, MatListItemTitle, MatListItemMeta]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [ObserversModule, MatRippleModule, MatPseudoCheckboxModule, BidiModule, MatDividerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatListModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, MatRippleModule, MatPseudoCheckboxModule, MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListSubheaderCssMatStyler, MatListItemAvatar, MatListItemIcon, MatListItemLine, MatListItemTitle, MatListItemMeta],
      exports: [BidiModule, MatList, MatActionList, MatNavList, MatSelectionList, MatListItem, MatListOption, MatListItemAvatar, MatListItemIcon, MatListSubheaderCssMatStyler, MatDividerModule, MatListItemLine, MatListItemTitle, MatListItemMeta]
    }]
  }], null, null);
})();
export {
  MAT_LIST,
  MAT_LIST_CONFIG,
  MAT_NAV_LIST,
  MAT_SELECTION_LIST_VALUE_ACCESSOR,
  MatActionList,
  MatDivider,
  MatList,
  MatListItem,
  MatListItemAvatar,
  MatListItemIcon,
  MatListItemLine,
  MatListItemMeta,
  MatListItemTitle,
  MatListModule,
  MatListOption,
  MatListSubheaderCssMatStyler,
  MatNavList,
  MatSelectionList,
  MatSelectionListChange,
  SELECTION_LIST,
  _MatListItemGraphicBase
};
//# sourceMappingURL=@angular_material_list.js.map
