const formateDate = (date) => {
    const newDate = new Date(date);
    const dateFormate = newDate.toLocaleString().split(",")[0]
    return dateFormate;
}

export {
    formateDate
}