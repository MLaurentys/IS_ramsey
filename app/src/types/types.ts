import { Core, ElementDefinition, Stylesheet, LayoutOptions } from "cytoscape";

export interface PayloadCytoscapeStart {
  rootElement: HTMLElement;
}

export interface CytoscapeState {
  vertices: ElementDefinition[];
  edges: ElementDefinition[];
  styles: Stylesheet[];
  layout: LayoutOptions;
  cy: Core | undefined;
}
