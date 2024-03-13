const getDates = (dateStr) => {
  const dataForm = new Date(dateStr);
  return new Intl.DateTimeFormat('ru', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(dataForm);
};
export default getDates;
