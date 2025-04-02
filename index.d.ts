declare module 'red-envelope-rain-vue' {
  import { DefineComponent } from 'vue';
  
  const RedEnvelopeRain: DefineComponent<{
    num?: number;
    icon?: string;
  }>;
  
  export default RedEnvelopeRain;
}
