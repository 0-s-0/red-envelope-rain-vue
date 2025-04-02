// shims.d.ts 或 shims-vue.d.ts
declare module "*.png" {
  const value: string;
  export default value;
}