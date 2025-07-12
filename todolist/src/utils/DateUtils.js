const dateFormater = new Intl.DateTimeFormat("en-IN",{
    // dateStyle:"medium",
    hour12:true,
    hour:"numeric",
    minute:"numeric",
    year:"numeric",
    month:"short",
    day:"2-digit",
});

export const formateDate = (date) => dateFormater.format(date);