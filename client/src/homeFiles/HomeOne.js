import React, { useState } from 'react';
import iphone from '../images/iphone.jpg';
import mackbook from '../images/mackbook.jpg';
import ipad from '../images/ipad.jpg';

export default function HomeOne() {
  const [state] = useState([
    {
      pic: iphone,
      title: 'Iphone Repair',
      info: ['Dropped your iphone 6? We can get you ready for action like never before with another substitution screen while you hold up! No compelling reason to pay a colossal protection deductible or purchase another iPhone at full retail cost! Our iPhone Repairs are done same day benefit or even while you hold up! A run of the mill repair takes 30 minutes or less. We know how frustrating a cracked broken screen can be on your iPhone! It can render your iPhone useless if you aren’t ab ttouch your screen, move your slider or icons, or see your LCD display panel']
    },
    {
      pic: ipad,
      title: 'Ipad Repair',
      info: ['A broken ipad is intense particularly on the off chance that it is a piece of your business, instruction, or only for individual use. We Repair iPads day by day and can repair anything from a broken or smashed glass, lcd panel, water harm, or even a product issue! Cracked Glass on your iPad? Get it repaired with our fast same day service by claiming your offer on our Facebook page. Note: Excessive frame damage may lead to slight delays in repair times']
    },
    {
      pic: mackbook,
      title: 'Computer Service',
      info: ['We provide a variety of computer related services, such as the topics below:','Computer Repair','Computer Optimization','Computer Setup','System Recovery iPad, iPhone Repair','Android Repair','Laptop Repair (including LCD replacement)','Commercial,  Business','Video Game Console (and Portable Repair)']
    }
  ]);
  return (
    <div className="home-one">
      <div className="section">
        {state.map((item, index) => (
          <div key={index} className="column">
            <div className="image-wrapper">
              <img src={item.pic} alt="devices" />
            </div>
            <h3 className="text-title">{item.title}</h3>
            {item.info.map((p, index) =>  (
              <p key={index}>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
