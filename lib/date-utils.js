const formattedDate = (date = new Date()) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = ('0' + day).substr(-2);
    month = ('0'+month).substr(-2); 

    return `${year}${month}${day}`;
};


exports.formattedDate = formattedDate;