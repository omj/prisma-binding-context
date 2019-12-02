'use strict'
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
Object.defineProperty(exports, '__esModule', { value: true })
var apollo_link_1 = require('apollo-link')
var SharedLink = /** @class */ (function(_super) {
  __extends(SharedLink, _super)
  function SharedLink() {
    return (_super !== null && _super.apply(this, arguments)) || this
  }
  SharedLink.prototype.setInnerLink = function(innerLink) {
    this.innerLink = innerLink
  }
  SharedLink.prototype.request = function(operation, forward) {
    if (!this.innerLink) {
      throw new Error('No inner link set')
    }
    // operation.setContext(operation.getContext().graphqlContext)
    operation.setContext(
      __assign({}, operation.getContext(), { headers: { superHeader: 123 } }),
    )
    console.log(
      'SharedLink.ts',
      'request',
      JSON.stringify(operation.getContext()),
    )
    return this.innerLink.request(operation, forward)
  }
  return SharedLink
})(apollo_link_1.ApolloLink)
exports.SharedLink = SharedLink
//# sourceMappingURL=SharedLink.js.map
