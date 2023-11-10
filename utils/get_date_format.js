export default function getDateFormat(timestamp) {
  const date = new Date(timestamp * 1000);

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  month = month < 10 ? "0" + month : month;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  var formattedDate =
    day + "." + month + "." + year + " " + hours + ":" + minutes;

  console.log(formattedDate);
  return formattedDate;
}
