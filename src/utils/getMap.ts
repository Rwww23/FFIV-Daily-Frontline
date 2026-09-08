
export const frontlineALL = [
    "尘封1",
    "碎冰",
    "草原1",
    "沃刻1",
    "尘封2",
    "阵地",
    "草原2",
    "沃刻2"
]

/*※北京时间每日23:00切换比赛模式。
版本 7.5 每日轮换：
尘封秘岩（争夺战）→荣誉野（碎冰战）→昂萨哈凯尔（竞争战）→沃刻其特（演习战）→尘封秘岩（争夺战）→周边遗迹群（阵地战）→昂萨哈凯尔（竞争战）→沃刻其特（演习战）（返回开头）*/
// CFMY - 碎冰 - 草原 - walk - cfmy - 阵地 - 草原 - walk

//基准时间与该日战场：8.23，碎冰
export const baseDate = new Date("2026-08-22T23:00:00+08:00"); //基准时间，2026年8月22日23:00起（北京时间），碎冰

export function getMapIndex(date: Date) {
    const diffTime = date.getTime() - baseDate.getTime();
    //const diffInDays = Math.floor(Math.abs(diffTime / (1000 * 60 * 60 * 24)));
    const diffInDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const frontlineIndex = ((1+diffInDays) % frontlineALL.length + frontlineALL.length) % frontlineALL.length;
    return frontlineIndex;
}

//当前时间与基准时间差值余数->当前战场
export function getMap(date: Date) {
    const frontlineIndex = getMapIndex(date);
    return frontlineALL[frontlineIndex];
}

