import React, {useState} from 'react';
import {MdAttachMoney} from 'react-icons/md';
import {IoMdTime} from 'react-icons/io';
import {AiOutlineSchedule} from 'react-icons/ai';
import {IoMdCash} from 'react-icons/io';

export default function OurServiceTwo() {
  const [state] = useState([
    {
      pic: MdAttachMoney,
      title: 'low price',
      info: 'Getting your device repaired shouldn’t break the bank. Our low price guarantee ensures that we always offer the best price to our customers. Just bring in any local competitor’s published price for the same repair, and we will happily match and beat their price by'
    },
    {
      pic: IoMdTime,
      title: 'repair in 10 minutes',
      info: 'From friendly and informative technicians, to online repair tracking, we make repair easy. We know how important your device is to you, so we promise to return it to you as quickly as possible, and keep you informed every step of the way. Most of our popular repairs can even be performed while you wait'
    },
    {
      pic: AiOutlineSchedule,
      title: 'warranty',
      info: 'Simple Mac offers a superior 3 months warranty! In the rare event that you experience an issue with your repaired device, we back all our repairs with a 3 month warranty on screen repair and 90-day, hassle free warranty. At any of our locations'
    },
    {
      pic: IoMdCash,
      title: 'get cash on phones',
      info: 'Have an old iPhone, iPad, iPod, Mac or any device that you don’t want? Bring it in and we will give you the best offer for your old devices. If it is not at any value, we will recycle it for you free of charge'
    }
  ])
  return (
    <div className="ourservice-two">
      <div className="section">
        {state.map((item, index) => (
          <div key={index} className="column">
            <item.pic className="img" />
            <h3>{item.title}</h3>
            <p>{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
