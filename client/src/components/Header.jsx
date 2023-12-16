import React from "react";
import styled from "styled-components";
import shareIcon from "../assets/share_icon.png";
import theme from "../style/theme";
import MongleLogo from "../assets/mongle_logo.png";


const Wrapper = styled.header`
  height: 62px;
  background: ${theme.colors.yellow2};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 8px 18px;
  box-sizing: border-box;
`;

const LogoWrapper = styled.div``;

const Logo = styled.a`
  display: block;
  width: 46px;
  height: 46px;
  background: url(${MongleLogo}) no-repeat center;
  background-size: contain;
  text-indent: -9999px;
`;

const Menu = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MenuUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
`;

const MenuShare = styled.li`
  display: block;
  list-style: none;
`;

const MenuShareBtn = styled.button`
  width: 24px;
  height: 24px;
  background: url(${shareIcon});
  background-size: cover;
  border: none;
  text-indent: -9999px;
  cursor: pointer;
`;


const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "쿠션어 제작기 - 몽글", // 공유될 제목
        url: "https://localhost:3000/", // 공유될 URL
      });
      console.log("공유 완료!");
    } catch (error) {
      console.error("공유 실패:", error);
    }
  } else {
    console.log("Web Share API를 지원하지 않는 브라우저입니다.");
  }
};

const Header = () => {
  return (
    <Wrapper>
    <LogoWrapper className="header_logo">
      <Logo href="/main">logo</Logo>
    </LogoWrapper>
    <Menu className="header_menu">
      <MenuUl>
        <MenuShare>
          <MenuShareBtn onClick={handleShare}>공유</MenuShareBtn>
        </MenuShare>
      </MenuUl>
    </Menu>
  </Wrapper>
  )

};

export default Header;
