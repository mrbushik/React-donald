import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';
import "./menu.css"

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = ({ setOpenItem }) => {

  const res = useFetch();
const dbMenu = res.response;
  return (
    <MenuStyled>
      <Banner />
   {dbMenu ?  
   <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
          </SectionMenu>
          <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
          </SectionMenu>
   </>:
        <div className="loadingio-spinner-gear-tyez33rkgf">
          <div className="ldio-nrqialalqvs">
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
        </div>
      </div>

      }
    </MenuStyled>
  );

}