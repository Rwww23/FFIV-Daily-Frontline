export function getCountdown(now: Date) {
    const refTime = new Date(now);
    //refTime.setHours(23, 0, 0, 0);
    refTime.setUTCHours(15, 0, 0, 0);
    //，，按UTC时间15时刷新算不就好了，这样直接传入UTC时间就行
    let timeDiff = refTime.getTime() - now.getTime();
    if (timeDiff < 0) {
        timeDiff += 24 * 60 * 60 * 1000; // Add 24 hours in milliseconds
    }
    return timeDiff;
}