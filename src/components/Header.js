import React from 'react';
import styled from 'styled-components';
import Main from '../pages/Main';
import Search from './Search';

const Header = () => {
  const HeaderStyle = styled.div`
    background-image: url('images/background.jpg');
    height: 880px;
    background-size: 100% 100%;
  `;
  const NavStyle = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    padding: 10px;
  `;
  const Section1Style = styled.div``;

  const MenuStyle = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    list-style: none;
    color: white;
    font-weight: 800;
  `;

  const LogoStyle = styled.div`
    color: white;
    font-size: 25px;
    font-weight: 800;
  `;

  return (
    <div>
    <HeaderStyle>
      <NavStyle>
        <LogoStyle>
          <span role="img">💋airbnb😋</span>
        </LogoStyle>

        <MenuStyle>
          <li>호스트가 되어보세요</li>
          <li>도움말</li>
          <li>회원가입</li>
          <li>로그인</li>
        </MenuStyle>
      </NavStyle>
      <Section1Style>
        <Search />
      </Section1Style>
    </HeaderStyle>
    <Main/>
    </div>
  );
};

export default Header;
