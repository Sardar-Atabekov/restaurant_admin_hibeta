import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Payouts = () => {
  const location = useLocation();
  const g = location.pathname === `/dashboards/users`;
  return (
    <div className="flex justify-between bg-grey rounded-2xl mt-32 h-68 items-center ">
      <div className="flex w-384">
        <p className="text-2xl font-bold ml-20 pt-5 font-Nunito ">Мой отчет</p>
        <div className="flex text-center w-224 font-normal  justify-between bg-white p-8 rounded-3xl ml-10 ">
          <p>11.01.2022 </p>
          <p>-</p>
          <p> 18.01.2022</p>
          <img src="assets/icons/dataIcon.svg" alt="" />
        </div>
      </div>
      <Time>
        <NavLink
          to="/dashboards/users"
          className={({ isActive }) => (isActive && g ? 'active' : '')}
        >
          <p> Сегодня</p>
        </NavLink>
        <NavLink
          to="/dashboards/users/week"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <p> Неделя</p>
        </NavLink>
        <NavLink
          to="/dashboards/users/mounth"
          className={({ isActive }) => (isActive ? 'active' : 'kk')}
        >
          <p>Месяц</p>
        </NavLink>
        <NavLink
          to="/dashboards/users/years"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <p>Год</p>
        </NavLink>
      </Time>
    </div>
  );
};

export default Payouts;

const Time = styled.div`
  display: flex;
  background-color: white;
  width: 460px;
  margin-right: 20px;
  border-radius: 10px;
  a {
    color: #3c3756 !important;
    text-decoration: none !important;
    border-bottom: none;
    text-align: center;
    margin-left: 5px;
    margin-top: 10px;
    margin-right: 5px;
    width: 460px;
  }
  .active {
    color: white !important;
    background-color: #343eed;
    position: relative;
    bottom: 5px;
    border-radius: 5px;
    padding-top: 5px;
    width: 460px;
  }
  p {
    width: 100px;
    height: 32px;
    padding-top: 8px;
    position: relative;
    bottom: 5px;
    font-weight: normal;
  }
`;
