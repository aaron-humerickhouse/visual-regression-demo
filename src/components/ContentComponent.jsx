import React from 'react';
import {Button, Layout, Typography} from "antd";
import CarouselComponent from "./content/CarouselComponent";

class ContentComponent extends React.Component {
  render() {
    const { Content } = Layout;
    const { Title, Paragraph } = Typography;

    return(
      <Content
        className="site-layout-background"
        id={"content-component"}
        style={{
          padding: 24,
          margin: 0,
          minHeight: 1250,
        }}
      >
        <Typography>
          <Title>Introduction</Title>
          <CarouselComponent/>
          <Paragraph>
            Macs are too expensive, apparently Retina is just a made-up
            Apple name, which no other operating system is better than
            Windows so as to why shouldn’t the Microsoft store look like
            the Apple store while the screen on Surface is as good as the
            iPad.
          </Paragraph>
          <Paragraph>
            Windows Phone is beautiful then the same power for half the
            money overall Apple is closed and ossified, approaching petrified,
            when the iPad is too expensive, for example Surface is the
            ultimate tablet, next Apple is so boring.
          </Paragraph>
          <Paragraph>
            The iPhone is boring so that you can’t upgrade a Mac in contrast
            the iPhone is too expensive, while people will start developing
            for the new Windows soon, whose Apple fanboys are so smug, whereas
            you can’t get Office on an iPad.
          </Paragraph>
          <Paragraph>
            Apple won’t let you do anything with their computers, besides my
            Ultrabook looks like a Mac except it is cheaper moreover Windows
            Phone 8 is much better than Windows Phone 7, eventually enterprise
            will always need Windows, thus you can’t play games on a Mac.
          </Paragraph>
          <Title level={2}>Piracy</Title>
          <Paragraph>
            Cutlass rigging Brethren of the Coast me loot careen American Main
            sheet main sheet galleon. Shrouds furl boom main sheet log carouser
            schooner driver Blimey rigging. Swing the lead pinnace capstan gibbet
            rutters code of conduct Letter of Marque bilge topgallant draught.
          </Paragraph>

          <Paragraph>
            <ul>
              <li>
                <Button type={'link'}>Blackbeard</Button>
              </li>
              <li>
                <Button type={'link'}>Anne Bonny</Button>
              </li>
              <li>
                <Button type={'link'}>Gan Ning</Button>
              </li>
            </ul>
          </Paragraph>
        </Typography>
      </Content>
    )
  }
}

export default ContentComponent;
