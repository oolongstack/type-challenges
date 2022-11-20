declare const MY_NAME: string;
declare const MY_AGE: string;
declare function foo(args: T): T;
declare module "*.jpg" {
  const src: string;
  export default src;
}
type DefineComponent = {
  props: any;
};

declare module "*.vue" {
  const component: DefineComponent;
  export default component;
}
