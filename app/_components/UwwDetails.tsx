import {Title, WorkDetails} from "./WorkDetails";
import styled from "styled-components";
import UwLogo from "../../public/UniversityofWisconsinWhitewaterSeal.webp";
import Image from "next/image";

const UwwDetails = () => {
  return (
    <WorkDetails title={<Title>UW - Whitewater</Title>}>
      <p>
        Bachelor of Science in Management Computer Systems
      </p>

      <StyledUwwImage alt="UW-WHitewater" src={UwLogo}/>
    </WorkDetails>
  )
}

const StyledUwwImage = styled(Image)`
  height: auto;
  filter: grayscale(1);
  opacity: .5;
  margin-bottom: 40px;
  margin-top: 20px;
  width: 30%;
`

export default UwwDetails;