'use strict';



;define('ember-app/app', ['exports', 'ember-app/resolver', 'ember-load-initializers', 'ember-app/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('ember-app/components/bootstrap-paginate', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        next: false, //false until proven true
        prev: false,
        activeIndex: null,

        didReceiveAttrs() {
            this._super(...arguments);
            this.set('errors', []);

            var links = this.get('links');
            var currentPost = this.get('post_title');

            for (var i = 0; i < links.length; i++) {
                console.log(currentPost);
                console.log(links[i]);
                if (links[i] == currentPost) {
                    this.set('activeIndex', i);
                    if (i > 0) {
                        this.set('prev', links[i - 1]);
                    } else {
                        this.set('prev', false);
                    }
                    if (i < links.length - 1) {
                        //set next if not last index
                        this.set('next', links[i + 1]);
                    } else {
                        this.set('next', false);
                    }
                }
            }
        }

    });
});
;define('ember-app/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define('ember-app/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define('ember-app/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define('ember-app/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define('ember-app/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define('ember-app/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define('ember-app/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define('ember-app/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define('ember-app/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define('ember-app/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define('ember-app/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define('ember-app/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define('ember-app/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define('ember-app/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define('ember-app/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define('ember-app/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define('ember-app/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define('ember-app/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define('ember-app/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define('ember-app/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define('ember-app/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define('ember-app/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define('ember-app/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define('ember-app/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define('ember-app/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define('ember-app/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define('ember-app/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define('ember-app/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define('ember-app/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define('ember-app/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define('ember-app/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define('ember-app/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define('ember-app/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define('ember-app/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define('ember-app/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define('ember-app/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define('ember-app/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define('ember-app/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define('ember-app/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define('ember-app/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define('ember-app/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define('ember-app/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define('ember-app/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define('ember-app/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define('ember-app/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define('ember-app/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define('ember-app/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define('ember-app/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define('ember-app/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define('ember-app/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define('ember-app/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define('ember-app/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define('ember-app/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define('ember-app/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define('ember-app/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define('ember-app/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define('ember-app/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define('ember-app/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define('ember-app/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define('ember-app/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define('ember-app/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define('ember-app/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('ember-app/helpers/app-version', ['exports', 'ember-app/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('ember-app/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define('ember-app/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
;define('ember-app/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define('ember-app/helpers/equal', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.equal = equal;
  function equal([first, second, ...theRest]) {
    return first == second;
  }

  exports.default = Ember.Helper.helper(equal);
});
;define('ember-app/helpers/incr', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.incr = incr;
  function incr([number, ...theRest]) {

    return number + 1;
  }

  exports.default = Ember.Helper.helper(incr);
});
;define('ember-app/helpers/nice-link', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.niceLink = niceLink;
  function niceLink(params /*, hash*/) {
    return params;
  }

  exports.default = Ember.Helper.helper(niceLink);
});
;define('ember-app/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define('ember-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('ember-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('ember-app/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define('ember-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-app/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('ember-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('ember-app/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define('ember-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('ember-app/initializers/export-application-global', ['exports', 'ember-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('ember-app/initializers/load-bootstrap-config', ['exports', 'ember-app/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize
  };
});
;define('ember-app/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('ember-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('ember-app/router', ['exports', 'ember-app/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL,

    didTransition() {
      this._super(...arguments);
      window.scrollTo(0, 0);
    }
  });

  Router.map(function () {
    this.route('projects');
    this.route('blog', function () {
      this.route('post', { path: '/:series_id/:post_id' });
    });

    this.route('contact');
  });

  exports.default = Router;
});
;define("ember-app/routes/blog", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        model() {

            return [{
                title: "GeoPredict",
                description: "This series of blog posts details the development of a novel machine learning solution called GeoPredict. I designed GeoPredict with the intent of leveraging large-scale mobility data in a commercially viable manner.",
                posts: [{
                    title: "Part 1: Origins & Data Exploration",
                    snippet: "In this segment we explore the origins of this effort and the data itself.",
                    body: "<p><strong>Introduction</strong></p> <p>This series of blog posts details the development of a novel machine learning solution called GeoPredict. I designed GeoPredict with the intent of leveraging large-scale mobility data in a commercially viable manner. I conducted this effort on behalf of an industry partner while working in the laboratory of Dr. Miriam Capretz, Western Engineering Dean of Research, in my capacity as a Summer Research Associate.</p> <p>The first step towards the development of GeoPredict was gaining a solid understanding of the problem domain-the data. The data provided by my industry partner was not just raw mobility data but a richer set of contextual and semantic information. Let us try to unpack the structure of this data.</p>  <br><hr><img class='img-fluid' src='/img/blog/GeoPredict/1a.png'><p><hr><br><strong>Understanding the Data</strong></p> <p><strong>MobilityTrace &amp; Visit: </strong>We call a set of data a MobilityTrace and a discrete data point a Visit. My partner collected the provided MobilityTrace from their user base (millions of users) over a three month period.</p> <p><strong>Coordinate: </strong>A Visit is created when a Source captures a new Coordinate. A Coordinate contains the position of the Source (longitude and latitude) and the precision of this measurement.</p> <p><strong>Precision: </strong>Precision is the attribute of a Coordinate accounting for the uncertainty in the position calculation. It is the radius of the circle surrounding the given position. Each Source uses different methods for determining position. These include but are not limited to WiFi triangulation, cellular triangulation, and GPS. Each of these methods has different ranges of baseline precision that vary due to environmental factors.</p> <p><strong>Source: </strong>A Source itself is the specific platform upon which my partner&rsquo;s application runs. Sources include web browsers, mobile operating systems, and mobile browsers.&nbsp; As people tend to keep their cell phones on their person Visits collected from mobile Sources are vital because they serve as a better proxy for human mobility than static Sources such as a desktop web browser.</p> <p><strong>userID: </strong>A userID is an attribute assigned to each Visit to enable analysis on a per-user basis. A user could have multiple ids if they are not logged in across Sources. For privacy, my partner opted not to tie each Visit to a complete userProfile but only the numeric userID.&nbsp;</p> <p><strong>POI &amp; POIGroup: </strong>The most significant preprocessing step on the provided MobilityTrace was tagging each Visit with a commercial POI (point of interest). Each POI is an individual location belonging to a POIGroup. For example, Starbucks is a POIGroup, but the Starbucks with the address 1 Bayside Drive is a POI. POI tagging was accomplished using a commercial database licensed by my partner. My partner removed all Visits that could not be tagged.&nbsp; This purge is significant in that any value to be had from the MobilityTrace would relate to shopping trips as opposed to general mobility.</p> <p><strong>Unsupervised Approach</strong></p> <p>Once I fully understood the nature of the data, I turned my attention to refining my goal: what type of value could my solution deliver? My first intuition was to see if I could uncover any hidden structural value with an unsupervised learning approach. I started with just one feature, using the distance between the Coordinates to cluster the Visits with k-means. Upon inspection of the resulting clusters, I realized that I had stumbled upon a method of discovering POIs. At a low resolution the group labels represented entire geographic regions (cities and towns), but at a higher resolution, the labels signified POIs.</p> <p>By utilizing a third-party database, my partner was already able to label these clusters. I wondered, however, what would happen as new POIs emerged. Would my partner depend on their data provider to provide timely updates? Was there a way I could build a system to discover and label new POIs to break this dependence? I started brainstormed some potential solutions.</p> <p>The first approach that came to mind was to match the cluster coordinates to an address on a city map and then build a web crawler to find mentions of the address on social media with the intention of extracting a POI name. Another potential solution would be to collect photos geotagged with cluster&rsquo;s coordinates and use computer vision techniques to obtain the names of the storefronts in these pictures. I reckoned Google might use a similar approach with the vast amount of Street View imagery.&nbsp; Although both these techniques were of interest to me from an academic standpoint, they were outside my operating parameters in that in that they would require additional data (city maps, user photos) and thus not be commercially viable to my partner.</p> <p>I continued by trying to cluster a higher dimensional set of features considering time, distance and category. I used principal component analysis to produce a unified distance metric for input into k-means. Upon inspection of the results, I was unable to draw any useful conclusions. I decided it was time to move on.</p> <p><strong>Supervised Approach: Recommender Systems</strong></p> <p>Frustrated with my lack of progress I resolved to binge-watch an entire season of Stranger Things on Netflix. Upon completion of the season, I was left impressed. Not just by the wonderfully nostalgic world of Hawkins but with Netflix's suggestion for what I might watch next.&nbsp; Netflix aptly combined the context of Stranger Things with my viewing habits to come up with a strong set of candidates. It was the idea of context that intrigued me. If I liked Stranger Things, then I would probably like Aliens too. Could I use the context of a recent Visit to predict the next one?</p> <p>What makes the ability to predict a user's next Visit valuable? Suppose a user, Alice, is currently at a Goodlife Fitness and we have a recommender system predict that she will go to McDonald's next. Other business in the Food &amp; Beverage space could participate in a real-time bid for the ability to market to Alice right before she makes her decision. The confidence of the recommendation could help the bidders tune their bids.&nbsp; A second potential application is an emergency alert system. Let us say that the police just evacuated the McDonalds Alice was likely to visit; an alert could be sent to Alice warning her to steer clear. The applications of these recommendations go on and on- the value is obvious. Additionally, the system seemed feasible given the MobilityTrace I was working with and my time constraints. Thus my goal was clear-build a near real-time recommender system for shopping trip forecasting.</p>"
                }, {
                    title: "Ngrams",
                    snippet: "cool",
                    body: "<p><strong>A Foundation</strong></p> <p>Language is such an ambiguous construct that an entire subfield of AI exists focusing exclusively on its minutia. When reviewing literate on next location recommenders, I realized that despite using different monikers the essence of the best approach was equivalent to that of a well-established technique from NLP called Ngram modeling. I implemented this technique as the basis of GeoPredict making modifications and enhancements for the mobility domain along the way.</p> <p>To illustrate the fascinating connection between NLP and mobility I will explain Ngram modeling from the perspective of natural languages and later make the bridge to the mobility domain. This explanation is rather formal so do bear with me.</p> <p>Let the occurrence of a word w in a corpus (training text) be an event. If we consider each event to be independent, the probability of any given event is simple:</p> <figure class='highlight'> <pre>P(x) = occurrences of w in corpus / total number of words in corpus</pre> </figure> <p>Thus, an elementary language model (unigram model) would only contain counts of different words. Unigram models are poor because they do not capture structure. Words are not put together randomly but are ordered to adhere to a grammar. To build a better model, we must capture this structure. Therefore, we consider the probability of an event as conditional on the ones that came before.</p> <p>Consider we observe a sequence of new events &ldquo;the fox jumps.&rdquo; The probability of the event &ldquo;jumps&rdquo; is dependent on the sequence &ldquo;the fox&rdquo; appearing before it. Thus, we can write the conditional probability as:</p> <p class='text-center'><em>P(jumps | the fox) = P(the fox jumps)/P(the fox)</em></p> <p>To calculate this probability, our model must contain counts of sequences of words. We call these sequences Ngrams, hence the name Ngram modeling. The length of an Ngram is indicated by its prefix.</p> <p class='text-center'><em>Unigram -&gt; one word (no context- initial model)</em><br /><em>Bigram -&gt; two words (one word of context)</em><br /><em>Trigram -&gt; three word (two words of context)</em></p> <p>Consider P(jumps| the fox) again. To find the conditional probability, we will need to find the probability of the bigram &ldquo;the fox&rdquo; and the trigram &ldquo;the fox jumps.&rdquo; We calculate these probabilities by using the counts from a trigram model. Note we can derive bigram counts of &ldquo;the fox&rdquo; just by adding up all trigrams that contain that bigram.</p> <p class='text-center'><em>Let C(x) be a count function for a specific sequence x </em><br /><em>Let T be the number of grams in the corpus with length indicated by the subscript</em><br /><em>P (the fox jumps) = C(the fox jumps)/T<sub>3</sub></em><br /><em>P(the fox) = C(the fox)/T<sub>2</sub></em><br /><em>* Together then: P(jumps | the fox) = C(the fox jumps)/N<sub>3</sub> / C(the fox)/N<sub>2</sub></em></p> <p>We can simplify * because N<sub>2</sub> will always be one more than N3. For large counts this tiny difference will not significantly impact the probability- we almost have symmetry. Let us use a concrete example to prove this.</p> <p class='text-center'><em>Corpus: &ldquo;The fox is the fox and when the fox jumps he howls&rdquo;</em><br /><em> C(the fox jumps) = 1</em><br /><em>C(the fox) = 3</em><br /><em>N<sub>3</sub> = 10 and thus N<sub>2</sub> must equal 11</em><br /><em>Proof: 1/10 / 3/11 approximately equal to 1/3</em></p> <p><strong>Markov Assumption</strong></p> <p>Thus far we have assumed a limited context of just two words &ldquo;the fox&rdquo;. What if we had an entire sentence of context? Should we keep Ngrams of extended sequences? As empirically observed, keeping bigrams or trigrams will be sufficient. This idea is called the Markov assumption. The probability of a word depends most strongly on the previous few words.</p> <p><strong>Making Predictions<br /></strong></p> <p>We have seen thus far how we find the probability for a specified event given context but what if we have context and need to make a prediction? Consider the context &ldquo;the fox,&rdquo; how do we decide which word comes next? We use our Ngram model to build a probability distribution using the counts of all trigrams which start with the bigram 'the fox.'</p> <p class='text-center'><em>The fox goes =2 </em><br /><em>The fox eats = 3 </em><br /><em>The fox snoozes =4 </em><br /><em>This yield a distribution with 2/9, 3/9, 2/9.</em></p> <p>Looking at this distribution, we would choose &ldquo;eats&rdquo; as the most likely next event because it has the highest probability. Utilizing an Ngram model in such a way is called Maximum Likelihood Estimation (MLE).</p> <p>Now that we understand Ngram modeling it is time to see how we can apply it to the mobility domain. Read the next blog post to find out!</p>"
                }]

            }, {
                title: "Predict Engine",
                posts: [{
                    title: "Part 1",
                    snippet: "Part 2 conent"

                }, {
                    title: "Part 1",
                    snippet: "Part 2 conent"
                }]
            }];
        }
    });
});
;define("ember-app/routes/blog/index", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model() {
            return this.modelFor("blog");
        }
    });
});
;define('ember-app/routes/blog/post', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model(params) {

            var allSeries = this.modelFor("blog");

            var currentSeries;
            var links = [];
            var currentPost;
            var i;

            for (i = 0; i < allSeries.length; i++) {
                if (params.series_id == allSeries[i].title) {
                    currentSeries = allSeries[i]; //pick the correct series
                }
            }

            for (i = 0; i < currentSeries.posts.length; i++) {
                if (params.post_id == currentSeries.posts[i].title) {
                    currentPost = currentSeries.posts[i]; //pick the correct post from the series
                }
                links.push(currentSeries.posts[i].title);
            }

            return Ember.RSVP.hash({
                post: currentPost,
                links: links,
                series_name: currentSeries.title
            });
        }
    });
});
;define('ember-app/routes/contact', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('ember-app/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define("ember-app/routes/projects", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        model() {
            return [{
                title: "GeoPredict",
                pic: ["pandas", "jupyter", "python"],
                body: "<p class='card-text'> Data is the primary driver of the digital economy and the world’s most valuable commodity. While it is well understood how to capture and store data from Internet-connected sources, processing it is less clear—lots of data goes to waste. One data set which is particularly difficult to process is geolocation data (a set of GPS coordinates of a user device as it moves through space). Enter GeoPredict, a machine learning model I developed using Pandas during my time as a research associate at Western University. GeoPredict mines value from massive sets of geolocation data collected on a continuous basis bya pplying A.I techniques from the field of natural language processing.</p>",
                first: true
            }, {
                title: "Scaling Monster",
                pic: ["docker", "spark", "swarm", "unix", "ec2", "hadoop"],
                body: "<p class='card-text'>Once I finished my summer research effort (GeoPredict) I wondered how to deploy the modelinto a production environment and make it scale. What I came up with is a framework for deploying scalablerecommender systems built on Spark SQL as web-accessible microservices. Through the use ofcontainerization, the implementation of a restFULL API and sophisticated integrated command-line tooling, Idesigned this framework to be highly usable, portable, customizable and interoperable. The framework ismeant to allow data scientist to focus on building ML models using instead of worrying about managingclusters and dealing with pesky configuration.</p>"

            }, {
                title: "Unity Minigame Suite",
                pic: ["unity", "csharp", "lamp"],
                body: "<p class='card-text'>During my second year of study, I was tasked with constructing several mini-games with Unity3D and creating a portal for accessing them with an account system. The system I developed features cloud save and global leader boards built with a primitive LAMP architecture.</p><p class='card-text'>Go ahead and try it out yourself.Please be patient upon initial load. To make an account login as an administrator with user account and password:'admin'. </p>",
                slide: ["1", "2", "3", "4", "5", "6", "7"]

            }];
        }

    });
});
;define('ember-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("ember-app/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SWvh4J1M", "block": "{\"symbols\":[\"navbar\",\"nav\"],\"statements\":[[4,\"bs-navbar\",null,[[\"toggleBreakpoint\",\"backgroundColor\"],[\"sm\",\"#FFFFF\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"navbar-header\"],[9],[0,\"\\n    \"],[1,[22,1,[\"toggle\"]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],null,{\"statements\":[[4,\"component\",[[22,1,[\"nav\"]]],null,{\"statements\":[[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[4,\"component\",[[22,2,[\"link-to\"]],\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"EC\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[4,\"component\",[[22,2,[\"link-to\"]],\"projects\"],null,{\"statements\":[[0,\"Projects\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[4,\"component\",[[22,2,[\"link-to\"]],\"blog\"],null,{\"statements\":[[0,\"Blog\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[4,\"component\",[[22,2,[\"link-to\"]],\"contact\"],null,{\"statements\":[[0,\"Contact\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[7,\"div\"],[11,\"class\",\"container-fluid bg-light pt-5 pb-5\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[1,[21,\"outlet\"],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container-fluid bg-dark py-5 px-5\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row text-light \"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-auto \"],[9],[0,\"\\n      \"],[7,\"h2\"],[9],[0,\"Evan Cole\"],[10],[0,\"\\n      Software Engineer\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-md-auto\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"fa fa-envelope\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\" employment@evancole.io\\n      \"],[7,\"br\"],[9],[10],[0,\" \"],[7,\"i\"],[11,\"class\",\"fa fa-github\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\" github.com/ecole5\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/application.hbs" } });
});
;define("ember-app/templates/blog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "axhxOOXE", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/blog.hbs" } });
});
;define("ember-app/templates/blog/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "u7lEvPjU", "block": "{\"symbols\":[\"series\",\"index\",\"post\",\"postIndex\"],\"statements\":[[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"if\",[[22,2,[]],\"<hr>\"],null],true],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card mb-5\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"card-header\"],[9],[0,\"\\n        \"],[7,\"h3\"],[9],[0,\" \"],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\" \"],[1,[22,1,[\"description\"]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"card-deck\"],[9],[0,\"\\n\"],[4,\"each\",[[22,1,[\"posts\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"card \"],[9],[0,\"\\n              \"],[7,\"img\"],[11,\"class\",\"card-img-top\"],[12,\"src\",[28,[\"img/blog/\",[22,1,[\"title\"]],\"/badge/\",[22,4,[]],\".png\"]]],[11,\"alt\",\"Card image cap\"],[9],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n                \"],[7,\"h5\"],[11,\"class\",\"card-title\"],[9],[1,[22,3,[\"title\"]],false],[10],[0,\"\\n                \"],[7,\"p\"],[11,\"class\",\"card-text\"],[9],[1,[22,3,[\"snippet\"]],false],[10],[0,\"\\n                \"],[4,\"link-to\",[\"blog.post\",[22,1,[\"title\"]],[22,3,[\"title\"]]],null,{\"statements\":[[0,\"Read More\"]],\"parameters\":[]},null],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"card-footer\"],[9],[0,\"\\n                \"],[7,\"p\"],[11,\"class\",\"card-text\"],[9],[0,\"\\n                  \"],[7,\"small\"],[11,\"class\",\"text-muted\"],[9],[0,\"Last updated 3 mins ago\"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[3,4]},null],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/blog/index.hbs" } });
});
;define("ember-app/templates/blog/post", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nQmcEwSM", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"card\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-header\"],[9],[0,\"\\n        \"],[7,\"h1\"],[9],[1,[23,[\"model\",\"series_name\"]],false],[10],[0,\"\\n        \"],[7,\"h3\"],[9],[1,[23,[\"model\",\"post\",\"title\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n        \"],[1,[23,[\"model\",\"post\",\"body\"]],true],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-footer\"],[9],[0,\"\\n        \"],[1,[27,\"bootstrap-paginate\",null,[[\"links\",\"series_name\",\"post_title\"],[[23,[\"model\",\"links\"]],[23,[\"model\",\"series_name\"]],[23,[\"model\",\"post\",\"title\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/blog/post.hbs" } });
});
;define("ember-app/templates/components/bootstrap-paginate", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+/BUdGEY", "block": "{\"symbols\":[\"link\",\"index\",\"&default\"],\"statements\":[[7,\"ul\"],[11,\"class\",\"pagination\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"prev\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[11,\"class\",\"page-item\"],[9],[0,\"\\n            \"],[4,\"link-to\",[\"blog.post\",[23,[\"series_name\"]],[23,[\"prev\"]]],[[\"class\"],[\"page-link\"]],{\"statements\":[[0,\"Previous\"]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"li\"],[11,\"class\",\"page-item disabled\"],[9],[0,\"\\n            \"],[7,\"a\"],[11,\"class\",\"page-link\"],[11,\"href\",\"#\"],[11,\"tabindex\",\"-1\"],[9],[0,\"Previous\"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[4,\"each\",[[23,[\"links\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[12,\"class\",[28,[\"page-item \",[27,\"if\",[[27,\"equal\",[[22,2,[]],[23,[\"activeIndex\"]]],null],\"active\"],null]]]],[9],[0,\"\\n            \"],[4,\"link-to\",[\"blog.post\",[23,[\"series_name\"]],[22,1,[]]],[[\"class\"],[\"page-link\"]],{\"statements\":[[1,[27,\"incr\",[[22,2,[]]],null],false]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[4,\"if\",[[23,[\"next\"]]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[11,\"class\",\"page-item\"],[9],[0,\"\\n            \"],[4,\"link-to\",[\"blog.post\",[23,[\"series_name\"]],[23,[\"next\"]]],[[\"class\"],[\"page-link\"]],{\"statements\":[[0,\"Next\"]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"li\"],[11,\"class\",\"page-item disabled\"],[9],[0,\"\\n            \"],[7,\"a\"],[11,\"class\",\"page-link\"],[11,\"href\",\"#\"],[11,\"tabindex\",\"-1\"],[9],[0,\"Next\"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[10],[0,\"\\n\"],[14,3]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/components/bootstrap-paginate.hbs" } });
});
;define('ember-app/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define('ember-app/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("ember-app/templates/contact", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vpk6EgFh", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/contact.hbs" } });
});
;define("ember-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WkgfBRbp", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row align-items-center \"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-sm-6 pt-5  \"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n            \"],[7,\"h1\"],[9],[0,\"Evan Cole\"],[10],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"lead\"],[9],[0,\"Software Engineer\"],[10],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"Big Data, Machine Learning, Web Development\"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"src\",\"img/evan.png\"],[11,\"class\",\" img-fluid mx-auto d-bloc\"],[11,\"alt\",\"Evan Cole\"],[11,\"style\",\"max-width:85%\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/index.hbs" } });
});
;define("ember-app/templates/projects", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oaSNninu", "block": "{\"symbols\":[\"project\",\"index\",\"car\",\"slide\",\"pict\"],\"statements\":[[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"card mb-5\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"card-header\"],[9],[0,\"\\n            \"],[7,\"h2\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n\"],[4,\"each\",[[22,1,[\"pic\"]]],null,{\"statements\":[[0,\"                \"],[7,\"img\"],[12,\"src\",[28,[\"img/skill/\",[22,5,[]],\".png\"]]],[11,\"class\",\"img-thumbnail\"],[9],[10],[0,\" \"]],\"parameters\":[5]},null],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n            \"],[4,\"if\",[[22,1,[\"slide\"]]],null,{\"statements\":[[0,\" \"],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"col-sm\"],[9],[0,\"\\n\"],[4,\"bs-carousel\",null,[[\"autoPlay\",\"interval\",\"showIndicators\"],[true,2000,false]],{\"statements\":[[4,\"each\",[[22,1,[\"slide\"]]],null,{\"statements\":[[4,\"component\",[[22,3,[\"slide\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"img\"],[12,\"src\",[28,[\"img/ugames/\",[22,4,[]],\".png\"]]],[11,\"style\",\"display: block; width:100%;\"],[9],[10],[0,\" \"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[3]},null],[0,\"                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"col-sm pt-3\"],[9],[0,\"\\n                        \"],[1,[22,1,[\"body\"]],true],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"]],\"parameters\":[]},{\"statements\":[[0,\"\\n                \"],[1,[22,1,[\"body\"]],true],[0,\" \"]],\"parameters\":[]}],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/projects.hbs" } });
});
;

;define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-app/app")["default"].create({"name":"ember-app","version":"0.0.0+0e35257a"});
          }
        
//# sourceMappingURL=ember-app.map
