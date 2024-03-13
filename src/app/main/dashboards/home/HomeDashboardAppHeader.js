function HomeDashboardAppHeader() {
  const today = new Date().toLocaleString();
  return (
    <div className="flex w-full container">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center p-24 md:p-32 pb-0 md:pb-0">
        <div className="flex flex-col flex-auto">
          <h1 className="text-6xl font-bold tracking-tight leading-8"> Добро пожаловать!</h1>
        </div>
        <div className="">
          <div className="text-gray font-500"> {today}</div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboardAppHeader;
