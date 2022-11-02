import React from "react";
import "./About.style";
import { StyledAbout, StyledImg, StyledP } from "./About.style";

const About = () => {
  return (
    <StyledAbout>
      <h2>ABOUT</h2>
      <StyledImg
        src="https://static01.nyt.com/images/2022/03/13/magazine/13Mag-Bruno-01/13Mag-Bruno-01-mobileMasterAt3x.jpg"
        alt="img"
      />
      <StyledP>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          inventore eligendi voluptates doloremque odit nesciunt sequi
          temporibus quos quod enim asperiores ipsum commodi mollitia possimus
          iste quidem, eius dolores eum, qui est sunt. Amet vel totam quia qui
          officia, similique accusamus illum suscipit dolorum ad nihil excepturi
          repellendus, vitae quas. Excepturi suscipit quisquam repellat magnam
          ducimus corrupti dolorem pariatur incidunt beatae accusantium?
          Delectus dolorem reiciendis porro neque error sit, a voluptates
          quisquam fuga, earum quasi obcaecati dolorum similique, sapiente est!
          Ad nesciunt maiores quas amet totam minima quisquam alias iusto?
          Magnam vero assumenda expedita repellat laudantium. Numquam dolores,
          quis odit quo aperiam at saepe repellendus nihil dolore, mollitia
          quisquam autem praesentium, excepturi temporibus dolorem maiores quam
          recusandae obcaecati magnam exercitationem!
        </p>
      </StyledP>
    </StyledAbout>
  );
};

export default About;
