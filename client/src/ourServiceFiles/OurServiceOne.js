import React, { useState } from 'react';
import iphonexbroken from '../images/iphonexbroken.jpg';
import ipadbroken from '../images/ipadbroken.jpg';
import mackbookbroken from '../images/mackbookbroken.jpg';
import galaxybroken from '../images/galaxybroken.jpg';
import laptopbroken from '../images/laptopbroken.jpg';
import tabletbroken from '../images/tabletbroken.jpg';
import smartphonebroken from '../images/smartphonebroken.jpg';
import ipodbroken from '../images/ipodbroken.jpg';

export default function OurServiceOne() {
  const [state] = useState([
    {
      pic: iphonexbroken,
      title: 'Iphone Repairs',
      info: ['iphone 11 pro max','iphone 11 pro','iphone 11','iphone xs max','iphopne x, xs, xr','iphone 8 plus','iphone 8','iphone 7 plus','iphone 7','and other models ass well']
    },
    {
      pic: galaxybroken,
      title: 'Galaxy Repairs',
      info: ['galaxy s10 plus','galaxys10 e','galaxy s9 plus','galaxy s8 plus','galaxy s7 edge','galaxy s6 edge plus','galaxy s6 edge','s3, s4, s5, s6, s7, s8, s9, s10','and other models as well']
    },
    {
      pic: smartphonebroken,
      title: 'Smartphone Repairs',
      info: ['nokia','htc','blackberry','lg','motorola','j-3,4,5,6,7','one-plus','sony','huawei','other models as well']
    },
    {
      pic: ipadbroken,
      title: 'Ipad Repairs',
      info: ['ipad pro 12.9','ipad pro 10.5','ipad pro 9.7','ipad air','ipad air 2nd gen','ipad 1,2,3,4,5,6','ipad mini 1','ipad mini 2','ipad mini 3','ipad mini 4','other iPads as well']
    },
    {
      pic: laptopbroken,
      title: 'Laptop Repairs',
      info: ['hp','Dell','Asus','acer','toshiba','microsoft','Huawei','other models as well']
    },
    {
      pic: tabletbroken,
      title: 'tablet repairs',
      info: ['Microsoft Surface','hd tablet','fire tablet','Asus','google','nexus','dragon touch','other models as well']
    },
    {
      pic: mackbookbroken,
      title: 'mackbook repairs',
      info: ['i-mac','mackbook pro','mackbook air','also data recover','other apple Computers ass well']
    },
    {
      pic: ipodbroken,
      title: 'ipod repairs',
      info: ['ipod touch','ipod nano','ipod classic','ipod shuffle','ipod mini','and other models as well']
    }
  ]);
  return (
    <div className="ourservice-one">
      <div className="header">
          <h1 className="text-title">We offer the best repair services in New York City</h1>
          <h4>We can assure you that we have seen it all! From smartphones that have been run over by a car, to tablets that have taken a dive in a pool, we are prepared to face anything that comes our way. Every Simple Mac technician goes through an intensive training process, and we maintain an environment of constant learning, so no device is too new, no technology too complicate</h4>
      </div>
      <div className="section">
        {state.map((item, index) => (
          <div key={index} className="column">
            <div className="image-wrapper">
              <img src={item.pic} alt="devices" />
            </div>
            <h3>{item.title}</h3>
            {item.info.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
