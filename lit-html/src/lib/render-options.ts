/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * @module lit-html
 */

import {TemplateFactory} from './template-factory.js';

export interface RenderOptions {
  readonly templateFactory: TemplateFactory;
  readonly eventContext?: EventTarget;
  hydrate?: boolean;
  prerenderedParts?: PartInfo[];
  dataChanged?: boolean;
  ssr?: boolean;
}

export type PartInfo = {
  startNode: Node,
  endNode: Node,
  children?: PartInfo[],
};
