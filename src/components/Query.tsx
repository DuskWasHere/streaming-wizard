import type { Component } from 'solid-js';

import styles from './Query.module.css';

export interface QueryProps {
  inputRef: (el: HTMLInputElement) => void;
}

export const Query: Component<QueryProps> = (props) => {
  return (
    <input ref={props.inputRef} class={styles.Query}
      type="text"
    />
  );
}
