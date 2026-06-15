import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'dms-anim': React.HTMLAttributes<HTMLElement> & {
        kind: 'discovery' | 'journey' | 'channel' | 'stack' | 'measurement' | 'orchestration';
        accent?: string;
        transparent?: boolean | string;
      };
    }
  }
}
