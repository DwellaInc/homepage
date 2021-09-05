import React from 'react';
import './styles.scss';
import { walkThroughInfo } from './info';
import TextWithImage from '../../../components/TextWithImage/TextWithImage';

export default function WalkThrough() {
  return (
    <section className="WT">
      <div className="WT-title">
        <h3>Walkthrough</h3>
      </div>
      {walkThroughInfo.map((item) => {
        return (
          <>
            <TextWithImage
              title={item.title}
              text={item.text}
              number={item.number}
              image={item.image}
              background={item.background}
            />
          </>
        );
      })}
    </section>
  );
}
