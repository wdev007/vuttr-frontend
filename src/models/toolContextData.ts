import { Tool } from './tool';

export interface ToolContextData {
  tools: Array<Tool>;
  setTools: (tools: any) => void;
}
