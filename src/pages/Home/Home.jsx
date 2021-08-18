import React from 'react';
import Button from '../../components/Button/Button';

export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <h2>test</h2>
      <Button
        class="btn btn-primary"
        text="Primary"
        clickHandler={() => console.log('hello')}
      />
    </>
  );
}
