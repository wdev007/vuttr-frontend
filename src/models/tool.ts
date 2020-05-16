export interface Tool {
  id: string;
  title: string;
  link: string;
  description: string;
  tags: Array<string>;
  checkedTag?: string;
}
