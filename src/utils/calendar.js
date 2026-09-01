export const getGoogleCalendarUrl = (calendar) => {
  const { title, description, location, startDate, endDate } = calendar;
  const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const params = new URLSearchParams({
    text: title,
    dates: `${startDate}/${endDate}`,
    details: description,
    location: location
  });
  return `${baseUrl}&${params.toString()}`;
};

export const downloadIcsFile = (calendar) => {
  const { title, description, location, startDate, endDate } = calendar;
  
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Invitacion Boda//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `DTSTART:${startDate}`,
    `DTEND:${endDate}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${title.replace(/\s+/g, "_")}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
