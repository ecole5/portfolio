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
;define("ember-app/helpers/equal", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.equal = equal;
  function equal([first, second]) {
    console.log("cools");
    return first == second;
  }

  exports.default = Ember.Helper.helper(equal);
});
;define("ember-app/helpers/hash", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.hash = hash;
  function hash(params /*, hash*/) {

    return "-d334";
  }

  exports.default = Ember.Helper.helper(hash);
});
;define('ember-app/helpers/incr', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.incr = incr;
  function incr([number]) {

    return number + 1;
  }

  exports.default = Ember.Helper.helper(incr);
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
                description: " This series details the development of a novel machine learning solution called GeoPredict to leverage mobility data by making next place predictions for shopping trips.",
                posts: [{
                    title: "Part 1: Origins & Data Exploration",
                    snippet: "In this section we start by exploring the data and defining the problem domain.",
                    body: "<p><strong>Introduction&nbsp; </strong></p> <p>This series of blog posts details the development of a novel machine learning solution called GeoPredict. I designed GeoPredict with the intent of leveraging large-scale mobility data in a commercially viable manner. I conducted this effort on behalf of an industry partner while working in the laboratory of the Western Engineering Dean of Research, in my capacity as a Summer Research Associate.</p> <p>The first step towards the development of GeoPredict was gaining a solid understanding of the problem domain-the data. The data provided by my industry partner was not just raw mobility data but a richer set of contextual and semantic information. Let us try to unpack the structure of this data.</p> <p>&nbsp;</p> <p><strong>Understanding the Data</strong></p> <p>We call a set of data a MobilityTrace and a discrete data point a Visit. My partner collected the provided MobilityTrace from their user base (millions of users) over three months.</p><div class='text-center'><img src='/img/blog/GeoPredict/1a.png' class='img-fluid py-5' style='max-width:70%;'></div>&nbsp; <p>A Visit is created when a Source captures a new Coordinate. A Coordinate contains the position of the Source (longitude and latitude) and the precision of this measurement.</p> <p>Precision is the attribute of a Coordinate accounting for the uncertainty in the position calculation. It is the radius of the circle surrounding the given position. Each Source uses different methods for determining position. These include but are not limited to WiFi triangulation, cellular triangulation, and GPS. Each of these methods has different ranges of baseline precision that vary due to environmental factors.</p> <p>A Source itself is the specific platform upon which my partner&rsquo;s application runs. Sources include web browsers, mobile operating systems, and mobile browsers.&nbsp; As people tend to keep their cell phones on their person Visits collected from mobile Sources are vital because they serve as a better proxy for human mobility than static Sources such as a desktop web browser.</p> <p>A userID is an attribute assigned to each Visit to enable analysis on a per-user basis. A user could have multiple ids if they are not logged in across Sources. For privacy, my partner opted not to tie each Visit to a complete UserProfile but only the numeric userID.&nbsp;</p> <p>The most significant preprocessing step on the provided MobilityTrace was tagging each Visit with a commercial POI (point of interest). Each POI is an individual location belonging to a POIGroup. For example, Starbucks is a POIGroup, but the Starbucks with the address 1 Bayside Drive is a POI.</p> <p>POI tagging was accomplished using a commercial database licensed by my partner. My partner removed all Visits that could not be tagged.&nbsp; This purge is significant in that any value to be had from the MobilityTrace would relate to shopping trips as opposed to general mobility.</p> <p><strong>&nbsp;</strong></p> <p><strong>Unsupervised Approach</strong></p> <p>Once I fully understood the nature of the data, I turned my attention to refining my goal: what type of value could my solution deliver? My first intuition was to see if I could uncover any hidden structural value with an unsupervised learning approach. I started with just one feature, using the distance between the Coordinates to cluster the Visits with k-means. Upon inspection of the resulting clusters, I realized that I had stumbled upon a method of discovering POIs. At a low resolution the group labels represented entire geographic regions (cities and towns), but at a higher resolution, the labels signified POIs.</p> <p>By utilizing a third-party database, my partner was already able to label these clusters. I wondered, however, what would happen as new POIs emerged. Would my partner depend on their data provider to provide timely updates? Was there a way I could build a system to discover and label new POIs to break this dependence? I started brainstormed some potential solutions.</p> <p>The first approach that came to mind was to match the cluster coordinates to an address on a city map and then build a web crawler to find mentions of the address on social media with the intention of extracting a POI name. Another potential solution would be to collect photos geotagged with cluster&rsquo;s coordinates and use computer vision techniques to obtain the names of the storefronts in these pictures. I reckoned Google might use a similar approach with the vast amount of Street View imagery.&nbsp; Although both these techniques were of interest to me from an academic standpoint, they were outside my operating parameters in that in that they would require additional data (city maps, user photos) and thus not be commercially viable to my partner.</p> <p>I continued by trying to cluster a higher dimensional set of features considering time, distance and category. I used principal component analysis to produce a unified distance metric for input into k-means. Upon inspection of the results, I was unable to draw any useful conclusions. I decided it was time to move on.</p> <p><strong>&nbsp;</strong></p> <p><strong>Supervised Approach: Recommender Systems</strong></p> <p>Frustrated with my lack of progress I resolved to binge-watch an entire season of Stranger Things on Netflix. Upon completion of the season, I was left impressed. Not just by the wonderfully nostalgic world of Hawkins but with Netflix's suggestion for what I might watch next.&nbsp; Netflix aptly combined the context of Stranger Things with my viewing habits to come up with a strong set of candidates. It was the idea of context that intrigued me. If I liked Stranger Things, then I would probably like Aliens too. Could I use the context of a recent Visit to predict the next one?</p> <p>What makes the ability to predict a user's next Visit valuable? Suppose a user, Alice, is currently at a Goodlife Fitness and we have a recommender system predict that she will go to McDonald's next. Other business in the Food &amp; Beverage space could participate in a real-time bid for the ability to market to Alice right before she makes her decision. The confidence of the recommendation could help the bidders tune their bids.&nbsp; A second potential application is an emergency alert system. Let us say that the police just evacuated the McDonalds Alice was likely to visit; an alert could be sent to Alice warning her to steer clear. The applications of these recommendations go on and on- the value is obvious. Additionally, the system seemed feasible given the MobilityTrace I was working with and my time constraints. Thus it was clear- my goal would be to build a near real-time recommender system for shopping trip forecasting.</p>"
                }, {
                    title: "Part 2: Mobility Markov Chains (MMCs)",
                    snippet: "Now we explore the Mobility Markov Chain forming the basis of our model.",
                    body: "<p><strong>Introduction</strong></p><p>Having gained a solid grasp of both the problem and solution domains it was time to move towards implementation. How do we achieve effective next place that trip prediction is a subset of the general mobility problem I figured it was unnecessary to reinvent the wheel, so I started researching techniques which consider complete MobilityTraces. After reviewing the literature, I landed on Markov Chains as the basis of my implementation. While there are techniques involving neural networks that are slightly more accurate, they don't pay dividends considering their complexity and required computing power. The drivers of human mobility are not so involved as to need neural layers to capture them.</p><p>&nbsp;</p><p><strong>Mobility Markov Chains</strong></p><p>A Markov Chain is a stochastic model in which the frequency of transition between states governs the probability distribution of the random variable. Many subdisciplines of A.I. use Markov Chains in some way or another, and every application has its domain-specific nomenclature. In the mobility context, we adopt the name Mobility Markov Chain (MMC). MMCs have an intuitive visualization as a state diagram as seen below.</p><div class='text-center'><img src='/img/blog/GeoPredict/2a.png' class='img-fluid py-5' style='max-width:40%;'></div><p>In this MMC the nodes signify state (a specific POI) while the labels of the directed edges represent the probability of transition from one POI to the next. The simplest way to train an MMC is to record the counts of past transitions between two states using a set of training data (MobilityTrace). At prediction time we can build a probability distribution by looking at all the edges connected to the current state.</p><p>The MMC above considers one piece of context, the current POI, to define the state of the system. However, we could consider more context in our predictions and calculate the transition probabilities not just based on a single edge put on a path. Let us define some new terminology to describe the amount of context used in the calculation of the transition probabilities. &nbsp;&nbsp;&nbsp;</p> &nbsp;<p style='text-align: center;'><em> Let an (N-MMC) be an MMC in which we calculate probabilities for paths of length N-1.</em></p><p style='text-align: center;'><em>Let a sequence of Visits to specific POIs be called an n-visit where n is the number of POIs as a numeral prefix.</em></p><p style='text-align: center;'>&nbsp;</p><p><strong>Rationalizing N-MMC For Trip Prediction</strong></p><p>Why do we consider context at all when making predictions? Why not just use a 1-MMC in which our state diagram devolves into a bubble chart? While a 1-MMC does capture preference, it fails to account for the structure of the data. Remember that time determines the order of the Visits in a MobilityTrace and if we don&rsquo;t consider the order of the Visits we miss out on the hidden features that govern human mobility like the distance between POIs and POI Category.</p><p>Consider the bi-visit &ldquo;McDonalds SplashWorld&rdquo; This would be very rare because most people do not like to eat immediately before going swimming. This rule would be part of what I call a &ldquo;mobility grammar.&rdquo; Another rule that most people follow is that they visit POIs near each other or on their trajectory of travel. As mobility grammars are far from universal, we do not write these rules but capture them empirically through building N-MMCs.</p><p>The most important characteristic of an N-MMC is that it obey the Markov Property allowing us to consider only a limited amount of context. If we consider too much context, we will have a data sparsity problem in which the training examples will be insufficient to make accurate predictions. Conversely, if we use to little context, then we may not capture essential relationships. While we know in the case of general mobility modeling, it is best to go with a 2-MMC model it is unclear how much context is best when it comes to trip prediction. My intuition was that a similar amount of context would be appropriate; however, this was only a hypothesis which needed validation to ensure the correct parameter be selected. We validate this hypothesis in the next section through empirical means.</p><p>&nbsp;</p><p><strong>Calculating Conditional Probability</strong></p><p>Now I want to explain how we can calculate the probabilities of transition for a given N-MMC. We are going to approach this calculation more formally so bear with me.</p><p>&nbsp;</p><p style='text-align: center;'><em>Let the occurrence of an n-Visit as defined above be analogous to an event in the probability space </em></p><p style='text-align: center; line-height: normal;'><em>Markov Assumption: Let P(S<sub>k</sub>|S<sub>1</sub>S<sub>2</sub>S<sub>3</sub>&hellip;S<sub>k-1</sub>) approx equal </em><em>P(S<sub>k</sub>|S<sub>k+1-n</sub>&hellip;S<sub>k-1</sub>) &nbsp;for N &gt; 1</em></p><p style='text-align: center; line-height: normal;'>&nbsp;</p><p style='line-height: normal;'>Consider a MobilityTrace containing the sequence of Visits: &ldquo;McDonald&rsquo;s Walmart Starbucks FedEx.&rdquo; In a 3-MMC model the probability of the sequence &ldquo;FedEx&rdquo; is only dependent on the sequence &ldquo;Walmart Starbucks&rdquo; appearing before it. Thus, we ignore McDonald's and can write the conditional probability as:</p><p style='line-height: normal;'>&nbsp;</p><p style='text-align: center; line-height: normal;'><em>P(FedEx | Walmart Starbucks) = P(Walmart Starbucks FedEx)/P(Walmart Starbucks)</em></p><p style='text-align: center; line-height: normal;'>&nbsp;</p><p style='line-height: normal;'>To calculate this probability, our model must contain counts of n-visits. To find the conditional probability, we will need to find the probability of the bi-visit &ldquo;Walmart Starbucks&rdquo; and the tri-visit &ldquo;Walmart Starbucks FedEx.&rdquo; We calculate these probabilities by counting how often they occur in the training data. Note that in a 3-MMC we must only actually store the tri-visits as we can derive bi-visit counts of &ldquo;Walmart Starbucks&rdquo; just by adding up all tri-visits that contain that bi-visit.</p><p style='line-height: normal;'>&nbsp;</p><p style='text-align: center; line-height: normal;'><em>Let C(x) be a count function for a specific n-visit </em><br /><em>Let T be the number of n-visits in the MobilityTrace with length indicated by the subscript</em><br /><em>P (Walmart Starbucks FedEx) = C(Walmart Starbucks FedEx)/T<sub>3</sub></em><br /><em>P(Walmart Starbucks) = C(Walmart Starbucks)/T<sub>2</sub></em><br /><em>* Together then: P(FedEx | Walmart Starbucks) = C(Walmart Starbucks FedEx)/N<sub>3</sub> / C(Walmart Starbucks)/N<sub>2</sub></em></p><p style='text-align: center; line-height: normal;'>&nbsp;</p><p style='line-height: normal;'>We can simplify * because N<sub>2</sub> will always be one more than N<sub>3</sub>. For large counts this tiny difference will not significantly impact the probability- we almost have symmetry. Let us use a concrete example to prove this.</p>&nbsp;<p style='text-align: center; line-height: normal;'><em>MobilityTrace: &ldquo;Walmart Starbucks is Walmart Starbucks and when Walmart Starbucks FedEx he howls&rdquo;</em><br /><em>C(Walmart Starbucks FedEx) = 1</em><br /><em>C(Walmart Starbucks) = 3</em><br /><em>N<sub>3</sub> = 10 and thus N<sub>2</sub> must equal 11</em><br /><em>Proof: 1/10 / 3/11 approximately equal to 1/3</em></p><p style='text-align: center; line-height: normal;'>&nbsp;</p><p style='line-height: normal;'><strong>Making Predictions</strong></p><p style='line-height: normal;'>We have seen thus far how we find the probability for a specified state given context but what if we have context and need to make a prediction? Consider the context &ldquo;Walmart Starbucks,&rdquo; how do we decide which state comes next? We use our Ngram model to build a probability distribution using the counts of all tri-visits which start with the bi-visit 'Walmart Starbucks.'</p><p style='line-height: normal;'>&nbsp;</p><p style='text-align: center; line-height: normal;'><em>Walmart Starbucks Costco =2 </em><br /><em>Walmart Starbucks Shell = 3 </em><br /><em>Walmart Starbucks Lowe&rsquo;s &nbsp;=4 </em><br /><em>This yield a distribution with 2/9, 3/9, 2/9.</em></p><p style='text-align: center; line-height: normal;'>&nbsp;</p><p style='line-height: normal;'>Looking at this distribution, we would choose &ldquo;Lowe&rsquo;s&rdquo; as the most likely next state because it has the highest probability. Utilizing an N-MMC in such a way is called Maximum Likelihood Estimation (MLE).</p><p style='line-height: normal;'>By now we should have a solid understanding of the N-MMC- a powerful tool for next place prediction. In the following article, we will tailor this tool for trip prediction.</p>"
                }, {
                    title: "Part 3: Improvements and Considerations",
                    snippet: "Now we build better N-MMC to meet the demands of trip prediction.",
                    body: "<p><strong>Introduction</strong></p> <p>The N-MMC we have developed thus far are excellent tools for the general problem of next place prediction. Now we must focus on adapting the model to accommodate the complications of trip prediction.</p> <p>&nbsp;</p> <p><strong>Trip Separation</strong></p> <p>The structure of the data poses the first complication. So far we have assumed that all Visits in a MobilityTrace are sequential, but in reality, they are not because Visits to private locations have been removed. Non-sequential Visits results in false inferences when training our N-MMC. To illustrate this point consider training a 2-MMC using the following MobilityTrace:</p> <p>&nbsp;</p> <p style='text-align: center;'><em>Bed Bath Beyond -&gt; 7:00</em></p> <p style='text-align: center;'><em>McDonald's -&gt; 7:30</em></p> <p style='text-align: center;'><em>SplashWorld -&gt; 20:00</em></p> <p>&nbsp;</p> <p>There are two bi-visits in this MobilityTrace: &ldquo;Bed Bath Beyond McDonald's&rdquo; and &ldquo;McDonald's SplashWorld&rdquo; each with a single occurrence. Thus, if given the context McDonald's we would predict SplashWorld as the next POI. Looking at the timestamps, we notice that McDonalds and SplashWorld are many hours apart. It is reasonable to assume that the user didn&rsquo;t just stay at McDonald's till 20:00 and likely visited other personal POIs in between McDonald's and SplashWorld that were removed. These Visits are not sequential, yet we treat them as if they are. If we don&rsquo;t rectify this issue, we might make the false inference that people tend to eat right before they swim which for many people is not the case.</p> <p>Another way to think about this MobilityTrace is that it is composed of two separate trips.&nbsp; The first trip in the morning and the second at night. To avoid false inferences, we must make sure that all visits in an n-visit are from the same trip. Luckily it is relatively straightforward to create these groupings by merely looking at the amount of time between two Visits.</p> <p>&nbsp;</p> <p style='text-align: center;'><em>For two &ldquo;sequential&rdquo; Visits in a MobilityTrace let the first Visit occur at time T<sub>a</sub> and the second Visit with time T<sub>b</sub>.</em></p> <p style='text-align: center;'><em>Let T<sub>e</sub> be a hyperparameter defining a time threshold between two trips</em></p> <p style='text-align: center;'><em>If |T<sub>b</sub>-T<sub>a</sub>| &gt; T<sub>e</sub> punctuate MobilityTrace with End of Trip (EoT) after T<sub>a</sub></em></p> <p>&nbsp;</p> <p>How do we figure out the correct hypermeter T<sub>e</sub> to prevent false inferences? The ideal solution would be to optimize T<sub>e</sub> using a duplicate MobilityTrace containing EoT markers. Without this labeled MobilityTrace we don&rsquo;t have ground truth, and the best we can do is make an educated guess- somewhere around three to four hours should be ideal.</p> <p>&nbsp;</p> <p><strong>Selecting the Right (N)-MMC</strong></p> <p>Now that we have split our MobilityTrace into trips, we move on to choosing the correct amount of context. The MobilityTrace provided by my partner was captured over three months, and the number of Visits recorded for each user varied significantly meaning that the correct N might differ depending on the user.</p> <p>My intuition was that the N value appropriate for trip prediction would be in the neighborhood of the N value for the general mobility problem (N=2).&nbsp; The big difference between general mobility and trip prediction is that long n-visits are less frequent because they get cut off when trips end, thus a smaller N value might be better because n-visits of a high order would mean many unseen contexts.</p> <p>I moved forward and conducted an empirical analysis, comparing N=1 to N=5 MMC for every user.&nbsp; The data showed that for most users the 2-MMC model was the best. For the most active users (the top 10%), however, a 3-MMC was better. If we had six months of data would this change anything? The answer is not clear because while we would have more Visits, perhaps the prior Visits would be outdated. It may be the case that 3-MMC only works well for users that go on long shopping trips.</p> <p>&nbsp;</p> <p><strong>Smoothing</strong></p> <p>Maximum likelihood estimation is an adequate technique if all we care about it trying to make the best guess possible with the data we have. A great deal of value, however, comes from being able to present a probability distribution for every prediction so that the data is more actionable based on the tolerances of error for the desired application. For example, if GeoPredict is being used to send emergency alert messages warning people to steer clear of a specific POI, any POI in the distribution with 10% likelihood or higher might be considered actionable.&nbsp; If GeoPredict is used for targeted advertising, then perhaps you might only want to push ads when there is a &gt;60% chance of the next Visit being to a particular POI.</p> <p>If we care about the accuracy of the distribution, then we must adjust for the unseen events in the probability space (the unseen n-visits). As N increases the number of possible paths we can take through our MMC explodes by #POI<sup>n</sup>. As these paths (n-visits) increase the data set becomes sparer. We can define the total number of possible POIs as the number of POIs in a geographic region available in the Google Maps database.&nbsp; There are several methods for smoothing our distributions to resolve the sparsity problem, but perhaps the best is an adapted version of Good-Turing frequency estimation which works by borrowing some of the probability space from the seen events and allocating it to the unseen events. This technique is commonly employed in NLP for similar purposes.</p> <p>&nbsp;</p> <p><strong>Multiple Models</strong></p> <p>A 3-MMC inherently contains a 2-MMC and 1-MMC inside of it thus we only need to store a 3-MMC (tri-visits) and can derive the counts of bi-visits and uni-visits. However, this process is computationally expensive, and we are looking to maximize speed to achieve near real-time predictions it is best to make a time-space tradeoff by generating hash tables to store the count of all n-visits from n=1 to the desired N. While to make predictions with a 3-MMC we only actually need tri-visits and bi-visits it is prudent to keep uni-visits because it allows us the flexibility to use a lower order N model if we don&rsquo;t have enough context so that we can always make some educated prediction.</p> <p>&nbsp;</p> <p><strong>Expanded Context (Day of The Week)</strong></p> <p>So far we have constructed a model in which the state is represented only by physical and semantic location. What about time? Can we use temporal context to aid in predictions? To realize this expanded context I built 7 N-MMC as opposed to one in which each N-MMC was trained using trips from a particular day of the week. The idea here is that many commercial offers and promotions occur on a specific day of the week and that may be a determent of consumer shopping habits.</p> <p>I tested my day of the week N-MMCs by considering the day of the week at prediction time and making the prediction only using the associated N-MMC. Unfourtantly the results were worse than just using a single N-MMC. There just wasn&rsquo;t enough data to make this approach work because so many n-visits were unseen and thus the system kept reverting down to uni-MMC to make predictions. Perhaps with more Visits (6 month collection period), this would be worth another shot.</p> <p>&nbsp;</p> <p><strong>Training/Operation Phase Notes</strong></p> <p>During training, we can think of each trip as a MobilityTrace which we train separately on the same table of counts.&nbsp; At the start of the trip we have no context, so we can only count uni-visits and then as we get more context we count bigger n-visits up to the (N) parameter of the selected model (N=2 or N=3).</p> <p>When making predictions (operation phase) we receive Visits on a continual basis as they occur. We cannot know if the next Visit we will receive will be on a different trip thus we always make a prediction as soon as a Visit is received. We do need to consider the case where N &gt; 2 as we can apply of threshold Te between the context to ensure it is from the same trip. Remember that if the time gap is over the threshold and we have to through away the first piece of context we can revert to a 2-MMC model.</p> <p>During prediction phase, we also must make sure that the timestamp on the most recent Visit we receive is close to the current system time.&nbsp; If there is too much of a delay in receiving the Visit, it is likely the user always transitioned.</p> <p>All the visits we capture during the operation phase can be saved so we can update the model's counts in the future.</p> <p>&nbsp;</p> <p><strong>Conclusion</strong></p> <p>So there we have it- a novel recommender system to address the problem of shopping trip prediction.&nbsp; Of course, as with any data solution, there is lots of room for improvement particularly in the area of metric development and testing. Overall, however, GeoPredict performs similarly to recommender systems for general mobility- which is an excellent result. To see how we scale GeoPredict to handle big data read my series on SparkPlug.</p>"

                }]
            }, {
                title: "SparkPlug",
                description: "This series explores a framework call SparkPlug designed for the rapid development and deployment of distributed Spark applications to production environments.",
                posts: [{
                    title: "Part 1: Where do frameworks come from?",
                    snippet: "We start by seeing how a specific solution to scale GeoPredict became a framework.",
                    body: "<p><strong>Introduction</strong></p><p>The world is undergoing a big data revolution- a new age gold rush. Never in the history of human civilization has there been such an abundance of data. Remarkably, however, most of this data goes to waste. The situation many organizations find themselves in today is analogous to sitting on vast reserves of gold-rich ore but not knowing how to extract it.&nbsp; The difficulty with big data lies in both variety and scale. Firstly, there is no perfect cookie-cutter solution: every data set requires a unique methodology that accounts for its domain-specific features. Secondly, real-world big data implementations must scale across compute clusters to handle massive volume and velocity thus adding significant complexity.</p><p>Having just finished developing GeoPredict, a recommender for shopping trip prediction, I was familiar with one side of the big data coin. GeoPredict addressed the specificity of the mobility domain, but it was not designed to scale. If GeoPredict were to be of any real value to my partner, it would need to be capable of making near real-time predictions for millions of users simultaneously. To accomplish this in an economically viable way, I knew I needed to enable GeoPredict to scale horizontally across commodity hardware. Also, I needed a way to integrate my solution with my partner&rsquo;s system quickly.&nbsp;&nbsp; I launched this newfound effort as my CAPSTONE project while maintaining the stakeholders from the original GeoPredict effort.</p><p>&nbsp;</p><p><strong>Scaling GeoPredict</strong></p><p>The key to horizontal scale is to distribute the computation across a cluster.&nbsp; Luckily many big data engines exist that help abstract away the enormous complexity of designing these parallel applications. After researching my options, I landed on the Spark engine as it offers better performance than modern Hadoop MapReduce and has broad adoption in industry. Given that I already knew SQL I implemented GeoPredict as a series of database operations using the SparkSQL library with the PySpark API.</p><p>To achieve interoperability, I decided that the system should be completely decoupled from my partner&rsquo;s. Thus I decided to implement a microservice architecture in which communication between the two systems occurred over a RESTful API. I went ahead and encapsulated different functions of GeoPredict into routes of the API and designed a way to submit each route to the Spark cluster for on-demand computation.</p><p>&nbsp;</p><p><strong>Towards A Framework</strong></p><p>When I had finished implementing the architecture, I needed a way to make it easy for my partner to deploy the system. I found Spark cluster configuration to be quite tedious, so I decided to containerize the entire architecture and the Spark cluster itself with Docker.</p><p>After finishing my work and demonstrating the system to my supervisor and partner I came to understand that the real value in what I had built was not a scalable version of GeoPredict but an architecture and deployment strategy which could form the basis of a framework I call <strong>SparkPlug</strong>.</p><p>To realize the vision of a framework, as opposed to a specific implementation I developed the SparkPlug CLI. The CLI provides a user-friendly way to build out the SparkPlug architecture and automates the deployment and configuration of the containerized infrastructure.</p><p>By providing an interoperable architecture and a containerized deployment strategy SparkPlug makes it possible to bring data solutions to market rapidly. SparkPlug enables data scientist with limited programming experience to create commercial solutions to big data problems.</p><p>In the next few blog offices, we will dive into the details of the three central components of SparkPlug: the Microservice Architecture, the Deployment Strategy and SparkPlug CLI.</p>"

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
                body: "<p class='card-text'>GeoPredict is a novel recommender system for shopping trip prediction. The system combines shopping history with timely contextual clues to deliver probabilistic forecasts of future movement to commercial locations. GeoPredict is built using specially trained Markov Chains and borrows techniques from many disciplines across the AI landscape.</p><p class='card-text'>GeoPredict was initially developed in Python using the Pandas library and has since been redeveloped using the SparkPlug framework to handle big data and enable interoperability.</p><p class='card-text'>At the request of my partner, the source code remains proprietary. However, I have been cleared to provide a detailed technical rundown of my development process and solution which is available on the blog portion of this site.</p>",
                link: "blog"
            }, {
                title: "SparkPlug",
                pic: ["docker", "spark", "swarm", "unix", "ec2", "hadoop"],
                body: "<p class='card-text'>SparkPlug is a framework for the rapid development and deployment of distributed Spark applications. By providing an interoperable architecture and a containerized deployment strategy SparkPlug makes it possible to rapidly bring data solutions to market without a great deal of programming expertise.</p><p class='card-text'>SparkPlug applications are built and deployed using an easy to use command line interface that provides blueprinting, service management and configuration. SparkPlug applications are implemented with a Microservice Architecture in which big data tasks running on the cluster are exposed via a RESTful API. Through the containerization of the entire architecture (including Spark and Hadoop clusters), SparkPlug enables instant out go the box deployment and easy scaling.</p><p class='card-text'>While the project repository is not available due to an intellectual property agreement further information about SparkPlug and its development can be found on the blog.</p>",
                link: "blog"

            }, {
                title: "Unity Minigame Portal",
                pic: ["unity", "csharp", "lamp"],
                body: "<p class='card-text'>In this project, I developed a series of mini-games in Unity 3D and built a customizable portal to access them. Undertaken as part of a design course, the development of this application was meant to be a learning experience. It turns out that building game objects are an excellent way to understand object-oriented programming and gain practical exposure to composition, inheritance, and polymorphic reuse. Additionally, I had the opportunity to implement design patterns to optimize/standardize the application architecture.</p><p class='card-text'>Given that this project was a learning experience I decided to take things a step further by extending the requirements and exploring the LAMP stack to implement a web service to achieve cloud capabilities throughout the application.</p><p class='card-text'>The application was designed to be a standalone application for computers and mobile phones. However, I have rebuilt the application using WebGL for use in your browser. As the application was not optimized for WebGL, please give it a minute or two to load.</p><p class='card-text'>To make an account login to the administrator page using the credentials below and select create user:</p><p class='card-text'>Username: admin</p><p class='card-text'>Password: admin</p>",
                slide: ["1", "2", "3", "4", "5", "6", "7"],
                link: "/ugames/play.html"

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
  exports.default = Ember.HTMLBars.template({ "id": "hgvMaKBt", "block": "{\"symbols\":[\"navbar\",\"nav\"],\"statements\":[[4,\"bs-navbar\",null,[[\"toggleBreakpoint\",\"backgroundColor\"],[\"sm\",\"#FFFFF\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"navbar-header\"],[9],[0,\"\\n    \"],[1,[22,1,[\"toggle\"]],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],null,{\"statements\":[[4,\"component\",[[22,1,[\"nav\"]]],null,{\"statements\":[[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[4,\"component\",[[22,2,[\"link-to\"]],\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"EC\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[4,\"component\",[[22,2,[\"link-to\"]],\"projects\"],null,{\"statements\":[[0,\"Projects\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,2,[\"item\"]]],null,{\"statements\":[[0,\"        \"],[4,\"component\",[[22,2,[\"link-to\"]],\"blog\"],null,{\"statements\":[[0,\"Blog\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[7,\"div\"],[11,\"class\",\"container-fluid bg-light pt-5 pb-5\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[1,[21,\"outlet\"],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"container-fluid bg-dark py-5 px-5\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\" row text-light \"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-sm-auto py-3 \"],[9],[0,\"\\n      \"],[7,\"h2\"],[9],[0,\"Evan Cole\"],[10],[0,\"\\n      Software Engineer\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-sm-auto py-3 \"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"fa fa-envelope\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"mailto:ecole5@uwo.ca\"],[11,\"class\",\"badge badge-dark \"],[9],[0,\"ecole5@uwo.ca\"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\" \"],[7,\"i\"],[11,\"class\",\"fa fa-github\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"http://github.com/ecole5 \"],[11,\"class\",\"badge badge-dark \"],[9],[0,\"github.com/ecole5\"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\" \"],[7,\"i\"],[11,\"class\",\"fa fa-linkedin\"],[11,\"aria-hidden\",\"true\"],[9],[10],[0,\"\\n      \"],[7,\"a\"],[11,\"href\",\"http://linkedin.com/in/ecole5 \"],[11,\"class\",\"badge badge-dark \"],[9],[0,\"linkedin.com/in/ecole5\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/application.hbs" } });
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
  exports.default = Ember.HTMLBars.template({ "id": "8O1exZU/", "block": "{\"symbols\":[\"series\",\"index\",\"post\",\"postIndex\"],\"statements\":[[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[1,[27,\"if\",[[22,2,[]],\"<hr>\"],null],true],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"card mb-5 br-lg\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-header\"],[9],[0,\"\\n      \"],[7,\"h3\"],[9],[0,\" \"],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" \"],[1,[22,1,[\"description\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n\"],[4,\"each\",[[22,1,[\"posts\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"col-md\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"card mb-5\"],[9],[0,\"\\n              \"],[7,\"img\"],[11,\"class\",\" card-img-top\"],[12,\"src\",[28,[\"img/blog/\",[22,1,[\"title\"]],\"/badge/\",[22,4,[]],[21,\"hash\"],\".png\"]]],[11,\"alt\",\"Card image cap\"],[9],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n                \"],[7,\"h5\"],[11,\"class\",\"card-title\"],[9],[1,[22,3,[\"title\"]],false],[10],[0,\"\\n                \"],[7,\"p\"],[11,\"class\",\"card-text\"],[9],[1,[22,3,[\"snippet\"]],false],[10],[0,\"\\n                \"],[4,\"link-to\",[\"blog.post\",[22,1,[\"title\"]],[22,3,[\"title\"]]],null,{\"statements\":[[0,\"Read More\"]],\"parameters\":[]},null],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"card-footer\"],[9],[0,\"\\n                \"],[7,\"p\"],[11,\"class\",\"card-text\"],[9],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[3,4]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/blog/index.hbs" } });
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
;define("ember-app/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Zqxt2SSi", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row align-items-center betterFont\"],[11,\"style\",\"min-height: 85vh;\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-sm-6 pt-5  \"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"text-center\"],[9],[0,\"\\n            \"],[7,\"h1\"],[9],[0,\"Evan Cole\"],[10],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"lead\"],[9],[0,\"Software Engineer\"],[10],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"Big Data, Machine Learning, Web Development\"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"col-sm-4\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"src\",\"img/evan.png\"],[11,\"class\",\" img-fluid mx-auto d-bloc\"],[11,\"alt\",\"Evan Cole\"],[11,\"style\",\"max-width:90%\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/index.hbs" } });
});
;define("ember-app/templates/projects", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FmwFvJ6f", "block": "{\"symbols\":[\"project\",\"index\",\"car\",\"slide\",\"pict\"],\"statements\":[[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"card mb-5\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"card-header\"],[9],[0,\"\\n            \"],[7,\"h3\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n\"],[4,\"each\",[[22,1,[\"pic\"]]],null,{\"statements\":[[0,\"                \"],[7,\"img\"],[12,\"src\",[28,[\"img/skill/\",[22,5,[]],[21,\"hash\"],\".png\"]]],[12,\"alt\",[28,[[22,5,[]],\" Logo\"]]],[11,\"class\",\"img-thumbnail\"],[9],[10],[0,\" \"]],\"parameters\":[5]},null],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"card-body\"],[9],[0,\"\\n            \"],[4,\"if\",[[22,1,[\"slide\"]]],null,{\"statements\":[[0,\" \"],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"col-sm pt-3\"],[9],[0,\"\\n                        \"],[1,[22,1,[\"body\"]],true],[0,\"\\n                    \"],[10],[0,\"\\n                    \"],[7,\"div\"],[11,\"class\",\"col-sm pt-3\"],[9],[0,\"\\n\"],[4,\"bs-carousel\",null,[[\"autoPlay\",\"interval\",\"showIndicators\"],[true,2000,false]],{\"statements\":[[4,\"each\",[[22,1,[\"slide\"]]],null,{\"statements\":[[4,\"component\",[[22,3,[\"slide\"]]],null,{\"statements\":[[0,\"                                    \"],[7,\"img\"],[12,\"src\",[28,[\"img/ugames/\",[22,4,[]],[21,\"hash\"],\".png\"]]],[12,\"alt\",[28,[\"Unity Games Demo \",[22,4,[]]]]],[11,\"style\",\"display: block; width:100%;\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[4]},null]],\"parameters\":[3]},null],[0,\"                        \"],[7,\"br\"],[9],[10],[0,\"\\n                        \"],[7,\"a\"],[11,\"class\",\"btn btn-light\"],[11,\"href\",\"/ugames/play.html\"],[11,\"role\",\"button\"],[9],[0,\"Lanch App\"],[10],[0,\"\\n                        \"],[7,\"br\"],[9],[10],[0,\"\\n                        \"],[7,\"a\"],[11,\"class\",\"btn btn-light\"],[11,\"href\",\"https://github.com/ecole5/UnityGames\"],[11,\"role\",\"button\"],[9],[0,\"View\\n                            Repository\"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"]],\"parameters\":[]},{\"statements\":[[0,\"\\n                \"],[1,[22,1,[\"body\"]],true],[0,\"\\n                \"],[4,\"link-to\",[[22,1,[\"link\"]]],null,{\"statements\":[[1,[22,1,[\"title\"]],false],[0,\" Blog Series\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-app/templates/projects.hbs" } });
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
            require("ember-app/app")["default"].create({"name":"ember-app","version":"0.0.0+f98b1216"});
          }
        
//# sourceMappingURL=ember-app.map
