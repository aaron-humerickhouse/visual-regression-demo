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
            Now that there is the Tec-9, a crappy spray gun from South Miami.
            This gun is advertised as the most popular gun in American crime.
            Do you believe that shit? It actually says that in the little book
            that comes with it: the most popular gun in American crime. Like
            they're actually proud of that shit.
          </Paragraph>
          <Paragraph>The path of the righteous man is beset on all sides by the
            iniquities of the selfish and the tyranny of evil men. Blessed is he
            who, in the name of charity and good will, shepherds the weak through
            the valley of darkness, for he is truly his brother's keeper and the
            finder of lost children. And I will strike down upon thee with great
            vengeance and furious anger those who would attempt to poison and
            destroy My brothers. And you will know My name is the Lord when I
            lay My vengeance upon thee.
          </Paragraph>
          <Paragraph>
            You think water moves fast? You should see ice. It moves like it
            has a mind. Like it knows it killed the world once and got a taste
            for murder. After the avalanche, it took us a week to climb out.
            Now, I don't know exactly when we turned on each other, but I know
            that seven of us survived the slide... and only five made it out.
            Now we took an oath, that I'm breaking now. We said we'd say it was
            the snow that killed the other two, but it wasn't. Nature is lethal
            but it doesn't hold a candle to man.
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
