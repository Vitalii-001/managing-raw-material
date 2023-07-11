export const formatTime = (minutes, seconds) => {
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return formattedMinutes + ':' + formattedSeconds;
};