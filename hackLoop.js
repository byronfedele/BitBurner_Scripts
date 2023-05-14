export async function main(ns) {
    const target = ns.args[0];
    var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
    var securityThresh = ns.getServerMinSecurityLevel(target) + 5;
    while (true) {
        const event = new Date()
        const timeStamp = event.toString();
        if (ns.getServerSecurityLevel(target) > securityThresh) {
            ns.print(timeStamp);
            await ns.weaken(target);
        } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            ns.print(timeStamp);
            await ns.grow(target);
        } else {
            ns.print(timeStamp);
            await ns.hack(target);
        }
    }
}