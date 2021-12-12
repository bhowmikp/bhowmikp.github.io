export const formatDate = (dateParam: string): string => {
    const date = new Date(dateParam);

    let day = date.toLocaleString('default', { day: 'numeric' });
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    switch (Number.parseInt(day, 10)) {
        case 1:
        case 21:
        case 31:
            day += 'st';
            break;
        case 2:
        case 22:
            day += 'nd';
            break;
        case 3:
        case 23:
            day += 'rd';
            break;
        default:
            day += 'th';
            break;
    }

    return `${day} ${month} ${year}`;
};

export default formatDate;
