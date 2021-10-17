import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

import TabA from './TabA'
import TabB from './TabB'

import * as S from "./styles";

const HomePage = () => {
  const [tabActive, setTabActive] = useState("A");
  const { state } = useLocation()
  const redirectTab = state?.tabActive
  console.log('🚀 ~ file: index.jsx ~ line 12 ~ HomePage ~ redirectTab', redirectTab);

  useEffect(() => {
    console.log('🚀 ~ file: index.jsx ~ line 17 ~ useEffect ~ redirectTab', redirectTab);
    if (redirectTab) setTabActive(redirectTab)
  }, [redirectTab])

  return (
    <div>
      Home Page
      <S.HomeHeader>
        <S.HomeTitle
          active={tabActive === "A"}
          onClick={() => setTabActive('A')}
        >
          Tab A
        </S.HomeTitle>
        <S.HomeTitle
          active={tabActive === "B"}
          onClick={() => setTabActive('B')}
        >
          Tab B
        </S.HomeTitle>
      </S.HomeHeader>
      {tabActive === 'A'
        ? <TabA />
        : <TabB redirectTab={redirectTab} />
      }
    </div>
  );
};

export default HomePage;
