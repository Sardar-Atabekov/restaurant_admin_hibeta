import Typography from '@mui/material/Typography';

function ReportsDashboardHeader() {
  const today = new Date().toLocaleString();
  return (
    <div className="flex w-full container">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-24 md:p-32 pb-0 md:pb-0">
        <div className="flex justify-between w-full flex-auto">
          <Typography className="text-6xl font-bold tracking-tight leading-8">
            Пользователи
          </Typography>
          <div className="text-gray font-500  "> {today}</div>
        </div>
      </div>
    </div>
  );
}

export default ReportsDashboardHeader;
