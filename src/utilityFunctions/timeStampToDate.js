export const timeStampToDate = dateObj => {
    console.log(dateObj);
    console.log(dateObj.toDate());
    const dateString = dateObj.toDate().toString().split(' ');
    return dateString.splice(0, 4).join(' ')
}