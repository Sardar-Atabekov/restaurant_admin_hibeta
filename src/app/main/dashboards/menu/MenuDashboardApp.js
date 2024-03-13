import FusePageSimple from '@fuse/core/FusePageSimple';
import { useMemo, useState } from 'react';
import CustomSelect from '../home/customSelect/CustomSelect';
import AddCategory from './addCategory/AddCategory';
import MenuDashboardHeader from './MenuDashboardHeader';
import { Button } from '../home/button/Button';
import InstructionButton from '../home/buttonInstruction/InstructionButton';
import CategoriesOfAllDishes from './addCategory/СategoriesOfAllDishes';

function MenuDashboardApp() {
  const [status, setStatus] = useState(false);
  // eslint-disable-next-line prefer-const
  const [b, setB] = useState(true);
  const [products, setProducts] = useState();
  return (
    <FusePageSimple
      header={<MenuDashboardHeader />}
      content={
        <>
          {useMemo(() => {
            return (
              <div className="w-full">
                {status ? (
                  // <Outlet />
                  <CategoriesOfAllDishes
                    setStatus={setStatus}
                    products={products}
                    setProducts={setProducts}
                  />
                ) : (
                  <div className="w-full">
                    <div className="flex justify-between  ">
                      <div className="flex  ml-28 ">
                        <CustomSelect />
                        <Button />
                      </div>
                      <div className="mr-40">
                        <InstructionButton />
                      </div>
                    </div>
                    <AddCategory
                      status={status}
                      setStatus={setStatus}
                      setB={setB}
                      b={b}
                      setProducts={setProducts}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </>
      }
    />
  );
}

export default MenuDashboardApp;
