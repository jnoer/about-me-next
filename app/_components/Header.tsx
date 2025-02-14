import styled from "styled-components";
import gitHubImage from "../../public/github-mark.svg";
import mailIcon from "../../public/mail-icon.svg";
import {motion} from "motion/react";
import {device, maxWidth} from "../styles/styles";
import {Dispatch, SetStateAction} from "react";
import Image from "next/image";

const smiley = <div>🤓</div>;
const cool = <div>😎</div>

interface PropTypes {
  isCoolMode: boolean;
  setCoolMode: Dispatch<SetStateAction<boolean>>;
}

const containerVariants = {
  out: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.1,
    },
  },
};

const linkVariants = {
  out: {
    scale: 0,
  },
  in: {
    scale: 1,
  },
};

const Header = ({isCoolMode, setCoolMode}: PropTypes) => {
  const onCoolModeClick = () => {
    setCoolMode(!isCoolMode);
  }

  return (
    <StyledHeader>
      <TitleSection>
        <StyledH1
          initial={{opacity: .3}}
          animate={{opacity: 1}}
          transition={{duration: 5}}
        >
          Jason Noer
        </StyledH1>

        <LinkContainer variants={containerVariants} initial="out" animate="in">
          <motion.a href="https://github.com/jnoer/about-me-next/" target="_blank" variants={linkVariants}>
            <motion.div
              whileHover={{scale: 1.2}}
              whileTap={{scale: 0.9}}
            >
              <Image
                alt="GitHub"
                src={gitHubImage}
                style={{height: 'auto', width: '40px'}}
              />
            </motion.div>
          </motion.a>

          <motion.a href="mailto:jason.noer@gmail.com" target="_blank" variants={linkVariants}>
            <motion.div
              whileHover={{scale: 1.2}}
              whileTap={{scale: 0.9}}
            >
              <Image
                alt="email"
                src={mailIcon}
                style={{height: 'auto', width: '50px', marginTop: '-3px'}}
              />
            </motion.div>
          </motion.a>

          <StyledCoolModeButton
            onClick={onCoolModeClick}
            whileHover={{scale: 1.3, rotate: 180}}
            variants={linkVariants}
          >
            {isCoolMode ? cool : smiley}
          </StyledCoolModeButton>
        </LinkContainer>
      </TitleSection>

      <StyledDescription>
        <StyledH2 style={{color: 'mediumaquamarine', marginRight: '6px'}}>&#123;&#123;</StyledH2>
        <StyledH2>Full-stack software developer</StyledH2>
        <StyledH2 style={{color: 'mediumaquamarine', marginLeft: '6px'}}>&#125;&#125;</StyledH2>
      </StyledDescription>
    </StyledHeader>
  )
}

const StyledDescription = styled.div`
  margin-top: 10px;
`

const StyledCoolModeButton = styled(motion.div)`
  background: none;
  border: none;
  margin-top: -9px;
  font-size: 42px;
  padding: 0;
  cursor: pointer;

  @media ${device.mobile} {
    display: none;
  }

  @media ${device.desktop} {
    display: block;
  }
`

const LinkContainer = styled(motion.div)`
  display: flex;
  gap: 10px;
  flex: 1 1 0;

  @media ${device.mobile} {
    justify-content: right;
  }

  @media ${device.desktop} {
    justify-content: center;
  }
`

const StyledHeader = styled.header`
  background-color: white;
  color: black;
  height: 20vh;
  margin: auto;
  max-width: ${maxWidth};
  padding: 30px 80px;

  @media ${device.mobile} {
    padding: 30px 30px;
  }

  @media ${device.desktop} {
    padding: 30px 80px;
  }
`

const TitleSection = styled.div`
  font-family: "Noto Sans", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  display: flex;
`

const StyledH1 = styled(motion.h1)`
  color: black;
  flex: 2 1 0;
  font-family: 'Roboto Mono', 'Noto Sans', sans-serif;
  letter-spacing: 3px;

  @media ${device.mobile} {
    font-size: 26px;
  }

  @media ${device.desktop} {
    font-size: 34px;
  }
`

const StyledH2 = styled.h2`
  color: #444444;
  display: inline-block;

  @media ${device.mobile} {
    font-size: 16px;
  }
  @media ${device.desktop} {
    font-size: 24px;
  }
`

export default Header;