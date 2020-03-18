/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CookieCategory {
    'data': any[];
    'index': number;
    'onCheckCategory': Function;
    'onOpenCloseCategory': Function;
  }
  interface CookieConsent {
    /**
    * This will add a classname to the component wrapper
    */
    'branding': string;
    /**
    * Configuration of your cookie consent window
    */
    'config': string;
    /**
    * Set the domain where you want your cookiepreferences to be saved. eg. 'antwerpen.be'
    */
    'domain': string;
    /**
    * Set the current enovironment, this will impact the name of the cookie where the preferences will be saved. eg. 'acceptance'
    */
    'environment': string;
    /**
    * If set to true, the modal will show the cookie preferences and not the default screen with the title and description
    */
    'openPreferences': boolean;
  }
  interface CookieContentBlocker {
    /**
    * Show or hide icon
    */
    'icon': boolean;
    /**
    * Type of content you want to hide. Choose from: 'youtube', 'facebook', 'twitter', 'instagram'
    */
    'type': string;
  }
  interface CookieTable {
    'data': any[];
  }
}

declare global {


  interface HTMLCookieCategoryElement extends Components.CookieCategory, HTMLStencilElement {}
  var HTMLCookieCategoryElement: {
    prototype: HTMLCookieCategoryElement;
    new (): HTMLCookieCategoryElement;
  };

  interface HTMLCookieConsentElement extends Components.CookieConsent, HTMLStencilElement {}
  var HTMLCookieConsentElement: {
    prototype: HTMLCookieConsentElement;
    new (): HTMLCookieConsentElement;
  };

  interface HTMLCookieContentBlockerElement extends Components.CookieContentBlocker, HTMLStencilElement {}
  var HTMLCookieContentBlockerElement: {
    prototype: HTMLCookieContentBlockerElement;
    new (): HTMLCookieContentBlockerElement;
  };

  interface HTMLCookieTableElement extends Components.CookieTable, HTMLStencilElement {}
  var HTMLCookieTableElement: {
    prototype: HTMLCookieTableElement;
    new (): HTMLCookieTableElement;
  };
  interface HTMLElementTagNameMap {
    'cookie-category': HTMLCookieCategoryElement;
    'cookie-consent': HTMLCookieConsentElement;
    'cookie-content-blocker': HTMLCookieContentBlockerElement;
    'cookie-table': HTMLCookieTableElement;
  }
}

declare namespace LocalJSX {
  interface CookieCategory {
    'data'?: any[];
    'index'?: number;
    'onCheckCategory'?: Function;
    'onOpenCloseCategory'?: Function;
  }
  interface CookieConsent {
    /**
    * This will add a classname to the component wrapper
    */
    'branding'?: string;
    /**
    * Configuration of your cookie consent window
    */
    'config'?: string;
    /**
    * Set the domain where you want your cookiepreferences to be saved. eg. 'antwerpen.be'
    */
    'domain'?: string;
    /**
    * Set the current enovironment, this will impact the name of the cookie where the preferences will be saved. eg. 'acceptance'
    */
    'environment'?: string;
    /**
    * If set to true, the modal will show the cookie preferences and not the default screen with the title and description
    */
    'openPreferences'?: boolean;
  }
  interface CookieContentBlocker {
    /**
    * Show or hide icon
    */
    'icon'?: boolean;
    /**
    * Type of content you want to hide. Choose from: 'youtube', 'facebook', 'twitter', 'instagram'
    */
    'type'?: string;
  }
  interface CookieTable {
    'data'?: any[];
  }

  interface IntrinsicElements {
    'cookie-category': CookieCategory;
    'cookie-consent': CookieConsent;
    'cookie-content-blocker': CookieContentBlocker;
    'cookie-table': CookieTable;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'cookie-category': LocalJSX.CookieCategory & JSXBase.HTMLAttributes<HTMLCookieCategoryElement>;
      'cookie-consent': LocalJSX.CookieConsent & JSXBase.HTMLAttributes<HTMLCookieConsentElement>;
      'cookie-content-blocker': LocalJSX.CookieContentBlocker & JSXBase.HTMLAttributes<HTMLCookieContentBlockerElement>;
      'cookie-table': LocalJSX.CookieTable & JSXBase.HTMLAttributes<HTMLCookieTableElement>;
    }
  }
}


