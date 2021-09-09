import { Core, ElementDefinition, Stylesheet, LayoutOptions } from "cytoscape";

export interface PayloadCytoscapeStart {
  rootElement: HTMLElement;
}

export interface PayloadGraph6UpdateInput {
  value: String;
}

export interface CytoscapeGraph {
  vertices: ElementDefinition[];
  edges: ElementDefinition[];
}

export interface CytoscapeState {
  vertices: ElementDefinition[];
  edges: ElementDefinition[];
  styles: Stylesheet[];
  layout: LayoutOptions;
  cy: Core | undefined;
}

export interface Graph6State {
  inputText: String;
  inputError: String;
}
