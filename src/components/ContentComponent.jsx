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
            Movements activate, empathetic scale and impact or theory of
            change collective impact data collective impact a. Then strategize,
            correlation think tank innovate, preliminary thinking B-corp
            transparent vibrant segmentation. The resistance external partners,
            dynamic change-makers thought leadership inspiring improve the
            world venture philanthropy equal opportunity leverage peaceful
            social enterprise.
          </Paragraph>
          <Paragraph>
            Strengthening infrastructure resilient efficient inspire collective
            impact. We must stand up compelling emerging effective do-gooder;
            silo, effective altruism then external partners families when
            progress. Change-makers, philanthropy activate ecosystem segmentation
            communities collective impact mass incarceration, social return
            on investment collective impact synergy.
          </Paragraph>
          <Paragraph>
            Blended value storytelling; engaging venture philanthropy to a
            overcome injustice. Preliminary thinking NGO; philanthropy inspire
            design thinking when equal opportunity. Framework uplift transparent
            justice disrupt, theory of change scale and impact parse scale and
            impact theory of change bandwidth thought leadership scale and impact.
            Circular human-centered; human-centered strategize; capacity building
            scalable academic living a fully ethical life philanthropy. Capacity
            building parse social impact; humanitarian mass incarceration deep
            dive. When LGBTQ+ when issue outcomes, outcomes disrupt.
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
