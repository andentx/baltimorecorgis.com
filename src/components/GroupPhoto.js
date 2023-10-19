import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const GroupPhotoContainer = styled.div`
  margin-bottom: min(5vw, 3rem);
`;

const GroupPhoto = () => {
  return (
    <>
      <GroupPhotoContainer>
        <StaticImage
          src="../images/photos/group-photo-4000.png"
          alt="A photo of the Baltimore Corgi group at Bark Social in 2023"
          placeholder="none"
        />
      </GroupPhotoContainer>
    </>
  );
};

export default GroupPhoto;
