var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var _a, _sources, _version, _size, _SvelteMap_instances, read_all_fn, _fn, _subscribe, _document, _subscribe2, _b, _current, _key, _serializer, _storage, _subscribe3, _version2, _handleStorageEvent, _PersistedState_instances, deserialize_fn, serialize_fn, _document2, _subscribe4, _c, _defaultValue, _storage2, _initialValue, _value, _persisted, _UserPrefersMode_instances, makePersisted_fn, _defaultValue2, _track, _current2, _mediaQueryState, _storage3, _initialValue2, _value2, _persisted2, _CustomTheme_instances, makePersisted_fn2, _document3, _subscribe5, _name, _key2, _size2, _observed, _options, _node, _window, _width, _height, _subscribe6, _previous, _root, _variant, _prefix, _opts, _currentTabStopId, _machine, _StateMachine_instances, reducer_fn, _prevAnimationNameState, _styles, _isPresent, _opts2, _currentFrame, _isRunning, _AnimationsComplete_instances, cleanup_fn, executeCallback_fn, _opts3, _enabled, _afterAnimations, _triggerNode, _contentNode, _descriptionNode, _contentId, _titleId, _triggerId, _descriptionId, _cancelNode, _sharedProps, _props, _props2, _props3, _snippetProps, _props4, _snippetProps2, _props5, _props6, _interactOutsideProp, _behaviorType, _interceptedEvents, _isResponsibleLayer, _isFocusInsideDOMTree, _documentObj, _onFocusOutside, _unsubClickListener, _handleFocus, _DismissibleLayerState_instances, addEventListeners_fn, _handleDismiss, _handleInteractOutside, _markInterceptedEvent, _markNonInterceptedEvent, _markResponsibleLayer, _isTargetWithinLayer, _resetState, isAnyEventIntercepted_fn, _onfocuscapture, _onblurcapture, _addEventListener, _onkeydown, _scopeStack, _focusHistory, _paused, _container, _manager, _cleanupFns, _opts4, _FocusScope_instances, cleanup_fn2, handleOpenAutoFocus_fn, handleCloseAutoFocus_fn, setupEventListeners_fn, getTabbables_fn, getFirstTabbable_fn, getAllFocusables_fn, _unsubSelectionLock, _TextSelectionLayerState_instances, addEventListeners_fn2, _pointerdown, _resetSelectionLock, _factory, _subscribers, _state, _scope, _SharedState_instances, dispose_fn, _id, _initialState, _restoreScrollDelay, _countState, _transformedStyle, _updatePositionStrategy, _arrowSize, _arrowWidth, _arrowHeight, _desiredPlacement, _boundary, _hasExplicitBoundaries, _detectOverflowOptions, _availableWidth, _availableHeight, _anchorWidth, _anchorHeight, _middleware, _placedSide, _placedAlign, _arrowX, _arrowY, _cannotCenterArrow, _contentZIndex, _arrowBaseSide, _wrapperProps, _props7, _arrowStyle, _opts5, _search, _onMatch, _getCurrentItem, _opts6, _enabled2, _isPointerInTransit, _pointerGraceArea, _GraceArea_instances, removeGraceArea_fn, createGraceArea_fn, _ignoreCloseAutoFocus, _isPointerInTransit2, _contentNode2, _triggerNode2, _search2, _timer, _handleTypeaheadSearch, _mounted, _isSub, _MenuContentState_instances, getCandidateNodes_fn, isPointerMovingToSubmenu_fn, _snippetProps3, _props8, _isFocused, _props9, _isPointerDown, _MenuItemState_instances, handleSelect_fn, _props10, _props11, _ariaControls, _props12, _props13, _triggerIds, _props14, _isDisabled, _props15, _tabIndex, _isActive, _isDisabled2, _ariaControls2, _TabsTriggerState_instances, activate_fn, _props16, _isActive2, _ariaLabelledBy, _props17;
window.__BUILD_DATE__ = "2025-08-18T17:17:07.747Z";
window.__BUILD_HASH__ = "2e1b98f";
window.__APP_VERSION__ = "0.0.1";
window.__DEBUG__ = false;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link2 of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link2);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link2) {
    const fetchOpts = {};
    if (link2.integrity) fetchOpts.integrity = link2.integrity;
    if (link2.referrerPolicy) fetchOpts.referrerPolicy = link2.referrerPolicy;
    if (link2.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link2.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link2) {
    if (link2.ep)
      return;
    link2.ep = true;
    const fetchOpts = getFetchOpts(link2);
    fetch(link2.href, fetchOpts);
  }
})();
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element2) {
  var _element$getRootNode;
  return element2 === null || element2 === void 0 ? void 0 : (_element$getRootNode = element2.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element2);
} : function(element2) {
  return element2 === null || element2 === void 0 ? void 0 : element2.ownerDocument;
};
var isInert = function isInert2(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && isInert2(node.parentNode);
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element2 = elementsToCheck.shift();
    if (isInert(element2, false)) {
      continue;
    }
    if (element2.tagName === "SLOT") {
      var assigned = element2.assignedElements();
      var content = assigned.length ? assigned : element2.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element2,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element2, candidateSelector);
      if (validCandidate && options.filter(element2) && (includeContainer || !elements.includes(element2))) {
        candidates.push(element2);
      }
      var shadowRoot = element2.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element2);
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element2));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element2.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element2,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element2.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a2, b) {
  return a2.tabIndex === b.tabIndex ? a2.documentOrder - b.documentOrder : a2.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r2 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child2) {
    return child2.tagName === "SUMMARY";
  });
  return r2;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i2 = 0; i2 < nodes.length; i2++) {
    if (nodes[i2].checked && nodes[i2].form === form) {
      return nodes[i2];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i2 = 0; i2 < parentNode.children.length; i2++) {
          var child2 = parentNode.children.item(i2);
          if (child2.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child2.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i2) {
    var isScope = !!item.scopeParent;
    var element2 = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element2, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element2;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element2);
    } else {
      orderedTabbables.push({
        documentOrder: i2,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusable = function focusable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
var isFocusable = function isFocusable2(node, options) {
  options = options || {};
  if (!node) {
    throw new Error("No node provided");
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx$1() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
const CLASS_PART_SEPARATOR$1 = "-";
const createClassGroupUtils$1 = (config) => {
  const classMap = createClassMap$1(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR$1);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive$1(classParts, classMap) || getGroupIdForArbitraryProperty$1(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive$1 = (classParts, classPartObject) => {
  var _a2;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive$1(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR$1);
  return (_a2 = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a2.classGroupId;
};
const arbitraryPropertyRegex$1 = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty$1 = (className) => {
  if (arbitraryPropertyRegex$1.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex$1.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
const createClassMap$1 = (config) => {
  const {
    theme,
    classGroups
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const classGroupId in classGroups) {
    processClassesRecursively$1(classGroups[classGroupId], classMap, classGroupId, theme);
  }
  return classMap;
};
const processClassesRecursively$1 = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart$1(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter$1(classDefinition)) {
        processClassesRecursively$1(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively$1(classGroup2, getPart$1(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart$1 = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR$1).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter$1 = (func) => func.isThemeGetter;
const createLruCache$1 = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER$1 = "!";
const MODIFIER_SEPARATOR$1 = ":";
const MODIFIER_SEPARATOR_LENGTH$1 = MODIFIER_SEPARATOR$1.length;
const createParseClassName$1 = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index2 = 0; index2 < className.length; index2++) {
      let currentCharacter = className[index2];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR$1) {
          modifiers.push(className.slice(modifierStart, index2));
          modifierStart = index2 + MODIFIER_SEPARATOR_LENGTH$1;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index2;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      } else if (currentCharacter === "(") {
        parenDepth++;
      } else if (currentCharacter === ")") {
        parenDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const baseClassName = stripImportantModifier$1(baseClassNameWithImportantModifier);
    const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR$1;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
      isExternal: true,
      modifiers: [],
      hasImportantModifier: false,
      baseClassName: className,
      maybePostfixModifierPosition: void 0
    };
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};
const stripImportantModifier$1 = (baseClassName) => {
  if (baseClassName.endsWith(IMPORTANT_MODIFIER$1)) {
    return baseClassName.substring(0, baseClassName.length - 1);
  }
  if (baseClassName.startsWith(IMPORTANT_MODIFIER$1)) {
    return baseClassName.substring(1);
  }
  return baseClassName;
};
const createSortModifiers$1 = (config) => {
  const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, true]));
  const sortModifiers = (modifiers) => {
    if (modifiers.length <= 1) {
      return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier) => {
      const isPositionSensitive = modifier[0] === "[" || orderSensitiveModifiers[modifier];
      if (isPositionSensitive) {
        sortedModifiers.push(...unsortedModifiers.sort(), modifier);
        unsortedModifiers = [];
      } else {
        unsortedModifiers.push(modifier);
      }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
  };
  return sortModifiers;
};
const createConfigUtils$1 = (config) => ({
  cache: createLruCache$1(config.cacheSize),
  parseClassName: createParseClassName$1(config),
  sortModifiers: createSortModifiers$1(config),
  ...createClassGroupUtils$1(config)
});
const SPLIT_CLASSES_REGEX$1 = /\s+/;
const mergeClassList$1 = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX$1);
  let result = "";
  for (let index2 = classNames.length - 1; index2 >= 0; index2 -= 1) {
    const originalClassName = classNames[index2];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER$1 : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i2 = 0; i2 < conflictGroups.length; ++i2) {
      const group = conflictGroups[i2];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin$1() {
  let index2 = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index2 < arguments.length) {
    if (argument = arguments[index2++]) {
      if (resolvedValue = toValue$1(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue$1 = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue$1(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge$1(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils$1(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList$1(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin$1.apply(null, arguments));
  };
}
const fromTheme$1 = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex$1 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const arbitraryVariableRegex$1 = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const fractionRegex$1 = /^\d+\/\d+$/;
const tshirtUnitRegex$1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex$1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex$1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
const shadowRegex$1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex$1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isFraction$1 = (value) => fractionRegex$1.test(value);
const isNumber$1 = (value) => !!value && !Number.isNaN(Number(value));
const isInteger$1 = (value) => !!value && Number.isInteger(Number(value));
const isPercent$1 = (value) => value.endsWith("%") && isNumber$1(value.slice(0, -1));
const isTshirtSize$1 = (value) => tshirtUnitRegex$1.test(value);
const isAny$1 = () => true;
const isLengthOnly$1 = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex$1.test(value) && !colorFunctionRegex$1.test(value)
);
const isNever$1 = () => false;
const isShadow$1 = (value) => shadowRegex$1.test(value);
const isImage$1 = (value) => imageRegex$1.test(value);
const isAnyNonArbitrary$1 = (value) => !isArbitraryValue$1(value) && !isArbitraryVariable$1(value);
const isArbitrarySize$1 = (value) => getIsArbitraryValue$1(value, isLabelSize$1, isNever$1);
const isArbitraryValue$1 = (value) => arbitraryValueRegex$1.test(value);
const isArbitraryLength$1 = (value) => getIsArbitraryValue$1(value, isLabelLength$1, isLengthOnly$1);
const isArbitraryNumber$1 = (value) => getIsArbitraryValue$1(value, isLabelNumber$1, isNumber$1);
const isArbitraryPosition$1 = (value) => getIsArbitraryValue$1(value, isLabelPosition$1, isNever$1);
const isArbitraryImage$1 = (value) => getIsArbitraryValue$1(value, isLabelImage$1, isImage$1);
const isArbitraryShadow$1 = (value) => getIsArbitraryValue$1(value, isLabelShadow$1, isShadow$1);
const isArbitraryVariable$1 = (value) => arbitraryVariableRegex$1.test(value);
const isArbitraryVariableLength$1 = (value) => getIsArbitraryVariable$1(value, isLabelLength$1);
const isArbitraryVariableFamilyName$1 = (value) => getIsArbitraryVariable$1(value, isLabelFamilyName$1);
const isArbitraryVariablePosition$1 = (value) => getIsArbitraryVariable$1(value, isLabelPosition$1);
const isArbitraryVariableSize$1 = (value) => getIsArbitraryVariable$1(value, isLabelSize$1);
const isArbitraryVariableImage$1 = (value) => getIsArbitraryVariable$1(value, isLabelImage$1);
const isArbitraryVariableShadow$1 = (value) => getIsArbitraryVariable$1(value, isLabelShadow$1, true);
const getIsArbitraryValue$1 = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex$1.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const getIsArbitraryVariable$1 = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex$1.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
const isLabelPosition$1 = (label) => label === "position" || label === "percentage";
const isLabelImage$1 = (label) => label === "image" || label === "url";
const isLabelSize$1 = (label) => label === "length" || label === "size" || label === "bg-size";
const isLabelLength$1 = (label) => label === "length";
const isLabelNumber$1 = (label) => label === "number";
const isLabelFamilyName$1 = (label) => label === "family-name";
const isLabelShadow$1 = (label) => label === "shadow";
const getDefaultConfig$1 = () => {
  const themeColor = fromTheme$1("color");
  const themeFont = fromTheme$1("font");
  const themeText = fromTheme$1("text");
  const themeFontWeight = fromTheme$1("font-weight");
  const themeTracking = fromTheme$1("tracking");
  const themeLeading = fromTheme$1("leading");
  const themeBreakpoint = fromTheme$1("breakpoint");
  const themeContainer = fromTheme$1("container");
  const themeSpacing = fromTheme$1("spacing");
  const themeRadius = fromTheme$1("radius");
  const themeShadow = fromTheme$1("shadow");
  const themeInsetShadow = fromTheme$1("inset-shadow");
  const themeTextShadow = fromTheme$1("text-shadow");
  const themeDropShadow = fromTheme$1("drop-shadow");
  const themeBlur = fromTheme$1("blur");
  const themePerspective = fromTheme$1("perspective");
  const themeAspect = fromTheme$1("aspect");
  const themeEase = fromTheme$1("ease");
  const themeAnimate = fromTheme$1("animate");
  const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const scalePosition = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ];
  const scalePositionWithArbitrary = () => [...scalePosition(), isArbitraryVariable$1, isArbitraryValue$1];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable$1, isArbitraryValue$1, themeSpacing];
  const scaleInset = () => [isFraction$1, "full", "auto", ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger$1, "none", "subgrid", isArbitraryVariable$1, isArbitraryValue$1];
  const scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger$1, isArbitraryVariable$1, isArbitraryValue$1]
  }, isInteger$1, isArbitraryVariable$1, isArbitraryValue$1];
  const scaleGridColRowStartOrEnd = () => [isInteger$1, "auto", isArbitraryVariable$1, isArbitraryValue$1];
  const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable$1, isArbitraryValue$1];
  const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction$1, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable$1, isArbitraryValue$1];
  const scaleBgPosition = () => [...scalePosition(), isArbitraryVariablePosition$1, isArbitraryPosition$1, {
    position: [isArbitraryVariable$1, isArbitraryValue$1]
  }];
  const scaleBgRepeat = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  const scaleBgSize = () => ["auto", "cover", "contain", isArbitraryVariableSize$1, isArbitrarySize$1, {
    size: [isArbitraryVariable$1, isArbitraryValue$1]
  }];
  const scaleGradientStopPosition = () => [isPercent$1, isArbitraryVariableLength$1, isArbitraryLength$1];
  const scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable$1,
    isArbitraryValue$1
  ];
  const scaleBorderWidth = () => ["", isNumber$1, isArbitraryVariableLength$1, isArbitraryLength$1];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const scaleMaskImagePosition = () => [isNumber$1, isPercent$1, isArbitraryVariablePosition$1, isArbitraryPosition$1];
  const scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable$1,
    isArbitraryValue$1
  ];
  const scaleRotate = () => ["none", isNumber$1, isArbitraryVariable$1, isArbitraryValue$1];
  const scaleScale = () => ["none", isNumber$1, isArbitraryVariable$1, isArbitraryValue$1];
  const scaleSkew = () => [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1];
  const scaleTranslate = () => [isFraction$1, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize$1],
      breakpoint: [isTshirtSize$1],
      color: [isAny$1],
      container: [isTshirtSize$1],
      "drop-shadow": [isTshirtSize$1],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary$1],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize$1],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize$1],
      shadow: [isTshirtSize$1],
      spacing: ["px", isNumber$1],
      text: [isTshirtSize$1],
      "text-shadow": [isTshirtSize$1],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction$1, isArbitraryValue$1, isArbitraryVariable$1, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber$1, isArbitraryValue$1, isArbitraryVariable$1, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: scalePositionWithArbitrary()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: scaleInset()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger$1, "auto", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction$1, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber$1, isFraction$1, "auto", "initial", "none", isArbitraryValue$1]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger$1, "first", "last", "none", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength$1, isArbitraryLength$1]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariable$1, isArbitraryNumber$1]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent$1, isArbitraryValue$1]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName$1, isArbitraryValue$1, themeFont]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber$1, "none", isArbitraryVariable$1, isArbitraryNumber$1]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber$1, "from-font", "auto", isArbitraryVariable$1, isArbitraryLength$1]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber$1, "auto", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: scaleBgPosition()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: scaleBgRepeat()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: scaleBgSize()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger$1, isArbitraryVariable$1, isArbitraryValue$1],
          radial: ["", isArbitraryVariable$1, isArbitraryValue$1],
          conic: [isInteger$1, isArbitraryVariable$1, isArbitraryValue$1]
        }, isArbitraryVariableImage$1, isArbitraryImage$1]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber$1, isArbitraryVariableLength$1, isArbitraryLength$1]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: scaleColor()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow$1,
          isArbitraryShadow$1
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", themeInsetShadow, isArbitraryVariableShadow$1, isArbitraryShadow$1]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber$1, isArbitraryLength$1]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", themeTextShadow, isArbitraryVariableShadow$1, isArbitraryShadow$1]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [isNumber$1]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": scaleMaskImagePosition()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": scaleMaskImagePosition()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": scaleColor()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": scaleColor()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": scaleMaskImagePosition()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": scaleMaskImagePosition()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": scaleColor()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": scaleColor()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": scaleMaskImagePosition()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": scaleMaskImagePosition()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": scaleColor()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": scaleColor()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": scaleMaskImagePosition()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": scaleMaskImagePosition()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": scaleColor()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": scaleColor()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": scaleMaskImagePosition()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": scaleMaskImagePosition()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": scaleColor()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": scaleColor()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": scaleMaskImagePosition()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": scaleMaskImagePosition()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": scaleColor()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": scaleColor()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": scaleMaskImagePosition()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": scaleMaskImagePosition()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": scaleColor()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": scaleColor()
      }],
      "mask-image-radial": [{
        "mask-radial": [isArbitraryVariable$1, isArbitraryValue$1]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": scaleMaskImagePosition()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": scaleMaskImagePosition()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": scaleColor()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": scaleColor()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": scalePosition()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [isNumber$1]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": scaleMaskImagePosition()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": scaleMaskImagePosition()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": scaleColor()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": scaleColor()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: scaleBgPosition()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: scaleBgRepeat()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: scaleBgSize()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable$1,
          isArbitraryValue$1
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariableShadow$1,
          isArbitraryShadow$1
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": scaleColor()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable$1,
          isArbitraryValue$1
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber$1, "initial", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber$1, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scalePositionWithArbitrary()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable$1, isArbitraryValue$1, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scalePositionWithArbitrary()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable$1, isArbitraryValue$1]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber$1, isArbitraryVariableLength$1, isArbitraryLength$1, isArbitraryNumber$1]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
};
const twMerge$1 = /* @__PURE__ */ createTailwindMerge$1(getDefaultConfig$1);
const ar_nums = (s) => ("" + s).replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩".substr(+d, 1));
const en_nums = (s) => s.replace(/[٠-٩]/g, (d) => d.charCodeAt(0) - 1632);
function debounce$1(fn, timeout) {
  let timeout_id;
  return (...args) => {
    clearTimeout(timeout_id);
    timeout_id = setTimeout(() => fn(...args), timeout);
  };
}
function get_vh_offset() {
  const div = create_el("div", { style: "position: absolute; height: 100vh" });
  document.body.appendChild(div);
  const { clientHeight } = div;
  div.remove();
  return clientHeight - window.innerHeight;
}
function init_useragent_info() {
  const UA = navigator.userAgent;
  const doc_classes = document.documentElement.classList;
  window._useragent = {
    ios: /iPad|iPhone|iPod/.test(UA) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1,
    safari: "GestureEvent" in window,
    pwa: window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone,
    is_touch: "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
  };
  if (window._useragent.safari)
    doc_classes.add("safari");
  if (window._useragent.ios)
    doc_classes.add("ios");
  if (UA.includes("Firefox"))
    doc_classes.add("firefox");
  if (/Windows NT|Intel Mac OS X/.test(UA))
    doc_classes.add("non-mobile");
  else if (/Android.*Chrome\//.test(UA))
    doc_classes.add("chrome-android");
}
function add_tab_check() {
  window.addEventListener("keydown", function check_tab(e) {
    if (e.key === "Tab") {
      document.documentElement.classList.add("user-is-tabbing");
      window.removeEventListener("keydown", check_tab);
    }
  });
}
const multi_match_map = { ا: "اأآإى", أ: "أإءؤئ", ء: "ءأإؤئ", ت: "تة", ة: "ةته", ه: "هة", ى: "ىاي", ي: "يى" };
RegExp(`[${Object.keys(multi_match_map).join("")}]`, "g");
const create_el = (tag, attrs) => Object.assign(document.createElement(tag), attrs);
function cn$1(...inputs) {
  return twMerge$1(clsx$1(inputs));
}
window.BASE_TITLE = document.title;
if (window.__DEBUG__) window.Sentry = { captureMessage: console.log, captureException: console.error };
else {
  let remove_search_param = function(url_str, param) {
    const url_object = new URL(url_str);
    url_object.searchParams.delete(param);
    return url_object.toString();
  };
  var remove_search_param2 = remove_search_param;
  try {
    localStorage.setItem("_TEST_KEY_", 1);
    localStorage.removeItem("_TEST_KEY_");
  } catch {
    delete window["localStorage"];
    window.localStorage = { setItem: () => {
    }, getItem: () => {
    }, removeItem: () => {
    } };
  }
  indexedDB.open("_TEST_DB_", 1).onerror = () => {
    alert("لم نتمكن من فتح قاعدة البيانات! عذرا، لن يعمل التطبيق.");
    Sentry.captureMessage("Failed to open DB");
  };
  if (!location.host.includes("")) alert("ERROR");
  if (location.search.includes("fbclid="))
    location.replace(remove_search_param(location.href, "fbclid"));
  if (navigator.serviceWorker) {
    if (!navigator.serviceWorker.controller) navigator.serviceWorker.register("/sw.js");
    else {
      let refreshing;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          location.reload();
          refreshing = true;
        }
      });
    }
  }
}
init_useragent_info();
add_tab_check();
window._VH_OFFSET = 0;
setTimeout(
  () => {
    window._VH_OFFSET = get_vh_offset();
  },
  100 + (window._useragent.ios ? 500 : 10)
);
if (!document.startViewTransition) document.startViewTransition = (cb) => cb();
const EACH_ITEM_REACTIVE = 1;
const EACH_INDEX_REACTIVE = 1 << 1;
const EACH_IS_CONTROLLED = 1 << 2;
const EACH_IS_ANIMATED = 1 << 3;
const EACH_ITEM_IMMUTABLE = 1 << 4;
const PROPS_IS_IMMUTABLE = 1;
const PROPS_IS_RUNES = 1 << 1;
const PROPS_IS_UPDATED = 1 << 2;
const PROPS_IS_BINDABLE = 1 << 3;
const PROPS_IS_LAZY_INITIAL = 1 << 4;
const TEMPLATE_FRAGMENT = 1;
const TEMPLATE_USE_IMPORT_NODE = 1 << 1;
const UNINITIALIZED = Symbol();
const NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
const NAMESPACE_SVG = "http://www.w3.org/2000/svg";
const ATTACHMENT_KEY = "@attach";
const DEV = false;
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var array_from = Array.from;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var get_descriptors = Object.getOwnPropertyDescriptors;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var is_extensible = Object.isExtensible;
function is_function(thing) {
  return typeof thing === "function";
}
const noop$1 = () => {
};
function run(fn) {
  return fn();
}
function run_all(arr) {
  for (var i2 = 0; i2 < arr.length; i2++) {
    arr[i2]();
  }
}
function to_array(value, n) {
  if (Array.isArray(value)) {
    return value;
  }
  if (!(Symbol.iterator in value)) {
    return Array.from(value);
  }
  const array = [];
  for (const element2 of value) {
    array.push(element2);
    if (array.length === n) break;
  }
  return array;
}
const DERIVED = 1 << 1;
const EFFECT = 1 << 2;
const RENDER_EFFECT = 1 << 3;
const BLOCK_EFFECT = 1 << 4;
const BRANCH_EFFECT = 1 << 5;
const ROOT_EFFECT = 1 << 6;
const BOUNDARY_EFFECT = 1 << 7;
const UNOWNED = 1 << 8;
const DISCONNECTED = 1 << 9;
const CLEAN = 1 << 10;
const DIRTY = 1 << 11;
const MAYBE_DIRTY = 1 << 12;
const INERT = 1 << 13;
const DESTROYED = 1 << 14;
const EFFECT_RAN = 1 << 15;
const EFFECT_TRANSPARENT = 1 << 16;
const LEGACY_DERIVED_PROP = 1 << 17;
const HEAD_EFFECT = 1 << 19;
const EFFECT_HAS_DERIVED = 1 << 20;
const EFFECT_IS_UPDATING = 1 << 21;
const STATE_SYMBOL = Symbol("$state");
const LEGACY_PROPS = Symbol("legacy props");
const LOADING_ATTR_SYMBOL = Symbol("");
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a2, b) {
  return a2 != a2 ? b == b : a2 !== b || a2 !== null && typeof a2 === "object" || typeof a2 === "function";
}
function not_equal(a2, b) {
  return a2 !== b;
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}
function effect_in_teardown(rune) {
  {
    throw new Error(`https://svelte.dev/e/effect_in_teardown`);
  }
}
function effect_in_unowned_derived() {
  {
    throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
  }
}
function effect_orphan(rune) {
  {
    throw new Error(`https://svelte.dev/e/effect_orphan`);
  }
}
function effect_update_depth_exceeded() {
  {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function props_invalid_value(key) {
  {
    throw new Error(`https://svelte.dev/e/props_invalid_value`);
  }
}
function state_descriptors_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
let legacy_mode_flag = false;
let tracing_mode_flag = false;
function enable_legacy_mode_flag() {
  legacy_mode_flag = true;
}
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
let component_context = null;
function set_component_context(context) {
  component_context = context;
}
function getContext(key) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key)
  );
  return result;
}
function setContext(key, context) {
  const context_map = get_or_init_context_map();
  context_map.set(key, context);
  return context;
}
function hasContext(key) {
  const context_map = get_or_init_context_map();
  return context_map.has(key);
}
function getAllContexts() {
  const context_map = get_or_init_context_map();
  return (
    /** @type {T} */
    context_map
  );
}
function push(props, runes = false, fn) {
  var ctx = component_context = {
    p: component_context,
    c: null,
    d: false,
    e: null,
    m: false,
    s: props,
    x: null,
    l: null
  };
  if (legacy_mode_flag && !runes) {
    component_context.l = {
      s: null,
      u: null,
      r1: [],
      r2: source(false)
    };
  }
  teardown(() => {
    ctx.d = true;
  });
}
function pop(component2) {
  const context_stack_item = component_context;
  if (context_stack_item !== null) {
    const component_effects = context_stack_item.e;
    if (component_effects !== null) {
      var previous_effect = active_effect;
      var previous_reaction = active_reaction;
      context_stack_item.e = null;
      try {
        for (var i2 = 0; i2 < component_effects.length; i2++) {
          var component_effect = component_effects[i2];
          set_active_effect(component_effect.effect);
          set_active_reaction(component_effect.reaction);
          effect(component_effect.fn);
        }
      } finally {
        set_active_effect(previous_effect);
        set_active_reaction(previous_reaction);
      }
    }
    component_context = context_stack_item.p;
    context_stack_item.m = true;
  }
  return (
    /** @type {T} */
    {}
  );
}
function is_runes() {
  return !legacy_mode_flag || component_context !== null && component_context.l === null;
}
function get_or_init_context_map(name) {
  if (component_context === null) {
    lifecycle_outside_component();
  }
  return component_context.c ?? (component_context.c = new Map(get_parent_context(component_context) || void 0));
}
function get_parent_context(component_context2) {
  let parent = component_context2.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = /* @__PURE__ */ state(0);
  var reaction = active_reaction;
  var with_parent = (fn) => {
    var previous_reaction = active_reaction;
    set_active_reaction(reaction);
    var result = fn();
    set_active_reaction(previous_reaction);
    return result;
  };
  if (is_proxied_array) {
    sources.set("length", /* @__PURE__ */ state(
      /** @type {any[]} */
      value.length
    ));
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_2, prop2, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s = sources.get(prop2);
        if (s === void 0) {
          s = with_parent(() => {
            var s2 = /* @__PURE__ */ state(descriptor.value);
            sources.set(prop2, s2);
            return s2;
          });
        } else {
          set$1(s, descriptor.value, true);
        }
        return true;
      },
      deleteProperty(target, prop2) {
        var s = sources.get(prop2);
        if (s === void 0) {
          if (prop2 in target) {
            const s2 = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
            sources.set(prop2, s2);
            update_version(version);
          }
        } else {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n < ls.v) {
              set$1(ls, n);
            }
          }
          set$1(s, UNINITIALIZED);
          update_version(version);
        }
        return true;
      },
      get(target, prop2, receiver) {
        var _a2;
        if (prop2 === STATE_SYMBOL) {
          return value;
        }
        var s = sources.get(prop2);
        var exists = prop2 in target;
        if (s === void 0 && (!exists || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
          s = with_parent(() => {
            var p2 = proxy(exists ? target[prop2] : UNINITIALIZED);
            var s2 = /* @__PURE__ */ state(p2);
            return s2;
          });
          sources.set(prop2, s);
        }
        if (s !== void 0) {
          var v2 = get$4(s);
          return v2 === UNINITIALIZED ? void 0 : v2;
        }
        return Reflect.get(target, prop2, receiver);
      },
      getOwnPropertyDescriptor(target, prop2) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor && "value" in descriptor) {
          var s = sources.get(prop2);
          if (s) descriptor.value = get$4(s);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop2);
          var value2 = source2 == null ? void 0 : source2.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop2) {
        var _a2;
        if (prop2 === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop2);
        var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
        if (s !== void 0 || active_effect !== null && (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable))) {
          if (s === void 0) {
            s = with_parent(() => {
              var p2 = has ? proxy(target[prop2]) : UNINITIALIZED;
              var s2 = /* @__PURE__ */ state(p2);
              return s2;
            });
            sources.set(prop2, s);
          }
          var value2 = get$4(s);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop2, value2, receiver) {
        var _a2;
        var s = sources.get(prop2);
        var has = prop2 in target;
        if (is_proxied_array && prop2 === "length") {
          for (var i2 = value2; i2 < /** @type {Source<number>} */
          s.v; i2 += 1) {
            var other_s = sources.get(i2 + "");
            if (other_s !== void 0) {
              set$1(other_s, UNINITIALIZED);
            } else if (i2 in target) {
              other_s = with_parent(() => /* @__PURE__ */ state(UNINITIALIZED));
              sources.set(i2 + "", other_s);
            }
          }
        }
        if (s === void 0) {
          if (!has || ((_a2 = get_descriptor(target, prop2)) == null ? void 0 : _a2.writable)) {
            s = with_parent(() => /* @__PURE__ */ state(void 0));
            set$1(s, proxy(value2));
            sources.set(prop2, s);
          }
        } else {
          has = s.v !== UNINITIALIZED;
          var p2 = with_parent(() => proxy(value2));
          set$1(s, p2);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor == null ? void 0 : descriptor.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n >= ls.v) {
              set$1(ls, n + 1);
            }
          }
          update_version(version);
        }
        return true;
      },
      ownKeys(target) {
        get$4(version);
        var own_keys = Reflect.ownKeys(target).filter((key2) => {
          var source3 = sources.get(key2);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key in target)) {
            own_keys.push(key);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function update_version(signal, d = 1) {
  set$1(signal, signal.v + d);
}
function get_proxied_value(value) {
  try {
    if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
      return value[STATE_SYMBOL];
    }
  } catch {
  }
  return value;
}
function is(a2, b) {
  return Object.is(get_proxied_value(a2), get_proxied_value(b));
}
// @__NO_SIDE_EFFECTS__
function derived(fn) {
  var flags = DERIVED | DIRTY;
  var parent_derived = active_reaction !== null && (active_reaction.f & DERIVED) !== 0 ? (
    /** @type {Derived} */
    active_reaction
  ) : null;
  if (active_effect === null || parent_derived !== null && (parent_derived.f & UNOWNED) !== 0) {
    flags |= UNOWNED;
  } else {
    active_effect.f |= EFFECT_HAS_DERIVED;
  }
  const signal = {
    ctx: component_context,
    deps: null,
    effects: null,
    equals,
    f: flags,
    fn,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: parent_derived ?? active_effect
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function user_derived(fn) {
  const d = /* @__PURE__ */ derived(fn);
  push_reaction_value(d);
  return d;
}
// @__NO_SIDE_EFFECTS__
function derived_safe_equal(fn) {
  const signal = /* @__PURE__ */ derived(fn);
  signal.equals = safe_equals;
  return signal;
}
function destroy_derived_effects(derived2) {
  var effects = derived2.effects;
  if (effects !== null) {
    derived2.effects = null;
    for (var i2 = 0; i2 < effects.length; i2 += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i2]
      );
    }
  }
}
function get_derived_parent_effect(derived2) {
  var parent = derived2.parent;
  while (parent !== null) {
    if ((parent.f & DERIVED) === 0) {
      return (
        /** @type {Effect} */
        parent
      );
    }
    parent = parent.parent;
  }
  return null;
}
function execute_derived(derived2) {
  var value;
  var prev_active_effect = active_effect;
  set_active_effect(get_derived_parent_effect(derived2));
  {
    try {
      destroy_derived_effects(derived2);
      value = update_reaction(derived2);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived2) {
  var value = execute_derived(derived2);
  if (!derived2.equals(value)) {
    derived2.v = value;
    derived2.wv = increment_write_version();
  }
  if (is_destroying_effect) return;
  var status = (skip_reaction || (derived2.f & UNOWNED) !== 0) && derived2.deps !== null ? MAYBE_DIRTY : CLEAN;
  set_signal_status(derived2, status);
}
const old_values = /* @__PURE__ */ new Map();
function source(v2, stack) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: v2,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v2, stack) {
  const s = source(v2);
  push_reaction_value(s);
  return s;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false, trackable = true) {
  var _a2;
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) {
    ((_a2 = component_context.l).s ?? (_a2.s = [])).push(s);
  }
  return s;
}
function set$1(source2, value, should_proxy = false) {
  if (active_reaction !== null && !untracking && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT)) !== 0 && !((reaction_sources == null ? void 0 : reaction_sources[1].includes(source2)) && reaction_sources[0] === active_reaction)) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  return internal_set(source2, new_value);
}
function internal_set(source2, value) {
  if (!source2.equals(value)) {
    var old_value = source2.v;
    if (is_destroying_effect) {
      old_values.set(source2, value);
    } else {
      old_values.set(source2, old_value);
    }
    source2.v = value;
    if ((source2.f & DERIVED) !== 0) {
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(
          /** @type {Derived} */
          source2
        );
      }
      set_signal_status(source2, (source2.f & UNOWNED) === 0 ? CLEAN : MAYBE_DIRTY);
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY);
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
  }
  return value;
}
function mark_reactions(signal, status) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length = reactions.length;
  for (var i2 = 0; i2 < length; i2++) {
    var reaction = reactions[i2];
    var flags = reaction.f;
    if ((flags & DIRTY) !== 0) continue;
    if (!runes && reaction === active_effect) continue;
    set_signal_status(reaction, status);
    if ((flags & (CLEAN | UNOWNED)) !== 0) {
      if ((flags & DERIVED) !== 0) {
        mark_reactions(
          /** @type {Derived} */
          reaction,
          MAYBE_DIRTY
        );
      } else {
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
function select_multiple_invalid_value() {
  {
    console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);
  }
}
let hydrating = false;
var $window;
var is_firefox;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  is_firefox = /Firefox/.test(navigator.userAgent);
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype.__click = void 0;
    element_prototype.__className = void 0;
    element_prototype.__attributes = null;
    element_prototype.__style = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype.__t = void 0;
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return first_child_getter.call(node);
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return next_sibling_getter.call(node);
}
function child(node, is_text) {
  {
    return /* @__PURE__ */ get_first_child(node);
  }
}
function first_child(fragment, is_text) {
  {
    var first = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ get_first_child(
        /** @type {Node} */
        fragment
      )
    );
    if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
    return first;
  }
}
function sibling(node, count = 1, is_text = false) {
  let next_sibling = node;
  while (count--) {
    next_sibling = /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(next_sibling);
  }
  {
    return next_sibling;
  }
}
function clear_text_content(node) {
  node.textContent = "";
}
function validate_effect(rune) {
  if (active_effect === null && active_reaction === null) {
    effect_orphan();
  }
  if (active_reaction !== null && (active_reaction.f & UNOWNED) !== 0 && active_effect === null) {
    effect_in_unowned_derived();
  }
  if (is_destroying_effect) {
    effect_in_teardown();
  }
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn, sync, push2 = true) {
  var parent = active_effect;
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: type | DIRTY,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (sync) {
    try {
      update_effect(effect2);
      effect2.f |= EFFECT_RAN;
    } catch (e) {
      destroy_effect(effect2);
      throw e;
    }
  } else if (fn !== null) {
    schedule_effect(effect2);
  }
  var inert = sync && effect2.deps === null && effect2.first === null && effect2.nodes_start === null && effect2.teardown === null && (effect2.f & (EFFECT_HAS_DERIVED | BOUNDARY_EFFECT)) === 0;
  if (!inert && push2) {
    if (parent !== null) {
      push_effect(effect2, parent);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0) {
      var derived2 = (
        /** @type {Derived} */
        active_reaction
      );
      (derived2.effects ?? (derived2.effects = [])).push(effect2);
    }
  }
  return effect2;
}
function effect_tracking() {
  return active_reaction !== null && !untracking;
}
function teardown(fn) {
  const effect2 = create_effect(RENDER_EFFECT, null, false);
  set_signal_status(effect2, CLEAN);
  effect2.teardown = fn;
  return effect2;
}
function user_effect(fn) {
  validate_effect();
  var defer = active_effect !== null && (active_effect.f & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.m;
  if (defer) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    (context.e ?? (context.e = [])).push({
      fn,
      effect: active_effect,
      reaction: active_reaction
    });
  } else {
    var signal = effect(fn);
    return signal;
  }
}
function user_pre_effect(fn) {
  validate_effect();
  return render_effect(fn);
}
function effect_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return () => {
    destroy_effect(effect2);
  };
}
function component_root(fn) {
  const effect2 = create_effect(ROOT_EFFECT, fn, true);
  return (options = {}) => {
    return new Promise((fulfil) => {
      if (options.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn, false);
}
function render_effect(fn) {
  return create_effect(RENDER_EFFECT, fn, true);
}
function template_effect(fn, thunks = [], d = derived) {
  const deriveds = thunks.map(d);
  return block(() => fn(...deriveds.map(get$4)));
}
function block(fn, flags = 0) {
  return create_effect(RENDER_EFFECT | BLOCK_EFFECT | flags, fn, true);
}
function branch(fn, push2 = true) {
  return create_effect(RENDER_EFFECT | BRANCH_EFFECT, fn, true, push2);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    var next = effect2.next;
    if ((effect2.f & ROOT_EFFECT) !== 0) {
      effect2.parent = null;
    } else {
      destroy_effect(effect2, remove_dom);
    }
    effect2 = next;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes_start !== null && effect2.nodes_end !== null) {
    remove_effect_dom(
      effect2.nodes_start,
      /** @type {TemplateNode} */
      effect2.nodes_end
    );
    removed = true;
  }
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  set_signal_status(effect2, DESTROYED);
  var transitions = effect2.transitions;
  if (transitions !== null) {
    for (const transition of transitions) {
      transition.stop();
    }
  }
  execute_effect_teardown(effect2);
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes_start = effect2.nodes_end = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next = node === end ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    node.remove();
    node = next;
  }
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next = effect2.next;
  if (prev !== null) prev.next = next;
  if (next !== null) next.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  run_out_transitions(transitions, () => {
    destroy_effect(effect2);
    if (callback) callback();
  });
}
function run_out_transitions(transitions, fn) {
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition of transitions) {
      transition.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  if (effect2.transitions !== null) {
    for (const transition of effect2.transitions) {
      if (transition.is_global || local) {
        transitions.push(transition);
      }
    }
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    pause_children(child2, transitions, transparent ? local : false);
    child2 = sibling2;
  }
}
function resume_effect(effect2) {
  resume_children(effect2, true);
}
function resume_children(effect2, local) {
  if ((effect2.f & INERT) === 0) return;
  effect2.f ^= INERT;
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    resume_children(child2, transparent ? local : false);
    child2 = sibling2;
  }
  if (effect2.transitions !== null) {
    for (const transition of effect2.transitions) {
      if (transition.is_global || local) {
        transition.in();
      }
    }
  }
}
let micro_tasks = [];
let idle_tasks = [];
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function run_idle_tasks() {
  var tasks = idle_tasks;
  idle_tasks = [];
  run_all(tasks);
}
function queue_micro_task(fn) {
  if (micro_tasks.length === 0) {
    queueMicrotask(run_micro_tasks);
  }
  micro_tasks.push(fn);
}
function flush_tasks() {
  if (micro_tasks.length > 0) {
    run_micro_tasks();
  }
  if (idle_tasks.length > 0) {
    run_idle_tasks();
  }
}
function handle_error(error) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if ((effect2.f & EFFECT_RAN) === 0) {
    if ((effect2.f & BOUNDARY_EFFECT) === 0) {
      throw error;
    }
    effect2.fn(error);
  } else {
    invoke_error_boundary(error, effect2);
  }
}
function invoke_error_boundary(error, effect2) {
  while (effect2 !== null) {
    if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
      try {
        effect2.fn(error);
        return;
      } catch {
      }
    }
    effect2 = effect2.parent;
  }
  throw error;
}
let is_flushing = false;
let last_scheduled_effect = null;
let is_updating_effect = false;
let is_destroying_effect = false;
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
let queued_root_effects = [];
let dev_effect_stack = [];
let active_reaction = null;
let untracking = false;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
let active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
let reaction_sources = null;
function push_reaction_value(value) {
  if (active_reaction !== null && active_reaction.f & EFFECT_IS_UPDATING) {
    if (reaction_sources === null) {
      reaction_sources = [active_reaction, [value]];
    } else {
      reaction_sources[1].push(value);
    }
  }
}
let new_deps = null;
let skipped_deps = 0;
let untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
let write_version = 1;
let read_version = 0;
let skip_reaction = false;
function increment_write_version() {
  return ++write_version;
}
function check_dirtiness(reaction) {
  var _a2;
  var flags = reaction.f;
  if ((flags & DIRTY) !== 0) {
    return true;
  }
  if ((flags & MAYBE_DIRTY) !== 0) {
    var dependencies = reaction.deps;
    var is_unowned = (flags & UNOWNED) !== 0;
    if (dependencies !== null) {
      var i2;
      var dependency;
      var is_disconnected = (flags & DISCONNECTED) !== 0;
      var is_unowned_connected = is_unowned && active_effect !== null && !skip_reaction;
      var length = dependencies.length;
      if (is_disconnected || is_unowned_connected) {
        var derived2 = (
          /** @type {Derived} */
          reaction
        );
        var parent = derived2.parent;
        for (i2 = 0; i2 < length; i2++) {
          dependency = dependencies[i2];
          if (is_disconnected || !((_a2 = dependency == null ? void 0 : dependency.reactions) == null ? void 0 : _a2.includes(derived2))) {
            (dependency.reactions ?? (dependency.reactions = [])).push(derived2);
          }
        }
        if (is_disconnected) {
          derived2.f ^= DISCONNECTED;
        }
        if (is_unowned_connected && parent !== null && (parent.f & UNOWNED) === 0) {
          derived2.f ^= UNOWNED;
        }
      }
      for (i2 = 0; i2 < length; i2++) {
        dependency = dependencies[i2];
        if (check_dirtiness(
          /** @type {Derived} */
          dependency
        )) {
          update_derived(
            /** @type {Derived} */
            dependency
          );
        }
        if (dependency.wv > reaction.wv) {
          return true;
        }
      }
    }
    if (!is_unowned || active_effect !== null && !skip_reaction) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect2, root2 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  for (var i2 = 0; i2 < reactions.length; i2++) {
    var reaction = reactions[i2];
    if ((reaction_sources == null ? void 0 : reaction_sources[1].includes(signal)) && reaction_sources[0] === active_reaction) continue;
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        false
      );
    } else if (effect2 === reaction) {
      if (root2) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var _a2;
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_skip_reaction = skip_reaction;
  var previous_reaction_sources = reaction_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var flags = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  skip_reaction = (flags & UNOWNED) !== 0 && (untracking || !is_updating_effect || active_reaction === null);
  active_reaction = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  reaction_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  read_version++;
  reaction.f |= EFFECT_IS_UPDATING;
  try {
    var result = (
      /** @type {Function} */
      (0, reaction.fn)()
    );
    var deps = reaction.deps;
    if (new_deps !== null) {
      var i2;
      remove_reactions(reaction, skipped_deps);
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i2 = 0; i2 < new_deps.length; i2++) {
          deps[skipped_deps + i2] = new_deps[i2];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (!skip_reaction) {
        for (i2 = skipped_deps; i2 < deps.length; i2++) {
          ((_a2 = deps[i2]).reactions ?? (_a2.reactions = [])).push(reaction);
        }
      }
    } else if (deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i2 = 0; i2 < /** @type {Source[]} */
      untracked_writes.length; i2++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i2],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    return result;
  } catch (error) {
    handle_error(error);
  } finally {
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    skip_reaction = previous_skip_reaction;
    reaction_sources = previous_reaction_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    reaction.f ^= EFFECT_IS_UPDATING;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index2 = index_of.call(reactions, signal);
    if (index2 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index2] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !new_deps.includes(dependency))) {
    set_signal_status(dependency, MAYBE_DIRTY);
    if ((dependency.f & (UNOWNED | DISCONNECTED)) === 0) {
      dependency.f ^= DISCONNECTED;
    }
    destroy_derived_effects(
      /** @type {Derived} **/
      dependency
    );
    remove_reactions(
      /** @type {Derived} **/
      dependency,
      0
    );
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i2 = start_index; i2 < dependencies.length; i2++) {
    remove_reaction(signal, dependencies[i2]);
  }
}
function update_effect(effect2) {
  var flags = effect2.f;
  if ((flags & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var was_updating_effect = is_updating_effect;
  active_effect = effect2;
  is_updating_effect = true;
  try {
    if ((flags & BLOCK_EFFECT) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    var dep;
    if (DEV && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) ;
    if (DEV) ;
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
  }
}
function infinite_loop_guard() {
  try {
    effect_update_depth_exceeded();
  } catch (error) {
    if (last_scheduled_effect !== null) {
      {
        invoke_error_boundary(error, last_scheduled_effect);
      }
    } else {
      throw error;
    }
  }
}
function flush_queued_root_effects() {
  var was_updating_effect = is_updating_effect;
  try {
    var flush_count = 0;
    is_updating_effect = true;
    while (queued_root_effects.length > 0) {
      if (flush_count++ > 1e3) {
        infinite_loop_guard();
      }
      var root_effects = queued_root_effects;
      var length = root_effects.length;
      queued_root_effects = [];
      for (var i2 = 0; i2 < length; i2++) {
        var collected_effects = process_effects(root_effects[i2]);
        flush_queued_effects(collected_effects);
      }
      old_values.clear();
    }
  } finally {
    is_flushing = false;
    is_updating_effect = was_updating_effect;
    last_scheduled_effect = null;
  }
}
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  for (var i2 = 0; i2 < length; i2++) {
    var effect2 = effects[i2];
    if ((effect2.f & (DESTROYED | INERT)) === 0) {
      if (check_dirtiness(effect2)) {
        update_effect(effect2);
        if (effect2.deps === null && effect2.first === null && effect2.nodes_start === null) {
          if (effect2.teardown === null) {
            unlink_effect(effect2);
          } else {
            effect2.fn = null;
          }
        }
      }
    }
  }
}
function schedule_effect(signal) {
  if (!is_flushing) {
    is_flushing = true;
    queueMicrotask(flush_queued_root_effects);
  }
  var effect2 = last_scheduled_effect = signal;
  while (effect2.parent !== null) {
    effect2 = effect2.parent;
    var flags = effect2.f;
    if ((flags & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
      if ((flags & CLEAN) === 0) return;
      effect2.f ^= CLEAN;
    }
  }
  queued_root_effects.push(effect2);
}
function process_effects(root2) {
  var effects = [];
  var effect2 = root2;
  while (effect2 !== null) {
    var flags = effect2.f;
    var is_branch = (flags & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
    var is_skippable_branch = is_branch && (flags & CLEAN) !== 0;
    if (!is_skippable_branch && (flags & INERT) === 0) {
      if ((flags & EFFECT) !== 0) {
        effects.push(effect2);
      } else if (is_branch) {
        effect2.f ^= CLEAN;
      } else {
        if (check_dirtiness(effect2)) {
          update_effect(effect2);
        }
      }
      var child2 = effect2.first;
      if (child2 !== null) {
        effect2 = child2;
        continue;
      }
    }
    var parent = effect2.parent;
    effect2 = effect2.next;
    while (effect2 === null && parent !== null) {
      effect2 = parent.next;
      parent = parent.parent;
    }
  }
  return effects;
}
function flushSync(fn) {
  var result;
  while (true) {
    flush_tasks();
    if (queued_root_effects.length === 0) {
      is_flushing = false;
      last_scheduled_effect = null;
      return (
        /** @type {T} */
        result
      );
    }
    is_flushing = true;
    flush_queued_root_effects();
  }
}
async function tick() {
  await Promise.resolve();
  flushSync();
}
function get$4(signal) {
  var flags = signal.f;
  var is_derived = (flags & DERIVED) !== 0;
  if (active_reaction !== null && !untracking) {
    if (!(reaction_sources == null ? void 0 : reaction_sources[1].includes(signal)) || reaction_sources[0] !== active_reaction) {
      var deps = active_reaction.deps;
      if (signal.rv < read_version) {
        signal.rv = read_version;
        if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
          skipped_deps++;
        } else if (new_deps === null) {
          new_deps = [signal];
        } else if (!skip_reaction || !new_deps.includes(signal)) {
          new_deps.push(signal);
        }
      }
    }
  } else if (is_derived && /** @type {Derived} */
  signal.deps === null && /** @type {Derived} */
  signal.effects === null) {
    var derived2 = (
      /** @type {Derived} */
      signal
    );
    var parent = derived2.parent;
    if (parent !== null && (parent.f & UNOWNED) === 0) {
      derived2.f ^= UNOWNED;
    }
  }
  if (is_derived) {
    derived2 = /** @type {Derived} */
    signal;
    if (check_dirtiness(derived2)) {
      update_derived(derived2);
    }
  }
  if (is_destroying_effect && old_values.has(signal)) {
    return old_values.get(signal);
  }
  return signal.v;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
const STATUS_MASK = -7169;
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function deep_read_state(value) {
  if (typeof value !== "object" || !value || value instanceof EventTarget) {
    return;
  }
  if (STATE_SYMBOL in value) {
    deep_read(value);
  } else if (!Array.isArray(value)) {
    for (let key in value) {
      const prop2 = value[key];
      if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
        deep_read(prop2);
      }
    }
  }
}
function deep_read(value, visited = /* @__PURE__ */ new Set()) {
  if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
  !(value instanceof EventTarget) && !visited.has(value)) {
    visited.add(value);
    if (value instanceof Date) {
      value.getTime();
    }
    for (let key in value) {
      try {
        deep_read(value[key], visited);
      } catch (e) {
      }
    }
    const proto = get_prototype_of(value);
    if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
      const descriptors = get_descriptors(proto);
      for (let key in descriptors) {
        const get2 = descriptors[key].get;
        if (get2) {
          try {
            get2.call(value);
          } catch (e) {
          }
        }
      }
    }
  }
}
function autofocus(dom, value) {
  if (value) {
    const body = document.body;
    dom.autofocus = true;
    queue_micro_task(() => {
      if (document.activeElement === body) {
        dom.focus();
      }
    });
  }
}
let listening_to_form_reset = false;
function add_form_reset_listener() {
  if (!listening_to_form_reset) {
    listening_to_form_reset = true;
    document.addEventListener(
      "reset",
      (evt) => {
        Promise.resolve().then(() => {
          var _a2;
          if (!evt.defaultPrevented) {
            for (
              const e of
              /**@type {HTMLFormElement} */
              evt.target.elements
            ) {
              (_a2 = e.__on_r) == null ? void 0 : _a2.call(e);
            }
          }
        });
      },
      // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
      { capture: true }
    );
  }
}
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function listen_to_event_and_reset_event(element2, event2, handler, on_reset = handler) {
  element2.addEventListener(event2, () => without_reactive_context(handler));
  const prev = element2.__on_r;
  if (prev) {
    element2.__on_r = () => {
      prev();
      on_reset(true);
    };
  } else {
    element2.__on_r = () => on_reset(true);
  }
  add_form_reset_listener();
}
const all_registered_events = /* @__PURE__ */ new Set();
const root_event_handles = /* @__PURE__ */ new Set();
function create_event(event_name, dom, handler, options = {}) {
  function target_handler(event2) {
    if (!options.capture) {
      handle_event_propagation.call(dom, event2);
    }
    if (!event2.cancelBubble) {
      return without_reactive_context(() => {
        return handler == null ? void 0 : handler.call(this, event2);
      });
    }
  }
  if (event_name.startsWith("pointer") || event_name.startsWith("touch") || event_name === "wheel") {
    queue_micro_task(() => {
      dom.addEventListener(event_name, target_handler, options);
    });
  } else {
    dom.addEventListener(event_name, target_handler, options);
  }
  return target_handler;
}
function on(element2, type, handler, options = {}) {
  var target_handler = create_event(type, element2, handler, options);
  return () => {
    element2.removeEventListener(type, target_handler, options);
  };
}
function event(event_name, dom, handler, capture, passive) {
  var options = { capture, passive };
  var target_handler = create_event(event_name, dom, handler, options);
  if (dom === document.body || // @ts-ignore
  dom === window || // @ts-ignore
  dom === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  dom instanceof HTMLMediaElement) {
    teardown(() => {
      dom.removeEventListener(event_name, target_handler, options);
    });
  }
}
function delegate(events) {
  for (var i2 = 0; i2 < events.length; i2++) {
    all_registered_events.add(events[i2]);
  }
  for (var fn of root_event_handles) {
    fn(events);
  }
}
function handle_event_propagation(event2) {
  var _a2;
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event2.type;
  var path = ((_a2 = event2.composedPath) == null ? void 0 : _a2.call(event2)) || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event2.target
  );
  var path_idx = 0;
  var handled_at = event2.__root;
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event2.__root = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event2.target;
  if (current_target === handler_element) return;
  define_property(event2, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      var parent_element = current_target.assignedSlot || current_target.parentNode || /** @type {any} */
      current_target.host || null;
      try {
        var delegated = current_target["__" + event_name];
        if (delegated != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event2.target === current_target)) {
          if (is_array(delegated)) {
            var [fn, ...data] = delegated;
            fn.apply(current_target, [event2, ...data]);
          } else {
            delegated.call(current_target, event2);
          }
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event2.cancelBubble || parent_element === handler_element || parent_element === null) {
        break;
      }
      current_target = parent_element;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event2.__root = handler_element;
    delete event2.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function head(render_fn) {
  var anchor;
  {
    anchor = document.head.appendChild(create_text());
  }
  try {
    block(() => render_fn(anchor), HEAD_EFFECT);
  } finally {
  }
}
function create_fragment_from_html(html2) {
  var elem = document.createElement("template");
  elem.innerHTML = html2.replaceAll("<!>", "<!---->");
  return elem.content;
}
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes_start === null) {
    effect2.nodes_start = start;
    effect2.nodes_end = end;
  }
}
// @__NO_SIDE_EFFECTS__
function from_html(content, flags) {
  var is_fragment = (flags & TEMPLATE_FRAGMENT) !== 0;
  var use_import_node = (flags & TEMPLATE_USE_IMPORT_NODE) !== 0;
  var node;
  var has_start = !content.startsWith("<!>");
  return () => {
    if (node === void 0) {
      node = create_fragment_from_html(has_start ? content : "<!>" + content);
      if (!is_fragment) node = /** @type {Node} */
      /* @__PURE__ */ get_first_child(node);
    }
    var clone = (
      /** @type {TemplateNode} */
      use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
    );
    if (is_fragment) {
      var start = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ get_first_child(clone)
      );
      var end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start, end);
    } else {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
// @__NO_SIDE_EFFECTS__
function from_namespace(content, flags, ns = "svg") {
  var has_start = !content.startsWith("<!>");
  var wrapped = `<${ns}>${has_start ? content : "<!>" + content}</${ns}>`;
  var node;
  return () => {
    if (!node) {
      var fragment = (
        /** @type {DocumentFragment} */
        create_fragment_from_html(wrapped)
      );
      var root2 = (
        /** @type {Element} */
        /* @__PURE__ */ get_first_child(fragment)
      );
      {
        node = /** @type {Element} */
        /* @__PURE__ */ get_first_child(root2);
      }
    }
    var clone = (
      /** @type {TemplateNode} */
      node.cloneNode(true)
    );
    {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
// @__NO_SIDE_EFFECTS__
function from_svg(content, flags) {
  return /* @__PURE__ */ from_namespace(content, flags, "svg");
}
function text(value = "") {
  {
    var t = create_text(value + "");
    assign_nodes(t, t);
    return t;
  }
}
function comment() {
  var frag = document.createDocumentFragment();
  var start = document.createComment("");
  var anchor = create_text();
  frag.append(start, anchor);
  assign_nodes(start, anchor);
  return frag;
}
function append(anchor, dom) {
  if (anchor === null) {
    return;
  }
  anchor.before(
    /** @type {Node} */
    dom
  );
}
function props_id() {
  var _a2;
  (_a2 = window.__svelte ?? (window.__svelte = {})).uid ?? (_a2.uid = 1);
  return `c${window.__svelte.uid++}`;
}
function is_capture_event(name) {
  return name.endsWith("capture") && name !== "gotpointercapture" && name !== "lostpointercapture";
}
const DELEGATED_EVENTS = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function is_delegated(event_name) {
  return DELEGATED_EVENTS.includes(event_name);
}
const ATTRIBUTE_ALIASES = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function normalize_attribute(name) {
  name = name.toLowerCase();
  return ATTRIBUTE_ALIASES[name] ?? name;
}
const PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
function set_text(text2, value) {
  var str = value == null ? "" : typeof value === "object" ? value + "" : value;
  if (str !== (text2.__t ?? (text2.__t = text2.nodeValue))) {
    text2.__t = str;
    text2.nodeValue = str + "";
  }
}
function mount(component2, options) {
  return _mount(component2, options);
}
const document_listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true }) {
  init_operations();
  var registered_events = /* @__PURE__ */ new Set();
  var event_handle = (events2) => {
    for (var i2 = 0; i2 < events2.length; i2++) {
      var event_name = events2[i2];
      if (registered_events.has(event_name)) continue;
      registered_events.add(event_name);
      var passive = is_passive_event(event_name);
      target.addEventListener(event_name, handle_event_propagation, { passive });
      var n = document_listeners.get(event_name);
      if (n === void 0) {
        document.addEventListener(event_name, handle_event_propagation, { passive });
        document_listeners.set(event_name, 1);
      } else {
        document_listeners.set(event_name, n + 1);
      }
    }
  };
  event_handle(array_from(all_registered_events));
  root_event_handles.add(event_handle);
  var component2 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    branch(() => {
      if (context) {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        ctx.c = context;
      }
      if (events) {
        props.$$events = events;
      }
      component2 = Component(anchor_node, props) || {};
      if (context) {
        pop();
      }
    });
    return () => {
      var _a2;
      for (var event_name of registered_events) {
        target.removeEventListener(event_name, handle_event_propagation);
        var n = (
          /** @type {number} */
          document_listeners.get(event_name)
        );
        if (--n === 0) {
          document.removeEventListener(event_name, handle_event_propagation);
          document_listeners.delete(event_name);
        } else {
          document_listeners.set(event_name, n);
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        (_a2 = anchor_node.parentNode) == null ? void 0 : _a2.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component2, unmount2);
  return component2;
}
let mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component2, options) {
  const fn = mounted_components.get(component2);
  if (fn) {
    mounted_components.delete(component2);
    return fn(options);
  }
  return Promise.resolve();
}
function snippet(node, get_snippet, ...args) {
  var anchor = node;
  var snippet2 = noop$1;
  var snippet_effect;
  block(() => {
    if (snippet2 === (snippet2 = get_snippet())) return;
    if (snippet_effect) {
      destroy_effect(snippet_effect);
      snippet_effect = null;
    }
    snippet_effect = branch(() => (
      /** @type {SnippetFn} */
      snippet2(anchor, ...args)
    ));
  }, EFFECT_TRANSPARENT);
}
function onMount(fn) {
  if (component_context === null) {
    lifecycle_outside_component();
  }
  if (legacy_mode_flag && component_context.l !== null) {
    init_update_callbacks(component_context).m.push(fn);
  } else {
    user_effect(() => {
      const cleanup = untrack(fn);
      if (typeof cleanup === "function") return (
        /** @type {() => void} */
        cleanup
      );
    });
  }
}
function init_update_callbacks(context) {
  var l2 = (
    /** @type {ComponentContextLegacy} */
    context.l
  );
  return l2.u ?? (l2.u = { a: [], b: [], m: [] });
}
function createAttachmentKey() {
  return Symbol(ATTACHMENT_KEY);
}
function if_block(node, fn, [root_index, hydrate_index] = [0, 0]) {
  var anchor = node;
  var consequent_effect = null;
  var alternate_effect = null;
  var condition = UNINITIALIZED;
  var flags = root_index > 0 ? EFFECT_TRANSPARENT : 0;
  var has_branch = false;
  const set_branch = (fn2, flag = true) => {
    has_branch = true;
    update_branch(flag, fn2);
  };
  const update_branch = (new_condition, fn2) => {
    if (condition === (condition = new_condition)) return;
    if (condition) {
      if (consequent_effect) {
        resume_effect(consequent_effect);
      } else if (fn2) {
        consequent_effect = branch(() => fn2(anchor));
      }
      if (alternate_effect) {
        pause_effect(alternate_effect, () => {
          alternate_effect = null;
        });
      }
    } else {
      if (alternate_effect) {
        resume_effect(alternate_effect);
      } else if (fn2) {
        alternate_effect = branch(() => fn2(anchor, [root_index + 1, hydrate_index]));
      }
      if (consequent_effect) {
        pause_effect(consequent_effect, () => {
          consequent_effect = null;
        });
      }
    }
  };
  block(() => {
    has_branch = false;
    fn(set_branch);
    if (!has_branch) {
      update_branch(null, null);
    }
  }, flags);
}
function key_block(node, get_key, render_fn) {
  var anchor = node;
  var key = UNINITIALIZED;
  var effect2;
  var changed = is_runes() ? not_equal : safe_not_equal;
  block(() => {
    if (changed(key, key = get_key())) {
      if (effect2) {
        pause_effect(effect2);
      }
      effect2 = branch(() => render_fn(anchor));
    }
  });
}
let current_each_item = null;
function set_current_each_item(item) {
  current_each_item = item;
}
function index(_2, i2) {
  return i2;
}
function pause_effects(state2, items, controlled_anchor, items_map) {
  var transitions = [];
  var length = items.length;
  for (var i2 = 0; i2 < length; i2++) {
    pause_children(items[i2].e, transitions, true);
  }
  var is_controlled = length > 0 && transitions.length === 0 && controlled_anchor !== null;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      /** @type {Element} */
      controlled_anchor.parentNode
    );
    clear_text_content(parent_node);
    parent_node.append(
      /** @type {Element} */
      controlled_anchor
    );
    items_map.clear();
    link(state2, items[0].prev, items[length - 1].next);
  }
  run_out_transitions(transitions, () => {
    for (var i3 = 0; i3 < length; i3++) {
      var item = items[i3];
      if (!is_controlled) {
        items_map.delete(item.k);
        link(state2, item.prev, item.next);
      }
      destroy_effect(item.e, !is_controlled);
    }
  });
}
function each(node, flags, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var state2 = { flags, items: /* @__PURE__ */ new Map(), first: null };
  var is_controlled = (flags & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = parent_node.appendChild(create_text());
  }
  var fallback = null;
  var was_empty = false;
  var each_array = /* @__PURE__ */ derived_safe_equal(() => {
    var collection = get_collection();
    return is_array(collection) ? collection : collection == null ? [] : array_from(collection);
  });
  block(() => {
    var array = get$4(each_array);
    var length = array.length;
    if (was_empty && length === 0) {
      return;
    }
    was_empty = length === 0;
    {
      reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection);
    }
    if (fallback_fn !== null) {
      if (length === 0) {
        if (fallback) {
          resume_effect(fallback);
        } else {
          fallback = branch(() => fallback_fn(anchor));
        }
      } else if (fallback !== null) {
        pause_effect(fallback, () => {
          fallback = null;
        });
      }
    }
    get$4(each_array);
  });
}
function reconcile(array, state2, anchor, render_fn, flags, get_key, get_collection) {
  var _a2, _b2, _c2, _d;
  var is_animated = (flags & EACH_IS_ANIMATED) !== 0;
  var should_update = (flags & (EACH_ITEM_REACTIVE | EACH_INDEX_REACTIVE)) !== 0;
  var length = array.length;
  var items = state2.items;
  var first = state2.first;
  var current = first;
  var seen;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key;
  var item;
  var i2;
  if (is_animated) {
    for (i2 = 0; i2 < length; i2 += 1) {
      value = array[i2];
      key = get_key(value, i2);
      item = items.get(key);
      if (item !== void 0) {
        (_a2 = item.a) == null ? void 0 : _a2.measure();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).add(item);
      }
    }
  }
  for (i2 = 0; i2 < length; i2 += 1) {
    value = array[i2];
    key = get_key(value, i2);
    item = items.get(key);
    if (item === void 0) {
      var child_anchor = current ? (
        /** @type {TemplateNode} */
        current.e.nodes_start
      ) : anchor;
      prev = create_item(
        child_anchor,
        state2,
        prev,
        prev === null ? state2.first : prev.next,
        value,
        key,
        i2,
        render_fn,
        flags,
        get_collection
      );
      items.set(key, prev);
      matched = [];
      stashed = [];
      current = prev.next;
      continue;
    }
    if (should_update) {
      update_item(item, value, i2, flags);
    }
    if ((item.e.f & INERT) !== 0) {
      resume_effect(item.e);
      if (is_animated) {
        (_b2 = item.a) == null ? void 0 : _b2.unfix();
        (to_animate ?? (to_animate = /* @__PURE__ */ new Set())).delete(item);
      }
    }
    if (item !== current) {
      if (seen !== void 0 && seen.has(item)) {
        if (matched.length < stashed.length) {
          var start = stashed[0];
          var j;
          prev = start.prev;
          var a2 = matched[0];
          var b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1) {
            move(matched[j], start, anchor);
          }
          for (j = 0; j < stashed.length; j += 1) {
            seen.delete(stashed[j]);
          }
          link(state2, a2.prev, b.next);
          link(state2, prev, a2);
          link(state2, b, start);
          current = start;
          prev = b;
          i2 -= 1;
          matched = [];
          stashed = [];
        } else {
          seen.delete(item);
          move(item, current, anchor);
          link(state2, item.prev, item.next);
          link(state2, item, prev === null ? state2.first : prev.next);
          link(state2, prev, item);
          prev = item;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current.k !== key) {
        if ((current.e.f & INERT) === 0) {
          (seen ?? (seen = /* @__PURE__ */ new Set())).add(current);
        }
        stashed.push(current);
        current = current.next;
      }
      if (current === null) {
        continue;
      }
      item = current;
    }
    matched.push(item);
    prev = item;
    current = item.next;
  }
  if (current !== null || seen !== void 0) {
    var to_destroy = seen === void 0 ? [] : array_from(seen);
    while (current !== null) {
      if ((current.e.f & INERT) === 0) {
        to_destroy.push(current);
      }
      current = current.next;
    }
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i2 = 0; i2 < destroy_length; i2 += 1) {
          (_c2 = to_destroy[i2].a) == null ? void 0 : _c2.measure();
        }
        for (i2 = 0; i2 < destroy_length; i2 += 1) {
          (_d = to_destroy[i2].a) == null ? void 0 : _d.fix();
        }
      }
      pause_effects(state2, to_destroy, controlled_anchor, items);
    }
  }
  if (is_animated) {
    queue_micro_task(() => {
      var _a3;
      if (to_animate === void 0) return;
      for (item of to_animate) {
        (_a3 = item.a) == null ? void 0 : _a3.apply();
      }
    });
  }
  active_effect.first = state2.first && state2.first.e;
  active_effect.last = prev && prev.e;
}
function update_item(item, value, index2, type) {
  if ((type & EACH_ITEM_REACTIVE) !== 0) {
    internal_set(item.v, value);
  }
  if ((type & EACH_INDEX_REACTIVE) !== 0) {
    internal_set(
      /** @type {Value<number>} */
      item.i,
      index2
    );
  } else {
    item.i = index2;
  }
}
function create_item(anchor, state2, prev, next, value, key, index2, render_fn, flags, get_collection) {
  var previous_each_item = current_each_item;
  var reactive = (flags & EACH_ITEM_REACTIVE) !== 0;
  var mutable = (flags & EACH_ITEM_IMMUTABLE) === 0;
  var v2 = reactive ? mutable ? /* @__PURE__ */ mutable_source(value, false, false) : source(value) : value;
  var i2 = (flags & EACH_INDEX_REACTIVE) === 0 ? index2 : source(index2);
  var item = {
    i: i2,
    v: v2,
    k: key,
    a: null,
    // @ts-expect-error
    e: null,
    prev,
    next
  };
  current_each_item = item;
  try {
    item.e = branch(() => render_fn(anchor, v2, i2, get_collection), hydrating);
    item.e.prev = prev && prev.e;
    item.e.next = next && next.e;
    if (prev === null) {
      state2.first = item;
    } else {
      prev.next = item;
      prev.e.next = item.e;
    }
    if (next !== null) {
      next.prev = item;
      next.e.prev = item.e;
    }
    return item;
  } finally {
    current_each_item = previous_each_item;
  }
}
function move(item, next, anchor) {
  var end = item.next ? (
    /** @type {TemplateNode} */
    item.next.e.nodes_start
  ) : anchor;
  var dest = next ? (
    /** @type {TemplateNode} */
    next.e.nodes_start
  ) : anchor;
  var node = (
    /** @type {TemplateNode} */
    item.e.nodes_start
  );
  while (node !== end) {
    var next_node = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_next_sibling(node)
    );
    dest.before(node);
    node = next_node;
  }
}
function link(state2, prev, next) {
  if (prev === null) {
    state2.first = next;
  } else {
    prev.next = next;
    prev.e.next = next && next.e;
  }
  if (next !== null) {
    next.prev = prev;
    next.e.prev = prev && prev.e;
  }
}
function html(node, get_value, svg = false, mathml = false, skip_warning = false) {
  var anchor = node;
  var value = "";
  template_effect(() => {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (value === (value = get_value() ?? "")) {
      return;
    }
    if (effect2.nodes_start !== null) {
      remove_effect_dom(
        effect2.nodes_start,
        /** @type {TemplateNode} */
        effect2.nodes_end
      );
      effect2.nodes_start = effect2.nodes_end = null;
    }
    if (value === "") return;
    var html2 = value + "";
    if (svg) html2 = `<svg>${html2}</svg>`;
    else if (mathml) html2 = `<math>${html2}</math>`;
    var node2 = create_fragment_from_html(html2);
    if (svg || mathml) {
      node2 = /** @type {Element} */
      /* @__PURE__ */ get_first_child(node2);
    }
    assign_nodes(
      /** @type {TemplateNode} */
      /* @__PURE__ */ get_first_child(node2),
      /** @type {TemplateNode} */
      node2.lastChild
    );
    if (svg || mathml) {
      while (/* @__PURE__ */ get_first_child(node2)) {
        anchor.before(
          /** @type {Node} */
          /* @__PURE__ */ get_first_child(node2)
        );
      }
    } else {
      anchor.before(node2);
    }
  });
}
function component$1(node, get_component, render_fn) {
  var anchor = node;
  var component2;
  var effect2;
  block(() => {
    if (component2 === (component2 = get_component())) return;
    if (effect2) {
      pause_effect(effect2);
      effect2 = null;
    }
    if (component2) {
      effect2 = branch(() => render_fn(anchor, component2));
    }
  }, EFFECT_TRANSPARENT);
}
function element(node, get_tag, is_svg, render_fn, get_namespace, location2) {
  var tag;
  var current_tag;
  var element2 = null;
  var anchor = (
    /** @type {TemplateNode} */
    node
  );
  var effect2;
  var each_item_block = current_each_item;
  block(() => {
    const next_tag = get_tag() || null;
    var ns = NAMESPACE_SVG;
    if (next_tag === tag) return;
    var previous_each_item = current_each_item;
    set_current_each_item(each_item_block);
    if (effect2) {
      if (next_tag === null) {
        pause_effect(effect2, () => {
          effect2 = null;
          current_tag = null;
        });
      } else if (next_tag === current_tag) {
        resume_effect(effect2);
      } else {
        destroy_effect(effect2);
      }
    }
    if (next_tag && next_tag !== current_tag) {
      effect2 = branch(() => {
        element2 = document.createElementNS(ns, next_tag);
        assign_nodes(element2, element2);
        if (render_fn) {
          var child_anchor = (
            /** @type {TemplateNode} */
            element2.appendChild(create_text())
          );
          render_fn(element2, child_anchor);
        }
        active_effect.nodes_end = element2;
        anchor.before(element2);
      });
    }
    tag = next_tag;
    if (tag) current_tag = tag;
    set_current_each_item(previous_each_item);
  }, EFFECT_TRANSPARENT);
}
function action(dom, action2, get_value) {
  effect(() => {
    var payload = untrack(() => action2(dom, get_value == null ? void 0 : get_value()) || {});
    if (get_value && (payload == null ? void 0 : payload.update)) {
      var inited = false;
      var prev = (
        /** @type {any} */
        {}
      );
      render_effect(() => {
        var value = get_value();
        deep_read_state(value);
        if (inited && safe_not_equal(prev, value)) {
          prev = value;
          payload.update(value);
        }
      });
      inited = true;
    }
    if (payload == null ? void 0 : payload.destroy) {
      return () => (
        /** @type {Function} */
        payload.destroy()
      );
    }
  });
}
function attach(node, get_fn) {
  var fn = void 0;
  var e;
  block(() => {
    if (fn !== (fn = get_fn())) {
      if (e) {
        destroy_effect(e);
        e = null;
      }
      if (fn) {
        e = branch(() => {
          effect(() => (
            /** @type {(node: Element) => void} */
            fn(node)
          ));
        });
      }
    }
  });
}
function clsx(value) {
  if (typeof value === "object") {
    return clsx$1(value);
  } else {
    return value ?? "";
  }
}
const whitespace = [..." 	\n\r\f \v\uFEFF"];
function to_class(value, hash, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash) {
    classname = classname ? classname + " " + hash : hash;
  }
  if (directives) {
    for (var key in directives) {
      if (directives[key]) {
        classname = classname ? classname + " " + key : key;
      } else if (classname.length) {
        var len = key.length;
        var a2 = 0;
        while ((a2 = classname.indexOf(key, a2)) >= 0) {
          var b = a2 + len;
          if ((a2 === 0 || whitespace.includes(classname[a2 - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a2 === 0 ? "" : classname.substring(0, a2)) + classname.substring(b + 1);
          } else {
            a2 = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function append_styles(styles, important = false) {
  var separator = important ? " !important;" : ";";
  var css = "";
  for (var key in styles) {
    var value = styles[key];
    if (value != null && value !== "") {
      css += " " + key + ": " + value + separator;
    }
  }
  return css;
}
function to_css_name(name) {
  if (name[0] !== "-" || name[1] !== "-") {
    return name.toLowerCase();
  }
  return name;
}
function to_style(value, styles) {
  if (styles) {
    var new_style = "";
    var normal_styles;
    var important_styles;
    if (Array.isArray(styles)) {
      normal_styles = styles[0];
      important_styles = styles[1];
    } else {
      normal_styles = styles;
    }
    if (value) {
      value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var in_str = false;
      var in_apo = 0;
      var in_comment = false;
      var reserved_names = [];
      if (normal_styles) {
        reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
      }
      if (important_styles) {
        reserved_names.push(...Object.keys(important_styles).map(to_css_name));
      }
      var start_index = 0;
      var name_index = -1;
      const len = value.length;
      for (var i2 = 0; i2 < len; i2++) {
        var c = value[i2];
        if (in_comment) {
          if (c === "/" && value[i2 - 1] === "*") {
            in_comment = false;
          }
        } else if (in_str) {
          if (in_str === c) {
            in_str = false;
          }
        } else if (c === "/" && value[i2 + 1] === "*") {
          in_comment = true;
        } else if (c === '"' || c === "'") {
          in_str = c;
        } else if (c === "(") {
          in_apo++;
        } else if (c === ")") {
          in_apo--;
        }
        if (!in_comment && in_str === false && in_apo === 0) {
          if (c === ":" && name_index === -1) {
            name_index = i2;
          } else if (c === ";" || i2 === len - 1) {
            if (name_index !== -1) {
              var name = to_css_name(value.substring(start_index, name_index).trim());
              if (!reserved_names.includes(name)) {
                if (c !== ";") {
                  i2++;
                }
                var property = value.substring(start_index, i2).trim();
                new_style += " " + property + ";";
              }
            }
            start_index = i2 + 1;
            name_index = -1;
          }
        }
      }
    }
    if (normal_styles) {
      new_style += append_styles(normal_styles);
    }
    if (important_styles) {
      new_style += append_styles(important_styles, true);
    }
    new_style = new_style.trim();
    return new_style === "" ? null : new_style;
  }
  return value == null ? null : String(value);
}
function set_class(dom, is_html, value, hash, prev_classes, next_classes) {
  var prev = dom.__className;
  if (prev !== value || prev === void 0) {
    var next_class_name = to_class(value, hash, next_classes);
    {
      if (next_class_name == null) {
        dom.removeAttribute("class");
      } else if (is_html) {
        dom.className = next_class_name;
      } else {
        dom.setAttribute("class", next_class_name);
      }
    }
    dom.__className = value;
  } else if (next_classes && prev_classes !== next_classes) {
    for (var key in next_classes) {
      var is_present = !!next_classes[key];
      if (prev_classes == null || is_present !== !!prev_classes[key]) {
        dom.classList.toggle(key, is_present);
      }
    }
  }
  return next_classes;
}
function update_styles(dom, prev = {}, next, priority) {
  for (var key in next) {
    var value = next[key];
    if (prev[key] !== value) {
      if (next[key] == null) {
        dom.style.removeProperty(key);
      } else {
        dom.style.setProperty(key, value, priority);
      }
    }
  }
}
function set_style(dom, value, prev_styles, next_styles) {
  var prev = dom.__style;
  if (prev !== value) {
    var next_style_attr = to_style(value, next_styles);
    {
      if (next_style_attr == null) {
        dom.removeAttribute("style");
      } else {
        dom.style.cssText = next_style_attr;
      }
    }
    dom.__style = value;
  } else if (next_styles) {
    if (Array.isArray(next_styles)) {
      update_styles(dom, prev_styles == null ? void 0 : prev_styles[0], next_styles[0]);
      update_styles(dom, prev_styles == null ? void 0 : prev_styles[1], next_styles[1], "important");
    } else {
      update_styles(dom, prev_styles, next_styles);
    }
  }
  return next_styles;
}
function select_option(select, value, mounting) {
  if (select.multiple) {
    if (value == void 0) {
      return;
    }
    if (!is_array(value)) {
      return select_multiple_invalid_value();
    }
    for (var option of select.options) {
      option.selected = value.includes(get_option_value(option));
    }
    return;
  }
  for (option of select.options) {
    var option_value = get_option_value(option);
    if (is(option_value, value)) {
      option.selected = true;
      return;
    }
  }
  if (!mounting || value !== void 0) {
    select.selectedIndex = -1;
  }
}
function init_select(select, get_value) {
  let mounting = true;
  effect(() => {
    if (get_value) {
      select_option(select, untrack(get_value), mounting);
    }
    mounting = false;
    var observer = new MutationObserver(() => {
      var value = select.__value;
      select_option(select, value);
    });
    observer.observe(select, {
      // Listen to option element changes
      childList: true,
      subtree: true,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: true,
      attributeFilter: ["value"]
    });
    return () => {
      observer.disconnect();
    };
  });
}
function get_option_value(option) {
  if ("__value" in option) {
    return option.__value;
  } else {
    return option.value;
  }
}
const CLASS = Symbol("class");
const STYLE = Symbol("style");
const IS_CUSTOM_ELEMENT = Symbol("is custom element");
const IS_HTML = Symbol("is html");
function set_selected(element2, selected) {
  if (selected) {
    if (!element2.hasAttribute("selected")) {
      element2.setAttribute("selected", "");
    }
  } else {
    element2.removeAttribute("selected");
  }
}
function set_attribute(element2, attribute, value, skip_warning) {
  var attributes = get_attributes(element2);
  if (attributes[attribute] === (attributes[attribute] = value)) return;
  if (attribute === "loading") {
    element2[LOADING_ATTR_SYMBOL] = value;
  }
  if (value == null) {
    element2.removeAttribute(attribute);
  } else if (typeof value !== "string" && get_setters(element2).includes(attribute)) {
    element2[attribute] = value;
  } else {
    element2.setAttribute(attribute, value);
  }
}
function set_attributes(element2, prev, next, css_hash, skip_warning = false) {
  var attributes = get_attributes(element2);
  var is_custom_element = attributes[IS_CUSTOM_ELEMENT];
  var preserve_attribute_case = !attributes[IS_HTML];
  var current = prev || {};
  var is_option_element = element2.tagName === "OPTION";
  for (var key in prev) {
    if (!(key in next)) {
      next[key] = null;
    }
  }
  if (next.class) {
    next.class = clsx(next.class);
  } else if (next[CLASS]) {
    next.class = null;
  }
  if (next[STYLE]) {
    next.style ?? (next.style = null);
  }
  var setters = get_setters(element2);
  for (const key2 in next) {
    let value = next[key2];
    if (is_option_element && key2 === "value" && value == null) {
      element2.value = element2.__value = "";
      current[key2] = value;
      continue;
    }
    if (key2 === "class") {
      var is_html = element2.namespaceURI === "http://www.w3.org/1999/xhtml";
      set_class(element2, is_html, value, css_hash, prev == null ? void 0 : prev[CLASS], next[CLASS]);
      current[key2] = value;
      current[CLASS] = next[CLASS];
      continue;
    }
    if (key2 === "style") {
      set_style(element2, value, prev == null ? void 0 : prev[STYLE], next[STYLE]);
      current[key2] = value;
      current[STYLE] = next[STYLE];
      continue;
    }
    var prev_value = current[key2];
    if (value === prev_value && !(value === void 0 && element2.hasAttribute(key2))) {
      continue;
    }
    current[key2] = value;
    var prefix = key2[0] + key2[1];
    if (prefix === "$$") continue;
    if (prefix === "on") {
      const opts = {};
      const event_handle_key = "$$" + key2;
      let event_name = key2.slice(2);
      var delegated = is_delegated(event_name);
      if (is_capture_event(event_name)) {
        event_name = event_name.slice(0, -7);
        opts.capture = true;
      }
      if (!delegated && prev_value) {
        if (value != null) continue;
        element2.removeEventListener(event_name, current[event_handle_key], opts);
        current[event_handle_key] = null;
      }
      if (value != null) {
        if (!delegated) {
          let handle2 = function(evt) {
            current[key2].call(this, evt);
          };
          var handle = handle2;
          current[event_handle_key] = create_event(event_name, element2, handle2, opts);
        } else {
          element2[`__${event_name}`] = value;
          delegate([event_name]);
        }
      } else if (delegated) {
        element2[`__${event_name}`] = void 0;
      }
    } else if (key2 === "style") {
      set_attribute(element2, key2, value);
    } else if (key2 === "autofocus") {
      autofocus(
        /** @type {HTMLElement} */
        element2,
        Boolean(value)
      );
    } else if (!is_custom_element && (key2 === "__value" || key2 === "value" && value != null)) {
      element2.value = element2.__value = value;
    } else if (key2 === "selected" && is_option_element) {
      set_selected(
        /** @type {HTMLOptionElement} */
        element2,
        value
      );
    } else {
      var name = key2;
      if (!preserve_attribute_case) {
        name = normalize_attribute(name);
      }
      var is_default = name === "defaultValue" || name === "defaultChecked";
      if (value == null && !is_custom_element && !is_default) {
        attributes[key2] = null;
        if (name === "value" || name === "checked") {
          let input = (
            /** @type {HTMLInputElement} */
            element2
          );
          const use_default = prev === void 0;
          if (name === "value") {
            let previous = input.defaultValue;
            input.removeAttribute(name);
            input.defaultValue = previous;
            input.value = input.__value = use_default ? previous : null;
          } else {
            let previous = input.defaultChecked;
            input.removeAttribute(name);
            input.defaultChecked = previous;
            input.checked = use_default ? previous : false;
          }
        } else {
          element2.removeAttribute(key2);
        }
      } else if (is_default || setters.includes(name) && (is_custom_element || typeof value !== "string")) {
        element2[name] = value;
      } else if (typeof value !== "function") {
        set_attribute(element2, name, value);
      }
    }
  }
  return current;
}
function attribute_effect(element2, fn, thunks = [], css_hash, skip_warning = false, d = derived) {
  const deriveds = thunks.map(d);
  var prev = void 0;
  var effects = {};
  var is_select = element2.nodeName === "SELECT";
  var inited = false;
  block(() => {
    var next = fn(...deriveds.map(get$4));
    var current = set_attributes(element2, prev, next, css_hash, skip_warning);
    if (inited && is_select && "value" in next) {
      select_option(
        /** @type {HTMLSelectElement} */
        element2,
        next.value,
        false
      );
    }
    for (let symbol of Object.getOwnPropertySymbols(effects)) {
      if (!next[symbol]) destroy_effect(effects[symbol]);
    }
    for (let symbol of Object.getOwnPropertySymbols(next)) {
      var n = next[symbol];
      if (symbol.description === ATTACHMENT_KEY && (!prev || n !== prev[symbol])) {
        if (effects[symbol]) destroy_effect(effects[symbol]);
        effects[symbol] = branch(() => attach(element2, () => n));
      }
      current[symbol] = n;
    }
    prev = current;
  });
  if (is_select) {
    init_select(
      /** @type {HTMLSelectElement} */
      element2,
      () => (
        /** @type {Record<string | symbol, any>} */
        prev.value
      )
    );
  }
  inited = true;
}
function get_attributes(element2) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    element2.__attributes ?? (element2.__attributes = {
      [IS_CUSTOM_ELEMENT]: element2.nodeName.includes("-"),
      [IS_HTML]: element2.namespaceURI === NAMESPACE_HTML
    })
  );
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element2) {
  var setters = setters_cache.get(element2.nodeName);
  if (setters) return setters;
  setters_cache.set(element2.nodeName, setters = []);
  var descriptors;
  var proto = element2;
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key in descriptors) {
      if (descriptors[key].set) {
        setters.push(key);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
const now = () => performance.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_2) => requestAnimationFrame(_2)
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function run_tasks() {
  const now2 = raf.now();
  raf.tasks.forEach((task) => {
    if (!task.c(now2)) {
      raf.tasks.delete(task);
      task.f();
    }
  });
  if (raf.tasks.size !== 0) {
    raf.tick(run_tasks);
  }
}
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) {
    raf.tick(run_tasks);
  }
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function css_property_to_camelcase(style) {
  if (style === "float") return "cssFloat";
  if (style === "offset") return "cssOffset";
  if (style.startsWith("--")) return style;
  const parts = style.split("-");
  if (parts.length === 1) return parts[0];
  return parts[0] + parts.slice(1).map(
    /** @param {any} word */
    (word) => word[0].toUpperCase() + word.slice(1)
  ).join("");
}
function css_to_keyframe(css) {
  const keyframe = {};
  const parts = css.split(";");
  for (const part of parts) {
    const [property, value] = part.split(":");
    if (!property || value === void 0) break;
    const formatted_property = css_property_to_camelcase(property.trim());
    keyframe[formatted_property] = value.trim();
  }
  return keyframe;
}
const linear = (t) => t;
function animation(element2, get_fn, get_params) {
  var item = (
    /** @type {EachItem} */
    current_each_item
  );
  var from;
  var to;
  var animation2;
  var original_styles = null;
  item.a ?? (item.a = {
    element: element2,
    measure() {
      from = this.element.getBoundingClientRect();
    },
    apply() {
      animation2 == null ? void 0 : animation2.abort();
      to = this.element.getBoundingClientRect();
      if (from.left !== to.left || from.right !== to.right || from.top !== to.top || from.bottom !== to.bottom) {
        const options = get_fn()(this.element, { from, to }, get_params == null ? void 0 : get_params());
        animation2 = animate(this.element, options, void 0, 1, () => {
          animation2 == null ? void 0 : animation2.abort();
          animation2 = void 0;
        });
      }
    },
    fix() {
      if (element2.getAnimations().length) return;
      var { position, width, height } = getComputedStyle(element2);
      if (position !== "absolute" && position !== "fixed") {
        var style = (
          /** @type {HTMLElement | SVGElement} */
          element2.style
        );
        original_styles = {
          position: style.position,
          width: style.width,
          height: style.height,
          transform: style.transform
        };
        style.position = "absolute";
        style.width = width;
        style.height = height;
        var to2 = element2.getBoundingClientRect();
        if (from.left !== to2.left || from.top !== to2.top) {
          var transform = `translate(${from.left - to2.left}px, ${from.top - to2.top}px)`;
          style.transform = style.transform ? `${style.transform} ${transform}` : transform;
        }
      }
    },
    unfix() {
      if (original_styles) {
        var style = (
          /** @type {HTMLElement | SVGElement} */
          element2.style
        );
        style.position = original_styles.position;
        style.width = original_styles.width;
        style.height = original_styles.height;
        style.transform = original_styles.transform;
      }
    }
  });
  item.a.element = element2;
}
function animate(element2, options, counterpart, t2, on_finish) {
  if (is_function(options)) {
    var a2;
    var aborted = false;
    queue_micro_task(() => {
      if (aborted) return;
      var o = options({ direction: "in" });
      a2 = animate(element2, o, counterpart, t2, on_finish);
    });
    return {
      abort: () => {
        aborted = true;
        a2 == null ? void 0 : a2.abort();
      },
      deactivate: () => a2.deactivate(),
      reset: () => a2.reset(),
      t: () => a2.t()
    };
  }
  if (!(options == null ? void 0 : options.duration)) {
    on_finish();
    return {
      abort: noop$1,
      deactivate: noop$1,
      reset: noop$1,
      t: () => t2
    };
  }
  const { delay = 0, css, tick: tick2, easing = linear } = options;
  var keyframes = [];
  {
    if (tick2) {
      tick2(0, 1);
    }
    if (css) {
      var styles = css_to_keyframe(css(0, 1));
      keyframes.push(styles, styles);
    }
  }
  var get_t = () => 1 - t2;
  var animation2 = element2.animate(keyframes, { duration: delay, fill: "forwards" });
  animation2.onfinish = () => {
    animation2.cancel();
    var t1 = 1 - t2;
    var delta = t2 - t1;
    var duration = (
      /** @type {number} */
      options.duration * Math.abs(delta)
    );
    var keyframes2 = [];
    if (duration > 0) {
      var needs_overflow_hidden = false;
      if (css) {
        var n = Math.ceil(duration / (1e3 / 60));
        for (var i2 = 0; i2 <= n; i2 += 1) {
          var t = t1 + delta * easing(i2 / n);
          var styles2 = css_to_keyframe(css(t, 1 - t));
          keyframes2.push(styles2);
          needs_overflow_hidden || (needs_overflow_hidden = styles2.overflow === "hidden");
        }
      }
      if (needs_overflow_hidden) {
        element2.style.overflow = "hidden";
      }
      get_t = () => {
        var time = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          animation2.currentTime
        );
        return t1 + delta * easing(time / duration);
      };
      if (tick2) {
        loop(() => {
          if (animation2.playState !== "running") return false;
          var t3 = get_t();
          tick2(t3, 1 - t3);
          return true;
        });
      }
    }
    animation2 = element2.animate(keyframes2, { duration, fill: "forwards" });
    animation2.onfinish = () => {
      get_t = () => t2;
      tick2 == null ? void 0 : tick2(t2, 1 - t2);
      on_finish();
    };
  };
  return {
    abort: () => {
      if (animation2) {
        animation2.cancel();
        animation2.effect = null;
        animation2.onfinish = noop$1;
      }
    },
    deactivate: () => {
      on_finish = noop$1;
    },
    reset: () => {
    },
    t: () => get_t()
  };
}
function bind_value(input, get2, set2 = get2) {
  var runes = is_runes();
  listen_to_event_and_reset_event(input, "input", (is_reset) => {
    var value = is_reset ? input.defaultValue : input.value;
    value = is_numberlike_input(input) ? to_number(value) : value;
    set2(value);
    if (runes && value !== (value = get2())) {
      var start = input.selectionStart;
      var end = input.selectionEnd;
      input.value = value ?? "";
      if (end !== null) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
      }
    }
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    // If defaultValue is set, then value == defaultValue
    // TODO Svelte 6: remove input.value check and set to empty string?
    untrack(get2) == null && input.value
  ) {
    set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
  }
  render_effect(() => {
    var value = get2();
    if (is_numberlike_input(input) && value === to_number(input.value)) {
      return;
    }
    if (input.type === "date" && !value && !input.value) {
      return;
    }
    if (value !== input.value) {
      input.value = value ?? "";
    }
  });
}
function is_numberlike_input(input) {
  var type = input.type;
  return type === "number" || type === "range";
}
function to_number(value) {
  return value === "" ? null : +value;
}
function bind_files(input, get2, set2 = get2) {
  listen_to_event_and_reset_event(input, "change", () => {
    set2(input.files);
  });
  render_effect(() => {
    input.files = get2();
  });
}
function is_bound_this(bound_value, element_or_component) {
  return bound_value === element_or_component || (bound_value == null ? void 0 : bound_value[STATE_SYMBOL]) === element_or_component;
}
function bind_this(element_or_component = {}, update, get_value, get_parts) {
  effect(() => {
    var old_parts;
    var parts;
    render_effect(() => {
      old_parts = parts;
      parts = [];
      untrack(() => {
        if (element_or_component !== get_value(...parts)) {
          update(element_or_component, ...parts);
          if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
            update(null, ...old_parts);
          }
        }
      });
    });
    return () => {
      queue_micro_task(() => {
        if (parts && is_bound_this(get_value(...parts), element_or_component)) {
          update(null, ...parts);
        }
      });
    };
  });
  return element_or_component;
}
function init(immutable = false) {
  const context = (
    /** @type {ComponentContextLegacy} */
    component_context
  );
  const callbacks = context.l.u;
  if (!callbacks) return;
  let props = () => deep_read_state(context.s);
  if (immutable) {
    let version = 0;
    let prev = (
      /** @type {Record<string, any>} */
      {}
    );
    const d = /* @__PURE__ */ derived(() => {
      let changed = false;
      const props2 = context.s;
      for (const key in props2) {
        if (props2[key] !== prev[key]) {
          prev[key] = props2[key];
          changed = true;
        }
      }
      if (changed) version++;
      return version;
    });
    props = () => get$4(d);
  }
  if (callbacks.b.length) {
    user_pre_effect(() => {
      observe_all(context, props);
      run_all(callbacks.b);
    });
  }
  user_effect(() => {
    const fns = untrack(() => callbacks.m.map(run));
    return () => {
      for (const fn of fns) {
        if (typeof fn === "function") {
          fn();
        }
      }
    };
  });
  if (callbacks.a.length) {
    user_effect(() => {
      observe_all(context, props);
      run_all(callbacks.a);
    });
  }
}
function observe_all(context, props) {
  if (context.l.s) {
    for (const signal of context.l.s) get$4(signal);
  }
  props();
}
function subscribe_to_store(store, run2, invalidate) {
  if (store == null) {
    run2(void 0);
    return noop$1;
  }
  const unsub = untrack(
    () => store.subscribe(
      run2,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
const subscriber_queue = [];
function writable(value, start = noop$1) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i2 = 0; i2 < subscriber_queue.length; i2 += 2) {
            subscriber_queue[i2][0](subscriber_queue[i2 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run2, invalidate = noop$1) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update) || noop$1;
    }
    run2(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update, subscribe };
}
function get$3(store) {
  let value;
  subscribe_to_store(store, (_2) => value = _2)();
  return value;
}
let is_store_binding = false;
let IS_UNMOUNTED = Symbol();
function store_get(store, store_name, stores) {
  const entry = stores[store_name] ?? (stores[store_name] = {
    store: null,
    source: /* @__PURE__ */ mutable_source(void 0),
    unsubscribe: noop$1
  });
  if (entry.store !== store && !(IS_UNMOUNTED in stores)) {
    entry.unsubscribe();
    entry.store = store ?? null;
    if (store == null) {
      entry.source.v = void 0;
      entry.unsubscribe = noop$1;
    } else {
      var is_synchronous_callback = true;
      entry.unsubscribe = subscribe_to_store(store, (v2) => {
        if (is_synchronous_callback) {
          entry.source.v = v2;
        } else {
          set$1(entry.source, v2);
        }
      });
      is_synchronous_callback = false;
    }
  }
  if (store && IS_UNMOUNTED in stores) {
    return get$3(store);
  }
  return get$4(entry.source);
}
function setup_stores() {
  const stores = {};
  function cleanup() {
    teardown(() => {
      for (var store_name in stores) {
        const ref = stores[store_name];
        ref.unsubscribe();
      }
      define_property(stores, IS_UNMOUNTED, {
        enumerable: false,
        value: true
      });
    });
  }
  return [stores, cleanup];
}
function capture_store_binding(fn) {
  var previous_is_store_binding = is_store_binding;
  try {
    is_store_binding = false;
    return [fn(), is_store_binding];
  } finally {
    is_store_binding = previous_is_store_binding;
  }
}
const rest_props_handler = {
  get(target, key) {
    if (target.exclude.includes(key)) return;
    return target.props[key];
  },
  set(target, key) {
    return false;
  },
  getOwnPropertyDescriptor(target, key) {
    if (target.exclude.includes(key)) return;
    if (key in target.props) {
      return {
        enumerable: true,
        configurable: true,
        value: target.props[key]
      };
    }
  },
  has(target, key) {
    if (target.exclude.includes(key)) return false;
    return key in target.props;
  },
  ownKeys(target) {
    return Reflect.ownKeys(target.props).filter((key) => !target.exclude.includes(key));
  }
};
// @__NO_SIDE_EFFECTS__
function rest_props(props, exclude, name) {
  return new Proxy(
    { props, exclude },
    rest_props_handler
  );
}
const spread_props_handler = {
  get(target, key) {
    let i2 = target.props.length;
    while (i2--) {
      let p2 = target.props[i2];
      if (is_function(p2)) p2 = p2();
      if (typeof p2 === "object" && p2 !== null && key in p2) return p2[key];
    }
  },
  set(target, key, value) {
    let i2 = target.props.length;
    while (i2--) {
      let p2 = target.props[i2];
      if (is_function(p2)) p2 = p2();
      const desc = get_descriptor(p2, key);
      if (desc && desc.set) {
        desc.set(value);
        return true;
      }
    }
    return false;
  },
  getOwnPropertyDescriptor(target, key) {
    let i2 = target.props.length;
    while (i2--) {
      let p2 = target.props[i2];
      if (is_function(p2)) p2 = p2();
      if (typeof p2 === "object" && p2 !== null && key in p2) {
        const descriptor = get_descriptor(p2, key);
        if (descriptor && !descriptor.configurable) {
          descriptor.configurable = true;
        }
        return descriptor;
      }
    }
  },
  has(target, key) {
    if (key === STATE_SYMBOL || key === LEGACY_PROPS) return false;
    for (let p2 of target.props) {
      if (is_function(p2)) p2 = p2();
      if (p2 != null && key in p2) return true;
    }
    return false;
  },
  ownKeys(target) {
    const keys = [];
    for (let p2 of target.props) {
      if (is_function(p2)) p2 = p2();
      if (!p2) continue;
      for (const key in p2) {
        if (!keys.includes(key)) keys.push(key);
      }
      for (const key of Object.getOwnPropertySymbols(p2)) {
        if (!keys.includes(key)) keys.push(key);
      }
    }
    return keys;
  }
};
function spread_props(...props) {
  return new Proxy({ props }, spread_props_handler);
}
function has_destroyed_component_ctx(current_value) {
  var _a2;
  return ((_a2 = current_value.ctx) == null ? void 0 : _a2.d) ?? false;
}
function prop(props, key, flags, fallback) {
  var _a2;
  var immutable = (flags & PROPS_IS_IMMUTABLE) !== 0;
  var runes = !legacy_mode_flag || (flags & PROPS_IS_RUNES) !== 0;
  var bindable = (flags & PROPS_IS_BINDABLE) !== 0;
  var lazy = (flags & PROPS_IS_LAZY_INITIAL) !== 0;
  var is_store_sub = false;
  var prop_value;
  if (bindable) {
    [prop_value, is_store_sub] = capture_store_binding(() => (
      /** @type {V} */
      props[key]
    ));
  } else {
    prop_value = /** @type {V} */
    props[key];
  }
  var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
  var setter = bindable && (((_a2 = get_descriptor(props, key)) == null ? void 0 : _a2.set) ?? (is_entry_props && key in props && ((v2) => props[key] = v2))) || void 0;
  var fallback_value = (
    /** @type {V} */
    fallback
  );
  var fallback_dirty = true;
  var fallback_used = false;
  var get_fallback = () => {
    fallback_used = true;
    if (fallback_dirty) {
      fallback_dirty = false;
      if (lazy) {
        fallback_value = untrack(
          /** @type {() => V} */
          fallback
        );
      } else {
        fallback_value = /** @type {V} */
        fallback;
      }
    }
    return fallback_value;
  };
  if (prop_value === void 0 && fallback !== void 0) {
    if (setter && runes) {
      props_invalid_value();
    }
    prop_value = get_fallback();
    if (setter) setter(prop_value);
  }
  var getter;
  if (runes) {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key]
      );
      if (value === void 0) return get_fallback();
      fallback_dirty = true;
      fallback_used = false;
      return value;
    };
  } else {
    var derived_getter = (immutable ? derived : derived_safe_equal)(
      () => (
        /** @type {V} */
        props[key]
      )
    );
    derived_getter.f |= LEGACY_DERIVED_PROP;
    getter = () => {
      var value = get$4(derived_getter);
      if (value !== void 0) fallback_value = /** @type {V} */
      void 0;
      return value === void 0 ? fallback_value : value;
    };
  }
  if ((flags & PROPS_IS_UPDATED) === 0 && runes) {
    return getter;
  }
  if (setter) {
    var legacy_parent = props.$$legacy;
    return function(value, mutation) {
      if (arguments.length > 0) {
        if (!runes || !mutation || legacy_parent || is_store_sub) {
          setter(mutation ? getter() : value);
        }
        return value;
      } else {
        return getter();
      }
    };
  }
  var from_child = false;
  var inner_current_value = /* @__PURE__ */ mutable_source(prop_value);
  var current_value = /* @__PURE__ */ derived(() => {
    var parent_value = getter();
    var child_value = get$4(inner_current_value);
    if (from_child) {
      from_child = false;
      return child_value;
    }
    return inner_current_value.v = parent_value;
  });
  if (bindable) {
    get$4(current_value);
  }
  if (!immutable) current_value.equals = safe_equals;
  return function(value, mutation) {
    if (arguments.length > 0) {
      const new_value = mutation ? get$4(current_value) : runes && bindable ? proxy(value) : value;
      if (!current_value.equals(new_value)) {
        from_child = true;
        set$1(inner_current_value, new_value);
        if (fallback_used && fallback_value !== void 0) {
          fallback_value = new_value;
        }
        if (has_destroyed_component_ctx(current_value)) {
          return value;
        }
        untrack(() => get$4(current_value));
      }
      return value;
    }
    if (has_destroyed_component_ctx(current_value)) {
      return current_value.v;
    }
    return get$4(current_value);
  };
}
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  let dbp;
  const getDB = () => {
    if (dbp)
      return dbp;
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    dbp = promisifyRequest(request);
    dbp.then((db) => {
      db.onclose = () => dbp = void 0;
    }, () => {
    });
    return dbp;
  };
  return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
let defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get$2(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function increment(source2) {
  set$1(source2, source2.v + 1);
}
function createSubscriber(start) {
  let subscribers = 0;
  let version = source(0);
  let stop;
  return () => {
    if (effect_tracking()) {
      get$4(version);
      render_effect(() => {
        if (subscribers === 0) {
          stop = untrack(() => start(() => increment(version)));
        }
        subscribers += 1;
        return () => {
          tick().then(() => {
            subscribers -= 1;
            if (subscribers === 0) {
              stop == null ? void 0 : stop();
              stop = void 0;
            }
          });
        };
      });
    }
  };
}
const API_BASE = "http://localhost:8005/api";
class ApiError extends Error {
  constructor(message, status, response) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.response = response;
  }
}
async function api_request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers
      },
      ...options
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
      if (data == null ? void 0 : data.offline) return data;
      throw new ApiError(
        (data == null ? void 0 : data.detail) || `Request failed with status ${response.status}`,
        response.status,
        data
      );
    }
    return data;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (!navigator.onLine) throw new ApiError("أنت غير متصل بالإنترنت", 0, { offline: true });
    throw new ApiError("Network error", 0, null);
  }
}
function inject_code(url, code) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}code=${encodeURIComponent(code)}`;
}
const api = {
  async create_family(name) {
    return api_request("/families", {
      method: "POST",
      body: JSON.stringify({ name })
    });
  },
  async get_family_by_code(code) {
    return api_request(`/families/by-code/${encodeURIComponent(code)}`);
  },
  async get_family_details(family_id, code) {
    const url = inject_code(`/families/${family_id}`, code);
    return api_request(url);
  },
  async update_family(family_id, code, name) {
    const url = inject_code(`/families/${family_id}`, code);
    return api_request(url, {
      method: "PATCH",
      body: JSON.stringify({ name })
    });
  },
  async create_child(family_id, code, name) {
    const url = inject_code(`/families/${family_id}/children`, code);
    return api_request(url, {
      method: "POST",
      body: JSON.stringify({ name })
    });
  },
  async update_child(family_id, code, child_id, name) {
    const url = inject_code(`/families/${family_id}/children/${child_id}`, code);
    return api_request(url, {
      method: "PATCH",
      body: JSON.stringify({ name })
    });
  },
  async delete_child(family_id, code, child_id) {
    const url = inject_code(`/families/${family_id}/children/${child_id}`, code);
    return api_request(url, {
      method: "DELETE"
    });
  },
  async adjust_score(family_id, code, child_id, delta, note = null) {
    const url = inject_code(`/families/${family_id}/children/${child_id}/adjust`, code);
    return api_request(url, {
      method: "POST",
      body: JSON.stringify({ delta, note })
    });
  },
  async reset_child_score(family_id, code, child_id) {
    const url = inject_code(`/families/${family_id}/reset-one/${child_id}`, code);
    return api_request(url, {
      method: "POST"
    });
  },
  async reset_all_scores(family_id, code) {
    const url = inject_code(`/families/${family_id}/reset-all`, code);
    return api_request(url, {
      method: "POST"
    });
  },
  async get_family_history(family_id, code, limit = 50, cursor = null) {
    let url = inject_code(`/families/${family_id}/history`, code);
    url += `&limit=${limit}`;
    if (cursor) url += `&cursor=${encodeURIComponent(cursor)}`;
    return api_request(url);
  }
};
const SESSION_KEY = "kids_points_session";
async function get_session() {
  try {
    const session2 = await get$2(SESSION_KEY);
    return session2 || null;
  } catch (error) {
    console.error("Failed to get session:", error);
    return null;
  }
}
async function set_session(session2) {
  try {
    if (session2) {
      await set(SESSION_KEY, {
        ...session2,
        last_seen: (/* @__PURE__ */ new Date()).toISOString()
      });
    } else await del(SESSION_KEY);
  } catch (error) {
    console.error("Failed to set session:", error);
  }
}
async function clear_session() {
  try {
    await del(SESSION_KEY);
  } catch (error) {
    console.error("Failed to clear session:", error);
  }
}
const appstate = writable({
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
});
const session = writable({
  loaded: false,
  family_id: null,
  join_code: null,
  last_seen: null
});
const family_store = writable({
  family: null,
  children: [],
  recent_adjustments: [],
  is_loaded: false,
  error: null,
  loading: false
});
const ui_store = writable({
  confirm_dialog: null,
  active_modal: null,
  child_sort: "name",
  show_history: false,
  pending_operations: /* @__PURE__ */ new Set(),
  last_action: null,
  undo_timeout: null
});
let session_value = null;
let family_value = null;
let ui_value = null;
session.subscribe((value) => session_value = value);
family_store.subscribe((value) => family_value = value);
ui_store.subscribe((value) => ui_value = value);
const family_actions = {
  _backoff_ms: 0,
  _inflight: false,
  _listeners: null,
  _is_polling: false,
  _base_interval: 5e3,
  _max_backoff: 12e4,
  _poll_timeout_id: null,
  _pending_batches: null,
  start_polling() {
    if (this._is_polling) return;
    this._is_polling = true;
    this._backoff_ms = 0;
    const on_visibility_or_focus = () => {
      if (!this._is_polling) return;
      if (document.visibilityState === "visible") this._schedule_next_poll(0);
      else if (this._poll_timeout_id) {
        clearTimeout(this._poll_timeout_id);
        this._poll_timeout_id = null;
      }
    };
    const on_online = () => this._schedule_next_poll(0);
    this._listeners = { on_online, on_visibility_or_focus };
    document.addEventListener("visibilitychange", on_visibility_or_focus);
    window.addEventListener("focus", on_visibility_or_focus);
    window.addEventListener("online", on_online);
    this._schedule_next_poll(0);
  },
  stop_polling() {
    this._is_polling = false;
    if (this._poll_timeout_id) {
      clearTimeout(this._poll_timeout_id);
      this._poll_timeout_id = null;
    }
    if (this._listeners) {
      document.removeEventListener("visibilitychange", this._listeners.on_visibility_or_focus);
      window.removeEventListener("focus", this._listeners.on_visibility_or_focus);
      window.removeEventListener("online", this._listeners.on_online);
      this._listeners = null;
    }
  },
  _schedule_next_poll(delay_ms = null) {
    if (!this._is_polling) return;
    if (this._poll_timeout_id) clearTimeout(this._poll_timeout_id);
    if (document.visibilityState !== "visible") return;
    const slow_factor = 1;
    const base = this._base_interval * slow_factor;
    const jitter = Math.floor(Math.random() * 400);
    const ms = delay_ms ?? Math.max(1e3, base + jitter + this._backoff_ms);
    this._poll_timeout_id = setTimeout(() => this._poll_once(), ms);
  },
  async _poll_once() {
    var _a2;
    if (!(session_value == null ? void 0 : session_value.family_id) || !(session_value == null ? void 0 : session_value.join_code) || !(family_value == null ? void 0 : family_value.is_loaded)) {
      return this._schedule_next_poll();
    }
    if (!navigator.onLine) return this._schedule_next_poll(1e4);
    if (document.visibilityState !== "visible") return;
    if (this._inflight) return this._schedule_next_poll(1e3);
    this._inflight = true;
    try {
      await this.refresh_family_silent();
      this._backoff_ms = 0;
    } catch (error) {
      const status = (error == null ? void 0 : error.status) ?? ((_a2 = error == null ? void 0 : error.response) == null ? void 0 : _a2.status);
      if (status === 403 || status === 404) {
        await clear_session();
        session.set({
          loaded: true,
          family_id: null,
          join_code: null,
          last_seen: null
        });
        this.stop_polling();
      } else this._backoff_ms = Math.min(this._max_backoff, (this._backoff_ms || 2e3) * 2);
    } finally {
      this._inflight = false;
      this._schedule_next_poll();
    }
  },
  async refresh_family_silent() {
    if (!(session_value == null ? void 0 : session_value.family_id) || !(session_value == null ? void 0 : session_value.join_code)) return;
    const data = await api.get_family_details(session_value.family_id, session_value.join_code);
    family_store.update((state2) => ({
      ...state2,
      family: data.family,
      children: data.children,
      recent_adjustments: data.recent_adjustments,
      is_loaded: true,
      error: null
    }));
    session.update((s) => ({
      ...s,
      last_seen: (/* @__PURE__ */ new Date()).toISOString()
    }));
  },
  async load_family() {
    var _a2;
    if (!(session_value == null ? void 0 : session_value.family_id) || !(session_value == null ? void 0 : session_value.join_code)) {
      throw new Error("No active session");
    }
    family_store.update((state2) => ({ ...state2, loading: true, error: null }));
    try {
      const data = await api.get_family_details(session_value.family_id, session_value.join_code);
      family_store.update((state2) => ({
        ...state2,
        family: data.family,
        children: data.children,
        recent_adjustments: data.recent_adjustments,
        is_loaded: true,
        loading: false,
        error: null
      }));
      this.start_polling();
    } catch (error) {
      const status = (error == null ? void 0 : error.status) ?? ((_a2 = error == null ? void 0 : error.response) == null ? void 0 : _a2.status);
      if (status === 403 || status === 404) {
        await clear_session();
        session.set({
          loaded: true,
          family_id: null,
          join_code: null,
          last_seen: null
        });
      }
      family_store.update((state2) => ({
        ...state2,
        loading: false,
        error: (error == null ? void 0 : error.message) || "Failed to load",
        is_loaded: false
      }));
      throw error;
    }
  },
  async create_family(name) {
    const family = await api.create_family(name);
    const session_data = {
      family_id: family.id,
      join_code: family.join_code,
      last_seen: (/* @__PURE__ */ new Date()).toISOString()
    };
    await set_session(session_data);
    session.set({ ...session_data, loaded: true });
    family_store.set({
      family,
      children: [],
      recent_adjustments: [],
      is_loaded: true,
      error: null,
      loading: false
    });
    this.start_polling();
    return family;
  },
  async join_family(code) {
    const family_info = await api.get_family_by_code(code);
    const data = await api.get_family_details(family_info.id, code);
    const session_data = {
      family_id: family_info.id,
      join_code: code,
      last_seen: (/* @__PURE__ */ new Date()).toISOString()
    };
    await set_session(session_data);
    session.set({ ...session_data, loaded: true });
    family_store.set({
      family: data.family,
      children: data.children,
      recent_adjustments: data.recent_adjustments,
      is_loaded: true,
      error: null,
      loading: false
    });
    this.start_polling();
    return data.family;
  },
  async leave_family() {
    this.stop_polling();
    if (this._pending_batches) {
      for (const [, batch] of this._pending_batches) if (batch == null ? void 0 : batch.timeout_id) clearTimeout(batch.timeout_id);
      this._pending_batches.clear();
    }
    await clear_session();
    session.set({
      loaded: true,
      family_id: null,
      join_code: null,
      last_seen: null
    });
    family_store.set({
      family: null,
      children: [],
      recent_adjustments: [],
      is_loaded: false,
      error: null,
      loading: false
    });
  },
  async create_child(name) {
    if (!(session_value == null ? void 0 : session_value.family_id) || !(session_value == null ? void 0 : session_value.join_code)) return;
    const child2 = await api.create_child(session_value.family_id, session_value.join_code, name);
    family_store.update((state2) => ({
      ...state2,
      children: [...state2.children, child2],
      family: {
        ...state2.family,
        stats: {
          ...state2.family.stats,
          children_count: state2.family.stats.children_count + 1
        }
      }
    }));
    return child2;
  },
  async adjust_score(child_id, delta, note = null) {
    if (!(session_value == null ? void 0 : session_value.family_id) || !(session_value == null ? void 0 : session_value.join_code)) return;
    family_store.update((state2) => ({
      ...state2,
      children: state2.children.map((child2) => child2.id === child_id ? { ...child2, score: child2.score + delta } : child2)
    }));
    this._batch_adjustment(child_id, delta, note);
  },
  _batch_adjustment(child_id, delta, note) {
    if (!this._pending_batches) this._pending_batches = /* @__PURE__ */ new Map();
    const existing_batch = this._pending_batches.get(child_id);
    if (existing_batch) {
      existing_batch.total_delta += delta;
      clearTimeout(existing_batch.timeout_id);
    } else this._pending_batches.set(child_id, { total_delta: delta, note, timeout_id: null });
    const batch = this._pending_batches.get(child_id);
    batch.timeout_id = setTimeout(
      () => {
        this._flush_batch(child_id);
      },
      500
    );
  },
  async _flush_batch(child_id) {
    var _a2, _b2;
    if (!((_a2 = this._pending_batches) == null ? void 0 : _a2.has(child_id))) return;
    const batch = this._pending_batches.get(child_id);
    this._pending_batches.delete(child_id);
    const flush_operation_id = `adjust_${child_id}_flush_${Date.now()}`;
    ui_store.update((state2) => ({
      ...state2,
      pending_operations: /* @__PURE__ */ new Set([
        ...state2.pending_operations,
        flush_operation_id
      ])
    }));
    try {
      const result = await api.adjust_score(session_value.family_id, session_value.join_code, child_id, batch.total_delta, batch.note);
      if (result.offline && result.queued) return;
      family_store.update((state2) => ({
        ...state2,
        children: state2.children.map((child2) => child2.id === child_id ? result.child : child2),
        recent_adjustments: [
          result.adjustment,
          ...state2.recent_adjustments.slice(0, 49)
        ],
        family: {
          ...state2.family,
          stats: {
            ...state2.family.stats,
            adjustments_count: state2.family.stats.adjustments_count + 1
          }
        }
      }));
      ui_actions.set_last_action({
        type: "adjust_score",
        data: {
          child_id,
          delta: batch.total_delta,
          note: batch.note
        }
      });
    } catch (error) {
      if ((_b2 = error.response) == null ? void 0 : _b2.offline) return;
      family_store.update((state2) => ({
        ...state2,
        children: state2.children.map((child2) => child2.id === child_id ? {
          ...child2,
          score: child2.score - batch.total_delta
        } : child2)
      }));
      throw error;
    } finally {
      ui_store.update((state2) => {
        const new_operations = new Set(state2.pending_operations);
        new_operations.delete(flush_operation_id);
        return { ...state2, pending_operations: new_operations };
      });
    }
  },
  async delete_child(child_id) {
    if (!(session_value == null ? void 0 : session_value.family_id) || !(session_value == null ? void 0 : session_value.join_code)) return;
    const child_to_delete = family_value.children.find((c) => c.id === child_id);
    if (!child_to_delete) return;
    family_store.update((state2) => ({
      ...state2,
      children: state2.children.filter((child2) => child2.id !== child_id)
    }));
    try {
      await api.delete_child(session_value.family_id, session_value.join_code, child_id);
      family_store.update((state2) => ({
        ...state2,
        family: {
          ...state2.family,
          stats: {
            ...state2.family.stats,
            children_count: state2.family.stats.children_count - 1
          }
        }
      }));
    } catch (error) {
      family_store.update((state2) => ({
        ...state2,
        children: [...state2.children, child_to_delete].sort((a2, b) => a2.name.localeCompare(b.name))
      }));
      throw error;
    }
  },
  async reset_all_scores() {
    if (!(session_value == null ? void 0 : session_value.family_id) || !(session_value == null ? void 0 : session_value.join_code)) return;
    const original_children = [...family_value.children];
    family_store.update((state2) => ({
      ...state2,
      children: state2.children.map((child2) => ({ ...child2, score: 0 }))
    }));
    try {
      const result = await api.reset_all_scores(session_value.family_id, session_value.join_code);
      family_store.update((state2) => ({
        ...state2,
        children: result.children,
        recent_adjustments: [
          ...result.adjustments,
          ...state2.recent_adjustments.slice(0, 50 - result.adjustments.length)
        ],
        family: {
          ...state2.family,
          stats: {
            ...state2.family.stats,
            adjustments_count: state2.family.stats.adjustments_count + result.adjustments.length
          }
        }
      }));
      return result;
    } catch (error) {
      family_store.update((state2) => ({ ...state2, children: original_children }));
      throw error;
    }
  },
  async update_child(child_id, name) {
    if (!(session_value == null ? void 0 : session_value.family_id) || !(session_value == null ? void 0 : session_value.join_code)) return;
    const child2 = await api.update_child(session_value.family_id, session_value.join_code, child_id, name);
    family_store.update((state2) => ({
      ...state2,
      children: state2.children.map((c) => c.id === child_id ? child2 : c)
    }));
    return child2;
  },
  async update_family(name) {
    if (!(session_value == null ? void 0 : session_value.family_id) || !(session_value == null ? void 0 : session_value.join_code)) return;
    const family = await api.update_family(session_value.family_id, session_value.join_code, name);
    family_store.update((state2) => ({ ...state2, family }));
    return family;
  },
  async reset_child_score(child_id) {
    if (!(session_value == null ? void 0 : session_value.family_id) || !(session_value == null ? void 0 : session_value.join_code)) return;
    const child2 = family_value.children.find((c) => c.id === child_id);
    const previous_score = (child2 == null ? void 0 : child2.score) || 0;
    const result = await api.reset_child_score(session_value.family_id, session_value.join_code, child_id);
    family_store.update((state2) => ({
      ...state2,
      children: state2.children.map((child3) => child3.id === child_id ? result.child : child3),
      recent_adjustments: result.adjustment ? [
        result.adjustment,
        ...state2.recent_adjustments.slice(0, 49)
      ] : state2.recent_adjustments,
      family: {
        ...state2.family,
        stats: {
          ...state2.family.stats,
          adjustments_count: result.adjustment ? state2.family.stats.adjustments_count + 1 : state2.family.stats.adjustments_count
        }
      }
    }));
    if (previous_score !== 0) {
      ui_actions.set_last_action({
        type: "reset_child",
        data: { child_id, previous_score }
      });
    }
    return result;
  }
};
const ui_actions = {
  show_confirm(title, message, on_confirm, on_cancel = null) {
    ui_store.update((state2) => ({
      ...state2,
      confirm_dialog: { title, message, on_confirm, on_cancel }
    }));
  },
  hide_confirm() {
    ui_store.update((state2) => ({ ...state2, confirm_dialog: null }));
  },
  set_active_modal(modal) {
    ui_store.update((state2) => ({ ...state2, active_modal: modal }));
  },
  set_last_action(action2) {
    ui_store.update((state2) => {
      if (state2.undo_timeout) clearTimeout(state2.undo_timeout);
      const timeout = setTimeout(
        () => {
          ui_store.update((s) => ({ ...s, last_action: null, undo_timeout: null }));
        },
        1e4
      );
      return {
        ...state2,
        last_action: action2,
        undo_timeout: timeout
      };
    });
  },
  async undo_last_action() {
    const last_action = ui_value == null ? void 0 : ui_value.last_action;
    if (!last_action) return;
    switch (last_action.type) {
      case "adjust_score":
        await family_actions.adjust_score(last_action.data.child_id, -last_action.data.delta, "تراجع: " + (last_action.data.note || "تعديل النقاط"));
        break;
      case "reset_child":
        await family_actions.adjust_score(last_action.data.child_id, last_action.data.previous_score, "تراجع: إعادة تعيين إلى 0");
        break;
    }
    ui_store.update((state2) => ({
      ...state2,
      last_action: null,
      undo_timeout: state2.undo_timeout ? (clearTimeout(state2.undo_timeout), null) : null
    }));
  }
};
(async function init2() {
  const appstate_idb = await get$2("appstate");
  if (appstate_idb) appstate.set(appstate_idb);
  const stored_session = await get_session();
  session.set({
    loaded: true,
    family_id: (stored_session == null ? void 0 : stored_session.family_id) || null,
    join_code: (stored_session == null ? void 0 : stored_session.join_code) || null,
    last_seen: (stored_session == null ? void 0 : stored_session.last_seen) || null
  });
  if (stored_session == null ? void 0 : stored_session.family_id) await family_actions.load_family();
  appstate.subscribe((state2) => document.documentElement.classList.toggle("dark", state2.theme === "dark"));
  appstate.subscribe(debounce$1((data) => set("appstate", data), 200));
})();
const PUBLIC_VERSION = "5";
if (typeof window !== "undefined") {
  ((_a = window.__svelte ?? (window.__svelte = {})).v ?? (_a.v = /* @__PURE__ */ new Set())).add(PUBLIC_VERSION);
}
const defaultWindow$2 = typeof window !== "undefined" ? window : void 0;
function getActiveElement$3(document2) {
  let activeElement = document2.activeElement;
  while (activeElement == null ? void 0 : activeElement.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
const _SvelteMap = class _SvelteMap extends Map {
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(value) {
    super();
    __privateAdd(this, _SvelteMap_instances);
    /** @type {Map<K, Source<number>>} */
    __privateAdd(this, _sources, /* @__PURE__ */ new Map());
    __privateAdd(this, _version, source(0));
    __privateAdd(this, _size, source(0));
    if (value) {
      for (var [key, v2] of value) {
        super.set(key, v2);
      }
      __privateGet(this, _size).v = super.size;
    }
  }
  /** @param {K} key */
  has(key) {
    var sources = __privateGet(this, _sources);
    var s = sources.get(key);
    if (s === void 0) {
      var ret = super.get(key);
      if (ret !== void 0) {
        s = source(0);
        sources.set(key, s);
      } else {
        get$4(__privateGet(this, _version));
        return false;
      }
    }
    get$4(s);
    return true;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(callbackfn, this_arg) {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    super.forEach(callbackfn, this_arg);
  }
  /** @param {K} key */
  get(key) {
    var sources = __privateGet(this, _sources);
    var s = sources.get(key);
    if (s === void 0) {
      var ret = super.get(key);
      if (ret !== void 0) {
        s = source(0);
        sources.set(key, s);
      } else {
        get$4(__privateGet(this, _version));
        return void 0;
      }
    }
    get$4(s);
    return super.get(key);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(key, value) {
    var _a2;
    var sources = __privateGet(this, _sources);
    var s = sources.get(key);
    var prev_res = super.get(key);
    var res = super.set(key, value);
    var version = __privateGet(this, _version);
    if (s === void 0) {
      s = source(0);
      sources.set(key, s);
      set$1(__privateGet(this, _size), super.size);
      increment(version);
    } else if (prev_res !== value) {
      increment(s);
      var v_reactions = version.reactions === null ? null : new Set(version.reactions);
      var needs_version_increase = v_reactions === null || !((_a2 = s.reactions) == null ? void 0 : _a2.every(
        (r2) => (
          /** @type {NonNullable<typeof v_reactions>} */
          v_reactions.has(r2)
        )
      ));
      if (needs_version_increase) {
        increment(version);
      }
    }
    return res;
  }
  /** @param {K} key */
  delete(key) {
    var sources = __privateGet(this, _sources);
    var s = sources.get(key);
    var res = super.delete(key);
    if (s !== void 0) {
      sources.delete(key);
      set$1(__privateGet(this, _size), super.size);
      set$1(s, -1);
      increment(__privateGet(this, _version));
    }
    return res;
  }
  clear() {
    if (super.size === 0) {
      return;
    }
    super.clear();
    var sources = __privateGet(this, _sources);
    set$1(__privateGet(this, _size), 0);
    for (var s of sources.values()) {
      set$1(s, -1);
    }
    increment(__privateGet(this, _version));
    sources.clear();
  }
  keys() {
    get$4(__privateGet(this, _version));
    return super.keys();
  }
  values() {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    return super.values();
  }
  entries() {
    __privateMethod(this, _SvelteMap_instances, read_all_fn).call(this);
    return super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    get$4(__privateGet(this, _size));
    return super.size;
  }
};
_sources = new WeakMap();
_version = new WeakMap();
_size = new WeakMap();
_SvelteMap_instances = new WeakSet();
read_all_fn = function() {
  get$4(__privateGet(this, _version));
  var sources = __privateGet(this, _sources);
  if (__privateGet(this, _size).v !== sources.size) {
    for (var key of __superGet(_SvelteMap.prototype, this, "keys").call(this)) {
      if (!sources.has(key)) {
        var s = source(0);
        sources.set(key, s);
      }
    }
  }
  for ([, s] of __privateGet(this, _sources)) {
    get$4(s);
  }
};
let SvelteMap = _SvelteMap;
class ReactiveValue {
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(fn, onsubscribe) {
    __privateAdd(this, _fn);
    __privateAdd(this, _subscribe);
    __privateSet(this, _fn, fn);
    __privateSet(this, _subscribe, createSubscriber(onsubscribe));
  }
  get current() {
    __privateGet(this, _subscribe).call(this);
    return __privateGet(this, _fn).call(this);
  }
}
_fn = new WeakMap();
_subscribe = new WeakMap();
const parenthesis_regex = /\(.+\)/;
const non_parenthesized_keywords = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class MediaQuery extends ReactiveValue {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(query, fallback) {
    let final_query = parenthesis_regex.test(query) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    query.split(/[\s,]+/).some((keyword) => non_parenthesized_keywords.has(keyword.trim())) ? query : `(${query})`;
    const q2 = window.matchMedia(final_query);
    super(
      () => q2.matches,
      (update) => on(q2, "change", update)
    );
  }
}
let ActiveElement$2 = (_b = class {
  constructor(options = {}) {
    __privateAdd(this, _document);
    __privateAdd(this, _subscribe2);
    const {
      window: window2 = defaultWindow$2,
      document: document2 = window2 == null ? void 0 : window2.document
    } = options;
    if (window2 === void 0) return;
    __privateSet(this, _document, document2);
    __privateSet(this, _subscribe2, createSubscriber((update) => {
      const cleanupFocusIn = on(window2, "focusin", update);
      const cleanupFocusOut = on(window2, "focusout", update);
      return () => {
        cleanupFocusIn();
        cleanupFocusOut();
      };
    }));
  }
  get current() {
    var _a2;
    (_a2 = __privateGet(this, _subscribe2)) == null ? void 0 : _a2.call(this);
    if (!__privateGet(this, _document)) return null;
    return getActiveElement$3(__privateGet(this, _document));
  }
}, _document = new WeakMap(), _subscribe2 = new WeakMap(), _b);
new ActiveElement$2();
function runEffect$1(flush, effect2) {
  switch (flush) {
    case "post":
      user_effect(effect2);
      break;
    case "pre":
      user_pre_effect(effect2);
      break;
  }
}
function runWatcher$1(sources, flush, effect2, options = {}) {
  const { lazy = false } = options;
  let active = !lazy;
  let previousValues = Array.isArray(sources) ? [] : void 0;
  runEffect$1(flush, () => {
    const values = Array.isArray(sources) ? sources.map((source2) => source2()) : sources();
    if (!active) {
      active = true;
      previousValues = values;
      return;
    }
    const cleanup = untrack(() => effect2(values, previousValues));
    previousValues = values;
    return cleanup;
  });
}
function watch$1(sources, effect2, options) {
  runWatcher$1(sources, "post", effect2, options);
}
function watchPre$1(sources, effect2, options) {
  runWatcher$1(sources, "pre", effect2, options);
}
watch$1.pre = watchPre$1;
function getStorage(storageType, window2) {
  switch (storageType) {
    case "local":
      return window2.localStorage;
    case "session":
      return window2.sessionStorage;
  }
}
class PersistedState {
  constructor(key, initialValue, options = {}) {
    __privateAdd(this, _PersistedState_instances);
    __privateAdd(this, _current);
    __privateAdd(this, _key);
    __privateAdd(this, _serializer);
    __privateAdd(this, _storage);
    __privateAdd(this, _subscribe3);
    __privateAdd(this, _version2, /* @__PURE__ */ state(0));
    __privateAdd(this, _handleStorageEvent, (event2) => {
      if (event2.key !== __privateGet(this, _key) || event2.newValue === null) return;
      __privateSet(this, _current, __privateMethod(this, _PersistedState_instances, deserialize_fn).call(this, event2.newValue));
      set$1(__privateGet(this, _version2), get$4(__privateGet(this, _version2)) + 1);
    });
    const {
      storage: storageType = "local",
      serializer = {
        serialize: JSON.stringify,
        deserialize: JSON.parse
      },
      syncTabs = true,
      window: window2 = defaultWindow$2
    } = options;
    __privateSet(this, _current, initialValue);
    __privateSet(this, _key, key);
    __privateSet(this, _serializer, serializer);
    if (window2 === void 0) return;
    const storage = getStorage(storageType, window2);
    __privateSet(this, _storage, storage);
    const existingValue = storage.getItem(key);
    if (existingValue !== null) {
      __privateSet(this, _current, __privateMethod(this, _PersistedState_instances, deserialize_fn).call(this, existingValue));
    } else {
      __privateMethod(this, _PersistedState_instances, serialize_fn).call(this, initialValue);
    }
    if (syncTabs && storageType === "local") {
      __privateSet(this, _subscribe3, createSubscriber(() => {
        return on(window2, "storage", __privateGet(this, _handleStorageEvent));
      }));
    }
  }
  get current() {
    var _a2, _b2;
    (_a2 = __privateGet(this, _subscribe3)) == null ? void 0 : _a2.call(this);
    get$4(__privateGet(this, _version2));
    const root2 = __privateMethod(this, _PersistedState_instances, deserialize_fn).call(this, (_b2 = __privateGet(this, _storage)) == null ? void 0 : _b2.getItem(__privateGet(this, _key))) ?? __privateGet(this, _current);
    const proxies = /* @__PURE__ */ new WeakMap();
    const proxy2 = (value) => {
      if (value === null || (value == null ? void 0 : value.constructor.name) === "Date" || typeof value !== "object") {
        return value;
      }
      let p2 = proxies.get(value);
      if (!p2) {
        p2 = new Proxy(value, {
          get: (target, property) => {
            get$4(__privateGet(this, _version2));
            return proxy2(Reflect.get(target, property));
          },
          set: (target, property, value2) => {
            set$1(__privateGet(this, _version2), get$4(__privateGet(this, _version2)) + 1);
            Reflect.set(target, property, value2);
            __privateMethod(this, _PersistedState_instances, serialize_fn).call(this, root2);
            return true;
          }
        });
        proxies.set(value, p2);
      }
      return p2;
    };
    return proxy2(root2);
  }
  set current(newValue) {
    __privateMethod(this, _PersistedState_instances, serialize_fn).call(this, newValue);
    set$1(__privateGet(this, _version2), get$4(__privateGet(this, _version2)) + 1);
  }
}
_current = new WeakMap();
_key = new WeakMap();
_serializer = new WeakMap();
_storage = new WeakMap();
_subscribe3 = new WeakMap();
_version2 = new WeakMap();
_handleStorageEvent = new WeakMap();
_PersistedState_instances = new WeakSet();
deserialize_fn = function(value) {
  try {
    return __privateGet(this, _serializer).deserialize(value);
  } catch (error) {
    console.error(`Error when parsing "${value}" from persisted store "${__privateGet(this, _key)}"`, error);
    return;
  }
};
serialize_fn = function(value) {
  var _a2;
  try {
    if (value != void 0) {
      (_a2 = __privateGet(this, _storage)) == null ? void 0 : _a2.setItem(__privateGet(this, _key), __privateGet(this, _serializer).serialize(value));
    }
  } catch (error) {
    console.error(`Error when writing value from persisted store "${__privateGet(this, _key)}" to ${__privateGet(this, _storage)}`, error);
  }
};
function sanitizeClassNames(classNames) {
  return classNames.filter((className) => className.length > 0);
}
const noopStorage = {
  getItem: (_key3) => null,
  setItem: (_key3, _value3) => {
  }
};
const isBrowser$1 = typeof document !== "undefined";
function isFunction$2(value) {
  return typeof value === "function";
}
function isObject$1(value) {
  return value !== null && typeof value === "object";
}
const BoxSymbol$1 = Symbol("box");
const isWritableSymbol$1 = Symbol("is-writable");
function isBox$1(value) {
  return isObject$1(value) && BoxSymbol$1 in value;
}
function isWritableBox$1(value) {
  return box$1.isBox(value) && isWritableSymbol$1 in value;
}
function box$1(initialValue) {
  let current = /* @__PURE__ */ state(proxy(initialValue));
  return {
    [BoxSymbol$1]: true,
    [isWritableSymbol$1]: true,
    get current() {
      return get$4(current);
    },
    set current(v2) {
      set$1(current, v2, true);
    }
  };
}
function boxWith$1(getter, setter) {
  const derived2 = /* @__PURE__ */ user_derived(getter);
  if (setter) {
    return {
      [BoxSymbol$1]: true,
      [isWritableSymbol$1]: true,
      get current() {
        return get$4(derived2);
      },
      set current(v2) {
        setter(v2);
      }
    };
  }
  return {
    [BoxSymbol$1]: true,
    get current() {
      return getter();
    }
  };
}
function boxFrom$1(value) {
  if (box$1.isBox(value)) return value;
  if (isFunction$2(value)) return box$1.with(value);
  return box$1(value);
}
function boxFlatten$1(boxes) {
  return Object.entries(boxes).reduce(
    (acc, [key, b]) => {
      if (!box$1.isBox(b)) {
        return Object.assign(acc, { [key]: b });
      }
      if (box$1.isWritableBox(b)) {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          },
          set(v2) {
            b.current = v2;
          }
        });
      } else {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          }
        });
      }
      return acc;
    },
    {}
  );
}
function toReadonlyBox$1(b) {
  if (!box$1.isWritableBox(b)) return b;
  return {
    [BoxSymbol$1]: true,
    get current() {
      return b.current;
    }
  };
}
box$1.from = boxFrom$1;
box$1.with = boxWith$1;
box$1.flatten = boxFlatten$1;
box$1.readonly = toReadonlyBox$1;
box$1.isBox = isBox$1;
box$1.isWritableBox = isWritableBox$1;
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var cjs = {};
var inlineStyleParser;
var hasRequiredInlineStyleParser;
function requireInlineStyleParser() {
  if (hasRequiredInlineStyleParser) return inlineStyleParser;
  hasRequiredInlineStyleParser = 1;
  var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  var NEWLINE_REGEX = /\n/g;
  var WHITESPACE_REGEX = /^\s*/;
  var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
  var COLON_REGEX = /^:\s*/;
  var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
  var SEMICOLON_REGEX = /^[;\s]*/;
  var TRIM_REGEX = /^\s+|\s+$/g;
  var NEWLINE = "\n";
  var FORWARD_SLASH = "/";
  var ASTERISK = "*";
  var EMPTY_STRING = "";
  var TYPE_COMMENT = "comment";
  var TYPE_DECLARATION = "declaration";
  inlineStyleParser = function(style, options) {
    if (typeof style !== "string") {
      throw new TypeError("First argument must be a string");
    }
    if (!style) return [];
    options = options || {};
    var lineno = 1;
    var column = 1;
    function updatePosition(str) {
      var lines = str.match(NEWLINE_REGEX);
      if (lines) lineno += lines.length;
      var i2 = str.lastIndexOf(NEWLINE);
      column = ~i2 ? str.length - i2 : column + str.length;
    }
    function position() {
      var start = { line: lineno, column };
      return function(node) {
        node.position = new Position(start);
        whitespace2();
        return node;
      };
    }
    function Position(start) {
      this.start = start;
      this.end = { line: lineno, column };
      this.source = options.source;
    }
    Position.prototype.content = style;
    function error(msg) {
      var err = new Error(
        options.source + ":" + lineno + ":" + column + ": " + msg
      );
      err.reason = msg;
      err.filename = options.source;
      err.line = lineno;
      err.column = column;
      err.source = style;
      if (options.silent) ;
      else {
        throw err;
      }
    }
    function match(re) {
      var m = re.exec(style);
      if (!m) return;
      var str = m[0];
      updatePosition(str);
      style = style.slice(str.length);
      return m;
    }
    function whitespace2() {
      match(WHITESPACE_REGEX);
    }
    function comments(rules) {
      var c;
      rules = rules || [];
      while (c = comment2()) {
        if (c !== false) {
          rules.push(c);
        }
      }
      return rules;
    }
    function comment2() {
      var pos = position();
      if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;
      var i2 = 2;
      while (EMPTY_STRING != style.charAt(i2) && (ASTERISK != style.charAt(i2) || FORWARD_SLASH != style.charAt(i2 + 1))) {
        ++i2;
      }
      i2 += 2;
      if (EMPTY_STRING === style.charAt(i2 - 1)) {
        return error("End of comment missing");
      }
      var str = style.slice(2, i2 - 2);
      column += 2;
      updatePosition(str);
      style = style.slice(i2);
      column += 2;
      return pos({
        type: TYPE_COMMENT,
        comment: str
      });
    }
    function declaration() {
      var pos = position();
      var prop2 = match(PROPERTY_REGEX);
      if (!prop2) return;
      comment2();
      if (!match(COLON_REGEX)) return error("property missing ':'");
      var val = match(VALUE_REGEX);
      var ret = pos({
        type: TYPE_DECLARATION,
        property: trim(prop2[0].replace(COMMENT_REGEX, EMPTY_STRING)),
        value: val ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING)) : EMPTY_STRING
      });
      match(SEMICOLON_REGEX);
      return ret;
    }
    function declarations() {
      var decls = [];
      comments(decls);
      var decl;
      while (decl = declaration()) {
        if (decl !== false) {
          decls.push(decl);
          comments(decls);
        }
      }
      return decls;
    }
    whitespace2();
    return declarations();
  };
  function trim(str) {
    return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
  }
  return inlineStyleParser;
}
var hasRequiredCjs;
function requireCjs() {
  if (hasRequiredCjs) return cjs;
  hasRequiredCjs = 1;
  var __importDefault = cjs && cjs.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(cjs, "__esModule", { value: true });
  cjs.default = StyleToObject2;
  var inline_style_parser_1 = __importDefault(requireInlineStyleParser());
  function StyleToObject2(style, iterator) {
    var styleObject = null;
    if (!style || typeof style !== "string") {
      return styleObject;
    }
    var declarations = (0, inline_style_parser_1.default)(style);
    var hasIterator = typeof iterator === "function";
    declarations.forEach(function(declaration) {
      if (declaration.type !== "declaration") {
        return;
      }
      var property = declaration.property, value = declaration.value;
      if (hasIterator) {
        iterator(property, value, declaration);
      } else if (value) {
        styleObject = styleObject || {};
        styleObject[property] = value;
      }
    });
    return styleObject;
  }
  return cjs;
}
var cjsExports = requireCjs();
const StyleToObject = /* @__PURE__ */ getDefaultExportFromCjs(cjsExports);
const parse = StyleToObject.default || StyleToObject;
function createParser$1(matcher, replacer) {
  const regex = RegExp(matcher, "g");
  return (str) => {
    if (typeof str !== "string") {
      throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
    }
    if (!str.match(regex))
      return str;
    return str.replace(regex, replacer);
  };
}
const camelToKebab$1 = createParser$1(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS$1(styleObj) {
  if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  return Object.keys(styleObj).map((property) => `${camelToKebab$1(property)}: ${styleObj[property]};`).join("\n");
}
function styleToString$1(style = {}) {
  return styleToCSS$1(style).replace("\n", " ");
}
const srOnlyStyles$1 = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
styleToString$1(srOnlyStyles$1);
const defaultWindow$1 = typeof window !== "undefined" ? window : void 0;
function getActiveElement$2(document2) {
  let activeElement = document2.activeElement;
  while (activeElement == null ? void 0 : activeElement.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
let ActiveElement$1 = (_c = class {
  constructor(options = {}) {
    __privateAdd(this, _document2);
    __privateAdd(this, _subscribe4);
    const {
      window: window2 = defaultWindow$1,
      document: document2 = window2 == null ? void 0 : window2.document
    } = options;
    if (window2 === void 0) return;
    __privateSet(this, _document2, document2);
    __privateSet(this, _subscribe4, createSubscriber((update) => {
      const cleanupFocusIn = on(window2, "focusin", update);
      const cleanupFocusOut = on(window2, "focusout", update);
      return () => {
        cleanupFocusIn();
        cleanupFocusOut();
      };
    }));
  }
  get current() {
    var _a2;
    (_a2 = __privateGet(this, _subscribe4)) == null ? void 0 : _a2.call(this);
    if (!__privateGet(this, _document2)) return null;
    return getActiveElement$2(__privateGet(this, _document2));
  }
}, _document2 = new WeakMap(), _subscribe4 = new WeakMap(), _c);
new ActiveElement$1();
const modeStorageKey = box$1("mode-watcher-mode");
const themeStorageKey = box$1("mode-watcher-theme");
const modes = ["dark", "light", "system"];
function isValidMode(value) {
  if (typeof value !== "string")
    return false;
  return modes.includes(value);
}
class UserPrefersMode {
  constructor() {
    __privateAdd(this, _UserPrefersMode_instances);
    __privateAdd(this, _defaultValue, "system");
    __privateAdd(this, _storage2, isBrowser$1 ? localStorage : noopStorage);
    __privateAdd(this, _initialValue, __privateGet(this, _storage2).getItem(modeStorageKey.current));
    __privateAdd(this, _value, isValidMode(__privateGet(this, _initialValue)) ? __privateGet(this, _initialValue) : __privateGet(this, _defaultValue));
    __privateAdd(this, _persisted, /* @__PURE__ */ state(proxy(__privateMethod(this, _UserPrefersMode_instances, makePersisted_fn).call(this))));
    effect_root(() => {
      return watch$1.pre(() => modeStorageKey.current, (_2, prevStorageKey) => {
        const currModeValue = get$4(__privateGet(this, _persisted)).current;
        set$1(__privateGet(this, _persisted), __privateMethod(this, _UserPrefersMode_instances, makePersisted_fn).call(this, currModeValue), true);
        if (prevStorageKey) {
          localStorage.removeItem(prevStorageKey);
        }
      });
    });
  }
  get current() {
    return get$4(__privateGet(this, _persisted)).current;
  }
  set current(newValue) {
    get$4(__privateGet(this, _persisted)).current = newValue;
  }
}
_defaultValue = new WeakMap();
_storage2 = new WeakMap();
_initialValue = new WeakMap();
_value = new WeakMap();
_persisted = new WeakMap();
_UserPrefersMode_instances = new WeakSet();
makePersisted_fn = function(value = __privateGet(this, _value)) {
  return new PersistedState(modeStorageKey.current, value, {
    serializer: {
      serialize: (v2) => v2,
      deserialize: (v2) => {
        if (isValidMode(v2)) return v2;
        return __privateGet(this, _defaultValue);
      }
    }
  });
};
class SystemPrefersMode {
  constructor() {
    __privateAdd(this, _defaultValue2);
    __privateAdd(this, _track, true);
    __privateAdd(this, _current2, /* @__PURE__ */ state(proxy(__privateGet(this, _defaultValue2))));
    __privateAdd(this, _mediaQueryState, typeof window !== "undefined" && typeof window.matchMedia === "function" ? new MediaQuery("prefers-color-scheme: light") : { current: false });
    effect_root(() => {
      user_pre_effect(() => {
        if (!__privateGet(this, _track)) return;
        this.query();
      });
    });
    this.query = this.query.bind(this);
    this.tracking = this.tracking.bind(this);
  }
  query() {
    if (!isBrowser$1) return;
    set$1(__privateGet(this, _current2), __privateGet(this, _mediaQueryState).current ? "light" : "dark", true);
  }
  tracking(active) {
    __privateSet(this, _track, active);
  }
  get current() {
    return get$4(__privateGet(this, _current2));
  }
}
_defaultValue2 = new WeakMap();
_track = new WeakMap();
_current2 = new WeakMap();
_mediaQueryState = new WeakMap();
const userPrefersMode = new UserPrefersMode();
const systemPrefersMode = new SystemPrefersMode();
class CustomTheme {
  constructor() {
    __privateAdd(this, _CustomTheme_instances);
    __privateAdd(this, _storage3, isBrowser$1 ? localStorage : noopStorage);
    __privateAdd(this, _initialValue2, __privateGet(this, _storage3).getItem(themeStorageKey.current));
    __privateAdd(this, _value2, __privateGet(this, _initialValue2) === null || __privateGet(this, _initialValue2) === void 0 ? "" : __privateGet(this, _initialValue2));
    __privateAdd(this, _persisted2, /* @__PURE__ */ state(proxy(__privateMethod(this, _CustomTheme_instances, makePersisted_fn2).call(this))));
    effect_root(() => {
      return watch$1.pre(() => themeStorageKey.current, (_2, prevStorageKey) => {
        const currModeValue = get$4(__privateGet(this, _persisted2)).current;
        set$1(__privateGet(this, _persisted2), __privateMethod(this, _CustomTheme_instances, makePersisted_fn2).call(this, currModeValue), true);
        if (prevStorageKey) {
          localStorage.removeItem(prevStorageKey);
        }
      });
    });
  }
  /**
   * The current theme.
   * @returns The current theme.
   */
  get current() {
    return get$4(__privateGet(this, _persisted2)).current;
  }
  /**
   * Set the current theme.
   * @param newValue The new theme to set.
   */
  set current(newValue) {
    get$4(__privateGet(this, _persisted2)).current = newValue;
  }
}
_storage3 = new WeakMap();
_initialValue2 = new WeakMap();
_value2 = new WeakMap();
_persisted2 = new WeakMap();
_CustomTheme_instances = new WeakSet();
makePersisted_fn2 = function(value = __privateGet(this, _value2)) {
  return new PersistedState(themeStorageKey.current, value, {
    serializer: {
      serialize: (v2) => {
        if (typeof v2 !== "string") return "";
        return v2;
      },
      deserialize: (v2) => v2
    }
  });
};
const customTheme = new CustomTheme();
let timeoutAction;
let timeoutEnable;
let hasLoaded = false;
let styleElement = null;
function getStyleElement() {
  if (styleElement)
    return styleElement;
  styleElement = document.createElement("style");
  styleElement.appendChild(document.createTextNode(`* {
		-webkit-transition: none !important;
		-moz-transition: none !important;
		-o-transition: none !important;
		-ms-transition: none !important;
		transition: none !important;
	}`));
  return styleElement;
}
function withoutTransition(action2) {
  var _a2;
  if (typeof document === "undefined")
    return;
  if (!hasLoaded) {
    hasLoaded = true;
    action2();
    return;
  }
  const isTest = typeof process !== "undefined" && ((_a2 = process.env) == null ? void 0 : _a2.NODE_ENV) === "test" || typeof window !== "undefined" && window.__vitest_worker__;
  if (isTest) {
    action2();
    return;
  }
  clearTimeout(timeoutAction);
  clearTimeout(timeoutEnable);
  const style = getStyleElement();
  const disable = () => document.head.appendChild(style);
  const enable = () => {
    if (style.parentNode) {
      document.head.removeChild(style);
    }
  };
  if (typeof window.requestAnimationFrame !== "undefined") {
    disable();
    window.requestAnimationFrame(() => {
      action2();
      window.requestAnimationFrame(enable);
    });
    return;
  }
  disable();
  timeoutAction = window.setTimeout(() => {
    action2();
    timeoutEnable = window.setTimeout(enable, 16);
  }, 16);
}
const themeColors = box$1(void 0);
const disableTransitions = box$1(true);
const darkClassNames = box$1([]);
const lightClassNames = box$1([]);
function createDerivedMode() {
  const current = /* @__PURE__ */ user_derived(() => {
    if (!isBrowser$1) return void 0;
    const derivedMode2 = userPrefersMode.current === "system" ? systemPrefersMode.current : userPrefersMode.current;
    const sanitizedDarkClassNames = sanitizeClassNames(darkClassNames.current);
    const sanitizedLightClassNames = sanitizeClassNames(lightClassNames.current);
    function update() {
      const htmlEl = document.documentElement;
      const themeColorEl = document.querySelector('meta[name="theme-color"]');
      if (derivedMode2 === "light") {
        if (sanitizedDarkClassNames.length) htmlEl.classList.remove(...sanitizedDarkClassNames);
        if (sanitizedLightClassNames.length) htmlEl.classList.add(...sanitizedLightClassNames);
        htmlEl.style.colorScheme = "light";
        if (themeColorEl && themeColors.current) {
          themeColorEl.setAttribute("content", themeColors.current.light);
        }
      } else {
        if (sanitizedLightClassNames.length) htmlEl.classList.remove(...sanitizedLightClassNames);
        if (sanitizedDarkClassNames.length) htmlEl.classList.add(...sanitizedDarkClassNames);
        htmlEl.style.colorScheme = "dark";
        if (themeColorEl && themeColors.current) {
          themeColorEl.setAttribute("content", themeColors.current.dark);
        }
      }
    }
    if (disableTransitions.current) {
      withoutTransition(update);
    } else {
      update();
    }
    return derivedMode2;
  });
  return {
    get current() {
      return get$4(current);
    }
  };
}
function createDerivedTheme() {
  const current = /* @__PURE__ */ user_derived(() => {
    customTheme.current;
    if (!isBrowser$1) return void 0;
    function update() {
      const htmlEl = document.documentElement;
      htmlEl.setAttribute("data-theme", customTheme.current);
    }
    if (disableTransitions.current) {
      withoutTransition(update);
    } else {
      update();
    }
    return customTheme.current;
  });
  return {
    get current() {
      return get$4(current);
    }
  };
}
const derivedMode = createDerivedMode();
const derivedTheme = createDerivedTheme();
function setMode(mode) {
  userPrefersMode.current = mode;
}
function setTheme(newTheme) {
  customTheme.current = newTheme;
}
function defineConfig(config) {
  return config;
}
function setInitialMode({ defaultMode = "system", themeColors: themeColors2, darkClassNames: darkClassNames2 = ["dark"], lightClassNames: lightClassNames2 = [], defaultTheme = "", modeStorageKey: modeStorageKey2 = "mode-watcher-mode", themeStorageKey: themeStorageKey2 = "mode-watcher-theme" }) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem(modeStorageKey2) ?? defaultMode;
  const theme = localStorage.getItem(themeStorageKey2) ?? defaultTheme;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  if (light) {
    if (darkClassNames2.length)
      rootEl.classList.remove(...darkClassNames2.filter(Boolean));
    if (lightClassNames2.length)
      rootEl.classList.add(...lightClassNames2.filter(Boolean));
  } else {
    if (lightClassNames2.length)
      rootEl.classList.remove(...lightClassNames2.filter(Boolean));
    if (darkClassNames2.length)
      rootEl.classList.add(...darkClassNames2.filter(Boolean));
  }
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors2) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors2.light : themeColors2.dark);
    }
  }
  if (theme) {
    rootEl.setAttribute("data-theme", theme);
    localStorage.setItem(themeStorageKey2, theme);
  }
  localStorage.setItem(modeStorageKey2, mode);
}
var root_1$h = /* @__PURE__ */ from_html(`<meta name="theme-color"/>`);
function Mode_watcher_lite($$anchor, $$props) {
  push($$props, true);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var meta = root_1$h();
      template_effect(() => set_attribute(meta, "content", $$props.themeColors.dark));
      append($$anchor2, meta);
    };
    if_block(node, ($$render) => {
      if ($$props.themeColors) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$n = /* @__PURE__ */ from_html(`<meta name="theme-color"/>`);
var root_1$g = /* @__PURE__ */ from_html(`<!> <!>`, 1);
function Mode_watcher_full($$anchor, $$props) {
  push($$props, true);
  let trueNonce = prop($$props, "trueNonce", 3, "");
  head(($$anchor2) => {
    var fragment = root_1$g();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor3) => {
        var meta = root_2$n();
        template_effect(() => set_attribute(meta, "content", $$props.themeColors.dark));
        append($$anchor3, meta);
      };
      if_block(node, ($$render) => {
        if ($$props.themeColors) $$render(consequent);
      });
    }
    var node_1 = sibling(node, 2);
    html(node_1, () => `<script${trueNonce() ? ` nonce=${trueNonce()}` : ""}>(` + setInitialMode.toString() + `)(` + JSON.stringify($$props.initConfig) + `);<\/script>`);
    append($$anchor2, fragment);
  });
  pop();
}
function Mode_watcher($$anchor, $$props) {
  push($$props, true);
  let track = prop($$props, "track", 3, true), defaultMode = prop($$props, "defaultMode", 3, "system"), disableTransitionsProp = prop($$props, "disableTransitions", 3, true), darkClassNamesProp = prop($$props, "darkClassNames", 19, () => ["dark"]), lightClassNamesProp = prop($$props, "lightClassNames", 19, () => []), defaultTheme = prop($$props, "defaultTheme", 3, ""), nonce = prop($$props, "nonce", 3, ""), themeStorageKeyProp = prop($$props, "themeStorageKey", 3, "mode-watcher-theme"), modeStorageKeyProp = prop($$props, "modeStorageKey", 3, "mode-watcher-mode"), disableHeadScriptInjection = prop($$props, "disableHeadScriptInjection", 3, false);
  modeStorageKey.current = modeStorageKeyProp();
  themeStorageKey.current = themeStorageKeyProp();
  darkClassNames.current = darkClassNamesProp();
  lightClassNames.current = lightClassNamesProp();
  disableTransitions.current = disableTransitionsProp();
  themeColors.current = $$props.themeColors;
  user_pre_effect(() => {
    disableTransitions.current = disableTransitionsProp();
  });
  user_pre_effect(() => {
    themeColors.current = $$props.themeColors;
  });
  user_pre_effect(() => {
    darkClassNames.current = darkClassNamesProp();
  });
  user_pre_effect(() => {
    lightClassNames.current = lightClassNamesProp();
  });
  user_pre_effect(() => {
    modeStorageKey.current = modeStorageKeyProp();
  });
  user_pre_effect(() => {
    themeStorageKey.current = themeStorageKeyProp();
  });
  user_pre_effect(() => {
    derivedMode.current;
    modeStorageKey.current;
    themeStorageKey.current;
    derivedTheme.current;
  });
  onMount(() => {
    systemPrefersMode.tracking(track());
    systemPrefersMode.query();
    const localStorageMode = localStorage.getItem(modeStorageKey.current);
    setMode(isValidMode(localStorageMode) ? localStorageMode : defaultMode());
    const localStorageTheme = localStorage.getItem(themeStorageKey.current);
    setTheme(localStorageTheme || defaultTheme());
  });
  const initConfig = defineConfig({
    defaultMode: defaultMode(),
    themeColors: $$props.themeColors,
    darkClassNames: darkClassNamesProp(),
    lightClassNames: lightClassNamesProp(),
    defaultTheme: defaultTheme(),
    modeStorageKey: modeStorageKeyProp(),
    themeStorageKey: themeStorageKeyProp()
  });
  const trueNonce = /* @__PURE__ */ user_derived(() => typeof window === "undefined" ? nonce() : "");
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Mode_watcher_lite($$anchor2, {
        get themeColors() {
          return themeColors.current;
        }
      });
    };
    var alternate = ($$anchor2) => {
      Mode_watcher_full($$anchor2, {
        get trueNonce() {
          return get$4(trueNonce);
        },
        get initConfig() {
          return initConfig;
        },
        get themeColors() {
          return themeColors.current;
        }
      });
    };
    if_block(node, ($$render) => {
      if (disableHeadScriptInjection()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function convert(str, loose) {
  if (str instanceof RegExp) return { keys: false, pattern: str };
  var c, o, tmp, ext, keys = [], pattern = "", arr = str.split("/");
  arr[0] || arr.shift();
  while (tmp = arr.shift()) {
    c = tmp[0];
    if (c === "*") {
      keys.push("wild");
      pattern += "/(.*)";
    } else if (c === ":") {
      o = tmp.indexOf("?", 1);
      ext = tmp.indexOf(".", 1);
      keys.push(tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length));
      pattern += !!~o && !~ext ? "(?:/([^/]+?))?" : "/([^/]+?)";
      if (!!~ext) pattern += (!!~o ? "?" : "") + "\\" + tmp.substring(ext);
    } else {
      pattern += "/" + tmp;
    }
  }
  return {
    keys,
    pattern: new RegExp("^" + pattern + "/?$", "i")
  };
}
function Navaid(base, on404) {
  var rgx, curr, routes2 = [], $ = {};
  var fmt = $.format = function(uri) {
    if (!uri) return uri;
    uri = "/" + uri.replace(/^\/|\/$/g, "");
    return rgx.test(uri) && uri.replace(rgx, "/");
  };
  base = "/" + (base || "").replace(/^\/|\/$/g, "");
  rgx = base == "/" ? /^\/+/ : new RegExp("^\\" + base + "(?=\\/|$)\\/?", "i");
  $.route = function(uri, replace) {
    if (uri[0] == "/" && !rgx.test(uri)) uri = base + uri;
    history[(uri === curr || replace ? "replace" : "push") + "State"](uri, null, uri);
  };
  $.on = function(pat, fn) {
    (pat = convert(pat)).fn = fn;
    routes2.push(pat);
    return $;
  };
  $.run = function(uri) {
    var i2 = 0, params = {}, arr, obj;
    if (uri = fmt(uri || location.pathname)) {
      uri = uri.match(/[^\?#]*/)[0];
      for (curr = uri; i2 < routes2.length; i2++) {
        if (arr = (obj = routes2[i2]).pattern.exec(uri)) {
          for (i2 = 0; i2 < obj.keys.length; ) {
            params[obj.keys[i2]] = arr[++i2] || null;
          }
          obj.fn(params);
          return $;
        }
      }
      if (on404) on404(uri);
    }
    return $;
  };
  $.listen = function(u2) {
    wrap("push");
    wrap("replace");
    function run2(e) {
      $.run();
    }
    function click(e) {
      var x2 = e.target.closest("a"), y2 = x2 && x2.getAttribute("href");
      if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button || e.defaultPrevented) return;
      if (!y2 || x2.target || x2.host !== location.host || y2[0] == "#") return;
      if (y2[0] != "/" || rgx.test(y2)) {
        e.preventDefault();
        $.route(y2);
      }
    }
    addEventListener("popstate", run2);
    addEventListener("replacestate", run2);
    addEventListener("pushstate", run2);
    addEventListener("click", click);
    $.unlisten = function() {
      removeEventListener("popstate", run2);
      removeEventListener("replacestate", run2);
      removeEventListener("pushstate", run2);
      removeEventListener("click", click);
    };
    return $.run(u2);
  };
  return $;
}
function wrap(type, fn) {
  if (history[type]) return;
  history[type] = type;
  fn = history[type += "State"];
  history[type] = function(uri) {
    var ev = new Event(type.toLowerCase());
    ev.uri = uri;
    fn.apply(this, arguments);
    return dispatchEvent(ev);
  };
}
enable_legacy_mode_flag();
function isFunction$1(value) {
  return typeof value === "function";
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
const CLASS_VALUE_PRIMITIVE_TYPES = ["string", "number", "bigint", "boolean"];
function isClassValue(value) {
  if (value === null || value === void 0)
    return true;
  if (CLASS_VALUE_PRIMITIVE_TYPES.includes(typeof value))
    return true;
  if (Array.isArray(value))
    return value.every((item) => isClassValue(item));
  if (typeof value === "object") {
    if (Object.getPrototypeOf(value) !== Object.prototype)
      return false;
    return true;
  }
  return false;
}
const BoxSymbol = Symbol("box");
const isWritableSymbol = Symbol("is-writable");
function isBox(value) {
  return isObject(value) && BoxSymbol in value;
}
function isWritableBox(value) {
  return box.isBox(value) && isWritableSymbol in value;
}
function box(initialValue) {
  let current = /* @__PURE__ */ state(proxy(initialValue));
  return {
    [BoxSymbol]: true,
    [isWritableSymbol]: true,
    get current() {
      return get$4(current);
    },
    set current(v2) {
      set$1(current, v2, true);
    }
  };
}
function boxWith(getter, setter) {
  const derived2 = /* @__PURE__ */ user_derived(getter);
  if (setter) {
    return {
      [BoxSymbol]: true,
      [isWritableSymbol]: true,
      get current() {
        return get$4(derived2);
      },
      set current(v2) {
        setter(v2);
      }
    };
  }
  return {
    [BoxSymbol]: true,
    get current() {
      return getter();
    }
  };
}
function boxFrom(value) {
  if (box.isBox(value)) return value;
  if (isFunction$1(value)) return box.with(value);
  return box(value);
}
function boxFlatten(boxes) {
  return Object.entries(boxes).reduce(
    (acc, [key, b]) => {
      if (!box.isBox(b)) {
        return Object.assign(acc, { [key]: b });
      }
      if (box.isWritableBox(b)) {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          },
          set(v2) {
            b.current = v2;
          }
        });
      } else {
        Object.defineProperty(acc, key, {
          get() {
            return b.current;
          }
        });
      }
      return acc;
    },
    {}
  );
}
function toReadonlyBox(b) {
  if (!box.isWritableBox(b)) return b;
  return {
    [BoxSymbol]: true,
    get current() {
      return b.current;
    }
  };
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
function composeHandlers(...handlers) {
  return function(e) {
    var _a2;
    for (const handler of handlers) {
      if (!handler)
        continue;
      if (e.defaultPrevented)
        return;
      if (typeof handler === "function") {
        handler.call(this, e);
      } else {
        (_a2 = handler.current) == null ? void 0 : _a2.call(this, e);
      }
    }
  };
}
const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char))
    return void 0;
  return char !== char.toLowerCase();
}
function splitByCase(str) {
  const parts = [];
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = STR_SPLITTERS.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function pascalCase(str) {
  if (!str)
    return "";
  return splitByCase(str).map((p2) => upperFirst(p2)).join("");
}
function camelCase(str) {
  return lowerFirst(pascalCase(str || ""));
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function cssToStyleObj(css) {
  if (!css)
    return {};
  const styleObj = {};
  function iterator(name, value) {
    if (name.startsWith("-moz-") || name.startsWith("-webkit-") || name.startsWith("-ms-") || name.startsWith("-o-")) {
      styleObj[pascalCase(name)] = value;
      return;
    }
    if (name.startsWith("--")) {
      styleObj[name] = value;
      return;
    }
    styleObj[camelCase(name)] = value;
  }
  parse(css, iterator);
  return styleObj;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function createParser(matcher, replacer) {
  const regex = RegExp(matcher, "g");
  return (str) => {
    if (typeof str !== "string") {
      throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
    }
    if (!str.match(regex))
      return str;
    return str.replace(regex, replacer);
  };
}
const camelToKebab = createParser(/[A-Z]/, (match) => `-${match.toLowerCase()}`);
function styleToCSS(styleObj) {
  if (!styleObj || typeof styleObj !== "object" || Array.isArray(styleObj)) {
    throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
  }
  return Object.keys(styleObj).map((property) => `${camelToKebab(property)}: ${styleObj[property]};`).join("\n");
}
function styleToString(style = {}) {
  return styleToCSS(style).replace("\n", " ");
}
const srOnlyStyles = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
styleToString(srOnlyStyles);
const EVENT_LIST = [
  "onabort",
  "onanimationcancel",
  "onanimationend",
  "onanimationiteration",
  "onanimationstart",
  "onauxclick",
  "onbeforeinput",
  "onbeforetoggle",
  "onblur",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncompositionend",
  "oncompositionstart",
  "oncompositionupdate",
  "oncontextlost",
  "oncontextmenu",
  "oncontextrestored",
  "oncopy",
  "oncuechange",
  "oncut",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "onfocusin",
  "onfocusout",
  "onformdata",
  "ongotpointercapture",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onlostpointercapture",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onpaste",
  "onpause",
  "onplay",
  "onplaying",
  "onpointercancel",
  "onpointerdown",
  "onpointerenter",
  "onpointerleave",
  "onpointermove",
  "onpointerout",
  "onpointerover",
  "onpointerup",
  "onprogress",
  "onratechange",
  "onreset",
  "onresize",
  "onscroll",
  "onscrollend",
  "onsecuritypolicyviolation",
  "onseeked",
  "onseeking",
  "onselect",
  "onselectionchange",
  "onselectstart",
  "onslotchange",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "ontouchcancel",
  "ontouchend",
  "ontouchmove",
  "ontouchstart",
  "ontransitioncancel",
  "ontransitionend",
  "ontransitionrun",
  "ontransitionstart",
  "onvolumechange",
  "onwaiting",
  "onwebkitanimationend",
  "onwebkitanimationiteration",
  "onwebkitanimationstart",
  "onwebkittransitionend",
  "onwheel"
];
const EVENT_LIST_SET = new Set(EVENT_LIST);
function isEventHandler(key) {
  return EVENT_LIST_SET.has(key);
}
function mergeProps(...args) {
  const result = { ...args[0] };
  for (let i2 = 1; i2 < args.length; i2++) {
    const props = args[i2];
    if (!props)
      continue;
    for (const key of Object.keys(props)) {
      const a2 = result[key];
      const b = props[key];
      const aIsFunction = typeof a2 === "function";
      const bIsFunction = typeof b === "function";
      if (aIsFunction && typeof bIsFunction && isEventHandler(key)) {
        const aHandler = a2;
        const bHandler = b;
        result[key] = composeHandlers(aHandler, bHandler);
      } else if (aIsFunction && bIsFunction) {
        result[key] = executeCallbacks(a2, b);
      } else if (key === "class") {
        const aIsClassValue = isClassValue(a2);
        const bIsClassValue = isClassValue(b);
        if (aIsClassValue && bIsClassValue) {
          result[key] = clsx$1(a2, b);
        } else if (aIsClassValue) {
          result[key] = clsx$1(a2);
        } else if (bIsClassValue) {
          result[key] = clsx$1(b);
        }
      } else if (key === "style") {
        const aIsObject = typeof a2 === "object";
        const bIsObject = typeof b === "object";
        const aIsString = typeof a2 === "string";
        const bIsString = typeof b === "string";
        if (aIsObject && bIsObject) {
          result[key] = { ...a2, ...b };
        } else if (aIsObject && bIsString) {
          const parsedStyle = cssToStyleObj(b);
          result[key] = { ...a2, ...parsedStyle };
        } else if (aIsString && bIsObject) {
          const parsedStyle = cssToStyleObj(a2);
          result[key] = { ...parsedStyle, ...b };
        } else if (aIsString && bIsString) {
          const parsedStyleA = cssToStyleObj(a2);
          const parsedStyleB = cssToStyleObj(b);
          result[key] = { ...parsedStyleA, ...parsedStyleB };
        } else if (aIsObject) {
          result[key] = a2;
        } else if (bIsObject) {
          result[key] = b;
        } else if (aIsString) {
          result[key] = a2;
        } else if (bIsString) {
          result[key] = b;
        }
      } else {
        result[key] = b !== void 0 ? b : a2;
      }
    }
    for (const key of Object.getOwnPropertySymbols(props)) {
      const a2 = result[key];
      const b = props[key];
      result[key] = b !== void 0 ? b : a2;
    }
  }
  if (typeof result.style === "object") {
    result.style = styleToString(result.style).replaceAll("\n", " ");
  }
  if (result.hidden !== true) {
    result.hidden = void 0;
    delete result.hidden;
  }
  if (result.disabled !== true) {
    result.disabled = void 0;
    delete result.disabled;
  }
  return result;
}
const defaultWindow = typeof window !== "undefined" ? window : void 0;
function getActiveElement$1(document2) {
  let activeElement = document2.activeElement;
  while (activeElement == null ? void 0 : activeElement.shadowRoot) {
    const node = activeElement.shadowRoot.activeElement;
    if (node === activeElement)
      break;
    else
      activeElement = node;
  }
  return activeElement;
}
class ActiveElement {
  constructor(options = {}) {
    __privateAdd(this, _document3);
    __privateAdd(this, _subscribe5);
    const {
      window: window2 = defaultWindow,
      document: document2 = window2 == null ? void 0 : window2.document
    } = options;
    if (window2 === void 0) return;
    __privateSet(this, _document3, document2);
    __privateSet(this, _subscribe5, createSubscriber((update) => {
      const cleanupFocusIn = on(window2, "focusin", update);
      const cleanupFocusOut = on(window2, "focusout", update);
      return () => {
        cleanupFocusIn();
        cleanupFocusOut();
      };
    }));
  }
  get current() {
    var _a2;
    (_a2 = __privateGet(this, _subscribe5)) == null ? void 0 : _a2.call(this);
    if (!__privateGet(this, _document3)) return null;
    return getActiveElement$1(__privateGet(this, _document3));
  }
}
_document3 = new WeakMap();
_subscribe5 = new WeakMap();
new ActiveElement();
function isFunction(value) {
  return typeof value === "function";
}
class Context {
  /**
   * @param name The name of the context.
   * This is used for generating the context key and error messages.
   */
  constructor(name) {
    __privateAdd(this, _name);
    __privateAdd(this, _key2);
    __privateSet(this, _name, name);
    __privateSet(this, _key2, Symbol(name));
  }
  /**
   * The key used to get and set the context.
   *
   * It is not recommended to use this value directly.
   * Instead, use the methods provided by this class.
   */
  get key() {
    return __privateGet(this, _key2);
  }
  /**
   * Checks whether this has been set in the context of a parent component.
   *
   * Must be called during component initialisation.
   */
  exists() {
    return hasContext(__privateGet(this, _key2));
  }
  /**
   * Retrieves the context that belongs to the closest parent component.
   *
   * Must be called during component initialisation.
   *
   * @throws An error if the context does not exist.
   */
  get() {
    const context = getContext(__privateGet(this, _key2));
    if (context === void 0) {
      throw new Error(`Context "${__privateGet(this, _name)}" not found`);
    }
    return context;
  }
  /**
   * Retrieves the context that belongs to the closest parent component,
   * or the given fallback value if the context does not exist.
   *
   * Must be called during component initialisation.
   */
  getOr(fallback) {
    const context = getContext(__privateGet(this, _key2));
    if (context === void 0) {
      return fallback;
    }
    return context;
  }
  /**
   * Associates the given value with the current component and returns it.
   *
   * Must be called during component initialisation.
   */
  set(context) {
    return setContext(__privateGet(this, _key2), context);
  }
}
_name = new WeakMap();
_key2 = new WeakMap();
function runEffect(flush, effect2) {
  switch (flush) {
    case "post":
      user_effect(effect2);
      break;
    case "pre":
      user_pre_effect(effect2);
      break;
  }
}
function runWatcher(sources, flush, effect2, options = {}) {
  const { lazy = false } = options;
  let active = !lazy;
  let previousValues = Array.isArray(sources) ? [] : void 0;
  runEffect(flush, () => {
    const values = Array.isArray(sources) ? sources.map((source2) => source2()) : sources();
    if (!active) {
      active = true;
      previousValues = values;
      return;
    }
    const cleanup = untrack(() => effect2(values, previousValues));
    previousValues = values;
    return cleanup;
  });
}
function watch(sources, effect2, options) {
  runWatcher(sources, "post", effect2, options);
}
function watchPre(sources, effect2, options) {
  runWatcher(sources, "pre", effect2, options);
}
watch.pre = watchPre;
function get$1(value) {
  if (isFunction(value)) {
    return value();
  }
  return value;
}
class ElementSize {
  constructor(node, options = { box: "border-box" }) {
    // no need to use `$state` here since we are using createSubscriber
    __privateAdd(this, _size2, { width: 0, height: 0 });
    __privateAdd(this, _observed, false);
    __privateAdd(this, _options);
    __privateAdd(this, _node);
    __privateAdd(this, _window);
    __privateAdd(this, _width, /* @__PURE__ */ user_derived(() => {
      var _a2;
      (_a2 = get$4(__privateGet(this, _subscribe6))) == null ? void 0 : _a2();
      return this.getSize().width;
    }));
    __privateAdd(this, _height, /* @__PURE__ */ user_derived(() => {
      var _a2;
      (_a2 = get$4(__privateGet(this, _subscribe6))) == null ? void 0 : _a2();
      return this.getSize().height;
    }));
    __privateAdd(this, _subscribe6, /* @__PURE__ */ user_derived(() => {
      const node$ = get$1(__privateGet(this, _node));
      if (!node$) return;
      return createSubscriber((update) => {
        if (!__privateGet(this, _window)) return;
        const observer = new (__privateGet(this, _window)).ResizeObserver((entries) => {
          __privateSet(this, _observed, true);
          for (const entry of entries) {
            const boxSize = __privateGet(this, _options).box === "content-box" ? entry.contentBoxSize : entry.borderBoxSize;
            const boxSizeArr = Array.isArray(boxSize) ? boxSize : [boxSize];
            __privateGet(this, _size2).width = boxSizeArr.reduce((acc, size2) => Math.max(acc, size2.inlineSize), 0);
            __privateGet(this, _size2).height = boxSizeArr.reduce((acc, size2) => Math.max(acc, size2.blockSize), 0);
          }
          update();
        });
        observer.observe(node$);
        return () => {
          __privateSet(this, _observed, false);
          observer.disconnect();
        };
      });
    }));
    __privateSet(this, _window, options.window ?? defaultWindow);
    __privateSet(this, _options, options);
    __privateSet(this, _node, node);
    __privateSet(this, _size2, { width: 0, height: 0 });
  }
  calculateSize() {
    const element2 = get$1(__privateGet(this, _node));
    if (!element2 || !__privateGet(this, _window)) {
      return;
    }
    const offsetWidth = element2.offsetWidth;
    const offsetHeight = element2.offsetHeight;
    if (__privateGet(this, _options).box === "border-box") {
      return { width: offsetWidth, height: offsetHeight };
    }
    const style = __privateGet(this, _window).getComputedStyle(element2);
    const paddingWidth = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const paddingHeight = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
    const borderWidth = parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
    const borderHeight = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const contentWidth = offsetWidth - paddingWidth - borderWidth;
    const contentHeight = offsetHeight - paddingHeight - borderHeight;
    return { width: contentWidth, height: contentHeight };
  }
  getSize() {
    return __privateGet(this, _observed) ? __privateGet(this, _size2) : this.calculateSize() ?? __privateGet(this, _size2);
  }
  get current() {
    var _a2;
    (_a2 = get$4(__privateGet(this, _subscribe6))) == null ? void 0 : _a2();
    return this.getSize();
  }
  get width() {
    return get$4(__privateGet(this, _width));
  }
  get height() {
    return get$4(__privateGet(this, _height));
  }
}
_size2 = new WeakMap();
_observed = new WeakMap();
_options = new WeakMap();
_node = new WeakMap();
_window = new WeakMap();
_width = new WeakMap();
_height = new WeakMap();
_subscribe6 = new WeakMap();
class Previous {
  constructor(getter, initialValue) {
    __privateAdd(this, _previous, /* @__PURE__ */ state(void 0));
    if (initialValue !== void 0) set$1(__privateGet(this, _previous), initialValue, true);
    watch(() => getter(), (_2, v2) => {
      set$1(__privateGet(this, _previous), v2, true);
    });
  }
  get current() {
    return get$4(__privateGet(this, _previous));
  }
}
_previous = new WeakMap();
function onDestroyEffect(fn) {
  user_effect(() => {
    return () => {
      fn();
    };
  });
}
function afterSleep(ms, cb) {
  return setTimeout(cb, ms);
}
function afterTick(fn) {
  tick().then(fn);
}
const ELEMENT_NODE = 1;
const DOCUMENT_NODE = 9;
const DOCUMENT_FRAGMENT_NODE = 11;
function isHTMLElement$2(node) {
  return isObject(node) && node.nodeType === ELEMENT_NODE && typeof node.nodeName === "string";
}
function isDocument(node) {
  return isObject(node) && node.nodeType === DOCUMENT_NODE;
}
function isWindow(node) {
  var _a2;
  return isObject(node) && ((_a2 = node.constructor) == null ? void 0 : _a2.name) === "VisualViewport";
}
function isNode$1(node) {
  return isObject(node) && node.nodeType !== void 0;
}
function isShadowRoot$1(node) {
  return isNode$1(node) && node.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in node;
}
function contains(parent, child2) {
  var _a2;
  if (!parent || !child2)
    return false;
  if (!isHTMLElement$2(parent) || !isHTMLElement$2(child2))
    return false;
  const rootNode = (_a2 = child2.getRootNode) == null ? void 0 : _a2.call(child2);
  if (parent === child2)
    return true;
  if (parent.contains(child2))
    return true;
  if (rootNode && isShadowRoot$1(rootNode)) {
    let next = child2;
    while (next) {
      if (parent === next)
        return true;
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getDocument(node) {
  if (isDocument(node))
    return node;
  if (isWindow(node))
    return node.document;
  return (node == null ? void 0 : node.ownerDocument) ?? document;
}
function getWindow$1(node) {
  var _a2;
  if (isShadowRoot$1(node))
    return getWindow$1(node.host);
  if (isDocument(node))
    return node.defaultView ?? window;
  if (isHTMLElement$2(node))
    return ((_a2 = node.ownerDocument) == null ? void 0 : _a2.defaultView) ?? window;
  return window;
}
function getActiveElement(rootNode) {
  let activeElement = rootNode.activeElement;
  while (activeElement == null ? void 0 : activeElement.shadowRoot) {
    const el = activeElement.shadowRoot.activeElement;
    if (el === activeElement)
      break;
    else
      activeElement = el;
  }
  return activeElement;
}
class DOMContext {
  constructor(element2) {
    __publicField(this, "element");
    __privateAdd(this, _root, /* @__PURE__ */ user_derived(() => {
      if (!this.element.current) return document;
      const rootNode = this.element.current.getRootNode() ?? document;
      return rootNode;
    }));
    __publicField(this, "getDocument", () => {
      return getDocument(this.root);
    });
    __publicField(this, "getWindow", () => {
      return this.getDocument().defaultView ?? window;
    });
    __publicField(this, "getActiveElement", () => {
      return getActiveElement(this.root);
    });
    __publicField(this, "isActiveElement", (node) => {
      return node === this.getActiveElement();
    });
    __publicField(this, "querySelector", (selector) => {
      if (!this.root) return null;
      return this.root.querySelector(selector);
    });
    __publicField(this, "querySelectorAll", (selector) => {
      if (!this.root) return [];
      return this.root.querySelectorAll(selector);
    });
    __publicField(this, "setTimeout", (callback, delay) => {
      return this.getWindow().setTimeout(callback, delay);
    });
    __publicField(this, "clearTimeout", (timeoutId) => {
      return this.getWindow().clearTimeout(timeoutId);
    });
    if (typeof element2 === "function") {
      this.element = box.with(element2);
    } else {
      this.element = element2;
    }
  }
  get root() {
    return get$4(__privateGet(this, _root));
  }
  set root(value) {
    set$1(__privateGet(this, _root), value);
  }
  getElementById(id) {
    return this.root.getElementById(id);
  }
}
_root = new WeakMap();
function attachRef(ref, onChange) {
  return {
    [createAttachmentKey()]: (node) => {
      if (box.isBox(ref)) {
        ref.current = node;
        untrack(() => onChange == null ? void 0 : onChange(node));
        return () => {
          if ("isConnected" in node && node.isConnected)
            return;
          ref.current = null;
          onChange == null ? void 0 : onChange(null);
        };
      }
      ref(node);
      untrack(() => onChange == null ? void 0 : onChange(node));
      return () => {
        if ("isConnected" in node && node.isConnected)
          return;
        ref(null);
        onChange == null ? void 0 : onChange(null);
      };
    }
  };
}
function getDataOpenClosed(condition) {
  return condition ? "open" : "closed";
}
function getAriaDisabled(condition) {
  return condition ? "true" : "false";
}
function getAriaExpanded(condition) {
  return condition ? "true" : "false";
}
function getDataDisabled(condition) {
  return condition ? "" : void 0;
}
function getAriaSelected(condition) {
  return condition ? "true" : "false";
}
function getAriaOrientation(orientation) {
  return orientation;
}
function getDataOrientation(orientation) {
  return orientation;
}
function getHidden(condition) {
  return condition ? true : void 0;
}
function getDisabled(condition) {
  return condition ? true : void 0;
}
class BitsAttrs {
  constructor(config) {
    __privateAdd(this, _variant);
    __privateAdd(this, _prefix);
    __publicField(this, "attrs");
    __privateSet(this, _variant, config.getVariant ? config.getVariant() : null);
    __privateSet(this, _prefix, __privateGet(this, _variant) ? `data-${__privateGet(this, _variant)}-` : `data-${config.component}-`);
    this.getAttr = this.getAttr.bind(this);
    this.selector = this.selector.bind(this);
    this.attrs = Object.fromEntries(config.parts.map((part) => [part, this.getAttr(part)]));
  }
  getAttr(part, variantOverride) {
    if (variantOverride)
      return `data-${variantOverride}-${part}`;
    return `${__privateGet(this, _prefix)}${part}`;
  }
  selector(part, variantOverride) {
    return `[${this.getAttr(part, variantOverride)}]`;
  }
}
_variant = new WeakMap();
_prefix = new WeakMap();
function createBitsAttrs(config) {
  const bitsAttrs = new BitsAttrs(config);
  return {
    ...bitsAttrs.attrs,
    selector: bitsAttrs.selector,
    getAttr: bitsAttrs.getAttr
  };
}
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const ARROW_UP = "ArrowUp";
const END = "End";
const ENTER = "Enter";
const ESCAPE = "Escape";
const HOME = "Home";
const PAGE_DOWN = "PageDown";
const PAGE_UP = "PageUp";
const SPACE = " ";
const TAB = "Tab";
function getElemDirection(elem) {
  const style = window.getComputedStyle(elem);
  const direction = style.getPropertyValue("direction");
  return direction;
}
function getNextKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_LEFT : ARROW_RIGHT,
    vertical: ARROW_DOWN
  }[orientation];
}
function getPrevKey(dir = "ltr", orientation = "horizontal") {
  return {
    horizontal: dir === "rtl" ? ARROW_RIGHT : ARROW_LEFT,
    vertical: ARROW_UP
  }[orientation];
}
function getDirectionalKeys(dir = "ltr", orientation = "horizontal") {
  if (!["ltr", "rtl"].includes(dir))
    dir = "ltr";
  if (!["horizontal", "vertical"].includes(orientation))
    orientation = "horizontal";
  return {
    nextKey: getNextKey(dir, orientation),
    prevKey: getPrevKey(dir, orientation)
  };
}
class RovingFocusGroup {
  constructor(opts) {
    __privateAdd(this, _opts);
    __privateAdd(this, _currentTabStopId, box(null));
    __privateSet(this, _opts, opts);
  }
  getCandidateNodes() {
    if (!__privateGet(this, _opts).rootNode.current)
      return [];
    if (__privateGet(this, _opts).candidateSelector) {
      const candidates = Array.from(__privateGet(this, _opts).rootNode.current.querySelectorAll(__privateGet(this, _opts).candidateSelector));
      return candidates;
    } else if (__privateGet(this, _opts).candidateAttr) {
      const candidates = Array.from(__privateGet(this, _opts).rootNode.current.querySelectorAll(`[${__privateGet(this, _opts).candidateAttr}]:not([data-disabled])`));
      return candidates;
    }
    return [];
  }
  focusFirstCandidate() {
    var _a2;
    const items = this.getCandidateNodes();
    if (!items.length)
      return;
    (_a2 = items[0]) == null ? void 0 : _a2.focus();
  }
  handleKeydown(node, e, both = false) {
    var _a2, _b2;
    const rootNode = __privateGet(this, _opts).rootNode.current;
    if (!rootNode || !node)
      return;
    const items = this.getCandidateNodes();
    if (!items.length)
      return;
    const currentIndex = items.indexOf(node);
    const dir = getElemDirection(rootNode);
    const { nextKey, prevKey } = getDirectionalKeys(dir, __privateGet(this, _opts).orientation.current);
    const loop2 = __privateGet(this, _opts).loop.current;
    const keyToIndex = {
      [nextKey]: currentIndex + 1,
      [prevKey]: currentIndex - 1,
      [HOME]: 0,
      [END]: items.length - 1
    };
    if (both) {
      const altNextKey = nextKey === ARROW_DOWN ? ARROW_RIGHT : ARROW_DOWN;
      const altPrevKey = prevKey === ARROW_UP ? ARROW_LEFT : ARROW_UP;
      keyToIndex[altNextKey] = currentIndex + 1;
      keyToIndex[altPrevKey] = currentIndex - 1;
    }
    let itemIndex = keyToIndex[e.key];
    if (itemIndex === void 0)
      return;
    e.preventDefault();
    if (itemIndex < 0 && loop2) {
      itemIndex = items.length - 1;
    } else if (itemIndex === items.length && loop2) {
      itemIndex = 0;
    }
    const itemToFocus = items[itemIndex];
    if (!itemToFocus)
      return;
    itemToFocus.focus();
    __privateGet(this, _currentTabStopId).current = itemToFocus.id;
    (_b2 = (_a2 = __privateGet(this, _opts)).onCandidateFocus) == null ? void 0 : _b2.call(_a2, itemToFocus);
    return itemToFocus;
  }
  getTabIndex(node) {
    const items = this.getCandidateNodes();
    const anyActive = __privateGet(this, _currentTabStopId).current !== null;
    if (node && !anyActive && items[0] === node) {
      __privateGet(this, _currentTabStopId).current = node.id;
      return 0;
    } else if ((node == null ? void 0 : node.id) === __privateGet(this, _currentTabStopId).current) {
      return 0;
    }
    return -1;
  }
  setCurrentTabStopId(id) {
    __privateGet(this, _currentTabStopId).current = id;
  }
}
_opts = new WeakMap();
_currentTabStopId = new WeakMap();
function noop() {
}
function createId(prefixOrUid, uid) {
  return `bits-${prefixOrUid}`;
}
class StateMachine {
  constructor(initialState, machine) {
    __privateAdd(this, _StateMachine_instances);
    __publicField(this, "state");
    __privateAdd(this, _machine);
    this.state = box(initialState);
    __privateSet(this, _machine, machine);
    this.dispatch = this.dispatch.bind(this);
  }
  dispatch(event2) {
    this.state.current = __privateMethod(this, _StateMachine_instances, reducer_fn).call(this, event2);
  }
}
_machine = new WeakMap();
_StateMachine_instances = new WeakSet();
reducer_fn = function(event2) {
  const nextState = __privateGet(this, _machine)[this.state.current][event2];
  return nextState ?? this.state.current;
};
const presenceMachine = {
  mounted: {
    UNMOUNT: "unmounted",
    ANIMATION_OUT: "unmountSuspended"
  },
  unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
  unmounted: { MOUNT: "mounted" }
};
class Presence {
  constructor(opts) {
    __publicField(this, "opts");
    __privateAdd(this, _prevAnimationNameState, /* @__PURE__ */ state("none"));
    __privateAdd(this, _styles, /* @__PURE__ */ state(proxy({})));
    __publicField(this, "initialStatus");
    __publicField(this, "previousPresent");
    __publicField(this, "machine");
    __publicField(this, "present");
    __privateAdd(this, _isPresent, /* @__PURE__ */ user_derived(() => {
      return ["mounted", "unmountSuspended"].includes(this.machine.state.current);
    }));
    this.opts = opts;
    this.present = this.opts.open;
    this.initialStatus = opts.open.current ? "mounted" : "unmounted";
    this.previousPresent = new Previous(() => this.present.current);
    this.machine = new StateMachine(this.initialStatus, presenceMachine);
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    this.handleAnimationStart = this.handleAnimationStart.bind(this);
    watchPresenceChange(this);
    watchStatusChange(this);
    watchRefChange(this);
  }
  get prevAnimationNameState() {
    return get$4(__privateGet(this, _prevAnimationNameState));
  }
  set prevAnimationNameState(value) {
    set$1(__privateGet(this, _prevAnimationNameState), value, true);
  }
  get styles() {
    return get$4(__privateGet(this, _styles));
  }
  set styles(value) {
    set$1(__privateGet(this, _styles), value, true);
  }
  /**
   * Triggering an ANIMATION_OUT during an ANIMATION_IN will fire an `animationcancel`
   * event for ANIMATION_IN after we have entered `unmountSuspended` state. So, we
   * make sure we only trigger ANIMATION_END for the currently active animation.
   */
  handleAnimationEnd(event2) {
    if (!this.opts.ref.current) return;
    const currAnimationName = getAnimationName(this.opts.ref.current);
    const isCurrentAnimation = currAnimationName.includes(event2.animationName) || currAnimationName === "none";
    if (event2.target === this.opts.ref.current && isCurrentAnimation) {
      this.machine.dispatch("ANIMATION_END");
    }
  }
  handleAnimationStart(event2) {
    if (!this.opts.ref.current) return;
    if (event2.target === this.opts.ref.current) {
      this.prevAnimationNameState = getAnimationName(this.opts.ref.current);
    }
  }
  get isPresent() {
    return get$4(__privateGet(this, _isPresent));
  }
  set isPresent(value) {
    set$1(__privateGet(this, _isPresent), value);
  }
}
_prevAnimationNameState = new WeakMap();
_styles = new WeakMap();
_isPresent = new WeakMap();
function watchPresenceChange(state2) {
  watch(() => state2.present.current, () => {
    if (!state2.opts.ref.current) return;
    const hasPresentChanged = state2.present.current !== state2.previousPresent.current;
    if (!hasPresentChanged) return;
    const prevAnimationName = state2.prevAnimationNameState;
    const currAnimationName = getAnimationName(state2.opts.ref.current);
    if (state2.present.current) {
      state2.machine.dispatch("MOUNT");
    } else if (currAnimationName === "none" || state2.styles.display === "none") {
      state2.machine.dispatch("UNMOUNT");
    } else {
      const isAnimating = prevAnimationName !== currAnimationName;
      if (state2.previousPresent.current && isAnimating) {
        state2.machine.dispatch("ANIMATION_OUT");
      } else {
        state2.machine.dispatch("UNMOUNT");
      }
    }
  });
}
function watchStatusChange(state2) {
  watch(() => state2.machine.state.current, () => {
    if (!state2.opts.ref.current) return;
    const currAnimationName = getAnimationName(state2.opts.ref.current);
    state2.prevAnimationNameState = state2.machine.state.current === "mounted" ? currAnimationName : "none";
  });
}
function watchRefChange(state2) {
  watch(() => state2.opts.ref.current, () => {
    if (!state2.opts.ref.current) return;
    state2.styles = getComputedStyle(state2.opts.ref.current);
    return executeCallbacks(on(state2.opts.ref.current, "animationstart", state2.handleAnimationStart), on(state2.opts.ref.current, "animationcancel", state2.handleAnimationEnd), on(state2.opts.ref.current, "animationend", state2.handleAnimationEnd));
  });
}
function getAnimationName(node) {
  return node ? getComputedStyle(node).animationName || "none" : "none";
}
function Presence_layer($$anchor, $$props) {
  push($$props, true);
  const presenceState = new Presence({
    open: box.with(() => $$props.open),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.presence ?? noop$1, () => ({ present: presenceState.isPresent }));
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if ($$props.forceMount || $$props.open || presenceState.isPresent) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
class AnimationsComplete {
  constructor(opts) {
    __privateAdd(this, _AnimationsComplete_instances);
    __privateAdd(this, _opts2);
    __privateAdd(this, _currentFrame);
    __privateAdd(this, _isRunning, false);
    __privateSet(this, _opts2, opts);
    onDestroyEffect(() => __privateMethod(this, _AnimationsComplete_instances, cleanup_fn).call(this));
  }
  run(fn) {
    if (__privateGet(this, _isRunning))
      return;
    __privateMethod(this, _AnimationsComplete_instances, cleanup_fn).call(this);
    __privateSet(this, _isRunning, true);
    const node = __privateGet(this, _opts2).ref.current;
    if (!node) {
      __privateSet(this, _isRunning, false);
      return;
    }
    if (typeof node.getAnimations !== "function") {
      __privateMethod(this, _AnimationsComplete_instances, executeCallback_fn).call(this, fn);
      return;
    }
    __privateSet(this, _currentFrame, window.requestAnimationFrame(() => {
      const animations = node.getAnimations();
      if (animations.length === 0) {
        __privateMethod(this, _AnimationsComplete_instances, executeCallback_fn).call(this, fn);
        return;
      }
      Promise.allSettled(animations.map((animation2) => animation2.finished)).then(() => {
        __privateMethod(this, _AnimationsComplete_instances, executeCallback_fn).call(this, fn);
      });
    }));
  }
}
_opts2 = new WeakMap();
_currentFrame = new WeakMap();
_isRunning = new WeakMap();
_AnimationsComplete_instances = new WeakSet();
cleanup_fn = function() {
  if (__privateGet(this, _currentFrame)) {
    window.cancelAnimationFrame(__privateGet(this, _currentFrame));
    __privateSet(this, _currentFrame, void 0);
  }
  __privateSet(this, _isRunning, false);
};
executeCallback_fn = function(fn) {
  const execute = () => {
    fn();
    __privateSet(this, _isRunning, false);
  };
  if (__privateGet(this, _opts2).afterTick) {
    afterTick(execute);
  } else {
    execute();
  }
};
class OpenChangeComplete {
  constructor(opts) {
    __privateAdd(this, _opts3);
    __privateAdd(this, _enabled);
    __privateAdd(this, _afterAnimations);
    __privateSet(this, _opts3, opts);
    __privateSet(this, _enabled, opts.enabled ?? true);
    __privateSet(this, _afterAnimations, new AnimationsComplete({
      ref: __privateGet(this, _opts3).ref,
      afterTick: __privateGet(this, _opts3).open
    }));
    watch([() => __privateGet(this, _opts3).open.current], ([open]) => {
      if (!__privateGet(this, _enabled))
        return;
      __privateGet(this, _afterAnimations).run(() => {
        if (open === __privateGet(this, _opts3).open.current) {
          __privateGet(this, _opts3).onComplete();
        }
      });
    });
  }
}
_opts3 = new WeakMap();
_enabled = new WeakMap();
_afterAnimations = new WeakMap();
const dialogAttrs = createBitsAttrs({
  component: "dialog",
  parts: [
    "content",
    "trigger",
    "overlay",
    "title",
    "description",
    "close",
    "cancel",
    "action"
  ]
});
const DialogRootContext = new Context("Dialog.Root | AlertDialog.Root");
const _DialogRootState = class _DialogRootState {
  constructor(opts) {
    __publicField(this, "opts");
    __privateAdd(this, _triggerNode, /* @__PURE__ */ state(null));
    __privateAdd(this, _contentNode, /* @__PURE__ */ state(null));
    __privateAdd(this, _descriptionNode, /* @__PURE__ */ state(null));
    __privateAdd(this, _contentId, /* @__PURE__ */ state(void 0));
    __privateAdd(this, _titleId, /* @__PURE__ */ state(void 0));
    __privateAdd(this, _triggerId, /* @__PURE__ */ state(void 0));
    __privateAdd(this, _descriptionId, /* @__PURE__ */ state(void 0));
    __privateAdd(this, _cancelNode, /* @__PURE__ */ state(null));
    __publicField(this, "getBitsAttr", (part) => {
      return dialogAttrs.getAttr(part, this.opts.variant.current);
    });
    __privateAdd(this, _sharedProps, /* @__PURE__ */ user_derived(() => ({
      "data-state": getDataOpenClosed(this.opts.open.current)
    })));
    this.opts = opts;
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    new OpenChangeComplete({
      ref: box.with(() => this.contentNode),
      open: this.opts.open,
      enabled: true,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
  }
  static create(opts) {
    return DialogRootContext.set(new _DialogRootState(opts));
  }
  get triggerNode() {
    return get$4(__privateGet(this, _triggerNode));
  }
  set triggerNode(value) {
    set$1(__privateGet(this, _triggerNode), value, true);
  }
  get contentNode() {
    return get$4(__privateGet(this, _contentNode));
  }
  set contentNode(value) {
    set$1(__privateGet(this, _contentNode), value, true);
  }
  get descriptionNode() {
    return get$4(__privateGet(this, _descriptionNode));
  }
  set descriptionNode(value) {
    set$1(__privateGet(this, _descriptionNode), value, true);
  }
  get contentId() {
    return get$4(__privateGet(this, _contentId));
  }
  set contentId(value) {
    set$1(__privateGet(this, _contentId), value, true);
  }
  get titleId() {
    return get$4(__privateGet(this, _titleId));
  }
  set titleId(value) {
    set$1(__privateGet(this, _titleId), value, true);
  }
  get triggerId() {
    return get$4(__privateGet(this, _triggerId));
  }
  set triggerId(value) {
    set$1(__privateGet(this, _triggerId), value, true);
  }
  get descriptionId() {
    return get$4(__privateGet(this, _descriptionId));
  }
  set descriptionId(value) {
    set$1(__privateGet(this, _descriptionId), value, true);
  }
  get cancelNode() {
    return get$4(__privateGet(this, _cancelNode));
  }
  set cancelNode(value) {
    set$1(__privateGet(this, _cancelNode), value, true);
  }
  handleOpen() {
    if (this.opts.open.current) return;
    this.opts.open.current = true;
  }
  handleClose() {
    if (!this.opts.open.current) return;
    this.opts.open.current = false;
  }
  get sharedProps() {
    return get$4(__privateGet(this, _sharedProps));
  }
  set sharedProps(value) {
    set$1(__privateGet(this, _sharedProps), value);
  }
};
_triggerNode = new WeakMap();
_contentNode = new WeakMap();
_descriptionNode = new WeakMap();
_contentId = new WeakMap();
_titleId = new WeakMap();
_triggerId = new WeakMap();
_descriptionId = new WeakMap();
_cancelNode = new WeakMap();
_sharedProps = new WeakMap();
let DialogRootState = _DialogRootState;
const _DialogActionState = class _DialogActionState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _props, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      [this.root.getBitsAttr("action")]: "",
      ...this.root.sharedProps,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref);
  }
  static create(opts) {
    return new _DialogActionState(opts, DialogRootContext.get());
  }
  get props() {
    return get$4(__privateGet(this, _props));
  }
  set props(value) {
    set$1(__privateGet(this, _props), value);
  }
};
_props = new WeakMap();
let DialogActionState = _DialogActionState;
const _DialogTitleState = class _DialogTitleState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _props2, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      role: "heading",
      "aria-level": this.opts.level.current,
      [this.root.getBitsAttr("title")]: "",
      ...this.root.sharedProps,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.root.titleId = this.opts.id.current;
    this.attachment = attachRef(this.opts.ref);
    watch.pre(() => this.opts.id.current, (id) => {
      this.root.titleId = id;
    });
  }
  static create(opts) {
    return new _DialogTitleState(opts, DialogRootContext.get());
  }
  get props() {
    return get$4(__privateGet(this, _props2));
  }
  set props(value) {
    set$1(__privateGet(this, _props2), value);
  }
};
_props2 = new WeakMap();
let DialogTitleState = _DialogTitleState;
const _DialogDescriptionState = class _DialogDescriptionState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _props3, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      [this.root.getBitsAttr("description")]: "",
      ...this.root.sharedProps,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.root.descriptionId = this.opts.id.current;
    this.attachment = attachRef(this.opts.ref, (v2) => {
      this.root.descriptionNode = v2;
    });
    watch.pre(() => this.opts.id.current, (id) => {
      this.root.descriptionId = id;
    });
  }
  static create(opts) {
    return new _DialogDescriptionState(opts, DialogRootContext.get());
  }
  get props() {
    return get$4(__privateGet(this, _props3));
  }
  set props(value) {
    set$1(__privateGet(this, _props3), value);
  }
};
_props3 = new WeakMap();
let DialogDescriptionState = _DialogDescriptionState;
const _DialogContentState = class _DialogContentState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _snippetProps, /* @__PURE__ */ user_derived(() => ({ open: this.root.opts.open.current })));
    __privateAdd(this, _props4, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      role: this.root.opts.variant.current === "alert-dialog" ? "alertdialog" : "dialog",
      "aria-modal": "true",
      "aria-describedby": this.root.descriptionId,
      "aria-labelledby": this.root.titleId,
      [this.root.getBitsAttr("content")]: "",
      style: {
        pointerEvents: "auto",
        outline: this.root.opts.variant.current === "alert-dialog" ? "none" : void 0
      },
      tabindex: this.root.opts.variant.current === "alert-dialog" ? -1 : void 0,
      ...this.root.sharedProps,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref, (v2) => {
      this.root.contentNode = v2;
      this.root.contentId = v2 == null ? void 0 : v2.id;
    });
  }
  static create(opts) {
    return new _DialogContentState(opts, DialogRootContext.get());
  }
  get snippetProps() {
    return get$4(__privateGet(this, _snippetProps));
  }
  set snippetProps(value) {
    set$1(__privateGet(this, _snippetProps), value);
  }
  get props() {
    return get$4(__privateGet(this, _props4));
  }
  set props(value) {
    set$1(__privateGet(this, _props4), value);
  }
};
_snippetProps = new WeakMap();
_props4 = new WeakMap();
let DialogContentState = _DialogContentState;
const _DialogOverlayState = class _DialogOverlayState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _snippetProps2, /* @__PURE__ */ user_derived(() => ({ open: this.root.opts.open.current })));
    __privateAdd(this, _props5, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      [this.root.getBitsAttr("overlay")]: "",
      style: { pointerEvents: "auto" },
      ...this.root.sharedProps,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref);
  }
  static create(opts) {
    return new _DialogOverlayState(opts, DialogRootContext.get());
  }
  get snippetProps() {
    return get$4(__privateGet(this, _snippetProps2));
  }
  set snippetProps(value) {
    set$1(__privateGet(this, _snippetProps2), value);
  }
  get props() {
    return get$4(__privateGet(this, _props5));
  }
  set props(value) {
    set$1(__privateGet(this, _props5), value);
  }
};
_snippetProps2 = new WeakMap();
_props5 = new WeakMap();
let DialogOverlayState = _DialogOverlayState;
const _AlertDialogCancelState = class _AlertDialogCancelState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _props6, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      [this.root.getBitsAttr("cancel")]: "",
      onclick: this.onclick,
      onkeydown: this.onkeydown,
      tabindex: 0,
      ...this.root.sharedProps,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref, (v2) => this.root.cancelNode = v2);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  static create(opts) {
    return new _AlertDialogCancelState(opts, DialogRootContext.get());
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button > 0) return;
    this.root.handleClose();
  }
  onkeydown(e) {
    if (this.opts.disabled.current) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.root.handleClose();
    }
  }
  get props() {
    return get$4(__privateGet(this, _props6));
  }
  set props(value) {
    set$1(__privateGet(this, _props6), value);
  }
};
_props6 = new WeakMap();
let AlertDialogCancelState = _AlertDialogCancelState;
function Alert_dialog($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false), onOpenChange = prop($$props, "onOpenChange", 3, noop), onOpenChangeComplete = prop($$props, "onOpenChangeComplete", 3, noop);
  DialogRootState.create({
    variant: box.with(() => "alert-dialog"),
    open: box.with(() => open(), (v2) => {
      open(v2);
      onOpenChange()(v2);
    }),
    onOpenChangeComplete: box.with(() => onOpenChangeComplete())
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1);
  append($$anchor, fragment);
  pop();
}
var root_2$m = /* @__PURE__ */ from_html(`<div><!></div>`);
function Dialog_title($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), level = prop($$props, "level", 3, 2), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "child",
    "children",
    "level"
  ]);
  const titleState = DialogTitleState.create({
    id: box.with(() => id()),
    level: box.with(() => level()),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, titleState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$m();
      attribute_effect(div, () => ({ ...get$4(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$l = /* @__PURE__ */ from_html(`<button><!></button>`);
function Alert_dialog_action$1($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "child",
    "id",
    "ref"
  ]);
  const actionState = DialogActionState.create({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, actionState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$l();
      attribute_effect(button, () => ({ ...get$4(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$k = /* @__PURE__ */ from_html(`<button><!></button>`);
function Alert_dialog_cancel$1($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), disabled = prop($$props, "disabled", 3, false), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "children",
    "child",
    "disabled"
  ]);
  const cancelState = AlertDialogCancelState.create({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v2) => ref(v2)),
    disabled: box.with(() => Boolean(disabled()))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, cancelState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$k();
      attribute_effect(button, () => ({ ...get$4(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Portal_consumer($$anchor, $$props) {
  var fragment = comment();
  var node = first_child(fragment);
  key_block(node, () => $$props.children, ($$anchor2) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    snippet(node_1, () => $$props.children ?? noop$1);
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
}
const isBrowser = typeof document !== "undefined";
const isIOS = getIsIOS();
function getIsIOS() {
  var _a2, _b2;
  return isBrowser && ((_a2 = window == null ? void 0 : window.navigator) == null ? void 0 : _a2.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  ((_b2 = window == null ? void 0 : window.navigator) == null ? void 0 : _b2.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function isHTMLElement$1(element2) {
  return element2 instanceof HTMLElement;
}
function isElement$1(element2) {
  return element2 instanceof Element;
}
function isElementOrSVGElement(element2) {
  return element2 instanceof Element || element2 instanceof SVGElement;
}
function isNotNull(value) {
  return value !== null;
}
function isSelectableInput(element2) {
  return element2 instanceof HTMLInputElement && "select" in element2;
}
const BitsConfigContext = new Context("BitsConfig");
function getBitsConfig() {
  const fallback = new BitsConfigState(null, {});
  return BitsConfigContext.getOr(fallback).opts;
}
class BitsConfigState {
  constructor(parent, opts) {
    __publicField(this, "opts");
    const resolveConfigOption = createConfigResolver(parent, opts);
    this.opts = {
      defaultPortalTo: resolveConfigOption((config) => config.defaultPortalTo),
      defaultLocale: resolveConfigOption((config) => config.defaultLocale)
    };
  }
}
function createConfigResolver(parent, currentOpts) {
  return (getter) => {
    const configOption = box.with(() => {
      var _a2, _b2;
      const value = (_a2 = getter(currentOpts)) == null ? void 0 : _a2.current;
      if (value !== void 0)
        return value;
      if (parent === null)
        return void 0;
      return (_b2 = getter(parent.opts)) == null ? void 0 : _b2.current;
    });
    return configOption;
  };
}
function createPropResolver(configOption, fallback) {
  return (getProp) => {
    const config = getBitsConfig();
    return box.with(() => {
      const propValue = getProp();
      if (propValue !== void 0)
        return propValue;
      const option = configOption(config).current;
      if (option !== void 0)
        return option;
      return fallback;
    });
  };
}
const resolvePortalToProp = createPropResolver((config) => config.defaultPortalTo, "body");
function Portal($$anchor, $$props) {
  push($$props, true);
  const to = resolvePortalToProp(() => $$props.to);
  const context = getAllContexts();
  let target = /* @__PURE__ */ user_derived(getTarget);
  function getTarget() {
    if (!isBrowser || $$props.disabled) return null;
    let localTarget = null;
    if (typeof to.current === "string") {
      const target2 = document.querySelector(to.current);
      localTarget = target2;
    } else {
      localTarget = to.current;
    }
    return localTarget;
  }
  let instance;
  function unmountInstance() {
    if (instance) {
      unmount(instance);
      instance = null;
    }
  }
  watch(
    [
      () => get$4(target),
      () => $$props.disabled
    ],
    ([target2, disabled]) => {
      if (!target2 || disabled) {
        unmountInstance();
        return;
      }
      instance = mount(Portal_consumer, {
        target: target2,
        props: { children: $$props.children },
        context
      });
      return () => {
        unmountInstance();
      };
    }
  );
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if ($$props.disabled) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
function addEventListener$1(target, event2, handler, options) {
  const events = Array.isArray(event2) ? event2 : [event2];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
class CustomEventDispatcher {
  constructor(eventName, options = { bubbles: true, cancelable: true }) {
    __publicField(this, "eventName");
    __publicField(this, "options");
    this.eventName = eventName;
    this.options = options;
  }
  createEvent(detail) {
    return new CustomEvent(this.eventName, {
      ...this.options,
      detail
    });
  }
  dispatch(element2, detail) {
    const event2 = this.createEvent(detail);
    element2.dispatchEvent(event2);
    return event2;
  }
  listen(element2, callback, options) {
    const handler = (event2) => {
      callback(event2);
    };
    return on(element2, this.eventName, handler, options);
  }
}
function debounce(fn, wait = 500) {
  let timeout = null;
  const debounced = (...args) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn(...args);
    }, wait);
  };
  debounced.destroy = () => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
}
function isOrContainsTarget(node, target) {
  return node === target || node.contains(target);
}
function getOwnerDocument(el) {
  return (el == null ? void 0 : el.ownerDocument) ?? document;
}
function isClickTrulyOutside(event2, contentNode) {
  const { clientX, clientY } = event2;
  const rect = contentNode.getBoundingClientRect();
  return clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom;
}
globalThis.bitsDismissableLayers ?? (globalThis.bitsDismissableLayers = /* @__PURE__ */ new Map());
const _DismissibleLayerState = class _DismissibleLayerState {
  constructor(opts) {
    __privateAdd(this, _DismissibleLayerState_instances);
    __publicField(this, "opts");
    __privateAdd(this, _interactOutsideProp);
    __privateAdd(this, _behaviorType);
    __privateAdd(this, _interceptedEvents, { pointerdown: false });
    __privateAdd(this, _isResponsibleLayer, false);
    __privateAdd(this, _isFocusInsideDOMTree, false);
    __privateAdd(this, _documentObj);
    __privateAdd(this, _onFocusOutside);
    __privateAdd(this, _unsubClickListener, noop);
    __privateAdd(this, _handleFocus, (event2) => {
      if (event2.defaultPrevented) return;
      if (!this.opts.ref.current) return;
      afterTick(() => {
        var _a2, _b2;
        if (!this.opts.ref.current || __privateGet(this, _isTargetWithinLayer).call(this, event2.target)) return;
        if (event2.target && !__privateGet(this, _isFocusInsideDOMTree)) {
          (_b2 = (_a2 = __privateGet(this, _onFocusOutside)).current) == null ? void 0 : _b2.call(_a2, event2);
        }
      });
    });
    __privateAdd(this, _handleDismiss, (e) => {
      let event2 = e;
      if (event2.defaultPrevented) {
        event2 = createWrappedEvent(e);
      }
      __privateGet(this, _interactOutsideProp).current(e);
    });
    __privateAdd(this, _handleInteractOutside, debounce(
      (e) => {
        if (!this.opts.ref.current) {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        const isEventValid = this.opts.isValidEvent.current(e, this.opts.ref.current) || isValidEvent(e, this.opts.ref.current);
        if (!__privateGet(this, _isResponsibleLayer) || __privateMethod(this, _DismissibleLayerState_instances, isAnyEventIntercepted_fn).call(this) || !isEventValid) {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        let event2 = e;
        if (event2.defaultPrevented) {
          event2 = createWrappedEvent(event2);
        }
        if (__privateGet(this, _behaviorType).current !== "close" && __privateGet(this, _behaviorType).current !== "defer-otherwise-close") {
          __privateGet(this, _unsubClickListener).call(this);
          return;
        }
        if (e.pointerType === "touch") {
          __privateGet(this, _unsubClickListener).call(this);
          __privateSet(this, _unsubClickListener, addEventListener$1(__privateGet(this, _documentObj), "click", __privateGet(this, _handleDismiss), { once: true }));
        } else {
          __privateGet(this, _interactOutsideProp).current(event2);
        }
      },
      10
    ));
    __privateAdd(this, _markInterceptedEvent, (e) => {
      __privateGet(this, _interceptedEvents)[e.type] = true;
    });
    __privateAdd(this, _markNonInterceptedEvent, (e) => {
      __privateGet(this, _interceptedEvents)[e.type] = false;
    });
    __privateAdd(this, _markResponsibleLayer, () => {
      if (!this.opts.ref.current) return;
      __privateSet(this, _isResponsibleLayer, isResponsibleLayer(this.opts.ref.current));
    });
    __privateAdd(this, _isTargetWithinLayer, (target) => {
      if (!this.opts.ref.current) return false;
      return isOrContainsTarget(this.opts.ref.current, target);
    });
    __privateAdd(this, _resetState, debounce(
      () => {
        for (const eventType in __privateGet(this, _interceptedEvents)) {
          __privateGet(this, _interceptedEvents)[eventType] = false;
        }
        __privateSet(this, _isResponsibleLayer, false);
      },
      20
    ));
    __privateAdd(this, _onfocuscapture, () => {
      __privateSet(this, _isFocusInsideDOMTree, true);
    });
    __privateAdd(this, _onblurcapture, () => {
      __privateSet(this, _isFocusInsideDOMTree, false);
    });
    __publicField(this, "props", {
      onfocuscapture: __privateGet(this, _onfocuscapture),
      onblurcapture: __privateGet(this, _onblurcapture)
    });
    this.opts = opts;
    __privateSet(this, _behaviorType, opts.interactOutsideBehavior);
    __privateSet(this, _interactOutsideProp, opts.onInteractOutside);
    __privateSet(this, _onFocusOutside, opts.onFocusOutside);
    user_effect(() => {
      __privateSet(this, _documentObj, getOwnerDocument(this.opts.ref.current));
    });
    let unsubEvents = noop;
    const cleanup = () => {
      __privateGet(this, _resetState).call(this);
      globalThis.bitsDismissableLayers.delete(this);
      __privateGet(this, _handleInteractOutside).destroy();
      unsubEvents();
    };
    watch(
      [
        () => this.opts.enabled.current,
        () => this.opts.ref.current
      ],
      () => {
        if (!this.opts.enabled.current || !this.opts.ref.current) return;
        afterSleep(1, () => {
          if (!this.opts.ref.current) return;
          globalThis.bitsDismissableLayers.set(this, __privateGet(this, _behaviorType));
          unsubEvents();
          unsubEvents = __privateMethod(this, _DismissibleLayerState_instances, addEventListeners_fn).call(this);
        });
        return cleanup;
      }
    );
    onDestroyEffect(() => {
      __privateGet(this, _resetState).destroy();
      globalThis.bitsDismissableLayers.delete(this);
      __privateGet(this, _handleInteractOutside).destroy();
      __privateGet(this, _unsubClickListener).call(this);
      unsubEvents();
    });
  }
  static create(opts) {
    return new _DismissibleLayerState(opts);
  }
};
_interactOutsideProp = new WeakMap();
_behaviorType = new WeakMap();
_interceptedEvents = new WeakMap();
_isResponsibleLayer = new WeakMap();
_isFocusInsideDOMTree = new WeakMap();
_documentObj = new WeakMap();
_onFocusOutside = new WeakMap();
_unsubClickListener = new WeakMap();
_handleFocus = new WeakMap();
_DismissibleLayerState_instances = new WeakSet();
addEventListeners_fn = function() {
  return executeCallbacks(
    /**
    * CAPTURE INTERACTION START
    * mark interaction-start event as intercepted.
    * mark responsible layer during interaction start
    * to avoid checking if is responsible layer during interaction end
    * when a new floating element may have been opened.
    */
    on(__privateGet(this, _documentObj), "pointerdown", executeCallbacks(__privateGet(this, _markInterceptedEvent), __privateGet(this, _markResponsibleLayer)), { capture: true }),
    /**
    * BUBBLE INTERACTION START
    * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
    * to avoid prematurely checking if other events were intercepted.
    */
    on(__privateGet(this, _documentObj), "pointerdown", executeCallbacks(__privateGet(this, _markNonInterceptedEvent), __privateGet(this, _handleInteractOutside))),
    /**
    * HANDLE FOCUS OUTSIDE
    */
    on(__privateGet(this, _documentObj), "focusin", __privateGet(this, _handleFocus))
  );
};
_handleDismiss = new WeakMap();
_handleInteractOutside = new WeakMap();
_markInterceptedEvent = new WeakMap();
_markNonInterceptedEvent = new WeakMap();
_markResponsibleLayer = new WeakMap();
_isTargetWithinLayer = new WeakMap();
_resetState = new WeakMap();
isAnyEventIntercepted_fn = function() {
  const i2 = Object.values(__privateGet(this, _interceptedEvents)).some(Boolean);
  return i2;
};
_onfocuscapture = new WeakMap();
_onblurcapture = new WeakMap();
let DismissibleLayerState = _DismissibleLayerState;
function getTopMostLayer(layersArr) {
  return layersArr.findLast(([_2, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
}
function isResponsibleLayer(node) {
  const layersArr = [...globalThis.bitsDismissableLayers];
  const topMostLayer = getTopMostLayer(layersArr);
  if (topMostLayer) return topMostLayer[0].opts.ref.current === node;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode.opts.ref.current === node;
}
function isValidEvent(e, node) {
  if ("button" in e && e.button > 0) return false;
  const target = e.target;
  if (!isElement$1(target)) return false;
  const ownerDocument = getOwnerDocument(target);
  const isValid = ownerDocument.documentElement.contains(target) && !isOrContainsTarget(node, target) && isClickTrulyOutside(e, node);
  return isValid;
}
function createWrappedEvent(e) {
  const capturedCurrentTarget = e.currentTarget;
  const capturedTarget = e.target;
  let newEvent;
  if (e instanceof PointerEvent) {
    newEvent = new PointerEvent(e.type, e);
  } else {
    newEvent = new PointerEvent("pointerdown", e);
  }
  let isPrevented = false;
  const wrappedEvent = new Proxy(newEvent, {
    get: (target, prop2) => {
      if (prop2 === "currentTarget") {
        return capturedCurrentTarget;
      }
      if (prop2 === "target") {
        return capturedTarget;
      }
      if (prop2 === "preventDefault") {
        return () => {
          isPrevented = true;
          if (typeof target.preventDefault === "function") {
            target.preventDefault();
          }
        };
      }
      if (prop2 === "defaultPrevented") {
        return isPrevented;
      }
      if (prop2 in target) {
        return target[prop2];
      }
      return e[prop2];
    }
  });
  return wrappedEvent;
}
function Dismissible_layer($$anchor, $$props) {
  push($$props, true);
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), onInteractOutside = prop($$props, "onInteractOutside", 3, noop), onFocusOutside = prop($$props, "onFocusOutside", 3, noop), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false);
  const dismissibleLayerState = DismissibleLayerState.create({
    id: box.with(() => $$props.id),
    interactOutsideBehavior: box.with(() => interactOutsideBehavior()),
    onInteractOutside: box.with(() => onInteractOutside()),
    enabled: box.with(() => $$props.enabled),
    onFocusOutside: box.with(() => onFocusOutside()),
    isValidEvent: box.with(() => isValidEvent2()),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1, () => ({ props: dismissibleLayerState.props }));
  append($$anchor, fragment);
  pop();
}
globalThis.bitsEscapeLayers ?? (globalThis.bitsEscapeLayers = /* @__PURE__ */ new Map());
const _EscapeLayerState = class _EscapeLayerState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "domContext");
    __privateAdd(this, _addEventListener, () => {
      return on(this.domContext.getDocument(), "keydown", __privateGet(this, _onkeydown), { passive: false });
    });
    __privateAdd(this, _onkeydown, (e) => {
      if (e.key !== ESCAPE || !isResponsibleEscapeLayer(this)) return;
      const clonedEvent = new KeyboardEvent(e.type, e);
      e.preventDefault();
      const behaviorType = this.opts.escapeKeydownBehavior.current;
      if (behaviorType !== "close" && behaviorType !== "defer-otherwise-close") return;
      this.opts.onEscapeKeydown.current(clonedEvent);
    });
    this.opts = opts;
    this.domContext = new DOMContext(this.opts.ref);
    let unsubEvents = noop;
    watch(() => opts.enabled.current, (enabled) => {
      if (enabled) {
        globalThis.bitsEscapeLayers.set(this, opts.escapeKeydownBehavior);
        unsubEvents = __privateGet(this, _addEventListener).call(this);
      }
      return () => {
        unsubEvents();
        globalThis.bitsEscapeLayers.delete(this);
      };
    });
  }
  static create(opts) {
    return new _EscapeLayerState(opts);
  }
};
_addEventListener = new WeakMap();
_onkeydown = new WeakMap();
let EscapeLayerState = _EscapeLayerState;
function isResponsibleEscapeLayer(instance) {
  const layersArr = [...globalThis.bitsEscapeLayers];
  const topMostLayer = layersArr.findLast(([_2, { current: behaviorType }]) => behaviorType === "close" || behaviorType === "ignore");
  if (topMostLayer) return topMostLayer[0] === instance;
  const [firstLayerNode] = layersArr[0];
  return firstLayerNode === instance;
}
function Escape_layer($$anchor, $$props) {
  push($$props, true);
  let escapeKeydownBehavior = prop($$props, "escapeKeydownBehavior", 3, "close"), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop);
  EscapeLayerState.create({
    escapeKeydownBehavior: box.with(() => escapeKeydownBehavior()),
    onEscapeKeydown: box.with(() => onEscapeKeydown()),
    enabled: box.with(() => $$props.enabled),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1);
  append($$anchor, fragment);
  pop();
}
const _FocusScopeManager = class _FocusScopeManager {
  constructor() {
    __privateAdd(this, _scopeStack, box([]));
    __privateAdd(this, _focusHistory, /* @__PURE__ */ new WeakMap());
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new _FocusScopeManager();
    }
    return this.instance;
  }
  register(scope) {
    const current = this.getActive();
    if (current && current !== scope) {
      current.pause();
    }
    __privateGet(this, _scopeStack).current = __privateGet(this, _scopeStack).current.filter((s) => s !== scope);
    __privateGet(this, _scopeStack).current.unshift(scope);
  }
  unregister(scope) {
    __privateGet(this, _scopeStack).current = __privateGet(this, _scopeStack).current.filter((s) => s !== scope);
    const next = this.getActive();
    if (next) {
      next.resume();
    }
  }
  getActive() {
    return __privateGet(this, _scopeStack).current[0];
  }
  setFocusMemory(scope, element2) {
    __privateGet(this, _focusHistory).set(scope, element2);
  }
  getFocusMemory(scope) {
    return __privateGet(this, _focusHistory).get(scope);
  }
  isActiveScope(scope) {
    return this.getActive() === scope;
  }
};
_scopeStack = new WeakMap();
_focusHistory = new WeakMap();
__publicField(_FocusScopeManager, "instance");
let FocusScopeManager = _FocusScopeManager;
const _FocusScope = class _FocusScope {
  constructor(opts) {
    __privateAdd(this, _FocusScope_instances);
    __privateAdd(this, _paused, false);
    __privateAdd(this, _container, null);
    __privateAdd(this, _manager, FocusScopeManager.getInstance());
    __privateAdd(this, _cleanupFns, []);
    __privateAdd(this, _opts4);
    __privateSet(this, _opts4, opts);
  }
  get paused() {
    return __privateGet(this, _paused);
  }
  pause() {
    __privateSet(this, _paused, true);
  }
  resume() {
    __privateSet(this, _paused, false);
  }
  mount(container) {
    if (__privateGet(this, _container)) {
      this.unmount();
    }
    __privateSet(this, _container, container);
    __privateGet(this, _manager).register(this);
    __privateMethod(this, _FocusScope_instances, setupEventListeners_fn).call(this);
    __privateMethod(this, _FocusScope_instances, handleOpenAutoFocus_fn).call(this);
  }
  unmount() {
    if (!__privateGet(this, _container)) return;
    __privateMethod(this, _FocusScope_instances, cleanup_fn2).call(this);
    __privateMethod(this, _FocusScope_instances, handleCloseAutoFocus_fn).call(this);
    __privateGet(this, _manager).unregister(this);
    __privateSet(this, _container, null);
  }
  static use(opts) {
    let scope = null;
    watch(
      [
        () => opts.ref.current,
        () => opts.enabled.current
      ],
      ([ref, enabled]) => {
        if (ref && enabled) {
          if (!scope) {
            scope = new _FocusScope(opts);
          }
          scope.mount(ref);
        } else if (scope) {
          scope.unmount();
          scope = null;
        }
      }
    );
    onDestroyEffect(() => {
      scope == null ? void 0 : scope.unmount();
    });
    return {
      get props() {
        return { tabindex: -1 };
      }
    };
  }
};
_paused = new WeakMap();
_container = new WeakMap();
_manager = new WeakMap();
_cleanupFns = new WeakMap();
_opts4 = new WeakMap();
_FocusScope_instances = new WeakSet();
cleanup_fn2 = function() {
  for (const fn of __privateGet(this, _cleanupFns)) {
    fn();
  }
  __privateSet(this, _cleanupFns, []);
};
handleOpenAutoFocus_fn = function() {
  if (!__privateGet(this, _container)) return;
  const event2 = new CustomEvent("focusScope.onOpenAutoFocus", { bubbles: false, cancelable: true });
  __privateGet(this, _opts4).onOpenAutoFocus.current(event2);
  if (!event2.defaultPrevented) {
    requestAnimationFrame(() => {
      if (!__privateGet(this, _container)) return;
      const firstTabbable = __privateMethod(this, _FocusScope_instances, getFirstTabbable_fn).call(this);
      if (firstTabbable) {
        firstTabbable.focus();
        __privateGet(this, _manager).setFocusMemory(this, firstTabbable);
      } else {
        __privateGet(this, _container).focus();
      }
    });
  }
};
handleCloseAutoFocus_fn = function() {
  const event2 = new CustomEvent("focusScope.onCloseAutoFocus", { bubbles: false, cancelable: true });
  __privateGet(this, _opts4).onCloseAutoFocus.current(event2);
  if (!event2.defaultPrevented) {
    const prevFocused = document.activeElement;
    if (prevFocused && prevFocused !== document.body) {
      prevFocused.focus();
    }
  }
};
setupEventListeners_fn = function() {
  if (!__privateGet(this, _container) || !__privateGet(this, _opts4).trap.current) return;
  const container = __privateGet(this, _container);
  const doc = container.ownerDocument;
  const handleFocus = (e) => {
    if (__privateGet(this, _paused) || !__privateGet(this, _manager).isActiveScope(this)) return;
    const target = e.target;
    if (!target) return;
    const isInside = container.contains(target);
    if (isInside) {
      __privateGet(this, _manager).setFocusMemory(this, target);
    } else {
      const lastFocused = __privateGet(this, _manager).getFocusMemory(this);
      if (lastFocused && container.contains(lastFocused) && isFocusable(lastFocused)) {
        e.preventDefault();
        lastFocused.focus();
      } else {
        const firstTabbable = __privateMethod(this, _FocusScope_instances, getFirstTabbable_fn).call(this);
        const firstFocusable = __privateMethod(this, _FocusScope_instances, getAllFocusables_fn).call(this)[0];
        (firstTabbable || firstFocusable || container).focus();
      }
    }
  };
  const handleKeydown = (e) => {
    if (!__privateGet(this, _opts4).loop || __privateGet(this, _paused) || e.key !== "Tab") return;
    if (!__privateGet(this, _manager).isActiveScope(this)) return;
    const tabbables = __privateMethod(this, _FocusScope_instances, getTabbables_fn).call(this);
    if (tabbables.length < 2) return;
    const first = tabbables[0];
    const last = tabbables[tabbables.length - 1];
    if (!e.shiftKey && doc.activeElement === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && doc.activeElement === first) {
      e.preventDefault();
      last.focus();
    }
  };
  __privateGet(this, _cleanupFns).push(on(doc, "focusin", handleFocus, { capture: true }), on(container, "keydown", handleKeydown));
  const observer = new MutationObserver(() => {
    const lastFocused = __privateGet(this, _manager).getFocusMemory(this);
    if (lastFocused && !container.contains(lastFocused)) {
      const firstTabbable = __privateMethod(this, _FocusScope_instances, getFirstTabbable_fn).call(this);
      const firstFocusable = __privateMethod(this, _FocusScope_instances, getAllFocusables_fn).call(this)[0];
      const elementToFocus = firstTabbable || firstFocusable;
      if (elementToFocus) {
        elementToFocus.focus();
        __privateGet(this, _manager).setFocusMemory(this, elementToFocus);
      } else {
        container.focus();
      }
    }
  });
  observer.observe(container, { childList: true, subtree: true });
  __privateGet(this, _cleanupFns).push(() => observer.disconnect());
};
getTabbables_fn = function() {
  if (!__privateGet(this, _container)) return [];
  return tabbable(__privateGet(this, _container), { includeContainer: false, getShadowRoot: true });
};
getFirstTabbable_fn = function() {
  const tabbables = __privateMethod(this, _FocusScope_instances, getTabbables_fn).call(this);
  return tabbables[0] || null;
};
getAllFocusables_fn = function() {
  if (!__privateGet(this, _container)) return [];
  return focusable(__privateGet(this, _container), { includeContainer: false, getShadowRoot: true });
};
let FocusScope = _FocusScope;
function Focus_scope($$anchor, $$props) {
  push($$props, true);
  let enabled = prop($$props, "enabled", 3, false), trapFocus = prop($$props, "trapFocus", 3, false), loop2 = prop($$props, "loop", 3, false), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop), onOpenAutoFocus = prop($$props, "onOpenAutoFocus", 3, noop);
  const focusScopeState = FocusScope.use({
    enabled: box.with(() => enabled()),
    trap: box.with(() => trapFocus()),
    loop: loop2(),
    onCloseAutoFocus: box.with(() => onCloseAutoFocus()),
    onOpenAutoFocus: box.with(() => onOpenAutoFocus()),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.focusScope ?? noop$1, () => ({ props: focusScopeState.props }));
  append($$anchor, fragment);
  pop();
}
globalThis.bitsTextSelectionLayers ?? (globalThis.bitsTextSelectionLayers = /* @__PURE__ */ new Map());
const _TextSelectionLayerState = class _TextSelectionLayerState {
  constructor(opts) {
    __privateAdd(this, _TextSelectionLayerState_instances);
    __publicField(this, "opts");
    __publicField(this, "domContext");
    __privateAdd(this, _unsubSelectionLock, noop);
    __privateAdd(this, _pointerdown, (e) => {
      const node = this.opts.ref.current;
      const target = e.target;
      if (!isHTMLElement$1(node) || !isHTMLElement$1(target) || !this.opts.enabled.current) return;
      if (!isHighestLayer(this) || !contains(node, target)) return;
      this.opts.onPointerDown.current(e);
      if (e.defaultPrevented) return;
      __privateSet(this, _unsubSelectionLock, preventTextSelectionOverflow(node, this.domContext.getDocument().body));
    });
    __privateAdd(this, _resetSelectionLock, () => {
      __privateGet(this, _unsubSelectionLock).call(this);
      __privateSet(this, _unsubSelectionLock, noop);
    });
    this.opts = opts;
    this.domContext = new DOMContext(opts.ref);
    let unsubEvents = noop;
    watch(() => this.opts.enabled.current, (isEnabled) => {
      if (isEnabled) {
        globalThis.bitsTextSelectionLayers.set(this, this.opts.enabled);
        unsubEvents();
        unsubEvents = __privateMethod(this, _TextSelectionLayerState_instances, addEventListeners_fn2).call(this);
      }
      return () => {
        unsubEvents();
        __privateGet(this, _resetSelectionLock).call(this);
        globalThis.bitsTextSelectionLayers.delete(this);
      };
    });
  }
  static create(opts) {
    return new _TextSelectionLayerState(opts);
  }
};
_unsubSelectionLock = new WeakMap();
_TextSelectionLayerState_instances = new WeakSet();
addEventListeners_fn2 = function() {
  return executeCallbacks(on(this.domContext.getDocument(), "pointerdown", __privateGet(this, _pointerdown)), on(this.domContext.getDocument(), "pointerup", composeHandlers(__privateGet(this, _resetSelectionLock), this.opts.onPointerUp.current)));
};
_pointerdown = new WeakMap();
_resetSelectionLock = new WeakMap();
let TextSelectionLayerState = _TextSelectionLayerState;
const getUserSelect = (node) => node.style.userSelect || node.style.webkitUserSelect;
function preventTextSelectionOverflow(node, body) {
  const originalBodyUserSelect = getUserSelect(body);
  const originalNodeUserSelect = getUserSelect(node);
  setUserSelect(body, "none");
  setUserSelect(node, "text");
  return () => {
    setUserSelect(body, originalBodyUserSelect);
    setUserSelect(node, originalNodeUserSelect);
  };
}
function setUserSelect(node, value) {
  node.style.userSelect = value;
  node.style.webkitUserSelect = value;
}
function isHighestLayer(instance) {
  const layersArr = [...globalThis.bitsTextSelectionLayers];
  if (!layersArr.length) return false;
  const highestLayer = layersArr.at(-1);
  if (!highestLayer) return false;
  return highestLayer[0] === instance;
}
function Text_selection_layer($$anchor, $$props) {
  push($$props, true);
  let preventOverflowTextSelection = prop($$props, "preventOverflowTextSelection", 3, true), onPointerDown = prop($$props, "onPointerDown", 3, noop), onPointerUp = prop($$props, "onPointerUp", 3, noop);
  TextSelectionLayerState.create({
    id: box.with(() => $$props.id),
    onPointerDown: box.with(() => onPointerDown()),
    onPointerUp: box.with(() => onPointerUp()),
    enabled: box.with(() => $$props.enabled && preventOverflowTextSelection()),
    ref: $$props.ref
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1);
  append($$anchor, fragment);
  pop();
}
globalThis.bitsIdCounter ?? (globalThis.bitsIdCounter = { current: 0 });
function useId(prefix = "bits") {
  globalThis.bitsIdCounter.current++;
  return `${prefix}-${globalThis.bitsIdCounter.current}`;
}
class SharedState {
  constructor(factory) {
    __privateAdd(this, _SharedState_instances);
    __privateAdd(this, _factory);
    __privateAdd(this, _subscribers, 0);
    __privateAdd(this, _state, /* @__PURE__ */ state());
    __privateAdd(this, _scope);
    __privateSet(this, _factory, factory);
  }
  get(...args) {
    __privateSet(this, _subscribers, __privateGet(this, _subscribers) + 1);
    if (get$4(__privateGet(this, _state)) === void 0) {
      __privateSet(this, _scope, effect_root(() => {
        set$1(__privateGet(this, _state), __privateGet(this, _factory).call(this, ...args), true);
      }));
    }
    user_effect(() => {
      return () => {
        __privateMethod(this, _SharedState_instances, dispose_fn).call(this);
      };
    });
    return get$4(__privateGet(this, _state));
  }
}
_factory = new WeakMap();
_subscribers = new WeakMap();
_state = new WeakMap();
_scope = new WeakMap();
_SharedState_instances = new WeakSet();
dispose_fn = function() {
  __privateSet(this, _subscribers, __privateGet(this, _subscribers) - 1);
  if (__privateGet(this, _scope) && __privateGet(this, _subscribers) <= 0) {
    __privateGet(this, _scope).call(this);
    set$1(__privateGet(this, _state), void 0);
    __privateSet(this, _scope, void 0);
  }
};
const bodyLockStackCount = new SharedState(() => {
  const map = new SvelteMap();
  const locked = /* @__PURE__ */ user_derived(() => {
    for (const value of map.values()) {
      if (value) return true;
    }
    return false;
  });
  let initialBodyStyle = /* @__PURE__ */ state(null);
  let stopTouchMoveListener = null;
  function resetBodyStyle() {
    if (!isBrowser) return;
    document.body.setAttribute("style", get$4(initialBodyStyle) ?? "");
    document.body.style.removeProperty("--scrollbar-width");
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
  }
  watch(() => get$4(locked), () => {
    if (!get$4(locked)) return;
    set$1(initialBodyStyle, document.body.getAttribute("style"), true);
    const bodyStyle = getComputedStyle(document.body);
    const verticalScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const paddingRight = Number.parseInt(bodyStyle.paddingRight ?? "0", 10);
    const config = {
      padding: paddingRight + verticalScrollbarWidth,
      margin: Number.parseInt(bodyStyle.marginRight ?? "0", 10)
    };
    if (verticalScrollbarWidth > 0) {
      document.body.style.paddingRight = `${config.padding}px`;
      document.body.style.marginRight = `${config.margin}px`;
      document.body.style.setProperty("--scrollbar-width", `${verticalScrollbarWidth}px`);
      document.body.style.overflow = "hidden";
    }
    if (isIOS) {
      stopTouchMoveListener = addEventListener$1(
        document,
        "touchmove",
        (e) => {
          if (e.target !== document.documentElement) return;
          if (e.touches.length > 1) return;
          e.preventDefault();
        },
        { passive: false }
      );
    }
    afterTick(() => {
      document.body.style.pointerEvents = "none";
      document.body.style.overflow = "hidden";
    });
  });
  onDestroyEffect(() => {
    return () => {
      stopTouchMoveListener == null ? void 0 : stopTouchMoveListener();
    };
  });
  return {
    get map() {
      return map;
    },
    resetBodyStyle
  };
});
class BodyScrollLock {
  constructor(initialState, restoreScrollDelay = () => null) {
    __privateAdd(this, _id, useId());
    __privateAdd(this, _initialState);
    __privateAdd(this, _restoreScrollDelay, () => null);
    __privateAdd(this, _countState);
    __publicField(this, "locked");
    __privateSet(this, _initialState, initialState);
    __privateSet(this, _restoreScrollDelay, restoreScrollDelay);
    __privateSet(this, _countState, bodyLockStackCount.get());
    if (!__privateGet(this, _countState)) return;
    __privateGet(this, _countState).map.set(__privateGet(this, _id), __privateGet(this, _initialState) ?? false);
    this.locked = box.with(() => __privateGet(this, _countState).map.get(__privateGet(this, _id)) ?? false, (v2) => __privateGet(this, _countState).map.set(__privateGet(this, _id), v2));
    onDestroyEffect(() => {
      __privateGet(this, _countState).map.delete(__privateGet(this, _id));
      if (isAnyLocked(__privateGet(this, _countState).map)) return;
      const restoreScrollDelay2 = __privateGet(this, _restoreScrollDelay).call(this);
      if (restoreScrollDelay2 === null) {
        requestAnimationFrame(() => __privateGet(this, _countState).resetBodyStyle());
      } else {
        afterSleep(restoreScrollDelay2, () => __privateGet(this, _countState).resetBodyStyle());
      }
    });
  }
}
_id = new WeakMap();
_initialState = new WeakMap();
_restoreScrollDelay = new WeakMap();
_countState = new WeakMap();
function isAnyLocked(map) {
  for (const [_2, value] of map) {
    if (value) return true;
  }
  return false;
}
function Scroll_lock($$anchor, $$props) {
  push($$props, true);
  let preventScroll = prop($$props, "preventScroll", 3, true), restoreScrollDelay = prop($$props, "restoreScrollDelay", 3, null);
  if (preventScroll()) {
    new BodyScrollLock(preventScroll(), () => restoreScrollDelay());
  }
  pop();
}
function shouldEnableFocusTrap({ forceMount, present, open }) {
  if (forceMount)
    return open;
  return present && open;
}
var root_6$5 = /* @__PURE__ */ from_html(`<!> <!>`, 1);
var root_8$4 = /* @__PURE__ */ from_html(`<!> <div><!></div>`, 1);
function Alert_dialog_content$1($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), forceMount = prop($$props, "forceMount", 3, false), interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "ignore"), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop), onOpenAutoFocus = prop($$props, "onOpenAutoFocus", 3, noop), onInteractOutside = prop($$props, "onInteractOutside", 3, noop), preventScroll = prop($$props, "preventScroll", 3, true), trapFocus = prop($$props, "trapFocus", 3, true), restoreScrollDelay = prop($$props, "restoreScrollDelay", 3, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "children",
    "child",
    "ref",
    "forceMount",
    "interactOutsideBehavior",
    "onCloseAutoFocus",
    "onEscapeKeydown",
    "onOpenAutoFocus",
    "onInteractOutside",
    "preventScroll",
    "trapFocus",
    "restoreScrollDelay"
  ]);
  const contentState = DialogContentState.create({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, contentState.props));
  const expression = /* @__PURE__ */ user_derived(() => contentState.root.opts.open.current || forceMount());
  {
    const presence = ($$anchor2) => {
      const expression_1 = /* @__PURE__ */ user_derived(() => shouldEnableFocusTrap({
        forceMount: forceMount(),
        present: contentState.root.opts.open.current,
        open: contentState.root.opts.open.current
      }));
      {
        const focusScope = ($$anchor3, $$arg0) => {
          let focusScopeProps = () => $$arg0 == null ? void 0 : $$arg0().props;
          Escape_layer($$anchor3, spread_props(() => get$4(mergedProps), {
            get enabled() {
              return contentState.root.opts.open.current;
            },
            get ref() {
              return contentState.opts.ref;
            },
            onEscapeKeydown: (e) => {
              onEscapeKeydown()(e);
              if (e.defaultPrevented) return;
              contentState.root.handleClose();
            },
            children: ($$anchor4, $$slotProps) => {
              Dismissible_layer($$anchor4, spread_props(() => get$4(mergedProps), {
                get ref() {
                  return contentState.opts.ref;
                },
                get enabled() {
                  return contentState.root.opts.open.current;
                },
                get interactOutsideBehavior() {
                  return interactOutsideBehavior();
                },
                onInteractOutside: (e) => {
                  onInteractOutside()(e);
                  if (e.defaultPrevented) return;
                  contentState.root.handleClose();
                },
                children: ($$anchor5, $$slotProps2) => {
                  Text_selection_layer($$anchor5, spread_props(() => get$4(mergedProps), {
                    get ref() {
                      return contentState.opts.ref;
                    },
                    get enabled() {
                      return contentState.root.opts.open.current;
                    },
                    children: ($$anchor6, $$slotProps3) => {
                      var fragment_5 = comment();
                      var node = first_child(fragment_5);
                      {
                        var consequent_1 = ($$anchor7) => {
                          var fragment_6 = root_6$5();
                          var node_1 = first_child(fragment_6);
                          {
                            var consequent = ($$anchor8) => {
                              Scroll_lock($$anchor8, {
                                get preventScroll() {
                                  return preventScroll();
                                },
                                get restoreScrollDelay() {
                                  return restoreScrollDelay();
                                }
                              });
                            };
                            if_block(node_1, ($$render) => {
                              if (contentState.root.opts.open.current) $$render(consequent);
                            });
                          }
                          var node_2 = sibling(node_1, 2);
                          var render_arg = /* @__PURE__ */ derived_safe_equal(() => ({
                            props: mergeProps(get$4(mergedProps), focusScopeProps()),
                            ...contentState.snippetProps
                          }));
                          snippet(node_2, () => $$props.child, () => get$4(render_arg));
                          append($$anchor7, fragment_6);
                        };
                        var alternate = ($$anchor7) => {
                          var fragment_8 = root_8$4();
                          var node_3 = first_child(fragment_8);
                          Scroll_lock(node_3, {
                            get preventScroll() {
                              return preventScroll();
                            }
                          });
                          var div = sibling(node_3, 2);
                          attribute_effect(div, ($0) => ({ ...$0 }), [
                            () => mergeProps(get$4(mergedProps), focusScopeProps())
                          ]);
                          var node_4 = child(div);
                          snippet(node_4, () => $$props.children ?? noop$1);
                          append($$anchor7, fragment_8);
                        };
                        if_block(node, ($$render) => {
                          if ($$props.child) $$render(consequent_1);
                          else $$render(alternate, false);
                        });
                      }
                      append($$anchor6, fragment_5);
                    },
                    $$slots: { default: true }
                  }));
                },
                $$slots: { default: true }
              }));
            },
            $$slots: { default: true }
          }));
        };
        Focus_scope($$anchor2, {
          get ref() {
            return contentState.opts.ref;
          },
          loop: true,
          get trapFocus() {
            return trapFocus();
          },
          get enabled() {
            return get$4(expression_1);
          },
          onCloseAutoFocus: (e) => {
            onCloseAutoFocus()(e);
            if (e.defaultPrevented) return;
            afterSleep(0, () => {
              var _a2;
              return (_a2 = contentState.root.triggerNode) == null ? void 0 : _a2.focus();
            });
          },
          onOpenAutoFocus: (e) => {
            onOpenAutoFocus()(e);
            if (e.defaultPrevented) return;
            e.preventDefault();
            afterSleep(0, () => {
              var _a2;
              return (_a2 = contentState.opts.ref.current) == null ? void 0 : _a2.focus();
            });
          },
          focusScope,
          $$slots: { focusScope: true }
        });
      }
    };
    Presence_layer($$anchor, {
      get forceMount() {
        return forceMount();
      },
      get open() {
        return get$4(expression);
      },
      get ref() {
        return contentState.opts.ref;
      },
      presence,
      $$slots: { presence: true }
    });
  }
  pop();
}
var root_3$7 = /* @__PURE__ */ from_html(`<div><!></div>`);
function Dialog_overlay($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), forceMount = prop($$props, "forceMount", 3, false), ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "forceMount",
    "child",
    "children",
    "ref"
  ]);
  const overlayState = DialogOverlayState.create({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, overlayState.props));
  const expression = /* @__PURE__ */ user_derived(() => overlayState.root.opts.open.current || forceMount());
  {
    const presence = ($$anchor2) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          var render_arg = /* @__PURE__ */ derived_safe_equal(() => ({
            props: mergeProps(get$4(mergedProps)),
            ...overlayState.snippetProps
          }));
          snippet(node_1, () => $$props.child, () => get$4(render_arg));
          append($$anchor3, fragment_2);
        };
        var alternate = ($$anchor3) => {
          var div = root_3$7();
          attribute_effect(div, ($0) => ({ ...$0 }), [() => mergeProps(get$4(mergedProps))]);
          var node_2 = child(div);
          snippet(node_2, () => $$props.children ?? noop$1, () => overlayState.snippetProps);
          append($$anchor3, div);
        };
        if_block(node, ($$render) => {
          if ($$props.child) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment_1);
    };
    Presence_layer($$anchor, {
      get open() {
        return get$4(expression);
      },
      get ref() {
        return overlayState.opts.ref;
      },
      presence,
      $$slots: { presence: true }
    });
  }
  pop();
}
var root_2$j = /* @__PURE__ */ from_html(`<div><!></div>`);
function Dialog_description($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "children",
    "child",
    "ref"
  ]);
  const descriptionState = DialogDescriptionState.create({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, descriptionState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$j();
      attribute_effect(div, () => ({ ...get$4(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function getNextMatch(values, search, currentMatch) {
  const lowerSearch = search.toLowerCase();
  if (lowerSearch.endsWith(" ")) {
    const searchWithoutSpace = lowerSearch.slice(0, -1);
    const matchesWithoutSpace = values.filter((value) => value.toLowerCase().startsWith(searchWithoutSpace));
    if (matchesWithoutSpace.length <= 1) {
      return getNextMatch(values, searchWithoutSpace, currentMatch);
    }
    const currentMatchLowercase = currentMatch == null ? void 0 : currentMatch.toLowerCase();
    if (currentMatchLowercase && currentMatchLowercase.startsWith(searchWithoutSpace) && currentMatchLowercase.charAt(searchWithoutSpace.length) === " " && search.trim() === searchWithoutSpace) {
      return currentMatch;
    }
    const spacedMatches = values.filter((value) => value.toLowerCase().startsWith(lowerSearch));
    if (spacedMatches.length > 0) {
      const currentMatchIndex2 = currentMatch ? values.indexOf(currentMatch) : -1;
      let wrappedMatches = wrapArray(spacedMatches, Math.max(currentMatchIndex2, 0));
      const nextMatch2 = wrappedMatches.find((match) => match !== currentMatch);
      return nextMatch2 || currentMatch;
    }
  }
  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);
  const normalizedSearch = isRepeated ? search[0] : search;
  const normalizedLowerSearch = normalizedSearch.toLowerCase();
  const currentMatchIndex = currentMatch ? values.indexOf(currentMatch) : -1;
  let wrappedValues = wrapArray(values, Math.max(currentMatchIndex, 0));
  const excludeCurrentMatch = normalizedSearch.length === 1;
  if (excludeCurrentMatch)
    wrappedValues = wrappedValues.filter((v2) => v2 !== currentMatch);
  const nextMatch = wrappedValues.find((value) => value == null ? void 0 : value.toLowerCase().startsWith(normalizedLowerSearch));
  return nextMatch !== currentMatch ? nextMatch : void 0;
}
function wrapArray(array, startIndex) {
  return array.map((_2, index2) => array[(startIndex + index2) % array.length]);
}
const sides = ["top", "right", "bottom", "left"];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v2) => ({
  x: v2,
  y: v2
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp$1(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x2,
    y: y2,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y2,
    left: x2,
    right: x2 + width,
    bottom: y2 + height,
    x: x2,
    y: y2
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x2,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i2 = 0; i2 < validMiddleware.length; i2++) {
    const {
      name,
      fn
    } = validMiddleware[i2];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x2,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x2 = nextX != null ? nextX : x2;
    y2 = nextY != null ? nextY : y2;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x2,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i2 = -1;
    }
  }
  return {
    x: x2,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state2, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x2,
    y: y2,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state2;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state2);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element2 = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element2))) != null ? _await$platform$isEle : true) ? element2 : element2.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x2,
    y: y2,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$1 = (options) => ({
  name: "arrow",
  options,
  async fn(state2) {
    const {
      x: x2,
      y: y2,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state2;
    const {
      element: element2,
      padding = 0
    } = evaluate(options, state2) || {};
    if (element2 == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x2,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element2);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element2));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp$1(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$2 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state2) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state2;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state2);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state2, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d) => d.overflows[0] > 0 && getSideAxis(d.placement) === initialSideAxis)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a2, b) => a2.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b) => a2[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state2) {
      const {
        rects
      } = state2;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state2);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state2, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state2, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state2, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state2;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state2);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state2) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x2,
        y: y2,
        placement,
        middlewareData
      } = state2;
      const diffCoords = await convertValueToCoords(state2, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x2 + diffCoords.x,
        y: y2 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state2) {
      const {
        x: x2,
        y: y2,
        placement
      } = state2;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x3,
              y: y3
            } = _ref;
            return {
              x: x3,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state2);
      const coords = {
        x: x2,
        y: y2
      };
      const overflow = await detectOverflow(state2, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp$1(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp$1(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state2,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x2,
          y: limitedCoords.y - y2,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
const limitShift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state2) {
      const {
        x: x2,
        y: y2,
        placement,
        rects,
        middlewareData
      } = state2;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state2);
      const coords = {
        x: x2,
        y: y2
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state2);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state2) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state2;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state2);
      const overflow = await detectOverflow(state2, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state2.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state2.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state2.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state2,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element2) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element2);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element2) {
  return ["table", "td", "th"].includes(getNodeName(element2));
}
function isTopLayer(element2) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element2.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element2) {
  let currentNode = getParentNode(element2);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle$1(element2) {
  return getWindow(element2).getComputedStyle(element2);
}
function getNodeScroll(element2) {
  if (isElement(element2)) {
    return {
      scrollLeft: element2.scrollLeft,
      scrollTop: element2.scrollTop
    };
  }
  return {
    scrollLeft: element2.scrollX,
    scrollTop: element2.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
function getCssDimensions(element2) {
  const css = getComputedStyle$1(element2);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element2);
  const offsetWidth = hasOffset ? element2.offsetWidth : width;
  const offsetHeight = hasOffset ? element2.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element2) {
  return !isElement(element2) ? element2.contextElement : element2;
}
function getScale(element2) {
  const domElement = unwrapElement(element2);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x2 = ($ ? round(rect.width) : rect.width) / width;
  let y2 = ($ ? round(rect.height) : rect.height) / height;
  if (!x2 || !Number.isFinite(x2)) {
    x2 = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x: x2,
    y: y2
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element2) {
  const win = getWindow(element2);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element2, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element2)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element2, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element2.getBoundingClientRect();
  const domElement = unwrapElement(element2);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element2);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x2 = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x2 *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x2 += left;
      y2 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x2,
    y: y2
  });
}
function getWindowScrollBarX(element2, rect) {
  const leftScroll = getNodeScroll(element2).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element2)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x2 = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y2 = htmlRect.top + scroll.scrollTop;
  return {
    x: x2,
    y: y2
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element2) {
  return Array.from(element2.getClientRects());
}
function getDocumentRect(element2) {
  const html2 = getDocumentElement(element2);
  const scroll = getNodeScroll(element2);
  const body = element2.ownerDocument.body;
  const width = max(html2.scrollWidth, html2.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html2.scrollHeight, html2.clientHeight, body.scrollHeight, body.clientHeight);
  let x2 = -scroll.scrollLeft + getWindowScrollBarX(element2);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x2 += max(html2.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getViewportRect(element2, strategy) {
  const win = getWindow(element2);
  const html2 = getDocumentElement(element2);
  const visualViewport = win.visualViewport;
  let width = html2.clientWidth;
  let height = html2.clientHeight;
  let x2 = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getInnerBoundingClientRect(element2, strategy) {
  const clientRect = getBoundingClientRect(element2, true, strategy === "fixed");
  const top = clientRect.top + element2.clientTop;
  const left = clientRect.left + element2.clientLeft;
  const scale = isHTMLElement(element2) ? getScale(element2) : createCoords(1);
  const width = element2.clientWidth * scale.x;
  const height = element2.clientHeight * scale.y;
  const x2 = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element2, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element2, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element2));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element2);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element2, stopNode) {
  const parentNode = getParentNode(element2);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element2, cache) {
  const cachedResult = cache.get(element2);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element2, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element2).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element2) : element2;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element2, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element2, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element: element2,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element2) ? [] : getClippingElementAncestors(element2, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element2, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element2, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element2) {
  const {
    width,
    height
  } = getCssDimensions(element2);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element2, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element2, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x2 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y2 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x: x2,
    y: y2,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element2) {
  return getComputedStyle$1(element2).position === "static";
}
function getTrueOffsetParent(element2, polyfill2) {
  if (!isHTMLElement(element2) || getComputedStyle$1(element2).position === "fixed") {
    return null;
  }
  if (polyfill2) {
    return polyfill2(element2);
  }
  let rawOffsetParent = element2.offsetParent;
  if (getDocumentElement(element2) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element2, polyfill2) {
  const win = getWindow(element2);
  if (isTopLayer(element2)) {
    return win;
  }
  if (!isHTMLElement(element2)) {
    let svgOffsetParent = getParentNode(element2);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element2, polyfill2);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill2);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element2) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element2) {
  return getComputedStyle$1(element2).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a2, b) {
  return a2.x === b.x && a2.y === b.y && a2.width === b.width && a2.height === b.height;
}
function observeMove(element2, onMove) {
  let io = null;
  let timeoutId;
  const root2 = getDocumentElement(element2);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element2.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root2.clientWidth - (left + width));
    const insetBottom = floor(root2.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element2.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root2.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element2);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset = offset$1;
const shift = shift$1;
const flip$1 = flip$2;
const size = size$1;
const hide = hide$1;
const arrow = arrow$1;
const limitShift = limitShift$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function get(valueOrGetValue) {
  return typeof valueOrGetValue === "function" ? valueOrGetValue() : valueOrGetValue;
}
function getDPR(element2) {
  if (typeof window === "undefined") return 1;
  const win = element2.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element2, value) {
  const dpr = getDPR(element2);
  return Math.round(value * dpr) / dpr;
}
function getFloatingContentCSSVars(name) {
  return {
    [`--bits-${name}-content-transform-origin`]: `var(--bits-floating-transform-origin)`,
    [`--bits-${name}-content-available-width`]: `var(--bits-floating-available-width)`,
    [`--bits-${name}-content-available-height`]: `var(--bits-floating-available-height)`,
    [`--bits-${name}-anchor-width`]: `var(--bits-floating-anchor-width)`,
    [`--bits-${name}-anchor-height`]: `var(--bits-floating-anchor-height)`
  };
}
function useFloating(options) {
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = /* @__PURE__ */ user_derived(() => get(options.open) ?? true);
  const middlewareOption = /* @__PURE__ */ user_derived(() => get(options.middleware));
  const transformOption = /* @__PURE__ */ user_derived(() => get(options.transform) ?? true);
  const placementOption = /* @__PURE__ */ user_derived(() => get(options.placement) ?? "bottom");
  const strategyOption = /* @__PURE__ */ user_derived(() => get(options.strategy) ?? "absolute");
  const sideOffsetOption = /* @__PURE__ */ user_derived(() => get(options.sideOffset) ?? 0);
  const alignOffsetOption = /* @__PURE__ */ user_derived(() => get(options.alignOffset) ?? 0);
  const reference = options.reference;
  let x2 = /* @__PURE__ */ state(0);
  let y2 = /* @__PURE__ */ state(0);
  const floating = box(null);
  let strategy = /* @__PURE__ */ state(proxy(get$4(strategyOption)));
  let placement = /* @__PURE__ */ state(proxy(get$4(placementOption)));
  let middlewareData = /* @__PURE__ */ state(proxy({}));
  let isPositioned = /* @__PURE__ */ state(false);
  const floatingStyles = /* @__PURE__ */ user_derived(() => {
    const xVal = floating.current ? roundByDPR(floating.current, get$4(x2)) : get$4(x2);
    const yVal = floating.current ? roundByDPR(floating.current, get$4(y2)) : get$4(y2);
    if (get$4(transformOption)) {
      return {
        position: get$4(strategy),
        left: "0",
        top: "0",
        transform: `translate(${xVal}px, ${yVal}px)`,
        ...floating.current && getDPR(floating.current) >= 1.5 && { willChange: "transform" }
      };
    }
    return {
      position: get$4(strategy),
      left: `${xVal}px`,
      top: `${yVal}px`
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (reference.current === null || floating.current === null) return;
    computePosition(reference.current, floating.current, {
      middleware: get$4(middlewareOption),
      placement: get$4(placementOption),
      strategy: get$4(strategyOption)
    }).then((position) => {
      if (!get$4(openOption) && get$4(x2) !== 0 && get$4(y2) !== 0) {
        const maxExpectedOffset = Math.max(Math.abs(get$4(sideOffsetOption)), Math.abs(get$4(alignOffsetOption)), 15);
        if (position.x <= maxExpectedOffset && position.y <= maxExpectedOffset) return;
      }
      set$1(x2, position.x, true);
      set$1(y2, position.y, true);
      set$1(strategy, position.strategy, true);
      set$1(placement, position.placement, true);
      set$1(middlewareData, position.middlewareData, true);
      set$1(isPositioned, true);
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
  }
  function attach2() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update();
      return;
    }
    if (reference.current === null || floating.current === null) return;
    whileElementsMountedCleanup = whileElementsMountedOption(reference.current, floating.current, update);
  }
  function reset() {
    if (!get$4(openOption)) {
      set$1(isPositioned, false);
    }
  }
  user_effect(update);
  user_effect(attach2);
  user_effect(reset);
  user_effect(() => cleanup);
  return {
    floating,
    reference,
    get strategy() {
      return get$4(strategy);
    },
    get placement() {
      return get$4(placement);
    },
    get middlewareData() {
      return get$4(middlewareData);
    },
    get isPositioned() {
      return get$4(isPositioned);
    },
    get floatingStyles() {
      return get$4(floatingStyles);
    },
    get update() {
      return update;
    }
  };
}
const OPPOSITE_SIDE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
const FloatingRootContext = new Context("Floating.Root");
const FloatingContentContext = new Context("Floating.Content");
const FloatingTooltipRootContext = new Context("Floating.Root");
class FloatingRootState {
  constructor() {
    __publicField(this, "anchorNode", box(null));
    __publicField(this, "customAnchorNode", box(null));
    __publicField(this, "triggerNode", box(null));
    user_effect(() => {
      if (this.customAnchorNode.current) {
        if (typeof this.customAnchorNode.current === "string") {
          this.anchorNode.current = document.querySelector(this.customAnchorNode.current);
        } else {
          this.anchorNode.current = this.customAnchorNode.current;
        }
      } else {
        this.anchorNode.current = this.triggerNode.current;
      }
    });
  }
  static create(tooltip = false) {
    return tooltip ? FloatingTooltipRootContext.set(new FloatingRootState()) : FloatingRootContext.set(new FloatingRootState());
  }
}
const _FloatingContentState = class _FloatingContentState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    // nodes
    __publicField(this, "contentRef", box(null));
    __publicField(this, "wrapperRef", box(null));
    __publicField(this, "arrowRef", box(null));
    __publicField(this, "contentAttachment", attachRef(this.contentRef));
    __publicField(this, "wrapperAttachment", attachRef(this.wrapperRef));
    __publicField(this, "arrowAttachment", attachRef(this.arrowRef));
    // ids
    __publicField(this, "arrowId", box(useId()));
    __privateAdd(this, _transformedStyle, /* @__PURE__ */ user_derived(() => {
      if (typeof this.opts.style === "string") return cssToStyleObj(this.opts.style);
      if (!this.opts.style) return {};
    }));
    __privateAdd(this, _updatePositionStrategy);
    __privateAdd(this, _arrowSize, new ElementSize(() => this.arrowRef.current ?? void 0));
    __privateAdd(this, _arrowWidth, /* @__PURE__ */ user_derived(() => {
      var _a2;
      return ((_a2 = __privateGet(this, _arrowSize)) == null ? void 0 : _a2.width) ?? 0;
    }));
    __privateAdd(this, _arrowHeight, /* @__PURE__ */ user_derived(() => {
      var _a2;
      return ((_a2 = __privateGet(this, _arrowSize)) == null ? void 0 : _a2.height) ?? 0;
    }));
    __privateAdd(this, _desiredPlacement, /* @__PURE__ */ user_derived(() => {
      var _a2;
      return ((_a2 = this.opts.side) == null ? void 0 : _a2.current) + (this.opts.align.current !== "center" ? `-${this.opts.align.current}` : "");
    }));
    __privateAdd(this, _boundary, /* @__PURE__ */ user_derived(() => Array.isArray(this.opts.collisionBoundary.current) ? this.opts.collisionBoundary.current : [this.opts.collisionBoundary.current]));
    __privateAdd(this, _hasExplicitBoundaries, /* @__PURE__ */ user_derived(() => get$4(__privateGet(this, _boundary)).length > 0));
    __privateAdd(this, _detectOverflowOptions, /* @__PURE__ */ user_derived(() => ({
      padding: this.opts.collisionPadding.current,
      boundary: get$4(__privateGet(this, _boundary)).filter(isNotNull),
      altBoundary: this.hasExplicitBoundaries
    })));
    __privateAdd(this, _availableWidth, /* @__PURE__ */ state(void 0));
    __privateAdd(this, _availableHeight, /* @__PURE__ */ state(void 0));
    __privateAdd(this, _anchorWidth, /* @__PURE__ */ state(void 0));
    __privateAdd(this, _anchorHeight, /* @__PURE__ */ state(void 0));
    __privateAdd(this, _middleware, /* @__PURE__ */ user_derived(() => [
      offset({
        mainAxis: this.opts.sideOffset.current + get$4(__privateGet(this, _arrowHeight)),
        alignmentAxis: this.opts.alignOffset.current
      }),
      this.opts.avoidCollisions.current && shift({
        mainAxis: true,
        crossAxis: false,
        limiter: this.opts.sticky.current === "partial" ? limitShift() : void 0,
        ...this.detectOverflowOptions
      }),
      this.opts.avoidCollisions.current && flip$1({ ...this.detectOverflowOptions }),
      size({
        ...this.detectOverflowOptions,
        apply: ({ rects, availableWidth, availableHeight }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference;
          set$1(__privateGet(this, _availableWidth), availableWidth, true);
          set$1(__privateGet(this, _availableHeight), availableHeight, true);
          set$1(__privateGet(this, _anchorWidth), anchorWidth, true);
          set$1(__privateGet(this, _anchorHeight), anchorHeight, true);
        }
      }),
      this.arrowRef.current && arrow({
        element: this.arrowRef.current,
        padding: this.opts.arrowPadding.current
      }),
      transformOrigin({
        arrowWidth: get$4(__privateGet(this, _arrowWidth)),
        arrowHeight: get$4(__privateGet(this, _arrowHeight))
      }),
      this.opts.hideWhenDetached.current && hide({
        strategy: "referenceHidden",
        ...this.detectOverflowOptions
      })
    ].filter(Boolean)));
    __publicField(this, "floating");
    __privateAdd(this, _placedSide, /* @__PURE__ */ user_derived(() => getSideFromPlacement(this.floating.placement)));
    __privateAdd(this, _placedAlign, /* @__PURE__ */ user_derived(() => getAlignFromPlacement(this.floating.placement)));
    __privateAdd(this, _arrowX, /* @__PURE__ */ user_derived(() => {
      var _a2;
      return ((_a2 = this.floating.middlewareData.arrow) == null ? void 0 : _a2.x) ?? 0;
    }));
    __privateAdd(this, _arrowY, /* @__PURE__ */ user_derived(() => {
      var _a2;
      return ((_a2 = this.floating.middlewareData.arrow) == null ? void 0 : _a2.y) ?? 0;
    }));
    __privateAdd(this, _cannotCenterArrow, /* @__PURE__ */ user_derived(() => {
      var _a2;
      return ((_a2 = this.floating.middlewareData.arrow) == null ? void 0 : _a2.centerOffset) !== 0;
    }));
    __privateAdd(this, _contentZIndex, /* @__PURE__ */ state());
    __privateAdd(this, _arrowBaseSide, /* @__PURE__ */ user_derived(() => OPPOSITE_SIDE[this.placedSide]));
    __privateAdd(this, _wrapperProps, /* @__PURE__ */ user_derived(() => {
      var _a2, _b2, _c2;
      return {
        id: this.opts.wrapperId.current,
        "data-bits-floating-content-wrapper": "",
        style: {
          ...this.floating.floatingStyles,
          // keep off page when measuring
          transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: this.contentZIndex,
          "--bits-floating-transform-origin": `${(_a2 = this.floating.middlewareData.transformOrigin) == null ? void 0 : _a2.x} ${(_b2 = this.floating.middlewareData.transformOrigin) == null ? void 0 : _b2.y}`,
          "--bits-floating-available-width": `${get$4(__privateGet(this, _availableWidth))}px`,
          "--bits-floating-available-height": `${get$4(__privateGet(this, _availableHeight))}px`,
          "--bits-floating-anchor-width": `${get$4(__privateGet(this, _anchorWidth))}px`,
          "--bits-floating-anchor-height": `${get$4(__privateGet(this, _anchorHeight))}px`,
          // hide the content if using the hide middleware and should be hidden
          ...((_c2 = this.floating.middlewareData.hide) == null ? void 0 : _c2.referenceHidden) && {
            visibility: "hidden",
            "pointer-events": "none"
          },
          ...get$4(__privateGet(this, _transformedStyle))
        },
        // Floating UI calculates logical alignment based the `dir` attribute
        dir: this.opts.dir.current,
        ...this.wrapperAttachment
      };
    }));
    __privateAdd(this, _props7, /* @__PURE__ */ user_derived(() => ({
      "data-side": this.placedSide,
      "data-align": this.placedAlign,
      style: styleToString({ ...get$4(__privateGet(this, _transformedStyle)) }),
      ...this.contentAttachment
    })));
    __privateAdd(this, _arrowStyle, /* @__PURE__ */ user_derived(() => ({
      position: "absolute",
      left: this.arrowX ? `${this.arrowX}px` : void 0,
      top: this.arrowY ? `${this.arrowY}px` : void 0,
      [this.arrowBaseSide]: 0,
      "transform-origin": {
        top: "",
        right: "0 0",
        bottom: "center 0",
        left: "100% 0"
      }[this.placedSide],
      transform: {
        top: "translateY(100%)",
        right: "translateY(50%) rotate(90deg) translateX(-50%)",
        bottom: "rotate(180deg)",
        left: "translateY(50%) rotate(-90deg) translateX(50%)"
      }[this.placedSide],
      visibility: this.cannotCenterArrow ? "hidden" : void 0
    })));
    this.opts = opts;
    this.root = root2;
    if (opts.customAnchor) {
      this.root.customAnchorNode.current = opts.customAnchor.current;
    }
    watch(() => opts.customAnchor.current, (customAnchor) => {
      this.root.customAnchorNode.current = customAnchor;
    });
    this.floating = useFloating({
      strategy: () => this.opts.strategy.current,
      placement: () => get$4(__privateGet(this, _desiredPlacement)),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...args) => {
        var _a2;
        const cleanup = autoUpdate(...args, {
          animationFrame: ((_a2 = __privateGet(this, _updatePositionStrategy)) == null ? void 0 : _a2.current) === "always"
        });
        return cleanup;
      },
      open: () => this.opts.enabled.current,
      sideOffset: () => this.opts.sideOffset.current,
      alignOffset: () => this.opts.alignOffset.current
    });
    user_effect(() => {
      var _a2;
      if (!this.floating.isPositioned) return;
      (_a2 = this.opts.onPlaced) == null ? void 0 : _a2.current();
    });
    watch(() => this.contentRef.current, (contentNode) => {
      if (!contentNode) return;
      const win = getWindow$1(contentNode);
      this.contentZIndex = win.getComputedStyle(contentNode).zIndex;
    });
    user_effect(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
  static create(opts, tooltip = false) {
    return tooltip ? FloatingContentContext.set(new _FloatingContentState(opts, FloatingTooltipRootContext.get())) : FloatingContentContext.set(new _FloatingContentState(opts, FloatingRootContext.get()));
  }
  get hasExplicitBoundaries() {
    return get$4(__privateGet(this, _hasExplicitBoundaries));
  }
  set hasExplicitBoundaries(value) {
    set$1(__privateGet(this, _hasExplicitBoundaries), value);
  }
  get detectOverflowOptions() {
    return get$4(__privateGet(this, _detectOverflowOptions));
  }
  set detectOverflowOptions(value) {
    set$1(__privateGet(this, _detectOverflowOptions), value);
  }
  get middleware() {
    return get$4(__privateGet(this, _middleware));
  }
  set middleware(value) {
    set$1(__privateGet(this, _middleware), value);
  }
  get placedSide() {
    return get$4(__privateGet(this, _placedSide));
  }
  set placedSide(value) {
    set$1(__privateGet(this, _placedSide), value);
  }
  get placedAlign() {
    return get$4(__privateGet(this, _placedAlign));
  }
  set placedAlign(value) {
    set$1(__privateGet(this, _placedAlign), value);
  }
  get arrowX() {
    return get$4(__privateGet(this, _arrowX));
  }
  set arrowX(value) {
    set$1(__privateGet(this, _arrowX), value);
  }
  get arrowY() {
    return get$4(__privateGet(this, _arrowY));
  }
  set arrowY(value) {
    set$1(__privateGet(this, _arrowY), value);
  }
  get cannotCenterArrow() {
    return get$4(__privateGet(this, _cannotCenterArrow));
  }
  set cannotCenterArrow(value) {
    set$1(__privateGet(this, _cannotCenterArrow), value);
  }
  get contentZIndex() {
    return get$4(__privateGet(this, _contentZIndex));
  }
  set contentZIndex(value) {
    set$1(__privateGet(this, _contentZIndex), value, true);
  }
  get arrowBaseSide() {
    return get$4(__privateGet(this, _arrowBaseSide));
  }
  set arrowBaseSide(value) {
    set$1(__privateGet(this, _arrowBaseSide), value);
  }
  get wrapperProps() {
    return get$4(__privateGet(this, _wrapperProps));
  }
  set wrapperProps(value) {
    set$1(__privateGet(this, _wrapperProps), value);
  }
  get props() {
    return get$4(__privateGet(this, _props7));
  }
  set props(value) {
    set$1(__privateGet(this, _props7), value);
  }
  get arrowStyle() {
    return get$4(__privateGet(this, _arrowStyle));
  }
  set arrowStyle(value) {
    set$1(__privateGet(this, _arrowStyle), value);
  }
};
_transformedStyle = new WeakMap();
_updatePositionStrategy = new WeakMap();
_arrowSize = new WeakMap();
_arrowWidth = new WeakMap();
_arrowHeight = new WeakMap();
_desiredPlacement = new WeakMap();
_boundary = new WeakMap();
_hasExplicitBoundaries = new WeakMap();
_detectOverflowOptions = new WeakMap();
_availableWidth = new WeakMap();
_availableHeight = new WeakMap();
_anchorWidth = new WeakMap();
_anchorHeight = new WeakMap();
_middleware = new WeakMap();
_placedSide = new WeakMap();
_placedAlign = new WeakMap();
_arrowX = new WeakMap();
_arrowY = new WeakMap();
_cannotCenterArrow = new WeakMap();
_contentZIndex = new WeakMap();
_arrowBaseSide = new WeakMap();
_wrapperProps = new WeakMap();
_props7 = new WeakMap();
_arrowStyle = new WeakMap();
let FloatingContentState = _FloatingContentState;
class FloatingAnchorState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    this.opts = opts;
    this.root = root2;
    if (opts.virtualEl && opts.virtualEl.current) {
      root2.triggerNode = box.from(opts.virtualEl.current);
    } else {
      root2.triggerNode = opts.ref;
    }
  }
  static create(opts, tooltip = false) {
    return tooltip ? new FloatingAnchorState(opts, FloatingTooltipRootContext.get()) : new FloatingAnchorState(opts, FloatingRootContext.get());
  }
}
function transformOrigin(options) {
  return {
    name: "transformOrigin",
    options,
    fn(data) {
      var _a2, _b2, _c2;
      const { placement, rects, middlewareData } = data;
      const cannotCenterArrow = ((_a2 = middlewareData.arrow) == null ? void 0 : _a2.centerOffset) !== 0;
      const isArrowHidden = cannotCenterArrow;
      const arrowWidth = isArrowHidden ? 0 : options.arrowWidth;
      const arrowHeight = isArrowHidden ? 0 : options.arrowHeight;
      const [placedSide, placedAlign] = getSideAndAlignFromPlacement(placement);
      const noArrowAlign = { start: "0%", center: "50%", end: "100%" }[placedAlign];
      const arrowXCenter = (((_b2 = middlewareData.arrow) == null ? void 0 : _b2.x) ?? 0) + arrowWidth / 2;
      const arrowYCenter = (((_c2 = middlewareData.arrow) == null ? void 0 : _c2.y) ?? 0) + arrowHeight / 2;
      let x2 = "";
      let y2 = "";
      if (placedSide === "bottom") {
        x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y2 = `${-arrowHeight}px`;
      } else if (placedSide === "top") {
        x2 = isArrowHidden ? noArrowAlign : `${arrowXCenter}px`;
        y2 = `${rects.floating.height + arrowHeight}px`;
      } else if (placedSide === "right") {
        x2 = `${-arrowHeight}px`;
        y2 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      } else if (placedSide === "left") {
        x2 = `${rects.floating.width + arrowHeight}px`;
        y2 = isArrowHidden ? noArrowAlign : `${arrowYCenter}px`;
      }
      return { data: { x: x2, y: y2 } };
    }
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
function getSideFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[0];
}
function getAlignFromPlacement(placement) {
  return getSideAndAlignFromPlacement(placement)[1];
}
function Floating_layer($$anchor, $$props) {
  push($$props, true);
  let tooltip = prop($$props, "tooltip", 3, false);
  FloatingRootState.create(tooltip());
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1);
  append($$anchor, fragment);
  pop();
}
const defaultOptions = { afterMs: 1e4, onChange: noop };
function boxAutoReset(defaultValue, options) {
  const { afterMs, onChange, getWindow: getWindow2 } = { ...defaultOptions, ...options };
  let timeout = null;
  let value = /* @__PURE__ */ state(proxy(defaultValue));
  function resetAfter() {
    return getWindow2().setTimeout(
      () => {
        set$1(value, defaultValue, true);
        onChange == null ? void 0 : onChange(defaultValue);
      },
      afterMs
    );
  }
  user_effect(() => {
    return () => {
      if (timeout) getWindow2().clearTimeout(timeout);
    };
  });
  return box.with(() => get$4(value), (v2) => {
    set$1(value, v2, true);
    onChange == null ? void 0 : onChange(v2);
    if (timeout) getWindow2().clearTimeout(timeout);
    timeout = resetAfter();
  });
}
class DOMTypeahead {
  constructor(opts) {
    __privateAdd(this, _opts5);
    __privateAdd(this, _search);
    __privateAdd(this, _onMatch, /* @__PURE__ */ user_derived(() => {
      if (__privateGet(this, _opts5).onMatch) return __privateGet(this, _opts5).onMatch;
      return (node) => node.focus();
    }));
    __privateAdd(this, _getCurrentItem, /* @__PURE__ */ user_derived(() => {
      if (__privateGet(this, _opts5).getCurrentItem) return __privateGet(this, _opts5).getCurrentItem;
      return __privateGet(this, _opts5).getActiveElement;
    }));
    __privateSet(this, _opts5, opts);
    __privateSet(this, _search, boxAutoReset("", { afterMs: 1e3, getWindow: opts.getWindow }));
    this.handleTypeaheadSearch = this.handleTypeaheadSearch.bind(this);
    this.resetTypeahead = this.resetTypeahead.bind(this);
  }
  handleTypeaheadSearch(key, candidates) {
    var _a2, _b2;
    if (!candidates.length) return;
    __privateGet(this, _search).current = __privateGet(this, _search).current + key;
    const currentItem = get$4(__privateGet(this, _getCurrentItem))();
    const currentMatch = ((_b2 = (_a2 = candidates.find((item) => item === currentItem)) == null ? void 0 : _a2.textContent) == null ? void 0 : _b2.trim()) ?? "";
    const values = candidates.map((item) => {
      var _a3;
      return ((_a3 = item.textContent) == null ? void 0 : _a3.trim()) ?? "";
    });
    const nextMatch = getNextMatch(values, __privateGet(this, _search).current, currentMatch);
    const newItem = candidates.find((item) => {
      var _a3;
      return ((_a3 = item.textContent) == null ? void 0 : _a3.trim()) === nextMatch;
    });
    if (newItem) get$4(__privateGet(this, _onMatch))(newItem);
    return newItem;
  }
  resetTypeahead() {
    __privateGet(this, _search).current = "";
  }
  get search() {
    return __privateGet(this, _search).current;
  }
}
_opts5 = new WeakMap();
_search = new WeakMap();
_onMatch = new WeakMap();
_getCurrentItem = new WeakMap();
function Floating_layer_anchor($$anchor, $$props) {
  push($$props, true);
  let tooltip = prop($$props, "tooltip", 3, false);
  FloatingAnchorState.create(
    {
      id: box.with(() => $$props.id),
      virtualEl: box.with(() => $$props.virtualEl),
      ref: $$props.ref
    },
    tooltip()
  );
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.children ?? noop$1);
  append($$anchor, fragment);
  pop();
}
function Floating_layer_content($$anchor, $$props) {
  push($$props, true);
  let side = prop($$props, "side", 3, "bottom"), sideOffset = prop($$props, "sideOffset", 3, 0), align = prop($$props, "align", 3, "center"), alignOffset = prop($$props, "alignOffset", 3, 0), arrowPadding = prop($$props, "arrowPadding", 3, 0), avoidCollisions = prop($$props, "avoidCollisions", 3, true), collisionBoundary = prop($$props, "collisionBoundary", 19, () => []), collisionPadding = prop($$props, "collisionPadding", 3, 0), hideWhenDetached = prop($$props, "hideWhenDetached", 3, false), onPlaced = prop($$props, "onPlaced", 3, () => {
  }), sticky = prop($$props, "sticky", 3, "partial"), updatePositionStrategy = prop($$props, "updatePositionStrategy", 3, "optimized"), strategy = prop($$props, "strategy", 3, "fixed"), dir = prop($$props, "dir", 3, "ltr"), style = prop($$props, "style", 19, () => ({})), wrapperId = prop($$props, "wrapperId", 19, useId), customAnchor = prop($$props, "customAnchor", 3, null), tooltip = prop($$props, "tooltip", 3, false);
  const contentState = FloatingContentState.create(
    {
      side: box.with(() => side()),
      sideOffset: box.with(() => sideOffset()),
      align: box.with(() => align()),
      alignOffset: box.with(() => alignOffset()),
      id: box.with(() => $$props.id),
      arrowPadding: box.with(() => arrowPadding()),
      avoidCollisions: box.with(() => avoidCollisions()),
      collisionBoundary: box.with(() => collisionBoundary()),
      collisionPadding: box.with(() => collisionPadding()),
      hideWhenDetached: box.with(() => hideWhenDetached()),
      onPlaced: box.with(() => onPlaced()),
      sticky: box.with(() => sticky()),
      updatePositionStrategy: box.with(() => updatePositionStrategy()),
      strategy: box.with(() => strategy()),
      dir: box.with(() => dir()),
      style: box.with(() => style()),
      enabled: box.with(() => $$props.enabled),
      wrapperId: box.with(() => wrapperId()),
      customAnchor: box.with(() => customAnchor())
    },
    tooltip()
  );
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(contentState.wrapperProps, { style: { pointerEvents: "auto" } }));
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.content ?? noop$1, () => ({
    props: contentState.props,
    wrapperProps: get$4(mergedProps)
  }));
  append($$anchor, fragment);
  pop();
}
function Floating_layer_content_static($$anchor, $$props) {
  push($$props, true);
  onMount(() => {
    var _a2;
    (_a2 = $$props.onPlaced) == null ? void 0 : _a2.call($$props);
  });
  var fragment = comment();
  var node = first_child(fragment);
  snippet(node, () => $$props.content ?? noop$1, () => ({ props: {}, wrapperProps: {} }));
  append($$anchor, fragment);
  pop();
}
function Popper_content($$anchor, $$props) {
  let isStatic = prop($$props, "isStatic", 3, false), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "content",
    "isStatic",
    "onPlaced"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      Floating_layer_content_static($$anchor2, {
        get content() {
          return $$props.content;
        },
        get onPlaced() {
          return $$props.onPlaced;
        }
      });
    };
    var alternate = ($$anchor2) => {
      Floating_layer_content($$anchor2, spread_props(
        {
          get content() {
            return $$props.content;
          },
          get onPlaced() {
            return $$props.onPlaced;
          }
        },
        () => restProps
      ));
    };
    if_block(node, ($$render) => {
      if (isStatic()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
}
var root_1$f = /* @__PURE__ */ from_html(`<!> <!>`, 1);
function Popper_layer_inner($$anchor, $$props) {
  push($$props, true);
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), tooltip = prop($$props, "tooltip", 3, false), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled",
    "ref",
    "tooltip"
  ]);
  {
    const content = ($$anchor2, $$arg0) => {
      let floatingProps = () => $$arg0 == null ? void 0 : $$arg0().props;
      let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
      var fragment_1 = root_1$f();
      var node = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          Scroll_lock($$anchor3, {
            get preventScroll() {
              return $$props.preventScroll;
            }
          });
        };
        var alternate = ($$anchor3, $$elseif) => {
          {
            var consequent_1 = ($$anchor4) => {
              Scroll_lock($$anchor4, {
                get preventScroll() {
                  return $$props.preventScroll;
                }
              });
            };
            if_block(
              $$anchor3,
              ($$render) => {
                if (!$$props.forceMount) $$render(consequent_1);
              },
              $$elseif
            );
          }
        };
        if_block(node, ($$render) => {
          if ($$props.forceMount && $$props.enabled) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      var node_1 = sibling(node, 2);
      {
        const focusScope = ($$anchor3, $$arg02) => {
          let focusScopeProps = () => $$arg02 == null ? void 0 : $$arg02().props;
          Escape_layer($$anchor3, {
            get onEscapeKeydown() {
              return $$props.onEscapeKeydown;
            },
            get escapeKeydownBehavior() {
              return $$props.escapeKeydownBehavior;
            },
            get enabled() {
              return $$props.enabled;
            },
            get ref() {
              return $$props.ref;
            },
            children: ($$anchor4, $$slotProps) => {
              {
                const children = ($$anchor5, $$arg03) => {
                  let dismissibleProps = () => $$arg03 == null ? void 0 : $$arg03().props;
                  Text_selection_layer($$anchor5, {
                    get id() {
                      return $$props.id;
                    },
                    get preventOverflowTextSelection() {
                      return $$props.preventOverflowTextSelection;
                    },
                    get onPointerDown() {
                      return $$props.onPointerDown;
                    },
                    get onPointerUp() {
                      return $$props.onPointerUp;
                    },
                    get enabled() {
                      return $$props.enabled;
                    },
                    get ref() {
                      return $$props.ref;
                    },
                    children: ($$anchor6, $$slotProps2) => {
                      var fragment_7 = comment();
                      var node_2 = first_child(fragment_7);
                      var render_arg = /* @__PURE__ */ derived_safe_equal(() => ({
                        props: mergeProps(restProps, floatingProps(), dismissibleProps(), focusScopeProps(), { style: { pointerEvents: "auto" } }),
                        wrapperProps: wrapperProps()
                      }));
                      snippet(node_2, () => $$props.popper ?? noop$1, () => get$4(render_arg));
                      append($$anchor6, fragment_7);
                    },
                    $$slots: { default: true }
                  });
                };
                Dismissible_layer($$anchor4, {
                  get id() {
                    return $$props.id;
                  },
                  get onInteractOutside() {
                    return $$props.onInteractOutside;
                  },
                  get onFocusOutside() {
                    return $$props.onFocusOutside;
                  },
                  get interactOutsideBehavior() {
                    return interactOutsideBehavior();
                  },
                  isValidEvent: isValidEvent2(),
                  get enabled() {
                    return $$props.enabled;
                  },
                  get ref() {
                    return $$props.ref;
                  },
                  children,
                  $$slots: { default: true }
                });
              }
            },
            $$slots: { default: true }
          });
        };
        Focus_scope(node_1, {
          get onOpenAutoFocus() {
            return $$props.onOpenAutoFocus;
          },
          get onCloseAutoFocus() {
            return $$props.onCloseAutoFocus;
          },
          get loop() {
            return $$props.loop;
          },
          get enabled() {
            return $$props.enabled;
          },
          get trapFocus() {
            return trapFocus();
          },
          get forceMount() {
            return $$props.forceMount;
          },
          get ref() {
            return $$props.ref;
          },
          focusScope,
          $$slots: { focusScope: true }
        });
      }
      append($$anchor2, fragment_1);
    };
    Popper_content($$anchor, {
      get isStatic() {
        return isStatic();
      },
      get id() {
        return $$props.id;
      },
      get side() {
        return $$props.side;
      },
      get sideOffset() {
        return $$props.sideOffset;
      },
      get align() {
        return $$props.align;
      },
      get alignOffset() {
        return $$props.alignOffset;
      },
      get arrowPadding() {
        return $$props.arrowPadding;
      },
      get avoidCollisions() {
        return $$props.avoidCollisions;
      },
      get collisionBoundary() {
        return $$props.collisionBoundary;
      },
      get collisionPadding() {
        return $$props.collisionPadding;
      },
      get sticky() {
        return $$props.sticky;
      },
      get hideWhenDetached() {
        return $$props.hideWhenDetached;
      },
      get updatePositionStrategy() {
        return $$props.updatePositionStrategy;
      },
      get strategy() {
        return $$props.strategy;
      },
      get dir() {
        return $$props.dir;
      },
      get wrapperId() {
        return $$props.wrapperId;
      },
      get style() {
        return $$props.style;
      },
      get onPlaced() {
        return $$props.onPlaced;
      },
      get customAnchor() {
        return customAnchor();
      },
      get enabled() {
        return $$props.enabled;
      },
      get tooltip() {
        return tooltip();
      },
      content,
      $$slots: { content: true }
    });
  }
  pop();
}
function Popper_layer($$anchor, $$props) {
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "open",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "ref"
  ]);
  {
    const presence = ($$anchor2) => {
      Popper_layer_inner($$anchor2, spread_props(
        {
          get popper() {
            return $$props.popper;
          },
          get onEscapeKeydown() {
            return $$props.onEscapeKeydown;
          },
          get escapeKeydownBehavior() {
            return $$props.escapeKeydownBehavior;
          },
          get preventOverflowTextSelection() {
            return $$props.preventOverflowTextSelection;
          },
          get id() {
            return $$props.id;
          },
          get onPointerDown() {
            return $$props.onPointerDown;
          },
          get onPointerUp() {
            return $$props.onPointerUp;
          },
          get side() {
            return $$props.side;
          },
          get sideOffset() {
            return $$props.sideOffset;
          },
          get align() {
            return $$props.align;
          },
          get alignOffset() {
            return $$props.alignOffset;
          },
          get arrowPadding() {
            return $$props.arrowPadding;
          },
          get avoidCollisions() {
            return $$props.avoidCollisions;
          },
          get collisionBoundary() {
            return $$props.collisionBoundary;
          },
          get collisionPadding() {
            return $$props.collisionPadding;
          },
          get sticky() {
            return $$props.sticky;
          },
          get hideWhenDetached() {
            return $$props.hideWhenDetached;
          },
          get updatePositionStrategy() {
            return $$props.updatePositionStrategy;
          },
          get strategy() {
            return $$props.strategy;
          },
          get dir() {
            return $$props.dir;
          },
          get preventScroll() {
            return $$props.preventScroll;
          },
          get wrapperId() {
            return $$props.wrapperId;
          },
          get style() {
            return $$props.style;
          },
          get onPlaced() {
            return $$props.onPlaced;
          },
          get customAnchor() {
            return customAnchor();
          },
          get isStatic() {
            return isStatic();
          },
          get enabled() {
            return $$props.open;
          },
          get onInteractOutside() {
            return $$props.onInteractOutside;
          },
          get onCloseAutoFocus() {
            return $$props.onCloseAutoFocus;
          },
          get onOpenAutoFocus() {
            return $$props.onOpenAutoFocus;
          },
          get interactOutsideBehavior() {
            return interactOutsideBehavior();
          },
          get loop() {
            return $$props.loop;
          },
          get trapFocus() {
            return trapFocus();
          },
          isValidEvent: isValidEvent2(),
          get onFocusOutside() {
            return $$props.onFocusOutside;
          },
          forceMount: false,
          get ref() {
            return $$props.ref;
          }
        },
        () => restProps
      ));
    };
    Presence_layer($$anchor, {
      get open() {
        return $$props.open;
      },
      get ref() {
        return $$props.ref;
      },
      presence,
      $$slots: { presence: true }
    });
  }
}
function Popper_layer_force_mount($$anchor, $$props) {
  let interactOutsideBehavior = prop($$props, "interactOutsideBehavior", 3, "close"), trapFocus = prop($$props, "trapFocus", 3, true), isValidEvent2 = prop($$props, "isValidEvent", 3, () => false), customAnchor = prop($$props, "customAnchor", 3, null), isStatic = prop($$props, "isStatic", 3, false), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled"
  ]);
  Popper_layer_inner($$anchor, spread_props(
    {
      get popper() {
        return $$props.popper;
      },
      get onEscapeKeydown() {
        return $$props.onEscapeKeydown;
      },
      get escapeKeydownBehavior() {
        return $$props.escapeKeydownBehavior;
      },
      get preventOverflowTextSelection() {
        return $$props.preventOverflowTextSelection;
      },
      get id() {
        return $$props.id;
      },
      get onPointerDown() {
        return $$props.onPointerDown;
      },
      get onPointerUp() {
        return $$props.onPointerUp;
      },
      get side() {
        return $$props.side;
      },
      get sideOffset() {
        return $$props.sideOffset;
      },
      get align() {
        return $$props.align;
      },
      get alignOffset() {
        return $$props.alignOffset;
      },
      get arrowPadding() {
        return $$props.arrowPadding;
      },
      get avoidCollisions() {
        return $$props.avoidCollisions;
      },
      get collisionBoundary() {
        return $$props.collisionBoundary;
      },
      get collisionPadding() {
        return $$props.collisionPadding;
      },
      get sticky() {
        return $$props.sticky;
      },
      get hideWhenDetached() {
        return $$props.hideWhenDetached;
      },
      get updatePositionStrategy() {
        return $$props.updatePositionStrategy;
      },
      get strategy() {
        return $$props.strategy;
      },
      get dir() {
        return $$props.dir;
      },
      get preventScroll() {
        return $$props.preventScroll;
      },
      get wrapperId() {
        return $$props.wrapperId;
      },
      get style() {
        return $$props.style;
      },
      get onPlaced() {
        return $$props.onPlaced;
      },
      get customAnchor() {
        return customAnchor();
      },
      get isStatic() {
        return isStatic();
      },
      get enabled() {
        return $$props.enabled;
      },
      get onInteractOutside() {
        return $$props.onInteractOutside;
      },
      get onCloseAutoFocus() {
        return $$props.onCloseAutoFocus;
      },
      get onOpenAutoFocus() {
        return $$props.onOpenAutoFocus;
      },
      get interactOutsideBehavior() {
        return interactOutsideBehavior();
      },
      get loop() {
        return $$props.loop;
      },
      get trapFocus() {
        return trapFocus();
      },
      isValidEvent: isValidEvent2(),
      get onFocusOutside() {
        return $$props.onFocusOutside;
      }
    },
    () => restProps,
    { forceMount: true }
  ));
}
const SELECTION_KEYS = [ENTER, SPACE];
const FIRST_KEYS = [ARROW_DOWN, PAGE_UP, HOME];
const LAST_KEYS = [ARROW_UP, PAGE_DOWN, END];
const FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS];
function isMouseEvent(event2) {
  return event2.pointerType === "mouse";
}
function focus(element2, { select = false } = {}) {
  if (!element2 || !element2.focus)
    return;
  const doc = getDocument(element2);
  if (doc.activeElement === element2)
    return;
  const previouslyFocusedElement = doc.activeElement;
  element2.focus({ preventScroll: true });
  if (element2 !== previouslyFocusedElement && isSelectableInput(element2) && select) {
    element2.select();
  }
}
function focusFirst(candidates, { select = false } = {}, getActiveElement2) {
  const previouslyFocusedElement = getActiveElement2();
  for (const candidate of candidates) {
    focus(candidate, { select });
    if (getActiveElement2() !== previouslyFocusedElement)
      return true;
  }
}
function getTabbableOptions() {
  return {
    getShadowRoot: true,
    displayCheck: (
      // JSDOM does not support the `tabbable` library. To solve this we can
      // check if `ResizeObserver` is a real function (not polyfilled), which
      // determines if the current environment is JSDOM-like.
      typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
    )
  };
}
function getTabbableFrom(currentNode, direction) {
  if (!isTabbable(currentNode, getTabbableOptions())) {
    return getTabbableFromFocusable(currentNode, direction);
  }
  const doc = getDocument(currentNode);
  const allTabbable = tabbable(doc.body, getTabbableOptions());
  if (direction === "prev")
    allTabbable.reverse();
  const activeIndex = allTabbable.indexOf(currentNode);
  if (activeIndex === -1)
    return doc.body;
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getTabbableFromFocusable(currentNode, direction) {
  const doc = getDocument(currentNode);
  if (!isFocusable(currentNode, getTabbableOptions()))
    return doc.body;
  const allFocusable = focusable(doc.body, getTabbableOptions());
  if (direction === "prev")
    allFocusable.reverse();
  const activeIndex = allFocusable.indexOf(currentNode);
  if (activeIndex === -1)
    return doc.body;
  const nextFocusableElements = allFocusable.slice(activeIndex + 1);
  return nextFocusableElements.find((node) => isTabbable(node, getTabbableOptions())) ?? doc.body;
}
class GraceArea {
  constructor(opts) {
    __privateAdd(this, _GraceArea_instances);
    __privateAdd(this, _opts6);
    __privateAdd(this, _enabled2);
    __privateAdd(this, _isPointerInTransit);
    __privateAdd(this, _pointerGraceArea, /* @__PURE__ */ state(null));
    __privateSet(this, _opts6, opts);
    __privateSet(this, _enabled2, /* @__PURE__ */ user_derived(() => __privateGet(this, _opts6).enabled()));
    __privateSet(this, _isPointerInTransit, boxAutoReset(false, {
      afterMs: opts.transitTimeout ?? 300,
      onChange: (value) => {
        var _a2, _b2;
        if (!get$4(__privateGet(this, _enabled2))) return;
        (_b2 = (_a2 = __privateGet(this, _opts6)).setIsPointerInTransit) == null ? void 0 : _b2.call(_a2, value);
      },
      getWindow: () => getWindow$1(__privateGet(this, _opts6).triggerNode())
    }));
    watch(
      [
        opts.triggerNode,
        opts.contentNode,
        opts.enabled
      ],
      ([triggerNode, contentNode, enabled]) => {
        if (!triggerNode || !contentNode || !enabled) return;
        const handleTriggerLeave = (e) => {
          __privateMethod(this, _GraceArea_instances, createGraceArea_fn).call(this, e, contentNode);
        };
        const handleContentLeave = (e) => {
          __privateMethod(this, _GraceArea_instances, createGraceArea_fn).call(this, e, triggerNode);
        };
        return executeCallbacks(on(triggerNode, "pointerleave", handleTriggerLeave), on(contentNode, "pointerleave", handleContentLeave));
      }
    );
    watch(() => get$4(__privateGet(this, _pointerGraceArea)), () => {
      const handleTrackPointerGrace = (e) => {
        var _a2, _b2;
        if (!get$4(__privateGet(this, _pointerGraceArea))) return;
        const target = e.target;
        if (!isElement$1(target)) return;
        const pointerPosition = { x: e.clientX, y: e.clientY };
        const hasEnteredTarget = ((_a2 = opts.triggerNode()) == null ? void 0 : _a2.contains(target)) || ((_b2 = opts.contentNode()) == null ? void 0 : _b2.contains(target));
        const isPointerOutsideGraceArea = !isPointInPolygon(pointerPosition, get$4(__privateGet(this, _pointerGraceArea)));
        if (hasEnteredTarget) {
          __privateMethod(this, _GraceArea_instances, removeGraceArea_fn).call(this);
        } else if (isPointerOutsideGraceArea) {
          __privateMethod(this, _GraceArea_instances, removeGraceArea_fn).call(this);
          opts.onPointerExit();
        }
      };
      const doc = getDocument(opts.triggerNode() ?? opts.contentNode());
      if (!doc) return;
      return on(doc, "pointermove", handleTrackPointerGrace);
    });
  }
}
_opts6 = new WeakMap();
_enabled2 = new WeakMap();
_isPointerInTransit = new WeakMap();
_pointerGraceArea = new WeakMap();
_GraceArea_instances = new WeakSet();
removeGraceArea_fn = function() {
  set$1(__privateGet(this, _pointerGraceArea), null);
  __privateGet(this, _isPointerInTransit).current = false;
};
createGraceArea_fn = function(e, hoverTarget) {
  const currentTarget = e.currentTarget;
  if (!isHTMLElement$1(currentTarget)) return;
  const exitPoint = { x: e.clientX, y: e.clientY };
  const exitSide = getExitSideFromRect(exitPoint, currentTarget.getBoundingClientRect());
  const paddedExitPoints = getPaddedExitPoints(exitPoint, exitSide);
  const hoverTargetPoints = getPointsFromRect(hoverTarget.getBoundingClientRect());
  const graceArea = getHull([...paddedExitPoints, ...hoverTargetPoints]);
  set$1(__privateGet(this, _pointerGraceArea), graceArea, true);
  __privateGet(this, _isPointerInTransit).current = true;
};
function getExitSideFromRect(point, rect) {
  const top = Math.abs(rect.top - point.y);
  const bottom = Math.abs(rect.bottom - point.y);
  const right = Math.abs(rect.right - point.x);
  const left = Math.abs(rect.left - point.x);
  switch (Math.min(top, bottom, right, left)) {
    case left:
      return "left";
    case right:
      return "right";
    case top:
      return "top";
    case bottom:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function getPaddedExitPoints(exitPoint, exitSide, padding = 5) {
  const tipPadding = padding * 1.5;
  switch (exitSide) {
    case "top":
      return [
        {
          x: exitPoint.x - padding,
          y: exitPoint.y + padding
        },
        { x: exitPoint.x, y: exitPoint.y - tipPadding },
        {
          x: exitPoint.x + padding,
          y: exitPoint.y + padding
        }
      ];
    case "bottom":
      return [
        {
          x: exitPoint.x - padding,
          y: exitPoint.y - padding
        },
        { x: exitPoint.x, y: exitPoint.y + tipPadding },
        {
          x: exitPoint.x + padding,
          y: exitPoint.y - padding
        }
      ];
    case "left":
      return [
        {
          x: exitPoint.x + padding,
          y: exitPoint.y - padding
        },
        { x: exitPoint.x - tipPadding, y: exitPoint.y },
        {
          x: exitPoint.x + padding,
          y: exitPoint.y + padding
        }
      ];
    case "right":
      return [
        {
          x: exitPoint.x - padding,
          y: exitPoint.y - padding
        },
        { x: exitPoint.x + tipPadding, y: exitPoint.y },
        {
          x: exitPoint.x - padding,
          y: exitPoint.y + padding
        }
      ];
  }
}
function getPointsFromRect(rect) {
  const { top, right, bottom, left } = rect;
  return [
    { x: left, y: top },
    { x: right, y: top },
    { x: right, y: bottom },
    { x: left, y: bottom }
  ];
}
function isPointInPolygon(point, polygon) {
  const { x: x2, y: y2 } = point;
  let inside = false;
  for (let i2 = 0, j = polygon.length - 1; i2 < polygon.length; j = i2++) {
    const xi = polygon[i2].x;
    const yi = polygon[i2].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > y2 !== yj > y2 && x2 < (xj - xi) * (y2 - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
function getHull(points) {
  const newPoints = points.slice();
  newPoints.sort((a2, b) => {
    if (a2.x < b.x) return -1;
    else if (a2.x > b.x) return 1;
    else if (a2.y < b.y) return -1;
    else if (a2.y > b.y) return 1;
    else return 0;
  });
  return getHullPresorted(newPoints);
}
function getHullPresorted(points) {
  if (points.length <= 1) return points.slice();
  const upperHull = [];
  for (let i2 = 0; i2 < points.length; i2++) {
    const p2 = points[i2];
    while (upperHull.length >= 2) {
      const q2 = upperHull[upperHull.length - 1];
      const r2 = upperHull[upperHull.length - 2];
      if ((q2.x - r2.x) * (p2.y - r2.y) >= (q2.y - r2.y) * (p2.x - r2.x)) upperHull.pop();
      else break;
    }
    upperHull.push(p2);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i2 = points.length - 1; i2 >= 0; i2--) {
    const p2 = points[i2];
    while (lowerHull.length >= 2) {
      const q2 = lowerHull[lowerHull.length - 1];
      const r2 = lowerHull[lowerHull.length - 2];
      if ((q2.x - r2.x) * (p2.y - r2.y) >= (q2.y - r2.y) * (p2.x - r2.x)) lowerHull.pop();
      else break;
    }
    lowerHull.push(p2);
  }
  lowerHull.pop();
  if (upperHull.length === 1 && lowerHull.length === 1 && upperHull[0].x === lowerHull[0].x && upperHull[0].y === lowerHull[0].y) return upperHull;
  else return upperHull.concat(lowerHull);
}
const MenuRootContext = new Context("Menu.Root");
const MenuMenuContext = new Context("Menu.Root | Menu.Sub");
const MenuContentContext = new Context("Menu.Content");
const MenuOpenEvent = new CustomEventDispatcher("bitsmenuopen", { bubbles: false, cancelable: true });
const menuAttrs = createBitsAttrs({
  component: "menu",
  parts: [
    "trigger",
    "content",
    "sub-trigger",
    "item",
    "group",
    "group-heading",
    "checkbox-group",
    "checkbox-item",
    "radio-group",
    "radio-item",
    "separator",
    "sub-content",
    "arrow"
  ]
});
const _MenuRootState = class _MenuRootState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "isUsingKeyboard", new IsUsingKeyboard());
    __privateAdd(this, _ignoreCloseAutoFocus, /* @__PURE__ */ state(false));
    __privateAdd(this, _isPointerInTransit2, /* @__PURE__ */ state(false));
    __publicField(this, "getBitsAttr", (part) => {
      return menuAttrs.getAttr(part, this.opts.variant.current);
    });
    this.opts = opts;
  }
  static create(opts) {
    const root2 = new _MenuRootState(opts);
    return MenuRootContext.set(root2);
  }
  get ignoreCloseAutoFocus() {
    return get$4(__privateGet(this, _ignoreCloseAutoFocus));
  }
  set ignoreCloseAutoFocus(value) {
    set$1(__privateGet(this, _ignoreCloseAutoFocus), value, true);
  }
  get isPointerInTransit() {
    return get$4(__privateGet(this, _isPointerInTransit2));
  }
  set isPointerInTransit(value) {
    set$1(__privateGet(this, _isPointerInTransit2), value, true);
  }
};
_ignoreCloseAutoFocus = new WeakMap();
_isPointerInTransit2 = new WeakMap();
let MenuRootState = _MenuRootState;
const _MenuMenuState = class _MenuMenuState {
  constructor(opts, root2, parentMenu) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "parentMenu");
    __publicField(this, "contentId", box.with(() => ""));
    __privateAdd(this, _contentNode2, /* @__PURE__ */ state(null));
    __privateAdd(this, _triggerNode2, /* @__PURE__ */ state(null));
    this.opts = opts;
    this.root = root2;
    this.parentMenu = parentMenu;
    new OpenChangeComplete({
      ref: box.with(() => this.contentNode),
      open: this.opts.open,
      onComplete: () => {
        this.opts.onOpenChangeComplete.current(this.opts.open.current);
      }
    });
    if (parentMenu) {
      watch(() => parentMenu.opts.open.current, () => {
        if (parentMenu.opts.open.current) return;
        this.opts.open.current = false;
      });
    }
  }
  static create(opts, root2) {
    return MenuMenuContext.set(new _MenuMenuState(opts, root2, null));
  }
  get contentNode() {
    return get$4(__privateGet(this, _contentNode2));
  }
  set contentNode(value) {
    set$1(__privateGet(this, _contentNode2), value, true);
  }
  get triggerNode() {
    return get$4(__privateGet(this, _triggerNode2));
  }
  set triggerNode(value) {
    set$1(__privateGet(this, _triggerNode2), value, true);
  }
  toggleOpen() {
    this.opts.open.current = !this.opts.open.current;
  }
  onOpen() {
    this.opts.open.current = true;
  }
  onClose() {
    this.opts.open.current = false;
  }
};
_contentNode2 = new WeakMap();
_triggerNode2 = new WeakMap();
let MenuMenuState = _MenuMenuState;
const _MenuContentState = class _MenuContentState {
  constructor(opts, parentMenu) {
    __privateAdd(this, _MenuContentState_instances);
    __publicField(this, "opts");
    __publicField(this, "parentMenu");
    __publicField(this, "rovingFocusGroup");
    __publicField(this, "domContext");
    __publicField(this, "attachment");
    __privateAdd(this, _search2, /* @__PURE__ */ state(""));
    __privateAdd(this, _timer, 0);
    __privateAdd(this, _handleTypeaheadSearch);
    __privateAdd(this, _mounted, /* @__PURE__ */ state(false));
    __privateAdd(this, _isSub);
    __publicField(this, "onCloseAutoFocus", (e) => {
      this.opts.onCloseAutoFocus.current(e);
      if (e.defaultPrevented || __privateGet(this, _isSub)) return;
      if (this.parentMenu.triggerNode && isTabbable(this.parentMenu.triggerNode)) {
        this.parentMenu.triggerNode.focus();
      }
    });
    __publicField(this, "onOpenAutoFocus", (e) => {
      if (e.defaultPrevented) return;
      e.preventDefault();
      const contentNode = this.parentMenu.contentNode;
      contentNode == null ? void 0 : contentNode.focus();
    });
    __privateAdd(this, _snippetProps3, /* @__PURE__ */ user_derived(() => ({ open: this.parentMenu.opts.open.current })));
    __privateAdd(this, _props8, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      role: "menu",
      "aria-orientation": getAriaOrientation("vertical"),
      [this.parentMenu.root.getBitsAttr("content")]: "",
      "data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
      onkeydown: this.onkeydown,
      onblur: this.onblur,
      onfocus: this.onfocus,
      dir: this.parentMenu.root.opts.dir.current,
      style: { pointerEvents: "auto" },
      ...this.attachment
    })));
    __publicField(this, "popperProps", {
      onCloseAutoFocus: (e) => this.onCloseAutoFocus(e)
    });
    this.opts = opts;
    this.parentMenu = parentMenu;
    this.domContext = new DOMContext(opts.ref);
    this.attachment = attachRef(this.opts.ref, (v2) => {
      if (this.parentMenu.contentNode !== v2) {
        this.parentMenu.contentNode = v2;
      }
    });
    parentMenu.contentId = opts.id;
    __privateSet(this, _isSub, opts.isSub ?? false);
    this.onkeydown = this.onkeydown.bind(this);
    this.onblur = this.onblur.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.handleInteractOutside = this.handleInteractOutside.bind(this);
    new GraceArea({
      contentNode: () => this.parentMenu.contentNode,
      triggerNode: () => this.parentMenu.triggerNode,
      enabled: () => {
        var _a2;
        return this.parentMenu.opts.open.current && Boolean((_a2 = this.parentMenu.triggerNode) == null ? void 0 : _a2.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger")));
      },
      onPointerExit: () => {
        this.parentMenu.opts.open.current = false;
      },
      setIsPointerInTransit: (value) => {
        this.parentMenu.root.isPointerInTransit = value;
      }
    });
    __privateSet(this, _handleTypeaheadSearch, new DOMTypeahead({
      getActiveElement: () => this.domContext.getActiveElement(),
      getWindow: () => this.domContext.getWindow()
    }).handleTypeaheadSearch);
    this.rovingFocusGroup = new RovingFocusGroup({
      rootNode: box.with(() => this.parentMenu.contentNode),
      candidateAttr: this.parentMenu.root.getBitsAttr("item"),
      loop: this.opts.loop,
      orientation: box.with(() => "vertical")
    });
    watch(() => this.parentMenu.contentNode, (contentNode) => {
      if (!contentNode) return;
      const handler = () => {
        afterTick(() => {
          if (!this.parentMenu.root.isUsingKeyboard.current) return;
          this.rovingFocusGroup.focusFirstCandidate();
        });
      };
      return MenuOpenEvent.listen(contentNode, handler);
    });
    user_effect(() => {
      if (!this.parentMenu.opts.open.current) {
        this.domContext.getWindow().clearTimeout(__privateGet(this, _timer));
      }
    });
  }
  static create(opts) {
    return MenuContentContext.set(new _MenuContentState(opts, MenuMenuContext.get()));
  }
  get search() {
    return get$4(__privateGet(this, _search2));
  }
  set search(value) {
    set$1(__privateGet(this, _search2), value, true);
  }
  get mounted() {
    return get$4(__privateGet(this, _mounted));
  }
  set mounted(value) {
    set$1(__privateGet(this, _mounted), value, true);
  }
  handleTabKeyDown(e) {
    let rootMenu = this.parentMenu;
    while (rootMenu.parentMenu !== null) {
      rootMenu = rootMenu.parentMenu;
    }
    if (!rootMenu.triggerNode) return;
    e.preventDefault();
    const nodeToFocus = getTabbableFrom(rootMenu.triggerNode, e.shiftKey ? "prev" : "next");
    if (nodeToFocus) {
      this.parentMenu.root.ignoreCloseAutoFocus = true;
      rootMenu.onClose();
      afterTick(() => {
        nodeToFocus.focus();
        afterTick(() => {
          this.parentMenu.root.ignoreCloseAutoFocus = false;
        });
      });
    } else {
      this.domContext.getDocument().body.focus();
    }
  }
  onkeydown(e) {
    var _a2, _b2;
    if (e.defaultPrevented) return;
    if (e.key === TAB) {
      this.handleTabKeyDown(e);
      return;
    }
    const target = e.target;
    const currentTarget = e.currentTarget;
    if (!isHTMLElement$1(target) || !isHTMLElement$1(currentTarget)) return;
    const isKeydownInside = ((_a2 = target.closest(`[${this.parentMenu.root.getBitsAttr("content")}]`)) == null ? void 0 : _a2.id) === this.parentMenu.contentId.current;
    const isModifierKey = e.ctrlKey || e.altKey || e.metaKey;
    const isCharacterKey = e.key.length === 1;
    const kbdFocusedEl = this.rovingFocusGroup.handleKeydown(target, e);
    if (kbdFocusedEl) return;
    if (e.code === "Space") return;
    const candidateNodes = __privateMethod(this, _MenuContentState_instances, getCandidateNodes_fn).call(this);
    if (isKeydownInside) {
      if (!isModifierKey && isCharacterKey) {
        __privateGet(this, _handleTypeaheadSearch).call(this, e.key, candidateNodes);
      }
    }
    if (((_b2 = e.target) == null ? void 0 : _b2.id) !== this.parentMenu.contentId.current) return;
    if (!FIRST_LAST_KEYS.includes(e.key)) return;
    e.preventDefault();
    if (LAST_KEYS.includes(e.key)) {
      candidateNodes.reverse();
    }
    focusFirst(candidateNodes, { select: false }, () => this.domContext.getActiveElement());
  }
  onblur(e) {
    var _a2, _b2;
    if (!isElement$1(e.currentTarget)) return;
    if (!isElement$1(e.target)) return;
    if (!((_b2 = (_a2 = e.currentTarget).contains) == null ? void 0 : _b2.call(_a2, e.target))) {
      this.domContext.getWindow().clearTimeout(__privateGet(this, _timer));
      this.search = "";
    }
  }
  onfocus(_2) {
    if (!this.parentMenu.root.isUsingKeyboard.current) return;
    afterTick(() => this.rovingFocusGroup.focusFirstCandidate());
  }
  onItemEnter() {
    return __privateMethod(this, _MenuContentState_instances, isPointerMovingToSubmenu_fn).call(this);
  }
  onItemLeave(e) {
    if (e.currentTarget.hasAttribute(this.parentMenu.root.getBitsAttr("sub-trigger"))) return;
    if (__privateMethod(this, _MenuContentState_instances, isPointerMovingToSubmenu_fn).call(this) || this.parentMenu.root.isUsingKeyboard.current) return;
    const contentNode = this.parentMenu.contentNode;
    contentNode == null ? void 0 : contentNode.focus();
    this.rovingFocusGroup.setCurrentTabStopId("");
  }
  onTriggerLeave() {
    if (__privateMethod(this, _MenuContentState_instances, isPointerMovingToSubmenu_fn).call(this)) return true;
    return false;
  }
  handleInteractOutside(e) {
    var _a2;
    if (!isElementOrSVGElement(e.target)) return;
    const triggerId = (_a2 = this.parentMenu.triggerNode) == null ? void 0 : _a2.id;
    if (e.target.id === triggerId) {
      e.preventDefault();
      return;
    }
    if (e.target.closest(`#${triggerId}`)) {
      e.preventDefault();
    }
  }
  get snippetProps() {
    return get$4(__privateGet(this, _snippetProps3));
  }
  set snippetProps(value) {
    set$1(__privateGet(this, _snippetProps3), value);
  }
  get props() {
    return get$4(__privateGet(this, _props8));
  }
  set props(value) {
    set$1(__privateGet(this, _props8), value);
  }
};
_search2 = new WeakMap();
_timer = new WeakMap();
_handleTypeaheadSearch = new WeakMap();
_mounted = new WeakMap();
_isSub = new WeakMap();
_MenuContentState_instances = new WeakSet();
getCandidateNodes_fn = function() {
  const node = this.parentMenu.contentNode;
  if (!node) return [];
  const candidates = Array.from(node.querySelectorAll(`[${this.parentMenu.root.getBitsAttr("item")}]:not([data-disabled])`));
  return candidates;
};
isPointerMovingToSubmenu_fn = function() {
  return this.parentMenu.root.isPointerInTransit;
};
_snippetProps3 = new WeakMap();
_props8 = new WeakMap();
let MenuContentState = _MenuContentState;
class MenuItemSharedState {
  constructor(opts, content) {
    __publicField(this, "opts");
    __publicField(this, "content");
    __publicField(this, "attachment");
    __privateAdd(this, _isFocused, /* @__PURE__ */ state(false));
    __privateAdd(this, _props9, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      tabindex: -1,
      role: "menuitem",
      "aria-disabled": getAriaDisabled(this.opts.disabled.current),
      "data-disabled": getDataDisabled(this.opts.disabled.current),
      "data-highlighted": get$4(__privateGet(this, _isFocused)) ? "" : void 0,
      [this.content.parentMenu.root.getBitsAttr("item")]: "",
      //
      onpointermove: this.onpointermove,
      onpointerleave: this.onpointerleave,
      onfocus: this.onfocus,
      onblur: this.onblur,
      ...this.attachment
    })));
    this.opts = opts;
    this.content = content;
    this.attachment = attachRef(this.opts.ref);
    this.onpointermove = this.onpointermove.bind(this);
    this.onpointerleave = this.onpointerleave.bind(this);
    this.onfocus = this.onfocus.bind(this);
    this.onblur = this.onblur.bind(this);
  }
  onpointermove(e) {
    if (e.defaultPrevented) return;
    if (!isMouseEvent(e)) return;
    if (this.opts.disabled.current) {
      this.content.onItemLeave(e);
    } else {
      const defaultPrevented = this.content.onItemEnter();
      if (defaultPrevented) return;
      const item = e.currentTarget;
      if (!isHTMLElement$1(item)) return;
      item.focus();
    }
  }
  onpointerleave(e) {
    if (e.defaultPrevented) return;
    if (!isMouseEvent(e)) return;
    this.content.onItemLeave(e);
  }
  onfocus(e) {
    afterTick(() => {
      if (e.defaultPrevented || this.opts.disabled.current) return;
      set$1(__privateGet(this, _isFocused), true);
    });
  }
  onblur(e) {
    afterTick(() => {
      if (e.defaultPrevented) return;
      set$1(__privateGet(this, _isFocused), false);
    });
  }
  get props() {
    return get$4(__privateGet(this, _props9));
  }
  set props(value) {
    set$1(__privateGet(this, _props9), value);
  }
}
_isFocused = new WeakMap();
_props9 = new WeakMap();
const _MenuItemState = class _MenuItemState {
  constructor(opts, item) {
    __privateAdd(this, _MenuItemState_instances);
    __publicField(this, "opts");
    __publicField(this, "item");
    __publicField(this, "root");
    __privateAdd(this, _isPointerDown, false);
    __privateAdd(this, _props10, /* @__PURE__ */ user_derived(() => mergeProps(this.item.props, {
      onclick: this.onclick,
      onpointerdown: this.onpointerdown,
      onpointerup: this.onpointerup,
      onkeydown: this.onkeydown
    })));
    this.opts = opts;
    this.item = item;
    this.root = item.content.parentMenu.root;
    this.onkeydown = this.onkeydown.bind(this);
    this.onclick = this.onclick.bind(this);
    this.onpointerdown = this.onpointerdown.bind(this);
    this.onpointerup = this.onpointerup.bind(this);
  }
  static create(opts) {
    const item = new MenuItemSharedState(opts, MenuContentContext.get());
    return new _MenuItemState(opts, item);
  }
  onkeydown(e) {
    const isTypingAhead = this.item.content.search !== "";
    if (this.item.opts.disabled.current || isTypingAhead && e.key === SPACE) return;
    if (SELECTION_KEYS.includes(e.key)) {
      if (!isHTMLElement$1(e.currentTarget)) return;
      e.currentTarget.click();
      e.preventDefault();
    }
  }
  onclick(_2) {
    if (this.item.opts.disabled.current) return;
    __privateMethod(this, _MenuItemState_instances, handleSelect_fn).call(this);
  }
  onpointerup(e) {
    var _a2;
    if (e.defaultPrevented) return;
    if (!__privateGet(this, _isPointerDown)) {
      if (!isHTMLElement$1(e.currentTarget)) return;
      (_a2 = e.currentTarget) == null ? void 0 : _a2.click();
    }
  }
  onpointerdown(_2) {
    __privateSet(this, _isPointerDown, true);
  }
  get props() {
    return get$4(__privateGet(this, _props10));
  }
  set props(value) {
    set$1(__privateGet(this, _props10), value);
  }
};
_isPointerDown = new WeakMap();
_MenuItemState_instances = new WeakSet();
handleSelect_fn = function() {
  if (this.item.opts.disabled.current) return;
  const selectEvent = new CustomEvent("menuitemselect", { bubbles: true, cancelable: true });
  this.opts.onSelect.current(selectEvent);
  afterTick(() => {
    if (selectEvent.defaultPrevented) {
      this.item.content.parentMenu.root.isUsingKeyboard.current = false;
      return;
    }
    if (this.opts.closeOnSelect.current) {
      this.item.content.parentMenu.root.opts.onClose();
    }
  });
};
_props10 = new WeakMap();
let MenuItemState = _MenuItemState;
const _MenuSeparatorState = class _MenuSeparatorState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _props11, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      role: "group",
      [this.root.getBitsAttr("separator")]: "",
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(this.opts.ref);
  }
  static create(opts) {
    return new _MenuSeparatorState(opts, MenuRootContext.get());
  }
  get props() {
    return get$4(__privateGet(this, _props11));
  }
  set props(value) {
    set$1(__privateGet(this, _props11), value);
  }
};
_props11 = new WeakMap();
let MenuSeparatorState = _MenuSeparatorState;
const _DropdownMenuTriggerState = class _DropdownMenuTriggerState {
  constructor(opts, parentMenu) {
    __publicField(this, "opts");
    __publicField(this, "parentMenu");
    __publicField(this, "attachment");
    __publicField(this, "onpointerdown", (e) => {
      if (this.opts.disabled.current) return;
      if (e.pointerType === "touch") return e.preventDefault();
      if (e.button === 0 && e.ctrlKey === false) {
        this.parentMenu.toggleOpen();
        if (!this.parentMenu.opts.open.current) e.preventDefault();
      }
    });
    __publicField(this, "onpointerup", (e) => {
      if (this.opts.disabled.current) return;
      if (e.pointerType === "touch") {
        e.preventDefault();
        this.parentMenu.toggleOpen();
      }
    });
    __publicField(this, "onkeydown", (e) => {
      if (this.opts.disabled.current) return;
      if (e.key === SPACE || e.key === ENTER) {
        this.parentMenu.toggleOpen();
        e.preventDefault();
        return;
      }
      if (e.key === ARROW_DOWN) {
        this.parentMenu.onOpen();
        e.preventDefault();
      }
    });
    __privateAdd(this, _ariaControls, /* @__PURE__ */ user_derived(() => {
      if (this.parentMenu.opts.open.current && this.parentMenu.contentId.current) return this.parentMenu.contentId.current;
      return void 0;
    }));
    __privateAdd(this, _props12, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      disabled: this.opts.disabled.current,
      "aria-haspopup": "menu",
      "aria-expanded": getAriaExpanded(this.parentMenu.opts.open.current),
      "aria-controls": get$4(__privateGet(this, _ariaControls)),
      "data-disabled": getDataDisabled(this.opts.disabled.current),
      "data-state": getDataOpenClosed(this.parentMenu.opts.open.current),
      [this.parentMenu.root.getBitsAttr("trigger")]: "",
      //
      onpointerdown: this.onpointerdown,
      onpointerup: this.onpointerup,
      onkeydown: this.onkeydown,
      ...this.attachment
    })));
    this.opts = opts;
    this.parentMenu = parentMenu;
    this.attachment = attachRef(this.opts.ref, (v2) => this.parentMenu.triggerNode = v2);
  }
  static create(opts) {
    return new _DropdownMenuTriggerState(opts, MenuMenuContext.get());
  }
  get props() {
    return get$4(__privateGet(this, _props12));
  }
  set props(value) {
    set$1(__privateGet(this, _props12), value);
  }
};
_ariaControls = new WeakMap();
_props12 = new WeakMap();
let DropdownMenuTriggerState = _DropdownMenuTriggerState;
var root_2$i = /* @__PURE__ */ from_html(`<div><!></div>`);
function Menu_item($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, () => createId(uid)), disabled = prop($$props, "disabled", 3, false), onSelect = prop($$props, "onSelect", 3, noop), closeOnSelect = prop($$props, "closeOnSelect", 3, true), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "ref",
    "id",
    "disabled",
    "onSelect",
    "closeOnSelect"
  ]);
  const itemState = MenuItemState.create({
    id: box.with(() => id()),
    disabled: box.with(() => disabled()),
    onSelect: box.with(() => onSelect()),
    ref: box.with(() => ref(), (v2) => ref(v2)),
    closeOnSelect: box.with(() => closeOnSelect())
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, itemState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$i();
      attribute_effect(div, () => ({ ...get$4(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$h = /* @__PURE__ */ from_html(`<div><!></div>`);
function Menu_separator($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), id = prop($$props, "id", 19, () => createId(uid)), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "id",
    "child",
    "children"
  ]);
  const separatorState = MenuSeparatorState.create({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, separatorState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$h();
      attribute_effect(div, () => ({ ...get$4(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Menu($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false), dir = prop($$props, "dir", 3, "ltr"), onOpenChange = prop($$props, "onOpenChange", 3, noop), onOpenChangeComplete = prop($$props, "onOpenChangeComplete", 3, noop), variant = prop($$props, "_internal_variant", 3, "dropdown-menu");
  const root2 = MenuRootState.create({
    variant: box.with(() => variant()),
    dir: box.with(() => dir()),
    onClose: () => {
      open(false);
      onOpenChange()(false);
    }
  });
  MenuMenuState.create(
    {
      open: box.with(() => open(), (v2) => {
        open(v2);
        onOpenChange()(v2);
      }),
      onOpenChangeComplete: box.with(() => onOpenChangeComplete())
    },
    root2
  );
  Floating_layer($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
var root_4$5 = /* @__PURE__ */ from_html(`<div><div><!></div></div>`);
var root_9$2 = /* @__PURE__ */ from_html(`<div><div><!></div></div>`);
function Dropdown_menu_content$1($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), loop2 = prop($$props, "loop", 3, true), onInteractOutside = prop($$props, "onInteractOutside", 3, noop), onEscapeKeydown = prop($$props, "onEscapeKeydown", 3, noop), onCloseAutoFocus = prop($$props, "onCloseAutoFocus", 3, noop), forceMount = prop($$props, "forceMount", 3, false), trapFocus = prop($$props, "trapFocus", 3, false), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "child",
    "children",
    "ref",
    "loop",
    "onInteractOutside",
    "onEscapeKeydown",
    "onCloseAutoFocus",
    "forceMount",
    "trapFocus"
  ]);
  const contentState = MenuContentState.create({
    id: box.with(() => id()),
    loop: box.with(() => loop2()),
    ref: box.with(() => ref(), (v2) => ref(v2)),
    onCloseAutoFocus: box.with(() => onCloseAutoFocus())
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, contentState.props));
  function handleInteractOutside(e) {
    contentState.handleInteractOutside(e);
    if (e.defaultPrevented) return;
    onInteractOutside()(e);
    if (e.defaultPrevented) return;
    contentState.parentMenu.onClose();
  }
  function handleEscapeKeydown(e) {
    onEscapeKeydown()(e);
    if (e.defaultPrevented) return;
    contentState.parentMenu.onClose();
  }
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      {
        const popper = ($$anchor3, $$arg0) => {
          let props = () => $$arg0 == null ? void 0 : $$arg0().props;
          let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
          var fragment_2 = comment();
          const finalProps = /* @__PURE__ */ user_derived(() => mergeProps(props(), {
            style: getFloatingContentCSSVars("dropdown-menu")
          }));
          var node_1 = first_child(fragment_2);
          {
            var consequent = ($$anchor4) => {
              var fragment_3 = comment();
              var node_2 = first_child(fragment_3);
              var render_arg = /* @__PURE__ */ derived_safe_equal(() => ({
                props: get$4(finalProps),
                wrapperProps: wrapperProps(),
                ...contentState.snippetProps
              }));
              snippet(node_2, () => $$props.child, () => get$4(render_arg));
              append($$anchor4, fragment_3);
            };
            var alternate = ($$anchor4) => {
              var div = root_4$5();
              attribute_effect(div, () => ({ ...wrapperProps() }));
              var div_1 = child(div);
              attribute_effect(div_1, () => ({ ...get$4(finalProps) }));
              var node_3 = child(div_1);
              snippet(node_3, () => $$props.children ?? noop$1);
              append($$anchor4, div);
            };
            if_block(node_1, ($$render) => {
              if ($$props.child) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          append($$anchor3, fragment_2);
        };
        Popper_layer_force_mount($$anchor2, spread_props(() => get$4(mergedProps), () => contentState.popperProps, {
          get ref() {
            return contentState.opts.ref;
          },
          get enabled() {
            return contentState.parentMenu.opts.open.current;
          },
          onInteractOutside: handleInteractOutside,
          onEscapeKeydown: handleEscapeKeydown,
          get trapFocus() {
            return trapFocus();
          },
          get loop() {
            return loop2();
          },
          forceMount: true,
          get id() {
            return id();
          },
          popper,
          $$slots: { popper: true }
        }));
      }
    };
    var alternate_1 = ($$anchor2, $$elseif) => {
      {
        var consequent_3 = ($$anchor3) => {
          {
            const popper = ($$anchor4, $$arg0) => {
              let props = () => $$arg0 == null ? void 0 : $$arg0().props;
              let wrapperProps = () => $$arg0 == null ? void 0 : $$arg0().wrapperProps;
              var fragment_5 = comment();
              const finalProps = /* @__PURE__ */ user_derived(() => mergeProps(props(), {
                style: getFloatingContentCSSVars("dropdown-menu")
              }));
              var node_4 = first_child(fragment_5);
              {
                var consequent_2 = ($$anchor5) => {
                  var fragment_6 = comment();
                  var node_5 = first_child(fragment_6);
                  var render_arg_1 = /* @__PURE__ */ derived_safe_equal(() => ({
                    props: get$4(finalProps),
                    wrapperProps: wrapperProps(),
                    ...contentState.snippetProps
                  }));
                  snippet(node_5, () => $$props.child, () => get$4(render_arg_1));
                  append($$anchor5, fragment_6);
                };
                var alternate_2 = ($$anchor5) => {
                  var div_2 = root_9$2();
                  attribute_effect(div_2, () => ({ ...wrapperProps() }));
                  var div_3 = child(div_2);
                  attribute_effect(div_3, () => ({ ...get$4(finalProps) }));
                  var node_6 = child(div_3);
                  snippet(node_6, () => $$props.children ?? noop$1);
                  append($$anchor5, div_2);
                };
                if_block(node_4, ($$render) => {
                  if ($$props.child) $$render(consequent_2);
                  else $$render(alternate_2, false);
                });
              }
              append($$anchor4, fragment_5);
            };
            Popper_layer($$anchor3, spread_props(() => get$4(mergedProps), () => contentState.popperProps, {
              get ref() {
                return contentState.opts.ref;
              },
              get open() {
                return contentState.parentMenu.opts.open.current;
              },
              onInteractOutside: handleInteractOutside,
              onEscapeKeydown: handleEscapeKeydown,
              get trapFocus() {
                return trapFocus();
              },
              get loop() {
                return loop2();
              },
              forceMount: false,
              get id() {
                return id();
              },
              popper,
              $$slots: { popper: true }
            }));
          }
        };
        if_block(
          $$anchor2,
          ($$render) => {
            if (!forceMount()) $$render(consequent_3);
          },
          $$elseif
        );
      }
    };
    if_block(node, ($$render) => {
      if (forceMount()) $$render(consequent_1);
      else $$render(alternate_1, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_3$6 = /* @__PURE__ */ from_html(`<button><!></button>`);
function Menu_trigger($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), disabled = prop($$props, "disabled", 3, false), type = prop($$props, "type", 3, "button"), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "child",
    "children",
    "disabled",
    "type"
  ]);
  const triggerState = DropdownMenuTriggerState.create({
    id: box.with(() => id()),
    disabled: box.with(() => disabled() ?? false),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, triggerState.props, { type: type() }));
  Floating_layer_anchor($$anchor, {
    get id() {
      return id();
    },
    get ref() {
      return triggerState.opts.ref;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var fragment_2 = comment();
          var node_1 = first_child(fragment_2);
          snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
          append($$anchor3, fragment_2);
        };
        var alternate = ($$anchor3) => {
          var button = root_3$6();
          attribute_effect(button, () => ({ ...get$4(mergedProps) }));
          var node_2 = child(button);
          snippet(node_2, () => $$props.children ?? noop$1);
          append($$anchor3, button);
        };
        if_block(node, ($$render) => {
          if ($$props.child) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
const labelAttrs = createBitsAttrs({ component: "label", parts: ["root"] });
const _LabelRootState = class _LabelRootState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "attachment");
    __privateAdd(this, _props13, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      [labelAttrs.root]: "",
      onmousedown: this.onmousedown,
      ...this.attachment
    })));
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
    this.onmousedown = this.onmousedown.bind(this);
  }
  static create(opts) {
    return new _LabelRootState(opts);
  }
  onmousedown(e) {
    if (e.detail > 1) e.preventDefault();
  }
  get props() {
    return get$4(__privateGet(this, _props13));
  }
  set props(value) {
    set$1(__privateGet(this, _props13), value);
  }
};
_props13 = new WeakMap();
let LabelRootState = _LabelRootState;
var root_2$g = /* @__PURE__ */ from_html(`<label><!></label>`);
function Label$1($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "child",
    "id",
    "ref",
    "for"
  ]);
  const rootState = LabelRootState.create({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, rootState.props, { for: $$props.for }));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var label = root_2$g();
      attribute_effect(label, () => ({ ...get$4(mergedProps), for: $$props.for }));
      var node_2 = child(label);
      snippet(node_2, () => $$props.children ?? noop$1);
      append($$anchor2, label);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
const tabsAttrs = createBitsAttrs({
  component: "tabs",
  parts: ["root", "list", "trigger", "content"]
});
const TabsRootContext = new Context("Tabs.Root");
const _TabsRootState = class _TabsRootState {
  constructor(opts) {
    __publicField(this, "opts");
    __publicField(this, "attachment");
    __publicField(this, "rovingFocusGroup");
    __privateAdd(this, _triggerIds, /* @__PURE__ */ state(proxy([])));
    // holds the trigger ID for each value to associate it with the content
    __publicField(this, "valueToTriggerId", new SvelteMap());
    // holds the content ID for each value to associate it with the trigger
    __publicField(this, "valueToContentId", new SvelteMap());
    __privateAdd(this, _props14, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      "data-orientation": getDataOrientation(this.opts.orientation.current),
      [tabsAttrs.root]: "",
      ...this.attachment
    })));
    this.opts = opts;
    this.attachment = attachRef(opts.ref);
    this.rovingFocusGroup = new RovingFocusGroup({
      candidateAttr: tabsAttrs.trigger,
      rootNode: this.opts.ref,
      loop: this.opts.loop,
      orientation: this.opts.orientation
    });
  }
  static create(opts) {
    return TabsRootContext.set(new _TabsRootState(opts));
  }
  get triggerIds() {
    return get$4(__privateGet(this, _triggerIds));
  }
  set triggerIds(value) {
    set$1(__privateGet(this, _triggerIds), value, true);
  }
  registerTrigger(id, value) {
    this.triggerIds.push(id);
    this.valueToTriggerId.set(value, id);
    return () => {
      this.triggerIds = this.triggerIds.filter((triggerId) => triggerId !== id);
      this.valueToTriggerId.delete(value);
    };
  }
  registerContent(id, value) {
    this.valueToContentId.set(value, id);
    return () => {
      this.valueToContentId.delete(value);
    };
  }
  setValue(v2) {
    this.opts.value.current = v2;
  }
  get props() {
    return get$4(__privateGet(this, _props14));
  }
  set props(value) {
    set$1(__privateGet(this, _props14), value);
  }
};
_triggerIds = new WeakMap();
_props14 = new WeakMap();
let TabsRootState = _TabsRootState;
const _TabsListState = class _TabsListState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _isDisabled, /* @__PURE__ */ user_derived(() => this.root.opts.disabled.current));
    __privateAdd(this, _props15, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      role: "tablist",
      "aria-orientation": getAriaOrientation(this.root.opts.orientation.current),
      "data-orientation": getDataOrientation(this.root.opts.orientation.current),
      [tabsAttrs.list]: "",
      "data-disabled": getDataDisabled(get$4(__privateGet(this, _isDisabled))),
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(opts.ref);
  }
  static create(opts) {
    return new _TabsListState(opts, TabsRootContext.get());
  }
  get props() {
    return get$4(__privateGet(this, _props15));
  }
  set props(value) {
    set$1(__privateGet(this, _props15), value);
  }
};
_isDisabled = new WeakMap();
_props15 = new WeakMap();
let TabsListState = _TabsListState;
const _TabsTriggerState = class _TabsTriggerState {
  constructor(opts, root2) {
    __privateAdd(this, _TabsTriggerState_instances);
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _tabIndex, /* @__PURE__ */ state(0));
    __privateAdd(this, _isActive, /* @__PURE__ */ user_derived(() => this.root.opts.value.current === this.opts.value.current));
    __privateAdd(this, _isDisabled2, /* @__PURE__ */ user_derived(() => this.opts.disabled.current || this.root.opts.disabled.current));
    __privateAdd(this, _ariaControls2, /* @__PURE__ */ user_derived(() => this.root.valueToContentId.get(this.opts.value.current)));
    __privateAdd(this, _props16, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      role: "tab",
      "data-state": getTabDataState(get$4(__privateGet(this, _isActive))),
      "data-value": this.opts.value.current,
      "data-orientation": getDataOrientation(this.root.opts.orientation.current),
      "data-disabled": getDataDisabled(get$4(__privateGet(this, _isDisabled2))),
      "aria-selected": getAriaSelected(get$4(__privateGet(this, _isActive))),
      "aria-controls": get$4(__privateGet(this, _ariaControls2)),
      [tabsAttrs.trigger]: "",
      disabled: getDisabled(get$4(__privateGet(this, _isDisabled2))),
      tabindex: get$4(__privateGet(this, _tabIndex)),
      //
      onclick: this.onclick,
      onfocus: this.onfocus,
      onkeydown: this.onkeydown,
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(opts.ref);
    watch(
      [
        () => this.opts.id.current,
        () => this.opts.value.current
      ],
      ([id, value]) => {
        return this.root.registerTrigger(id, value);
      }
    );
    user_effect(() => {
      this.root.triggerIds.length;
      if (get$4(__privateGet(this, _isActive)) || !this.root.opts.value.current) {
        set$1(__privateGet(this, _tabIndex), 0);
      } else {
        set$1(__privateGet(this, _tabIndex), -1);
      }
    });
    this.onfocus = this.onfocus.bind(this);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  static create(opts) {
    return new _TabsTriggerState(opts, TabsRootContext.get());
  }
  onfocus(_2) {
    if (this.root.opts.activationMode.current !== "automatic" || get$4(__privateGet(this, _isDisabled2))) return;
    __privateMethod(this, _TabsTriggerState_instances, activate_fn).call(this);
  }
  onclick(_2) {
    if (get$4(__privateGet(this, _isDisabled2))) return;
    __privateMethod(this, _TabsTriggerState_instances, activate_fn).call(this);
  }
  onkeydown(e) {
    if (get$4(__privateGet(this, _isDisabled2))) return;
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      __privateMethod(this, _TabsTriggerState_instances, activate_fn).call(this);
      return;
    }
    this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e);
  }
  get props() {
    return get$4(__privateGet(this, _props16));
  }
  set props(value) {
    set$1(__privateGet(this, _props16), value);
  }
};
_tabIndex = new WeakMap();
_isActive = new WeakMap();
_isDisabled2 = new WeakMap();
_ariaControls2 = new WeakMap();
_TabsTriggerState_instances = new WeakSet();
activate_fn = function() {
  if (this.root.opts.value.current === this.opts.value.current) return;
  this.root.setValue(this.opts.value.current);
};
_props16 = new WeakMap();
let TabsTriggerState = _TabsTriggerState;
const _TabsContentState = class _TabsContentState {
  constructor(opts, root2) {
    __publicField(this, "opts");
    __publicField(this, "root");
    __publicField(this, "attachment");
    __privateAdd(this, _isActive2, /* @__PURE__ */ user_derived(() => this.root.opts.value.current === this.opts.value.current));
    __privateAdd(this, _ariaLabelledBy, /* @__PURE__ */ user_derived(() => this.root.valueToTriggerId.get(this.opts.value.current)));
    __privateAdd(this, _props17, /* @__PURE__ */ user_derived(() => ({
      id: this.opts.id.current,
      role: "tabpanel",
      hidden: getHidden(!get$4(__privateGet(this, _isActive2))),
      tabindex: 0,
      "data-value": this.opts.value.current,
      "data-state": getTabDataState(get$4(__privateGet(this, _isActive2))),
      "aria-labelledby": get$4(__privateGet(this, _ariaLabelledBy)),
      "data-orientation": getDataOrientation(this.root.opts.orientation.current),
      [tabsAttrs.content]: "",
      ...this.attachment
    })));
    this.opts = opts;
    this.root = root2;
    this.attachment = attachRef(opts.ref);
    watch(
      [
        () => this.opts.id.current,
        () => this.opts.value.current
      ],
      ([id, value]) => {
        return this.root.registerContent(id, value);
      }
    );
  }
  static create(opts) {
    return new _TabsContentState(opts, TabsRootContext.get());
  }
  get props() {
    return get$4(__privateGet(this, _props17));
  }
  set props(value) {
    set$1(__privateGet(this, _props17), value);
  }
};
_isActive2 = new WeakMap();
_ariaLabelledBy = new WeakMap();
_props17 = new WeakMap();
let TabsContentState = _TabsContentState;
function getTabDataState(condition) {
  return condition ? "active" : "inactive";
}
var root_2$f = /* @__PURE__ */ from_html(`<div><!></div>`);
function Tabs$1($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), value = prop($$props, "value", 15, ""), onValueChange = prop($$props, "onValueChange", 3, noop), orientation = prop($$props, "orientation", 3, "horizontal"), loop2 = prop($$props, "loop", 3, true), activationMode = prop($$props, "activationMode", 3, "automatic"), disabled = prop($$props, "disabled", 3, false), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "value",
    "onValueChange",
    "orientation",
    "loop",
    "activationMode",
    "disabled",
    "children",
    "child"
  ]);
  const rootState = TabsRootState.create({
    id: box.with(() => id()),
    value: box.with(() => value(), (v2) => {
      value(v2);
      onValueChange()(v2);
    }),
    orientation: box.with(() => orientation()),
    loop: box.with(() => loop2()),
    activationMode: box.with(() => activationMode()),
    disabled: box.with(() => disabled()),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, rootState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$f();
      attribute_effect(div, () => ({ ...get$4(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$e = /* @__PURE__ */ from_html(`<div><!></div>`);
function Tabs_content$1($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "child",
    "id",
    "ref",
    "value"
  ]);
  const contentState = TabsContentState.create({
    value: box.with(() => $$props.value),
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, contentState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$e();
      attribute_effect(div, () => ({ ...get$4(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$d = /* @__PURE__ */ from_html(`<div><!></div>`);
function Tabs_list$1($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let id = prop($$props, "id", 19, () => createId(uid)), ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "id",
    "ref"
  ]);
  const listState = TabsListState.create({
    id: box.with(() => id()),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, listState.props));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var div = root_2$d();
      attribute_effect(div, () => ({ ...get$4(mergedProps) }));
      var node_2 = child(div);
      snippet(node_2, () => $$props.children ?? noop$1);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$c = /* @__PURE__ */ from_html(`<button><!></button>`);
function Tabs_trigger$1($$anchor, $$props) {
  const uid = props_id();
  push($$props, true);
  let disabled = prop($$props, "disabled", 3, false), id = prop($$props, "id", 19, () => createId(uid)), type = prop($$props, "type", 3, "button"), ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "disabled",
    "id",
    "type",
    "value",
    "ref"
  ]);
  const triggerState = TabsTriggerState.create({
    id: box.with(() => id()),
    disabled: box.with(() => disabled() ?? false),
    value: box.with(() => $$props.value),
    ref: box.with(() => ref(), (v2) => ref(v2))
  });
  const mergedProps = /* @__PURE__ */ user_derived(() => mergeProps(restProps, triggerState.props, { type: type() }));
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      snippet(node_1, () => $$props.child, () => ({ props: get$4(mergedProps) }));
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$c();
      attribute_effect(button, () => ({ ...get$4(mergedProps) }));
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1);
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if ($$props.child) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
let isUsingKeyboard = /* @__PURE__ */ state(false);
const _IsUsingKeyboard = class _IsUsingKeyboard {
  constructor() {
    user_effect(() => {
      if (_IsUsingKeyboard._refs === 0) {
        _IsUsingKeyboard._cleanup = effect_root(() => {
          const callbacksToDispose = [];
          const handlePointer = (_2) => {
            set$1(isUsingKeyboard, false);
          };
          const handleKeydown = (_2) => {
            set$1(isUsingKeyboard, true);
          };
          callbacksToDispose.push(on(document, "pointerdown", handlePointer, { capture: true }), on(document, "pointermove", handlePointer, { capture: true }), on(document, "keydown", handleKeydown, { capture: true }));
          return executeCallbacks(...callbacksToDispose);
        });
      }
      _IsUsingKeyboard._refs++;
      return () => {
        var _a2;
        _IsUsingKeyboard._refs--;
        if (_IsUsingKeyboard._refs === 0) {
          set$1(isUsingKeyboard, false);
          (_a2 = _IsUsingKeyboard._cleanup) == null ? void 0 : _a2.call(_IsUsingKeyboard);
        }
      };
    });
  }
  get current() {
    return get$4(isUsingKeyboard);
  }
  set current(value) {
    set$1(isUsingKeyboard, value, true);
  }
};
__publicField(_IsUsingKeyboard, "_refs", 0);
// Reference counting to avoid multiple listeners.
__publicField(_IsUsingKeyboard, "_cleanup");
let IsUsingKeyboard = _IsUsingKeyboard;
var l = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, u = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, x$1 = (e, o) => JSON.stringify(e) === JSON.stringify(o);
function i(e, o) {
  e.forEach(function(r2) {
    Array.isArray(r2) ? i(r2, o) : o.push(r2);
  });
}
function y(e) {
  let o = [];
  return i(e, o), o;
}
var a = (...e) => y(e).filter(Boolean), p = (e, o) => {
  let r2 = {}, c = Object.keys(e), f = Object.keys(o);
  for (let t of c) if (f.includes(t)) {
    let s = e[t], n = o[t];
    Array.isArray(s) || Array.isArray(n) ? r2[t] = a(n, s) : typeof s == "object" && typeof n == "object" ? r2[t] = p(s, n) : r2[t] = n + " " + s;
  } else r2[t] = e[t];
  for (let t of f) c.includes(t) || (r2[t] = o[t]);
  return r2;
}, g = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
const CLASS_PART_SEPARATOR = "-";
const createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  var _a2;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a2 = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a2.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
const createClassMap = (config) => {
  const {
    theme,
    classGroups
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const classGroupId in classGroups) {
    processClassesRecursively(classGroups[classGroupId], classMap, classGroupId, theme);
  }
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = (func) => func.isThemeGetter;
const createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = "!";
const MODIFIER_SEPARATOR = ":";
const MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
const createParseClassName = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index2 = 0; index2 < className.length; index2++) {
      let currentCharacter = className[index2];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index2));
          modifierStart = index2 + MODIFIER_SEPARATOR_LENGTH;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index2;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      } else if (currentCharacter === "(") {
        parenDepth++;
      } else if (currentCharacter === ")") {
        parenDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const baseClassName = stripImportantModifier(baseClassNameWithImportantModifier);
    const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
      isExternal: true,
      modifiers: [],
      hasImportantModifier: false,
      baseClassName: className,
      maybePostfixModifierPosition: void 0
    };
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};
const stripImportantModifier = (baseClassName) => {
  if (baseClassName.endsWith(IMPORTANT_MODIFIER)) {
    return baseClassName.substring(0, baseClassName.length - 1);
  }
  if (baseClassName.startsWith(IMPORTANT_MODIFIER)) {
    return baseClassName.substring(1);
  }
  return baseClassName;
};
const createSortModifiers = (config) => {
  const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, true]));
  const sortModifiers = (modifiers) => {
    if (modifiers.length <= 1) {
      return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier) => {
      const isPositionSensitive = modifier[0] === "[" || orderSensitiveModifiers[modifier];
      if (isPositionSensitive) {
        sortedModifiers.push(...unsortedModifiers.sort(), modifier);
        unsortedModifiers = [];
      } else {
        unsortedModifiers.push(modifier);
      }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
  };
  return sortModifiers;
};
const createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index2 = classNames.length - 1; index2 >= 0; index2 -= 1) {
    const originalClassName = classNames[index2];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i2 = 0; i2 < conflictGroups.length; ++i2) {
      const group = conflictGroups[i2];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index2 = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index2 < arguments.length) {
    if (argument = arguments[index2++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
const arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
const fractionRegex = /^\d+\/\d+$/;
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isFraction = (value) => fractionRegex.test(value);
const isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
const isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
const isTshirtSize = (value) => tshirtUnitRegex.test(value);
const isAny = () => true;
const isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
const isNever = () => false;
const isShadow = (value) => shadowRegex.test(value);
const isImage = (value) => imageRegex.test(value);
const isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
const isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
const isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
const isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber);
const isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
const isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
const isArbitraryShadow = (value) => getIsArbitraryValue(value, isNever, isShadow);
const isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
const isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
const isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
const isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
const isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
const isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
const isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
const getIsArbitraryValue = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
const isLabelPosition = (label) => label === "position";
const imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
const isLabelImage = (label) => imageLabels.has(label);
const sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
const isLabelSize = (label) => sizeLabels.has(label);
const isLabelLength = (label) => label === "length";
const isLabelNumber = (label) => label === "number";
const isLabelFamilyName = (label) => label === "family-name";
const isLabelShadow = (label) => label === "shadow";
const getDefaultConfig = () => {
  const themeColor = fromTheme("color");
  const themeFont = fromTheme("font");
  const themeText = fromTheme("text");
  const themeFontWeight = fromTheme("font-weight");
  const themeTracking = fromTheme("tracking");
  const themeLeading = fromTheme("leading");
  const themeBreakpoint = fromTheme("breakpoint");
  const themeContainer = fromTheme("container");
  const themeSpacing = fromTheme("spacing");
  const themeRadius = fromTheme("radius");
  const themeShadow = fromTheme("shadow");
  const themeInsetShadow = fromTheme("inset-shadow");
  const themeDropShadow = fromTheme("drop-shadow");
  const themeBlur = fromTheme("blur");
  const themePerspective = fromTheme("perspective");
  const themeAspect = fromTheme("aspect");
  const themeEase = fromTheme("ease");
  const themeAnimate = fromTheme("animate");
  const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const scalePosition = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue, themeSpacing];
  const scaleInset = () => [isFraction, "full", "auto", ...scaleUnambiguousSpacing()];
  const scaleGridTemplateColsRows = () => [isInteger, "none", "subgrid", isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger, isArbitraryVariable, isArbitraryValue]
  }, isArbitraryVariable, isArbitraryValue];
  const scaleGridColRowStartOrEnd = () => [isInteger, "auto", isArbitraryVariable, isArbitraryValue];
  const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue];
  const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"];
  const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch"];
  const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...scaleUnambiguousSpacing()];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue];
  const scaleGradientStopPosition = () => [isPercent, isArbitraryLength];
  const scaleRadius = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleBorderWidth = () => ["", isNumber, isArbitraryVariableLength, isArbitraryLength];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const scaleBlur = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue
  ];
  const scaleOrigin = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryVariable, isArbitraryValue];
  const scaleRotate = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleScale = () => ["none", isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleSkew = () => [isNumber, isArbitraryVariable, isArbitraryValue];
  const scaleTranslate = () => [isFraction, "full", ...scaleUnambiguousSpacing()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize],
      breakpoint: [isTshirtSize],
      color: [isAny],
      container: [isTshirtSize],
      "drop-shadow": [isTshirtSize],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize],
      shadow: [isTshirtSize],
      spacing: ["px", isNumber],
      text: [isTshirtSize],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue, isArbitraryVariable, themeAspect]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isNumber, isArbitraryValue, isArbitraryVariable, themeContainer]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": scaleBreak()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": scaleBreak()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...scalePosition(), isArbitraryValue, isArbitraryVariable]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: scaleOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: scaleInset()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: scaleInset()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: scaleInset()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: scaleInset()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: scaleInset()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: scaleInset()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: scaleInset()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [isInteger, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [isFraction, "full", "auto", themeContainer, ...scaleUnambiguousSpacing()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [isNumber, isFraction, "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [isInteger, "first", "last", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: scaleUnambiguousSpacing()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": scaleUnambiguousSpacing()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": scaleUnambiguousSpacing()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: scaleUnambiguousSpacing()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: scaleUnambiguousSpacing()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: scaleUnambiguousSpacing()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: scaleUnambiguousSpacing()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: scaleMargin()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: scaleMargin()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: scaleMargin()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: scaleMargin()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: scaleMargin()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: scaleMargin()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: scaleMargin()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: scaleMargin()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: scaleMargin()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: scaleSizing()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...scaleSizing()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...scaleSizing()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...scaleSizing()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...scaleSizing()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent, isArbitraryValue]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryValue, themeFont]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [isNumber, "none", isArbitraryVariable, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          themeLeading,
          ...scaleUnambiguousSpacing()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: scaleColor()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [isNumber, "from-font", "auto", isArbitraryVariable, isArbitraryLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [isNumber, "auto", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: scaleUnambiguousSpacing()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger, isArbitraryVariable, isArbitraryValue],
          radial: ["", isArbitraryVariable, isArbitraryValue],
          conic: [isInteger, isArbitraryVariable, isArbitraryValue]
        }, isArbitraryVariableImage, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: scaleColor()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: scaleColor()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: scaleColor()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: scaleColor()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: scaleRadius()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: scaleBorderWidth()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: scaleColor()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: scaleColor()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", isNumber, isArbitraryVariableLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [themeColor]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: scaleColor()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", isArbitraryVariable, isArbitraryValue, themeInsetShadow]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: scaleColor()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [isNumber, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: scaleBlur()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          themeDropShadow,
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [isNumber, "initial", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [isNumber, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": scaleOrigin()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: scaleRotate()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: scaleScale()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: scaleSkew()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: scaleOrigin()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: scaleTranslate()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: scaleColor()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: scaleColor()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isNumber, isArbitraryVariableLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
};
const mergeConfigs = (baseConfig, {
  cacheSize,
  prefix,
  experimentalParseClassName,
  extend = {},
  override = {}
}) => {
  overrideProperty(baseConfig, "cacheSize", cacheSize);
  overrideProperty(baseConfig, "prefix", prefix);
  overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
  overrideConfigProperties(baseConfig.theme, override.theme);
  overrideConfigProperties(baseConfig.classGroups, override.classGroups);
  overrideConfigProperties(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
  overrideConfigProperties(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
  overrideProperty(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers);
  mergeConfigProperties(baseConfig.theme, extend.theme);
  mergeConfigProperties(baseConfig.classGroups, extend.classGroups);
  mergeConfigProperties(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
  mergeConfigProperties(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
  mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
  return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue) => {
  if (overrideValue !== void 0) {
    baseObject[overrideKey] = overrideValue;
  }
};
const overrideConfigProperties = (baseObject, overrideObject) => {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
};
const mergeConfigProperties = (baseObject, mergeObject) => {
  if (mergeObject) {
    for (const key in mergeObject) {
      mergeArrayProperties(baseObject, mergeObject, key);
    }
  }
};
const mergeArrayProperties = (baseObject, mergeObject, key) => {
  const mergeValue = mergeObject[key];
  if (mergeValue !== void 0) {
    baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
  }
};
const extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
var ie = { twMerge: true, twMergeConfig: {}, responsiveVariants: false }, x = (s) => s || void 0, N = (...s) => x(y(s).filter(Boolean).join(" ")), R = null, v = {}, q = false, M = (...s) => (b$1) => b$1.twMerge ? ((!R || q) && (q = false, R = u(v) ? twMerge : extendTailwindMerge({ ...v, extend: { theme: v.theme, classGroups: v.classGroups, conflictingClassGroupModifiers: v.conflictingClassGroupModifiers, conflictingClassGroups: v.conflictingClassGroups, ...v.extend } })), x(R(N(s)))) : N(s), _ = (s, b) => {
  for (let e in b) s.hasOwnProperty(e) ? s[e] = N(s[e], b[e]) : s[e] = b[e];
  return s;
}, ce = (s, b$1) => {
  let { extend: e = null, slots: O = {}, variants: U = {}, compoundVariants: W = [], compoundSlots: C = [], defaultVariants: z = {} } = s, m = { ...ie, ...b$1 }, k = e != null && e.base ? N(e.base, s == null ? void 0 : s.base) : s == null ? void 0 : s.base, g$1 = e != null && e.variants && !u(e.variants) ? p(U, e.variants) : U, w = e != null && e.defaultVariants && !u(e.defaultVariants) ? { ...e.defaultVariants, ...z } : z;
  !u(m.twMergeConfig) && !x$1(m.twMergeConfig, v) && (q = true, v = m.twMergeConfig);
  let S = u(e == null ? void 0 : e.slots), T = u(O) ? {} : { base: N(s == null ? void 0 : s.base, S && (e == null ? void 0 : e.base)), ...O }, j = S ? T : _({ ...e == null ? void 0 : e.slots }, u(T) ? { base: s == null ? void 0 : s.base } : T), h$1 = u(e == null ? void 0 : e.compoundVariants) ? W : a(e == null ? void 0 : e.compoundVariants, W), V = (l$1) => {
    if (u(g$1) && u(O) && S) return M(k, l$1 == null ? void 0 : l$1.class, l$1 == null ? void 0 : l$1.className)(m);
    if (h$1 && !Array.isArray(h$1)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof h$1}`);
    if (C && !Array.isArray(C)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof C}`);
    let P = (a2, n, t = [], i2) => {
      let r2 = t;
      if (typeof n == "string") r2 = r2.concat(g(n).split(" ").map((o) => `${a2}:${o}`));
      else if (Array.isArray(n)) r2 = r2.concat(n.reduce((o, c) => o.concat(`${a2}:${c}`), []));
      else if (typeof n == "object" && typeof i2 == "string") {
        for (let o in n) if (n.hasOwnProperty(o) && o === i2) {
          let c = n[o];
          if (c && typeof c == "string") {
            let u2 = g(c);
            r2[i2] ? r2[i2] = r2[i2].concat(u2.split(" ").map((f) => `${a2}:${f}`)) : r2[i2] = u2.split(" ").map((f) => `${a2}:${f}`);
          } else Array.isArray(c) && c.length > 0 && (r2[i2] = c.reduce((u2, f) => u2.concat(`${a2}:${f}`), []));
        }
      }
      return r2;
    }, D = (a$1, n = g$1, t = null, i2 = null) => {
      var L;
      let r2 = n[a$1];
      if (!r2 || u(r2)) return null;
      let o = (L = i2 == null ? void 0 : i2[a$1]) != null ? L : l$1 == null ? void 0 : l$1[a$1];
      if (o === null) return null;
      let c = l(o), u$1 = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === true, f = w == null ? void 0 : w[a$1], d = [];
      if (typeof c == "object" && u$1) for (let [E, Q] of Object.entries(c)) {
        let ne = r2[Q];
        if (E === "initial") {
          f = Q;
          continue;
        }
        Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(E) || (d = P(E, ne, d, t));
      }
      let $ = c != null && typeof c != "object" ? c : l(f), A = r2[$ || "false"];
      return typeof d == "object" && typeof t == "string" && d[t] ? _(d, A) : d.length > 0 ? (d.push(A), t === "base" ? d.join(" ") : d) : A;
    }, p2 = () => g$1 ? Object.keys(g$1).map((a2) => D(a2, g$1)) : null, ee = (a2, n) => {
      if (!g$1 || typeof g$1 != "object") return null;
      let t = new Array();
      for (let i2 in g$1) {
        let r2 = D(i2, g$1, a2, n), o = a2 === "base" && typeof r2 == "string" ? r2 : r2 && r2[a2];
        o && (t[t.length] = o);
      }
      return t;
    }, H = {};
    for (let a2 in l$1) l$1[a2] !== void 0 && (H[a2] = l$1[a2]);
    let I = (a2, n) => {
      var i2;
      let t = typeof (l$1 == null ? void 0 : l$1[a2]) == "object" ? { [a2]: (i2 = l$1[a2]) == null ? void 0 : i2.initial } : {};
      return { ...w, ...H, ...t, ...n };
    }, J = (a2 = [], n) => {
      let t = [];
      for (let { class: i2, className: r2, ...o } of a2) {
        let c = true;
        for (let [u2, f] of Object.entries(o)) {
          let d = I(u2, n)[u2];
          if (Array.isArray(f)) {
            if (!f.includes(d)) {
              c = false;
              break;
            }
          } else {
            let $ = (A) => A == null || A === false;
            if ($(f) && $(d)) continue;
            if (d !== f) {
              c = false;
              break;
            }
          }
        }
        c && (i2 && t.push(i2), r2 && t.push(r2));
      }
      return t;
    }, te = (a2) => {
      let n = J(h$1, a2);
      if (!Array.isArray(n)) return n;
      let t = {};
      for (let i2 of n) if (typeof i2 == "string" && (t.base = M(t.base, i2)(m)), typeof i2 == "object") for (let [r2, o] of Object.entries(i2)) t[r2] = M(t[r2], o)(m);
      return t;
    }, ae = (a2) => {
      if (C.length < 1) return null;
      let n = {};
      for (let { slots: t = [], class: i2, className: r2, ...o } of C) {
        if (!u(o)) {
          let c = true;
          for (let u2 of Object.keys(o)) {
            let f = I(u2, a2)[u2];
            if (f === void 0 || (Array.isArray(o[u2]) ? !o[u2].includes(f) : o[u2] !== f)) {
              c = false;
              break;
            }
          }
          if (!c) continue;
        }
        for (let c of t) n[c] = n[c] || [], n[c].push([i2, r2]);
      }
      return n;
    };
    if (!u(O) || !S) {
      let a2 = {};
      if (typeof j == "object" && !u(j)) for (let n of Object.keys(j)) a2[n] = (t) => {
        var i2, r2;
        return M(j[n], ee(n, t), ((i2 = te(t)) != null ? i2 : [])[n], ((r2 = ae(t)) != null ? r2 : [])[n], t == null ? void 0 : t.class, t == null ? void 0 : t.className)(m);
      };
      return a2;
    }
    return M(k, p2(), J(h$1), l$1 == null ? void 0 : l$1.class, l$1 == null ? void 0 : l$1.className)(m);
  }, K = () => {
    if (!(!g$1 || typeof g$1 != "object")) return Object.keys(g$1);
  };
  return V.variantKeys = K(), V.extend = e, V.base = k, V.slots = j, V.variants = g$1, V.defaultVariants = w, V.compoundSlots = C, V.compoundVariants = h$1, V;
};
function cn(...inputs) {
  return twMerge$1(clsx$1(inputs));
}
function format_arabic_date(iso_string) {
  const date = new Date(iso_string);
  return date.toLocaleString("ar-SA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
}
const button_variants = ce({
  base: "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow-sm border border-primary/20  active:bg-primary/95 transition-colors",
      destructive: "bg-destructive shadow-xs hover:bg-destructive! active:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white transition-colors",
      outline: "bg-background shadow-sm border border-input hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground/20 active:bg-accent/80 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 transition-colors",
      secondary: "bg-secondary text-secondary-foreground shadow-sm border border-secondary/20 hover:bg-secondary/70 active:bg-secondary/90 transition-colors",
      ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/80 dark:hover:bg-accent/50 transition-colors",
      link: "text-primary underline-offset-4 hover:underline hover:text-primary/80 transition-colors"
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9"
    }
  },
  defaultVariants: { variant: "default", size: "default" }
});
var root_1$e = /* @__PURE__ */ from_html(`<a><!></a>`);
var root_2$b = /* @__PURE__ */ from_html(`<button><!></button>`);
function Button($$anchor, $$props) {
  push($$props, true);
  let type = prop($$props, "type", 3, "button"), size2 = prop($$props, "size", 3, "default"), href = prop($$props, "href", 3, void 0), disabled = prop($$props, "disabled", 3, false), variant = prop($$props, "variant", 3, "default"), className = prop($$props, "class", 3, ""), ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "type",
    "size",
    "href",
    "disabled",
    "variant",
    "class",
    "ref"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var a2 = root_1$e();
      attribute_effect(
        a2,
        ($0) => ({
          ...restProps,
          "data-slot": "button",
          "aria-disabled": disabled(),
          href: disabled() ? void 0 : href(),
          role: disabled() ? "link" : void 0,
          tabindex: disabled() ? -1 : void 0,
          class: $0
        }),
        [
          () => cn(button_variants({ variant: variant(), size: size2() }), className())
        ]
      );
      var node_1 = child(a2);
      snippet(node_1, () => $$props.children ?? noop$1);
      bind_this(a2, ($$value) => ref($$value), () => ref());
      append($$anchor2, a2);
    };
    var alternate = ($$anchor2) => {
      var button = root_2$b();
      attribute_effect(
        button,
        ($0) => ({
          type: type(),
          disabled: disabled(),
          ...restProps,
          "data-slot": "button",
          class: $0
        }),
        [
          () => cn(button_variants({ variant: variant(), size: size2() }), className())
        ]
      );
      var node_2 = child(button);
      snippet(node_2, () => $$props.children ?? noop$1);
      bind_this(button, ($$value) => ref($$value), () => ref());
      append($$anchor2, button);
    };
    if_block(node, ($$render) => {
      if (href()) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Alert_dialog_action($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), variant = prop($$props, "variant", 3, "default"), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "variant"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn(button_variants({ variant: variant() }), $$props.class));
  component$1(node, () => Alert_dialog_action$1, ($$anchor2, AlertDialogPrimitive_Action) => {
    AlertDialogPrimitive_Action($$anchor2, spread_props(
      {
        "data-slot": "alert-dialog-action",
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
function Alert_dialog_cancel($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), variant = prop($$props, "variant", 3, "outline"), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "variant"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn(button_variants({ variant: variant() }), $$props.class));
  component$1(node, () => Alert_dialog_cancel$1, ($$anchor2, AlertDialogPrimitive_Cancel) => {
    AlertDialogPrimitive_Cancel($$anchor2, spread_props(
      {
        "data-slot": "alert-dialog-cancel",
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
function Alert_dialog_overlay($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), className = prop($$props, "class", 3, ""), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn("fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", className()));
  component$1(node, () => Dialog_overlay, ($$anchor2, AlertDialogPrimitive_Overlay) => {
    AlertDialogPrimitive_Overlay($$anchor2, spread_props(
      {
        "data-slot": "alert-dialog-overlay",
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
var root_1$d = /* @__PURE__ */ from_html(`<!> <!>`, 1);
function Alert_dialog_content($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "portalProps"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  component$1(node, () => Portal, ($$anchor2, AlertDialogPrimitive_Portal) => {
    AlertDialogPrimitive_Portal($$anchor2, spread_props(() => $$props.portalProps, {
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = root_1$d();
        var node_1 = first_child(fragment_1);
        Alert_dialog_overlay(node_1, {});
        var node_2 = sibling(node_1, 2);
        const expression = /* @__PURE__ */ user_derived(() => cn("fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border-2 border-border bg-background p-6 shadow-2xl duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg", $$props.class));
        component$1(node_2, () => Alert_dialog_content$1, ($$anchor4, AlertDialogPrimitive_Content) => {
          AlertDialogPrimitive_Content($$anchor4, spread_props(
            {
              "data-slot": "alert-dialog-content",
              get class() {
                return get$4(expression);
              }
            },
            () => restProps,
            {
              get ref() {
                return ref();
              },
              set ref($$value) {
                ref($$value);
              }
            }
          ));
        });
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    }));
  });
  append($$anchor, fragment);
  pop();
}
function Alert_dialog_description($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn("text-sm text-muted-foreground", $$props.class));
  component$1(node, () => Dialog_description, ($$anchor2, AlertDialogPrimitive_Description) => {
    AlertDialogPrimitive_Description($$anchor2, spread_props(
      {
        "data-slot": "alert-dialog-description",
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
var root$l = /* @__PURE__ */ from_html(`<div><!></div>`);
function Alert_dialog_footer($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var div = root$l();
  attribute_effect(
    div,
    ($0) => ({
      "data-slot": "alert-dialog-footer",
      class: $0,
      ...restProps
    }),
    [
      () => cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", $$props.class)
    ]
  );
  var node = child(div);
  snippet(node, () => $$props.children ?? noop$1);
  bind_this(div, ($$value) => ref($$value), () => ref());
  append($$anchor, div);
  pop();
}
var root$k = /* @__PURE__ */ from_html(`<div><!></div>`);
function Alert_dialog_header($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var div = root$k();
  attribute_effect(
    div,
    ($0) => ({
      "data-slot": "alert-dialog-header",
      class: $0,
      ...restProps
    }),
    [
      () => cn("flex flex-col gap-2 text-center sm:text-right", $$props.class)
    ]
  );
  var node = child(div);
  snippet(node, () => $$props.children ?? noop$1);
  bind_this(div, ($$value) => ref($$value), () => ref());
  append($$anchor, div);
  pop();
}
function Alert_dialog_title($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn("text-lg font-semibold", $$props.class));
  component$1(node, () => Dialog_title, ($$anchor2, AlertDialogPrimitive_Title) => {
    AlertDialogPrimitive_Title($$anchor2, spread_props(
      {
        "data-slot": "alert-dialog-title",
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
const Root$1 = Alert_dialog;
var root_3$5 = /* @__PURE__ */ from_html(`<!> <!>`, 1);
var root_6$4 = /* @__PURE__ */ from_html(`<!> <!>`, 1);
var root_2$a = /* @__PURE__ */ from_html(`<!> <!>`, 1);
function ConfirmDialog($$anchor, $$props) {
  push($$props, false);
  const [$$stores, $$cleanup] = setup_stores();
  const $ui_store = () => store_get(ui_store, "$ui_store", $$stores);
  init();
  const expression = /* @__PURE__ */ derived_safe_equal(() => ($ui_store(), untrack(() => !!$ui_store().confirm_dialog)));
  Root$1($$anchor, {
    get open() {
      return get$4(expression);
    },
    children: ($$anchor2, $$slotProps) => {
      Alert_dialog_content($$anchor2, {
        class: "",
        portalProps: {},
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$a();
          var node = first_child(fragment_2);
          Alert_dialog_header(node, {
            class: "",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_3 = root_3$5();
              var node_1 = first_child(fragment_3);
              Alert_dialog_title(node_1, {
                class: "text-black dark:text-white",
                children: ($$anchor5, $$slotProps4) => {
                  var text$1 = text();
                  template_effect(() => set_text(text$1, ($ui_store(), untrack(() => {
                    var _a2;
                    return (_a2 = $ui_store().confirm_dialog) == null ? void 0 : _a2.title;
                  }))));
                  append($$anchor5, text$1);
                },
                $$slots: { default: true }
              });
              var node_2 = sibling(node_1, 2);
              Alert_dialog_description(node_2, {
                class: "",
                children: ($$anchor5, $$slotProps4) => {
                  var text_1 = text();
                  template_effect(() => set_text(text_1, ($ui_store(), untrack(() => {
                    var _a2;
                    return (_a2 = $ui_store().confirm_dialog) == null ? void 0 : _a2.message;
                  }))));
                  append($$anchor5, text_1);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_3);
            },
            $$slots: { default: true }
          });
          var node_3 = sibling(node, 2);
          Alert_dialog_footer(node_3, {
            class: "",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_6 = root_6$4();
              var node_4 = first_child(fragment_6);
              Alert_dialog_cancel(node_4, {
                class: "text-black dark:text-white",
                variant: "default",
                onclick: () => {
                  var _a2, _b2;
                  (_b2 = (_a2 = $ui_store().confirm_dialog) == null ? void 0 : _a2.on_cancel) == null ? void 0 : _b2.call(_a2);
                  ui_actions.hide_confirm();
                },
                children: ($$anchor5, $$slotProps4) => {
                  var text_2 = text("إلغاء");
                  append($$anchor5, text_2);
                },
                $$slots: { default: true }
              });
              var node_5 = sibling(node_4, 2);
              Alert_dialog_action(node_5, {
                variant: "destructive",
                class: "hover:text-black dark:hover:text-white",
                onclick: () => {
                  var _a2, _b2;
                  (_b2 = (_a2 = $ui_store().confirm_dialog) == null ? void 0 : _a2.on_confirm) == null ? void 0 : _b2.call(_a2);
                  ui_actions.hide_confirm();
                },
                children: ($$anchor5, $$slotProps4) => {
                  var text_3 = text("تأكيد");
                  append($$anchor5, text_3);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_6);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
var root_1$c = /* @__PURE__ */ from_html(`<div class="fixed right-0 bottom-0 left-0 z-50 bg-yellow-500 p-2 text-center text-sm font-medium text-black">⚠️ أنت غير متصل بالإنترنت. التغييرات ستُحفظ وتُرسل عند العودة للاتصال</div>`);
var root_2$9 = /* @__PURE__ */ from_html(`<div class="fixed right-0 bottom-0 left-0 z-50 bg-green-500 p-2 text-center text-sm font-medium text-white">✅ تم مزامنة التغييرات بنجاح</div>`);
var root$j = /* @__PURE__ */ from_html(`<!> <!>`, 1);
function OfflineIndicator($$anchor, $$props) {
  push($$props, true);
  let is_online = /* @__PURE__ */ state(proxy(navigator.onLine));
  let _pending_sync_count = /* @__PURE__ */ state(0);
  let show_sync_message = /* @__PURE__ */ state(false);
  function update_online_status() {
    set$1(is_online, navigator.onLine, true);
  }
  function handle_service_worker_message(event2) {
    var _a2, _b2;
    if (((_a2 = event2.data) == null ? void 0 : _a2.type) === "SYNC_SUCCESS") {
      set$1(show_sync_message, true);
      setTimeout(() => set$1(show_sync_message, false), 3e3);
    }
    if (((_b2 = event2.data) == null ? void 0 : _b2.type) === "SYNC_COMPLETE") set$1(_pending_sync_count, 0);
  }
  user_effect(() => {
    window.addEventListener("online", update_online_status);
    window.addEventListener("offline", update_online_status);
    if ("serviceWorker" in navigator) navigator.serviceWorker.addEventListener("message", handle_service_worker_message);
    return () => {
      window.removeEventListener("online", update_online_status);
      window.removeEventListener("offline", update_online_status);
      if ("serviceWorker" in navigator) navigator.serviceWorker.removeEventListener("message", handle_service_worker_message);
    };
  });
  var fragment = root$j();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$c();
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (!get$4(is_online)) $$render(consequent);
    });
  }
  var node_1 = sibling(node, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_1 = root_2$9();
      append($$anchor2, div_1);
    };
    if_block(node_1, ($$render) => {
      if (get$4(show_sync_message)) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
}
const routes = [
  ["/", Promise.resolve().then(() => GetStarted$1)],
  [
    "/join/:code",
    Promise.resolve().then(() => JoinFamily$1)
  ],
  [
    "/family",
    Promise.resolve().then(() => FamilyBoard$1)
  ]
];
let component = /* @__PURE__ */ state(void 0);
let is_404 = /* @__PURE__ */ state(false);
const router = Navaid("/", async (uri) => {
  set$1(is_404, true);
  set$1(component, null);
  Object.assign(route, { path: uri, params: null });
});
const route = proxy({ path: location.pathname, params: null });
for (const [path, cmp] of routes) {
  router.on(path, (params) => {
    set$1(is_404, false);
    document.startViewTransition(async () => {
      const { default: component_default, ...exports } = await cmp;
      if ((exports == null ? void 0 : exports.validate_params) && !await exports.validate_params(params)) {
        router.route("/");
        return;
      }
      set$1(component, component_default, true);
      Object.assign(route, { path: location.pathname, params });
    });
  });
}
window.router_initialized = !!window.router_initialized;
session.subscribe(($session) => {
  if (!window.router_initialized && $session.loaded) {
    setTimeout(() => router.listen(), 10);
    window.router_initialized = true;
  }
});
function navigate_based_on_session(session_state) {
  if (!session_state.loaded) return;
  const current_path = location.pathname;
  const has_session = session_state.family_id && session_state.join_code;
  if (has_session && (current_path === "/" || current_path.startsWith("/join/"))) {
    router.route("/family");
  } else if (!has_session && current_path === "/family") {
    router.route("/");
  }
}
session.subscribe(navigate_based_on_session);
var root_2$8 = /* @__PURE__ */ from_html(`<div class="flex h-[100svh] flex-col items-center justify-center text-2xl font-bold"><h1>الصفحة غير موجودة</h1> <a class="block text-blue-600" href="/">الرئيسية</a></div>`);
var root_1$b = /* @__PURE__ */ from_html(`<!> <!>`, 1);
var root$i = /* @__PURE__ */ from_html(`<main><!></main> <!> <!> <!>`, 1);
function App($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $session = () => store_get(session, "$session", $$stores);
  setContext("router", router);
  var fragment = root$i();
  var main = first_child(fragment);
  var node = child(main);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment_1 = root_1$b();
      var node_1 = first_child(fragment_1);
      component$1(node_1, () => get$4(component), ($$anchor3, $$component) => {
        $$component($$anchor3, spread_props(() => route.params, {
          get params() {
            return route.params;
          }
        }));
      });
      var node_2 = sibling(node_1, 2);
      {
        var consequent = ($$anchor3) => {
          var div = root_2$8();
          append($$anchor3, div);
        };
        if_block(node_2, ($$render) => {
          if (get$4(is_404)) $$render(consequent);
        });
      }
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      if ($session().loaded) $$render(consequent_1);
    });
  }
  var node_3 = sibling(main, 2);
  Mode_watcher(node_3, {});
  var node_4 = sibling(node_3, 2);
  ConfirmDialog(node_4, {});
  var node_5 = sibling(node_4, 2);
  OfflineIndicator(node_5, {});
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
mount(App, { target: document.body });
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then((registration) => {
      registration.addEventListener("updatefound", () => {
        const new_worker = registration.installing;
        new_worker.addEventListener("statechange", () => {
          if (new_worker.state === "installed" && navigator.serviceWorker.controller) {
            if (confirm("إصدار جديد متاح! إعادة تحميل للتحديث؟"))
              window.location.reload();
          }
        });
      });
      window.addEventListener("online", () => {
        navigator.serviceWorker.ready.then((registration2) => {
          registration2.active.postMessage({ type: "SYNC_OFFLINE_DATA" });
        });
      });
    }).catch((error) => {
      console.error("ServiceWorker registration failed:", error);
    });
  });
}
if (window.__DEBUG__ && location.hostname !== "localhost") {
  onerror = (msg, url, ln, col, err) => {
    const loc = [(url || "").replace("https://", ""), ln || "", col || ""].join(":");
    alert([msg, loc, err ? err.stack : "<no stack>"]);
  };
  onunhandledrejection = (e) => {
    if (!(e && e.reason && e.reason.stack) || e.reason.stack.includes("TypeError: Failed to fetch"))
      return;
    alert(e.reason.stack);
  };
}
/**
 * @license @lucide/svelte v0.515.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var root$h = /* @__PURE__ */ from_svg(`<svg><!><!></svg>`);
function Icon($$anchor, $$props) {
  push($$props, true);
  const color = prop($$props, "color", 3, "currentColor"), size2 = prop($$props, "size", 3, 24), strokeWidth = prop($$props, "strokeWidth", 3, 2), absoluteStrokeWidth = prop($$props, "absoluteStrokeWidth", 3, false), iconNode = prop($$props, "iconNode", 19, () => []), props = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
    "children"
  ]);
  var svg = root$h();
  attribute_effect(
    svg,
    ($0) => ({
      ...defaultAttributes,
      ...props,
      width: size2(),
      height: size2(),
      stroke: color(),
      "stroke-width": $0,
      class: [
        "lucide-icon lucide",
        $$props.name && `lucide-${$$props.name}`,
        $$props.class
      ]
    }),
    [
      () => absoluteStrokeWidth() ? Number(strokeWidth()) * 24 / Number(size2()) : strokeWidth()
    ]
  );
  var node = child(svg);
  each(node, 17, iconNode, index, ($$anchor2, $$item) => {
    var $$array = /* @__PURE__ */ user_derived(() => to_array(get$4($$item), 2));
    let tag = () => get$4($$array)[0];
    let attrs = () => get$4($$array)[1];
    var fragment = comment();
    var node_1 = first_child(fragment);
    element(node_1, tag, true, ($$element, $$anchor3) => {
      attribute_effect($$element, () => ({ ...attrs() }));
    });
    append($$anchor2, fragment);
  });
  var node_2 = sibling(node);
  snippet(node_2, () => $$props.children ?? noop$1);
  append($$anchor, svg);
  pop();
}
function Arrow_left($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "m12 19-7-7 7-7" }],
    ["path", { "d": "M19 12H5" }]
  ];
  Icon($$anchor, spread_props({ name: "arrow-left" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Calculator($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "rect",
      {
        "width": "16",
        "height": "20",
        "x": "4",
        "y": "2",
        "rx": "2"
      }
    ],
    [
      "line",
      { "x1": "8", "x2": "16", "y1": "6", "y2": "6" }
    ],
    [
      "line",
      {
        "x1": "16",
        "x2": "16",
        "y1": "14",
        "y2": "18"
      }
    ],
    ["path", { "d": "M16 10h.01" }],
    ["path", { "d": "M12 10h.01" }],
    ["path", { "d": "M8 10h.01" }],
    ["path", { "d": "M12 14h.01" }],
    ["path", { "d": "M8 14h.01" }],
    ["path", { "d": "M12 18h.01" }],
    ["path", { "d": "M8 18h.01" }]
  ];
  Icon($$anchor, spread_props({ name: "calculator" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Check($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  Icon($$anchor, spread_props({ name: "check" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Circle_alert($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "8",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "12",
        "x2": "12.01",
        "y1": "16",
        "y2": "16"
      }
    ]
  ];
  Icon($$anchor, spread_props({ name: "circle-alert" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Copy($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "14",
        "x": "8",
        "y": "8",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      }
    ]
  ];
  Icon($$anchor, spread_props({ name: "copy" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Ellipsis_vertical($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "1" }
    ],
    ["circle", { "cx": "12", "cy": "5", "r": "1" }],
    [
      "circle",
      { "cx": "12", "cy": "19", "r": "1" }
    ]
  ];
  Icon($$anchor, spread_props({ name: "ellipsis-vertical" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Ellipsis($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "1" }
    ],
    [
      "circle",
      { "cx": "19", "cy": "12", "r": "1" }
    ],
    ["circle", { "cx": "5", "cy": "12", "r": "1" }]
  ];
  Icon($$anchor, spread_props({ name: "ellipsis" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function History($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
      }
    ],
    ["path", { "d": "M3 3v5h5" }],
    ["path", { "d": "M12 7v5l4 2" }]
  ];
  Icon($$anchor, spread_props({ name: "history" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Key($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
      }
    ],
    ["path", { "d": "m21 2-9.6 9.6" }],
    [
      "circle",
      { "cx": "7.5", "cy": "15.5", "r": "5.5" }
    ]
  ];
  Icon($$anchor, spread_props({ name: "key" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Log_out($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "m16 17 5-5-5-5" }],
    ["path", { "d": "M21 12H9" }],
    [
      "path",
      { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }
    ]
  ];
  Icon($$anchor, spread_props({ name: "log-out" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Minus($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [["path", { "d": "M5 12h14" }]];
  Icon($$anchor, spread_props({ name: "minus" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Moon($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      { "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" }
    ]
  ];
  Icon($$anchor, spread_props({ name: "moon" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Plus($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "M12 5v14" }]
  ];
  Icon($$anchor, spread_props({ name: "plus" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Rotate_ccw($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
      }
    ],
    ["path", { "d": "M3 3v5h5" }]
  ];
  Icon($$anchor, spread_props({ name: "rotate-ccw" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Settings($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "3" }
    ]
  ];
  Icon($$anchor, spread_props({ name: "settings" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Square_pen($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      }
    ],
    [
      "path",
      {
        "d": "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
      }
    ]
  ];
  Icon($$anchor, spread_props({ name: "square-pen" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Sun($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "4" }
    ],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  Icon($$anchor, spread_props({ name: "sun" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Trash_2($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    [
      "path",
      { "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }
    ],
    [
      "path",
      { "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "10",
        "y1": "11",
        "y2": "17"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "14",
        "y1": "11",
        "y2": "17"
      }
    ]
  ];
  Icon($$anchor, spread_props({ name: "trash-2" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function Users($$anchor, $$props) {
  push($$props, true);
  let props = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy"]);
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    [
      "path",
      { "d": "M16 3.128a4 4 0 0 1 0 7.744" }
    ],
    ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }],
    ["circle", { "cx": "9", "cy": "7", "r": "4" }]
  ];
  Icon($$anchor, spread_props({ name: "users" }, () => props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children ?? noop$1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
  pop();
}
function validate_family_name(name) {
  if (!name || typeof name !== "string") return false;
  const trimmed = name.trim();
  return trimmed.length >= 2 && trimmed.length <= 60;
}
function validate_child_name(name) {
  if (!name || typeof name !== "string") return false;
  const trimmed = name.trim();
  return trimmed.length >= 1 && trimmed.length <= 40;
}
function validate_score_delta(delta) {
  return Number.isInteger(delta) && delta >= -999 && delta <= 999;
}
function format_join_code_display(code) {
  return code;
}
const alertVariants = ce({
  base: "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      destructive: "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current"
    }
  },
  defaultVariants: { variant: "default" }
});
var root$g = /* @__PURE__ */ from_html(`<div><!></div>`);
function Alert($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), variant = prop(
    $$props,
    "variant",
    3,
    /** @type {AlertVariant} */
    "default"
  ), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "variant",
    "children"
  ]);
  var div = root$g();
  attribute_effect(
    div,
    ($0) => ({
      "data-slot": "alert",
      class: $0,
      ...restProps,
      role: "alert"
    }),
    [
      () => cn(alertVariants({ variant: variant() }), $$props.class)
    ]
  );
  var node = child(div);
  snippet(node, () => $$props.children ?? noop$1);
  bind_this(div, ($$value) => ref($$value), () => ref());
  append($$anchor, div);
  pop();
}
var root$f = /* @__PURE__ */ from_html(`<div><!></div>`);
function Alert_description($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), className = prop($$props, "class", 3, ""), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var div = root$f();
  attribute_effect(
    div,
    ($0) => ({
      "data-slot": "alert-description",
      class: $0,
      ...restProps
    }),
    [
      () => cn("col-start-2 grid justify-items-start gap-1 text-sm text-muted-foreground [&_p]:leading-relaxed", className())
    ]
  );
  var node = child(div);
  snippet(node, () => $$props.children ?? noop$1);
  bind_this(div, ($$value) => ref($$value), () => ref());
  append($$anchor, div);
  pop();
}
var root_1$a = /* @__PURE__ */ from_html(`<input/>`);
var root_2$7 = /* @__PURE__ */ from_html(`<input/>`);
function Input($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), value = prop($$props, "value", 15), type = prop($$props, "type", 3, ""), files = prop($$props, "files", 15), className = prop($$props, "class", 3, ""), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "value",
    "type",
    "files",
    "class"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var input = root_1$a();
      attribute_effect(
        input,
        ($0) => ({
          "data-slot": "input",
          class: $0,
          type: "file",
          ...restProps
        }),
        [
          () => cn("flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 pt-1.5 text-sm font-medium shadow-xs ring-offset-background transition-[color,box-shadow,border-color] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground hover:border-border/80 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:bg-background focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", className())
        ]
      );
      bind_this(input, ($$value) => ref($$value), () => ref());
      bind_files(input, files);
      bind_value(input, value);
      append($$anchor2, input);
    };
    var alternate = ($$anchor2) => {
      var input_1 = root_2$7();
      attribute_effect(
        input_1,
        ($0) => ({
          "data-slot": "input",
          class: $0,
          type: type(),
          ...restProps
        }),
        [
          () => cn("flex h-9 w-full min-w-0 rounded-md border border-input bg-background px-3 py-1 text-base shadow-xs ring-offset-background transition-[color,box-shadow,border-color] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground hover:border-border/80 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:bg-background focus-visible:ring-[3px] focus-visible:ring-ring/50", "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40", className())
        ]
      );
      bind_this(input_1, ($$value) => ref($$value), () => ref());
      bind_value(input_1, value);
      append($$anchor2, input_1);
    };
    if_block(node, ($$render) => {
      if (type() === "file") $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
  pop();
}
function Label($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), className = prop($$props, "class", 3, ""), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn("flex items-center gap-2 text-sm leading-none font-medium text-foreground select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className()));
  component$1(node, () => Label$1, ($$anchor2, LabelPrimitive_Root) => {
    LabelPrimitive_Root($$anchor2, spread_props(
      {
        "data-slot": "label",
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
var root_1$9 = /* @__PURE__ */ from_html(`<div class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-muted border-t-primary"></div>`);
var root_3$4 = /* @__PURE__ */ from_html(`<p class="text-sm text-muted-foreground"> </p>`);
var root_2$6 = /* @__PURE__ */ from_html(`<div class="flex flex-col items-center justify-center gap-3"><div></div> <!></div>`);
function Spinner($$anchor, $$props) {
  let size2 = prop($$props, "size", 3, "md"), text2 = prop($$props, "text", 3, "جاري التحميل...");
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12"
  };
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$9();
      append($$anchor2, div);
    };
    var alternate = ($$anchor2) => {
      var div_1 = root_2$6();
      var div_2 = child(div_1);
      var node_1 = sibling(div_2, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var p2 = root_3$4();
          var text_1 = child(p2);
          template_effect(() => set_text(text_1, text2()));
          append($$anchor3, p2);
        };
        if_block(node_1, ($$render) => {
          if (text2()) $$render(consequent_1);
        });
      }
      template_effect(() => set_class(div_2, 1, `animate-spin rounded-full border-2 border-muted border-t-primary ${sizes[size2()] ?? ""}`));
      append($$anchor2, div_1);
    };
    if_block(node, ($$render) => {
      if (size2() === "small") $$render(consequent);
      else $$render(alternate, false);
    });
  }
  append($$anchor, fragment);
}
var root_2$5 = /* @__PURE__ */ from_html(`<p class="mt-1 text-xs text-red-600"> </p>`);
var root_6$3 = /* @__PURE__ */ from_html(`<!> `, 1);
var root_7$2 = /* @__PURE__ */ from_html(`<!> `, 1);
var root$e = /* @__PURE__ */ from_html(`<form><div class="space-y-4"><div><!> <!> <!></div> <div class="flex justify-end gap-3"><!> <!></div> <!></div></form>`);
function NameForm($$anchor, $$props) {
  push($$props, true);
  let name = prop($$props, "name", 15, ""), is_unchanged = prop($$props, "is_unchanged", 3, false), loading = prop($$props, "loading", 11, false), error = prop($$props, "error", 11, ""), show_cancel = prop($$props, "show_cancel", 3, false), full_width = prop($$props, "full_width", 3, false), icon = prop($$props, "icon", 3, void 0), on_cancel = prop($$props, "on_cancel", 3, void 0);
  async function handle_submit(e) {
    var _a2;
    e.preventDefault();
    if (!$$props.is_valid || is_unchanged()) return;
    await ((_a2 = $$props.on_submit) == null ? void 0 : _a2.call($$props, e));
  }
  var form = root$e();
  var div = child(form);
  var div_1 = child(div);
  var node = child(div_1);
  Label(node, {
    get for() {
      return $$props.field_id;
    },
    children: ($$anchor2, $$slotProps) => {
      var text$1 = text();
      template_effect(() => set_text(text$1, $$props.label));
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Input(node_1, {
    get id() {
      return $$props.field_id;
    },
    get placeholder() {
      return $$props.placeholder;
    },
    get maxlength() {
      return $$props.max_length;
    },
    required: true,
    class: "mt-1",
    get value() {
      return name();
    },
    set value($$value) {
      name($$value);
    }
  });
  var node_2 = sibling(node_1, 2);
  {
    var consequent = ($$anchor2) => {
      var p2 = root_2$5();
      var text_1 = child(p2);
      template_effect(() => set_text(text_1, $$props.validation_message));
      append($$anchor2, p2);
    };
    if_block(node_2, ($$render) => {
      if (name() && !$$props.is_valid) $$render(consequent);
    });
  }
  var div_2 = sibling(div_1, 2);
  var node_3 = child(div_2);
  {
    var consequent_1 = ($$anchor2) => {
      Button($$anchor2, {
        type: "button",
        variant: "outline",
        get onclick() {
          return on_cancel();
        },
        children: ($$anchor3, $$slotProps) => {
          var text_2 = text("إلغاء");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
    };
    if_block(node_3, ($$render) => {
      if (show_cancel()) $$render(consequent_1);
    });
  }
  var node_4 = sibling(node_3, 2);
  const expression = /* @__PURE__ */ user_derived(() => loading() || !$$props.is_valid || is_unchanged());
  const expression_1 = /* @__PURE__ */ user_derived(() => full_width() ? "w-full text-white hover:text-black dark:text-white" : "");
  Button(node_4, {
    type: "submit",
    variant: "destructive",
    get disabled() {
      return get$4(expression);
    },
    get class() {
      return get$4(expression_1);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_2 = comment();
      var node_5 = first_child(fragment_2);
      {
        var consequent_2 = ($$anchor3) => {
          var fragment_3 = root_6$3();
          var node_6 = first_child(fragment_3);
          Spinner(node_6, { size: "small" });
          var text_3 = sibling(node_6);
          template_effect(() => set_text(text_3, ` ${$$props.loading_text ?? ""}`));
          append($$anchor3, fragment_3);
        };
        var alternate = ($$anchor3) => {
          var fragment_4 = root_7$2();
          var node_7 = first_child(fragment_4);
          {
            var consequent_3 = ($$anchor4) => {
              var fragment_5 = comment();
              const IconComponent = /* @__PURE__ */ user_derived(icon);
              var node_8 = first_child(fragment_5);
              component$1(node_8, () => get$4(IconComponent), ($$anchor5, IconComponent_1) => {
                IconComponent_1($$anchor5, { class: "mr-2 h-4 w-4" });
              });
              append($$anchor4, fragment_5);
            };
            if_block(node_7, ($$render) => {
              if (icon()) $$render(consequent_3);
            });
          }
          var text_4 = sibling(node_7);
          template_effect(() => set_text(text_4, ` ${$$props.submit_text ?? ""}`));
          append($$anchor3, fragment_4);
        };
        if_block(node_5, ($$render) => {
          if (loading()) $$render(consequent_2);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment_2);
    },
    $$slots: { default: true }
  });
  var node_9 = sibling(div_2, 2);
  {
    var consequent_4 = ($$anchor2) => {
      Alert($$anchor2, {
        variant: "destructive",
        children: ($$anchor3, $$slotProps) => {
          Alert_description($$anchor3, {
            children: ($$anchor4, $$slotProps2) => {
              var text_5 = text();
              template_effect(() => set_text(text_5, error()));
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
    };
    if_block(node_9, ($$render) => {
      if (error()) $$render(consequent_4);
    });
  }
  event("submit", form, handle_submit);
  append($$anchor, form);
  pop();
}
function CreateFamilyForm($$anchor, $$props) {
  push($$props, true);
  const router2 = getContext("router");
  let name = /* @__PURE__ */ state("");
  let loading = /* @__PURE__ */ state(false);
  let error = /* @__PURE__ */ state("");
  let is_valid_name = /* @__PURE__ */ user_derived(() => validate_family_name(get$4(name)));
  async function handle_submit(e) {
    e.preventDefault();
    if (!get$4(is_valid_name)) return;
    set$1(loading, true);
    set$1(error, "");
    await family_actions.create_family(get$4(name).trim());
    router2.route("/family");
    set$1(loading, false);
  }
  NameForm($$anchor, {
    label: "اسم العائلة",
    placeholder: "أدخل اسم عائلتك",
    field_id: "family-name",
    max_length: 60,
    validation_message: "يجب أن يكون اسم العائلة بين 2-60 حرف",
    get is_valid() {
      return get$4(is_valid_name);
    },
    submit_text: "إنشاء العائلة",
    loading_text: "جاري الإنشاء...",
    full_width: true,
    get icon() {
      return Users;
    },
    on_submit: handle_submit,
    get name() {
      return get$4(name);
    },
    set name($$value) {
      set$1(name, $$value, true);
    },
    get loading() {
      return get$4(loading);
    },
    set loading($$value) {
      set$1(loading, $$value, true);
    },
    get error() {
      return get$4(error);
    },
    set error($$value) {
      set$1(error, $$value, true);
    }
  });
  pop();
}
var root_3$3 = /* @__PURE__ */ from_html(`<!> `, 1);
var root_4$4 = /* @__PURE__ */ from_html(`<!> `, 1);
var root$d = /* @__PURE__ */ from_html(`<form><div class="space-y-4"><div><!> <!></div> <!> <!></div></form>`);
function CodeForm($$anchor, $$props) {
  push($$props, true);
  let code = prop($$props, "code", 15, ""), loading = prop($$props, "loading", 11, false), error = prop($$props, "error", 11, ""), icon = prop($$props, "icon", 3, void 0);
  async function handle_submit(e) {
    var _a2;
    e.preventDefault();
    if (!code().trim()) return;
    await ((_a2 = $$props.on_submit) == null ? void 0 : _a2.call($$props, e));
  }
  var form = root$d();
  var div = child(form);
  var div_1 = child(div);
  var node = child(div_1);
  Label(node, {
    get for() {
      return $$props.field_id;
    },
    children: ($$anchor2, $$slotProps) => {
      var text$1 = text();
      template_effect(() => set_text(text$1, $$props.label));
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Input(node_1, {
    get id() {
      return $$props.field_id;
    },
    get placeholder() {
      return $$props.placeholder;
    },
    get maxlength() {
      return $$props.max_length;
    },
    required: true,
    class: "mt-1",
    get value() {
      return code();
    },
    set value($$value) {
      code($$value);
    }
  });
  var node_2 = sibling(div_1, 2);
  const expression = /* @__PURE__ */ user_derived(() => loading() || !code().trim());
  Button(node_2, {
    type: "submit",
    variant: "destructive",
    class: "w-full text-white hover:text-black dark:text-white",
    get disabled() {
      return get$4(expression);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node_3 = first_child(fragment_1);
      {
        var consequent = ($$anchor3) => {
          var fragment_2 = root_3$3();
          var node_4 = first_child(fragment_2);
          Spinner(node_4, { size: "small" });
          var text_1 = sibling(node_4);
          template_effect(() => set_text(text_1, ` ${$$props.loading_text ?? ""}`));
          append($$anchor3, fragment_2);
        };
        var alternate = ($$anchor3) => {
          var fragment_3 = root_4$4();
          var node_5 = first_child(fragment_3);
          {
            var consequent_1 = ($$anchor4) => {
              var fragment_4 = comment();
              const IconComponent = /* @__PURE__ */ user_derived(icon);
              var node_6 = first_child(fragment_4);
              component$1(node_6, () => get$4(IconComponent), ($$anchor5, IconComponent_1) => {
                IconComponent_1($$anchor5, { class: "mr-2 h-4 w-4" });
              });
              append($$anchor4, fragment_4);
            };
            if_block(node_5, ($$render) => {
              if (icon()) $$render(consequent_1);
            });
          }
          var text_2 = sibling(node_5);
          template_effect(() => set_text(text_2, ` ${$$props.submit_text ?? ""}`));
          append($$anchor3, fragment_3);
        };
        if_block(node_3, ($$render) => {
          if (loading()) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_7 = sibling(node_2, 2);
  {
    var consequent_2 = ($$anchor2) => {
      Alert($$anchor2, {
        variant: "destructive",
        children: ($$anchor3, $$slotProps) => {
          Alert_description($$anchor3, {
            children: ($$anchor4, $$slotProps2) => {
              var text_3 = text();
              template_effect(() => set_text(text_3, error()));
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
    };
    if_block(node_7, ($$render) => {
      if (error()) $$render(consequent_2);
    });
  }
  event("submit", form, handle_submit);
  append($$anchor, form);
  pop();
}
function JoinFamilyForm($$anchor, $$props) {
  push($$props, true);
  const router2 = getContext("router");
  let code = /* @__PURE__ */ state("");
  let loading = /* @__PURE__ */ state(false);
  let error = /* @__PURE__ */ state("");
  async function handle_submit(e) {
    e.preventDefault();
    if (!get$4(code).trim()) {
      set$1(error, "يرجى إدخال رمز الانضمام");
      return;
    }
    set$1(loading, true);
    set$1(error, "");
    try {
      await family_actions.join_family(get$4(code).trim().toUpperCase());
      router2.route("/family");
    } catch (err) {
      if ((err == null ? void 0 : err.status) === 404) set$1(error, "لم يتم العثور على العائلة. يرجى التحقق من رمز الانضمام.");
      else set$1(error, (err == null ? void 0 : err.message) || "حدث خطأ أثناء محاولة الانضمام", true);
    } finally {
      set$1(loading, false);
    }
  }
  CodeForm($$anchor, {
    label: "رمز الانضمام",
    placeholder: "أدخل رمز الانضمام المكون من 6 أحرف",
    field_id: "join-code",
    max_length: 6,
    submit_text: "انضم للعائلة",
    loading_text: "جاري الانضمام...",
    get icon() {
      return Key;
    },
    on_submit: handle_submit,
    get code() {
      return get$4(code);
    },
    set code($$value) {
      set$1(code, $$value, true);
    },
    get loading() {
      return get$4(loading);
    },
    set loading($$value) {
      set$1(loading, $$value, true);
    },
    get error() {
      return get$4(error);
    },
    set error($$value) {
      set$1(error, $$value, true);
    }
  });
  pop();
}
function Tabs($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), value = prop($$props, "value", 15, ""), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "value",
    "class"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn("flex flex-col gap-2", $$props.class));
  component$1(node, () => Tabs$1, ($$anchor2, TabsPrimitive_Root) => {
    TabsPrimitive_Root($$anchor2, spread_props(
      {
        "data-slot": "tabs",
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        },
        get value() {
          return value();
        },
        set value($$value) {
          value($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
function Tabs_content($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), value = prop($$props, "value", 3, ""), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "value",
    "class"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn("flex-1 outline-none", $$props.class));
  component$1(node, () => Tabs_content$1, ($$anchor2, TabsPrimitive_Content) => {
    TabsPrimitive_Content($$anchor2, spread_props(
      {
        get value() {
          return value();
        },
        "data-slot": "tabs-content",
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
function Tabs_list($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn("inline-flex h-9 w-fit items-center justify-center rounded-lg border border-border bg-muted p-[3px]", $$props.class));
  component$1(node, () => Tabs_list$1, ($$anchor2, TabsPrimitive_List) => {
    TabsPrimitive_List($$anchor2, spread_props(
      {
        "data-slot": "tabs-list",
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
function Tabs_trigger($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), value = prop($$props, "value", 3, ""), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "value",
    "class"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn("inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-muted-foreground transition-[color,box-shadow,background-color] hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", $$props.class));
  component$1(node, () => Tabs_trigger$1, ($$anchor2, TabsPrimitive_Trigger) => {
    TabsPrimitive_Trigger($$anchor2, spread_props(
      {
        get value() {
          return value();
        },
        "data-slot": "tabs-trigger",
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
var root_2$4 = /* @__PURE__ */ from_html(`<!> <!>`, 1);
var root_1$8 = /* @__PURE__ */ from_html(`<!> <!> <!>`, 1);
var root$c = /* @__PURE__ */ from_html(`<div class="flex min-h-[100svh] items-center justify-center bg-gradient-to-br from-muted to-background p-4"><div class="w-full max-w-md"><div class="mb-8 text-center"><h1 class="mb-2 text-3xl font-bold text-foreground">نظام نقاط الأطفال</h1> <p class="text-muted-foreground">أنشئ عائلة جديدة أو انضم إلى عائلة موجودة</p></div> <div class="rounded-xl border-2 border-border bg-card p-6 shadow-2xl"><!></div></div></div>`);
function GetStarted($$anchor) {
  var div = root$c();
  var div_1 = child(div);
  var div_2 = sibling(child(div_1), 2);
  var node = child(div_2);
  Tabs(node, {
    value: "create",
    class: "w-full",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$8();
      var node_1 = first_child(fragment);
      Tabs_list(node_1, {
        class: "grid w-full grid-cols-2",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2$4();
          var node_2 = first_child(fragment_1);
          Tabs_trigger(node_2, {
            value: "create",
            class: "",
            children: ($$anchor4, $$slotProps3) => {
              var text$1 = text("إنشاء عائلة");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_3 = sibling(node_2, 2);
          Tabs_trigger(node_3, {
            value: "join",
            class: "",
            children: ($$anchor4, $$slotProps3) => {
              var text_1 = text("انضم لعائلة");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_1, 2);
      Tabs_content(node_4, {
        value: "create",
        class: "mt-6",
        children: ($$anchor3, $$slotProps2) => {
          CreateFamilyForm($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      Tabs_content(node_5, {
        value: "join",
        class: "mt-6",
        children: ($$anchor3, $$slotProps2) => {
          JoinFamilyForm($$anchor3, {});
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  append($$anchor, div);
}
const GetStarted$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: GetStarted
}, Symbol.toStringTag, { value: "Module" }));
var root$b = /* @__PURE__ */ from_html(`<div><!></div>`);
function Card($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var div = root$b();
  attribute_effect(div, ($0) => ({ "data-slot": "card", class: $0, ...restProps }), [
    () => cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", $$props.class)
  ]);
  var node = child(div);
  snippet(node, () => $$props.children ?? noop$1);
  bind_this(div, ($$value) => ref($$value), () => ref());
  append($$anchor, div);
  pop();
}
var root$a = /* @__PURE__ */ from_html(`<div><!></div>`);
function Card_content($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var div = root$a();
  attribute_effect(
    div,
    ($0) => ({
      "data-slot": "card-content",
      class: $0,
      ...restProps
    }),
    [() => cn("px-6", $$props.class)]
  );
  var node = child(div);
  snippet(node, () => $$props.children ?? noop$1);
  bind_this(div, ($$value) => ref($$value), () => ref());
  append($$anchor, div);
  pop();
}
var root$9 = /* @__PURE__ */ from_html(`<p><!></p>`);
function Card_description($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var p2 = root$9();
  attribute_effect(
    p2,
    ($0) => ({
      "data-slot": "card-description",
      class: $0,
      ...restProps
    }),
    [
      () => cn("text-muted-foreground text-sm", $$props.class)
    ]
  );
  var node = child(p2);
  snippet(node, () => $$props.children ?? noop$1);
  bind_this(p2, ($$value) => ref($$value), () => ref());
  append($$anchor, p2);
  pop();
}
var root$8 = /* @__PURE__ */ from_html(`<div><!></div>`);
function Card_header($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var div = root$8();
  attribute_effect(
    div,
    ($0) => ({
      "data-slot": "card-header",
      class: $0,
      ...restProps
    }),
    [
      () => cn("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", $$props.class)
    ]
  );
  var node = child(div);
  snippet(node, () => $$props.children ?? noop$1);
  bind_this(div, ($$value) => ref($$value), () => ref());
  append($$anchor, div);
  pop();
}
var root$7 = /* @__PURE__ */ from_html(`<div><!></div>`);
function Card_title($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "children"
  ]);
  var div = root$7();
  attribute_effect(
    div,
    ($0) => ({
      "data-slot": "card-title",
      class: $0,
      ...restProps
    }),
    [
      () => cn("leading-none font-semibold", $$props.class)
    ]
  );
  var node = child(div);
  snippet(node, () => $$props.children ?? noop$1);
  bind_this(div, ($$value) => ref($$value), () => ref());
  append($$anchor, div);
  pop();
}
var root_2$3 = /* @__PURE__ */ from_html(`<!> <!>`, 1);
var root_9$1 = /* @__PURE__ */ from_html(`<!> العودة للصفحة الرئيسية`, 1);
var root_8$3 = /* @__PURE__ */ from_html(`<div class="space-y-4"><div class="flex justify-center"><!></div> <p class="text-red-600"> </p> <!></div>`);
var root_1$7 = /* @__PURE__ */ from_html(`<!> <!>`, 1);
var root$6 = /* @__PURE__ */ from_html(`<div class="flex min-h-[100svh] items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4"><div class="w-full max-w-md"><div class="mb-8 text-center"><h1 class="mb-2 text-3xl font-bold text-gray-900">انضم لعائلة</h1> <p class="text-gray-600">انضم إلى عائلة موجودة باستخدام رمز الانضمام</p></div> <!></div></div>`);
function JoinFamily($$anchor, $$props) {
  push($$props, false);
  const router2 = getContext("router");
  let code = prop($$props, "code", 8, "");
  let loading = /* @__PURE__ */ mutable_source(true);
  let error = /* @__PURE__ */ mutable_source(null);
  onMount(async () => {
    if (!code()) {
      set$1(error, "رمز الانضمام مطلوب");
      set$1(loading, false);
      return;
    }
    await family_actions.join_family(code().toUpperCase());
    router2.route("/family");
    set$1(loading, false);
  });
  function go_back() {
    router2.route("/");
  }
  init();
  var div = root$6();
  var div_1 = child(div);
  var node = sibling(child(div_1), 2);
  Card(node, {
    class: "",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$7();
      var node_1 = first_child(fragment);
      Card_header(node_1, {
        class: "text-center",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2$3();
          var node_2 = first_child(fragment_1);
          Card_title(node_2, {
            class: "",
            children: ($$anchor4, $$slotProps3) => {
              var text$1 = text();
              template_effect(() => set_text(text$1, `رمز الانضمام: ${code() ?? ""}`));
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_3 = sibling(node_2, 2);
          Card_description(node_3, {
            class: "",
            children: ($$anchor4, $$slotProps3) => {
              var text_1 = text("جاري الانضمام للعائلة...");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_1, 2);
      Card_content(node_4, {
        class: "text-center",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = comment();
          var node_5 = first_child(fragment_3);
          {
            var consequent = ($$anchor4) => {
              Spinner($$anchor4, { size: "lg", text: "جاري الانضمام للعائلة..." });
            };
            var alternate = ($$anchor4, $$elseif) => {
              {
                var consequent_1 = ($$anchor5) => {
                  var div_2 = root_8$3();
                  var div_3 = child(div_2);
                  var node_6 = child(div_3);
                  Circle_alert(node_6, { class: "h-12 w-12 text-red-500" });
                  var p2 = sibling(div_3, 2);
                  var text_2 = child(p2);
                  var node_7 = sibling(p2, 2);
                  Button(node_7, {
                    onclick: go_back,
                    class: "w-full",
                    children: ($$anchor6, $$slotProps3) => {
                      var fragment_5 = root_9$1();
                      var node_8 = first_child(fragment_5);
                      Arrow_left(node_8, { class: "mr-2 h-4 w-4" });
                      append($$anchor6, fragment_5);
                    },
                    $$slots: { default: true }
                  });
                  template_effect(() => set_text(text_2, get$4(error)));
                  append($$anchor5, div_2);
                };
                if_block(
                  $$anchor4,
                  ($$render) => {
                    if (get$4(error)) $$render(consequent_1);
                  },
                  $$elseif
                );
              }
            };
            if_block(node_5, ($$render) => {
              if (get$4(loading)) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  append($$anchor, div);
  pop();
}
const JoinFamily$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JoinFamily
}, Symbol.toStringTag, { value: "Module" }));
function handle_keydown$4(e, close_modal) {
  if (e.key === "Escape") close_modal();
}
var root_4$3 = /* @__PURE__ */ from_html(`<div class="text-sm text-gray-600 dark:text-gray-300"> </div>`);
var root_3$2 = /* @__PURE__ */ from_html(`<div class="flex items-center justify-between rounded-lg bg-muted p-3"><div class="flex items-center gap-3"><div> </div> <div><div class="font-medium text-card-foreground"> </div> <!> <div class="text-xs text-gray-500 dark:text-gray-400"> </div></div></div></div>`);
var root_5$2 = /* @__PURE__ */ from_html(`<div class="text-center py-8 text-gray-500 dark:text-gray-400">لا يوجد سجل بعد</div>`);
var root_1$6 = /* @__PURE__ */ from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="fixed inset-0 bg-black/50" role="button" tabindex="-1"></div> <div class="relative flex max-h-[80vh] w-full max-w-2xl flex-col rounded-lg bg-card p-6 shadow-xl"><div class="mb-4"><h3 class="text-lg font-semibold text-card-foreground">سجل العائلة</h3> <p class="text-sm text-muted-foreground">اخر تعديلات النقاط لجميع الأطفال</p></div> <div class="flex-1 space-y-3 overflow-y-auto"></div> <div class="mt-6 flex justify-end border-t pt-4 dark:border-gray-700"><!></div></div></div>`);
function HistoryDrawer($$anchor, $$props) {
  push($$props, false);
  const [$$stores, $$cleanup] = setup_stores();
  const $ui_store = () => store_get(ui_store, "$ui_store", $$stores);
  const $family_store = () => store_get(family_store, "$family_store", $$stores);
  function close_modal() {
    ui_actions.set_active_modal(null);
  }
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_2 = ($$anchor2) => {
      var div = root_1$6();
      var div_1 = child(div);
      div_1.__click = close_modal;
      div_1.__keydown = [handle_keydown$4, close_modal];
      var div_2 = sibling(div_1, 2);
      var div_3 = sibling(child(div_2), 2);
      each(
        div_3,
        5,
        () => ($family_store(), untrack(() => $family_store().recent_adjustments)),
        (adjustment) => adjustment.id,
        ($$anchor3, adjustment) => {
          var fragment_1 = comment();
          const child$1 = /* @__PURE__ */ derived_safe_equal(() => ($family_store(), get$4(adjustment), untrack(() => $family_store().children.find((c) => c.id === get$4(adjustment).child_id))));
          var node_1 = first_child(fragment_1);
          {
            var consequent_1 = ($$anchor4) => {
              var div_4 = root_3$2();
              var div_5 = child(div_4);
              var div_6 = child(div_5);
              let classes;
              var text2 = child(div_6);
              var div_7 = sibling(div_6, 2);
              var div_8 = child(div_7);
              var text_1 = child(div_8);
              var node_2 = sibling(div_8, 2);
              {
                var consequent = ($$anchor5) => {
                  var div_9 = root_4$3();
                  var text_2 = child(div_9);
                  template_effect(() => set_text(text_2, (get$4(adjustment), untrack(() => get$4(adjustment).note))));
                  append($$anchor5, div_9);
                };
                if_block(node_2, ($$render) => {
                  if (get$4(adjustment), untrack(() => get$4(adjustment).note)) $$render(consequent);
                });
              }
              var div_10 = sibling(node_2, 2);
              var text_3 = child(div_10);
              template_effect(
                ($0, $1) => {
                  classes = set_class(div_6, 1, "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold", null, classes, $0);
                  set_text(text2, `${(get$4(adjustment), untrack(() => get$4(adjustment).delta > 0 ? "+" : "")) ?? ""}${(get$4(adjustment), untrack(() => get$4(adjustment).delta)) ?? ""}`);
                  set_text(text_1, (deep_read_state(get$4(child$1)), untrack(() => get$4(child$1).name)));
                  set_text(text_3, $1);
                },
                [
                  () => ({
                    "bg-green-100": get$4(adjustment).delta > 0,
                    "text-green-800": get$4(adjustment).delta > 0,
                    "bg-red-100": get$4(adjustment).delta < 0,
                    "text-red-800": get$4(adjustment).delta < 0
                  }),
                  () => (deep_read_state(format_arabic_date), get$4(adjustment), untrack(() => format_arabic_date(get$4(adjustment).created_at)))
                ],
                derived_safe_equal
              );
              append($$anchor4, div_4);
            };
            if_block(node_1, ($$render) => {
              if (get$4(child$1)) $$render(consequent_1);
            });
          }
          append($$anchor3, fragment_1);
        },
        ($$anchor3) => {
          var div_11 = root_5$2();
          append($$anchor3, div_11);
        }
      );
      var div_12 = sibling(div_3, 2);
      var node_3 = child(div_12);
      Button(node_3, {
        variant: "outline",
        onclick: close_modal,
        children: ($$anchor3, $$slotProps) => {
          var text_4 = text("إغلاق");
          append($$anchor3, text_4);
        },
        $$slots: { default: true }
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($ui_store(), untrack(() => $ui_store().active_modal === "history")) $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
delegate(["click", "keydown"]);
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function flip(node, { from, to }, params = {}) {
  var { delay = 0, duration = (d) => Math.sqrt(d) * 120, easing = cubicOut } = params;
  var style = getComputedStyle(node);
  var transform = style.transform === "none" ? "" : style.transform;
  var [ox, oy] = style.transformOrigin.split(" ").map(parseFloat);
  ox /= node.clientWidth;
  oy /= node.clientHeight;
  var zoom = get_zoom(node);
  var sx = node.clientWidth / to.width / zoom;
  var sy = node.clientHeight / to.height / zoom;
  var fx = from.left + from.width * ox;
  var fy = from.top + from.height * oy;
  var tx = to.left + to.width * ox;
  var ty = to.top + to.height * oy;
  var dx = (fx - tx) * sx;
  var dy = (fy - ty) * sy;
  var dsx = from.width / to.width;
  var dsy = from.height / to.height;
  return {
    delay,
    duration: typeof duration === "function" ? duration(Math.sqrt(dx * dx + dy * dy)) : duration,
    easing,
    css: (t, u2) => {
      var x2 = u2 * dx;
      var y2 = u2 * dy;
      var sx2 = t + u2 * dsx;
      var sy2 = t + u2 * dsy;
      return `transform: ${transform} translate(${x2}px, ${y2}px) scale(${sx2}, ${sy2});`;
    }
  };
}
function get_zoom(element2) {
  if ("currentCSSZoom" in element2) {
    return (
      /** @type {number} */
      element2.currentCSSZoom
    );
  }
  var current = element2;
  var zoom = 1;
  while (current !== null) {
    zoom *= +getComputedStyle(current).zoom;
    current = /** @type {Element | null} */
    current.parentElement;
  }
  return zoom;
}
function Dropdown_menu_content($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), sideOffset = prop($$props, "sideOffset", 3, 4), className = prop($$props, "class", 3, ""), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "sideOffset",
    "portalProps",
    "class"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  component$1(node, () => Portal, ($$anchor2, DropdownMenuPrimitive_Portal) => {
    DropdownMenuPrimitive_Portal($$anchor2, spread_props(() => $$props.portalProps, {
      children: ($$anchor3, $$slotProps) => {
        var fragment_1 = comment();
        var node_1 = first_child(fragment_1);
        const expression = /* @__PURE__ */ user_derived(() => cn("z-50 max-h-(--bits-dropdown-menu-content-available-height) min-w-[8rem] origin-(--bits-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", className()));
        component$1(node_1, () => Dropdown_menu_content$1, ($$anchor4, DropdownMenuPrimitive_Content) => {
          DropdownMenuPrimitive_Content($$anchor4, spread_props(
            {
              "data-slot": "dropdown-menu-content",
              get sideOffset() {
                return sideOffset();
              },
              get class() {
                return get$4(expression);
              }
            },
            () => restProps,
            {
              get ref() {
                return ref();
              },
              set ref($$value) {
                ref($$value);
              }
            }
          ));
        });
        append($$anchor3, fragment_1);
      },
      $$slots: { default: true }
    }));
  });
  append($$anchor, fragment);
  pop();
}
function Dropdown_menu_item($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), className = prop($$props, "class", 3, ""), variant = prop($$props, "variant", 3, "default"), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class",
    "inset",
    "variant"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn("relative flex cursor-default items-center justify-end gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:data-highlighted:bg-destructive/10 data-[variant=destructive]:data-highlighted:text-destructive dark:data-[variant=destructive]:data-highlighted:bg-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:!text-destructive", className()));
  component$1(node, () => Menu_item, ($$anchor2, DropdownMenuPrimitive_Item) => {
    DropdownMenuPrimitive_Item($$anchor2, spread_props(
      {
        "data-slot": "dropdown-menu-item",
        get "data-inset"() {
          return $$props.inset;
        },
        get "data-variant"() {
          return variant();
        },
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
function Dropdown_menu_separator($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), className = prop($$props, "class", 3, ""), restProps = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "ref",
    "class"
  ]);
  var fragment = comment();
  var node = first_child(fragment);
  const expression = /* @__PURE__ */ user_derived(() => cn("-mx-1 my-1 h-px bg-border", className()));
  component$1(node, () => Menu_separator, ($$anchor2, DropdownMenuPrimitive_Separator) => {
    DropdownMenuPrimitive_Separator($$anchor2, spread_props(
      {
        "data-slot": "dropdown-menu-separator",
        get class() {
          return get$4(expression);
        }
      },
      () => restProps,
      {
        get ref() {
          return ref();
        },
        set ref($$value) {
          ref($$value);
        }
      }
    ));
  });
  append($$anchor, fragment);
  pop();
}
function Dropdown_menu_trigger($$anchor, $$props) {
  push($$props, true);
  let ref = prop($$props, "ref", 15, null), restProps = /* @__PURE__ */ rest_props($$props, ["$$slots", "$$events", "$$legacy", "ref"]);
  var fragment = comment();
  var node = first_child(fragment);
  component$1(node, () => Menu_trigger, ($$anchor2, DropdownMenuPrimitive_Trigger) => {
    DropdownMenuPrimitive_Trigger($$anchor2, spread_props({ "data-slot": "dropdown-menu-trigger" }, () => restProps, {
      get ref() {
        return ref();
      },
      set ref($$value) {
        ref($$value);
      }
    }));
  });
  append($$anchor, fragment);
  pop();
}
const Root = Menu;
function repeat_click(el, callback) {
  var _a2;
  let repeat_interval;
  let click_count = 0;
  function click_wrapper(e) {
    var _a3;
    cleanup();
    if ((_a3 = window._useragent) == null ? void 0 : _a3.ios) e.preventDefault();
    callback(++click_count);
    repeat_interval = setInterval(() => callback(++click_count), 150);
  }
  const [start_ev, end_ev] = ((_a2 = window._useragent) == null ? void 0 : _a2.is_touch) ? ["touchstart", "touchend"] : ["mousedown", "mouseup"];
  const cleanup = () => {
    clearInterval(repeat_interval);
    click_count = 0;
  };
  el.addEventListener(start_ev, click_wrapper);
  document.documentElement.addEventListener(end_ev, cleanup);
  return {
    destroy() {
      document.documentElement.removeEventListener(end_ev, cleanup);
    }
  };
}
var root_5$1 = /* @__PURE__ */ from_html(`إضافة نقاط مخصصة <!>`, 1);
var root_6$2 = /* @__PURE__ */ from_html(`إعادة تسمية الطفل <!>`, 1);
var root_7$1 = /* @__PURE__ */ from_html(`عرض السجل <!>`, 1);
var root_8$2 = /* @__PURE__ */ from_html(`حذف الطفل <!>`, 1);
var root_4$2 = /* @__PURE__ */ from_html(`<!> <!> <!> <!> <!> <!>`, 1);
var root_2$2 = /* @__PURE__ */ from_html(`<!> <!>`, 1);
var root_1$5 = /* @__PURE__ */ from_html(`<div><div class="glass flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm font-bold text-card-foreground"> </div> <div class="min-w-0 flex-1"><div class="flex items-center justify-between"><h3 class="truncate text-lg font-semibold text-card-foreground"> </h3> <div class="text-2xl font-bold text-primary"> </div></div></div> <div class="flex items-center gap-2"><button class="glass inline-flex h-8 w-8 items-center justify-center rounded-md text-card-foreground transition-all hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"><!></button> <button class="gradient-primary inline-flex h-8 w-8 items-center justify-center rounded-md text-primary-foreground transition-all hover:opacity-90 disabled:pointer-events-none disabled:opacity-50"><!></button> <!></div></div>`);
var root$5 = /* @__PURE__ */ from_html(`<div class="space-y-2"></div>`);
function ChildList($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $family_store = () => store_get(family_store, "$family_store", $$stores);
  const $ui_store = () => store_get(ui_store, "$ui_store", $$stores);
  let adjusting_children = /* @__PURE__ */ state(proxy(/* @__PURE__ */ new Set()));
  let stable_order = [];
  let sorted_children = /* @__PURE__ */ user_derived(() => {
    const children = [...$family_store().children];
    if (get$4(adjusting_children).size === 0) {
      const sorted = children.sort((a2, b) => {
        if (b.score !== a2.score) return b.score - a2.score;
        return a2.name.localeCompare(b.name);
      });
      stable_order = sorted.map((child2) => child2.id);
      return sorted;
    }
    return stable_order.map((id) => children.find((child2) => child2.id === id)).filter(Boolean);
  });
  function get_rank_display(rank) {
    return rank;
  }
  function get_card_style(rank) {
    switch (rank) {
      case 1:
        return "glass-card-first transition-all duration-300";
      case 2:
        return "glass-card-second transition-all duration-300";
      case 3:
        return "glass-card-third transition-all duration-300";
      default:
        return "glass-card transition-all duration-300";
    }
  }
  function is_pending(child_id) {
    return [...$ui_store().pending_operations].some((op) => op.startsWith(`adjust_${child_id}_`) && op.includes("_flush"));
  }
  async function handle_adjust(child_id, delta) {
    get$4(adjusting_children).add(child_id);
    set$1(adjusting_children, new Set(get$4(adjusting_children)), true);
    await family_actions.adjust_score(child_id, delta);
    setTimeout(
      () => {
        if (!is_pending(child_id)) {
          get$4(adjusting_children).delete(child_id);
          set$1(adjusting_children, new Set(get$4(adjusting_children)), true);
        }
      },
      1e3
    );
  }
  function handle_delete(child2) {
    ui_actions.show_confirm(`حذف ${child2.name}`, `هل أنت متأكد من أنك تريد حذف ${child2.name}؟ هذا الإجراء لا يمكن التراجع عنه وسيحذف جميع النقاط والسجلات الخاصة به.`, async () => {
      await family_actions.delete_child(child2.id);
    });
  }
  function open_rename_modal(child_id) {
    ui_actions.set_active_modal(`rename_child_${child_id}`);
  }
  function open_history_modal(child_id) {
    ui_actions.set_active_modal(`history_${child_id}`);
  }
  function open_custom_score_modal(child_id) {
    ui_actions.set_active_modal(`custom_score_${child_id}`);
  }
  var div = root$5();
  each(div, 31, () => get$4(sorted_children), (child2) => child2.id, ($$anchor2, child$1, index2) => {
    var div_1 = root_1$5();
    var div_2 = child(div_1);
    var text2 = child(div_2);
    var div_3 = sibling(div_2, 2);
    var div_4 = child(div_3);
    var h3 = child(div_4);
    var text_1 = child(h3);
    var div_5 = sibling(h3, 2);
    var text_2 = child(div_5);
    var div_6 = sibling(div_3, 2);
    var button = child(div_6);
    var node = child(button);
    Minus(node, { class: "h-4 w-4" });
    action(button, ($$node, $$action_arg) => repeat_click == null ? void 0 : repeat_click($$node, $$action_arg), () => () => handle_adjust(get$4(child$1).id, -1));
    var button_1 = sibling(button, 2);
    var node_1 = child(button_1);
    Plus(node_1, { class: "h-4 w-4" });
    action(button_1, ($$node, $$action_arg) => repeat_click == null ? void 0 : repeat_click($$node, $$action_arg), () => () => handle_adjust(get$4(child$1).id, 1));
    var node_2 = sibling(button_1, 2);
    Root(node_2, {
      children: ($$anchor3, $$slotProps) => {
        var fragment = root_2$2();
        var node_3 = first_child(fragment);
        Dropdown_menu_trigger(node_3, {
          class: "rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:ring-2 focus:ring-ring focus:outline-none",
          get "aria-label"() {
            return `Edit ${get$4(child$1).name ?? ""}`;
          },
          children: ($$anchor4, $$slotProps2) => {
            Ellipsis_vertical($$anchor4, { class: "h-4 w-4" });
          },
          $$slots: { default: true }
        });
        var node_4 = sibling(node_3, 2);
        Dropdown_menu_content(node_4, {
          portalProps: {},
          children: ($$anchor4, $$slotProps2) => {
            var fragment_2 = root_4$2();
            var node_5 = first_child(fragment_2);
            Dropdown_menu_item(node_5, {
              inset: false,
              onclick: () => open_custom_score_modal(get$4(child$1).id),
              children: ($$anchor5, $$slotProps3) => {
                var fragment_3 = root_5$1();
                var node_6 = sibling(first_child(fragment_3));
                Calculator(node_6, { class: "h-4 w-4" });
                append($$anchor5, fragment_3);
              },
              $$slots: { default: true }
            });
            var node_7 = sibling(node_5, 2);
            Dropdown_menu_separator(node_7, {});
            var node_8 = sibling(node_7, 2);
            Dropdown_menu_item(node_8, {
              inset: false,
              onclick: () => open_rename_modal(get$4(child$1).id),
              children: ($$anchor5, $$slotProps3) => {
                var fragment_4 = root_6$2();
                var node_9 = sibling(first_child(fragment_4));
                Square_pen(node_9, { class: "h-4 w-4" });
                append($$anchor5, fragment_4);
              },
              $$slots: { default: true }
            });
            var node_10 = sibling(node_8, 2);
            Dropdown_menu_item(node_10, {
              inset: false,
              onclick: () => open_history_modal(get$4(child$1).id),
              children: ($$anchor5, $$slotProps3) => {
                var fragment_5 = root_7$1();
                var node_11 = sibling(first_child(fragment_5));
                History(node_11, { class: "h-4 w-4" });
                append($$anchor5, fragment_5);
              },
              $$slots: { default: true }
            });
            var node_12 = sibling(node_10, 2);
            Dropdown_menu_separator(node_12, {});
            var node_13 = sibling(node_12, 2);
            Dropdown_menu_item(node_13, {
              class: "text-destructive focus:text-destructive",
              inset: false,
              onclick: () => handle_delete(get$4(child$1)),
              children: ($$anchor5, $$slotProps3) => {
                var fragment_6 = root_8$2();
                var node_14 = sibling(first_child(fragment_6));
                Trash_2(node_14, { class: "h-4 w-4" });
                append($$anchor5, fragment_6);
              },
              $$slots: { default: true }
            });
            append($$anchor4, fragment_2);
          },
          $$slots: { default: true }
        });
        append($$anchor3, fragment);
      },
      $$slots: { default: true }
    });
    template_effect(
      ($0, $1, $2, $3) => {
        set_class(div_1, 1, `${$0 ?? ""} animate-slide-in flex items-center gap-4 rounded-xl p-4 animate-slide-in-${get$4(index2) % 5 + 1}`);
        set_text(text2, $1);
        set_text(text_1, get$4(child$1).name);
        set_text(text_2, get$4(child$1).score);
        button.disabled = $2;
        button_1.disabled = $3;
      },
      [
        () => get_card_style(get$4(index2) + 1),
        () => get_rank_display(get$4(index2) + 1),
        () => is_pending(get$4(child$1).id),
        () => is_pending(get$4(child$1).id)
      ]
    );
    animation(div_1, () => flip, () => ({ duration: 400 }));
    append($$anchor2, div_1);
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_4$1 = /* @__PURE__ */ from_html(`<!> إضافة طفل`, 1);
var root_9 = /* @__PURE__ */ from_html(`السجل <!>`, 1);
var root_10 = /* @__PURE__ */ from_html(`نسخ رابط الدعوة <!>`, 1);
var root_11 = /* @__PURE__ */ from_html(`الإعدادات <!>`, 1);
var root_12 = /* @__PURE__ */ from_html(`إعادة تعيين الكل <!>`, 1);
var root_8$1 = /* @__PURE__ */ from_html(`<!> <!> <!> <!> <!>`, 1);
var root_6$1 = /* @__PURE__ */ from_html(`<!> <!>`, 1);
var root$4 = /* @__PURE__ */ from_html(`<header class="glass sticky top-0 z-40 px-4 py-3 sm:py-4"><div class="container mx-auto flex items-center justify-between"><div class="flex min-w-0 flex-1 items-center gap-3"><h1 class="truncate text-lg font-bold text-card-foreground sm:text-xl lg:text-2xl"> </h1> <span class="text-xs whitespace-nowrap text-muted-foreground sm:text-sm"> </span></div> <div class="flex flex-shrink-0 items-center gap-2 sm:gap-2"><!> <!> <!> <!></div></div></header>`);
function HeaderBar($$anchor, $$props) {
  push($$props, false);
  const [$$stores, $$cleanup] = setup_stores();
  const $family_store = () => store_get(family_store, "$family_store", $$stores);
  const $appstate = () => store_get(appstate, "$appstate", $$stores);
  function handle_reset_all() {
    ui_actions.show_confirm("إعادة تعيين جميع النقاط", "هل أنت متأكد من أنك تريد إعادة تعيين نقاط جميع الأطفال إلى الصفر؟ لا يمكن التراجع عن هذا الإجراء.", () => family_actions.reset_all_scores());
  }
  function open_history_modal() {
    ui_actions.set_active_modal("history");
  }
  function open_settings_modal() {
    ui_actions.set_active_modal("family_settings");
  }
  function open_add_child_modal() {
    ui_actions.set_active_modal("add_child");
  }
  function toggle_theme() {
    appstate.update((state2) => ({
      ...state2,
      theme: state2.theme === "dark" ? "light" : "dark"
    }));
  }
  async function copy_join_code() {
    var _a2;
    if (!((_a2 = $family_store().family) == null ? void 0 : _a2.join_code)) return;
    const join_code = $family_store().family.join_code;
    const link2 = new URL(`/join/${join_code}`, location.origin).toString();
    await navigator.clipboard.writeText(link2);
  }
  init();
  var header = root$4();
  var div = child(header);
  var div_1 = child(div);
  var h1 = child(div_1);
  var text2 = child(h1);
  var span = sibling(h1, 2);
  var text_1 = child(span);
  var div_2 = sibling(div_1, 2);
  var node = child(div_2);
  Button(node, {
    size: "sm",
    onclick: toggle_theme,
    class: "h-8 w-8 p-2 sm:h-9 sm:w-9",
    variant: "ghost",
    children: ($$anchor2, $$slotProps) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          Sun($$anchor3, { class: "h-3 w-3 sm:h-4 sm:w-4" });
        };
        var alternate = ($$anchor3) => {
          Moon($$anchor3, { class: "h-3 w-3 sm:h-4 sm:w-4" });
        };
        if_block(node_1, ($$render) => {
          if ($appstate(), untrack(() => $appstate().theme === "dark")) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Button(node_2, {
    size: "sm",
    variant: "outline",
    onclick: open_add_child_modal,
    class: "hidden sm:flex",
    children: ($$anchor2, $$slotProps) => {
      var fragment_3 = root_4$1();
      var node_3 = first_child(fragment_3);
      Plus(node_3, { class: "ml-2 h-4 w-4" });
      append($$anchor2, fragment_3);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_2, 2);
  Button(node_4, {
    size: "sm",
    onclick: open_add_child_modal,
    class: "h-8 w-8 p-2 text-black sm:hidden dark:text-white",
    children: ($$anchor2, $$slotProps) => {
      Plus($$anchor2, { class: "h-3 w-3" });
    },
    $$slots: { default: true }
  });
  var node_5 = sibling(node_4, 2);
  Root(node_5, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_5 = root_6$1();
      var node_6 = first_child(fragment_5);
      Dropdown_menu_trigger(node_6, {
        class: "h-8 w-8 rounded-md p-2 text-sm font-medium text-card-foreground hover:bg-muted focus:ring-2 focus:ring-ring focus:outline-none sm:h-9 sm:w-9",
        "aria-label": "المزيد من الخيارات",
        children: ($$anchor3, $$slotProps2) => {
          Ellipsis($$anchor3, { class: "h-3 w-3 sm:h-4 sm:w-4" });
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node_6, 2);
      Dropdown_menu_content(node_7, {
        portalProps: {},
        align: "end",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_7 = root_8$1();
          var node_8 = first_child(fragment_7);
          Dropdown_menu_item(node_8, {
            inset: false,
            onclick: open_history_modal,
            children: ($$anchor4, $$slotProps3) => {
              var fragment_8 = root_9();
              var node_9 = sibling(first_child(fragment_8));
              History(node_9, { class: "h-4 w-4" });
              append($$anchor4, fragment_8);
            },
            $$slots: { default: true }
          });
          var node_10 = sibling(node_8, 2);
          Dropdown_menu_item(node_10, {
            inset: false,
            onclick: copy_join_code,
            children: ($$anchor4, $$slotProps3) => {
              var fragment_9 = root_10();
              var node_11 = sibling(first_child(fragment_9));
              Copy(node_11, { class: "h-4 w-4" });
              append($$anchor4, fragment_9);
            },
            $$slots: { default: true }
          });
          var node_12 = sibling(node_10, 2);
          Dropdown_menu_item(node_12, {
            inset: false,
            onclick: open_settings_modal,
            children: ($$anchor4, $$slotProps3) => {
              var fragment_10 = root_11();
              var node_13 = sibling(first_child(fragment_10));
              Settings(node_13, { class: "h-4 w-4" });
              append($$anchor4, fragment_10);
            },
            $$slots: { default: true }
          });
          var node_14 = sibling(node_12, 2);
          Dropdown_menu_separator(node_14, {});
          var node_15 = sibling(node_14, 2);
          Dropdown_menu_item(node_15, {
            class: "text-destructive focus:text-destructive",
            inset: false,
            onclick: handle_reset_all,
            children: ($$anchor4, $$slotProps3) => {
              var fragment_11 = root_12();
              var node_16 = sibling(first_child(fragment_11));
              Rotate_ccw(node_16, { class: "h-4 w-4" });
              append($$anchor4, fragment_11);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_7);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_5);
    },
    $$slots: { default: true }
  });
  template_effect(() => {
    set_text(text2, ($family_store(), untrack(() => {
      var _a2;
      return ((_a2 = $family_store().family) == null ? void 0 : _a2.name) || "العائلة";
    })));
    set_text(text_1, `${($family_store(), untrack(() => {
      var _a2;
      return ((_a2 = $family_store().children) == null ? void 0 : _a2.length) || 0;
    })) ?? ""} طفل`);
  });
  append($$anchor, header);
  pop();
  $$cleanup();
}
function handle_keydown$3(e, $$props) {
  var _a2;
  if (e.key === "Escape") (_a2 = $$props.on_close) == null ? void 0 : _a2.call($$props);
}
var root_2$1 = /* @__PURE__ */ from_html(`<p class="mt-1 text-sm text-muted-foreground"> </p>`);
var root_1$4 = /* @__PURE__ */ from_html(`<div class="fixed inset-0 z-50 flex animate-in items-center justify-center p-4 duration-200 fade-in-0"><div class="fixed inset-0 animate-in bg-black/60 backdrop-blur-sm duration-200 fade-in-0" role="button" tabindex="-1"></div> <div class="glass-strong relative w-full max-w-md animate-in rounded-xl p-6 duration-200 zoom-in-95 slide-in-from-bottom-2"><div class="mb-4"><h3 class="text-lg font-semibold text-card-foreground"> </h3> <!></div> <!></div></div>`);
function Modal($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 3, false), description = prop($$props, "description", 3, void 0);
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var div = root_1$4();
      var div_1 = child(div);
      div_1.__click = function(...$$args) {
        var _a2;
        (_a2 = $$props.on_close) == null ? void 0 : _a2.apply(this, $$args);
      };
      div_1.__keydown = [handle_keydown$3, $$props];
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var h3 = child(div_3);
      var text2 = child(h3);
      var node_1 = sibling(h3, 2);
      {
        var consequent = ($$anchor3) => {
          var p2 = root_2$1();
          var text_1 = child(p2);
          template_effect(() => set_text(text_1, description()));
          append($$anchor3, p2);
        };
        if_block(node_1, ($$render) => {
          if (description()) $$render(consequent);
        });
      }
      var node_2 = sibling(div_3, 2);
      snippet(node_2, () => $$props.children ?? noop$1);
      template_effect(() => set_text(text2, $$props.title));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (open()) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
}
delegate(["click", "keydown"]);
function AddChildModal($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $ui_store = () => store_get(ui_store, "$ui_store", $$stores);
  let error = /* @__PURE__ */ state("");
  let loading = /* @__PURE__ */ state(false);
  let child_name = /* @__PURE__ */ state("");
  let is_valid_name = /* @__PURE__ */ user_derived(() => validate_child_name(get$4(child_name)));
  user_effect(() => {
    if ($ui_store().active_modal === "add_child") {
      set$1(child_name, "");
      set$1(error, "");
      set$1(loading, false);
    }
  });
  async function handle_submit(e) {
    e.preventDefault();
    if (!get$4(is_valid_name)) return;
    set$1(loading, true);
    set$1(error, "");
    await family_actions.create_child(get$4(child_name).trim());
    ui_actions.set_active_modal(null);
    set$1(loading, false);
  }
  function close_modal() {
    ui_actions.set_active_modal(null);
  }
  const expression = /* @__PURE__ */ user_derived(() => $ui_store().active_modal === "add_child");
  Modal($$anchor, {
    get open() {
      return get$4(expression);
    },
    title: "إضافة طفل",
    description: "إضافة طفل جديد إلى العائلة",
    on_close: close_modal,
    children: ($$anchor2, $$slotProps) => {
      NameForm($$anchor2, {
        label: "اسم الطفل",
        placeholder: "أدخل اسم الطفل",
        field_id: "child_name",
        max_length: 40,
        validation_message: "يجب أن يكون اسم الطفل بين 1-40 حرف",
        get is_valid() {
          return get$4(is_valid_name);
        },
        submit_text: "إضافة طفل",
        loading_text: "جاري الإضافة...",
        show_cancel: true,
        on_submit: handle_submit,
        on_cancel: close_modal,
        get name() {
          return get$4(child_name);
        },
        set name($$value) {
          set$1(child_name, $$value, true);
        },
        get loading() {
          return get$4(loading);
        },
        set loading($$value) {
          set$1(loading, $$value, true);
        },
        get error() {
          return get$4(error);
        },
        set error($$value) {
          set$1(error, $$value, true);
        }
      });
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
function handle_keydown$2(e, close_modal) {
  if (e.key === "Escape") close_modal();
}
var root_3$1 = /* @__PURE__ */ from_html(`<div class="text-sm font-medium text-card-foreground"> </div>`);
var root_2 = /* @__PURE__ */ from_html(`<div class="flex items-center justify-between rounded-lg bg-muted p-3"><div class="flex items-center space-x-3"><div> </div> <div><!> <div class="text-xs text-muted-foreground"> </div></div></div></div>`);
var root_4 = /* @__PURE__ */ from_html(`<div class="text-center py-8 text-muted-foreground">لا يوجد سجل بعد</div>`);
var root_1$3 = /* @__PURE__ */ from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="fixed inset-0 bg-black/50" role="button" tabindex="-1"></div> <div class="relative w-full max-w-lg rounded-lg bg-card p-6 shadow-xl"><div class="mb-4"><h3 class="text-lg font-semibold text-card-foreground"> </h3></div> <div class="max-h-96 space-y-3 overflow-y-auto"></div> <div class="mt-6 flex justify-end"><!></div></div></div>`);
function ChildHistoryModal($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $family_store = () => store_get(family_store, "$family_store", $$stores);
  const $ui_store = () => store_get(ui_store, "$ui_store", $$stores);
  let child_adjustments = /* @__PURE__ */ user_derived(() => $family_store().recent_adjustments.filter((adj) => adj.child_id === $$props.child.id));
  function close_modal() {
    ui_actions.set_active_modal(null);
  }
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var div = root_1$3();
      var div_1 = child(div);
      div_1.__click = close_modal;
      div_1.__keydown = [handle_keydown$2, close_modal];
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var h3 = child(div_3);
      var text$1 = child(h3);
      var div_4 = sibling(div_3, 2);
      each(
        div_4,
        21,
        () => get$4(child_adjustments),
        (adjustment) => adjustment.id,
        ($$anchor3, adjustment) => {
          var div_5 = root_2();
          var div_6 = child(div_5);
          var div_7 = child(div_6);
          let classes;
          var text_1 = child(div_7);
          var div_8 = sibling(div_7, 2);
          var node_1 = child(div_8);
          {
            var consequent = ($$anchor4) => {
              var div_9 = root_3$1();
              var text_2 = child(div_9);
              template_effect(() => set_text(text_2, get$4(adjustment).note));
              append($$anchor4, div_9);
            };
            if_block(node_1, ($$render) => {
              if (get$4(adjustment).note) $$render(consequent);
            });
          }
          var div_10 = sibling(node_1, 2);
          var text_3 = child(div_10);
          template_effect(
            ($0, $1) => {
              classes = set_class(div_7, 1, "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold", null, classes, $0);
              set_text(text_1, `${get$4(adjustment).delta > 0 ? "+" : ""}${get$4(adjustment).delta ?? ""}`);
              set_text(text_3, $1);
            },
            [
              () => ({
                "bg-green-100": get$4(adjustment).delta > 0,
                "text-green-800": get$4(adjustment).delta > 0,
                "bg-red-100": get$4(adjustment).delta < 0,
                "text-red-800": get$4(adjustment).delta < 0
              }),
              () => format_arabic_date(get$4(adjustment).created_at)
            ]
          );
          append($$anchor3, div_5);
        },
        ($$anchor3) => {
          var div_11 = root_4();
          append($$anchor3, div_11);
        }
      );
      var div_12 = sibling(div_4, 2);
      var node_2 = child(div_12);
      Button(node_2, {
        variant: "outline",
        onclick: close_modal,
        children: ($$anchor3, $$slotProps) => {
          var text_4 = text("إغلاق");
          append($$anchor3, text_4);
        },
        $$slots: { default: true }
      });
      template_effect(() => set_text(text$1, `${$$props.child.name ?? ""} سجل`));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($ui_store().active_modal === `history_${$$props.child.id}`) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
delegate(["click", "keydown"]);
function clamp(value, bound1, bound2) {
  if (bound2 == null) {
    return Math.min(value, bound1);
  }
  return Math.min(Math.max(value, bound1), bound2);
}
var root$3 = /* @__PURE__ */ from_html(`<input/>`);
function NumberInput($$anchor, $$props) {
  push($$props, true);
  let value = prop($$props, "value", 15, 1), min2 = prop($$props, "min", 3, 1), max2 = prop($$props, "max", 3, 100), id = prop($$props, "id", 3, ""), class_name = prop($$props, "class", 3, ""), inputmode = prop($$props, "inputmode", 3, "numeric"), pattern = prop($$props, "pattern", 3, "[\\d٠-٩]+"), oninput = prop($$props, "oninput", 3, (val) => {
  }), onpreinput = prop($$props, "onpreinput", 3, (val) => true), is_valid = prop($$props, "is_valid", 15, true), disabled = prop($$props, "disabled", 3, false), display_value = prop($$props, "display_value", 15, ""), placeholder = prop($$props, "placeholder", 3, void 0), default_value = prop($$props, "default_value", 3, 1), get_max_value = prop($$props, "get_max_value", 3, () => max2()), handle_arrow_navigation = prop($$props, "handle_arrow_navigation", 3, null), rest = /* @__PURE__ */ rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "value",
    "min",
    "max",
    "id",
    "class",
    "inputmode",
    "pattern",
    "oninput",
    "onpreinput",
    "is_valid",
    "disabled",
    "display_value",
    "placeholder",
    "default_value",
    "get_max_value",
    "handle_arrow_navigation"
  ]);
  function handle_keydown2(e) {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
    e.preventDefault();
    const current = value() ?? min2();
    if (handle_arrow_navigation() && handle_arrow_navigation()(e.key, current)) {
      return;
    }
    const current_max = get_max_value()();
    const delta = e.key === "ArrowUp" ? 1 : -1;
    const new_value = clamp(current + delta, min2(), current_max);
    onpreinput()(new_value);
    value(new_value);
    is_valid(true);
    oninput()(new_value);
    display_value(ar_nums(new_value.toString()));
  }
  function handle_change(e) {
    const raw_input = e.currentTarget.value.trim();
    display_value(ar_nums(raw_input));
    if (!raw_input) {
      onpreinput()(default_value());
      value(default_value());
      is_valid(false);
      oninput()(default_value());
      return;
    }
    const input_value = en_nums(raw_input);
    const parsed_value = parseInt(input_value, 10);
    if (isNaN(parsed_value)) {
      onpreinput()(default_value());
      value(default_value());
      is_valid(false);
      oninput()(default_value());
      return;
    }
    const current_max = get_max_value()();
    if (parsed_value < min2() || parsed_value > current_max) {
      onpreinput()(default_value());
      value(default_value());
      is_valid(false);
      oninput()(default_value());
      return;
    }
    onpreinput()(parsed_value);
    is_valid(true);
    value(parsed_value);
    oninput()(parsed_value);
    display_value(ar_nums(parsed_value.toString()));
  }
  var input = root$3();
  attribute_effect(
    input,
    ($0) => ({
      id: id(),
      inputmode: inputmode(),
      pattern: pattern(),
      autocomplete: "off",
      type: "text",
      value: display_value(),
      oninput: handle_change,
      onkeydown: handle_keydown2,
      placeholder: placeholder(),
      disabled: disabled(),
      class: $0,
      ...rest
    }),
    [
      () => cn$1("rounded border px-2.5 py-2 text-base transition-all duration-150 ease-in-out focus:outline-none disabled:bg-gray-100", is_valid() ? "border-gray-300 bg-white text-gray-700" : "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500", class_name())
    ]
  );
  append($$anchor, input);
  pop();
}
function handle_keydown$1(e, close_modal, handle_apply) {
  if (e.key === "Escape") close_modal();
  if (e.key === "Enter") handle_apply();
}
var root_1$2 = /* @__PURE__ */ from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="fixed inset-0 bg-black/50 backdrop-blur-lg" role="button" tabindex="-1"></div> <div class="relative w-full max-w-sm rounded-lg border-2 border-border bg-background p-6 shadow-2xl"><div class="mb-6 text-center"><h3 class="text-lg font-semibold text-card-foreground">إضافة نقاط مخصصة</h3> <p class="mt-1 text-sm text-muted-foreground"> </p></div> <div><!> <div class="mt-4 flex gap-3"><!> <!></div></div></div></div>`);
function CustomScoreModal($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $ui_store = () => store_get(ui_store, "$ui_store", $$stores);
  let child$1 = prop($$props, "child", 3, null);
  let custom_value = /* @__PURE__ */ state(0);
  let is_pending = /* @__PURE__ */ state(false);
  function close_modal() {
    ui_actions.set_active_modal(null);
    set$1(custom_value, 0);
  }
  async function handle_apply() {
    const delta = get$4(custom_value);
    if (!validate_score_delta(delta)) {
      return;
    }
    set$1(is_pending, true);
    await family_actions.adjust_score(child$1().id, delta);
    close_modal();
    set$1(is_pending, false);
  }
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$2();
      var div_1 = child(div);
      div_1.__click = close_modal;
      div_1.__keydown = [handle_keydown$1, close_modal, handle_apply];
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var p2 = sibling(child(div_3), 2);
      var text$1 = child(p2);
      var div_4 = sibling(div_3, 2);
      var node_1 = child(div_4);
      NumberInput(node_1, {
        placeholder: "عدد النقاط",
        min: -99,
        max: 99,
        default_value: 0,
        class: "w-full text-center text-lg",
        get value() {
          return get$4(custom_value);
        },
        set value($$value) {
          set$1(custom_value, $$value, true);
        }
      });
      var div_5 = sibling(node_1, 2);
      var node_2 = child(div_5);
      Button(node_2, {
        variant: "default",
        onclick: close_modal,
        class: "flex-1 text-black dark:text-white",
        children: ($$anchor3, $$slotProps) => {
          var text_1 = text("إلغاء");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_2, 2);
      const expression = /* @__PURE__ */ user_derived(() => !get$4(custom_value) || get$4(is_pending));
      Button(node_3, {
        onclick: handle_apply,
        get disabled() {
          return get$4(expression);
        },
        class: "flex-1",
        variant: "destructive",
        children: ($$anchor3, $$slotProps) => {
          var text_2 = text("تطبيق");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      template_effect(() => set_text(text$1, child$1().name));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (child$1() && $ui_store().active_modal === `custom_score_${child$1().id}`) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
delegate(["click", "keydown"]);
function RenameFamilyModal($$anchor, $$props) {
  var _a2;
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $family_store = () => store_get(family_store, "$family_store", $$stores);
  const $ui_store = () => store_get(ui_store, "$ui_store", $$stores);
  let new_name = /* @__PURE__ */ state(proxy(((_a2 = $family_store().family) == null ? void 0 : _a2.name) || ""));
  let loading = /* @__PURE__ */ state(false);
  let error = /* @__PURE__ */ state("");
  let is_valid_name = /* @__PURE__ */ user_derived(() => validate_family_name(get$4(new_name)));
  let is_unchanged = /* @__PURE__ */ user_derived(() => {
    var _a3;
    return get$4(new_name) === ((_a3 = $family_store().family) == null ? void 0 : _a3.name);
  });
  user_effect(() => {
    var _a3;
    if ($ui_store().active_modal === "rename_family") {
      set$1(new_name, ((_a3 = $family_store().family) == null ? void 0 : _a3.name) || "", true);
      set$1(error, "");
      set$1(loading, false);
    }
  });
  async function handle_submit(e) {
    e.preventDefault();
    if (!get$4(is_valid_name) || get$4(is_unchanged)) return;
    set$1(loading, true);
    set$1(error, "");
    await family_actions.update_family(get$4(new_name));
    ui_actions.set_active_modal(null);
    set$1(loading, false);
  }
  function close_modal() {
    ui_actions.set_active_modal(null);
  }
  const expression = /* @__PURE__ */ user_derived(() => $ui_store().active_modal === "rename_family");
  Modal($$anchor, {
    get open() {
      return get$4(expression);
    },
    title: "إعادة تسمية العائلة",
    on_close: close_modal,
    children: ($$anchor2, $$slotProps) => {
      NameForm($$anchor2, {
        label: "اسم العائلة",
        placeholder: "أدخل اسم العائلة",
        field_id: "new_family_name",
        max_length: 60,
        validation_message: "يجب أن يكون اسم العائلة بين 2-60 حرف",
        get is_valid() {
          return get$4(is_valid_name);
        },
        get is_unchanged() {
          return get$4(is_unchanged);
        },
        submit_text: "حفظ",
        loading_text: "جاري الحفظ...",
        show_cancel: true,
        on_submit: handle_submit,
        on_cancel: close_modal,
        get name() {
          return get$4(new_name);
        },
        set name($$value) {
          set$1(new_name, $$value, true);
        },
        get loading() {
          return get$4(loading);
        },
        set loading($$value) {
          set$1(loading, $$value, true);
        },
        get error() {
          return get$4(error);
        },
        set error($$value) {
          set$1(error, $$value, true);
        }
      });
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
function handle_keydown(e, close_modal) {
  if (e.key === "Escape") close_modal();
}
var root_6 = /* @__PURE__ */ from_html(`<!> إعادة تسمية العائلة`, 1);
var root_7 = /* @__PURE__ */ from_html(`<!> مغادرة العائلة`, 1);
var root_1$1 = /* @__PURE__ */ from_html(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="fixed inset-0 bg-black/60 backdrop-blur-sm" role="button" tabindex="-1"></div> <div class="relative w-full max-w-md rounded-lg border-2 border-border bg-card p-6 shadow-2xl"><div class="mb-6"><h3 class="text-lg font-semibold text-card-foreground">الإعدادات</h3></div> <div class="space-y-4"><div class="rounded-lg bg-muted p-4"><div class="mb-2"><!> <div class="mt-1 flex items-center gap-2"><!> <div class="flex items-center gap-2"><!></div></div></div> <p class="text-xs text-muted-foreground">شارك رابط الدعوة مع أفراد العائلة لينضموا مباشرة</p></div> <div class="space-y-2"><!> <!></div> <div class="flex justify-end"><!></div></div></div></div>`);
var root$2 = /* @__PURE__ */ from_html(`<!> <!>`, 1);
function FamilySettings($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $family_store = () => store_get(family_store, "$family_store", $$stores);
  const $ui_store = () => store_get(ui_store, "$ui_store", $$stores);
  const router2 = getContext("router");
  let formatted_code = /* @__PURE__ */ user_derived(() => $family_store().family ? format_join_code_display($family_store().family.join_code) : "");
  let copied = /* @__PURE__ */ state(false);
  async function copy_join_link() {
    var _a2;
    if (!((_a2 = $family_store().family) == null ? void 0 : _a2.join_code)) return;
    const join_code = $family_store().family.join_code;
    const link2 = new URL(`/join/${join_code}`, location.origin).toString();
    try {
      await navigator.clipboard.writeText(link2);
      set$1(copied, true);
      setTimeout(() => set$1(copied, false), 1200);
    } catch {
      set$1(copied, false);
    }
  }
  function handle_leave_family() {
    ui_actions.set_active_modal(null);
    ui_actions.show_confirm("مغادرة العائلة", "هل أنت متأكد من أنك تريد مغادرة هذه العائلة؟ ستحتاج إلى رمز الانضمام للانضمام مرة أخرى.", async () => {
      await family_actions.leave_family();
      router2.route("/");
    });
  }
  function close_modal() {
    ui_actions.set_active_modal(null);
  }
  function open_rename_modal() {
    ui_actions.set_active_modal(null);
    ui_actions.set_active_modal("rename_family");
  }
  var fragment = root$2();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var div = root_1$1();
      var div_1 = child(div);
      div_1.__click = close_modal;
      div_1.__keydown = [handle_keydown, close_modal];
      var div_2 = sibling(div_1, 2);
      var div_3 = sibling(child(div_2), 2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var node_1 = child(div_5);
      Label(node_1, {
        children: ($$anchor3, $$slotProps) => {
          var text$1 = text("رمز الانضمام");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var div_6 = sibling(node_1, 2);
      var node_2 = child(div_6);
      Input(node_2, {
        readonly: true,
        get value() {
          return get$4(formatted_code);
        },
        class: "bg-background text-center font-mono"
      });
      var div_7 = sibling(node_2, 2);
      var node_3 = child(div_7);
      Button(node_3, {
        variant: "outline",
        size: "sm",
        onclick: copy_join_link,
        children: ($$anchor3, $$slotProps) => {
          var fragment_1 = comment();
          var node_4 = first_child(fragment_1);
          {
            var consequent = ($$anchor4) => {
              Check($$anchor4, { class: "h-4 w-4" });
            };
            var alternate = ($$anchor4) => {
              Copy($$anchor4, { class: "h-4 w-4" });
            };
            if_block(node_4, ($$render) => {
              if (get$4(copied)) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var div_8 = sibling(div_4, 2);
      var node_5 = child(div_8);
      Button(node_5, {
        variant: "outline",
        class: "w-full justify-start text-black dark:text-white",
        onclick: open_rename_modal,
        children: ($$anchor3, $$slotProps) => {
          var fragment_4 = root_6();
          var node_6 = first_child(fragment_4);
          Square_pen(node_6, { class: "ml-2 h-4 w-4" });
          append($$anchor3, fragment_4);
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node_5, 2);
      Button(node_7, {
        variant: "destructive",
        class: "w-full justify-start",
        onclick: handle_leave_family,
        children: ($$anchor3, $$slotProps) => {
          var fragment_5 = root_7();
          var node_8 = first_child(fragment_5);
          Log_out(node_8, { class: "ml-2 h-4 w-4" });
          append($$anchor3, fragment_5);
        },
        $$slots: { default: true }
      });
      var div_9 = sibling(div_8, 2);
      var node_9 = child(div_9);
      Button(node_9, {
        variant: "outline",
        class: "text-black dark:text-white",
        onclick: close_modal,
        children: ($$anchor3, $$slotProps) => {
          var text_1 = text("إغلاق");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if ($ui_store().active_modal === "family_settings") $$render(consequent_1);
    });
  }
  var node_10 = sibling(node, 2);
  RenameFamilyModal(node_10, {});
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
delegate(["click", "keydown"]);
function RenameChildModal($$anchor, $$props) {
  push($$props, true);
  const [$$stores, $$cleanup] = setup_stores();
  const $ui_store = () => store_get(ui_store, "$ui_store", $$stores);
  let new_name = /* @__PURE__ */ state(proxy($$props.child.name));
  let loading = /* @__PURE__ */ state(false);
  let error = /* @__PURE__ */ state("");
  let is_valid_name = /* @__PURE__ */ user_derived(() => validate_child_name(get$4(new_name)));
  let is_unchanged = /* @__PURE__ */ user_derived(() => get$4(new_name) === $$props.child.name);
  user_effect(() => {
    if ($ui_store().active_modal === `rename_child_${$$props.child.id}`) {
      set$1(new_name, $$props.child.name, true);
      set$1(error, "");
      set$1(loading, false);
    }
  });
  async function handle_submit(e) {
    e.preventDefault();
    if (!get$4(is_valid_name) || get$4(is_unchanged)) return;
    set$1(loading, true);
    set$1(error, "");
    await family_actions.update_child($$props.child.id, get$4(new_name));
    ui_actions.set_active_modal(null);
    set$1(loading, false);
  }
  function close_modal() {
    ui_actions.set_active_modal(null);
  }
  const expression = /* @__PURE__ */ user_derived(() => $ui_store().active_modal === `rename_child_${$$props.child.id}`);
  Modal($$anchor, {
    get open() {
      return get$4(expression);
    },
    title: "إعادة تسمية الطفل",
    on_close: close_modal,
    children: ($$anchor2, $$slotProps) => {
      NameForm($$anchor2, {
        label: "اسم الطفل",
        placeholder: "أدخل اسم الطفل",
        field_id: "new_name",
        max_length: 40,
        validation_message: "يجب أن يكون اسم الطفل بين 1-40 حرف",
        get is_valid() {
          return get$4(is_valid_name);
        },
        get is_unchanged() {
          return get$4(is_unchanged);
        },
        submit_text: "حفظ",
        loading_text: "جاري الحفظ...",
        show_cancel: true,
        on_submit: handle_submit,
        on_cancel: close_modal,
        get name() {
          return get$4(new_name);
        },
        set name($$value) {
          set$1(new_name, $$value, true);
        },
        get loading() {
          return get$4(loading);
        },
        set loading($$value) {
          set$1(loading, $$value, true);
        },
        get error() {
          return get$4(error);
        },
        set error($$value) {
          set$1(error, $$value, true);
        }
      });
    },
    $$slots: { default: true }
  });
  pop();
  $$cleanup();
}
var root$1 = /* @__PURE__ */ from_html(`<div class="flex flex-col items-center justify-center p-8 text-center"><h3 class="mb-2 text-lg font-medium text-foreground"> </h3> <p class="mb-4 max-w-sm text-sm text-muted-foreground"> </p></div>`);
function EmptyState($$anchor, $$props) {
  let title = prop($$props, "title", 3, "لا توجد بيانات"), description = prop($$props, "description", 3, "لم يتم العثور على أي محتوى لعرضه.");
  var div = root$1();
  var h3 = child(div);
  var text2 = child(h3);
  var p2 = sibling(h3, 2);
  var text_1 = child(p2);
  template_effect(() => {
    set_text(text2, title());
    set_text(text_1, description());
  });
  append($$anchor, div);
}
var root_1 = /* @__PURE__ */ from_html(`<div class="flex min-h-[100svh] items-center justify-center"><!></div>`);
var on_click = () => window.location.reload();
var root_3 = /* @__PURE__ */ from_html(`<div class="flex min-h-[100svh] items-center justify-center"><div class="text-center"><p class="mb-4 text-red-600"> </p> <button class="text-blue-600 hover:underline">إعادة المحاولة</button></div></div>`);
var root_5 = /* @__PURE__ */ from_html(`<!> <main class="container mx-auto px-3 py-4 sm:px-4 sm:py-6"><!></main>`, 1);
var root_8 = /* @__PURE__ */ from_html(`<!> <!> <!>`, 1);
var root = /* @__PURE__ */ from_html(`<div class="min-h-[100svh]"><!></div> <!> <!> <!> <!>`, 1);
function FamilyBoard($$anchor, $$props) {
  push($$props, false);
  const [$$stores, $$cleanup] = setup_stores();
  const $family_store = () => store_get(family_store, "$family_store", $$stores);
  let loading = /* @__PURE__ */ mutable_source(true);
  let error = /* @__PURE__ */ mutable_source(null);
  onMount(async () => {
    try {
      await family_actions.load_family();
    } catch (err) {
      set$1(error, err.message || "فشل في تحميل بيانات العائلة");
    } finally {
      set$1(loading, false);
    }
  });
  init();
  var fragment = root();
  var div = first_child(fragment);
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root_1();
      var node_1 = child(div_1);
      Spinner(node_1, { size: "xl", text: "جاري تحميل العائلة..." });
      append($$anchor2, div_1);
    };
    var alternate = ($$anchor2, $$elseif) => {
      {
        var consequent_1 = ($$anchor3) => {
          var div_2 = root_3();
          var div_3 = child(div_2);
          var p2 = child(div_3);
          var text2 = child(p2);
          var button = sibling(p2, 2);
          button.__click = [on_click];
          template_effect(() => set_text(text2, get$4(error)));
          append($$anchor3, div_2);
        };
        var alternate_1 = ($$anchor3, $$elseif2) => {
          {
            var consequent_3 = ($$anchor4) => {
              var fragment_1 = root_5();
              var node_2 = first_child(fragment_1);
              HeaderBar(node_2, {});
              var main = sibling(node_2, 2);
              var node_3 = child(main);
              {
                var consequent_2 = ($$anchor5) => {
                  ChildList($$anchor5, {});
                };
                var alternate_2 = ($$anchor5) => {
                  EmptyState($$anchor5, {
                    title: "لا يوجد أطفال",
                    description: "لم يتم إضافة أي أطفال بعد. ابدأ بإضافة طفلك الأول!"
                  });
                };
                if_block(node_3, ($$render) => {
                  if ($family_store(), untrack(() => {
                    var _a2;
                    return ((_a2 = $family_store().children) == null ? void 0 : _a2.length) > 0;
                  })) $$render(consequent_2);
                  else $$render(alternate_2, false);
                });
              }
              append($$anchor4, fragment_1);
            };
            if_block(
              $$anchor3,
              ($$render) => {
                if ($family_store()) $$render(consequent_3);
              },
              $$elseif2
            );
          }
        };
        if_block(
          $$anchor2,
          ($$render) => {
            if (get$4(error)) $$render(consequent_1);
            else $$render(alternate_1, false);
          },
          $$elseif
        );
      }
    };
    if_block(node, ($$render) => {
      if (get$4(loading)) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  var node_4 = sibling(div, 2);
  AddChildModal(node_4, {});
  var node_5 = sibling(node_4, 2);
  FamilySettings(node_5, {});
  var node_6 = sibling(node_5, 2);
  HistoryDrawer(node_6, {});
  var node_7 = sibling(node_6, 2);
  each(
    node_7,
    1,
    () => ($family_store(), untrack(() => $family_store().children)),
    (child2) => child2.id,
    ($$anchor2, child2) => {
      var fragment_4 = root_8();
      var node_8 = first_child(fragment_4);
      RenameChildModal(node_8, {
        get child() {
          return get$4(child2);
        }
      });
      var node_9 = sibling(node_8, 2);
      ChildHistoryModal(node_9, {
        get child() {
          return get$4(child2);
        }
      });
      var node_10 = sibling(node_9, 2);
      CustomScoreModal(node_10, {
        get child() {
          return get$4(child2);
        }
      });
      append($$anchor2, fragment_4);
    }
  );
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
delegate(["click"]);
const FamilyBoard$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: FamilyBoard
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=bundle.es.js.map
