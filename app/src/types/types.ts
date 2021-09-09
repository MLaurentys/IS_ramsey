import { Core, ElementDefinition, Stylesheet, LayoutOptions } from "cytoscape";

export interface PayloadCytoscapeStart {
  rootElement: HTMLElement;
}

export interface PayloadGraph6UpdateDisplayed {
  graph: CytoscapeGraph;
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
  currentGraph: String;
  inputText: String;
  inputError: String;
}
